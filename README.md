# IFP Multimédia — Fondation Francis Ngannou

Site vitrine de l'**Institut de Formation Professionnelle Multimédia** de la Fondation Francis Ngannou (Mairie de Batié, Région de l'Ouest, Cameroun) : inscriptions à la 8ème session (rentrée le Lundi 11 Janvier 2027), formations 100% gratuites, attestations agréées MINEFOP.

## Stack

- React 19 + TypeScript + Vite 8 (React Compiler activé)
- React Router 7 (4 pages : Accueil, Formations, Inscription, Contact)
- CSS vanilla (`src/index.css`), Material Symbols + polices Google

## Structure

```
src/
  lib/site.ts        # Coordonnées, session, rentrée, liens WhatsApp/Mail — source unique
  data/programs.ts   # Les 5 filières (modules, logiciels, débouchés, durée)
  components/        # Layout (topbar/footer), VideoModal
  pages/             # Accueil, Formations, Inscription, Contact
```

Les dates de session/rentrée se changent en un seul endroit : `src/lib/site.ts` (`session`, `rentree`).

## Développement

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc -b && vite build -> dist/
npm run lint
```

## Déploiement

Le build statique (`dist/`) peut être hébergé sur GitHub Pages, Netlify ou tout hébergeur
statique. Prévoir une règle de réécriture `/ → /index.html` pour les routes du router.
