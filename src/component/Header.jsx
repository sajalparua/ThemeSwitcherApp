
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







// import React, { useContext, useState } from 'react';
// import { ThemeContext } from '../context/ThemeContext';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   const { theme, switchTheme, themes } = useContext(ThemeContext);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(prev => !prev);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <nav className="navbar custom-navbar fixed-top">
//       <div className="container-fluid d-flex justify-content-between align-items-center">
//         <Link className="navbar-brand text-white" to="/">🌈 HipsterApp</Link>

//         {/* Hamburger Icon */}
//         <button
//           className="menu-toggle-btn"
//           onClick={toggleMenu}
//           aria-label="Toggle Menu"
//         >
//           ☰
//         </button>

//         {/* Desktop Navigation */}
//         <div className="d-none d-md-block">
//           <select
//             className="form-select"
//             value={theme}
//             onChange={(e) => switchTheme(e.target.value)}
//           >
//             {themes.map((t) => (
//               <option key={t} value={t}>{t.toUpperCase()}</option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="mobile-menu">
//           <Link to="/" onClick={closeMenu}>Home</Link>
//           <Link to="/about" onClick={closeMenu}>About</Link>
//           <Link to="/contact" onClick={closeMenu}>Contact</Link>
//           <select
//             className="form-select mt-2"
//             value={theme}
//             onChange={(e) => {
//               switchTheme(e.target.value);
//               closeMenu();
//             }}
//           >
//             {themes.map((t) => (
//               <option key={t} value={t}>{t.toUpperCase()}</option>
//             ))}
//           </select>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Header;










// import React, { useContext } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { ThemeContext } from '../context/ThemeContext';

// const Header = () => {
//   const { theme, switchTheme, themes } = useContext(ThemeContext);

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow">
//       <div className="container-fluid">
//         {/* App Logo */}
//         <Link className="navbar-brand fw-bold" to="/">
//           🌈 HipsterApp
//         </Link>

//         {/* Toggler for mobile */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Menu and Theme Switcher */}
//         {theme !== 'theme2' && ( <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/">Home</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/about">About</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/contact">Contact</NavLink>
//             </li>
//           </ul>

//           {/* Theme Selector */}
//           <div className="d-flex align-items-center">
//             <select
//               className="form-select"
//               value={theme}
//               onChange={(e) => switchTheme(e.target.value)}
//             >
//               {themes.map((t) => (
//                 <option key={t} value={t}>{t.toUpperCase()}</option>
//               ))}
//             </select>
//           </div>
//         </div>)}
       
//       </div>
//     </nav>
//   );
// };

// export default Header;
