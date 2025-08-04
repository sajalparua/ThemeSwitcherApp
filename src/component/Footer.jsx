import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footer mt-auto py-3 text-center ${theme}`}>
      <div className="container">
        <p className="mb-1 fw-bold">Hipster Pte. Ltd.</p>
        <p className="mb-1">
          #01-04, 75 Ayer Rajah Crescent, 139953, Singapore
        </p>
        <p className="mb-1">
          UEN: 201621408D | 📞 +65 8231 4107 | 📧 hr@hipster-inc.com
        </p>
        <a href="https://www.hipster-inc.com" target="_blank" rel="noreferrer">
          www.hipster-inc.com
        </a>
        <p className="mt-2 text-muted small">© {new Date().getFullYear()} Hipster Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
