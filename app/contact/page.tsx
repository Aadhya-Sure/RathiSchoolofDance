import { Footer, Header, PageHero } from "../site-components";

export default function ContactPage() {
  return (
    <main>
      <Header current="contact" />
      <PageHero number="05" label="Contact" title="Let’s begin a" accent="conversation." intro="Ask about classes, levels, registration, or finding the right place to begin your Bharatanatyam journey." />
      <section className="contact-section section">
        <div className="contact-details">
          <div className="section-label"><span>School details</span></div>
          <h2>Come dance<br /><em>with us.</em></h2>
          <p>Rathi School of Dance offers progressive Bharatanatyam training in a welcoming Ottawa community, from beginner foundations through post-Arangetram study.</p>
          <dl>
            <div><dt>Location</dt><dd>Ottawa, Ontario<br /><small>Studio address provided with registration</small></dd></div>
            <div><dt>Artistic Director</dt><dd>Sheela Chandrashekar</dd></div>
            <div><dt>Email</dt><dd><a href="mailto:aadhya.sure@gmail.com">aadhya.sure@gmail.com</a></dd></div>
            <div><dt>Phone</dt><dd>(613) 555-0148 <small>Placeholder</small></dd></div>
          </dl>
        </div>
        <div className="contact-form-wrap">
          <p className="form-kicker">Send a message</p>
          <h2>We’d love to<br />hear from <em>you.</em></h2>
          <form action="mailto:aadhya.sure@gmail.com" method="post" encType="text/plain">
            <label>Full name<input type="text" name="Name" required autoComplete="name" placeholder="Your name" /></label>
            <label>Email address<input type="email" name="Email" required autoComplete="email" placeholder="you@example.com" /></label>
            <label>Phone number <span>Optional</span><input type="tel" name="Phone" autoComplete="tel" placeholder="(613) 555-0123" /></label>
            <label>Message<textarea name="Message" required rows={6} placeholder="Tell us what you’d like to know…" /></label>
            <button className="button button-primary" type="submit">Compose message <span>→</span></button>
            <p className="form-note">This button opens your email application with the message addressed to us.</p>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
