import React, { useState } from 'react';
import styles from './OrganelasCitoplasmaticasPage.module.css';
import ConceptCard from '../../../../components/ConceptCard/ConceptCard';
import ConceptModal from '../../../../components/ConceptCard/ConceptModal';

const organelasCitoplasmaticasConcepts = [
    {
        id: 1,
        conceptTitle: 'Visão Integrada da Célula',
        visualRepresentation: '🗺️🔬✨',
        definition: 'Explore um mapa interativo da célula eucariótica, visualizando como todas as organelas trabalham em harmonia.',
        keywords: 'Célula Eucariótica, Mapa Celular, Interconexões, Visão Geral',
        detailsHtml: `<div class="${styles.modalContentCustom}">
            <p>A célula eucariótica é como uma cidade movimentada ou uma fábrica complexa, onde cada organela desempenha um papel crucial, mas todas estão interconectadas e trabalham em sincronia para manter a vida. Esta visão integrada nos ajuda a compreender a célula como um sistema dinâmico e altamente organizado.</p>
            <h4>Diagrama Celular:</h4>
            <div style='text-align: center; margin: 20px 0; padding: 0; border: none; background-color: transparent;'>
                <img src="${process.env.PUBLIC_URL}/images/organelas-da-celula-animal.webp" alt='Diagrama da Célula Eucariótica' style='max-width: 100%; height: auto; display: block; margin: 0 auto; border-radius: 8px;'>
            </div>
            <h4>Principais Vias de Interconexão:</h4>
            <ul>
                <li><strong>Sistema de Endomembranas:</strong> O Retículo Endoplasmático (RER e REL), o Complexo de Golgi e os Lisossomos trabalham em conjunto na síntese, modificação, empacotamento e transporte de proteínas e lipídios, além da digestão celular. Vesículas transportam materiais entre essas organelas e para a membrana plasmática para secreção.</li>
                <li><strong>Produção e Consumo de Energia:</strong> As Mitocôndrias (em todas as células eucarióticas) e os Cloroplastos (em células vegetais) são centrais na transformação de energia. Os cloroplastos produzem glicose via fotossíntese, que pode ser utilizada pelas mitocôndrias na respiração celular para gerar ATP.</li>
                <li><strong>Sinalização e Estrutura:</strong> O Citoesqueleto fornece suporte estrutural e vias para o transporte intracelular, enquanto a Membrana Plasmática regula a interação da célula com o ambiente externo, recebendo sinais que podem afetar a atividade das organelas internas.</li>
            </ul>
            <p>Ao explorar cada card individual, lembre-se de como cada organela se encaixa neste grande e complexo sistema celular!</p>
        </div>`
    },
    {
        id: 2,
        conceptTitle: 'Visão Geral',
        visualRepresentation: '🏭⚙️🔬',
        definition: 'Estruturas especializadas no citoplasma das células eucarióticas, cada uma com funções vitais específicas.',
        keywords: 'Compartimentalização, Metabolismo, Célula Eucariótica',
        detailsHtml: `<div class="${styles.modalContentCustom}">
            <p>As <strong>Organelas Citoplasmáticas</strong> são estruturas especializadas encontradas no citoplasma das células eucarióticas. Cada organela possui uma estrutura e função específicas, trabalhando em conjunto para manter a vida e as atividades celulares.</p>
            <ul>
                <li><strong>Importância:</strong> Permitem a compartimentalização das funções celulares, aumentando a eficiência dos processos metabólicos e protegendo a célula de reações indesejadas.</li>
                <li><strong>Tipos Principais:</strong> Incluem estruturas membranosas (como retículos, complexo de Golgi, mitocôndrias, lisossomos) e não membranosas (como ribossomos e centríolos).</li>
                <li><strong>Citoplasma:</strong> É o material gelatinoso que preenche a célula, composto pelo citosol (parte fluida) e pelas organelas nele imersas.</li>
            </ul>
        </div>`
    },
    {
        id: 3,
        conceptTitle: 'Ribossomos',
        visualRepresentation: '🔩🧱🧬',
        definition: 'Pequenas estruturas responsáveis pela síntese de proteínas, presentes em todas as células vivas.',
        keywords: 'Síntese Proteica, RNAr, Tradução, Proteínas',
        detailsHtml: `<div class="${styles.modalContentCustom}">
            <p>Os <strong>Ribossomos</strong> são pequenas organelas não membranosas responsáveis pela síntese de proteínas.</p>
            <ul>
                <li><strong>Estrutura:</strong> Compostos por RNA ribossômico (RNAr) e proteínas. Possuem duas subunidades (maior e menor) que se unem durante a síntese proteica.</li>
                <li><strong>Localização:</strong> Podem estar livres no citosol (produzindo proteínas para uso interno da célula) ou aderidos ao Retículo Endoplasmático Rugoso (produzindo proteínas para exportação ou para membranas). Também são encontrados dentro de mitocôndrias e cloroplastos.</li>
                <li><strong>Função Principal:</strong> Traduzem a informação genética contida no RNA mensageiro (RNAm) em sequências de aminoácidos, formando as proteínas.</li>
            </ul>
            <p>São encontrados tanto em células procarióticas quanto eucarióticas.</p>
        </div>`
    },
    {
        id: 4,
        conceptTitle: 'Retículo Endoplasmático Rugoso',
        visualRepresentation: '🏭🔩📦',
        definition: 'Rede de membranas com ribossomos aderidos, envolvida na síntese e modificação de proteínas e produção de membranas.',
        keywords: 'Síntese Proteica, Glicosilação, Ergastoplasma, Ribossomos',
        detailsHtml: `<div class="${styles.modalContentCustom}">
            <p>O <strong>Retículo Endoplasmático Rugoso (RER)</strong>, também chamado de ergastoplasma, é uma rede de sacos achatados e túbulos interconectados, com ribossomos aderidos à sua superfície externa.</p>
            <ul>
                <li><strong>Estrutura:</strong> Continuação da membrana externa do envoltório nuclear. Sua aparência 'rugosa' deve-se aos ribossomos.</li>
                <li><strong>Funções Principais:</strong>
                    <ul>
                        <li><strong>Síntese de Proteínas:</strong> Principalmente proteínas que serão secretadas pela célula, incorporadas a membranas ou enviadas para outras organelas (como lisossomos).</li>
                        <li><strong>Modificação de Proteínas:</strong> Glicosilação (adição de carboidratos) e dobramento de proteínas.</li>
                        <li><strong>Produção de Membranas:</strong> Sintetiza fosfolipídios e proteínas para suas próprias membranas e para outras partes do sistema de endomembranas.</li>
                    </ul>
                </li>
            </ul>
        </div>`
    },
    {
        id: 5,
        conceptTitle: 'Retículo Endoplasmático Liso',
        visualRepresentation: '🧪💧🧼',
        definition: 'Rede de membranas sem ribossomos, envolvida na síntese de lipídios, detoxificação e armazenamento de cálcio.',
        keywords: 'Síntese Lipídica, Detoxificação, Íons Cálcio, Esteroides',
        detailsHtml: `<div class="${styles.modalContentCustom}">
            <p>O <strong>Retículo Endoplasmático Liso (REL)</strong> é uma rede de túbulos membranosos interconectados, sem ribossomos aderidos à sua superfície.</p>
            <ul>
                <li><strong>Estrutura:</strong> Contínuo com o RER, mas com aparência 'lisa'.</li>
                <li><strong>Funções Principais (variam com o tipo celular):</strong>
                    <ul>
                        <li><strong>Síntese de Lipídios:</strong> Produção de fosfolipídios, esteroides (ex: hormônios sexuais) e óleos.</li>
                        <li><strong>Detoxificação:</strong> Inativação de drogas, toxinas e substâncias nocivas (especialmente no fígado).</li>
                        <li><strong>Armazenamento de Íons Cálcio (Ca²⁺):</strong> Importante para a contração muscular e transmissão de sinais celulares.</li>
                        <li><strong>Metabolismo de Carboidratos:</strong> Em células hepáticas, participa da quebra do glicogênio.</li>
                    </ul>
                </li>
            </ul>
        </div>`
    },
    {
        id: 6,
        conceptTitle: 'Complexo de Golgi',
        visualRepresentation: '📬📦🏷️',
        definition: 'Organela que processa, modifica, empacota e endereça proteínas e lipídios, além de formar lisossomos.',
        keywords: 'Processamento, Empacotamento, Secreção, Cisternas, Lisossomos',
        detailsHtml: `<div class="${styles.modalContentCustom}">
            <p>O <strong>Complexo de Golgi</strong>, também conhecido como Aparelho de Golgi ou dictiossomo (em plantas), é composto por uma pilha de sacos membranosos achatados e interconectados chamados cisternas.</p>
            <ul>
                <li><strong>Estrutura:</strong> Possui duas faces distintas: a face <i>cis</i> (de entrada, voltada para o RER) e a face <i>trans</i> (de saída, voltada para a membrana plasmática).</li>
                <li><strong>Funções Principais:</strong>
                    <ul>
                        <li><strong>Processamento e Modificação:</strong> Recebe proteínas e lipídios do RER e REL, modificando-os (ex: glicosilação final, sulfatação).</li>
                        <li><strong>Empacotamento e Endereçamento:</strong> Separa e empacota essas moléculas em vesículas para transporte para seus destinos finais (secreção, membrana plasmática, lisossomos).</li>
                        <li><strong>Síntese de Polissacarídeos:</strong> Em células vegetais, sintetiza componentes da parede celular (exceto celulose).</li>
                        <li><strong>Formação de Lisossomos:</strong> Produz as vesículas que se tornarão lisossomos.</li>
                        <li><strong>Formação do Acrossomo:</strong> Nos espermatozoides, forma o acrossomo, que contém enzimas para perfurar o óvulo.</li>
                    </ul>
                </li>
            </ul>
        </div>`
    },
    {
        id: 7,
        conceptTitle: 'Lisossomos',
        visualRepresentation: '🗑️♻️🔥',
        definition: 'Vesículas com enzimas digestivas responsáveis pela digestão intracelular de partículas e organelas velhas.',
        keywords: 'Digestão Intracelular, Enzimas Hidrolíticas, Autofagia, Heterofagia',
        detailsHtml: `<div class="${styles.modalContentCustom}">
            <p>Os <strong>Lisossomos</strong> são pequenas vesículas membranosas que contêm enzimas digestivas hidrolíticas (hidrolases ácidas).</p>
            <ul>
                <li><strong>Estrutura:</strong> Bolsas esféricas delimitadas por uma única membrana. Seu interior é ácido (pH ~5), ideal para a atividade de suas enzimas.</li>
                <li><strong>Função Principal: Digestão Intracelular.</strong>
                    <ul>
                        <li><strong>Heterofagia:</strong> Digestão de material capturado do exterior da célula por fagocitose ou pinocitose (formando fagossomos ou pinossomos que se fundem com lisossomos).</li>
                        <li><strong>Autofagia:</strong> Digestão de organelas envelhecidas ou danificadas da própria célula (formando autofagossomos).</li>
                        <li><strong>Autólise:</strong> Liberação das enzimas lisossômicas no citoplasma, levando à destruição celular (importante em processos como a regressão da cauda do girino).</li>
                    </ul>
                </li>
                <li><strong>Formação:</strong> Originam-se do Complexo de Golgi.</li>
            </ul>
            <p>Doenças de armazenamento lisossômico ocorrem devido à deficiência de alguma enzima lisossômica.</p>
        </div>`
    },
    {
        id: 8,
        conceptTitle: 'Mitocôndrias',
        visualRepresentation: '⚡🔋🏭',
        definition: 'Organelas responsáveis pela respiração celular e produção da maior parte do ATP (energia) da célula.',
        keywords: 'Respiração Celular, ATP, Cristas Mitocondriais, Matriz, DNA Mitocondrial',
        detailsHtml: `<div class="${styles.modalContentCustom}">
            <p>As <strong>Mitocôndrias</strong> são organelas conhecidas como as 'usinas de energia' da célula.</p>
            <ul>
                <li><strong>Estrutura:</strong> Possuem duas membranas: uma externa lisa e uma interna com numerosas dobras chamadas <strong>cristas mitocondriais</strong>, que aumentam a superfície. O espaço interno é preenchido pela <strong>matriz mitocondrial</strong>. Contêm seu próprio DNA (DNA mitocondrial) e ribossomos, permitindo a síntese de algumas de suas próprias proteínas.</li>
                <li><strong>Função Principal: Respiração Celular Aeróbica.</strong> Processo que converte a energia química armazenada em moléculas orgânicas (principalmente glicose) em energia utilizável pela célula na forma de ATP (trifosfato de adenosina). Envolve etapas como a Glicólise (no citosol), Ciclo de Krebs (na matriz mitocondrial) e Cadeia Respiratória/Fosforilação Oxidativa (nas cristas mitocondriais).</li>
                <li><strong>Outras Funções:</strong> Participam da apoptose (morte celular programada) e da regulação de íons cálcio.</li>
            </ul>
            <p>Acredita-se que as mitocôndrias evoluíram de bactérias aeróbicas endocitadas por células eucarióticas primitivas (Teoria da Endossimbiose).</p>
        </div>`
    },
    {
        id: 9,
        conceptTitle: 'Cloroplastos',
        visualRepresentation: '☀️🌿🍃',
        definition: 'Organelas presentes em plantas e algas, responsáveis pela fotossíntese (produção de alimento usando luz solar).',
        keywords: 'Fotossíntese, Clorofila, Tilacoides, Estroma, Grana, DNA Plastidial',
        detailsHtml: `<div class="${styles.modalContentCustom}">
            <p>Os <strong>Cloroplastos</strong> são organelas encontradas exclusivamente em células de plantas e algas, responsáveis pela fotossíntese.</p>
            <ul>
                <li><strong>Estrutura:</strong> Possuem duas membranas (externa e interna) que delimitam um espaço interno chamado <strong>estroma</strong>. No estroma, encontram-se sacos membranosos achatados e interconectados chamados <strong>tilacoides</strong>, que frequentemente se empilham formando <strong>grana</strong> (plural de granum). A clorofila e outros pigmentos fotossintéticos estão localizados nas membranas dos tilacoides. Assim como as mitocôndrias, possuem DNA próprio e ribossomos.</li>
                <li><strong>Função Principal: Fotossíntese.</strong> Processo que converte energia luminosa em energia química (armazenada em moléculas orgânicas, como a glicose), utilizando dióxido de carbono (CO₂) e água (H₂O) e liberando oxigênio (O₂). Ocorre em duas etapas principais: a fase clara (nos tilacoides) e a fase escura ou ciclo de Calvin (no estroma).</li>
            </ul>
            <p>São um tipo de plasto (ou plastídio). Acredita-se que evoluíram de cianobactérias endocitadas (Teoria da Endossimbiose).</p>
        </div>`
    },
    {
        id: 10,
        conceptTitle: 'Peroxissomos',
        visualRepresentation: '🧪✨🧼',
        definition: 'Pequenas vesículas com enzimas que participam de reações de oxidação, como a quebra de ácidos graxos e a detoxificação.',
        keywords: 'Catalase, Peróxido de Hidrogênio, Oxidação, Detoxificação',
        detailsHtml: `<div class="${styles.modalContentCustom}">
            <p>Os <strong>Peroxissomos</strong> são pequenas organelas esféricas, delimitadas por uma única membrana, que contêm diversas enzimas oxidativas.</p>
            <ul>
                <li><strong>Estrutura:</strong> Vesículas que podem conter um núcleo cristalino de enzimas.</li>
                <li><strong>Funções Principais:</strong>
                    <ul>
                        <li><strong>Metabolismo de Ácidos Graxos:</strong> Participam da quebra de ácidos graxos de cadeia longa (β-oxidação).</li>
                        <li><strong>Detoxificação:</strong> Neutralizam substâncias tóxicas, como o álcool, convertendo-as em produtos menos nocivos.</li>
                        <li><strong>Degradação do Peróxido de Hidrogênio (H₂O₂):</strong> Contêm a enzima <strong>catalase</strong>, que decompõe o peróxido de hidrogênio (um subproduto tóxico do metabolismo celular) em água e oxigênio.</li>
                    </ul>
                </li>
                <li><strong>Origem:</strong> Formam-se por brotamento do Retículo Endoplasmático e/ou por divisão de peroxissomos preexistentes.</li>
            </ul>
            <p>São importantes em células hepáticas e renais devido à sua função detoxificante.</p>
        </div>`
    },
    {
        id: 11,
        conceptTitle: 'Vacúolos',
        visualRepresentation: '💧📦🎈',
        definition: 'Bolsas membranosas com diversas funções, como armazenamento, controle osmótico e digestão (especialmente o grande vacúolo central em plantas).',
        keywords: 'Armazenamento, Turgescência, Osmorregulação, Vacúolo Central',
        detailsHtml: `<div class="${styles.modalContentCustom}">
            <p>Os <strong>Vacúolos</strong> são organelas membranosas em forma de bolsa, com funções variadas dependendo do tipo celular e do organismo.</p>
            <ul>
                <li><strong>Vacúolo Central (em células vegetais):</strong> É uma grande organela que pode ocupar até 90% do volume da célula vegetal madura. Funções:
                    <ul>
                        <li><strong>Armazenamento:</strong> Água, íons, nutrientes, pigmentos (ex: antocianinas que dão cor às flores), produtos tóxicos e resíduos metabólicos.</li>
                        <li><strong>Manutenção da Turgescência:</strong> A pressão interna do vacúolo (pressão de turgor) ajuda a manter a rigidez da célula e dos tecidos vegetais.</li>
                        <li><strong>Digestão:</strong> Pode conter enzimas hidrolíticas, funcionando de forma similar aos lisossomos em células animais.</li>
                    </ul>
                </li>
                <li><strong>Vacúolos Contráteis (em protistas de água doce):</strong> Bombeiam o excesso de água para fora da célula, controlando o equilíbrio osmótico.</li>
                <li><strong>Vacúolos Alimentares (Fagossomos):</strong> Formados durante a fagocitose, contêm partículas alimentares que serão digeridas.</li>
            </ul>
        </div>`
    },
    {
        id: 12,
        conceptTitle: 'Centríolos',
        visualRepresentation: '🧬🔬➗',
        definition: 'Estruturas cilíndricas envolvidas na divisão celular (formação do fuso) e na origem de cílios e flagelos em células animais.',
        keywords: 'Divisão Celular, Fuso Mitótico, Cílios, Flagelos, Centrossomo',
        detailsHtml: `<div class="${styles.modalContentCustom}">
            <p>Os <strong>Centríolos</strong> são estruturas cilíndricas, não membranosas, encontradas em células animais e em alguns organismos inferiores (como certos protistas e plantas sem sementes).</p>
            <ul>
                <li><strong>Estrutura:</strong> Cada centríolo é formado por nove trincas de microtúbulos dispostos em um anel (arranjo 9+0). Geralmente ocorrem aos pares, posicionados perpendicularmente um ao outro, formando o <strong>centrossomo</strong> (principal centro organizador de microtúbulos da célula animal).</li>
                <li><strong>Funções Principais:</strong>
                    <ul>
                        <li><strong>Divisão Celular:</strong> Organizam o fuso mitótico (ou meiótico), que separa os cromossomos durante a divisão celular.</li>
                        <li><strong>Formação de Cílios e Flagelos:</strong> Atuam como corpos basais, originando os cílios e flagelos, estruturas envolvidas no movimento celular ou de fluidos.</li>
                    </ul>
                </li>
                <li><strong>Ausência em Plantas Superiores:</strong> Células de plantas com sementes (angiospermas e gimnospermas) geralmente não possuem centríolos, mas ainda formam fusos mitóticos.</li>
            </ul>
        </div>`
    },
    {
        id: 13,
        conceptTitle: 'Citoesqueleto',
        visualRepresentation: '🏗️🕸️🚶‍♀️',
        definition: 'Rede de filamentos proteicos (microtúbulos, actina, intermediários) que dá forma, suporte, movimento e organização à célula.',
        keywords: 'Microtúbulos, Filamentos de Actina, Filamentos Intermediários, Forma Celular, Movimento',
        detailsHtml: `<div class="${styles.modalContentCustom}">
            <p>O <strong>Citoesqueleto</strong> é uma rede complexa de filamentos proteicos que se estende por todo o citoplasma das células eucarióticas. Não é uma organela no sentido clássico, mas é fundamental para a célula.</p>
            <ul>
                <li><strong>Componentes Principais:</strong>
                    <ul>
                        <li><strong>Microtúbulos:</strong> Tubos ocos e longos, formados pela proteína tubulina. Funções: manutenção da forma celular, movimentação de organelas, formação do fuso mitótico, componentes de cílios e flagelos.</li>
                        <li><strong>Filamentos de Actina (Microfilamentos):</strong> Fibras finas e flexíveis, formadas pela proteína actina. Funções: manutenção da forma celular, contração muscular, movimento ameboide, citocinese (divisão do citoplasma).</li>
                        <li><strong>Filamentos Intermediários:</strong> Fibras de diâmetro intermediário, formadas por diversas proteínas (ex: queratina). Funções: conferem resistência mecânica à célula e aos tecidos, ancoragem de organelas (como o núcleo).</li>
                    </ul>
                </li>
                <li><strong>Funções Gerais:</strong> Manutenção da forma e estrutura celular, movimentação celular, transporte intracelular de organelas e vesículas, organização do citoplasma, participação na divisão celular.</li>
            </ul>
            <p>É uma estrutura dinâmica, capaz de se reorganizar rapidamente conforme as necessidades da célula.</p>
        </div>`
    }
];

