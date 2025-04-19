
import React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon,
  className
}) => {
  return (
    <div className={cn(
      "p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1",
      className
    )}>
      <div className="mb-5 rounded-full w-12 h-12 flex items-center justify-center bg-gradient-to-r from-zora-purple/10 to-zora-blue/10 text-zora-purple">
        {icon}
      </div>
      
      <h3 className="font-grotesk text-xl font-semibold mb-3 text-slate-800">
        {title}
      </h3>
      
      <p className="text-slate-600">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
