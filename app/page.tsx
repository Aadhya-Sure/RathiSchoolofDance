import { Footer, Header } from "./site-components";

export default function Home() {
  return (
    <main>
      <Header current="home" />
      <section className="hero">
        <div className="hero-copy">
          <h1 className="home-school-title"><span>Rathi</span><br />School of Dance</h1>
          <p className="intro">A school preserving the tradition in Ottawa for the past 40 years.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="/classes">Explore classes <span>→</span></a>
            <a className="text-link" href="/about">Our story <span>↘</span></a>
          </div>
          <div className="hero-foot"><span>OTTAWA, ONTARIO</span><span className="ornament">✦</span><span>BHARATANATYAM · ALL LEVELS</span></div>
        </div>
        <div className="hero-visual" role="img" aria-label="Classical Indian dancers performing on stage">
          <div className="sun-disc" /><div className="image-frame" /><div className="vertical-note">GRACE · STRENGTH · EXPRESSION</div>
        </div>
      </section>
      <section className="marquee" aria-label="School values"><span>DISCIPLINE</span><b>✦</b><span>JOY</span><b>✦</b><span>COMMUNITY</span><b>✦</b><span>ARTISTRY</span></section>
      <section className="bharatanatyam-intro section">
        <div className="bharatanatyam-placeholder" role="img" aria-label="Placeholder for a Bharatanatyam photograph">
          <div className="placeholder-mark">B</div>
          <span>Bharatanatyam image<br />coming soon</span>
        </div>
        <div className="bharatanatyam-copy">
          <div className="section-label"><span>01</span> The art form</div>
          <h2>What is<br /><em>Bharatanatyam?</em></h2>
          <p>Bharatanatyam is one of India’s major classical dance forms, rooted in the temples and courts of Tamil Nadu in South India. Its movement language brings together precise rhythmic footwork, sculptural poses, codified hand gestures called mudras, and expressive storytelling known as abhinaya. Traditionally accompanied by Carnatic music, the form unites pure dance, expression, and dramatic interpretation. Dancers train progressively in posture, rhythm, coordination, repertoire, and the relationship between movement and meaning. Over generations, Bharatanatyam moved from temple and court traditions to the modern stage and is now taught and performed around the world. Its practice remains both disciplined and evolving, carrying cultural memory forward through each dancer.</p>
        </div>
      </section>
      <section className="pandanallur-section section">
        <div className="pandanallur-copy">
          <div className="section-label light"><span>02</span> Our tradition</div>
          <h2>Pandanallur<br /><em>Style.</em></h2>
          <p>The Pandanallur style is a distinguished tradition within Bharatanatyam, admired for its clean lines, precise geometry, and measured elegance. Its choreography gives careful attention to posture, rhythmic clarity, and the graceful use of space. Students learn to balance strength and restraint while developing expressive storytelling through gesture and movement. At Rathi School of Dance, this approach provides a thoughtful foundation from which every dancer can grow in discipline, confidence, and artistry.</p>
        </div>
        <div className="pandanallur-placeholder" role="img" aria-label="Placeholder for a Pandanallur style photograph">
          <div className="placeholder-mark">P</div>
          <span>Pandanallur image<br />coming soon</span>
        </div>
      </section>
      <Footer />
    </main>
  );
}
