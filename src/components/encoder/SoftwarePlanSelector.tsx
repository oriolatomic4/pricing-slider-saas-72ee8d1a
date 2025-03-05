
import React from "react";
import { cn } from "@/lib/utils";

export interface SoftwarePlan {
  id: string;
  name: string;
  price: number;
}

interface SoftwarePlanSelectorProps {
  plans: SoftwarePlan[];
  selectedPlan: string;
  onPlanChange: (planId: string) => void;
}

const SoftwarePlanSelector = ({ 
  plans, 
  selectedPlan, 
  onPlanChange 
}: SoftwarePlanSelectorProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium text-gray-900 dark:text-white">
        Selected Software Plan
      </h2>
      
      <div className="grid grid-cols-4 gap-2">
        {plans.map((plan) => (
          <button
            key={plan.id}
            onClick={() => onPlanChange(plan.id)}
            className={cn(
              "py-2 px-3 rounded-md text-center text-sm font-medium",
              selectedPlan === plan.id
                ? "bg-vitruve-purple text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
            )}
          >
            {plan.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SoftwarePlanSelector;
