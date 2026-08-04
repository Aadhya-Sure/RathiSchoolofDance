import { Footer, Header } from "./site-components";

export default function Home() {
  return (
    <main>
      <Header current="home" />
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Ottawa’s home for Bharatanatyam</p>
          <h1 className="home-school-title"><span>Rathi</span><br />School of Dance</h1>
          <p className="intro">A welcoming home for dancers in Ottawa to discover confidence, culture, and the joy of movement.</p>
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
      <section className="home-intro section">
        <div className="section-label"><span>01</span> Rathi School of Dance</div>
        <div className="about-heading">
          <h2>Classical roots.<br /><em>A living art.</em></h2>
          <div><p>Learn Bharatanatyam in an encouraging environment where tradition, musicality, and individual expression grow together.</p><a className="dark-link" href="/about">Discover our story <span>→</span></a></div>
        </div>
        <div className="home-cards">
          <a href="/classes"><span>Training</span><h3>Four levels for every stage of your journey.</h3><b>View classes ↗</b></a>
          <a href="/gallery"><span>In motion</span><h3>See the colour, focus, and joy of our art.</h3><b>View gallery ↗</b></a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
