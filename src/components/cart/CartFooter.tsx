
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CartFooterProps {
  subtotal: number;
  nextPath: string;
}

export const CartFooter = ({ subtotal, nextPath }: CartFooterProps) => {
  return (
    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span className="font-semibold">Subtotal</span>
          <span className="font-semibold">€{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-500 dark:text-gray-400">
          <span>Shipping</span>
          <span>FREE</span>
        </div>
        <div className="flex justify-between text-xl font-bold pt-2 border-t border-gray-200 dark:border-gray-700">
          <span>Total</span>
          <span>€{subtotal.toFixed(2)}</span>
        </div>
      </div>
      
      <Button 
        className="w-full bg-black hover:bg-black/90 text-white font-bold py-3 text-lg"
        asChild
      >
        <Link to={nextPath}>
          CONTINUE
        </Link>
      </Button>
    </div>
  );
};
