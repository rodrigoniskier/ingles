import React, { useState } from 'react';
import Layout from '../components/Layout';
import { 
  theologicalDocuments, 
  documentCategories, 
  documentTypes, 
  difficultyLevels,
  getDocumentsByCategory,
  getDocumentsByDifficulty 
} from '../data/documents';
import { FileText, ExternalLink, Filter, Book, Clock, Award, Search } from 'lucide-react';

const DocumentsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Get all documents flattened
  const allDocuments = theologicalDocuments.flatMap(cat => 
    cat.documents.map(doc => ({ ...doc, category: cat.category }))
  );

  // Filter documents
  const filteredDocuments = allDocuments.filter(doc => {
    const matchesSearch = searchTerm === '' || 
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || doc.difficulty.includes(selectedDifficulty);
    const matchesType = selectedType === 'all' || doc.type === selectedType;

    return matchesSearch && matchesCategory && matchesDifficulty && matchesType;
  });

  const getDifficultyColor = (difficulty) => {
    if (difficulty.includes('Beginner')) return 'bg-green-100 text-green-800';
    if (difficulty.includes('Intermediate')) return 'bg-amber-100 text-amber-800';
    if (difficulty.includes('Advanced')) return 'bg-red-100 text-red-800';
    return 'bg-gray-100 text-gray-800';
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Confessional':
      case 'Catechism':
        return <Award className="h-4 w-4" />;
      case 'Systematic Theology':
      case 'Biblical Theology':
        return <Book className="h-4 w-4" />;
      case 'Biblical Commentary':
        return <FileText className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedDifficulty('all');
    setSelectedType('all');
    setSearchTerm('');
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Documentos Teológicos</h1>
          <p className="text-xl text-gray-600">
            Acesse recursos teológicos em inglês para aprofundar seus estudos
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por título, descrição ou tópico..."
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
                {documentCategories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              >
                <option value="all">Todos os Tipos</option>
                {documentTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dificuldade
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              >
                <option value="all">Todas as Dificuldades</option>
                {difficultyLevels.map(difficulty => (
                  <option key={difficulty} value={difficulty}>{difficulty}</option>
                ))}
              </select>
            </div>

            {/* Clear Filters */}
            <div className="flex items-end">
              <button
                onClick={clearFilters}
                className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Limpar Filtros
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-sm text-gray-600">
            Mostrando {filteredDocuments.length} de {allDocuments.length} documentos
          </div>
        </div>

        {/* Documents Grid */}
        {filteredDocuments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocuments.map((doc, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {getTypeIcon(doc.type)}
                      <span className="text-sm text-gray-600">{doc.type}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(doc.difficulty)}`}>
                      {doc.difficulty}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                    {doc.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {doc.description}
                  </p>

                  {/* Topics */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {doc.topics.slice(0, 3).map((topic, topicIndex) => (
                        <span key={topicIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                          {topic}
                        </span>
                      ))}
                      {doc.topics.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                          +{doc.topics.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Category */}
                  <div className="mb-4">
                    <span className="text-xs text-gray-500">Categoria: {doc.category}</span>
                  </div>

                  {/* Action Button */}
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 w-full px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
                  >
                    <span>Acessar Documento</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Nenhum documento encontrado
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

        {/* Study Tips */}
        <div className="mt-12 bg-blue-50 rounded-lg border border-blue-200 p-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Dicas para Leitura Teológica em Inglês</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-blue-700 mb-2">Para Iniciantes:</h3>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>• Comece com catecismos e confissões</li>
                <li>• Use dicionário teológico para termos desconhecidos</li>
                <li>• Leia em sessões curtas (15-20 minutos)</li>
                <li>• Faça anotações de palavras-chave</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-blue-700 mb-2">Para Intermediários/Avançados:</h3>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>• Explore teologia sistemática e comentários</li>
                <li>• Compare diferentes autores sobre o mesmo tópico</li>
                <li>• Pratique resumos em português</li>
                <li>• Participe de discussões online sobre os textos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DocumentsPage;

