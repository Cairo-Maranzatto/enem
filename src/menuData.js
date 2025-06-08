const menuData = [
  {
    title: 'Ciências da Natureza',
    children: [
      {
        title: 'Biologia',
        children: [
          {
            title: 'Citologia',
            children: [
              { 
                title: 'Divisão Celular', 
                path: 'reactPage_DivisaoCelular', 
                component: 'DivisaoCelularPage' 
              },
              {
                id: 'membrana-plasmatica',
                title: 'Membrana Plasmática',
                path: 'MembranaPlasmatica', 
                icon: 'fas fa-border-all',
                component: 'MembranaPlasmaticaPage' 
              },
              {
                id: 'metabolismo-celular',
                title: 'Metabolismo Celular',
                path: 'MetabolismoCelular', // Path for React component routing
                icon: 'fas fa-fire', // Example icon, can be changed
                component: 'MetabolismoCelularPage' // Specify the component
              },
              {
                id: 'organelas-citoplasmaticas',
                title: 'Organelas Citoplasmáticas',
                path: 'OrganelasCitoplasmaticas', // Path for React component routing
                icon: 'fas fa-cogs', // Example icon, can be changed
                component: 'OrganelasCitoplasmaticasPage' // Specify the component
              },
              {
                id: 'virus',
                title: 'Vírus',
                path: 'Virus', // Path para o roteamento do componente React
                icon: 'fas fa-viruses', // Ícone sugerido
                component: 'VirusPage' // Especifica o componente
              },
            ],
          },
          {
            title: 'Ecologia',
            children: [
              {
                id: 'cadeia-alimentar',
                title: 'Cadeia Alimentar',
                path: 'CadeiaAlimentar', // Path for React component routing
                icon: 'fas fa-sitemap', // Ícone para cadeia/teia alimentar
                component: 'CadeiaAlimentarPage' // Especifica o componente
              },
              {
                id: 'ciclos-biogeoquimicos',
                title: 'Ciclos Biogeoquímicos',
                path: 'CiclosBiogeoquimicos',
                icon: 'fas fa-sync-alt',
                component: 'CiclosBiogeoquimicosPage'
              },
              {
                id: 'conceitos-ecologia',
                title: 'Conceitos de Ecologia',
                path: 'ConceitosEcologia',
                icon: 'fas fa-brain',
                component: 'ConceitosEcologiaPage'
              },
              {
                id: 'poluicao-agua-chuva-acida',
                title: 'Poluição da Água e Chuva Ácida',
                path: 'PoluicaoDaAgua',
                icon: 'fas fa-smog',
                component: 'PoluicaoDaAguaPage'
              },
              {
                id: 'problemas-ambientais-biomas',
                title: 'Problemas Ambientais e Biomas',
                path: 'ProblemasAmbientais',
                icon: 'fas fa-globe-americas',
                component: 'ProblemasAmbientaisPage'
              },
              {
                id: 'relacoes-ecologicas',
                title: 'Relações Ecológicas',
                path: 'RelacoesEcologicas',
                icon: 'fas fa-people-arrows',
                component: 'RelacoesEcologicasPage'
              },
            ],
          },
          {
            title: 'Fisiologia Humana',
            children: [
                {
                  id: 'sistema-circulatorio',
                  title: 'Sistema Circulatório',
                  path: 'SistemaCirculatorio',
                  icon: 'fas fa-heartbeat',
                  component: 'SistemaCirculatorioPage'
                },
                {
                  id: 'sistema-digestorio',
                  title: 'Sistema Digestório',
                  path: 'SistemaDigestorio',
                  icon: 'fas fa-utensils', 
                  component: 'SistemaDigestorioPage'
                },
                {
                  id: 'sistema-endocrino',
                  title: 'Sistema Endócrino',
                  path: 'SistemaEndocrino',
                  icon: 'fas fa-brain', 
                  component: 'SistemaEndocrinoPage'
                },
                {
                  id: 'sistema-excretor',
                  title: 'Sistema Excretor',
                  path: 'SistemaExcretor',
                  icon: 'fas fa-toilet',
                  component: 'SistemaExcretorPage'
                },
                {
                  id: 'sistema-imunologico',
                  title: 'Sistema Imunológico',
                  path: 'SistemaImunologico',
                  icon: 'fas fa-shield-alt',
                  component: 'SistemaImunologicoPage'
                },
                {
                  id: 'sistema-nervoso',
                  title: 'Sistema Nervoso',
                  path: 'SistemaNervoso',
                  icon: 'fas fa-brain',
                  component: 'SistemaNervosoPage'
                },
                {
                  id: 'sistema-reprodutor',
                  title: 'Sistema Reprodutor',
                  path: 'SistemaReprodutor',
                  icon: 'fas fa-venus-mars',
                  component: 'SistemaReprodutorPage'
                },
                {
                  id: 'sistema-respiratorio',
                  title: 'Sistema Respiratório',
                  path: 'SistemaRespiratorio',
                  icon: 'fas fa-lungs',
                  component: 'SistemaRespiratorioPage'
                },
                {
                  id: 'sistema-tegumentar',
                  title: 'Sistema Tegumentar',
                  path: 'SistemaTegumentar',
                  icon: 'fas fa-user-shield',
                  component: 'SistemaTegumentarPage'
                },
            ]
          },
          {
            title: 'Genética e Evolução',
            children: [
                { id: 'biotecnologia', title: 'Biotecnologia', path: 'Biotecnologia', icon: 'fas fa-dna', component: 'BiotecnologiaPage' },
                { id: 'leis-de-mendel', title: 'Leis de Mendel', path: 'LeisDeMendel', icon: 'fas fa-seedling', component: 'LeisDeMendelPage' },
                { id: 'teorias-evolutivas', title: 'Teorias Evolutivas', path: 'TeoriasEvolutivas', icon: 'fas fa-book-open', component: 'TeoriasEvolutivasPage' },
            ]
          },
          {
            title: 'Saúde e Programas de Saúde',
            children: [
                { id: 'doencas', title: 'Doenças', path: 'Doencas', icon: 'fas fa-notes-medical', component: 'DoencasPage' },
                { id: 'politicasPublicas', title: 'Políticas Públicas de Saúde', path: 'PoliticasPublicas', icon: 'fas fa-landmark', component: 'PoliticasPublicasPage' },
                { id: 'saneamentoBasico', title: 'Saneamento Básico', path: 'SaneamentoBasico', icon: 'fas fa-tint', component: 'SaneamentoBasicoPage' },
                { id: 'vacinas', title: 'Vacinas', path: 'Vacinas', icon: 'fas fa-syringe', component: 'VacinasPage' },
            ]
          }
        ],
      },
      {
        title: 'Química',
        children: [
          {
            title: 'Química Geral e Inorgânica',
            children: [
              { id: 'atomistica', title: 'Atomística', path: '/quimica/quimica-geral-e-inorganica/atomistica', icon: 'fas fa-atom', component: 'AtomisticaPage' },
              {
                id: 'funcoesInorganicas',
                title: 'Funções Inorgânicas',
                path: '/quimica/quimica-geral-e-inorganica/funcoes-inorganicas',
                icon: 'fas fa-flask',
                component: 'FuncoesInorganicasPage'
              },
              { id: 'ligacoesQuimicas', title: 'Ligações Químicas', path: '/quimica/quimica-geral-e-inorganica/ligacoes-quimicas', icon: 'fas fa-link', component: 'LigacoesQuimicasPage' },
              { id: 'reacoesInorganicas', title: 'Reações Inorgânicas', path: '/quimica/quimica-geral-e-inorganica/reacoes-inorganicas', icon: 'fas fa-exchange-alt', component: 'ReacoesInorganicasPage' },
              { id: 'tabelaPeriodica', title: 'Tabela Periódica', path: '/quimica/quimica-geral-e-inorganica/tabela-periodica', icon: 'fas fa-table', component: 'TabelaPeriodicaPage' },
            ],
          },
        ],
      },
    ],
  },
  { title: 'Ciências Humanas', children: [] },
  { title: 'Linguagens, Códigos e suas Tecnologias', children: [] },
  { title: 'Matemática', children: [] },
  { title: 'Redação', children: [] },
];

export default menuData;
