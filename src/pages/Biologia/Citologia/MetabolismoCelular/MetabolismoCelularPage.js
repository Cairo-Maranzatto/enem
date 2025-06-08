import React, { useState } from 'react';
import styles from './MetabolismoCelularPage.module.css'; // Assuming CSS module
import ConceptCard from '../../../../components/ConceptCard/ConceptCard'; // Adjusted path
import ConceptModal from '../../../../components/ConceptCard/ConceptModal'; // Adjusted path

const metabolismoCelularConcepts = [
  {
    id: 'visao-geral',
    conceptTitle: 'Visão Geral do Metabolismo',
    visualRepresentation: '🔄',
    definition: 'Conjunto de transformações que as substâncias químicas sofrem no interior dos organismos vivos.',
    keywords: 'Anabolismo, Catabolismo, Energia',
    detailsHtml: `<div class="modal-content-custom">
      <p>O metabolismo é a soma de todas as reações químicas que ocorrem em um organismo. Essas reações são organizadas em vias metabólicas, que podem ser divididas em duas categorias principais:</p>
      <ul>
        <li><strong>Anabolismo:</strong> Processos de síntese de moléculas complexas a partir de moléculas mais simples, com consumo de energia (reações endergônicas). Ex: síntese de proteínas.</li>
        <li><strong>Catabolismo:</strong> Processos de quebra de moléculas complexas em moléculas mais simples, com liberação de energia (reações exergônicas). Ex: quebra da glicose na respiração celular.</li>
      </ul>
      <p>A energia liberada no catabolismo é frequentemente armazenada na forma de ATP, que é então utilizada para impulsionar as reações anabólicas.</p>
    </div>`
  },
  {
    id: 'atp',
    conceptTitle: 'ATP: A Moeda Energética',
    visualRepresentation: '🔋',
    definition: 'Principal molécula transportadora de energia utilizada pelas células para realizar trabalho.',
    keywords: 'Adenosina Trifosfato, Energia Celular',
    detailsHtml: `<div class="modal-content-custom">
      <p>O ATP (Adenosina Trifosfato) é um nucleotídeo que armazena e transporta energia química dentro das células. A energia é liberada quando uma ligação fosfato de alta energia é quebrada, convertendo ATP em ADP (Adenosina Difosfato) e fosfato inorgânico (Pi).</p>
      <p><strong>Estrutura do ATP:</strong></p>
      <ul>
        <li>Adenina (base nitrogenada)</li>
        <li>Ribose (açúcar de cinco carbonos)</li>
        <li>Três grupos fosfato</li>
      </ul>
      <p>A hidrólise do ATP (ATP + H₂O → ADP + Pi + energia) é uma reação exergônica que libera energia para processos celulares como contração muscular, transporte ativo e síntese de moléculas.</p>
    </div>`
  },
  {
    id: 'enzimas',
    conceptTitle: 'Enzimas: Catalisadores Biológicos',
    visualRepresentation: '🔬',
    definition: 'Proteínas que aceleram as reações químicas nas células, diminuindo a energia de ativação.',
    keywords: 'Catalisador, Sítio Ativo, Especificidade',
    detailsHtml: `<div class="modal-content-custom">
      <p>Enzimas são catalisadores biológicos, geralmente proteínas (embora algumas moléculas de RNA, chamadas ribozimas, também possam ter atividade catalítica), que aumentam a velocidade das reações químicas sem serem consumidas no processo.</p>
      <p><strong>Características das Enzimas:</strong></p>
      <ul>
        <li><strong>Especificidade:</strong> Cada enzima geralmente catalisa apenas um tipo de reação ou atua sobre um substrato específico. Isso se deve à forma tridimensional do sítio ativo da enzima, que se encaixa no substrato (modelo chave-fechadura ou ajuste induzido).</li>
        <li><strong>Energia de Ativação:</strong> As enzimas diminuem a energia de ativação necessária para que uma reação ocorra, tornando-a mais rápida.</li>
        <li><strong>Condições Ótimas:</strong> A atividade enzimática é influenciada por fatores como temperatura, pH e concentração de substrato. Cada enzima possui condições ótimas para sua atividade.</li>
        <li><strong>Regulação:</strong> A atividade enzimática pode ser regulada por inibidores (que diminuem a atividade) ou ativadores (que aumentam a atividade).</li>
      </ul>
    </div>`
  },
  {
    id: 'respiracao-aerobica',
    conceptTitle: 'Respiração Celular Aeróbica',
    visualRepresentation: '💨🌬️',
    definition: 'Processo de obtenção de energia a partir da glicose na presença de oxigênio.',
    keywords: 'Glicólise, Ciclo de Krebs, Fosforilação Oxidativa',
    detailsHtml: `<div class="modal-content-custom">
      <p>A respiração celular aeróbica é o principal processo pelo qual as células eucarióticas e muitas procarióticas obtêm energia a partir da oxidação completa da glicose (ou outros combustíveis orgânicos) na presença de oxigênio.</p>
      <p><strong>Principais Etapas:</strong></p>
      <ol>
        <li><strong>Glicólise:</strong> Ocorre no citosol. A glicose (6 carbonos) é quebrada em duas moléculas de piruvato (3 carbonos cada), produzindo um saldo líquido de 2 ATP e 2 NADH.</li>
        <li><strong>Oxidação do Piruvato (ou Formação de Acetil-CoA):</strong> Ocorre na matriz mitocondrial (em eucariotos). Cada piruvato é convertido em Acetil-CoA, liberando CO₂ e produzindo NADH.</li>
        <li><strong>Ciclo de Krebs (ou Ciclo do Ácido Cítrico):</strong> Ocorre na matriz mitocondrial. O Acetil-CoA entra no ciclo, sendo completamente oxidado a CO₂. Produz ATP (ou GTP), NADH e FADH₂.</li>
        <li><strong>Fosforilação Oxidativa (Cadeia Respiratória e Quimiosmose):</strong> Ocorre na membrana interna da mitocôndria. Elétrons de NADH e FADH₂ são passados por uma cadeia de transportadores de elétrons, liberando energia que é usada para bombear prótons (H⁺) para o espaço intermembranar. O oxigênio é o aceptor final de elétrons, formando água. O fluxo de prótons de volta para a matriz através da ATP sintase gera a maior parte do ATP (cerca de 26-28 moléculas).</li>
      </ol>
      <p><strong>Saldo Energético Total:</strong> Aproximadamente 30-32 moléculas de ATP por molécula de glicose.</p>
    </div>`
  },
  {
    id: 'fermentacao',
    conceptTitle: 'Fermentação',
    visualRepresentation: '🧪',
    definition: 'Processo de obtenção de energia a partir da glicose na ausência de oxigênio.',
    keywords: 'Anaeróbico, Ácido Lático, Etanol',
    detailsHtml: `<div class="modal-content-custom">
      <p>A fermentação é um processo metabólico anaeróbico (ocorre na ausência de oxigênio) que permite às células obterem energia (ATP) a partir da glicose sem a necessidade de uma cadeia transportadora de elétrons ou do ciclo de Krebs. Ela consiste na glicólise seguida por reações que regeneram o NAD⁺, permitindo que a glicólise continue.</p>
      <p><strong>Tipos Comuns de Fermentação:</strong></p>
      <ul>
        <li><strong>Fermentação Lática:</strong> O piruvato produzido na glicólise é reduzido diretamente pelo NADH para formar lactato como produto final, sem liberação de CO₂. Ocorre em algumas bactérias (usadas na produção de iogurte e queijo) e nas células musculares humanas durante exercícios intensos.</li>
        <li><strong>Fermentação Alcoólica:</strong> O piruvato é convertido em acetaldeído, com liberação de CO₂, e o acetaldeído é então reduzido pelo NADH para formar etanol. Ocorre em leveduras (usadas na produção de pão, cerveja e vinho).</li>
      </ul>
      <p>A fermentação produz muito menos ATP (apenas 2 ATP por glicose, provenientes da glicólise) em comparação com a respiração aeróbica.</p>
    </div>`
  },
  {
    id: 'fotossintese',
    conceptTitle: 'Fotossíntese',
    visualRepresentation: '☀️🌱',
    definition: 'Processo pelo qual organismos convertem energia luminosa em energia química (glicose).',
    keywords: 'Clorofila, Cloroplastos, Fase Clara, Fase Escura',
    detailsHtml: `<div class="modal-content-custom">
      <p>A fotossíntese é o processo realizado por plantas, algas e algumas bactérias, no qual a energia luminosa é capturada e convertida em energia química, armazenada nas ligações de moléculas orgânicas, principalmente glicose. Utiliza dióxido de carbono (CO₂) e água (H₂O) como reagentes e libera oxigênio (O₂) como subproduto.</p>
      <p><strong>Equação Geral Simplificada:</strong> 6 CO₂ + 6 H₂O + Luz → C₆H₁₂O₆ + 6 O₂</p>
      <p><strong>Local:</strong> Em eucariontes (plantas e algas), ocorre nos cloroplastos.</p>
      <p><strong>Principais Etapas:</strong></p>
      <ol>
        <li><strong>Fase Clara (ou Fotoquímica):</strong> Depende diretamente da luz. Ocorre nos tilacoides dos cloroplastos.
          <ul>
            <li>Absorção de luz pela clorofila e outros pigmentos.</li>
            <li>Fotólise da água: quebra da molécula de água, liberando O₂, elétrons (e⁻) e prótons (H⁺).</li>
            <li>Produção de ATP e NADPH (moléculas transportadoras de energia e elétrons, respectivamente).</li>
          </ul>
        </li>
        <li><strong>Fase Escura (ou Ciclo de Calvin ou Química):</strong> Não depende diretamente da luz, mas utiliza os produtos da fase clara (ATP e NADPH). Ocorre no estroma dos cloroplastos.
          <ul>
            <li>Fixação do Carbono: O CO₂ atmosférico é incorporado a uma molécula orgânica (RuBP - ribulose-1,5-bifosfato) pela enzima RuBisCO.</li>
            <li>Redução: Utilizando ATP e NADPH, as moléculas formadas são reduzidas para produzir gliceraldeído-3-fosfato (G3P), um açúcar de 3 carbonos.</li>
            <li>Regeneração: Parte do G3P é usada para sintetizar glicose e outros compostos orgânicos, e outra parte é usada para regenerar a RuBP, permitindo que o ciclo continue.</li>
          </ul>
        </li>
      </ol>
    </div>`
  }
];

const MetabolismoCelularPage = () => {
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
        <h1>Metabolismo Celular</h1>
        <p>Explore os processos energéticos fundamentais da vida.</p>
      </header>
      <main className={styles.conceptsGrid}>
        
          {metabolismoCelularConcepts.map(concept => (
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
        />
      )}
      <footer className={styles.pageFooter}>
        <p>Continue explorando os mistérios da biologia celular!</p>
      </footer>
    </div>
  );
};

export default MetabolismoCelularPage;
