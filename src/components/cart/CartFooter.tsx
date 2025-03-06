
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

interface CartFooterProps {
  subtotal: number;
  nextPath: string;
  onClose?: () => void;
}

export const CartFooter = ({ subtotal, nextPath, onClose }: CartFooterProps) => {
  return (
    <div className="p-5 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="space-y-2 mb-5">
        <div className="flex justify-between text-base">
          <span className="font-semibold text-gray-700 dark:text-gray-300">Subtotal</span>
          <span className="font-semibold text-gray-900 dark:text-gray-200">€{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-500">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between text-base font-bold pt-2 border-t border-gray-200 dark:border-gray-800">
          <span className="text-gray-900 dark:text-gray-200">Total Due</span>
          <span className="text-gray-900 dark:text-white">€{subtotal.toFixed(2)}</span>
        </div>
      </div>
      
      <div className="space-y-3">
        <Button 
          className="w-full bg-vitruve-purple hover:bg-vitruve-purple/90 text-white font-bold py-5 text-base rounded-full"
          asChild
        >
          <Link to={nextPath} onClick={onClose}>
            CONTINUE
          </Link>
        </Button>
        
        <Button
          variant="outline"
          className="w-full text-gray-700 dark:text-gray-300 py-4 border-gray-300 dark:border-gray-700"
          onClick={onClose}
        >
          <ShoppingBag className="mr-2 h-4 w-4" />
          Continue Shopping
        </Button>
      </div>
    </div>
  );
};
