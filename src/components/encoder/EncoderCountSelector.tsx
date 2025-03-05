
import React from "react";
import { cn } from "@/lib/utils";

export interface EncoderOption {
  value: number | string;
  label: string;
}

interface EncoderCountSelectorProps {
  options: EncoderOption[];
  selectedValue: number | string;
  onSelect: (value: number | string) => void;
}

const EncoderCountSelector = ({ 
  options, 
  selectedValue, 
  onSelect 
}: EncoderCountSelectorProps) => {
  return (
    <div>
      <h2 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
        nº Encoders: {selectedValue}
      </h2>
      
      <div className="grid grid-cols-8 gap-2">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onSelect(option.value)}
            className={cn(
              "py-2 rounded-md text-center text-sm font-medium",
              selectedValue === option.value
                ? "bg-vitruve-purple text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EncoderCountSelector;
