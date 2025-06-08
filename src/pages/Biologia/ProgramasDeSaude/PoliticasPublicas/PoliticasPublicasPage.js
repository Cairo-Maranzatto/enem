import React, { useState } from 'react';
import styles from './PoliticasPublicasPage.module.css';
import ConceptCard from '../../../../components/ConceptCard/ConceptCard';
import ConceptModal from '../../../../components/ConceptCard/ConceptModal';

const politicasPublicasConcepts = [
  {
    id: 'historico',
    conceptTitle: 'Histórico das Políticas',
    visualRepresentation: '📜🕰️🇧🇷',
    definition: 'A evolução da saúde pública no Brasil, das ações isoladas à criação do SUS como direito universal.',
    keywords: 'Reforma Sanitária, IAPs, Constituição de 1988',
    detailsHtml: `<div class="modal-content-custom"><p>A saúde pública no Brasil passou por diversas fases:</p><ul><li><strong>Período Colonial e Imperial:</strong> Ações isoladas, foco em controle de epidemias em portos e cidades importantes. Caráter filantrópico e privado predominante.</li><li><strong>República Velha (até 1930):</strong> Modelo campanhista, com Oswaldo Cruz e Carlos Chagas. Foco em saneamento e combate a doenças como febre amarela, peste bubônica e varíola. Criação do Departamento Nacional de Saúde Pública (1920).</li><li><strong>Era Vargas (1930-1945):</strong> Início da medicina previdenciária com os Institutos de Aposentadorias e Pensões (IAPs), atendendo categorias específicas de trabalhadores.</li><li><strong>Pós-1945 até Ditadura Militar:</strong> Expansão dos IAPs, unificados no INPS (Instituto Nacional de Previdência Social). Saúde ainda não era um direito universal.</li><li><strong>Ditadura Militar (1964-1985):</strong> Crise no modelo médico-assistencial privatista. Movimento da Reforma Sanitária ganha força, defendendo a saúde como direito de todos e dever do Estado.</li><li><strong>Nova República e Constituição de 1988:</strong> Criação do Sistema Único de Saúde (SUS), marco fundamental que estabelece a saúde como direito universal.</li></ul></div>`
  },
  {
    id: 'susPrincipios',
    conceptTitle: 'O SUS: Princípios',
    visualRepresentation: '💚🤝🏛️',
    definition: 'Baseado na universalidade, equidade e integralidade, com organização descentralizada e participação social.',
    keywords: 'Universalidade, Equidade, Integralidade, Controle Social',
    detailsHtml: `<div class="modal-content-custom"><p>O <strong>SUS</strong>, criado pela Constituição Federal de 1988 e regulamentado pelas Leis nº 8.080/90 e nº 8.142/90, é um dos maiores sistemas públicos de saúde do mundo.</p><p><strong>Princípios Doutrinários (Ideológicos):</strong></p><ul><li><strong>Universalidade:</strong> A saúde é um direito de todos os cidadãos, sem qualquer tipo de discriminação.</li><li><strong>Equidade:</strong> Tratar desigualmente os desiguais, investindo mais onde a carência é maior, visando diminuir as desigualdades.</li><li><strong>Integralidade:</strong> Atenção à saúde em todos os níveis (promoção, prevenção, tratamento e reabilitação), considerando o indivíduo como um todo.</li></ul><p><strong>Princípios Organizativos (Operacionais):</strong></p><ul><li><strong>Regionalização e Hierarquização:</strong> Organização dos serviços em redes de atenção à saúde, com diferentes níveis de complexidade, em regiões definidas.</li><li><strong>Descentralização Político-Administrativa:</strong> Com comando único em cada esfera de governo (União, Estados, Municípios).</li><li><strong>Participação da Comunidade (Controle Social):</strong> Através dos Conselhos e Conferências de Saúde.</li></ul></div>`
  },
  {
    id: 'niveisAtencao',
    conceptTitle: 'Níveis de Atenção',
    visualRepresentation: '🏥🩺🔬',
    definition: 'Organização dos serviços em Atenção Primária, Secundária e Terciária, de forma integrada e hierarquizada.',
    keywords: 'Atenção Básica, Média Complexidade, Alta Complexidade',
    detailsHtml: `<div class="modal-content-custom"><p>O SUS organiza a atenção à saúde em níveis de complexidade crescente:</p><ul><li><strong>Atenção Primária à Saúde (APS) ou Atenção Básica:</strong> É a porta de entrada preferencial do sistema. Foco na promoção da saúde, prevenção de doenças, diagnóstico, tratamento e reabilitação dos agravos mais comuns. Ex: Unidades Básicas de Saúde (UBS), Estratégia Saúde da Família (ESF). Resolve cerca de 85% dos problemas de saúde da população.</li><li><strong>Atenção Secundária à Saúde (Média Complexidade):</strong> Serviços especializados, como consultas com especialistas (cardiologistas, endocrinologistas), exames mais complexos (ultrassonografia, endoscopia) e algumas cirurgias ambulatoriais. Ex: Ambulatórios de especialidades, hospitais de pequeno e médio porte.</li><li><strong>Atenção Terciária à Saúde (Alta Complexidade):</strong> Procedimentos de alta tecnologia e custo elevado, como transplantes, cirurgias cardíacas complexas, tratamento de câncer. Ex: Hospitais universitários, hospitais especializados de grande porte.</li></ul><p>Esses níveis devem funcionar de forma integrada, através de um sistema de referência e contrarreferência.</p></div>`
  },
  {
    id: 'financiamentoSus',
    conceptTitle: 'Financiamento do SUS',
    visualRepresentation: '💰📊📉',
    definition: 'Responsabilidade tripartite (União, Estados, Municípios), com desafios relacionados ao subfinanciamento.',
    keywords: 'Recursos, Orçamento, Teto de Gastos, EC29',
    detailsHtml: `<div class="modal-content-custom"><p>O financiamento do SUS é de responsabilidade das três esferas de governo: União, Estados e Municípios.</p><ul><li><strong>União:</strong> Principal fonte de recursos, provenientes de impostos federais e contribuições sociais (como a CSLL e parte da COFINS). Define políticas nacionais e repassa verbas para estados e municípios.</li><li><strong>Estados:</strong> Destinam um percentual mínimo de sua arrecadação de impostos para a saúde (atualmente 12%, conforme Emenda Constitucional nº 29).</li><li><strong>Municípios:</strong> Destinam um percentual mínimo de sua arrecadação de impostos para a saúde (atualmente 15%, conforme EC nº 29). São os principais executores das ações e serviços de saúde.</li></ul><p>Apesar dos avanços, o subfinanciamento crônico é um dos maiores desafios do SUS, impactando a qualidade e a capacidade de atendimento.</p><p>A Emenda Constitucional nº 95/2016 (Teto de Gastos) impôs limites aos gastos primários da União, incluindo saúde, o que tem gerado debates sobre seu impacto no financiamento do sistema.</p></div>`
  },
  {
    id: 'programasSaude',
    conceptTitle: 'Programas de Saúde',
    visualRepresentation: '💉👨‍👩‍👧‍👦🚑',
    definition: 'Iniciativas como PNI, Saúde da Família e SAMU, visando atender diversas necessidades da população.',
    keywords: 'PNI, ESF, SAMU, Rede Cegonha, Prevenção',
    detailsHtml: `<div class="modal-content-custom"><p>O SUS implementa diversos programas para atender às necessidades de saúde da população. Alguns exemplos notáveis:</p><ul><li><strong>Programa Nacional de Imunizações (PNI):</strong> Referência mundial, oferece gratuitamente um extenso calendário de vacinas para todas as faixas etárias.</li><li><strong>Estratégia Saúde da Família (ESF):</strong> Principal modelo de Atenção Primária, com equipes multiprofissionais atuando em territórios definidos, promovendo vínculo e cuidado longitudinal.</li><li><strong>SAMU 192 (Serviço de Atendimento Móvel de Urgência):</strong> Atendimento pré-hospitalar de urgência e emergência.</li><li><strong>Farmácia Popular do Brasil:</strong> Facilita o acesso a medicamentos essenciais, com subsídios ou gratuidade.</li><li><strong>Programa Nacional de Controle do Tabagismo.</strong></li><li><strong>Rede Cegonha:</strong> Atenção à saúde materno-infantil, desde o planejamento reprodutivo até o puerpério e cuidados com o recém-nascido.</li><li><strong>Programas de Controle de Doenças Crônicas (Hipertensão, Diabetes).</strong></li><li><strong>Programas de Controle de Doenças Transmissíveis (HIV/AIDS, Tuberculose, Hanseníase, Dengue).</strong></li></ul></div>`
  },
  {
    id: 'desafiosPerspectivas',
    conceptTitle: 'Desafios e Perspectivas',
    visualRepresentation: '🚧📈💡',
    definition: 'Enfrenta subfinanciamento, problemas de gestão e filas, buscando fortalecer a atenção primária e o financiamento.',
    keywords: 'Subfinanciamento, Gestão, Filas, Futuro do SUS',
    detailsHtml: `<div class="modal-content-custom"><p>Apesar de suas conquistas, o SUS enfrenta grandes desafios:</p><ul><li><strong>Subfinanciamento crônico:</strong> Insuficiência de recursos para atender à demanda crescente.</li><li><strong>Gestão e regionalização:</strong> Dificuldades na articulação entre os entes federativos e na organização das redes de atenção.</li><li><strong>Filas e tempo de espera:</strong> Especialmente para consultas especializadas, exames e cirurgias.</li><li><strong>Valorização dos profissionais de saúde:</strong> Questões salariais, condições de trabalho e fixação em áreas remotas.</li><li><strong>Judicialização da saúde:</strong> Aumento de ações judiciais para obtenção de medicamentos e tratamentos não incorporados ao SUS.</li><li><strong>Transição demográfica e epidemiológica:</strong> Envelhecimento da população e aumento de doenças crônicas.</li><li><strong>Incorporação de novas tecnologias:</strong> Equilibrar acesso à inovação com sustentabilidade financeira.</li></ul><p><strong>Perspectivas:</strong> Fortalecimento da Atenção Primária, melhoria da gestão, investimento em tecnologia, maior participação social e garantia de financiamento adequado são caminhos para aprimorar o sistema.</p></div>`
  }
];

