// Vocabulário Teológico Estruturado

export const biblicalVocabulary = [
  // Palavras com mais de 50 ocorrências na Standard Version
  {
    english: 'God',
    portuguese: 'Deus',
    definition: 'O Ser Supremo, Criador e Sustentador de todas as coisas',
    category: 'fundamental',
    frequency: 'very_high',
    examples: [
      'God is love (1 John 4:8)',
      'In the beginning God created the heavens and the earth (Genesis 1:1)'
    ]
  },
  {
    english: 'Lord',
    portuguese: 'Senhor',
    definition: 'Título de respeito e autoridade, frequentemente usado para Deus',
    category: 'fundamental',
    frequency: 'very_high',
    examples: [
      'The Lord is my shepherd (Psalm 23:1)',
      'Jesus is Lord (Romans 10:9)'
    ]
  },
  {
    english: 'Christ',
    portuguese: 'Cristo',
    definition: 'O Ungido, título messiânico de Jesus',
    category: 'christology',
    frequency: 'very_high',
    examples: [
      'Jesus Christ is the same yesterday and today and forever (Hebrews 13:8)',
      'Christ died for our sins (1 Corinthians 15:3)'
    ]
  },
  {
    english: 'Spirit',
    portuguese: 'Espírito',
    definition: 'Terceira pessoa da Trindade, Espírito Santo',
    category: 'pneumatology',
    frequency: 'very_high',
    examples: [
      'The Spirit of truth will guide you (John 16:13)',
      'Be filled with the Spirit (Ephesians 5:18)'
    ]
  },
  {
    english: 'Faith',
    portuguese: 'Fé',
    definition: 'Confiança e crença em Deus e Suas promessas',
    category: 'soteriology',
    frequency: 'high',
    examples: [
      'Faith comes by hearing (Romans 10:17)',
      'Without faith it is impossible to please God (Hebrews 11:6)'
    ]
  },
  {
    english: 'Grace',
    portuguese: 'Graça',
    definition: 'Favor imerecido de Deus',
    category: 'soteriology',
    frequency: 'high',
    examples: [
      'By grace you have been saved (Ephesians 2:8)',
      'Grace and peace from God our Father (Romans 1:7)'
    ]
  },
  {
    english: 'Salvation',
    portuguese: 'Salvação',
    definition: 'Libertação do pecado e suas consequências através de Cristo',
    category: 'soteriology',
    frequency: 'high',
    examples: [
      'Salvation is found in no one else (Acts 4:12)',
      'Work out your salvation with fear and trembling (Philippians 2:12)'
    ]
  },
  {
    english: 'Righteousness',
    portuguese: 'Justiça/Retidão',
    definition: 'Estado de estar correto diante de Deus',
    category: 'soteriology',
    frequency: 'high',
    examples: [
      'The righteousness of God is revealed (Romans 1:17)',
      'Seek first the kingdom of God and his righteousness (Matthew 6:33)'
    ]
  },
  {
    english: 'Kingdom',
    portuguese: 'Reino',
    definition: 'Domínio e governo de Deus',
    category: 'eschatology',
    frequency: 'high',
    examples: [
      'The kingdom of heaven is at hand (Matthew 4:17)',
      'Your kingdom come (Matthew 6:10)'
    ]
  },
  {
    english: 'Covenant',
    portuguese: 'Aliança',
    definition: 'Acordo solene entre Deus e Seu povo',
    category: 'biblical_theology',
    frequency: 'medium',
    examples: [
      'This is the new covenant in my blood (Luke 22:20)',
      'God remembered his covenant (Exodus 2:24)'
    ]
  }
];

