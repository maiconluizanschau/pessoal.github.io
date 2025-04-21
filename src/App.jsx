import React from "react";
import { Mail, Linkedin } from "lucide-react";

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
        <p>
          Profissional com ampla experiência em desenvolvimento de software, liderança técnica e entrega de soluções escaláveis.
          Atuo como Tech Lead coordenando projetos como Sim Rede, Charrua, PStop e Simplifica. Minha abordagem combina visão estratégica,
          conhecimento técnico e foco em pessoas para gerar resultados reais.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Experiência</h2>
        <div className="border rounded p-4">
          <h3 className="text-xl font-bold">Líder Técnico e Desenvolvedor Full Stack</h3>
          <p className="text-sm text-gray-500">Sim Rede, Charrua, PStop, Simplifica</p>
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
          <li><strong>MBA em Tecnologia para Negócios: AI, Data Science e Big Data, Tecnologia da Informação</strong> – PUCRS - Pontifícia Universidade Católica do Rio Grande do Sul</li>
          <li><strong>Pós-graduação: Business Intelligence & AnalyticsPós-graduação Lato Sensu - Especialização, Business Intelligence & Analytics</strong>Escola Conquer</li>
          <li><strong>Pós-graduação: Tecnologias da informação e comunicação aplicadas a educação</strong> – Universidade Federal de Santa Maria (UFSM)</li>
          <li><strong>Graduação: Sistemas para Internet</strong> – Universidade Federal de Santa Maria (UFSM)</li>
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
