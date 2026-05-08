import React, { useState } from "react";

const Modal: React.FC<{
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}> = ({ title, onClose, children }) => {
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-[#0f172a] border border-cyan-500/30 rounded-lg shadow-xl w-full max-w-3xl max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-[#0f172a] px-6 py-4 flex justify-between items-center border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            &times;
          </button>
        </div>
        <div className="p-6 text-gray-300 space-y-4">{children}</div>
      </div>
    </div>
  );
};

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
      por meios justos e legais, com seu conhecimento e consentimento.
    </p>
    <h3 className="font-bold text-white">2. Como Usamos Suas Informações</h3>
    <p>
      Usamos as informações que coletamos para operar, manter e fornecer os recursos e a funcionalidade do Serviço, para
      analisar como o Serviço é usado, diagnosticar problemas técnicos e de serviço, manter a segurança e personalizar
      o conteúdo.
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
  const [modalType, setModalType] = useState<"terms" | "privacy" | null>(null);

  const openModal = (type: "terms" | "privacy") => setModalType(type);
  const closeModal = () => setModalType(null);

  return (
    <>
      <footer className="bg-black/20 border-t border-cyan-500/10">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-center sm:text-left">
              <p className="text-gray-400">&copy; {new Date().getFullYear()} TecGenn. Todos os direitos reservados.</p>
              <p className="text-gray-400 mt-1">
                Contato:{" "}
                <a href="mailto:tecgenn@gmail.com" className="hover:text-cyan-400 transition-colors">
                  tecgenn@gmail.com
                </a>
              </p>
            </div>
            <div className="flex space-x-6">
              <button onClick={() => openModal("terms")} className="text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </button>
              <button onClick={() => openModal("privacy")} className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </button>
            </div>
          </div>
        </div>
      </footer>
      {modalType && (
        <Modal title={modalType === "terms" ? "Termos de Uso" : "Política de Privacidade"} onClose={closeModal}>
          {modalType === "terms" ? <TermsContent /> : <PrivacyPolicyContent />}
        </Modal>
      )}
    </>
  );
};

export default Footer;
