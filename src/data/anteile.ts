export const SAISON = 2027;
export const LIEFERWOCHEN = 33;
export const ANZAHL_ERNTEANTEILE = 34;
export const LIEFERZEITRAUM = "ca. März/April bis Mitte Dezember";
export const WIRTSCHAFTSJAHR = "Dezember 2026 bis November 2027";

// Beiträge pro Monat; Jahresbeitrag = 12 × Monatsbeitrag
export const anteile = [
  { label: "Kleiner Ernteanteil", personen: "ideal für den Single-Haushalt", basis: 66, richtwert: 75 },
  { label: "Ganzer Ernteanteil", personen: "ideal für 1–2 Personen oder Kleinfamilie", basis: 90, richtwert: 100 },
  { label: "Großer Ernteanteil", personen: "ideal für Gemüse-Tiger-Familien", basis: 180, richtwert: 200 },
];

export const zahlungsarten = [
  `Monatlicher Dauerauftrag (12×): selbstständig eingerichtet zum 5. jedes Monats (Jänner bis Dezember ${SAISON})`,
  `Einmalzahlung des gesamten Jahresbeitrags im Voraus bis spätestens 15. Jänner ${SAISON}`,
];

const euro = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

export const formatPreis = (preis: number) => euro.format(preis);
export const proJahr = (monat: number) => monat * 12;
