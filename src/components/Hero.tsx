import type React from 'react';
import { Button } from './ui';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative py-24 md:py-32">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-[#0A0A1A] rounded-2xl py-16 md:py-20 shadow-depth">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Desbloqueie Novas Fontes de Renda com <span className="gradient-text">Inteligência Artificial</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
          Aprenda a criar e monetizar conteúdo de forma automatizada e lucre na nova era digital com um único
          investimento.
        </p>
        <div className="mt-10">
          <Button
            as="a"
            href="https://www.pacotecompleto.com.br"
            variant="primary"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-105 shadow-cyan-500/40"
          >
            Acessar Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
