# Guia de Contribuição

Obrigado por considerar contribuir com o projeto **Inglês Teológico**! Este documento fornece diretrizes para contribuições efetivas e colaboração harmoniosa.

## 🎯 Como Contribuir

### Tipos de Contribuição Bem-vindas

1. **🐛 Correção de Bugs**
   - Relatórios de problemas
   - Correções de código
   - Melhorias de performance

2. **✨ Novas Funcionalidades**
   - Novos exercícios
   - Recursos educacionais
   - Ferramentas de estudo

3. **📚 Documentação**
   - Melhorias no README
   - Comentários no código
   - Tutoriais e guias

4. **🎨 Design e UX**
   - Melhorias visuais
   - Experiência do usuário
   - Responsividade

5. **♿ Acessibilidade**
   - Compatibilidade com leitores de tela
   - Navegação por teclado
   - Contraste e legibilidade

6. **🌐 Conteúdo Educacional**
   - Novos termos teológicos
   - Exercícios adicionais
   - Recursos bibliográficos

## 🚀 Processo de Contribuição

### 1. Preparação

1. **Fork o repositório**
   ```bash
   git clone https://github.com/seu-usuario/ingles-teologico.git
   cd ingles-teologico
   ```

2. **Configure o ambiente**
   ```bash
   npm install
   cp .env.local.example .env.local
   ```

3. **Crie uma branch**
   ```bash
   git checkout -b feature/nome-da-feature
   # ou
   git checkout -b fix/nome-do-bug
   ```

### 2. Desenvolvimento

1. **Siga os padrões de código**
   - Use ESLint e Prettier
   - Mantenha consistência com o código existente
   - Escreva comentários claros

2. **Teste suas mudanças**
   ```bash
   npm run dev
   npm run build
   ```

3. **Verifique acessibilidade**
   - Teste navegação por teclado
   - Verifique contraste de cores
   - Teste com leitores de tela

### 3. Submissão

1. **Commit suas mudanças**
   ```bash
   git add .
   git commit -m "feat: adiciona nova funcionalidade X"
   ```

2. **Push para sua branch**
   ```bash
   git push origin feature/nome-da-feature
   ```

3. **Abra um Pull Request**
   - Use template de PR
   - Descreva as mudanças claramente
   - Inclua screenshots se aplicável

## 📝 Padrões de Código

### Estrutura de Arquivos

```
src/
├── components/          # Componentes reutilizáveis
├── pages/              # Páginas da aplicação
├── data/               # Dados estruturados
├── lib/                # Utilitários e bibliotecas
├── styles/             # Estilos CSS
└── assets/             # Imagens e recursos
```

### Nomenclatura

- **Componentes**: PascalCase (`ModuleCard.jsx`)
- **Arquivos**: camelCase (`vocabulary.js`)
- **Pastas**: kebab-case (`ai-generated/`)
- **Variáveis**: camelCase (`isMenuOpen`)
- **Constantes**: UPPER_SNAKE_CASE (`API_BASE_URL`)

### Componentes React

```jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ComponentName = ({ prop1, prop2 }) => {
  const [state, setState] = useState(false);

  const handleAction = () => {
    // Lógica do componente
  };

  return (
    <div className="component-container">
      {/* JSX do componente */}
    </div>
  );
};

ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number
};

ComponentName.defaultProps = {
  prop2: 0
};

export default ComponentName;
```

### CSS e Styling

- Use **Tailwind CSS** para styling
- Mantenha classes organizadas
- Use variáveis CSS para valores reutilizáveis
- Siga mobile-first approach

```jsx
// ✅ Bom
<div className="flex flex-col md:flex-row gap-4 p-6 bg-white rounded-lg shadow-md">

// ❌ Evite
<div className="flex flex-col md:flex-row gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200">
```

## 🧪 Testes

### Testes Manuais

1. **Funcionalidade**
   - Teste todas as funcionalidades afetadas
   - Verifique responsividade
   - Teste em diferentes navegadores

2. **Acessibilidade**
   ```bash
   # Use ferramentas como axe-core
   npm install -g @axe-core/cli
   axe http://localhost:5173
   ```

3. **Performance**
   - Verifique Lighthouse scores
   - Teste carregamento de imagens
   - Monitore bundle size

### Checklist de Teste

- [ ] Funcionalidade principal funciona
- [ ] Responsivo em mobile/tablet/desktop
- [ ] Navegação por teclado funciona
- [ ] Sem erros no console
- [ ] Build de produção funciona
- [ ] Acessibilidade mantida/melhorada

## 📋 Padrões de Commit

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>[escopo opcional]: <descrição>

[corpo opcional]

