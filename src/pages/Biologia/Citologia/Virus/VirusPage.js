import React, { useState } from 'react';
import styles from './VirusPage.module.css';
import ConceptCard from '../../../../components/ConceptCard/ConceptCard';
import ConceptModal from '../../../../components/ConceptCard/ConceptModal';

const virusConcepts = [
  {
    id: 'caracteristicas-gerais',
    conceptTitle: 'Características Gerais',
    visualRepresentation: '🦠🔬🧬',
    definition: 'Entidades acelulares, parasitas intracelulares obrigatórios, com material genético (DNA ou RNA) envolto por um capsídeo proteico.',
    keywords: 'Acelular, Parasita Intracelular, DNA, RNA, Capsídeo, Envelope',
    detailsHtml: `<div class="modal-content-custom">
      <p>Os <strong>Vírus</strong> são entidades biológicas microscópicas com características muito particulares:</p><ul><li><strong>Acelulares:</strong> Não possuem organização celular (sem citoplasma, organelas, etc.). São considerados por muitos como não vivos fora de uma célula hospedeira.</li><li><strong>Parasitas Intracelulares Obrigatórios:</strong> Só conseguem se replicar (reproduzir) dentro de células vivas de outros organismos (hospedeiros), utilizando a maquinaria metabólica da célula infectada.</li><li><strong>Material Genético:</strong> Possuem apenas um tipo de ácido nucleico, que pode ser DNA ou RNA (nunca ambos simultaneamente). Este material genético pode ser de fita simples ou dupla.</li><li><strong>Capsídeo:</strong> O material genético é protegido por um envoltório proteico chamado capsídeo, formado por subunidades proteicas chamadas capsômeros.</li><li><strong>Envelope Viral (em alguns):</strong> Alguns vírus, especialmente os que infectam animais, possuem um envelope externo lipoproteico derivado da membrana da célula hospedeira.</li><li><strong>Especificidade:</strong> Geralmente, os vírus são específicos para certos tipos de células ou hospedeiros.</li><li><strong>Ausência de Metabolismo Próprio:</strong> Não realizam atividades metabólicas como respiração ou síntese de proteínas por conta própria.</li></ul>
    </div>`
  },
  {
    id: 'estrutura-viral',
    conceptTitle: 'Estrutura Viral',
    visualRepresentation: '🔩🛡️🔑',
    definition: 'Compostos por material genético (DNA/RNA), capsídeo proteico e, em alguns, um envelope lipoproteico com espículas.',
    keywords: 'Vírion, Nucleocapsídeo, Capsômeros, Espículas, Transcriptase Reversa, RNA Polimerase',
    detailsHtml: `<div class="modal-content-custom">
      <p>A estrutura básica de um vírus (chamado vírion quando fora da célula) é relativamente simples, mas eficiente para proteger o material genético e facilitar a infecção.</p><h4>Componentes Principais:</h4><ul><li><strong>Ácido Nucleico (Genoma Viral):</strong> Pode ser DNA (fita simples ou dupla, linear ou circular) ou RNA (fita simples ou dupla, polaridade positiva ou negativa). Contém os genes virais.</li><li><strong>Capsídeo:</strong> Envoltório proteico que protege o ácido nucleico. A forma do capsídeo (simetria) é uma característica importante para a classificação viral (ex: icosaédrico, helicoidal, complexo). É formado por capsômeros. O conjunto do ácido nucleico e capsídeo é chamado de nucleocapsídeo.</li><li><strong>Envelope Viral (opcional):</strong> Presente em muitos vírus animais (ex: Influenza, HIV, Herpesvírus). É uma bicamada lipídica derivada da membrana plasmática ou nuclear da célula hospedeira, contendo proteínas virais (espículas ou glicoproteínas) inseridas. Essas espículas são importantes para a adsorção do vírus à célula hospedeira. Vírus sem envelope são chamados de vírus não envelopados ou nus.</li><li><strong>Enzimas Virais (em alguns):</strong> Alguns vírus carregam enzimas essenciais para sua replicação que não são encontradas na célula hospedeira ou que precisam agir logo após a infecção. Exemplos: transcriptase reversa (em retrovírus como o HIV), RNA polimerase RNA-dependente (em alguns vírus de RNA).</li></ul>
    </div>`
  },
  {
    id: 'classificacao-viral',
    conceptTitle: 'Classificação Viral',
    visualRepresentation: '🧬📜🏷️',
    definition: 'Agrupados por tipo de ácido nucleico (DNA/RNA), forma do capsídeo, presença de envelope e tipo de hospedeiro.',
    keywords: 'DNA Vírus, RNA Vírus, Retrovírus, Icosaédrico, Helicoidal, Complexo, Envelopado, Não Envelopado, Baltimore',
    detailsHtml: `<div class="modal-content-custom">
      <p>Os vírus são classificados com base em diversos critérios, visando organizar a imensa diversidade viral.</p><h4>Principais Critérios de Classificação:</h4><ol><li><strong>Tipo de Ácido Nucleico:</strong><ul><li><strong>DNA Vírus:</strong> Genoma de DNA (ex: Herpesvírus, Adenovírus, Poxvírus, Papilomavírus).</li><li><strong>RNA Vírus:</strong> Genoma de RNA (ex: Coronavírus, Influenza, Dengue, Sarampo, Poliomielite, Raiva).</li><li><strong>Retrovírus:</strong> RNA vírus que utilizam a enzima transcriptase reversa para produzir uma cópia de DNA a partir do seu RNA genômico (ex: HIV).</li></ul></li><li><strong>Forma do Capsídeo (Simetria):</strong><ul><li><strong>Icosaédrica:</strong> Forma poliédrica com 20 faces triangulares (ex: Adenovírus, Herpesvírus).</li><li><strong>Helicoidal:</strong> Capsômeros arranjados em espiral ao redor do ácido nucleico (ex: Vírus do mosaico do tabaco, Influenza).</li><li><strong>Complexa:</strong> Estrutura mais elaborada, não puramente icosaédrica nem helicoidal (ex: Bacteriófagos, Poxvírus).</li></ul></li><li><strong>Presença ou Ausência de Envelope:</strong><ul><li><strong>Vírus Envelopados:</strong> Possuem envelope lipoproteico (ex: HIV, Influenza, Coronavírus).</li><li><strong>Vírus Não Envelopados (Nus):</strong> Não possuem envelope (ex: Adenovírus, Papilomavírus).</li></ul></li><li><strong>Tipo de Hospedeiro:</strong> Vírus de bactérias (bacteriófagos), de fungos (micovírus), de plantas, de animais (incluindo humanos).</li><li><strong>Estratégia de Replicação:</strong> O Sistema de Classificação de Baltimore agrupa os vírus em 7 classes com base no tipo de genoma e como ele é replicado para produzir mRNA.</li></ol>
    </div>`
  },
  {
    id: 'ciclo-litico',
    conceptTitle: 'Ciclo Lítico',
    visualRepresentation: '💥🧬➡️🦠🦠',
    definition: 'Ciclo de replicação viral que leva à produção de novos vírus e à destruição (lise) da célula hospedeira.',
    keywords: 'Adsorção, Penetração, Biossíntese, Maturação, Lise, Vírus Virulento, Bacteriófago',
    detailsHtml: `<div class="modal-content-custom">
      <p>O <strong>Ciclo Lítico</strong> é uma das duas principais formas de replicação viral, resultando na destruição (lise) da célula hospedeira e liberação de novas partículas virais (vírions).</p><h4>Etapas do Ciclo Lítico (ex: bacteriófagos):</h4><ol><li><strong>Adsorção (ou Ligação):</strong> O vírus se liga a receptores específicos na superfície da célula hospedeira.</li><li><strong>Penetração (ou Injeção):</strong> O vírus ou apenas seu material genético entra na célula hospedeira. Em bacteriófagos, o capsídeo permanece fora e apenas o DNA é injetado. Em vírus animais, pode ocorrer por endocitose ou fusão do envelope.</li><li><strong>Biossíntese (ou Replicação):</strong> O material genético viral assume o controle da maquinaria celular. A célula hospedeira passa a sintetizar os componentes virais: ácidos nucleicos virais e proteínas do capsídeo e enzimas virais. O DNA da célula hospedeira é frequentemente degradado.</li><li><strong>Maturação (ou Montagem):</strong> Os componentes virais recém-sintetizados são montados, formando novas partículas virais completas (vírions).</li><li><strong>Liberação (ou Lise):</strong> Os novos vírions são liberados da célula hospedeira. Em muitos casos, isso ocorre pela lise (rompimento) da célula, causada por enzimas virais (como a lisozima). Em vírus envelopados, a liberação pode ocorrer por brotamento, onde o vírus adquire seu envelope da membrana celular.</li></ol><p>Vírus que se replicam exclusivamente pelo ciclo lítico são chamados de <strong>vírus virulentos</strong>.</p>
    </div>`
  },
  {
    id: 'ciclo-lisogenico',
    conceptTitle: 'Ciclo Lisogênico',
    visualRepresentation: '🤫🧬➡️🧬+🦠',
    definition: 'Ciclo de replicação viral onde o material genético viral se integra ao da célula hospedeira (profago/provírus) e é replicado com ela, sem destruição imediata.',
    keywords: 'Profago, Provírus, Integração, Latência, Vírus Temperado, Indução',
    detailsHtml: `<div class="modal-content-custom">
      <p>O <strong>Ciclo Lisogênico</strong> é uma forma de replicação viral onde o material genético do vírus se integra ao genoma da célula hospedeira, permanecendo em estado latente (não ativo) por um período, sem causar a destruição imediata da célula.</p><h4>Etapas do Ciclo Lisogênico (ex: bacteriófagos temperados):</h4><ol><li><strong>Adsorção e Penetração:</strong> Semelhantes ao ciclo lítico.</li><li><strong>Integração (Lisogenia):</strong> O DNA viral (ou uma cópia de DNA do RNA viral, no caso de retrovírus) se integra ao cromossomo da célula hospedeira. O DNA viral integrado é chamado de <strong>profago</strong> (em bacteriófagos) ou <strong>provírus</strong> (em vírus animais).</li><li><strong>Replicação Conjunta:</strong> A célula hospedeira continua suas atividades normais, incluindo a divisão celular. Ao se dividir, o profago/provírus é replicado junto com o DNA da célula hospedeira e transmitido às células-filhas. A célula infectada é chamada de célula lisogênica.</li><li><strong>Indução (Opcional):</strong> Sob certas condições (ex: estresse celular, radiação UV), o profago/provírus pode ser ativado, excisado do genoma hospedeiro e iniciar um ciclo lítico, levando à produção de novos vírions e lise celular.</li></ol><p>Vírus capazes de realizar o ciclo lisogênico são chamados de <strong>vírus temperados</strong> ou <strong>lisogênicos</strong>. Este ciclo permite que o vírus persista na população hospedeira sem causar doença imediata.</p>
    </div>`
  },
  {
    id: 'viroses-humanas',
    conceptTitle: 'Viroses Humanas',
    visualRepresentation: '🤧🤒💉',
    definition: 'Doenças causadas por vírus, como gripe, dengue, HIV/AIDS, COVID-19. Prevenção inclui vacinação e hábitos de higiene.',
    keywords: 'Gripe, Dengue, HIV, COVID-19, Hepatite, Sarampo, Vacinação, Prevenção',
    detailsHtml: `<div class="modal-content-custom">
      <p>Os vírus são causadores de inúmeras doenças em humanos, conhecidas como <strong>viroses</strong>. A gravidade varia de infecções leves a condições fatais.</p><h4>Exemplos de Viroses Comuns e Importantes:</h4><ul><li><strong>Gripe (Influenza):</strong> Causada pelo vírus Influenza. Transmissão respiratória. Sintomas: febre, tosse, dores. Prevenção: vacinação anual.</li><li><strong>Resfriado Comum:</strong> Causado por diversos vírus (Rinovírus, Coronavírus não-SARS). Transmissão respiratória. Sintomas mais leves que a gripe.</li><li><strong>Dengue, Zika, Chikungunya:</strong> Arboviroses transmitidas pelo mosquito <em>Aedes aegypti</em>. Sintomas variados, podem incluir febre, dores, manchas na pele. Prevenção: combate ao mosquito vetor.</li><li><strong>HIV/AIDS:</strong> Causada pelo Vírus da Imunodeficiência Humana (HIV), um retrovírus. Ataca o sistema imunológico. Transmissão: sexual, sanguínea, vertical. Prevenção: preservativos, não compartilhamento de seringas, tratamento antirretroviral.</li><li><strong>COVID-19:</strong> Causada pelo SARS-CoV-2. Transmissão respiratória. Sintomas variados, pode ser grave. Prevenção: vacinação, máscaras, distanciamento.</li><li><strong>Hepatites Virais (A, B, C):</strong> Inflamação do fígado. Transmissão variada (fecal-oral para A; sanguínea/sexual para B e C). Prevenção: vacinas (A, B), saneamento, sexo seguro.</li><li><strong>Sarampo, Caxumba, Rubéola:</strong> Doenças exantemáticas. Prevenção: vacina tríplice viral (SCR).</li><li><strong>Herpes (Simples e Zoster):</strong> Infecções cutâneas e mucosas recorrentes.</li><li><strong>Poliomielite (Paralisia Infantil):</strong> Pode causar paralisia. Prevenção: vacinação.</li></ul><h4>Medidas Gerais de Prevenção:</h4><ul><li><strong>Vacinação:</strong> Principal forma de prevenção para muitas viroses.</li><li><strong>Higiene Pessoal:</strong> Lavar as mãos, etiqueta respiratória.</li><li><strong>Saneamento Básico.</strong></li><li><strong>Controle de Vetores</strong> (ex: mosquitos).</li><li><strong>Sexo Seguro.</strong></li><li><strong>Não compartilhamento de objetos perfurocortantes.</strong></li></ul>
    </div>`
  }
];

const VirusPage = () => {
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
        <h1>Vírus</h1>
        <p>Os Piratas da Biologia: Entidades na Fronteira da Vida!</p>
      </header>
      <main className={styles.conceptsGrid}>
        {virusConcepts.map(concept => (
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
        <p>Desvendando os mistérios dos gigantes microscópicos! 🔬🌍</p>
      </footer>
    </div>
  );
};

export default VirusPage;
