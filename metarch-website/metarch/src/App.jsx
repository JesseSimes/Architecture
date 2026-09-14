import { Routes, Route, useLocation } from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react'
import useLenis from './lib/useLenis.js'

const Home = lazy(() => import('./pages/Home.jsx'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail.jsx'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'))
const Terms = lazy(() => import('./pages/Terms.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      let attempts = 0
      const tryScroll = () => {
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView()
        } else if (attempts < 20) {
          attempts += 1
          requestAnimationFrame(tryScroll)
        }
      }
      tryScroll()
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  useLenis()

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}
