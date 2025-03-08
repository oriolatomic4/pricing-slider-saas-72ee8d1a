
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Product } from "@/context/CartContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const useCheckout = () => {
  const navigate = useNavigate();
  const { 
    cart, 
    selectedPlan, 
    encoderPurchase, 
    getSubtotal,
    removeFromCart,
    setSelectedPlan,
    setEncoderPurchase,
    completePurchase
  } = useCart();

  // Products data
  const [products, setProducts] = useState<Product[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Fetch products data
  useEffect(() => {
    if (window._products) {
      setProducts(window._products);
    }
  }, [cart]);

  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
  };

  const handleRemovePlan = () => {
    setSelectedPlan(null);
  };

  const handleRemoveEncoder = () => {
    setEncoderPurchase(null);
  };

  const handlePlaceOrder = async () => {
    try {
      setIsProcessing(true);
      
      // Create line items from cart for Shopify
      const lineItems = [];
      
      // Add cart items
      for (const [productId, quantity] of Object.entries(cart)) {
        if (quantity > 0) {
          const product = products.find(p => p.id === productId);
          if (product) {
            // Use the Shopify variant ID if available, otherwise use the accessory fallback
            const variantId = product.shopifyVariantId || "53937175920966"; // Accessory fallback ID
            
            lineItems.push({
              variantId: variantId,
              quantity: quantity
            });
          }
        }
      }
      
      // Add plan if selected
      if (selectedPlan) {
        lineItems.push({
          variantId: selectedPlan.shopifyVariantId, // Use the real Shopify variant ID
          quantity: 1
        });
      }
      
      // Add encoder if selected
      if (encoderPurchase && encoderPurchase.count > 0) {
        lineItems.push({
          variantId: '53714682577222', // Encoder variant ID
          quantity: encoderPurchase.count
        });
      }
      
      // If cart is empty, show error
      if (lineItems.length === 0) {
        toast.error('Your cart is empty. Please add items before checkout.');
        setIsProcessing(false);
        return;
      }
      
      console.log('Sending line items to Shopify checkout:', lineItems);
      
      // Call the Supabase function that creates a Shopify checkout
      const { data, error } = await supabase.functions.invoke('create-shopify-checkout', {
        body: { lineItems }
      });
      
      console.log('Response from Shopify checkout session:', data, error);
      
      if (error) {
        console.error('Error creating Shopify checkout session:', error);
        toast.error('Failed to initiate checkout. Please try again.');
        navigate('/payment-failed');
        return;
      }
      
      // If successful, redirect to the Shopify checkout URL
      if (data && data.url) {
        // Mark purchase as complete in our system before redirecting
        completePurchase();
        window.location.href = data.url;
      } else {
        console.error('No checkout URL returned');
        toast.error('Failed to initiate checkout. Please try again.');
        navigate('/payment-failed');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast.error('An unexpected error occurred. Please try again.');
      navigate('/payment-failed');
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    cart,
    selectedPlan,
    encoderPurchase,
    products,
    isProcessing,
    getSubtotal,
    handleRemoveItem,
    handleRemovePlan,
    handleRemoveEncoder,
    handlePlaceOrder
  };
};
