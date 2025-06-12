import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Planos from './pages/Planos';
import Contato from './pages/Contato';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import CTAModal from './components/CTAModal';
import WhatsAppButton from './components/WhatsAppButton';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    // Mostrar CTA após 20 segundos na primeira visita
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setShowCTA(true);
        localStorage.setItem('hasVisited', 'true');
      }, 20000); // 20 segundos

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Skip links para acessibilidade */}
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo principal
        </a>
        
        <Header />
        
        <main id="main-content" role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planos" element={<Planos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        
        <Footer />
        
        {/* Componentes fixos */}
        <WhatsAppButton />
        <ThemeToggle />
        
        {/* Modal CTA */}
        {showCTA && (
          <CTAModal onClose={() => setShowCTA(false)} />
        )}
      </div>
    </Router>
  );
}

export default App;

