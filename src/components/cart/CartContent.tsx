
import React from "react";
import { CartItem } from "./CartItem";
import { Product } from "@/context/CartContext";
import { SoftwarePlan } from "@/components/encoder/SoftwarePlanSelector";
import { EncoderPurchase } from "@/context/CartContext";
import { Package, Box, Layers } from "lucide-react";

interface CartContentProps {
  selectedPlan: SoftwarePlan | null;
  encoderPurchase: EncoderPurchase | null;
  cart: { [key: string]: number };
  products: Product[];
}

// Random images for products that don't have one
const placeholderImages = [
  "/lovable-uploads/8965823e-f42e-472b-b3de-8c3cc25c57c0.png",
  "/lovable-uploads/4b5878f7-4f70-4603-b6ca-c40129e46c8b.png",
  "/lovable-uploads/a234427b-e3bf-474c-9481-4875e7b08873.png",
  "/lovable-uploads/27b3d0c5-8329-4e05-b241-0097233e82ea.png"
];

const getRandomImage = () => {
  return placeholderImages[Math.floor(Math.random() * placeholderImages.length)];
};

export const CartContent = ({ selectedPlan, encoderPurchase, cart, products }: CartContentProps) => {
  const accessoryItems = Object.keys(cart).length;
  
  const mainProduct = selectedPlan ? selectedPlan.name : encoderPurchase && encoderPurchase.count > 0 ? "Vitruve Encoder" : "";
  const subtitle = selectedPlan ? "Includes Vitruve Lifetime Warranty" : "";

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 bg-black dark:bg-black">
      {/* Main product header when we have something in the cart */}
      {(selectedPlan || (encoderPurchase && encoderPurchase.count > 0)) && (
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-1 text-gray-200 dark:text-gray-200">{mainProduct}</h3>
          {subtitle && <p className="text-sm text-gray-400 dark:text-gray-400">{subtitle}</p>}
          <div className="h-px bg-gray-800 dark:bg-gray-800 w-full my-4"></div>
        </div>
      )}
      
      {/* Plan selection */}
      {selectedPlan && (
        <div className="mb-4">
          <CartItem 
            name={selectedPlan.name + " Membership"} 
            description="Annual Membership"
            price={selectedPlan.price}
            quantity={1}
            showQuantity={true}
            allowQuantityChange={true}
            image="/lovable-uploads/a70c084d-024f-4131-b1a6-3d4ba0456f34.png"
          />
        </div>
      )}
      
      {/* Encoder selection */}
      {encoderPurchase && encoderPurchase.count > 0 && (
        <div className="mb-4">
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
        <div className="mb-4 space-y-3">
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
                image={product.image || getRandomImage()}
              />
            );
          })}
        </div>
      )}
      
      {/* Empty state */}
      {!selectedPlan && !encoderPurchase && accessoryItems === 0 && (
        <div className="text-center py-10 text-gray-500 dark:text-gray-400 flex flex-col items-center">
          <Box className="w-12 h-12 mb-3 text-gray-600 dark:text-gray-600" />
          <p className="text-base">Your cart is empty</p>
        </div>
      )}
    </div>
  );
};
