import React, { useState } from 'react';
import styles from './DoencasPage.module.css';
import ConceptCard from '../../../../components/ConceptCard/ConceptCard';
import ConceptModal from '../../../../components/ConceptCard/ConceptModal';

const doencasConcepts = [
  {
    id: 'conceitosFundamentais',
    conceptTitle: 'Conceitos Fundamentais',
    visualRepresentation: '🩺🔬🌍',
    definition: 'Entenda o que é saúde, doença, e os fatores envolvidos no seu desenvolvimento, como a tríade ecológica.',
    keywords: 'Saúde, Doença, Agente Etiológico, Hospedeiro, Meio Ambiente, Infecciosa, Crônica',
    detailsHtml: `<div class="modal-content-custom"><strong>Saúde</strong>, segundo a Organização Mundial da Saúde (OMS), é um estado de completo bem-estar físico, mental e social, e não apenas a ausência de doença ou enfermidade. <strong>Doença</strong>, por sua vez, pode ser definida como qualquer alteração ou desvio do estado de equilíbrio (homeostase) de um organismo, que afeta seu funcionamento normal.<ul><li><strong>Tríade Ecológica da Doença:</strong> A ocorrência de muitas doenças, especialmente as infecciosas, pode ser entendida pela interação de três fatores:<ul><li><strong>Agente Etiológico:</strong> O microrganismo ou fator capaz de causar a doença (vírus, bactéria, protozoário, fungo, helminto, agente químico ou físico).</li><li><strong>Hospedeiro:</strong> O organismo que abriga o agente e desenvolve a doença. Suscetibilidade do hospedeiro depende de fatores como idade, nutrição, imunidade.</li><li><strong>Meio Ambiente:</strong> Condições externas que influenciam a interação agente-hospedeiro (clima, saneamento, condições socioeconômicas).</li></ul></li><li><strong>Tipos Gerais de Doenças:</strong><ul><li><strong>Infecciosas/Transmissíveis:</strong> Causadas por agentes patogênicos que podem ser transmitidos de uma pessoa para outra, ou de animais/ambiente para pessoas.</li><li><strong>Não Infecciosas/Não Transmissíveis:</strong> Geralmente crônicas, não são passadas de pessoa para pessoa (ex: diabetes, doenças cardíacas, câncer).</li><li><strong>Agudas:</strong> De início súbito e curta duração.</li><li><strong>Crônicas:</strong> De longa duração, progressivas e muitas vezes sem cura, mas controláveis.</li></ul></li></ul></div>`
  },
  {
    id: 'doencasVirais',
    conceptTitle: 'Doenças Virais',
    visualRepresentation: '🦠🦟💉',
    definition: 'Principais viroses que afetam a população, seus agentes, formas de transmissão e prevenção.',
    keywords: 'Vírus, Dengue, Zika, Chikungunya, Gripe, COVID-19, AIDS, HIV, Aedes aegypti',
    detailsHtml: `<div class="modal-content-custom">Vírus são agentes infecciosos acelulares que necessitam de uma célula hospedeira para se replicar. Causam diversas doenças importantes:<ul><li><strong>Dengue, Zika e Chikungunya:</strong> Arboviroses transmitidas pelo mosquito <em>Aedes aegypti</em>.<ul><li><strong>Dengue:</strong> Febre alta, dores no corpo, manchas vermelhas. Casos graves podem levar à dengue hemorrágica. Prevenção: combate ao mosquito.</li><li><strong>Zika:</strong> Sintomas mais leves, mas associada à microcefalia em bebês de mães infectadas na gestação. Prevenção: combate ao mosquito.</li><li><strong>Chikungunya:</strong> Febre e dores intensas nas articulações, que podem persistir por meses. Prevenção: combate ao mosquito.</li></ul></li><li><strong>Gripe (Influenza):</strong> Infecção respiratória aguda causada pelo vírus Influenza. Altamente transmissível. Prevenção: vacinação anual, higiene.</li><li><strong>COVID-19:</strong> Doença respiratória causada pelo coronavírus SARS-CoV-2. Alta transmissibilidade, espectro de sintomas variados. Prevenção: vacinação, máscaras, higiene.</li><li><strong>AIDS (Síndrome da Imunodeficiência Adquirida):</strong> Causada pelo HIV (Vírus da Imunodeficiência Humana), que ataca o sistema imunológico. Transmissão: contato sexual desprotegido, sangue contaminado, vertical (mãe-filho). Prevenção: preservativos, não compartilhamento de seringas, tratamento de gestantes HIV+.</li></ul></div>`
  },
  {
    id: 'doencasBacterianas',
    conceptTitle: 'Doenças Bacterianas',
    visualRepresentation: '🔬💊💧',
    definition: 'Infecções causadas por bactérias, seus modos de transmissão, sintomas e medidas de controle.',
    keywords: 'Bactéria, Tuberculose, Hanseníase, Leptospirose, Bacilo, Profilaxia',
    detailsHtml: `<div class="modal-content-custom">Bactérias são microrganismos procariontes unicelulares. Muitas são benéficas, mas algumas são patogênicas:<ul><li><strong>Tuberculose:</strong> Causada pelo <em>Mycobacterium tuberculosis</em> (bacilo de Koch). Afeta principalmente os pulmões. Transmissão: via aérea (tosse, espirro). Sintomas: tosse persistente, febre, emagrecimento. Prevenção: vacina BCG, diagnóstico e tratamento precoces.</li><li><strong>Hanseníase (Lepra):</strong> Causada pelo <em>Mycobacterium leprae</em>. Afeta pele e nervos periféricos. Transmissão: vias aéreas superiores de pessoa para pessoa (contato prolongado). Sintomas: manchas na pele com perda de sensibilidade. Tratamento eficaz e gratuito pelo SUS.</li><li><strong>Leptospirose:</strong> Causada por bactérias do gênero <em>Leptospira</em>. Transmissão: contato com urina de animais infectados (principalmente ratos), presente em água e lama contaminadas. Sintomas: febre, dor de cabeça e muscular. Prevenção: saneamento básico, evitar contato com água de enchentes.</li><li><strong>Outras:</strong> Cólera, Difteria, Tétano, Coqueluche, Doenças Sexualmente Transmissíveis (DSTs/ISTs) como Gonorreia e Sífilis.</li></ul></div>`
  },
  {
    id: 'protozooses',
    conceptTitle: 'Protozooses',
    visualRepresentation: '🦟💧👤',
    definition: 'Doenças causadas por protozoários, incluindo seus vetores, ciclos de vida e formas de prevenção.',
    keywords: 'Protozoário, Doença de Chagas, Malária, Amebíase, Barbeiro, Anopheles, Vetor',
    detailsHtml: `<div class="modal-content-custom">Protozoários são eucariontes unicelulares. Alguns causam doenças significativas:<ul><li><strong>Doença de Chagas:</strong> Causada pelo <em>Trypanosoma cruzi</em>. Transmissão: fezes do inseto vetor (barbeiro) contaminadas, transfusão de sangue, via oral (alimentos contaminados), vertical. Fase aguda e crônica (pode afetar coração e sistema digestório). Prevenção: combate ao barbeiro, controle de qualidade do sangue, higiene alimentar.</li><li><strong>Malária (Paludismo):</strong> Causada por protozoários do gênero <em>Plasmodium</em>. Transmissão: picada da fêmea infectada do mosquito <em>Anopheles</em> (mosquito-prego). Sintomas: febre alta em ciclos, calafrios, sudorese. Prevenção: combate ao mosquito, uso de mosquiteiros, medicamentos profiláticos em áreas de risco.</li><li><strong>Amebíase:</strong> Causada pela <em>Entamoeba histolytica</em>. Transmissão: ingestão de cistos presentes em água ou alimentos contaminados. Sintomas: disenteria, dor abdominal. Prevenção: saneamento básico, higiene pessoal e dos alimentos.</li><li><strong>Outras:</strong> Leishmaniose, Giardíase, Toxoplasmose.</li></ul></div>`
  },
  {
    id: 'verminoses',
    conceptTitle: 'Verminoses',
    visualRepresentation: '🐛🐌💧🍳',
    definition: 'Doenças causadas por vermes parasitas, seus complexos ciclos de vida e as principais medidas profiláticas.',
    keywords: 'Helmintos, Esquistossomose, Ascaridíase, Teníase, Cisticercose, Saneamento',
    detailsHtml: `<div class="modal-content-custom">Verminoses são doenças causadas por helmintos (vermes) parasitas.<ul><li><strong>Esquistossomose (Barriga d'água):</strong> Causada pelo <em>Schistosoma mansoni</em>. Ciclo envolve caramujos de água doce como hospedeiros intermediários. Transmissão: penetração de larvas (cercárias) na pele em contato com água contaminada. Sintomas: problemas no fígado e intestino. Prevenção: saneamento básico, combate ao caramujo, evitar contato com águas suspeitas.</li><li><strong>Ascaridíase (Lombriga):</strong> Causada pela <em>Ascaris lumbricoides</em>. Transmissão: ingestão de ovos do verme presentes no solo, água ou alimentos contaminados. Sintomas: dores abdominais, obstrução intestinal em casos graves. Prevenção: saneamento básico, higiene pessoal e dos alimentos.</li><li><strong>Teníase/Cisticercose:</strong><ul><li><strong>Teníase:</strong> Causada pela forma adulta da <em>Taenia solium</em> (porco) ou <em>Taenia saginata</em> (boi) no intestino humano. Transmissão: ingestão de carne crua ou mal cozida contendo cisticercos.</li><li><strong>Cisticercose:</strong> Causada pela ingestão acidental dos ovos da <em>Taenia solium</em>, levando à formação de cisticercos em tecidos (músculos, cérebro). Mais grave.</li><li>Prevenção: Saneamento básico, cozimento adequado de carnes, fiscalização sanitária.</li></ul></li><li><strong>Outras:</strong> Ancilostomose (amarelão), Oxiurose.</li></ul></div>`
  },
  {
    id: 'dcnts',
    conceptTitle: 'Doenças Crônicas (DCNTs)',
    visualRepresentation: '❤️🩺🍎🏃',
    definition: 'Principais doenças de longa duração não infecciosas, seus fatores de risco e estratégias de prevenção e controle.',
    keywords: 'DCNT, Hipertensão, Diabetes, Câncer, Fatores de Risco, Estilo de Vida',
    detailsHtml: `<div class="modal-content-custom">As DCNTs são a principal causa de morte no mundo. Não são transmitidas de pessoa a pessoa e geralmente têm longa duração e desenvolvimento gradual.<ul><li><strong>Fatores de Risco Comuns:</strong> Tabagismo, consumo excessivo de álcool, alimentação não saudável (rica em sal, açúcar, gorduras), sedentarismo, poluição do ar.</li><li><strong>Hipertensão Arterial (Pressão Alta):</strong> Condição em que a pressão do sangue nas artérias está consistentemente elevada. Fator de risco para doenças cardíacas, AVCs e problemas renais. Prevenção/Controle: dieta saudável, atividade física, controle do peso, evitar sal em excesso, não fumar, medicamentos.</li><li><strong>Diabetes Mellitus:</strong> Doença caracterizada pela elevação da glicose no sangue (hiperglicemia). Pode ser Tipo 1 (deficiência de insulina) ou Tipo 2 (resistência à insulina, mais comum). Complicações: problemas cardíacos, renais, oculares, neurológicos. Prevenção/Controle: dieta equilibrada, atividade física, controle do peso, medicamentos/insulina.</li><li><strong>Câncer (Neoplasias Malignas):</strong> Grupo de doenças caracterizadas pelo crescimento descontrolado de células anormais que invadem tecidos e órgãos. Diversos tipos e fatores de risco (genéticos, ambientais, estilo de vida). Prevenção: evitar tabagismo e alcoolismo, dieta saudável, proteção solar, vacinas (HPV, Hepatite B), exames preventivos.</li></ul></div>`
  },
  {
    id: 'prevencaoPromocaoSaude',
    conceptTitle: 'Prevenção e Promoção da Saúde',
    visualRepresentation: '🛡️💉🧼🍎',
    definition: 'Estratégias e ações fundamentais para evitar doenças, controlar sua disseminação e promover um estilo de vida saudável.',
    keywords: 'Prevenção, Vacinação, Saneamento, Higiene, Controle de Vetores, Promoção da Saúde',
    detailsHtml: `<div class="modal-content-custom">Conjunto de ações destinadas a proteger indivíduos e comunidades contra doenças, reduzir sua incidência e mortalidade, e melhorar a qualidade de vida.<ul><li><strong>Níveis de Prevenção:</strong><ul><li><strong>Primária:</strong> Evitar o surgimento de doenças (ex: vacinação, educação em saúde, saneamento).</li><li><strong>Secundária:</strong> Detectar e tratar doenças em estágio inicial (ex: exames preventivos como Papanicolau, mamografia; tratamento precoce).</li><li><strong>Terciária:</strong> Reduzir incapacidades e complicações de doenças já estabelecidas (ex: reabilitação fisioterápica após AVC).</li></ul></li><li><strong>Principais Estratégias:</strong><ul><li><strong>Vacinação (Imunização):</strong> Uma das medidas mais eficazes. Estimula o sistema imunológico a produzir defesa contra agentes específicos.</li><li><strong>Saneamento Básico:</strong> Acesso à água potável, coleta e tratamento de esgoto, coleta de lixo. Fundamental para prevenir diversas doenças infecciosas e parasitárias.</li><li><strong>Higiene Pessoal e dos Alimentos:</strong> Lavar as mãos, cozinhar bem os alimentos, higienizar frutas e verduras.</li><li><strong>Controle de Vetores:</strong> Ações para reduzir a população de mosquitos, barbeiros, caramujos, etc.</li><li><strong>Educação em Saúde:</strong> Informar a população sobre riscos, formas de prevenção e hábitos saudáveis.</li><li><strong>Programas de Saúde Pública:</strong> Ações governamentais voltadas para a saúde da coletividade (ex: campanhas de vacinação, controle de endemias, programas de saúde da família).</li></ul></li></ul></div>`
  }
];

const DoencasPage = () => {
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
        <h1>Doenças: Entendendo para Prevenir</h1>
        <p>Um guia interativo sobre as principais doenças, suas causas e formas de prevenção. (Clique nos cards para saber mais)</p>
      </header>
      <main className={styles.conceptsGrid}>
        {doencasConcepts.map(concept => (
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
        <p>Conhecimento é a melhor ferramenta para a saúde. Previna-se e cuide-se! 🛡️❤️</p>
      </footer>
    </div>
  );
};

export default DoencasPage;
