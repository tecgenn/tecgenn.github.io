import type React from 'react';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import MatrixBackground from './components/MatrixBackground';
import Pricing from './components/Pricing';
import Products from './components/Products';
import ScrollToTopButton from './components/ScrollToTopButton';
import Testimonials from './components/Testimonials';

const App: React.FC = () => {
  return (
    <div className="relative z-10">
      <MatrixBackground />
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
