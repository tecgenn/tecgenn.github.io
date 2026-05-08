import type React from 'react';
import { FaqItem, SectionHeader } from './ui';

interface FaqData {
  question: string;
  answer: string;
}

const faqData: FaqData[] = [
  {
    question: 'O pagamento é único?',
    answer:
      'Sim! Você paga apenas uma vez e tem acesso VITALÍCIO a todos os produtos do pacote, incluindo todas as futuras atualizações sem nenhum custo adicional.',
  },
  {
    question: 'Como recebo o acesso?',
    answer:
      'O acesso é imediato. Assim que seu pagamento for confirmado, você receberá um e-mail com todas as instruções, links e dados para acessar as ferramentas e o ebook.',
  },
  {
    question: 'Vou ter custos extras com APIs ou mensalidades?',
    answer:
      'Não! Os SAAS VidPilot e ClipNews foram desenvolvidos para utilizar APIs que não geram custos para você. O pagamento é realmente único, garantindo seu acesso vitalício sem surpresas ou mensalidades.',
  },
  {
    question: 'Preciso de algum conhecimento técnico?',
    answer:
      'Não! Nossas ferramentas foram projetadas para serem extremamente intuitivas e fáceis de usar. O ebook também é escrito em uma linguagem clara e direta, ideal para iniciantes.',
  },
  {
    question: 'Existe algum tipo de suporte?',
    answer:
      'Com certeza. Nossas ferramentas são muito intuitivas e fáceis de usar, mas você terá todo o suporte necessário com atendimento premium via e-mail em tecgenn@gmail.com',
  },
  {
    question: 'Preciso instalar algum programa para usar?',
    answer:
      'Sim, cada ferramenta vem acompanhada de um guia detalhado de instalação, para você seguir passo a passo, realizado apenas na primeira utilização. Após isso, não será necessário instalar mais nada — exceto o eBook, que não requer instalação.',
  },
];

const Faq: React.FC = () => {
  return (
    <section id="faq" className="py-12 sm:py-16 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#0A0A1A] rounded-2xl py-16 sm:py-20 shadow-depth">
        <SectionHeader title="Perguntas Frequentes" description="Ainda tem dúvidas? A gente te ajuda a resolver." />
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
