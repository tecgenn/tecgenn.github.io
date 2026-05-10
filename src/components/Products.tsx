import type React from "react";
import { Button, SectionHeader } from "./ui";

const CheckIcon = () => (
  <svg
    className="w-6 h-6 text-cyan-400 mr-3 shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const PlayIcon = () => (
  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
      clipRule="evenodd"
    />
  </svg>
);

interface Product {
  name: string;
  image: string;
  description: string;
  features: string[];
  videoUrl?: string;
  target?: string;
  price: string;
  purchaseUrl: string;
  isEbook?: boolean;
}

const products: Product[] = [
  {
    name: "VidPilot",
    image: "/assets/vidpilot.webp",
    description:
      "Crie vídeos virais em segundos, escolha o formato, cor das legendas, narração com IA em português e inglês, e receba o título, a descrição e tags otimizadas para máxima performance - é só copiar e colar.",
    features: [
      "Criação de vídeos automática",
      "Legendas dinâmicas e narração com IA",
      "Uso Ilimitado com APIs Gratuitas",
      "Geração de Título, Descrição e Tags",
      "Videos 16:9(Padrão) e 9:16(Reels e Shorts)",
    ],
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    price: "R$49,90",
    purchaseUrl: "https://www.vidpilot.com.br",
  },
  {
    name: "ClipNews",
    image: "/assets/clipnews.webp",
    description:
      "Transforme qualquer notícia em um vídeo profissional em formato de telejornal, com barra de últimas notícias e visual moderno otimizado para engajamento.",
    features: [
      "Notícia em vídeo com um clique",
      "Formato de Telejornal Profissional",
      "Uso Ilimitado com APIs Gratuitas",
      "Otimizado para engajamento",
      "Narração automática com IA",
    ],
    videoUrl:
      "https://www.youtube.com/watch?v=videoseries?list=PLx0sYbCqOb8TBPRLp9TqA2CDh2Hj_9G43",
    price: "R$49,90",
    purchaseUrl: "https://www.clipnews.com.br",
  },
  {
    name: "Ebook Renda Automatica IA",
    image: "/assets/renda-automatica-ia.webp",
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
    <section id="products" className="py-12 sm:py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#0A0A1A] rounded-2xl py-16 sm:py-20 shadow-depth">
        <SectionHeader
          title="Conheça Nossas Ferramentas Exclusivas"
          description="Tudo que você precisa para automatizar sua criação de conteúdo e monetizar com IA."
        />

        <div className="mt-16 space-y-20">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16"
            >
              <div
                className={`w-full flex items-center justify-center ${index % 2 !== 0 ? "lg:order-last" : ""}`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className={`rounded-xl object-contain glow-shadow ${
                    product.isEbook ? "max-w-md max-h-128" : "max-w-sm"
                  }`}
                />
              </div>

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
                  {!product.isEbook && product.videoUrl && (
                    <Button
                      as="a"
                      href={product.videoUrl}
                      variant="secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <PlayIcon />
                      Ver Exemplo
                    </Button>
                  )}
                  <div className="grow sm:grow-0">
                    <Button
                      as="a"
                      href={product.purchaseUrl}
                      variant="outline"
                      size="md"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      Por apenas {product.price}
                    </Button>
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
