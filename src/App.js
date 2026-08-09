import logo from './logo.svg';
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import React from 'react';
import { LanguageProvider } from './components/LanguageContext';
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import Games from './components/Games';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
    <div className="App">
      <Menu />
     <main>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="games" element={<Games />} />
       </Routes>
     </main>
     <Footer />
    </div>
    </LanguageProvider>
  );
}

export default App;
