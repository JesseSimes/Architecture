import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Reveal from '../components/Reveal.jsx'
import HeroScene from '../components/HeroScene.jsx'
import PlaceholderArt from '../components/PlaceholderArt.jsx'
import useDocumentHead from '../lib/useDocumentHead.js'
import { projects } from '../data/projects.js'
import { SITE } from '../config/site.js'
import './Home.css'

export default function Home() {
  useDocumentHead({
    title: 'Architecture & Interior Design in Ranchi',
    description: SITE.description,
    path: '/',
  })

  return (
    <>
      <Nav />

      <section className="hero">
        <div className="hero-scene"><HeroScene /></div>
        <div className="container hero-copy">
          <h1>
            Architecture for residences, commercial buildings and tall
            structural work.
          </h1>
          <p className="hero-sub">
            Metarch is an architecture and interior design practice.
            We take on one project at a time, from first sketch through
            to the finished building.
          </p>
          <a href="#projects" className="btn">
            <span>See the work</span>
            <span className="arrow" />
          </a>
        </div>
      </section>

      <section className="rule" id="about">
        <div className="container pad about-grid">
          <Reveal>
            <div className="annot">How we work</div>
          </Reveal>
          <Reveal as="div">
            <p className="about-lead">
              Every project moves through the same stages: a site read,
              a working sketch, a set of drawings, and a build we stay
              involved in until handover.
            </p>
            <p className="about-sub">
              We work across scales: a single-family home, a commercial
              block, or a larger structural project, with the same
              attention to plan, material and light applied at each
              one. Interiors are considered from the same brief as the
              building, not handed off separately.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="rule" id="projects">
        <div className="container pad">
          <Reveal as="div" className="proj-head">
            <h2>Projects</h2>
          </Reveal>
          <div className="proj-grid">
            {projects.map((project, i) => (
              <Reveal as="div" key={project.slug} className="proj-card-wrap">
                <Link to={`/projects/${project.slug}`} className="proj-card">
                  <div className="proj-visual">
                    <PlaceholderArt variant="massing" seed={i} />
                  </div>
                  <div className="proj-meta">
                    <div className="name">{project.title}</div>
                    <div className="line2">
                      <span>{project.category}</span>
                      <span>
                        {project.location.split(',')[0]}, {project.year}
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="rule" id="map">
        <div className="container pad">
          <Reveal as="div" className="proj-head">
            <h2>Where we&rsquo;ve built</h2>
          </Reveal>
          <Reveal as="div" className="map-wrap">
            <svg viewBox="0 0 1000 480" preserveAspectRatio="xMidYMid slice">
              <rect width="1000" height="480" fill="#E7E2D6" />
              <path
                d="M0 300 C 200 260, 350 340, 520 280 S 800 250, 1000 300"
                stroke="#C7C1B4"
                strokeWidth="26"
                fill="none"
              />
              <path
                d="M120 0 C 180 150, 140 300, 220 480"
                stroke="#C7C1B4"
                strokeWidth="18"
                fill="none"
              />
            </svg>
            {projects.map((project, i) => (
              <div
                key={project.slug}
                className="map-pin"
                style={{
                  top: `${28 + i * 14}%`,
                  left: `${22 + i * 18}%`,
                }}
              >
                <div className="map-tip">
                  {project.title}, {project.location}
                </div>
              </div>
            ))}
          </Reveal>
          <p className="map-caption">
            Each marker is a completed project. Hover a point, then open
            the project for the full write-up.
          </p>
        </div>
      </section>

      <section className="rule" id="contact">
        <div className="container pad">
          <div className="contact-grid">
            <Reveal>
              <h2>Have a project in mind?</h2>
              <p className="contact-sub">
                Tell us what you&rsquo;re building: a residence, a
                commercial space, or something larger. We reply to every
                enquiry within a working day.
              </p>
              <div className="contact-direct">
                <a href="mailto:studio@example.com">studio@example.com</a>
                <a href="tel:+910000000000">+91 00000 00000</a>
              </div>
            </Reveal>
            <Reveal as="form" className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <label>
                Name
                <input type="text" name="name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" required />
              </label>
              <label>
                Project type
                <select name="projectType" defaultValue="residential">
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="large-scale">Large scale</option>
                </select>
              </label>
              <label>
                Message
                <textarea name="message" rows="4" required />
              </label>
              <button type="submit" className="btn">
                <span>Send enquiry</span>
                <span className="arrow" />
              </button>
              <p className="form-note">
                This form is not yet connected to an inbox. Wire it to
                a form service or backend before launch.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
