
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { setCartSidebarState } from "@/lib/utils";
import { createCheckoutWithMultipleItems } from "@/services/shopifyService";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CheckoutBar = () => {
  const navigate = useNavigate();
  const { 
    cart, 
    selectedPlan, 
    encoderPurchase,
    getCartItemCount,
    completePurchase
  } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const itemCount = getCartItemCount();
  
  const handleOpenCart = () => {
    setCartSidebarState(true);
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
    <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 py-4 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-700 shadow-lg z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Button 
            variant="outline"
            className="flex items-center gap-2 relative"
            onClick={handleOpenCart}
          >
            <ShoppingCart className="w-5 h-5" /> 
            <span>View Cart {itemCount > 0 && `(${itemCount})`}</span>
          </Button>
        </div>
        
        <Button 
          size="lg"
          className="bg-vitruve-purple hover:bg-vitruve-purple/90 text-white px-8"
          onClick={handleDirectCheckout}
          disabled={isProcessing}
        >
          {isProcessing ? "Processing..." : (
            <span className="flex items-center justify-center">
              Continue <ArrowRight className="ml-2 w-5 h-5" />
            </span>
          )}
        </Button>
      </div>
    </div>
  );
};

export default CheckoutBar;
