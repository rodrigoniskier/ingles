import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ModuleCard from './components/ModuleCard';
import ModulesPage from './pages/ModulesPage';
import ExercisesPage from './pages/ExercisesPage';
import FlashcardsPage from './pages/FlashcardsPage';
import LexiconPage from './pages/LexiconPage';
import TestGeneratorPage from './pages/TestGeneratorPage';
import DocumentsPage from './pages/DocumentsPage';
import { Book, FileText, Gamepad2, Users, Search, TestTube, Star, Clock, Award } from 'lucide-react';
import './App.css';

// Importando as imagens geradas por IA
import reformedChurch from './assets/ai-generated/reformed_church_1.png';
import oldBibleStudy from './assets/ai-generated/old_bible_study_1.png';
import reformationStudy from './assets/ai-generated/reformation_study_1.png';
import openBibleSymbol from './assets/ai-generated/open_bible_symbol_1.png';

function HomePage() {
  const modules = [
    {
      title: 'Fundamentos do Inglês Teológico',
      description: 'Aprenda o alfabeto, fonologia e vocabulário básico para começar sua jornada no inglês teológico. Ideal para iniciantes absolutos.',
      icon: Book,
      backgroundImage: oldBibleStudy,
      href: '/modulos',
      difficulty: 'Iniciante',
      duration: '3-4 horas'
    },
    {
      title: 'Gramática Essencial para Leitura',
      description: 'Domine os tempos verbais, voz passiva e estruturas de frases complexas necessárias para compreender textos teológicos.',
      icon: FileText,
      backgroundImage: reformationStudy,
      href: '/modulos',
      difficulty: 'Básico',
      duration: '4-5 horas'
    },
    {
      title: 'Vocabulário Teológico Aprofundado',
      description: 'Explore termos específicos da teologia sistemática, histórica e bíblica, incluindo vocabulário de autores reformados.',
      icon: Search,
      backgroundImage: reformedChurch,
      href: '/modulos',
      difficulty: 'Intermediário',
      duration: '5-6 horas'
    },
    {
      title: 'Leitura e Compreensão de Textos',
      description: 'Desenvolva estratégias de leitura para compreender textos teológicos complexos e documentos confessionais.',
      icon: Award,
      backgroundImage: openBibleSymbol,
      href: '/modulos',
      difficulty: 'Intermediário',
      duration: '4-5 horas'
    }
  ];

  const features = [
    {
      icon: Gamepad2,
      title: 'Exercícios Interativos',
      description: 'Pratique com exercícios de múltipla escolha em três níveis de dificuldade.',
      href: '/exercicios'
    },
    {
      icon: Users,
      title: 'Flashcards Gamificados',
      description: 'Revise vocabulário e gramática de forma divertida e eficaz.',
      href: '/flashcards'
    },
    {
      icon: Search,
      title: 'Léxico Completo',
      description: 'Acesse todo o vocabulário do curso e palavras bíblicas frequentes.',
      href: '/lexico'
    },
    {
      icon: TestTube,
      title: 'Gerador de Testes',
      description: 'Crie testes personalizados escolhendo até cinco tópicos.',
      href: '/testes'
    }
  ];

  const stats = [
    { icon: Book, number: '4', label: 'Módulos Completos' },
    { icon: FileText, number: '500+', label: 'Termos Teológicos' },
    { icon: Clock, number: '16-20h', label: 'Duração Total' },
    { icon: Star, number: '100%', label: 'Gratuito' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Inglês <span className="text-amber-600">Teológico</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Aprenda inglês instrumental focado na teologia reformada. Do alfabeto ao nível intermediário, 
            com vocabulário bíblico e de autores reformados clássicos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/modulos"
              className="inline-flex items-center justify-center px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Começar Agora
            </a>
            <a
              href="/documentos"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Ver Recursos
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white rounded-2xl shadow-lg mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <stat.icon className="h-8 w-8 text-amber-600 mb-2" />
              <div className="text-3xl font-bold text-gray-800 mb-1">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Módulos de Aprendizado</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma trilha de aprendizado estruturada que leva você do básico ao intermediário, 
            com foco no vocabulário e contexto da teologia reformada.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <ModuleCard key={index} {...module} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white rounded-2xl shadow-lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Ferramentas de Estudo</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recursos interativos e gamificados para maximizar seu aprendizado e retenção do conteúdo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <a
              key={index}
              href={feature.href}
              className="text-center p-6 hover:bg-gray-50 rounded-lg transition-colors duration-200 block"
            >
              <feature.icon className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Pronto para Começar?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Inicie sua jornada no inglês teológico hoje mesmo. Totalmente gratuito e sem necessidade de cadastro.
          </p>
          <a
            href="/modulos"
            className="inline-flex items-center justify-center px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors duration-200 text-lg"
          >
            Começar o Primeiro Módulo
          </a>
        </div>
      </section>
    </Layout>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/modulos" element={<ModulesPage />} />
        <Route path="/exercicios" element={<ExercisesPage />} />
        <Route path="/flashcards" element={<FlashcardsPage />} />
        <Route path="/lexico" element={<LexiconPage />} />
        <Route path="/testes" element={<TestGeneratorPage />} />
        <Route path="/documentos" element={<DocumentsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