[rodapé opcional]
```

### Tipos de Commit

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Mudanças na documentação
- `style`: Formatação, ponto e vírgula, etc
- `refactor`: Refatoração de código
- `test`: Adição ou correção de testes
- `chore`: Tarefas de manutenção

### Exemplos

```bash
feat(exercises): adiciona exercícios de vocabulário avançado
fix(navigation): corrige menu mobile no Safari
docs(readme): atualiza instruções de instalação
style(components): aplica formatação ESLint
refactor(data): reorganiza estrutura de dados do vocabulário
```

## 🎨 Diretrizes de Design

### Cores

```css
/* Paleta principal */
--amber-50: #fffbeb;
--amber-600: #d97706;
--orange-600: #ea580c;

/* Neutros */
--gray-50: #f9fafb;
--gray-800: #1f2937;
```

### Tipografia

- **Headings**: font-bold, text-gray-800
- **Body**: font-normal, text-gray-700
- **Captions**: font-medium, text-gray-500

### Espaçamento

- **Containers**: max-w-7xl mx-auto px-4
- **Sections**: py-8 md:py-12
- **Cards**: p-6 rounded-lg

## ♿ Diretrizes de Acessibilidade

### Obrigatórias

1. **Contraste**: Mínimo 4.5:1 para texto normal
2. **Navegação**: Tab order lógico
3. **ARIA**: Labels e roles apropriados
4. **Semântica**: HTML semântico correto

### Checklist

- [ ] Todas as imagens têm alt text
- [ ] Formulários têm labels associados
- [ ] Links têm texto descritivo
- [ ] Cores não são única forma de informação
- [ ] Funciona apenas com teclado
- [ ] Compatível com screen readers

## 📚 Contribuições de Conteúdo

### Vocabulário Teológico

Ao adicionar novos termos:

```javascript
{
  english: "Sanctification",
  portuguese: "Santificação", 
  definition: "Processo de tornar-se santo, separado para Deus",
  category: "soteriology",
  difficulty: "intermediate",
  frequency: "high",
  examples: [
    "Sanctification is a lifelong process.",
    "The Spirit works in our sanctification."
  ],
  relatedTerms: ["justification", "regeneration"],
  sources: ["Westminster Confession", "Calvin's Institutes"]
}
```

### Exercícios

Estrutura para novos exercícios:

```javascript
{
  id: "unique-id",
  module: "vocabulary",
  difficulty: "medium",
  type: "multiple-choice",
  question: "O que significa 'Grace' em português?",
  options: ["Graça", "Glória", "Gratidão", "Grandeza"],
  correct: 0,
  explanation: "Grace significa favor imerecido de Deus.",
  references: ["Efésios 2:8-9"]
}
```

## 🤝 Código de Conduta

### Nossos Valores

- **Respeito**: Trate todos com dignidade
- **Inclusão**: Acolha diferentes perspectivas
- **Colaboração**: Trabalhe em equipe
- **Excelência**: Busque qualidade
- **Integridade**: Seja honesto e transparente

### Comportamentos Esperados

- Use linguagem acolhedora e inclusiva
- Respeite diferentes pontos de vista
- Aceite críticas construtivas
- Foque no que é melhor para a comunidade
- Mostre empatia com outros membros

### Comportamentos Inaceitáveis

- Linguagem ou imagens sexualizadas
- Ataques pessoais ou políticos
- Assédio público ou privado
- Publicar informações privadas
- Conduta inadequada profissionalmente

## 📞 Suporte

### Canais de Comunicação

1. **Issues**: Para bugs e solicitações de features
2. **Discussions**: Para perguntas e ideias
3. **Email**: Para questões sensíveis

### Processo de Review

1. **Revisão automática**: CI/CD checks
2. **Revisão por pares**: Pelo menos 1 aprovação
3. **Revisão de acessibilidade**: Para mudanças de UI
4. **Revisão de conteúdo**: Para mudanças educacionais

## 🏆 Reconhecimento

Contribuidores são reconhecidos através de:

- **Contributors list** no README
- **Release notes** mencionando contribuições
- **Hall of Fame** para contribuições significativas
- **Badges** para diferentes tipos de contribuição

## 📈 Roadmap de Contribuições

### Prioridades Atuais

1. **Conteúdo educacional** - Mais exercícios e vocabulário
2. **Acessibilidade** - Melhorias contínuas
3. **Performance** - Otimizações de carregamento
4. **Mobile** - Experiência mobile aprimorada

### Como Escolher uma Tarefa

1. Verifique **Issues** marcadas como "good first issue"
2. Consulte **Projects** para ver prioridades
3. Pergunte na **Discussions** sobre onde ajudar
4. Proponha suas próprias ideias

---

**Obrigado por contribuir com o Inglês Teológico! Juntos, estamos construindo uma ferramenta valiosa para a educação teológica.**

