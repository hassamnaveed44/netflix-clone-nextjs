import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base = "px-6 py-2 rounded font-medium transition-colors duration-150";
  const variants = {
    primary: "bg-netflixRed hover:bg-red-700 text-white",
    secondary: "bg-white/90 hover:bg-white text-black",
    ghost: "bg-gray-600/70 hover:bg-gray-600 text-white",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}