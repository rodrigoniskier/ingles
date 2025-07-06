import React, { useState } from 'react';
import Layout from '../components/Layout';
import FlashCard from '../components/FlashCard';
import { biblicalVocabulary, reformedVocabulary, theologicalTerms, vocabularyCategories } from '../data/vocabulary';
import { Users, Shuffle, Filter, Trophy } from 'lucide-react';

const FlashcardsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isShuffled, setIsShuffled] = useState(false);
  const [sessionStats, setSessionStats] = useState({
    cardsStudied: 0,
    easyCards: 0,
    mediumCards: 0,
    hardCards: 0
  });

  // Combine all vocabulary
  const allVocabulary = [
    ...biblicalVocabulary,
    ...reformedVocabulary,
    ...theologicalTerms
  ];

  // Filter vocabulary by category
  const getFilteredVocabulary = () => {
    if (selectedCategory === 'all') {
      return allVocabulary;
    }
    return allVocabulary.filter(word => word.category === selectedCategory);
  };

  // Shuffle array
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const currentVocabulary = isShuffled 
    ? shuffleArray(getFilteredVocabulary())
    : getFilteredVocabulary();

  const handleNext = () => {
    if (currentCardIndex < currentVocabulary.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setSessionStats(prev => ({
        ...prev,
        cardsStudied: prev.cardsStudied + 1
      }));
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentCardIndex(0);
  };

  const handleShuffle = () => {
    setIsShuffled(!isShuffled);
    setCurrentCardIndex(0);
  };

  const resetSession = () => {
    setCurrentCardIndex(0);
    setSessionStats({
      cardsStudied: 0,
      easyCards: 0,
      mediumCards: 0,
      hardCards: 0
    });
  };

  if (currentVocabulary.length === 0) {
    return (
      <Layout>
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Nenhum flashcard disponível
            </h3>
            <p className="text-gray-500">
              Selecione uma categoria diferente para ver os flashcards.
            </p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Flashcards Gamificados</h1>
          <p className="text-xl text-gray-600">
            Revise vocabulário teológico de forma interativa e divertida
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Filter className="h-4 w-4 inline mr-1" />
                Categoria
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              >
                <option value="all">Todas as Categorias</option>
                {Object.entries(vocabularyCategories).map(([key, label]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
            </div>

            {/* Shuffle Button */}
            <div className="flex items-end">
              <button
                onClick={handleShuffle}
                className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  isShuffled 
                    ? 'bg-amber-600 text-white' 
                    : 'border border-amber-600 text-amber-600 hover:bg-amber-50'
                }`}
              >
                <Shuffle className="h-4 w-4" />
                <span>{isShuffled ? 'Embaralhado' : 'Embaralhar'}</span>
              </button>
            </div>

            {/* Reset Button */}
            <div className="flex items-end">
              <button
                onClick={resetSession}
                className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Reiniciar Sessão
              </button>
            </div>
          </div>

          {/* Session Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">{sessionStats.cardsStudied}</div>
              <div className="text-sm text-gray-600">Estudados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{sessionStats.easyCards}</div>
              <div className="text-sm text-gray-600">Fáceis</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">{sessionStats.mediumCards}</div>
              <div className="text-sm text-gray-600">Médios</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{sessionStats.hardCards}</div>
              <div className="text-sm text-gray-600">Difíceis</div>
            </div>
          </div>
        </div>

        {/* Flashcard */}
        <FlashCard
          word={currentVocabulary[currentCardIndex]}
          onNext={handleNext}
          onPrevious={handlePrevious}
          currentIndex={currentCardIndex}
          totalCards={currentVocabulary.length}
        />

        {/* Completion Message */}
        {currentCardIndex === currentVocabulary.length - 1 && (
          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <Trophy className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              Parabéns! Você completou todos os flashcards!
            </h3>
            <p className="text-green-700 mb-4">
              Continue praticando para melhorar sua retenção do vocabulário teológico.
            </p>
            <button
              onClick={resetSession}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Começar Nova Sessão
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default FlashcardsPage;

