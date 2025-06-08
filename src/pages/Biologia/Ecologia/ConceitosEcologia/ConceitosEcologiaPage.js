import React, { useState } from 'react';
import styles from './ConceitosEcologiaPage.module.css';
import ConceptCard from '../../../../components/ConceptCard/ConceptCard';
import ConceptModal from '../../../../components/ConceptCard/ConceptModal';

const conceitosEcologiaConcepts = [
  {
    id: 'ecologia',
    conceptTitle: 'Ecologia',
    visualRepresentation: '🌍🔬',
    definition: 'Ciência que estuda as interações dos seres vivos entre si e com o ambiente.',
    keywords: 'Oikos (casa) + Logos (estudo)',
    detailsHtml: `<div class="modal-content-custom">A Ecologia (do grego oikos, casa, e logos, estudo) é o ramo da Biologia que investiga como os organismos interagem entre si (relações bióticas) e com os componentes não vivos do seu ambiente (fatores abióticos, como luz, temperatura, água, solo). Ela busca entender a distribuição e abundância dos seres vivos, o fluxo de energia e a ciclagem de matéria nos ecossistemas. É fundamental para a conservação da biodiversidade e para a compreensão dos impactos humanos no planeta.</div>`
  },
  {
    id: 'individuo',
    conceptTitle: 'Indivíduo',
    visualRepresentation: '👤',
    definition: 'Um único organismo, a unidade básica da vida.',
    keywords: 'Ser vivo singular',
    detailsHtml: `<div class="modal-content-custom">Em Ecologia, um indivíduo é um organismo singular, uma unidade viva que pode ser desde uma bactéria unicelular até uma baleia azul. Cada indivíduo possui características genéticas próprias e interage com o ambiente de forma a garantir sua sobrevivência e reprodução. É o nível mais fundamental da organização ecológica.</div>`
  },
  {
    id: 'populacao',
    conceptTitle: 'População',
    visualRepresentation: '👥👥',
    definition: 'Conjunto de indivíduos da mesma espécie que vivem em uma mesma área e ao mesmo tempo.',
    keywords: 'Mesma espécie, mesma área',
    detailsHtml: `<div class="modal-content-custom">Uma população é um grupo de indivíduos da mesma espécie que habitam uma determinada área geográfica em um mesmo período de tempo. Os membros de uma população compartilham o mesmo pool gênico (conjunto de genes) e são capazes de se reproduzir entre si, gerando descendentes férteis. O estudo das populações (dinâmica populacional) analisa fatores como taxas de natalidade, mortalidade, imigração e emigração.</div>`
  },
  {
    id: 'comunidade',
    conceptTitle: 'Comunidade (Biocenose)',
    visualRepresentation: '🌲🐒🦅',
    definition: 'Conjunto de diferentes populações (espécies) que vivem e interagem em uma mesma área.',
    keywords: 'Várias espécies, interações',
    detailsHtml: `<div class="modal-content-custom">A comunidade, também chamada de biocenose, representa o conjunto de todas as populações de diferentes espécies que coexistem e interagem em uma mesma área ou habitat. Essas interações podem ser relações ecológicas como competição, predação, mutualismo, etc. A estrutura de uma comunidade é definida pela diversidade de espécies e pela complexidade de suas interações.</div>`
  },
  {
    id: 'ecossistema',
    conceptTitle: 'Ecossistema',
    visualRepresentation: '🏞️☀️💧',
    definition: 'Interação entre os componentes bióticos (vivos: comunidade) e abióticos (não vivos: luz, água, solo, temperatura).',
    keywords: 'Vivos + Não Vivos + Interação',
    detailsHtml: `<div class="modal-content-custom">Um ecossistema é a unidade funcional básica da Ecologia, compreendendo a interação complexa entre a comunidade (componentes bióticos) e o ambiente físico-químico (componentes abióticos) em que ela vive. Inclui o fluxo de energia (que geralmente se inicia com a luz solar captada pelos produtores) e a ciclagem de nutrientes (como água, carbono, nitrogênio). Exemplos variam de uma pequena poça d'água a uma vasta floresta tropical.</div>`
  },
  {
    id: 'biosfera',
    conceptTitle: 'Biosfera',
    visualRepresentation: '🌐',
    definition: 'Conjunto de todos os ecossistemas da Terra. A porção do planeta onde existe vida.',
    keywords: 'Toda a vida na Terra',
    detailsHtml: `<div class="modal-content-custom">A biosfera é a camada da Terra onde a vida existe. Ela engloba todos os ecossistemas do planeta, desde as profundezas dos oceanos até as altas montanhas. É um sistema global dinâmico e interconectado, onde a energia solar é o motor principal e os ciclos biogeoquímicos garantem a manutenção da vida.</div>`
  },
  {
    id: 'habitat',
    conceptTitle: 'Habitat',
    visualRepresentation: '🏡',
    definition: 'O "endereço" de uma espécie; o local físico onde ela vive.',
    keywords: 'Onde vive, local físico',
    detailsHtml: `<div class="modal-content-custom">Habitat é o ambiente físico específico onde uma espécie ou organismo vive naturalmente. É o "endereço" da espécie, caracterizado por fatores abióticos (clima, tipo de solo, disponibilidade de água) e bióticos (presença de outras espécies) que fornecem as condições necessárias para sua sobrevivência e reprodução. Um mesmo habitat pode ser compartilhado por diversas espécies.</div>`
  },
  {
    id: 'nicho',
    conceptTitle: 'Nicho Ecológico',
    visualRepresentation: '🛠️🍽️😴',
    definition: 'A "profissão" da espécie no ecossistema: o que come, como se reproduz, hábitos, interações, etc.',
    keywords: 'Função, papel no ecossistema',
    detailsHtml: `<div class="modal-content-custom">O nicho ecológico descreve o papel funcional de uma espécie dentro de um ecossistema. É a "profissão" da espécie, abrangendo não apenas onde ela vive (habitat), mas também o que ela come (hábitos alimentares), como obtém alimento, seus predadores, seus parasitas, seus competidores, seus períodos de atividade (diurno/noturno), e como ela se reproduz e interage com os fatores físicos do ambiente. Duas espécies não podem ocupar o mesmo nicho ecológico por muito tempo no mesmo habitat devido ao princípio da exclusão competitiva.</div>`
  },
  {
    id: 'cadeia-alimentar',
    conceptTitle: 'Cadeia Alimentar',
    visualRepresentation: '🌿➡️🦗➡️🐸➡️🐍',
    definition: 'Sequência linear de organismos onde um serve de alimento para o outro, mostrando o fluxo de energia.',
    keywords: 'Produtor → Consumidor → Decompositor',
    detailsHtml: `<div class="modal-content-custom">Uma cadeia alimentar é uma representação linear do fluxo de energia e matéria através de uma série de organismos, onde cada um serve de alimento para o organismo seguinte. Começa com os produtores (seres autótrofos, como plantas, que convertem energia solar em energia química), seguidos pelos consumidores primários (herbívoros), consumidores secundários (carnívoros que comem herbívoros), consumidores terciários, e assim por diante. Os decompositores (fungos e bactérias) atuam em todos os níveis, quebrando a matéria orgânica morta.</div>`
  },
  {
    id: 'niveis-troficos',
    conceptTitle: 'Níveis Tróficos',
    visualRepresentation: '🥇🥈🥉',
    definition: 'A posição que cada organismo ocupa em uma cadeia alimentar (Produtor, Consumidor Primário, Secundário, etc.).',
    keywords: 'Posição na cadeia, fluxo de energia',
    detailsHtml: `<div class="modal-content-custom">Nível trófico (ou nível alimentar) refere-se à posição que um organismo ocupa em uma cadeia ou teia alimentar, de acordo com sua fonte de energia. Os produtores estão no primeiro nível trófico. Os consumidores primários (herbívoros) estão no segundo. Os consumidores secundários (carnívoros que comem herbívoros) estão no terceiro, e assim sucessivamente. A energia diminui a cada transferência de um nível trófico para o seguinte (cerca de 10% é transferido).</div>`
  },
  {
    id: 'teia-alimentar',
    conceptTitle: 'Teia Alimentar',
    visualRepresentation: '🕸️🐜🦅',
    definition: 'Conjunto de várias cadeias alimentares interconectadas em um ecossistema. Mais complexa e realista.',
    keywords: 'Múltiplas cadeias, interconexões',
    detailsHtml: `<div class="modal-content-custom">Uma teia alimentar é uma representação mais realista e complexa das relações alimentares em um ecossistema. Ela consiste em múltiplas cadeias alimentares interconectadas, mostrando que a maioria dos organismos consome mais de um tipo de alimento e é consumida por mais de um tipo de predador. As teias alimentares ilustram a interdependência entre as espécies e a complexidade do fluxo de energia e nutrientes.</div>`
  },
  {
    id: 'decompositores',
    conceptTitle: 'Decompositores',
    visualRepresentation: '🍄🦠♻️',
    definition: 'Organismos (fungos e bactérias) que reciclam a matéria orgânica, devolvendo nutrientes ao ambiente.',
    keywords: 'Reciclagem, matéria orgânica, nutrientes',
    detailsHtml: `<div class="modal-content-custom">Decompositores são organismos, principalmente fungos e bactérias, que desempenham um papel crucial na ciclagem de nutrientes nos ecossistemas. Eles obtêm energia quebrando a matéria orgânica morta (cadáveres de plantas e animais, fezes, restos de alimentos) em substâncias inorgânicas mais simples. Esses nutrientes (como nitratos, fosfatos) são então liberados de volta ao solo ou à água, tornando-se disponíveis novamente para os produtores, fechando o ciclo da matéria.</div>`
  }
];

const ConceitosEcologiaPage = () => {
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
        <h1>Conceitos de Ecologia</h1>
        <p>Explore os conceitos básicos de ecologia.</p>
      </header>
      <main className={styles.conceptsGrid}>
        {conceitosEcologiaConcepts.map(concept => (
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
        <p>Descubra as interações que sustentam a vida em nosso planeta.</p>
      </footer>
    </div>
  );
};

export default ConceitosEcologiaPage;
