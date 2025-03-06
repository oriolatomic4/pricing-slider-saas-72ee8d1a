
import React from "react";
import { useCart } from "@/context/CartContext";
import { CartContent } from "@/components/cart/CartContent";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { 
    cart, 
    selectedPlan, 
    encoderPurchase, 
    getSubtotal,
    removeFromCart,
    setSelectedPlan,
    setEncoderPurchase
  } = useCart();

  // Products data
  const [products, setProducts] = React.useState<any[]>([]);
  
  // Fetch products data
  React.useEffect(() => {
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

  const handlePlaceOrder = () => {
    // In a real application, this would submit the order to a backend
    alert("Thank you for your order! This is a demo, so no actual purchase has been made.");
  };

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors duration-200">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 text-black dark:text-white">Checkout</h1>
          <p className="text-gray-600 dark:text-gray-300">Review your order before completing your purchase</p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow transition-colors duration-200">
          {/* Order summary section using the CartContent component */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">Order Summary</h2>
            
            <div className="bg-gray-950 rounded-lg">
              <CartContent 
                selectedPlan={selectedPlan}
                encoderPurchase={encoderPurchase}
                cart={cart}
                products={products}
                onRemoveItem={handleRemoveItem}
                onRemovePlan={handleRemovePlan}
                onRemoveEncoder={handleRemoveEncoder}
              />
            </div>
          </div>

          {/* Price summary section */}
          <div className="p-6">
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-base">
                <span className="font-semibold text-gray-600 dark:text-gray-300">Subtotal</span>
                <span className="font-semibold text-black dark:text-white">€{getSubtotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">Shipping</span>
                <span className="text-gray-500 dark:text-gray-400">Free</span>
              </div>
              <div className="flex justify-between text-base font-bold pt-4 border-t border-gray-200 dark:border-gray-800">
                <span className="text-black dark:text-white">Total</span>
                <span className="text-vitruve-purple">€{getSubtotal().toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                onClick={handlePlaceOrder}
                className="w-full bg-vitruve-purple hover:bg-vitruve-purple/90 text-white font-bold py-5 text-base rounded-full"
                disabled={getSubtotal() <= 0}
              >
                <Check className="mr-2 h-5 w-5" /> 
                PLACE ORDER
              </Button>
              
              <Button
                variant="outline"
                className="w-full py-4 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200"
                asChild
              >
                <Link to="/accessories">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Accessories
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
