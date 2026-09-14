// Regenerates public/sitemap.xml from src/data/projects.js.
// Runs automatically before `npm run build` (see package.json "prebuild").
import { writeFileSync } from 'node:fs'
import { projects } from '../src/data/projects.js'

const SITE_URL = 'https://example.com' // keep in sync with src/config/site.js

const staticRoutes = ['/', '/privacy-policy', '/terms']
const projectRoutes = projects.map((p) => `/projects/${p.slug}`)
const routes = [...staticRoutes, ...projectRoutes]

const urls = routes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route}</loc>
  </url>`,
  )
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml)
console.log(`sitemap.xml written with ${routes.length} URLs`)
