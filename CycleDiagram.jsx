// CycleDiagram.jsx — interactive circular diagram of Build / Backup / Boost
const CycleDiagram = ({ active, onSelect }) => {
  const SANS = "'IBM Plex Sans Thai', sans-serif";
  const SERIF = "'Cormorant Garamond', Georgia, serif";

  // SVG layout: 480 x 480 viewBox, three nodes equally spaced around a circle
  const SIZE = 520;
  const CX = SIZE / 2;
  const CY = SIZE / 2;
  const R = 165; // orbit radius
  const NODE_R = 78;

  const positions = CYCLE_PHASES.map((p, i) => {
    // Place at top, bottom-right, bottom-left
    const angle = -Math.PI / 2 + i * (2 * Math.PI / 3);
    return {
      ...p,
      x: CX + R * Math.cos(angle),
      y: CY + R * Math.sin(angle),
      angle,
    };
  });

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: SIZE, margin: '0 auto', aspectRatio: '1/1' }}>
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} width="100%" height="100%" style={{ display: 'block', overflow: 'visible' }}>
        <defs>
          <filter id="paperShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="2" result="offsetblur"/>
            <feComponentTransfer><feFuncA type="linear" slope="0.06"/></feComponentTransfer>
            <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Outer orbit ring (hairline) */}
        <circle cx={CX} cy={CY} r={R} fill="none" stroke="#E5DFCE" strokeWidth="1" strokeDasharray="2 4"/>

        {/* Arrows along the orbit, midpoints between nodes */}
        {positions.map((pos, i) => {
          const next = positions[(i + 1) % 3];
          // arc midpoint
          const midAngle = (pos.angle + (i === 2 ? next.angle + 2 * Math.PI : next.angle)) / 2;
          const ax = CX + R * Math.cos(midAngle);
          const ay = CY + R * Math.sin(midAngle);
          // tangent direction (clockwise)
          const tx = -Math.sin(midAngle);
          const ty = Math.cos(midAngle);
          const headLen = 9;
          const wing = 5;
          // arrowhead tip
          const tipX = ax + tx * headLen / 2;
          const tipY = ay + ty * headLen / 2;
          const baseX = ax - tx * headLen / 2;
          const baseY = ay - ty * headLen / 2;
          // perpendicular for wings
          const px = -ty;
          const py = tx;
          return (
            <g key={`arr-${i}`}>
              <polygon
                points={`${tipX},${tipY} ${baseX + px*wing},${baseY + py*wing} ${baseX - px*wing},${baseY - py*wing}`}
                fill="#8A8275"
                opacity="0.6"
              />
            </g>
          );
        })}

        {/* Center mark */}
        <text x={CX} y={CY - 6} textAnchor="middle"
          fontFamily={SERIF} fontStyle="italic" fontSize="22" fill="#8A8275" fontWeight="400">
          the
        </text>
        <text x={CX} y={CY + 18} textAnchor="middle"
          fontFamily={SERIF} fontStyle="italic" fontSize="22" fill="#2C2A24" fontWeight="500">
          well-compounding
        </text>
        <text x={CX} y={CY + 40} textAnchor="middle"
          fontFamily={SERIF} fontStyle="italic" fontSize="22" fill="#2C2A24" fontWeight="500">
          cycle
        </text>

        {/* Nodes */}
        {positions.map((p) => {
          const isActive = active === p.id;
          return (
            <g key={p.id}
              style={{ cursor: 'pointer', transition: 'transform 320ms cubic-bezier(0.4,0,0.2,1)' }}
              onClick={() => onSelect(p.id)}
              onMouseEnter={() => onSelect(p.id)}
              transform={`translate(${p.x}, ${p.y})`}
            >
              <circle r={NODE_R + 6} fill="#F8F5EB" />
              <circle
                r={NODE_R}
                fill={isActive ? p.color : '#F8F5EB'}
                stroke={isActive ? '#2C2A24' : '#2C2A24'}
                strokeWidth={isActive ? '1.5' : '1'}
                style={{ transition: 'fill 320ms cubic-bezier(0.4,0,0.2,1)' }}
              />
              <text textAnchor="middle" y={-14}
                fontFamily={SERIF} fontStyle="italic" fontSize="14" fill="#5C574D" fontWeight="500">
                {p.number}
              </text>
              <text textAnchor="middle" y={16}
                fontFamily={SERIF} fontSize="32" fill="#2C2A24" fontWeight="500" letterSpacing="-0.01em">
                {p.label}
              </text>
              <text textAnchor="middle" y={36}
                fontFamily={SANS} fontSize="9" fill="#5C574D" letterSpacing="0.2em">
                {p.tagline.toUpperCase()}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};
window.CycleDiagram = CycleDiagram;
