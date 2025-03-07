
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { lineItems } = await req.json();
    
    console.log('Received line items:', JSON.stringify(lineItems, null, 2));
    
    if (!lineItems || !Array.isArray(lineItems) || lineItems.length === 0) {
      return new Response(
        JSON.stringify({ error: 'No valid line items provided' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }

    // Access Shopify configuration from environment variables with fallbacks
    const SHOPIFY_DOMAIN = Deno.env.get("SHOPIFY_DOMAIN") || 
                           Deno.env.get("SUPABASE_PARAMS_SHOPIFY_DOMAIN") || 
                           "us-speed4lifts.myshopify.com";
                           
    const SHOPIFY_STOREFRONT_ACCESS_TOKEN = Deno.env.get("SHOPIFY_STOREFRONT_ACCESS_TOKEN") || 
                                           Deno.env.get("SUPABASE_PARAMS_SHOPIFY_STOREFRONT_ACCESS_TOKEN") || 
                                           "df1b979dedc60278b7d56898bb2b69ee";
    
    console.log('Using Shopify Domain:', SHOPIFY_DOMAIN);
    console.log('Access Token Available:', SHOPIFY_STOREFRONT_ACCESS_TOKEN ? 'Yes' : 'No');
    
    if (!SHOPIFY_DOMAIN || !SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
      return new Response(
        JSON.stringify({ 
          error: 'Missing Shopify configuration',
          details: {
            hasDomain: !!SHOPIFY_DOMAIN,
            hasToken: !!SHOPIFY_STOREFRONT_ACCESS_TOKEN
          }
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      );
    }

    const storefrontApiUrl = `https://${SHOPIFY_DOMAIN}/api/2023-07/graphql.json`;

    // Prepare line items for the GraphQL mutation
    // IMPORTANT: Shopify GraphQL API requires variant IDs to be base64 encoded with a prefix
    const graphQLLineItems = lineItems.map(item => {
      // Base64 encode the variant ID with the required prefix if it's not already in the right format
      let variantId = item.variantId;
      if (!variantId.startsWith('gid://')) {
        variantId = `gid://shopify/ProductVariant/${item.variantId}`;
      }
      
      return {
        variantId: btoa(variantId),
        quantity: item.quantity
      };
    });

    // Create checkout using Shopify Storefront API
    const mutation = `
      mutation checkoutCreate($input: CheckoutCreateInput!) {
        checkoutCreate(input: $input) {
          checkout {
            id
            webUrl
            lineItems(first: 5) {
              edges {
                node {
                  id
                  title
                  quantity
                }
              }
            }
          }
          checkoutUserErrors {
            code
            field
            message
          }
        }
      }
    `;

    const variables = {
      input: {
        lineItems: graphQLLineItems,
        allowPartialAddresses: true
      }
    };

    console.log('Sending GraphQL request to Shopify:', JSON.stringify(variables, null, 2));
    console.log('Shopify API URL:', storefrontApiUrl);

    const response = await fetch(storefrontApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      },
      body: JSON.stringify({ query: mutation, variables }),
    });

    const result = await response.json();
    console.log('Shopify API response:', JSON.stringify(result, null, 2));

    if (result.errors) {
      return new Response(
        JSON.stringify({ error: 'Shopify API Error', details: result.errors }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      );
    }

    if (result.data?.checkoutCreate?.checkoutUserErrors?.length > 0) {
      return new Response(
        JSON.stringify({ 
          error: 'Checkout Creation Error', 
          details: result.data.checkoutCreate.checkoutUserErrors 
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }

    // Return checkout URL to redirect the user
    return new Response(
      JSON.stringify({ 
        url: result.data.checkoutCreate.checkout.webUrl,
        checkoutId: result.data.checkoutCreate.checkout.id 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in create-shopify-checkout function:', error);
    
    return new Response(
      JSON.stringify({ error: 'Internal Server Error', details: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});
