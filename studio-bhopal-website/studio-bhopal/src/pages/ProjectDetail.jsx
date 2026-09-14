import { useParams, Link, Navigate } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Reveal from '../components/Reveal.jsx'
import PlaceholderArt from '../components/PlaceholderArt.jsx'
import useDocumentHead from '../lib/useDocumentHead.js'
import { getProjectBySlug, getAdjacentProject, projects } from '../data/projects.js'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  useDocumentHead(
    project
      ? {
          title: `${project.title}: ${project.category} in ${project.location}`,
          description: project.brief,
          path: `/projects/${project.slug}`,
        }
      : { title: 'Project not found' },
  )

  if (!project) {
    return <Navigate to="/" replace />
  }

  const seed = projects.findIndex((p) => p.slug === slug)
  const next = getAdjacentProject(slug)

  return (
    <>
      <Nav variant="on-photo" />

      <section className="p-hero">
        <div className="p-hero-img">
          <PlaceholderArt variant="elevation" seed={seed} />
        </div>
        <div className="p-hero-scrim" />
        <div className="container p-hero-copy">
          <div className="meta-row">
            <span>{project.category.toUpperCase()}</span>
            <span aria-hidden="true">&middot;</span>
            <span>{project.location.toUpperCase()}</span>
            <span aria-hidden="true">&middot;</span>
            <span>{project.year}</span>
          </div>
          <h1>{project.title}</h1>
        </div>
      </section>

      <section className="rule">
        <div className="container pad intro-grid">
          <Reveal>
            <div className="annot">The brief</div>
          </Reveal>
          <Reveal>
            <p>{project.brief}</p>
          </Reveal>
        </div>
      </section>

      <section className="rule">
        <div className="container" style={{ paddingTop: 56, paddingBottom: 56 }}>
          <Reveal as="div" className="details-strip">
            <div className="detail-cell">
              <div className="label">Type</div>
              <div className="val">{project.category}</div>
            </div>
            <div className="detail-cell">
              <div className="label">Location</div>
              <div className="val">{project.location}</div>
            </div>
            <div className="detail-cell">
              <div className="label">Year</div>
              <div className="val">{project.year}</div>
            </div>
            <div className="detail-cell">
              <div className="label">Scope</div>
              <div className="val">{project.scope}</div>
            </div>
            <div className="detail-cell">
              <div className="label">Area</div>
              <div className="val">{project.area}</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="rule">
        <div className="container pad">
          <Reveal as="div" className="drawings-head">
            <h2>Drawings</h2>
          </Reveal>
          <div className="drawings-grid">
            <Reveal as="div" className="drawing-item">
              <PlaceholderArt variant="plan" seed={seed} />
              <span>Plan</span>
            </Reveal>
            <Reveal as="div" className="drawing-item">
              <PlaceholderArt variant="section" seed={seed} />
              <span>Section</span>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="rule">
        <div className="container pad" style={{ paddingTop: 0 }}>
          <div className="process-grid">
            {project.approaches.map((a) => (
              <Reveal as="div" key={a.title} className="process-card">
                <div className="no">Approach</div>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="rule">
        <div className="container pad">
          <Reveal as="div" className="gal-head">
            <h2>The finished building</h2>
          </Reveal>
          <div className="gallery">
            <div className="g-item g1"><PlaceholderArt variant="interior" seed={seed} /></div>
            <div className="g-item g2"><PlaceholderArt variant="elevation" seed={seed + 1} /></div>
            <div className="g-item g3"><PlaceholderArt variant="interior" seed={seed + 2} /></div>
            <div className="g-item g4"><PlaceholderArt variant="massing" seed={seed + 1} /></div>
          </div>
        </div>
      </section>

      <Link to={`/projects/${next.slug}`} className="next-project">
        <div className="next-img">
          <PlaceholderArt variant="elevation" seed={seed + 2} />
        </div>
        <div className="next-scrim" />
        <div className="container next-copy">
          <div className="label">NEXT PROJECT &middot; {next.category.toUpperCase()}</div>
          <h2>
            <span>{next.title}</span>
            <span className="arrow" />
          </h2>
        </div>
      </Link>

      <Footer />
    </>
  )
}
