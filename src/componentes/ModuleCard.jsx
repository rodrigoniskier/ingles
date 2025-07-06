import React from 'react';
import { ArrowRight } from 'lucide-react';

const ModuleCard = ({ 
  title, 
  description, 
  icon: Icon, 
  backgroundImage, 
  href, 
  difficulty = 'Iniciante',
  duration = '2-3 horas'
}) => {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
      </div>
      
      {/* Content */}
      <div className="relative p-6 text-white min-h-[280px] flex flex-col justify-between">
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <Icon className="h-8 w-8 text-amber-300" />
            <div className="flex space-x-2">
              <span className="px-2 py-1 bg-amber-500 bg-opacity-80 rounded-full text-xs font-medium">
                {difficulty}
              </span>
              <span className="px-2 py-1 bg-blue-500 bg-opacity-80 rounded-full text-xs font-medium">
                {duration}
              </span>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-3 group-hover:text-amber-200 transition-colors duration-200">
            {title}
          </h3>
          
          <p className="text-gray-200 text-sm leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="flex justify-between items-center mt-6">
          <a
            href={href}
            className="inline-flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            <span>Começar</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;

