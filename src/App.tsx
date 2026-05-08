import type React from 'react';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Products from './components/Products';
import ScrollToTopButton from './components/ScrollToTopButton';
import ShapeGrid from './components/ShapeGrid';
import Testimonials from './components/Testimonials';

const App: React.FC = () => {
  return (
    <div className="relative z-10">
      <ShapeGrid
        speed={0.2}
        squareSize={30}
        direction="diagonal"
        borderColor="#008cb5"
        hoverFillColor="#06b6d4"
        shape="hexagon"
        hoverTrailAmount={1}
        className="fixed inset-0 w-screen h-screen z-0 pointer-events-none"
      />
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
