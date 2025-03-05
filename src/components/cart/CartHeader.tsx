
import React from "react";
import { ShoppingCart } from "lucide-react";

export const CartHeader = () => {
  return (
    <div className="p-4 border-b border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-bold flex items-center">
        <ShoppingCart className="mr-2 h-5 w-5" />
        YOUR CART
      </h2>
    </div>
  );
};
