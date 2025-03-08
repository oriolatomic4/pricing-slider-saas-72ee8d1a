
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// CORS headers for browser requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
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
    // Get Shopify credentials from environment variables
    const SHOPIFY_STORE_URL = Deno.env.get('SHOPIFY_STORE_URL');
    const SHOPIFY_ACCESS_TOKEN = Deno.env.get('SHOPIFY_ACCESS_TOKEN');
    
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

    // Format line items for Shopify
    const shopifyLineItems = lineItems.map((item: LineItem) => ({
      quantity: item.quantity,
      price: (item.amount / 100).toFixed(2), // Convert cents to dollars
      title: item.name,
      id: item.priceId
    }));

    // Create a Shopify checkout draft order
    const response = await fetch(`${SHOPIFY_STORE_URL}/admin/api/2023-10/draft_orders.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': SHOPIFY_ACCESS_TOKEN
      },
      body: JSON.stringify({
        draft_order: {
          line_items: shopifyLineItems,
          note: 'Order from Vitruve website'
        }
      })
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
