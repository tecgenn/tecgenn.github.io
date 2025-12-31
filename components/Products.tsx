import React from "react";

const CheckIcon = () => (
  <svg
    className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    ></path>
  </svg>
);

const PlayIcon = () => (
  <svg
    className="w-6 h-6 mr-2"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const products = [
  {
    name: "VidPilot",
    image: "/assets/vidpilot.png",
    description:
      "Crie vídeos virais em segundos, escolha o formato, cor das legendas, narração com IA em português e inglês, e receba o título, a descrição e tags otimizadas para máxima performance - é só copiar e colar.",
    features: [
      "Criação de vídeos automática",
      "Legendas dinâmicas e narração com IA",
      "Uso Ilimitado com APIs Gratuitas",
      "Geração de Título, Descrição e Tags",
      "Videos 16:9(Padrão) e 9:16(Reels e Shorts)",
    ],
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Placeholder video
    price: "R$49,90",
    purchaseUrl: "https://www.vidpilot.com.br",
  },
  {
    name: "ClipNews",
    image: "/assets/clipnews.png",
    description:
      "Transforme qualquer notícia em um vídeo profissional em formato de telejornal, com repórter e barra de últimas notícias, e uma Thumbnail para maximizar o engajamento.",
    features: [
      "Notícia em vídeo com um clique",
      "Formato de Telejornal Profissional",
      "Uso Ilimitado com APIs Gratuitas",
      "Otimizado para engajamento",
      "Reporter virtual",
    ],
    videoUrl:
      "https://www.youtube.com/watch?v=videoseries?list=PLx0sYbCqOb8TBPRLp9TqA2CDh2Hj_9G43", // Placeholder news playlist
    price: "R$49,90",
    purchaseUrl: "https://www.clipnews.com.br",
  },
  {
    name: "Ebook Renda Automatica IA",
    image: "/assets/renda-automatica-ia.png",
    description:
      "O guia definitivo para criar fontes de renda passiva utilizando o poder da inteligência artificial, mesmo que você seja um completo iniciante, com exemplos práticos para aplicar imediatamente.",
    features: [
      "Estratégias validadas de renda com IA",
      "Passo a passo para iniciantes",
      "Ferramentas e prompts secretos",
      "Estudos de caso reais",
      "Acesso vitalício ao conteúdo",
    ],
    isEbook: true,
    price: "R$29,90",
    purchaseUrl: "https://www.rendaautomaticaia.com.br",
  },
];

const Products: React.FC = () => {
  return (
    <section id="products" className="py-20 sm:py-28 bg-[#0A0A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Conheça Nossas Ferramentas Exclusivas
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Tudo que você precisa para automatizar sua criação de conteúdo e
            monetizar com IA.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16"
            >
              {/* Image Side */}
              <div
                className={`w-full flex items-center justify-center ${index % 2 !== 0 ? "lg:order-last" : ""
                  }`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className={`rounded-xl object-contain glow-shadow ${product.isEbook ? "max-w-md max-h-[32rem]" : "max-w-sm"
                    }`}
                />
              </div>

              {/* Text Side */}
              <div className="w-full">
                <h3 className="text-3xl font-bold text-white">
                  {product.name}
                </h3>
                <p className="mt-4 text-gray-300">{product.description}</p>
                <ul className="mt-6 space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckIcon />
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  {!product.isEbook && (
                    <a
                      href={product.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-gray-800/50 border border-cyan-500/30 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <PlayIcon />
                      Ver Exemplo
                    </a>
                  )}
                  <div className="flex-grow sm:flex-grow-0">
                    <a
                      href={product.purchaseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-block text-center bg-transparent border-2 border-cyan-500 text-cyan-400 font-bold py-3 px-6 rounded-lg hover:bg-cyan-500 hover:text-white transition-colors"
                    >
                      Por apenas {product.price}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
