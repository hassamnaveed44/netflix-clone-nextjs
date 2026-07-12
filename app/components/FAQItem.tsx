"use client";
import { useState } from "react";
import { Plus, X } from "lucide-react";

export default function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b-2 border-[#2d2d2d]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center bg-[#2d2d2d] hover:bg-[#414141]
                   text-lg md:text-2xl py-4 px-4 md:px-6 text-left"
      >
        {question}
        {open ? <X size={24} /> : <Plus size={24} />}
      </button>
      {open && (
        <div className="bg-[#2d2d2d] px-4 md:px-6 pb-6 text-xl">{answer}</div>
      )}
    </div>
  );
}