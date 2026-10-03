# Raul Spitaletti — Portfólio

Portfólio de criação de sites profissionais para empresas e negócios locais.
Site estático (HTML, CSS e JavaScript puro), pronto para GitHub Pages, Vercel ou Netlify.

## Estrutura

```
index.html                 página principal
assets/css/style.css       estilos
assets/js/data.js          ← projetos, contatos e textos (edite aqui)
assets/js/main.js          galeria, transições, menu e animações
assets/img/                foto do logo e imagens locais dos projetos
.nojekyll                  faz o GitHub Pages servir os arquivos sem processar
```

## Como editar

Tudo o que muda com frequência está em `assets/js/data.js`:

- `CONFIG` — nome, WhatsApp, Instagram, e-mail e mensagem padrão.
- `projects` — cada projeto da galeria (nome, descrição, link, cores, fotos).
  - `url: ''` deixa o botão desativado ("Em breve").
  - `screenshot` aceita um print real do site e substitui a prévia gerada.
- `services` e `reasons` — textos das seções de serviços e "Por que ter um site".

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `portfolio`).
2. Envie todos os arquivos desta pasta (mantendo as pastas).
3. No repositório: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`**.
4. Em alguns minutos o site fica em `https://SEU-USUARIO.github.io/portfolio/`.

Pelo terminal:

```bash
git init
git add .
git commit -m "Portfólio Raul Spitaletti"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/portfolio.git
git push -u origin main
```

## Testar no computador

Abra o `index.html` no navegador, ou rode um servidor local:

```bash
npx serve .
```

## Bibliotecas externas

- [GSAP](https://gsap.com/) + ScrollTrigger (via cdnjs) — animações
- Google Fonts — Inter Tight, Instrument Serif e Cormorant Garamond

© 2026 Raul Spitaletti
