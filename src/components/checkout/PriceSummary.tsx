
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";

interface PriceSummaryProps {
  subtotal: number;
  isProcessing: boolean;
  onPlaceOrder: () => void;
}

const PriceSummary = ({ 
  subtotal, 
  isProcessing, 
  onPlaceOrder 
}: PriceSummaryProps) => {
  return (
    <div className="p-6">
      <div className="space-y-4 mb-6">
        <div className="flex justify-between text-base">
          <span className="font-semibold text-gray-600 dark:text-gray-300">Subtotal</span>
          <span className="font-semibold text-black dark:text-white">€{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500 dark:text-gray-400">Shipping</span>
          <span className="text-gray-500 dark:text-gray-400">Free</span>
        </div>
        <div className="flex justify-between text-base font-bold pt-4 border-t border-gray-200 dark:border-gray-800">
          <span className="text-black dark:text-white">Total</span>
          <span className="text-vitruve-purple">€{subtotal.toFixed(2)}</span>
        </div>
      </div>

      <div className="space-y-4">
        <Button 
          onClick={onPlaceOrder}
          className="w-full bg-vitruve-purple hover:bg-vitruve-purple/90 text-white font-bold py-5 text-base rounded-full"
          disabled={subtotal <= 0 || isProcessing}
        >
          {isProcessing ? (
            <>Processing...</>
          ) : (
            <>
              <Check className="mr-2 h-5 w-5" />
              PLACE ORDER
            </>
          )}
        </Button>
        
        <Button
          variant="outline"
          className="w-full py-4 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200"
          asChild
          disabled={isProcessing}
        >
          <Link to="/accessories">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Accessories
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default PriceSummary;
