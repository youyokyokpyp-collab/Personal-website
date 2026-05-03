// AboutView.jsx
const AboutView = ({ onNav }) => {
  const SANS = "'IBM Plex Sans Thai', sans-serif";
  const SERIF = "'Cormorant Garamond', Georgia, serif";

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 32px' }}>
      {/* Header */}
      <header style={{ padding: '64px 0 40px', textAlign: 'center' }}>
        <Eyebrow style={{ marginBottom: 18 }}>about the writer</Eyebrow>
        <h1 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 'clamp(44px, 6vw, 72px)', lineHeight: 1.02, color: '#2C2A24', margin: '0 0 16px', letterSpacing: '-0.02em' }}>
          A note from <em>You.YokYok.</em>
        </h1>
        <Ornament glyph="❦"/>
      </header>

      {/* Bio split: portrait card + prose */}
      <section style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.6fr',
        gap: 56,
        margin: '32px 0 96px',
        alignItems: 'start',
      }}>
        {/* Portrait card */}
        <div style={{
          border: '1px solid #E5DFCE', borderRadius: 4, padding: 24,
          background: '#F1ECDC',
        }}>
          <div style={{
            aspectRatio: '4/5', background: '#D0E9C9',
            border: '1px solid #2C2A24', borderRadius: 2,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative', overflow: 'hidden',
          }}>
            <svg width="100%" height="100%" viewBox="0 0 200 250" preserveAspectRatio="xMidYMid slice">
              <rect width="200" height="250" fill="#D0E9C9"/>
              {/* abstract editorial portrait — silhouette + plant */}
              <ellipse cx="100" cy="100" rx="42" ry="48" fill="#9AC39C"/>
              <path d="M 50 250 L 50 180 Q 100 150 150 180 L 150 250 Z" fill="#9AC39C"/>
              <path d="M 30 240 Q 35 200 25 170 Q 28 165 32 168 Q 38 195 40 240 Z" fill="#5C574D" opacity="0.4"/>
              <path d="M 25 230 Q 18 215 22 200 L 26 202 Q 25 215 30 232 Z" fill="#5C574D" opacity="0.35"/>
              <text x="100" y="245" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontStyle="italic" fontSize="11" fill="#2C2A24" opacity="0.6">portrait, by hand</text>
            </svg>
          </div>
          <div style={{ marginTop: 18, textAlign: 'center' }}>
            <div style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 22, color: '#2C2A24' }}>You.YokYok</div>
            <div style={{ fontFamily: SANS, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8A8275', marginTop: 4 }}>writer · investor · gardener</div>
          </div>
          <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid #E5DFCE', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: SANS, fontSize: 12, color: '#5C574D' }}>
              <span>Based</span><span>Singapore &amp; Chiang Mai</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: SANS, fontSize: 12, color: '#5C574D' }}>
              <span>Writes</span><span>every other Sunday</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: SANS, fontSize: 12, color: '#5C574D' }}>
              <span>Replies</span><span>to almost everyone</span>
            </div>
          </div>
        </div>

        {/* Prose */}
        <div>
          <p style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400, fontSize: 24, lineHeight: 1.5, color: '#2C2A24', margin: '0 0 32px' }}>
            {ABOUT.tagline}
          </p>
          {ABOUT.bio.map((para, i) => {
            if (i === 0) {
              return (
                <p key={i} style={{ fontFamily: SANS, fontSize: 17, lineHeight: 1.75, color: '#2C2A24', margin: '0 0 22px' }}>
                  <span style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 56, lineHeight: 0.85, float: 'left', marginRight: 10, marginTop: 4 }}>{para.charAt(0)}</span>
                  {para.slice(1)}
                </p>
              );
            }
            return (
              <p key={i} style={{ fontFamily: SANS, fontSize: 17, lineHeight: 1.75, color: '#2C2A24', margin: '0 0 22px' }}>
                {para}
              </p>
            );
          })}
        </div>
      </section>

      {/* Timeline — the You.YokYok experience */}
      <section style={{ margin: '0 auto 96px', maxWidth: 760 }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <Eyebrow style={{ marginBottom: 12 }}>a working chronology</Eyebrow>
          <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 'clamp(32px, 3.4vw, 44px)', color: '#2C2A24', margin: 0, letterSpacing: '-0.01em' }}>
            The <em>You.YokYok</em> experience.
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {ABOUT.timeline.map((t, i) => (
            <div key={t.year}
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr',
                gap: 32,
                padding: '28px 0',
                borderTop: '1px solid #E5DFCE',
                borderBottom: i === ABOUT.timeline.length - 1 ? '1px solid #E5DFCE' : 'none',
                alignItems: 'baseline',
              }}>
              <div style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 36, color: '#2C2A24', fontStyle: 'italic', letterSpacing: '-0.01em' }}>
                {t.year}
              </div>
              <div style={{ fontFamily: SANS, fontSize: 15.5, lineHeight: 1.7, color: '#2C2A24' }}>
                {t.event}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The shelf */}
      <section style={{ margin: '0 auto 96px', maxWidth: 880 }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <Eyebrow style={{ marginBottom: 12 }}>on the shelf</Eyebrow>
          <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 'clamp(28px, 3vw, 36px)', color: '#2C2A24', margin: 0, fontStyle: 'italic' }}>
            What I keep coming back to.
          </h2>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 0,
          borderTop: '1px solid #E5DFCE',
        }}>
          {ABOUT.shelf.map((book, i) => (
            <div key={i} style={{
              padding: '20px 24px',
              borderBottom: '1px solid #E5DFCE',
              borderRight: (i % 3 !== 2) ? '1px solid #E5DFCE' : 'none',
            }}>
              <div style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 19, color: '#2C2A24', lineHeight: 1.25 }}>
                {book.title}
              </div>
              <div style={{ fontFamily: SANS, fontSize: 12, color: '#8A8275', marginTop: 6, fontStyle: 'italic' }}>
                {book.author}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sign-off */}
      <section style={{ textAlign: 'center', margin: '0 auto 32px', maxWidth: 580 }}>
        <div style={{ borderTop: '1px solid #E5DFCE', borderBottom: '1px solid #E5DFCE', padding: '28px 0', margin: '0 0 24px' }}>
          <p style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 19, color: '#5C574D', margin: 0 }}>
            Drop me a line anytime. I write back to almost everyone, eventually.
          </p>
          <a href="mailto:y@yokyok.example"
            style={{ display: 'inline-block', marginTop: 18, fontFamily: SANS, fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#2C2A24', textDecoration: 'none', borderBottom: '1px solid #2C2A24', paddingBottom: 3 }}>
            y@yokyok.example →
          </a>
        </div>
        <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: 38, color: '#2C2A24', lineHeight: 1 }}>— y.</div>
      </section>
    </div>
  );
};
window.AboutView = AboutView;
