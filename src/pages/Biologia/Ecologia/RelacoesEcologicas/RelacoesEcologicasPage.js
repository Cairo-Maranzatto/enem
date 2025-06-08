import React, { useState } from 'react';
import styles from './RelacoesEcologicasPage.module.css';
import ConceptCard from '../../../../components/ConceptCard/ConceptCard';
import ConceptModal from '../../../../components/ConceptCard/ConceptModal';

const relacoesHarmonicasConcepts = [
    {
      id: 'colonia',
      conceptTitle: 'Colônia',
      visualRepresentation: '🔗🔗',
      definition: 'Mesma espécie, anatomicamente unidos, benefício para o grupo.',
      keywords: '(+/+) implícito | Ex: Corais 🌊, Caravelas-portuguesas',
      detailsHtml: `Na <strong>Colônia</strong>, indivíduos da mesma espécie vivem agrupados e estão fisicamente unidos, muitas vezes apresentando uma divisão de trabalho rudimentar. O benefício é para o grupo como um todo (ex: maior proteção, eficiência na captura de alimento). A separação de um indivíduo pode ser inviável ou fatal para ele. Exemplos clássicos são os corais, que formam recifes (uma estrutura física compartilhada), e as caravelas-portuguesas, que são, na verdade, uma colônia flutuante de pólipos especializados (um para flutuação, outros para defesa, outros para alimentação, etc.).`,
      type: 'harmonic'
    },
    {
      id: 'sociedade',
      conceptTitle: 'Sociedade',
      visualRepresentation: '🐜👑',
      definition: 'Mesma espécie, independentes, organizados, divisão de trabalho.',
      keywords: '(+/+) implícito | Ex: Abelhas 🐝, Formigas 🐜, Cupins',
      detailsHtml: `A <strong>Sociedade</strong> é uma relação entre indivíduos da mesma espécie que vivem juntos de forma organizada e cooperativa. Diferentemente da colônia, os membros são anatomicamente separados e independentes, mas cooperam em diversas atividades. Há uma nítida divisão de trabalho e sistemas de comunicação entre eles. Exemplos incluem as abelhas (com rainha, operárias e zangões), formigas (com suas castas), cupins (com rei, rainha, operários e soldados) e até mesmo os seres humanos em suas complexas estruturas sociais.`,
      type: 'harmonic'
    },
    {
      id: 'mutualismo',
      conceptTitle: 'Mutualismo',
      visualRepresentation: '🤝',
      definition: 'Espécies diferentes, benefício mútuo, relação obrigatória.',
      keywords: '(+/+) | Ex: Liquens (Alga + Fungo) 🍄🌿, Cupins + Protozoários',
      detailsHtml: `O <strong>Mutualismo</strong> é uma associação entre indivíduos de espécies diferentes onde ambos os participantes se beneficiam, e essa relação é indispensável (obrigatória) para a sobrevivência de pelo menos um deles, ou frequentemente de ambos. Se separados, um ou ambos não conseguiriam sobreviver ou se reproduzir eficientemente. Exemplos marcantes são os liquens (associação entre uma alga ou cianobactéria, que realiza fotossíntese, e um fungo, que oferece proteção, umidade e sais minerais), os cupins e protozoários do gênero Trichonympha em seu intestino (o cupim obtém celulose digerida pelo protozoário, que por sua vez ganha abrigo e alimento), e as micorrizas (associação entre fungos e raízes de plantas, onde a planta fornece carboidratos ao fungo, e o fungo aumenta a capacidade de absorção de água e nutrientes da planta).`,
      type: 'harmonic'
    },
    {
      id: 'protocooperacao',
      conceptTitle: 'Protocooperação',
      visualRepresentation: '🧑‍🤝‍🧑',
      definition: 'Espécies diferentes, benefício mútuo, relação não obrigatória.',
      keywords: '(+/+) | Ex: Pássaro-palito + Jacaré 🐊, Anu + Gado 🐄',
      detailsHtml: `A <strong>Protocooperação</strong> é uma interação entre indivíduos de espécies diferentes na qual ambos se beneficiam, mas, diferentemente do mutualismo, essa relação não é obrigatória para a sobrevivência deles. Eles podem viver de forma independente, embora a associação traga vantagens. Exemplos comuns são o pássaro-palito e o jacaré (o pássaro se alimenta de restos de comida e parasitas da boca do jacaré, que por sua vez tem sua boca limpa), o anu e o gado (o anu se alimenta de carrapatos presentes no gado, livrando-o desses parasitas), e o caranguejo paguro (eremita) com anêmonas-do-mar (o paguro ganha proteção e camuflagem com a anêmona em sua concha, enquanto a anêmona ganha mobilidade e acesso a mais fontes de alimento).`,
      type: 'harmonic'
    },
    {
      id: 'comensalismo',
      conceptTitle: 'Comensalismo',
      visualRepresentation: '😋😐',
      definition: 'Espécies diferentes, um se beneficia (alimento), outro indiferente.',
      keywords: '(+/0) | Ex: Rêmora + Tubarão 🦈, Urubus + Carcaças',
      detailsHtml: `No <strong>Comensalismo</strong>, indivíduos de espécies diferentes se associam, e um deles (o comensal) se beneficia, geralmente obtendo restos alimentares, enquanto o outro (o hospedeiro) não é prejudicado nem beneficiado pela relação (efeito neutro). O comensal aproveita o que sobra da alimentação do hospedeiro sem afetá-lo. Exemplos incluem a rêmora (ou peixe-piloto) que se fixa ao corpo de tubarões para transporte e para se alimentar dos restos de suas presas, e os urubus que se alimentam de restos de carcaças deixadas por outros predadores. A Entamoeba coli, um protozoário que vive no intestino humano alimentando-se de restos digestivos sem causar doença, também é um exemplo.`,
      type: 'harmonic'
    },
    {
      id: 'inquilinismo',
      conceptTitle: 'Inquilinismo',
      visualRepresentation: '🏠😐',
      definition: 'Espécies diferentes, um obtém abrigo/suporte, outro indiferente.',
      keywords: '(+/0) | Ex: Orquídeas + Árvores 🌳, Peixe-agulha + Pepino-do-mar',
      detailsHtml: `O <strong>Inquilinismo</strong> é um tipo de relação harmônica interespecífica em que uma espécie (o inquilino) vive sobre ou dentro de outra espécie (o hospedeiro), obtendo abrigo, suporte ou proteção, sem prejudicá-la nem beneficiá-la. É comum em plantas epífitas, como orquídeas e bromélias, que vivem sobre troncos de árvores para obter maior luminosidade, sem retirar nutrientes da árvore. Outro exemplo é o peixe-agulha (Fierasfer) que se abriga dentro do corpo de pepinos-do-mar.`,
      type: 'harmonic'
    }
  ];

