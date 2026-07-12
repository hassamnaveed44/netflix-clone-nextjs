import { InputHTMLAttributes } from "react";

export default function FormInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full bg-[#333] border border-transparent focus:border-white
                 focus:bg-[#454545] text-white rounded px-4 pt-5 pb-2 outline-none
                 transition-colors placeholder:text-gray-400"
    />
  );
}