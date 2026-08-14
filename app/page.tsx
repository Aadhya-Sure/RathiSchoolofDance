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
          </div>
        </div>
        <div className="hero-visual" role="img" aria-label="Classical Indian dancers performing on stage">
          <div className="sun-disc" /><div className="image-frame" /><div className="vertical-note">GRACE · STRENGTH · EXPRESSION</div>
        </div>
      </section>
      <section className="marquee" aria-label="School values"><span>DISCIPLINE</span><b>✦</b><span>JOY</span><b>✦</b><span>COMMUNITY</span><b>✦</b><span>ARTISTRY</span></section>
      <section className="bharatanatyam-intro home-art-form section">
        <div className="bharatanatyam-placeholder" role="img" aria-label="Historic South Indian temple associated with the cultural roots of Bharatanatyam" />
        <div className="bharatanatyam-copy">
          <div className="section-label"><span>01</span> The art form</div>
          <h2>What is<br /><em>Bharatanatyam?</em></h2>
          <p>Bharatanatyam is one of India’s major classical dance forms, rooted in the temples and courts of Tamil Nadu in South India.</p>
          <div className="art-pillars">
            <article><h3>Nritta</h3><p>Nritta is pure dance, expressed through precise rhythmic movement without a narrative meaning. It highlights line, balance, coordination, and the intricate relationship between the dancer and the rhythm.</p></article>
            <article><h3>Natya</h3><p>Natya is dramatic representation, bringing characters, situations, and stories to life on stage. It combines movement, gesture, expression, and theatrical interpretation to communicate a complete narrative.</p></article>
            <article><h3>Nritya</h3><p>Nritya is expressive dance, where movement and emotion work together to interpret poetry and music. Through facial expression and hand gestures, the dancer conveys feeling, imagery, and meaning.</p></article>
          </div>
        </div>
      </section>
      <section className="origins-section section">
        <div className="pandanallur-copy">
          <div className="section-label light"><span>02</span> Roots &amp; history</div>
          <h2>What does it<br /><em>originate from?</em></h2>
          <p>Bharatanatyam originates from the temple traditions of Tamil Nadu in South India, where dance, music, poetry, and devotion came together as a unified form of expression. Its movement vocabulary and dramatic language were shaped over centuries through hereditary artistic communities, royal courts, teachers, musicians, and performers. The form draws upon ideas recorded in ancient Indian texts on performance while continuing to live and evolve through the relationship between each teacher and student.</p>
        </div>
        <div className="origins-placeholder has-image" role="img" aria-label="Nataraja sculpture symbolizing the origins of Bharatanatyam" />
      </section>
      <Footer />
    </main>
  );
}
