import { useEffect } from 'react'
import { SITE } from '../config/site.js'

function setMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Sets document title + meta description + canonical + basic Open
 * Graph tags for the current route. This is a client-side-only
 * approach: it's enough for social share previews and for search
 * engines that execute JavaScript (Google generally does), but a
 * prerendered or server-rendered build will index faster and more
 * reliably. Worth revisiting (e.g. a prerender step, or moving
 * marketing pages to a static-first framework) once SEO performance
 * is being measured.
 */
export default function useDocumentHead({ title, description, path = '' }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE.name}` : SITE.name
    document.title = fullTitle

    const desc = description || SITE.description
    setMeta('name', 'description', desc)

    const url = `${SITE.url}${path}`
    setLink('canonical', url)

    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', desc)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', SITE.name)
    if (SITE.socialImage) {
      setMeta('property', 'og:image', `${SITE.url}${SITE.socialImage}`)
    }

    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', desc)
  }, [title, description, path])
}
