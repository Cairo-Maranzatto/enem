import React, { useState } from 'react';
import styles from './BiotecnologiaPage.module.css';
import ConceptCard from '../../../../components/ConceptCard/ConceptCard';
import ConceptModal from '../../../../components/ConceptCard/ConceptModal';

const biotecnologiaConcepts = [
  {
    id: 'conceitosHistorico',
    conceptTitle: 'Conceitos e Histórico',
    visualRepresentation: '🔬🧬⏳🎨',
    definition: 'Uso de organismos ou seus componentes para criar produtos e processos úteis, desde a antiguidade até a era molecular.',
    keywords: 'Definição, História, Cores da Biotecnologia, Multidisciplinar',
    detailsHtml: `<div class="modal-content-custom"><strong>Biotecnologia</strong> é o conjunto de tecnologias que utilizam sistemas biológicos, organismos vivos ou seus derivados para criar ou modificar produtos ou processos para usos específicos. É uma área multidisciplinar que integra conhecimentos da biologia, química, engenharia, informática, entre outras.<ul><li><strong>Histórico:</strong> Embora o termo seja moderno, práticas biotecnológicas são antigas: fermentação para pães, vinhos e queijos (Biotecnologia Clássica). A Biotecnologia Moderna surge com os avanços da genética molecular (década de 1970), como a técnica do DNA recombinante.</li><li><strong>Divisões por Cores (simbólicas):</strong><ul><li><strong>Biotecnologia Vermelha:</strong> Aplicações na saúde (medicamentos, vacinas, diagnósticos, terapias gênicas).</li><li><strong>Biotecnologia Verde:</strong> Aplicações na agricultura e alimentação (plantas transgênicas, biofertilizantes).</li><li><strong>Biotecnologia Branca/Industrial:</strong> Processos industriais (enzimas, biocombustíveis, biomateriais).</li><li><strong>Biotecnologia Azul:</strong> Aplicações em ambientes aquáticos e marinhos.</li><li><strong>Outras cores:</strong> Amarela (alimentos), Dourada (bioinformática), etc.</li></ul></li></ul></div>`
  },
  {
    id: 'engenhariaGenetica',
    conceptTitle: 'Engenharia Genética',
    visualRepresentation: '✂️🧬🔗➕',
    definition: 'Manipulação direta do DNA para criar moléculas recombinantes com genes de diferentes origens.',
    keywords: 'DNA Recombinante, Enzimas de Restrição, DNA Ligase, Vetores, Transgênicos',
    detailsHtml: `<div class="modal-content-custom">A <strong>Engenharia Genética</strong> é o conjunto de técnicas que permitem a manipulação direta do material genético (DNA e RNA) de um organismo. A principal ferramenta é a <strong>tecnologia do DNA Recombinante</strong>.<ul><li><strong>DNA Recombinante (rDNA):</strong> Molécula de DNA formada pela combinação de fragmentos de DNA de fontes diferentes.</li><li><strong>Etapas Básicas da Produção de rDNA:</strong><ol><li><strong>Isolamento do Gene de Interesse:</strong> Identificar e extrair o gene que codifica a proteína ou característica desejada.</li><li><strong>Escolha e Preparo do Vetor:</strong> Um vetor (geralmente um plasmídeo bacteriano ou vírus) é usado para transportar o gene de interesse para a célula hospedeira. O vetor é cortado com enzimas de restrição.</li><li><strong>Ligação do Gene ao Vetor:</strong> O gene de interesse é inserido no vetor usando a enzima DNA ligase, formando o DNA recombinante.</li><li><strong>Introdução do rDNA na Célula Hospedeira:</strong> O vetor recombinante é introduzido em uma célula hospedeira (ex: bactéria, levedura), processo chamado transformação ou transdução.</li><li><strong>Seleção e Clonagem das Células Recombinantes:</strong> As células que incorporaram o rDNA são selecionadas (ex: por resistência a antibióticos) e cultivadas para produzir muitas cópias (clones).</li><li><strong>Expressão do Gene:</strong> As células hospedeiras produzem a proteína codificada pelo gene de interesse (ex: insulina humana produzida por bactérias).</li></ol></li><li><strong>Enzimas de Restrição:</strong> 'Tesouras moleculares' que cortam o DNA em sequências específicas.</li><li><strong>DNA Ligase:</strong> 'Cola molecular' que une fragmentos de DNA.</li></ul></div>`
  },
  {
    id: 'clonagem',
    conceptTitle: 'Clonagem',
    visualRepresentation: '🐑🧬➡️🐑🔬',
    definition: 'Produção de cópias geneticamente idênticas de DNA, células ou organismos (reprodutiva ou terapêutica).',
    keywords: 'DNA Molecular, Celular, Reprodutiva, Terapêutica, TNCS, Dolly, Ética',
    detailsHtml: `<div class="modal-content-custom"><strong>Clonagem</strong> é o processo de produção de cópias geneticamente idênticas de um organismo, célula ou molécula de DNA.<ul><li><strong>Clonagem de DNA (Molecular):</strong> Produção de múltiplas cópias de um fragmento específico de DNA, geralmente usando a técnica do DNA recombinante e a PCR (Reação em Cadeia da Polimerase).</li><li><strong>Clonagem Celular:</strong> Cultivo de células em laboratório para produzir uma população de células idênticas.</li><li><strong>Clonagem Reprodutiva:</strong> Criação de um novo organismo geneticamente idêntico a outro já existente. A técnica mais conhecida é a <strong>Transferência Nuclear de Células Somáticas (TNCS)</strong>, usada na clonagem da ovelha Dolly.<ul><li><strong>TNCS:</strong> O núcleo de uma célula somática (não reprodutiva) do indivíduo a ser clonado é transferido para um óvulo anucleado (sem núcleo). O embrião resultante é implantado em um útero de 'mãe de aluguel'.</li></ul></li><li><strong>Clonagem Terapêutica:</strong> Produção de células-tronco embrionárias geneticamente idênticas às de um paciente, com o objetivo de tratar doenças. O embrião clonado não é implantado para gerar um novo indivíduo, mas sim utilizado como fonte de células-tronco para pesquisa e terapia.</li><li><strong>Desafios e Ética:</strong> A clonagem reprodutiva em humanos é amplamente proibida e levanta sérias questões éticas. A clonagem terapêutica também gera debates.</li></ul></div>`
  },
  {
    id: 'celulasTronco',
    conceptTitle: 'Células-Tronco',
    visualRepresentation: '👶🔄➡️🧠❤️',
    definition: 'Células indiferenciadas capazes de se auto-renovar e diferenciar em diversos tipos celulares, com potencial para medicina regenerativa.',
    keywords: 'Potencialidade, Embrionárias, Adultas, iPSCs, Medicina Regenerativa, Terapia Celular',
    detailsHtml: `<div class="modal-content-custom"><strong>Células-Tronco</strong> são células indiferenciadas com duas capacidades principais: <strong>autorrenovação</strong> (dividir-se e gerar novas células-tronco) e <strong>diferenciação</strong> (transformar-se em diferentes tipos celulares especializados do corpo).<ul><li><strong>Tipos de Células-Tronco quanto à Potencialidade:</strong><ul><li><strong>Totipotentes:</strong> Podem diferenciar-se em todos os tipos celulares do organismo, incluindo os tecidos extraembrionários (placenta). Ex: zigoto e primeiras células embrionárias.</li><li><strong>Pluripotentes:</strong> Podem diferenciar-se em quase todos os tipos celulares do corpo, exceto os tecidos extraembrionários. Ex: células-tronco embrionárias (isoladas da massa celular interna do blastocisto).</li><li><strong>Multipotentes:</strong> Podem diferenciar-se em alguns tipos celulares relacionados. Ex: células-tronco hematopoiéticas (medula óssea) geram células sanguíneas.</li><li><strong>Oligopotentes:</strong> Podem diferenciar-se em poucos tipos celulares.</li><li><strong>Unipotentes:</strong> Podem gerar apenas um tipo celular (células progenitoras).</li></ul></li><li><strong>Fontes de Células-Tronco:</strong> Embrionárias, adultas (medula óssea, sangue do cordão umbilical, tecido adiposo), e Células-Tronco Pluripotentes Induzidas (iPSCs) – células adultas reprogramadas para se comportarem como embrionárias.</li><li><strong>Medicina Regenerativa:</strong> Campo que visa reparar ou substituir tecidos e órgãos danificados por doenças ou lesões, utilizando células-tronco, engenharia de tecidos e outros biomateriais.</li></ul></div>`
  },
  {
    id: 'aplicacoesBiotecnologia',
    conceptTitle: 'Aplicações Diversas',
    visualRepresentation: '💊🌿🏭💧',
    definition: 'Impacto em saúde, agricultura, indústria e meio ambiente, com medicamentos, transgênicos, biocombustíveis e biorremediação.',
    keywords: 'Saúde, Agricultura, Indústria, Meio Ambiente, OGMs, Terapias',
    detailsHtml: `<div class="modal-content-custom">A biotecnologia tem um vasto campo de aplicações, transformando diversas áreas:<ul><li><strong>Saúde (Biotecnologia Vermelha):</strong><ul><li>Produção de medicamentos (insulina, hormônio do crescimento, anticorpos monoclonais, vacinas recombinantes).</li><li>Desenvolvimento de testes de diagnóstico molecular (PCR para doenças infecciosas, testes genéticos).</li><li>Terapias gênicas e celulares para doenças genéticas e câncer.</li></ul></li><li><strong>Agricultura e Alimentação (Biotecnologia Verde):</strong><ul><li>Desenvolvimento de plantas transgênicas (OGMs) mais produtivas, resistentes a pragas, herbicidas ou condições ambientais adversas (seca, salinidade).</li><li>Melhoramento genético de plantas e animais.</li><li>Produção de biofertilizantes e biopesticidas.</li><li>Alimentos funcionais e nutracêuticos.</li></ul></li><li><strong>Indústria (Biotecnologia Branca):</strong><ul><li>Produção de enzimas industriais (detergentes, têxteis, papel).</li><li>Desenvolvimento de biocombustíveis (etanol, biodiesel).</li><li>Produção de bioplásticos e outros biomateriais.</li></ul></li><li><strong>Meio Ambiente (Biotecnologia Azul/Cinza):</strong><ul><li>Biorremediação (uso de microrganismos para limpar áreas contaminadas).</li><li>Tratamento de efluentes e resíduos.</li><li>Desenvolvimento de biossensores para monitoramento ambiental.</li></ul></li></ul></div>`
  },
  {
    id: 'bioeticaSociedade',
    conceptTitle: 'Bioética e Sociedade',
    visualRepresentation: '⚖️🌍🤝🤔',
    definition: 'Debates sobre os limites éticos, legais e sociais do uso da biotecnologia, como OGMs, clonagem e terapia gênica.',
    keywords: 'Ética, OGMs, Clonagem, Células-Tronco, Privacidade Genética, Regulamentação',
    detailsHtml: `<div class="modal-content-custom">O avanço rápido da biotecnologia levanta importantes questões éticas, legais e sociais (ELSI - Ethical, Legal, and Social Implications).<ul><li><strong>Principais Questões Éticas:</strong><ul><li><strong>Organismos Geneticamente Modificados (OGMs):</strong> Segurança alimentar, impacto ambiental (fluxo gênico, resistência de pragas), rotulagem, acesso à tecnologia.</li><li><strong>Clonagem Humana:</strong> Dignidade humana, individualidade, riscos à saúde do clone.</li><li><strong>Células-Tronco Embrionárias:</strong> Status moral do embrião, destruição de embriões para pesquisa.</li><li><strong>Testes Genéticos:</strong> Privacidade genética, discriminação (seguros, emprego), aconselhamento genético.</li><li><strong>Terapia Gênica:</strong> Modificação da linhagem germinativa (alterações hereditárias), 'melhoramento' genético versus terapia.</li><li><strong>Patenteamento de Genes e Organismos Vivos:</strong> Acesso a tecnologias, monopólios.</li></ul></li><li><strong>Necessidade de Regulamentação:</strong> Leis e diretrizes são cruciais para garantir o uso responsável e seguro da biotecnologia, equilibrando os benefícios potenciais com os riscos e preocupações éticas.</li><li><strong>Percepção Pública e Educação:</strong> A compreensão pública da biotecnologia é fundamental para um debate informado e para a aceitação de tecnologias benéficas.</li></ul></div>`
  }
];

const BiotecnologiaPage = () => {
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
        <h1>Biotecnologia</h1>
        <p>A ciência que transforma a vida! (Clique nos cards para saber mais)</p>
      </header>
      <main className={styles.conceptsGrid}>
        {biotecnologiaConcepts.map(concept => (
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
        <p>Explorando as fronteiras da ciência para um futuro inovador. 🔬💡🌍</p>
      </footer>
    </div>
  );
};

export default BiotecnologiaPage;
