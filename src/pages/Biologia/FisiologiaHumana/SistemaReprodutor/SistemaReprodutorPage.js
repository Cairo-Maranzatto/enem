import React, { useState } from 'react';
import styles from './SistemaReprodutorPage.module.css';
import ConceptCard from '../../../../components/ConceptCard/ConceptCard';
import ConceptModal from '../../../../components/ConceptCard/ConceptModal';

const sistemaReprodutorConcepts = [
  {
    id: 1,
    conceptTitle: 'Visão Geral Masculina',
    visualRepresentation: '♂️⚙️💪',
    definition: 'Foco na produção de espermatozoides e hormônios masculinos (testosterona) para reprodução e características sexuais.',
    keywords: 'Gametas Masculinos, Testosterona, Espermatogênese, Puberdade, Libido',
    detailsHtml: '<div class="modal-content-custom">O <strong>Sistema Reprodutor Masculino</strong> é especializado na produção contínua de gametas masculinos (espermatozoides) e do principal hormônio sexual masculino, a testosterona.<ul><li><strong>Funções Principais:</strong><ul><li>Produção de espermatozoides.</li><li>Produção e secreção de testosterona, responsável pelo desenvolvimento de características sexuais secundárias masculinas (pelos, voz, massa muscular) e pela libido.</li><li>Transferência dos espermatozoides para o sistema reprodutor feminino através do ato sexual.</li></ul></li><li>Componentes chave incluem os testículos (gônadas), epidídimos, ductos deferentes, vesículas seminais, próstata e pênis.</li></ul></div>'
  },
  {
    id: 2,
    conceptTitle: 'Anatomia Masculina',
    visualRepresentation: '🚹🔧🔩',
    definition: 'Órgãos: Pênis, escroto, testículos (produção de espermatozoides), epidídimos, ductos deferentes, próstata, vesículas seminais.',
    keywords: 'Pênis, Testículos, Próstata, Epidídimo, Escroto, Sêmen',
    detailsHtml: '<div class="modal-content-custom"><ul><li><strong>Órgãos Externos:</strong><ul><li><strong>Pênis:</strong> Órgão copulador, também participa da micção. Contém tecido erétil (corpos cavernosos e esponjoso).</li><li><strong>Escroto (Bolsa Escrotal):</strong> Bolsa de pele que aloja e protege os testículos, mantendo-os a uma temperatura ligeiramente inferior à do corpo, ideal para a produção de espermatozoides.</li></ul></li><li><strong>Órgãos Internos e Glândulas Anexas:</strong><ul><li><strong>Testículos:</strong> Gônadas masculinas. Produzem espermatozoides (nos túbulos seminíferos) e testosterona.</li><li><strong>Epidídimos:</strong> Ductos onde os espermatozoides amadurecem e são armazenados.</li><li><strong>Ductos Deferentes:</strong> Conduzem os espermatozoides dos epidídimos até os ductos ejaculatórios.</li><li><strong>Vesículas Seminais:</strong> Produzem um fluido nutritivo e alcalino que compõe grande parte do sêmen.</li><li><strong>Próstata:</strong> Produz um fluido leitoso e alcalino que também compõe o sêmen, ajudando na motilidade e proteção dos espermatozoides.</li><li><strong>Glândulas Bulbouretrais (de Cowper):</strong> Secretam um muco lubrificante que limpa a uretra antes da ejaculação.</li><li><strong>Ductos Ejaculatórios:</strong> Formados pela união dos ductos deferentes com os ductos das vesículas seminais, desembocam na uretra.</li><li><strong>Uretra:</strong> Canal comum para a eliminação da urina e do sêmen.</li></ul></li></ul></div>'
  },
  {
    id: 3,
    conceptTitle: 'Espermatogênese',
    visualRepresentation: '🔬👨‍🔬⏳',
    definition: 'Processo de formação dos espermatozoides nos testículos, a partir de células germinativas, envolvendo mitose e meiose.',
    keywords: 'Espermatozoide, Testículo, Meiose, Gameta, Célula Germinativa',
    detailsHtml: '<div class="modal-content-custom">A <strong>Espermatogênese</strong> é o processo de formação dos espermatozoides, que ocorre nos túbulos seminíferos dos testículos.<ul><li>Inicia-se na puberdade e continua por toda a vida adulta do homem.</li><li><strong>Etapas Principais:</strong><ol><li><strong>Fase de Multiplicação:</strong> Espermatogônias (células germinativas diploides, 2n) dividem-se por mitose, aumentando seu número.</li><li><strong>Fase de Crescimento:</strong> Algumas espermatogônias crescem e se transformam em espermatócitos primários (ou I), ainda diploides (2n).</li><li><strong>Fase de Maturação:</strong> Ocorre a meiose.<ul><li><strong>Meiose I:</strong> Cada espermatócito I divide-se em dois espermatócitos secundários (ou II), que são haploides (n).</li><li><strong>Meiose II:</strong> Cada espermatócito II divide-se em duas espermátides, também haploides (n).</li></ul></li><li><strong>Fase de Diferenciação (Espermiogênese):</strong> As espermátides transformam-se em espermatozoides, desenvolvendo flagelo, acrossomo (capuz com enzimas para penetrar o óvulo) e perdendo parte do citoplasma.</li></ol></li><li>Um espermatócito I origina quatro espermatozoides.</li></ul></div>'
  },
  {
    id: 4,
    conceptTitle: 'Hormônios Masculinos',
    visualRepresentation: '💪🧔🗣️🧪',
    definition: 'Principalmente a Testosterona, responsável pelas características sexuais masculinas, libido e produção de espermatozoides.',
    keywords: 'Testosterona, LH, FSH, Puberdade, Libido, Músculos',
    detailsHtml: '<div class="modal-content-custom">O principal hormônio sexual masculino é a <strong>Testosterona</strong>, produzida principalmente pelas células de Leydig nos testículos, sob estímulo do LH (Hormônio Luteinizante) da hipófise.<ul><li><strong>Funções da Testosterona:</strong><ul><li>Desenvolvimento e manutenção dos órgãos reprodutores masculinos.</li><li>Desenvolvimento e manutenção das características sexuais secundárias masculinas (voz grossa, pelos faciais e corporais, massa muscular aumentada, etc.).</li><li>Estimula a espermatogênese (juntamente com o FSH - Hormônio Folículo-Estimulante).</li><li>Influencia o comportamento sexual (libido) e o humor.</li></ul></li><li>Outros hormônios importantes incluem o FSH (estimula as células de Sertoli nos túbulos seminíferos, auxiliando na espermatogênese) e o LH. A regulação é feita pelo eixo hipotálamo-hipófise-testículos via feedback negativo.</li></ul></div>'
  },
  {
    id: 5,
    conceptTitle: 'Visão Geral Feminina',
    visualRepresentation: '♀️🌸🤰',
    definition: 'Foco na produção de óvulos, hormônios femininos (estrogênio, progesterona), gestação e lactação.',
    keywords: 'Gametas Femininos, Estrogênio, Progesterona, Ovulação, Gestação, Ciclo Menstrual',
    detailsHtml: '<div class="modal-content-custom">O <strong>Sistema Reprodutor Feminino</strong> é especializado na produção de gametas femininos (óvulos), na produção de hormônios sexuais femininos (principalmente estrogênio e progesterona), na recepção dos espermatozoides, na ocorrência da fecundação, no desenvolvimento do embrião/feto durante a gestação, no parto e na lactação.<ul><li><strong>Funções Principais:</strong><ul><li>Produção de óvulos (ovogênese).</li><li>Produção de estrogênio e progesterona, responsáveis pelo desenvolvimento de características sexuais secundárias femininas (seios, pelos pubianos, distribuição de gordura) e pela regulação do ciclo menstrual e da gravidez.</li><li>Fornecer o local para a fecundação e o desenvolvimento do novo ser.</li><li>Nutrição do recém-nascido através da lactação.</li></ul></li><li>Componentes chave incluem os ovários (gônadas), tubas uterinas, útero, vagina e vulva.</li></ul></div>'
  },
  {
    id: 6,
    conceptTitle: 'Anatomia Feminina',
    visualRepresentation: '🚺🌷🤰',
    definition: 'Órgãos: Vulva, vagina, útero (onde o bebê se desenvolve), ovários (produção de óvulos), tubas uterinas.',
    keywords: 'Vagina, Útero, Ovário, Tuba Uterina, Vulva, Endométrio',
    detailsHtml: '<div class="modal-content-custom"><ul><li><strong>Órgãos Externos (Vulva):</strong> Conjunto de estruturas genitais externas. Inclui grandes lábios, pequenos lábios, clitóris e abertura vaginal.</li><li><strong>Órgãos Internos:</strong><ul><li><strong>Vagina:</strong> Canal muscular que conecta a vulva ao colo do útero. Recebe o pênis durante o ato sexual e serve como canal de parto.</li><li><strong>Útero:</strong> Órgão muscular oco, em forma de pera invertida, onde o embrião se implanta e se desenvolve durante a gestação. Sua parede interna é o endométrio, que descama durante a menstruação se não houver gravidez.</li><li><strong>Colo do Útero (Cérvix):</strong> Porção inferior e estreita do útero que se abre para a vagina.</li><li><strong>Tubas Uterinas (Trompas de Falópio):</strong> Dois tubos que conectam os ovários ao útero. Local onde geralmente ocorre a fecundação. Capturam o óvulo liberado pelo ovário.</li><li><strong>Ovários:</strong> Gônadas femininas. Produzem óvulos e os hormônios sexuais estrogênio e progesterona.</li></ul></li></ul></div>'
  },
  {
    id: 7,
    conceptTitle: 'Ovogênese e Ciclo Ovariano',
    visualRepresentation: '♀️🥚⏳',
    definition: 'Formação dos óvulos nos ovários. Inicia antes do nascimento, pausa, e completa um óvulo por ciclo após puberdade.',
    keywords: 'Ovócito, Folículo Ovariano, Meiose, Corpúsculo Polar, Ovulação',
    detailsHtml: '<div class="modal-content-custom">A <strong>Ovogênese (ou Ovulogênese)</strong> é o processo de formação dos gametas femininos (óvulos).<ul><li>Inicia-se ainda durante o desenvolvimento embrionário da mulher: as ovogônias (células germinativas diploides, 2n) multiplicam-se por mitose e iniciam a meiose I, parando na prófase I, transformando-se em ovócitos primários (ou I). A mulher já nasce com todos os seus ovócitos I.</li><li>A partir da puberdade, a cada ciclo menstrual, alguns ovócitos I retomam a meiose I, sob estímulo hormonal (FSH).</li><li><strong>Ciclo Ovariano:</strong><ul><li><strong>Fase Folicular:</strong> O FSH estimula o crescimento de vários folículos ovarianos (estruturas que contêm os ovócitos). Geralmente, apenas um folículo amadurece completamente (folículo de Graaf). O ovócito I completa a meiose I, originando um ovócito secundário (ou II, haploide n) e o primeiro corpúsculo polar (célula pequena não funcional).</li><li><strong>Ovulação:</strong> Ocorre por volta do 14º dia de um ciclo de 28 dias, devido a um pico de LH. O folículo maduro rompe-se e libera o ovócito II na tuba uterina. O ovócito II inicia a meiose II, mas para na metáfase II.</li><li><strong>Fase Lútea:</strong> O folículo rompido transforma-se no corpo lúteo (ou amarelo), que produz progesterona e estrogênio. Se não houver fecundação, o corpo lúteo degenera.</li></ul></li><li>A meiose II só se completa se o ovócito II for fecundado por um espermatozoide, formando o óvulo maduro e o segundo corpúsculo polar.</li><li>Uma ovogônia origina apenas um óvulo funcional.</li></ul></div>'
  },
  {
    id: 8,
    conceptTitle: 'Ciclo Menstrual',
    visualRepresentation: '🗓️🩸🔄♀️',
    definition: 'Alterações mensais no útero e ovários, reguladas por hormônios, preparando para a gravidez. Inclui menstruação e ovulação.',
    keywords: 'Menstruação, Ovulação, Endométrio, FSH, LH, Estrogênio, Progesterona',
    detailsHtml: '<div class="modal-content-custom">O <strong>Ciclo Menstrual</strong> refere-se às alterações cíclicas que ocorrem no endométrio (revestimento interno do útero) em resposta às flutuações hormonais do ciclo ovariano, preparando o útero para uma possível gravidez. Dura em média 28 dias.<ul><li><strong>Fases do Ciclo Uterino (Menstrual):</strong><ul><li><strong>Fase Menstrual (Menstruação):</strong> Dias 1-5 (aproximadamente). Se não houve fecundação, os níveis de estrogênio e progesterona caem, causando a descamação do endométrio, que é eliminado junto com sangue pela vagina.</li><li><strong>Fase Proliferativa (ou Estrogênica):</strong> Dias 6-14 (aproximadamente). O estrogênio produzido pelos folículos ovarianos em crescimento estimula a proliferação e espessamento do endométrio.</li><li><strong>Fase Secretora (ou Luteínica):</strong> Dias 15-28 (aproximadamente). Após a ovulação, a progesterona (e também estrogênio) produzida pelo corpo lúteo torna o endométrio mais espesso, vascularizado e rico em glicogênio, ideal para a implantação do embrião. Se não houver fecundação, o corpo lúteo regride, os níveis hormonais caem e um novo ciclo se inicia com a menstruação.</li></ul></li><li><strong>Regulação Hormonal:</strong> Envolve o hipotálamo (GnRH), a hipófise (FSH, LH) e os ovários (estrogênio, progesterona).</li></ul></div>'
  },
  {
    id: 9,
    conceptTitle: 'Hormônios Femininos',
    visualRepresentation: '🌸📈📉♀️',
    definition: 'Estrogênio e Progesterona, regulam o ciclo menstrual, características sexuais femininas e gravidez.',
    keywords: 'Estrogênio, Progesterona, FSH, LH, Puberdade, Gravidez',
    detailsHtml: '<div class="modal-content-custom">Os principais hormônios sexuais femininos são o <strong>Estrogênio</strong> e a <strong>Progesterona</strong>, produzidos principalmente pelos ovários, sob estímulo do FSH e LH da hipófise.<ul><li><strong>Funções do Estrogênio:</strong><ul><li>Desenvolvimento e manutenção dos órgãos reprodutores femininos.</li><li>Desenvolvimento e manutenção das características sexuais secundárias femininas (desenvolvimento das mamas, alargamento dos quadris, distribuição de gordura corporal, pelos pubianos e axilares).</li><li>Estimula o crescimento do endométrio na primeira fase do ciclo menstrual.</li><li>Importante para a saúde óssea.</li></ul></li><li><strong>Funções da Progesterona:</strong><ul><li>Prepara o endométrio para a implantação do embrião e mantém a gravidez.</li><li>Estimula o desenvolvimento das glândulas mamárias durante a gravidez.</li><li>Inibe as contrações uterinas durante a gravidez.</li></ul></li><li>Outros hormônios importantes incluem o FSH (estimula o desenvolvimento dos folículos ovarianos e a produção de estrogênio) e o LH (desencadeia a ovulação e a formação do corpo lúteo, que produz progesterona). A regulação é feita pelo eixo hipotálamo-hipófise-ovários via feedback.</li></ul></div>'
  }
];

const SistemaReprodutorPage = () => {
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
        <h1>Sistema Reprodutor</h1>
        <p>A incrível jornada da vida: da formação dos gametas à perpetuação da espécie.</p>
      </header>
      <main className={styles.conceptsGrid}>
        {sistemaReprodutorConcepts.map(concept => (
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
        <p>Sistema Reprodutor: A base da continuidade da vida e da diversidade! 🧬❤️👶</p>
      </footer>
    </div>
  );
};

export default SistemaReprodutorPage;
