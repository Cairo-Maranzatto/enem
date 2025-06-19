const menuData = [
  {
    title: 'Ciências da Natureza',
    children: [
      {
        title: 'Biologia',
        children: [
          // Fundamentos da Vida
          {
            title: 'Citologia',
            children: [
              {
                id: 'membrana-plasmatica',
                title: 'Membrana Plasmática',
                path: 'MembranaPlasmatica',
                icon: 'fas fa-border-all',
                component: 'MembranaPlasmaticaPage'
              },
              {
                id: 'organelas-citoplasmaticas',
                title: 'Organelas Citoplasmáticas',
                path: 'OrganelasCitoplasmaticas',
                icon: 'fas fa-cogs',
                component: 'OrganelasCitoplasmaticasPage'
              },
              {
                id: 'metabolismo-celular',
                title: 'Metabolismo Celular',
                path: 'MetabolismoCelular',
                icon: 'fas fa-fire',
                component: 'MetabolismoCelularPage'
              },
              {
                title: 'Divisão Celular',
                path: 'reactPage_DivisaoCelular',
                component: 'DivisaoCelularPage'
              },
              {
                id: 'virus',
                title: 'Vírus',
                path: 'Virus',
                icon: 'fas fa-viruses',
                component: 'VirusPage'
              },
            ],
          },
          // Ecologia e Ambiente
          {
            title: 'Ecologia',
            children: [
              {
                id: 'relacoes-ecologicas',
                title: 'Relações Ecológicas',
                path: 'RelacoesEcologicas',
                icon: 'fas fa-people-arrows',
                component: 'RelacoesEcologicasPage'
              },
              {
                id: 'ciclos-biogeoquimicos',
                title: 'Ciclos Biogeoquímicos',
                path: 'CiclosBiogeoquimicos',
                icon: 'fas fa-sync-alt',
                component: 'CiclosBiogeoquimicosPage'
              },
              {
                id: 'problemas-ambientais-biomas',
                title: 'Problemas Ambientais e Biomas',
                path: 'ProblemasAmbientais',
                icon: 'fas fa-globe-americas',
                component: 'ProblemasAmbientaisPage'
              },
              {
                id: 'poluicao-agua-chuva-acida',
                title: 'Poluição da Água e Chuva Ácida',
                path: 'PoluicaoDaAgua',
                icon: 'fas fa-smog',
                component: 'PoluicaoDaAguaPage'
              },
              {
                id: 'cadeia-alimentar',
                title: 'Cadeia Alimentar',
                path: 'CadeiaAlimentar',
                icon: 'fas fa-sitemap',
                component: 'CadeiaAlimentarPage'
              },
              {
                id: 'conceitos-ecologia',
                title: 'Conceitos de Ecologia',
                path: 'ConceitosEcologia',
                icon: 'fas fa-brain',
                component: 'ConceitosEcologiaPage'
              },
            ],
          },
          // Fisiologia (ordem lógica dos sistemas)
          {
            title: 'Fisiologia Humana',
            children: [
              {
                id: 'sistema-digestorio',
                title: 'Sistema Digestório',
                path: 'SistemaDigestorio',
                icon: 'fas fa-utensils',
                component: 'SistemaDigestorioPage'
              },
              {
                id: 'sistema-respiratorio',
                title: 'Sistema Respiratório',
                path: 'SistemaRespiratorio',
                icon: 'fas fa-lungs',
                component: 'SistemaRespiratorioPage'
              },
              {
                id: 'sistema-circulatorio',
                title: 'Sistema Circulatório',
                path: 'SistemaCirculatorio',
                icon: 'fas fa-heartbeat',
                component: 'SistemaCirculatorioPage'
              },
              {
                id: 'sistema-excretor',
                title: 'Sistema Excretor',
                path: 'SistemaExcretor',
                icon: 'fas fa-toilet',
                component: 'SistemaExcretorPage'
              },
              {
                id: 'sistema-nervoso',
                title: 'Sistema Nervoso',
                path: 'SistemaNervoso',
                icon: 'fas fa-brain',
                component: 'SistemaNervosoPage'
              },
              {
                id: 'sistema-endocrino',
                title: 'Sistema Endócrino',
                path: 'SistemaEndocrino',
                icon: 'fas fa-brain',
                component: 'SistemaEndocrinoPage'
              },
              {
                id: 'sistema-imunologico',
                title: 'Sistema Imunológico',
                path: 'SistemaImunologico',
                icon: 'fas fa-shield-alt',
                component: 'SistemaImunologicoPage'
              },
              {
                id: 'sistema-reprodutor',
                title: 'Sistema Reprodutor',
                path: 'SistemaReprodutor',
                icon: 'fas fa-venus-mars',
                component: 'SistemaReprodutorPage'
              },
              {
                id: 'sistema-tegumentar',
                title: 'Sistema Tegumentar',
                path: 'SistemaTegumentar',
                icon: 'fas fa-user-shield',
                component: 'SistemaTegumentarPage'
              },
            ],
          },
          // Genética e Evolução
          {
            title: 'Genética e Evolução',
            children: [
              { id: 'leis-de-mendel', title: 'Leis de Mendel', path: 'LeisDeMendel', icon: 'fas fa-seedling', component: 'LeisDeMendelPage' },
              { id: 'biotecnologia', title: 'Biotecnologia', path: 'Biotecnologia', icon: 'fas fa-dna', component: 'BiotecnologiaPage' },
              { id: 'teorias-evolutivas', title: 'Teorias Evolutivas', path: 'TeoriasEvolutivas', icon: 'fas fa-book-open', component: 'TeoriasEvolutivasPage' },
            ],
          },
          // Saúde
          {
            title: 'Saúde e Programas de Saúde',
            children: [
              { id: 'doencas', title: 'Doenças', path: 'Doencas', icon: 'fas fa-notes-medical', component: 'DoencasPage' },
              { id: 'vacinas', title: 'Vacinas', path: 'Vacinas', icon: 'fas fa-syringe', component: 'VacinasPage' },
              { id: 'saneamentoBasico', title: 'Saneamento Básico', path: 'SaneamentoBasico', icon: 'fas fa-tint', component: 'SaneamentoBasicoPage' },
              { id: 'politicasPublicas', title: 'Políticas Públicas de Saúde', path: 'PoliticasPublicas', icon: 'fas fa-landmark', component: 'PoliticasPublicasPage' },
            ],
          },
        ],
      },
      // Química (fundamentos primeiro)
      {
        title: 'Química',
        children: [
          {
            title: 'Química Geral e Inorgânica',
            children: [
              { id: 'atomistica', title: 'Atomística', path: '/quimica/quimica-geral-e-inorganica/atomistica', icon: 'fas fa-atom', component: 'AtomisticaPage' },
              { id: 'tabelaPeriodica', title: 'Tabela Periódica', path: '/quimica/quimica-geral-e-inorganica/tabela-periodica', icon: 'fas fa-table', component: 'TabelaPeriodicaPage' },
              { id: 'ligacoesQuimicas', title: 'Ligações Químicas', path: '/quimica/quimica-geral-e-inorganica/ligacoes-quimicas', icon: 'fas fa-link', component: 'LigacoesQuimicasPage' },
              { id: 'funcoesInorganicas', title: 'Funções Inorgânicas', path: '/quimica/quimica-geral-e-inorganica/funcoes-inorganicas', icon: 'fas fa-flask', component: 'FuncoesInorganicasPage' },
              { id: 'reacoesInorganicas', title: 'Reações Inorgânicas', path: '/quimica/quimica-geral-e-inorganica/reacoes-inorganicas', icon: 'fas fa-exchange-alt', component: 'ReacoesInorganicasPage' },
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
  { title: 'Afonso', children: [
      { 
        title: 'Ben 10', 
        path: 'reactPage_Ben10', 
        component: 'Ben10Page' 
      },
    ] 
  },
  
];

export default menuData;
