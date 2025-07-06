import React, { useState } from 'react';
import Layout from '../components/Layout';
import ExerciseCard from '../components/ExerciseCard';
import { generateCustomTest, moduleLabels } from '../data/exercises';
import { TestTube, CheckSquare, Square, Play, RotateCcw, Trophy } from 'lucide-react';

const TestGeneratorPage = () => {
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [questionsPerTopic, setQuestionsPerTopic] = useState(2);
  const [generatedTest, setGeneratedTest] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [testStarted, setTestStarted] = useState(false);

  const availableTopics = Object.keys(moduleLabels);
  const maxTopics = 5;

  const handleTopicToggle = (topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter(t => t !== topic));
    } else if (selectedTopics.length < maxTopics) {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const generateTest = () => {
    if (selectedTopics.length === 0) return;
    
    const test = generateCustomTest(selectedTopics, questionsPerTopic);
    setGeneratedTest(test);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setShowResults(false);
    setTestStarted(true);
  };

  const handleAnswerSubmit = (isCorrect) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = isCorrect;
    setUserAnswers(newAnswers);

    // Move to next question after a delay
    setTimeout(() => {
      if (currentQuestionIndex < generatedTest.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setShowResults(true);
      }
    }, 2000);
  };

  const resetTest = () => {
    setGeneratedTest([]);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setShowResults(false);
    setTestStarted(false);
  };

  const getScorePercentage = () => {
    const correctAnswers = userAnswers.filter(answer => answer).length;
    return Math.round((correctAnswers / generatedTest.length) * 100);
  };

  const getScoreMessage = (percentage) => {
    if (percentage >= 90) return 'Excelente! Você domina estes tópicos!';
    if (percentage >= 80) return 'Muito bom! Continue assim!';
    if (percentage >= 70) return 'Bom trabalho! Pratique um pouco mais.';
    if (percentage >= 60) return 'Razoável. Continue estudando.';
    return 'Continue estudando. A prática leva à perfeição!';
  };

  const getScoreColor = (percentage) => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-amber-600';
    return 'text-red-600';
  };

  // Results view
  if (showResults) {
    const percentage = getScorePercentage();
    const correctAnswers = userAnswers.filter(answer => answer).length;

    return (
      <Layout>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <Trophy className="h-16 w-16 text-amber-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Teste Concluído!</h1>
            
            <div className="mb-6">
              <div className={`text-6xl font-bold mb-2 ${getScoreColor(percentage)}`}>
                {percentage}%
              </div>
              <p className="text-gray-600 text-lg">
                {correctAnswers} de {generatedTest.length} questões corretas
              </p>
            </div>

            <p className="text-xl text-gray-700 mb-8">
              {getScoreMessage(percentage)}
            </p>

            {/* Topic breakdown */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Tópicos Avaliados:</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {selectedTopics.map(topic => (
                  <span key={topic} className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                    {moduleLabels[topic]}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={resetTest}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
              >
                <RotateCcw className="h-5 w-5" />
                <span>Gerar Novo Teste</span>
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // Test in progress
  if (testStarted && generatedTest.length > 0) {
    const currentQuestion = generatedTest[currentQuestionIndex];

    return (
      <Layout>
        <div className="max-w-4xl mx-auto">
          {/* Progress */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <TestTube className="h-6 w-6 text-amber-600" />
                <span className="text-lg font-semibold text-gray-800">
                  Questão {currentQuestionIndex + 1} de {generatedTest.length}
                </span>
              </div>
              <button
                onClick={resetTest}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <RotateCcw className="h-5 w-5" />
              </button>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-amber-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / generatedTest.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <ExerciseCard
            exercise={currentQuestion}
            onComplete={handleAnswerSubmit}
          />
        </div>
      </Layout>
    );
  }

  // Test setup
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Gerador de Testes Personalizados</h1>
          <p className="text-xl text-gray-600">
            Crie testes personalizados escolhendo até cinco tópicos
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Topic Selection */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Selecione os Tópicos ({selectedTopics.length}/{maxTopics})
            </h2>
            <p className="text-gray-600 mb-6">
              Escolha até {maxTopics} tópicos para incluir no seu teste personalizado.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {availableTopics.map(topic => (
                <button
                  key={topic}
                  onClick={() => handleTopicToggle(topic)}
                  disabled={!selectedTopics.includes(topic) && selectedTopics.length >= maxTopics}
                  className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all ${
                    selectedTopics.includes(topic)
                      ? 'border-amber-500 bg-amber-50 text-amber-800'
                      : selectedTopics.length >= maxTopics
                      ? 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                      : 'border-gray-200 hover:border-amber-300 hover:bg-amber-50 cursor-pointer'
                  }`}
                >
                  {selectedTopics.includes(topic) ? (
                    <CheckSquare className="h-5 w-5 text-amber-600" />
                  ) : (
                    <Square className="h-5 w-5 text-gray-400" />
                  )}
                  <span className="font-medium">{moduleLabels[topic]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Questions per Topic */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Questões por Tópico
            </h3>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="1"
                max="5"
                value={questionsPerTopic}
                onChange={(e) => setQuestionsPerTopic(parseInt(e.target.value))}
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-lg font-semibold text-amber-600 min-w-[3rem]">
                {questionsPerTopic}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Total de questões: {selectedTopics.length * questionsPerTopic}
            </p>
          </div>

          {/* Generate Button */}
          <div className="text-center">
            <button
              onClick={generateTest}
              disabled={selectedTopics.length === 0}
              className={`flex items-center justify-center space-x-2 px-8 py-3 rounded-lg font-semibold transition-colors ${
                selectedTopics.length === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-amber-600 text-white hover:bg-amber-700'
              }`}
            >
              <Play className="h-5 w-5" />
              <span>Gerar e Iniciar Teste</span>
            </button>
            
            {selectedTopics.length === 0 && (
              <p className="text-sm text-red-600 mt-2">
                Selecione pelo menos um tópico para gerar o teste.
              </p>
            )}
          </div>

          {/* Instructions */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">Como funciona:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Selecione até 5 tópicos que deseja estudar</li>
              <li>• Escolha quantas questões por tópico (1-5)</li>
              <li>• O teste será gerado automaticamente com questões de diferentes níveis</li>
              <li>• Receba feedback imediato e veja seu desempenho final</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TestGeneratorPage;

