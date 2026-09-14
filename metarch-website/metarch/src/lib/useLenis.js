import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Sets up smooth scrolling. Intentionally conservative settings —
 * this should feel like a slightly smoothed native scroll, not a
 * floaty "vibe coded" scroll-jack.
 */
export default function useLenis() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReduced) return undefined

    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    const id = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(id)
      lenis.destroy()
    }
  }, [])
}
