import { Link, useLocation } from "wouter";
import { EstuaryLogoHeader } from "./logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const isHomePage = location === '/';

  return (
    <nav className="relative z-50 bg-estuary-cream/90 backdrop-blur-sm border-b border-estuary-sage/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <EstuaryLogoHeader />
            <span className="text-2xl font-medium font-fredoka text-estuary-text">Estuary</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {isHomePage ? (
              <>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-estuary-text hover:text-estuary-teal transition-colors"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-estuary-text hover:text-estuary-teal transition-colors"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('download')}
                  className="text-estuary-text hover:text-estuary-teal transition-colors"
                >
                  Download
                </button>
              </>
            ) : (
              <Link href="/" className="text-estuary-text hover:text-estuary-teal transition-colors">
                Home
              </Link>
            )}
            {/* <Link href="/team" className="text-estuary-text hover:text-estuary-teal transition-colors">
              About Us
            </Link> */}
          </div>
          
          <button 
            className="md:hidden text-estuary-text"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-estuary-sage/20">
            <div className="flex flex-col space-y-4">
              {isHomePage ? (
                <>
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="text-estuary-text hover:text-estuary-teal transition-colors text-left"
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => scrollToSection('features')}
                    className="text-estuary-text hover:text-estuary-teal transition-colors text-left"
                  >
                    Features
                  </button>
                  <button 
                    onClick={() => scrollToSection('download')}
                    className="text-estuary-text hover:text-estuary-teal transition-colors text-left"
                  >
                    Download
                  </button>
                </>
              ) : (
                <Link 
                  href="/" 
                  className="text-estuary-text hover:text-estuary-teal transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              )}
              <Link 
                href="/team" 
                className="text-estuary-text hover:text-estuary-teal transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Team
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
