// Ornament.jsx — small reusable decorative bits
const Ornament = ({ glyph = '\u2766' }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, margin: '0 auto' }}>
    <span style={{ width: 36, height: 1, background: '#C8C0AC' }}></span>
    <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#8A8275', fontSize: 16, lineHeight: 1 }}>{glyph}</span>
    <span style={{ width: 36, height: 1, background: '#C8C0AC' }}></span>
  </div>
);

const Eyebrow = ({ children, style }) => (
  <div style={{
    fontFamily: "'IBM Plex Sans Thai', sans-serif",
    fontSize: 10, letterSpacing: '0.32em', textTransform: 'uppercase',
    color: '#8A8275', fontWeight: 500, ...style,
  }}>{children}</div>
);

window.Ornament = Ornament;
window.Eyebrow = Eyebrow;
