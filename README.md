# personal-site

Personal website. React + Vite + React Router. Plain CSS. No UI libraries.

## Setup

```bash
npm install
npm run dev
```

## Structure

```
src/
  pages/
    Home.jsx       ← name + list of links (index)
    About.jsx      ← who you are, interests
    Projects.jsx   ← project list
    Now.jsx        ← what you're working on right now
  App.jsx          ← routes
  main.jsx         ← entry point
  style.css        ← one global stylesheet
```

## Deploy

Works on Vercel, Netlify, Cloudflare Pages, GitHub Pages.

For Vercel: `vercel --prod`  
For GitHub Pages: set `base` in `vite.config.js` to your repo name.

## Philosophy

Overkill stack, monk aesthetic.
