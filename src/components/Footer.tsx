
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tunisia-navy text-white py-8 border-t border-white/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4">
              <span className="text-tunisia-sand">Dar</span> Yasmine
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Experience authentic Tunisian cuisine in an elegant setting. Our restaurant brings the flavors of Tunisia to your table.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>11:30am - 10:00pm</span>
              </li>
              <li className="flex justify-between">
                <span>Friday - Saturday</span>
                <span>11:30am - 11:00pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>12:00pm - 9:00pm</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-sm text-gray-300 mb-3">
              Subscribe to our newsletter for special offers and updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 bg-white/10 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-tunisia-terracotta w-full"
              />
              <button 
                type="submit" 
                className="bg-tunisia-terracotta hover:bg-tunisia-coral text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-6 border-t border-white/10 text-center text-sm text-gray-400">
          <p>© {currentYear} Dar Yasmine Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
