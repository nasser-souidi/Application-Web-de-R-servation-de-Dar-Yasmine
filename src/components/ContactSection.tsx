
import React from 'react';
import { Mail, Phone, Home } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-tunisia-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto text-white">Contact Us</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            Have questions or need assistance? Feel free to reach out to us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-6 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
            <Phone size={36} className="text-tunisia-terracotta mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-center text-gray-300">+ (216) 25 328 268</p>
            <p className="text-center text-gray-300">Mon-Sun: 11:30am - 10pm</p>
          </div>
          
          <div className="flex flex-col items-center p-6 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
            <Mail size={36} className="text-tunisia-terracotta mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-center text-gray-300">info@daryasmine.com</p>
            <p className="text-center text-gray-300">reservations@daryasmine.com</p>
          </div>
          
          <div className="flex flex-col items-center p-6 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
            <Home size={36} className="text-tunisia-terracotta mb-4" />
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-center text-gray-300">Cheikh Mohamed Ennakhli</p>
            <p className="text-center text-gray-300">La Soukra, Tunis 2035, Tunisia.</p>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="max-w-4xl mx-auto aspect-video">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.5944505781316!2d10.1815228!3d36.8064949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd337f5e7ef543%3A0xd671924e714a0275!2sTunis%2C%20Tunisia!5e0!3m2!1sen!2sus!4v1650450951290!5m2!1sen!2sus" 
              className="w-full h-full border-0 rounded-lg" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
