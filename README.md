# React Firebase MUI Boilerplate

Includes:

- Vite + React + TypeScript
- Firebase Firestore boilerplate
- Material UI
- TanStack Query
- React Router DOM
- ESLint + Prettier
- Husky + lint-staged pre-commit checks

## Setup

```bash
npm install
cp .env.example .env
npm run prepare
npm run dev
```

Fill `.env` with your Firebase config.

## Firebase users collection

The home page expects a `users` collection in Firestore with optional fields:

```ts
type User = {
  id: string;
  name?: string;
  email?: string;
  createdAt?: string;
};
```

## Structure

```txt
src/pages
  home
    api
      getUser.ts
    components
      home
        elements.ts
        Home.tsx
        index.ts
      index.ts
    HomePage.tsx
    routes.ts
```
