import React, { useState } from 'react';
import styles from './SaneamentoBasicoPage.module.css';
import ConceptCard from '../../../../components/ConceptCard/ConceptCard';
import ConceptModal from '../../../../components/ConceptCard/ConceptModal';

const saneamentoBasicoConcepts = [
  {
    id: 'conceitoImportancia',
    conceptTitle: 'Conceito e Importância',
    visualRepresentation: '🌍💧🤝',
    definition: 'Conjunto de serviços essenciais para a saúde pública, qualidade de vida e proteção ambiental.',
    keywords: 'Saúde Pública, Qualidade de Vida, Meio Ambiente',
    detailsHtml: `<div class="modal-content-custom"><p><strong>Saneamento básico</strong> é o conjunto de serviços, infraestruturas e instalações operacionais de:</p><ul><li>Abastecimento de água potável;</li><li>Esgotamento sanitário;</li><li>Limpeza urbana e manejo de resíduos sólidos;</li><li>Drenagem e manejo das águas pluviais urbanas.</li></ul><p>É fundamental para a <strong>prevenção de doenças</strong>, promoção da saúde, melhoria da qualidade de vida da população, desenvolvimento socioeconômico e preservação do meio ambiente.</p></div>`
  },
  {
    id: 'aguaPotavel',
    conceptTitle: 'Água Potável',
    visualRepresentation: '🚰🏞️ონ',
    definition: 'Captação, tratamento e distribuição de água segura para consumo humano e atividades diárias.',
    keywords: 'Tratamento, Distribuição, Potabilidade, Saúde',
    detailsHtml: `<div class="modal-content-custom"><p>O <strong>abastecimento de água potável</strong> consiste na captação, tratamento, adução, reservação e distribuição de água com qualidade compatível com os padrões de potabilidade para consumo humano.</p><p>Inclui desde a proteção dos mananciais até as ligações prediais. A água deve ser tratada para remover impurezas e microrganismos patogênicos, garantindo sua segurança para ingestão, higiene e outros usos domésticos.</p><p><strong>Etapas do tratamento convencional:</strong></p><ul><li>Coagulação</li><li>Floculação</li><li>Decantação</li><li>Filtração</li><li>Desinfecção (geralmente com cloro)</li><li>Fluoretação (adição de flúor para prevenção de cáries)</li><li>Correção de pH (se necessário)</li></ul></div>`
  },
  {
    id: 'esgotamentoSanitario',
    conceptTitle: 'Esgotamento Sanitário',
    visualRepresentation: '🚽🌊♻️',
    definition: 'Coleta, tratamento e disposição adequada dos esgotos para proteger a saúde e o ambiente.',
    keywords: 'Coleta, Tratamento, ETE, Prevenção de Doenças',
    detailsHtml: `<div class="modal-content-custom"><p>O <strong>esgotamento sanitário</strong> envolve a coleta, transporte, tratamento e disposição final adequada dos esgotos domésticos e industriais.</p><p>Um sistema eficiente previne a contaminação do solo e da água, reduzindo a proliferação de vetores de doenças (como mosquitos e ratos) e a ocorrência de enfermidades de veiculação hídrica (diarreias, hepatite A, cólera, etc.).</p><p><strong>Tipos de tratamento de esgoto:</strong></p><ul><li><strong>Fossas Sépticas:</strong> Solução individual para áreas sem rede coletora.</li><li><strong>Redes Coletoras e Estações de Tratamento de Esgoto (ETEs):</strong> Solução coletiva que remove poluentes antes de devolver a água ao meio ambiente. Processos comuns em ETEs incluem tratamento preliminar, primário, secundário e, em alguns casos, terciário.</li></ul></div>`
  },
  {
    id: 'manejoResiduosSolidos',
    conceptTitle: 'Manejo de Resíduos Sólidos',
    visualRepresentation: '🗑️♻️🚛',
    definition: 'Coleta, tratamento e destinação correta do lixo urbano, visando a sustentabilidade.',
    keywords: 'Coleta Seletiva, Reciclagem, Aterro Sanitário, Sustentabilidade',
    detailsHtml: `<div class="modal-content-custom"><p>A <strong>limpeza urbana e o manejo de resíduos sólidos</strong> (lixo) abrangem a coleta, transporte, tratamento e destinação final ambientalmente adequada dos resíduos gerados nas cidades.</p><p>Inclui a varrição de ruas, limpeza de praias, desobstrução de bueiros e a gestão de aterros sanitários, usinas de compostagem, reciclagem e incineração.</p><p><strong>Hierarquia no manejo de resíduos:</strong></p><ol><li><strong>Não geração:</strong> Evitar a produção de resíduos.</li><li><strong>Redução:</strong> Diminuir a quantidade de resíduos gerados.</li><li><strong>Reutilização:</strong> Usar novamente os materiais.</li><li><strong>Reciclagem:</strong> Transformar resíduos em novos produtos.</li><li><strong>Tratamento:</strong> Processos para reduzir o volume ou periculosidade.</li><li><strong>Disposição final ambientalmente adequada:</strong> Aterros sanitários controlados.</li></ol><p>A coleta seletiva e a reciclagem são fundamentais para reduzir o volume de lixo destinado a aterros e promover a sustentabilidade.</p></div>`
  },
  {
    id: 'drenagemUrbana',
    conceptTitle: 'Drenagem Urbana',
    visualRepresentation: '🌧️🏙️🌊',
    definition: 'Controle do escoamento da água da chuva para prevenir inundações e proteger a infraestrutura.',
    keywords: 'Chuvas, Inundações, Infraestrutura, Prevenção',
    detailsHtml: `<div class="modal-content-custom"><p>A <strong>drenagem e o manejo de águas pluviais urbanas</strong> referem-se ao conjunto de medidas para controlar o escoamento da água da chuva nas cidades, prevenindo inundações, alagamentos e erosão.</p><p>Inclui a construção de galerias, canais, bueiros, reservatórios de detenção (piscinões) e a promoção de soluções baseadas na natureza, como jardins de chuva e pavimentos permeáveis.</p><p>Um bom sistema de drenagem urbana é crucial para a segurança da população, a mobilidade urbana e a preservação da infraestrutura da cidade, especialmente em face das mudanças climáticas e eventos extremos.</p></div>`
  },
  {
    id: 'impactosSaudeAmbiente',
    conceptTitle: 'Impactos na Saúde e Ambiente',
    visualRepresentation: '💚🩺🌳',
    definition: 'O saneamento adequado previne doenças e protege os ecossistemas; sua falta causa graves problemas.',
    keywords: 'Prevenção, Doenças, Poluição, Sustentabilidade',
    detailsHtml: `<div class="modal-content-custom"><p>A ausência ou inadequação do saneamento básico tem <strong>sérios impactos negativos</strong>:</p><ul><li><strong>Saúde:</strong> Aumento de doenças infecciosas e parasitárias (diarreia, cólera, febre tifoide, hepatite A, leptospirose, esquistossomose, arboviroses), mortalidade infantil, e custos com tratamento médico.</li><li><strong>Meio Ambiente:</strong> Contaminação de rios, lagos, oceanos e lençóis freáticos; degradação de ecossistemas aquáticos e terrestres; poluição do solo e do ar (por resíduos inadequados).</li></ul><p>Por outro lado, o <strong>investimento em saneamento traz benefícios significativos</strong>:</p><ul><li>Melhora da saúde e redução da mortalidade.</li><li>Aumento da produtividade e do desempenho escolar.</li><li>Valorização imobiliária e desenvolvimento do turismo.</li><li>Preservação dos recursos hídricos e dos ecossistemas.</li><li>Redução de gastos com saúde pública.</li></ul></div>`
  }
];

const SaneamentoBasicoPage = () => {
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
        <h1>Saneamento Básico: Saúde para Todos</h1>
        <p>Clique nos cards para explorar os componentes essenciais do saneamento básico e seu impacto.</p>
      </header>
      <main className={styles.conceptsGrid}>
        {saneamentoBasicoConcepts.map(concept => (
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
        <p>Saneamento é básico, saúde é essencial! 💧🛡️🌍</p>
      </footer>
    </div>
  );
};

export default SaneamentoBasicoPage;
