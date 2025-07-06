import React, { useState, useMemo } from 'react';
import Layout from '../components/Layout';
import VocabularyCard from '../components/VocabularyCard';
import { 
  biblicalVocabulary, 
  reformedVocabulary, 
  theologicalTerms, 
  vocabularyCategories,
  frequencyLevels 
} from '../data/vocabulary';
import { Search, Filter, BookOpen, SortAsc, SortDesc } from 'lucide-react';

const LexiconPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFrequency, setSelectedFrequency] = useState('all');
  const [sortBy, setSortBy] = useState('alphabetical');
  const [sortOrder, setSortOrder] = useState('asc');

  // Combine all vocabulary
  const allVocabulary = [
    ...biblicalVocabulary,
    ...reformedVocabulary,
    ...theologicalTerms
  ];

  // Filter and sort vocabulary
  const filteredAndSortedVocabulary = useMemo(() => {
    let filtered = allVocabulary;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(word => 
        word.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
        word.portuguese.toLowerCase().includes(searchTerm.toLowerCase()) ||
        word.definition.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(word => word.category === selectedCategory);
    }

    // Filter by frequency
    if (selectedFrequency !== 'all') {
      filtered = filtered.filter(word => word.frequency === selectedFrequency);
    }

    // Sort
    filtered.sort((a, b) => {
      let comparison = 0;
      
      switch (sortBy) {
        case 'alphabetical':
          comparison = a.english.localeCompare(b.english);
          break;
        case 'frequency':
          const frequencyOrder = ['very_high', 'high', 'medium', 'low'];
          const aFreq = frequencyOrder.indexOf(a.frequency || 'low');
          const bFreq = frequencyOrder.indexOf(b.frequency || 'low');
          comparison = aFreq - bFreq;
          break;
        case 'category':
          comparison = (a.category || '').localeCompare(b.category || '');
          break;
        default:
          comparison = 0;
      }

      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedFrequency, sortBy, sortOrder]);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedFrequency('all');
    setSortBy('alphabetical');
    setSortOrder('asc');
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Léxico Teológico</h1>
          <p className="text-xl text-gray-600">
            Explore todo o vocabulário do curso e palavras bíblicas frequentes
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por palavra em inglês, português ou definição..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Filter className="h-4 w-4 inline mr-1" />
                Categoria
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              >
                <option value="all">Todas as Categorias</option>
                {Object.entries(vocabularyCategories).map(([key, label]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
            </div>

            {/* Frequency Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Frequência
              </label>
              <select
                value={selectedFrequency}
                onChange={(e) => setSelectedFrequency(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              >
                <option value="all">Todas as Frequências</option>
                {Object.entries(frequencyLevels).map(([key, label]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ordenar por
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              >
                <option value="alphabetical">Alfabética</option>
                <option value="frequency">Frequência</option>
                <option value="category">Categoria</option>
              </select>
            </div>

            {/* Sort Order */}
            <div className="flex items-end">
              <button
                onClick={toggleSortOrder}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {sortOrder === 'asc' ? (
                  <SortAsc className="h-4 w-4" />
                ) : (
                  <SortDesc className="h-4 w-4" />
                )}
                <span>{sortOrder === 'asc' ? 'Crescente' : 'Decrescente'}</span>
              </button>
            </div>
          </div>

          {/* Filter Summary and Clear */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div className="text-sm text-gray-600">
              Mostrando {filteredAndSortedVocabulary.length} de {allVocabulary.length} palavras
            </div>
            <button
              onClick={clearFilters}
              className="text-sm text-amber-600 hover:text-amber-700 font-medium"
            >
              Limpar Filtros
            </button>
          </div>
        </div>

        {/* Results */}
        {filteredAndSortedVocabulary.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedVocabulary.map((word, index) => (
              <VocabularyCard key={`${word.english}-${index}`} word={word} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Nenhuma palavra encontrada
            </h3>
            <p className="text-gray-500 mb-4">
              Tente ajustar seus filtros ou termo de busca.
            </p>
            <button
              onClick={clearFilters}
              className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
            >
              Limpar Filtros
            </button>
          </div>
        )}

        {/* Statistics */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Estatísticas do Léxico</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{biblicalVocabulary.length}</div>
              <div className="text-sm text-gray-600">Palavras Bíblicas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">{reformedVocabulary.length}</div>
              <div className="text-sm text-gray-600">Termos Reformados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">{theologicalTerms.length}</div>
              <div className="text-sm text-gray-600">Termos Teológicos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{allVocabulary.length}</div>
              <div className="text-sm text-gray-600">Total de Palavras</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LexiconPage;

