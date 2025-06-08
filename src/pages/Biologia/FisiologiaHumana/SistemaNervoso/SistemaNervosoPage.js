import React, { useState } from 'react';
import styles from './SistemaNervosoPage.module.css';
import ConceptCard from '../../../../components/ConceptCard/ConceptCard';
import ConceptModal from '../../../../components/ConceptCard/ConceptModal';

const sistemaNervosoConcepts = [
  {
    id: 1,
    conceptTitle: 'Visão Geral',
    visualRepresentation: '🧠💡🔗⚙️',
    definition: 'Rede de comando que recebe, processa e transmite informações, coordenando todas as funções do corpo.',
    keywords: 'Comando, Informação, Coordenação, SNC, SNP',
    detailsHtml: '<div class="modal-content-custom">O <strong>Sistema Nervoso (SN)</strong> é uma complexa rede de células e tecidos responsável por coordenar as ações voluntárias e involuntárias do corpo e transmitir sinais entre suas diferentes partes.<ul><li><strong>Funções Principais:</strong> Recepção de estímulos (internos e externos), processamento de informações, elaboração de respostas, controle e coordenação das funções corporais, aprendizado, memória, emoções.</li><li><strong>Divisões Anatômicas Principais:</strong><ul><li><strong>Sistema Nervoso Central (SNC):</strong> Formado pelo encéfalo e medula espinhal. Centro de processamento e comando.</li><li><strong>Sistema Nervoso Periférico (SNP):</strong> Formado por nervos e gânglios. Conecta o SNC ao restante do corpo.</li></ul></li></ul></div>'
  },
  {
    id: 2,
    conceptTitle: 'Células Nervosas',
    visualRepresentation: '🧬🧠🤝🛠️',
    definition: 'Neurônios (transmitem impulsos) e células da glia (suporte, nutrição, defesa, mielinização).',
    keywords: 'Neurônio, Dendrito, Axônio, Bainha de Mielina, Células da Glia, Suporte',
    detailsHtml: '<div class="modal-content-custom">O tecido nervoso é composto por dois tipos principais de células:<ul><li><strong>Neurônios:</strong> São as unidades funcionais básicas do sistema nervoso, especializadas na condução de impulsos nervosos.<ul><li><strong>Estrutura:</strong> Corpo celular (com núcleo e organelas), dendritos (recebem estímulos) e axônio (transmite o impulso nervoso). O axônio pode ser revestido pela bainha de mielina (acelera a condução).</li><li><strong>Função:</strong> Gerar e propagar impulsos elétricos (potenciais de ação) e comunicar-se com outras células através de sinapses.</li></ul></li><li><strong>Células da Glia (ou Neuróglia):</strong> Células de suporte que auxiliam as funções dos neurônios.<ul><li><strong>Tipos e Funções:</strong> Astrócitos (sustentação, nutrição, barreira hematoencefálica), oligodendrócitos (formam a bainha de mielina no SNC), células de Schwann (formam a bainha de mielina no SNP), micróglia (defesa imunológica), células ependimárias (revestem cavidades, produzem líquido cefalorraquidiano).</li></ul></li></ul></div>'
  },
  {
    id: 3,
    conceptTitle: 'Impulso Nervoso',
    visualRepresentation: '⚡️📉📈🌊',
    definition: 'Sinal elétrico (potencial de ação) que percorre o neurônio devido a mudanças na permeabilidade iônica da membrana.',
    keywords: 'Potencial de Ação, Despolarização, Repolarização, Bomba Na⁺/K⁺, Condução Saltatória',
    detailsHtml: '<div class="modal-content-custom">O <strong>Impulso Nervoso</strong> (ou potencial de ação) é um sinal elétrico que se propaga ao longo da membrana do neurônio.<ul><li><strong>Potencial de Repouso:</strong> Membrana polarizada (interior negativo em relação ao exterior), devido à distribuição desigual de íons (principalmente Na⁺ e K⁺) mantida pela bomba de sódio-potássio.</li><li><strong>Estímulo Limiar:</strong> Para que um impulso seja gerado, o estímulo deve atingir uma intensidade mínima (limiar de excitação).</li><li><strong>Despolarização:</strong> Com o estímulo limiar, canais de Na⁺ se abrem, e Na⁺ entra rapidamente na célula, invertendo a polaridade da membrana (interior positivo).</li><li><strong>Repolarização:</strong> Canais de Na⁺ se fecham e canais de K⁺ se abrem, permitindo a saída de K⁺ da célula, restaurando a polaridade negativa interna.</li><li><strong>Bomba de Sódio-Potássio:</strong> Restabelece as concentrações iônicas iniciais de Na⁺ e K⁺.</li><li><strong>Lei do Tudo ou Nada:</strong> Se o estímulo atinge o limiar, o potencial de ação é gerado com amplitude máxima; abaixo do limiar, nada acontece.</li><li><strong>Condução Saltatória:</strong> Em axônios mielinizados, o impulso \'salta\' entre os nódulos de Ranvier (interrupções na bainha de mielina), tornando a condução muito mais rápida.</li></ul></div>'
  },
  {
    id: 4,
    conceptTitle: 'Sinapses',
    visualRepresentation: '🔗🗣️🧪⚡',
    definition: 'Junções onde neurônios se comunicam, quimicamente (via neurotransmissores) ou eletricamente.',
    keywords: 'Neurotransmissores, Fenda Sináptica, Receptores, Excitatória, Inibitória',
    detailsHtml: '<div class="modal-content-custom"><strong>Sinapses</strong> são as junções especializadas onde um neurônio transmite um sinal para outro neurônio ou para uma célula efetora (muscular ou glandular).<ul><li><strong>Tipos de Sinapses:</strong><ul><li><strong>Sinapses Químicas:</strong> Mais comuns. Utilizam substâncias químicas chamadas <strong>neurotransmissores</strong> para transmitir o sinal através da fenda sináptica (espaço entre as células). O impulso nervoso no neurônio pré-sináptico provoca a liberação de neurotransmissores, que se ligam a receptores na membrana do neurônio pós-sináptico, gerando um novo impulso (excitatório) ou inibindo-o.</li><li><strong>Sinapses Elétricas:</strong> Menos comuns. Permitem a passagem direta de íons entre células através de junções comunicantes (gap junctions), tornando a transmissão muito rápida.</li></ul></li><li><strong>Neurotransmissores:</strong> Moléculas mensageiras. Exemplos: Acetilcolina (contração muscular, memória), Dopamina (prazer, movimento), Serotonina (humor, sono), Noradrenalina (alerta), GABA (inibitório).</li></ul></div>'
  },
  {
    id: 5,
    conceptTitle: 'SNC: Encéfalo',
    visualRepresentation: '🧠🧐🕹️❤️',
    definition: 'Principal centro de processamento (cérebro, cerebelo, tronco encefálico), controla funções superiores e vitais.',
    keywords: 'Cérebro, Cerebelo, Tronco Encefálico, Bulbo, Ponte, Funções Vitais',
    detailsHtml: '<div class="modal-content-custom">O <strong>Encéfalo</strong> é a parte do SNC contida no crânio, o principal centro de processamento e controle. Compreende:<ul><li><strong>Cérebro:</strong> A maior parte do encéfalo, dividido em dois hemisférios (direito e esquerdo), conectados pelo corpo caloso. Responsável por funções superiores como pensamento, linguagem, memória, aprendizado, percepção sensorial e controle motor voluntário. Sua superfície é o córtex cerebral, com giros e sulcos.</li><li><strong>Cerebelo:</strong> Localizado na parte posterior e inferior do encéfalo. Coordena os movimentos voluntários, o equilíbrio, a postura e o tônus muscular.</li><li><strong>Tronco Encefálico:</strong> Conecta o cérebro à medula espinhal. Controla funções vitais básicas.<ul><li><strong>Mesencéfalo:</strong> Relacionado a reflexos visuais e auditivos, tônus muscular.</li><li><strong>Ponte:</strong> Conecta diferentes partes do encéfalo, participa do controle da respiração.</li><li><strong>Bulbo Raquidiano (ou Medula Oblonga):</strong> Controla funções vitais como respiração, batimentos cardíacos, pressão arterial, deglutição, vômito.</li></ul></li></ul></div>'
  },
  {
    id: 6,
    conceptTitle: 'Cérebro: Detalhes',
    visualRepresentation: '🗺️🧠🗣️👀👂',
    definition: 'Dividido em hemisférios e lobos (frontal, parietal, temporal, occipital), com o córtex cerebral responsável por funções cognitivas.',
    keywords: 'Hemisférios, Córtex, Lobo Frontal, Lobo Parietal, Lobo Temporal, Lobo Occipital',
    detailsHtml: '<div class="modal-content-custom">O <strong>Cérebro</strong> é a estrutura mais complexa do encéfalo.<ul><li><strong>Hemisférios Cerebrais:</strong> Direito e esquerdo, geralmente com especializações funcionais (lateralização). O esquerdo é frequentemente dominante para linguagem e lógica; o direito para habilidades espaciais e artísticas.</li><li><strong>Corpo Caloso:</strong> Feixe de fibras nervosas que conecta os dois hemisférios, permitindo a comunicação entre eles.</li><li><strong>Córtex Cerebral:</strong> Camada mais externa do cérebro, rica em corpos celulares de neurônios (substância cinzenta). Altamente dobrado (giros e sulcos) para aumentar a área de superfície. Responsável pelas funções cognitivas superiores.</li><li><strong>Lobos Cerebrais:</strong> Cada hemisfério é dividido em quatro lobos principais, nomeados de acordo com os ossos do crânio que os cobrem:<ul><li><strong>Lobo Frontal:</strong> Planejamento, tomada de decisões, movimento voluntário, linguagem (Área de Broca), personalidade.</li><li><strong>Lobo Parietal:</strong> Processamento de sensações (tato, temperatura, dor, pressão), percepção espacial, navegação.</li><li><strong>Lobo Temporal:</strong> Audição, memória (hipocampo), compreensão da linguagem (Área de Wernicke), reconhecimento de faces.</li><li><strong>Lobo Occipital:</strong> Processamento visual.</li></ul></li></ul></div>'
  },
  {
    id: 7,
    conceptTitle: 'SNC: Medula Espinhal',
    visualRepresentation: '🚦🔗🚶‍♂️🛡️',
    definition: 'Cordão nervoso que transmite impulsos entre o encéfalo e o corpo, e coordena atos reflexos.',
    keywords: 'Condução, Reflexos, Substância Cinzenta, Substância Branca, Proteção',
    detailsHtml: '<div class="modal-content-custom">A <strong>Medula Espinhal</strong> é um cordão cilíndrico de tecido nervoso localizado dentro da coluna vertebral, que a protege.<ul><li><strong>Funções:</strong><ul><li><strong>Condução de Impulsos Nervosos:</strong> Transmite sinais entre o encéfalo e o resto do corpo (vias aferentes levam informações sensoriais ao encéfalo; vias eferentes levam comandos motores do encéfalo aos músculos e glândulas).</li><li><strong>Centro de Atos Reflexos:</strong> Coordena respostas rápidas e involuntárias a certos estímulos (reflexos medulares), sem a necessidade de envolvimento consciente do cérebro inicialmente.</li></ul></li><li><strong>Estrutura Interna:</strong> Em corte transversal, apresenta uma região central em forma de \'H\' de substância cinzenta (corpos celulares de neurônios e células da glia) e uma região periférica de substância branca (axônios mielinizados).</li><li><strong>Nervos Espinhais:</strong> Da medula partem 31 pares de nervos espinhais, que compõem parte do SNP.</li></ul></div>'
  },
  {
    id: 8,
    conceptTitle: 'SNP: Periférico',
    visualRepresentation: '🛣️🔌📡🖐️',
    definition: 'Rede de nervos (cranianos e espinhais) e gânglios que conectam o SNC ao corpo, transmitindo informações.',
    keywords: 'Nervos Cranianos, Nervos Espinhais, Gânglios, Fibras Aferentes, Fibras Eferentes',
    detailsHtml: '<div class="modal-content-custom">O <strong>Sistema Nervoso Periférico (SNP)</strong> é constituído por nervos e gânglios nervosos que se localizam fora do SNC. Sua função é conectar o SNC às diversas partes do corpo.<ul><li><strong>Componentes:</strong><ul><li><strong>Nervos:</strong> Feixes de fibras nervosas (axônios) envolvidos por tecido conjuntivo. Podem ser:<ul><li><strong>Nervos Cranianos (12 pares):</strong> Originam-se no encéfalo e inervam principalmente cabeça e pescoço (ex: nervo óptico, nervo facial).</li><li><strong>Nervos Espinhais (31 pares):</strong> Originam-se na medula espinhal e inervam tronco, membros e vísceras.</li></ul></li><li><strong>Gânglios Nervosos:</strong> Aglomerados de corpos celulares de neurônios localizados fora do SNC.</li></ul></li><li><strong>Divisão Funcional do SNP:</strong><ul><li><strong>SNP Somático (Voluntário):</strong> Controla os músculos esqueléticos (movimentos voluntários) e transmite informações sensoriais da pele, articulações e músculos para o SNC.</li><li><strong>SNP Autônomo ou Visceral (Involuntário):</strong> Controla funções involuntárias como batimentos cardíacos, digestão, respiração, secreção glandular. Divide-se em:<ul><li><strong>Simpático:</strong> Prepara o corpo para situações de estresse ou emergência (luta ou fuga).</li><li><strong>Parassimpático:</strong> Atua em situações de repouso e digestão, conservando energia.</li></ul></li></ul></li></ul></div>'
  },
  {
    id: 9,
    conceptTitle: 'Ato e Arco Reflexo',
    visualRepresentation: '💥🦵🔥💨',
    definition: 'Resposta rápida e involuntária a um estímulo (ato reflexo), mediada por um caminho neural específico (arco reflexo).',
    keywords: 'Resposta Involuntária, Receptor, Neurônio Sensitivo, Interneurônio, Neurônio Motor, Efetor',
    detailsHtml: '<div class="modal-content-custom">O <strong>Ato Reflexo</strong> é uma resposta motora rápida e involuntária a um estímulo sensorial. O caminho neural percorrido pelo impulso nervoso durante um ato reflexo é chamado de <strong>Arco Reflexo</strong>.<ul><li><strong>Componentes do Arco Reflexo Simples:</strong><ul><li><strong>Receptor Sensorial:</strong> Estrutura que detecta o estímulo (ex: terminações nervosas na pele).</li><li><strong>Neurônio Sensitivo (Aferente):</strong> Transmite o impulso nervoso do receptor até a medula espinhal (SNC).</li><li><strong>Centro Reflexo (na Medula Espinhal):</strong> Onde o neurônio sensitivo faz sinapse. Pode envolver um ou mais interneurônios (neurônios de associação) ou fazer sinapse diretamente com um neurônio motor.</li><li><strong>Neurônio Motor (Eferente):</strong> Transmite o impulso nervoso da medula espinhal até o órgão efetor.</li><li><strong>Órgão Efetor:</strong> Músculo ou glândula que executa a resposta (ex: contração muscular).</li></ul></li><li><strong>Importância:</strong> Os reflexos são importantes para a proteção do organismo, permitindo reações rápidas a situações de perigo (ex: retirar a mão de uma superfície quente) antes mesmo que o cérebro processe conscientemente a informação. Embora a resposta seja imediata, a informação sensorial também é enviada ao cérebro, permitindo a percepção consciente do estímulo após o reflexo.</li></ul></div>'
  }
];

const SistemaNervosoPage = () => {
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
        <h1>Sistema Nervoso</h1>
        <p>A central de comando do corpo humano!</p>
      </header>
      <main className={styles.conceptsGrid}>
        {sistemaNervosoConcepts.map(concept => (
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
        <p>Sistema Nervoso: A complexa rede que comanda suas ações e pensamentos! 🧠⚡️</p>
      </footer>
    </div>
  );
};

export default SistemaNervosoPage;
