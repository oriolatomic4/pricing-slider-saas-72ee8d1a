
import React from "react";
import { ChevronDown, Package, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CartItemProps {
  name: string;
  description: string;
  price: number | string;
  quantity?: number;
  image?: string;
  showQuantity?: boolean;
  allowQuantityChange?: boolean;
  onRemove?: () => void;
  itemId: string;
}

export const CartItem = ({ 
  name, 
  description, 
  price, 
  quantity = 1, 
  image, 
  showQuantity = true,
  allowQuantityChange = false,
  onRemove,
  itemId
}: CartItemProps) => {
  return (
    <div className="py-3 relative rounded-lg bg-gray-800 shadow-md border border-gray-700">
      {onRemove && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-1 right-1 h-6 w-6 text-gray-400 hover:text-white hover:bg-gray-700"
          onClick={onRemove}
          aria-label={`Remove ${name} from cart`}
        >
          <X className="h-3.5 w-3.5" />
        </Button>
      )}
      
      <div className="flex items-start gap-3 px-4">
        <div className="w-16 h-16 rounded-md bg-gray-700 flex items-center justify-center overflow-hidden flex-shrink-0">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-contain" />
          ) : (
            <Package className="w-8 h-8 text-gray-400" />
          )}
        </div>
        
        <div className="flex-1">
          <h4 className="font-bold text-base text-gray-100">{name}</h4>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
        
        <div className="text-right flex flex-col items-end">
          <div className="font-bold text-base text-gray-100">
            {typeof price === 'number' ? `€${price.toFixed(2)}` : price}
          </div>
          {showQuantity && (
            <div className="text-sm text-gray-400 flex items-center mt-1">
              Qty: {quantity} {allowQuantityChange && <ChevronDown className="ml-1 h-3.5 w-3.5" />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
