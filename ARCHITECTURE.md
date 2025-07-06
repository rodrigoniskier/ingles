# Arquitetura do Projeto Inglês Teológico

Este documento descreve a arquitetura técnica, decisões de design e padrões utilizados no desenvolvimento do site educacional Inglês Teológico.

## 🏗️ Visão Geral da Arquitetura

O projeto segue uma arquitetura de **Single Page Application (SPA)** baseada em React, com foco em performance, acessibilidade e experiência do usuário. A aplicação é completamente client-side, sem necessidade de backend para funcionalidades básicas.

### Princípios Arquiteturais

1. **Component-Based Architecture** - Componentes reutilizáveis e modulares
2. **Separation of Concerns** - Separação clara entre dados, lógica e apresentação
3. **Accessibility First** - Acessibilidade como requisito fundamental
4. **Mobile First** - Design responsivo priorizando dispositivos móveis
5. **Performance Oriented** - Otimizações de carregamento e renderização

## 📁 Estrutura de Diretórios

```
ingles-teologico/
├── public/                     # Assets estáticos
│   ├── vite.svg               # Favicon
│   └── manifest.json          # PWA manifest (futuro)
├── src/
│   ├── assets/                # Recursos da aplicação
│   │   ├── ai-generated/      # Imagens geradas por IA
│   │   ├── icons/             # Ícones customizados
│   │   └── images/            # Imagens estáticas
│   ├── components/            # Componentes React reutilizáveis
│   │   ├── ui/                # Componentes de interface básicos
│   │   ├── forms/             # Componentes de formulário
│   │   └── layout/            # Componentes de layout
│   ├── data/                  # Dados estruturados e configurações
│   │   ├── curriculum.js      # Estrutura do currículo
│   │   ├── vocabulary.js      # Base de dados de vocabulário
│   │   ├── exercises.js       # Exercícios e questões
│   │   └── documents.js       # Links para documentos
│   ├── hooks/                 # Custom React hooks
│   │   ├── useLocalStorage.js # Persistência local
│   │   ├── useProgress.js     # Controle de progresso
│   │   └── useAudio.js        # Controle de áudio
│   ├── lib/                   # Bibliotecas e utilitários
│   │   ├── api/               # Integrações de API
│   │   ├── utils/             # Funções utilitárias
│   │   └── constants/         # Constantes da aplicação
│   ├── pages/                 # Páginas da aplicação
│   │   ├── HomePage.jsx       # Página inicial
│   │   ├── ModulesPage.jsx    # Módulos teóricos
│   │   └── ...                # Outras páginas
│   ├── styles/                # Estilos CSS
│   │   ├── globals.css        # Estilos globais
│   │   ├── components.css     # Estilos de componentes
│   │   └── accessibility.css  # Estilos de acessibilidade
│   ├── App.jsx                # Componente raiz
│   ├── main.jsx               # Ponto de entrada
│   └── router.jsx             # Configuração de rotas
├── docs/                      # Documentação adicional
├── tests/                     # Testes automatizados
└── config/                    # Arquivos de configuração
```

## 🧩 Componentes e Padrões

### Hierarquia de Componentes

```
App
├── Router
├── Layout
│   ├── AccessibilityFeatures
│   ├── Navigation
│   ├── Main Content
│   └── Footer
└── Pages
    ├── HomePage
    ├── ModulesPage
    ├── ExercisesPage
    └── ...
```

### Padrões de Componentes

#### 1. Componentes de Apresentação (Presentational)

Responsáveis apenas pela renderização visual:

```jsx
const ModuleCard = ({ title, description, difficulty, duration, onStart }) => {
  return (
    <div className="module-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="metadata">
        <span>{difficulty}</span>
        <span>{duration}</span>
      </div>
      <button onClick={onStart}>Começar</button>
    </div>
  );
};
```

#### 2. Componentes de Container (Container)

Gerenciam estado e lógica de negócio:

