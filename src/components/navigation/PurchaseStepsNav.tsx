
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { CheckCircle, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { ToggleTheme } from "./ToggleTheme";
import { setCartSidebarState } from "@/lib/utils";

interface PurchaseStep {
  number: number;
  label: string;
  path: string;
}

const purchaseSteps: PurchaseStep[] = [
  { number: 1, label: "Select Plan", path: "/pricing" },
  { number: 2, label: "Add Encoders", path: "/encoder-selection" },
  { number: 3, label: "Add Accessories", path: "/accessories" }
];

export function PurchaseStepsNav() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { getCartItemCount } = useCart();
  const itemCount = getCartItemCount();
  
  const getCurrentStepIndex = () => {
    const index = purchaseSteps.findIndex(step => step.path === currentPath);
    return index >= 0 ? index : 0;
  };
  
  const currentStepIndex = getCurrentStepIndex();
  
  const handleOpenCart = () => {
    setCartSidebarState(true);
  };

  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black transition-colors duration-200 py-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center">
        <div className="mr-auto">
          <a href="/" className="flex-shrink-0">
            <img 
              src="/lovable-uploads/27b3d0c5-8329-4e05-b241-0097233e82ea.png" 
              alt="Vitruve Logo" 
              className="h-12"
            />
          </a>
        </div>
        
        <div className="flex justify-center flex-1">
          <ol className="flex items-center w-full max-w-xl">
            {purchaseSteps.map((step, index) => {
              const isCompleted = index < currentStepIndex;
              const isCurrent = index === currentStepIndex;
              
              return (
                <li key={step.path} className="relative flex-1 flex flex-col items-center">
                  <div className="flex items-center">
                    {index !== 0 && (
                      <div 
                        className={cn(
                          "absolute h-[2px] w-full -left-1/2 top-5 -translate-y-1/2",
                          isCompleted ? "bg-vitruve-purple" : "bg-gray-300 dark:bg-gray-700"
                        )}
                      />
                    )}
                    
                    <Link
                      to={isCompleted ? step.path : "#"}
                      className={cn(
                        "z-10 flex items-center justify-center rounded-full w-10 h-10 text-sm",
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
                  </div>
                  
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
                </li>
              );
            })}
          </ol>
        </div>
        
        <div className="ml-auto flex items-center space-x-2">
          <Button
            variant="ghost"
            className="relative p-2"
            onClick={handleOpenCart}
            aria-label="Open Cart"
          >
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-black dark:bg-vitruve-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Button>
          <ToggleTheme />
        </div>
      </div>
    </nav>
  );
}
