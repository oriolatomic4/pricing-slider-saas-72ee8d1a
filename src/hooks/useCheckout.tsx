
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
      
      // Create line items from cart for Stripe
      const lineItems = [];
      
      // Add cart items
      for (const [productId, quantity] of Object.entries(cart)) {
        if (quantity > 0) {
          const product = products.find(p => p.id === productId);
          if (product) {
            lineItems.push({
              priceId: productId, // Using product ID as price ID for demonstration
              quantity: quantity,
              name: product.name,
              amount: product.price * 100 // Convert to cents for Stripe
            });
          }
        }
      }
      
      // Add plan if selected
      if (selectedPlan) {
        lineItems.push({
          priceId: selectedPlan.id,
          quantity: 1,
          name: selectedPlan.name,
          amount: selectedPlan.price * 100 // Convert to cents for Stripe
        });
      }
      
      // Add encoder if selected
      if (encoderPurchase && encoderPurchase.count > 0) {
        lineItems.push({
          priceId: 'encoder-device',
          quantity: encoderPurchase.count,
          name: 'Vitruve Encoder Device',
          amount: encoderPurchase.pricePerUnit * 100 // Convert to cents for Stripe
        });
      }
      
      // If cart is empty, show error
      if (lineItems.length === 0) {
        toast.error('Your cart is empty. Please add items before checkout.');
        setIsProcessing(false);
        return;
      }
      
      console.log('Sending line items to checkout:', lineItems);
      
      const { data, error } = await supabase.functions.invoke('create-checkout-session', {
        body: { lineItems }
      });
      
      console.log('Response from checkout session:', data, error);
      
      if (error) {
        console.error('Error creating checkout session:', error);
        toast.error('Failed to initiate checkout. Please try again.');
        navigate('/payment-failed');
        return;
      }
      
      // If successful, redirect to the Stripe checkout URL
      if (data && data.url) {
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
