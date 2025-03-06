
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { PricingTier } from "@/types/pricing";
import { useCart } from "@/context/CartContext";

interface PricingCardProps {
  tier: PricingTier;
}

const PricingCard = ({ tier }: PricingCardProps) => {
  const { setSelectedPlan } = useCart();
  
  const handleSelectPlan = () => {
    setSelectedPlan({
      id: tier.id,
      name: tier.name,
      price: tier.price || 0
    });
  };
  
  return (
    <div
      className={cn(
        "relative flex flex-col p-6 rounded-2xl transition-all duration-300",
        "glass card-shadow hover:shadow-lg",
        tier.highlight && "ring-2 ring-vitruve-purple shadow-lg scale-[1.02]"
      )}
    >
      <div className="flex-1">
        <h3 className="text-2xl font-semibold leading-tight mb-1 text-gray-900 dark:text-white transition-colors duration-200">
          {tier.name}
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 transition-colors duration-200">{tier.description}</p>

        <div className="mb-6">
          <p className="text-3xl font-bold text-vitruve-cyan">
            ${tier.price === 0 ? "0" : tier.price?.toLocaleString()}
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400 transition-colors duration-200">
              {tier.price === 0 ? "/forever" : "/year"}
            </span>
          </p>
        </div>

        <ul className="space-y-3 mb-6">
          {tier.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="w-5 h-5 text-vitruve-cyan shrink-0" />
              <span className="text-sm text-gray-700 dark:text-white/90 transition-colors duration-200">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button
        className={cn(
          "w-full",
          tier.highlight
            ? "bg-vitruve-purple text-white hover:bg-vitruve-purple/90"
            : "bg-vitruve-cyan text-black hover:bg-vitruve-cyan/90"
        )}
        onClick={handleSelectPlan}
        asChild
      >
        <Link to={`/encoder-selection?plan=${tier.id}`}>Continue</Link>
      </Button>
    </div>
  );
};

export default PricingCard;
