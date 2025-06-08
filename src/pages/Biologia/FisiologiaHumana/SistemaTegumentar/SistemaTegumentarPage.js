import React, { useState } from 'react';
import styles from './SistemaTegumentarPage.module.css';
import ConceptCard from '../../../../components/ConceptCard/ConceptCard';
import ConceptModal from '../../../../components/ConceptCard/ConceptModal';

const sistemaTegumentarConcepts = [
  {
    id: 1,
    conceptTitle: 'Visão Geral',
    visualRepresentation: '🛡️🖐️🌡️',
    definition: 'Revestimento protetor do corpo, composto pela pele e seus anexos (pelos, unhas, glândulas). Interface com o ambiente.',
    keywords: 'Pele, Anexos, Proteção, Revestimento, Barreira',
    detailsHtml: '<div class="modal-content-custom">O <strong>Sistema Tegumentar</strong> é o sistema de órgãos que reveste e protege o corpo. É composto pela pele e seus anexos (pelos, unhas, glândulas sudoríparas e sebáceas).<ul><li><strong>Componentes Principais:</strong><ul><li><strong>Pele:</strong> O maior órgão do corpo, dividida em epiderme, derme e hipoderme (tecido subcutâneo, funcionalmente associado).</li><li><strong>Anexos da Pele:</strong> Estruturas especializadas derivadas da epiderme, como pelos, unhas e glândulas.</li></ul></li><li><strong>Funções Gerais:</strong> Proteção contra agentes externos, regulação da temperatura corporal, sensibilidade (tato, dor, temperatura), excreção de substâncias, síntese de vitamina D e reserva de nutrientes.</li></ul></div>'
  },
  {
    id: 2,
    conceptTitle: 'Pele: Epiderme',
    visualRepresentation: '🧱🎨🔬',
    definition: 'Camada mais externa da pele, avascular, rica em queratina. Protege contra desidratação e patógenos.',
    keywords: 'Queratina, Melanina, Camada Córnea, Células Basais, Avascular',
    detailsHtml: '<div class="modal-content-custom">A <strong>Epiderme</strong> é a camada mais externa da pele, avascular (sem vasos sanguíneos), formada por tecido epitelial estratificado pavimentoso queratinizado.<ul><li><strong>Camadas Principais (da mais profunda para a superficial):</strong><ol><li><strong>Camada Basal (Germinativa):</strong> Células-tronco que se dividem continuamente (mitose) para renovar a epiderme. Contém melanócitos.</li><li><strong>Camada Espinhosa:</strong> Células unidas por desmossomos, conferindo resistência. Contém células de Langerhans (imunológicas).</li><li><strong>Camada Granulosa:</strong> Células contendo grânulos de querato-hialina (precursora da queratina) e corpos lamelares (lipídios impermeabilizantes).</li><li><strong>Camada Lúcida (apenas em pele espessa - palmas e plantas):</strong> Camada translúcida de células mortas.</li><li><strong>Camada Córnea:</strong> Camada mais superficial, composta por células mortas achatadas e cheias de queratina (queratinócitos mortos ou corneócitos), que são constantemente descamadas.</li></ol></li><li><strong>Células Principais:</strong><ul><li><strong>Queratinócitos:</strong> Produzem queratina, proteína resistente e impermeabilizante. São a maioria das células.</li><li><strong>Melanócitos:</strong> Produzem melanina, pigmento que dá cor à pele e protege contra radiação UV.</li><li><strong>Células de Langerhans:</strong> Células de defesa imunológica.</li><li><strong>Células de Merkel:</strong> Receptoras táteis (sensibilidade).</li></ul></li></ul></div>'
  },
  {
    id: 3,
    conceptTitle: 'Pele: Derme',
    visualRepresentation: '💪💧⚡',
    definition: 'Camada intermediária, vascularizada. Contém colágeno, elastina, nervos, vasos, glândulas e folículos pilosos.',
    keywords: 'Colágeno, Elastina, Vasos Sanguíneos, Nervos, Papilas Dérmicas',
    detailsHtml: '<div class="modal-content-custom">A <strong>Derme</strong> é a camada intermediária da pele, localizada abaixo da epiderme. É vascularizada e rica em fibras conjuntivas, vasos sanguíneos, nervos, glândulas e folículos pilosos.<ul><li><strong>Camadas da Derme:</strong><ul><li><strong>Camada Papilar (mais superficial):</strong> Tecido conjuntivo frouxo, forma as papilas dérmicas (projeções que se encaixam na epiderme, formando as impressões digitais). Rica em vasos e terminações nervosas.</li><li><strong>Camada Reticular (mais profunda):</strong> Tecido conjuntivo denso não modelado, com feixes de fibras colágenas e elásticas, conferindo resistência e elasticidade à pele.</li></ul></li><li><strong>Componentes da Derme:</strong><ul><li><strong>Fibras de Colágeno:</strong> Conferem resistência e firmeza.</li><li><strong>Fibras Elásticas:</strong> Conferem elasticidade.</li><li><strong>Vasos Sanguíneos:</strong> Nutrição da epiderme e regulação térmica.</li><li><strong>Vasos Linfáticos:</strong> Drenagem de fluidos e defesa.</li><li><strong>Terminações Nervosas e Receptores Sensoriais:</strong> Tato, pressão, dor, temperatura.</li><li><strong>Folículos Pilosos, Glândulas Sebáceas e Sudoríparas:</strong> Anexos da pele localizados na derme.</li></ul></li></ul></div>'
  },
  {
    id: 4,
    conceptTitle: 'Pele: Hipoderme',
    visualRepresentation: '🧸🧱🌡️',
    definition: 'Camada mais profunda, rica em tecido adiposo. Isola termicamente, armazena energia e protege contra choques.',
    keywords: 'Tecido Adiposo, Gordura, Isolamento Térmico, Reserva Energética, Conexão',
    detailsHtml: '<div class="modal-content-custom">A <strong>Hipoderme</strong>, também conhecida como tecido subcutâneo ou tela subcutânea, não é considerada uma camada da pele por todos os autores, mas está intimamente ligada a ela funcionalmente. Localiza-se abaixo da derme.<ul><li><strong>Composição Principal:</strong><ul><li><strong>Tecido Adiposo (gordura):</strong> Formado por células adiposas (adipócitos) que armazenam triglicerídeos.</li><li><strong>Tecido Conjuntivo Frouxo:</strong> Conecta a pele aos órgãos subjacentes (músculos, ossos).</li><li>Contém vasos sanguíneos e nervos maiores que os da derme.</li></ul></li><li><strong>Funções Principais:</strong><ul><li><strong>Isolamento Térmico:</strong> Ajuda a manter a temperatura corporal.</li><li><strong>Reserva de Energia:</strong> A gordura armazenada pode ser mobilizada para fornecer energia.</li><li><strong>Proteção Mecânica:</strong> Amortece impactos, protegendo órgãos internos.</li><li><strong>Modelagem do Contorno Corporal:</strong> A distribuição da gordura influencia a forma do corpo.</li><li><strong>Conexão:</strong> Une a derme aos tecidos mais profundos.</li></ul></li></ul></div>'
  },
  {
    id: 5,
    conceptTitle: 'Anexos: Pelos',
    visualRepresentation: '🧔🦁🌾',
    definition: 'Estruturas queratinizadas que crescem a partir de folículos pilosos. Funções: proteção, sensorial, isolamento (limitado).',
    keywords: 'Folículo Piloso, Queratina, Haste, Raiz, Músculo Eretor',
    detailsHtml: '<div class="modal-content-custom">Os <strong>Pelos</strong> são estruturas filiformes queratinizadas que se originam nos folículos pilosos, invaginações da epiderme que se aprofundam na derme.<ul><li><strong>Estrutura do Pelo:</strong><ul><li><strong>Haste:</strong> Parte visível que se projeta acima da superfície da pele.</li><li><strong>Raiz:</strong> Parte implantada na pele, dentro do folículo piloso.</li><li><strong>Bulbo Piloso:</strong> Base expandida da raiz, onde ocorre o crescimento do pelo (células da matriz se dividem). Contém a papila dérmica, que nutre o pelo.</li></ul></li><li><strong>Estrutura do Folículo Piloso:</strong><ul><li>Invaginação da epiderme e derme.</li><li>Associado a uma <strong>glândula sebácea</strong> (que lubrifica o pelo e a pele) e a um <strong>músculo eretor do pelo</strong> (responsável pelo arrepio).</li></ul></li><li><strong>Funções dos Pelos:</strong><ul><li><strong>Proteção:</strong> Contra radiação solar (cabelos), entrada de partículas (nariz, orelhas), atrito.</li><li><strong>Sensorial:</strong> Detectam toques leves.</li><li><strong>Isolamento Térmico:</strong> Mais significativo em outros mamíferos.</li></ul></li><li>A cor do pelo é dada pela melanina produzida por melanócitos no bulbo.</li></ul></div>'
  },
  {
    id: 6,
    conceptTitle: 'Anexos: Unhas',
    visualRepresentation: '💅✨🛡️',
    definition: 'Placas de queratina dura que protegem as pontas dos dedos das mãos e dos pés. Auxiliam na manipulação.',
    keywords: 'Queratina Dura, Placa Ungueal, Leito Ungueal, Matriz, Proteção',
    detailsHtml: '<div class="modal-content-custom">As <strong>Unhas</strong> são placas córneas duras e compactas, formadas por células epidérmicas queratinizadas mortas. Localizam-se na superfície dorsal das falanges distais dos dedos das mãos e dos pés.<ul><li><strong>Estrutura da Unha:</strong><ul><li><strong>Placa Ungueal (Corpo da Unha):</strong> Parte visível e dura da unha.</li><li><strong>Leito Ungueal:</strong> Camada de epiderme sob a placa ungueal, à qual está firmemente aderida.</li><li><strong>Raiz da Unha:</strong> Parte proximal da unha, embutida sob uma dobra de pele.</li><li><strong>Matriz Ungueal (ou Germinativa):</strong> Região sob a raiz da unha, responsável pelo crescimento da unha. Células da matriz se dividem e queratinizam.</li><li><strong>Lúnula:</strong> Área esbranquiçada em forma de meia-lua na base da unha, parte visível da matriz.</li><li><strong>Eponíquio (Cutícula):</strong> Dobra de pele que cobre a raiz da unha.</li><li><strong>Hiponíquio:</strong> Pele espessada sob a borda livre da unha.</li></ul></li><li><strong>Funções das Unhas:</strong><ul><li><strong>Proteção:</strong> Protegem as pontas sensíveis dos dedos contra traumas.</li><li><strong>Manipulação:</strong> Auxiliam na preensão e manipulação de objetos pequenos.</li><li><strong>Ferramenta:</strong> Podem ser usadas para coçar, raspar.</li><li><strong>Diagnóstico:</strong> Alterações na aparência das unhas podem indicar certas doenças.</li></ul></li></ul></div>'
  },
  {
    id: 7,
    conceptTitle: 'Anexos: Glândulas Sebáceas',
    visualRepresentation: '🧴💧✨',
    definition: 'Produzem sebo, uma substância oleosa que lubrifica e impermeabiliza a pele e os pelos.',
    keywords: 'Sebo, Oleosidade, Lubrificação, Impermeabilização, Folículo Piloso',
    detailsHtml: '<div class="modal-content-custom">As <strong>Glândulas Sebáceas</strong> são glândulas exócrinas holócrinas encontradas na derme, geralmente associadas aos folículos pilosos (embora algumas se abram diretamente na superfície da pele, como nos lábios e genitais).<ul><li><strong>Secreção (Sebo):</strong> Produzem uma substância oleosa chamada <strong>sebo</strong>, composta por lipídios, colesterol, proteínas e restos celulares.</li><li><strong>Mecanismo de Secreção Holócrina:</strong> As células secretoras acumulam sebo e se desintegram completamente, liberando a secreção junto com os restos celulares no ducto da glândula, que geralmente desemboca no folículo piloso.</li><li><strong>Funções do Sebo:</strong><ul><li><strong>Lubrificação:</strong> Mantém a pele e os pelos flexíveis e macios.</li><li><strong>Impermeabilização:</strong> Ajuda a prevenir a perda excessiva de água pela pele e protege contra a umidade excessiva do ambiente.</li><li><strong>Proteção:</strong> Possui propriedades bactericidas e fungicidas fracas, ajudando a proteger contra infecções.</li></ul></li><li>A atividade das glândulas sebáceas é influenciada por hormônios, especialmente andrógenos. O aumento da produção de sebo pode levar à acne.</li></ul></div>'
  },
  {
    id: 8,
    conceptTitle: 'Anexos: Glândulas Sudoríparas',
    visualRepresentation: '💧🌡️♨️',
    definition: 'Produzem suor para regular a temperatura corporal (écrinas) e secreções odoríferas (apócrinas).',
    keywords: 'Suor, Termorregulação, Écrina, Apócrina, Poros',
    detailsHtml: '<div class="modal-content-custom">As <strong>Glândulas Sudoríparas</strong> são glândulas exócrinas tubulares simples enoveladas, localizadas na derme ou hipoderme, cujos ductos se abrem na superfície da pele (poros) ou em folículos pilosos. Produzem o suor. Existem dois tipos principais:<ul><li><strong>Glândulas Sudoríparas Écrinas (ou Merócrinas):</strong><ul><li><strong>Distribuição:</strong> Amplamente distribuídas por todo o corpo, especialmente abundantes nas palmas das mãos, plantas dos pés e testa.</li><li><strong>Secreção:</strong> Suor aquoso e claro, composto principalmente por água, sais (NaCl), ureia, ácido úrico e amônia.</li><li><strong>Função Principal:</strong> <strong>Termorregulação</strong>. A evaporação do suor na superfície da pele resfria o corpo.</li><li>Seus ductos se abrem diretamente na superfície da pele.</li></ul></li><li><strong>Glândulas Sudoríparas Apócrinas:</strong><ul><li><strong>Distribuição:</strong> Localizadas em regiões específicas como axilas, região pubiana, aréolas mamárias e região perianal. Tornam-se funcionais na puberdade.</li><li><strong>Secreção:</strong> Suor mais viscoso e leitoso, contendo proteínas e lipídios além dos componentes do suor écrino. Inicialmente inodoro, mas o odor característico surge da decomposição bacteriana dessa secreção na pele.</li><li><strong>Função:</strong> Não está diretamente envolvida na termorregulação. Acredita-se que suas secreções atuem como feromônios em outros mamíferos; em humanos, sua função é incerta, mas contribui para o odor corporal.</li><li>Seus ductos geralmente se abrem em folículos pilosos.</li></ul></li><li>Glândulas ceruminosas (ouvido) e mamárias são consideradas glândulas sudoríparas modificadas.</li></ul></div>'
  },
  {
    id: 9,
    conceptTitle: 'Termorregulação',
    visualRepresentation: '🌡️❄️🔥',
    definition: 'Pele ajuda a manter a temperatura corporal através da vasodilatação/vasoconstrição e produção de suor.',
    keywords: 'Temperatura Corporal, Suor, Vasodilatação, Vasoconstrição, Hipotálamo',
    detailsHtml: '<div class="modal-content-custom">A pele desempenha um papel crucial na <strong>Termorregulação</strong>, ou seja, na manutenção da temperatura corporal interna dentro de uma faixa estreita e ideal (aproximadamente 37°C), apesar das variações da temperatura ambiental. Esse controle é coordenado pelo hipotálamo.<ul><li><strong>Mecanismos de Perda de Calor (quando o corpo está quente):</strong><ul><li><strong>Vasodilatação:</strong> Os vasos sanguíneos da derme se dilatam, aumentando o fluxo de sangue para a superfície da pele. Isso permite que o calor do sangue seja irradiado para o ambiente. A pele pode ficar avermelhada.</li><li><strong>Sudorese (Produção de Suor):</strong> As glândulas sudoríparas écrinas são estimuladas a produzir suor. A evaporação do suor da superfície da pele remove calor do corpo, resfriando-o. Este é o mecanismo mais eficaz em temperaturas ambientais elevadas.</li></ul></li><li><strong>Mecanismos de Conservação de Calor (quando o corpo está frio):</strong><ul><li><strong>Vasoconstrição:</strong> Os vasos sanguíneos da derme se contraem, diminuindo o fluxo de sangue para a superfície da pele e reduzindo a perda de calor para o ambiente.</li><li><strong>Piloereção (Arrepio):</strong> Contração dos músculos eretores dos pelos, que levantam os pelos. Em animais com muitos pelos, isso cria uma camada de ar isolante. Em humanos, o efeito é mínimo, mas é um reflexo vestigial.</li><li>A camada de gordura da hipoderme também atua como isolante térmico.</li><li>Em frio extremo, podem ocorrer tremores (contrações musculares involuntárias) para gerar calor.</li></ul></li></ul></div>'
  }
];

const SistemaTegumentarPage = () => {
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
        <h1>Sistema Tegumentar</h1>
        <p>Nossa primeira linha de defesa e interface com o mundo.</p>
      </header>
      <main className={styles.conceptsGrid}>
        {sistemaTegumentarConcepts.map((concept) => (
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
        <p>Sistema Tegumentar: Sua armadura natural, cuidando de você a cada toque. 🛡️</p>
      </footer>
    </div>
  );
};

export default SistemaTegumentarPage;
