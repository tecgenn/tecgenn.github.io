import React from "react";

const Header: React.FC = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-[#0A0A1A]/80 backdrop-blur-lg border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#hero" className="flex items-center text-3xl font-bold">
              <img src="/assets/logo.webp" alt="TecGenn Logo" className="h-10 w-10 mr-2" />
              <span className="gradient-text">TecGenn</span>
            </a>
          </div>
          <div>
            <a
              href="https://www.pacotecompleto.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/30"
            >
              Combo Completo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
