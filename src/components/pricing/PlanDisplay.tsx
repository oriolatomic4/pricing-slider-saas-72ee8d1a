
import React from "react";
import PricingCard from "./PricingCard";
import { PricingTier } from "@/types/pricing";

interface PlanDisplayProps {
  pricingData: PricingTier[];
  planType: "team" | "athlete";
}

const PlanDisplay = ({ pricingData, planType }: PlanDisplayProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in">
      {planType === "team" ? (
        pricingData.map((tier, i) => (
          <PricingCard key={i} tier={tier} />
        ))
      ) : (
        <>
          {pricingData.map((tier, i) => (
            <div key={i} className={`col-span-1 md:col-span-1 ${i === 0 && pricingData.length === 2 ? 'lg:col-start-2' : ''} ${i === 1 && pricingData.length === 2 ? 'lg:col-start-3' : ''}`}>
              <PricingCard tier={tier} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default PlanDisplay;
