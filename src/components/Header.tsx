
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-playfair font-bold text-tunisia-terracotta">
            <span className="text-tunisia-navy">Dar</span> Yasmine
          </h1>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-gray-700 hover:text-tunisia-terracotta transition-colors font-medium"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('menu')}
            className="text-gray-700 hover:text-tunisia-terracotta transition-colors font-medium"
          >
            Menu
          </button>
          <button 
            onClick={() => scrollToSection('reservation')}
            className="text-gray-700 hover:text-tunisia-terracotta transition-colors font-medium"
          >
            Reservation
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-gray-700 hover:text-tunisia-terracotta transition-colors font-medium"
          >
            Contact
          </button>
          <Button 
            onClick={() => scrollToSection('reservation')}
            className="bg-tunisia-terracotta hover:bg-tunisia-coral text-white font-medium"
          >
            Book a Table
          </Button>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 px-4 animate-fade-in">
          <div className="flex flex-col space-y-3">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-tunisia-terracotta py-2 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 hover:text-tunisia-terracotta py-2 transition-colors font-medium"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('reservation')}
              className="text-gray-700 hover:text-tunisia-terracotta py-2 transition-colors font-medium"
            >
              Reservation
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-tunisia-terracotta py-2 transition-colors font-medium"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('reservation')}
              className="bg-tunisia-terracotta hover:bg-tunisia-coral text-white font-medium w-full"
            >
              Book a Table
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
