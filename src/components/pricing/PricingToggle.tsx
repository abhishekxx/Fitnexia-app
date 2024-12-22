"use client"
import { useState } from "react";
import { cn } from "@/lib/utils";
interface PricingToggleProps {
  onToggle: (isAnnual: boolean) => void;
}
export const PricingToggle = ({ onToggle }: PricingToggleProps) => {
  const [isAnnual, setIsAnnual] = useState(false);
  const handleToggle = (value: boolean) => {
    setIsAnnual(value);
    onToggle(value);
  };
  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      <button
        onClick={() => handleToggle(false)}
        className={cn(
          "px-4 py-2 rounded-l-full",
          !isAnnual ? "bg-orange-500 text-white" : "text-gray-400"
        )}
      >
        Monthly
      </button>
      <button
        onClick={() => handleToggle(true)}
        className={cn(
          "px-4 py-2 rounded-r-full",
          isAnnual ? "bg-orange-500 text-white" : "text-gray-400"
        )}
      >
        Annual
      </button>
    </div>
  );
};
