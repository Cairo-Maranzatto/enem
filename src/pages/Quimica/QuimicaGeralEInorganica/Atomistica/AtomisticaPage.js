import React, { useState } from 'react';
import styles from './AtomisticaPage.module.css';
import ConceptCard from '../../../../components/ConceptCard/ConceptCard';
import ConceptModal from '../../../../components/ConceptCard/ConceptModal';

const atomisticaConcepts = [
  {
    id: 'oQueEAtomo',
    conceptTitle: 'O que é um Átomo?',
    visualRepresentation: '⚛️',
    definition: 'A unidade básica da matéria, composta por um núcleo central e elétrons orbitando ao redor.',
    keywords: 'Matéria, Núcleo, Elétrons, Partículas',
    modalTitle: 'O que é um Átomo?',
    detailsHtml: `<p>Um <strong>átomo</strong> é a menor partícula de um elemento químico que mantém as propriedades químicas desse elemento. A palavra &quot;átomo&quot; vem do grego antigo &quot;atomos&quot;, que significa &quot;indivisível&quot;. Embora hoje saibamos que os átomos podem ser divididos em partículas subatômicas, eles ainda são considerados os blocos de construção fundamentais da matéria.</p><p><strong>Componentes Principais:</strong></p><ul><li><strong>Núcleo:</strong> Localizado no centro do átomo, contém prótons (carga positiva) e nêutrons (sem carga). O núcleo é denso e concentra quase toda a massa do átomo.</li><li><strong>Eletrosfera:</strong> Região ao redor do núcleo onde os elétrons (carga negativa) se movem em órbitas ou níveis de energia. Os elétrons são muito mais leves que os prótons e nêutrons.</li></ul><p>A neutralidade elétrica de um átomo é mantida quando o número de prótons é igual ao número de elétrons.</p>`
  },
  {
    id: 'modelosAtomicos',
    conceptTitle: 'Modelos Atômicos',
    visualRepresentation: '📜🔬💡',
    definition: 'Representações teóricas da estrutura atômica que evoluíram ao longo do tempo com novas descobertas.',
    keywords: 'Dalton, Thomson, Rutherford, Bohr, Quântico',
    modalTitle: 'Modelos Atômicos (Evolução)',
    detailsHtml: `<p>A compreensão da estrutura atômica evoluiu através de vários modelos propostos por cientistas ao longo da história:</p><ul><li><strong>Modelo de Dalton (1803):</strong> Átomos como esferas maciças, indivisíveis e indestrutíveis. Elementos diferentes têm átomos diferentes.</li><li><strong>Modelo de Thomson (1897):</strong> Após a descoberta do elétron, Thomson propôs o modelo do &quot;pudim de passas&quot;, onde o átomo seria uma esfera de carga positiva com elétrons (negativos) incrustados.</li><li><strong>Modelo de Rutherford (1911):</strong> Com base em experimentos de bombardeamento de partículas alfa em uma fina folha de ouro, Rutherford concluiu que o átomo possui um núcleo pequeno, denso e positivo, com elétrons orbitando ao redor em um grande espaço vazio (modelo planetário).</li><li><strong>Modelo de Rutherford-Bohr (1913):</strong> Niels Bohr aprimorou o modelo de Rutherford, propondo que os elétrons se movem em órbitas quantizadas (níveis de energia) ao redor do núcleo, sem irradiar energia. Eles podem saltar entre níveis absorvendo ou emitindo energia (fótons).</li><li><strong>Modelo Quântico (ou da Nuvem Eletrônica - a partir de 1920s):</strong> Baseado na mecânica quântica, descreve os elétrons não em órbitas definidas, mas em regiões de probabilidade chamadas orbitais. Este é o modelo mais aceito atualmente e considera a natureza dual partícula-onda do elétron. Cientistas como Schrödinger, Heisenberg e De Broglie foram fundamentais.</li></ul><p>Cada modelo contribuiu para a nossa compreensão atual da complexa estrutura do átomo.</p>`
  },
  {
    id: 'particulasSubatomicas',
    conceptTitle: 'Partículas Subatômicas',
    visualRepresentation: '➕➖⚪',
    definition: 'Os constituintes fundamentais do átomo: prótons, nêutrons e elétrons.',
    keywords: 'Prótons, Nêutrons, Elétrons, Carga, Massa',
    modalTitle: 'Partículas Subatômicas',
    detailsHtml: `<p>Os átomos são compostos por três tipos principais de partículas subatômicas:</p><ul><li><strong>Prótons (p⁺):</strong><ul><li>Localização: Núcleo</li><li>Carga Elétrica: Positiva (+1)</li><li>Massa Relativa: Aproximadamente 1 unidade de massa atômica (u.m.a)</li><li>Função: Determina o número atômico (Z) de um elemento, que define sua identidade química.</li></ul></li><li><strong>Nêutrons (n⁰):</strong><ul><li>Localização: Núcleo</li><li>Carga Elétrica: Neutra (0)</li><li>Massa Relativa: Aproximadamente 1 u.m.a (ligeiramente maior que a do próton)</li><li>Função: Contribuem para a massa do átomo (junto com os prótons) e ajudam a estabilizar o núcleo, especialmente em átomos maiores. Átomos do mesmo elemento com diferentes números de nêutrons são chamados isótopos.</li></ul></li><li><strong>Elétrons (e⁻):</strong><ul><li>Localização: Eletrosfera (orbitando o núcleo em níveis de energia)</li><li>Carga Elétrica: Negativa (-1)</li><li>Massa Relativa: Muito pequena, aproximadamente 1/1836 da massa de um próton (geralmente considerada desprezível para o cálculo da massa atômica).</li><li>Função: Determinam as propriedades químicas do átomo, especialmente os elétrons da camada de valência (camada mais externa), que participam das ligações químicas.</li></ul></li></ul><p>A interação dessas partículas define a estrutura e o comportamento dos átomos.</p>`
  },
  {
    id: 'numeroAtomicoMassa',
    conceptTitle: 'Z e A',
    visualRepresentation: '🔢🧮',
    definition: 'Z (Número Atômico) é o número de prótons. A (Número de Massa) é a soma de prótons e nêutrons.',
    keywords: 'Identidade Atômica, Prótons, Nêutrons, Notação',
    modalTitle: 'Número Atômico (Z) e Número de Massa (A)',
    detailsHtml: `<p>Dois números fundamentais são usados para caracterizar um átomo:</p><ul><li><strong>Número Atômico (Z):</strong><ul><li>Representa o <strong>número de prótons</strong> no núcleo de um átomo.</li><li>É a &quot;identidade&quot; do elemento químico. Cada elemento possui um número atômico único. Por exemplo, todo átomo com Z=1 é hidrogênio, todo átomo com Z=6 é carbono.</li><li>Em um átomo neutro, o número de elétrons é igual ao número de prótons (Z).</li></ul></li><li><strong>Número de Massa (A):</strong><ul><li>Representa a <strong>soma do número de prótons (Z) e do número de nêutrons (N)</strong> no núcleo de um átomo.</li><li>Fórmula: <code>A = Z + N</code></li><li>Indica a massa aproximada do átomo em unidades de massa atômica (u.m.a), já que a massa dos elétrons é desprezível.</li></ul></li></ul><p><strong>Notação Padrão:</strong></p><p>Um elemento X é geralmente representado como:</p><p style='text-align: center; font-size: 1.5em; margin-top: 10px; margin-bottom:10px;'><sup>A</sup><sub>Z</sub>X</p><p>Onde 'A' é o número de massa (sobrescrito à esquerda) e 'Z' é o número atômico (subscrito à esquerda).</p><p>Exemplo: O carbono-12 é representado como <sup>12</sup><sub>6</sub>C, indicando 6 prótons e (12-6) = 6 nêutrons.</p>`
  },
  {
    id: 'ionsIsotopos',
    conceptTitle: 'Íons e Isótopos',
    visualRepresentation: '↔️⚖️',
    definition: 'Íons são átomos com carga elétrica (ganho/perda de elétrons). Isótopos são átomos do mesmo elemento com diferentes números de nêutrons.',
    keywords: 'Cátions, Ânions, Variação de Nêutrons, Radioatividade',
    modalTitle: 'Íons e Isótopos',
    detailsHtml: `<p><strong>Íons:</strong></p><p>São átomos ou grupos de átomos que adquiriram uma carga elétrica líquida por ganhar ou perder elétrons.</p><ul><li><strong>Cátions:</strong> Íons com carga positiva. Formam-se quando um átomo <strong>perde</strong> um ou mais elétrons. Exemplo: Na⁺ (átomo de sódio que perdeu 1 elétron).</li><li><strong>Ânions:</strong> Íons com carga negativa. Formam-se quando um átomo <strong>ganha</strong> um ou mais elétrons. Exemplo: Cl⁻ (átomo de cloro que ganhou 1 elétron).</li></ul><p>A formação de íons é fundamental nas ligações iônicas e em muitas reações químicas.</p><p><strong>Isótopos:</strong></p><p>São átomos do mesmo elemento químico (mesmo número atômico Z) que possuem diferentes números de nêutrons (N) e, consequentemente, diferentes números de massa (A).</p><ul><li>Possuem as mesmas propriedades químicas (pois o número de prótons e elétrons é o mesmo), mas podem ter propriedades físicas diferentes (como densidade ou taxa de decaimento radioativo).</li><li>Exemplos:<ul><li>Hidrogênio (Z=1) possui três isótopos comuns: Prótio (<sup>1</sup>H - 0 nêutrons), Deutério (<sup>2</sup>H - 1 nêutron), Trítio (<sup>3</sup>H - 2 nêutrons).</li><li>Carbono (Z=6) possui isótopos como Carbono-12 (<sup>12</sup>C - 6 nêutrons, o mais comum) e Carbono-14 (<sup>14</sup>C - 8 nêutrons, radioativo, usado em datação).</li></ul></li></ul><p>Alguns isótopos são instáveis e sofrem decaimento radioativo, emitindo partículas e/ou energia.</p>`
  },
  {
    id: 'distribuicaoEletronica',
    conceptTitle: 'Distribuição Eletrônica',
    visualRepresentation: '📊📉📈',
    definition: 'A organização dos elétrons em camadas (níveis) e subcamadas (subníveis) de energia ao redor do núcleo.',
    keywords: 'Camadas K-Q, Subníveis s-p-d-f, Diagrama de Linus Pauling',
    modalTitle: 'Distribuição Eletrônica',
    detailsHtml: `<p>A distribuição eletrônica descreve como os elétrons de um átomo estão arranjados em diferentes níveis e subníveis de energia ao redor do núcleo. Essa organização determina muitas das propriedades químicas do elemento.</p><p><strong>Níveis de Energia (Camadas):</strong></p><p>Os elétrons ocupam camadas eletrônicas designadas por números (n=1, 2, 3, ...) ou letras (K, L, M, N, O, P, Q).</p><ul><li>Camada K (n=1): Mais próxima do núcleo, menor energia.</li><li>Camada L (n=2)</li><li>Camada M (n=3)</li><li>... e assim por diante.</li></ul><p>O número máximo de elétrons que uma camada 'n' pode comportar é <code>2n<sup>2</sup></code>.</p><p><strong>Subníveis de Energia (Subcamadas):</strong></p><p>Cada camada é dividida em subníveis, designados pelas letras s, p, d, f.</p><ul><li>Subnível s: comporta no máximo 2 elétrons.</li><li>Subnível p: comporta no máximo 6 elétrons.</li><li>Subnível d: comporta no máximo 10 elétrons.</li><li>Subnível f: comporta no máximo 14 elétrons.</li></ul><p><strong>Diagrama de Linus Pauling:</strong></p><p>É um guia para preencher os subníveis em ordem crescente de energia:</p><p>1s<br>2s 2p<br>3s 3p 3d<br>4s 4p 4d 4f<br>5s 5p 5d 5f<br>6s 6p 6d<br>7s 7p</p><p>A ordem de preenchimento segue as diagonais: 1s<sup>2</sup>, 2s<sup>2</sup>, 2p<sup>6</sup>, 3s<sup>2</sup>, 3p<sup>6</sup>, 4s<sup>2</sup>, 3d<sup>10</sup>, 4p<sup>6</sup>, 5s<sup>2</sup>, ...</p><p><strong>Exemplo (Sódio, Z=11):</strong> 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>1</sup></p><p>A camada de valência (última camada com elétrons) é crucial para as ligações químicas.</p>`
  }
];

const AtomisticaPage = () => {
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
        <h1>Atomística: A Estrutura Fundamental da Matéria</h1>
        <p>Explore os conceitos básicos sobre átomos, suas partículas e modelos.</p>
      </header>
      <main className={styles.conceptsGrid}>
        {atomisticaConcepts.map(concept => (
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
        <p>Atomística: Desvendando os blocos fundamentais do universo. ⚛️✨</p>
      </footer>
    </div>
  );
};

export default AtomisticaPage;
