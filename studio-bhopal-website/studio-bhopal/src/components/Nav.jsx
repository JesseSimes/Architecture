import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav({ variant = 'dark-on-light' }) {
  return (
    <header className={`site-nav ${variant}`}>
      <div className="container site-nav-inner">
        <Link to="/" className="wordmark">Studio Bhopal</Link>
        <nav>
          <ul>
            <li><a href="/#about">About</a></li>
            <li><a href="/#projects">Projects</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
