import React, { useState } from 'react';
import styles from './PoluicaoDaAguaPage.module.css';
import ConceptCard from '../../../../components/ConceptCard/ConceptCard';
import ConceptModal from '../../../../components/ConceptCard/ConceptModal';

const poluicaoDaAguaConcepts = [
  {
    id: 'poluicao-da-agua',
    conceptTitle: 'Poluição da Água',
    visualRepresentation: '💧🏭⚠️🐟',
    definition: 'Altera a qualidade da água por substâncias nocivas.',
    keywords: 'Esgoto, Agrotóxicos, Metais Pesados, Eutrofização',
    detailsHtml: `<div class="modal-content-custom">A <strong>poluição da água</strong> é a alteração das características físicas, químicas ou biológicas da água, tornando-a imprópria para o consumo ou prejudicial aos organismos vivos. É um dos problemas ambientais mais graves do planeta.<ul><li><strong>Principais Tipos/Fontes:</strong><ul><li><strong>Doméstica:</strong> Esgotos residenciais (matéria orgânica, detergentes, patógenos).</li><li><strong>Industrial:</strong> Efluentes de indústrias (metais pesados, produtos químicos tóxicos, óleos, calor).</li><li><strong>Agrícola:</strong> Agrotóxicos (pesticidas, herbicidas) e fertilizantes que são carregados pela chuva para rios e lagos.</li><li><strong>Acidental:</strong> Vazamentos de petróleo, descarte inadequado de resíduos.</li></ul></li><li><strong>Principais Poluentes:</strong><ul><li>Matéria orgânica em excesso (causa eutrofização).</li><li>Esgoto sanitário (rico em microrganismos patogênicos).</li><li>Agrotóxicos e fertilizantes.</li><li>Metais pesados (mercúrio, chumbo, cádmio - altamente tóxicos e bioacumulativos).</li><li>Plásticos e microplásticos.</li><li>Óleos e graxas.</li></ul></li><li><strong>Consequências:</strong><ul><li><strong>Eutrofização:</strong> Enriquecimento excessivo da água por nutrientes, levando à proliferação de algas, consumo de oxigênio e morte de peixes.</li><li>Transmissão de doenças de veiculação hídrica (cólera, hepatite A, febre tifoide).</li><li>Perda de biodiversidade aquática.</li><li>Contaminação de lençóis freáticos e solos.</li><li>Impactos na saúde humana (intoxicações, problemas neurológicos por metais pesados).</li><li>Prejuízos econômicos (pesca, turismo, tratamento da água).</li></ul></li><li><strong>Soluções/Prevenção:</strong><ul><li>Saneamento básico universal (coleta e tratamento de esgoto).</li><li>Tratamento adequado de efluentes industriais.</li><li>Uso consciente e racional da água.</li><li>Práticas agrícolas sustentáveis (manejo integrado de pragas, uso racional de fertilizantes).</li><li>Fiscalização rigorosa e legislação ambiental eficaz.</li><li>Educação ambiental e conscientização da população.</li><li>Descarte correto de resíduos sólidos e líquidos.</li><li>Proteção de mananciais e matas ciliares.</li></ul></li></ul></div>`
  },
  {
    id: 'chuva-acida',
    conceptTitle: 'Chuva Ácida',
    visualRepresentation: '🌧️🏭🚗💨📉',
    definition: 'Precipitação com pH ácido devido a poluentes atmosféricos.',
    keywords: 'SOx, NOx, pH Ácido, Combustíveis Fósseis, Corrosão',
    detailsHtml: `<div class="modal-content-custom">A <strong>chuva ácida</strong> é qualquer forma de precipitação (chuva, neve, granizo, neblina) que apresenta acidez anormalmente elevada, ou seja, um pH inferior ao da chuva natural (que é levemente ácida, em torno de 5,6, devido à dissolução do CO₂ atmosférico).<ul><li><strong>Definição e pH:</strong> Considera-se chuva ácida aquela com pH abaixo de 5,5 - 5,0. Quanto menor o pH, maior a acidez.</li><li><strong>Formação:</strong><ul><li>Resulta da reação química entre o vapor d'água atmosférico e gases poluentes, principalmente dióxido de enxofre (SO₂) e óxidos de nitrogênio (NOx - NO, NO₂).</li><li>Esses gases, ao reagirem com a água, formam ácido sulfúrico (H₂SO₄) e ácido nítrico (HNO₃), que se precipitam.</li><li>SO₂ + H₂O → H₂SO₃ (ácido sulfuroso); H₂SO₃ + ½O₂ → H₂SO₄ (ácido sulfúrico)</li><li>NOx + H₂O → HNO₂ (ácido nitroso) e HNO₃ (ácido nítrico)</li></ul></li><li><strong>Fontes dos Poluentes:</strong><ul><li><strong>Dióxido de Enxofre (SO₂):</strong> Principalmente pela queima de combustíveis fósseis ricos em enxofre (carvão mineral, óleo diesel) em usinas termoelétricas, processos industriais e vulcões.</li><li><strong>Óxidos de Nitrogênio (NOx):</strong> Gerados pela queima de combustíveis fósseis em altas temperaturas, como em motores de veículos (carros, caminhões, aviões) e algumas indústrias.</li></ul></li><li><strong>Consequências:</strong><ul><li><strong>Ambientais:</strong> Acidificação de lagos, rios e solos, prejudicando a vida aquática (morte de peixes, anfíbios) e terrestre (liberação de metais tóxicos no solo, danos às raízes das plantas). Danos a florestas e plantações, tornando as plantas mais vulneráveis a pragas e doenças.</li><li><strong>Materiais:</strong> Corrosão de monumentos históricos (mármore, calcário), estruturas metálicas, pinturas de veículos.</li><li><strong>Saúde Humana:</strong> Agravamento de problemas respiratórios (asma, bronquite), irritação nos olhos e pele. Contaminação de fontes de água potável por metais tóxicos liberados do solo.</li></ul></li><li><strong>Soluções/Prevenção:</strong><ul><li>Redução drástica da emissão de SO₂ e NOx.</li><li>Uso de combustíveis com menor teor de enxofre e tecnologias de dessulfurização.</li><li>Instalação de filtros e catalisadores em chaminés de indústrias e escapamentos de veículos.</li><li>Incentivo ao uso de fontes de energia renováveis e limpas (solar, eólica, hidrelétrica).</li><li>Melhora da eficiência energética.</li><li>Incentivo ao transporte público e veículos menos poluentes.</li><li>Acordos internacionais para controle da poluição transfronteiriça.</li></ul></li></ul></div>`
  }
];

const PoluicaoDaAguaPage = () => {
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
        <h1>Poluição da Água e Chuva Ácida</h1>
        <p>Entendendo os impactos ambientais e soluções para a poluição hídrica e atmosférica.</p>
      </header>
      <main className={styles.conceptsGrid}>
        {poluicaoDaAguaConcepts.map(concept => (
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
        <p>Cuidar do nosso planeta é cuidar da nossa saúde e futuro! 🌍💧</p>
      </footer>
    </div>
  );
};

export default PoluicaoDaAguaPage;
