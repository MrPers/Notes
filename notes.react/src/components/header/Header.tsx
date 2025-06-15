import React from 'react';
import { isAuthenticated, signinRedirect, signoutRedirect } from '../../auth/user-service';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Notes App</h1>
        <nav className="header-nav">
          {!isAuthenticated() ? (
            <button 
              className="header-button" 
              onClick={() => signinRedirect()}
            >
              Войти
            </button>
          ) : (
            <button 
              className="header-button" 
              onClick={() => signoutRedirect()}
            >
              Выйти
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;