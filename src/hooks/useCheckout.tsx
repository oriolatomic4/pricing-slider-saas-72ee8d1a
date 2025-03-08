
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Product } from "@/context/CartContext";
import { toast } from "sonner";
import { createCheckoutWithMultipleItems } from "@/services/shopifyService";

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
      
      // Create line items array for Shopify cart
      const lineItems = [];
      
      // Add cart items
      for (const [productId, quantity] of Object.entries(cart)) {
        if (quantity > 0) {
          const product = products.find(p => p.id === productId);
          if (product && product.shopifyVariantId) {
            // Make sure the variant ID is in the correct format (gid://shopify/ProductVariant/ID format)
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
      
      // Use the new service to create a checkout
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
