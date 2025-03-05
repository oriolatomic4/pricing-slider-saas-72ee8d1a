
import React from "react";
import { cn } from "@/lib/utils";
import { Users, User } from "lucide-react";

type PlanType = "team" | "athlete";

interface PlanSelectorProps {
  selectedPlan: PlanType;
  onPlanChange: (plan: PlanType) => void;
}

const PlanSelector = ({ selectedPlan, onPlanChange }: PlanSelectorProps) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex items-center p-1 bg-gray-100 dark:bg-gray-800 rounded-lg transition-colors duration-200">
        <button
          onClick={() => onPlanChange("athlete")}
          className={cn(
            "flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-all duration-200",
            selectedPlan === "athlete"
              ? "bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white"
              : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          )}
        >
          <User className="w-5 h-5" />
          Athlete
        </button>
        <button
          onClick={() => onPlanChange("team")}
          className={cn(
            "flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-all duration-200",
            selectedPlan === "team"
              ? "bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white"
              : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          )}
        >
          <Users className="w-5 h-5" />
          Team
        </button>
      </div>
    </div>
  );
};

export default PlanSelector;
