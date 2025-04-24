
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const scrollToReservation = () => {
    document.getElementById('reservation')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section 
      id="home" 
      className="relative h-screen min-h-[600px] bg-cover bg-center flex items-center" 
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                          url('/images/img/rest.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Authentic Tunisian Cuisine
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            Discover the exquisite flavors and rich culinary traditions of Tunisia in the heart of the city.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={scrollToReservation}
              className="bg-tunisia-terracotta hover:bg-tunisia-coral/40 text-white px-8 py-6 text-lg"
            >
              Book a Table
            </Button>
            <Button 
               variant="outline" 
               onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
               className="border-white hover:border-transparent hover:bg-white/40 text-black px-8 py-6 text-lg"
              >
              View Menu
            </Button>

          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
    </section>
  );
};

export default Hero;
