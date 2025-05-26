import React from 'react';
import MenuItem from './MenuItem';
import menuData from '../menuData'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ onItemClick, activeItemPath, isCollapsed, toggleSidebar, handleGoHome }) => {
  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        {!isCollapsed && 
          <h2 onClick={handleGoHome} style={{ cursor: 'pointer' }} title="Ir para a página inicial">
            ENEM Digital
          </h2>
        }
        <button onClick={toggleSidebar} className="sidebar-toggle-btn" title={isCollapsed ? 'Expandir menu' : 'Recolher menu'}>
          <FontAwesomeIcon icon={isCollapsed ? faAngleDoubleRight : faAngleDoubleLeft} />
        </button>
      </div>
      <ul className="menu-list">
        {menuData.map((item) => (
          <MenuItem 
            key={item.title} 
            item={item} 
            onItemClick={onItemClick} 
            activeItemPath={activeItemPath} 
            initiallyOpen={!isCollapsed && item.children && item.children.some(child => child.path === activeItemPath || (child.children && child.children.some(subChild => subChild.path === activeItemPath)))}
            isSidebarCollapsed={isCollapsed}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
