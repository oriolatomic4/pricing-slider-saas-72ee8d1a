
import React from "react";

interface CartItemProps {
  name: string;
  description: string;
  price: number | string;
  quantity?: number;
  image?: string;
}

export const CartItem = ({ name, description, price, quantity = 1, image }: CartItemProps) => {
  return (
    <div className="py-4 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-3">
        {image && (
          <div className="w-16 h-16 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
        )}
        
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 dark:text-white">{name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
        </div>
        
        <div className="text-right">
          <div className="font-semibold">
            {typeof price === 'number' ? `€${price.toFixed(2)}` : price}
          </div>
          {quantity > 1 && (
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Qty: {quantity}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