```jsx
const ModulesContainer = () => {
  const [modules, setModules] = useState([]);
  const [progress, setProgress] = useProgress();

  const handleModuleStart = (moduleId) => {
    // Lógica de início do módulo
  };

  return (
    <div>
      {modules.map(module => (
        <ModuleCard
          key={module.id}
          {...module}
          onStart={() => handleModuleStart(module.id)}
        />
      ))}
    </div>
  );
};
```

#### 3. Higher-Order Components (HOC)

Para funcionalidades transversais:

```jsx
const withAccessibility = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      // Configurações de acessibilidade
    }, []);

    return <WrappedComponent {...props} />;
  };
};
```

## 🗃️ Gerenciamento de Estado

### Estado Local vs Global

- **Estado Local**: Usado para estado específico de componentes (formulários, modais, etc.)
- **Context API**: Para estado compartilhado (tema, progresso do usuário, configurações)
- **LocalStorage**: Para persistência de dados do usuário

### Estrutura de Contextos

```jsx
// Contexto de Progresso do Usuário
const ProgressContext = createContext();

const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState({
    completedModules: [],
    currentModule: null,
    exerciseScores: {},
    vocabularyMastered: []
  });

  return (
    <ProgressContext.Provider value={{ progress, setProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};
```

## 🎨 Sistema de Design

### Design Tokens

```css
:root {
  /* Cores */
  --color-primary: #d97706;
  --color-secondary: #ea580c;
  --color-accent: #f59e0b;
  
  /* Tipografia */
  --font-family-base: 'Inter', system-ui, sans-serif;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  
  /* Espaçamento */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  
  /* Bordas */
  --border-radius-sm: 0.25rem;
  --border-radius-md: 0.5rem;
  --border-radius-lg: 0.75rem;
  
  /* Sombras */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
```

### Componentes Base

#### Button

```jsx
const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  disabled = false,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-amber-600 text-white hover:bg-amber-700 focus:ring-amber-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    outline: 'border border-amber-600 text-amber-600 hover:bg-amber-50 focus:ring-amber-500'
  };
  
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
```

## 🔄 Roteamento

### Estrutura de Rotas

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "modulos",
        element: <ModulesPage />
      },
      {
        path: "modulos/:moduleId",
        element: <ModuleDetailPage />
      },
      {
        path: "exercicios",
        element: <ExercisesPage />
      },
      {
        path: "flashcards",
        element: <FlashcardsPage />
      },
      {
        path: "lexico",
        element: <LexiconPage />
      },
      {
        path: "testes",
        element: <TestGeneratorPage />
      },
      {
        path: "documentos",
        element: <DocumentsPage />
      }
    ]
  }
]);
```

### Lazy Loading

```jsx
const ModulesPage = lazy(() => import('./pages/ModulesPage'));
const ExercisesPage = lazy(() => import('./pages/ExercisesPage'));

