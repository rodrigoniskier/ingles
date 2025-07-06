import React, { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';

const ExerciseCard = ({ exercise, onComplete }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswerSelect = (answerIndex) => {
    if (showResult) return; // Não permite mudança após resposta
    
    setSelectedAnswer(answerIndex);
    setIsCorrect(answerIndex === exercise.correct);
    setShowResult(true);
    
    // Chama callback se fornecido
    if (onComplete) {
      onComplete(answerIndex === exercise.correct);
    }
  };

  const resetExercise = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    setIsCorrect(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {exercise.question}
        </h3>
      </div>

      <div className="space-y-3 mb-4">
        {exercise.options.map((option, index) => {
          let buttonClass = "w-full text-left p-3 rounded-lg border transition-all duration-200 ";
          
          if (!showResult) {
            buttonClass += "border-gray-300 hover:border-amber-400 hover:bg-amber-50 cursor-pointer";
          } else {
            if (index === exercise.correct) {
              buttonClass += "border-green-500 bg-green-50 text-green-800";
            } else if (index === selectedAnswer && index !== exercise.correct) {
              buttonClass += "border-red-500 bg-red-50 text-red-800";
            } else {
              buttonClass += "border-gray-300 bg-gray-50 text-gray-600";
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={buttonClass}
              disabled={showResult}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {showResult && index === exercise.correct && (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                )}
                {showResult && index === selectedAnswer && index !== exercise.correct && (
                  <XCircle className="h-5 w-5 text-red-600" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {showResult && (
        <div className={`p-4 rounded-lg mb-4 ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          <div className="flex items-start space-x-2">
            {isCorrect ? (
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            ) : (
              <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
            )}
            <div>
              <p className={`font-medium ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                {isCorrect ? 'Correto!' : 'Incorreto!'}
              </p>
              {exercise.explanation && (
                <p className={`text-sm mt-1 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                  {exercise.explanation}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {showResult && (
        <button
          onClick={resetExercise}
          className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-medium"
        >
          <RotateCcw className="h-4 w-4" />
          <span>Tentar Novamente</span>
        </button>
      )}
    </div>
  );
};

export default ExerciseCard;

