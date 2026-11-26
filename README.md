# Mundo Humano

Site do psicólogo Marcel Paulino (Campo Grande/MS), feito com [Astro](https://astro.build). Conteúdo migrado do antigo Google Sites em www.mundohumano.com.br.

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
| Nome, CRP, WhatsApp, link da agenda, endereço, horários | `src/config.ts` |
| URL final do site (canonical e sitemap) | `astro.config.mjs` e `public/robots.txt` |
| Textos da página inicial (atendimentos, temas, FAQ) | `src/pages/index.astro` |
| Cores e fontes | `src/styles/global.css` |
| Posts do blog | `src/content/blog/*.md` |

Os 2 posts de exemplo estão com `rascunho: true` (não aparecem no site). Para um novo post, crie um `.md` em `src/content/blog/` com:

```md
---
titulo: Título do post
resumo: Uma frase que aparece na listagem e na meta description.
data: 2026-12-01
rascunho: false
---
```

## Estrutura

- Página única com âncoras: Sobre, Abordagem (TCC), Atendimento, Como funciona, Dúvidas, Contato
- Agendamento via Tua Agenda + WhatsApp
- Blog com content collections (o link do menu só aparece quando houver post publicado)
- SEO: canonical, Open Graph, sitemap, robots.txt e dados estruturados (schema.org `ProfessionalService`)
- Botão flutuante de WhatsApp e aviso de crise (CVV 188 / SAMU 192) no rodapé
- Sem depoimentos de pacientes nem promessa de resultado, seguindo as orientações do CFP sobre publicidade

## Publicação (Vercel)

- Framework: Astro · Build: `npm run build` · Saída: `dist` (já definido em `vercel.json`)
- **Node 22.23+** (exigido pelo Astro 7). Em *Project Settings → Build and Deployment → Node.js Version*, use 22.x ou 24.x.
- Domínio: `www.mundohumano.com.br` como principal; `mundohumano.com.br` redireciona para o www (regra em `vercel.json`).

## Páginas e palavras-chave

| URL | Palavra-chave principal |
|---|---|
| `/` | psicólogo em Campo Grande |
| `/terapia-de-casal-campo-grande/` | terapia de casal Campo Grande |
| `/psicologo-lgbt-campo-grande/` | terapia inclusiva de gênero / psicólogo LGBT |
