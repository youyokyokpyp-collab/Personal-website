// data.js — Wealthgevity content

const CYCLE_PHASES = [
  {
    id: 'build',
    label: 'Build',
    number: 'I.',
    tagline: 'Lay the foundation.',
    color: '#9AC39C',
    summary: "The deliberate work of accumulating — capital, habits, knowledge, relationships. Slow deposits into accounts that compound.",
    principles: [
      'Save before you spend, by automation, not willpower.',
      'Acquire one durable skill per decade.',
      'Plant relationships you would still want at seventy.',
      'Move your body daily; it is the only asset that depreciates if untouched.',
    ],
    quote: 'Most of life is laid down by the small, repeated act — not the grand gesture.',
  },
  {
    id: 'backup',
    label: 'Backup',
    number: 'II.',
    tagline: 'Protect what you have built.',
    color: '#B6DDCA',
    summary: "What is built must be defended — against shocks, vanity, drift, and time. Backup is not paranoia; it is humility about what you cannot foresee.",
    principles: [
      'A year of expenses in cash. Boring, then suddenly priceless.',
      'Insurance for the things you cannot afford to lose: health, home, income.',
      'Sleep. Annual physicals. The dentist. The soft tissue of longevity.',
      'A will, a folder, a single trusted person who knows where everything is.',
    ],
    quote: 'Caution is not the opposite of courage; it is the soil in which courage grows.',
  },
  {
    id: 'boost',
    label: 'Boost',
    number: 'III.',
    tagline: 'Spend on what compounds.',
    color: '#D0E9C9',
    summary: "Once the foundation is laid and protected, the question becomes: what is worth accelerating? Energy, relationships, learning — these are the assets that pay back in years, not months.",
    principles: [
      'Invest in your own learning before any other asset class.',
      'Spend lavishly on time with people you love.',
      'Trade money for hours, never the reverse, past a certain age.',
      'Take the trip while your knees still work.',
    ],
    quote: 'The best returns come from buying back your own time, and giving it away.',
  },
];

const ABOUT = {
  name: 'You.YokYok',
  shortName: 'y.',
  tagline: 'A quiet correspondence between money and time.',
  bio: [
    "I am a writer, a long-time investor, and a reluctant student of healthspan. For most of my career I worked in the unglamorous corners of finance — credit, fixed income, the patient end of the business — and I learned, slowly, that the same instincts that made me a passable investor were the ones quietly making me a healthier person.",
    "Wealthgevity began as a private notebook. It is now a public one. I publish one essay every other Sunday, and a longer piece every season. There is no advertising, no affiliate links, and no algorithm.",
    "I write the way I would talk to a friend who is a few years behind me on the road — slowly, honestly, and without pretending I have it all figured out.",
  ],
  timeline: [
    { year: '2003', event: 'Began my career on a credit desk in Singapore. Bought my first index fund the same year, almost by accident.' },
    { year: '2011', event: 'A health scare in my mid-thirties rewrites the way I think about time. Begin keeping a running journal of what I learn about both money and the body.' },
    { year: '2017', event: 'Step away from full-time markets. Start managing a small private fund, alongside a personal practice of strength training and long walks.' },
    { year: '2022', event: 'Begin writing privately to friends about the strange overlap I keep noticing between portfolio construction and physiology.' },
    { year: '2026', event: 'Wealthgevity goes public. The well-compounding cycle becomes its central idea.' },
  ],
  shelf: [
    { title: 'The Psychology of Money', author: 'Morgan Housel' },
    { title: 'Outlive', author: 'Peter Attia' },
    { title: 'Letters from a Stoic', author: 'Seneca' },
    { title: 'A Random Walk Down Wall Street', author: 'Burton Malkiel' },
    { title: 'Being Mortal', author: 'Atul Gawande' },
    { title: 'The Long View', author: 'Matthew Kelly' },
  ],
};

