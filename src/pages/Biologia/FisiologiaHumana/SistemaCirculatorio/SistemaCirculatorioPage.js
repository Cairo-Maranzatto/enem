import React, { useState } from 'react';
import styles from './SistemaCirculatorioPage.module.css';
import ConceptCard from '../../../../components/ConceptCard/ConceptCard';
import ConceptModal from '../../../../components/ConceptCard/ConceptModal';

const sistemaCirculatorioConcepts = [
  {
    id: 'visaoGeral',
    conceptTitle: 'Visão Geral',
    visualRepresentation: '❤️🩸🚚🔄',
    definition: 'Rede de órgãos (coração, vasos) e fluido (sangue) que transporta substâncias essenciais pelo corpo.',
    keywords: 'Transporte, Nutrientes, Oxigênio, Defesa, Termorregulação',
    detailsHtml: `<div class="modal-content-custom">O <strong>Sistema Cardiovascular</strong>, também chamado de circulatório, é responsável pelo transporte de nutrientes, oxigênio, hormônios, dióxido de carbono e outras substâncias pelo corpo, além de participar da defesa do organismo e da regulação da temperatura.<ul><li><strong>Funções Principais:</strong> Transporte de gases (O₂ e CO₂), nutrientes e excretas; distribuição de hormônios; defesa imunológica; termorregulação.</li><li><strong>Componentes Principais:</strong> Coração (bomba propulsora), vasos sanguíneos (artérias, veias e capilares) e o sangue (fluido transportador).</li></ul></div>`
  },
  {
    id: 'coracao',
    conceptTitle: 'Coração: A Bomba Vital',
    visualRepresentation: '❤️💪🏽🚪',
    definition: 'Órgão muscular que bombeia o sangue, com quatro câmaras (átrios e ventrículos) e válvulas.',
    keywords: 'Átrios, Ventrículos, Válvulas, Miocárdio, Bombeamento',
    detailsHtml: `<div class="modal-content-custom">O <strong>Coração</strong> é um órgão muscular oco que funciona como uma bomba, impulsionando o sangue para todo o corpo.<ul><li><strong>Localização:</strong> Na caixa torácica, entre os pulmões, ligeiramente deslocado para a esquerda.</li><li><strong>Estrutura:</strong> Possui quatro cavidades:<ul><li><strong>Átrios (Aurículas):</strong> Duas cavidades superiores (átrio direito e átrio esquerdo) que recebem o sangue.</li><li><strong>Ventrículos:</strong> Duas cavidades inferiores (ventrículo direito e ventrículo esquerdo) que bombeiam o sangue para fora do coração.</li></ul></li><li><strong>Válvulas Cardíacas:</strong> Estruturas que garantem o fluxo unidirecional do sangue, impedindo o refluxo:<ul><li><strong>Válvulas Atrioventriculares:</strong> Tricúspide (entre átrio e ventrículo direitos) e Mitral ou Bicúspide (entre átrio e ventrículo esquerdos).</li><li><strong>Válvulas Semilunares:</strong> Pulmonar (saída do ventrículo direito) e Aórtica (saída do ventrículo esquerdo).</li></ul></li><li><strong>Miocárdio:</strong> Músculo cardíaco responsável pela contração do coração.</li><li><strong>Pericárdio:</strong> Saco membranoso que envolve e protege o coração.</li></ul></div>`
  },
  {
    id: 'vasosSanguineos',
    conceptTitle: 'Vasos Sanguíneos',
    visualRepresentation: '🛣️➡️⬅️🔬',
    definition: 'Tubos (artérias, veias e capilares) que conduzem o sangue pelo corpo, permitindo trocas.',
    keywords: 'Artérias, Veias, Capilares, Transporte, Trocas',
    detailsHtml: `<div class="modal-content-custom">Os <strong>Vasos Sanguíneos</strong> formam uma rede de tubos por onde o sangue circula. Existem três tipos principais:<ul><li><strong>Artérias:</strong> Vasos que transportam sangue <strong>do coração para os tecidos</strong>. Geralmente carregam sangue arterial (rico em O₂), exceto as artérias pulmonares. Possuem paredes espessas e elásticas para suportar a alta pressão sanguínea. Ramificam-se em arteríolas.</li><li><strong>Veias:</strong> Vasos que transportam sangue <strong>dos tecidos para o coração</strong>. Geralmente carregam sangue venoso (rico em CO₂), exceto as veias pulmonares. Possuem paredes mais finas e menos elásticas que as artérias. Muitas veias possuem válvulas internas para impedir o refluxo do sangue, especialmente nos membros inferiores. Ramificam-se em vênulas.</li><li><strong>Capilares:</strong> Vasos microscópicos de paredes muito finas (uma única camada de células endoteliais) que conectam arteríolas e vênulas. É nos capilares que ocorrem as trocas de substâncias (gases, nutrientes, excretas) entre o sangue e as células dos tecidos.</li></ul></div>`
  },
  {
    id: 'sangue',
    conceptTitle: 'Sangue: O Tecido da Vida',
    visualRepresentation: '🩸💧🛡️🩹',
    definition: 'Fluido vital composto por plasma, hemácias (transporte de O₂), leucócitos (defesa) e plaquetas (coagulação).',
    keywords: 'Plasma, Hemácias, Leucócitos, Plaquetas, Transporte, Defesa, Coagulação',
    detailsHtml: `<div class="modal-content-custom">O <strong>Sangue</strong> é um tecido conjuntivo líquido vital que circula pelos vasos sanguíneos.<ul><li><strong>Funções:</strong> Transporte de O₂, CO₂, nutrientes, hormônios, excretas; defesa imunológica; coagulação; termorregulação.</li><li><strong>Componentes:</strong><ul><li><strong>Plasma (55%):</strong> Parte líquida, composta principalmente por água, proteínas (albumina, globulinas, fibrinogênio), sais minerais, glicose, hormônios, etc.</li><li><strong>Elementos Figurados (45%):</strong><ul><li><strong>Hemácias (Glóbulos Vermelhos ou Eritrócitos):</strong> Células anucleadas (em mamíferos) ricas em hemoglobina, responsáveis pelo transporte de O₂.</li><li><strong>Leucócitos (Glóbulos Brancos):</strong> Células de defesa do organismo, com diversos tipos (neutrófilos, linfócitos, monócitos, eosinófilos, basófilos).</li><li><strong>Plaquetas (Trombócitos):</strong> Fragmentos celulares envolvidos na coagulação sanguínea.</li></ul></li></ul></li></ul></div>`
  },
  {
    id: 'cicloCardiaco',
    conceptTitle: 'Ciclo Cardíaco',
    visualRepresentation: '🔄❤️🔊📉📈',
    definition: 'Sequência de contração (sístole) e relaxamento (diástole) das câmaras cardíacas durante um batimento.',
    keywords: 'Sístole, Diástole, Contração, Relaxamento, Bulhas Cardíacas',
    detailsHtml: `<div class="modal-content-custom">O <strong>Ciclo Cardíaco</strong> é a sequência de eventos que ocorrem durante um batimento cardíaco completo, envolvendo a contração (sístole) e o relaxamento (diástole) das câmaras cardíacas.<ul><li><strong>Diástole Geral:</strong> Átrios e ventrículos relaxados. O sangue flui das veias para os átrios e, passivamente, para os ventrículos.</li><li><strong>Sístole Atrial:</strong> Os átrios contraem, bombeando o sangue restante para os ventrículos.</li><li><strong>Sístole Ventricular:</strong> Os ventrículos contraem. As válvulas atrioventriculares fecham (produzindo a primeira bulha cardíaca - \'tum\'). A pressão nos ventrículos aumenta até superar a pressão nas artérias aorta e pulmonar, abrindo as válvulas semilunares e ejetando o sangue.</li><li><strong>Diástole Ventricular:</strong> Os ventrículos relaxam. A pressão nos ventrículos cai. As válvulas semilunares fecham (produzindo a segunda bulha cardíaca - \'tá\'). As válvulas atrioventriculares abrem quando a pressão ventricular é menor que a atrial, reiniciando o enchimento ventricular.</li></ul>O ciclo dura cerca de 0,8 segundos em repouso.</div>`
  },
  {
    id: 'pequenaCirculacao',
    conceptTitle: 'Pequena Circulação',
    visualRepresentation: '❤️➡️🫁➡️❤️',
    definition: 'Trajeto do sangue do coração aos pulmões (para oxigenação) e de volta ao coração.',
    keywords: 'Ventrículo Direito, Artéria Pulmonar, Pulmões, Veias Pulmonares, Átrio Esquerdo, Hematose',
    detailsHtml: `<div class="modal-content-custom">A <strong>Pequena Circulação</strong> ou <strong>Circulação Pulmonar</strong> é o trajeto do sangue entre o coração e os pulmões.<ul><li><strong>Trajeto:</strong> O sangue venoso (rico em CO₂) sai do <strong>ventrículo direito</strong> pela <strong>artéria pulmonar</strong>, que se ramifica e leva o sangue aos pulmões.</li><li><strong>Nos Pulmões:</strong> Nos capilares alveolares, ocorre a hematose pulmonar: o CO₂ é liberado do sangue para o ar alveolar, e o O₂ do ar alveolar passa para o sangue.</li><li><strong>Retorno ao Coração:</strong> O sangue arterial (agora rico em O₂) retorna ao <strong>átrio esquerdo</strong> do coração pelas <strong>veias pulmonares</strong>.</li><li><strong>Função:</strong> Levar o sangue venoso aos pulmões para oxigenação (hematose) e retornar o sangue arterializado ao coração.</li></ul></div>`
  },
  {
    id: 'grandeCirculacao',
    conceptTitle: 'Grande Circulação',
    visualRepresentation: '❤️➡️🌍➡️❤️',
    definition: 'Trajeto do sangue do coração para todo o corpo (exceto pulmões) e de volta ao coração.',
    keywords: 'Ventrículo Esquerdo, Artéria Aorta, Tecidos, Veias Cavas, Átrio Direito',
    detailsHtml: `<div class="modal-content-custom">A <strong>Grande Circulação</strong> ou <strong>Circulação Sistêmica</strong> é o trajeto do sangue entre o coração e o restante do corpo (exceto os pulmões).<ul><li><strong>Trajeto:</strong> O sangue arterial (rico em O₂) sai do <strong>ventrículo esquerdo</strong> pela <strong>artéria aorta</strong> (a maior artéria do corpo), que se ramifica em artérias menores, levando sangue para todos os órgãos e tecidos.</li><li><strong>Nos Tecidos:</strong> Nos capilares sistêmicos, ocorrem as trocas: o O₂ e nutrientes são liberados do sangue para as células, e o CO₂ e excretas das células passam para o sangue.</li><li><strong>Retorno ao Coração:</strong> O sangue venoso (agora rico em CO₂) retorna ao <strong>átrio direito</strong> do coração pelas <strong>veias cavas</strong> (superior e inferior).</li><li><strong>Função:</strong> Levar sangue arterializado (oxigênio e nutrientes) a todas as células do corpo e recolher o sangue venoso (com CO₂ e excretas) de volta ao coração.</li></ul></div>`
  },
  {
    id: 'pressaoArterialPulso',
    conceptTitle: 'Pressão Arterial e Pulso',
    visualRepresentation: '🩺📊💓🌊',
    definition: 'Força do sangue nas artérias (sistólica/diastólica) e onda de pressão palpável (pulso).',
    keywords: 'Sistólica, Diastólica, Hipertensão, Frequência Cardíaca',
    detailsHtml: `<div class="modal-content-custom"><ul><li><strong>Pressão Arterial:</strong> É a força que o sangue exerce contra a parede das artérias. É medida em milímetros de mercúrio (mmHg) e expressa por dois valores: a pressão <strong>sistólica</strong> (máxima, durante a contração ventricular) e a pressão <strong>diastólica</strong> (mínima, durante o relaxamento ventricular). Valores de referência: ~120/80 mmHg. A hipertensão (pressão alta) é um fator de risco para doenças cardiovasculares.</li><li><strong>Pulso Arterial:</strong> É a onda de pressão que se propaga pelas artérias devido à ejeção de sangue pelo ventrículo esquerdo durante a sístole. Pode ser sentido em artérias superficiais (ex: radial no punho, carótida no pescoço) e reflete a frequência cardíaca.</li></ul></div>`
  },
  {
    id: 'sistemaLinfatico',
    conceptTitle: 'Sistema Linfático',
    visualRepresentation: '💧🛡️🔗🩸',
    definition: 'Rede auxiliar que drena fluidos, transporta gorduras e participa da defesa imunológica.',
    keywords: 'Linfa, Linfonodos, Drenagem, Imunidade, Absorção de Gorduras',
    detailsHtml: `<div class="modal-content-custom">O <strong>Sistema Linfático</strong> é uma rede de vasos e órgãos que atua em conjunto com o sistema circulatório.<ul><li><strong>Funções:</strong> Drenagem do excesso de líquido intersticial (linfa) dos tecidos, retornando-o ao sangue; transporte de lipídios absorvidos no intestino; defesa do organismo (produção e maturação de células de defesa, filtração da linfa nos linfonodos).</li><li><strong>Componentes:</strong> Vasos linfáticos, capilares linfáticos, linfonodos (gânglios linfáticos), baço, timo, tonsilas (amígdalas).</li><li><strong>Relação com o Sistema Circulatório:</strong> A linfa, após circular pelos vasos linfáticos e ser filtrada nos linfonodos, retorna ao sistema circulatório sanguíneo através de ductos que desembocam em grandes veias próximas ao coração.</li></ul></div>`
  }
];

const SistemaCirculatorioPage = () => {
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
        <h1>Sistema Circulatório (Cardiovascular)</h1>
        <p>A rede vital que transporta vida pelo corpo!</p>
      </header>
      <main className={styles.conceptsGrid}>
        {sistemaCirculatorioConcepts.map(concept => (
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
        <p>O motor da vida, bombeando saúde e vitalidade a cada batida! ❤️🩺✨</p>
      </footer>
    </div>
  );
};

export default SistemaCirculatorioPage;
