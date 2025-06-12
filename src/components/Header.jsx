import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImage from '../assets/marca-site.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Planos', href: '/planos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contato', href: '/contato' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Menu principal">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-essencia-cyan rounded-md"
            onClick={closeMenu}
          >
            <img 
              src={logoImage} 
              alt="Essência Financeira - Logo" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-essencia-green focus:outline-none focus:ring-2 focus:ring-essencia-cyan rounded-md px-2 py-1 ${
                  location.pathname === item.href
                    ? 'text-essencia-green border-b-2 border-essencia-green'
                    : 'text-gray-700 hover:text-essencia-green'
                }`}
                aria-current={location.pathname === item.href ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              asChild 
              className="bg-essencia-green hover:bg-essencia-cyan text-white transition-colors duration-200"
            >
              <Link to="/contato">Fale Conosco</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              className="text-gray-700 hover:text-essencia-green focus:outline-none focus:ring-2 focus:ring-essencia-cyan"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            id="mobile-menu" 
            className="md:hidden bg-white border-t border-gray-200 py-4"
            role="menu"
            aria-orientation="vertical"
          >
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={closeMenu}
                  className={`text-base font-medium px-4 py-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-essencia-cyan ${
                    location.pathname === item.href
                      ? 'text-essencia-green bg-green-50'
                      : 'text-gray-700 hover:text-essencia-green hover:bg-gray-50'
                  }`}
                  role="menuitem"
                  aria-current={location.pathname === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4">
                <Button 
                  asChild 
                  className="w-full bg-essencia-green hover:bg-essencia-cyan text-white transition-colors duration-200"
                >
                  <Link to="/contato" onClick={closeMenu}>Fale Conosco</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

