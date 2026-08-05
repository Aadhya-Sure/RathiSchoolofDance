import { Footer, Header } from "../site-components";

export default function AboutPage() {
  return (
    <main className="about-page">
      <Header current="about" />
      <section className="bharatanatyam-intro about-art-form section">
        <div className="bharatanatyam-placeholder" role="img" aria-label="Historic South Indian temple associated with the cultural roots of Bharatanatyam" />
        <div className="bharatanatyam-copy">
          <div className="section-label"><span>01</span> The art form</div>
          <h1>What is<br /><em>Bharatanatyam?</em></h1>
          <p>Bharatanatyam is one of India’s major classical dance forms, rooted in the temples and courts of Tamil Nadu in South India. Its movement language brings together precise rhythmic footwork, sculptural poses, codified hand gestures called mudras, and expressive storytelling known as abhinaya. Traditionally accompanied by Carnatic music, the form unites pure dance, expression, and dramatic interpretation. Dancers train progressively in posture, rhythm, coordination, repertoire, and the relationship between movement and meaning. Over generations, Bharatanatyam moved from temple and court traditions to the modern stage and is now taught and performed around the world. Its practice remains both disciplined and evolving, carrying cultural memory forward through each dancer.</p>
        </div>
      </section>
      <section className="origins-section section">
        <div className="pandanallur-copy">
          <div className="section-label light"><span>02</span> Roots &amp; history</div>
          <h2>What does it<br /><em>originate from?</em></h2>
          <p>Bharatanatyam originates from the temple traditions of Tamil Nadu in South India, where dance, music, poetry, and devotion came together as a unified form of expression. Its movement vocabulary and dramatic language were shaped over centuries through hereditary artistic communities, royal courts, teachers, musicians, and performers. The form draws upon ideas recorded in ancient Indian texts on performance while continuing to live and evolve through the relationship between each teacher and student.</p>
        </div>
        <div className="origins-placeholder" role="img" aria-label="Placeholder for an image about the origins of Bharatanatyam">
          <span>Origins image<br />coming soon</span>
        </div>
      </section>
      <Footer />
    </main>
  );
}
