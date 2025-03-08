import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import EncoderImageGallery from "@/components/encoder/EncoderImageGallery";
import EncoderCountSelector, { EncoderOption } from "@/components/encoder/EncoderCountSelector";
import EncoderPricingActions from "@/components/encoder/EncoderPricingActions";

const encoderImages = [
  "/lovable-uploads/a70c084d-024f-4131-b1a6-3d4ba0456f34.png",
  "/lovable-uploads/27b3d0c5-8329-4e05-b241-0097233e82ea.png",
  "/lovable-uploads/4b5878f7-4f70-4603-b6ca-c40129e46c8b.png",
];

const encoderOptions: EncoderOption[] = [
  { value: 0, label: "0" },
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
  { value: "+6", label: "+6" },
];

const softwarePlans = [
  { 
    id: "free", 
    name: "Free", 
    price: 0,
    shopifyProductId: "free-plan",
    shopifyVariantId: "14937944162630" // Free variant ID
  },
  { 
    id: "basic", 
    name: "Basic", 
    price: 800,
    shopifyProductId: "basic-plan",
    shopifyVariantId: "53604973904198" // Basic variant ID
  },
  { 
    id: "elite", 
    name: "Elite", 
    price: 1200,
    shopifyProductId: "elite-plan",
    shopifyVariantId: "53604973936966" // Elite variant ID
  },
  { 
    id: "professional", 
    name: "Professional", 
    price: 2200,
    shopifyProductId: "professional-plan",
    shopifyVariantId: "53604973969734" // Pro variant ID
  },
];

const EncoderSelection = () => {
  const [encoderCount, setEncoderCount] = useState<number | string>(1);
  const [selectedPlan, setSelectedPlan] = useState<string>("elite");
  const location = useLocation();
  const basePrice = 447;

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const planId = params.get("plan");
    if (planId && softwarePlans.some(plan => plan.id === planId)) {
      setSelectedPlan(planId);
    }
  }, [location]);

  const handleEncoderSelection = (value: number | string) => {
    setEncoderCount(value);
  };

  const getSelectedPlan = () => {
    return softwarePlans.find(plan => plan.id === selectedPlan) || softwarePlans[2];
  };

  return (
    <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <EncoderImageGallery images={encoderImages} />
          
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
                Vitruve Encoder + App
              </h1>
              
              <div className="mb-3 flex items-baseline gap-3">
                <span className="text-3xl font-bold text-vitruve-purple">
                  {encoderCount === "+6" ? "Talk to sales" : `€${(Number(encoderCount) * basePrice).toFixed(2)}`}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Tax included. FREE Shipping
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Do you need more than 6 units? We have special prices and discounts for you!
                <a href="#" className="text-vitruve-purple ml-2 font-medium hover:underline">
                  Contact us here!
                </a>
              </p>
            </div>
            
            <div className="space-y-5">
              <EncoderCountSelector
                options={encoderOptions}
                selectedValue={encoderCount}
                onSelect={handleEncoderSelection}
              />
              
              <EncoderPricingActions
                encoderCount={encoderCount}
                basePrice={basePrice}
                selectedPlan={getSelectedPlan()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EncoderSelection;
