# Studio Bhopal — website

A Vite + React build for the studio's site: a home page (hero, about,
projects, contact) plus a shared template for the 4 individual project
pages. Smooth scroll via Lenis, a single restrained Three.js element in
the hero, minimal scroll reveals via a small IntersectionObserver hook.
No scroll-jacking, no GSAP ScrollTrigger pinning gimmicks — kept
deliberately calm per the brief.

## Run it

```
npm install
npm run dev
```

Build for production:

```
npm run build
```

Output goes to `dist/`, ready to deploy to Vercel, Netlify, Cloudflare
Pages, or any static host.

## Replacing placeholder content

Everything visual right now is placeholder line-art (`src/components/
PlaceholderArt.jsx`) standing in for real photography and scanned
drawings. Search the codebase for `PlaceholderArt` and swap each one
for a real `<img src="..." alt="..." />` once assets are ready. The
project facts, brief text, and "approach" copy in `src/data/
projects.js` are also placeholders — replace with real project detail
before launch.

The four projects currently defined:

- Residence 04 (residential)
- Vertex Commercial (commercial)
- Meridian Towers (large scale)
- Villa 02 (residential)

Add, remove, or rename projects by editing `src/data/projects.js` —
the project page template picks up any project automatically via its
`slug`.

## Before this goes live

A few things intentionally aren't done yet, per your instructions not
to host without them:

- **Custom domain.** Point it at wherever you deploy (Vercel/Netlify/
  Cloudflare Pages all support this in their dashboard).
- **Favicon.** A plain placeholder mark is in `public/favicon.svg` —
  replace with the studio's real mark.
- **"Made with AI" badge.** There isn't one here — this is a plain Vite
  project with no platform branding baked in.
- **Privacy Policy / Terms & Conditions.** Pages exist at
  `/privacy-policy` and `/terms` with clearly marked placeholder text.
  They need a lawyer's review before publishing, not just a copy-paste.
- **Contact form.** The form on the home page is UI only — it doesn't
  send anywhere yet. Wire it to a form backend (e.g. your own API
  endpoint, or a form-handling service) before launch, and update the
  privacy policy to match what it actually collects.
- **Real copy and photography.** No AI-generated images or AI-written
  project copy are used anywhere in this build — every image is
  placeholder line-art specifically so it's obvious what still needs a
  real photograph, and every paragraph is marked as placeholder text to
  be replaced with the studio's own words.

## SEO

Since SEO is the core of the online strategy, this build now includes:

- **Per-page metadata** (`src/lib/useDocumentHead.js`): title, meta
  description, canonical URL, and Open Graph/Twitter tags, set per
  route, pulling from `src/config/site.js` and each project's data.
- **`robots.txt`** and an auto-generated **`sitemap.xml`** (regenerated
  from `src/data/projects.js` on every `npm run build` via
  `scripts/generate-sitemap.js`, so it can't drift out of sync with
  real projects).
- **Structured data**: a `ProfessionalService` JSON-LD block in
  `index.html` describing the business for search engines.
- **Route-level code splitting** so each page loads its own bundle
  instead of one large file, which helps page-load speed (a ranking
  factor, and worth caring about even before organic traffic exists).

**One honest caveat:** this is a client-rendered React app (a plain
SPA). Google generally executes JavaScript when indexing, but a
prerendered or server-rendered build indexes faster and more reliably,
and matters more the more this site is expected to carry SEO weight.
If organic search becomes central to lead generation, it's worth
revisiting: either add a prerender step (e.g. `vite-plugin-ssg`-style
tooling) for the known routes, or move the marketing pages to a
static-first framework later. Not necessary to launch with, but flag
it if rankings matter from day one.

Two placeholder values to update everywhere before launch: the domain
in `src/config/site.js` (also duplicated in `scripts/generate-
sitemap.js`, `public/robots.txt`, and the JSON-LD in `index.html`) and
`SITE.socialImage` once a real share image exists.

## What was deliberately left out

Per your brief: no purple gradients, no pill-shaped buttons, no fake
testimonials, no invented statistics or counters, no vague hero
copy, no icon fonts/emoji, no em dashes in on-page copy, and no
over-the-top scroll animations. The only scroll effect is a single
fade-and-rise used consistently; the only 3D element is a slow,
non-interactive wireframe in the hero.
