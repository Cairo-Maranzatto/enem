import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const MenuItem = ({ item, onItemClick, activeItemPath, initiallyOpen, isSidebarCollapsed }) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen || false);

  // Effect to open parent menus if a child is active on initial load or direct navigation
  useEffect(() => {
    // This effect ensures that if 'initiallyOpen' prop changes (e.g. parent forcing open),
    // the state updates accordingly. Also, if sidebar collapses, close all submenus.
    if (isSidebarCollapsed) {
        setIsOpen(false);
    } else {
        setIsOpen(initiallyOpen || false);
    }
  }, [initiallyOpen, isSidebarCollapsed]);

  // If activeItemPath changes and this item is an ancestor, it should open.
  useEffect(() => {
    if (!isSidebarCollapsed && activeItemPath && item.children) {
      const checkIfActiveAncestor = (currentItem) => {
        if (!currentItem.children) return false;
        return currentItem.children.some(child => 
          child.path === activeItemPath || checkIfActiveAncestor(child)
        );
      };
      if (checkIfActiveAncestor(item)) {
        setIsOpen(true);
      }
    }
  }, [activeItemPath, item, isSidebarCollapsed]);


  const hasChildren = item.children && item.children.length > 0;

  const handleToggle = useCallback((e) => {
    e.stopPropagation();
    if (hasChildren && !isSidebarCollapsed) { // Prevent toggle if sidebar is collapsed
      setIsOpen(prevOpen => !prevOpen);
    }
  }, [hasChildren, isSidebarCollapsed]);

  const handleClick = useCallback((e) => {
    e.stopPropagation();
    if (item.path) {
      onItemClick(item);
    } else if (hasChildren && !isSidebarCollapsed) {
      setIsOpen(prevOpen => !prevOpen);
    }
    // If sidebar is collapsed and it's a parent item, clicking it should probably expand the sidebar
    // This logic would be better handled in Sidebar.js or App.js by passing an expandSidebar function
  }, [item, hasChildren, onItemClick, isSidebarCollapsed, setIsOpen]);

  const isActive = activeItemPath === item.path;
  const isParentOfActive = hasChildren && isOpen && item.children.some(child => child.path === activeItemPath || (child.children && child.children.some(subChild => subChild.path === activeItemPath)));

  return (
    <li style={{ background: 'inherit' }}>
      <div 
        onClick={handleClick} 
        className={`menu-item-header ${isActive ? 'active' : ''} ${hasChildren ? 'has-children' : ''} ${isParentOfActive && !isActive ? 'parent-of-active' : ''}`}
        title={item.title} // Show full title on hover, useful when collapsed
        style={{ cursor: (item.path || (hasChildren && !isSidebarCollapsed)) ? 'pointer' : 'default' }}
      >
        <span className="menu-item-title">{item.title}</span>
        {hasChildren && (
          <FontAwesomeIcon 
            icon={isOpen ? faChevronDown : faChevronRight} 
            className="menu-toggle-icon" 
            onClick={handleToggle} 
          />
        )}
      </div>
      {!isSidebarCollapsed && hasChildren && isOpen && (
        <ul className="submenu">
          {item.children.map((child) => (
            <MenuItem 
              key={child.title} 
              item={child} 
              onItemClick={onItemClick} 
              activeItemPath={activeItemPath} 
              initiallyOpen={child.children && child.children.some(subChild => subChild.path === activeItemPath)}
              isSidebarCollapsed={isSidebarCollapsed}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
