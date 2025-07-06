import React, { useState } from 'react';
import { Volume2, BookOpen, Tag, Star } from 'lucide-react';

const VocabularyCard = ({ word }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const speakWord = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      speechSynthesis.speak(utterance);
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      fundamental: 'bg-blue-100 text-blue-800',
      christology: 'bg-purple-100 text-purple-800',
      pneumatology: 'bg-green-100 text-green-800',
      soteriology: 'bg-amber-100 text-amber-800',
      eschatology: 'bg-red-100 text-red-800',
      biblical_theology: 'bg-indigo-100 text-indigo-800',
      systematic_theology: 'bg-gray-100 text-gray-800',
      theology_proper: 'bg-pink-100 text-pink-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const getFrequencyColor = (frequency) => {
    const colors = {
      very_high: 'text-green-600',
      high: 'text-blue-600',
      medium: 'text-amber-600',
      low: 'text-gray-600'
    };
    return colors[frequency] || 'text-gray-600';
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h3 className="text-xl font-bold text-gray-800">{word.english}</h3>
              <button
                onClick={() => speakWord(word.english)}
                className="text-amber-600 hover:text-amber-700 transition-colors"
                title="Ouvir pronúncia"
              >
                <Volume2 className="h-5 w-5" />
              </button>
            </div>
            <p className="text-lg text-gray-600 font-medium">{word.portuguese}</p>
          </div>
          
          {word.frequency && (
            <div className="flex items-center space-x-1">
              <Star className={`h-4 w-4 ${getFrequencyColor(word.frequency)}`} />
              <span className={`text-xs ${getFrequencyColor(word.frequency)}`}>
                {word.frequency.replace('_', ' ').toUpperCase()}
              </span>
            </div>
          )}
        </div>

        {/* Definition */}
        <p className="text-gray-700 mb-3 leading-relaxed">{word.definition}</p>

        {/* Category and Author */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {word.category && (
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(word.category)}`}>
              <Tag className="h-3 w-3 mr-1" />
              {word.category.replace('_', ' ')}
            </span>
          )}
          
          {word.author && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
              <BookOpen className="h-3 w-3 mr-1" />
              {word.author}
            </span>
          )}
          
          {word.level && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700">
              {word.level}
            </span>
          )}
        </div>

        {/* Examples (expandable) */}
        {word.examples && word.examples.length > 0 && (
          <div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-amber-600 hover:text-amber-700 text-sm font-medium mb-2 transition-colors"
            >
              {isExpanded ? 'Ocultar exemplos' : 'Ver exemplos'}
            </button>
            
            {isExpanded && (
              <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                {word.examples.map((example, index) => (
                  <div key={index} className="text-sm">
                    <p className="text-gray-700 italic">"{example}"</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VocabularyCard;

