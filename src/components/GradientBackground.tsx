
import React from "react";

interface GradientBackgroundProps {
  className?: string;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ className }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden -z-10 ${className}`}>
      <div
        className="blob-background bg-zora-purple/30 w-[500px] h-[500px] top-[10%] left-[10%] animate-blob"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="blob-background bg-zora-orange/30 w-[400px] h-[400px] top-[20%] right-[10%] animate-blob"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="blob-background bg-zora-blue/30 w-[600px] h-[600px] bottom-[10%] left-[20%] animate-blob"
        style={{ animationDelay: "4s" }}
      ></div>
      <div
        className="blob-background bg-zora-green/30 w-[350px] h-[350px] bottom-[20%] right-[20%] animate-blob"
        style={{ animationDelay: "6s" }}
      ></div>
    </div>
  );
};

export default GradientBackground;
