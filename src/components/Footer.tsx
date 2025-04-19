
import React from "react";
import { Github } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 pb-10">
          <div>
            <h3 className="font-grotesk font-bold text-2xl text-gradient mb-4">ZoraMuse</h3>
            <p className="text-slate-600 mb-6 max-w-xs">
              Empowering creators and traders in the Web3 ecosystem with AI-powered tools and insights.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:bg-zora-purple hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-grotesk font-semibold text-lg mb-4 text-slate-800">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-slate-600 hover:text-zora-purple">Features</a></li>
                <li><a href="#" className="text-slate-600 hover:text-zora-purple">Pricing</a></li>
                <li><a href="#" className="text-slate-600 hover:text-zora-purple">API</a></li>
                <li><a href="#" className="text-slate-600 hover:text-zora-purple">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-grotesk font-semibold text-lg mb-4 text-slate-800">Company</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-slate-600 hover:text-zora-purple">About</a></li>
                <li><a href="#" className="text-slate-600 hover:text-zora-purple">Blog</a></li>
                <li><a href="#" className="text-slate-600 hover:text-zora-purple">Careers</a></li>
                <li><a href="#" className="text-slate-600 hover:text-zora-purple">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div>
            <h4 className="font-grotesk font-semibold text-lg mb-4 text-slate-800">Subscribe</h4>
            <p className="text-slate-600 mb-4">
              Stay updated with the latest news and features from ZoraMuse.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-md border border-r-0 border-slate-300 focus:outline-none focus:ring-2 focus:ring-zora-purple/50"
                required
              />
              <button
                type="submit"
                className="bg-zora-purple text-white px-4 py-2 rounded-r-md hover:bg-zora-purple-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} ZoraMuse. All rights reserved.
            </p>
            <div className="flex items-center">
              <span className="text-slate-500 text-sm">Built for </span>
              <span className="bg-gradient-to-r from-zora-purple to-zora-blue bg-clip-text text-transparent font-medium mx-1">
                WaveHack 2025
              </span>
              <span className="text-slate-500 text-sm">with 💜</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
