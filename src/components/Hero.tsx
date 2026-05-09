import type React from 'react';
import ShinyText from './ShinyText';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative py-24 md:py-32">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-[#0A0A1A] rounded-2xl py-16 md:py-20 shadow-depth">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Desbloqueie Novas Fontes de Renda com
          <ShinyText
            text={'\u00A0Inteligência Artificial'}
            speed={2}
            delay={0}
            color="#01d4ff"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
          Aprenda a criar e monetizar conteúdo de forma automatizada e lucre na nova era digital com um único
          investimento.
        </p>
        <div className="mt-10 flex justify-center">
          <a href="https://www.pacotecompleto.com.br" target="_blank" rel="noopener noreferrer" className="ripple-btn">
            <span className="ripple" />
            Acessar Agora
            <span className="ripple" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