const relacoesDesarmonicasConcepts = [
    {
      id: 'canibalismo',
      conceptTitle: 'Canibalismo',
      visualRepresentation: '🍽️😋',
      definition: 'Mesma espécie, um mata e se alimenta do outro.',
      keywords: '(+/-) | Ex: Louva-a-deus fêmea, Viúva-negra 🕷️',
      detailsHtml: `O <strong>Canibalismo</strong> é uma relação intraespecífica (ocorre entre indivíduos da mesma espécie) em que um indivíduo mata e se alimenta de outro. O predador se beneficia obtendo nutrientes, enquanto a presa é eliminada. Essa relação pode ocorrer em situações de estresse alimentar, para controle populacional, ou como parte do comportamento reprodutivo de algumas espécies. Exemplos incluem a fêmea do louva-a-deus, que pode devorar o macho após a cópula, algumas espécies de aranhas (como a viúva-negra), e peixes em cativeiro ou em ambientes com escassez severa de alimento.`,
      type: 'disharmonic'
    },
    {
      id: 'competicao_intra',
      conceptTitle: 'Competição Intraespecífica',
      visualRepresentation: '⚔️',
      definition: 'Mesma espécie, disputam os mesmos recursos limitados.',
      keywords: '(-/-) | Ex: Plantas por luz/água, Animais por território/parceiros',
      detailsHtml: `A <strong>Competição Intraespecífica</strong> ocorre entre indivíduos da mesma espécie que disputam os mesmos recursos do ambiente, quando estes são limitados. Os recursos podem ser alimento, água, luz (no caso de plantas), espaço, abrigo ou parceiros para reprodução. Como ambos os competidores são prejudicados pela disputa (gastam energia, podem se ferir, ou ter acesso reduzido ao recurso), a relação é considerada (-/-). A competição intraespecífica é um importante fator de regulação do tamanho das populações.`,
      type: 'disharmonic'
    },
    {
      id: 'competicao_inter',
      conceptTitle: 'Competição Interespecífica',
      visualRepresentation: '🥊',
      definition: 'Espécies diferentes, disputam os mesmos recursos limitados.',
      keywords: '(-/-) | Ex: Hienas e Leões por carcaça, Plantas diferentes por luz',
      detailsHtml: `A <strong>Competição Interespecífica</strong> ocorre entre indivíduos de espécies diferentes que utilizam os mesmos recursos limitados do ambiente (mesmo nicho ecológico ou parte dele). Assim como na competição intraespecífica, ambos os competidores são prejudicados (-/-). Essa competição pode levar à exclusão competitiva (uma espécie elimina a outra da área) ou à coexistência por meio da partilha de recursos ou especialização de nicho. Um exemplo clássico é a competição entre diferentes espécies de plantas por luz, água e nutrientes no solo, ou entre carnívoros diferentes pela mesma presa.`,
      type: 'disharmonic'
    },
    {
      id: 'predatismo',
      conceptTitle: 'Predatismo',
      visualRepresentation: '🦁🍖',
      definition: 'Um (predador) mata e se alimenta do outro (presa) de espécie diferente.',
      keywords: '(+/-) | Ex: Leão + Zebra, Coruja + Rato 🦉',
      detailsHtml: `O <strong>Predatismo</strong> é uma relação interespecífica em que um organismo (o predador) captura, mata e se alimenta de outro organismo de espécie diferente (a presa). O predador é beneficiado (+) ao obter alimento, enquanto a presa é prejudicada (-) sendo morta. O predatismo é fundamental para a dinâmica das populações e para a seleção natural, influenciando o tamanho das populações de presas e predadores e promovendo adaptações (camuflagem, velocidade, defesas químicas etc.). A herbivoria, onde um animal se alimenta de partes de uma planta, é por vezes considerada um tipo de predatismo.`,
      type: 'disharmonic'
    },
    {
      id: 'parasitismo',
      conceptTitle: 'Parasitismo',
      visualRepresentation: '🦟🧥',
      definition: 'Um (parasita) vive no outro (hospedeiro), causando prejuízo, para obter alimento.',
      keywords: '(+/-) | Ex: Piolhos, Lombrigas, Plasmódio (malária) 🦠',
      detailsHtml: `O <strong>Parasitismo</strong> é uma relação interespecífica em que um organismo (o parasita) vive às custas de outro organismo de espécie diferente (o hospedeiro), retirando dele nutrientes e causando-lhe prejuízos. O parasita é beneficiado (+), enquanto o hospedeiro é prejudicado (-). Geralmente, o parasita não mata o hospedeiro a curto prazo, pois depende dele para sua sobrevivência e reprodução. Os parasitas podem ser ectoparasitas (vivem na superfície externa do hospedeiro, como piolhos, pulgas, carrapatos) ou endoparasitas (vivem no interior do corpo do hospedeiro, como vermes intestinais - lombrigas, solitárias - e protozoários causadores de doenças - como o plasmódio da malária). Plantas parasitas, como o cipó-chumbo, também existem.`,
      type: 'disharmonic'
    },
    {
      id: 'amensalismo',
      conceptTitle: 'Amensalismo (Antibiose)',
      visualRepresentation: '🚫🌱',
      definition: 'Um inibe/prejudica o outro sem se beneficiar ou prejudicar.',
      keywords: '(-/0) | Ex: Fungos Penicillium + Bactérias, Maré Vermelha',
      detailsHtml: `O <strong>Amensalismo</strong>, também conhecido como Antibiose, é uma relação interespecífica em que uma espécie (a amensal) é prejudicada (-) ou tem seu desenvolvimento inibido pela presença de outra espécie, enquanto esta última não é afetada (0) nem beneficiada pela interação. Um exemplo clássico é a produção de substâncias tóxicas por certos microrganismos que inibem o crescimento de outros, como o fungo Penicillium que produz penicilina, antibiótico que mata bactérias. Outro exemplo são as marés vermelhas, onde a proliferação excessiva de certas algas dinoflageladas libera toxinas na água que podem matar peixes e outros organismos marinhos, sem que as algas se beneficiem diretamente dessa mortandade.`,
      type: 'disharmonic'
    },
    {
      id: 'esclavagismo',
      conceptTitle: 'Esclavagismo (Sifilia)',
      visualRepresentation: '⛓️🐜',
      definition: 'Um se aproveita do trabalho, atividades ou alimento do outro.',
      keywords: '(+/-) | Ex: Formigas escravistas, Pássaros cuco (parasitismo de ninhada)',
      detailsHtml: `O <strong>Esclavagismo</strong> ou Sinfilia é uma relação interespecífica em que uma espécie (a esclavagista) se beneficia (+) explorando o trabalho, as atividades ou os recursos (como alimento) de outra espécie (a escravizada), que é prejudicada (-). Um exemplo são certas espécies de formigas que invadem ninhos de outras espécies, roubam suas larvas e pupas, e as criam como escravas para trabalhar em seu próprio formigueiro. O parasitismo de ninhada, como o praticado por algumas aves (ex: pássaro cuco) que depositam seus ovos nos ninhos de outras espécies para que estas criem seus filhotes, também pode ser considerado uma forma de esclavagismo.`,
      type: 'disharmonic'
    }
  ];

