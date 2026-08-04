const classes = [
  { number: "01", title: "Bharatanatyam", level: "Foundations to advanced", note: "Rhythm · Expression · Tradition" },
  { number: "02", title: "Bollywood", level: "All levels", note: "Energy · Musicality · Joy" },
  { number: "03", title: "Kids’ Creative Dance", level: "Ages 5–10", note: "Confidence · Coordination · Play" },
];

const moments = [
  { className: "gallery-main", label: "Stage & Story" },
  { className: "gallery-detail one", label: "Rhythm" },
  { className: "gallery-detail two", label: "Expression" },
  { className: "gallery-detail three", label: "Community" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Rathi School of Dance home">
          <span className="brand-mark">R</span>
          <span>Rathi School <i>of</i> Dance</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#classes">Classes</a>
          <a href="#gallery">Gallery</a>
        </nav>
        <a className="header-cta" href="#classes">Find your class <span>↗</span></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Dance with heart. Move with purpose.</p>
          <h1>Where tradition<br />finds its <em>rhythm.</em></h1>
          <p className="intro">A welcoming home for dancers in Ottawa to discover confidence, culture, and the joy of movement.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#classes">Explore classes <span>→</span></a>
            <a className="text-link" href="#about">Our story <span>↘</span></a>
          </div>
          <div className="hero-foot">
            <span>OTTAWA, ONTARIO</span>
            <span className="ornament">✦</span>
            <span>ALL AGES · ALL LEVELS</span>
          </div>
        </div>
        <div className="hero-visual" role="img" aria-label="Classical Indian dancers performing on stage">
          <div className="sun-disc" />
          <div className="image-frame" />
          <div className="vertical-note">GRACE · STRENGTH · EXPRESSION</div>
        </div>
      </section>

      <section className="marquee" aria-label="School values">
        <span>DISCIPLINE</span><b>✦</b><span>JOY</span><b>✦</b><span>COMMUNITY</span><b>✦</b><span>ARTISTRY</span>
      </section>

      <section className="about section" id="about">
        <div className="section-label"><span>02</span> Our story</div>
        <div className="about-heading">
          <h2>More than steps.<br /><em>A lifelong language.</em></h2>
          <p>At Rathi School of Dance, every class is a space to grow. We honour the detail and storytelling of classical Indian dance while creating joyful, accessible experiences for today’s dancers.</p>
        </div>
        <div className="values">
          <article><strong>01</strong><h3>Rooted in tradition</h3><p>Thoughtful training grounded in technique, history, and cultural respect.</p></article>
          <article><strong>02</strong><h3>Made for every dancer</h3><p>A warm, encouraging environment where beginners and experienced dancers belong.</p></article>
          <article><strong>03</strong><h3>Built for the stage</h3><p>Confidence, musicality, and expression that shine in class and beyond.</p></article>
        </div>
      </section>

      <section className="classes section" id="classes">
        <div className="section-label light"><span>03</span> Classes</div>
        <div className="classes-top">
          <h2>Find the movement<br />that moves <em>you.</em></h2>
          <p>Small-group instruction. Personal guidance. A place to learn, connect, and thrive.</p>
        </div>
        <div className="class-list">
          {classes.map((item) => (
            <article key={item.number}>
              <span className="class-number">{item.number}</span>
              <div><h3>{item.title}</h3><p>{item.note}</p></div>
              <span className="level">{item.level}</span>
              <span className="round-arrow">↗</span>
            </article>
          ))}
        </div>
        <p className="schedule-note">Class times and registration details coming soon.</p>
      </section>

      <section className="gallery section" id="gallery">
        <div className="section-label"><span>04</span> Gallery</div>
        <div className="gallery-top">
          <h2>Moments in <em>motion.</em></h2>
          <p>A glimpse into the colour, focus, and joy that fill our studio and stage.</p>
        </div>
        <div className="gallery-grid">
          {moments.map((moment) => (
            <figure className={moment.className} key={moment.label}>
              <figcaption>{moment.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-brand"><span className="brand-mark">R</span><h2>Let’s dance, Ottawa.</h2></div>
        <p>Ready to find your rhythm?</p>
        <a className="button button-light" href="#classes">View classes <span>→</span></a>
        <div className="footer-bottom"><span>© 2026 Rathi School of Dance</span><span>Ottawa, Ontario</span><a href="#home">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
