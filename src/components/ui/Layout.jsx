import React from 'react';
import Navigation from './Navigation';
import AccessibilityFeatures from './AccessibilityFeatures';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <AccessibilityFeatures />
      
      <header role="banner">
        <Navigation />
      </header>
      
      <main 
        id="main-content"
        role="main"
        tabIndex="-1"
        className="container mx-auto px-4 py-8"
      >
        {children}
      </main>
      
      <footer 
        role="contentinfo"
        className="bg-gray-800 text-white py-8 mt-16"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-amber-400 mb-2">Inglês Teológico</h2>
            <p className="text-gray-300">
              Aprenda inglês instrumental focado na teologia reformada
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            <div>
              <h3 className="font-semibold text-amber-400 mb-2">Recursos</h3>
              <ul className="space-y-1 text-sm text-gray-300">
                <li><a href="/modulos" className="hover:text-amber-400 transition-colors">Módulos Teóricos</a></li>
                <li><a href="/exercicios" className="hover:text-amber-400 transition-colors">Exercícios Práticos</a></li>
                <li><a href="/flashcards" className="hover:text-amber-400 transition-colors">Flashcards</a></li>
                <li><a href="/lexico" className="hover:text-amber-400 transition-colors">Léxico Completo</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-amber-400 mb-2">Ferramentas</h3>
              <ul className="space-y-1 text-sm text-gray-300">
                <li><a href="/testes" className="hover:text-amber-400 transition-colors">Gerador de Testes</a></li>
                <li><a href="/documentos" className="hover:text-amber-400 transition-colors">Documentos Teológicos</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-amber-400 mb-2">Sobre</h3>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>Curso 100% Gratuito</li>
                <li>Foco na Teologia Reformada</li>
                <li>Do Básico ao Intermediário</li>
                <li>Sem Necessidade de Cadastro</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-4">
            <p className="text-sm text-gray-400">
              © 2025 Inglês Teológico. Todos os direitos reservados. 
              <span className="block mt-1">
                Desenvolvido com foco na acessibilidade e usabilidade.
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

