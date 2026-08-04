import { Footer, Header, PageHero } from "../site-components";

const moments = [
  { className: "gallery-main", label: "Stage & Story" },
  { className: "gallery-detail one", label: "Rhythm" },
  { className: "gallery-detail two", label: "Expression" },
  { className: "gallery-detail three", label: "Community" },
];

export default function GalleryPage() {
  return (
    <main>
      <Header current="gallery" />
      <PageHero number="04" label="Gallery" title="Moments in" accent="motion." intro="A glimpse into the colour, focus, and joy that define Bharatanatyam in the studio and on stage." />
      <section className="gallery section"><div className="gallery-top"><h2>Grace in every<br /><em>gesture.</em></h2><p>Our gallery currently features a selection of visual moments. Photographs from Rathi School of Dance will be added as they become available.</p></div><div className="gallery-grid">{moments.map((moment) => <figure className={moment.className} key={moment.label}><figcaption>{moment.label}</figcaption></figure>)}</div></section>
      <Footer />
    </main>
  );
}
