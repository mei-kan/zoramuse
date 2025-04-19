
import React from "react";
import Button from "./Button";
import GradientBackground from "./GradientBackground";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-16 overflow-hidden">
      <GradientBackground />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="animate-float mb-8">
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-gradient-radial from-zora-purple/30 to-transparent rounded-full blur-md"></div>
              <span className="font-grotesk font-bold text-4xl md:text-6xl lg:text-7xl text-gradient">ZoraMuse</span>
            </div>
          </div>
          
          <h1 className="font-grotesk font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 max-w-4xl animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
            <span className="block">Empowering Creators,</span>
            <span className="block">Inspiring Traders.</span>
          </h1>
          
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mb-10 animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
            An AI-powered platform built on the Zora Coins Protocol helping creators effortlessly coin their content
            and providing traders with real-time insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in opacity-0" style={{ animationDelay: "0.9s" }}>
            <Button variant="primary" size="lg" withArrow>
              Launch App
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
          
          <div className="mt-16 md:mt-32 animate-fade-in opacity-0" style={{ animationDelay: "1.2s" }}>
            <button 
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex flex-col items-center gap-2 text-slate-500 hover:text-zora-purple transition-colors"
              aria-label="Scroll down"
            >
              <span className="text-sm font-medium">Discover More</span>
              <div className="w-0.5 h-8 bg-gradient-to-b from-zora-purple to-zora-blue"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
