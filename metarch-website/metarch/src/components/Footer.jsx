import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer rule">
      <div className="container">
        <div className="footer-top">
          <div className="footer-cols">
            <div>
              <span className="label">Studio</span>
              <a href="/#about">About</a>
              <a href="/#projects">Projects</a>
              <a href="/#contact">Contact</a>
            </div>
            <div>
              <span className="label">Contact</span>
              <a href="mailto:studio@example.com">studio@example.com</a>
              <a href="tel:+910000000000">+91 00000 00000</a>
              <span className="muted">Ranchi, Jharkhand</span>
            </div>
            <div>
              <span className="label">Legal</span>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms">Terms &amp; Conditions</Link>
            </div>
          </div>
        </div>
        <div className="footer-word">Metarch</div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Metarch</span>
          <span>Architecture &amp; Interiors</span>
        </div>
      </div>
    </footer>
  )
}
