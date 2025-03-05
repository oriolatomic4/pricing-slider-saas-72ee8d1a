
import React from "react";
import { CartItem } from "./CartItem";
import { Product } from "@/context/CartContext";
import { SoftwarePlan } from "@/components/encoder/SoftwarePlanSelector";
import { EncoderPurchase } from "@/context/CartContext";

interface CartContentProps {
  selectedPlan: SoftwarePlan | null;
  encoderPurchase: EncoderPurchase | null;
  cart: { [key: string]: number };
  products: Product[];
}

export const CartContent = ({ selectedPlan, encoderPurchase, cart, products }: CartContentProps) => {
  const accessoryItems = Object.keys(cart).length;
  
  const mainProduct = selectedPlan ? selectedPlan.name : encoderPurchase && encoderPurchase.count > 0 ? "Vitruve Encoder" : "";
  const subtitle = selectedPlan ? "Includes Vitruve Lifetime Warranty" : "";

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 bg-white dark:bg-gray-900">
      {/* Main product header when we have something in the cart */}
      {(selectedPlan || (encoderPurchase && encoderPurchase.count > 0)) && (
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-1">{mainProduct}</h3>
          {subtitle && <p className="text-gray-500 dark:text-gray-400 text-lg">{subtitle}</p>}
          <div className="h-px bg-gray-200 dark:bg-gray-800 w-full my-6"></div>
        </div>
      )}
      
      {/* Plan selection */}
      {selectedPlan && (
        <div className="mb-6">
          <CartItem 
            name={selectedPlan.name + " Membership"} 
            description="Annual Membership"
            price={selectedPlan.price}
            quantity={1}
            showQuantity={true}
            allowQuantityChange={true}
          />
        </div>
      )}
      
      {/* Encoder selection */}
      {encoderPurchase && encoderPurchase.count > 0 && (
        <div className="mb-6">
          <CartItem 
            name="Vitruve Encoder Device" 
            description="Onyx SuperKit Band"
            price="Free"
            quantity={encoderPurchase.count}
            image="/lovable-uploads/8965823e-f42e-472b-b3de-8c3cc25c57c0.png"
          />
        </div>
      )}
      
      {/* Accessories */}
      {accessoryItems > 0 && (
        <div className="mb-6">
          {Object.entries(cart).map(([productId, quantity]) => {
            const product = products.find(p => p.id === productId);
            if (!product) return null;
            
            return (
              <CartItem 
                key={productId}
                name={product.name}
                description={product.category}
                price={product.price * quantity}
                quantity={quantity}
                image={product.image}
              />
            );
          })}
        </div>
      )}
      
      {/* Empty state */}
      {!selectedPlan && !encoderPurchase && accessoryItems === 0 && (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          Your cart is empty
        </div>
      )}
    </div>
  );
};
