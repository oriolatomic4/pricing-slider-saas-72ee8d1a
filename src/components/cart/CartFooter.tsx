
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CartFooterProps {
  subtotal: number;
  nextPath: string;
}

export const CartFooter = ({ subtotal, nextPath }: CartFooterProps) => {
  return (
    <div className="p-5 border-t border-gray-700 dark:border-gray-700 bg-black dark:bg-black">
      <div className="space-y-2 mb-5">
        <div className="flex justify-between text-base">
          <span className="font-semibold text-gray-300 dark:text-gray-300">Subtotal</span>
          <span className="font-semibold text-gray-200 dark:text-gray-200">€{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-400 dark:text-gray-400">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between text-base font-bold pt-2 border-t border-gray-700 dark:border-gray-700">
          <span className="text-gray-200 dark:text-gray-200">Total Due</span>
          <span className="text-gray-100 dark:text-gray-100">€{subtotal.toFixed(2)}</span>
        </div>
      </div>
      
      <Button 
        className="w-full bg-vitruve-purple hover:bg-vitruve-purple/90 text-white dark:text-white font-bold py-5 text-base rounded-full"
        asChild
      >
        <Link to={nextPath}>
          CONTINUE
        </Link>
      </Button>
    </div>
  );
};
