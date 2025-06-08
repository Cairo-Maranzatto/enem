import React, { useState } from 'react';
import styles from './ProblemasAmbientaisPage.module.css';
import ConceptCard from '../../../../components/ConceptCard/ConceptCard';
import ConceptModal from '../../../../components/ConceptCard/ConceptModal';

const problemasAmbientaisConcepts = [
  {
    id: 'desmatamento',
    conceptTitle: 'Desmatamento',
    visualRepresentation: '🌳🚜📉',
    definition: 'Remoção da vegetação nativa, causando perda de habitat e erosão.',
    keywords: 'Florestas, Agropecuária, Erosão, Perda de Habitat',
    detailsHtml: `<div class="modal-content-custom">O desmatamento é a remoção da vegetação nativa de uma área, seja para expansão agrícola, extração de madeira, mineração ou urbanização. <ul><li><strong>Causas Principais:</strong> Agropecuária (soja, pastagens), exploração madeireira ilegal, projetos de infraestrutura, garimpo.</li><li><strong>Consequências:</strong> Perda de biodiversidade (destruição de habitats), erosão do solo, assoreamento de rios, alterações climáticas locais e globais (redução da capacidade de absorção de CO₂), desertificação em áreas vulneráveis.</li><li><strong>Importância da Conservação:</strong> Manutenção dos serviços ecossistêmicos (regulação hídrica, polinização), preservação de espécies, combate às mudanças climáticas. Ações como fiscalização, reflorestamento e manejo sustentável são cruciais.</li></ul></div>`
  },
  {
    id: 'poluicao',
    conceptTitle: 'Poluição',
    visualRepresentation: '🏭💨💧🗑️',
    definition: 'Introdução de substâncias nocivas no ar, água ou solo.',
    keywords: 'Indústrias, Agrotóxicos, Esgoto, Doenças',
    detailsHtml: `<div class="modal-content-custom">A poluição é a introdução de substâncias ou energia no ambiente que causam efeitos negativos.<ul><li><strong>Poluição do Ar:</strong> Causada por indústrias, veículos, queimadas. Poluentes: CO, SO₂, NOx, material particulado. Consequências: doenças respiratórias, chuva ácida, efeito estufa.</li><li><strong>Poluição da Água:</strong> Causada por esgoto doméstico/industrial, agrotóxicos, lixo, vazamentos de petróleo. Consequências: morte de organismos aquáticos, contaminação da água potável, eutrofização.</li><li><strong>Poluição do Solo:</strong> Causada por agrotóxicos, lixo industrial/doméstico, descarte inadequado de resíduos. Consequências: infertilidade do solo, contaminação de alimentos e lençóis freáticos.</li></ul>Controle e prevenção envolvem tratamento de efluentes, uso de tecnologias limpas, gestão de resíduos e legislação ambiental rigorosa.</div>`
  },
  {
    id: 'aquecimento-global',
    conceptTitle: 'Aquecimento Global',
    visualRepresentation: '🔥🌍🌡️☀️',
    definition: 'Aumento da temperatura média da Terra devido aos gases de efeito estufa.',
    keywords: 'Efeito Estufa, CO₂, Derretimento de Geleiras, Eventos Extremos',
    detailsHtml: `<div class="modal-content-custom">O aquecimento global é o aumento da temperatura média da Terra devido ao acúmulo de gases de efeito estufa (GEE) na atmosfera, intensificando o efeito estufa natural.<ul><li><strong>Principais GEE:</strong> Dióxido de carbono (CO₂), metano (CH₄), óxido nitroso (N₂O).</li><li><strong>Causas:</strong> Queima de combustíveis fósseis (carvão, petróleo, gás natural), desmatamento, atividades agrícolas e industriais.</li><li><strong>Consequências (Mudanças Climáticas):</strong> Elevação do nível do mar, derretimento de geleiras, eventos climáticos extremos (secas, inundações, ondas de calor), perda de biodiversidade, impactos na agricultura e saúde humana.</li><li><strong>Mitigação:</strong> Redução das emissões de GEE, transição para energias renováveis, reflorestamento, acordos internacionais (ex: Acordo de Paris).</li></ul></div>`
  },
  {
    id: 'perda-de-biodiversidade',
    conceptTitle: 'Perda de Biodiversidade',
    visualRepresentation: '🐼🌿📉💔',
    definition: 'Redução da variedade de espécies, genes e ecossistemas.',
    keywords: 'Extinção, Habitat, Desmatamento, Caça Ilegal',
    detailsHtml: `<div class="modal-content-custom">A perda de biodiversidade refere-se à redução da variedade de formas de vida (genes, espécies, ecossistemas) em um determinado local ou no planeta.<ul><li><strong>Causas Principais:</strong> Destruição e fragmentação de habitats (desmatamento, urbanização), poluição, introdução de espécies invasoras, superexploração de recursos (caça e pesca predatórias), mudanças climáticas.</li><li><strong>Consequências:</strong> Desequilíbrio ecológico, extinção de espécies, perda de recursos genéticos valiosos (para medicina, agricultura), comprometimento dos serviços ecossistêmicos (polinização, controle de pragas, purificação da água).</li><li><strong>Conservação:</strong> Criação de unidades de conservação, corredores ecológicos, programas de reprodução em cativeiro, combate ao tráfico de animais, conscientização.</li></ul></div>`
  },
  {
    id: 'eutrofizacao',
    conceptTitle: 'Eutrofização',
    visualRepresentation: '🟢💧🐟💀',
    definition: "Aumento excessivo de nutrientes em corpos d'água, causando proliferação de algas.",
    keywords: 'Esgoto, Fertilizantes, Algas, Falta de Oxigênio',
    detailsHtml: `<div class="modal-content-custom">A eutrofização é o processo de enriquecimento excessivo de um corpo d'água com nutrientes, principalmente nitrogênio (N) e fósforo (P), levando a um aumento descontrolado da produção primária (algas e cianobactérias).<ul><li><strong>Causas:</strong> Despejo de esgoto doméstico não tratado, efluentes industriais, uso excessivo de fertilizantes agrícolas que são carreados pela chuva.</li><li><strong>Processo:</strong> Proliferação de algas (florações), formação de uma camada densa na superfície que impede a passagem de luz, morte de plantas submersas. A decomposição dessa biomassa por bactérias aeróbicas consome grandes quantidades de oxigênio dissolvido (aumento da DBO - Demanda Bioquímica de Oxigênio), levando à hipóxia ou anoxia e à morte de peixes e outros organismos aquáticos.</li><li><strong>Consequências:</strong> Perda de biodiversidade aquática, produção de toxinas por cianobactérias, mau cheiro, comprometimento do uso da água.</li></ul></div>`
  },
  {
    id: 'chuva-acida',
    conceptTitle: 'Chuva Ácida',
    visualRepresentation: '🌧️🏭💨🌳',
    definition: 'Precipitação com pH baixo, causada por poluentes atmosféricos.',
    keywords: 'SO₂, NOx, Indústrias, Corrosão',
    detailsHtml: `<div class="modal-content-custom">A chuva ácida é qualquer forma de precipitação (chuva, neve, granizo, neblina) com pH inferior a 5,6 (pH natural da chuva levemente ácida devido ao CO₂ atmosférico).<ul><li><strong>Causas:</strong> Emissão de dióxido de enxofre (SO₂) e óxidos de nitrogênio (NOx) para a atmosfera, principalmente pela queima de combustíveis fósseis em indústrias e veículos. Esses gases reagem com o vapor d'água, oxigênio e outros compostos para formar ácido sulfúrico (H₂SO₄) e ácido nítrico (HNO₃).</li><li><strong>Consequências:</strong> Acidificação de lagos e rios (prejudicando a vida aquática), danos a florestas (afetando folhas e solo), corrosão de edifícios, monumentos e estruturas metálicas, problemas respiratórios em humanos.</li><li><strong>Soluções:</strong> Redução da emissão de poluentes (uso de filtros em chaminés, catalisadores em veículos), uso de fontes de energia mais limpas.</li></ul></div>`
  },
  {
    id: 'camada-de-ozonio',
    conceptTitle: 'Camada de Ozônio',
    visualRepresentation: '☀️🛡️🌍💨',
    definition: 'Redução da concentração de ozônio (O₃) na estratosfera, aumentando a radiação UV.',
    keywords: 'Ozônio, CFCs, Radiação UV, Câncer de Pele',
    detailsHtml: `<div class="modal-content-custom">A camada de ozônio (O₃) está localizada na estratosfera e protege a Terra da radiação ultravioleta (UV) nociva do sol. O 'buraco' é, na verdade, uma rarefação (diminuição da concentração) dessa camada, especialmente sobre a Antártida.<ul><li><strong>Causa Principal:</strong> Liberação de gases clorofluorcarbonetos (CFCs), halons e outras substâncias que destroem o ozônio. Esses gases eram usados em geladeiras, ar-condicionado, aerossóis e espumas.</li><li><strong>Consequências da Destruição:</strong> Aumento da incidência de radiação UV-B na superfície, causando câncer de pele, catarata, supressão do sistema imunológico em humanos, danos a plantas (redução da fotossíntese) e ao plâncton marinho (base da cadeia alimentar aquática).</li><li><strong>Protocolo de Montreal (1987):</strong> Acordo internacional bem-sucedido para eliminar gradualmente a produção e consumo de substâncias destruidoras do ozônio. A camada de ozônio está se recuperando lentamente.</li></ul></div>`
  },
  {
    id: 'lixo',
    conceptTitle: 'Lixo (Resíduos Sólidos)',
    visualRepresentation: '🗑️🌍♻️',
    definition: 'Materiais descartados resultantes de atividades humanas e da natureza.',
    keywords: 'Resíduos, Poluição, Reciclagem, Gestão',
    detailsHtml: `<div class="modal-content-custom">Resíduos sólidos, popularmente conhecidos como lixo, são materiais descartados resultantes de atividades humanas e da natureza. A gestão inadequada é um grave problema ambiental e de saúde pública.<ul><li><strong>Tipos:</strong> Doméstico, comercial, industrial, hospitalar (serviços de saúde), construção civil, agrícola, público.</li><li><strong>Problemas do Descarte Inadequado (Lixões):</strong> Poluição do solo e da água (chorume), contaminação do ar (gases tóxicos e de efeito estufa como metano), proliferação de vetores de doenças (ratos, baratas, mosquitos), impacto visual e desvalorização de áreas.</li><li><strong>Soluções (Gestão Integrada):</strong> Política dos 3Rs (Reduzir, Reutilizar, Reciclar), coleta seletiva, compostagem (resíduos orgânicos), aterros sanitários controlados (para rejeitos), incineração com recuperação de energia (em alguns casos), logística reversa.</li></ul></div>`
  }
];

const ProblemasAmbientaisPage = () => {
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
        <h1>Problemas Ambientais e Biomas Brasileiros</h1>
        <p>Explore os desafios ecológicos e a riqueza natural do Brasil! (Clique nos cards para saber mais)</p>
      </header>
      <main className={styles.conceptsGrid}>
        {problemasAmbientaisConcepts.map(concept => (
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
        <p>Explorando as conexões da vida nos ecossistemas!</p>
      </footer>
    </div>
  );
};

export default ProblemasAmbientaisPage;
