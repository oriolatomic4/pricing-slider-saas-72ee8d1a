import { useState } from "react";
import PricingCard from "@/components/pricing/PricingCard";
import PlanSelector from "@/components/pricing/PlanSelector";
import PlanDisplay from "@/components/pricing/PlanDisplay";
import { PricingTier } from "@/types/pricing";

const teamPricingData: PricingTier[] = [
  {
    id: "free",
    name: "Free",
    description: "Perfect for getting started",
    price: 0,
    features: ["1 athlete", "Visualize and export data up to 30 days ago"],
    shopifyProductId: "free-plan", 
    shopifyVariantId: "14937944162630", // Updated with the Free variant ID
  },
  {
    id: "basic",
    name: "Basic",
    description: "Great for small teams",
    price: 800,
    features: [
      "Unlimited athletes",
      "Visualize and export data up to 30 days ago",
      "Leaderboards",
    ],
    shopifyProductId: "basic-plan",
    shopifyVariantId: "53604973904198", // Updated with the Basic variant ID
  },
  {
    id: "elite",
    name: "Elite",
    description: "For growing organizations",
    highlight: true,
    price: 1200,
    features: [
      "All in Basic +",
      "Visualize and export data up to 180 days ago",
      "Wellness tests",
      "Insurance",
      "Athletes security",
      "Automatic weight suggestion",
      "3rd party Integrations",
    ],
    shopifyProductId: "elite-plan",
    shopifyVariantId: "53604973936966", // Updated with the Elite variant ID
  },
  {
    id: "professional",
    name: "Professional",
    description: "For large enterprises",
    price: 2200,
    features: [
      "All in Elite +",
      "API access",
      "Multicoach",
      "Free replacements for new version of hardware",
    ],
    shopifyProductId: "professional-plan",
    shopifyVariantId: "53604973969734", // Updated with the Pro variant ID
  },
];

const athletePricingData: PricingTier[] = [
  {
    id: "athlete-free",
    name: "Athlete Free",
    description: "Perfect for individual athletes",
    price: 0,
    features: [
      "1 account",
      "Basic performance tracking",
      "Data visualization for 15 days",
      "Export basic reports"
    ],
    shopifyProductId: "athlete-free-plan",
    shopifyVariantId: "14937944162630", // Using the Free variant ID
  },
  {
    id: "athlete-pro",
    name: "Athlete PRO",
    description: "For serious athletes",
    highlight: true,
    price: 480,
    features: [
      "Advanced performance metrics",
      "Data visualization for 90 days",
      "Personalized training recommendations",
      "Export advanced reports",
      "Connect with coaches",
      "Integration with fitness apps"
    ],
    shopifyProductId: "athlete-pro-plan",
    shopifyVariantId: "53604973969734", // Using the Pro variant ID (since there's no specific athlete-pro)
  },
];

const Pricing = () => {
  const [selectedTab, setSelectedTab] = useState<"team" | "athlete">("team");

  return (
    <div className="pt-16 pb-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-black dark:text-white">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-gray-700 dark:text-white/70 mb-8 transition-colors duration-200">
            Choose the perfect plan for your team
          </p>

          <PlanSelector 
            selectedPlan={selectedTab} 
            onPlanChange={setSelectedTab} 
          />
        </div>

        <PlanDisplay 
          pricingData={selectedTab === "team" ? teamPricingData : athletePricingData}
          planType={selectedTab}
        />
      </div>
    </div>
  );
};

export default Pricing;
