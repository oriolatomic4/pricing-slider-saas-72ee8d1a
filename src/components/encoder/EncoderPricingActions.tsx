
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SoftwarePlan } from "./SoftwarePlanSelector";

interface EncoderPricingActionsProps {
  encoderCount: number | string;
  basePrice: number;
  selectedPlan: SoftwarePlan;
}

const EncoderPricingActions = ({ 
  encoderCount, 
  basePrice,
  selectedPlan 
}: EncoderPricingActionsProps) => {
  const isCustomQuote = encoderCount === "+6";

  return (
    <div className="space-y-5">
      <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
        <p>
          Total Software: ${selectedPlan.price}
          {!isCustomQuote && <span className="ml-2">+ Hardware: €{(Number(encoderCount) * basePrice).toFixed(2)}</span>}
        </p>
      </div>
      
      {isCustomQuote ? (
        <Button 
          className="w-full bg-vitruve-purple hover:bg-vitruve-purple/90 text-white py-6 text-lg"
        >
          Talk to Sales
        </Button>
      ) : (
        <div className="flex gap-4">
          <Button 
            variant="outline"
            className="flex-1 py-6"
            asChild
          >
            <Link to="/accessories">Skip Step</Link>
          </Button>
          <Button 
            className="flex-1 bg-vitruve-purple hover:bg-vitruve-purple/90 text-white py-6"
            asChild
          >
            <Link to="/accessories">Continue</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default EncoderPricingActions;
