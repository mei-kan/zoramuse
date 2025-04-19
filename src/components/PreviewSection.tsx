
import React from "react";
import Button from "./Button";

const PreviewSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-zora-soft-purple/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-zora-soft-purple/30 -z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-zora-soft-purple/30 -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-grotesk text-3xl md:text-4xl font-bold mb-6">
            Preview the <span className="text-gradient">ZoraMuse</span> Experience
          </h2>
          <p className="text-slate-600 text-lg mb-10">
            Get a glimpse of our intuitive interface and powerful features that make creating and trading on Zora effortless.
          </p>
          
          <Button variant="primary" size="lg" withArrow>
            Request Early Access
          </Button>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Dashboard mockup with shadow and gradient border */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/50">
            <div className="absolute inset-0 bg-gradient-to-r from-zora-purple/20 to-zora-blue/20 rounded-xl"></div>
            
            {/* Mockup header */}
            <div className="bg-slate-800 p-4 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mx-auto bg-slate-700 rounded-full px-4 py-1 text-slate-300 text-sm font-mono">
                app.zoramuse.io
              </div>
            </div>
            
            {/* Dashboard content */}
            <div className="bg-white p-6 grid grid-cols-6 gap-6 h-[500px]">
              {/* Sidebar */}
              <div className="col-span-1 bg-slate-50 rounded-lg p-4 flex flex-col gap-4">
                <div className="h-8 bg-zora-purple/20 rounded-md"></div>
                <div className="h-6 bg-slate-200 rounded-md"></div>
                <div className="h-6 bg-slate-200 rounded-md"></div>
                <div className="h-6 bg-slate-200 rounded-md"></div>
                <div className="h-6 bg-slate-200 rounded-md"></div>
                <div className="mt-auto h-6 bg-slate-300 rounded-md"></div>
              </div>
              
              {/* Main content */}
              <div className="col-span-5 flex flex-col gap-6">
                <div className="flex justify-between items-center">
                  <div className="h-8 w-48 bg-slate-100 rounded-md"></div>
                  <div className="h-10 w-32 bg-zora-purple/60 rounded-md"></div>
                </div>
                
                {/* Cards row */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-zora-purple/5 to-zora-blue/5 p-4 rounded-lg border border-slate-100 h-32">
                    <div className="h-5 w-24 bg-slate-200 rounded-md mb-4"></div>
                    <div className="h-8 w-32 bg-slate-300 rounded-md"></div>
                    <div className="h-4 w-20 bg-zora-purple/30 rounded-md mt-2"></div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-zora-orange/5 to-zora-blue/5 p-4 rounded-lg border border-slate-100 h-32">
                    <div className="h-5 w-24 bg-slate-200 rounded-md mb-4"></div>
                    <div className="h-8 w-32 bg-slate-300 rounded-md"></div>
                    <div className="h-4 w-20 bg-zora-orange/30 rounded-md mt-2"></div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-zora-blue/5 to-zora-green/5 p-4 rounded-lg border border-slate-100 h-32">
                    <div className="h-5 w-24 bg-slate-200 rounded-md mb-4"></div>
                    <div className="h-8 w-32 bg-slate-300 rounded-md"></div>
                    <div className="h-4 w-20 bg-zora-blue/30 rounded-md mt-2"></div>
                  </div>
                </div>
                
                {/* Chart area */}
                <div className="bg-slate-50 rounded-lg p-4 h-64 flex flex-col gap-3">
                  <div className="h-6 w-48 bg-slate-200 rounded-md"></div>
                  <div className="flex-1 flex items-end px-4">
                    {/* Chart bars */}
                    {[40, 65, 35, 85, 55, 70, 30, 60, 45, 75, 50, 80].map((height, i) => (
                      <div key={i} className="flex-1 mx-1">
                        <div 
                          className="bg-gradient-to-t from-zora-purple to-zora-blue rounded-t-sm" 
                          style={{ height: `${height}%` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                  <div className="h-4 flex justify-between px-4">
                    <div className="h-4 w-6 bg-slate-200 rounded-md"></div>
                    <div className="h-4 w-6 bg-slate-200 rounded-md"></div>
                    <div className="h-4 w-6 bg-slate-200 rounded-md"></div>
                    <div className="h-4 w-6 bg-slate-200 rounded-md"></div>
                    <div className="h-4 w-6 bg-slate-200 rounded-md"></div>
                    <div className="h-4 w-6 bg-slate-200 rounded-md"></div>
                  </div>
                </div>
                
                {/* Bottom row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 rounded-lg p-4 h-48 flex flex-col gap-2">
                    <div className="h-6 w-32 bg-slate-200 rounded-md"></div>
                    <div className="h-5 w-48 bg-slate-100 rounded-md"></div>
                    <div className="h-5 w-full bg-slate-100 rounded-md"></div>
                    <div className="h-5 w-3/4 bg-slate-100 rounded-md"></div>
                    <div className="h-5 w-5/6 bg-slate-100 rounded-md"></div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-zora-purple/10 to-zora-blue/10 rounded-lg p-4 h-48 flex flex-col">
                    <div className="h-6 w-36 bg-slate-200 rounded-md mb-2"></div>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="h-20 w-20 rounded-full bg-gradient-to-r from-zora-purple to-zora-blue flex items-center justify-center">
                        <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center">
                          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-zora-purple/60 to-zora-blue/60"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="h-8 w-28 bg-zora-purple/60 rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-zora-purple/30 rounded-full blur-xl"></div>
          <div className="absolute -top-6 -right-6 w-16 h-16 bg-zora-blue/30 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;
