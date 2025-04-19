
import React from "react";
import { Zap } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-zora-soft-purple/30 to-white -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-grotesk text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-gradient">ZoraMuse</span>
          </h2>
          
          <p className="text-slate-600 text-lg mb-8">
            ZoraMuse bridges the gap between creative expression and financial empowerment. We've built an 
            AI-powered platform on the Zora Coins Protocol to revolutionize how creators monetize their content 
            and how traders discover valuable opportunities.
          </p>
          
          <div className="inline-flex items-center gap-2 bg-zora-soft-purple text-zora-purple px-6 py-3 rounded-full">
            <Zap size={20} />
            <span className="font-medium">Powered by the Zora Coins Protocol</span>
          </div>
          
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-white to-zora-soft-blue/30 p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="font-grotesk text-xl font-semibold mb-4 text-slate-800">For Creators</h3>
              <p className="text-slate-600">
                Turn your creative assets into valuable coins with AI-suggested tickers and captions. 
                Our platform simplifies the minting process and helps optimize your content for maximum engagement.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-zora-soft-peach/30 p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="font-grotesk text-xl font-semibold mb-4 text-slate-800">For Traders</h3>
              <p className="text-slate-600">
                Access real-time insights and recommendations for coin trading opportunities. 
                Our AI analyzes trends and patterns to help you make informed decisions in the Zora ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
