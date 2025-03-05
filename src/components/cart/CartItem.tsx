
import React from "react";
import { ChevronDown, Package, Image } from "lucide-react";

interface CartItemProps {
  name: string;
  description: string;
  price: number | string;
  quantity?: number;
  image?: string;
  showQuantity?: boolean;
  allowQuantityChange?: boolean;
}

export const CartItem = ({ 
  name, 
  description, 
  price, 
  quantity = 1, 
  image, 
  showQuantity = true,
  allowQuantityChange = false
}: CartItemProps) => {
  return (
    <div className="py-3 mb-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="flex items-start gap-3 px-4">
        <div className="w-16 h-16 rounded-md bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden flex-shrink-0">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-contain" />
          ) : (
            <Package className="w-8 h-8 text-gray-400 dark:text-gray-500" />
          )}
        </div>
        
        <div className="flex-1">
          <h4 className="font-bold text-base text-gray-900 dark:text-white">{name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
        </div>
        
        <div className="text-right flex flex-col items-end">
          <div className="font-bold text-base text-gray-900 dark:text-white">
            {typeof price === 'number' ? `€${price.toFixed(2)}` : price}
          </div>
          {showQuantity && (
            <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center mt-1">
              Qty: {quantity} {allowQuantityChange && <ChevronDown className="ml-1 h-3.5 w-3.5" />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
