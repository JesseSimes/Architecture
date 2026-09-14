import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import useDocumentHead from '../lib/useDocumentHead.js'

export default function NotFound() {
  useDocumentHead({ title: 'Page not found', path: '/404' })

  return (
    <>
      <Nav />
      <section className="rule">
        <div className="container pad">
          <p className="annot">404</p>
          <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 48px)', marginBottom: 18 }}>
            This page doesn&rsquo;t exist.
          </h1>
          <p style={{ color: 'var(--concrete)', marginBottom: 30 }}>
            The page you&rsquo;re looking for may have moved or been renamed.
          </p>
          <Link to="/" className="btn">
            <span>Back to the homepage</span>
            <span className="arrow" />
          </Link>
        </div>
      </section>
      <Footer />
    </>
  )
}
