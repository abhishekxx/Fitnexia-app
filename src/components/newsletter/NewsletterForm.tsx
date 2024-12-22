"use client"
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const NewsletterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for subscribing!");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
      <div className="relative flex-1">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-white border-white p-2 rounded-full  text-white placeholder:text-gray-400"
          required
        />
        <button 
          type="submit" 
          className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-red-500 hover:bg-red-600 h-8 w-8"
        >
          <ArrowRight className="h-6 w-6 " />
        </button>
      </div>
    </form>
  );
};
