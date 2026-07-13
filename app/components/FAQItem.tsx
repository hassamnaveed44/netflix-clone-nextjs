"use client";
import { useState } from "react";
import { Plus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#2d2d2d] hover:bg-[#414141] transition-colors duration-200 rounded overflow-hidden">
      <button
        className="w-full flex justify-between items-center p-6 text-white text-lg md:text-2xl text-left font-normal"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {question}
        <Plus 
          size={30} 
          className={`transform transition-transform duration-300 ease-in-out flex-shrink-0 ml-4 ${isOpen ? "rotate-45" : ""}`} 
        />
      </button>

      {/* Smooth height transition wrapper */}
      <div 
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="p-6 pt-0 text-white text-lg md:text-xl leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}