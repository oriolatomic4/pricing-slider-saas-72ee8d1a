
import React from "react";
import { X, Plus, Minus, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CartItemProps {
  name: string;
  description?: string;
  price: number;
  quantity: number;
  showQuantity?: boolean;
  allowQuantityChange?: boolean;
  image?: string;
  onRemove?: () => void;
  onIncrement?: () => void;
  onDecrement?: () => void;
  itemId: string;
  shopifyVariantId?: string; // Added Shopify variant ID
}

export const CartItem = ({
  name,
  description,
  price,
  quantity = 1,
  showQuantity = true,
  allowQuantityChange = false,
  image,
  onRemove,
  onIncrement,
  onDecrement,
  itemId,
  shopifyVariantId // Add this to the props destructuring
}: CartItemProps) => {
  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center">
        <div className="mr-4 w-20 h-20 overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          {image ? (
            <img src={image} alt={name} className="object-cover w-full h-full" />
          ) : (
            <Package className="w-10 h-10 text-gray-400 dark:text-gray-600" />
          )}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-gray-200">{name}</h4>
          {description && <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>}
          <p className="text-sm font-medium text-vitruve-purple">€{price.toFixed(2)}</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        {allowQuantityChange && (
          <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-md">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 p-0"
              onClick={onDecrement}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="px-2 text-sm text-gray-700 dark:text-gray-300">{quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 p-0"
              onClick={onIncrement}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        )}
        
        {showQuantity && !allowQuantityChange && (
          <span className="text-sm text-gray-700 dark:text-gray-300 mr-3">Quantity: {quantity}</span>
        )}
        
        {onRemove && (
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 p-0 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400"
            onClick={onRemove}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};
