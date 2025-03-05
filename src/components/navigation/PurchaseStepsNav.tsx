
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";

// Define the step structure
interface PurchaseStep {
  number: number;
  label: string;
  path: string;
}

// Define the purchase flow steps
const purchaseSteps: PurchaseStep[] = [
  { number: 1, label: "Select Plan", path: "/pricing" },
  { number: 2, label: "Add Encoders", path: "/encoder-selection" },
  { number: 3, label: "Add Accessories", path: "/accessories" },
  { number: 4, label: "Checkout", path: "/checkout" }
];

export function PurchaseStepsNav() {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Determine the current step based on the path
  const getCurrentStepIndex = () => {
    const index = purchaseSteps.findIndex(step => step.path === currentPath);
    return index >= 0 ? index : 0; // Default to first step if not found
  };
  
  const currentStepIndex = getCurrentStepIndex();

  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black transition-colors duration-200 py-4">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-center">
          <ol className="flex items-center w-full max-w-3xl">
            {purchaseSteps.map((step, index) => {
              // Determine the status of this step
              const isCompleted = index < currentStepIndex;
              const isCurrent = index === currentStepIndex;
              const isPending = index > currentStepIndex;
              
              return (
                <li key={step.path} className="relative flex items-center">
                  {/* Step connector (not for the first step) */}
                  {index !== 0 && (
                    <div 
                      className={cn(
                        "absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[2px] w-12",
                        isCompleted ? "bg-vitruve-purple" : "bg-gray-300 dark:bg-gray-700"
                      )}
                    ></div>
                  )}
                  
                  {/* Step node and label */}
                  <div className="flex flex-col items-center">
                    <Link
                      to={isCompleted ? step.path : "#"}
                      className={cn(
                        "flex items-center justify-center rounded-full w-10 h-10 text-sm relative z-10",
                        isCompleted ? 
                          "bg-vitruve-purple text-white" : 
                          isCurrent ? 
                            "border-2 border-vitruve-purple text-vitruve-purple bg-white dark:bg-black" : 
                            "border-2 border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 bg-white dark:bg-black"
                      )}
                    >
                      {isCompleted ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <span className="font-medium">{step.number}</span>
                      )}
                    </Link>
                    
                    <span 
                      className={cn(
                        "mt-2 text-xs font-medium whitespace-nowrap px-3 py-1 rounded-full",
                        isCurrent ? 
                          "bg-vitruve-purple/10 text-vitruve-purple" : 
                          isCompleted ? 
                            "text-vitruve-purple" : 
                            "text-gray-500 dark:text-gray-400"
                      )}
                    >
                      {step.label}
                    </span>
                  </div>
                  
                  {/* The last step doesn't need a line after it */}
                  {index !== purchaseSteps.length - 1 && (
                    <div 
                      className={cn(
                        "h-[2px] w-12",
                        index < currentStepIndex ? "bg-vitruve-purple" : "bg-gray-300 dark:bg-gray-700"
                      )}
                    ></div>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </nav>
  );
}
