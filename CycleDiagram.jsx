// CycleDiagram.jsx — The Dynamic Cycle: Experience / Reflection / Purpose & Action
const CycleDiagram = ({ active, onSelect }) => {
  const SANS = "'IBM Plex Sans Thai', sans-serif";
  const SERIF = "'Cormorant Garamond', Georgia, serif";

  const SIZE = 520;
  const CX = SIZE / 2;
  const CY = SIZE / 2;
  const R = 165;
  const NODE_R = 78;

  const positions = CYCLE_PHASES.map((p, i) => {
    const angle = -Math.PI / 2 + i * (2 * Math.PI / 3);
    return { ...p, x: CX + R * Math.cos(angle), y: CY + R * Math.sin(angle), angle };
  });

  // Venn circles representing Self / Community / Earth
  const VENN_R = 48;
  const vennCircles = [
    { key: 'self',      label: 'Self',      cx: CX - 26, cy: CY - 20, color: '#8DC63F' },
    { key: 'community', label: 'Community', cx: CX + 26, cy: CY - 20, color: '#00A651' },
    { key: 'earth',     label: 'Earth',     cx: CX,      cy: CY + 26, color: '#5B8C3E' },
  ];

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: SIZE, margin: '0 auto', aspectRatio: '1/1' }}>
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} width="100%" height="100%" style={{ display: 'block', overflow: 'visible' }}>
        <defs>
          <path id="dynArc"
            d={`M ${CX - 222} ${CY} A 222 222 0 0 1 ${CX + 222} ${CY}`}
            fill="none"/>
          <filter id="paperShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="2" result="offsetblur"/>
            <feComponentTransfer><feFuncA type="linear" slope="0.06"/></feComponentTransfer>
            <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Outer yellow ring */}
        <circle cx={CX} cy={CY} r={248} fill="#FDD835" stroke="#7B2D8B" strokeWidth="3"/>
        <circle cx={CX} cy={CY} r={200} fill="#F8F5EB"/>

        {/* "THE DYNAMIC CYCLE" curved along the top of the yellow ring */}
        <text fontFamily={SANS} fontSize="12" fontWeight="700" fill="#7B2D8B" letterSpacing="3">
          <textPath href="#dynArc" startOffset="50%" textAnchor="middle">THE DYNAMIC CYCLE</textPath>
        </text>

        {/* Orbit ring */}
        <circle cx={CX} cy={CY} r={R} fill="none" stroke="#E5DFCE" strokeWidth="1" strokeDasharray="2 4"/>

        {/* Directional arrows along orbit */}
        {positions.map((pos, i) => {
          const next = positions[(i + 1) % 3];
          const midAngle = (pos.angle + (i === 2 ? next.angle + 2 * Math.PI : next.angle)) / 2;
          const ax = CX + R * Math.cos(midAngle);
          const ay = CY + R * Math.sin(midAngle);
          const tx = -Math.sin(midAngle);
          const ty = Math.cos(midAngle);
          const headLen = 9, wing = 5;
          const tipX = ax + tx * headLen / 2, tipY = ay + ty * headLen / 2;
          const baseX = ax - tx * headLen / 2, baseY = ay - ty * headLen / 2;
          const px = -ty, py = tx;
          return (
            <polygon key={`arr-${i}`}
              points={`${tipX},${tipY} ${baseX + px*wing},${baseY + py*wing} ${baseX - px*wing},${baseY - py*wing}`}
              fill="#8DC63F" opacity="0.85"
            />
          );
        })}

        {/* Venn diagram: Self / Community / Earth */}
        {vennCircles.map(v => (
          <circle key={v.key} cx={v.cx} cy={v.cy} r={VENN_R} fill={v.color} opacity="0.5"/>
        ))}

        {/* Venn labels */}
        <text x={CX - 54} y={CY - 38} textAnchor="middle"
          fontFamily={SERIF} fontSize="12" fontWeight="600" fill="#2C2A24">Self</text>
        <text x={CX + 54} y={CY - 38} textAnchor="middle"
          fontFamily={SERIF} fontSize="12" fontWeight="600" fill="#2C2A24">Community</text>
        <text x={CX} y={CY + 62} textAnchor="middle"
          fontFamily={SERIF} fontSize="12" fontWeight="600" fill="#2C2A24">Earth</text>

        {/* VALUES at center overlap */}
        <text x={CX} y={CY + 6} textAnchor="middle"
          fontFamily={SERIF} fontSize="15" fill="#7B2D8B" fontWeight="700" letterSpacing="0.08em">VALUES</text>

        {/* Phase nodes */}
        {positions.map((p) => {
          const isActive = active === p.id;
          const parts = p.label.split(' & ');
          const isLong = parts.length > 1;
          return (
            <g key={p.id}
              style={{ cursor: 'pointer' }}
              onClick={() => onSelect(p.id)}
              onMouseEnter={() => onSelect(p.id)}
              transform={`translate(${p.x}, ${p.y})`}>
              <circle r={NODE_R + 6} fill="#F8F5EB"/>
              <circle r={NODE_R}
                fill={isActive ? p.color : '#F8F5EB'}
                stroke={isActive ? '#7B2D8B' : '#2C2A24'}
                strokeWidth={isActive ? '2' : '1'}
                style={{ transition: 'fill 320ms cubic-bezier(0.4,0,0.2,1)' }}/>
              <text textAnchor="middle" y={-16}
                fontFamily={SERIF} fontStyle="italic" fontSize="13" fill="#5C574D" fontWeight="500">
                {p.number}
              </text>
              {isLong ? (
                <>
                  <text textAnchor="middle" y={8}
                    fontFamily={SERIF} fontSize="22" fill="#2C2A24" fontWeight="500">
                    {parts[0]}
                  </text>
                  <text textAnchor="middle" y={30}
                    fontFamily={SERIF} fontSize="22" fill="#2C2A24" fontWeight="500">
                    {'& ' + parts[1]}
                  </text>
                </>
              ) : (
                <text textAnchor="middle" y={18}
                  fontFamily={SERIF} fontSize="28" fill="#2C2A24" fontWeight="500" letterSpacing="-0.01em">
                  {p.label}
                </text>
              )}
              <text textAnchor="middle" y={isLong ? 46 : 38}
                fontFamily={SANS} fontSize="8" fill="#5C574D" letterSpacing="0.15em">
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
