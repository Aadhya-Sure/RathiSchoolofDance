const links = [
  { key: "home", href: "/", label: "Home" },
  { key: "about", href: "/about", label: "About" },
  { key: "classes", href: "/classes", label: "Classes" },
  { key: "gallery", href: "/gallery", label: "Gallery" },
  { key: "contact", href: "/contact", label: "Contact" },
];

export function Header({ current }: { current: string }) {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Rathi School of Dance home"><span className="brand-mark">R</span><span>Rathi School <i>of</i> Dance</span></a>
      <nav aria-label="Main navigation">
        {links.map((link) => <a className={current === link.key ? "active" : ""} href={link.href} key={link.key} aria-current={current === link.key ? "page" : undefined}>{link.label}</a>)}
      </nav>
      <a className="header-cta" href="/contact">Get in touch <span>↗</span></a>
    </header>
  );
}

export function Footer() {
  return null;
}

export function PageHero({ number, label, title, accent, intro }: { number: string; label: string; title: string; accent: string; intro: string }) {
  return (
    <section className="page-hero">
      <div className="page-hero-copy"><div className="section-label light"><span>{number}</span> {label}</div><h1>{title}<br /><em>{accent}</em></h1><p>{intro}</p></div>
      <div className="page-hero-art" aria-hidden="true"><div className="sun-disc" /><div className="page-image" /></div>
    </section>
  );
}
