# AI Product Management Portfolio

Personal one-page portfolio focused on **AI Product Management**, **AI Solutions
Architecture** and **AI Engineering**.

The page positions the profile of Ezequiel Menegas as an AI Product Manager who
bridges product strategy, AI architecture and engineering to turn complex business
problems into practical, production-ready AI products.

## Stack

- [Next.js](https://nextjs.org) (App Router)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)

No backend, database, authentication or CMS — a fully static, server-rendered page.

## Features

- Single-page layout (no internal routes)
- Bilingual **English** (default) and **Português (Brasil)**
- Lightweight, client-side i18n with URL-based language (`/` and `/pt-BR`)
- Language persisted in `localStorage`, with `popstate`/refresh support
- Per-language SEO metadata, canonical URL and `hreflang` alternates
- Dark, premium and minimal design with subtle scroll animations
- Fully responsive (desktop → mobile) and accessible
- No external UI libraries — minimal JavaScript footprint

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for English and
[http://localhost:3000/pt-BR](http://localhost:3000/pt-BR) for Portuguese.

## Production

```bash
npm run build
npm start
```

## Deployment

Designed for a direct deploy on [Vercel](https://vercel.com).

Optionally set the environment variable `NEXT_PUBLIC_SITE_URL` to your production
domain so that canonical URLs, Open Graph and `hreflang` tags resolve to absolute
URLs.

## Configuration

Personal links are centralized in [`lib/site.ts`](./lib/site.ts):

- `LINKS.linkedin` — LinkedIn profile URL
- `LINKS.github` — GitHub profile URL
- `LINKS.email` — contact email

Replace these values before deploying. All copy lives in the locale files under
[`locales/`](./locales) (`en.json` and `pt-BR.json`).
