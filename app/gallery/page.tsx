import { Footer, Header, PageHero } from "../site-components";

const albums = [
  { title: "RPs 2026", tag: "Performance series · 2026", image: "/gallery-rps-2026.jpg", position: "center center", description: "A collection celebrating the focus, colour, and shared energy of our 2026 RPs performances. This album will bring together stage moments, ensemble work, and the details that make every presentation memorable." },
  { title: "Year End 2026", tag: "Year-end showcase · 2026", image: "/gallery-year-end-2026.png", position: "center 58%", description: "A look back at the milestones of our 2026 dance year—from rehearsals and quiet preparation to the excitement of sharing a completed work with family, friends, and community." },
  { title: "Year End 2025", tag: "Year-end showcase · 2025", image: "/gallery-year-end-2025.png", position: "center 58%", description: "Highlights from a year of learning and growth. This album will feature the confidence, musicality, and friendships developed by our dancers throughout the 2025 season." },
  { title: "Year End 2024", tag: "Year-end showcase · 2024", image: "/gallery-year-end-2024.jpg", position: "center 64%", description: "Memories from our 2024 year-end celebration, capturing the expressive storytelling, precise movement, and joyful community at the heart of Rathi School of Dance." },
  { title: "RPs 2022", tag: "Performance series · 2022", position: "center 78%", description: "A special archive from our 2022 RPs performances. These photographs will preserve the artistry, dedication, and stage moments that continue to shape our school’s story." },
];

export default function GalleryPage() {
  return (
    <main>
      <Header current="gallery" />
      <PageHero number="04" label="Gallery" title="Stories in" accent="albums." intro="Explore performances, year-end celebrations, and the moments of dedication that connect our dance community." />
      <section className="albums section">
        <div className="albums-heading"><h2>Our dance<br /><em>archive.</em></h2><p>Five collections of movement, expression, and community. School photographs will be added to each album as they become available.</p></div>
        <div className="album-list">
          {albums.map((album, index) => (
            <article className="album" key={album.title}>
              <div className={`album-image ${album.image ? "has-image" : ""}`} style={{ backgroundImage: album.image ? `url('${album.image}')` : undefined, backgroundPosition: album.position }} role="img" aria-label={album.image ? `${album.title} album cover` : `${album.title} album cover placeholder`}><span>{String(index + 1).padStart(2, "0")}</span></div>
              <div className="album-copy"><p className="album-tag">{album.tag}</p><h3>{album.title}</h3><p>{album.description}</p><span className="album-status">Photos coming soon</span></div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
