import React, { useState } from 'react';
import Layout from '../components/Layout';
import ExerciseCard from '../components/ExerciseCard';
import { exercises, moduleLabels, difficultyLabels, getExercises } from '../data/exercises';
import { Gamepad2, Target, Trophy, RotateCcw } from 'lucide-react';

const ExercisesPage = () => {
  const [selectedModule, setSelectedModule] = useState('fundamentos');
  const [selectedDifficulty, setSelectedDifficulty] = useState('easy');
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [completedExercises, setCompletedExercises] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentExercises = getExercises(selectedModule, selectedDifficulty);
  const currentExercise = currentExercises[currentExerciseIndex];

  const handleExerciseComplete = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCompletedExercises(completedExercises + 1);

    // Move to next exercise after a delay
    setTimeout(() => {
      if (currentExerciseIndex < currentExercises.length - 1) {
        setCurrentExerciseIndex(currentExerciseIndex + 1);
      } else {
        setShowResults(true);
      }
    }, 2000);
  };

  const resetExercises = () => {
    setCurrentExerciseIndex(0);
    setScore(0);
    setCompletedExercises(0);
    setShowResults(false);
  };

  const changeModule = (module) => {
    setSelectedModule(module);
    resetExercises();
  };

  const changeDifficulty = (difficulty) => {
    setSelectedDifficulty(difficulty);
    resetExercises();
  };

  const getScoreColor = (percentage) => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-amber-600';
    return 'text-red-600';
  };

  const getScoreMessage = (percentage) => {
    if (percentage >= 90) return 'Excelente! Você domina este tópico!';
    if (percentage >= 80) return 'Muito bom! Continue assim!';
    if (percentage >= 60) return 'Bom trabalho! Pratique um pouco mais.';
    return 'Continue estudando. A prática leva à perfeição!';
  };

  if (showResults) {
    const percentage = Math.round((score / currentExercises.length) * 100);
    
    return (
      <Layout>
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <Trophy className="h-16 w-16 text-amber-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Exercícios Concluídos!</h1>
            
            <div className="mb-6">
              <div className={`text-6xl font-bold mb-2 ${getScoreColor(percentage)}`}>
                {percentage}%
              </div>
              <p className="text-gray-600 text-lg">
                {score} de {currentExercises.length} questões corretas
              </p>
            </div>

            <p className="text-xl text-gray-700 mb-8">
              {getScoreMessage(percentage)}
            </p>

            <div className="space-y-4">
              <button
                onClick={resetExercises}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
              >
                <RotateCcw className="h-5 w-5" />
                <span>Tentar Novamente</span>
              </button>
              
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => changeDifficulty(selectedDifficulty === 'easy' ? 'medium' : selectedDifficulty === 'medium' ? 'hard' : 'easy')}
                  className="px-4 py-2 border border-amber-600 text-amber-600 rounded-lg hover:bg-amber-50 transition-colors"
                >
                  Mudar Dificuldade
                </button>
                
                <button
                  onClick={() => {
                    const modules = Object.keys(exercises);
                    const currentIndex = modules.indexOf(selectedModule);
                    const nextModule = modules[(currentIndex + 1) % modules.length];
                    changeModule(nextModule);
                  }}
                  className="px-4 py-2 border border-amber-600 text-amber-600 rounded-lg hover:bg-amber-50 transition-colors"
                >
                  Próximo Módulo
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Exercícios Práticos</h1>
          <p className="text-xl text-gray-600">
            Pratique com exercícios interativos em três níveis de dificuldade
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Module Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Módulo
              </label>
              <select
                value={selectedModule}
                onChange={(e) => changeModule(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              >
                {Object.keys(exercises).map(module => (
                  <option key={module} value={module}>
                    {moduleLabels[module]}
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulty Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dificuldade
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => changeDifficulty(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              >
                {Object.keys(difficultyLabels).map(difficulty => (
                  <option key={difficulty} value={difficulty}>
                    {difficultyLabels[difficulty]}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <Gamepad2 className="h-6 w-6 text-amber-600" />
              <span className="text-lg font-semibold text-gray-800">
                Questão {currentExerciseIndex + 1} de {currentExercises.length}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-green-600" />
                <span className="text-green-600 font-medium">{score} acertos</span>
              </div>
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-amber-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${((currentExerciseIndex + 1) / currentExercises.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Exercise */}
        {currentExercise && (
          <ExerciseCard
            exercise={currentExercise}
            onComplete={handleExerciseComplete}
          />
        )}

        {/* No exercises message */}
        {!currentExercise && (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <Gamepad2 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Nenhum exercício disponível
            </h3>
            <p className="text-gray-500">
              Selecione outro módulo ou nível de dificuldade.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ExercisesPage;

