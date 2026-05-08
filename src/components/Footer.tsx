import type React from 'react';
import { useState } from 'react';
import { Button, Modal } from './ui';

const TermsContent: React.FC = () => (
  <>
    <p>
      Bem-vindo à TecGenn. Ao acessar e usar nossos serviços, você concorda em cumprir e se vincular aos seguintes
      termos e condições de uso. Por favor, leia-os com atenção.
    </p>
    <h3 className="font-bold text-white">1. Uso dos Serviços</h3>
    <p>
      Os serviços e produtos fornecidos pela TecGenn são para seu uso pessoal e não comercial. Você concorda em não
      reproduzir, duplicar, copiar, vender, revender ou explorar qualquer parte do serviço sem nossa permissão expressa
      por escrito.
    </p>
    <h3 className="font-bold text-white">2. Contas de Usuário</h3>
    <p>
      Para acessar alguns recursos, você pode ser solicitado a fornecer informações de registro. É uma condição do seu
      uso que todas as informações que você fornece sejam corretas, atuais e completas.
    </p>
    <h3 className="font-bold text-white">3. Propriedade Intelectual</h3>
    <p>
      O Serviço e seu conteúdo original, recursos e funcionalidades são e permanecerão propriedade exclusiva da TecGenn
      e de seus licenciadores.
    </p>
    <h3 className="font-bold text-white">4. Rescisão</h3>
    <p>
      Podemos rescindir ou suspender seu acesso ao nosso serviço imediatamente, sem aviso prévio ou responsabilidade,
      por qualquer motivo, incluindo, sem limitação, se você violar os Termos.
    </p>
  </>
);

const PrivacyPolicyContent: React.FC = () => (
  <>
    <p>
      Sua privacidade é importante para nós. É política da TecGenn respeitar sua privacidade em relação a qualquer
      informação sua que possamos coletar em nosso site.
    </p>
    <h3 className="font-bold text-white">1. Informações que Coletamos</h3>
    <p>
      Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo
      por meios justos e legais, com o seu conhecimento e consentimento.
    </p>
    <h3 className="font-bold text-white">2. Como Usamos Suas Informações</h3>
    <p>
      Usamos as informações que coletamos para operar, manter e fornecer os recursos e a funcionalidade do Serviço, para
      analisar como o Serviço é usado, diagnosticar problemas técnicos e de serviço, manter a segurança e personalizar o
      conteúdo.
    </p>
    <h3 className="font-bold text-white">3. Segurança dos Dados</h3>
    <p>
      Estamos comprometidos em proteger a segurança de suas informações pessoais. Usamos uma variedade de tecnologias e
      procedimentos de segurança para ajudar a proteger suas informações pessoais contra acesso, uso ou divulgação não
      autorizados.
    </p>
    <h3 className="font-bold text-white">4. Links para Outros Sites</h3>
    <p>
      Nosso serviço pode conter links para outros sites que não são operados por nós. Se você clicar em um link de
      terceiros, será direcionado para o site desse terceiro. Aconselhamos vivamente que reveja a Política de
      Privacidade de todos os sites que visitar.
    </p>
  </>
);

const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'terms' | 'privacy' | null>(null);

  const openModal = (type: 'terms' | 'privacy') => setModalType(type);
  const closeModal = () => setModalType(null);

  return (
    <>
      <footer className="bg-[#0A0A1A]/80 backdrop-blur-lg border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-center sm:text-left">
              <p className="text-gray-400">&copy; {new Date().getFullYear()} TecGenn. Todos os direitos reservados.</p>
              <p className="text-gray-400 mt-1">
                Contato:{' '}
                <a href="mailto:tecgenn@gmail.com" className="hover:text-cyan-400 transition-colors">
                  tecgenn@gmail.com
                </a>
              </p>
            </div>
            <div className="flex space-x-6">
              <Button variant="ghost" size="sm" onClick={() => openModal('terms')}>
                Termos de Uso
              </Button>
              <Button variant="ghost" size="sm" onClick={() => openModal('privacy')}>
                Política de Privacidade
              </Button>
            </div>
          </div>
        </div>
      </footer>
      <Modal
        isOpen={modalType !== null}
        onClose={closeModal}
        title={modalType === 'terms' ? 'Termos de Uso' : 'Política de Privacidade'}
      >
        {modalType === 'terms' ? <TermsContent /> : <PrivacyPolicyContent />}
      </Modal>
    </>
  );
};

export default Footer;
