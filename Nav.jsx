// Nav.jsx
const Nav = ({ active, onNav }) => {
  const SANS = "'IBM Plex Sans Thai', sans-serif";
  const SERIF = "'Cormorant Garamond', Georgia, serif";
  const items = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'article', label: 'Essay' },
  ];
  return (
    <nav style={{ padding: '28px 32px 0', maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 5 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 18, borderBottom: '1px solid #E5DFCE' }}>
        <a href="#" onClick={(e)=>{e.preventDefault(); onNav('home');}}
          style={{ textDecoration: 'none', color: '#2C2A24', display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 28, letterSpacing: '-0.005em' }}>
            Wealth<em>gevity</em>
          </span>
          <span style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#8A8275', marginTop: 6 }}>
            by you.yokyok · est. mmxxvi
          </span>
        </a>
        <div style={{ display: 'flex', gap: 32 }}>
          {items.map((it) => (
            <a key={it.id} href="#"
              onClick={(e)=>{e.preventDefault(); onNav(it.id);}}
              style={{
                fontFamily: SANS, fontSize: 11, textDecoration: 'none',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: active === it.id ? '#2C2A24' : '#8A8275',
                fontWeight: active === it.id ? 500 : 400,
                paddingBottom: 4,
                borderBottom: active === it.id ? '1px solid #2C2A24' : '1px solid transparent',
                transition: 'color 200ms, border-color 200ms',
              }}>
              {it.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
window.Nav = Nav;
