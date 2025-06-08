import React, { useState } from 'react';
import styles from './FuncoesInorganicasPage.module.css';
import ConceptCard from '../../../../components/ConceptCard/ConceptCard';
import ConceptModal from '../../../../components/ConceptCard/ConceptModal';

const funcoesInorganicasConcepts = [
  {
    id: 'funcoesInorganicasIntro',
    conceptTitle: 'Funções Inorgânicas',
    visualRepresentation: '🧪🔬⚗️',
    definition: 'Grupos de substâncias com propriedades químicas semelhantes devido a características estruturais comuns.',
    keywords: 'Ácidos, Bases, Sais, Óxidos, Classificação',
    detailsHtml: `<p>As <strong>funções inorgânicas</strong> são grupos de substâncias que apresentam propriedades químicas semelhantes, chamadas <strong>propriedades funcionais</strong>. Essa semelhança decorre da presença de um ou mais átomos, ou grupos de átomos, comuns em suas estruturas, conhecidos como <strong>grupo funcional</strong> (embora este termo seja mais proeminente na química orgânica, a ideia de uma parte característica da molécula que define sua função é aplicável).</p><p>As quatro principais funções inorgânicas são:</p><ul><li><strong>Ácidos:</strong> Geralmente têm sabor azedo, reagem com metais liberando H<sub>2</sub>, e mudam a cor de certos indicadores.</li><li><strong>Bases (ou Hidróxidos):</strong> Têm sabor adstringente (travoso), são escorregadias ao tato, e também mudam a cor de indicadores (de forma oposta aos ácidos).</li><li><strong>Sais:</strong> São compostos iônicos resultantes da reação entre um ácido e uma base. Muitos são sólidos cristalinos e solúveis em água.</li><li><strong>Óxidos:</strong> São compostos binários (formados por dois elementos), onde um deles é o oxigênio, sendo este o elemento mais eletronegativo.</li></ul><p>Compreender as funções inorgânicas é fundamental para classificar compostos, prever seu comportamento em reações químicas e entender diversos processos naturais e industriais.</p>`
  },
  {
    id: 'acidosArrhenius',
    conceptTitle: 'Ácidos de Arrhenius',
    visualRepresentation: '🍋💧🧪',
    definition: 'Substâncias que, em solução aquosa, ionizam produzindo como único cátion o H<sup>+</sup> (ou H<sub>3</sub>O<sup>+</sup>).',
    keywords: 'Ionização, H+, Azedo, Corrosivo, Indicadores',
    detailsHtml: `<p>Segundo a teoria de <strong>Svante Arrhenius</strong> (1887), um <strong>ácido</strong> é toda substância que, ao ser dissolvida em água (em solução aquosa), sofre <strong>ionização</strong>, produzindo exclusivamente como cátion o íon hidrogênio, H<sup>+</sup> (que em água se combina com H<sub>2</sub>O para formar o íon hidrônio, H<sub>3</sub>O<sup>+</sup>).</p><h4>Características Gerais dos Ácidos:</h4><ul><li><strong>Sabor Azedo:</strong> Como o do limão (ácido cítrico) e do vinagre (ácido acético). (<strong>Cuidado:</strong> Nunca prove substâncias desconhecidas em laboratório!).</li><li><strong>Corrosivos:</strong> Podem corroer metais, tecidos e materiais orgânicos.</li><li><strong>Reagem com Metais:</strong> Certos metais reagem com ácidos liberando gás hidrogênio (H<sub>2</sub>). Ex: Zn + 2HCl → ZnCl<sub>2</sub> + H<sub>2</sub>.</li><li><strong>Conduzem Eletricidade em Solução Aquosa:</strong> Devido à presença de íons livres.</li><li><strong>Mudam a Cor de Indicadores Ácido-Base:</strong> Ex: Tornam o papel de tornassol azul em vermelho; a fenolftaleína fica incolor.</li></ul><h4>Classificação dos Ácidos:</h4><ul><li><strong>Quanto ao número de hidrogênios ionizáveis:</strong> Monoácidos (HCl), Diácidos (H<sub>2</sub>SO<sub>4</sub>), Triácidos (H<sub>3</sub>PO<sub>4</sub>).</li><li><strong>Quanto à presença de oxigênio:</strong> Hidrácidos (sem oxigênio, ex: HCl, HBr) e Oxiácidos (com oxigênio, ex: HNO<sub>3</sub>, H<sub>2</sub>SO<sub>4</sub>).</li><li><strong>Quanto à força (grau de ionização, α):</strong> Fortes (α > 50%), Moderados (5% ≤ α ≤ 50%), Fracos (α < 5%).</li></ul><p>Exemplos comuns: HCl (ácido clorídrico), H<sub>2</sub>SO<sub>4</sub> (ácido sulfúrico), HNO<sub>3</sub> (ácido nítrico), H<sub>3</sub>PO<sub>4</sub> (ácido fosfórico), H<sub>2</sub>CO<sub>3</sub> (ácido carbônico).</p>`
  },
  {
    id: 'basesArrhenius',
    conceptTitle: 'Bases de Arrhenius',
    visualRepresentation: '🧼💧⚗️',
    definition: 'Substâncias que, em solução aquosa, dissociam liberando como único ânion o OH<sup>-</sup>.',
    keywords: 'Dissociação, OH-, Adstringente, Escorregadio, Hidróxidos',
    detailsHtml: `<p>Segundo a teoria de <strong>Svante Arrhenius</strong>, uma <strong>base</strong> (ou hidróxido) é toda substância que, ao ser dissolvida em água (em solução aquosa), sofre <strong>dissociação iônica</strong>, liberando exclusivamente como ânion o íon hidroxila (ou hidróxido), OH<sup>-</sup>.</p><h4>Características Gerais das Bases:</h4><ul><li><strong>Sabor Adstringente:</strong> &quot;Amarram&quot; a boca, como o de frutas verdes (caju verde). (<strong>Cuidado:</strong> Nunca prove substâncias desconhecidas!).</li><li><strong>Escorregadias ao Tato:</strong> Como o sabão (que contém bases).</li><li><strong>Corrosivas:</strong> Podem ser cáusticas, destruindo tecidos e materiais orgânicos (ex: soda cáustica - NaOH).</li><li><strong>Conduzem Eletricidade em Solução Aquosa:</strong> Devido à presença de íons livres.</li><li><strong>Mudam a Cor de Indicadores Ácido-Base:</strong> Ex: Tornam o papel de tornassol vermelho em azul; a fenolftaleína fica rosa/vermelha.</li><li><strong>Reagem com Ácidos (Neutralização):</strong> Formando sal e água.</li></ul><h4>Classificação das Bases:</h4><ul><li><strong>Quanto ao número de hidroxilas (OH<sup>-</sup>) dissociáveis:</strong> Monobases (NaOH), Dibases (Ca(OH)<sub>2</sub>), Tribases (Al(OH)<sub>3</sub>).</li><li><strong>Quanto à solubilidade em água:</strong> Solúveis (bases de metais alcalinos e NH<sub>4</sub>OH), Pouco Solúveis (bases de metais alcalinoterrosos, exceto Mg(OH)<sub>2</sub> que é praticamente insolúvel), Insolúveis (demais bases).</li><li><strong>Quanto à força (grau de dissociação, α):</strong> Fortes (bases de metais alcalinos e alcalinoterrosos, exceto Mg(OH)<sub>2</sub> e Be(OH)<sub>2</sub>), Fracas (demais bases, incluindo NH<sub>4</sub>OH, Mg(OH)<sub>2</sub>, Be(OH)<sub>2</sub>).</li></ul><p>Exemplos comuns: NaOH (hidróxido de sódio - soda cáustica), KOH (hidróxido de potássio), Ca(OH)<sub>2</sub> (hidróxido de cálcio - cal hidratada), Mg(OH)<sub>2</sub> (hidróxido de magnésio - leite de magnésia), NH<sub>4</sub>OH (hidróxido de amônio).</p>`
  },
  {
    id: 'sais',
    conceptTitle: 'Sais',
    visualRepresentation: '🧂💎🌊',
    definition: 'Compostos iônicos formados pela reação de neutralização total ou parcial entre um ácido e uma base.',
    keywords: 'Neutralização, Cátion≠H+, Ânion≠OH-, Solubilidade, Condutividade',
    detailsHtml: `<p>Um <strong>sal</strong> é um composto iônico que, em solução aquosa, se dissocia produzindo pelo menos um cátion diferente de H<sup>+</sup> e pelo menos um ânion diferente de OH<sup>-</sup>. Os sais são tipicamente formados pela reação de <strong>neutralização</strong> entre um ácido e uma base.</p><p><strong>Reação de Neutralização Genérica:</strong> Ácido + Base → Sal + Água</p><p>Exemplo: HCl (ácido) + NaOH (base) → NaCl (sal) + H<sub>2</sub>O (água)</p><h4>Características Gerais dos Sais:</h4><ul><li>São <strong>compostos iônicos</strong> por natureza.</li><li>A maioria é <strong>sólida e cristalina</strong> à temperatura ambiente.</li><li>Possuem <strong>altos pontos de fusão e ebulição</strong>.</li><li><strong>Conduzem eletricidade</strong> quando fundidos ou em solução aquosa (se solúveis), devido à mobilidade dos íons.</li><li>O sabor pode variar (ex: salgado - NaCl, amargo - MgSO<sub>4</sub>).</li><li>A <strong>solubilidade em água</strong> é variável e importante para sua classificação e reações.</li></ul><h4>Classificação dos Sais:</h4><ul><li><strong>Quanto à natureza dos íons (resultado da neutralização):</strong><ul><li><strong>Sal Neutro:</strong> Proveniente da neutralização total de um ácido por uma base. Ex: NaCl, KNO<sub>3</sub>.</li><li><strong>Sal Ácido (Hidrogenossal):</strong> Contém hidrogênio ionizável (H<sup>+</sup>) em sua estrutura, resultante da neutralização parcial de um ácido poliprótico. Ex: NaHCO<sub>3</sub> (bicarbonato de sódio).</li><li><strong>Sal Básico (Hidroxissal):</strong> Contém hidroxila (OH<sup>-</sup>) em sua estrutura, resultante da neutralização parcial de uma base polihidroxilada. Ex: Mg(OH)Cl.</li><li><strong>Sal Duplo ou Misto:</strong> Apresenta dois cátions diferentes (exceto H<sup>+</sup>) ou dois ânions diferentes (exceto OH<sup>-</sup>). Ex: KAl(SO<sub>4</sub>)<sub>2</sub> (alúmen de potássio).</li></ul></li><li><strong>Quanto à solubilidade em água:</strong> Sais solúveis, pouco solúveis ou insolúveis (existem regras de solubilidade).</li></ul><p>Exemplos comuns: NaCl (cloreto de sódio - sal de cozinha), NaHCO<sub>3</sub> (bicarbonato de sódio), CaCO<sub>3</sub> (carbonato de cálcio - mármore, calcário), CuSO<sub>4</sub> (sulfato de cobre II).</p>`
  },
  {
    id: 'oxidos',
    conceptTitle: 'Óxidos',
    visualRepresentation: '🔥💨⚛️',
    definition: 'Compostos binários onde o oxigênio é o elemento mais eletronegativo.',
    keywords: 'Binário, Oxigênio, Ácidos, Básicos, Anfóteros, Neutros',
    detailsHtml: `<p>Os <strong>óxidos</strong> são compostos químicos binários, ou seja, formados pela combinação de apenas <strong>dois elementos químicos diferentes</strong>, onde um deles é obrigatoriamente o <strong>oxigênio (O)</strong>, sendo este o elemento <strong>mais eletronegativo</strong> da combinação.</p><p>Fórmula geral: E<sub>x</sub>O<sub>y</sub>, onde E é um elemento qualquer.</p><h4>Classificação dos Óxidos (quanto ao comportamento químico):</h4><ul><li><strong>Óxidos Ácidos (ou Anidridos de Ácidos):</strong><ul><li>Reagem com água formando um ácido oxigenado. Ex: SO<sub>3</sub> + H<sub>2</sub>O → H<sub>2</sub>SO<sub>4</sub>.</li><li>Reagem com bases formando sal e água. Ex: CO<sub>2</sub> + 2NaOH → Na<sub>2</sub>CO<sub>3</sub> + H<sub>2</sub>O.</li><li>Geralmente são formados por ametais com alto NOX ou metais com NOX elevado (ex: CrO<sub>3</sub>, Mn<sub>2</sub>O<sub>7</sub>).</li><li>Exemplos: CO<sub>2</sub>, SO<sub>2</sub>, SO<sub>3</sub>, P<sub>2</sub>O<sub>5</sub>, N<sub>2</sub>O<sub>5</sub>.</li></ul></li><li><strong>Óxidos Básicos:</strong><ul><li>Reagem com água formando uma base (hidróxido). Ex: Na<sub>2</sub>O + H<sub>2</sub>O → 2NaOH.</li><li>Reagem com ácidos formando sal e água. Ex: CaO + 2HCl → CaCl<sub>2</sub> + H<sub>2</sub>O.</li><li>Geralmente são formados por metais com baixo NOX, especialmente metais alcalinos e alcalinoterrosos.</li><li>Exemplos: Na<sub>2</sub>O, K<sub>2</sub>O, CaO, MgO, FeO.</li></ul></li><li><strong>Óxidos Anfóteros:</strong><ul><li>Podem se comportar como óxidos ácidos (reagindo com bases fortes) ou como óxidos básicos (reagindo com ácidos fortes), formando sal e água em ambos os casos.</li><li>São formados por metais de transição ou semimetais.</li><li>Exemplos: ZnO, Al<sub>2</sub>O<sub>3</sub>, SnO, PbO.</li></ul></li><li><strong>Óxidos Neutros (ou Indiferentes):</strong><ul><li>Não reagem com água, ácidos ou bases.</li><li>São poucos e geralmente formados por ametais.</li><li>Exemplos: CO, NO, N<sub>2</sub>O.</li></ul></li><li><strong>Peróxidos:</strong><ul><li>Contêm o grupo (O<sub>2</sub>)<sup>2-</sup>, onde o oxigênio tem NOX -1. Reagem com água ou ácidos diluídos formando água oxigenada (H<sub>2</sub>O<sub>2</sub>). Ex: Na<sub>2</sub>O<sub>2</sub>, H<sub>2</sub>O<sub>2</sub>.</li></ul></li><li><strong>Superóxidos:</strong> Contêm o íon superóxido (O<sub>2</sub>)<sup>-</sup>, NOX do oxigênio é -1/2. Ex: KO<sub>2</sub>.</li></ul><p>Os óxidos são muito comuns e importantes, participando de processos como a respiração (CO<sub>2</sub>), combustão e formação de ferrugem (óxidos de ferro).</p>`
  },
  {
    id: 'reacoesNeutralizacaoPH',
    conceptTitle: 'Reações de Neutralização e pH',
    visualRepresentation: '⚖️💧🌈',
    definition: 'Reação entre ácido e base formando sal e água, e a escala que mede acidez/basicidade.',
    keywords: 'Neutralização, pH, pOH, Indicadores, Titulação',
    detailsHtml: `<p>A <strong>reação de neutralização</strong> é uma reação química que ocorre entre um ácido e uma base, resultando tipicamente na formação de um <strong>sal</strong> e <strong>água</strong>. Esta reação é fundamental na química e tem diversas aplicações, como na titulação para determinar a concentração de soluções.</p><p><strong>Equação Geral da Neutralização Total:</strong> Ácido + Base → Sal + Água</p><p>Exemplo: H<sub>2</sub>SO<sub>4</sub> (aq) + 2KOH (aq) → K<sub>2</sub>SO<sub>4</sub> (aq) + 2H<sub>2</sub>O (l)</p><h4>Tipos de Neutralização:</h4><ul><li><strong>Neutralização Total:</strong> Ocorre quando a quantidade de H<sup>+</sup> do ácido reage completamente com a quantidade de OH<sup>-</sup> da base.</li><li><strong>Neutralização Parcial:</strong> Ocorre quando há um excesso de H<sup>+</sup> (formando um hidrogenossal) ou de OH<sup>-</sup> (formando um hidroxissal).</li></ul><h4>Escala de pH e pOH:</h4><p>O <strong>pH (potencial hidrogeniônico)</strong> é uma escala logarítmica que mede a acidez ou basicidade de uma solução aquosa. Varia de 0 a 14 (a 25°C):</p><ul><li><strong>pH < 7:</strong> Solução ácida (maior concentração de H<sup>+</sup>)</li><li><strong>pH = 7:</strong> Solução neutra (concentração de H<sup>+</sup> igual à de OH<sup>-</sup>)</li><li><strong>pH > 7:</strong> Solução básica ou alcalina (maior concentração de OH<sup>-</sup>)</li></ul><p>O <strong>pOH (potencial hidroxiliônico)</strong> é uma medida similar para a concentração de íons OH<sup>-</sup>. A relação entre pH e pOH a 25°C é: <strong>pH + pOH = 14</strong>.</p><h4>Indicadores Ácido-Base:</h4><p>São substâncias que mudam de cor em função do pH do meio, permitindo identificar visualmente se uma solução é ácida, básica ou neutra. Exemplos:</p><ul><li><strong>Fenolftaleína:</strong> Incolor em meio ácido/neutro, rosa/vermelho em meio básico (pH > 8.2).</li><li><strong>Tornassol:</strong> Vermelho em meio ácido, azul em meio básico.</li><li><strong>Alaranjado de Metila:</strong> Vermelho em meio ácido (pH < 3.1), amarelo em meio básico (pH > 4.4).</li></ul><p>A compreensão da neutralização e do pH é vital em biologia (pH sanguíneo), agricultura (pH do solo), indústria (controle de processos) e no cotidiano.</p>`
  }
];

function FuncoesInorganicasPage() {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (concept) => {
    setModalContent({ title: concept.conceptTitle, contentHtml: concept.detailsHtml });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // setModalContent(null); // Opcional, para liberar memória se o HTML for muito grande
  };

  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <h1>Funções Inorgânicas: Os Pilares da Reatividade</h1>
        <p>Classificando e compreendendo os grandes grupos de compostos inorgânicos.</p>
      </header>

      <div className={styles.conceptsGrid}>
        {funcoesInorganicasConcepts.map(concept => (
          <ConceptCard
            key={concept.id}
            conceptTitle={concept.conceptTitle}
            visualRepresentation={concept.visualRepresentation}
            definition={concept.definition}
            keywords={concept.keywords}
            onClick={() => handleCardClick(concept)}
          />
        ))}
      </div>

      {isModalOpen && modalContent && (
        <ConceptModal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={modalContent.title}
          contentHtml={modalContent.contentHtml}
        />
      )}

      <footer className={styles.pageFooter}>
        <p>Identificando os atores da química inorgânica! 🧪🔬✨</p>
      </footer>
    </div>
  );
}

export default FuncoesInorganicasPage;
