import React, { useState } from 'react';
import styles from './SistemaImunologicoPage.module.css';
import ConceptCard from '../../../../components/ConceptCard/ConceptCard';
import ConceptModal from '../../../../components/ConceptCard/ConceptModal';

const sistemaImunologicoConcepts = [
  {
    id: 1,
    conceptTitle: 'Visão Geral',
    visualRepresentation: '🛡️🔬🦠💪',
    definition: 'Sistema de defesa do corpo contra patógenos (vírus, bactérias) e células anormais, mantendo a saúde.',
    keywords: 'Defesa, Patógenos, Células, Anticorpos, Vigilância',
    detailsHtml: '<div class="modal-content-custom">O <strong>Sistema Imunológico</strong> é uma complexa rede de células, tecidos e órgãos que trabalham juntos para defender o corpo contra agentes infecciosos (como bactérias, vírus, fungos e parasitas) e outras ameaças (como células cancerosas).<ul><li><strong>Funções Principais:</strong><ul><li><strong>Defesa:</strong> Reconhecer e eliminar patógenos e substâncias estranhas.</li><li><strong>Vigilância Imunológica:</strong> Identificar e destruir células anormais ou infectadas (ex: cancerosas).</li><li><strong>Homeostase:</strong> Remover células mortas ou danificadas e regular processos inflamatórios.</li></ul></li><li><strong>Componentes:</strong> Células (leucócitos), órgãos linfoides (medula óssea, timo, linfonodos, baço), moléculas solúveis (anticorpos, citocinas, sistema complemento).</li></ul></div>'
  },
  {
    id: 2,
    conceptTitle: 'Órgãos Imunológicos',
    visualRepresentation: '🏭🎓🛡️📍',
    definition: 'Primários (medula óssea, timo) onde células imunes se formam/amadurecem. Secundários (linfonodos, baço) onde respostas ocorrem.',
    keywords: 'Medula Óssea, Timo, Linfonodos, Baço, MALT, Maturação',
    detailsHtml: '<div class="modal-content-custom">Os órgãos do sistema imunológico são classificados como primários ou secundários:<ul><li><strong>Órgãos Linfoides Primários:</strong> Onde os linfócitos (células chave da imunidade) são formados e/ou amadurecem.<ul><li><strong>Medula Óssea:</strong> Local de origem de todas as células sanguíneas, incluindo os leucócitos. Linfócitos B amadurecem aqui.</li><li><strong>Timo:</strong> Glândula localizada no tórax onde os linfócitos T amadurecem e aprendem a distinguir o \'próprio\' do \'não-próprio\'.</li></ul></li><li><strong>Órgãos Linfoides Secundários:</strong> Onde os linfócitos maduros encontram antígenos e as respostas imunes são iniciadas.<ul><li><strong>Linfonodos (Gânglios Linfáticos):</strong> Pequenas estruturas espalhadas pelo corpo que filtram a linfa e concentram linfócitos, facilitando o encontro com antígenos.</li><li><strong>Baço:</strong> Filtra o sangue, removendo células velhas e patógenos, e é um local importante para respostas imunes a antígenos sanguíneos.</li><li><strong>Tecidos Linfoides Associados a Mucosas (MALT):</strong> Aglomerados de tecido linfoide em locais estratégicos como trato respiratório (adenoides, amígdalas), digestório (Placas de Peyer) e urogenital, protegendo contra invasores que entram por essas vias.</li></ul></li></ul></div>'
  },
  {
    id: 3,
    conceptTitle: 'Células Imunológicas',
    visualRepresentation: '👥🛡️🍽️🎯',
    definition: 'Leucócitos: Fagócitos (neutrófilos, macrófagos), Linfócitos (T, B, NK), Mastócitos, Basófilos, Eosinófilos.',
    keywords: 'Leucócitos, Fagócitos, Linfócitos T, Linfócitos B, Células NK, APC',
    detailsHtml: '<div class="modal-content-custom">Os <strong>Leucócitos (glóbulos brancos)</strong> são as principais células de defesa. Diversos tipos existem:<ul><li><strong>Fagócitos:</strong> Células que \'comem\' (fagocitam) patógenos, restos celulares e partículas estranhas.<ul><li><strong>Neutrófilos:</strong> Mais abundantes, primeira linha de defesa contra bactérias.</li><li><strong>Macrófagos:</strong> Grandes fagócitos, também apresentam antígenos aos linfócitos T e liberam citocinas. Originam-se de monócitos.</li><li><strong>Células Dendríticas:</strong> Principais células apresentadoras de antígenos (APCs), ativam linfócitos T.</li></ul></li><li><strong>Linfócitos:</strong> Responsáveis pela imunidade específica (adaptativa).<ul><li><strong>Linfócitos B:</strong> Produzem anticorpos (imunidade humoral).</li><li><strong>Linfócitos T:</strong> Atuam na imunidade celular. Incluem T Auxiliares (CD4+), T Citotóxicos (CD8+) e T Reguladores.</li><li><strong>Células Natural Killer (NK):</strong> Matam células infectadas por vírus e células tumorais (parte da imunidade inata).</li></ul></li><li><strong>Outras Células:</strong><ul><li><strong>Mastócitos e Basófilos:</strong> Liberam histamina e outras substâncias em alergias e inflamações.</li><li><strong>Eosinófilos:</strong> Combatem parasitas e participam de reações alérgicas.</li></ul></li></ul></div>'
  },
  {
    id: 4,
    conceptTitle: 'Imunidade Inata',
    visualRepresentation: '🛡️💨🚧⏱️',
    definition: 'Primeira linha de defesa: rápida, não específica. Barreiras (pele), células (fagócitos, NK), inflamação.',
    keywords: 'Barreiras, Fagocitose, Células NK, Inflamação, Rápida, Não Específica',
    detailsHtml: '<div class="modal-content-custom">A <strong>Imunidade Inata</strong> é a primeira linha de defesa, agindo rapidamente e de forma não específica contra qualquer invasor.<ul><li><strong>Componentes:</strong><ul><li><strong>Barreiras Físicas e Químicas:</strong> Pele intacta, mucosas, cílios, pH ácido do estômago, lisozima (saliva, lágrimas).</li><li><strong>Células:</strong> Fagócitos (neutrófilos, macrófagos), células Natural Killer (NK), mastócitos.</li><li><strong>Proteínas Sanguíneas:</strong> Sistema Complemento (conjunto de proteínas que ajudam a destruir patógenos e promovem inflamação), citocinas (mensageiros químicos como interferons).</li><li><strong>Resposta Inflamatória:</strong> Processo que atrai células de defesa ao local da infecção/lesão.</li></ul></li><li><strong>Características:</strong> Resposta rápida (horas), não requer exposição prévia ao patógeno, não gera memória imunológica duradoura.</li></ul></div>'
  },
  {
    id: 5,
    conceptTitle: 'Imunidade Adaptativa',
    visualRepresentation: '🎯🧠💪🔄',
    definition: 'Defesa específica, desenvolvida após contato com o antígeno. Gera memória. Envolve Linfócitos T e B.',
    keywords: 'Especificidade, Memória, Linfócitos T, Linfócitos B, Anticorpos, Autotolerância',
    detailsHtml: '<div class="modal-content-custom">A <strong>Imunidade Adaptativa (ou Adquirida/Específica)</strong> é uma resposta mais lenta, porém altamente específica e direcionada contra um patógeno particular que já teve contato prévio com o corpo.<ul><li><strong>Características Principais:</strong><ul><li><strong>Especificidade:</strong> Reconhece e ataca antígenos específicos (moléculas do patógeno).</li><li><strong>Memória Imunológica:</strong> Após o primeiro contato, o sistema \'lembra\' do antígeno, permitindo uma resposta mais rápida e forte em exposições futuras. É a base da vacinação.</li><li><strong>Diversidade:</strong> Capacidade de reconhecer uma vasta gama de antígenos.</li><li><strong>Autotolerância:</strong> Capacidade de distinguir entre antígenos próprios (do corpo) e não-próprios (estranhos), evitando atacar o próprio organismo. Falhas nesse sistema podem levar a doenças autoimunes.</li></ul></li><li><strong>Principais Células Envolvidas:</strong> Linfócitos T e Linfócitos B.</li><li><strong>Dois Tipos Principais:</strong> Imunidade Humoral (mediada por anticorpos produzidos por Linfócitos B) e Imunidade Celular (mediada por Linfócitos T).</li></ul></div>'
  },
  {
    id: 6,
    conceptTitle: 'Linfócitos B (Humoral)',
    visualRepresentation: '🅱️🏭💧🧠',
    definition: 'Linfócitos B, ao serem ativados por antígenos, diferenciam-se em plasmócitos (produzem anticorpos) e células de memória.',
    keywords: 'Plasmócitos, Células de Memória B, Anticorpos, Imunidade Humoral, BCR',
    detailsHtml: '<div class="modal-content-custom">A <strong>Imunidade Humoral</strong> é mediada por <strong>Linfócitos B</strong> e seus produtos, os <strong>anticorpos (imunoglobulinas)</strong>.<ul><li><strong>Ativação dos Linfócitos B:</strong> Ocorre quando um Linfócito B encontra um antígeno específico que se liga ao seu Receptor de Célula B (BCR). Geralmente, necessita da ajuda de Linfócitos T Auxiliares.</li><li><strong>Diferenciação:</strong> Uma vez ativado, o Linfócito B se prolifera e se diferencia em:<ul><li><strong>Plasmócitos:</strong> Células especializadas na produção e secreção de grandes quantidades de anticorpos específicos contra o antígeno.</li><li><strong>Células B de Memória:</strong> Vivem por longos períodos e permitem uma resposta rápida e robusta em caso de reexposição ao mesmo antígeno.</li></ul></li><li><strong>Funções dos Anticorpos:</strong> Neutralização de toxinas e patógenos, opsonização (marcação para fagocitose), ativação do sistema complemento.</li></ul></div>'
  },
  {
    id: 7,
    conceptTitle: 'Linfócitos T (Celular)',
    visualRepresentation: '⚔️🎯💥🧑‍🏫',
    definition: 'Linfócitos T (CD4+ Auxiliares, CD8+ Citotóxicos) combatem células infectadas/cancerosas. Reconhecem antígenos via MHC.',
    keywords: 'T Helper, T Citotóxico, Treg, MHC, Imunidade Celular, Apoptose',
    detailsHtml: '<div class="modal-content-custom">A <strong>Imunidade Celular</strong> é mediada principalmente por <strong>Linfócitos T</strong>. Eles não produzem anticorpos, mas atuam diretamente contra células infectadas ou anormais.<ul><li><strong>Tipos de Linfócitos T:</strong><ul><li><strong>Linfócitos T Auxiliares (CD4+ ou T Helper):</strong> Coordenam a resposta imune. Ativam Linfócitos B, Linfócitos T Citotóxicos e macrófagos através da liberação de citocinas. São o principal alvo do vírus HIV.</li><li><strong>Linfócitos T Citotóxicos (CD8+ ou CTLs):</strong> Reconhecem e destroem células do próprio corpo que foram infectadas por vírus ou que se tornaram cancerosas. Induzem a apoptose (morte celular programada) nessas células.</li><li><strong>Linfócitos T Reguladores (Treg):</strong> Suprimem a resposta imune, ajudando a prevenir reações autoimunes e a manter a tolerância a antígenos próprios.</li></ul></li><li><strong>Reconhecimento de Antígenos:</strong> Linfócitos T reconhecem fragmentos de antígenos apresentados na superfície de outras células através de moléculas do Complexo Principal de Histocompatibilidade (MHC).</li><li>Também formam células T de memória.</li></ul></div>'
  },
  {
    id: 8,
    conceptTitle: 'Reação Inflamatória',
    visualRepresentation: '🔥🩸🩹❗',
    definition: 'Resposta local à lesão/infecção. Sinais: calor, rubor, inchaço, dor. Atrai células de defesa para o local.',
    keywords: 'Calor, Rubor, Tumor, Dor, Vasodilatação, Leucócitos, Reparo',
    detailsHtml: '<div class="modal-content-custom">A <strong>Reação Inflamatória</strong> é uma resposta complexa e fundamental da imunidade inata a uma agressão, como infecção ou lesão tecidual.<ul><li><strong>Sinais Cardinais da Inflamação:</strong><ul><li><strong>Calor:</strong> Aumento do fluxo sanguíneo local.</li><li><strong>Rubor (Vermelhidão):</strong> Dilatação dos vasos sanguíneos (vasodilatação).</li><li><strong>Tumor (Inchaço ou Edema):</strong> Extravasamento de plasma dos vasos para o tecido.</li><li><strong>Dor:</strong> Estimulação de terminações nervosas por mediadores químicos e pressão do edema.</li><li><strong>Perda de Função (às vezes):</strong> Devido à dor e ao inchaço.</li></ul></li><li><strong>Processo:</strong> Vasodilatação, aumento da permeabilidade vascular, migração de leucócitos (especialmente neutrófilos e macrófagos) para o local, fagocitose de patógenos e detritos, liberação de mediadores inflamatórios (histamina, citocinas).</li><li><strong>Objetivos:</strong> Conter e isolar o agente agressor, destruir patógenos, remover tecido danificado e iniciar o processo de reparo tecidual. Pode ser aguda (curta duração) ou crônica (longa duração, pode ser prejudicial).</li></ul></div>'
  },
  {
    id: 9,
    conceptTitle: 'Vacinação e Memória',
    visualRepresentation: '💉🛡️🧠📈',
    definition: 'Vacinas introduzem antígenos (enfraquecidos/inativados) para estimular a imunidade adaptativa e criar memória imunológica, prevenindo doenças futuras.',
    keywords: 'Vacina, Antígeno, Memória Imunológica, Prevenção, Imunização Ativa',
    detailsHtml: '<div class="modal-content-custom">A <strong>Vacinação</strong> é uma das mais importantes aplicações da imunologia, baseada no princípio da <strong>memória imunológica</strong>.<ul><li><strong>Como Funciona:</strong> Vacinas contêm antígenos de patógenos (vírus ou bactérias) que foram enfraquecidos, inativados, ou são apenas partes deles (subunidades). Esses antígenos não causam a doença, mas são suficientes para estimular o sistema imunológico adaptativo.</li><li><strong>Resposta Primária Induzida:</strong> O sistema imune reconhece os antígenos da vacina e monta uma resposta primária, produzindo Linfócitos B e T específicos, incluindo células de memória.</li><li><strong>Resposta Secundária e Proteção:</strong> Se o indivíduo vacinado for exposto ao patógeno real no futuro, as células de memória são rapidamente ativadas, resultando em uma resposta imune secundária muito mais rápida, forte e eficaz, que impede o desenvolvimento da doença ou a torna muito mais branda.</li><li><strong>Tipos de Imunização:</strong><ul><li><strong>Imunização Ativa:</strong> O próprio corpo produz a resposta imune e a memória (ex: vacinação, infecção natural). É duradoura.</li><li><strong>Imunização Passiva:</strong> O indivíduo recebe anticorpos prontos (ex: soro antiofídico, anticorpos da mãe para o feto/bebê). É temporária, pois os anticorpos são degradados.</li></ul></li><li><strong>Importância da Vacinação Coletiva (Imunidade de Rebanho):</strong> Quando uma grande parte da população é vacinada, a disseminação do patógeno é dificultada, protegendo também aqueles que não podem ser vacinados.</li></ul></div>'
  }
];

const SistemaImunologicoPage = () => {
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
        <h1>Sistema Imunológico</h1>
        <p>Seu exército de defesa contra invasores!</p>
      </header>
      <main className={styles.conceptsGrid}>
        {sistemaImunologicoConcepts.map(concept => (
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
        <p>Sistema Imunológico: A sentinela vigilante do seu bem-estar! 🛡️🔬✨</p>
      </footer>
    </div>
  );
};

export default SistemaImunologicoPage;