const PoliticasPublicasPage = () => {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (concept) => {
    setModalContent({ title: concept.conceptTitle, contentHtml: concept.detailsHtml });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <h1>Políticas Públicas de Saúde no Brasil</h1>
        <p>Clique nos cards para entender a estrutura, funcionamento e desafios da saúde pública brasileira.</p>
      </header>
      <main className={styles.conceptsGrid}>
        {politicasPublicasConcepts.map(concept => (
          <ConceptCard
            key={concept.id}
            conceptTitle={concept.conceptTitle}
            visualRepresentation={concept.visualRepresentation}
            definition={concept.definition}
            keywords={concept.keywords}
            onClick={() => handleCardClick(concept)}
          />
        ))}
      </main>
      {isModalOpen && modalContent && (
        <ConceptModal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={modalContent.title}
          contentHtml={modalContent.contentHtml}
          customStyles={{
            overlay: styles.modalOverlay,
            content: styles.modalContent,
            title: styles.modalTitle,
            closeButton: styles.modalCloseButton,
          }}
        />
      )}
      <footer className={styles.pageFooter}>
        <p>SUS: Direito de todos, dever do Estado, construindo um Brasil mais saudável! 🇧🇷🏥❤️</p>
      </footer>
    </div>
  );
};

export default PoliticasPublicasPage;
