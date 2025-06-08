import React, { useState } from 'react';
import styles from './LeisDeMendelPage.module.css';
import ConceptCard from '../../../../components/ConceptCard/ConceptCard';
import ConceptModal from '../../../../components/ConceptCard/ConceptModal';

const leisDeMendelConcepts = [
  {
    id: 'mendelConceitos',
    conceptTitle: 'Mendel e Conceitos',
    visualRepresentation: '👨‍🔬🌱🧬',
    definition: 'O monge que desvendou a hereditariedade e os termos básicos para entendê-la.',
    keywords: 'Gene, Alelo, Dominante, Recessivo, Genótipo, Fenótipo',
    detailsHtml: `<div class="modal-content-custom"><strong>Gregor Mendel (1822-1884)</strong>, um monge austríaco, é considerado o 'Pai da Genética'. Ele realizou experimentos com ervilhas (<em>Pisum sativum</em>) que revelaram os princípios básicos da hereditariedade.<ul><li><strong>Por que ervilhas?</strong> Fácil cultivo, ciclo de vida curto, produção de muitos descendentes, características contrastantes e de fácil identificação, e possibilidade de realizar autofecundação e fecundação cruzada controlada.</li><li><strong>Conceitos Chave:</strong><ul><li><strong>Gene:</strong> Segmento de DNA que determina uma característica. Mendel chamava de 'fator'.</li><li><strong>Alelos:</strong> Formas alternativas de um gene que ocupam o mesmo loco (posição) em cromossomos homólogos. Ex: alelo para semente amarela (V) e alelo para semente verde (v).</li><li><strong>Homozigoto:</strong> Indivíduo com dois alelos iguais para uma característica (Ex: VV ou vv).</li><li><strong>Heterozigoto:</strong> Indivíduo com dois alelos diferentes para uma característica (Ex: Vv). Também chamado de híbrido.</li><li><strong>Dominante:</strong> Alelo que se expressa em homozigose (VV) e heterozigose (Vv).</li><li><strong>Recessivo:</strong> Alelo que só se expressa em homozigose (vv).</li><li><strong>Genótipo:</strong> Constituição genética de um indivíduo (Ex: VV, Vv, vv).</li><li><strong>Fenótipo:</strong> Características observáveis de um indivíduo, resultantes da interação do genótipo com o ambiente (Ex: cor da semente amarela, cor da semente verde).</li></ul></ul></div>`
  },
  {
    id: 'primeiraLei',
    conceptTitle: '1ª Lei de Mendel',
    visualRepresentation: '🌿⚖️🎲',
    definition: 'Cada característica é definida por um par de fatores que se separam na formação dos gametas.',
    keywords: 'Segregação, Monoibridismo, Gametas, Dominância, Proporção 3:1',
    detailsHtml: `<div class="modal-content-custom">Também conhecida como <strong>Lei da Segregação dos Fatores</strong> ou <strong>Princípio da Pureza dos Gametas</strong>. Mendel concluiu que: 'Cada característica é determinada por um par de fatores (alelos) que se separam (segregam) na formação dos gametas, de modo que cada gameta carrega apenas um fator para cada característica.'<ul><li><strong>Experimento Clássico (Monoibridismo):</strong> Cruzamento de plantas puras (homozigotas) com características contrastantes (ex: sementes amarelas VV x sementes verdes vv).<ul><li><strong>Geração Parental (P):</strong> VV (amarela) x vv (verde)</li><li><strong>Geração F1 (Primeira Filial):</strong> 100% Vv (amarelas). O fator para amarelo (V) é dominante sobre o verde (v).</li><li><strong>Autofecundação de F1 (F1 x F1):</strong> Vv x Vv</li><li><strong>Geração F2 (Segunda Filial):</strong> Proporção fenotípica de aproximadamente 3 amarelas para 1 verde (3:1). Proporção genotípica de 1 VV : 2 Vv : 1 vv (1:2:1).</li></ul></li><li><strong>Quadro de Punnett (para F1 x F1 - Vv x Vv):</strong><table class='punnett-square'><tr><th></th><th>V</th><th>v</th></tr><tr><th>V</th><td>VV</td><td>Vv</td></tr><tr><th>v</th><td>Vv</td><td>vv</td></tr></table><p>Resultados: 1 VV (Amarela), 2 Vv (Amarela), 1 vv (Verde)</p></li></ul></div>`
  },
  {
    id: 'segundaLei',
    conceptTitle: '2ª Lei de Mendel',
    visualRepresentation: '🌿🌿🔗🎲',
    definition: 'Fatores para diferentes características segregam-se de forma independente na formação dos gametas.',
    keywords: 'Diibridismo, Segregação Independente, Proporção 9:3:3:1, Combinações',
    detailsHtml: `<div class="modal-content-custom">Também conhecida como <strong>Lei da Segregação Independente dos Fatores</strong> ou <strong>Diibridismo</strong>. Mendel concluiu que: 'Os fatores (alelos) para duas ou mais características se distribuem independentemente uns dos outros durante a formação dos gametas.' Isso é válido para genes localizados em cromossomos diferentes ou distantes no mesmo cromossomo.<ul><li><strong>Experimento Clássico (Diibridismo):</strong> Cruzamento de plantas puras para duas características (ex: sementes amarelas e lisas VVRR x sementes verdes e rugosas vvrr).<ul><li><strong>Geração Parental (P):</strong> VVRR (amarela-lisa) x vvrr (verde-rugosa)</li><li><strong>Geração F1:</strong> 100% VvRr (amarelas-lisas).</li><li><strong>Autofecundação de F1 (VvRr x VvRr):</strong> Produz 4 tipos de gametas (VR, Vr, vR, vr).</li><li><strong>Geração F2:</strong> Proporção fenotípica clássica de 9:3:3:1.<ul><li>9/16 Amarelas Lisas (V_R_)</li><li>3/16 Amarelas Rugosas (V_rr)</li><li>3/16 Verdes Lisas (vvR_)</li><li>1/16 Verdes Rugosas (vvrr)</li></ul></li></ul></li><li><strong>Quadro de Punnett (para F1 x F1 - VvRr x VvRr):</strong><table class='punnett-square'><tr><th>Gametas</th><th>VR</th><th>Vr</th><th>vR</th><th>vr</th></tr><tr><th>VR</th><td>VVRR</td><td>VVRr</td><td>VvRR</td><td>VvRr</td></tr><tr><th>Vr</th><td>VVRr</td><td>VVrr</td><td>VvRr</td><td>Vvrr</td></tr><tr><th>vR</th><td>VvRR</td><td>VvRr</td><td>vvRR</td><td>vvRr</td></tr><tr><th>vr</th><td>VvRr</td><td>Vvrr</td><td>vvRr</td><td>vvrr</td></tr></table></li></ul></div>`
  },
  {
    id: 'casosEspeciais',
    conceptTitle: 'Casos Especiais',
    visualRepresentation: '🧩🧬🎨➕',
    definition: 'Variações da herança mendeliana, como dominância incompleta, codominância e alelos múltiplos.',
    keywords: 'Codominância, Alelos Múltiplos, Pleiotropia, Interação Gênica, Ligada ao Sexo',
    detailsHtml: `<div class="modal-content-custom">Embora as Leis de Mendel expliquem muitos padrões de herança, existem variações e interações mais complexas:<ul><li><strong>Dominância Incompleta:</strong> O heterozigoto apresenta um fenótipo intermediário entre os dos homozigotos. Ex: flor boca-de-leão (vermelha CV CV x branca CB CB = rosa CV CB).</li><li><strong>Codominância:</strong> O heterozigoto expressa ambos os fenótipos dos homozigotos simultaneamente. Ex: sistema sanguíneo MN (indivíduos LM LN expressam ambos os antígenos M e N). Tipo sanguíneo AB no sistema ABO.</li><li><strong>Alelos Múltiplos (Polialelia):</strong> Existência de três ou mais alelos para um mesmo gene na população, embora cada indivíduo diploide só possua dois. Ex: sistema sanguíneo ABO (alelos IA, IB, i).</li><li><strong>Pleiotropia:</strong> Um único gene afeta múltiplas características fenotípicas. Ex: fenilcetonúria, anemia falciforme.</li><li><strong>Interação Gênica:</strong> Vários genes interagem para determinar uma única característica. Pode ser epistática (um gene mascara o efeito de outro) ou não epistática. Ex: cor da pelagem em labradores (epistasia), forma da crista em galinhas.</li><li><strong>Herança Quantitativa (Poligênica):</strong> Características determinadas por múltiplos genes, com efeito aditivo, resultando em variação contínua. Ex: altura, cor da pele em humanos.</li><li><strong>Herança Ligada ao Sexo:</strong> Genes localizados nos cromossomos sexuais (X ou Y). Ex: daltonismo, hemofilia (ligados ao X).</li></ul></div>`
  },
  {
    id: 'importanciaLeis',
    conceptTitle: 'Importância das Leis',
    visualRepresentation: '🌍🔬💡📈',
    definition: 'A base da genética moderna, com aplicações em agricultura, medicina e biotecnologia.',
    keywords: 'Genética Clássica, Melhoramento, Doenças Genéticas, Biotecnologia, Evolução',
    detailsHtml: `<div class="modal-content-custom">As descobertas de Mendel, embora inicialmente não reconhecidas, revolucionaram a biologia e formaram a base da Genética Clássica.<ul><li><strong>Fundamento da Genética:</strong> As leis de Mendel forneceram os princípios básicos para entender como as características são transmitidas de pais para filhos.</li><li><strong>Melhoramento Genético:</strong> Essenciais para o desenvolvimento de novas variedades de plantas e raças de animais com características desejáveis (maior produtividade, resistência a doenças) na agricultura e pecuária.</li><li><strong>Medicina e Saúde:</strong> Ajudam a compreender a herança de doenças genéticas, permitindo o aconselhamento genético, diagnóstico e, em alguns casos, o desenvolvimento de terapias. Ex: fibrose cística, anemia falciforme.</li><li><strong>Biotecnologia:</strong> O conhecimento da herança genética é crucial para técnicas de engenharia genética, como a produção de organismos geneticamente modificados (OGMs) e terapia gênica.</li><li><strong>Evolução:</strong> A variabilidade genética, sobre a qual a seleção natural atua, é gerada e transmitida de acordo com os princípios mendelianos. A genética mendeliana foi fundamental para a Síntese Moderna da Evolução.</li><li><strong>Identificação Humana:</strong> Testes de paternidade e investigações forenses utilizam princípios de herança genética.</li></ul></div>`
  }
];

const LeisDeMendelPage = () => {
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
        <h1>Leis de Mendel</h1>
        <p>Descobrindo os segredos da hereditariedade! (Clique nos cards para saber mais)</p>
      </header>
      <main className={styles.conceptsGrid}>
        {leisDeMendelConcepts.map(concept => (
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
        <p>Os alicerces da genética, revelando como a vida se perpetua e se diversifica. 🌱✨</p>
      </footer>
    </div>
  );
};

export default LeisDeMendelPage;
