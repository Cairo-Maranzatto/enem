import React, { useState } from 'react';
import styles from './CadeiaAlimentarPage.module.css';
import ConceptCard from '../../../../components/ConceptCard/ConceptCard';
import ConceptModal from '../../../../components/ConceptCard/ConceptModal';

const cadeiaAlimentarConcepts = [
  {
    id: 'produtores',
    conceptTitle: 'Produtores',
    visualRepresentation: '🌿☀️💧',
    definition: 'Seres autotróficos que produzem seu próprio alimento (base da cadeia).',
    keywords: 'Fotossíntese, Plantas, Algas, Autótrofos',
    detailsHtml: `<div class="modal-content-custom">Os produtores são organismos <strong>autotróficos</strong>, ou seja, capazes de produzir seu próprio alimento a partir de substâncias inorgânicas. Eles formam a base de todas as cadeias alimentares.<ul><li><strong>Principal Processo:</strong> A maioria dos produtores realiza a <strong>fotossíntese</strong>, utilizando a energia luminosa do sol, água e dióxido de carbono para produzir glicose (matéria orgânica) e oxigênio. Ex: plantas, algas e cianobactérias.</li><li><strong>Outro Processo:</strong> Alguns produtores, como certas bactérias, realizam a <strong>quimiossíntese</strong>, utilizando energia de reações químicas com substâncias inorgânicas (ex: compostos de enxofre ou ferro) para produzir matéria orgânica. Ocorrem em ambientes como fontes hidrotermais oceânicas.</li><li><strong>Importância:</strong> São a fonte primária de energia e matéria orgânica para todos os outros seres vivos do ecossistema.</li></ul></div>`
  },
  {
    id: 'consumidores-primarios',
    conceptTitle: 'Consumidores Primários',
    visualRepresentation: '🦗🐇🐄',
    definition: 'Herbívoros que se alimentam dos produtores.',
    keywords: 'Herbívoros, Segundo Nível Trófico, Gafanhoto, Coelho',
    detailsHtml: `<div class="modal-content-custom">Os consumidores primários são organismos <strong>herbívoros</strong>, ou seja, alimentam-se diretamente dos produtores (plantas, algas).<ul><li><strong>Nível Trófico:</strong> Ocupam o segundo nível trófico da cadeia alimentar.</li><li><strong>Exemplos:</strong> Gafanhotos, coelhos, bois, lagartas, zooplâncton (que se alimenta de fitoplâncton).</li><li><strong>Papel no Ecossistema:</strong> Transferem a energia e matéria obtida dos produtores para os níveis tróficos seguintes. Controlam a população de produtores.</li><li><strong>Adaptações:</strong> Possuem adaptações para digerir celulose e outros componentes vegetais, como dentes especializados e sistemas digestórios longos.</li></ul></div>`
  },
  {
    id: 'consumidores-secundarios',
    conceptTitle: 'Consumidores Secundários',
    visualRepresentation: '🐍🦊🐸',
    definition: 'Carnívoros ou onívoros que se alimentam dos consumidores primários.',
    keywords: 'Carnívoros, Onívoros, Terceiro Nível Trófico, Cobra, Sapo',
    detailsHtml: `<div class="modal-content-custom">Os consumidores secundários são organismos que se alimentam dos consumidores primários (herbívoros). Podem ser <strong>carnívoros</strong> ou <strong>onívoros</strong>.<ul><li><strong>Nível Trófico:</strong> Ocupam o terceiro nível trófico.</li><li><strong>Exemplos de Carnívoros:</strong> Cobras (que comem ratos), sapos (que comem insetos), raposas (que comem coelhos).</li><li><strong>Exemplos de Onívoros:</strong> Alguns ursos, seres humanos (quando comem carne de herbívoros). Onívoros podem ocupar diferentes níveis tróficos dependendo do que consomem.</li><li><strong>Papel no Ecossistema:</strong> Controlam as populações de consumidores primários.</li></ul></div>`
  },
  {
    id: 'consumidores-terciarios-e-ordens-superiores',
    conceptTitle: 'Consumidores Terciários +',
    visualRepresentation: '🦅🦁🦈',
    definition: 'Carnívoros que se alimentam de outros carnívoros (consumidores secundários).',
    keywords: 'Predador de Topo, Quarto Nível Trófico, Águia, Leão',
    detailsHtml: `<div class="modal-content-custom">Os consumidores terciários alimentam-se dos consumidores secundários. Consumidores de ordens superiores (quaternários, etc.) alimentam-se de consumidores do nível anterior. Geralmente são <strong>carnívoros de topo</strong> ou grandes onívoros.<ul><li><strong>Nível Trófico:</strong> Ocupam o quarto nível trófico (terciários) e níveis subsequentes.</li><li><strong>Exemplos:</strong> Águias (que comem cobras), tubarões (que comem peixes carnívoros menores), leões.</li><li><strong>Características:</strong> Frequentemente são predadores de topo, com pouca ou nenhuma predação natural no ecossistema (exceto por humanos ou outros predadores de topo em certas situações).</li><li><strong>Impacto:</strong> A remoção de predadores de topo pode causar desequilíbrios significativos na cadeia alimentar (efeito cascata).</li></ul></div>`
  },
  {
    id: 'decompositores',
    conceptTitle: 'Decompositores',
    visualRepresentation: '🍄🦠♻️',
    definition: 'Fungos e bactérias que decompõem matéria orgânica morta, reciclando nutrientes.',
    keywords: 'Fungos, Bactérias, Reciclagem, Matéria Orgânica',
    detailsHtml: `<div class="modal-content-custom">Os decompositores são organismos <strong>heterotróficos</strong> que obtêm nutrientes e energia a partir da decomposição da matéria orgânica morta (cadáveres de plantas e animais, fezes, restos de alimentos).<ul><li><strong>Principais Grupos:</strong> Fungos (cogumelos, bolores) e bactérias.</li><li><strong>Nível Trófico:</strong> Atuam em todos os níveis tróficos, pois decompõem organismos de qualquer nível após a morte. Não são representados em um nível específico na cadeia linear, mas são fundamentais para o ciclo da matéria.</li><li><strong>Processo:</strong> Liberam enzimas digestivas sobre a matéria orgânica, quebrando moléculas complexas em substâncias mais simples (minerais, nutrientes) que retornam ao solo e à água, ficando disponíveis novamente para os produtores.</li><li><strong>Importância:</strong> Essenciais para a <strong>ciclagem de nutrientes</strong> no ecossistema. Sem eles, os nutrientes ficariam presos na matéria morta.</li></ul></div>`
  },
  {
    id: 'niveis-troficos',
    conceptTitle: 'Níveis Tróficos',
    visualRepresentation: '📊➡️➡️➡️',
    definition: 'Posição de um organismo na cadeia alimentar, baseada em sua dieta.',
    keywords: 'Produtor, Consumidor, Herbívoro, Carnívoro',
    detailsHtml: `<div class="modal-content-custom">Nível trófico (ou nível alimentar) refere-se à posição que um organismo ocupa em uma cadeia ou teia alimentar, de acordo com sua fonte de alimento.<ul><li><strong>1º Nível Trófico:</strong> Produtores (plantas, algas).</li><li><strong>2º Nível Trófico:</strong> Consumidores Primários (herbívoros).</li><li><strong>3º Nível Trófico:</strong> Consumidores Secundários (carnívoros que comem herbívoros).</li><li><strong>4º Nível Trófico:</strong> Consumidores Terciários (carnívoros que comem outros carnívoros).</li><li>E assim por diante. Organismos onívoros podem ocupar mais de um nível trófico. Decompositores atuam sobre todos os níveis.</li><li><strong>Transferência de Energia:</strong> A energia flui de um nível trófico para o seguinte, mas com perdas significativas em cada transferência (cerca de 10% da energia é aproveitada).</li></ul></div>`
  },
  {
    id: 'teia-alimentar',
    conceptTitle: 'Teia Alimentar',
    visualRepresentation: '🕸️🔗🐞',
    definition: 'Conjunto de cadeias alimentares interligadas em um ecossistema.',
    keywords: 'Rede Alimentar, Interconexões, Biodiversidade, Estabilidade',
    detailsHtml: `<div class="modal-content-custom">Uma teia alimentar (ou rede alimentar) é um modelo que representa as múltiplas e complexas relações de alimentação entre os diversos organismos de um ecossistema. Diferentemente de uma cadeia alimentar linear, a teia mostra que a maioria dos seres vivos consome mais de um tipo de alimento e serve de alimento para mais de um tipo de predador.<ul><li><strong>Cadeia vs. Teia:</strong> Enquanto a <strong>cadeia alimentar</strong> é uma sequência linear simples (ex: planta → gafanhoto → sapo → cobra), a <strong>teia alimentar</strong> é uma rede de cadeias interconectadas, refletindo a realidade de que os organismos geralmente têm dietas variadas e participam de múltiplas cadeias simultaneamente.</li><li><strong>Complexidade e Conexões:</strong> A complexidade de uma teia alimentar é dada pelo número de espécies e pela quantidade de interações entre elas. Quanto mais conexões, mais complexa é a teia.</li><li><strong>Estabilidade do Ecossistema:</strong> Teias alimentares mais complexas, com maior biodiversidade, tendem a conferir maior <strong>estabilidade</strong> ao ecossistema. Se uma espécie é removida ou sua população diminui drasticamente, os predadores que dependiam dela podem ter outras fontes de alimento, e as presas podem ser controladas por outros predadores, minimizando o efeito cascata.</li><li><strong>Espécies-Chave (Keystone Species):</strong> Algumas espécies, mesmo não sendo as mais abundantes, desempenham um papel crucial na manutenção da estrutura e diversidade da teia alimentar. A remoção de uma espécie-chave pode levar ao colapso ou a uma drástica alteração da teia. Ex: lontras marinhas (controlam populações de ouriços-do-mar, que por sua vez consomem algas kelp).</li><li><strong>Níveis Tróficos Múltiplos:</strong> Um mesmo organismo pode ocupar diferentes níveis tróficos em uma teia alimentar. Por exemplo, um urso onívoro pode ser consumidor primário ao comer frutas, secundário ao comer peixes herbívoros, e terciário ao comer salmões que se alimentaram de outros peixes.</li><li><strong>Impactos Humanos:</strong> Atividades humanas como desmatamento, poluição, introdução de espécies invasoras, caça e pesca predatória podem simplificar as teias alimentares, reduzir a biodiversidade e levar à extinção de espécies, comprometendo a estabilidade e o funcionamento dos ecossistemas.</li><li><strong>Representação:</strong> Geralmente é visualizada como um diagrama com setas que apontam do organismo que é comido para o organismo que come, indicando o fluxo de energia e nutrientes.</li></ul></div>`
  },
  {
    id: 'fluxo-de-energia',
    conceptTitle: 'Fluxo de Energia',
    visualRepresentation: '☀️➡️🌿➡️🐇➡️🦊',
    definition: 'Movimento unidirecional da energia através dos níveis tróficos, com perdas.',
    keywords: 'Sol, Unidirecional, Perda de Energia, 10%',
    detailsHtml: `<div class="modal-content-custom">O fluxo de energia em um ecossistema descreve como a energia é transferida de um organismo para outro através das cadeias e teias alimentares.<ul><li><strong>Fonte Primária:</strong> A principal fonte de energia para a maioria dos ecossistemas é o <strong>Sol</strong>. Os produtores convertem energia solar em energia química (matéria orgânica).</li><li><strong>Unidirecional:</strong> O fluxo de energia é <strong>unidirecional</strong>, ou seja, ela não retorna aos níveis tróficos anteriores. A energia entra no ecossistema pelos produtores e é transferida para os consumidores.</li><li><strong>Perda de Energia:</strong> Em cada transferência de um nível trófico para o seguinte, cerca de <strong>90% da energia é perdida</strong> na forma de calor (devido à respiração celular, atividades metabólicas) ou não é assimilada. Apenas cerca de 10% é convertida em biomassa e fica disponível para o próximo nível.</li><li><strong>Consequência:</strong> Isso limita o número de níveis tróficos em uma cadeia alimentar (geralmente 4 ou 5 níveis).</li></ul></div>`
  },
  {
    id: 'piramides-ecologicas',
    conceptTitle: 'Pirâmides Ecológicas',
    visualRepresentation: '🔺📊🔢⚖️⚡',
    definition: 'Representações gráficas da estrutura trófica (números, biomassa, energia).',
    keywords: 'Números, Biomassa, Energia, Estrutura Trófica',
    detailsHtml: `<div class="modal-content-custom">Pirâmides ecológicas são representações gráficas da estrutura trófica de um ecossistema. A base representa os produtores, e os níveis subsequentes representam os consumidores. Existem três tipos principais:<ul><li><strong>Pirâmide de Números:</strong> Representa o número de indivíduos em cada nível trófico. Geralmente tem formato de pirâmide direta (base larga, topo estreito), mas pode ser invertida (ex: uma única árvore sustentando muitos insetos).</li><li><strong>Pirâmide de Biomassa:</strong> Representa a quantidade total de matéria orgânica (biomassa) em cada nível trófico, por unidade de área ou volume. Geralmente é direta, mas em ecossistemas aquáticos pode ser invertida (ex: fitoplâncton com biomassa menor que zooplâncton devido à rápida reprodução e consumo).</li><li><strong>Pirâmide de Energia:</strong> Representa a quantidade de energia disponível em cada nível trófico ao longo de um período. É <strong>sempre direta</strong>, pois a energia diminui a cada nível devido às perdas (2ª Lei da Termodinâmica). É a representação mais fundamental da estrutura trófica.</li></ul></div>`
  }
];

const CadeiaAlimentarPage = () => {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (concept) => {
    let modalTitle = concept.conceptTitle;
    if (concept.id === 'consumidores-terciarios-e-ordens-superiores') {
      modalTitle = 'Consumidores Terciários (e Ordens Superiores)';
    }
    setModalContent({ title: modalTitle, contentHtml: concept.detailsHtml });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <h1>Cadeia Alimentar</h1>
        <p>A incrível jornada da energia e matéria nos ecossistemas!</p>
      </header>
      <main className={styles.conceptsGrid}>
        {cadeiaAlimentarConcepts.map(concept => (
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
        <p>Explorando as conexões da vida nos ecossistemas!</p>
      </footer>
    </div>
  );
};

export default CadeiaAlimentarPage;
