import React, { useState } from 'react';
import Layout from '../components/Layout';
import { modules } from '../data/curriculum';
import { Book, Clock, Award, ChevronRight, Play } from 'lucide-react';

const ModulesPage = () => {
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Iniciante': 'bg-green-100 text-green-800',
      'Básico': 'bg-blue-100 text-blue-800',
      'Intermediário': 'bg-amber-100 text-amber-800',
      'Avançado': 'bg-red-100 text-red-800'
    };
    return colors[difficulty] || 'bg-gray-100 text-gray-800';
  };

  if (selectedLesson) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <button 
                  onClick={() => {setSelectedModule(null); setSelectedLesson(null);}}
                  className="hover:text-amber-600"
                >
                  Módulos
                </button>
              </li>
              <ChevronRight className="h-4 w-4" />
              <li>
                <button 
                  onClick={() => setSelectedLesson(null)}
                  className="hover:text-amber-600"
                >
                  {selectedModule.title}
                </button>
              </li>
              <ChevronRight className="h-4 w-4" />
              <li className="text-gray-800 font-medium">{selectedLesson.title}</li>
            </ol>
          </nav>

          {/* Lesson Content */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">{selectedLesson.title}</h1>
            
            <div className="prose max-w-none">
              {selectedLesson.content.split('\n').map((paragraph, index) => {
                if (paragraph.trim() === '') return null;
                
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                      {paragraph.replace(/\*\*/g, '')}
                    </h3>
                  );
                }
                
                if (paragraph.startsWith('- ')) {
                  return (
                    <li key={index} className="text-gray-700 mb-2">
                      {paragraph.substring(2)}
                    </li>
                  );
                }
                
                return (
                  <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Exercise Section */}
            {selectedLesson.exercises && selectedLesson.exercises.length > 0 && (
              <div className="mt-8 p-6 bg-amber-50 rounded-lg border border-amber-200">
                <h3 className="text-lg font-semibold text-amber-800 mb-4">Exercício de Fixação</h3>
                {selectedLesson.exercises.map((exercise, index) => (
                  <div key={index} className="mb-4">
                    <p className="font-medium text-gray-800 mb-3">{exercise.question}</p>
                    <div className="space-y-2">
                      {exercise.options.map((option, optIndex) => (
                        <button
                          key={optIndex}
                          className={`w-full text-left p-3 rounded-lg border transition-colors ${
                            optIndex === exercise.correct 
                              ? 'border-green-500 bg-green-50 text-green-800' 
                              : 'border-gray-300 hover:border-amber-400 hover:bg-amber-50'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={() => setSelectedLesson(null)}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Voltar ao Módulo
              </button>
              
              <button className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
                Próxima Lição
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (selectedModule) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <button 
                  onClick={() => setSelectedModule(null)}
                  className="hover:text-amber-600"
                >
                  Módulos
                </button>
              </li>
              <ChevronRight className="h-4 w-4" />
              <li className="text-gray-800 font-medium">{selectedModule.title}</li>
            </ol>
          </nav>

          {/* Module Header */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{selectedModule.title}</h1>
                <p className="text-gray-600 text-lg">{selectedModule.description}</p>
              </div>
              <div className="flex space-x-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(selectedModule.difficulty)}`}>
                  {selectedModule.difficulty}
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {selectedModule.duration}
                </span>
              </div>
            </div>
          </div>

          {/* Lessons */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Lições</h2>
            {selectedModule.lessons.map((lesson, index) => (
              <div key={lesson.id} className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                        <span className="text-amber-600 font-semibold">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{lesson.title}</h3>
                        <p className="text-gray-600 text-sm">
                          {lesson.exercises ? `${lesson.exercises.length} exercício(s) incluído(s)` : 'Conteúdo teórico'}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedLesson(lesson)}
                      className="flex items-center space-x-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
                    >
                      <Play className="h-4 w-4" />
                      <span>Iniciar</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Módulos Teóricos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore nossa trilha de aprendizado estruturada, do básico ao intermediário, 
            com foco no vocabulário e contexto da teologia reformada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((module) => (
            <div key={module.id} className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Book className="h-8 w-8 text-amber-600" />
                  <div className="flex space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(module.difficulty)}`}>
                      {module.difficulty}
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {module.duration}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">{module.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{module.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Award className="h-4 w-4 mr-1" />
                      {module.lessons.length} lições
                    </span>
                  </div>
                  
                  <button
                    onClick={() => setSelectedModule(module)}
                    className="flex items-center space-x-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
                  >
                    <span>Começar</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ModulesPage;

