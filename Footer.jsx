// Footer.jsx
const Footer = ({ onNav }) => {
  const SANS = "'IBM Plex Sans Thai', sans-serif";
  const SERIF = "'Cormorant Garamond', Georgia, serif";
  return (
    <footer style={{ maxWidth: 1100, margin: '128px auto 48px', padding: '0 32px' }}>
      <div style={{ borderTop: '1px solid #E5DFCE', paddingTop: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 19, color: '#2C2A24' }}>
            Wealth<em>gevity</em>
          </div>
          <div style={{ fontFamily: SANS, fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#8A8275', marginTop: 4 }}>
            est. mmxxvi · written by hand
          </div>
        </div>
        <div style={{ display: 'flex', gap: 28 }}>
          <a href="#" onClick={(e)=>{e.preventDefault(); onNav('home');}}
            style={{ fontFamily: SANS, fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#5C574D', textDecoration: 'none' }}>Home</a>
          <a href="#" onClick={(e)=>{e.preventDefault(); onNav('about');}}
            style={{ fontFamily: SANS, fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#5C574D', textDecoration: 'none' }}>About</a>
          <a href="mailto:y@yokyok.example"
            style={{ fontFamily: SANS, fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#5C574D', textDecoration: 'none' }}>Email</a>
          <a href="#"
            style={{ fontFamily: SANS, fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#5C574D', textDecoration: 'none' }}>RSS</a>
        </div>
      </div>
    </footer>
  );
};
window.Footer = Footer;
