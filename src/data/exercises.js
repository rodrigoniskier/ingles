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
      },
      {
        id: 'fund_easy_4',
        type: 'multiple_choice',
        question: 'Na lição de Vocabulário Básico, o termo grego ἀγάπη (agápē) refere-se a:',
        options: ['Amor', 'Pecado', 'Igreja', 'Lei'],
        correct: 0,
        explanation: 'Agápē é a transliteração de ἀγάπη, palavra grega para o amor divino.'
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
      },
      {
        id: 'fund_med_3',
        type: 'multiple_choice',
        question: 'O termo grego θεός, transliterado "theós", significa:',
        options: ['Oração', 'Deus', 'Graça', 'Profeta'],
        correct: 1,
        explanation: 'Theós é a palavra grega para Deus, conforme explicado na lição de Fonologia.'
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
      },
      {
        id: 'fund_hard_2',
        type: 'multiple_choice',
        question: 'Na terminologia teológica, "λόγος" (logos) transliterado é usado em João 1 como título para:',
        options: ['Pedro', 'O Verbo/Palavra', 'A Lei', 'O Espírito'],
        correct: 1,
        explanation: 'Logos significa "Palavra" ou "Verbo" e é aplicado a Cristo em João 1.'
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
      },
      {
        id: 'gram_easy_3',
        type: 'multiple_choice',
        question: 'O verbo grego σώζω (sōzō - "salvar") no Past Simple do inglês é:',
        options: ['saves', 'saved', 'saving', 'to save'],
        correct: 1,
        explanation: 'A forma passada "saved" corresponde ao pretérito do verbo grego sōzō.'
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
      },
      {
        id: 'gram_med_3',
        type: 'multiple_choice',
        question: 'A expressão δικαιόω (dikaioō) transliterada aparece muitas vezes como "to justify". Qual estrutura em inglês apresenta a voz passiva no Present Perfect?',
        options: ['has justified', 'has been justified', 'is justifying', 'was justified'],
        correct: 1,
        explanation: '"Has been justified" expressa a voz passiva no Present Perfect.'
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
      },
      {
        id: 'gram_hard_2',
        type: 'multiple_choice',
        question: 'A forma grega ἐκλήθη (eklēthē) significa "foi chamado". Como essa voz passiva é melhor expressa em inglês?',
        options: ['called', 'was called', 'has call', 'calling'],
        correct: 1,
        explanation: '"Was called" traduz adequadamente a voz passiva do grego eklēthē.'
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
      },
      {
        id: 'vocab_easy_3',
        type: 'multiple_choice',
        question: 'O termo λόγος (logos) transliterado significa:',
        options: ['Amor', 'Palavra', 'Paz', 'Servo'],
        correct: 1,
        explanation: 'Logos significa "palavra" ou "verbo" em grego.'
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
      },
      {
        id: 'vocab_med_3',
        type: 'multiple_choice',
        question: 'Koinōnía (κοινωνία) transliterado refere-se principalmente a:',
        options: ['Comunhão', 'Rebelião', 'Sacrifício', 'Templo'],
        correct: 0,
        explanation: 'Koinōnía é a palavra grega para "comunhão" ou "participação".'
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
      },
      {
        id: 'vocab_hard_2',
        type: 'multiple_choice',
        question: 'O vocábulo grego χάρις (charis), transliterado, é fundamental para a doutrina da:',
        options: ['Eleição', 'Graça', 'Glória', 'Criação'],
        correct: 1,
        explanation: 'Charis significa graça, conceito central na soteriologia reformada.'
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
      },
      {
        id: 'read_easy_2',
        type: 'multiple_choice',
        question: 'O conectivo "therefore" (διό, dío) em um texto indica:',
        options: ['Contraste', 'Conclusão ou resultado', 'Exemplo', 'Definição'],
        correct: 1,
        explanation: 'O grego διό (dío), traduzido "therefore", introduz uma conclusão baseada no que foi dito.'
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
      },
      {
        id: 'read_med_2',
        type: 'multiple_choice',
        question: 'Ao ler "ekklesia" (ἐκκλησία, ekklēsia), qual tradução deve vir à mente?',
        options: ['Trono', 'Igreja', 'Profecia', 'Sacrifício'],
        correct: 1,
        explanation: 'Ekklesia significa "igreja" ou "assembleia".'
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
      },
      {
        id: 'read_hard_2',
        type: 'multiple_choice',
        question: 'Em "ἀγάπη (agápē) never fails", o termo "agápē" reforça que tipo de amor?',
        options: ['Amor condicional', 'Amor sacrificial', 'Amor romântico', 'Amor próprio'],
        correct: 1,
        explanation: 'Agápē descreve o amor sacrificial e incondicional frequentemente mencionado no NT.'
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

