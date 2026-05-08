import React from "react";

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`w-5 h-5 ${className}`} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const testimonials = [
  {
    quote: "O VidPilot economizou horas do meu trabalho. A qualidade da narração e das legendas é impressionante!",
    name: "João P.",
    role: "Criador de Conteúdo",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "Com o ClipNews, meu portal de notícias ganhou um novo formato. A audiência amou os vídeos!",
    name: "Maria S.",
    role: "Jornalista",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "O ebook abriu minha mente para novas possibilidades. Já estou aplicando as estratégias e vendo resultados.",
    name: "Carlos A.",
    role: "Empreendedor Digital",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#0A0A1A]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">O Que Nossos Clientes Dizem</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Resultados reais de pessoas que transformaram seus negócios com a TecGenn.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-cyan-500/20 rounded-xl p-8 flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:border-cyan-500/50"
            >
              <div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="text-yellow-400" />
                  ))}
                </div>
                <blockquote className="mt-4 text-gray-300">
                  <p>" {testimonial.quote} "</p>
                </blockquote>
              </div>
              <footer className="mt-8">
                <div className="flex items-center">
                  <div className="shrink-0">
                    <img className="h-12 w-12 rounded-full" src={testimonial.avatar} alt={testimonial.name} loading="lazy" />
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-medium text-white">{testimonial.name}</div>
                    <div className="text-base text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
