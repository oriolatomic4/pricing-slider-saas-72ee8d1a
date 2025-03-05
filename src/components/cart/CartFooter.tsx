
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CartFooterProps {
  subtotal: number;
  nextPath: string;
}

export const CartFooter = ({ subtotal, nextPath }: CartFooterProps) => {
  return (
    <div className="p-6 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-lg">
          <span className="font-semibold">Subtotal</span>
          <span className="font-semibold">€{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-500 dark:text-gray-400">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between text-xl font-bold pt-3 border-t border-gray-200 dark:border-gray-700">
          <span>Total Due</span>
          <span>€{subtotal.toFixed(2)}</span>
        </div>
      </div>
      
      <Button 
        className="w-full bg-black dark:bg-white hover:bg-black/90 dark:hover:bg-white/90 text-white dark:text-black font-bold py-6 text-lg rounded-full"
        asChild
      >
        <Link to={nextPath}>
          CONTINUE
        </Link>
      </Button>
    </div>
  );
};
