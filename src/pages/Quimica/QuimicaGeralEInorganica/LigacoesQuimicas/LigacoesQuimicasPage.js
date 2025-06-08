import React, { useState } from 'react';
import styles from './LigacoesQuimicasPage.module.css';
import ConceptCard from '../../../../components/ConceptCard/ConceptCard';
import ConceptModal from '../../../../components/ConceptCard/ConceptModal';

const ligacoesQuimicasConcepts = [
  {
    id: 'ligacoesOcteto',
    conceptTitle: 'Ligações e Octeto',
    visualRepresentation: '⚛️↔️⚛️',
    definition: 'Forças que unem átomos para formar moléculas ou compostos, buscando estabilidade eletrônica.',
    keywords: 'Estabilidade, Octeto, Valência, Forças',
    modalTitle: 'Introdução às Ligações e Regra do Octeto',
    detailsHtml: `<p>As <strong>ligações químicas</strong> são as forças que mantêm os átomos unidos na formação de moléculas, íons ou agregados atômicos. Os átomos tendem a se ligar para alcançar uma configuração eletrônica mais estável, geralmente semelhante à de um gás nobre.</p><h4>Regra do Octeto</h4><p>Proposta por Gilbert N. Lewis, a <strong>Regra do Octeto</strong> afirma que os átomos tendem a ganhar, perder ou compartilhar elétrons de valência (elétrons da camada mais externa) até atingirem oito elétrons nessa camada, assemelhando-se à configuração eletrônica estável dos gases nobres (com exceção do Hélio, que se estabiliza com 2 elétrons - Regra do Dueto).</p><ul><li><strong>Exceções à Regra do Octeto:</strong> Embora útil, a regra do octeto tem exceções, como moléculas com número ímpar de elétrons (ex: NO), octetos incompletos (ex: BeCl<sub>2</sub>, BF<sub>3</sub>) ou octetos expandidos (ex: PCl<sub>5</sub>, SF<sub>6</sub>), comuns em elementos a partir do terceiro período.</li></ul><h4>Elétrons de Valência</h4><p>São os elétrons da camada mais externa de um átomo e são os principais responsáveis pelas ligações químicas. O número de elétrons de valência de um elemento representativo (grupos 1, 2, 13-18) geralmente corresponde ao número do seu grupo na tabela periódica (usando a numeração antiga 1A-8A).</p><p>A natureza e a força das ligações químicas determinam as propriedades físicas e químicas das substâncias.</p>`
  },
  {
    id: 'ligacaoIonica',
    conceptTitle: 'Ligação Iônica',
    visualRepresentation: 'Na<sup>+</sup>Cl<sup>-</sup>🧂',
    definition: 'Transferência de elétrons entre átomos, formando íons que se atraem eletrostaticamente.',
    keywords: 'Transferência, Cátion, Ânion, Retículo',
    modalTitle: 'Ligação Iônica',
    detailsHtml: `<p>A <strong>ligação iônica</strong> ocorre pela atração eletrostática entre íons de cargas opostas. Geralmente se forma entre um <strong>metal</strong> (baixa energia de ionização, tende a perder elétrons) e um <strong>ametal</strong> (alta afinidade eletrônica, tende a ganhar elétrons).</p><h4>Formação:</h4><ol><li><strong>Transferência de Elétrons:</strong> O átomo metálico perde um ou mais elétrons de valência, tornando-se um íon positivo (<strong>cátion</strong>).</li><li>O átomo ametálico ganha esses elétrons, tornando-se um íon negativo (<strong>ânion</strong>).</li><li><strong>Atração Eletrostática:</strong> Os íons de cargas opostas se atraem fortemente, formando um composto iônico.</li></ol><h4>Características dos Compostos Iônicos:</h4><ul><li>Formam <strong>sólidos cristalinos</strong> à temperatura ambiente, com os íons arranjados em um retículo cristalino tridimensional.</li><li>Possuem <strong>altos pontos de fusão e ebulição</strong> devido à forte atração entre os íons.</li><li>São <strong>duros e quebradiços</strong>.</li><li>Conduzem eletricidade quando <strong>fundidos (líquidos) ou dissolvidos em água</strong>, pois os íons se tornam móveis. No estado sólido, não conduzem eletricidade.</li><li>Muitos são solúveis em solventes polares, como a água.</li></ul><p><strong>Exemplo:</strong> Cloreto de Sódio (NaCl) - O Sódio (Na) perde 1 elétron para formar Na<sup>+</sup>, e o Cloro (Cl) ganha 1 elétron para formar Cl<sup>-</sup>. Os íons Na<sup>+</sup> e Cl<sup>-</sup> se atraem, formando o sal de cozinha.</p>`
  },
  {
    id: 'ligacaoCovalente',
    conceptTitle: 'Ligação Covalente',
    visualRepresentation: 'H:H O=C=O',
    definition: 'Compartilhamento de pares de elétrons entre átomos para alcançar estabilidade.',
    keywords: 'Compartilhamento, Pares, Polar, Apolar',
    modalTitle: 'Ligação Covalente',
    detailsHtml: `<p>A <strong>ligação covalente</strong> ocorre quando átomos compartilham um ou mais pares de elétrons para atingir uma configuração eletrônica estável, geralmente seguindo a regra do octeto. É comum entre ametais ou entre um ametal e o hidrogênio.</p><h4>Tipos de Ligações Covalentes (quanto ao número de pares compartilhados):</h4><ul><li><strong>Ligação Simples:</strong> Um par de elétrons compartilhado (ex: H-H na molécula de H<sub>2</sub>, C-H no CH<sub>4</sub>). Representada por um traço (—).</li><li><strong>Ligação Dupla:</strong> Dois pares de elétrons compartilhados (ex: O=O na molécula de O<sub>2</sub>, C=O no CO<sub>2</sub>). Representada por dois traços (=).</li><li><strong>Ligação Tripla:</strong> Três pares de elétrons compartilhados (ex: N≡N na molécula de N<sub>2</sub>). Representada por três traços (≡).</li></ul><h4>Polaridade da Ligação Covalente:</h4><ul><li><strong>Ligação Covalente Apolar:</strong> Ocorre quando os elétrons são compartilhados igualmente entre dois átomos idênticos (mesma eletronegatividade). Ex: H<sub>2</sub>, O<sub>2</sub>, Cl<sub>2</sub>.</li><li><strong>Ligação Covalente Polar:</strong> Ocorre quando os elétrons são compartilhados desigualmente entre dois átomos diferentes (diferentes eletronegatividades). O átomo mais eletronegativo atrai mais fortemente o par de elétrons, adquirindo uma carga parcial negativa (δ-), enquanto o outro átomo adquire uma carga parcial positiva (δ+). Ex: HCl, H<sub>2</sub>O.</li></ul><h4>Compostos Moleculares:</h4><p>Substâncias formadas por ligações covalentes são chamadas de compostos moleculares. Podem ser sólidos, líquidos ou gases à temperatura ambiente e geralmente têm pontos de fusão e ebulição mais baixos que os compostos iônicos.</p><p>A representação das ligações covalentes e dos elétrons de valência pode ser feita usando as <strong>Estruturas de Lewis</strong>.</p>`
  },
  {
    id: 'ligacaoMetalica',
    conceptTitle: 'Ligação Metálica',
    visualRepresentation: '⚙️e<sup>-</sup>⚙️',
    definition: 'Elétrons de valência deslocalizados formando um "mar de elétrons" que envolve cátions metálicos.',
    keywords: 'Mar de Elétrons, Deslocalizados, Condutividade',
    modalTitle: 'Ligação Metálica',
    detailsHtml: `<p>A <strong>ligação metálica</strong> é o tipo de ligação que ocorre entre átomos de metais. Ela é responsável pelas propriedades características dos metais, como alta condutividade elétrica e térmica, maleabilidade, ductilidade e brilho.</p><h4>Modelo do Mar de Elétrons:</h4><p>O modelo mais simples para explicar a ligação metálica é o do <strong>&quot;mar de elétrons&quot;</strong>. Nesse modelo:</p><ul><li>Os átomos metálicos perdem seus elétrons de valência, que se tornam <strong>deslocalizados</strong>, ou seja, não pertencem a um átomo específico.</li><li>Esses elétrons de valência formam uma &quot;nuvem&quot; ou &quot;mar&quot; de elétrons que se move livremente por todo o metal.</li><li>Os átomos metálicos, agora cátions, ficam imersos nesse mar de elétrons, formando uma estrutura cristalina organizada.</li><li>A ligação metálica resulta da atração entre os cátions metálicos positivos e o mar de elétrons negativo que os envolve.</li></ul><h4>Propriedades Explicadas pelo Modelo:</h4><ul><li><strong>Condutividade Elétrica e Térmica:</strong> A livre movimentação dos elétrons permite a fácil condução de carga elétrica e energia térmica.</li><li><strong>Maleabilidade e Ductilidade:</strong> Quando uma força é aplicada, as camadas de cátions metálicos podem deslizar umas sobre as outras sem quebrar a ligação, pois o mar de elétrons se ajusta à nova configuração.</li><li><strong>Brilho Metálico:</strong> Os elétrons livres podem absorver e reemitir luz de várias frequências.</li></ul><p><strong>Ligas Metálicas:</strong> São misturas de dois ou more elementos, sendo pelo menos um deles um metal, que apresentam propriedades metálicas. Exemplos: aço (ferro e carbono), latão (cobre e zinco), bronze (cobre e estanho).</p>`
  },
  {
    id: 'forcasIntermoleculares',
    conceptTitle: 'Forças Intermoleculares',
    visualRepresentation: '💧···H···💧',
    definition: 'Atrações entre moléculas que influenciam propriedades como ponto de ebulição e solubilidade.',
    keywords: 'Van der Waals, Dipolo-Dipolo, Pontes de Hidrogênio',
    modalTitle: 'Forças Intermoleculares',
    detailsHtml: `<p>As <strong>forças intermoleculares</strong> (ou forças de Van der Waals, em um sentido mais amplo) são as forças de atração ou repulsão que atuam <strong>entre</strong> moléculas vizinhas. São geralmente mais fracas que as ligações intramoleculares (iônica, covalente, metálica) que unem os átomos dentro de uma molécula.</p><p>Essas forças são cruciais para determinar muitas propriedades físicas das substâncias moleculares, como ponto de fusão, ponto de ebulição, viscosidade e solubilidade.</p><h4>Principais Tipos de Forças Intermoleculares (em ordem crescente de intensidade típica):</h4><ol><li><strong>Forças de Dispersão de London (ou Dipolo Induzido-Dipolo Induzido):</strong><ul><li>Presentes em <strong>todas</strong> as moléculas (polares e apolares).</li><li>Originam-se de flutuações momentâneas na distribuição eletrônica, criando dipolos instantâneos que induzem dipolos em moléculas vizinhas.</li><li>São as únicas forças presentes em moléculas apolares.</li><li>Sua intensidade aumenta com o tamanho da molécula (maior número de elétrons, maior polarizabilidade).</li></ul></li><li><strong>Forças Dipolo-Dipolo (ou Dipolo Permanente-Dipolo Permanente):</strong><ul><li>Ocorrem entre moléculas <strong>polares</strong> (que possuem um dipolo elétrico permanente).</li><li>A extremidade positiva de uma molécula atrai a extremidade negativa de outra.</li><li>São mais fortes que as forças de London para moléculas de tamanho similar.</li></ul></li><li><strong>Ligações de Hidrogênio (ou Pontes de Hidrogênio):</strong><ul><li>Um tipo especial e particularmente forte de interação dipolo-dipolo.</li><li>Ocorre quando um átomo de <strong>Hidrogênio (H)</strong> está ligado covalentemente a um átomo pequeno e muito eletronegativo, como <strong>Flúor (F), Oxigênio (O) ou Nitrogênio (N)</strong>.</li><li>O H dessa ligação interage fortemente com um par de elétrons não ligantes de um átomo de F, O ou N de uma molécula vizinha.</li><li>Responsáveis por propriedades anômalas da água (alto ponto de ebulição, densidade da água líquida maior que a do gelo), estrutura do DNA, etc.</li></ul></li></ol><p>A intensidade relativa dessas forças influencia diretamente o estado físico da substância: substâncias com forças intermoleculares mais fortes tendem a ser sólidas ou líquidas à temperatura ambiente, enquanto aquelas com forças mais fracas tendem a ser gases.</p>`
  },
  {
    id: 'geometriaPolaridade',
    conceptTitle: 'Geometria e Polaridade',
    visualRepresentation: '📐↔️🌐',
    definition: 'O arranjo tridimensional dos átomos em uma molécula e a distribuição de cargas elétricas.',
    keywords: 'VSEPR, Linear, Angular, Polaridade',
    modalTitle: 'Geometria Molecular e Polaridade da Molécula',
    detailsHtml: `<p>A <strong>geometria molecular</strong> descreve o arranjo tridimensional dos átomos em uma molécula. Ela é determinada principalmente pelo número de pares de elétrons (ligantes e não ligantes) ao redor do átomo central, conforme previsto pela teoria da <strong>Repulsão dos Pares de Elétrons da Camada de Valência (VSEPR)</strong>.</p><h4>Teoria VSEPR:</h4><p>Os pares de elétrons na camada de valência do átomo central se repelem e tendem a se arranjar de forma a minimizar essa repulsão, determinando a geometria da molécula.</p><h4>Geometrias Comuns (baseadas no número de pares de elétrons ao redor do átomo central):</h4><ul><li><strong>Linear:</strong> 2 pares de elétrons (ex: CO<sub>2</sub>, BeCl<sub>2</sub>). Ângulo de ligação de 180°.</li><li><strong>Trigonal Plana:</strong> 3 pares de elétrons (ex: BF<sub>3</sub>, SO<sub>3</sub>). Ângulos de ligação de 120°.</li><li><strong>Angular:</strong> 2 pares ligantes e 1 ou 2 pares não ligantes (ex: H<sub>2</sub>O - 2 ligantes, 2 não ligantes; SO<sub>2</sub> - 2 ligantes, 1 não ligante). Ângulos menores que os ideais devido à maior repulsão dos pares não ligantes.</li><li><strong>Tetraédrica:</strong> 4 pares de elétrons (ex: CH<sub>4</sub>, CCl<sub>4</sub>). Ângulos de ligação de 109.5°.</li><li><strong>Piramidal Trigonal:</strong> 3 pares ligantes e 1 par não ligante (ex: NH<sub>3</sub>). Ângulos próximos a 107°.</li></ul><h4>Polaridade da Molécula:</h4><p>A polaridade de uma molécula depende tanto da <strong>polaridade das suas ligações</strong> quanto da sua <strong>geometria molecular</strong>.</p><ul><li>Uma molécula será <strong>apolar</strong> se:<ul><li>Todas as suas ligações forem apolares.</li><li>Possuir ligações polares, mas a geometria da molécula for simétrica de tal forma que os momentos dipolares das ligações se cancelem (resultante do vetor momento dipolar é zero). Ex: CO<sub>2</sub> (linear), CCl<sub>4</sub> (tetraédrica).</li></ul></li><li>Uma molécula será <strong>polar</strong> se:<ul><li>Possuir ligações polares e a geometria da molécula for assimétrica, de modo que os momentos dipolares não se cancelem (resultante do vetor momento dipolar é diferente de zero). Ex: H<sub>2</sub>O (angular), NH<sub>3</sub> (piramidal), HCl.</li></ul></li></ul><p>A polaridade molecular influencia fortemente as propriedades físicas das substâncias, como solubilidade (semelhante dissolve semelhante), pontos de fusão e ebulição, e as forças intermoleculares.</p>`
  }
];

const LigacoesQuimicasPage = () => {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (concept) => {
    setModalContent({ title: concept.modalTitle, contentHtml: concept.detailsHtml });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <h1>Ligações Químicas: A Arquitetura da Matéria</h1>
        <p>Desvendando como os átomos se unem para formar o mundo ao nosso redor.</p>
      </header>
      <main className={styles.conceptsGrid}>
        {ligacoesQuimicasConcepts.map(concept => (
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
        <p>Conectando os átomos, construindo o universo! 🔗⚛️✨</p>
      </footer>
    </div>
  );
};

export default LigacoesQuimicasPage;
