// Dados estruturados do currículo de Inglês Teológico

export const modules = [
  {
    id: 'fundamentos',
    title: 'Fundamentos do Inglês Teológico',
    description: 'Aprenda o alfabeto, fonologia e vocabulário básico para começar sua jornada no inglês teológico.',
    difficulty: 'Iniciante',
    duration: '3-4 horas',
    lessons: [
      {
        id: 'alfabeto-fonologia',
        title: 'Alfabeto e Fonologia',
        content: `
          O alfabeto inglês possui 26 letras, mas a pronúncia pode variar significativamente. 
          Para estudantes de teologia, é essencial dominar a pronúncia correta de termos teológicos.
          
          **Vogais em Inglês:**
          - A: /eɪ/ (como em "grace" - graça)
          - E: /iː/ (como em "eternal" - eterno)
          - I: /aɪ/ (como em "divine" - divino)
          - O: /oʊ/ (como em "holy" - santo)
          - U: /juː/ (como em "truth" - verdade)
          
          **Consoantes Importantes:**
          - TH: /θ/ (como em "theology" - teologia)
          - CH: /tʃ/ (como em "church" - igreja)
          - SH: /ʃ/ (como em "worship" - adoração)

          A prática diária da fonologia auxilia na compreensão auditiva de sermões e palestras em inglês.
          Pronunciar corretamente nomes e termos bíblicos melhora a leitura em voz alta e a memorização das Escrituras.

          **Exemplo Prático:**
          Leia em voz alta "Theology shapes our faith" (A teologia molda nossa fé) prestando atenção em cada som.

          **Transliterações Simples:**
          - "theology" -> "thi-ólô-dji"
          - "church" -> "tchârtch"
          - "worship" -> "uôr-ship"
        `,
        exercises: [
          {
            question: 'Como se pronuncia a palavra "theology"?',
            options: ['/θiˈɒlədʒi/', '/teˈɒlədʒi/', '/siˈɒlədʒi/', '/diˈɒlədʒi/'],
            correct: 0
          },
          {
            question: 'Qual transliteração melhor representa a palavra "church"?',
            options: ['tchârtch', 'chârch', 'kurts', 'xârch'],
            correct: 0
          },
          {
            question: 'Qual vogal possui o som /aɪ/?',
            options: ['A', 'E', 'I', 'O'],
            correct: 2
          }
        ]
      },
      {
        id: 'vocabulario-basico',
        title: 'Vocabulário Básico Teológico',
        content: `
          **Termos Fundamentais:**
          
          - **God** (Deus) - O Ser Supremo, Criador e Sustentador de todas as coisas
          - **Bible** (Bíblia) - As Sagradas Escrituras, Palavra de Deus
          - **Faith** (Fé) - Confiança e crença em Deus
          - **Grace** (Graça) - Favor imerecido de Deus
          - **Salvation** (Salvação) - Libertação do pecado através de Cristo
          - **Church** (Igreja) - Comunidade dos fiéis
          - **Prayer** (Oração) - Comunicação com Deus
          - **Scripture** (Escritura) - Texto sagrado
          - **Gospel** (Evangelho) - Boas novas de salvação
          - **Trinity** (Trindade) - Doutrina das três pessoas divinas

          Esses termos aparecem constantemente em hinos e leituras devocionais. Forme frases simples para fixá-los:
          - "God is love" (Deus é amor) - pronúncia: "gód iz lâv"
          - "The church prays together" (A igreja ora junta) - pronúncia: "dâ tchârtch préiz togéder"

          **Transliterações:**
          - "God" -> "gód"
          - "Bible" -> "bái-bol"
          - "Faith" -> "feith"
        `,
        exercises: [
          {
            question: 'O que significa "grace" em português?',
            options: ['Graça', 'Glória', 'Gratidão', 'Grandeza'],
            correct: 0
          },
          {
            question: 'Qual transliteração corresponde a "Bible"?',
            options: ['bái-bol', 'béibol', 'bíbli', 'bai-bel'],
            correct: 0
          },
          {
            question: 'Complete: "The _____ is the Word of God"',
            options: ['Church', 'Bible', 'Grace', 'Prayer'],
            correct: 1
          }
        ]
      }
    ]
  },
  {
    id: 'gramatica',
    title: 'Gramática Essencial para Leitura',
    description: 'Domine os tempos verbais, voz passiva e estruturas de frases complexas.',
    difficulty: 'Básico',
    duration: '4-5 horas',
    lessons: [
      {
        id: 'tempos-verbais',
        title: 'Tempos Verbais em Textos Teológicos',
        content: `
          **Present Simple:**
          Usado para verdades universais e doutrinas.
          - "God loves humanity" (Deus ama a humanidade)
          - "The Bible teaches us about salvation" (A Bíblia nos ensina sobre salvação)
          
          **Past Simple:**
          Usado para eventos históricos bíblicos.
          - "Jesus died on the cross" (Jesus morreu na cruz)
          - "Paul wrote many epistles" (Paulo escreveu muitas epístolas)
          
          **Present Perfect:**
          Usado para ações com relevância presente.
          - "God has revealed His will" (Deus revelou Sua vontade)
          - "Christ has redeemed us" (Cristo nos redimiu)

          Estes tempos são essenciais para interpretar textos doutrinários. Observe como cada tempo verbal altera a ênfase teológica.

          **Exemplos adicionais:**
          - "We study theology because it helps us grow" (Estudamos teologia porque ela nos ajuda a crescer) - Present Simple
          - "The prophets spoke about the coming Messiah" (Os profetas falaram sobre o Messias que viria) - Past Simple
          - "Believers have received the Holy Spirit" (Os crentes receberam o Espírito Santo) - Present Perfect

          **Transliterações chave:**
          - "present" -> "pré-zent"
          - "past" -> "pást"
          - "perfect" -> "pér-fékt"
        `,
        exercises: [
          {
            question: 'Qual tempo verbal é usado em "God loves humanity"?',
            options: ['Present Simple', 'Past Simple', 'Present Perfect', 'Future Simple'],
            correct: 0
          },
          {
            question: 'Qual frase está no Past Simple?',
            options: ['Jesus dies for us', 'Jesus died for us', 'Jesus has died for us', 'Jesus will die for us'],
            correct: 1
          },
          {
            question: '"Christ has redeemed us" está em qual tempo verbal?',
            options: ['Present Simple', 'Past Simple', 'Present Perfect', 'Future Perfect'],
            correct: 2
          }
        ]
      }
    ]
  },
  {
    id: 'vocabulario',
    title: 'Vocabulário Teológico Aprofundado',
    description: 'Explore termos específicos da teologia sistemática, histórica e bíblica.',
    difficulty: 'Intermediário',
    duration: '5-6 horas',
    lessons: [
      {
        id: 'teologia-sistematica',
        title: 'Termos de Teologia Sistemática',
        content: `
          **Doutrina de Deus:**
          - **Omnipotence** (Onipotência) - Poder absoluto de Deus
          - **Omniscience** (Onisciência) - Conhecimento absoluto de Deus
          - **Omnipresence** (Onipresença) - Presença universal de Deus
          - **Immutability** (Imutabilidade) - Deus não muda
          - **Sovereignty** (Soberania) - Supremo domínio de Deus
          
          **Soteriologia (Doutrina da Salvação):**
          - **Justification** (Justificação) - Declaração de justiça
          - **Sanctification** (Santificação) - Processo de tornar-se santo
          - **Regeneration** (Regeneração) - Novo nascimento espiritual
          - **Adoption** (Adoção) - Tornar-se filho de Deus
          - **Glorification** (Glorificação) - Estado final de perfeição

          Esses termos formam o núcleo do vocabulário acadêmico em teologia. Leia artigos curtos e sublinhe cada palavra ao encontrá-la.

          **Exemplo de Uso:**
          "God's omnipotence comforts believers" (A onipotência de Deus conforta os crentes).

          **Transliterações:**
          - "omnipotence" -> "óm-ni-pô-ten-ce"
          - "sovereignty" -> "só-vre-rãn-ti"
        `,
        exercises: [
          {
            question: 'O que significa "justification"?',
            options: ['Santificação', 'Justificação', 'Glorificação', 'Regeneração'],
            correct: 1
          },
          {
            question: 'Qual termo descreve a presença universal de Deus?',
            options: ['Omnipresence', 'Immutability', 'Adoption', 'Justification'],
            correct: 0
          },
          {
            question: 'Escolha a transliteração correta de "sovereignty"',
            options: ['só-vre-rãn-ti', 'so-vérên-ti', 'sóv-rein-ti', 'sovrên-ti'],
            correct: 0
          }
        ]
      }
    ]
  },
  {
    id: 'leitura',
    title: 'Leitura e Compreensão de Textos',
    description: 'Desenvolva estratégias de leitura para compreender textos teológicos complexos.',
    difficulty: 'Intermediário',
    duration: '4-5 horas',
    lessons: [
      {
        id: 'estrategias-leitura',
        title: 'Estratégias de Leitura Teológica',
        content: `
          **Skimming (Leitura Superficial):**
          Técnica para obter uma visão geral do texto rapidamente.
          - Leia títulos e subtítulos
          - Observe palavras-chave em destaque
          - Leia o primeiro e último parágrafo
          
          **Scanning (Varredura):**
          Técnica para encontrar informações específicas.
          - Procure por nomes próprios (Calvin, Luther, Augustine)
          - Identifique datas e eventos históricos
          - Localize citações bíblicas
          
          **Inferência Contextual:**
          Deduzir o significado de palavras desconhecidas pelo contexto.
          - Observe conectivos (however, therefore, moreover)
          - Identifique relações de causa e efeito
          - Use conhecimento teológico prévio

          Praticar essas técnicas tornará sua leitura mais eficiente. Experimente combinar skimming e scanning em capítulos extensos.

          **Exemplo Prático:**
          Leia um comentário bíblico e destaque as palavras-chave enquanto faz scanning.

          **Transliterações úteis:**
          - "skimming" -> "ís-ki-ming"
          - "scanning" -> "ís-ké-nin"
          - "inference" -> "ín-fe-rens"
        `,
        exercises: [
          {
            question: 'Qual estratégia é melhor para encontrar uma citação específica?',
            options: ['Skimming', 'Scanning', 'Inferência', 'Leitura detalhada'],
            correct: 1
          },
          {
            question: '"Skimming" pode ser transliterado como:',
            options: ['ís-ki-ming', 'és-ca-nin', 'ín-fe-rens', 'skiming'],
            correct: 0
          },
          {
            question: 'Quando precisamos localizar rapidamente uma data histórica, usamos:',
            options: ['Inferência', 'Scanning', 'Skimming', 'Resumo'],
            correct: 1
          }
        ]
      }
    ]
  }
];

export const difficultyLevels = {
  easy: 'Fácil',
  medium: 'Médio', 
  hard: 'Difícil'
};

export const moduleProgress = {
  // Estrutura para acompanhar progresso do usuário
  // Pode ser expandida para incluir localStorage
};

