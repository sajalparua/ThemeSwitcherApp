
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const Header = ({ onToggleSidebar, showSidebarToggle }) => {
  const { theme, switchTheme, themes } = useContext(ThemeContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow">
      <div className="container-fluid">
        {/* Toggle Sidebar Button (only for Theme 2) */}
        {showSidebarToggle && (
          <button className="btn btn-outline-light me-2" onClick={onToggleSidebar}>
            ☰
          </button>
        )}

        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          🌈 HipsterApp
        </Link>

        {/* Nav menu */}
       
        <div className="collapse navbar-collapse" id="navbarNav">
           {
          theme !== 'theme2' && (
              <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>)
        }
        

          {/* Theme Switcher */}
          <select
            className="form-select w-auto ms-auto"
            value={theme}
            onChange={(e) => switchTheme(e.target.value)}
          >
            {themes.map((t) => (
              <option key={t} value={t}>
                {t.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Header;





