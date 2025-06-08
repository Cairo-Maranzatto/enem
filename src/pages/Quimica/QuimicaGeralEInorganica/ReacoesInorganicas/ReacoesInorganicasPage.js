import React, { useState } from 'react';
import styles from './ReacoesInorganicasPage.module.css';
import ConceptCard from '../../../../components/ConceptCard/ConceptCard';
import ConceptModal from '../../../../components/ConceptCard/ConceptModal';

const reacoesInorganicasConcepts = [
  {
    id: 'introducaoReacoes',
    conceptTitle: 'Introdução às Reações',
    visualRepresentation: 'A+B → C+D',
    definition: 'Processos que transformam substâncias (reagentes) em novas substâncias (produtos) através da quebra e formação de ligações.',
    keywords: 'Reagentes, Produtos, Transformação, Equação Química',
    modalTitle: 'Introdução às Reações Inorgânicas',
    detailsHtml: `<p>Uma <strong>reação química inorgânica</strong> é um processo no qual substâncias iniciais, chamadas <strong>reagentes</strong>, são transformadas em novas substâncias, chamadas <strong>produtos</strong>. Essa transformação envolve a quebra de ligações químicas existentes nos reagentes e a formação de novas ligações para originar os produtos.</p><p>As reações químicas são representadas por <strong>equações químicas</strong>, que utilizam fórmulas e símbolos para descrever as substâncias envolvidas e as proporções em que reagem. Exemplo: <code>2 H<sub>2(g)</sub> + O<sub>2(g)</sub> → 2 H<sub>2</sub>O<sub>(l)</sub></code>.</p><h4>Evidências de uma Reação Química:</h4><p>Alguns sinais podem indicar a ocorrência de uma reação química:</p><ul><li>Mudança de cor.</li><li>Liberação ou absorção de calor (reações exotérmicas ou endotérmicas).</li><li>Formação de um precipitado (sólido insolúvel).</li><li>Liberação de gás (efervescência).</li><li>Emissão de luz.</li></ul><h4>Fatores que Influenciam as Reações:</h4><ul><li><strong>Natureza dos reagentes:</strong> Diferentes substâncias têm diferentes reatividades.</li><li><strong>Concentração dos reagentes:</strong> Maior concentração geralmente leva a maior velocidade.</li><li><strong>Temperatura:</strong> O aumento da temperatura geralmente acelera a reação.</li><li><strong>Pressão (para gases):</strong> O aumento da pressão pode acelerar reações gasosas.</li><li><strong>Superfície de contato (para sólidos):</strong> Maior superfície de contato aumenta a velocidade.</li><li><strong>Catalisadores:</strong> Substâncias que aumentam a velocidade da reação sem serem consumidas.</li></ul><p>O estudo das reações inorgânicas é crucial para entender processos naturais, industriais e laboratoriais.</p>`
  },
  {
    id: 'sinteseAdicao',
    conceptTitle: 'Síntese ou Adição',
    visualRepresentation: 'A + B → AB',
    definition: 'Duas ou mais substâncias simples ou compostas reagem para formar um único produto mais complexo.',
    keywords: 'Combinação, Formação, Único Produto, Composição',
    modalTitle: 'Reações de Síntese ou Adição',
    detailsHtml: `<p>As <strong>reações de síntese ou adição</strong> são aquelas em que duas ou mais substâncias (simples ou compostas), chamadas reagentes, se combinam para formar uma <strong>única substância mais complexa</strong> como produto.</p><p><strong>Forma Geral:</strong> <code>A + B → AB</code></p><p>Onde A e B podem ser substâncias simples (formadas por um único elemento químico, como O<sub>2</sub>, H<sub>2</sub>, S<sub>8</sub>) ou substâncias compostas (formadas por mais de um elemento químico, como H<sub>2</sub>O, CO<sub>2</sub>, NH<sub>3</sub>).</p><h4>Exemplos de Reações de Síntese:</h4><ul><li><strong>Síntese Total (reagentes são substâncias simples):</strong><ul><li><code>2 H<sub>2(g)</sub> + O<sub>2(g)</sub> → 2 H<sub>2</sub>O<sub>(l)</sub></code> (Formação da água)</li><li><code>N<sub>2(g)</sub> + 3 H<sub>2(g)</sub> → 2 NH<sub>3(g)</sub></code> (Síntese de Haber-Bosch para amônia)</li><li><code>C<sub>(s)</sub> + O<sub>2(g)</sub> → CO<sub>2(g)</sub></code> (Combustão completa do carbono)</li></ul></li><li><strong>Síntese Parcial (pelo menos um reagente é uma substância composta):</strong><ul><li><code>SO<sub>3(g)</sub> + H<sub>2</sub>O<sub>(l)</sub> → H<sub>2</sub>SO<sub>4(aq)</sub></code> (Formação do ácido sulfúrico)</li><li><code>CaO<sub>(s)</sub> + H<sub>2</sub>O<sub>(l)</sub> → Ca(OH)<sub>2(aq)</sub></code> (Formação do hidróxido de cálcio - cal hidratada)</li><li><code>NH<sub>3(g)</sub> + HCl<sub>(g)</sub> → NH<sub>4</sub>Cl<sub>(s)</sub></code> (Formação do cloreto de amônio)</li></ul></li></ul><p>Essas reações são fundamentais na obtenção de muitos compostos importantes industrialmente e em processos naturais.</p>`
  },
  {
    id: 'decomposicaoAnalise',
    conceptTitle: 'Decomposição ou Análise',
    visualRepresentation: 'AB → A + B',
    definition: 'Uma única substância se decompõe em duas ou mais substâncias mais simples.',
    keywords: 'Dissociação, Quebra, Múltiplos Produtos, Pirólise, Eletrólise',
    modalTitle: 'Reações de Decomposição ou Análise',
    detailsHtml: `<p>As <strong>reações de decomposição ou análise</strong> são aquelas em que uma <strong>única substância composta</strong> (reagente) se decompõe, originando duas ou more substâncias mais simples (produtos).</p><p><strong>Forma Geral:</strong> <code>AB → A + B</code></p><p>Essas reações geralmente requerem o fornecimento de energia (calor, eletricidade, luz) para ocorrerem.</p><h4>Tipos Comuns de Decomposição (de acordo com o agente causador):</h4><ul><li><strong>Pirólise (Decomposição Térmica):</strong> Decomposição causada pelo calor (Δ).<ul><li><code>CaCO<sub>3(s)</sub> → CaO<sub>(s)</sub> + CO<sub>2(g)</sub></code> (Decomposição do carbonato de cálcio)</li><li><code>2 KClO<sub>3(s)</sub> → 2 KCl<sub>(s)</sub> + 3 O<sub>2(g)</sub></code> (Decomposição do clorato de potássio)</li></ul></li><li><strong>Eletrólise:</strong> Decomposição causada pela passagem de corrente elétrica.<ul><li><code>2 H<sub>2</sub>O<sub>(l)</sub> → 2 H<sub>2(g)</sub> + O<sub>2(g)</sub></code> (Eletrólise da água)</li><li><code>2 NaCl<sub>(l)</sub> → 2 Na<sub>(s)</sub> + Cl<sub>2(g)</sub></code> (Eletrólise ígnea do cloreto de sódio)</li></ul></li><li><strong>Fotólise:</strong> Decomposição causada pela luz (geralmente UV).<ul><li><code>2 AgBr<sub>(s)</sub> → 2 Ag<sub>(s)</sub> + Br<sub>2(g)</sub></code> (Usado em filmes fotográficos)</li><li><code>2 H<sub>2</sub>O<sub>2(aq)</sub> → 2 H<sub>2</sub>O<sub>(l)</sub> + O<sub>2(g)</sub></code> (Decomposição da água oxigenada pela luz)</li></ul></li></ul><p>As reações de decomposição são importantes para a obtenção de substâncias simples a partir de compostos, como a produção de oxigênio em laboratório.</p>`
  },
  {
    id: 'simplesTrocaDeslocamento',
    conceptTitle: 'Simples Troca ou Deslocamento',
    visualRepresentation: 'A + BC → AC + B',
    definition: 'Uma substância simples reage com uma substância composta, deslocando um dos componentes da substância composta.',
    keywords: 'Substituição, Deslocamento, Reatividade, Metais, Ametais',
    modalTitle: 'Reações de Simples Troca ou Deslocamento',
    detailsHtml: `<p>As <strong>reações de simples troca ou deslocamento</strong> ocorrem quando uma <strong>substância simples</strong> reage com uma <strong>substância composta</strong>, deslocando um dos elementos da substância composta e formando uma nova substância simples e uma nova substância composta.</p><p><strong>Formas Gerais:</strong></p><ul><li><code>A + BC → AC + B</code> (Um metal ou hidrogênio desloca outro metal ou hidrogênio menos reativo)</li><li><code>X + BY → BX + Y</code> (Um ametal desloca outro ametal menos reativo)</li></ul><p>A ocorrência dessas reações depende da <strong>reatividade</strong> dos elementos envolvidos. Uma fila de reatividade (ou potencial de redução/oxidação) é usada para prever se a reação ocorrerá:</p><ul><li><strong>Metais:</strong> Li > K > Cs > Ba > Sr > Ca > Na > Mg > Al > Mn > Zn > Cr > Fe > Co > Ni > Sn > Pb > <strong>H</strong> > Cu > Hg > Ag > Pt > Au (Mais reativos deslocam os menos reativos e o hidrogênio de ácidos).</li><li><strong>Ametais (Halogênios):</strong> F > O > Cl > Br > I > S (Mais reativos deslocam os menos reativos de seus sais).</li></ul><h4>Exemplos:</h4><ul><li><code>Zn<sub>(s)</sub> + 2 HCl<sub>(aq)</sub> → ZnCl<sub>2(aq)</sub> + H<sub>2(g)</sub></code> (Zinco é mais reativo que hidrogênio)</li><li><code>Fe<sub>(s)</sub> + CuSO<sub>4(aq)</sub> → FeSO<sub>4(aq)</sub> + Cu<sub>(s)</sub></code> (Ferro é mais reativo que cobre)</li><li><code>Cl<sub>2(g)</sub> + 2 NaBr<sub>(aq)</sub> → 2 NaCl<sub>(aq)</sub> + Br<sub>2(l)</sub></code> (Cloro é mais reativo que bromo)</li><li><code>Cu<sub>(s)</sub> + HCl<sub>(aq)</sub> → Não ocorre</code> (Cobre é menos reativo que hidrogênio)</li></ul><p>Estas reações são importantes em processos metalúrgicos e na produção de certos elementos.</p>`
  },
  {
    id: 'duplaTrocaPermutacao',
    conceptTitle: 'Dupla Troca ou Permutação',
    visualRepresentation: 'AB + CD → AD + CB',
    definition: 'Duas substâncias compostas reagem trocando seus componentes, geralmente formando um precipitado, gás ou água.',
    keywords: 'Permutação, Precipitação, Volatilização, Neutralização',
    modalTitle: 'Reações de Dupla Troca ou Permutação',
    detailsHtml: `<p>As <strong>reações de dupla troca ou permutação</strong> ocorrem quando duas <strong>substâncias compostas</strong> reagem entre si, trocando seus íons ou grupos de átomos, resultando na formação de duas novas substâncias compostas.</p><p><strong>Forma Geral:</strong> <code>AB + CD → AD + CB</code></p><p>Para que uma reação de dupla troca ocorra efetivamente (seja considerada uma reação e não apenas uma mistura de íons em solução), pelo menos uma das seguintes condições deve ser satisfeita para um dos produtos formados:</p><ol><li><strong>Formação de um precipitado (sólido insolúvel):</strong> Um dos produtos é insolúvel no meio reacional e se separa como um sólido. É necessário consultar tabelas de solubilidade.<ul><li>Ex: <code>AgNO<sub>3(aq)</sub> + NaCl<sub>(aq)</sub> → AgCl<sub>(s)</sub>↓ + NaNO<sub>3(aq)</sub></code> (AgCl é um precipitado branco)</li></ul></li><li><strong>Formação de um gás (substância volátil):</strong> Um dos produtos é um gás que escapa do sistema.<ul><li>Ex: <code>Na<sub>2</sub>S<sub>(aq)</sub> + 2 HCl<sub>(aq)</sub> → 2 NaCl<sub>(aq)</sub> + H<sub>2</sub>S<sub>(g)</sub>↑</code> (H<sub>2</sub>S é um gás com cheiro de ovo podre)</li><li>Ex: <code>CaCO<sub>3(s)</sub> + 2 HCl<sub>(aq)</sub> → CaCl<sub>2(aq)</sub> + H<sub>2</sub>O<sub>(l)</sub> + CO<sub>2(g)</sub>↑</code> (CO<sub>2</sub> é um gás)</li></ul></li><li><strong>Formação de uma substância menos ionizada ou mais estável (geralmente água):</strong> A reação de neutralização ácido-base é um caso clássico.<ul><li>Ex: <code>HCl<sub>(aq)</sub> + NaOH<sub>(aq)</sub> → NaCl<sub>(aq)</sub> + H<sub>2</sub>O<sub>(l)</sub></code> (Água é uma molécula muito estável e pouco ionizada)</li></ul></li></ol><p>Se nenhum desses critérios for atendido, considera-se que não houve reação efetiva, apenas uma mistura de íons em solução.</p>`
  },
  {
    id: 'oxirreducaoRedox',
    conceptTitle: 'Oxirredução (Redox)',
    visualRepresentation: 'e<sup>-</sup> <span style="font-size: 0.8em;">⇌</span> ⚡',
    definition: 'Reações que envolvem transferência de elétrons, resultando na variação do Número de Oxidação (NOX).',
    keywords: 'Transferência de Elétrons, NOX, Agente Oxidante, Agente Redutor',
    modalTitle: 'Reações de Oxirredução (Redox)',
    detailsHtml: `<p>As <strong>reações de oxirredução (ou redox)</strong> são aquelas que envolvem a <strong>transferência de elétrons</strong> entre as espécies químicas participantes. Essa transferência resulta na variação do <strong>Número de Oxidação (NOX)</strong> dos átomos envolvidos.</p><h4>Conceitos Fundamentais:</h4><ul><li><strong>Oxidação:</strong> É a <strong>perda</strong> de elétrons por uma espécie química. O NOX do elemento que oxida <strong>aumenta</strong>.</li><li><strong>Redução:</strong> É o <strong>ganho</strong> de elétrons por uma espécie química. O NOX do elemento que reduz <strong>diminui</strong>.</li><li><strong>Agente Oxidante:</strong> É a espécie química que <strong>provoca a oxidação</strong> de outra espécie, e ao fazer isso, ela mesma <strong>sofre redução</strong> (ganha elétrons).</li><li><strong>Agente Redutor:</strong> É a espécie química que <strong>provoca a redução</strong> de outra espécie, e ao fazer isso, ela mesma <strong>sofre oxidação</strong> (perde elétrons).</li></ul><p><strong>Lembrete:</strong> &quot;Quem oxida, perde elétrons e aumenta o NOX. Quem reduz, ganha elétrons e diminui o NOX.&quot;</p><h4>Identificação de Reações Redox:</h4><p>Uma reação é de oxirredução se houver variação do NOX de pelo menos dois elementos entre reagentes e produtos. As reações de simples troca são sempre redox. Muitas reações de síntese e decomposição também são redox.</p><h4>Exemplos:</h4><ul><li><code>Zn<sub>(s)</sub> + CuSO<sub>4(aq)</sub> → ZnSO<sub>4(aq)</sub> + Cu<sub>(s)</sub></code><ul><li>Zn (NOX 0 → +2): Oxida, é o agente redutor.</li><li>Cu (NOX +2 → 0): Reduz, está no CuSO<sub>4</sub> que é o agente oxidante.</li></ul></li><li><code>2 KMnO<sub>4(aq)</sub> + 10 FeSO<sub>4(aq)</sub> + 8 H<sub>2</sub>SO<sub>4(aq)</sub> → K<sub>2</sub>SO<sub>4(aq)</sub> + 2 MnSO<sub>4(aq)</sub> + 5 Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3(aq)</sub> + 8 H<sub>2</sub>O<sub>(l)</sub></code><ul><li>Mn no KMnO<sub>4</sub> (NOX +7 → +2 no MnSO<sub>4</sub>): Reduz (KMnO<sub>4</sub> é o agente oxidante).</li><li>Fe no FeSO<sub>4</sub> (NOX +2 → +3 no Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>): Oxida (FeSO<sub>4</sub> é o agente redutor).</li></ul></li></ul><p>As reações redox são fundamentais em processos como combustão, corrosão, respiração celular, fotossíntese e no funcionamento de pilhas e baterias.</p>`
  }
];

function ReacoesInorganicasPage() {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (concept) => {
    setModalContent({ title: concept.modalTitle, contentHtml: concept.detailsHtml });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // setModalContent(null); // Opcional: para liberar memória se o HTML for muito grande
  };

  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <h1>Reações Inorgânicas: A Dinâmica das Transformações</h1>
        <p>Explorando como as substâncias interagem e se convertem no mundo inorgânico.</p>
      </header>

      <main className={styles.conceptsGrid}>
        {reacoesInorganicasConcepts.map(concept => (
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
        <p>Testemunhando a dança dos átomos e moléculas! 🔄🔬✨</p>
      </footer>
    </div>
  );
}

export default ReacoesInorganicasPage;