// Wrapper com Suspense
const App = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <RouterProvider router={router} />
  </Suspense>
);
```

## 📊 Estrutura de Dados

### Vocabulário

```javascript
const vocabularySchema = {
  id: "string",
  english: "string",
  portuguese: "string", 
  definition: "string",
  category: "enum", // fundamental, christology, soteriology, etc.
  difficulty: "enum", // beginner, intermediate, advanced
  frequency: "enum", // very_high, high, medium, low
  pronunciation: "string", // IPA notation
  examples: ["string"],
  etymology: "string",
  relatedTerms: ["string"],
  sources: ["string"],
  audioUrl: "string",
  imageUrl: "string"
};
```

### Exercícios

```javascript
const exerciseSchema = {
  id: "string",
  module: "string",
  type: "enum", // multiple_choice, fill_blank, matching, etc.
  difficulty: "enum",
  question: "string",
  options: ["string"], // para multiple choice
  correct: "number|string",
  explanation: "string",
  hints: ["string"],
  references: ["string"],
  tags: ["string"],
  estimatedTime: "number", // em segundos
  points: "number"
};
```

### Progresso do Usuário

```javascript
const progressSchema = {
  userId: "string", // para futuro sistema de usuários
  completedModules: ["string"],
  currentModule: "string",
  moduleProgress: {
    [moduleId]: {
      lessonsCompleted: ["string"],
      exercisesCompleted: ["string"],
      score: "number",
      timeSpent: "number",
      lastAccessed: "date"
    }
  },
  vocabularyMastery: {
    [termId]: {
      level: "number", // 0-5
      lastReviewed: "date",
      correctAnswers: "number",
      totalAttempts: "number"
    }
  },
  preferences: {
    theme: "string",
    language: "string",
    audioEnabled: "boolean",
    notificationsEnabled: "boolean"
  }
};
```

## ♿ Arquitetura de Acessibilidade

### Princípios WCAG 2.1

1. **Perceptível** - Informação apresentada de forma perceptível
2. **Operável** - Interface operável por todos os usuários
3. **Compreensível** - Informação e operação compreensíveis
4. **Robusto** - Conteúdo robusto para diferentes tecnologias

### Implementação

#### Skip Links

```jsx
const SkipLinks = () => (
  <div className="skip-links">
    <a href="#main-content" className="skip-link">
      Pular para conteúdo principal
    </a>
    <a href="#navigation" className="skip-link">
      Pular para navegação
    </a>
  </div>
);
```

#### Focus Management

```jsx
const useFocusManagement = () => {
  const focusElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.focus();
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const trapFocus = (containerRef) => {
    // Implementação de focus trap para modais
  };

  return { focusElement, trapFocus };
};
```

#### Screen Reader Support

```jsx
const Announcer = ({ message, priority = 'polite' }) => (
  <div
    aria-live={priority}
    aria-atomic="true"
    className="sr-only"
  >
    {message}
  </div>
);
```

## 🚀 Performance e Otimização

### Code Splitting

```jsx
// Divisão por rotas
const HomePage = lazy(() => import('./pages/HomePage'));
const ModulesPage = lazy(() => import('./pages/ModulesPage'));

// Divisão por funcionalidade
const AudioPlayer = lazy(() => import('./components/AudioPlayer'));
```

### Image Optimization

```jsx
const OptimizedImage = ({ src, alt, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className="image-container">
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          className={`transition-opacity ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          {...props}
        />
      )}
    </div>
  );
};
```

### Bundle Optimization

```javascript
// vite.config.js
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['lucide-react']
        }
      }
    }
  }
});
```

## 🔧 Configuração e Build

### Ambiente de Desenvolvimento

```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    open: true
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  }
});
```

### Build de Produção

```javascript
// Otimizações de build
export default defineConfig({
  build: {
    target: 'es2015',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js'
      }
    }
  }
});
```

## 🧪 Estratégia de Testes

### Tipos de Teste

1. **Unit Tests** - Componentes individuais
2. **Integration Tests** - Interação entre componentes
3. **E2E Tests** - Fluxos completos do usuário
4. **Accessibility Tests** - Conformidade WCAG

### Ferramentas

- **Vitest** - Unit e integration tests
- **Testing Library** - Testes de componentes React
- **Playwright** - Testes E2E
- **axe-core** - Testes de acessibilidade

## 📈 Monitoramento e Analytics

### Métricas de Performance

- **Core Web Vitals** - LCP, FID, CLS
- **Bundle Size** - Tamanho dos chunks
- **Load Time** - Tempo de carregamento
- **Error Rate** - Taxa de erros JavaScript

### Analytics de Uso

- **Page Views** - Páginas mais visitadas
- **User Flow** - Jornada do usuário
- **Feature Usage** - Funcionalidades mais usadas
- **Completion Rate** - Taxa de conclusão de módulos

## 🔮 Arquitetura Futura

### Roadmap Técnico

1. **PWA** - Progressive Web App capabilities
2. **Offline Support** - Service Workers e cache
3. **User System** - Autenticação e perfis
4. **Real-time** - WebSockets para colaboração
5. **Mobile App** - React Native ou Capacitor

### Escalabilidade

- **Micro-frontends** - Divisão em aplicações menores
- **CDN** - Distribuição global de assets
- **API Gateway** - Centralização de APIs
- **Caching Strategy** - Redis para cache distribuído

---

Esta arquitetura foi projetada para ser escalável, maintível e acessível, seguindo as melhores práticas de desenvolvimento web moderno.

