"use client"
import { useState } from "react";
import { Check } from "lucide-react";
import { PricingToggle } from "./PricingToggle";
import { cn } from "@/lib/utils";
export const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  
  const plans = [
    {
      name: "DISCOVER",
      price: isAnnual ? 79 : 99,
      features: [
        "5 classes per month",
        "4 group class monthly",
        "Online class access",
        "E-book fitness guide"
      ]
    },
    {
      name: "ENTERPRISE",
      price: isAnnual ? 249 : 299,
      features: [
        "10 classes per month",
        "8 group class monthly",
        "Online class access",
        "E-book fitness guide",
        "7 Extra fitness training"
      ]
    },
    {
      name: "PROFESSIONAL",
      price: isAnnual ? 169 : 199,
      features: [
        "7 classes per month",
        "6 group class monthly",
        "Online class access",
        "E-book fitness guide"
      ]
    }
  ];
  return (
    <section className="py-20 px-4 bg-zinc-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Choose The Best Plan
        </h2>
        <p className="text-white text-center mb-8">
          Choose a plan that right for your growing team. Simple pricing & No hidden charges.
        </p>
        
        <PricingToggle onToggle={setIsAnnual} />
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                "rounded-lg p-8 bg-zinc-700 hover:bg-orange-600 transform hover:-translate-y-1 transition-transform",
                index === 1 
              )}
            >
              <h3 className="text-xl font-semibold text-white mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">${plan.price}</span>
                <span className="text-gray-300 ml-2">/ Per Month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-white">
                    <Check className="h-5 w-5 mr-2 text-green-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className={cn(
                  "w-full bg-gray-500 hover:bg-orange-500 hover:text-white p-2 rounded-2xl")}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
