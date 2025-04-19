
import React, { useState, useEffect } from "react";
import Button from "./Button";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="font-grotesk font-bold text-2xl md:text-3xl text-gradient">ZoraMuse</span>
            </a>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a href="#about" className="text-slate-700 hover:text-zora-purple font-medium">About</a>
              </li>
              <li>
                <a href="#features" className="text-slate-700 hover:text-zora-purple font-medium">Features</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-slate-700 hover:text-zora-purple font-medium">How It Works</a>
              </li>
            </ul>
          </nav>
          
          <div className="hidden md:flex space-x-4 items-center">
            <Button variant="outline" size="sm">
              Learn More
            </Button>
            <Button variant="primary" size="sm" withArrow>
              Launch App
            </Button>
          </div>
          
          <button
            className="md:hidden p-2 text-slate-700 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4">
            <nav>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#about"
                    className="text-slate-700 hover:text-zora-purple block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-slate-700 hover:text-zora-purple block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="text-slate-700 hover:text-zora-purple block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    How It Works
                  </a>
                </li>
                <li className="pt-2 flex flex-col space-y-3">
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                  <Button variant="primary" size="sm" className="w-full" withArrow>
                    Launch App
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
