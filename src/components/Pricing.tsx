import type React from 'react';
import { Badge, SectionHeader } from './ui';

const CheckCircleIcon = () => (
  <svg className="w-6 h-6 text-cyan-400 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const SecuritySeals: React.FC = () => (
  <div className="mt-6 flex justify-center items-center space-x-4 sm:space-x-6 text-gray-400">
    <div className="flex items-center space-x-2">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
      <span className="text-xs">Ambiente Seguro</span>
    </div>
    <div className="text-gray-700 hidden sm:block">|</div>
    <div className="flex items-center space-x-2">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
      <span className="text-xs">Compra Protegida</span>
    </div>
  </div>
);

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-12 sm:py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#0A0A1A] rounded-2xl py-16 sm:py-20 shadow-depth">
        <SectionHeader
          title="Oferta Especial por Tempo Limitado"
          description="Acesso imediato e vitalício a todas as ferramentas com um pagamento único."
        />

        <div className="mt-16 bg-gray-900/50 border-2 border-cyan-500 rounded-2xl shadow-2xl glow-shadow p-8 relative overflow-hidden">
          <div className="absolute -top-4 -right-4 transform rotate-45 translate-x-12 translate-y-3">
            <Badge variant="warning" className="font-bold py-2 px-6 text-black bg-yellow-400 border-yellow-400">
              MAIS POPULAR
            </Badge>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white">Pacote Completo TecGenn</h3>
            <p className="mt-2 text-gray-400">VidPilot + ClipNews + Ebook Renda Automática IA</p>

            <div className="my-8">
              <span className="text-4xl text-gray-500 line-through decoration-1">de R$199,90</span>
              <div className="flex justify-center items-baseline mt-2">
                <span className="text-white text-2xl font-medium mr-2">3x de</span>
                <span className="text-7xl font-extrabold gradient-text">R$37,90</span>
              </div>
              <p className="text-white font-semibold text-lg mt-1">ou R$99,90 à vista no PIX</p>
            </div>

            <a
              href="https://www.pacotecompleto.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="ripple-btn w-full"
            >
              <span className="ripple" />
              QUERO O COMBO COM DESCONTO!
              <span className="ripple" />
            </a>
            <p className="mt-4 text-sm text-gray-500">Compra segura e acesso imediato.</p>
            <SecuritySeals />
          </div>

          <div className="mt-10 border-t border-gray-700 pt-8">
            <h4 className="text-xl font-semibold text-white text-center">Tudo que você recebe:</h4>
            <ul className="mt-6 space-y-4 max-w-md mx-auto">
              <li className="flex items-center">
                <CheckCircleIcon />
                <span className="text-gray-200">
                  <span className="font-bold">VidPilot</span> - Acesso Vitalício
                </span>
              </li>
              <li className="flex items-center">
                <CheckCircleIcon />
                <span className="text-gray-200">
                  <span className="font-bold">ClipNews</span> - Acesso Vitalício
                </span>
              </li>
              <li className="flex items-center">
                <CheckCircleIcon />
                <span className="text-gray-200">
                  <span className="font-bold">Ebook - Renda Automática IA</span> - Completo
                </span>
              </li>
              <li className="flex items-center">
                <CheckCircleIcon />
                <span className="text-gray-200">Custo Único, Sem Mensalidades (APIs Gratuitas)</span>
              </li>
              <li className="flex items-center">
                <CheckCircleIcon />
                <span className="text-gray-200">Atualizações Futuras Gratuitas</span>
              </li>
              <li className="flex items-center">
                <CheckCircleIcon />
                <span className="text-gray-200">Suporte</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
