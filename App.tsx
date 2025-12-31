import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

const App: React.FC = () => {
  return (
    <div className="bg-[#0A0A1A] text-white overflow-x-hidden">
      <Header />
      <main className="pt-20">
        <Hero />
        <Products />
        <Testimonials />
        <Pricing />
        <Faq />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;