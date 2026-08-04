import { Footer, Header } from "../site-components";

export default function AboutPage() {
  return (
    <main className="about-page">
      <Header current="about" />
      <section className="about-school-hero">
        <div className="about-school-copy">
          <div className="section-label light"><span>02</span> Our school</div>
          <h1>Rathi School<br /><em>of Dance.</em></h1>
          <p>Rathi School of Dance is dedicated to producing, developing, and presenting the classical Indian dance form Bharata Natyam in the Pandanallur style. The school was founded in 1980 by Artistic Director Sheela Chandrashekar, acclaimed for her excellence as a dancer, choreographer, and teacher.</p>
          <p>Founded with a vision to propagate this art form among future generations of Canadians, the school remains deeply committed to its teaching, practice, and performance.</p>
          <p>Following a regular school year from September through June, more than 60 students learn and deepen their Bharata Natyam skills as they progress toward their Ranga Pravesh or Arangetram. Over the last four decades, more than 40 students have completed their Ranga Pravesh through Rathi School of Dance, and Sheela continues to guide students intensively each year.</p>
        </div>
        <div className="about-image-placeholder" role="img" aria-label="Placeholder for a Rathi School of Dance archive photograph">
          <div className="placeholder-mark">R</div><span>School archive image<br />coming soon</span>
        </div>
      </section>
      <section className="director section">
        <div className="director-portrait" role="img" aria-label="Sheela Chandrashekar, Artistic Director" />
        <div className="director-copy"><div className="section-label light"><span>Artistic Director</span></div><h2>Sheela<br /><em>Chandrashekar</em></h2><p>Sheela Chandrashekar is a dedicated Bharatanatyam artist and educator whose teaching brings together rigorous classical foundations and a deeply personal approach to expression. She believes every dancer carries a unique story and guides students to develop clarity, confidence, and musical sensitivity.</p><p>Through Rathi School of Dance, Sheela is committed to nurturing the next generation of artists in Ottawa while building a welcoming community around the beauty and depth of Bharatanatyam.</p><small>Provisional biography — final details to be provided.</small></div>
      </section>
      <Footer />
    </main>
  );
}
