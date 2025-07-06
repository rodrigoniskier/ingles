// Exercícios Interativos por Módulo e Nível de Dificuldade

export const exercises = {
  fundamentos: {
    easy: [
      {
        id: 'fund_easy_1',
        type: 'multiple_choice',
        question: 'O que significa "God" em português?',
        options: ['Deus', 'Senhor', 'Cristo', 'Espírito'],
        correct: 0,
        explanation: '"God" é a palavra em inglês para "Deus", o Ser Supremo.'
      },
      {
        id: 'fund_easy_2',
        type: 'multiple_choice',
        question: 'Como se escreve "Bíblia" em inglês?',
        options: ['Book', 'Bible', 'Scripture', 'Word'],
        correct: 1,
        explanation: '"Bible" é a tradução direta de "Bíblia" em inglês.'
      },
      {
        id: 'fund_easy_3',
        type: 'multiple_choice',
        question: 'Qual é a tradução de "faith"?',
        options: ['Esperança', 'Amor', 'Fé', 'Paz'],
        correct: 2,
        explanation: '"Faith" significa "fé" - confiança e crença em Deus.'
      }
    ],
    medium: [
      {
        id: 'fund_med_1',
        type: 'multiple_choice',
        question: 'Em "God loves humanity", qual é o tempo verbal usado?',
        options: ['Past Simple', 'Present Simple', 'Future Simple', 'Present Perfect'],
        correct: 1,
        explanation: 'Present Simple é usado para verdades universais e permanentes.'
      },
      {
        id: 'fund_med_2',
        type: 'multiple_choice',
        question: 'Qual palavra completa a frase: "The Bible _____ us about salvation"?',
        options: ['teach', 'teaches', 'teaching', 'taught'],
        correct: 1,
        explanation: 'Terceira pessoa do singular no Present Simple adiciona "s" ao verbo.'
      }
    ],
    hard: [
      {
        id: 'fund_hard_1',
        type: 'multiple_choice',
        question: 'Analise: "Through faith we understand that the worlds were framed by the word of God". O que "framed" significa neste contexto?',
        options: ['Emoldurados', 'Criados/Formados', 'Destruídos', 'Pintados'],
        correct: 1,
        explanation: 'No contexto teológico, "framed" significa "criados" ou "formados" por Deus.'
      }
    ]
  },
  gramatica: {
    easy: [
      {
        id: 'gram_easy_1',
        type: 'multiple_choice',
        question: 'Qual é o passado de "teach"?',
        options: ['teached', 'taught', 'teaching', 'teaches'],
        correct: 1,
        explanation: '"Taught" é o passado irregular do verbo "teach".'
      },
      {
        id: 'gram_easy_2',
        type: 'multiple_choice',
        question: 'Complete: "Jesus _____ on the cross for our sins."',
        options: ['die', 'dies', 'died', 'dying'],
        correct: 2,
        explanation: 'Past Simple "died" para indicar um evento histórico específico.'
      }
    ],
    medium: [
      {
        id: 'gram_med_1',
        type: 'multiple_choice',
        question: 'Identifique o tempo verbal: "God has revealed His will to us."',
        options: ['Present Simple', 'Past Simple', 'Present Perfect', 'Past Perfect'],
        correct: 2,
        explanation: 'Present Perfect (has + particípio) indica ação passada com relevância presente.'
      },
      {
        id: 'gram_med_2',
        type: 'multiple_choice',
        question: 'Transforme para voz passiva: "God created the world"',
        options: ['The world created by God', 'The world was created by God', 'The world is created by God', 'The world has created by God'],
        correct: 1,
        explanation: 'Voz passiva no passado: was/were + particípio passado.'
      }
    ],
    hard: [
      {
        id: 'gram_hard_1',
        type: 'multiple_choice',
        question: 'Analise a estrutura: "Having been justified by faith, we have peace with God." Qual é a função de "Having been justified"?',
        options: ['Oração principal', 'Particípio passado absoluto', 'Gerúndio simples', 'Infinitivo'],
        correct: 1,
        explanation: '"Having been justified" é um particípio passado absoluto indicando causa ou tempo anterior.'
      }
    ]
  },
  vocabulario: {
    easy: [
      {
        id: 'vocab_easy_1',
        type: 'multiple_choice',
        question: 'O que significa "grace"?',
        options: ['Glória', 'Graça', 'Gratidão', 'Grandeza'],
        correct: 1,
        explanation: '"Grace" é favor imerecido de Deus, traduzido como "graça".'
      },
      {
        id: 'vocab_easy_2',
        type: 'multiple_choice',
        question: 'Qual é a tradução de "salvation"?',
        options: ['Santificação', 'Salvação', 'Sacrifício', 'Sacramento'],
        correct: 1,
        explanation: '"Salvation" significa "salvação" - libertação do pecado através de Cristo.'
      }
    ],
    medium: [
      {
        id: 'vocab_med_1',
        type: 'multiple_choice',
        question: 'O que significa "justification" na teologia?',
        options: ['Processo de santificação', 'Ato de Deus declarando o pecador justo', 'Obra de Cristo na cruz', 'Dom do Espírito Santo'],
        correct: 1,
        explanation: 'Justificação é o ato judicial de Deus declarando o pecador justo diante dEle.'
      },
      {
        id: 'vocab_med_2',
        type: 'multiple_choice',
        question: 'Na teologia reformada, "predestination" refere-se a:',
        options: ['Livre arbítrio humano', 'Escolha divina eterna dos salvos', 'Processo de santificação', 'Segunda vinda de Cristo'],
        correct: 1,
        explanation: 'Predestinação é a doutrina de que Deus escolheu eternamente quem seria salvo.'
      }
    ],
    hard: [
      {
        id: 'vocab_hard_1',
        type: 'multiple_choice',
        question: 'Segundo Calvino, "providence" (providência) inclui:',
        options: ['Apenas criação inicial', 'Governo e preservação contínua da criação', 'Somente eventos futuros', 'Apenas milagres'],
        correct: 1,
        explanation: 'Providência inclui o governo e cuidado contínuo de Deus sobre toda a criação.'
      }
    ]
  },
  leitura: {
    easy: [
      {
        id: 'read_easy_1',
        type: 'multiple_choice',
        question: 'Qual estratégia é melhor para obter uma visão geral rápida de um texto?',
        options: ['Scanning', 'Skimming', 'Leitura detalhada', 'Tradução palavra por palavra'],
        correct: 1,
        explanation: 'Skimming é a técnica para obter uma visão geral rápida do texto.'
      }
    ],
    medium: [
      {
        id: 'read_med_1',
        type: 'multiple_choice',
        question: 'Para encontrar uma citação bíblica específica em um texto longo, use:',
        options: ['Skimming', 'Scanning', 'Inferência', 'Memorização'],
        correct: 1,
        explanation: 'Scanning é usado para localizar informações específicas rapidamente.'
      }
    ],
    hard: [
      {
        id: 'read_hard_1',
        type: 'multiple_choice',
        question: 'Leia: "Moreover, the doctrine of election, far from promoting antinomianism, actually encourages holy living." O que "Moreover" indica?',
        options: ['Contraste', 'Adição/Continuação', 'Causa', 'Conclusão'],
        correct: 1,
        explanation: '"Moreover" é um conectivo que indica adição ou continuação do argumento.'
      }
    ]
  }
};

