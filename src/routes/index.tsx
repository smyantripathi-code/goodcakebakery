import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const REVIEWS = [
  {
    text: 'Beautiful and delicious cake! We ordered a 6" Dulce de Leche cake with whipped frosting. The owner was so excited for us and to be part of the surprise!',
    author: 'Katelyn M.',
    stars: 5,
  },
  {
    text: 'They made our large order of cupcakes, brownies and muffins — beautiful and tasted incredible. Jay was professional, warm, and knowledgeable. Highly recommend this family-owned business.',
    author: 'David R.',
    stars: 5,
  },
  {
    text: 'The white cake had wedding cake frosting with pineapple filling. The chocolate cake was heavenly — light, fluffy, moist, and very delicious. Will re-order again and again!',
    author: 'Linda S.',
    stars: 5,
  },
]

const FEATURED = [
  {
    icon: '🍰',
    name: 'Tres Leches Cake',
    desc: 'Our most popular cake — soaked in three milks, layered with fruit filling or frosting, and finished to order.',
    badge: 'Best Seller',
  },
  {
    icon: '🥐',
    name: 'Churro Cheesecake',
    desc: 'Creamy cheesecake on a flaky croissant base, dusted with cinnamon sugar. Customers call it "absolute magic."',
    badge: 'Fan Favorite',
  },
  {
    icon: '🍮',
    name: 'Eclairs',
    desc: 'House-made, delicate choux pastry filled to order — our top-selling pastry case item.',
    badge: 'Top Seller',
  },
  {
    icon: '🍞',
    name: 'Conchas & Pan Dulce',
    desc: 'Traditional Mexican sweet bread baked fresh daily — airy, pillowy, and lightly sweet.',
    badge: 'Daily Fresh',
  },
  {
    icon: '🎂',
    name: 'Custom Cakes',
    desc: 'Birthday, wedding, quinceañera, gender reveal — every cake made to your vision and taste.',
    badge: 'Made to Order',
  },
  {
    icon: '🍩',
    name: 'Flan & Seasonal Treats',
    desc: 'Flan, pan de muerto, Rosca de Reyes, sugar skulls — rotating with the seasons and holidays.',
    badge: 'Seasonal',
  },
]

