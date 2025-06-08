import React, { useState } from 'react';
import styles from './DivisaoCelularPage.module.css';
import ConceptCard from '../../../../components/ConceptCard/ConceptCard';
import ConceptModal from '../../../../components/ConceptCard/ConceptModal';

const divisaoCelularConcepts = [
  {
    id: 'cicloCelular',
    conceptTitle: 'Ciclo Celular',
    visualRepresentation: '🔄⏳🧬',
    definition: 'Sequência de eventos desde a formação de uma célula até sua divisão, incluindo a interfase (crescimento e duplicação do DNA) e a fase de divisão (M).',
    keywords: 'Interfase, G1, S, G2, Fase M, Crescimento Celular, Replicação DNA',
    detailsHtml: `<p>A <strong>Divisão Celular</strong> é o processo pelo qual uma célula (célula-mãe) se divide para formar novas células (células-filhas). É fundamental para:</p><ul><li><strong>Crescimento</strong> de organismos multicelulares.</li><li><strong>Reparo</strong> de tecidos danificados.</li><li><strong>Reprodução</strong> em organismos unicelulares (assexuada) e formação de gametas em organismos sexuados.</li></ul><h4>Ciclo Celular:</h4><p>É a sequência de eventos que ocorrem desde a formação de uma célula até sua própria divisão. Compreende duas fases principais:</p><ol><li><strong>Interfase:</strong> Período de maior atividade metabólica e crescimento celular, onde a célula não está se dividindo. É subdividida em:<ul><li><strong>Fase G1 (Gap 1):</strong> Intenso crescimento celular, síntese de proteínas e RNA.</li><li><strong>Fase S (Síntese):</strong> Ocorre a duplicação do DNA (replicação). Cada cromossomo passa a ter duas cromátides-irmãs.</li><li><strong>Fase G2 (Gap 2):</strong> Continuação do crescimento e preparação final para a divisão, com síntese de mais proteínas e centríolos duplicados.</li></ul></li><li><strong>Fase M (Mitose ou Meiose):</strong> Período da divisão celular propriamente dita, que inclui a divisão do núcleo (cariocinese) e a divisão do citoplasma (citocinese).</li></ol><p>A regulação do ciclo celular é crucial para evitar a proliferação descontrolada de células (câncer).</p>`
  },
  {
    id: 'cromossomos',
    conceptTitle: 'Cromossomos',
    visualRepresentation: '🧬📜🔬',
    definition: 'Estruturas no núcleo celular que contêm o DNA e os genes. Formados por cromátides-irmãs durante a divisão.',
    keywords: 'DNA, Histonas, Cromátides-irmãs, Centrômero, Diploide (2n), Haploide (n), Cariótipo',
    detailsHtml: `<p>Os <strong>Cromossomos</strong> são estruturas filamentosas presentes no núcleo das células eucarióticas, constituídos principalmente por DNA associado a proteínas (histonas). Eles contêm os genes, que são as unidades da hereditariedade.</p><h4>Estrutura de um Cromossomo Duplicado (Metafásico):</h4><ul><li><strong>Cromátides-irmãs:</strong> Duas moléculas de DNA idênticas, unidas pelo centrômero, resultantes da replicação na fase S.</li><li><strong>Centrômero:</strong> Região de constrição do cromossomo onde as cromátides-irmãs se unem e onde as fibras do fuso se ligam durante a divisão.</li><li><strong>Cinetócoro:</strong> Estrutura proteica no centrômero à qual as fibras do fuso se ligam.</li><li><strong>Telômeros:</strong> Extremidades dos cromossomos, importantes para sua estabilidade.</li></ul><h4>Ploidia:</h4><ul><li><strong>Células Diploides (2n):</strong> Possuem dois conjuntos de cromossomos, um herdado de cada progenitor. Os cromossomos ocorrem em pares homólogos. Ex: células somáticas humanas (46 cromossomos, 23 pares).</li><li><strong>Células Haploides (n):</strong> Possuem apenas um conjunto de cromossomos. Ex: gametas humanos (23 cromossomos).</li></ul><p>O número e a forma dos cromossomos são característicos de cada espécie (cariótipo).</p>`
  },
  {
    id: 'mitose',
    conceptTitle: 'Mitose',
    visualRepresentation: '🧬➡️👯',
    definition: 'Divisão celular que produz duas células-filhas geneticamente idênticas à célula-mãe. Essencial para crescimento e reparo.',
    keywords: 'Prófase, Metáfase, Anáfase, Telófase, Citocinese, Células Somáticas, Divisão Equacional',
    detailsHtml: `<p>A <strong>Mitose</strong> é um tipo de divisão celular em que uma célula-mãe diploide (2n) origina duas células-filhas geneticamente idênticas à célula-mãe, também diploides (2n). É uma divisão equacional.</p><h4>Importância da Mitose:</h4><ul><li>Crescimento de organismos multicelulares.</li><li>Renovação e reparo de tecidos.</li><li>Reprodução assexuada em alguns organismos.</li></ul><h4>Fases da Mitose:</h4><ol><li><strong>Prófase:</strong><ul><li>Condensação dos cromossomos (tornam-se visíveis).</li><li>Desaparecimento do nucléolo e da carioteca (envoltório nuclear).</li><li>Formação do fuso mitótico (fibras do fuso) a partir dos centrossomos, que migram para os polos da célula.</li></ul></li><li><strong>Metáfase:</strong><ul><li>Cromossomos atingem o máximo de condensação.</li><li>Alinhamento dos cromossomos na placa equatorial (metafásica) da célula.</li><li>Cada cromossomo está ligado às fibras do fuso pelo cinetócoro de suas cromátides-irmãs.</li></ul></li><li><strong>Anáfase:</strong><ul><li>Separação das cromátides-irmãs, que agora são chamadas de cromossomos-filhos.</li><li>Os cromossomos-filhos migram para os polos opostos da célula, puxados pelas fibras do fuso.</li></ul></li><li><strong>Telófase:</strong><ul><li>Os cromossomos-filhos chegam aos polos e começam a se descondensar.</li><li>Reorganização da carioteca ao redor de cada conjunto de cromossomos.</li><li>Reaparecimento dos nucléolos.</li><li>O fuso mitótico desaparece.</li></ul></li></ol><h4>Citocinese:</h4><p>Divisão do citoplasma, geralmente iniciando-se no final da anáfase ou na telófase. Em células animais, ocorre por estrangulamento (formação de um anel contrátil). Em células vegetais, ocorre pela formação de uma placa celular (fragmoplasto) de dentro para fora.</p><p><strong>Resultado:</strong> Duas células-filhas geneticamente idênticas à célula-mãe (2n).</p>`
  },
  {
    id: 'meiose',
    conceptTitle: 'Meiose',
    visualRepresentation: '🧬➡️➗➡️🎲',
    definition: 'Divisão celular que produz quatro células-filhas haploides e geneticamente diferentes. Essencial para reprodução sexuada e variabilidade.',
    keywords: 'Meiose I, Meiose II, Crossing-over, Gametas, Esporos, Divisão Reducional, Divisão Equacional, Variabilidade Genética',
    detailsHtml: `<p>A <strong>Meiose</strong> é um tipo de divisão celular em que uma célula-mãe diploide (2n) origina quatro células-filhas haploides (n), geneticamente diferentes entre si e da célula-mãe. Ocorre em duas divisões sucessivas: Meiose I (reducional) e Meiose II (equacional).</p><h4>Importância da Meiose:</h4><ul><li>Formação de gametas (células sexuais) em animais e esporos em plantas.</li><li>Manutenção do número de cromossomos da espécie ao longo das gerações.</li><li>Aumento da variabilidade genética (devido ao crossing-over e à segregação independente dos cromossomos homólogos).</li></ul><h4>Meiose I (Divisão Reducional):</h4><p>Separação dos cromossomos homólogos.</p><ul><li><strong>Prófase I:</strong> Fase longa e complexa, subdividida em Leptóteno, Zigóteno, Paquíteno (ocorre o <em>crossing-over</em> ou permutação), Diplóteno e Diacinese. Cromossomos homólogos pareiam (sinapse) e trocam segmentos (crossing-over).</li><li><strong>Metáfase I:</strong> Pares de cromossomos homólogos alinham-se na placa equatorial.</li><li><strong>Anáfase I:</strong> Separação dos cromossomos homólogos (cada um com duas cromátides), que migram para polos opostos. Não há separação das cromátides-irmãs.</li><li><strong>Telófase I:</strong> Cromossomos chegam aos polos. Pode haver descondensação e formação de carioteca. Citocinese forma duas células haploides (n), mas com cromossomos duplicados.</li></ul><h4>Intercinese:</h4><p>Curto intervalo entre Meiose I e Meiose II. Não ocorre nova duplicação de DNA.</p><h4>Meiose II (Divisão Equacional):</h4><p>Semelhante à mitose, mas com células haploides. Separação das cromátides-irmãs.</p><ul><li><strong>Prófase II:</strong> Condensação dos cromossomos (se descondensaram), formação do fuso.</li><li><strong>Metáfase II:</strong> Cromossomos (com duas cromátides) alinham-se na placa equatorial.</li><li><strong>Anáfase II:</strong> Separação das cromátides-irmãs, que migram para polos opostos.</li><li><strong>Telófase II:</strong> Cromossomos chegam aos polos, descondensam, cariotecas e nucléolos se reorganizam. Citocinese.</li></ul><p><strong>Resultado:</strong> Quatro células-filhas haploides (n), geneticamente distintas.</p>`
  },
  {
    id: 'comparativo',
    conceptTitle: 'Comparativo: Mitose vs. Meiose',
    visualRepresentation: '🆚📊📈',
    definition: 'Principais diferenças e semelhanças entre os dois tipos de divisão celular, focando em objetivos, etapas e resultados.',
    keywords: 'Comparação, Diferenças, Semelhanças, Ploidia, Variabilidade, Número de Células',
    detailsHtml: `<h4>Principais Diferenças e Semelhanças entre Mitose e Meiose:</h4>
    <table>
       <thead>
           <tr>
               <th>Característica</th>
               <th>Mitose</th>
               <th>Meiose</th>
           </tr>
       </thead>
       <tbody>
           <tr>
               <td><strong>Célula-mãe (ploidia)</strong></td>
               <td>Diploide (2n) ou Haploide (n)</td>
               <td>Diploide (2n)</td>
           </tr>
           <tr>
               <td><strong>Número de divisões</strong></td>
               <td>Uma</td>
               <td>Duas (Meiose I e Meiose II)</td>
           </tr>
           <tr>
               <td><strong>Células-filhas (número)</strong></td>
               <td>Duas</td>
               <td>Quatro</td>
           </tr>
           <tr>
               <td><strong>Ploidia das células-filhas</strong></td>
               <td>Igual à célula-mãe (2n ou n)</td>
               <td>Metade da célula-mãe (n)</td>
           </tr>
           <tr>
               <td><strong>Identidade genética das células-filhas</strong></td>
               <td>Idênticas à célula-mãe e entre si</td>
               <td>Diferentes da célula-mãe e entre si</td>
           </tr>
           <tr>
               <td><strong>Ocorrência de Crossing-over</strong></td>
               <td>Não</td>
               <td>Sim (Prófase I)</td>
           </tr>
           <tr>
               <td><strong>Separação na Anáfase</strong></td>
               <td>Cromátides-irmãs</td>
               <td>Anáfase I: Cromossomos homólogos<br>Anáfase II: Cromátides-irmãs</td>
           </tr>
           <tr>
               <td><strong>Principais Funções</strong></td>
               <td>Crescimento, reparo, reprodução assexuada</td>
               <td>Formação de gametas/esporos, variabilidade genética</td>
           </tr>
           <tr>
               <td><strong>Onde ocorre (em humanos)</strong></td>
               <td>Células somáticas</td>
               <td>Células germinativas (ovários e testículos)</td>
           </tr>
       </tbody>
   </table>
   <h4>Resumo Visual:</h4>
   <p><strong>Mitose:</strong> 1 célula (2n) ➔ 2 células (2n)</p>
   <p><strong>Meiose:</strong> 1 célula (2n) ➔ Meiose I ➔ 2 células (n, com cromossomos duplicados) ➔ Meiose II ➔ 4 células (n)</p>`
  }
];

function DivisaoCelularPage() {
  const [modalContent, setModalContent] = useState(null); // { title: '', contentHtml: '' }
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (concept) => {
    setModalContent({ title: concept.conceptTitle, contentHtml: concept.detailsHtml });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Não é estritamente necessário limpar modalContent aqui, 
    // pois ele só é usado quando isModalOpen é true.
    // Mas pode ser uma boa prática para liberar a referência se o HTML for muito grande.
    // setModalContent(null); 
  };

  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <h1>Divisão Celular</h1>
        <p>Mitose e Meiose: Os Processos de Multiplicação e Variabilidade da Vida! (Clique nos cards para saber mais)</p>
      </header>

      <div className={styles.conceptsGrid}>
        {divisaoCelularConcepts.map(concept => (
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
        <p>Multiplicando a vida, perpetuando a espécie! 🧬🔄</p>
      </footer>
    </div>
  );
}

export default DivisaoCelularPage;