export const difficultyLabels = {
  easy: 'Fácil',
  medium: 'Médio',
  hard: 'Difícil'
};

export const moduleLabels = {
  fundamentos: 'Fundamentos',
  gramatica: 'Gramática',
  vocabulario: 'Vocabulário',
  leitura: 'Leitura'
};

// Função para obter exercícios por módulo e dificuldade
export const getExercises = (module, difficulty) => {
  return exercises[module]?.[difficulty] || [];
};

// Função para obter exercício por ID
export const getExerciseById = (id) => {
  for (const module in exercises) {
    for (const difficulty in exercises[module]) {
      const exercise = exercises[module][difficulty].find(ex => ex.id === id);
      if (exercise) return exercise;
    }
  }
  return null;
};

// Função para gerar teste personalizado
export const generateCustomTest = (selectedTopics, questionsPerTopic = 2) => {
  const customTest = [];
  
  selectedTopics.forEach(topic => {
    const moduleExercises = exercises[topic];
    if (moduleExercises) {
      // Pega exercícios de todas as dificuldades
      const allExercises = [
        ...moduleExercises.easy || [],
        ...moduleExercises.medium || [],
        ...moduleExercises.hard || []
      ];
      
      // Seleciona aleatoriamente o número especificado de questões
      const shuffled = allExercises.sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, questionsPerTopic);
      
      customTest.push(...selected);
    }
  });
  
  return customTest.sort(() => 0.5 - Math.random()); // Embaralha o teste final
};

