
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import ReservationForm from '@/components/ReservationForm';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow mt-16">
        <Hero />
        <MenuSection />
        <ReservationForm />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
