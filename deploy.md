# Guia de Deploy - Inglês Teológico

Este documento fornece instruções detalhadas para fazer deploy da aplicação Inglês Teológico em diferentes plataformas de hospedagem.

## 🚀 Preparação para Deploy

### 1. Build de Produção

Antes de fazer deploy, certifique-se de que o build de produção está funcionando:

```bash
# Instalar dependências
npm install

# Criar build de produção
npm run build

# Testar build localmente
npm run preview
```

### 2. Verificações Pré-Deploy

- [ ] Todas as funcionalidades testadas
- [ ] Build de produção sem erros
- [ ] Variáveis de ambiente configuradas
- [ ] Assets otimizados
- [ ] Testes de acessibilidade passando

## 🌐 Plataformas de Deploy

### Vercel (Recomendado)

Vercel oferece deploy automático e otimizações específicas para React.

#### Deploy via CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login na Vercel
vercel login

# Deploy
vercel --prod
```

#### Deploy via Git

1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

#### Configuração (vercel.json)

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### Netlify

Netlify oferece deploy contínuo e funcionalidades de formulário.

#### Deploy via CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login na Netlify
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

#### Configuração (_redirects)

```
# Redirects para SPA
/*    /index.html   200

# Headers de segurança
/*
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
```

#### Configuração (netlify.toml)

```toml
[build]
  publish = "dist"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### GitHub Pages

Deploy gratuito diretamente do repositório GitHub.

#### Configuração

1. Instalar gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Adicionar scripts no package.json:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://seu-usuario.github.io/ingles-teologico"
}
```

3. Deploy:
```bash
npm run deploy
```

#### Configuração do Vite

```javascript
// vite.config.js
export default defineConfig({
  base: '/ingles-teologico/', // Nome do repositório
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
});
```

### Firebase Hosting

Hospedagem rápida e confiável do Google.

#### Configuração

1. Instalar Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login e inicializar:
```bash
firebase login
firebase init hosting
```

3. Configuração (firebase.json):
```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "/assets/**",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000, immutable"
          }
        ]
      }
    ]
  }
}
```

4. Deploy:
```bash
npm run build
firebase deploy
```

## ⚙️ Variáveis de Ambiente

### Configuração por Plataforma

#### Vercel
```bash
# Via CLI
vercel env add VITE_UNSPLASH_ACCESS_KEY

# Via Dashboard
# Acesse vercel.com > Projeto > Settings > Environment Variables
```

#### Netlify
```bash
# Via CLI
netlify env:set VITE_UNSPLASH_ACCESS_KEY "sua_chave_aqui"

# Via Dashboard
# Acesse app.netlify.com > Site > Settings > Environment variables
```

#### GitHub Pages
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        env:
          VITE_UNSPLASH_ACCESS_KEY: ${{ secrets.VITE_UNSPLASH_ACCESS_KEY }}
          
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## 🔧 Otimizações de Produção

### Performance

1. **Compressão Gzip/Brotli**
```javascript
// vite.config.js
import { defineConfig } from 'vite';
import { compression } from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip'
    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br'
    })
  ]
});
```

2. **Bundle Analysis**
```bash
# Analisar bundle
npm install --save-dev rollup-plugin-visualizer
npm run build
npx vite-bundle-analyzer
```

### SEO

1. **Meta Tags Dinâmicas**
```jsx
// Usar react-helmet-async para meta tags dinâmicas
import { Helmet } from 'react-helmet-async';

const ModulePage = ({ module }) => (
  <>
    <Helmet>
      <title>{module.title} - Inglês Teológico</title>
      <meta name="description" content={module.description} />
      <meta property="og:title" content={module.title} />
    </Helmet>
    {/* Conteúdo da página */}
  </>
);
```

2. **Sitemap**
```javascript
// scripts/generate-sitemap.js
const fs = require('fs');
const routes = ['/', '/modulos', '/exercicios', '/flashcards', '/lexico', '/testes', '/documentos'];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
    <url>
      <loc>https://ingles-teologico.com${route}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `).join('')}
</urlset>`;

fs.writeFileSync('public/sitemap.xml', sitemap);
```

### Segurança

1. **Headers de Segurança**
```javascript
// Headers recomendados
const securityHeaders = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Content-Security-Policy': "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
};
```

## 📊 Monitoramento

### Analytics

1. **Google Analytics 4**
```javascript
// lib/analytics.js
export const gtag = (...args) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
};

export const trackEvent = (action, category, label, value) => {
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
};
```

2. **Plausible Analytics** (Alternativa privacy-friendly)
```html
<!-- index.html -->
<script defer data-domain="ingles-teologico.com" src="https://plausible.io/js/plausible.js"></script>
```

### Error Tracking

1. **Sentry**
```javascript
// main.jsx
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: import.meta.env.MODE,
});
```

### Performance Monitoring

1. **Web Vitals**
```javascript
// lib/vitals.js
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  gtag('event', metric.name, {
    event_category: 'Web Vitals',
    event_label: metric.id,
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    non_interaction: true,
  });
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

## 🔄 CI/CD

### GitHub Actions

```yaml
# .github/workflows/deploy.yml
name: Build and Deploy

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run test
      - run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
        env:
          VITE_UNSPLASH_ACCESS_KEY: ${{ secrets.VITE_UNSPLASH_ACCESS_KEY }}
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## 🚨 Troubleshooting

### Problemas Comuns

1. **Rotas não funcionam após deploy**
   - Configurar redirects para SPA
   - Verificar configuração do servidor

2. **Assets não carregam**
   - Verificar base URL no vite.config.js
   - Confirmar paths relativos

3. **Variáveis de ambiente não funcionam**
   - Verificar prefixo VITE_
   - Confirmar configuração na plataforma

4. **Build falha**
   - Verificar versão do Node.js
   - Limpar cache: `npm ci`

### Logs e Debug

```bash
# Logs detalhados do build
npm run build -- --debug

# Verificar bundle
npm run build && npx serve dist

# Testar em produção localmente
npm run preview
```

## 📋 Checklist de Deploy

- [ ] Testes passando
- [ ] Build de produção funcionando
- [ ] Variáveis de ambiente configuradas
- [ ] Redirects configurados para SPA
- [ ] Headers de segurança configurados
- [ ] Analytics configurado
- [ ] Error tracking configurado
- [ ] Performance monitorada
- [ ] Sitemap gerado
- [ ] Domínio customizado configurado (se aplicável)

---

**Sucesso no deploy! 🚀**

