# Biosain — Documentation Éditoriale & Architecture du Contenu

Ce document constitue la référence centrale pour les contenus, l'arborescence et les variables du nouveau site **Biosain** (écosystème Nakôbio).

---

## 1. Vue d'Ensemble & Principes Éditoriaux

- **Voix de marque** : Chaleureuse, engagée, rigoureuse et ancrée dans le terroir du Wachtberg (Niederösterreich).
- **Langue du site public** : Allemand autrichien courant et soigné, avec écriture inclusive moderne (*Ernteteiler\*innen*, *Verbraucher\*innen*).
- **Publics cibles** :
  1. Consommateurs et familles de Vienne et du Waldviertel cherchant des légumes vivants et sains (adhérents Solawi).
  2. Jardiniers amateurs et maraîchers passionnés par les semences paysannes et variétés anciennes (acheteurs de jeunes plants).
  3. Apprenants, stagiaires et personnes en reconversion (ateliers, formations, stages pratiques).
- **Lien avec l'écosystème** : Partenaire et ancrage européen de **Nakôbio** (formation bio-intensive au Mali) et **Dalaseeds** (semences).

---

## 2. Arborescence & Matrice des Pages

| Route | Titre (DE) | Rôle & Objectif UX | Appel à l'action principal (CTA) |
|---|---|---|---|
| `/` | **Startseite** | Vitrine narrative, synthèse des 3 piliers, conversion rapide | `Ernteteiler*in werden` (`/solawi`) |
| `/solawi` | **Gemüse & Solawi** | Explication du modèle Solawi, transparence, tarifs, formulaire | `Anfrage absenden` (`#anmelden`) |
| `/jungpflanzen` | **Bio-Jungpflanzen** | Présentation des plants, téléchargement catalogue, dates marchés | `Sortenliste herunterladen (PDF)` |
| `/veranstaltungen` | **Veranstaltungen & Mitmachen** | Calendrier interactif des marchés/ateliers, opportunités stages/jobs | `Newsletter abonnieren` / `Bewerben` |
| `/ueber-uns` | **Über uns** | Histoire, équipe, esprit Osain, sol vivant, accès ferme | `Mehr über Nakobio erfahren` |
| `/impressum` | **Impressum** | Mentions légales conformes ECG/WKO (Autriche) | — |
| `/datenschutz` | **Datenschutz** | Politique de confidentialité RGPD/DSGVO | — |

---

## 3. Éléments Globaux (Header, Footer, Bannières)

### 3.1 Ankündigungsleiste (Bandeau Flash Top)
- **Position** : Au-dessus de la navigation sticky.
- **Rôle** : Annonce saisonnière urgente (marché de printemps, ouverture inscriptions Solawi).
- **Contenu actif (Printemps 2026)** :
  > 🌿 Jungpflanzenmarkt am Wachtberg: 25. & 26. April, 10–17 Uhr — [Sortenliste ansehen →](/jungpflanzen)
- **Variables alternatives configurables** :
  - *Inscriptions Solawi* : "Ernteanteile 2026 – Anmeldung ab sofort möglich! → [Jetzt anmelden](/solawi#anmelden)"
  - *Slowfood* : "Nächster Slowfood-Markt am 26. September in Gars → [Mehr erfahren](/veranstaltungen)"

### 3.2 Navigation
- **Logo / Wordmark** : `Biosain` (typographie serif avec accent ocre).
- **Liens** :
  1. `Gemüse & Solawi` → `/solawi`
  2. `Jungpflanzen` → `/jungpflanzen`
  3. `Veranstaltungen` → `/veranstaltungen`
  4. `Über uns` → `/ueber-uns`
- **Bouton CTA Header** : `Ernteteiler*in werden` → `/solawi#anmelden`

### 3.3 Pied de page (Footer)
- **Identité** :
  - **Biosain** — *Vielfalts-Marktgärtnerei am Wachtberg*
  - Tristan Toé
  - Am Wachtberg 78, 3571 Gars / Thunau am Kamp, Waldviertel, Niederösterreich
  - Tél : `0680 321 65 21` | E-mail : `office.biosain@gmail.com`
