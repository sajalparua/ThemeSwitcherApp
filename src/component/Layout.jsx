import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Header from './Header';
import Sidebar from './SlideBar';

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <Header onToggleSidebar={handleToggleSidebar} showSidebarToggle={theme === 'theme2'} />

      {theme === 'theme2' ? (
        <div className="d-flex theme2-layout">
          <Sidebar isOpen={isSidebarOpen} />
          <main className="flex-grow-1 p-4">{children}</main>
        </div>
      ) : theme === 'theme3' ? (
        <div className="container-fluid theme3-layout p-4">
          <div className="row">
            <div className="col-lg-12">{children}</div>
          </div>
        </div>
      ) : (
        <div className="container mt-4">{children}</div>
      )}
    </>
  );
};

export default Layout;
