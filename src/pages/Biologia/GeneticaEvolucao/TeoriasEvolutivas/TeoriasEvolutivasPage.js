import React, { useState } from 'react';
import styles from './TeoriasEvolutivasPage.module.css';
import ConceptCard from '../../../../components/ConceptCard/ConceptCard';
import ConceptModal from '../../../../components/ConceptCard/ConceptModal';

const teoriasEvolutivasConcepts = [
  {
    id: 'preDarwinLamarck',
    conceptTitle: 'Pré-Darwin e Lamarck',
    visualRepresentation: '📜🤔🦒',
    definition: 'Primeiras ideias sobre a transformação das espécies, com destaque para o Fixismo e as contribuições de Lamarck.',
    keywords: 'Fixismo, Lamarck, Uso e Desuso, Herança Adquirida, Transformismo',
    detailsHtml: `<div class="modal-content-custom">Antes das ideias revolucionárias de Darwin, o <strong>Fixismo</strong> era a visão dominante, postulando que as espécies eram imutáveis. No entanto, alguns pensadores começaram a questionar essa visão.<ul><li><strong>Jean-Baptiste Lamarck (1744-1829):</strong> Foi um dos primeiros a propor uma teoria coesa da evolução. Sua teoria, conhecida como Lamarckismo, baseava-se em dois princípios principais:<ul><li><strong>Lei do Uso e Desuso:</strong> O uso frequente de um órgão o desenvolve, enquanto o desuso o atrofia.</li><li><strong>Lei da Herança dos Caracteres Adquiridos:</strong> As modificações adquiridas pelo uso ou desuso seriam transmitidas aos descendentes. O exemplo clássico é o pescoço da girafa, que teria se alongado pelo esforço contínuo para alcançar folhas altas, e essa característica seria passada adiante.</li></ul></li><li><strong>Importância de Lamarck:</strong> Embora a herança de caracteres adquiridos não seja aceita pela genética moderna, Lamarck foi fundamental ao introduzir a ideia de que as espécies mudam ao longo do tempo e se adaptam ao ambiente, desafiando o fixismo.</li></ul></div>`
  },
  {
    id: 'darwinWallaceSelecaoNatural',
    conceptTitle: 'Darwin-Wallace e Seleção Natural',
    visualRepresentation: '🌍🐦📖⚙️',
    definition: 'A revolucionária teoria da evolução por seleção natural, onde os mais aptos sobrevivem, reproduzem-se e passam suas características adiante.',
    keywords: 'Darwin, Wallace, Seleção Natural, Variabilidade, Adaptação, Ancestral Comum',
    detailsHtml: `<div class="modal-content-custom"><strong>Charles Darwin (1809-1882)</strong> e, independentemente, <strong>Alfred Russel Wallace (1823-1913)</strong>, propuseram a teoria da evolução por <strong>Seleção Natural</strong>, uma das ideias mais impactantes da ciência.<ul><li><strong>Observações Fundamentais:</strong> Ambos naturalistas basearam suas ideias em extensas observações da natureza, incluindo:<ul><li><strong>Variabilidade:</strong> Indivíduos dentro de uma espécie apresentam variações em suas características.</li><li><strong>Superprodução de Descendentes:</strong> As espécies têm potencial para produzir mais descendentes do que o ambiente pode sustentar.</li><li><strong>Luta pela Existência:</strong> Devido aos recursos limitados, há uma competição entre os indivíduos.</li></ul></li><li><strong>Mecanismo da Seleção Natural:</strong><ol><li>Indivíduos com variações que os tornam mais aptos a sobreviver e se reproduzir em um determinado ambiente têm maior probabilidade de deixar descendentes.</li><li>Essas características vantajosas são herdáveis e, com o tempo, tornam-se mais comuns na população.</li><li>Isso leva à <strong>adaptação</strong> da população ao seu ambiente.</li></ol></li><li><strong>Ancestralidade Comum:</strong> Darwin também propôs que todas as formas de vida descendem de um ancestral comum, diversificando-se ao longo do tempo ('descendência com modificação').</li><li><strong>'A Origem das Espécies' (1859):</strong> Livro seminal de Darwin onde detalhou sua teoria.</li></ul></div>`
  },
  {
    id: 'neodarwinismo',
    conceptTitle: 'Neodarwinismo',
    visualRepresentation: '🧬➕⚙️🔄📈',
    definition: 'A unificação da teoria de Darwin com a genética, explicando as fontes de variação e os mecanismos que atuam sobre as populações.',
    keywords: 'Genética Mendeliana, Mutação, Recombinação, Genética de Populações, Frequência Alélica',
    detailsHtml: `<div class="modal-content-custom">O <strong>Neodarwinismo</strong>, também conhecido como <strong>Teoria Sintética da Evolução</strong>, surgiu nas décadas de 1930 e 1940, integrando a teoria da seleção natural de Darwin com os avanços da genética mendeliana, da genética de populações e de outras áreas da biologia.<ul><li><strong>Bases da Teoria Sintética:</strong><ul><li><strong>Fontes de Variabilidade Genética:</strong> A teoria explica a origem da variação sobre a qual a seleção natural atua: <br>    - <strong>Mutação:</strong> Alterações aleatórias no DNA, sendo a fonte primária de novos alelos e características. <br>    - <strong>Recombinação Gênica:</strong> Mistura de genes durante a reprodução sexuada (crossing-over na meiose e combinação de gametas na fecundação).</li><li><strong>População como Unidade Evolutiva:</strong> A evolução ocorre através de mudanças nas frequências alélicas e genotípicas das populações ao longo das gerações.</li><li><strong>Mecanismos Evolutivos:</strong> Além da seleção natural, outros fatores como deriva genética e fluxo gênico são reconhecidos como importantes na alteração das frequências alélicas.</li></ul></li><li><strong>Conceito Moderno de Evolução:</strong> É definida como a mudança na composição genética das populações ao longo do tempo.</li></ul></div>`
  },
  {
    id: 'evidenciasEvolucao',
    conceptTitle: 'Evidências da Evolução',
    visualRepresentation: '🦴🗺️🔬👶',
    definition: 'Diversas linhas de evidência científica, de fósseis à genética molecular, que corroboram a ocorrência da evolução.',
    keywords: 'Fósseis, Homologia, Analogia, Embriologia, DNA, Biogeografia, Código Genético',
    detailsHtml: `<div class="modal-content-custom">A teoria da evolução é sustentada por uma vasta gama de evidências científicas de diferentes campos da biologia:<ul><li><strong>Registro Fóssil:</strong> Restos ou vestígios de organismos passados que mostram uma sucessão de formas de vida e a existência de formas de transição entre grandes grupos.</li><li><strong>Anatomia Comparada:</strong><ul><li><strong>Órgãos Homólogos:</strong> Estruturas com a mesma origem embrionária e ancestral, mas que podem ter funções diferentes (ex: braço humano, asa de morcego). Indicam irradiação adaptativa.</li><li><strong>Órgãos Análogos:</strong> Estruturas com origem embrionária diferente, mas que desempenham funções semelhantes devido à adaptação a condições ambientais similares (ex: asas de insetos e aves). Indicam convergência evolutiva.</li><li><strong>Órgãos Vestigiais:</strong> Estruturas reduzidas e sem função aparente, mas que eram funcionais em ancestrais (ex: apêndice em humanos).</li></ul></li><li><strong>Embriologia Comparada:</strong> Semelhanças nos estágios iniciais do desenvolvimento embrionário de diferentes grupos de vertebrados sugerem um parentesco evolutivo.</li><li><strong>Bioquímica e Genética Molecular:</strong> A universalidade do código genético e as semelhanças nas sequências de DNA, RNA e proteínas entre diferentes espécies são fortes indicativos de ancestralidade comum. Quanto maior a semelhança molecular, maior o grau de parentesco.</li><li><strong>Biogeografia:</strong> A distribuição geográfica das espécies. Organismos de regiões próximas tendem a ser mais aparentados, e ilhas frequentemente possuem espécies endêmicas relacionadas a formas continentais.</li></ul></div>`
  },
  {
    id: 'outrosMecanismosEvolutivos',
    conceptTitle: 'Outros Mecanismos Evolutivos',
    visualRepresentation: '🎲🧬↔️🌍📉',
    definition: 'Fatores como mutação, fluxo gênico, deriva genética e seleção sexual que, junto à seleção natural, moldam a evolução.',
    keywords: 'Mutação, Fluxo Gênico, Deriva Genética, Efeito Fundador, Efeito Gargalo, Seleção Sexual',
    detailsHtml: `<div class="modal-content-custom">Embora a seleção natural seja um mecanismo central, outros fatores contribuem para as mudanças evolutivas nas populações:<ul><li><strong>Mutação:</strong> É a fonte primária de toda a variação genética, introduzindo novos alelos nas populações de forma aleatória. Sem mutação, não haveria matéria-prima para a evolução.</li><li><strong>Fluxo Gênico (Migração):</strong> É a transferência de alelos entre populações devido ao movimento de indivíduos ou gametas. Pode introduzir novos alelos ou alterar as frequências alélicas existentes, tendendo a homogeneizar as populações.</li><li><strong>Deriva Genética (Oscilação Gênica):</strong> São flutuações aleatórias nas frequências alélicas de uma geração para outra, especialmente pronunciadas em populações pequenas. Eventos como o <strong>Efeito Fundador</strong> (uma nova população é formada por poucos indivíduos) e o <strong>Efeito Gargalo</strong> (redução drástica no tamanho da população) são exemplos de deriva genética.</li><li><strong>Seleção Sexual:</strong> Um tipo de seleção natural onde indivíduos com certas características herdáveis têm maior sucesso em obter parceiros para reprodução. Pode levar ao desenvolvimento de características sexuais secundárias conspícuas (dimorfismo sexual).</li><li><strong>Especiação:</strong> O processo de formação de novas espécies, que ocorre quando populações se tornam reprodutivamente isoladas e divergem geneticamente ao longo do tempo, sob a ação desses mecanismos.</li></ul></div>`
  },
  {
    id: 'impactoTeorias',
    conceptTitle: 'Impacto das Teorias',
    visualRepresentation: '💡🌍❤️🔬🤝',
    definition: 'A profunda influência da teoria evolutiva na biologia, medicina, agricultura, conservação e na nossa compreensão da vida.',
    keywords: 'Biologia Moderna, Medicina, Conservação, Resistência a Antibióticos, Compreensão da Vida',
    detailsHtml: `<div class="modal-content-custom">As teorias evolutivas, especialmente a síntese neodarwiniana, representam um dos pilares da biologia moderna, com profundas implicações:<ul><li><strong>Unificação da Biologia:</strong> A evolução fornece um quadro conceitual que unifica todas as áreas da biologia, desde a molecular até a ecologia. 'Nada na biologia faz sentido exceto à luz da evolução' (Theodosius Dobzhansky).</li><li><strong>Medicina:</strong> Compreensão da origem de doenças genéticas, evolução de patógenos (ex: resistência a antibióticos em bactérias, novas cepas virais), desenvolvimento de vacinas e terapias.</li><li><strong>Agricultura e Pecuária:</strong> Base para o melhoramento genético de plantas e animais, visando maior produtividade e resistência.</li><li><strong>Conservação da Biodiversidade:</strong> Entendimento da diversidade genética das populações, dos processos de especiação e extinção, fundamental para estratégias de conservação.</li><li><strong>Biotecnologia:</strong> Muitas técnicas biotecnológicas se baseiam em princípios evolutivos e na manipulação da variação genética.</li><li><strong>Compreensão da Natureza Humana:</strong> A evolução oferece perspectivas sobre a origem da nossa espécie, nosso comportamento e nossa relação com outros seres vivos.</li><li><strong>Implicações Filosóficas e Sociais:</strong> As teorias evolutivas geraram debates e reflexões sobre o lugar do ser humano no universo e a natureza da vida.</li></ul></div>`
  }
];

const TeoriasEvolutivasPage = () => {
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
        <h1>Teorias Evolutivas</h1>
        <p>Compreendendo a história e os mecanismos da vida! (Clique nos cards para saber mais)</p>
      </header>
      <main className={styles.conceptsGrid}>
        {teoriasEvolutivasConcepts.map(concept => (
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
        <p>A jornada da vida através do tempo, revelando como as espécies se transformam e se adaptam. 🌍🕰️✨</p>
      </footer>
    </div>
  );
};

export default TeoriasEvolutivasPage;
