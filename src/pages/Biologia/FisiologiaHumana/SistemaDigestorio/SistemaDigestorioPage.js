import React, { useState } from 'react';
import styles from './SistemaDigestorioPage.module.css';
import ConceptCard from '../../../../components/ConceptCard/ConceptCard';
import ConceptModal from '../../../../components/ConceptCard/ConceptModal';

const sistemaDigestorioConcepts = [
  {
    id: 'visao-geral',
    conceptTitle: 'Visão Geral',
    visualRepresentation: '🚶🍎➡️🧱',
    definition: 'Conjunto de órgãos responsáveis pela ingestão, digestão, absorção de alimentos e eliminação de resíduos.',
    keywords: 'Digestão, Absorção, Tubo Digestório, Órgãos Anexos',
    detailsHtml: `<div class="modal-content-custom">O <strong>Sistema Digestório</strong> é responsável por transformar os alimentos que ingerimos em moléculas menores, passíveis de serem absorvidas pelo organismo, fornecendo energia e nutrientes essenciais para a manutenção da vida.<ul><li><strong>Funções Principais:</strong> Ingestão, digestão (mecânica e química), absorção de nutrientes e eliminação de resíduos (fezes).</li><li><strong>Componentes Principais (Tubo Digestório):</strong> Boca, faringe, esôfago, estômago, intestino delgado (duodeno, jejuno, íleo) e intestino grosso (ceco, cólon, reto, ânus).</li><li><strong>Órgãos Anexos (Glândulas):</strong> Glândulas salivares, fígado (com a vesícula biliar) e pâncreas. Esses órgãos produzem secreções que auxiliam na digestão.</li></ul></div>`
  },
  {
    id: 'boca-e-cavidade-oral',
    conceptTitle: 'Boca e Cavidade Oral',
    visualRepresentation: '👄🦷👅💦',
    definition: 'Início do processo digestivo, com mastigação e ação da saliva (amilase salivar).',
    keywords: 'Mastigação, Dentes, Língua, Saliva, Amilase Salivar',
    detailsHtml: `<div class="modal-content-custom">A <strong>Boca</strong> é a porta de entrada dos alimentos no sistema digestório. Nela ocorrem os primeiros processos da digestão.<ul><li><strong>Componentes:</strong> Dentes (mastigação - digestão mecânica), língua (movimentação do alimento, percepção do sabor, auxílio na deglutição) e glândulas salivares.</li><li><strong>Saliva:</strong> Produzida pelas glândulas salivares, a saliva umedece o alimento, facilita a deglutição e contém a enzima <strong>amilase salivar (ptialina)</strong>, que inicia a digestão química do amido (carboidrato), transformando-o em maltose.</li><li><strong>Bolo Alimentar:</strong> Após a mastigação e insalivação, o alimento triturado e umedecido forma o bolo alimentar, pronto para ser deglutido.</li></ul></div>`
  },
  {
    id: 'faringe-e-esofago',
    conceptTitle: 'Faringe e Esôfago',
    visualRepresentation: '⤵️🍽️🚶‍♂️',
    definition: 'Caminho do bolo alimentar da boca ao estômago, através da deglutição e movimentos peristálticos.',
    keywords: 'Deglutição, Epiglote, Movimentos Peristálticos, Cárdia',
    detailsHtml: `<div class="modal-content-custom">Após a boca, o bolo alimentar passa pela faringe e pelo esôfago.<ul><li><strong>Faringe:</strong> Canal comum aos sistemas digestório e respiratório. Durante a deglutição, a epiglote (uma válvula cartilaginosa) fecha a entrada da laringe, impedindo que o alimento vá para as vias aéreas.</li><li><strong>Esôfago:</strong> Tubo muscular que conecta a faringe ao estômago. O bolo alimentar é impulsionado através do esôfago por meio de contrações musculares rítmicas e involuntárias chamadas <strong>movimentos peristálticos</strong> (ou peristaltismo).</li><li><strong>Esfíncter Esofágico Inferior (Cárdia):</strong> Músculo na junção do esôfago com o estômago que se relaxa para permitir a passagem do alimento e se contrai para evitar o refluxo do conteúdo gástrico.</li></ul></div>`
  },
  {
    id: 'estomago',
    conceptTitle: 'Estômago',
    visualRepresentation: '💪🧪🥩',
    definition: 'Órgão muscular onde ocorre a digestão de proteínas pela ação do suco gástrico (ácido e pepsina).',
    keywords: 'Suco Gástrico, HCl, Pepsina, Proteínas, Quimo',
    detailsHtml: `<div class="modal-content-custom">O <strong>Estômago</strong> é um órgão muscular em forma de bolsa onde ocorre importante parte da digestão, principalmente das proteínas.<ul><li><strong>Suco Gástrico:</strong> O estômago produz o suco gástrico, uma solução ácida (pH em torno de 2) que contém ácido clorídrico (HCl) e enzimas.</li><li><strong>Ácido Clorídrico (HCl):</strong> Torna o ambiente estomacal ácido, o que ativa enzimas, mata muitas bactérias presentes nos alimentos e auxilia na desnaturação de proteínas.</li><li><strong>Pepsina:</strong> Principal enzima do suco gástrico, secretada na forma inativa (pepsinogênio) e ativada pelo HCl. A pepsina quebra as proteínas em peptídeos menores.</li><li><strong>Muco:</strong> As paredes do estômago são revestidas por uma camada de muco protetor, que impede que o ácido e a pepsina danifiquem o próprio órgão.</li><li><strong>Quimo:</strong> Após a ação do suco gástrico e os movimentos de mistura do estômago, o bolo alimentar se transforma em uma massa pastosa e ácida chamada quimo.</li></ul></div>`
  },
  {
    id: 'intestino-delgado',
    conceptTitle: 'Intestino Delgado',
    visualRepresentation: '🔄🔬🧱➡️🩸',
    definition: 'Principal local de digestão química e absorção de nutrientes, auxiliado por pâncreas e fígado.',
    keywords: 'Duodeno, Suco Pancreático, Bile, Absorção, Vilosidades',
    detailsHtml: `<div class="modal-content-custom">O <strong>Intestino Delgado</strong> é um tubo longo e dobrado onde ocorre a maior parte da digestão química e a absorção da maioria dos nutrientes. Divide-se em três porções: duodeno, jejuno e íleo.<ul><li><strong>Duodeno:</strong> Primeira porção, onde o quimo vindo do estômago é misturado com secreções do pâncreas (suco pancreático) e do fígado (bile), além do suco entérico produzido pelo próprio intestino.</li><li><strong>Suco Pancreático:</strong> Contém enzimas como amilase pancreática (digere amido), lipase (digere lipídios), tripsina e quimotripsina (digerem proteínas/peptídeos) e nucleases (digerem ácidos nucleicos). Contém também bicarbonato de sódio, que neutraliza a acidez do quimo.</li><li><strong>Bile:</strong> Produzida pelo fígado e armazenada na vesícula biliar, a bile é lançada no duodeno. Não contém enzimas, mas seus sais biliares emulsionam as gorduras (quebram em gotículas menores), facilitando a ação das lipases.</li><li><strong>Suco Entérico (ou Intestinal):</strong> Produzido pelas paredes do intestino delgado, contém enzimas como peptidases (finalizam a digestão de proteínas), dissacaridases (maltase, sacarase, lactase - digerem dissacarídeos) e lipases.</li><li><strong>Jejuno e Íleo:</strong> Porções seguintes onde a digestão se completa e ocorre a intensa absorção dos nutrientes (aminoácidos, monossacarídeos, ácidos graxos, glicerol, vitaminas, sais minerais, água) através das vilosidades e microvilosidades intestinais, que aumentam enormemente a superfície de contato.</li><li><strong>Quilo:</strong> Após a digestão e início da absorção, o conteúdo intestinal passa a ser chamado de quilo.</li></ul></div>`
  },
  {
    id: 'figado-vesicula-e-pancreas',
    conceptTitle: 'Fígado, Vesícula e Pâncreas',
    visualRepresentation: '🤎🟢🧪',
    definition: 'Órgãos anexos que produzem secreções cruciais: bile (fígado/vesícula) e suco pancreático (pâncreas).',
    keywords: 'Bile, Sais Biliares, Suco Pancreático, Enzimas, Bicarbonato',
    detailsHtml: `<div class="modal-content-custom">São órgãos/glândulas anexas essenciais para a digestão.<ul><li><strong>Fígado:</strong> Maior glândula do corpo, possui inúmeras funções metabólicas. Na digestão, sua principal função é a <strong>produção da bile</strong>, que auxilia na digestão de gorduras.</li><li><strong>Vesícula Biliar:</strong> Pequeno órgão localizado abaixo do fígado, responsável por <strong>armazenar e concentrar a bile</strong> produzida pelo fígado. Libera a bile no duodeno quando gorduras estão presentes.</li><li><strong>Pâncreas:</strong> Glândula mista (endócrina e exócrina). Sua porção exócrina produz o <strong>suco pancreático</strong>, rico em enzimas digestivas (amilase, lipase, tripsina, quimotripsina, nucleases) e bicarbonato de sódio (neutraliza a acidez do quimo).</li></ul></div>`
  },
  {
    id: 'intestino-grosso',
    conceptTitle: 'Intestino Grosso',
    visualRepresentation: '💧💩🦠',
    definition: 'Absorção de água, formação e eliminação das fezes, e ação da flora intestinal.',
    keywords: 'Absorção de Água, Fezes, Flora Intestinal, Cólon, Reto',
    detailsHtml: `<div class="modal-content-custom">O <strong>Intestino Grosso</strong> é a porção final do tubo digestório.<ul><li><strong>Componentes:</strong> Ceco (onde se localiza o apêndice), cólon (ascendente, transverso, descendente, sigmoide), reto e ânus.</li><li><strong>Funções Principais:</strong><ul><li><strong>Absorção de Água e Sais Minerais:</strong> Absorve a maior parte da água restante do material não digerido, além de eletrólitos.</li><li><strong>Formação e Armazenamento das Fezes:</strong> O material não absorvido, juntamente com bactérias, células descamadas e muco, forma as fezes, que são armazenadas no reto antes da eliminação.</li><li><strong>Atividade Bacteriana (Flora Intestinal):</strong> Abriga uma vasta população de bactérias benéficas (flora intestinal ou microbiota) que produzem algumas vitaminas (como K e do complexo B) e fermentam resíduos não digeridos.</li></ul></li><li><strong>Eliminação:</strong> As fezes são eliminadas do corpo através do ânus no processo de defecação.</li></ul></div>`
  }
];

const SistemaDigestorioPage = () => {
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
        <h1>Sistema Digestório</h1>
        <p>Uma jornada fascinante pela transformação dos alimentos!</p>
      </header>
      <main className={styles.conceptsGrid}>
        {sistemaDigestorioConcepts.map(concept => (
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
        <p>Explorando a complexidade do sistema digestório humano!</p>
      </footer>
    </div>
  );
};

export default SistemaDigestorioPage;
