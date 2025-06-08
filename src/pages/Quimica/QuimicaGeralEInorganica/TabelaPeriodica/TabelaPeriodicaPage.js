import React, { useState, useEffect } from 'react';
import styles from './TabelaPeriodicaPage.module.css';
import ConceptCard from '../../../../components/ConceptCard/ConceptCard';
import ConceptModal from '../../../../components/ConceptCard/ConceptModal';

const tabelaPeriodicaConcepts = [
  {
    id: 'descobertaEvolucaoTabelaPeriodica',
    conceptTitle: 'A Descoberta e Evolução da Tabela Periódica',
    visualRepresentation: '📜➡️🗺️',
    definition: 'A jornada desde as primeiras tentativas de organização até a moderna Lei Periódica baseada no número atômico.',
    keywords: 'Mendeleev, Moseley, Lei Periódica, Evolução',
    modalTitle: 'A Descoberta e Evolução da Tabela Periódica',
    detailsHtml: `<p>A Tabela Periódica dos Elementos Químicos é uma das ferramentas mais icônicas e úteis da química. Sua forma atual é o resultado de séculos de observações, hipóteses e experimentos por inúmeros cientistas.</p><ul><li><strong>Primeiras Tentativas:</strong> No início do século XIX, cientistas como Johann Döbereiner (Tríades) e John Newlands (Lei das Oitavas) notaram padrões nas propriedades dos elementos conhecidos e tentaram organizá-los.</li><li><strong>Dmitri Mendeleev (1869):</strong> Considerado o pai da tabela periódica moderna, Mendeleev organizou os 63 elementos conhecidos na época em ordem crescente de massa atômica. Sua genialidade residiu em:<ul><li>Deixar espaços vazios para elementos ainda não descobertos, prevendo suas propriedades com base nas tendências observadas (ex: eka-alumínio, eka-silício).</li><li>Em alguns casos, inverter a ordem da massa atômica para que elementos com propriedades semelhantes ficassem no mesmo grupo (ex: Telúrio e Iodo).</li></ul>Ele enunciou a <strong>Lei Periódica</strong>: &quot;as propriedades dos elementos são uma função periódica de suas massas atômicas&quot;.</li><li><strong>Lothar Meyer (1869):</strong> Independentemente de Mendeleev, Meyer também propôs uma tabela semelhante, baseada em volumes atômicos.</li><li><strong>Henry Moseley (1913):</strong> Através de experimentos com raios-X, Moseley descobriu que o número atômico (número de prótons) era a propriedade fundamental para ordenar os elementos, e não a massa atômica. Isso resolveu as inconsistências da tabela de Mendeleev e levou à formulação moderna da Lei Periódica: &quot;as propriedades dos elementos são uma função periódica de seus números atômicos&quot;.</li><li><strong>Glenn T. Seaborg (década de 1940):</strong> Propôs a reconfiguração da tabela para incluir a série dos Actinídeos abaixo dos Lantanídeos, dando à tabela sua forma longa familiar.</li></ul><p>A Tabela Periódica continua a evoluir à medida que novos elementos são sintetizados e caracterizados.</p>`
  },
  {
    id: 'estruturaTabelaPeriodosGrupos',
    conceptTitle: 'Estrutura da Tabela: Períodos e Grupos',
    visualRepresentation: '↔️↕️',
    definition: 'Organização em linhas (períodos) e colunas (grupos/famílias) baseada no número atômico e configuração eletrônica.',
    keywords: 'Períodos, Grupos, Famílias, Configuração Eletrônica',
    modalTitle: 'Estrutura da Tabela: Períodos e Grupos',
    detailsHtml: `<p>A Tabela Periódica é organizada em uma grade, onde cada elemento ocupa uma célula específica. A disposição dos elementos segue uma lógica baseada em seus números atômicos e configurações eletrônicas.</p><h4>Períodos (Linhas Horizontais)</h4><ul><li>São as <strong>7 linhas horizontais</strong> da tabela.</li><li>O número do período (de 1 a 7) corresponde ao <strong>número quântico principal (n)</strong> da camada de valência (camada eletrônica mais externa) dos elementos naquele período.</li><li>Ao longo de um período, o número atômico aumenta da esquerda para a direita, e as propriedades dos elementos variam de forma gradual. Por exemplo, o raio atômico geralmente diminui e a eletronegatividade aumenta.</li></ul><h4>Grupos ou Famílias (Colunas Verticais)</h4><ul><li>São as <strong>18 colunas verticais</strong> da tabela.</li><li>Elementos no mesmo grupo possuem <strong>configurações eletrônicas de valência semelhantes</strong> (mesmo número de elétrons na camada de valência, ou mesma distribuição nesses elétrons).</li><li>Devido a essa semelhança na configuração eletrônica, elementos do mesmo grupo tendem a ter <strong>propriedades químicas semelhantes</strong>.</li><li>Alguns grupos possuem nomes tradicionais:<ul><li><strong>Grupo 1:</strong> Metais Alcalinos (exceto Hidrogênio)</li><li><strong>Grupo 2:</strong> Metais Alcalinoterrosos</li><li><strong>Grupo 13:</strong> Grupo do Boro</li><li><strong>Grupo 14:</strong> Grupo do Carbono</li><li><strong>Grupo 15:</strong> Grupo do Nitrogênio (Pnictogênios)</li><li><strong>Grupo 16:</strong> Calcogênios</li><li><strong>Grupo 17:</strong> Halogênios</li><li><strong>Grupo 18:</strong> Gases Nobres</li></ul></li><li>Os elementos dos grupos 3 a 12 são chamados de <strong>Metais de Transição</strong>.</li><li>As duas fileiras separadas na parte inferior da tabela são os <strong>Lantanídeos</strong> (primeira fileira) e os <strong>Actinídeos</strong> (segunda fileira), também conhecidos como Metais de Transição Interna.</li></ul>`
  },
  {
    id: 'classificacaoGeralElementos',
    conceptTitle: 'Classificação Geral dos Elementos',
    visualRepresentation: 'M A G H',
    definition: 'Divisão principal em Metais, Ametais (Não-Metais), Semimetais (Metaloides) e Gases Nobres, com o Hidrogênio como caso especial.',
    keywords: 'Metais, Ametais, Semimetais, Gases Nobres, Hidrogênio',
    modalTitle: 'Classificação Geral dos Elementos',
    detailsHtml: `<p>Os elementos da Tabela Periódica podem ser amplamente classificados com base em suas propriedades físicas e químicas. As principais categorias são Metais, Ametais (ou Não-Metais), Semimetais (ou Metaloides) e Gases Nobres. O Hidrogênio é um caso especial.</p><h4>Metais</h4><ul><li>Localização: A maioria dos elementos da tabela, localizados à esquerda e no centro.</li><li>Propriedades Típicas:<ul><li>Bons condutores de calor e eletricidade.</li><li>Brilho característico (lustro metálico).</li><li>Maleáveis (podem ser moldados em lâminas) e dúcteis (podem ser estirados em fios).</li><li>Geralmente sólidos à temperatura ambiente (exceto o Mercúrio, Hg).</li><li>Tendência a perder elétrons para formar cátions.</li></ul></li><li>Exemplos: Ferro (Fe), Cobre (Cu), Ouro (Au), Sódio (Na), Alumínio (Al).</li></ul><h4>Ametais (Não-Metais)</h4><ul><li>Localização: Geralmente no lado direito superior da tabela.</li><li>Propriedades Típicas:<ul><li>Maus condutores de calor e eletricidade (isolantes).</li><li>Sem brilho metálico, geralmente opacos ou coloridos.</li><li>Quebradiços quando sólidos.</li><li>Podem ser sólidos, líquidos (Bromo, Br) ou gases à temperatura ambiente.</li><li>Tendência a ganhar elétrons para formar ânions ou compartilhar elétrons em ligações covalentes.</li></ul></li><li>Exemplos: Oxigênio (O), Nitrogênio (N), Carbono (C), Enxofre (S), Cloro (Cl).</li></ul><h4>Semimetais (Metaloides)</h4><ul><li>Localização: Formam uma &quot;escada&quot; diagonal entre os metais e ametais.</li><li>Propriedades Típicas: Possuem propriedades intermediárias entre metais e ametais. Podem ser semicondutores de eletricidade.</li><li>Exemplos: Boro (B), Silício (Si), Germânio (Ge), Arsênio (As), Antimônio (Sb), Telúrio (Te), Polônio (Po).</li></ul><h4>Gases Nobres</h4><ul><li>Localização: Grupo 18 (última coluna à direita).</li><li>Propriedades Típicas:<ul><li>Gases monoatômicos à temperatura ambiente.</li><li>Extremamente inertes (pouco reativos) devido à sua camada de valência completa (8 elétrons, ou 2 para o Hélio).</li></ul></li><li>Exemplos: Hélio (He), Neônio (Ne), Argônio (Ar), Criptônio (Kr), Xenônio (Xe), Radônio (Rn).</li></ul><h4>Hidrogênio (H)</h4><ul><li>É um elemento único, geralmente posicionado no Grupo 1, mas com propriedades distintas dos metais alcalinos.</li><li>Pode perder um elétron (formando H<sup>+</sup>) ou ganhar um elétron (formando H<sup>-</sup>, o íon hidreto) ou compartilhar elétrons.</li><li>É o elemento mais abundante no universo.</li></ul>`
  },
  {
    id: 'propriedadesPeriodicasTendencias',
    conceptTitle: 'Propriedades Periódicas e Suas Tendências',
    visualRepresentation: '📏⚡️<span style="font-size:0.8em; color: #E74C3C;">♥</span>️🔥',
    definition: 'Variações regulares de características como raio atômico, energia de ionização, eletronegatividade e afinidade eletrônica.',
    keywords: 'Raio Atômico, Energia de Ionização, Eletronegatividade, Afinidade Eletrônica',
    modalTitle: 'Propriedades Periódicas e Suas Tendências',
    detailsHtml: `<p>As propriedades periódicas são características dos elementos que variam de forma previsível e regular ao longo dos períodos e grupos da Tabela Periódica. Essas tendências são explicadas pela estrutura eletrônica dos átomos.</p><h4>1. Raio Atômico</h4><ul><li>Definição: Metade da distância entre os núcleos de dois átomos idênticos ligados quimicamente (para elementos que formam moléculas) ou em um cristal (para metais). Indica o &quot;tamanho&quot; do átomo.</li><li>Tendência:<ul><li><strong>Nos Grupos:</strong> Aumenta de cima para baixo (devido ao aumento do número de camadas eletrônicas).</li><li><strong>Nos Períodos:</strong> Diminui da esquerda para a direita (devido ao aumento da carga nuclear efetiva, que atrai mais fortemente os elétrons da camada de valência).</li></ul></li></ul><h4>2. Energia de Ionização (ou Potencial de Ionização)</h4><ul><li>Definição: A energia mínima necessária para remover um elétron de um átomo gasoso no seu estado fundamental, formando um cátion.</li><li>Tendência:<ul><li><strong>Nos Grupos:</strong> Diminui de cima para baixo (elétrons mais distantes do núcleo são mais fáceis de remover).</li><li><strong>Nos Períodos:</strong> Aumenta da esquerda para a direita (maior carga nuclear efetiva segura os elétrons mais firmemente).</li></ul></li><li>Gases nobres possuem as maiores energias de ionização.</li></ul><h4>3. Eletronegatividade</h4><ul><li>Definição: A medida da tendência de um átomo em atrair para si os elétrons de uma ligação química covalente.</li><li>Tendência (Escala de Pauling é a mais comum):<ul><li><strong>Nos Grupos:</strong> Diminui de cima para baixo.</li><li><strong>Nos Períodos:</strong> Aumenta da esquerda para a direita.</li></ul></li><li>O Flúor (F) é o elemento mais eletronegativo. Gases nobres geralmente não têm valores de eletronegatividade definidos, pois raramente formam ligações.</li></ul><h4>4. Afinidade Eletrônica (ou Eletroafinidade)</h4><ul><li>Definição: A energia liberada (ou absorvida) quando um átomo gasoso no seu estado fundamental ganha um elétron, formando um ânion.</li><li>Tendência (geral, com exceções):<ul><li><strong>Nos Grupos:</strong> Diminui (em módulo) de cima para baixo.</li><li><strong>Nos Períodos:</strong> Aumenta (em módulo) da esquerda para a direita.</li></ul></li><li>Halogênios (Grupo 17) possuem altas afinidades eletrônicas.</li></ul><p>Outras propriedades como caráter metálico, densidade, ponto de fusão e ebulição também exibem tendências periódicas.</p>`
  },
  {
    id: 'blocosTabelaPeriodicaSpdf',
    conceptTitle: 'Blocos da Tabela Periódica (s, p, d, f)',
    visualRepresentation: '[s] [p] [d] [f]',
    definition: 'Divisão baseada no subnível de energia mais externo (s, p, d, f) que está sendo preenchido pelos elétrons de valência.',
    keywords: 'Bloco s, Bloco p, Bloco d, Bloco f, Subníveis',
    modalTitle: 'Blocos da Tabela Periódica (s, p, d, f)',
    detailsHtml: `<p>A Tabela Periódica pode ser dividida em blocos (s, p, d, f) com base no subnível de energia mais externo (ou mais energético) que está sendo preenchido pelos elétrons de valência, de acordo com o Diagrama de Linus Pauling.</p><h4>Bloco s</h4><ul><li>Compreende os <strong>Grupos 1 (Metais Alcalinos) e 2 (Metais Alcalinoterrosos)</strong>, além do Hélio (He).</li><li>Os elétrons de valência desses elementos ocupam o subnível <strong>s</strong>.</li><li>Configuração eletrônica de valência: ns<sup>1</sup> (Grupo 1) e ns<sup>2</sup> (Grupo 2).</li><li>São metais reativos (exceto Hélio).</li></ul><h4>Bloco p</h4><ul><li>Compreende os <strong>Grupos 13 a 18</strong> (exceto o Hélio).</li><li>Os elétrons de valência desses elementos ocupam os subníveis <strong>s</strong> e <strong>p</strong> da camada mais externa.</li><li>Configuração eletrônica de valência: ns<sup>2</sup> np<sup>1</sup> a ns<sup>2</sup> np<sup>6</sup>.</li><li>Inclui metais, semimetais, ametais e gases nobres. É o bloco com maior diversidade de propriedades.</li></ul><h4>Bloco d</h4><ul><li>Compreende os <strong>Grupos 3 a 12</strong>, conhecidos como <strong>Metais de Transição</strong>.</li><li>Os elétrons de diferenciação (últimos a serem adicionados) preenchem o subnível <strong>d</strong> da penúltima camada eletrônica.</li><li>Configuração eletrônica geral: (n-1)d<sup>1-10</sup> ns<sup>0-2</sup>.</li><li>São todos metais, geralmente com alta densidade, pontos de fusão e ebulição elevados, e formam íons coloridos e compostos de coordenação.</li></ul><h4>Bloco f</h4><ul><li>Compreende as duas séries separadas na parte inferior da tabela:<ul><li><strong>Lantanídeos:</strong> Elementos após o Lantânio (La), preenchendo o subnível 4f.</li><li><strong>Actinídeos:</strong> Elementos após o Actínio (Ac), preenchendo o subnível 5f.</li></ul></li><li>Também são chamados de <strong>Metais de Transição Interna</strong>.</li><li>Os elétrons de diferenciação preenchem o subnível <strong>f</strong> da antepenúltima camada eletrônica.</li><li>São todos metais, e muitos actinídeos são radioativos.</li></ul><p>A divisão em blocos ajuda a entender a relação entre a configuração eletrônica e as propriedades dos elementos.</p>`
  },
  {
    id: 'tabelaPeriodicaFerramentaEssencial',
    conceptTitle: 'A Tabela Periódica como Ferramenta Essencial',
    visualRepresentation: '🔬🧪💡',
    definition: 'Sua importância na previsão de propriedades, entendimento de reações, desenvolvimento de materiais e diversas áreas da ciência.',
    keywords: 'Previsão, Reações, Materiais, Ensino, Ciência',
    modalTitle: 'A Tabela Periódica como Ferramenta Essencial',
    detailsHtml: `<p>A Tabela Periódica é muito mais do que um simples catálogo de elementos. É uma ferramenta poderosa e indispensável em diversas áreas da ciência e tecnologia.</p><h4>Importância e Aplicações:</h4><ul><li><strong>Previsão de Propriedades:</strong> Permite prever as propriedades físicas e químicas de elementos ainda não descobertos ou pouco estudados, com base nas tendências periódicas.</li><li><strong>Entendimento de Reações Químicas:</strong> Ajuda a entender como e por que os elementos reagem entre si, como formam ligações e quais tipos de compostos podem originar. A posição de um elemento indica sua reatividade, eletronegatividade, e tipos de íons que forma.</li><li><strong>Desenvolvimento de Novos Materiais:</strong> Guia a pesquisa e o desenvolvimento de novos materiais com propriedades específicas (ex: semicondutores, supercondutores, ligas metálicas, catalisadores).</li><li><strong>Ensino e Aprendizagem de Química:</strong> É a base para o estudo da química, fornecendo um quadro organizado para compreender a diversidade da matéria.</li><li><strong>Ciências Ambientais:</strong> Ajuda a entender a distribuição e o ciclo de elementos no ambiente, bem como a toxicidade e o impacto de certos elementos.</li><li><strong>Bioquímica e Medicina:</strong> Essencial para entender o papel dos elementos nos organismos vivos (ex: metais em enzimas, íons em processos celulares) e no desenvolvimento de fármacos.</li><li><strong>Astrofísica e Cosmologia:</strong> Usada para entender a composição de estrelas e planetas, e a origem dos elementos no universo (nucleossíntese).</li></ul><p>Dominar a Tabela Periódica é fundamental para qualquer estudante ou profissional das ciências exatas e naturais. Ela é um mapa que revela a lógica e a beleza da química dos elementos.</p>`
  }
];

