
import React from "react";

interface PriceDisplayProps {
  price: number;
  currency?: string;
}

const PriceDisplay = ({ price, currency = "€" }: PriceDisplayProps) => {
  return (
    <p className="text-vitruve-purple font-bold mb-4">
      {currency}{price.toFixed(2)}
    </p>
  );
};

export default PriceDisplay;
