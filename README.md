# Mundo Humano

Site institucional para psicóloga/consultório de psicologia, feito com [Astro](https://astro.build).

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera a pasta dist/
npm run preview  # testa o build
```

## Onde editar

| O quê | Arquivo |
|---|---|
| Nome, CRP, WhatsApp, e-mail, endereço, horários | `src/config.ts` |
| URL final do site (canonical e sitemap) | `astro.config.mjs` e `public/robots.txt` |
| Textos da página inicial (atendimentos, temas, FAQ) | `src/pages/index.astro` |
| Cores e fontes | `src/styles/global.css` |
| Posts do blog | `src/content/blog/*.md` |

Para um novo post, crie um `.md` em `src/content/blog/` com:

```md
---
titulo: Título do post
resumo: Uma frase que aparece na listagem e na meta description.
data: 2026-12-01
rascunho: false
---
```

## Estrutura

- Página única com âncoras: Sobre, Atendimento, Como funciona, Dúvidas, Contato
- Blog com content collections
- SEO: canonical, Open Graph, sitemap, robots.txt e dados estruturados (schema.org `ProfessionalService`)
- Botão flutuante de WhatsApp e aviso de crise (CVV 188 / SAMU 192) no rodapé
- Sem depoimentos de pacientes nem promessa de resultado, seguindo as orientações do CFP sobre publicidade

## Publicação

Funciona em qualquer hospedagem estática (Vercel, Netlify, Cloudflare Pages). Comando de build `npm run build`, pasta de saída `dist`.
