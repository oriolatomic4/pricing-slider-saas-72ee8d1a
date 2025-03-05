
import React from "react";
import { ChevronDown } from "lucide-react";

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
    <div className="py-5 mb-4">
      <div className="flex items-start gap-4">
        {image && (
          <div className="w-20 h-20 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden flex-shrink-0">
            <img src={image} alt={name} className="w-full h-full object-contain" />
          </div>
        )}
        
        <div className="flex-1">
          <h4 className="font-bold text-lg text-gray-900 dark:text-white">{name}</h4>
          <p className="text-gray-500 dark:text-gray-400">{description}</p>
        </div>
        
        <div className="text-right flex flex-col items-end">
          <div className="font-bold text-lg">
            {typeof price === 'number' ? `€${price.toFixed(2)}` : price}
          </div>
          {showQuantity && (
            <div className="text-gray-500 dark:text-gray-400 flex items-center mt-1">
              Qty: {quantity} {allowQuantityChange && <ChevronDown className="ml-1 h-4 w-4" />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
