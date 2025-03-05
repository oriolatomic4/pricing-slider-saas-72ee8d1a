
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
interface PricingTier {
  name: string;
  description: string;
  features: string[];
  highlight?: boolean;
  prices?: {
    hw: number[];
    sw: number[];
    total: number[];
  };
}
const pricingData: PricingTier[] = [{
  name: "Free",
  description: "Perfect for getting started",
  features: ["1 athlete", "Visualize and export data up to 30 days ago"]
}, {
  name: "Basic",
  description: "Great for small teams",
  prices: {
    hw: [240, 480, 720, 960, 1200, 1440],
    sw: [380, 656, 893, 1104, 1296, 1474],
    total: [620, 1136, 1613, 2064, 2496, 2914]
  },
  features: ["Unlimited athletes", "Visualize and export data up to 30 days ago", "Leaderboards"]
}, {
  name: "Elite",
  description: "For growing organizations",
  highlight: true,
  prices: {
    hw: [240, 480, 720, 960, 1200, 1440],
    sw: [532, 918, 1250, 1546, 1815, 2063],
    total: [772, 1398, 1970, 2506, 3015, 3503]
  },
  features: ["All in Basic +", "Visualize and export data up to 180 days ago", "Wellness tests", "Insurance", "Athletes security", "Automatic weight suggestion", "3rd party Integrations"]
}, {
  name: "Professional",
  description: "For large enterprises",
  prices: {
    hw: [240, 480, 720, 960, 1200, 1440],
    sw: [1011, 873, 792, 734, 690, 653],
    total: [1251, 2225, 3095, 3897, 4649, 5360]
  },
  features: ["All in Elite +", "API access", "Multicoach", "Free replacements for new version of hardware"]
}];
const PricingCard = ({
  tier,
  units
}: {
  tier: PricingTier;
  units: number;
}) => {
  const showSales = units > 6;
  const priceIndex = Math.min(units - 1, 5);
  return <div className={cn("relative flex flex-col p-6 rounded-2xl transition-all duration-300", "glass card-shadow hover:shadow-lg", tier.highlight && "ring-2 ring-vitruve-purple shadow-lg scale-[1.02]")}>
      <div className="flex-1">
        <h3 className="text-2xl font-semibold leading-tight mb-1 text-gray-900 dark:text-white transition-colors duration-200">
          {tier.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>

        {!showSales && tier.prices ? <div className="space-y-2 mb-6">
            <p className="text-3xl font-bold text-vitruve-cyan">
              ${tier.prices.total[priceIndex].toLocaleString()}
              <span className="text-sm font-normal text-muted-foreground">
                /year
              </span>
            </p>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Hardware: ${tier.prices.hw[priceIndex].toLocaleString()}</p>
              <p>Software: ${tier.prices.sw[priceIndex].toLocaleString()}</p>
            </div>
          </div> : tier.name === "Free" ? <p className="text-3xl font-bold text-vitruve-cyan mb-6">
            $0
            <span className="text-sm font-normal text-muted-foreground">
              /forever
            </span>
          </p> : <div className="mb-6">
            <p className="text-2xl font-semibold text-vitruve-cyan">Talk to sales</p>
          </div>}

        <ul className="space-y-3 mb-6">
          {tier.features.map((feature, i) => <li key={i} className="flex items-start gap-2">
              <Check className="w-5 h-5 text-vitruve-cyan shrink-0" />
              <span className="text-sm text-gray-700 dark:text-white/90 transition-colors duration-200">{feature}</span>
            </li>)}
        </ul>
      </div>

      <Button className={cn("w-full", tier.highlight ? "bg-vitruve-purple text-white hover:bg-vitruve-purple/90" : "bg-vitruve-cyan text-black hover:bg-vitruve-cyan/90")}>
        {showSales ? "Contact Sales" : "Get Started"}
      </Button>
    </div>;
};
const PricingSection = () => {
  const [units, setUnits] = useState<number>(1);
  return <div className="py-24 bg-white dark:bg-black transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white transition-colors duration-200">
              Simple, transparent
            </span>
            <span className="text-gray-900 dark:text-white transition-colors duration-200"> pricing</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-white/70 transition-colors duration-200 mb-8">
            Choose the perfect plan for your team
          </p>

          <div className="max-w-xl mx-auto">
            <label className="block text-sm font-medium text-gray-900 dark:text-white transition-colors duration-200 mb-2">
              How many encoders do you need?
            </label>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-900 dark:text-white transition-colors duration-200">1</span>
              <Slider value={[units]} onValueChange={value => setUnits(value[0])} max={7} min={1} step={1} className="flex-1" />
              <span className="text-sm text-gray-900 dark:text-white transition-colors duration-200">6+</span>
            </div>
            <p className="text-sm text-gray-700 dark:text-white/70 transition-colors duration-200 mt-2">
              Selected: {units > 6 ? "6+" : units} encoder{units !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in">
          {pricingData.map((tier, i) => <PricingCard key={i} tier={tier} units={units} />)}
        </div>
      </div>
    </div>;
};
export default PricingSection;
