import { Footer, Header, PageHero } from "../site-components";

const levels = [
  { number: "01", title: "Beginner", stage: "Building the foundation", note: "Hastas · Adami · Aduvus · Rythm", description: "A thoughtful introduction to Bharatanatyam for students beginning their journey." },
  { number: "02", title: "Intermediate", stage: "Deepening technique", note: "Pushpanjali · Jathiswaram · Intro to Abhinaya", description: "Develop control, coordination, and a richer understanding of movement vocabulary." },
  { number: "03", title: "Advanced", stage: "Preparing the artist", note: "Varnam · Thillana · Padams · Tala · Nattuvangam", description: "Advanced training that strengthens artistry, stage presence, and interpretive depth." },
];

export default function ClassesPage() {
  return (
    <main className="classes-page">
      <Header current="classes" />
      <PageHero number="03" label="Bharatanatyam classes" title="One tradition." accent="A lifelong journey." intro="Progressive instruction for every stage—from a dancer’s first steps through advanced artistic practice." />
      <section className="classes section">
        <div className="classes-top"><h2>Find your<br /><em>level.</em></h2><p>Small-group instruction and personal guidance help each dancer build strong technique at a purposeful pace.</p></div>
        <div className="class-list">
          {levels.map((item) => <article key={item.number}><span className="class-number">{item.number}</span><div><h3>{item.title}</h3><p className="class-syllabus">{item.note}</p><p className="class-description">{item.description}</p></div><span className="level">{item.stage}</span><span className="round-arrow">✦</span></article>)}
        </div>
        <p className="schedule-note">Class times, age guidance, and registration details coming soon.</p>
      </section>
      <Footer />
    </main>
  );
}
