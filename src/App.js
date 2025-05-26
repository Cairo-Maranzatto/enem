import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [selectedUrl, setSelectedUrl] = useState('');
  const [activeItemPath, setActiveItemPath] = useState('');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(window.innerWidth < 768);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  const handleMenuItemClick = (path) => {
    setSelectedUrl(path);
    setActiveItemPath(path);
    if (isMobileView) { // Close sidebar on item click in mobile view
      setIsSidebarCollapsed(true);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleGoHome = () => {
    setSelectedUrl('');
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
      <ContentArea selectedUrl={selectedUrl} />
    </div>
  );
}

export default App;
