import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import useDocumentHead from '../lib/useDocumentHead.js'
import './Legal.css'

export default function Terms() {
  useDocumentHead({
    title: 'Terms & Conditions',
    description: 'Terms governing the use of the Metarch website.',
    path: '/terms',
  })

  return (
    <>
      <Nav />
      <section className="legal-page">
        <div className="container pad">
          <p className="annot">Legal</p>
          <h1>Terms &amp; Conditions</h1>
          <p className="legal-updated">Last updated: [add date before publishing]</p>

          <div className="legal-warning">
            This is placeholder text, not legal advice. Have a lawyer
            review and finalise this page before this site goes live,
            particularly the sections on project imagery and liability.
          </div>

          <h2>Use of this site</h2>
          <p>
            [State the basic terms for visiting the site, e.g. that
            content is for informational purposes and does not
            constitute a professional service agreement, which is
            instead governed by a separate signed contract per
            project.]
          </p>

          <h2>Project imagery and case studies</h2>
          <p>
            [Clarify ownership and usage rights for photography and
            drawings shown on the site, and note if any require client
            permission before publication.]
          </p>

          <h2>Intellectual property</h2>
          <p>
            [State that designs, drawings and written content on this
            site remain the studio&rsquo;s property and may not be
            reproduced without permission.]
          </p>

          <h2>Limitation of liability</h2>
          <p>
            [Standard limitation-of-liability language, reviewed by a
            lawyer familiar with the studio&rsquo;s jurisdiction.]
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms can be sent to{' '}
            <a href="mailto:studio@example.com">studio@example.com</a>.
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}