const OrganelasCitoplasmaticasPage = () => {
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

    const pageThemeColors = {
        cardBorderColor: 'var(--card-border-color-organelas, #311b92)',
        cardTitleColor: 'var(--card-title-color-organelas, #311b92)',
        cardVisualColor: 'var(--card-visual-color-organelas, #5e35b1)',
        cardKeywordsColor: 'var(--card-keywords-color-organelas, #311b92)',
        modalTitleColor: 'var(--modal-title-color-organelas, #311b92)',
        modalTitleBorderColor: 'var(--modal-title-border-color-organelas, #4a148c)',
        modalStrongTextColor: 'var(--modal-strong-text-color-organelas, #4a148c)',
    };

    return (
        <div className={styles.pageContainer}>
            <header className={styles.header}>
                <h1 className={styles.headerH1}>Organelas Citoplasmáticas</h1>
                <p className={styles.headerP}>As Fábricas e Operários da Célula!</p>
            </header>

            <main className={styles.conceptsGrid}>
                {organelasCitoplasmaticasConcepts.map(concept => (
                    <ConceptCard
                        key={concept.id}
                        {...concept} // Spread the concept object
                        onClick={() => handleCardClick(concept)} // Pass concept to handler
                        themeColors={pageThemeColors}
                    />
                ))}
            </main>

            {isModalOpen && modalContent && (
                <ConceptModal
                    isOpen={isModalOpen}
                    title={modalContent.title}
                    contentHtml={modalContent.contentHtml}
                    onClose={closeModal}
                    themeColors={pageThemeColors}
                />
            )}

            <footer className={styles.footer}>
                <p>Explorando as engrenagens da vida celular! ⚙️🔬</p>
            </footer>
        </div>
    );
};

export default OrganelasCitoplasmaticasPage;