const RelacoesEcologicasPage = () => {
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

  const renderConceptSection = (title, concepts, sectionDescription) => (
    <>
      <header className={styles.sectionHeader}>
        <h2>{title}</h2>
      </header>
      {sectionDescription && <p className={styles.sectionDescription}>{sectionDescription}</p>}
      <div className={styles.conceptsGrid}>
        {concepts.map((concept) => (
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
    </>
  );

  return (
    <div className={styles.pageContainer}>
      <header className={styles.mainHeader}>
        <h1>Relações Ecológicas</h1>
        <p>Entenda as interações entre os seres vivos!</p>
      </header>

      <div className={styles.legend}>
        <div className={styles.legendItem}><span className={styles.legendItemPlus}>➥</span> Benefício</div>
        <div className={styles.legendItem}><span className={styles.legendItemMinus}>➯</span> Prejuízo</div>
        <div className={styles.legendItem}><span className={styles.legendItemNeutral}>⓪</span> Neutro</div>
      </div>

      <main>
        {renderConceptSection("Relações Harmônicas", relacoesHarmonicasConcepts, "Pelo menos um se beneficia e ninguém é prejudicado.")}
        {renderConceptSection("Relações Desarmônicas", relacoesDesarmonicasConcepts, "Pelo menos um é prejudicado.")}
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
        <p>Explore as fascinantes e complexas teias da vida! 🕸️🌍</p>
      </footer>
    </div>
  );
};

export default RelacoesEcologicasPage;
