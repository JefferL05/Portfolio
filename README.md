# Portfolio do Jeff

Portfólio pessoal que agrega projetos do GitHub e posts do blog **Console do Jeff** em um único lugar.

## Stack

- **Astro** — Framework estático com ILR (Islands Architecture)
- **Tailwind CSS** — Estilização utilitária
- **TypeScript** — Tipagem estática

## Funcionalidades

- **Hero** com informações do perfil GitHub (nome, bio, localização, stats)
- **Projetos** — Cards com os repositórios mais recentes do GitHub (stars, forks, linguagem, última atualização)
- **Blog** — Posts recentes do blog via RSS
- **Sobre** — Seção estilizada como terminal
- **CTA** — Links para GitHub e Instagram

## Como rodar localmente

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

## Estrutura

```
├── astro.config.mjs
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── public/
│   └── favicon.svg
└── src/
    ├── components/
    │   ├── Hero.astro
    │   ├── ProjectCard.astro
    │   └── BlogCard.astro
    ├── layouts/
    │   └── BaseLayout.astro
    ├── lib/
    │   ├── github.ts
    │   └── blog.ts
    ├── pages/
    │   └── index.astro
    └── styles/
        └── global.css
```

## Deploy

O projeto está pronto para deploy no **GitHub Pages** ou **Vercel/Netlify**. Como Astro gera site estático, basta fazer build e publicar a pasta `dist/`.

## Fontes de dados

- **GitHub**: `https://api.github.com/users/JefferL05`
- **Blog RSS**: `https://jefferl05.github.io/console-do-jeff/rss.xml`
