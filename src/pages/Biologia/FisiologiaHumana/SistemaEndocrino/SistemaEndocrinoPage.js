import React, { useState } from 'react';
import styles from './SistemaEndocrinoPage.module.css';
import ConceptCard from '../../../../components/ConceptCard/ConceptCard';
import ConceptModal from '../../../../components/ConceptCard/ConceptModal';

const sistemaEndocrinoConcepts = [
  {
    id: 'visaoGeral',
    conceptTitle: 'Visão Geral',
    visualRepresentation: '🧪🧬🔗⚙️',
    definition: 'Sistema de glândulas que produzem hormônios para regular funções corporais como metabolismo, crescimento e reprodução.',
    keywords: 'Hormônios, Glândulas, Regulação, Metabolismo, Homeostase',
    detailsHtml: `<div class="modal-content-custom">O <strong>Sistema Endócrino</strong> é um sistema de comunicação química que utiliza <strong>hormônios</strong> para regular diversas funções do corpo, como crescimento, metabolismo, reprodução e homeostase.<ul><li><strong>Componentes Principais:</strong><ul><li><strong>Glândulas Endócrinas:</strong> Órgãos especializados que produzem e secretam hormônios diretamente na corrente sanguínea (sem ductos). Exemplos: hipófise, tireoide, suprarrenais, pâncreas, gônadas.</li><li><strong>Hormônios:</strong> Substâncias químicas (mensageiros) que viajam pelo sangue até células-alvo específicas, onde se ligam a receptores e desencadeiam respostas.</li><li><strong>Células-Alvo:</strong> Células que possuem receptores específicos para determinados hormônios, permitindo que apenas elas respondam ao sinal hormonal.</li></ul></li><li><strong>Funções:</strong> Regulação do metabolismo, crescimento e desenvolvimento, função sexual e reprodução, resposta ao estresse, equilíbrio hídrico e eletrolítico, humor.</li></ul></div>`
  },
  {
    id: 'hormonios',
    conceptTitle: 'Hormônios',
    visualRepresentation: '✉️🔑🎯🧬',
    definition: 'Substâncias químicas (proteínas, esteroides) que atuam como mensageiros, ligando-se a receptores em células-alvo.',
    keywords: 'Mensageiros, Receptores, Especificidade, Proteicos, Esteroides',
    detailsHtml: `<div class="modal-content-custom"><strong>Hormônios</strong> são substâncias químicas produzidas pelas glândulas endócrinas e transportadas pelo sangue para atuar em células-alvo específicas.<ul><li><strong>Natureza Química:</strong> Podem ser classificados em:<ul><li><strong>Proteicos/Peptídicos:</strong> Formados por cadeias de aminoácidos (ex: insulina, GH, prolactina). Geralmente hidrossolúveis.</li><li><strong>Esteroides:</strong> Derivados do colesterol (ex: hormônios sexuais, cortisol, aldosterona). Geralmente lipossolúveis.</li><li><strong>Derivados de Aminoácidos:</strong> Modificações de aminoácidos (ex: hormônios da tireoide, adrenalina). Podem ser lipo ou hidrossolúveis.</li></ul></li><li><strong>Especificidade:</strong> A ação de um hormônio é específica devido à presença de <strong>receptores</strong> nas células-alvo. Um hormônio só afeta células que possuem o receptor correspondente.</li><li><strong>Transporte:</strong> Hormônios hidrossolúveis circulam livremente no plasma, enquanto os lipossolúveis geralmente se ligam a proteínas transportadoras.</li></ul></div>`
  },
  {
    id: 'acaoHormonal',
    conceptTitle: 'Ação Hormonal',
    visualRepresentation: '🚪🧬➡️⚡️',
    definition: 'Lipossolúveis atuam em receptores internos (DNA), hidrossolúveis em receptores de membrana (segundos mensageiros).',
    keywords: 'Lipossolúvel, Hidrossolúvel, Receptor Intracelular, Receptor de Membrana, Segundo Mensageiro',
    detailsHtml: `<div class="modal-content-custom">A forma como os hormônios exercem seus efeitos depende de sua natureza química e da localização de seus receptores:<ul><li><strong>Hormônios Lipossolúveis (ex: esteroides, hormônios tireoidianos):</strong><ol><li>Atravessam facilmente a membrana plasmática da célula-alvo.</li><li>Ligam-se a receptores intracelulares (no citoplasma ou núcleo).</li><li>O complexo hormônio-receptor ativa ou desativa genes específicos no DNA.</li><li>Isso altera a síntese de proteínas, modificando a atividade celular. A resposta é geralmente mais lenta, mas duradoura.</li></ol></li><li><strong>Hormônios Hidrossolúveis (ex: proteicos, peptídicos, catecolaminas como adrenalina):</strong><ol><li>Não conseguem atravessar a membrana plasmática.</li><li>Ligam-se a receptores na superfície da membrana da célula-alvo.</li><li>Essa ligação ativa um sistema de <strong>segundos mensageiros</strong> (ex: AMP cíclico - AMPc, cálcio) dentro da célula.</li><li>Os segundos mensageiros desencadeiam uma cascata de reações enzimáticas que alteram a atividade celular. A resposta é geralmente rápida, mas de curta duração.</li></ol></li></ul></div>`
  },
  {
    id: 'regulacaoFeedback',
    conceptTitle: 'Regulação: Feedback',
    visualRepresentation: '➕➖<br>🚦🔄',
    definition: 'Controle da secreção hormonal, principalmente por feedback negativo (inibe produção) e, menos comumente, positivo (estimula produção).',
    keywords: 'Feedback Negativo, Feedback Positivo, Homeostase, Controle, Inibição, Estímulo',
    detailsHtml: `<div class="modal-content-custom">A secreção da maioria dos hormônios é controlada por mecanismos de <strong>feedback (retroalimentação)</strong>, que ajudam a manter a homeostase.<ul><li><strong>Feedback Negativo:</strong> É o mecanismo mais comum. O aumento do nível de um hormônio (ou do produto de sua ação) inibe a sua própria produção ou a produção de hormônios que o estimulam. Isso evita excessos e mantém os níveis hormonais dentro de uma faixa ideal. Ex: Aumento de T3/T4 inibe TSH e TRH.</li><li><strong>Feedback Positivo:</strong> É menos comum. O aumento do nível de um hormônio (ou do produto de sua ação) estimula ainda mais a sua produção. Esse mecanismo amplifica uma resposta e geralmente faz parte de um processo que tem um ponto final definido. Ex: Ocitocina durante o parto (aumenta as contrações uterinas, que estimulam mais ocitocina).</li></ul></div>`
  },
  {
    id: 'eixoHipotamoHipofise',
    conceptTitle: 'Eixo Hipotálamo-Hipófise',
    visualRepresentation: '🧠🔗👑📮',
    definition: 'Principal centro de controle hormonal. O hipotálamo comanda a hipófise, que por sua vez regula outras glândulas.',
    keywords: 'Hipotálamo, Hipófise, Adenoipófise, Neuroipófise, Controle Mestre',
    detailsHtml: `<div class="modal-content-custom">O <strong>hipotálamo</strong> e a <strong>hipófise (ou glândula pituitária)</strong> formam um eixo crucial que controla muitas outras glândulas endócrinas.<ul><li><strong>Hipotálamo:</strong> Região do cérebro que atua como um centro integrador entre o sistema nervoso e o sistema endócrino. Produz hormônios liberadores (estimulam a hipófise) e hormônios inibidores (inibem a hipófise). Também produz ADH e ocitocina, que são armazenados e liberados pela neuroipófise.</li><li><strong>Hipófise:</strong> Pequena glândula localizada na base do cérebro, conectada ao hipotálamo. Dividida em duas partes principais:<ul><li><strong>Adenoipófise (Lobo Anterior):</strong> Produz e secreta seus próprios hormônios em resposta aos sinais do hipotálamo (GH, Prolactina, TSH, ACTH, FSH, LH).</li><li><strong>Neuroipófise (Lobo Posterior):</strong> Não produz hormônios, mas armazena e libera hormônios produzidos pelo hipotálamo (ADH e Ocitocina).</li></ul>Este eixo é fundamental para a regulação de funções como crescimento, metabolismo, resposta ao estresse e reprodução.</li></ul></div>`
  },
  {
    id: 'principaisGlandulas',
    conceptTitle: 'Principais Glândulas',
    visualRepresentation: '👑🦋➕➕',
    definition: 'Hipófise (GH, TSH, ACTH, FSH, LH, ADH, Ocitocina), Tireoide (T3, T4, Calcitonina) regulam diversas funções vitais.',
    keywords: 'Hipófise, Tireoide, GH, TSH, T3, T4, Calcitonina, Metabolismo',
    detailsHtml: `<div class="modal-content-custom"><h4>Hipófise (Glândula Pituitária)</h4><p>Considerada a "glândula mestre", controla outras glândulas.</p><ul><li><strong>Adenoipófise (Lobo Anterior):</strong><ul><li><strong>Hormônio do Crescimento (GH):</strong> Estimula o crescimento e a divisão celular.</li><li><strong>Hormônio Tireoestimulante (TSH):</strong> Estimula a tireoide a produzir seus hormônios.</li><li><strong>Hormônio Adrenocorticotrófico (ACTH):</strong> Estimula o córtex das suprarrenais.</li><li><strong>Hormônios Gonadotróficos (FSH e LH):</strong> Atuam nas gônadas (ovários e testículos), regulando a produção de gametas e hormônios sexuais.</li><li><strong>Prolactina (PRL):</strong> Estimula a produção de leite pelas glândulas mamárias.</li></ul></li><li><strong>Neuroipófise (Lobo Posterior):</strong><ul><li><strong>Hormônio Antidiurético (ADH ou Vasopressina):</strong> Aumenta a reabsorção de água nos rins.</li><li><strong>Ocitocina:</strong> Estimula contrações uterinas no parto e ejeção de leite.</li></ul></li></ul><h4>Tireoide</h4><p>Localizada no pescoço, produz hormônios que regulam o metabolismo.</p><ul><li><strong>Tiroxina (T4) e Triiodotironina (T3):</strong> Aumentam a taxa metabólica basal, influenciando o consumo de oxigênio e a produção de calor. Essenciais para o desenvolvimento normal.</li><li><strong>Calcitonina:</strong> Reduz os níveis de cálcio no sangue, inibindo a reabsorção óssea e aumentando a excreção renal de cálcio (ação oposta ao PTH).</li></ul></div>`
  },
  {
    id: 'paratireoides',
    conceptTitle: 'Paratireoides',
    visualRepresentation: '🔢🦴📈📉',
    definition: 'Pequenas glândulas atrás da tireoide que produzem Paratormônio (PTH) para aumentar os níveis de cálcio no sangue.',
    keywords: 'Paratormônio, PTH, Cálcio, Fosfato, Osso, Rim, Vitamina D',
    detailsHtml: `<div class="modal-content-custom">As <strong>Paratireoides</strong> são quatro pequenas glândulas localizadas na face posterior da tireoide.<ul><li><strong>Paratormônio (PTH):</strong> É o principal hormônio regulador dos níveis de cálcio e fosfato no sangue. Sua principal função é <strong>aumentar a concentração de cálcio</strong> no sangue através de três mecanismos:<ul><li>Estimula a liberação de cálcio dos ossos (reabsorção óssea).</li><li>Aumenta a reabsorção de cálcio nos rins (diminui a excreção).</li><li>Estimula a ativação da vitamina D nos rins, que por sua vez aumenta a absorção de cálcio no intestino.</li></ul>O PTH e a calcitonina (da tireoide) têm ações antagônicas na regulação do cálcio, mas o PTH é o regulador mais importante.</li></ul></div>`
  },
  {
    id: 'pancreasEndocrino',
    conceptTitle: 'Pâncreas Endócrino',
    visualRepresentation: '🍬📉📈⚖️',
    definition: 'Ilhotas de Langerhans produzem Insulina (reduz glicose no sangue) e Glucagon (aumenta glicose no sangue).',
    keywords: 'Insulina, Glucagon, Glicemia, Ilhotas de Langerhans, Diabetes',
    detailsHtml: `<div class="modal-content-custom">O <strong>Pâncreas</strong> é uma glândula mista, com funções exócrinas (produção de suco pancreático para digestão) e endócrinas. A porção endócrina é composta pelas <strong>Ilhotas de Langerhans (ou Ilhotas Pancreáticas)</strong>, que contêm diferentes tipos de células produtoras de hormônios:<ul><li><strong>Células Beta:</strong> Produzem <strong>Insulina</strong>. A insulina é liberada quando os níveis de glicose no sangue (glicemia) estão altos (ex: após uma refeição). Sua principal função é <strong>reduzir a glicemia</strong>, promovendo a captação de glicose pelas células (principalmente musculares e adiposas) e o armazenamento de glicose na forma de glicogênio (no fígado e músculos) ou gordura.</li><li><strong>Células Alfa:</strong> Produzem <strong>Glucagon</strong>. O glucagon é liberado quando os níveis de glicose no sangue estão baixos (ex: em jejum). Sua principal função é <strong>aumentar a glicemia</strong>, estimulando a quebra de glicogênio no fígado (glicogenólise) e a produção de glicose a partir de outras fontes (gliconeogênese).</li></ul>A insulina e o glucagon atuam de forma antagônica para manter a glicemia dentro de níveis normais. Outros hormônios, como a somatostatina (produzida pelas células delta), também são produzidos nas ilhotas e regulam a secreção de insulina e glucagon.</ul></div>`
  },
  {
    id: 'gonadasSuprarrenais',
    conceptTitle: 'Gônadas e Suprarrenais',
    visualRepresentation: '♂️♀️⚡️🛡️',
    definition: 'Gônadas (hormônios sexuais) e Suprarrenais (cortisol, aldosterona, adrenalina) regulam reprodução e estresse.',
    keywords: 'Testosterona, Estrogênio, Progesterona, Cortisol, Adrenalina, Aldosterona',
    detailsHtml: `<div class="modal-content-custom"><h4>Gônadas (Testículos e Ovários)</h4><p>Produzem hormônios sexuais responsáveis pelas características sexuais secundárias e pela reprodução.</p><ul><li><strong>Testículos (em homens):</strong> Produzem principalmente <strong>Testosterona</strong>, responsável pelo desenvolvimento de características masculinas (pelos, voz grossa, massa muscular) e pela produção de espermatozoides.</li><li><strong>Ovários (em mulheres):</strong> Produzem <strong>Estrogênio</strong> e <strong>Progesterona</strong>. O estrogênio promove o desenvolvimento de características femininas e regula o ciclo menstrual. A progesterona prepara o útero para a gravidez e mantém a gestação.</li></ul>Ambos os sexos produzem pequenas quantidades de hormônios do sexo oposto.<h4>Glândulas Suprarrenais (ou Adrenais)</h4><p>Localizadas acima dos rins, dividem-se em córtex e medula.</p><ul><li><strong>Córtex Suprarrenal:</strong> Produz hormônios esteroides:<ul><li><strong>Glicocorticoides (ex: Cortisol):</strong> Regulam o metabolismo de carboidratos, proteínas e gorduras; possuem efeito anti-inflamatório; ajudam o corpo a responder ao estresse.</li><li><strong>Mineralocorticoides (ex: Aldosterona):</strong> Controlam o equilíbrio de sais (sódio e potássio) e água no corpo, atuando na regulação da pressão arterial.</li><li><strong>Androgênios:</strong> Hormônios sexuais masculinos em pequenas quantidades.</li></ul></li><li><strong>Medula Suprarrenal:</strong> Produz catecolaminas:<ul><li><strong>Adrenalina (Epinefrina) e Noradrenalina (Norepinefrina):</strong> Liberadas em situações de estresse ('luta ou fuga'), aumentam a frequência cardíaca, pressão arterial, glicemia e dilatam as vias aéreas.</li></ul></li></ul></div>`
  }
];

const SistemaEndocrinoPage = () => {
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
        <h1>Sistema Endócrino</h1>
        <p>Os mensageiros químicos que regulam o seu corpo!</p>
      </header>
      <main className={styles.conceptsGrid}>
        {sistemaEndocrinoConcepts.map(concept => (
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
        <p>Comunicação precisa para um corpo em harmonia! 🧪✨</p>
      </footer>
    </div>
  );
};

export default SistemaEndocrinoPage;
