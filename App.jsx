// App.jsx
const { useState, useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "paperWarmth": "cream",
  "showGrain": true,
  "columnWidth": 680,
  "accentColor": "#9AC39C"
}/*EDITMODE-END*/;

const App = () => {
  const [view, setView] = useState('home');
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  const navTo = (id) => { setView(id); window.scrollTo(0, 0); };

  // Apply background warmth at the body level
  useEffect(() => {
    const map = { cream: '#F8F5EB', paper: '#F1ECDC', sage: '#EFF3E8' };
    document.body.style.background = map[tweaks.paperWarmth] || '#F8F5EB';
  }, [tweaks.paperWarmth]);

  // Toggle grain
  useEffect(() => {
    const grain = document.getElementById('paperGrain');
    if (grain) grain.style.display = tweaks.showGrain ? 'block' : 'none';
  }, [tweaks.showGrain]);

  // Apply accent color
  useEffect(() => {
    document.documentElement.style.setProperty('--sage-300', tweaks.accentColor || '#9AC39C');
  }, [tweaks.accentColor]);

  return (
    <div>
      <Nav active={view} onNav={navTo}/>
      <main style={{ marginTop: 32 }}>
        {view === 'home' && <HomeView onNav={navTo} tweaks={tweaks}/>}
        {view === 'about' && <AboutView onNav={navTo}/>}
        {view === 'article' && <ArticleView onNav={navTo} tweaks={tweaks}/>}
      </main>
      <Footer onNav={navTo}/>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Paper">
          <TweakRadio
            label="Warmth"
            value={tweaks.paperWarmth}
            options={['cream', 'paper', 'sage']}
            onChange={(v) => setTweak('paperWarmth', v)}
          />
          <TweakToggle
            label="Paper grain"
            value={tweaks.showGrain}
            onChange={(v) => setTweak('showGrain', v)}
          />
        </TweakSection>
        <TweakSection label="Reading">
          <TweakSlider
            label="Column width"
            value={tweaks.columnWidth}
            min={560} max={820} step={20}
            onChange={(v) => setTweak('columnWidth', v)}
            unit="px"
          />
        </TweakSection>
        <TweakSection label="Accent">
          <TweakColor
            label="Accent"
            value={tweaks.accentColor}
            onChange={(v) => setTweak('accentColor', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
