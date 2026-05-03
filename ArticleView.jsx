// ArticleView.jsx
const ArticleView = ({ onNav, tweaks }) => {
  const SANS = "'IBM Plex Sans Thai', sans-serif";
  const SERIF = "'Cormorant Garamond', Georgia, serif";
  const a = ARTICLE;
  const measure = tweaks?.columnWidth || 680;

  // Reading progress
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? Math.min(1, h.scrollTop / max) : 0);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div>
      {/* Reading progress bar */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 2, background: 'transparent', zIndex: 50, pointerEvents: 'none' }}>
        <div style={{ height: '100%', width: `${progress * 100}%`, background: '#9AC39C', transition: 'width 80ms linear' }}/>
      </div>

      <article style={{ maxWidth: measure, margin: '36px auto 0', padding: '0 32px' }}>
        <button onClick={() => onNav('home')}
          style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: SANS, fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#5C574D', padding: '0 0 36px' }}>
          ← Back to home
        </button>

        {/* Header */}
        <header style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontFamily: SANS, fontSize: 10, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#8A8275', display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center', marginBottom: 22 }}>
            <span style={{ width: 28, height: 1, background: '#C8C0AC' }}></span>
            {a.eyebrow} · {a.date} · {a.minutes} min read
            <span style={{ width: 28, height: 1, background: '#C8C0AC' }}></span>
          </div>
          <h1 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 'clamp(40px, 5.4vw, 64px)', lineHeight: 1.02, color: '#2C2A24', margin: '0 0 22px', letterSpacing: '-0.02em' }}>
            {a.title.replace('.', '')}
            <span style={{ color: '#9AC39C' }}>.</span>
          </h1>
          <p style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400, fontSize: 22, lineHeight: 1.5, color: '#5C574D', margin: '0 auto', maxWidth: 540 }}>
            {a.subtitle}
          </p>
        </header>

        <Ornament glyph="❦"/>

        {/* Body */}
        <div style={{ marginTop: 48 }}>
          {a.body.map((block, i) => {
            if (block.type === 'p') {
              if (i === 0) {
                return (
                  <p key={i} style={{ fontFamily: SANS, fontSize: 17, lineHeight: 1.78, color: '#2C2A24', margin: '0 0 24px' }}>
                    <span style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 64, lineHeight: 0.82, float: 'left', marginRight: 12, marginTop: 6, color: '#2C2A24' }}>{block.text.charAt(0)}</span>
                    {block.text.slice(1)}
                  </p>
                );
              }
              return (
                <p key={i} style={{ fontFamily: SANS, fontSize: 17, lineHeight: 1.78, color: '#2C2A24', margin: '0 0 24px' }}>
                  {block.text}
                </p>
              );
            }
            if (block.type === 'h2') {
              return (
                <h2 key={i} style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 32, lineHeight: 1.2, color: '#2C2A24', margin: '52px 0 18px', letterSpacing: '-0.005em', fontStyle: 'italic' }}>
                  {block.text}
                </h2>
              );
            }
            if (block.type === 'pullquote') {
              return (
                <div key={i} style={{
                  borderTop: '1px solid #2C2A24', borderBottom: '1px solid #2C2A24',
                  padding: '32px 0', margin: '48px 0', textAlign: 'center',
                }}>
                  <div style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 500, fontSize: 28, lineHeight: 1.3, color: '#2C2A24', maxWidth: 520, margin: '0 auto' }}>
                    "{block.text}"
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>

        {/* Footnotes */}
        {a.footnotes && a.footnotes.length > 0 && (
          <section style={{ marginTop: 64, paddingTop: 28, borderTop: '1px solid #E5DFCE' }}>
            <Eyebrow style={{ marginBottom: 16 }}>footnotes</Eyebrow>
            <ol style={{ paddingLeft: 0, margin: 0, listStyle: 'none' }}>
              {a.footnotes.map((fn, i) => (
                <li key={i} style={{ display: 'flex', gap: 14, alignItems: 'baseline', margin: '0 0 14px' }}>
                  <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 14, color: '#8A8275', minWidth: 18 }}>{i + 1}.</span>
                  <span style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.65, color: '#5C574D' }}>{fn}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Sign-off */}
        <div style={{ marginTop: 64, paddingTop: 32, textAlign: 'center', borderTop: '1px solid #E5DFCE' }}>
          <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 600, fontSize: 36, color: '#2C2A24', lineHeight: 1 }}>— y.</div>
          <div style={{ fontFamily: SANS, fontSize: 10, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#8A8275', marginTop: 12 }}>
            thank you for reading
          </div>
        </div>
      </article>

      {/* Related — outside the prose column for breathing room */}
      <section style={{ maxWidth: 1100, margin: '96px auto 0', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <Eyebrow>more from the notebook</Eyebrow>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 0, borderTop: '1px solid #E5DFCE' }}>
          {a.related.map((id, i) => {
            const r = RELATED_ESSAYS[id];
            if (!r) return null;
            return (
              <article key={id} style={{
                padding: '24px 28px',
                borderRight: (i < a.related.length - 1) ? '1px solid #E5DFCE' : 'none',
                borderBottom: '1px solid #E5DFCE',
                cursor: 'pointer',
              }}>
                <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#8A8275', marginBottom: 10 }}>
                  {r.eyebrow} · {r.minutes} min
                </div>
                <h3 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 22, lineHeight: 1.2, color: '#2C2A24', margin: '0 0 8px', letterSpacing: '-0.005em' }}>
                  {r.title}
                </h3>
                <p style={{ fontFamily: SANS, fontSize: 13.5, lineHeight: 1.6, color: '#5C574D', margin: 0 }}>
                  {r.snippet}
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};
window.ArticleView = ArticleView;