export const reformedVocabulary = [
  // Vocabulário específico da tradição reformada
  {
    english: 'Predestination',
    portuguese: 'Predestinação',
    definition: 'Doutrina de que Deus escolheu eternamente quem seria salvo',
    author: 'Calvin',
    category: 'systematic_theology',
    examples: [
      'Those whom he predestined he also called (Romans 8:30)'
    ]
  },
  {
    english: 'Election',
    portuguese: 'Eleição',
    definition: 'Escolha divina dos salvos antes da fundação do mundo',
    author: 'Calvin',
    category: 'systematic_theology',
    examples: [
      'He chose us in him before the foundation of the world (Ephesians 1:4)'
    ]
  },
  {
    english: 'Sovereignty',
    portuguese: 'Soberania',
    definition: 'Supremo domínio e autoridade de Deus sobre todas as coisas',
    author: 'Various Reformed',
    category: 'theology_proper',
    examples: [
      'The Lord has established his throne in the heavens, and his kingdom rules over all (Psalm 103:19)'
    ]
  },
  {
    english: 'Providence',
    portuguese: 'Providência',
    definition: 'Governo e cuidado contínuo de Deus sobre a criação',
    author: 'Calvin',
    category: 'theology_proper',
    examples: [
      'In him we live and move and have our being (Acts 17:28)'
    ]
  },
  {
    english: 'Perseverance',
    portuguese: 'Perseverança',
    definition: 'Doutrina de que os eleitos perseverarão na fé até o fim',
    author: 'Reformed Tradition',
    category: 'soteriology',
    examples: [
      'He who began a good work in you will bring it to completion (Philippians 1:6)'
    ]
  }
];

export const theologicalTerms = [
  // Termos técnicos de teologia sistemática
  {
    english: 'Justification',
    portuguese: 'Justificação',
    definition: 'Ato judicial de Deus declarando o pecador justo',
    category: 'soteriology',
    level: 'intermediate'
  },
  {
    english: 'Sanctification',
    portuguese: 'Santificação',
    definition: 'Processo de tornar-se santo, separado para Deus',
    category: 'soteriology',
    level: 'intermediate'
  },
  {
    english: 'Regeneration',
    portuguese: 'Regeneração',
    definition: 'Novo nascimento espiritual operado pelo Espírito Santo',
    category: 'soteriology',
    level: 'intermediate'
  },
  {
    english: 'Incarnation',
    portuguese: 'Encarnação',
    definition: 'Doutrina de que o Filho de Deus se tornou homem',
    category: 'christology',
    level: 'intermediate'
  },
  {
    english: 'Atonement',
    portuguese: 'Expiação',
    definition: 'Obra de Cristo reconciliando Deus e a humanidade',
    category: 'christology',
    level: 'intermediate'
  },
  {
    english: 'Eschatology',
    portuguese: 'Escatologia',
    definition: 'Estudo das últimas coisas',
    category: 'systematic_theology',
    level: 'advanced'
  },
  {
    english: 'Pneumatology',
    portuguese: 'Pneumatologia',
    definition: 'Estudo da doutrina do Espírito Santo',
    category: 'systematic_theology',
    level: 'advanced'
  }
];

export const vocabularyCategories = {
  fundamental: 'Fundamental',
  christology: 'Cristologia',
  pneumatology: 'Pneumatologia',
  soteriology: 'Soteriologia',
  eschatology: 'Escatologia',
  biblical_theology: 'Teologia Bíblica',
  systematic_theology: 'Teologia Sistemática',
  theology_proper: 'Teologia Própria'
};

export const frequencyLevels = {
  very_high: 'Muito Alta (>200 ocorrências)',
  high: 'Alta (100-200 ocorrências)',
  medium: 'Média (50-100 ocorrências)',
  low: 'Baixa (<50 ocorrências)'
};

// Função para buscar vocabulário por categoria
export const getVocabularyByCategory = (category) => {
  return [
    ...biblicalVocabulary.filter(word => word.category === category),
    ...reformedVocabulary.filter(word => word.category === category),
    ...theologicalTerms.filter(word => word.category === category)
  ];
};

// Função para buscar vocabulário por nível
export const getVocabularyByLevel = (level) => {
  return theologicalTerms.filter(word => word.level === level);
};