- **Navigation secondaire** : Solawi, Jungpflanzen, Veranstaltungen, Über uns, Impressum, Datenschutz.
- **Partenaires** :
  - [Nakôbio (nako.bio)](https://nako.bio)
  - [Dalaseeds (dalaseeds.org)](https://dalaseeds.org)
  - [Kunst in der Natur (kunstindernatur.at)](https://www.kunstindernatur.at)

---

## 4. Spécifications Détaillées par Page

### 4.1 Page d'Accueil (`/`)

#### Section Hero
- **Image de fond** : Grande photo immersive des légumes récoltés sur sol vivant au Wachtberg (`/images/hero-bg.jpg`).
- **Titre H1** : `Lebendige Böden. Samenfestes Gemüse.`
- **Sous-titre** : *Vielfalts-Marktgärtnerei am Wachtberg — frisches Gemüse, samenfeste Jungpflanzen und gelebte Gemeinschaft.*
- **Actions** :
  - Primaire : `Ernteteiler*in werden` (`/solawi#anmelden`)
  - Secondaire : `Newsletter abonnieren` (ancrage vers `#newsletter`)

#### Section Notre Vision (Einführung)
- **Eyebrow** : `Unsere Vision`
- **Titre H2** : *Gesunde Landwirtschaft — für die Erde und für die Menschen.*
- **Texte** :
  > Seit 2011 kultivieren wir am Wachtberg lebendige Böden, vielfältiges Gemüse und echte Beziehungen zwischen denen, die anbauen, und denen, die essen.
  > Unser Antrieb ruht auf drei Säulen: **lebendige Böden** ohne Kunstdünger und Pestizide, **samenfeste Sorten** — geschmackvoll, vital und standortangepasst — und ein **solidarisches Miteinander**, das über die Marktlogik hinausgeht.
- **Lien** : `Mehr über unsere Geschichte und Visionen →` (`/ueber-uns`)

#### Section Les 3 Piliers (Bandeau Thématique Ocre)
1. **Pilier 1 — Gemüse & Solawi** :
   - *Image* : `/images/card-solawi.jpg`
   - *Eyebrow* : `Ernteteilen`
   - *Titre H3* : `Gemüse & Solawi`
   - *Description* : Wöchentlich frisches, vielfältiges und saisonales Gemüse — direkt vom Feld, geerntet zum idealen Reifezeitpunkt. Von April bis November versorgen wir rund 90 Haushalte mit dem Besten, was der Wachtberg hervorbringt.
   - *Jauge dynamique* : Saison 2026 : **31 / 50** Ernteanteile vergeben (62%).
   - *CTA* : `So funktioniert es & Anmelden →` (`/solawi`)
2. **Pilier 2 — Jungpflanzen** :
   - *Image* : `/images/card-jungpflanzen.jpg`
   - *Eyebrow* : `Für euren Garten`
   - *Titre H3* : `Bio-Jungpflanzen`
   - *Description* : Alte und neue samenfeste Sorten — Tomaten, Paprika, Kräuter und vieles mehr. Aufgezogen am Wachtberg aus eigenem und ausgewähltem Saatgut für eure Gärten und Balkone.
   - *CTA* : `Sorten & Termine ansehen →` (`/jungpflanzen`)
3. **Pilier 3 — Lernen & Mitmachen** :
   - *Image* : `/images/card-veranstaltungen.jpg`
   - *Eyebrow* : `Workshops & Praktika`
   - *Titre H3* : `Lernen & Mitmachen`
   - *Description* : Workshops zu lebendigem Boden und Saatgut, Slowfood-Märkte und Kunst in der Natur. Wer tiefer einsteigen will, kann ein Praktikum oder einen Job auf dem Hof machen.
   - *CTA* : `Termine & Angebote entdecken →` (`/veranstaltungen`)

#### Section Newsletter (`#newsletter`)
- **Titre H2** : *Neuigkeiten vom Wachtberg*
- **Texte** : 2–3 Mal im Monat: Geschichten aus der Gärtnerei, Saisonrezepte, Markttermine und Workshop-Ankündigungen — direkt in euer Postfach.
- **Intégration** : Champ e-mail + bouton `Anmelden` + mention RGPD (*Kein Spam. Jederzeit mit einem Klick abmeldbar*). Traité via formulaire sans backend ou composant Tally.

#### Section Agenda Express (Nächste Termine)
- **Titre H2** : *Nächste Termine*
- **Tableau synthétique** :
  - 25.–26. April : Jungpflanzenmarkt (Wachtberg, Gars am Kamp)
  - 17.–19. April : Raritätenbörse (Botanischer Garten Wien)
  - 1. Mai : Jungpflanzenmarkt (Arche Noah, Schiltern)
  - 26. September : Slowfood-Markt (Gars am Kamp)
- **Lien** : `Alle Termine ansehen →` (`/veranstaltungen`)

---

### 4.2 Page Solawi (`/solawi`)

#### En-tête & Définition
- **Titre H1** : *Solawi — so funktioniert es*
- **Accroche** : Eine gemeinschaftsgetragene Landwirtschaft ermöglicht Verbraucher\*innen und Produzent\*innen, außerhalb eines marktwirtschaftlichen Systems — das zumeist weder fair, gesund noch ökologisch tragbar ist — neu in Beziehung zu treten.
- **CTA immédiat** : `Für einen Ernteanteil anmelden ↓` (ancrage `#anmelden`)

#### Double grille d'impact
1. **Was euch ein Ernteanteil bringt (Membres)** :
   - Frisches, vielfältiges Gemüse (wöchentlich, saisonal, direkt vom Feld)
   - Vergessene Geschmäcker (seltene Aromen und alte Sorten)
   - Nähe und Bezug (zu Landwirt\*innen und zum Anbauort)
   - Höchste geschmackliche und vitale Qualität
   - Sinnvolle Unterstützung kleinbäuerlicher Biolandwirtschaft
   - Neue Inspiration für die saisonale Küche
2. **Was ihr damit ermöglicht (Ferme)** :
   - Ökologisch achtsames Wirtschaften ohne Ertragsdogma
   - Erhalt biologischer Sortenvielfalt
   - Faire Entlohnung und gesunde Arbeitsbedingungen
   - Verlässliche und zukunftsfähige Anbauplanung
   - Direkte partnerschaftliche Beziehung zu den Konsument\*innen
   - Ernte zum optimalen physiologischen Reifezeitpunkt

#### Tableau récapitulatif "Auf einen Blick"
- **Saison** : Anfang April bis Ende November (33 Lieferwochen, 34 Ernteanteile)
- **Saisonbeitrag** : 1.070 €
- **Abholung Wien (freitags)** :
  - Reformhaus Wallner (1040)
  - Ihana (1020)
  - Foodcoop Stadtgut (1020)
  - Wins (1020)
  - Salon im Park (1020)
  - Foodcoops d'Speis / Allmunde / Vegan Foodcoop (1150)
  - Cafe Natural Winebar (1070)
- **Abholung Waldviertel** : Ab Hof (Wachtberg) & Working Space Gars am Kamp
- **Neuer Standort** : Ab 15 Ernteteiler\*innen möglich.

#### Foire Aux Questions (FAQ)
- Accordéons interactifs pour les questions fréquentes : contenu d'un panier, gestion des absences et vacances, processus d'inscription.

#### Formulaire de Contact & Inscription (`#anmelden`)
- **Titre** : *Interesse an einem Ernteanteil?*
- **Champs** : Prénom, Nom, E-mail (obligatoire), Téléphone, Nombre de parts souhaitées (1 / 2 / Famille), Point de retrait préféré, Message libre, Case à cocher pour la newsletter.
- **Implémentation sans backend** : Formulaire Tally intégré ou structure HTML réactive avec envoi direct formaté.

---

### 4.3 Page Jungpflanzen (`/jungpflanzen`)

- **Philosophie** : Production interne de tous les jeunes plants, sauvegarde de variétés paysannes, adaptation au terroir, robustesse et goût.
- **Sortenliste PDF** : Bloc de mise en avant avec bouton de téléchargement : `Sortenliste 2026 herunterladen 📥`.
- **Marchés & Ventes directes** : Fiches d'adresses et horaires pour le Wachtberg (25-26 avril), Vienne Botanischer Garten (17-19 avril), et Arche Noah (1er mai).
- **Conseils de plantation** : Les 3 règles d'or (attendre les Saints de Glace mi-mai, préparer la vie du sol avec compost/paillage, marier les variétés).

---

### 4.4 Page Veranstaltungen (`/veranstaltungen`)

- **Filtres d'événements interactifs** : `Alle`, `Märkte`, `Workshops`, `Kunst in der Natur`, `Praktika & Jobs`.
- **Calendrier complet** : Tableau filtrable avec dates, horaires, lieux et liens utiles (notamment les marchés Slow Food du Waldviertel de septembre à décembre).
- **Section Workshops** : Explication des ateliers régénératifs (sol vivant, reproduction de semences) avec inscription à la newsletter pour être prévenu des prochaines sessions.
- **Section Kunst in der Natur** : Histoire du projet artistique de la famille Graf (25 ans de Landart-Symposium, concerts, expositions).
- **Section Stages & Emplois (Praktika & Jobs)** : Présentation de l'apprentissage pratique sur la ferme maraîchère, axes prioritaires et e-mail de candidature (`office.biosain@gmail.com`).

---

### 4.5 Page Über uns (`/ueber-uns`)

- **BIOsain & Osain** : Origine du nom en hommage à Osain, divinité/orisha des plantes médicinales et de la guérison.
- **L'équipe (Wir)** : Tristan Toé, Jahwezi Graf, famille, bénévoles, stagiaires, sans oublier la faune auxiliaire du sol (vers de terre, champignons mycorhiziens, bactéries bénéfiques).
- **Méthodes et objectifs** : Semences paysannes sélectionnées pour le goût et l'adaptation au climat, non-travail destructeur du sol, modèle Solawi.
- **Visions globales & Partenariats** : Résilience des petites fermes nourricières, ponts concrets avec les associations **Nakôbio** et **Dalaseeds** pour la transmission maraîchère et semencière.
- **Le lieu : Der Wachtberg** : Terroir cultivé en bio depuis plus de 37 ans, îlot de biodiversité entre forêts et haies, lieu d'accueil pour événements et séminaires.
- **Accès détaillé (Anfahrt)** : Itinéraires précis en voiture et en train depuis Vienne (gare de Buchberg am Kamp ou Gars-Thunau, sentiers pédestres balisés).

---

### 4.6 Pages Légales

- **`/impressum`** : Informations légales complètes sur Tristan Toé (GesBR, Am Wachtberg 78, 3571 Gars am Kamp), appartenance à la Wirtschaftskammer Niederösterreich, crédits photographiques et de conception.
- **`/datenschutz`** : Déclaration de conformité RGPD / DSGVO (traitement des données d'inscription Solawi, durée de conservation légale de 7 à 10 ans, gestion de la newsletter, droits des utilisateurs).

---

## 5. Suivi des Médias & Actifs Manquants

- [x] Photos haute résolution Wachtberg (récupérées de la maquette de Yombé : `hero-bg.jpg`, `card-solawi.jpg`, `card-jungpflanzen.jpg`, `card-veranstaltungen.jpg`, `card-praktika.jpg`, `card-biosain.jpg`, `card-visions.jpg`).
- [ ] Photo d'équipe actualisée de Tristan Toé et Jahwezi Graf (à insérer sur `/ueber-uns`).
- [ ] Fichier PDF définitif `Sortenliste 2026` (un PDF type ou flyer actuel servira d'actif initial dans `/public/docs/`).
- [ ] Création du formulaire Tally pour l'inscription Solawi et la Newsletter sans backend.