function StarRating({ count }: { count: number }) {
  return <div className="stars">{'★'.repeat(count)}</div>
}

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero__inner">
          <div>
            <div className="hero__tag">
              ✦ Panadería &amp; Pastelería · Downtown Tigard
            </div>
            <h1 className="hero__title">
              Baked with <em>heart</em>,<br />
              made for every<br />
              celebration.
            </h1>
            <p className="hero__sub">
              Good Cake Bakery brings together 30+ years of combined baking experience — traditional Mexican breads and pastries alongside custom cakes for every occasion. Family-owned and proudly rooted in Tigard since 2018.
            </p>
            <div className="hero__actions">
              <Link to="/menu" className="btn btn--gold">See Our Menu</Link>
              <Link href="tel:+15038109369" className="btn btn--secondary">Order a Custom Cake</Link>
            </div>
          </div>

          {/* Signature stamp */}
          <div className="hero__visual">
            <div className="stamp">
              <div className="stamp__year">Est. 2018</div>
              <div className="stamp__name">Good Cake<br />Bakery</div>
              <div className="stamp__location">Tigard · Oregon</div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="hero__stats">
            <div>
              <div className="hero__stat-value">30+</div>
              <div className="hero__stat-label">Years combined experience</div>
            </div>
            <div>
              <div className="hero__stat-value">4.5★</div>
              <div className="hero__stat-label">Google rating (200+ reviews)</div>
            </div>
            <div>
              <div className="hero__stat-value">200+</div>
              <div className="hero__stat-label">Rosca de Reyes made in a single season</div>
            </div>
            <div>
              <div className="hero__stat-value">2018</div>
              <div className="hero__stat-label">Serving Downtown Tigard</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="section">
        <div className="container">
          <div className="eyebrow">What We Bake</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', marginBottom: '12px' }}>
            Something sweet for every moment
          </h2>
          <p style={{ color: 'var(--text-light)', maxWidth: '560px', marginBottom: '48px' }}>
            From walk-in pastries to made-to-order celebration cakes — everything passes our family taste test before it leaves the kitchen.
          </p>

          <div className="menu-grid">
            {FEATURED.map((item) => (
              <div key={item.name} className="menu-card">
                <div className="menu-card__icon">{item.icon}</div>
                <div className="menu-card__name">{item.name}</div>
                <div className="menu-card__desc">{item.desc}</div>
                <div className="menu-card__footer">
                  <span></span>
                  <span className="menu-card__badge">{item.badge}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/menu" className="btn btn--outline">View Full Menu</Link>
          </div>
        </div>
      </section>

      {/* Story Teaser */}
      <section className="section section--alt">
        <div className="container">
          <div className="about-grid">
            <div>
              <div className="eyebrow">Our Story</div>
              <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', marginBottom: '20px' }}>
                Three generations of baking, one corner of Tigard
              </h2>
              <p className="about__body">
                Co-owners Jay Burton and Edgar Contreras bring over 30 years of combined baking experience to every loaf, pastry, and cake they create. Edgar is a third-generation baker who learned his craft at his grandfather's panadería in Michoacán, Mexico. Jay taught herself while stepping in as head baker at La Montana Market in Aloha — and never looked back.
              </p>
              <blockquote className="about__pull-quote">
                "What we quickly found is that there is a real sense of pride and community in Tigard."
                <footer style={{ fontSize: '0.85rem', fontStyle: 'normal', marginTop: '8px', color: 'var(--text-light)' }}>— Jay Burton, Co-owner</footer>
              </blockquote>
              <Link to="/about" className="btn btn--primary">Read Our Full Story</Link>
            </div>

            <div className="about__visual-box">
              <div className="about__baker">
                <div className="about__baker-icon">👩‍🍳</div>
                <div>
                  <div className="about__baker-name">Jay Burton</div>
                  <div className="about__baker-role">Co-Owner · Cake Baker</div>
                  <div className="about__baker-bio">13+ years of cake artistry. Former head baker at La Montana Market. Makes every cake as if it's for her own family.</div>
                </div>
              </div>
              <div className="about__baker">
                <div className="about__baker-icon">👨‍🍳</div>
                <div>
                  <div className="about__baker-name">Edgar Contreras</div>
                  <div className="about__baker-role">Co-Owner · Bread Baker</div>
                  <div className="about__baker-bio">Third-generation baker. Trained in his grandfather's panadería in Michoacán. Brings authentic Mexican breads and specialty pastries to every case.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section">
        <div className="container">
          <div className="eyebrow">What People Say</div>
          <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', marginBottom: '40px' }}>
            Loved by the Tigard community
          </h2>

          <div className="menu-grid">
            {REVIEWS.map((r, i) => (
              <div key={i} className="review-card">
                <StarRating count={r.stars} />
                <p className="review-card__text">"{r.text}"</p>
                <div className="review-card__author">— {r.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <div className="cta-band">
        <div className="eyebrow" style={{ color: 'var(--gold)' }}>Ready to Order?</div>
        <h2 style={{ color: 'var(--ivory)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: '12px 0 16px' }}>
          Let's bake something special together
        </h2>
        <p style={{ color: 'rgba(251,246,239,0.7)', maxWidth: '480px', margin: '0 auto 32px', fontSize: '1.02rem' }}>
          Custom cakes, cupcakes, pastries for events, and daily walk-in treats. Call us or stop by — we'd love to meet you.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/order" className="btn btn--gold">Order a Custom Cake</Link>
          <a href="tel:+15038109369" className="btn btn--secondary">(503) 810-9369</a>
        </div>
      </div>
    </>
  )
}
