import React, { useState } from 'react';
import styles from './VacinasPage.module.css';
import ConceptCard from '../../../../components/ConceptCard/ConceptCard';
import ConceptModal from '../../../../components/ConceptCard/ConceptModal';

const vacinasConcepts = [
  {
    id: 'oQueSaoVacinas',
    conceptTitle: 'O que são Vacinas?',
    visualRepresentation: '💉🛡️',
    definition: 'Preparações biológicas que fornecem imunidade adquirida ativa contra doenças infecciosas específicas.',
    keywords: 'Imunização, Prevenção, Saúde Pública',
    modalTitle: 'O que são Vacinas?',
    detailsHtml: `<p>Vacinas são produtos biológicos desenvolvidos para estimular o sistema imunológico do corpo a reconhecer e combater agentes infecciosos específicos, como vírus ou bactérias. Elas contêm formas enfraquecidas, inativadas ou partes desses agentes (antígenos), que não causam a doença, mas são suficientes para &quot;treinar&quot; o sistema imune.</p><p><strong>Objetivo Principal:</strong></p><ul><li>Prevenir doenças graves e suas complicações.</li><li>Reduzir a disseminação de doenças na comunidade.</li><li>Contribuir para a erradicação de doenças, como foi o caso da varíola.</li></ul><p>Ao receber uma vacina, o corpo aprende a se defender contra o microrganismo específico, criando uma memória imunológica. Se houver uma exposição futura a esse agente, o sistema imune responderá de forma rápida e eficaz, impedindo o desenvolvimento da doença ou tornando-a mais branda.</p>`
  },
  {
    id: 'comoFuncionamVacinas',
    conceptTitle: 'Como Funcionam?',
    visualRepresentation: '🔬💪🦠',
    definition: 'Introduzem antígenos que estimulam o sistema imune a produzir anticorpos e células de memória.',
    keywords: 'Sistema Imunológico, Antígenos, Anticorpos, Memória Imunológica',
    modalTitle: 'Como Funcionam as Vacinas? (Resposta Imunológica)',
    detailsHtml: `<p>O funcionamento das vacinas baseia-se na capacidade natural do nosso sistema imunológico de reconhecer e combater invasores.</p><p><strong>Processo Geral:</strong></p><ol><li><strong>Introdução do Antígeno:</strong> A vacina introduz no corpo um antígeno (uma forma inofensiva do agente causador da doença – morto, enfraquecido ou apenas uma parte dele).</li><li><strong>Reconhecimento:</strong> Células especializadas do sistema imunológico, como macrófagos e células dendríticas, reconhecem esse antígeno como estranho.</li><li><strong>Ativação da Resposta Imune:</strong><ul><li><strong>Linfócitos B:</strong> São ativados para produzir anticorpos específicos contra o antígeno. Esses anticorpos se ligam ao agente infeccioso, neutralizando-o ou marcando-o para destruição.</li><li><strong>Linfócitos T:</strong> Alguns linfócitos T (citotóxicos) podem destruir células infectadas, enquanto outros (auxiliares) ajudam a coordenar a resposta imune, incluindo a ativação dos linfócitos B.</li></ul></li><li><strong>Criação de Memória Imunológica:</strong> Após a resposta inicial, o sistema imunológico desenvolve células de memória (linfócitos B e T de memória). Essas células &quot;lembram-se&quot; do antígeno.</li><li><strong>Proteção Futura:</strong> Se o corpo for exposto ao agente infeccioso real no futuro, as células de memória são rapidamente ativadas, montando uma resposta imune muito mais rápida e forte, impedindo que a doença se desenvolva ou que seja grave.</li></ol><p>É como um &quot;treinamento&quot; para o sistema de defesa, preparando-o para um combate real.</p>`
  },
  {
    id: 'tiposDeVacinas',
    conceptTitle: 'Tipos de Vacinas',
    visualRepresentation: '🧬🧪⚙️',
    definition: 'Diversas tecnologias: vírus atenuados, inativados, subunidades, toxoides, mRNA, vetor viral.',
    keywords: 'Atenuada, Inativada, mRNA, Vetor Viral, Subunitária',
    modalTitle: 'Tipos de Vacinas',
    detailsHtml: `<p>Existem diferentes tipos de vacinas, cada uma utilizando uma abordagem específica para apresentar os antígenos ao sistema imunológico:</p><ul><li><strong>Vacinas de Microrganismos Vivos Atenuados:</strong> Contêm versões enfraquecidas do agente infeccioso (vírus ou bactéria). Elas mimetizam uma infecção natural, gerando uma resposta imune robusta e duradoura. Exemplos: Sarampo, Caxumba, Rubéola (Tríplice Viral), Febre Amarela, Varicela.</li><li><strong>Vacinas de Microrganismos Inativados (Mortos):</strong> Utilizam o agente infeccioso morto. Não podem causar a doença, mas ainda contêm os antígenos necessários para estimular a resposta imune. Geralmente requerem múltiplas doses. Exemplos: Gripe (algumas formulações), Raiva, Poliomielite (Salk/VIP).</li><li><strong>Vacinas Subunitárias, Recombinantes, Polissacarídicas e Conjugadas:</strong> Em vez do microrganismo inteiro, usam apenas partes específicas dele (subunidades), como proteínas ou polissacarídeos da sua superfície, que são capazes de induzir uma resposta imune. Podem ser produzidas por engenharia genética (recombinantes). Exemplos: Hepatite B, Coqueluche (componente acelular da DTPa), HPV, Pneumocócica.</li><li><strong>Vacinas de Toxoides:</strong> Utilizadas quando a doença é causada principalmente por uma toxina produzida pela bactéria, e não pela bactéria em si. A vacina contém toxinas inativadas (toxoides). Exemplos: Tétano, Difteria.</li><li><strong>Vacinas de RNA Mensageiro (mRNA):</strong> Uma tecnologia mais recente. Contêm material genético (mRNA) que instrui as células do corpo a produzir uma proteína específica do agente infeccioso. Essa proteína é então reconhecida pelo sistema imune, que monta uma resposta. Exemplos: Algumas vacinas contra COVID-19 (Pfizer, Moderna).</li><li><strong>Vacinas de Vetor Viral:</strong> Utilizam um vírus inofensivo (o vetor) para transportar material genético do agente infeccioso para dentro das células. As células então produzem proteínas do agente infeccioso, estimulando a resposta imune. Exemplos: Algumas vacinas contra COVID-19 (Janssen, AstraZeneca), Ebola.</li></ul><p>A escolha do tipo de vacina depende de vários fatores, incluindo as características do agente infeccioso e a população-alvo.</p>`
  },
  {
    id: 'importanciaVacinacao',
    conceptTitle: 'Importância da Vacinação',
    visualRepresentation: '🌍👨‍👩‍👧‍👦❤️',
    definition: 'Proteção individual e coletiva (imunidade de rebanho), prevenindo surtos e erradicando doenças.',
    keywords: 'Imunidade de Rebanho, Saúde Coletiva, Erradicação',
    modalTitle: 'Importância da Vacinação (Individual e Coletiva)',
    detailsHtml: `<p>A vacinação é uma das intervenções de saúde pública mais eficazes e seguras, com um impacto profundo na saúde individual e coletiva.</p><p><strong>Benefícios Individuais:</strong></p><ul><li><strong>Prevenção de Doenças:</strong> Protege o indivíduo vacinado contra doenças infecciosas específicas, muitas das quais podem ser graves, causar sequelas permanentes ou até mesmo levar à morte.</li><li><strong>Redução da Gravidade da Doença:</strong> Mesmo que uma pessoa vacinada contraia a doença (o que é raro e depende da eficácia da vacina), os sintomas tendem a ser muito mais leves.</li></ul><p><strong>Benefícios Coletivos (Saúde Pública):</strong></p><ul><li><strong>Imunidade de Rebanho (ou Comunitária):</strong> Quando uma alta porcentagem da população está vacinada, a disseminação do agente infeccioso é dificultada. Isso protege indiretamente indivíduos que não podem ser vacinados (bebês muito novos, pessoas com sistema imunológico comprometido, alérgicos a componentes da vacina).</li><li><strong>Prevenção de Surtos e Epidemias:</strong> Altas taxas de cobertura vacinal impedem que doenças se espalhem rapidamente, evitando surtos e epidemias que podem sobrecarregar os sistemas de saúde.</li><li><strong>Redução de Custos com Saúde:</strong> Prevenir doenças através da vacinação é muito mais custo-efetivo do que tratar as doenças e suas complicações.</li><li><strong>Erradicação de Doenças:</strong> Com campanhas de vacinação globais e sustentadas, é possível erradicar doenças, como aconteceu com a varíola. A poliomielite está próxima da erradicação graças à vacinação.</li></ul><p>Vacinar-se não é apenas um ato de proteção individual, mas também um ato de responsabilidade social e solidariedade, contribuindo para a saúde de toda a comunidade.</p>`
  },
  {
    id: 'calendarioVacinacao',
    conceptTitle: 'Calendário de Vacinação',
    visualRepresentation: '🗓️👶👵',
    definition: 'Programa que define as vacinas recomendadas para cada faixa etária, do nascimento à terceira idade.',
    keywords: 'PNI, SUS, Crianças, Adultos, Idosos',
    modalTitle: 'Calendário Nacional de Vacinação (Exemplos)',
    detailsHtml: `<p>O Programa Nacional de Imunizações (PNI) do Brasil, coordenado pelo Ministério da Saúde, oferece gratuitamente um dos mais completos calendários de vacinação do mundo, abrangendo diversas faixas etárias e grupos específicos.</p><p><strong>Objetivos do Calendário:</strong></p><ul><li>Controlar, eliminar e erradicar doenças imunopreveníveis.</li><li>Garantir o acesso universal e equitativo às vacinas.</li><li>Manter altas coberturas vacinais na população.</li></ul><p><strong>Exemplos de Vacinas por Faixa Etária (Simplificado):</strong></p><ul><li><strong>Ao Nascer:</strong> BCG (contra formas graves de tuberculose), Hepatite B (1ª dose).</li><li><strong>Crianças (primeiros meses/anos):</strong> Poliomielite (VIP/VOP), Pentavalente (Difteria, Tétano, Coqueluche, Hepatite B, Haemophilus influenzae b), Pneumocócica 10-valente, Rotavírus, Meningocócica C, Febre Amarela, Tríplice Viral (Sarampo, Caxumba, Rubéola), Varicela, Hepatite A.</li><li><strong>Adolescentes:</strong> HPV (Meninas e Meninos), Meningocócica ACWY, dT (Difteria e Tétano - reforços).</li><li><strong>Adultos:</strong> Hepatite B, dT (Difteria e Tétano), Febre Amarela (dependendo da região), Tríplice Viral (se não vacinado anteriormente).</li><li><strong>Idosos:</strong> Influenza (Gripe - anual), Pneumocócica 23-valente (dependendo de condições de saúde).</li><li><strong>Gestantes:</strong> dTpa (Difteria, Tétano e Coqueluche acelular), Hepatite B (se não imunizada), Influenza.</li></ul><p><strong>Importante:</strong> O calendário pode sofrer atualizações. É fundamental consultar as unidades de saúde ou o site oficial do Ministério da Saúde para informações detalhadas e atualizadas sobre as vacinas recomendadas para cada idade e situação.</p><p>Manter a caderneta de vacinação em dia é crucial para a proteção individual e coletiva!</p>`
  },
  {
    id: 'mitosVerdadesVacinas',
    conceptTitle: 'Mitos e Verdades',
    visualRepresentation: '❓✅❌',
    definition: 'Esclarecendo desinformações comuns e reforçando a segurança e eficácia das vacinas.',
    keywords: 'Desinformação, Fake News, Segurança, Eficácia',
    modalTitle: 'Mitos e Verdades sobre Vacinas',
    detailsHtml: `<p>A desinformação sobre vacinas pode gerar dúvidas e receios infundados. É importante buscar informações em fontes confiáveis e científicas.</p><p><strong>Mito:</strong> Vacinas causam autismo.<br><strong>Verdade:</strong> <strong>FALSO.</strong> Numerosos estudos científicos em todo o mundo já comprovaram que não existe NENHUMA relação entre vacinas e autismo. O estudo original que sugeriu essa ligação foi desacreditado e retirado por fraude.</p><p><strong>Mito:</strong> Vacinas contêm ingredientes perigosos em doses prejudiciais.<br><strong>Verdade:</strong> <strong>FALSO.</strong> Os componentes das vacinas, como conservantes (ex: timerosal, já removido da maioria das vacinas infantis) ou adjuvantes (ex: alumínio), são usados em quantidades mínimas e seguras, muito menores do que as que encontramos naturalmente no ambiente ou em alimentos. Eles são essenciais para a eficácia e segurança da vacina.</p><p><strong>Mito:</strong> É melhor pegar a doença naturalmente do que se vacinar.<br><strong>Verdade:</strong> <strong>FALSO e PERIGOSO.</strong> Doenças imunopreveníveis podem ter complicações graves, levar a sequelas permanentes ou até à morte. A vacinação oferece proteção sem os riscos associados à doença natural.</p><p><strong>Mito:</strong> Vacinas sobrecarregam o sistema imunológico das crianças.<br><strong>Verdade:</strong> <strong>FALSO.</strong> O sistema imunológico de uma criança é exposto a milhares de antígenos todos os dias no ambiente. As vacinas contêm uma quantidade muito pequena de antígenos em comparação, e o sistema imune é perfeitamente capaz de lidar com eles de forma segura e eficaz.</p><p><strong>Mito:</strong> Doenças que já foram erradicadas não precisam mais de vacinação.<br><strong>Verdade:</strong> <strong>FALSO.</strong> Enquanto o agente infeccioso existir em alguma parte do mundo, há risco de reintrodução em áreas onde a cobertura vacinal é baixa. A poliomielite, por exemplo, ainda existe em alguns países, e a queda na vacinação pode levar ao seu retorno.</p><p><strong>Verdade:</strong> Vacinas são seguras e eficazes.<br><strong>Explicação:</strong> Vacinas passam por rigorosos testes de segurança e eficácia antes de serem aprovadas para uso. Após a aprovação, continuam sendo monitoradas para identificar quaisquer eventos adversos raros. Os benefícios da vacinação superam em muito os riscos.</p><p>Sempre confie em informações de órgãos de saúde oficiais e profissionais qualificados.</p>`
  },
  {
    id: 'desenvolvimentoSegurancaVacinas',
    conceptTitle: 'Desenvolvimento e Segurança',
    visualRepresentation: '👨‍🔬🔬🛡️',
    definition: 'Processo rigoroso com múltiplas fases de testes clínicos para garantir eficácia e segurança.',
    keywords: 'Pesquisa, Testes Clínicos, Farmacovigilância, Anvisa',
    modalTitle: 'Desenvolvimento e Segurança de Vacinas',
    detailsHtml: `<p>O desenvolvimento de uma nova vacina é um processo longo, complexo e extremamente rigoroso, que pode levar muitos anos e envolve múltiplas etapas para garantir sua segurança e eficácia.</p><p><strong>Fases do Desenvolvimento:</strong></p><ol><li><strong>Fase Exploratória/Laboratorial:</strong> Pesquisadores identificam antígenos potenciais que podem estimular uma resposta imune protetora. São realizados estudos em laboratório (<em>in vitro</em>) e em modelos animais (<em>in vivo</em>).</li><li><strong>Fase Pré-Clínica:</strong> A vacina candidata é testada em animais para avaliar sua segurança e capacidade de induzir imunidade (imunogenicidade). Esses testes fornecem dados importantes antes de iniciar os estudos em humanos.</li><li><strong>Fases Clínicas (Testes em Humanos):</strong><ul><li><strong>Fase 1:</strong> A vacina é administrada a um pequeno grupo de voluntários adultos saudáveis (dezenas) para avaliar sua segurança, determinar a dosagem segura e identificar efeitos colaterais comuns.</li><li><strong>Fase 2:</strong> A vacina é testada em um grupo maior de voluntários (centenas), geralmente incluindo pessoas com características semelhantes à população-alvo (idade, estado de saúde). Avalia-se mais detalhadamente a segurança, a imunogenicidade e a dosagem ótima.</li><li><strong>Fase 3:</strong> Envolve um grande número de voluntários (milhares a dezenas de milhares) em estudos multicêntricos, frequentemente randomizados e controlados por placebo. O objetivo principal é confirmar a eficácia da vacina na prevenção da doença em condições reais e monitorar efeitos colaterais menos comuns.</li></ul></li><li><strong>Revisão e Aprovação Regulatória:</strong> Após a conclusão bem-sucedida da Fase 3, os fabricantes submetem todos os dados às agências regulatórias (como a ANVISA no Brasil, FDA nos EUA, EMA na Europa). Essas agências revisam minuciosamente os dados de segurança e eficácia antes de conceder a aprovação para uso.</li><li><strong>Fase 4 (Farmacovigilância/Pós-Comercialização):</strong> Mesmo após a aprovação e início do uso da vacina na população, a vigilância continua. São monitorados continuamente a segurança e a eficácia em larga escala, e quaisquer eventos adversos raros são investigados.</li></ol><p>Esse processo robusto garante que as vacinas disponíveis para a população sejam seguras e eficazes na prevenção de doenças.</p>`
  }
];

const VacinasPage = () => {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (concept) => {
    setModalContent({ title: concept.modalTitle, contentHtml: concept.detailsHtml });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <h1>Vacinas: Proteção Essencial</h1>
        <p>Clique nos cards abaixo para explorar os principais conceitos sobre vacinação.</p>
      </header>
      <main className={styles.conceptsGrid}>
        {vacinasConcepts.map(concept => (
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
        <p>Vacine-se! É um ato de amor e proteção. 🛡️❤️🌍</p>
      </footer>
    </div>
  );
};

export default VacinasPage;
