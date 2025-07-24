# Ignite UI Design System Monorepo

Este repositório é um **monorepo** que centraliza o desenvolvimento, documentação e publicação de um design system React, incluindo:

- **Componentes React reutilizáveis**
- **Tokens de design (cores, espaçamentos, tipografia, etc)**
- **Configurações compartilhadas de ESLint e TypeScript**
- **Documentação interativa com Storybook**

## Estrutura do Monorepo

```
/packages
  ├── react           # Biblioteca de componentes React (@regina-ignite-ui/react)
  ├── tokens          # Tokens de design compartilhados (@regina-ignite-ui/tokens)
  ├── docs            # Documentação e Storybook
  ├── eslint-config   # Configuração customizada de ESLint
  └── ts-config       # Configuração customizada de TypeScript
```

Gerenciado com [TurboRepo](https://turbo.build/) para orquestração de builds, dev e cache, e [Changesets](https://github.com/changesets/changesets) para versionamento e publicação.

---

## Pacotes e Tecnologias

### 1. `@regina-ignite-ui/react`
- **Componentes React**: Avatar, Box, Button, Checkbox, Heading, MultiStep, Text, TextArea, TextInput, Toast, Tooltip, etc.
- **Estilização**: [Stitches](https://stitches.dev/) para CSS-in-JS.
- **Acessibilidade & UI**: [Radix UI](https://www.radix-ui.com/) (Avatar, Checkbox, Toast, Tooltip).
- **Ícones**: [Phosphor Icons](https://phosphoricons.com/).
- **Build**: [tsup](https://tsup.egoist.dev/) (ESM, CJS, d.ts).
- **TypeScript**: Tipagens completas.
- **Publicação**: Disponível no npm como [`@regina-ignite-ui/react`](https://www.npmjs.com/package/@regina-ignite-ui/react).

### 2. `@regina-ignite-ui/tokens`
- **Tokens de design**: Cores, espaçamentos, tipografia, radii, etc.
- **Build**: tsup (ESM, CJS, d.ts).
- **Uso**: Importado pelos componentes e disponível para consumo externo.
- **Publicação**: [`@regina-ignite-ui/tokens`](https://www.npmjs.com/package/@regina-ignite-ui/tokens).

### 3. `@regina-ignite-ui/eslint-config`
- **Configuração compartilhada** baseada em [Rocketseat ESLint Config](https://github.com/rocketseat/eslint-config), focada em projetos React modernos.
- **Uso**: Extensível por todos os pacotes do monorepo.

### 4. `@regina-ignite-ui/ts-config`
- **Presets de TypeScript** para projetos React e base.
- **Facilita padronização de tsconfig em todos os pacotes.**

### 5. `@regina-ignite-ui/docs`
- **Documentação interativa** com [Storybook](https://storybook.js.org/) + [Vite](https://vitejs.dev/).
- **Deploy automático** via GitHub Actions para GitHub Pages.
- **Exemplos e playground dos componentes.**

---

## Orquestração e Dev Experience

- **TurboRepo**: Orquestra scripts (`dev`, `build`) em todos os pacotes, com cache inteligente.
- **Changesets**: Gerencia versionamento semântico e publicação automatizada no npm.
- **GitHub Actions**: CI para build, lint, testes, release e deploy da documentação.

---

## Publicação no npm

A publicação dos pacotes (`react` e `tokens`) é feita automaticamente via GitHub Actions ao dar push na branch `main`:

- O workflow `.github/workflows/release.yml` executa:
  1. Build dos pacotes
  2. `changeset publish` (publica no npm)
- Requer os secrets `NPM_TOKEN` e `GITHUB_TOKEN` configurados no repositório.
- O acesso dos pacotes é público (`access: public` no Changesets).

---

## Como rodar localmente

### Pré-requisitos
- Node.js 18+
- npm 8+

### Instalação
```bash
npm install
```

### Desenvolvimento (Storybook)
```bash
npm run dev
```
- Isso executa o Storybook em modo dev (`http://localhost:6006`), com hot reload dos componentes e tokens.

### Build dos pacotes
```bash
npm run build
```
- Gera os artefatos de build em todos os pacotes (`dist/`).

### Lint
```bash
npm run lint
```
- Executa o ESLint em todos os pacotes.

---

## Scripts principais
- `npm run dev` — Executa todos os pacotes em modo desenvolvimento (Storybook, builds em watch, etc)
- `npm run build` — Build de todos os pacotes
- `npm run release` — Build e publicação dos pacotes (usado pelo CI)
- `npm run changeset` — Gerencia versões e changelogs

---

## Contribuição
- Siga o padrão de commits e utilize `npm run changeset` para criar changelogs.
- Pull requests são bem-vindos!

---

## Licença
MIT para configs e docs, ISC para pacotes publicados.

---

## Contato
Dúvidas ou sugestões? Abra uma issue ou PR!
