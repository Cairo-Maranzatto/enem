import React, { useState } from 'react';
import styles from './SistemaRespiratorioPage.module.css';
import ConceptCard from '../../../../components/ConceptCard/ConceptCard';
import ConceptModal from '../../../../components/ConceptCard/ConceptModal';

const sistemaRespiratorioConcepts = [
  {
    id: 1,
    conceptTitle: 'Visão Geral',
    visualRepresentation: '🌬️💨👃🗣️',
    definition: 'Conjunto de órgãos responsáveis pelas trocas gasosas (O₂ e CO₂), fonação e olfato.',
    keywords: 'Trocas Gasosas, Oxigênio, Dióxido de Carbono, Pulmões',
    detailsHtml: '<div class="modal-content-custom">O <strong>Sistema Respiratório</strong> é responsável pelas trocas gasosas entre o organismo e o ambiente, permitindo a captação de oxigênio (O₂) e a eliminação de dióxido de carbono (CO₂).<ul><li><strong>Funções Principais:</strong> Trocas gasosas (hematose), fonação (produção da voz), regulação do pH sanguíneo, defesa contra patógenos inalados e olfato.</li><li><strong>Componentes Principais:</strong> Vias aéreas (cavidades nasais, faringe, laringe, traqueia, brônquios, bronquíolos) e pulmões (onde se localizam os alvéolos).</li></ul></div>'
  },
  {
    id: 2,
    conceptTitle: 'Vias Aéreas Superiores',
    visualRepresentation: '👃🌡️💧🗣️',
    definition: 'Nariz, faringe e laringe: filtram, aquecem, umedecem o ar e participam da fonação.',
    keywords: 'Nariz, Filtração, Aquecimento, Umidificação, Laringe, Pregas Vocais',
    detailsHtml: '<div class="modal-content-custom">As <strong>Vias Aéreas Superiores</strong> compreendem as estruturas que conduzem, filtram, aquecem e umedecem o ar inspirado antes que ele chegue aos pulmões.<ul><li><strong>Cavidades Nasais (Nariz):</strong> Porta de entrada do ar. Revestidas por pelos (filtram partículas maiores) e mucosa produtora de muco (umedece o ar e retém partículas menores e patógenos). Rica vascularização aquece o ar. Contêm células olfatórias.</li><li><strong>Faringe:</strong> Canal comum aos sistemas respiratório e digestório. Conduz o ar das cavidades nasais para a laringe.</li><li><strong>Laringe:</strong> Tubo cartilaginoso que conecta a faringe à traqueia. Contém as <strong>pregas vocais</strong> (responsáveis pela fonação) e a <strong>epiglote</strong> (impede a entrada de alimentos nas vias aéreas durante a deglutição).</li></ul></div>'
  },
  {
    id: 3,
    conceptTitle: 'Vias Aéreas Inferiores',
    visualRepresentation: '🌳🌬️🧹',
    definition: 'Traqueia, brônquios e bronquíolos: conduzem o ar e continuam a limpeza através de cílios e muco.',
    keywords: 'Traqueia, Brônquios, Bronquíolos, Cílios, Muco',
    detailsHtml: '<div class="modal-content-custom">As <strong>Vias Aéreas Inferiores</strong> continuam o transporte do ar em direção aos pulmões.<ul><li><strong>Traqueia:</strong> Tubo formado por anéis cartilaginosos em forma de \'C\' (que a mantêm aberta) e revestido internamente por epitélio ciliado e células produtoras de muco. Os cílios batem continuamente, empurrando o muco com partículas retidas para cima, em direção à faringe, para ser deglutido ou expectorado (mecanismo de limpeza).</li><li><strong>Brônquios Principais (Direito e Esquerdo):</strong> Bifurcações da traqueia que penetram nos pulmões. Possuem estrutura semelhante à traqueia.</li><li><strong>Bronquíolos:</strong> Ramificações menores dos brônquios dentro dos pulmões, sem cartilagem, com paredes musculares que controlam seu diâmetro. Terminam nos alvéolos pulmonares.</li></ul></div>'
  },
  {
    id: 4,
    conceptTitle: 'Pulmões e Alvéolos',
    visualRepresentation: '🫁🍇🔄🩸',
    definition: 'Órgãos esponjosos onde o ar chega aos alvéolos, local das trocas gasosas (hematose).',
    keywords: 'Alvéolos, Hematose, Troca Gasosa, Pleura, Capilares',
    detailsHtml: '<div class="modal-content-custom">Os <strong>Pulmões</strong> são os principais órgãos do sistema respiratório, onde ocorrem as trocas gasosas.<ul><li><strong>Estrutura:</strong> Órgãos esponjosos e elásticos, localizados na caixa torácica. O pulmão direito é dividido em três lobos e o esquerdo em dois (devido ao espaço ocupado pelo coração).</li><li><strong>Pleura:</strong> Membrana dupla que reveste os pulmões (pleura visceral) e a parede interna da caixa torácica (pleura parietal). Entre elas há um líquido lubrificante (líquido pleural) que reduz o atrito durante os movimentos respiratórios.</li><li><strong>Alvéolos Pulmonares:</strong> Minúsculas bolsas de ar de paredes muito finas (uma única camada de células epiteliais), agrupadas como cachos de uva no final dos bronquíolos. São ricamente vascularizados por capilares sanguíneos. É nos alvéolos que ocorre a <strong>hematose</strong> (troca de O₂ e CO₂ entre o ar e o sangue).</li></ul></div>'
  },
  {
    id: 5,
    conceptTitle: 'Mecânica da Respiração',
    visualRepresentation: '⬆️🌬️⬇️💨',
    definition: 'Movimentos de inspiração (entrada de ar) e expiração (saída de ar) devido à ação do diafragma e músculos intercostais.',
    keywords: 'Inspiração, Expiração, Diafragma, Músculos Intercostais, Pressão',
    detailsHtml: '<div class="modal-content-custom">A ventilação pulmonar (entrada e saída de ar dos pulmões) ocorre devido a diferenças de pressão criadas pela ação de músculos respiratórios.<ul><li><strong>Inspiração (Entrada de Ar):</strong> Processo ativo. O <strong>diafragma</strong> (músculo em forma de cúpula abaixo dos pulmões) contrai e desce. Os <strong>músculos intercostais externos</strong> contraem, elevando as costelas. Isso aumenta o volume da caixa torácica, diminuindo a pressão interna dos pulmões em relação à atmosférica, e o ar entra.</li><li><strong>Expiração (Saída de Ar):</strong> Processo geralmente passivo (em repouso). O diafragma e os músculos intercostais externos relaxam. O volume da caixa torácica diminui devido à elasticidade dos pulmões e da parede torácica. A pressão interna dos pulmões torna-se maior que a atmosférica, e o ar sai. Em expiração forçada, músculos abdominais e intercostais internos podem contrair.</li></ul></div>'
  },
  {
    id: 6,
    conceptTitle: 'Trocas Gasosas (Hematose)',
    visualRepresentation: '💨🔄🩸🦠',
    definition: 'Processo de troca de O₂ e CO₂ entre os alvéolos e o sangue (pulmonar) e entre o sangue e as células (tecidual) por difusão.',
    keywords: 'Difusão, Oxigênio, Dióxido de Carbono, Alvéolos, Capilares, Tecidos',
    detailsHtml: '<div class="modal-content-custom">A <strong>Hematose</strong> é o processo de troca de gases (O₂ e CO₂) entre o ar nos alvéolos e o sangue nos capilares pulmonares, e também entre o sangue nos capilares sistêmicos e as células dos tecidos. Ocorre por <strong>difusão simples</strong>, a favor do gradiente de concentração (ou pressão parcial) dos gases.<ul><li><strong>Hematose Pulmonar (nos Alvéolos):</strong> O ar alveolar é rico em O₂ e pobre em CO₂. O sangue venoso que chega aos capilares pulmonares é pobre em O₂ e rico em CO₂. Assim, o O₂ difunde-se do alvéolo para o sangue, e o CO₂ difunde-se do sangue para o alvéolo (para ser expirado). O sangue torna-se arterial (rico em O₂).</li><li><strong>Hematose Tecidual (nos Tecidos):</strong> O sangue arterial que chega aos capilares dos tecidos é rico em O₂ e pobre em CO₂. As células dos tecidos, devido à respiração celular, são pobres em O₂ e ricas em CO₂. Assim, o O₂ difunde-se do sangue para as células, e o CO₂ difunde-se das células para o sangue. O sangue torna-se venoso.</li></ul></div>'
  },
  {
    id: 7,
    conceptTitle: 'Transporte de Gases',
    visualRepresentation: '🩸🚚💨💨',
    definition: 'O₂ é transportado principalmente pela hemoglobina (oxiemoglobina). CO₂ é transportado como íon bicarbonato, ligado à hemoglobina ou dissolvido.',
    keywords: 'Hemoglobina, Oxiemoglobina, Bicarbonato, Carboemoglobina, Anidrase Carbônica',
    detailsHtml: '<div class="modal-content-custom">Após as trocas gasosas, O₂ e CO₂ são transportados pelo sangue.<ul><li><strong>Transporte de Oxigênio (O₂):</strong> A maior parte (cerca de 98,5%) do O₂ é transportada ligada à proteína <strong>hemoglobina (Hb)</strong>, presente nas hemácias (glóbulos vermelhos), formando a <strong>oxiemoglobina (HbO₂)</strong>. Uma pequena parte (1,5%) é transportada dissolvida no plasma. A ligação O₂-Hb é reversível e depende da pressão parcial de O₂.</li><li><strong>Transporte de Dióxido de Carbono (CO₂):</strong> O CO₂ é transportado de três formas principais:<ul><li><strong>Íons Bicarbonato (HCO₃⁻):</strong> Cerca de 70%. O CO₂ entra nas hemácias, reage com a água (catalisado pela enzima anidrase carbônica) formando ácido carbônico (H₂CO₃), que se dissocia em H⁺ e HCO₃⁻. O HCO₃⁻ sai da hemácia para o plasma.</li><li><strong>Ligado à Hemoglobina:</strong> Cerca de 23%, formando a <strong>carboemoglobina (HbCO₂)</strong>. O CO₂ liga-se a porções proteicas da hemoglobina, não ao grupo heme como o O₂.</li><li><strong>Dissolvido no Plasma:</strong> Cerca de 7%.</li></ul></li></ul></div>'
  },
  {
    id: 8,
    conceptTitle: 'Controle da Respiração',
    visualRepresentation: '🧠📊⚙️💨',
    definition: 'Regulado pelo sistema nervoso central (bulbo), ajustado por níveis de CO₂, O₂ e pH no sangue.',
    keywords: 'Bulbo, Quimiorreceptores, CO2, pH, Sistema Nervoso',
    detailsHtml: '<div class="modal-content-custom">A respiração é controlada automaticamente pelo sistema nervoso central, mas pode ser influenciada voluntariamente até certo ponto.<ul><li><strong>Centro Respiratório:</strong> Localizado no <strong>bulbo</strong> (parte do tronco encefálico), controla o ritmo e a profundidade da respiração. Grupos de neurônios no bulbo geram impulsos nervosos rítmicos para os músculos respiratórios (diafragma e intercostais). A ponte também participa na modulação do ritmo.</li><li><strong>Controle Químico (Quimiorreceptores):</strong> A frequência e a profundidade da respiração são ajustadas em resposta a alterações nos níveis de CO₂, O₂ e pH no sangue e no líquido cefalorraquidiano.<ul><li><strong>Quimiorreceptores Centrais (no bulbo):</strong> Sensíveis principalmente ao aumento da concentração de H⁺ (diminuição do pH) no líquido cefalorraquidiano, que reflete o aumento de CO₂ no sangue.</li><li><strong>Quimiorreceptores Periféricos (nas artérias carótidas e aorta):</strong> Sensíveis principalmente à diminuição acentuada de O₂ no sangue arterial, e também ao aumento de CO₂ e H⁺.</li></ul>O principal estímulo para aumentar a respiração é o aumento da concentração de CO₂ (e consequente aumento de H⁺/diminuição do pH).</li></ul></div>'
  },
  {
    id: 9,
    conceptTitle: 'Saúde Respiratória',
    visualRepresentation: '🚭🏃‍♂️🌿⚠️',
    definition: 'Cuidados e prevenção de doenças como asma, bronquite, pneumonia. Importância de não fumar e evitar poluição.',
    keywords: 'Prevenção, Asma, Bronquite, Pneumonia, Tabagismo, Poluição',
    detailsHtml: '<div class="modal-content-custom">Manter a saúde do sistema respiratório é crucial para o bem-estar geral.<ul><li><strong>Hábitos Saudáveis:</strong><ul><li><strong>Não fumar:</strong> O tabagismo é a principal causa de doenças respiratórias graves, como DPOC (Doença Pulmonar Obstrutiva Crônica), enfisema e câncer de pulmão.</li><li><strong>Evitar exposição à poluição do ar:</strong> Poluentes atmosféricos podem irritar as vias aéreas e agravar condições existentes.</li><li><strong>Praticar atividade física regularmente:</strong> Melhora a capacidade pulmonar e a eficiência respiratória.</li><li><strong>Manter ambientes ventilados e limpos:</strong> Reduz a concentração de alérgenos e patógenos.</li><li><strong>Vacinação:</strong> Contra gripe (influenza) e pneumonia pneumocócica, especialmente para grupos de risco.</li></ul></li><li><strong>Doenças Respiratórias Comuns:</strong><ul><li><strong>Asma:</strong> Inflamação crônica das vias aéreas, causando broncoespasmo e dificuldade para respirar.</li><li><strong>Bronquite:</strong> Inflamação dos brônquios.</li><li><strong>Pneumonia:</strong> Infecção dos alvéolos pulmonares, geralmente causada por bactérias ou vírus.</li><li><strong>Rinite e Sinusite:</strong> Inflamação da mucosa nasal e dos seios paranasais, respectivamente.</li><li><strong>Tuberculose:</strong> Infecção bacteriana que afeta principalmente os pulmões.</li></ul></li><li>Consultar um médico em caso de sintomas respiratórios persistentes é fundamental para diagnóstico e tratamento adequados.</li></ul></div>'
  }
];

const SistemaRespiratorioPage = () => {
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
        <h1>Sistema Respiratório Humano</h1>
        <p>A vital troca de gases que nos mantém vivos!</p>
      </header>
      <main className={styles.conceptsGrid}>
        {sistemaRespiratorioConcepts.map(concept => (
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
        <p>Sistema Respiratório: Respire fundo, a vida agradece! 🌬️💙</p>
      </footer>
    </div>
  );
};

export default SistemaRespiratorioPage;
