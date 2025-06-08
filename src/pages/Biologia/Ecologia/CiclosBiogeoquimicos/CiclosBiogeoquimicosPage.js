import React, { useState } from 'react';
import styles from './CiclosBiogeoquimicosPage.module.css';
import ConceptCard from '../../../../components/ConceptCard/ConceptCard';
import ConceptModal from '../../../../components/ConceptCard/ConceptModal';

const ciclosBiogeoquimicosConcepts = [
  {
    id: 'ciclo-agua',
    conceptTitle: 'Ciclo da Água',
    visualRepresentation: '💧💨☁️🌧️',
    definition: 'Movimento contínuo da água entre atmosfera, terra e seres vivos.',
    keywords: 'Evaporação, Condensação, Precipitação',
    detailsHtml: `<div class="modal-content-custom">O ciclo da água, ou ciclo hidrológico, descreve o movimento contínuo da água na Terra, envolvendo a atmosfera, a superfície terrestre (rios, lagos, oceanos) e o subsolo. É vital para todos os ecossistemas e para o clima. Principais etapas:<ul><li><strong>Evaporação:</strong> Transformação da água líquida em vapor, a partir de oceanos, rios e lagos, impulsionada pelo calor solar.</li><li><strong>Transpiração:</strong> Liberação de vapor d'água pelas plantas. A evapotranspiração é a soma da evaporação e da transpiração.</li><li><strong>Condensação:</strong> O vapor d'água sobe, resfria e se transforma em gotículas líquidas ou cristais de gelo, formando as nuvens.</li><li><strong>Precipitação:</strong> Quando as gotículas nas nuvens se tornam pesadas demais, caem como chuva, neve, granizo ou orvalho.</li><li><strong>Infiltração:</strong> Parte da água que atinge o solo penetra e abastece os lençóis freáticos.</li><li><strong>Escoamento Superficial:</strong> Água que corre pela superfície, formando rios e lagos, eventualmente retornando aos oceanos.</li></ul>Importância: Manutenção da vida, regulação térmica do planeta, formação de paisagens.</div>`
  },
  {
    id: 'ciclo-carbono',
    conceptTitle: 'Ciclo do Carbono',
    visualRepresentation: '💨🌿🏭🔄',
    definition: 'Movimentação do carbono entre atmosfera, oceanos, seres vivos e rochas.',
    keywords: 'Fotossíntese, Respiração, Combustão',
    detailsHtml: `<div class="modal-content-custom">O ciclo do carbono envolve a troca de átomos de carbono entre a atmosfera (principalmente como CO₂), os oceanos, os seres vivos e a litosfera. É fundamental para a vida, pois o carbono é o principal componente das moléculas orgânicas. Etapas:<ul><li><strong>Fotossíntese:</strong> Plantas, algas e cianobactérias capturam CO₂ atmosférico e o convertem em matéria orgânica (glicose), liberando oxigênio.</li><li><strong>Respiração Celular:</strong> Seres vivos (incluindo plantas) quebram moléculas orgânicas para obter energia, liberando CO₂.</li><li><strong>Decomposição:</strong> Fungos e bactérias decompõem matéria orgânica morta, liberando CO₂.</li><li><strong>Combustão:</strong> Queima de combustíveis fósseis (carvão, petróleo, gás natural) e de biomassa (queimadas) libera grandes quantidades de CO₂ na atmosfera.</li><li><strong>Trocas Oceano-Atmosfera:</strong> Os oceanos absorvem e liberam CO₂, atuando como um grande reservatório.</li></ul>Importância: Base da vida orgânica, regulação do clima (o CO₂ é um gás de efeito estufa).</div>`
  },
  {
    id: 'ciclo-nitrogenio',
    conceptTitle: 'Ciclo do Nitrogênio',
    visualRepresentation: 'N₂🌱🔩💩⚡',
    definition: 'Transformação do nitrogênio atmosférico em formas utilizáveis pelos seres vivos.',
    keywords: 'Fixação, Nitrificação, Desnitrificação',
    detailsHtml: `<div class="modal-content-custom">O nitrogênio (N₂) é o gás mais abundante na atmosfera, mas a maioria dos seres vivos não consegue utilizá-lo diretamente. O ciclo do nitrogênio transforma o N₂ em formas assimiláveis. Etapas:<ul><li><strong>Fixação:</strong> Conversão do N₂ atmosférico em amônia (NH₃) ou íons amônio (NH₄⁺). Realizada por bactérias fixadoras (ex: <em>Rhizobium</em> em leguminosas, cianobactérias) ou por processos físicos (descargas elétricas).</li><li><strong>Amonificação:</strong> Decompositores (bactérias e fungos) transformam o nitrogênio de restos orgânicos (proteínas, ácidos nucleicos) em amônia/íons amônio.</li><li><strong>Nitrificação:</strong> Processo em duas etapas realizado por bactérias nitrificantes no solo: 1) Nitrosação: Amônia/íons amônio são oxidados a nitrito (NO₂⁻). 2) Nitratação: Nitrito é oxidado a nitrato (NO₃⁻), a principal forma de nitrogênio absorvida pelas plantas.</li><li><strong>Assimilação:</strong> Plantas absorvem nitrato (e amônio) do solo para produzir suas proteínas e ácidos nucleicos. Animais obtêm nitrogênio ao se alimentarem das plantas ou de outros animais.</li><li><strong>Desnitrificação:</strong> Bactérias desnitrificantes convertem nitrato de volta a N₂ gasoso, que retorna à atmosfera, fechando o ciclo.</li></ul>Importância: Essencial para a síntese de proteínas e ácidos nucleicos (DNA, RNA).</div>`
  },
  {
    id: 'ciclo-fosforo',
    conceptTitle: 'Ciclo do Fósforo',
    visualRepresentation: '🦴💩⛰️🌊🌱',
    definition: 'Movimento do fósforo entre rochas, solo, água e seres vivos.',
    keywords: 'Rochas, Intemperismo, Decomposição',
    detailsHtml: `<div class="modal-content-custom">O ciclo do fósforo é principalmente sedimentar, ou seja, não possui uma fase gasosa significativa na atmosfera. O fósforo é encontrado principalmente em rochas fosfatadas. Etapas:<ul><li><strong>Intemperismo:</strong> A erosão das rochas pela chuva, vento e outros agentes libera íons fosfato (PO₄³⁻) no solo e na água.</li><li><strong>Absorção/Assimilação:</strong> As plantas absorvem os fosfatos dissolvidos do solo e da água e os incorporam em suas moléculas orgânicas (ATP, DNA, RNA, fosfolipídios). Os animais obtêm fósforo ao consumir plantas ou outros animais.</li><li><strong>Decomposição:</strong> Quando organismos morrem, decompositores (bactérias e fungos) devolvem o fósforo ao solo na forma de fosfatos.</li><li><strong>Sedimentação:</strong> Parte dos fosfatos é carregada para rios, lagos e oceanos, onde pode se incorporar a sedimentos no fundo. Ao longo de milhões de anos, esses sedimentos podem formar novas rochas fosfatadas, que podem ser expostas novamente por processos geológicos (soerguimento).</li></ul>Importância: Componente crucial do ATP (energia celular), DNA, RNA, membranas celulares e ossos/dentes. O excesso de fósforo em corpos d'água (geralmente por fertilizantes) pode causar eutrofização.</div>`
  },
  {
    id: 'ciclo-oxigenio',
    conceptTitle: 'Ciclo do Oxigênio',
    visualRepresentation: 'O₂💨🌿🔥💧',
    definition: 'Circulação do oxigênio entre a atmosfera, seres vivos e a crosta terrestre.',
    keywords: 'Fotossíntese, Respiração, Ozônio',
    detailsHtml: `<div class="modal-content-custom">O ciclo do oxigênio está intimamente ligado ao ciclo do carbono e ao ciclo da água. O oxigênio (O₂) é vital para a respiração da maioria dos seres vivos. Etapas:<ul><li><strong>Fotossíntese:</strong> É a principal fonte de oxigênio atmosférico. Plantas, algas e cianobactérias liberam O₂ como subproduto da conversão de CO₂ e água em glicose, usando a luz solar.</li><li><strong>Respiração Celular:</strong> A maioria dos organismos (animais, plantas, fungos, muitas bactérias) utiliza O₂ para quebrar moléculas orgânicas e liberar energia, produzindo CO₂ e água como subprodutos.</li><li><strong>Decomposição:</strong> Microrganismos aeróbicos consomem oxigênio ao decompor matéria orgânica.</li><li><strong>Combustão:</strong> A queima de matéria orgânica (madeira, combustíveis fósseis) consome grandes quantidades de O₂ e libera CO₂.</li><li><strong>Formação de Ozônio:</strong> Na alta atmosfera (estratosfera), o O₂ é convertido em ozônio (O₃) pela radiação ultravioleta (UV) do sol. A camada de ozônio protege a Terra da radiação UV nociva.</li></ul>Importância: Essencial para a respiração aeróbica, processos de oxidação, formação da camada de ozônio.</div>`
  },
  {
    id: 'talassociclo',
    conceptTitle: 'Talassociclo (Ambiente Marinho)',
    visualRepresentation: '🌊🐠🐙',
    definition: 'Ecossistemas marinhos (oceanos e mares), alta salinidade e biodiversidade.',
    keywords: 'Oceanos, Salinidade, Plâncton, Zonas',
    detailsHtml: `<div class="modal-content-custom">O Talassociclo representa o conjunto dos ecossistemas marinhos, cobrindo a maior parte da superfície da Terra (cerca de 71%). É caracterizado pela água salgada e uma imensa diversidade de vida, desde microrganismos (plâncton) até grandes mamíferos marinhos.<ul><li>Pode ser dividido em zonas de acordo com a profundidade e a penetração de luz:</li><ul><li><strong>Zona Fótica (Eufótica):</strong> Camada superficial iluminada onde ocorre a fotossíntese, rica em fitoplâncton (base da cadeia alimentar marinha) e zooplâncton.</li><li><strong>Zona Afótica:</strong> Região mais profunda, sem luz, onde os organismos são heterotróficos (predadores, detritívoros) ou quimiossintetizantes (em fontes hidrotermais). Inclui a zona batial, abissal e hadal.</li></ul><li>Os principais produtores são o fitoplâncton. A vida marinha é influenciada por fatores como salinidade, temperatura, pressão, correntes e disponibilidade de nutrientes.</li><li><strong>Importância:</strong> Regulação climática global, produção de oxigênio, fonte de alimento e recursos naturais.</li></ul></div>`
  },
  {
    id: 'limnociclo',
    conceptTitle: 'Limnociclo (Ambiente de Água Doce)',
    visualRepresentation: '🏞️💧🐟',
    definition: 'Ecossistemas de água doce (rios, lagos), baixa salinidade.',
    keywords: 'Rios, Lagos, Lêntico, Lótico',
    detailsHtml: `<div class="modal-content-custom">O Limnociclo compreende os ecossistemas de água continental doce, como rios, córregos, lagos, lagoas e pântanos. Apesar de cobrir uma pequena porção da superfície terrestre, abriga uma rica biodiversidade.<ul><li>Divide-se em dois tipos principais de ambientes:</li><ul><li><strong>Ambientes Lênticos:</strong> Águas paradas ou de fluxo lento (lagos, lagoas). Zonas: litorânea, limnética e profunda.</li><li><strong>Ambientes Lóticos:</strong> Águas correntes (rios, riachos). Caracterizados pelo fluxo contínuo.</li></ul><li>Os produtores incluem algas, macrófitas aquáticas e fitoplâncton. Fatores importantes: velocidade da corrente, temperatura, oxigênio dissolvido.</li><li><strong>Importância:</strong> Fonte de água potável, irrigação, habitat, transporte.</li></ul></div>`
  },
  {
    id: 'epinociclo',
    conceptTitle: 'Epinociclo (Ambiente Terrestre)',
    visualRepresentation: '🌳⛰️☀️',
    definition: 'Ecossistemas terrestres (florestas, campos, desertos), variedade de climas.',
    keywords: 'Continentes, Solo, Clima, Biomas',
    detailsHtml: `<div class="modal-content-custom">O Epinociclo abrange todos os ecossistemas terrestres, localizados nos continentes e ilhas. É o biociclo com maior diversidade de paisagens e condições climáticas.<ul><li>Fatores determinantes dos biomas: clima (temperatura, precipitação) e tipo de solo.</li><li>Principais biomas terrestres:</li><ul><li><strong>Florestas Tropicais:</strong> Alta biodiversidade, quente e úmido.</li><li><strong>Florestas Temperadas:</strong> Estações definidas, árvores decíduas.</li><li><strong>Taiga (Florestas Boreais):</strong> Coníferas, clima frio.</li><li><strong>Campos (Pradarias, Savanas):</strong> Predomínio de gramíneas.</li><li><strong>Desertos:</strong> Baixa precipitação, temperaturas extremas.</li><li><strong>Tundra:</strong> Clima muito frio, permafrost.</li></ul><li>Produtores primários: plantas terrestres. Desafios: disponibilidade de água, variações de temperatura.</li><li><strong>Importância:</strong> Produção de alimentos, regulação climática, habitat para a maioria das espécies.</li></ul></div>`
  }
];

const CiclosBiogeoquimicosPage = () => {
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
        <h1>Ciclos Biogeoquímicos e Biociclos</h1>
        <p>A jornada dos elementos essenciais e os grandes domínios da vida na Terra!</p>
      </header>
      <main className={styles.conceptsGrid}>
        {ciclosBiogeoquimicosConcepts.map(concept => (
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
        <p>Explorando a dinâmica dos elementos e os biomas do nosso planeta!</p>
      </footer>
    </div>
  );
};

export default CiclosBiogeoquimicosPage;
