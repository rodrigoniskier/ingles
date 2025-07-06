import React, { useState } from 'react';
import { RotateCcw, Star, BookOpen, Volume2 } from 'lucide-react';

const FlashCard = ({ word, onNext, onPrevious, currentIndex, totalCards }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [difficulty, setDifficulty] = useState(null);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleDifficultySelect = (level) => {
    setDifficulty(level);
    // Aqui poderia implementar lógica de spaced repetition
  };

  const handleNext = () => {
    setIsFlipped(false);
    setDifficulty(null);
    if (onNext) onNext();
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    setDifficulty(null);
    if (onPrevious) onPrevious();
  };

  const speakWord = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      {/* Progress indicator */}
      <div className="mb-4">
        <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
          <span>Cartão {currentIndex + 1} de {totalCards}</span>
          <span>{Math.round(((currentIndex + 1) / totalCards) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-amber-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / totalCards) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Card */}
      <div className="relative h-80 mb-6">
        <div 
          className={`absolute inset-0 w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          onClick={handleFlip}
        >
          {/* Front of card */}
          <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl shadow-lg flex flex-col justify-center items-center text-white p-6">
            <BookOpen className="h-12 w-12 mb-4 opacity-80" />
            <h2 className="text-3xl font-bold mb-2 text-center">{word.english}</h2>
            <button
              onClick={(e) => {
                e.stopPropagation();
                speakWord(word.english);
              }}
              className="flex items-center space-x-1 text-amber-100 hover:text-white transition-colors"
            >
              <Volume2 className="h-4 w-4" />
              <span className="text-sm">Ouvir</span>
            </button>
            <p className="text-amber-100 text-center mt-4">Clique para ver a tradução</p>
          </div>

          {/* Back of card */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg flex flex-col justify-center items-center text-white p-6">
            <Star className="h-12 w-12 mb-4 opacity-80" />
            <h2 className="text-3xl font-bold mb-2 text-center">{word.portuguese}</h2>
            <p className="text-blue-100 text-center text-sm mb-4">{word.definition}</p>
            {word.examples && word.examples.length > 0 && (
              <div className="text-center">
                <p className="text-blue-200 text-xs mb-1">Exemplo:</p>
                <p className="text-blue-100 text-sm italic">"{word.examples[0]}"</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Difficulty buttons (only show when flipped) */}
      {isFlipped && (
        <div className="mb-6">
          <p className="text-center text-gray-600 mb-3 text-sm">Como foi essa palavra para você?</p>
          <div className="flex justify-center space-x-2">
            <button
              onClick={() => handleDifficultySelect('easy')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                difficulty === 'easy' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-green-100 text-green-700 hover:bg-green-200'
              }`}
            >
              Fácil
            </button>
            <button
              onClick={() => handleDifficultySelect('medium')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                difficulty === 'medium' 
                  ? 'bg-yellow-500 text-white' 
                  : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
              }`}
            >
              Médio
            </button>
            <button
              onClick={() => handleDifficultySelect('hard')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                difficulty === 'hard' 
                  ? 'bg-red-500 text-white' 
                  : 'bg-red-100 text-red-700 hover:bg-red-200'
              }`}
            >
              Difícil
            </button>
          </div>
        </div>
      )}

      {/* Navigation buttons */}
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <RotateCcw className="h-4 w-4" />
          <span>Anterior</span>
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex === totalCards - 1}
          className="flex items-center space-x-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <span>Próximo</span>
          <Star className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default FlashCard;

