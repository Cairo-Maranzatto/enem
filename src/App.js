import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
import DivisaoCelularPage from './pages/Biologia/Citologia/DivisaoCelular/DivisaoCelularPage';
import MembranaPlasmaticaPage from './pages/Biologia/Citologia/MembranaPlasmatica/MembranaPlasmaticaPage';
import MetabolismoCelularPage from './pages/Biologia/Citologia/MetabolismoCelular/MetabolismoCelularPage';
import OrganelasCitoplasmaticasPage from './pages/Biologia/Citologia/OrganelasCitoplasmaticas/OrganelasCitoplasmaticasPage';
import VirusPage from './pages/Biologia/Citologia/Virus/VirusPage';
import CadeiaAlimentarPage from './pages/Biologia/Ecologia/CadeiaAlimentar/CadeiaAlimentarPage';
import CiclosBiogeoquimicosPage from './pages/Biologia/Ecologia/CiclosBiogeoquimicos/CiclosBiogeoquimicosPage';
import ConceitosEcologiaPage from './pages/Biologia/Ecologia/ConceitosEcologia/ConceitosEcologiaPage';
import PoluicaoDaAguaPage from './pages/Biologia/Ecologia/PoluicaoDaAgua/PoluicaoDaAguaPage';
import ProblemasAmbientaisPage from './pages/Biologia/Ecologia/ProblemasAmbientais/ProblemasAmbientaisPage';
import RelacoesEcologicasPage from './pages/Biologia/Ecologia/RelacoesEcologicas/RelacoesEcologicasPage';
import SistemaDigestorioPage from './pages/Biologia/FisiologiaHumana/SistemaDigestorio/SistemaDigestorioPage';
import SistemaCirculatorioPage from './pages/Biologia/FisiologiaHumana/SistemaCirculatorio/SistemaCirculatorioPage';
import SistemaEndocrinoPage from './pages/Biologia/FisiologiaHumana/SistemaEndocrino/SistemaEndocrinoPage';
import SistemaExcretorPage from './pages/Biologia/FisiologiaHumana/SistemaExcretor/SistemaExcretorPage';
import SistemaImunologicoPage from './pages/Biologia/FisiologiaHumana/SistemaImunologico/SistemaImunologicoPage';
import Ben10Page from './pages/Afonso/Ben10/Ben10Page';
import SistemaNervosoPage from './pages/Biologia/FisiologiaHumana/SistemaNervoso/SistemaNervosoPage';
import SistemaReprodutorPage from './pages/Biologia/FisiologiaHumana/SistemaReprodutor/SistemaReprodutorPage';
import SistemaRespiratorioPage from './pages/Biologia/FisiologiaHumana/SistemaRespiratorio/SistemaRespiratorioPage';
import SistemaTegumentarPage from './pages/Biologia/FisiologiaHumana/SistemaTegumentar/SistemaTegumentarPage';
import BiotecnologiaPage from './pages/Biologia/GeneticaEvolucao/Biotecnologia/BiotecnologiaPage';
import LeisDeMendelPage from './pages/Biologia/GeneticaEvolucao/LeisMendel/LeisDeMendelPage';
import TeoriasEvolutivasPage from './pages/Biologia/GeneticaEvolucao/TeoriasEvolutivas/TeoriasEvolutivasPage';
import DoencasPage from './pages/Biologia/ProgramasDeSaude/Doencas/DoencasPage';
import PoliticasPublicasPage from './pages/Biologia/ProgramasDeSaude/PoliticasPublicas/PoliticasPublicasPage';
import SaneamentoBasicoPage from './pages/Biologia/ProgramasDeSaude/SaneamentoBasico/SaneamentoBasicoPage';
import VacinasPage from './pages/Biologia/ProgramasDeSaude/Vacinas/VacinasPage';
import AtomisticaPage from './pages/Quimica/QuimicaGeralEInorganica/Atomistica/AtomisticaPage';
import FuncoesInorganicasPage from './pages/Quimica/QuimicaGeralEInorganica/FuncoesInorganicas/FuncoesInorganicasPage';
import LigacoesQuimicasPage from './pages/Quimica/QuimicaGeralEInorganica/LigacoesQuimicas/LigacoesQuimicasPage';
import ReacoesInorganicasPage from './pages/Quimica/QuimicaGeralEInorganica/ReacoesInorganicas/ReacoesInorganicasPage';
import TabelaPeriodicaPage from './pages/Quimica/QuimicaGeralEInorganica/TabelaPeriodica/TabelaPeriodicaPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [selectedUrl, setSelectedUrl] = useState('');
  const [activeItemPath, setActiveItemPath] = useState('');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(window.innerWidth < 768);
  const [ReactComponentToRender, setReactComponentToRender] = useState(null); // Estado para o componente React real
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  const handleMenuItemClick = (item) => { // 'item' é o objeto do menuData
    if (item.component) {
      setSelectedUrl('');
      
      setReactComponentToRender(null); // Limpa antes de definir o novo
      if (item.component === 'DivisaoCelularPage') {
        setReactComponentToRender(() => DivisaoCelularPage);
      } else if (item.component === 'MembranaPlasmaticaPage') {
        setReactComponentToRender(() => MembranaPlasmaticaPage);
      } else if (item.component === 'MetabolismoCelularPage') {
        setReactComponentToRender(() => MetabolismoCelularPage);
      } else if (item.component === 'OrganelasCitoplasmaticasPage') {
        setReactComponentToRender(() => OrganelasCitoplasmaticasPage);
      } else if (item.component === 'VirusPage') {
        setReactComponentToRender(() => VirusPage);
      } else if (item.component === 'CadeiaAlimentarPage') {
        setReactComponentToRender(() => CadeiaAlimentarPage);
      } else if (item.component === 'CiclosBiogeoquimicosPage') {
        setReactComponentToRender(() => CiclosBiogeoquimicosPage);
      } else if (item.component === 'ConceitosEcologiaPage') {
        setReactComponentToRender(() => ConceitosEcologiaPage);
      } else if (item.component === 'PoluicaoDaAguaPage') {
        setReactComponentToRender(() => PoluicaoDaAguaPage);
      } else if (item.component === 'ProblemasAmbientaisPage') {
        setReactComponentToRender(() => ProblemasAmbientaisPage);
      } else if (item.component === 'RelacoesEcologicasPage') {
        setReactComponentToRender(() => RelacoesEcologicasPage);
      } else if (item.component === 'SistemaDigestorioPage') {
        setReactComponentToRender(() => SistemaDigestorioPage);
      } else if (item.component === 'SistemaCirculatorioPage') {
        setReactComponentToRender(() => SistemaCirculatorioPage);
      } else if (item.component === 'SistemaEndocrinoPage') {
        setReactComponentToRender(() => SistemaEndocrinoPage);
      } else if (item.component === 'SistemaExcretorPage') {
        setReactComponentToRender(() => SistemaExcretorPage);
      } else if (item.component === 'SistemaImunologicoPage') {
        setReactComponentToRender(() => SistemaImunologicoPage);
      } else if (item.component === 'SistemaNervosoPage') {
        setReactComponentToRender(() => SistemaNervosoPage);
      } else if (item.component === 'SistemaReprodutorPage') {
        setReactComponentToRender(() => SistemaReprodutorPage);
      } else if (item.component === 'SistemaRespiratorioPage') {
        setReactComponentToRender(() => SistemaRespiratorioPage);
      } else if (item.component === 'SistemaTegumentarPage') {
        setReactComponentToRender(() => SistemaTegumentarPage);
      } else if (item.component === 'BiotecnologiaPage') {
        setReactComponentToRender(() => BiotecnologiaPage);
      } else if (item.component === 'LeisDeMendelPage') {
        setReactComponentToRender(() => LeisDeMendelPage);
      } else if (item.component === 'TeoriasEvolutivasPage') {
        setReactComponentToRender(() => TeoriasEvolutivasPage);
      } else if (item.component === 'DoencasPage') {
        setReactComponentToRender(() => DoencasPage);
      } else if (item.component === 'PoliticasPublicasPage') {
        setReactComponentToRender(() => PoliticasPublicasPage);
      } else if (item.component === 'SaneamentoBasicoPage') {
        setReactComponentToRender(() => SaneamentoBasicoPage);
      } else if (item.component === 'VacinasPage') {
        setReactComponentToRender(() => VacinasPage);
      } else if (item.component === 'AtomisticaPage') {
        setReactComponentToRender(() => AtomisticaPage);
      } else if (item.component === 'FuncoesInorganicasPage') {
        setReactComponentToRender(() => FuncoesInorganicasPage);
      } else if (item.component === 'LigacoesQuimicasPage') {
        setReactComponentToRender(() => LigacoesQuimicasPage);
      } else if (item.component === 'ReacoesInorganicasPage') {
        setReactComponentToRender(() => ReacoesInorganicasPage);
      } else if (item.component === 'TabelaPeriodicaPage') {
        setReactComponentToRender(() => TabelaPeriodicaPage);
      } else if (item.component === 'Ben10Page') {
        setReactComponentToRender(() => Ben10Page);
      }
      // Adicionar mais 'else if' para outros componentes React
    } else {
      setReactComponentToRender(null);
      setSelectedUrl(item.path);
    }
    setActiveItemPath(item.path);
    if (isMobileView) { // Close sidebar on item click in mobile view
      setIsSidebarCollapsed(true);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleGoHome = () => {
    setSelectedUrl('');
    setReactComponentToRender(null); // Limpa o componente React
    setActiveItemPath('');
    if (isMobileView && !isSidebarCollapsed) {
      // If on mobile and sidebar is open, close it when going home
      setIsSidebarCollapsed(true);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const newIsMobileView = window.innerWidth < 768;
      setIsMobileView(newIsMobileView);

      if (newIsMobileView) {
        // If entering or currently in mobile view, always collapse the sidebar
        setIsSidebarCollapsed(true);
      } 
      // If entering or currently in desktop view (newIsMobileView is false),
      // we do NOT automatically change isSidebarCollapsed here.
      // This allows the user's manual toggle on desktop to persist.
      // The initial state of isSidebarCollapsed (useState(window.innerWidth < 768))
      // handles the default behavior on first load (expanded on desktop, collapsed on mobile).
    };

    window.addEventListener('resize', handleResize);
    // Call handleResize once on mount to set initial isMobileView 
    // and ensure sidebar is collapsed if starting in mobile view.
    handleResize(); 

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`app-container ${isSidebarCollapsed ? 'sidebar-collapsed' : ''} ${isMobileView ? 'mobile-view' : ''}`}>
      <button className="sidebar-toggle-mobile-btn" onClick={toggleSidebar}>
         <FontAwesomeIcon icon={isSidebarCollapsed ? faBars : faTimes} />
      </button>
      <Sidebar 
        onItemClick={handleMenuItemClick} 
        activeItemPath={activeItemPath} 
        isCollapsed={isSidebarCollapsed} 
        toggleSidebar={toggleSidebar} 
        handleGoHome={handleGoHome}
      />
      {ReactComponentToRender ? 
        <ContentArea ReactComponentToRender={ReactComponentToRender} /> : 
        <ContentArea selectedUrl={selectedUrl} />
      }
    </div>
  );
}

export default App;
