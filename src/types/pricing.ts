
export interface PricingTier {
  id?: string;
  name: string;
  description: string;
  features: string[];
  highlight?: boolean;
  price?: number;
}
