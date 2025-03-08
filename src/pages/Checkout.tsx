
import React from "react";
import OrderSummary from "@/components/checkout/OrderSummary";
import PriceSummary from "@/components/checkout/PriceSummary";
import { useCheckout } from "@/hooks/useCheckout";

const Checkout = () => {
  const {
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
  } = useCheckout();

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors duration-200">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 text-black dark:text-white">Checkout</h1>
          <p className="text-gray-600 dark:text-gray-300">Review your order before completing your purchase</p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow transition-colors duration-200">
          {/* Order summary section */}
          <OrderSummary 
            selectedPlan={selectedPlan}
            encoderPurchase={encoderPurchase}
            cart={cart}
            products={products}
            onRemoveItem={handleRemoveItem}
            onRemovePlan={handleRemovePlan}
            onRemoveEncoder={handleRemoveEncoder}
          />

          {/* Price summary section */}
          <PriceSummary
            subtotal={getSubtotal()}
            isProcessing={isProcessing}
            onPlaceOrder={handlePlaceOrder}
          />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
