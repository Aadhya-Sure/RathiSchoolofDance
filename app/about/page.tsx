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
      <Footer />
    </main>
  );
}
