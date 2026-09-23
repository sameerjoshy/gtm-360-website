// Canonical references — the "go deeper" books, per layer.
// These are the optional deep-dive layer, never the default surface.

export const LAYER_REFERENCES = {
  L0: [
    { title: 'Playing to Win', author: 'Lafley & Martin', why: 'Strategy as a choice, not a plan' },
    { title: 'The Advantage', author: 'Patrick Lencioni', why: 'Why organizational health wins' },
  ],
  L1: [
    { title: 'Predictable Revenue', author: 'Aaron Ross', why: 'The original outbound system' },
    { title: 'Fanatical Prospecting', author: 'Jeb Blount', why: 'Discipline of the daily hunt' },
    { title: 'Obviously Awesome', author: 'April Dunford', why: 'Positioning that cuts through' },
  ],
  L2: [
    { title: 'SPIN Selling', author: 'Rackham', why: 'The questions that sell' },
    { title: 'Gap Selling', author: 'Keenan', why: 'Sell the problem, not the product' },
    { title: 'The Challenger Sale', author: 'Dixon & Adamson', why: 'Teaching, tailoring, taking control' },
  ],
  L3: [
    { title: 'The Customer Success Economy', author: 'Mehta et al.', why: 'CS as a growth engine' },
    { title: 'The Customer Success Professional\'s Handbook', author: 'Vaidyanathan & Mehta', why: 'The operating manual' },
  ],
  L4: [
    { title: 'ABM is B2B', author: 'Sangram Vajre', why: 'Account-based thinking' },
  ],
  L5: [
    { title: 'Monetizing Innovation', author: 'Ramanujam & Tacke', why: 'Price what customers value' },
    { title: 'The Strategy and Tactics of Pricing', author: 'Nagle & Müller', why: 'Pricing as strategy' },
  ],
  L6: [
    { title: 'The Sales Acceleration Formula', author: 'Mark Roberge', why: 'The system behind the funnel' },
    { title: 'Storytelling with Data', author: 'Cole Nussbaumer Knaflic', why: 'Make dashboards mean something' },
  ],
  L7: [
    { title: 'The Partnership Economy', author: 'Prill & Rao', why: 'Ecosystem as growth' },
  ],
  L8: [
    { title: 'Marketing Metrics', author: 'Farris et al.', why: 'The definitive metric handbook' },
  ],
  L9: [
    { title: 'The Referral Engine', author: 'John Jantsch', why: 'Word of mouth, engineered' },
  ],
}

export function getLayerReferences(layerId) {
  return LAYER_REFERENCES[layerId] || []
}