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

### Firebase Hosting via GitHub Actions

This repo now deploys automatically to Firebase Hosting on every push to `main`.

1. Create a Firebase project (or use an existing one).
2. In GitHub, go to `Settings -> Secrets and variables -> Actions` and add:
  - `FIREBASE_PROJECT_ID`: your Firebase project id.
  - `FIREBASE_SERVICE_ACCOUNT`: service account JSON (entire JSON string).
3. Create the service account JSON from Firebase:
  - Firebase Console -> Project settings -> Service accounts -> Generate new private key.
4. Push to `main`; GitHub Actions will build and deploy to Firebase Hosting live channel.

Workflow file: `.github/workflows/firebase-hosting.yml`
Hosting config: `firebase.json`

### Other Platforms

Works on Vercel, Netlify, Cloudflare Pages, GitHub Pages.

For Vercel: `vercel --prod`  
For GitHub Pages: set `base` in `vite.config.js` to your repo name.

## Philosophy

Overkill stack, monk aesthetic.
