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
      <section className="about-school-hero home-school-section">
        <div className="about-school-copy">
          <h2>Our<br /><em>School.</em></h2>
          <p>Rathi School of Dance is dedicated to producing, developing, and presenting the classical Indian dance form Bharata Natyam in the Pandanallur style. The school was founded in 1980 by Artistic Director Sheela Chandrashekar, acclaimed for her excellence as a dancer, choreographer, and teacher. Founded with a vision to propagate this art form among future generations of Canadians, the school remains deeply committed to its teaching, practice, and performance. Following a regular school year from September through June, more than 60 students learn and deepen their Bharata Natyam skills as they progress toward their Ranga Pravesh or Arangetram. Over the last four decades, more than 40 students have completed their Ranga Pravesh through Rathi School of Dance, and Sheela continues to guide students intensively each year.</p>
        </div>
        <div className="about-image-placeholder" role="img" aria-label="Rathi School of Dance archive photograph" />
      </section>
      <section className="director section">
        <div className="director-portrait" role="img" aria-label="Artistic Director Sheela Chandrashekar" />
        <div className="director-copy"><div className="section-label light"><span>Artistic Director</span></div><h2>Sheela<br /><em>Chandrashekar</em></h2><p>Sheela Chandrashekar is a dedicated Bharatanatyam artist and educator whose teaching brings together rigorous classical foundations and a deeply personal approach to expression. She had her initial foundation in the art from the late Guru Sri Muthaiah Pillai of Pandanallur and later trained with the famous dancer couple from Bangalore, India, the late Prof. U.S. Krishna Rao and the late Mrs. Chandra Bhaga Devi. Under their able guidance and careful grooming, Sheela attained professional standards in performance and choreography. She also trained in Abhinaya under Asthaana Vidhushi Dr. Venkatalakshamma of Mysore. Through Rathi School of Dance, Sheela is committed to nurturing the next generation of artists in Ottawa while building a welcoming community around the beauty and depth of Bharatanatyam.</p></div>
      </section>
      <Footer />
    </main>
  );
}