function TabelaPeriodicaPage() {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPtModalOpen, setIsPtModalOpen] = useState(false); // Estado para o modal da Tabela Periódica

  const handleCardClick = (concept) => {
    setModalContent({ title: concept.modalTitle, contentHtml: concept.detailsHtml });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // setModalContent(null); // Opcional
  };

  const closePtModal = () => {
    setIsPtModalOpen(false);
    const ptModal = document.getElementById('myModal');
    if (ptModal) {
      ptModal.style.display = 'none';
    }
  };

  useEffect(() => {
    const scriptData = document.createElement('script');
    scriptData.id = 'periodic-table-data-script';
    scriptData.src = process.env.PUBLIC_URL + '/js/periodic-table-data.js';
    scriptData.type = 'text/javascript';
    scriptData.async = true;

    const scriptRenderer = document.createElement('script');
    scriptRenderer.id = 'periodic-table-renderer-script';
    scriptRenderer.src = process.env.PUBLIC_URL + '/js/periodic-table-renderer.js';
    scriptRenderer.type = 'text/javascript';
    scriptRenderer.async = true;

    const loadAllScripts = () => {
      console.log('Tentando carregar scripts dinamicamente...');
      console.log('Caminho para periodic-table-data.js:', scriptData.src);
      console.log('Caminho para periodic-table-renderer.js:', scriptRenderer.src);

      scriptData.onload = () => {
        console.log('periodic-table-data.js carregado com sucesso.');
        if (window.localPeriodicTableRawData) {
          console.log('window.localPeriodicTableRawData está disponível. Carregando periodic-table-renderer.js...');
          document.head.appendChild(scriptRenderer);
        } else {
          console.error('ERRO: periodic-table-data.js foi carregado, mas window.localPeriodicTableRawData não foi definido. O script de renderização não será carregado.');
        }
      };

      scriptData.onerror = (event) => {
        console.error('ERRO CRÍTICO ao carregar periodic-table-data.js de:', scriptData.src, 'Evento:', event);
        fetch(scriptData.src)
          .then(response => {
            if (!response.ok) {
              console.error(`Falha na requisição para ${scriptData.src}. Status: ${response.status} ${response.statusText}`);
            }
            return response.text();
          })
          .then(text => console.error('Conteúdo recebido para periodic-table-data.js (primeiros 500 chars):', text.substring(0, 500)))
          .catch(fetchErr => console.error('Erro ao tentar buscar o conteúdo do script de dados com falha:', fetchErr));
      };

      scriptRenderer.onload = () => {
        console.log('TabelaPeriodicaPage.js: periodic-table-renderer.js carregado com sucesso.');
        if (typeof window.initPeriodicTableRenderer === 'function') {
          console.log('TabelaPeriodicaPage.js: Chamando window.initPeriodicTableRenderer() para renderizar a tabela.');
          window.initPeriodicTableRenderer();
        } else {
          console.error('TabelaPeriodicaPage.js: ERRO - window.initPeriodicTableRenderer não está definida após o carregamento do script. A tabela pode não ser renderizada.');
        }
      };

      scriptRenderer.onerror = (event) => {
        console.error('ERRO CRÍTICO ao carregar periodic-table-renderer.js de:', scriptRenderer.src, 'Evento:', event);
        fetch(scriptRenderer.src)
          .then(response => {
            if (!response.ok) {
              console.error(`Falha na requisição para ${scriptRenderer.src}. Status: ${response.status} ${response.statusText}`);
            }
            return response.text();
          })
          .then(text => console.error('Conteúdo recebido para periodic-table-renderer.js (primeiros 500 chars):', text.substring(0, 500)))
          .catch(fetchErr => console.error('Erro ao tentar buscar o conteúdo do script de renderização com falha:', fetchErr));
      };

      // Inicia o carregamento do script de dados. O script de renderização será carregado no onload do de dados.
      document.head.appendChild(scriptData);
    };

    // Evita recarregar os scripts se já estiverem no DOM (útil para HMR ou navegação SPA)
    const dataScriptExists = document.getElementById(scriptData.id);
    const rendererScriptExists = document.getElementById(scriptRenderer.id);

    if (!dataScriptExists && !rendererScriptExists) {
      loadAllScripts();
    } else {
      console.log('Scripts da tabela periódica já parecem estar no DOM.');
      // Se os scripts já existem, e o container da tabela também, mas está vazio,
      // pode ser que o componente tenha sido remontado e o script renderer precise ser re-executado ou notificado.
      // O renderer.js atual auto-executa seu init(). Se o DOM foi limpo e recriado pelo React,
      // o init() original não vai encontrar o container. Idealmente, o renderer.js teria uma função global
      // para re-renderizar.
      // Por ora, se os scripts estão lá, confiamos que o init original fez seu trabalho ou que uma navegação completa recarregaria.
      if (document.getElementById('periodic-table-container') && !document.querySelector('#periodic-table-container .element-cell')){
        if (window.localPeriodicTableRawData && typeof window.initPeriodicTableRenderer === 'function') {
          console.log('Tentando re-renderizar a tabela com initPeriodicTableRenderer().');
          // window.initPeriodicTableRenderer(); // Descomentar se o renderer expor essa função
        } else {
          console.warn('Scripts carregados, tabela vazia, mas initPeriodicTableRenderer não está disponível globalmente para re-renderizar.');
          // A função renderPeriodicTable está no escopo do DOMContentLoaded do renderer.js
          // e não é global. O init() é chamado no final do script.
          // Se os scripts estão carregados, o init() já rodou.
          // Para forçar uma nova renderização, precisaríamos de uma função global ou um evento.
          console.warn('Scripts já carregados, mas a tabela parece vazia. A re-renderização manual pode ser necessária se o conteúdo não aparecer.');
        }
      }
    }

    return () => {
      const dataScript = document.getElementById('periodic-table-data-script');
      if (dataScript) dataScript.remove();
      const rendererScript = document.getElementById('periodic-table-renderer-script');
      if (rendererScript) rendererScript.remove();
    };
  }, []);

  useEffect(() => {
    const handleOpenPtModal = () => {
        setIsPtModalOpen(true);
        const ptModal = document.getElementById('myModal');
        if (ptModal) {
            ptModal.style.display = 'block';
        }
    };

    document.addEventListener('openElementDetailsModal', handleOpenPtModal);

    return () => {
        document.removeEventListener('openElementDetailsModal', handleOpenPtModal);
    };
  }, []);

  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <h1>Tabela Periódica: O Mapa dos Elementos</h1>
        <p>Explorando a organização e as propriedades dos blocos construtores da matéria.</p>
      </header>

      {/* Container da Tabela Periódica Interativa */}
      <div id="periodic-table-container" className={styles.periodicTableContainer}></div>

      {/* Modal para detalhes dos elementos da Tabela Periódica (controlado pelo periodic-table-renderer.js) */}
      <div id="myModal" className={styles.ptModal}> {/* Adicionada classe do module.css */}
        <div className={styles.ptModalContent}> {/* Adicionada classe do module.css */}
          <span className={styles.ptCloseButton} onClick={closePtModal}>&times;</span> {/* Adicionada classe e onClick */}
          <h2 id="modalConceptTitle">Título do Elemento</h2>
          <div id="modalConceptDetails" className={styles.ptModalDetails}> {/* Adicionada classe do module.css */}
            <p>Detalhes do elemento aparecerão aqui...</p>
          </div>
        </div>
      </div>

      <h2 className={styles.conceptsTitle}>Conceitos Fundamentais da Tabela Periódica</h2>
      <main className={styles.conceptsGrid}>
        {tabelaPeriodicaConcepts.map(concept => (
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

      {/* O modal da tabela periódica é renderizado acima e controlado por JS vanilla e estado isPtModalOpen */}

      <footer className={styles.pageFooter}>
        <p>Decifrando a linguagem dos elementos! 🧪🗺️✨</p>
      </footer>
    </div>
  );
}

export default TabelaPeriodicaPage;
