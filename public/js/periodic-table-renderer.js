(function() { // IIFE para encapsular o escopo
    console.log('PT_RENDERER: Script periodic-table-renderer.js está sendo parseado.');

    let periodicTableContainer;
    let modal;
    let modalTitle;
    let modalDetails;

    periodicTableContainer = document.getElementById('periodic-table-container');
    modal = document.getElementById('myModal'); 
    modalTitle = document.getElementById('modalConceptTitle'); 
    modalDetails = document.getElementById('modalConceptDetails'); 

    // O botão de fechar é tratado pelo React agora, então não precisamos de um listener aqui.
    // const closeButton = modal ? modal.getElementsByClassName('close-button')[0] : null;
    // if (closeButton) {
    //     closeButton.onclick = function() {
    //         modal.style.display = 'none';
    //     }
    // }
    // window.onclick = function(event) {
    //     if (event.target == modal) {
    //         modal.style.display = 'none';
    //     }
    // }



    // Map Portuguese category names (from JSON, lowercase) to existing CSS classes
    const categoryCssMap = {
        // Diatomic Nonmetals
        'não -metal diatômico': 'diatomic-nonmetal', // From console
        'nao -metal diatomico': 'diatomic-nonmetal',
        'não metal diatômico': 'diatomic-nonmetal',
        'nao metal diatomico': 'diatomic-nonmetal',
        // Polyatomic Nonmetals
        'não -metal poliatômico': 'polyatomic-nonmetal', // From console (Corrected: space before hyphen)
        'nao -metal poliatomico': 'polyatomic-nonmetal',
        'não metal poliatômico': 'polyatomic-nonmetal',
        'nao metal poliatomico': 'polyatomic-nonmetal',
        // Noble Gases
        'gás nobre': 'noble-gas',
        'gas nobre': 'noble-gas',
        // Alkali Metals
        'metal alcalino': 'alkali-metal',
        'desconhecido, mas previsto para ser um metal alcalino': 'unknown-predicted-alkali-metal', // From console
        // Alkaline Earth Metals
        'metal da terra alcalina': 'alkaline-earth-metal',
        'metal alcalino-terroso': 'alkaline-earth-metal',
        // Metalloids
        'metalóide': 'metalloid',
        'metaloide': 'metalloid',
        'semimetal': 'metalloid',
        'desconhecido, provavelmente metalóide': 'unknown-probably-metalloid', // From console (with accent)
        'desconhecido, provavelmente metaloide': 'unknown-probably-metalloid',
        // Lanthanides
        'lantanídeo': 'lanthanide',
        'lantanideo': 'lanthanide',
        'lanthanide': 'lanthanide', // From console (English term)
        // Actinides
        'actinídeo': 'actinide',
        'actinideo': 'actinide',
        'actinide': 'actinide', // From console (English term)
        // Transition Metals
        'metal de transição': 'transition-metal',
        'desconhecido, provavelmente metal de transição': 'unknown-probably-transition-metal',
        // Post-transition Metals
        'metal de pós-transição': 'post-transition-metal',
        'metal pós-transição': 'post-transition-metal',
        'pós-metais de transição': 'post-transition-metal',
        'desconhecido, provavelmente metal pós-transição': 'unknown-probably-post-transition-metal', // From console (variation)
        'desconhecido, provavelmente metal de pós-transição': 'unknown-probably-post-transition-metal',
        // Other Nonmetals (Reactive Nonmetals, Halogens, Chalcogens)
        'halogênio': 'reactive-nonmetal',
        'halogenio': 'reactive-nonmetal',
        'calcogênio': 'reactive-nonmetal',
        'calcogenio': 'reactive-nonmetal',
        'não metal': 'nonmetal', // General nonmetal, if more specific isn't available
        'nao metal': 'nonmetal',
        'ametal': 'nonmetal',
        // General Unknowns
        'propriedades desconhecidas': 'unknown-category',
        'desconhecido, previsto como gás nobre': 'unknown-predicted-to-be-noble-gas',
        'desconhecido': 'unknown-category'
    };

    function getCategoryClass(category) {
        if (!category || typeof category !== 'string') {
            return 'unknown-category';
        }
        const lowerCategory = category.toLowerCase().trim();

        if (categoryCssMap[lowerCategory]) {
            return categoryCssMap[lowerCategory];
        }

        // Broader check for non-metals if specific mapping is missed
        if (lowerCategory.includes('não metal') || lowerCategory.includes('nao metal') || lowerCategory.includes('não-metal') || lowerCategory.includes('ametal')) {
            if (lowerCategory.includes('diatômico') || lowerCategory.includes('diatomico')) return 'diatomic-nonmetal';
            if (lowerCategory.includes('poliatômico') || lowerCategory.includes('poliatomico')) return 'polyatomic-nonmetal';
            return 'nonmetal'; // General nonmetal style
        }
        
        console.warn(`Mapeamento de classe CSS não encontrado para a categoria: "${category}" (processada como "${lowerCategory}"). Usando 'unknown-category'.`);
        return 'unknown-category';
    }

    function renderPeriodicTable(elements) {
        if (!periodicTableContainer) {
            console.error('Contêiner da tabela periódica não encontrado!');
            return;
        }
        periodicTableContainer.innerHTML = ''; // Clear previous content/error messages

        elements.forEach(element => {
            const cell = document.createElement('div');
            cell.classList.add('element-cell');
            
            const categoryClass = getCategoryClass(element.category);
            if (categoryClass) {
                cell.classList.add(`category-${categoryClass}`);
            }
            
            cell.style.gridColumnStart = element.xpos;
            cell.style.gridRowStart = element.ypos;

            cell.innerHTML = `
                <div class="element-number">${element.number}</div>
                <div class="element-symbol">${element.symbol}</div>
                <div class="element-name">${element.name}</div>
                <div class="element-atomic-mass">${element.atomic_mass ? element.atomic_mass.toFixed(3) : 'N/A'}</div>
            `;

            // Store all element data for the modal
            for (const key in element) {
                if (element.hasOwnProperty(key) && element[key] !== null && element[key] !== undefined) {
                    // Convert kebab-case to camelCase for dataset keys, e.g., cpk-hex -> cpkHex
                    const camelCaseKey = key.replace(/-([a-z0-9])/g, g => g[1].toUpperCase());
                    cell.dataset[camelCaseKey] = typeof element[key] === 'object' ? JSON.stringify(element[key]) : element[key];
                }
            }
            
            cell.addEventListener('click', () => displayElementDetails(element));
            periodicTableContainer.appendChild(cell);
        });
    }

    function displayElementDetails(element) {
        if (!modal || !modalTitle || !modalDetails) {
            console.error('Elementos da modal não encontrados!');
            return;
        }

        modalTitle.textContent = `${element.name} (${element.symbol}) - Número Atômico: ${element.number}`;
        
        let detailsHtml = `<p><strong>Resumo:</strong> ${element.summary || 'N/A'}</p>`;
        detailsHtml += `<ul>`;
        detailsHtml += `<li><strong>Massa Atômica:</strong> ${element.atomic_mass ? element.atomic_mass.toFixed(4) : 'N/A'} u</li>`;
        detailsHtml += `<li><strong>Categoria:</strong> ${element.category ? element.category.charAt(0).toUpperCase() + element.category.slice(1) : 'N/A'}</li>`;
        detailsHtml += `<li><strong>Fase:</strong> ${element.phase ? element.phase.charAt(0).toUpperCase() + element.phase.slice(1) : 'N/A'}</li>`;
        detailsHtml += `<li><strong>Densidade:</strong> ${element.density ? element.density + ' g/L (gás) ou g/cm³ (sólido/líquido)' : 'N/A'}</li>`;
        detailsHtml += `<li><strong>Ponto de Fusão:</strong> ${element.melt ? element.melt + ' K' : 'N/A'}</li>`;
        detailsHtml += `<li><strong>Ponto de Ebulição:</strong> ${element.boil ? element.boil + ' K' : 'N/A'}</li>`;
        detailsHtml += `<li><strong>Configuração Eletrônica:</strong> ${element.electron_configuration_semantic || element.electron_configuration || 'N/A'}</li>`;
        detailsHtml += `<li><strong>Eletronegatividade (Pauling):</strong> ${element.electronegativity_pauling !== null ? element.electronegativity_pauling : 'N/A'}</li>`;
        detailsHtml += `<li><strong>Descoberto por:</strong> ${element.discovered_by || 'N/A'}</li>`;
        if (element.source) {
            detailsHtml += `<li><strong>Mais Informações:</strong> <a href="${element.source}" target="_blank" rel="noopener noreferrer">Wikipedia</a></li>`;
        }
        detailsHtml += `</ul>`;
        
        if (element.image && element.image.url) {
            detailsHtml += `<div style="text-align:center; margin-top:15px;"><img src="${element.image.url}" alt="Image of ${element.name}" style="max-width:200px; max-height:200px; border-radius:5px;"><p style="font-size:0.8em; color:#555;">${element.image.title || ''}</p></div>`;
        }

        modalDetails.innerHTML = detailsHtml;
        // modal.style.display = 'block'; // Comentado: React agora controla a exibição do modal
        document.dispatchEvent(new CustomEvent('openElementDetailsModal', { detail: element }));
    }

    function init() {
        if (window.localPeriodicTableRawData && window.localPeriodicTableRawData.elements) {
            renderPeriodicTable(window.localPeriodicTableRawData.elements);
        } else {
            console.error('Dados locais da tabela periódica (window.localPeriodicTableRawData) não encontrados ou não estão no formato esperado.');
            if (periodicTableContainer) {
                 periodicTableContainer.innerHTML = '<p style="color: red;">Falha ao carregar os dados locais da tabela periódica. Por favor, defina window.localPeriodicTableRawData. Verifique o console para erros.</p>';
            } else {
                console.error("Contêiner da tabela periódica não encontrado para mensagem de erro.");
            }
        }
    }

    // As definições de categoryCssMap, getCategoryClass, renderPeriodicTable, displayElementDetails permanecem aqui dentro da IIFE

    function mainInitLogic() {
        console.log('PT_RENDERER: mainInitLogic() iniciada.');
        periodicTableContainer = document.getElementById('periodic-table-container');
        modal = document.getElementById('myModal'); 
        modalTitle = document.getElementById('modalConceptTitle'); 
        modalDetails = document.getElementById('modalConceptDetails');

        if (!periodicTableContainer) {
            console.error('PT_RENDERER: ERRO CRÍTICO - Contêiner da tabela periódica (periodic-table-container) não encontrado no DOM no momento da inicialização. A tabela não pode ser renderizada.');
            return;
        }
        if (!modal || !modalTitle || !modalDetails) {
            console.warn('PT_RENDERER: AVISO - Um ou mais elementos do modal (myModal, modalConceptTitle, modalConceptDetails) não foram encontrados. A funcionalidade do modal pode ser afetada.');
        }
        // O código para tratar closeButton e window.onclick foi removido pois o React cuida disso.

        if (window.localPeriodicTableRawData && window.localPeriodicTableRawData.elements) {
            console.log('PT_RENDERER: Dados encontrados (window.localPeriodicTableRawData). Chamando renderPeriodicTable().');
            renderPeriodicTable(window.localPeriodicTableRawData.elements);
        } else {
            console.error('PT_RENDERER: ERRO - Dados locais da tabela periódica (window.localPeriodicTableRawData) não encontrados ou não estão no formato esperado.');
            if (periodicTableContainer) {
                 periodicTableContainer.innerHTML = '<p style="color: red; text-align: center; padding: 20px;">Falha ao carregar os dados para a tabela periódica. Verifique o console para mais detalhes.</p>';
            } else {
                // Este caso não deveria ocorrer se o primeiro if (!periodicTableContainer) já barrou.
                console.error("PT_RENDERER: Contêiner da tabela periódica também não encontrado para exibir mensagem de erro de dados.");
            }
        }
    }

    // Expor a função de inicialização principal globalmente
    window.initPeriodicTableRenderer = function() {
        console.log("PT_RENDERER: window.initPeriodicTableRenderer() foi chamada.");
        // Garante que a lógica só rode uma vez ou reseta se necessário (opcional, dependendo da idempotência)
        // Por agora, apenas chama a lógica principal.
        mainInitLogic();
    };

    // Tenta auto-inicializar
    // Verifica o estado do DOM. Se já estiver 'interactive' ou 'complete', DOMContentLoaded já ocorreu.
    if (document.readyState === 'loading') {
        // Ainda carregando, espera por DOMContentLoaded
        console.log('PT_RENDERER: DOM está em estado de carregamento. Adicionando listener para DOMContentLoaded.');
        document.addEventListener('DOMContentLoaded', window.initPeriodicTableRenderer);
    } else {
        // DOM já está 'interactive' ou 'complete'
        console.log('PT_RENDERER: DOM já está pronto (' + document.readyState + '). Chamando initPeriodicTableRenderer() diretamente como fallback.');
        // Chama como fallback, mas a chamada explícita do React é preferível.
        // Para evitar múltiplas renderizações se o React também chamar, pode-se adicionar uma flag.
        // if (!window.periodicTableRendererInitialized) {
        //     window.initPeriodicTableRenderer();
        //     window.periodicTableRendererInitialized = true;
        // }
        // Por simplicidade, vamos permitir que seja chamado. A função renderPeriodicTable limpa o container.
        window.initPeriodicTableRenderer(); 
    }

})();
