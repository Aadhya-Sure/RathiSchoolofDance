import { Footer, Header, PageHero } from "../site-components";

export default function AboutPage() {
  return (
    <main>
      <Header current="about" />
      <PageHero number="02" label="Our story" title="More than steps." accent="A lifelong language." intro="We honour the detail, discipline, and storytelling of Bharatanatyam while creating a joyful place for today’s dancers to grow." />
      <section className="director section">
        <div className="director-portrait" role="img" aria-label="Artistic director portrait placeholder"><span>Portrait<br />coming soon</span></div>
        <div className="director-copy"><div className="section-label light"><span>Artistic Director</span></div><h2>Sheela<br /><em>Chandrashkhar</em></h2><p>Sheela Chandrashkhar is a dedicated Bharatanatyam artist and educator whose teaching brings together rigorous classical foundations and a deeply personal approach to expression. She believes every dancer carries a unique story and guides students to develop clarity, confidence, and musical sensitivity.</p><p>Through Rathi School of Dance, Sheela is committed to nurturing the next generation of artists in Ottawa while building a welcoming community around the beauty and depth of Bharatanatyam.</p><small>Provisional biography — final details to be provided.</small></div>
      </section>
      <section className="about section">
        <div className="about-heading"><h2>Tradition, taught<br />with <em>heart.</em></h2><p>At Rathi School of Dance, every class is a space to build confidence, deepen cultural connection, and discover an individual artistic voice. Our approach balances careful technique with curiosity, expression, and the shared joy of dance.</p></div>
        <div className="values">
          <article><strong>01</strong><h3>Rooted in tradition</h3><p>Thoughtful training grounded in technique, history, and cultural respect.</p></article>
          <article><strong>02</strong><h3>Made for every dancer</h3><p>A warm, encouraging environment where new and experienced dancers belong.</p></article>
          <article><strong>03</strong><h3>Built for the stage</h3><p>Confidence, musicality, and expression that shine in class and performance.</p></article>
        </div>
      </section>
      <Footer />
    </main>
  );
}
