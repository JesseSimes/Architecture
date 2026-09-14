import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import useDocumentHead from '../lib/useDocumentHead.js'
import './Legal.css'

export default function PrivacyPolicy() {
  useDocumentHead({
    title: 'Privacy Policy',
    description: 'How Metarch collects and uses information submitted through this site.',
    path: '/privacy-policy',
  })

  return (
    <>
      <Nav />
      <section className="legal-page">
        <div className="container pad">
          <p className="annot">Legal</p>
          <h1>Privacy Policy</h1>
          <p className="legal-updated">Last updated: [add date before publishing]</p>

          <div className="legal-warning">
            This is placeholder text, not legal advice. Have a lawyer
            review and finalise this page before this site goes live,
            covering the studio&rsquo;s actual data practices, contact form
            handling, and any analytics or cookies in use.
          </div>

          <h2>What we collect</h2>
          <p>
            [List what is actually collected: contact form submissions
            (name, email, message), email correspondence, and any
            analytics data such as page views. Remove anything not
            actually collected.]
          </p>

          <h2>How we use it</h2>
          <p>
            [Explain that enquiry details are used only to respond to
            the enquiry, and are not sold or shared with third parties,
            if that is accurate.]
          </p>

          <h2>Cookies and analytics</h2>
          <p>
            [State plainly whether this site uses cookies or an
            analytics tool, and name the tool if so, e.g. a
            privacy-respecting analytics service.]
          </p>

          <h2>Data retention</h2>
          <p>
            [State how long enquiry data is kept and how someone can
            request it be deleted.]
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy can be sent to{' '}
            <a href="mailto:studio@example.com">studio@example.com</a>.
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}
