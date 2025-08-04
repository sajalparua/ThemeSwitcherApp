import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const Header = ({ onToggleSidebar, showSidebarToggle }) => {
  const { theme, switchTheme, themes } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow">
      <div className="container-fluid">

        {/* Sidebar Toggle Button (Theme 2 Only) */}
        {showSidebarToggle && (
          <button className="btn btn-outline-light me-2" onClick={onToggleSidebar}>
            ☰
          </button>
        )}

        {/* App Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          🌈 HipsterApp
        </Link>

        {/* Mobile Collapse Toggle (for Theme 1 and 3) */}
        {theme !== 'theme2' && (
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleMenuToggle}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        )}

        {/* Collapse Menu */}
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
          {theme !== 'theme2' && (
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" onClick={() => setMenuOpen(false)}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" onClick={() => setMenuOpen(false)}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </NavLink>
              </li>
            </ul>
          )}

          {/* Theme Switcher */}
          <select
            className="form-select w-auto ms-auto mt-2 mt-lg-0"
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