const ARTICLE = {
  id: 'well-compounding-cycle',
  eyebrow: 'essays · spring 2026',
  title: 'The well-compounding cycle.',
  subtitle: 'Why the same three motions — build, backup, boost — apply to a portfolio and to a body.',
  date: 'March 22, 2026',
  minutes: 9,
  body: [
    { type: 'p', text: "There is a particular kind of restlessness that hits in the middle of a career, somewhere between thirty-five and fifty, when you suddenly realize that the spreadsheet of your life has more rows than you previously thought. Most of those rows are about money. A surprising number of them are about your body. And — this is the part that took me an embarrassing length of time to see — they tend to behave the same way." },
    { type: 'p', text: "I have come to think of it as the well-compounding cycle. It has three motions, and they happen, ideally, in this order: you build, you backup, you boost. Then, gently, you start again." },
    { type: 'h2', text: 'I. Build' },
    { type: 'p', text: "Building is the long, unglamorous work of accumulating things that compound. A portfolio of low-cost index funds. A reading habit. A standing weekly call with a friend. Twenty minutes of strength training, three times a week. The point is not the size of any single act — it is the repetition." },
    { type: 'p', text: "The hard part of building is that, for a long time, the chart looks flat. You cannot see compounding while you are inside it. You can only see it from the porch, thirty years later, when someone younger asks you how you did it and you have to invent a story because the truth is: you didn't really do anything. You just kept doing the small thing." },
    { type: 'pullquote', text: 'You cannot see compounding while you are inside it. You can only see it from the porch.' },
    { type: 'h2', text: 'II. Backup' },
    { type: 'p', text: "Building is intoxicating. Backup is dull. And yet I have watched more lives blown sideways by the absence of backup than by any failure to build. The cousin who lost a decade of savings to an uninsured car accident. The friend who let an annual physical slip for five years and found something that should have been caught at three." },
    { type: 'p', text: "Backup is the part of the cycle where you accept, with some humility, that you cannot foresee what is coming. The world will throw shocks at you. So you keep a year of expenses in cash. You buy the boring insurance. You sleep eight hours. You see the dentist. You write the will." },
    { type: 'p', text: "It is not glamorous. It is not the part of the cycle anyone writes books about. But it is the part that lets the building stay built." },
    { type: 'h2', text: 'III. Boost' },
    { type: 'p', text: "Once the foundation is laid and protected, a quieter, more interesting question arises: what is worth accelerating? This is the boost — and it is where, in my experience, most of us get it wrong." },
    { type: 'p', text: "We boost the wrong things. We pour energy into a slightly larger house, a slightly newer car, a slightly more impressive title. These do not compound. They depreciate, mostly, the moment you take them home." },
    { type: 'p', text: "What compounds is the trip you take while your knees still work. The skill you learn that you will use for forty years. The hour you give to a person you love. The book that rearranges your inner architecture. These are the things worth boosting — and the only currency that buys them, past a certain age, is time." },
    { type: 'pullquote', text: 'The best returns come from buying back your own time, and giving it away.' },
    { type: 'h2', text: 'Then again, gently.' },
    { type: 'p', text: "The cycle is not a one-time loop. It is more like breathing. You build for a season, you backup for a season, you boost for a season. Then you build again, on the new, larger foundation. Each turn of the wheel deposits a little more — into your account, into your body, into the people who will sit at your table at seventy." },
    { type: 'p', text: "There is no urgency to it. That is the whole point. Compounding is, by definition, the practice of waiting. The good life, it turns out, is mostly a long act of patience interrupted by occasional bursts of joy." },
    { type: 'p', text: "Build slowly. Back yourself up. And then, when the time comes, boost the things that matter." },
  ],
  footnotes: [
    'I owe the underlying intuition here to a long lunch with a friend who is both a portfolio manager and a triathlete. He kept saying "it is the same problem" about everything. He was right.',
    'On insurance: I am not your financial advisor. But I have never met someone in their sixties who regretted buying the boring kind.',
  ],
  related: ['a-note-on-patience', 'long-view', 'the-slow-river'],
};

const RELATED_ESSAYS = {
  'a-note-on-patience': { title: 'Patience isn\u2019t waiting.', eyebrow: 'february', minutes: 4, snippet: "I used to think patience meant sitting still. Now I think it just means staying interested." },
  'long-view': { title: 'The long view.', eyebrow: 'january', minutes: 6, snippet: "What does it mean to plan thirty years out, in a world built around the next thirty seconds?" },
  'the-slow-river': { title: 'Money is a slow river.', eyebrow: 'november', minutes: 5, snippet: "The trick isn\u2019t to dam it. The trick is choosing where to plant." },
};

window.CYCLE_PHASES = CYCLE_PHASES;
window.ABOUT = ABOUT;
window.ARTICLE = ARTICLE;
window.RELATED_ESSAYS = RELATED_ESSAYS;
