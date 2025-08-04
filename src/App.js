import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { ThemeProvider } from './context/ThemeContext';
import Header from './component/Header'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/themes/theme.css'
import Footer from './component/Footer';



function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header/>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
