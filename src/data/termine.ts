export interface EventItem {
  date: string;
  endDate?: string; // ISO yyyy-mm-dd — dernier jour où l'événement/action est pertinent ; absent = jamais périmé
  title: string;
  time: string;
  category: 'maerkte' | 'workshops' | 'kunst' | 'jobs';
  categoryLabel: string;
  location: string;
  infoLink?: string;
  infoText?: string;
}

export const events: EventItem[] = [
  {
    date: "25.–26. April 2026",
    endDate: "2026-04-26",
    title: "Jungpflanzenmarkt am Wachtberg",
    time: "10:00 – 17:00 Uhr",
    category: "maerkte",
    categoryLabel: "Märkte",
    location: "Am Wachtberg 78, 3571 Gars am Kamp",
    infoLink: "/jungpflanzen",
    infoText: "Sorten & Details"
  },
  {
    date: "17.–19. April 2026",
    endDate: "2026-04-19",
    title: "Raritätenbörse im Botanischen Garten Wien",
    time: "09:30 – 18:00 Uhr",
    category: "maerkte",
    categoryLabel: "Märkte",
    location: "Botanischer Garten, Mechelgasse 2, 1030 Wien",
    infoLink: "https://botanischergarten.univie.ac.at",
    infoText: "Veranstalter ↗"
  },
  {
    date: "1. Mai 2026",
    endDate: "2026-05-01",
    title: "Arche Noah Jungpflanzenmarkt",
    time: "09:00 – 17:00 Uhr",
    category: "maerkte",
    categoryLabel: "Märkte",
    location: "Schloss Schiltern, Obere Str. 40, 3553 Schiltern",
    infoLink: "https://www.arche-noah.at",
    infoText: "Arche Noah ↗"
  },
  {
    date: "Mai & Juni 2026",
    endDate: "2026-06-30",
    title: "Workshops: Lebendige Böden & Humusaufbau",
    time: "Termine auf Anfrage & Ankündigung",
    category: "workshops",
    categoryLabel: "Workshops",
    location: "Feld & Schulungsraum am Wachtberg",
    infoLink: "#newsletter",
    infoText: "Via Newsletter ankündigen"
  },
  {
    date: "August 2026",
    endDate: "2026-08-31",
    title: "Landart-Symposium — Kunst in der Natur",
    time: "Ganztägig",
    category: "kunst",
    categoryLabel: "Kunst in der Natur",
    location: "Kulturstätte & Wachtberg",
    infoLink: "https://www.kunstindernatur.at",
    infoText: "kunstindernatur.at ↗"
  },
  {
    date: "26. September 2026",
    endDate: "2026-09-26",
    title: "Slowfood-Markt der Erde",
    time: "09:00 – 13:00 Uhr",
    category: "maerkte",
    categoryLabel: "Märkte",
    location: "Hauptplatz, 3571 Gars am Kamp",
    infoLink: "https://www.slowfoodwaldviertel.at/markt-der-erde",
    infoText: "Slow Food NÖ ↗"
  },
  {
    date: "10. & 24. Oktober 2026",
    endDate: "2026-10-24",
    title: "Slowfood-Markt der Erde",
    time: "09:00 – 13:00 Uhr",
    category: "maerkte",
    categoryLabel: "Märkte",
    location: "Hauptplatz, 3571 Gars am Kamp",
    infoLink: "https://www.slowfoodwaldviertel.at/markt-der-erde",
    infoText: "Slow Food NÖ ↗"
  },
  {
    date: "14. & 28. November 2026",
    endDate: "2026-11-28",
    title: "Slowfood-Markt der Erde",
    time: "09:00 – 13:00 Uhr",
    category: "maerkte",
    categoryLabel: "Märkte",
    location: "Hauptplatz, 3571 Gars am Kamp",
    infoLink: "https://www.slowfoodwaldviertel.at/markt-der-erde",
    infoText: "Slow Food NÖ ↗"
  },
  {
    date: "12. & 23. Dezember 2026",
    endDate: "2026-12-23",
    title: "Slowfood-Markt der Erde (Winter-Edition)",
    time: "09:00 – 13:00 Uhr / 14:00 – 18:00 Uhr",
    category: "maerkte",
    categoryLabel: "Märkte",
    location: "Hauptplatz, 3571 Gars am Kamp",
    infoLink: "https://www.slowfoodwaldviertel.at/markt-der-erde",
    infoText: "Slow Food NÖ ↗"
  },
  {
    date: "Saison 2026",
    // pas d'endDate : offre d'emploi valable toute la saison, jamais périmée automatiquement
    title: "Praktika & Saisonmitarbeit am Bio-Hof",
    time: "Vollzeit / Teilzeit nach Vereinbarung",
    category: "jobs",
    categoryLabel: "Praktika & Jobs",
    location: "Am Wachtberg 78, 3571 Gars am Kamp",
    infoLink: "mailto:office.biosain@gmail.com?subject=Bewerbung%20Praktikum",
    infoText: "Jetzt bewerben"
  }
];
