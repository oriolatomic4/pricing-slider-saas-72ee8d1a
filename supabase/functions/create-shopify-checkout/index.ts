
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// CORS headers for browser requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Hardcoded Shopify credentials
const SHOPIFY_STORE_URL = "https://us-speed4lifts.myshopify.com";
const SHOPIFY_ACCESS_TOKEN = "df1b979dedc60278b7d56898bb2b69ee";

// Product mapping from our IDs to Shopify variant IDs
// This would ideally come from a database or API call
const PRODUCT_ID_MAPPING: Record<string, string> = {
  // Example mappings - these need to be replaced with actual Shopify variant IDs
  "encoder-device": "43089356226720", // Example Shopify variant ID for encoder
  "basic-plan": "43089356259488",     // Example Shopify variant ID for basic plan
  "pro-plan": "43089356292256",       // Example Shopify variant ID for pro plan
  "team-plan": "43089356325024",      // Example Shopify variant ID for team plan
  // Add more mappings for each product in your system
};

interface LineItem {
  priceId: string;
  quantity: number;
  name: string;
  amount: number;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Check if Shopify credentials are available
    if (!SHOPIFY_STORE_URL || !SHOPIFY_ACCESS_TOKEN) {
      console.error('Missing Shopify credentials');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Parse request body
    const { lineItems } = await req.json();
    
    if (!lineItems || !Array.isArray(lineItems) || lineItems.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Invalid line items' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Creating Shopify checkout with line items:', lineItems);

    // Create a draft order with variants if available, or custom line items as fallback
    const draft_order: any = {
      line_items: [],
      note: 'Order from Vitruve website'
    };

    // Process each line item
    for (const item of lineItems) {
      const shopifyVariantId = PRODUCT_ID_MAPPING[item.priceId];
      
      if (shopifyVariantId) {
        // If we have a mapping, use the variant_id approach
        draft_order.line_items.push({
          variant_id: shopifyVariantId,
          quantity: item.quantity
        });
      } else {
        // Fallback to custom line items if no mapping exists
        draft_order.line_items.push({
          title: item.name,
          price: (item.amount / 100).toFixed(2), // Convert cents to dollars
          quantity: item.quantity,
          requires_shipping: false
        });
      }
    }

    console.log('Sending to Shopify:', draft_order);

    // Create a Shopify checkout draft order
    const response = await fetch(`${SHOPIFY_STORE_URL}/admin/api/2023-10/draft_orders.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': SHOPIFY_ACCESS_TOKEN
      },
      body: JSON.stringify({ draft_order })
    });

    if (!response.ok) {
      console.error('Shopify API error:', await response.text());
      return new Response(
        JSON.stringify({ error: 'Failed to create checkout' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    console.log('Shopify checkout created:', data);
    
    // Get the checkout URL
    const checkoutUrl = data.draft_order.invoice_url;
    
    return new Response(
      JSON.stringify({ url: checkoutUrl }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error creating Shopify checkout:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
