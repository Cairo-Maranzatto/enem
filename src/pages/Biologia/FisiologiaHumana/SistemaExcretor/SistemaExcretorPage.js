import React, { useState } from 'react';
import styles from './SistemaExcretorPage.module.css';
import ConceptCard from '../../../../components/ConceptCard/ConceptCard';
import ConceptModal from '../../../../components/ConceptCard/ConceptModal';

const sistemaExcretorConcepts = [
  {
    id: 1,
    conceptTitle: 'Visão Geral',
    visualRepresentation: '🚽💧⚖️🗑️',
    definition: 'Conjunto de órgãos que filtram o sangue, produzem e eliminam a urina, mantendo a homeostase.',
    keywords: 'Filtração, Eliminação, Ureia, Homeostase, Equilíbrio Hídrico',
    detailsHtml: '<div class="modal-content-custom">O <strong>Sistema Excretor</strong> é responsável pela eliminação de resíduos metabólicos nitrogenados (principalmente ureia), excesso de sais e água do organismo, mantendo o equilíbrio interno (homeostase).<ul><li><strong>Funções Principais:</strong> Eliminação de excretas, regulação do volume de líquidos corporais, controle do equilíbrio hidroeletrolítico (água e sais) e do pH sanguíneo. Produção de hormônios (ex: eritropoetina, renina).</li><li><strong>Órgãos Principais:</strong> Rins (2), ureteres (2), bexiga urinária (1) e uretra (1).</li></ul>A excreção também ocorre por outros sistemas, como o respiratório (CO₂) e a pele (suor), mas o sistema urinário é o principal na eliminação de resíduos nitrogenados.</div>'
  },
  {
    id: 2,
    conceptTitle: 'Rins: Os Filtros',
    visualRepresentation: '🫘🫘🔬💧',
    definition: 'Órgãos em forma de feijão que filtram o sangue e produzem a urina, contendo milhões de néfrons.',
    keywords: 'Córtex, Medula, Pelve Renal, Néfrons, Filtração',
    detailsHtml: '<div class="modal-content-custom">Os <strong>Rins</strong> são dois órgãos em forma de feijão, localizados na região posterior do abdômen, um de cada lado da coluna vertebral. São os principais órgãos do sistema urinário.<ul><li><strong>Estrutura Macroscópica:</strong><ul><li><strong>Córtex Renal:</strong> Camada externa, mais clara, onde se localizam os glomérulos e túbulos contorcidos dos néfrons.</li><li><strong>Medula Renal:</strong> Camada interna, mais escura, formada por pirâmides renais. Contém as alças de Henle e os ductos coletores.</li><li><strong>Pelve Renal (Bacinete):</strong> Cavidade em forma de funil que coleta a urina produzida e a encaminha para o ureter.</li></ul></li><li><strong>Néfrons:</strong> São as unidades funcionais microscópicas dos rins, responsáveis pela filtração do sangue e formação da urina. Cada rim possui cerca de 1 milhão de néfrons.</li></ul></div>'
  },
  {
    id: 3,
    conceptTitle: 'Néfrons: Detalhes',
    visualRepresentation: '🧬🔬🔄💧',
    definition: 'Unidades funcionais dos rins (glomérulo, cápsula, túbulos proximal e distal, alça de Henle, ducto coletor) onde a urina é formada.',
    keywords: 'Glomérulo, Cápsula de Bowman, Túbulos Renais, Alça de Henle, Ducto Coletor',
    detailsHtml: '<div class="modal-content-custom">Cada <strong>Néfron</strong> é um longo túbulo microscópico com diferentes porções especializadas:<ul><li><strong>Corpúsculo Renal:</strong> Responsável pela filtração do sangue.<ul><li><strong>Glomérulo de Malpighi:</strong> Emaranhado de capilares sanguíneos provenientes da arteríola aferente.</li><li><strong>Cápsula de Bowman (ou Cápsula Glomerular):</strong> Estrutura em forma de taça que envolve o glomérulo e coleta o filtrado glomerular.</li></ul></li><li><strong>Túbulo Renal:</strong> Responsável pela reabsorção e secreção de substâncias.<ul><li><strong>Túbulo Contorcido Proximal (TCP):</strong> Primeira porção do túbulo, onde ocorre intensa reabsorção de água, glicose, aminoácidos, íons, etc.</li><li><strong>Alça de Henle (ou Alça Néfritica):</strong> Porção em forma de \'U\', com um ramo descendente (permeável à água) e um ramo ascendente (impermeável à água, mas reabsorve sais). Importante na concentração da urina.</li><li><strong>Túbulo Contorcido Distal (TCD):</strong> Porção final do túbulo, onde ocorrem ajustes finos na reabsorção e secreção de íons, sob influência hormonal (ex: aldosterona, ADH).</li></ul></li><li><strong>Ducto Coletor:</strong> Recebe o filtrado de vários néfrons. A reabsorção final de água ocorre aqui, sob influência do ADH, determinando a concentração final da urina. Os ductos coletores desembocam na pelve renal.</li></ul></div>'
  },
  {
    id: 4,
    conceptTitle: 'Formação da Urina',
    visualRepresentation: '🩸➡️💧🔄🗑️',
    definition: 'Processo em três etapas: filtração (sangue para o néfron), reabsorção (substâncias úteis de volta ao sangue) e secreção (resíduos do sangue para a urina).',
    keywords: 'Filtração, Reabsorção, Secreção, Filtrado Glomerular, Urina Final',
    detailsHtml: '<div class="modal-content-custom">A formação da urina nos néfrons ocorre em três etapas principais:<ul><li><strong>1. Filtração Glomerular:</strong> Ocorre no corpúsculo renal. O sangue sob alta pressão nos capilares do glomérulo é filtrado para dentro da cápsula de Bowman. Água, íons, glicose, aminoácidos, ureia e outras pequenas moléculas passam para a cápsula, formando o <strong>filtrado glomerular</strong> (ou urina inicial). Células sanguíneas e proteínas grandes normalmente não são filtradas.</li><li><strong>2. Reabsorção Tubular:</strong> Ocorre ao longo dos túbulos renais (TCP, Alça de Henle, TCD, ducto coletor). Substâncias úteis presentes no filtrado glomerular, como água (grande parte), glicose, aminoácidos e íons essenciais, são reabsorvidas ativamente ou passivamente de volta para o sangue nos capilares peritubulares.</li><li><strong>3. Secreção Tubular:</strong> Ocorre principalmente nos túbulos contorcidos proximal e distal. Substâncias indesejáveis ou em excesso no sangue (como íons H⁺, K⁺, amônia, creatinina, resíduos de medicamentos) são transportadas ativamente do sangue dos capilares peritubulares para dentro do filtrado nos túbulos renais, para serem eliminadas na urina.</li></ul>O líquido resultante após essas três etapas é a <strong>urina final</strong>.</div>'
  },
  {
    id: 5,
    conceptTitle: 'Vias Urinárias',
    visualRepresentation: '🛣️🎈🚽',
    definition: 'Ureteres (transportam), bexiga (armazena) e uretra (elimina) conduzem a urina para fora do corpo.',
    keywords: 'Ureteres, Bexiga Urinária, Uretra, Armazenamento, Micção',
    detailsHtml: '<div class="modal-content-custom">Após ser formada nos rins, a urina é transportada e eliminada pelas vias urinárias:<ul><li><strong>Ureteres:</strong> Dois tubos musculares finos que conectam cada rim à bexiga urinária. Transportam a urina dos rins para a bexiga através de contrações peristálticas.</li><li><strong>Bexiga Urinária:</strong> Órgão muscular oco e elástico localizado na pelve, responsável por armazenar temporariamente a urina. Sua parede muscular (músculo detrusor) se distende à medida que se enche. A capacidade média é de 400-600 mL.</li><li><strong>Uretra:</strong> Tubo que conduz a urina da bexiga para fora do corpo. No homem, a uretra é mais longa e também serve como via para a passagem do sêmen. Na mulher, é mais curta e exclusiva do sistema urinário. A micção (ato de urinar) é controlada por esfíncteres uretrais.</li></ul></div>'
  },
  {
    id: 6,
    conceptTitle: 'Composição da Urina',
    visualRepresentation: '🧪📊💧🟡',
    definition: 'Principalmente água (95%), ureia (2%), sais e outros resíduos. Componentes anormais podem indicar doenças.',
    keywords: 'Água, Ureia, Sais, Glicose, Proteínas, Sangue',
    detailsHtml: '<div class="modal-content-custom">A urina normal é um líquido amarelado, transparente e com odor característico. Sua composição pode variar dependendo da dieta, hidratação e estado de saúde.<ul><li><strong>Principais Componentes Normais:</strong><ul><li><strong>Água:</strong> Cerca de 95% do volume.</li><li><strong>Ureia:</strong> Principal resíduo nitrogenado do metabolismo de proteínas (2%).</li><li><strong>Sais Minerais:</strong> Cloreto de sódio, potássio, fosfatos, sulfatos, etc.</li><li><strong>Outros Resíduos:</strong> Creatinina, ácido úrico, amônia (em pequenas quantidades).</li><li><strong>Urobilina:</strong> Pigmento que dá a cor amarelada à urina, derivado da bilirrubina.</li></ul></li><li><strong>Componentes Anormais (Podem Indicar Doenças):</strong><ul><li><strong>Glicose (Glicosúria):</strong> Pode indicar diabetes mellitus.</li><li><strong>Proteínas (Proteinúria):</strong> Pode indicar lesão renal.</li><li><strong>Hemácias (Hematúria):</strong> Presença de sangue, pode indicar infecções, cálculos, tumores.</li><li><strong>Leucócitos (Leucocitúria/Piúria):</strong> Pode indicar infecção urinária.</li><li><strong>Corpos Cetônicos (Cetonúria):</strong> Pode indicar diabetes descompensada, jejum prolongado.</li><li><strong>Bilirrubina/Urobilinogênio em excesso:</strong> Podem indicar problemas hepáticos.</li></ul></ul>O exame de urina (EAS - Elementos Anormais e Sedimento) é uma ferramenta diagnóstica importante.</div>'
  },
  {
    id: 7,
    conceptTitle: 'Regulação Hormonal',
    visualRepresentation: '🧠💧🧂📉📈',
    definition: 'Hormônios como ADH (antidiurético) e Aldosterona controlam a reabsorção de água e sais, regulando o volume e a concentração da urina.',
    keywords: 'ADH, Aldosterona, Reabsorção de Água, Reabsorção de Sódio, Pressão Arterial',
    detailsHtml: '<div class="modal-content-custom">A função renal e a composição da urina são finamente reguladas por hormônios:<ul><li><strong>ADH (Hormônio Antidiurético ou Vasopressina):</strong> Produzido no hipotálamo e liberado pela neuro-hipófise. Atua nos túbulos distais e ductos coletores, aumentando a reabsorção de água. Quando há pouca água no corpo (desidratação) ou alta concentração de sais no sangue, mais ADH é liberado, resultando em urina mais concentrada e em menor volume. O álcool inibe a liberação de ADH, causando maior diurese.</li><li><strong>Aldosterona:</strong> Produzida pelas glândulas suprarrenais (córtex adrenal). Atua nos túbulos distais e ductos coletores, aumentando a reabsorção de sódio (Na⁺) e, consequentemente, de água por osmose, e aumentando a secreção de potássio (K⁺). Contribui para o aumento da pressão arterial e do volume sanguíneo.</li><li><strong>Peptídeo Natriurético Atrial (ANP):</strong> Produzido pelas células do átrio cardíaco em resposta ao aumento da pressão arterial. Tem efeito oposto à aldosterona, promovendo a excreção de sódio e água, diminuindo a pressão arterial.</li></ul></div>'
  },
  {
    id: 8,
    conceptTitle: 'Doenças Comuns',
    visualRepresentation: '🤒🩺💊🦠💎',
    definition: 'Infecções urinárias, cálculos renais (pedras nos rins), insuficiência renal e nefrites são problemas comuns.',
    keywords: 'Infecção Urinária, Cálculo Renal, Insuficiência Renal, Nefrite, Cistite',
    detailsHtml: '<div class="modal-content-custom">O sistema excretor pode ser afetado por diversas condições:<ul><li><strong>Infecção Urinária (ITU):</strong> Geralmente causada por bactérias. Pode afetar a uretra (uretrite), bexiga (cistite) ou rins (pielonefrite). Mais comum em mulheres. Sintomas: dor/ardor ao urinar, aumento da frequência urinária, urina turva.</li><li><strong>Cálculos Renais (Pedras nos Rins ou Litíase Renal):</strong> Formação de cristais sólidos (cálculos) nos rins ou vias urinárias, geralmente por alta concentração de sais (cálcio, oxalato, ácido úrico) na urina. Podem causar dor intensa (cólica renal).</li><li><strong>Insuficiência Renal:</strong> Perda da capacidade dos rins de filtrar adequadamente o sangue. Pode ser aguda (súbita) ou crônica (progressiva). Casos graves podem necessitar de diálise ou transplante renal.</li><li><strong>Nefrites:</strong> Inflamação dos néfrons. Podem ter diversas causas, incluindo infecções e doenças autoimunes (ex: Glomerulonefrite).</li><li><strong>Doença Renal Policística:</strong> Doença genética caracterizada pela formação de múltiplos cistos nos rins.</li></ul>A prevenção envolve boa hidratação, dieta equilibrada e higiene adequada.</div>'
  },
  {
    id: 9,
    conceptTitle: 'Importância da Hidratação',
    visualRepresentation: '💧🚰👍🏽🫘',
    definition: 'A água é crucial para dissolver resíduos, formar urina, prevenir cálculos renais e manter a saúde geral.',
    keywords: 'Água, Hidratação, Prevenção, Cálculos Renais, Saúde Renal',
    detailsHtml: '<div class="modal-content-custom">A ingestão adequada de água é fundamental para o bom funcionamento do sistema excretor e para a saúde geral:<ul><li><strong>Diluição de Resíduos:</strong> A água ajuda a dissolver os resíduos metabólicos, facilitando sua eliminação pela urina.</li><li><strong>Formação da Urina:</strong> É o principal componente da urina, permitindo o transporte e a excreção de substâncias.</li><li><strong>Prevenção de Cálculos Renais:</strong> Manter-se hidratado ajuda a prevenir a formação de pedras nos rins, pois dilui os sais na urina.</li><li><strong>Regulação da Temperatura Corporal:</strong> Embora não seja uma função primária do sistema excretor, a água é vital para a termorregulação (através do suor).</li><li><strong>Manutenção do Volume Sanguíneo e Pressão Arterial:</strong> A hidratação adequada é importante para manter o volume sanguíneo e a pressão arterial estáveis.</li><li><strong>Sinais de Desidratação:</strong> Sede intensa, urina escura e em pouca quantidade, boca seca, fadiga, tontura.</li><li><strong>Recomendação Geral:</strong> Varia conforme idade, sexo, nível de atividade física e condições climáticas, mas geralmente em torno de 2-3 litros de líquidos por dia para adultos.</li></ul></div>'
  }
];

const SistemaExcretorPage = () => {
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
        <h1>Sistema Excretor (Urinário)</h1>
        <p>Filtrando o essencial e eliminando o desnecessário!</p>
      </header>
      <main className={styles.conceptsGrid}>
        {sistemaExcretorConcepts.map(concept => (
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
        <p>Sistema Excretor: Garantindo a pureza interna e o equilíbrio da vida! 🚽💧✨</p>
      </footer>
    </div>
  );
};

export default SistemaExcretorPage;
