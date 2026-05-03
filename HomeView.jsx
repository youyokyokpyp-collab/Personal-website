// HomeView.jsx
const HomeView = ({ onNav, tweaks }) => {
  const SANS = "'IBM Plex Sans Thai', sans-serif";
  const SERIF = "'Cormorant Garamond', Georgia, serif";
  const [active, setActive] = React.useState('experience');

  const phase = CYCLE_PHASES.find(p => p.id === active);

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>

      {/* Masthead */}
      <header style={{ padding: '72px 0 56px', textAlign: 'center' }}>
        <Eyebrow style={{ marginBottom: 24 }}>volume i · a private notebook, made public</Eyebrow>
        <h1 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 'clamp(48px, 7.4vw, 92px)', lineHeight: 1, color: '#2C2A24', margin: '0 0 24px', letterSpacing: '-0.02em' }}>
          Today, I'm happy
        </h1>
        <Ornament glyph="❦"/>
        <p style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400, fontSize: 22, lineHeight: 1.55, color: '#5C574D', margin: '24px auto 0', maxWidth: 620 }}>
          Wealthgevity is a small, slow correspondence about money and time —
          and the strange, durable rules that govern both.
        </p>
      </header>

      {/* Philosophy: pull-quote section */}
      <section style={{ margin: '24px auto 96px', maxWidth: 760, textAlign: 'center', padding: '40px 0', borderTop: '1px solid #2C2A24', borderBottom: '1px solid #2C2A24' }}>
        <Eyebrow style={{ marginBottom: 16 }}>the philosophy</Eyebrow>
        <p style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 'clamp(24px, 2.4vw, 32px)', lineHeight: 1.35, color: '#2C2A24', margin: 0, fontStyle: 'italic' }}>
          The forces that build a fortune and the forces that build a long life
          obey the same quiet arithmetic. They reward patience, repetition, and the
          willingness to do small things for a long time.
        </p>
      </section>

      {/* The Well-Compounding Cycle — the centerpiece */}
      <section style={{ margin: '0 auto 96px' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <Eyebrow style={{ marginBottom: 14 }}>a theory · march 2026</Eyebrow>
          <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 'clamp(36px, 4.5vw, 56px)', lineHeight: 1.05, color: '#2C2A24', margin: '0 0 16px', letterSpacing: '-0.015em' }}>
            The <em>Dynamic Cycle.</em>
          </h2>
          <p style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 19, lineHeight: 1.5, color: '#5C574D', margin: '0 auto', maxWidth: 540 }}>
            Three movements that shape a life of meaning. Hover or tap each to explore.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
          gap: 64,
          alignItems: 'center',
          ...(window.innerWidth < 880 ? { gridTemplateColumns: '1fr' } : {}),
        }}>
          {/* Left: diagram */}
          <div>
            <CycleDiagram active={active} onSelect={setActive}/>
          </div>

          {/* Right: details for active phase */}
          <div style={{ minHeight: 480, paddingLeft: 0 }}>
            <PhaseDetail phase={phase}/>
          </div>
        </div>

        {/* Phase tabs row (mobile + reinforcement) */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 0, marginTop: 56, borderTop: '1px solid #E5DFCE', borderBottom: '1px solid #E5DFCE' }}>
          {CYCLE_PHASES.map((p) => (
            <button key={p.id}
              onClick={() => setActive(p.id)}
              style={{
                flex: 1, maxWidth: 280,
                background: active === p.id ? '#F1ECDC' : 'transparent',
                border: 'none',
                borderLeft: '1px solid #E5DFCE',
                padding: '20px 24px',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'background 200ms',
              }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 500, fontSize: 14, color: '#8A8275' }}>{p.number}</span>
                <span style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 22, color: '#2C2A24' }}>{p.label}</span>
              </div>
              <div style={{ fontFamily: SANS, fontSize: 11, color: '#5C574D', marginTop: 4, letterSpacing: '0.04em' }}>
                {p.tagline}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Closing CTA: read the essay */}
      <section style={{ textAlign: 'center', margin: '0 auto 64px', maxWidth: 620 }}>
        <Eyebrow style={{ marginBottom: 14 }}>read further</Eyebrow>
        <h3 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 32, color: '#2C2A24', margin: '0 0 14px', fontStyle: 'italic' }}>
          The full essay on the cycle.
        </h3>
        <p style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 18, color: '#5C574D', margin: '0 0 28px' }}>
          Nine minutes. A long lunch's worth of thinking, written down.
        </p>
        <a href="#" onClick={(e)=>{e.preventDefault(); onNav('article');}}
          style={{ fontFamily: SANS, fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#2C2A24', textDecoration: 'none', borderBottom: '1px solid #2C2A24', paddingBottom: 4 }}>
          Read the essay →
        </a>
      </section>
    </div>
  );
};

const PhaseDetail = ({ phase }) => {
  const SANS = "'IBM Plex Sans Thai', sans-serif";
  const SERIF = "'Cormorant Garamond', Georgia, serif";
  return (
    <div key={phase.id} style={{ animation: 'fadeIn 320ms ease-out' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 18 }}>
        <span style={{ display: 'inline-block', width: 14, height: 14, borderRadius: '50%', background: phase.color, border: '1px solid #2C2A24' }}></span>
        <Eyebrow>chapter {phase.number} · {phase.label.toLowerCase()}</Eyebrow>
      </div>
      <h3 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 'clamp(32px, 3.6vw, 44px)', lineHeight: 1.05, color: '#2C2A24', margin: '0 0 14px', letterSpacing: '-0.01em' }}>
        <em>{phase.tagline}</em>
      </h3>
      <p style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400, fontSize: 19, lineHeight: 1.5, color: '#5C574D', margin: '0 0 28px' }}>
        {phase.summary}
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        {phase.principles.map((pr, i) => (
          <li key={i} style={{ display: 'flex', gap: 14, alignItems: 'baseline', borderTop: '1px solid #E5DFCE', paddingTop: 14 }}>
            <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 14, color: '#8A8275', minWidth: 22 }}>
              {String(i + 1).padStart(2, '0')}.
            </span>
            <span style={{ fontFamily: SANS, fontSize: 15, lineHeight: 1.6, color: '#2C2A24' }}>
              {pr}
            </span>
          </li>
        ))}
      </ul>
      <blockquote style={{
        margin: 0, padding: '18px 22px', background: '#F1ECDC',
        borderLeft: `2px solid ${phase.color}`, borderRadius: 2,
        fontFamily: SERIF, fontStyle: 'italic', fontSize: 18, lineHeight: 1.5, color: '#2C2A24',
      }}>
        "{phase.quote}"
      </blockquote>
    </div>
  );
};

window.HomeView = HomeView;
