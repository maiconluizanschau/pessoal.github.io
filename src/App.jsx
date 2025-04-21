import React from "react";
import { Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import './index.css'; // ou './App.css', dependendo de onde você colocou os estilos

const Section = ({ title, children }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white p-6 rounded-2xl shadow-md space-y-4"
  >
    <h2 className="text-2xl font-semibold text-primary">{title}</h2>
    {children}
  </motion.section>
);

export default function App() {
  return (
    <main className="min-h-screen bg-gray-100 p-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        <header className="text-center space-y-4">
          <img src="./maiconluizanschau.jpg" alt="Maicon Luiz Anschau" className="w-32 h-32 rounded-full mx-auto border-4 border-primary" />
          <h1 className="text-4xl font-bold text-primary">Maicon Luiz Anschau</h1>
          <p className="text-lg text-gray-600">
            Tech Lead | Especialista em Soluções Digitais | Liderança em Produtos e Equipes de Alta Performance
          </p>
          <div className="flex justify-center gap-4">
            <a href="mailto:maiconluizanschau@gmail.com" target="_blank" rel="noopener noreferrer">
              <button className="bg-primary text-white px-4 py-2 rounded flex items-center gap-2">
                <Mail size={16} /> E-mail
              </button>
            </a>
            <a href="https://www.linkedin.com/in/maicon-luiz-anschau/" target="_blank" rel="noopener noreferrer">
              <button className="bg-secondary text-white px-4 py-2 rounded flex items-center gap-2">
                <Linkedin size={16} /> LinkedIn
              </button>
            </a>
          </div>
        </header>

        <Section title="Sobre Mim">
          <p>
            Profissional com sólida experiência na liderança técnica e desenvolvimento de projetos em setores como Bancos,
            Agências, Saúde, Software Houses e Aplicativos de Relacionamento. Especialista em impulsionar a transformação digital,
            otimizar processos e entregar soluções tecnológicas de alto impacto.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Versatilidade Multissetorial:</strong> Atuação bem-sucedida em ambientes diversos.</li>
            <li><strong>Gestão de Projetos:</strong> Liderança de iniciativas estratégicas com foco em eficiência e inovação.</li>
            <li><strong>Transformação Digital:</strong> Condução de projetos de modernização.</li>
            <li><strong>Metodologias Ágeis:</strong> Promoção de práticas ágeis e cultura colaborativa.</li>
            <li><strong>Integração TI-Negócio:</strong> Comunicação entre áreas técnicas e executivas.</li>
            <li><strong>Foco em Rentabilidade:</strong> Planejamento estratégico com foco em ROI.</li>
            <li><strong>Visão Cliente-Centrada:</strong> Soluções alinhadas às necessidades reais.</li>
            <li><strong>Relacionamento e Liderança:</strong> Relações sólidas com equipes e stakeholders.</li>
          </ul>
        </Section>

        <Section title="Experiência">
          <div className="grid gap-4">
            <div className="border rounded p-4 shadow-sm">
              <h3 className="text-xl font-bold">Líder Técnico</h3>
              <p className="text-sm text-gray-500">Grupo Argenta</p>
              <p className="mt-2">
                Responsável pela liderança de equipes, definição de metodologias, integração de sistemas e gestão de PDI.
                Condução de projetos de ponta a ponta com foco em performance e inovação.
              </p>
            </div> 
          </div>
          <div className="grid gap-4">
            <div className="border rounded p-4 shadow-sm">
              <h3 className="text-xl font-bold">Analista de Desenvolvimento Sênior</h3>
              <p className="text-sm text-gray-500">Paraná Banco</p>
              <p className="mt-2">
              Responsável pelo desenvolvimento e manutenção de plataformas institucionais e integrações com sistemas como
              Salesforce. Gestão de projetos, definição de escopo, requisitos e documentação técnica, garantindo entrega eficiente e governança.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="border rounded p-4 shadow-sm">
              <h3 className="text-xl font-bold">Desenvolvedor Full-Stack Pleno</h3>
              <p className="text-sm text-gray-500">Hogarth Worldwide</p>
              <p className="mt-2">
              Desenvolvendo soluções para grandes marcas como Nestlé, Tesla e BMW. Experiência em tecnologias como PHP,
              React.js e .NET, com foco em performance, escalabilidade e qualidade.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="border rounded p-4 shadow-sm">
              <h3 className="text-xl font-bold">Programador</h3>
              <p className="text-sm text-gray-500">Animati netPACS</p>
              <p className="mt-2">
              Atuação na evolução de plataformas Java, focando na melhoria de desempenho e eficiência. 
              Desenvolvimento de soluções para otimização na identificação de exames de raio-X, aprimorando
              a precisão e agilidade no processamento de imagens médicas.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="border rounded p-4 shadow-sm">
              <h3 className="text-xl font-bold">Desenvolvedor de software</h3>
              <p className="text-sm text-gray-500">Sfhera Software</p>
              <p className="mt-2">
              Desenvolvimento de soluções web, incluindo programas de fidelidade e PWA para controle de 
              entradas e saídas. Liderança em gestão de projetos com Scrum e desenvolvimento
              de interfaces e integração de APIs para websites como Delivery VIP e Ristore.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="border rounded p-4 shadow-sm">
              <h3 className="text-xl font-bold">CEO</h3>
              <p className="text-sm text-gray-500">Cleo App</p>
              <p className="mt-2">
              Fui um dos vencedores do Startup Weekend Santa Maria, onde, junto com uma equipe de 
              empreendedores, criamos uma inovadora rede de relacionamento voltada para o público feminino.
              Desde então, tenho liderado o planejamento, execução e desenvolvimento do aplicativo da Cleo,
              uma startup que conquistou investimento anjo e passou por um programa de aceleração com a
              Semente Negócios, em Porto Alegre - RS. Minha expertise tem sido fundamental para acelerar o
              crescimento e impactar positivamente o mercado.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="border rounded p-4 shadow-sm">
              <h3 className="text-xl font-bold">Programador</h3>
              <p className="text-sm text-gray-500">Mercanteria</p>
              <p className="mt-2">
              Atuei no desenvolvimento e evolução da plataforma Mercateria, um e-commerce inovador que 
              permite pedidos online com entrega agendada. Responsável por melhorias contínuas, testes com
              usuários finais e decisões técnicas e funcionais para garantir uma experiência fluida e de
              valor para o cliente.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="border rounded p-4 shadow-sm">
              <h3 className="text-xl font-bold">Programador</h3>
              <p className="text-sm text-gray-500">I3 Tecnologia</p>
              <p className="mt-2">
              Desenvolvi soluções tecnológicas para segurança, automação e treinamento especializado, 
              incluindo sistemas de portaria virtual e plataformas de simulação para tropas militares e 
              forças de segurança. Trabalhei com tecnologias como ASP.NET, C#, e PostgreSQL para 
              entregar soluções robustas e seguras com alto nível de exigência técnica.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Formação Acadêmica">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>MBA em Tecnologia para Negócios: AI, Data Science e Big Data</strong> –PUCRS - Pontifícia Universidade Católica do Rio Grande do Sul</li>
          <li><strong>Pós:Graduação: Business Intelligence & Analytics</strong> –Escola Conquer</li>
          <li><strong>Pós:Graduação: Tecnologias da informação e comunicação aplicadas a educação</strong> –Universidade Federal de Santa Maria (UFSM)</li>
          <li><strong>Graduação: Sistemas para Internet</strong> –Universidade Federal de Santa Maria (UFSM)</li>
        </ul>
        </Section>

        <Section title="Certificações e Cursos Complementares">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Scrum Fundamentals Certified</strong> – SCRUMstudy</li>
            <li><strong>Product Management</strong> – Foco em estratégia e execução</li>
            <li><strong>Arquitetura de Software</strong> – Sistemas escaláveis e de alta performance</li>
            <li><strong>Formação em Liderança Técnica</strong> – Liderança de times ágeis</li>
          </ul>
        </Section>

        <Section title="Contato">
          <p>Você pode entrar em contato comigo pelo LinkedIn ou e-mail. Estou aberto a novas conexões e projetos!</p>
        </Section>
      </div>
    </main>
  );
}
