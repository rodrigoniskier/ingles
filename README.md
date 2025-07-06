# Inglês Teológico

Um site educacional completo para ensino de inglês instrumental focado na teologia reformada. Do alfabeto ao nível intermediário, com vocabulário bíblico e de autores reformados clássicos.

## 🎯 Visão Geral

O **Inglês Teológico** é uma plataforma educacional gratuita que oferece um curso estruturado de inglês instrumental especificamente voltado para estudantes de teologia reformada. O projeto combina metodologia pedagógica moderna com tecnologia web avançada para proporcionar uma experiência de aprendizado interativa e acessível.

### Características Principais

- ✅ **100% Gratuito** - Sem necessidade de cadastro ou pagamento
- 📚 **4 Módulos Completos** - Do básico ao intermediário
- 🎮 **Gamificação** - Flashcards e exercícios interativos
- 📖 **500+ Termos Teológicos** - Vocabulário especializado
- ♿ **Totalmente Acessível** - Compatível com leitores de tela
- 📱 **Responsivo** - Funciona em desktop, tablet e mobile
- 🔍 **SEO Otimizado** - Meta tags e estrutura semântica

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Ícones SVG otimizados
- **React Router DOM** - Roteamento client-side

### Recursos de Acessibilidade
- **ARIA Labels** - Atributos de acessibilidade
- **Skip Links** - Navegação por teclado
- **Screen Reader Support** - Compatibilidade com leitores de tela
- **High Contrast Mode** - Suporte a modo de alto contraste
- **Reduced Motion** - Respeita preferências de movimento

### SEO e Performance
- **Meta Tags** - Open Graph e Twitter Cards
- **Semantic HTML** - Estrutura semântica correta
- **Lazy Loading** - Carregamento otimizado de imagens
- **Bundle Optimization** - Build otimizado para produção

## 📁 Estrutura do Projeto

```
ingles-teologico/
├── public/                     # Arquivos estáticos
│   └── vite.svg               # Favicon
├── src/
│   ├── assets/                # Assets do projeto
│   │   └── ai-generated/      # Imagens geradas por IA
│   ├── components/            # Componentes React
│   │   ├── AccessibilityFeatures.jsx
│   │   ├── ExerciseCard.jsx
│   │   ├── FlashCard.jsx
│   │   ├── Layout.jsx
│   │   ├── ModuleCard.jsx
│   │   ├── Navigation.jsx
│   │   └── VocabularyCard.jsx
│   ├── data/                  # Dados estruturados
│   │   ├── curriculum.js      # Currículo dos módulos
│   │   ├── documents.js       # Documentos teológicos
│   │   ├── exercises.js       # Exercícios interativos
│   │   └── vocabulary.js      # Vocabulário teológico
│   ├── lib/                   # Bibliotecas e utilitários
│   │   └── unsplash.js       # Integração API Unsplash
│   ├── pages/                 # Páginas da aplicação
│   │   ├── DocumentsPage.jsx
│   │   ├── ExercisesPage.jsx
│   │   ├── FlashcardsPage.jsx
│   │   ├── LexiconPage.jsx
│   │   ├── ModulesPage.jsx
│   │   └── TestGeneratorPage.jsx
│   ├── styles/               # Estilos CSS
│   │   └── accessibility.css # Estilos de acessibilidade
│   ├── App.jsx              # Componente principal
│   ├── App.css              # Estilos do App
│   ├── index.css            # Estilos globais
│   └── main.jsx             # Ponto de entrada
├── .env.local               # Variáveis de ambiente
├── index.html               # HTML principal
├── package.json             # Dependências do projeto
├── tailwind.config.js       # Configuração Tailwind
├── vite.config.js           # Configuração Vite
└── README.md                # Este arquivo
```

## 🛠️ Instalação e Configuração

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Git

### Passos de Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/ingles-teologico.git
   cd ingles-teologico
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure as variáveis de ambiente**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edite o arquivo `.env.local` e adicione sua chave da API Unsplash:
   ```
   VITE_UNSPLASH_ACCESS_KEY=sua_chave_aqui
   ```

4. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. **Acesse a aplicação**
   
   Abra [http://localhost:5173](http://localhost:5173) no seu navegador.

## 📚 Funcionalidades

### 1. Módulos Teóricos

Quatro módulos estruturados que cobrem desde fundamentos básicos até leitura avançada:

- **Fundamentos do Inglês Teológico** (Iniciante, 3-4h)
- **Gramática Essencial para Leitura** (Básico, 4-5h)  
- **Vocabulário Teológico Aprofundado** (Intermediário, 5-6h)
- **Leitura e Compreensão de Textos** (Intermediário, 4-5h)

### 2. Exercícios Práticos

Sistema de exercícios interativos com:
- Múltipla escolha
- Três níveis de dificuldade
- Feedback imediato
- Progresso por módulo

### 3. Flashcards Gamificados

Sistema de revisão com:
- Categorização por temas teológicos
- Estatísticas de progresso
- Modo embaralhado
- Áudio para pronúncia

### 4. Léxico Completo

Dicionário teológico com:
- 500+ termos especializados
- Busca avançada
- Filtros por categoria e frequência
- Exemplos de uso

### 5. Gerador de Testes

Ferramenta para criar testes personalizados:
- Seleção por módulo
- Configuração de dificuldade
- Número de questões variável
- Exportação de resultados

### 6. Documentos Teológicos

Biblioteca de recursos com:
- Westminster Standards
- Obras de Calvin, Kuyper, Bavinck
- Comentários bíblicos
- Recursos acadêmicos contemporâneos

## 🎨 Design e UX

### Paleta de Cores

- **Primária**: Amber (#d97706) - Representa sabedoria e conhecimento
- **Secundária**: Orange (#ea580c) - Energia e entusiasmo
- **Neutros**: Grays (#374151, #6b7280, #9ca3af)
- **Fundo**: Gradient amber-orange (#fef3c7 to #fed7aa)

### Tipografia

- **Fonte Principal**: System fonts (Inter, Segoe UI, Roboto)
- **Hierarquia**: H1 (2.5rem), H2 (2rem), H3 (1.5rem), Body (1rem)
- **Peso**: Regular (400), Medium (500), Bold (700)

### Componentes

Todos os componentes seguem princípios de design consistentes:
- Bordas arredondadas (8px)
- Sombras sutis para profundidade
- Transições suaves (200ms)
- Estados de hover e focus bem definidos

## ♿ Acessibilidade

O projeto foi desenvolvido seguindo as diretrizes WCAG 2.1 AA:

### Navegação por Teclado
- Tab navigation em todos os elementos interativos
- Skip links para conteúdo principal (Alt+M)
- Skip links para navegação (Alt+N)
- Escape para fechar modais e menus

### Screen Readers
- Atributos ARIA apropriados
- Landmarks semânticos (header, main, footer)
- Descrições alternativas para imagens
- Anúncios de mudanças de estado

### Contraste e Visibilidade
- Contraste mínimo de 4.5:1 para texto normal
- Contraste mínimo de 3:1 para texto grande
- Suporte a modo de alto contraste
- Indicadores de foco visíveis

### Responsividade
- Design mobile-first
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch targets mínimos de 44px
- Texto legível em todos os tamanhos

## 🚀 Build e Deploy

### Build de Produção

```bash
npm run build
# ou
yarn build
```

O build será gerado na pasta `dist/` com:
- Assets otimizados e minificados
- CSS e JS com hash para cache
- Imagens comprimidas
- HTML semântico

### Deploy

O projeto pode ser deployado em qualquer serviço de hospedagem estática:

#### Vercel
```bash
npm install -g vercel
vercel --prod
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

#### GitHub Pages
```bash
npm run build
npm run deploy
```

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor, siga estas diretrizes:

### Como Contribuir

1. **Fork o projeto**
2. **Crie uma branch para sua feature** (`git checkout -b feature/AmazingFeature`)
3. **Commit suas mudanças** (`git commit -m 'Add some AmazingFeature'`)
4. **Push para a branch** (`git push origin feature/AmazingFeature`)
5. **Abra um Pull Request**

### Padrões de Código

- Use ESLint e Prettier para formatação
- Antes de rodar `npm run lint`, instale as dependências de desenvolvimento com `npm install` ou `pnpm install` (você pode executar `./setup.sh` para automatizar essa etapa)
- Siga convenções de nomenclatura React
- Escreva testes para novas funcionalidades
- Documente mudanças no README

### Tipos de Contribuição

- 🐛 **Bug fixes** - Correção de problemas
- ✨ **Features** - Novas funcionalidades
- 📚 **Documentação** - Melhorias na documentação
- 🎨 **Design** - Melhorias visuais
- ♿ **Acessibilidade** - Melhorias de acessibilidade
- 🌐 **Internacionalização** - Suporte a outros idiomas

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👥 Autores

- **Manus AI** - Desenvolvimento inicial - [@manus-ai](https://github.com/manus-ai)

## 🙏 Agradecimentos

- Comunidade teológica reformada pela inspiração
- Desenvolvedores das bibliotecas open source utilizadas
- Beta testers que forneceram feedback valioso
- Especialistas em acessibilidade que orientaram o desenvolvimento

## 📞 Suporte

Se você encontrar problemas ou tiver sugestões:

1. **Issues**: [GitHub Issues](https://github.com/seu-usuario/ingles-teologico/issues)
2. **Discussões**: [GitHub Discussions](https://github.com/seu-usuario/ingles-teologico/discussions)
3. **Email**: suporte@ingles-teologico.com

## 🗺️ Roadmap

### Versão 2.0 (Planejada)
- [ ] Sistema de usuários e progresso
- [ ] Certificados de conclusão
- [ ] Modo offline completo
- [ ] App mobile nativo
- [ ] Integração com LMS

### Versão 1.1 (Em desenvolvimento)
- [ ] Mais exercícios interativos
- [ ] Sistema de áudio melhorado
- [ ] Temas personalizáveis
- [ ] Exportação de progresso

---

**Desenvolvido com ❤️ para a comunidade teológica reformada**

