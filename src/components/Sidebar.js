import React, { useState, useEffect } from 'react';
import MenuItem from './MenuItem';
import menuData from '../menuData'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Sidebar.module.css';
import { loginEmailSenha, onAuthStateChanged } from '../Services/FirebaseService';

function AuthBox() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((u) => setUser(u));
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await loginEmailSenha(email, senha);
      setShowModal(false);
      setEmail('');
      setSenha('');
    } catch (err) {
      setError('Usuário ou senha inválidos.');
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    try {
      const { logoutFirebase } = await import('../Services/FirebaseService');
      await logoutFirebase();
      // O estado do usuário será atualizado automaticamente pelo onAuthStateChanged
    } catch (err) {
      // Opcional: mostrar mensagem de erro
    }
  };


  if (user) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: 8 }}>
        <span style={{ color: '#FFF', fontWeight: 'bold' }} title={user.displayName || user.email}>
          {user.displayName || user.email}
        </span>
        <button 
          style={{ width: '100%', marginTop: 8, fontSize: 12, padding: '6px 0', background: '#D0EBFF', color: '#007BFF', border: 'none', borderRadius: 4, cursor: 'pointer', fontWeight: 'bold', transition: 'background 0.2s, color 0.2s' }} 
          onClick={handleLogout} 
          title="Sair"
        >Sair</button>
      </div>
    );
  }

  return (
    <>
      <button
        className={styles.loginBtn}
        onClick={() => setShowModal(true)}
        title="Fazer login ou acessar conta"
        style={{ marginBottom: 8 }}
      >
        Login
      </button>
      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.35)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <form onSubmit={handleLogin} style={{ background: '#fff', padding: 24, borderRadius: 8, minWidth: 300, boxShadow: '0 2px 16px rgba(0,0,0,0.18)' }}>
            <h3 style={{ marginTop: 0, marginBottom: 16, color: '#1976d2' }}>Login</h3>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={{ width: '100%', padding: 8, marginBottom: 12, borderRadius: 4, border: '1px solid #bbb' }}
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              required
              style={{ width: '100%', padding: 8, marginBottom: 12, borderRadius: 4, border: '1px solid #bbb' }}
            />
            {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}
            <button type="submit" style={{ width: '100%', background: '#1976d2', color: '#fff', border: 'none', borderRadius: 4, padding: 10, fontWeight: 'bold', fontSize: 16 }} disabled={loading}>
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
            <button type="button" onClick={() => setShowModal(false)} style={{ width: '100%', marginTop: 8, background: '#eee', color: '#1976d2', border: 'none', borderRadius: 4, padding: 8, fontWeight: 'bold', fontSize: 14 }}>
              Cancelar
            </button>
          </form>
        </div>
      )}
    </>
  );
}


const Sidebar = ({ onItemClick, activeItemPath, isCollapsed, toggleSidebar, handleGoHome }) => {
  const [toggleIconColor, setToggleIconColor] = useState('#FFF');
  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className={styles.sidebarHeader}>
        {isCollapsed ? (
          <button 
            onClick={toggleSidebar} 
            className="sidebar-toggle-btn" 
            title={isCollapsed ? 'Expandir menu' : 'Recolher menu'}
            style={{ alignSelf: 'flex-end', margin: '8px 0' }}
          >
            <FontAwesomeIcon icon={isCollapsed ? faAngleDoubleRight : faAngleDoubleLeft} color={toggleIconColor || '#FFF'} />
          </button>
        ) : (
          <>
            <AuthBox />
            <div className={styles.titleRow}>
              <h2 
                onClick={handleGoHome}
                className={styles.sidebarTitle}
                title="Ir para a página inicial"
                style={{ marginBottom: 0, color: '#FFF' }}
              >
                ENEM Digital
              </h2>
              <button 
                onClick={toggleSidebar} 
                className="sidebar-toggle-btn" 
                title={isCollapsed ? 'Expandir menu' : 'Recolher menu'}
                style={{ marginLeft: 8 }}
              >
                <FontAwesomeIcon icon={isCollapsed ? faAngleDoubleRight : faAngleDoubleLeft} />
              </button>
            </div>
          </>
        )}

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
