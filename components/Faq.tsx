import React, { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-6"
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <svg
          className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="pb-6 pr-4 text-gray-300">{answer}</div>
      </div>
    </div>
  );
};


const faqData = [
  {
    question: "O pagamento é único?",
    answer: "Sim! Você paga apenas uma vez e tem acesso VITALÍCIO a todos os produtos do pacote, incluindo todas as futuras atualizações sem nenhum custo adicional."
  },
  {
    question: "Como recebo o acesso?",
    answer: "O acesso é imediato. Assim que seu pagamento for confirmado, você receberá um e-mail com todas as instruções, links e dados para acessar as ferramentas e o ebook."
  },
  {
    question: "Vou ter custos extras com APIs ou mensalidades?",
    answer: "Não! Os SAAS VidPilot e ClipNews foram desenvolvidos para utilizar APIs que não geram custos para você. O pagamento é realmente único, garantindo seu acesso vitalício sem surpresas ou mensalidades."
  },
  {
    question: "Preciso de algum conhecimento técnico?",
    answer: "Não! Nossas ferramentas foram projetadas para serem extremamente intuitivas e fáceis de usar. O ebook também é escrito em uma linguagem clara e direta, ideal para iniciantes."
  },
  {
    question: "Existe algum tipo de suporte?",
    answer: "Com certeza. Nossas ferramentas são muito intuitivas e fáceis de usar, mas você terá todo o suporte necessário com atendimento premium via e-mail em tecgenn@gmail.com"
  },
  {
    "question": "Preciso instalar algum programa para usar?",
    "answer": "Sim, cada ferramenta vem acompanhada de um guia detalhado de instalação, para você seguir passo a passo, realizado apenas na primeira utilização. Após isso, não será necessário instalar mais nada — exceto o eBook, que não requer instalação."
  }

]

const Faq: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#0A0A1A]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Perguntas Frequentes</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">Ainda tem dúvidas? A gente te ajuda a resolver.</p>
        </div>
        <div className="mt-12">
          {faqData.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;