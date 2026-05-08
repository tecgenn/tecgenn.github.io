import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative py-24 md:py-32">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Desbloqueie Novas Fontes de Renda com <span className="gradient-text">Inteligência Artificial</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
          Aprenda a criar e monetizar conteúdo de forma automatizada e lucre na nova era digital com um único investimento.
        </p>
        <div className="mt-10">
          <a
            href="https://www.pacotecompleto.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-4 px-10 rounded-full hover:opacity-90 transition-transform transform hover:scale-105 shadow-lg shadow-cyan-500/40 text-lg"
          >
            Acessar Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
