import React, { useState } from 'react';
import styles from './MembranaPlasmaticaPage.module.css';
import ConceptCard from '../../../../components/ConceptCard/ConceptCard'; // Ajustado o caminho relativo
import ConceptModal from '../../../../components/ConceptCard/ConceptModal'; // Ajustado o caminho relativo

const membranaPlasmaticaConcepts = [
  {
    id: 'introducaoCitologia',
    conceptTitle: 'Introdução à Citologia',
    visualRepresentation: '🔬📜🆚',
    definition: 'Fundamentos da Citologia: a célula como unidade da vida (Teoria Celular) e os dois tipos básicos de organização celular (Procariontes e Eucariontes).',
    keywords: 'Teoria Celular, Célula, Procarionte, Eucarionte, Nucleoide, Carioteca, Organelas',
    detailsHtml: `<p>A <strong>Citologia</strong> (ou Biologia Celular) é o ramo da Biologia que estuda as células, as unidades fundamentais da vida.</p><h4>Teoria Celular: Os Pilares da Biologia Celular</h4><p>A Teoria Celular é um dos conceitos unificadores da Biologia e estabelece que:</p><ul><li><strong>Todos os seres vivos são formados por células:</strong> Desde organismos unicelulares simples até os multicelulares complexos.</li><li><strong>As células são as unidades funcionais e estruturais dos seres vivos:</strong> Todas as atividades vitais ocorrem dentro das células ou dependem delas.</li><li><strong>Toda célula origina-se de outra célula preexistente:</strong> Através do processo de divisão celular.</li></ul><h4>Tipos Fundamentais de Células: Procariontes vs. Eucariontes</h4><p>Com base na sua organização interna, as células são classificadas em dois tipos principais:</p><ol><li><strong>Células Procariontes (ou Procarióticas):</strong><ul><li><strong>Estrutura:</strong> Mais simples e geralmente menores.</li><li><strong>Núcleo:</strong> Ausência de um núcleo verdadeiro delimitado por membrana (carioteca). O material genético (DNA circular) fica disperso em uma região do citoplasma chamada <strong>nucleoide</strong>.</li><li><strong>Organelas:</strong> Ausência de organelas membranosas (como mitocôndrias, retículo endoplasmático, complexo de Golgi, lisossomos). Possuem <strong>ribossomos</strong> (para síntese de proteínas), que não são membranosos.</li><li><strong>Exemplos:</strong> Bactérias e Arqueas (Archaea).</li></ul></li><li><strong>Células Eucariontes (ou Eucarióticas):</strong><ul><li><strong>Estrutura:</strong> Mais complexas e geralmente maiores.</li><li><strong>Núcleo:</strong> Presença de um núcleo verdadeiro, individualizado e delimitado pela <strong>carioteca</strong> (envoltório nuclear), onde o material genético (DNA linear organizado em cromossomos) está contido.</li><li><strong>Organelas:</strong> Presença de diversas <strong>organelas membranosas</strong> no citoplasma, cada uma com funções especializadas (ex: mitocôndrias para respiração celular, retículo endoplasmático para síntese e transporte, complexo de Golgi para processamento e secreção, lisossomos para digestão intracelular). Também possuem ribossomos.</li><li><strong>Exemplos:</strong> Células de animais, plantas, fungos e protistas.</li></ul></li></ol><p>Compreender esses conceitos básicos é essencial para o estudo de qualquer aspecto da Biologia Celular, incluindo a membrana plasmática.</p>`
  },
  {
    id: 'visaoGeralMembrana',
    conceptTitle: 'Visão Geral',
    visualRepresentation: '🛡️🔬🧱',
    definition: 'Estrutura fina e elástica que envolve as células, separando os meios intra e extracelular e controlando a passagem de substâncias.',
    keywords: 'Envelope Celular, Mosaico Fluido, Permeabilidade Seletiva',
    detailsHtml: `A <strong>Membrana Plasmática</strong>, também conhecida como plasmalema, é uma película delicada e complexa que delimita todas as células vivas, tanto procarióticas quanto eucarióticas. Ela não é apenas uma barreira passiva, mas uma estrutura dinâmica e fundamental para a vida celular.<ul><li><strong>Funções Essenciais:</strong> Delimitar o conteúdo celular, proteger a célula, controlar a entrada e saída de substâncias (permeabilidade seletiva), permitir o reconhecimento celular e a comunicação entre células.</li><li><strong>Modelo do Mosaico Fluido:</strong> Proposto por Singer e Nicolson em 1972, descreve a membrana como uma estrutura fluida onde proteínas estão imersas ou atravessam uma bicamada lipídica.</li></ul>`
  },
  {
    id: 'composicaoQuimicaMembrana',
    conceptTitle: 'Composição Química',
    visualRepresentation: '🧪🧬🔩',
    definition: 'Principalmente composta por lipídios (fosfolipídios, colesterol) e proteínas, com carboidratos associados (glicocálix).',
    keywords: 'Fosfolipídios, Proteínas, Colesterol, Glicocálix',
    detailsHtml: `A <strong>Composição Química</strong> da membrana plasmática é crucial para suas propriedades e funções. Os principais componentes são:<ul><li><strong>Fosfolipídios:</strong> Formam a bicamada lipídica, a estrutura básica da membrana. Cada fosfolipídio possui uma 'cabeça' hidrofílica (afinidade com a água) e duas 'caudas' hidrofóbicas (aversão à água), arranjadas com as caudas voltadas para o interior da bicamada.</li><li><strong>Proteínas:</strong> Podem ser <strong>integrais</strong> (atravessam a membrana) ou <strong>periféricas</strong> (associadas a uma das superfícies). Desempenham diversas funções, como transporte, atividade enzimática, recepção de sinais, reconhecimento celular e adesão.</li><li><strong>Colesterol (em células animais):</strong> Intercalado entre os fosfolipídios, confere estabilidade à membrana, diminuindo sua fluidez excessiva e impedindo sua solidificação em baixas temperaturas.</li><li><strong>Glicocálix (em células animais):</strong> Camada de carboidratos (oligossacarídeos) ligados a lipídios (glicolipídios) ou proteínas (glicoproteínas) na superfície externa da membrana. Participa no reconhecimento celular, proteção contra danos mecânicos e químicos, e adesão celular.</li></ul>`
  },
  {
    id: 'modeloMosaicoFluido',
    conceptTitle: 'Modelo do Mosaico Fluido',
    visualRepresentation: '🌊🧩🖼️',
    definition: 'Modelo que descreve a membrana como uma bicamada lipídica fluida com proteínas inseridas ou associadas, movendo-se lateralmente.',
    keywords: 'Singer-Nicolson, Bicamada Lipídica, Fluidez, Proteínas Móveis',
    detailsHtml: `O <strong>Modelo do Mosaico Fluido</strong>, proposto por S. Jonathan Singer e Garth L. Nicolson em 1972, é o modelo mais aceito para descrever a estrutura da membrana plasmática.<ul><li><strong>Bicamada Lipídica Fluida:</strong> Os fosfolipídios não estão fixos, mas podem se mover lateralmente, girar e até trocar de camada (flip-flop, raramente). Essa fluidez é essencial para muitas funções da membrana, como a fusão de membranas e a movimentação de proteínas.</li><li><strong>Mosaico de Proteínas:</strong> As proteínas estão dispersas na bicamada lipídica, como peças de um mosaico. Algumas atravessam a membrana (transmembrana), outras estão parcialmente imersas ou apenas ligadas à superfície. Essa disposição permite uma grande variedade de funções.</li><li><strong>Assimetria:</strong> A distribuição de lipídios, proteínas e carboidratos não é igual nas duas faces da membrana, conferindo-lhe assimetria funcional.</li></ul>A fluidez da membrana é influenciada pela temperatura e pela composição lipídica (ex: presença de colesterol e ácidos graxos insaturados).`
  },
  {
    id: 'funcoesMembrana',
    conceptTitle: 'Funções da Membrana',
    visualRepresentation: '🛡️🚦📡🤝',
    definition: 'Envolve proteção, permeabilidade seletiva, transporte, reconhecimento celular, adesão e comunicação.',
    keywords: 'Proteção, Transporte, Reconhecimento, Comunicação',
    detailsHtml: `A membrana plasmática desempenha uma miríade de <strong>Funções Vitais</strong> para a célula:<ul><li><strong>Delimitação e Proteção:</strong> Separa o meio intracelular (citoplasma) do meio extracelular, mantendo a integridade celular e protegendo-a contra agressões.</li><li><strong>Permeabilidade Seletiva:</strong> Controla rigorosamente a entrada e saída de substâncias, permitindo a passagem de algumas moléculas e íons enquanto barra outras. Essencial para manter a homeostase celular.</li><li><strong>Transporte de Substâncias:</strong> Realiza o transporte ativo e passivo de íons e moléculas através da membrana.</li><li><strong>Reconhecimento Celular:</strong> Através do glicocálix e de proteínas específicas, permite que as células se reconheçam, fundamental para a formação de tecidos e para o sistema imune.</li><li><strong>Adesão Celular:</strong> Permite que células vizinhas se unam para formar tecidos, através de junções celulares especializadas.</li><li><strong>Recepção de Sinais (Transdução de Sinal):</strong> Possui proteínas receptoras que se ligam a moléculas sinalizadoras (ex: hormônios), desencadeando respostas no interior da célula.</li><li><strong>Atividade Enzimática:</strong> Algumas proteínas de membrana possuem atividade catalítica.</li></ul>`
  },
  {
    id: 'transportePassivo',
    conceptTitle: 'Transporte Passivo',
    visualRepresentation: '🚶‍♂️↘️💧',
    definition: 'Movimento de substâncias através da membrana sem gasto de energia (ATP), a favor do gradiente de concentração.',
    keywords: 'Difusão Simples, Difusão Facilitada, Osmose, Gradiente',
    detailsHtml: `O <strong>Transporte Passivo</strong> ocorre quando substâncias atravessam a membrana plasmática sem que a célula precise gastar energia metabólica (ATP), geralmente a favor de um gradiente de concentração, elétrico ou de pressão.<ul><li><strong>Difusão Simples:</strong> Movimento de pequenas moléculas apolares (ex: O₂, CO₂, lipídios) diretamente através da bicamada lipídica, do meio mais concentrado para o menos concentrado.</li><li><strong>Difusão Facilitada:</strong> Transporte de moléculas maiores ou polares (ex: glicose, aminoácidos) e íons através da membrana com o auxílio de proteínas transportadoras (permeases ou proteínas canal). Também ocorre a favor do gradiente de concentração. As proteínas canal formam poros hidrofílicos, enquanto as permeases se ligam à substância e mudam sua conformação para transportá-la.</li><li><strong>Osmose:</strong> É a difusão da água através de uma membrana semipermeável, do meio menos concentrado em soluto (hipotônico) para o meio mais concentrado em soluto (hipertônico). A água se move para diluir o meio mais concentrado, buscando o equilíbrio osmótico. Proteínas chamadas aquaporinas facilitam a osmose.</li></ul>`
  },
  {
    id: 'transporteAtivo',
    conceptTitle: 'Transporte Ativo',
    visualRepresentation: '🏋️‍♂️↗️🔋',
    definition: 'Movimento de substâncias através da membrana com gasto de energia (ATP), geralmente contra o gradiente de concentração.',
    keywords: 'Bomba Na⁺/K⁺, ATP, Contragradiente, Endocitose, Exocitose',
    detailsHtml: `O <strong>Transporte Ativo</strong> é o movimento de substâncias através da membrana plasmática que requer gasto de energia pela célula, geralmente na forma de ATP. Esse tipo de transporte pode ocorrer contra o gradiente de concentração, ou seja, do local de menor concentração para o de maior concentração.<ul><li><strong>Transporte Ativo Primário:</strong> Utiliza diretamente a energia da hidrólise do ATP para mover substâncias. O exemplo mais clássico é a <strong>Bomba de Sódio e Potássio (Na⁺/K⁺ ATPase)</strong>, que bombeia íons sódio (Na⁺) para fora da célula e íons potássio (K⁺) para dentro, mantendo os gradientes desses íons essenciais para funções como a transmissão de impulsos nervosos.</li><li><strong>Transporte Ativo Secundário (Cotransporte):</strong> Utiliza a energia armazenada em um gradiente iônico (geralmente de Na⁺ ou H⁺, estabelecido por transporte ativo primário) para mover outra substância contra seu próprio gradiente. Pode ser <strong>simporte</strong> (as duas substâncias são transportadas na mesma direção) ou <strong>antiporte</strong> (as substâncias são transportadas em direções opostas).</li><li><strong>Transporte em Massa (ou Vesicular):</strong> Envolve a formação de vesículas para transportar grandes moléculas ou partículas.<ul><li><strong>Endocitose:</strong> A célula engloba substâncias do meio externo, formando vesículas. Inclui a <strong>fagocitose</strong> ('comer celular', para partículas sólidas grandes) e a <strong>pinocitose</strong> ('beber celular', para fluidos e solutos dissolvidos). A endocitose mediada por receptor é um tipo específico de pinocitose.</li><li><strong>Exocitose:</strong> Vesículas contendo substâncias produzidas pela célula (ex: hormônios, neurotransmissores, muco) se fundem com a membrana plasmática, liberando seu conteúdo no meio extracelular.</li></ul></li></ul>`
  },
  {
    id: 'especializacoesMembrana',
    conceptTitle: 'Especializações',
    visualRepresentation: '🔗🔬〰️',
    definition: 'Modificações como microvilosidades e junções celulares que conferem funções específicas à membrana.',
    keywords: 'Microvilosidades, Junções Celulares, Glicocálix, Desmossomos',
    detailsHtml: `A membrana plasmática de certas células pode apresentar <strong>Especializações</strong> que aumentam sua eficiência em funções específicas:<ul><li><strong>Microvilosidades:</strong> Dobras microscópicas da membrana que aumentam enormemente a superfície de contato, comuns em células de absorção (ex: intestino delgado, túbulos renais).</li><li><strong>Junções Celulares:</strong> Estruturas que unem células vizinhas ou conectam a célula à matriz extracelular.<ul><li><strong>Junções de Adesão (Desmossomos, Hemidesmossomos, Junções Aderentes):</strong> Conferem resistência mecânica aos tecidos, unindo fortemente as células.</li><li><strong>Junções Impermeáveis (Junções Oclusivas ou Zônulas de Oclusão):</strong> Vedam o espaço entre as células, impedindo a passagem de substâncias por entre elas (ex: epitélio intestinal, bexiga).</li><li><strong>Junções Comunicantes (Gap Junctions):</strong> Formam canais que permitem a passagem direta de íons e pequenas moléculas entre citoplasmas de células adjacentes, possibilitando a comunicação rápida (ex: músculo cardíaco, neurônios).</li></ul></li><li><strong>Invaginações e Evaginações:</strong> Dobras para dentro ou para fora que podem estar relacionadas a processos de endocitose, exocitose ou aumento de superfície.</li><li><strong>Glicocálix (reforço):</strong> Já mencionado na composição, mas sua função como especialização em reconhecimento, proteção e adesão é fundamental, especialmente em células animais.</li></ul>`
  }
];

function MembranaPlasmaticaPage() {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (concept) => {
    setModalContent({ title: concept.conceptTitle, contentHtml: concept.detailsHtml });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <h1>Membrana Plasmática</h1>
        <p>O Envelope Dinâmico e Seletivo da Célula! (Clique nos cards para saber mais)</p>
      </header>

      <div className={styles.conceptsGrid}>
        {membranaPlasmaticaConcepts.map(concept => (
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

      {isModalOpen && modalContent && (
        <ConceptModal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={modalContent.title}
          contentHtml={modalContent.contentHtml}
        />
      )}

      <footer className={styles.pageFooter}>
        <p>A membrana: fronteira dinâmica da vida celular. 🧬🛡️</p>
      </footer>
    </div>
  );
}

export default MembranaPlasmaticaPage;
