
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  className, 
  variant = 'primary',
  size = 'md',
  withArrow = false,
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
  
  const variants = {
    primary: "bg-zora-purple text-white hover:bg-zora-purple-dark",
    secondary: "bg-zora-orange text-white hover:bg-amber-600",
    outline: "bg-transparent border border-zora-purple text-zora-purple hover:bg-zora-soft-purple"
  };
  
  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-3.5 text-lg"
  };

  return (
    <button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
      {withArrow && <ArrowRight size={size === 'sm' ? 16 : 20} />}
    </button>
  );
};

export default Button;
