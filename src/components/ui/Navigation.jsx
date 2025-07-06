import React, { useState } from 'react';
import { Menu, X, Book, Users, FileText, Gamepad2, Search, TestTube } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { icon: Book, label: 'Módulos Teóricos', href: '/modulos', description: 'Aprenda teoria e fundamentos' },
    { icon: Gamepad2, label: 'Exercícios Práticos', href: '/exercicios', description: 'Pratique com exercícios interativos' },
    { icon: Users, label: 'Flashcards', href: '/flashcards', description: 'Revise vocabulário de forma gamificada' },
    { icon: Search, label: 'Léxico', href: '/lexico', description: 'Explore todo o vocabulário teológico' },
    { icon: TestTube, label: 'Gerador de Testes', href: '/testes', description: 'Crie testes personalizados' },
    { icon: FileText, label: 'Documentos', href: '/documentos', description: 'Acesse recursos teológicos em inglês' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav 
      id="main-navigation"
      role="navigation"
      aria-label="Navegação principal"
      className="bg-white shadow-lg border-b-2 border-amber-200"
      onKeyDown={handleKeyDown}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center space-x-2 text-2xl font-bold text-gray-800 hover:text-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg px-2 py-1"
            aria-label="Inglês Teológico - Página inicial"
          >
            <Book className="h-8 w-8 text-amber-600" aria-hidden="true" />
            <span>Inglês Teológico</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center space-x-2 text-gray-700 hover:text-amber-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg px-2 py-1"
                title={item.description}
              >
                <item.icon className="h-5 w-5" aria-hidden="true" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-amber-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden py-4 border-t border-gray-200"
            role="menu"
            aria-label="Menu de navegação móvel"
          >
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center space-x-3 py-3 px-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                onClick={closeMenu}
                role="menuitem"
                title={item.description}
              >
                <item.icon className="h-5 w-5" aria-hidden="true" />
                <div>
                  <div className="font-medium">{item.label}</div>
                  <div className="text-sm text-gray-500">{item.description}</div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

