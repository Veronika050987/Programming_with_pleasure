import logo from './logo.svg';
import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import React from 'react';
import { LanguageProvider } from './components/LanguageContext';
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import Games from './components/Games';
import Footer from './components/Footer';//не забывать убирать <BrowserRouter> из index.js

function App() {
  return (
    <LanguageProvider>
       <HashRouter>
        <div className="App">
          <Menu />
            <main>
              <Routes> 
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/games" element={<Games />} />
              </Routes>
            </main>
        <Footer />
        </div>
       </HashRouter>
    </LanguageProvider>
  );
}

export default App;
