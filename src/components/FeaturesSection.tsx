
import React from "react";
import FeatureCard from "./FeatureCard";
import { BookText, Coins, TrendingUp, MessageSquare } from "lucide-react";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "AI Content Suggestion",
      description: "Get intelligent suggestions for your content based on trending topics and user engagement patterns.",
      icon: <MessageSquare size={24} />,
      className: "bg-gradient-to-br from-white to-zora-soft-purple/30"
    },
    {
      title: "$Ticker & Caption Generation",
      description: "Automatically generate optimized $tickers and captions to maximize the impact of your content.",
      icon: <BookText size={24} />,
      className: "bg-gradient-to-br from-white to-zora-soft-blue/30"
    },
    {
      title: "Zora Coins SDK Integration",
      description: "Seamlessly connect with the Zora Coins Protocol for efficient minting and management of your coins.",
      icon: <Coins size={24} />,
      className: "bg-gradient-to-br from-white to-zora-soft-peach/30"
    },
    {
      title: "Trader Trend Insights",
      description: "Access powerful analytics and real-time insights to make informed trading decisions in the market.",
      icon: <TrendingUp size={24} />,
      className: "bg-gradient-to-br from-white to-zora-soft-green/30"
    }
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-zora-soft-blue/10 relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-zora-soft-blue/10 -z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-zora-soft-blue/10 -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-grotesk text-3xl md:text-4xl font-bold mb-6">
            Powerful Features for <span className="text-gradient">Creators & Traders</span>
          </h2>
          <p className="text-slate-600 text-lg">
            ZoraMuse combines cutting-edge AI technology with the Zora Coins Protocol
            to deliver a comprehensive suite of tools for the Web3 creator economy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              className={feature.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
