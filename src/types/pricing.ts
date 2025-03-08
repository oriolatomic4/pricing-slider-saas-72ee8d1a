
export interface PricingTier {
  id?: string;
  name: string;
  description: string;
  features: string[];
  highlight?: boolean;
  price?: number;
  shopifyProductId?: string; // Add Shopify product ID
  shopifyVariantId?: string; // Add Shopify variant ID
}
