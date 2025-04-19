
import React from "react";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Create or Upload Content",
      description: "Start by creating or uploading your content to the ZoraMuse platform.",
      role: "Creator"
    },
    {
      number: "02",
      title: "Get AI Suggestions",
      description: "Our AI analyzes your content and suggests optimized $tickers and captions.",
      role: "Creator"
    },
    {
      number: "03",
      title: "Coin Your Content",
      description: "Mint your content as coins on the Zora Protocol with just one click.",
      role: "Creator"
    },
    {
      number: "04",
      title: "Browse Trending Coins",
      description: "Explore the marketplace for trending creator coins with potential.",
      role: "Trader"
    },
    {
      number: "05",
      title: "Analyze AI Insights",
      description: "Use our AI-powered insights to identify promising investment opportunities.",
      role: "Trader"
    },
    {
      number: "06",
      title: "Build Your Portfolio",
      description: "Make informed trades and build a diversified creator coin portfolio.",
      role: "Trader"
    }
  ];

  const creatorSteps = steps.filter(step => step.role === "Creator");
  const traderSteps = steps.filter(step => step.role === "Trader");

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-grotesk text-3xl md:text-4xl font-bold mb-6">
            How <span className="text-gradient">ZoraMuse</span> Works
          </h2>
          <p className="text-slate-600 text-lg">
            A seamless experience for both content creators and traders,
            powered by AI and built on the Zora Coins Protocol.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-1 w-16 bg-zora-purple rounded-full"></div>
              <h3 className="font-grotesk text-2xl font-semibold text-slate-800">For Creators</h3>
            </div>
            
            {creatorSteps.map((step, index) => (
              <div key={index} className="relative flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-zora-purple to-zora-blue flex items-center justify-center text-white font-grotesk font-bold">
                    {step.number}
                  </div>
                  {index < creatorSteps.length - 1 && (
                    <div className="h-full w-0.5 bg-gradient-to-b from-zora-purple/50 to-zora-blue/50 my-2"></div>
                  )}
                </div>
                <div className="pt-2">
                  <h4 className="font-grotesk text-xl font-semibold mb-2 text-slate-800">
                    {step.title}
                  </h4>
                  <p className="text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-1 w-16 bg-zora-orange rounded-full"></div>
              <h3 className="font-grotesk text-2xl font-semibold text-slate-800">For Traders</h3>
            </div>
            
            {traderSteps.map((step, index) => (
              <div key={index} className="relative flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-zora-orange to-zora-blue flex items-center justify-center text-white font-grotesk font-bold">
                    {step.number}
                  </div>
                  {index < traderSteps.length - 1 && (
                    <div className="h-full w-0.5 bg-gradient-to-b from-zora-orange/50 to-zora-blue/50 my-2"></div>
                  )}
                </div>
                <div className="pt-2">
                  <h4 className="font-grotesk text-xl font-semibold mb-2 text-slate-800">
                    {step.title}
                  </h4>
                  <p className="text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
