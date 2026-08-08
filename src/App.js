import logo from './logo.svg';
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import Articles from './components/Articles';
import Footer from './components/Footer';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <Menu />
     <main>
       <Routes>
          <Route path="/" element={<Menu />} />
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="info/:id" element={<Info />} />
          <Route path="articles" element={<Articles />} />
       </Routes>
     </main>
     <Footer />
    </div>
  );
}

export default App;
