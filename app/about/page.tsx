import { Footer, Header, PageHero } from "../site-components";

export default function AboutPage() {
  return (
    <main className="about-page">
      <Header current="about" />
      <PageHero number="02" label="Our story" title="More than steps." accent="A lifelong language." intro="We honour the detail, discipline, and storytelling of Bharatanatyam while creating a joyful place for today’s dancers to grow." />
      <section className="director section">
        <div className="director-portrait" role="img" aria-label="Sheela Chandrashekar, Artistic Director" />
        <div className="director-copy"><div className="section-label light"><span>Artistic Director</span></div><h2>Sheela<br /><em>Chandrashekar</em></h2><p>Sheela Chandrashekar is a dedicated Bharatanatyam artist and educator whose teaching brings together rigorous classical foundations and a deeply personal approach to expression. She believes every dancer carries a unique story and guides students to develop clarity, confidence, and musical sensitivity.</p><p>Through Rathi School of Dance, Sheela is committed to nurturing the next generation of artists in Ottawa while building a welcoming community around the beauty and depth of Bharatanatyam.</p><small>Provisional biography — final details to be provided.</small></div>
      </section>
      <Footer />
    </main>
  );
}
