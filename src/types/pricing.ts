
export interface PricingTier {
  id?: string;
  name: string;
  description: string;
  features: string[];
  highlight?: boolean;
  price?: number;
  shopifyProductId?: string; // This is already here
  shopifyVariantId?: string; // This is already here
}
