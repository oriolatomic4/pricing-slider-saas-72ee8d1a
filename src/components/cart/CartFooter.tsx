
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { createCheckoutWithMultipleItems } from "@/services/shopifyService";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface CartFooterProps {
  subtotal: number;
  nextPath: string;
  onClose?: () => void;
}

export const CartFooter = ({ subtotal, nextPath, onClose }: CartFooterProps) => {
  const navigate = useNavigate();
  const { 
    cart, 
    selectedPlan, 
    encoderPurchase,
    completePurchase
  } = useCart();
  const [isProcessing, setIsProcessing] = React.useState(false);
  
  // Check if this is the last step in the purchase flow (accessories page)
  const isLastStep = nextPath === "/checkout";
  
  const handleClick = async (e: React.MouseEvent) => {
    // Only intercept if this is the last step
    if (isLastStep) {
      e.preventDefault();
      await handleDirectCheckout();
    }
    
    // For other steps, let the Link component handle navigation
    if (onClose) {
      onClose();
    }
  };
  
  const handleDirectCheckout = async () => {
    try {
      setIsProcessing(true);
      
      // Create line items array for Shopify cart
      const lineItems = [];
      
      // Add cart items
      for (const [productId, quantity] of Object.entries(cart)) {
        if (quantity > 0) {
          const product = window._products?.find(p => p.id === productId);
          if (product && product.shopifyVariantId) {
            // Make sure the variant ID is in the correct format
            const formattedVariantId = product.shopifyVariantId.includes('gid://') 
              ? product.shopifyVariantId 
              : `gid://shopify/ProductVariant/${product.shopifyVariantId}`;
              
            lineItems.push({
              variantId: formattedVariantId,
              quantity: quantity
            });
          }
        }
      }
      
      // Add plan if selected
      if (selectedPlan && selectedPlan.shopifyVariantId) {
        const formattedVariantId = selectedPlan.shopifyVariantId.includes('gid://') 
          ? selectedPlan.shopifyVariantId 
          : `gid://shopify/ProductVariant/${selectedPlan.shopifyVariantId}`;
          
        lineItems.push({
          variantId: formattedVariantId,
          quantity: 1
        });
      }
      
      // Add encoder if selected
      if (encoderPurchase && encoderPurchase.count > 0) {
        const encoderVariantId = encoderPurchase.shopifyVariantId || '53714682577222';
        const formattedVariantId = encoderVariantId.includes('gid://') 
          ? encoderVariantId 
          : `gid://shopify/ProductVariant/${encoderVariantId}`;
          
        lineItems.push({
          variantId: formattedVariantId,
          quantity: encoderPurchase.count
        });
      }
      
      // If cart is empty, show error
      if (lineItems.length === 0) {
        toast.error('Your cart is empty. Please add items before checkout.');
        setIsProcessing(false);
        return;
      }
      
      console.log('Creating checkout with line items:', lineItems);
      
      // Use the service to create a checkout
      const checkoutUrl = await createCheckoutWithMultipleItems(lineItems);
      
      if (!checkoutUrl) {
        console.error('No checkout URL returned');
        toast.error('Failed to initiate checkout. Please try again.');
        navigate('/payment-failed');
        return;
      }
      
      // If successful, redirect to the Shopify checkout URL
      console.log('Redirecting to Shopify checkout URL:', checkoutUrl);
      completePurchase();
      window.location.href = checkoutUrl;
      
    } catch (error) {
      console.error('Checkout error:', error);
      toast.error('An unexpected error occurred. Please try again.');
      navigate('/payment-failed');
    } finally {
      setIsProcessing(false);
    }
  };

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
          disabled={isProcessing}
        >
          <Link to={nextPath} onClick={handleClick}>
            {isProcessing ? "PROCESSING..." : "CONTINUE"}
          </Link>
        </Button>
        
        <Button
          variant="outline"
          className="w-full flex justify-center items-center text-gray-700 dark:text-gray-300 py-4 border-gray-300 dark:border-gray-700"
          onClick={onClose}
        >
          <ShoppingBag className="mr-2 h-4 w-4" />
          Continue Shopping
        </Button>
      </div>
    </div>
  );
};
