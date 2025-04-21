import React from "react";
import { Mail, Linkedin } from "lucide-react";
import './index.css'; // ou './App.css', dependendo de onde você colocou os estilos

export default function App() {
  return (
    <main className="p-6 max-w-4xl mx-auto space-y-10 font-sans">
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Maicon Luiz Anschau</h1>
        <p className="text-lg text-gray-600">
          Tech Lead | Especialista em Soluções Digitais | Liderança em Produtos e Equipes de Alta Performance
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="mailto:maiconluizanschau@gmail.com" target="_blank" rel="noopener noreferrer">
            <button className="border px-4 py-2 rounded flex items-center gap-2"><Mail size={16} /> E-mail</button>
          </a>
          <a href="https://www.linkedin.com/in/maicon-luiz-anschau/" target="_blank" rel="noopener noreferrer">
            <button className="border px-4 py-2 rounded flex items-center gap-2"><Linkedin size={16} /> LinkedIn</button>
          </a>
        </div>
      </section>

      <section>
  <h2 className="text-2xl font-semibold mb-4">Sobre Mim</h2>
  <div className="space-y-4 text-justify">
    <p>
      Profissional com sólida experiência na liderança técnica e desenvolvimento de projetos em setores como Bancos, Agências, Saúde, Software Houses e Aplicativos de Relacionamento.
      Especialista em impulsionar a transformação digital, otimizar processos e entregar soluções tecnológicas de alto impacto.
    </p>
    <ul className="list-disc pl-6 space-y-1">
      <li><strong>Versatilidade Multissetorial:</strong> Atuação bem-sucedida em ambientes diversos, com rápida adaptação a diferentes contextos.</li>
      <li><strong>Gestão de Projetos:</strong> Liderança de iniciativas estratégicas com foco em eficiência, inovação e resultados mensuráveis.</li>
      <li><strong>Transformação Digital:</strong> Condução de projetos de modernização e automação de processos.</li>
      <li><strong>Metodologias Ágeis:</strong> Promoção de práticas ágeis e cultura colaborativa de desenvolvimento.</li>
      <li><strong>Integração TI-Negócio:</strong> Facilitação de comunicação entre áreas técnicas e executivas para decisões assertivas.</li>
      <li><strong>Foco em Rentabilidade:</strong> Planejamento estratégico para maximizar retorno de produtos e serviços.</li>
      <li><strong>Visão Cliente-Centrada:</strong> Criação de soluções alinhadas às necessidades reais dos usuários e do negócio.</li>
      <li><strong>Relacionamento e Liderança:</strong> Capacidade comprovada de construir relações sólidas com equipes, fornecedores e stakeholders.</li>
    </ul>
    <p>
      Se sua organização busca um líder técnico com visão estratégica, foco em inovação e entrega de valor, estou pronto para ajudar a transformar ideias em resultados.
    </p>
  </div>
</section>


      <section>
        <h2 className="text-2xl font-semibold mb-4">Experiência</h2>
        <div className="border rounded p-4">
          <h3 className="text-xl font-bold">Líder Técnico</h3>
          <p className="text-sm text-gray-500">Grupo Argenta</p>
          <p className="mt-2">
            Responsável pela liderança de equipes, definição de metodologias, integração de sistemas e gestão de PDI.
            Condução de projetos de ponta a ponta com foco em performance e inovação.
         
          </p>
        </div>
        <div className="border rounded p-4">
          <h3 className="text-xl font-bold">Líder Técnico</h3>
          <p className="text-sm text-gray-500">Grupo Argenta</p>
          <p className="mt-2">
            Responsável pela liderança de equipes, definição de metodologias, integração de sistemas e gestão de PDI.
            Condução de projetos de ponta a ponta com foco em performance e inovação.
         
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Projetos</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Sim Rede:</strong> Sistema de gestão de redes e conexões de dados</li>
          <li><strong>Charrua:</strong> Plataforma inteligente para gestão de combustível</li>
          <li><strong>PStop:</strong> Aplicativo de parada segura e controle logístico</li>
          <li><strong>Simplifica:</strong> Solução ágil para digitalização de processos internos</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Formação Acadêmica</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>MBA em Tecnologia para Negócios: AI, Data Science e Big Data</strong> –PUCRS - Pontifícia Universidade Católica do Rio Grande do Sul</li>
          <li><strong>Pós:Graduação: Business Intelligence & Analytics</strong> –Escola Conquer</li>
          <li><strong>Pós:Graduação: Tecnologias da informação e comunicação aplicadas a educação</strong> –Universidade Federal de Santa Maria (UFSM)</li>
          <li><strong>Graduação: Sistemas para Internet</strong> –Universidade Federal de Santa Maria (UFSM)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Certificações e Cursos Complementares</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Scrum Fundamentals Certified</strong> – SCRUMstudy</li>
          <li><strong>Product Management</strong> – Cursos de produto voltados para estratégia e execução</li>
          <li><strong>Arquitetura de Software</strong> – Foco em sistemas escaláveis e de alta performance</li>
          <li><strong>Formação em Liderança Técnica</strong> – Cursos voltados para liderança de times ágeis</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contato</h2>
        <p>Você pode entrar em contato comigo pelo LinkedIn ou e-mail.</p>
      </section>
    </main>
  );
}
