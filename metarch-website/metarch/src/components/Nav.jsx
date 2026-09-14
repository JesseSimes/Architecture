import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav({ variant = 'dark-on-light', backTo, backLabel = 'All projects' }) {
  return (
    <header className={`site-nav ${variant}`}>
      <div className="container site-nav-inner">
        <Link to="/" className="wordmark">Metarch</Link>
        {backTo ? (
          <Link to={backTo} className="back-link">
            <span className="back-bar" />
            <span>{backLabel}</span>
          </Link>
        ) : (
          <nav>
            <ul>
              <li><a href="/#about">About</a></li>
              <li><a href="/#projects">Projects</a></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
