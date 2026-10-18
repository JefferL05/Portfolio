# Portfolio do Jeff

PortfÃ³lio pessoal que agrega projetos do GitHub e posts do blog **Console do Jeff** em um Ãºnico lugar.

## Stack

- **Astro** â Framework estÃ¡tico com ILR (Islands Architecture)
- **Tailwind CSS** â EstilizaÃ§Ã£o utilitÃ¡ria
- **TypeScript** â Tipagem estÃ¡tica

## Funcionalidades

- **Hero** com informaÃ§Ãµes do perfil GitHub (nome, bio, localizaÃ§Ã£o, stats)
- **Projetos** â Cards com os repositÃ³rios mais recentes do GitHub (stars, forks, linguagem, Ãºltima atualizaÃ§Ã£o)
- **Blog** â Posts recentes do blog via RSS
- **Sobre** â SeÃ§Ã£o estilizada como terminal
- **CTA** â Links para GitHub e Instagram

## Como rodar localmente

```bash
# Instalar dependÃªncias
npm install

# Servidor de desenvolvimento
npm run dev

# Build de produÃ§Ã£o
npm run build

# Preview do build
npm run preview
```

## Estrutura

```
âââ astro.config.mjs
âââ package.json
âââ tailwind.config.js
âââ tsconfig.json
âââ public/
â   âââ favicon.svg
âââ src/
    âââ components/
    â   âââ Hero.astro
    â   âââ ProjectCard.astro
    â   âââ BlogCard.astro
    âââ layouts/
    â   âââ BaseLayout.astro
    âââ lib/
    â   âââ github.ts
    â   âââ blog.ts
    âââ pages/
    â   âââ index.astro
    âââ styles/
        âââ global.css
```

## Deploy

O projeto estÃ¡ pronto para deploy no **GitHub Pages** ou **Vercel/Netlify**. Como Astro gera site estÃ¡tico, basta fazer build e publicar a pasta `dist/`.

## Fontes de dados

- **GitHub**: `https://api.github.com/users/JefferL05`
- **Blog RSS**: `https://jefferl05.github.io/console-do-jeff/rss.xml`
