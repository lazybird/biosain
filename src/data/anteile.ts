export const SAISON = 2027;
export const ANZAHL_ERNTEANTEILE = 34;

export const anteile = [
  { label: "1 Anteil", personen: "ideal für 1–2 Personen", preis: 790 },
  { label: "2 Anteile", personen: "für 3–4 Personen", preis: 1070 },
  { label: "3 Anteile", personen: "für 5–6 Personen", preis: 1070 * 2 },
];

const euro = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
const euroCent = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", minimumFractionDigits: 2, maximumFractionDigits: 2 });

export const formatPreis = (preis: number) => euro.format(preis);
export const formatProWoche = (preis: number) => euroCent.format(preis / ANZAHL_ERNTEANTEILE);
