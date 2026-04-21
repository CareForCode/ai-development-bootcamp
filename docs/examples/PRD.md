# PRD – Minimale Todo App

**Version:** 1.0  
**Status:** Final für Workshop  
**Stack:** HTML, CSS, Vanilla JavaScript  

---

## Projektbeschreibung

Eine minimale Todo-App im Browser. Keine Registrierung, kein Server, kein Framework.  
Der Nutzer kann Aufgaben notieren, abhaken und löschen – und findet sie nach einem Browser-Reload noch vor.

---

## Iterationen

Das Produkt wird in drei Iterationen geliefert. Jede Iteration ist eigenständig lauffähig.

---

## Iteration 1 – v0.1: Grundfunktion

**Ziel:** Der Nutzer kann Todos eingeben und sieht sie in einer Liste.

### User Stories

**US-01 – Todo hinzufügen**  
Als Nutzer möchte ich einen Text eingeben und auf „Hinzufügen" klicken (oder Enter drücken),  
damit das Todo in der Liste erscheint.

**Akzeptanzkriterien:**
- Eingabefeld und Button sind sichtbar
- Nach dem Hinzufügen erscheint das Todo in der Liste
- Das Eingabefeld wird danach geleert
- Leere Eingaben werden ignoriert (kein leeres Todo)

**US-02 – Todos anzeigen**  
Als Nutzer möchte ich alle Todos in einer Liste sehen,  
damit ich den Überblick behalte.

**Akzeptanzkriterien:**
- Todos erscheinen in der Reihenfolge der Eingabe (neueste unten)
- Jedes Todo zeigt seinen Text
- Die Liste ist ohne Seitenreload sofort aktuell

### Out of Scope v0.1
- Abhaken, Löschen, Persistenz, Filter

---

## Iteration 2 – v0.2: Verwaltung & Persistenz

**Ziel:** Todos können abgehakt und gelöscht werden. Nach einem Reload sind sie noch da.

### User Stories

**US-03 – Todo abhaken**  
Als Nutzer möchte ich ein Todo als erledigt markieren,  
damit ich sehe was ich schon geschafft habe.

**Akzeptanzkriterien:**
- Jedes Todo hat eine Checkbox
- Klick auf Checkbox wechselt den Zustand (offen ↔ erledigt)
- Erledigte Todos werden optisch durchgestrichen dargestellt

**US-04 – Todo löschen**  
Als Nutzer möchte ich ein Todo aus der Liste entfernen,  
damit die Liste nicht überläuft.

**Akzeptanzkriterien:**
- Jedes Todo hat einen Löschen-Button (z.B. „×")
- Nach dem Klick verschwindet das Todo sofort
- Kein Bestätigungsdialog nötig

**US-05 – Todos werden gespeichert**  
Als Nutzer möchte ich meine Todos nach einem Browser-Reload noch sehen,  
damit ich nichts neu eingeben muss.

**Akzeptanzkriterien:**
- Todos sind nach Reload noch vorhanden (inkl. done-Status)
- Neue Todos werden sofort gespeichert
- Änderungen (abhaken, löschen) werden sofort gespeichert

### Out of Scope v0.2
- Filter, Bearbeiten von Todos

---

## Iteration 3 – v0.3: Filter & Leerzustand

**Ziel:** Große Listen werden übersichtlicher durch Filterung. Leere Zustände sind freundlich.

### User Stories

**US-06 – Todos filtern**  
Als Nutzer möchte ich zwischen „Alle", „Offen" und „Erledigt" wechseln,  
damit ich mich auf relevante Todos konzentrieren kann.

**Akzeptanzkriterien:**
- Drei Filter-Buttons sind sichtbar: Alle / Offen / Erledigt
- Aktiver Filter ist visuell hervorgehoben
- Liste zeigt nur passende Todos
- Filter-Auswahl bleibt nicht nach Reload erhalten (kein Muss)

**US-07 – Leerzustand**  
Als Nutzer möchte ich eine hilfreiche Meldung sehen wenn keine Todos angezeigt werden,  
damit ich nicht denke die App ist kaputt.

**Akzeptanzkriterien:**
- Wenn die gefilterte Liste leer ist, erscheint ein Text (z.B. „Keine offenen Todos")
- Text ist kontextabhängig: bei Filter „Erledigt" anderer Text als bei leerer Gesamtliste
- Kein leeres weißes Nichts

### Out of Scope v0.3
- Drag & Drop, Prioritäten, Kategorien, Suche

---

## Nicht-funktionale Anforderungen

| Anforderung | Ziel |
|-------------|------|
| Ladezeit | Sofort – keine Netzwerkanfragen |
| Browser-Support | Chrome, Firefox, Edge (aktuell) |
| Datenschutz | Nur localStorage, keine externen Dienste |
| Barrierefreiheit | Grundlegend: Labels, Kontrast, Keyboard-Navigation |

---

## Explizit Out of Scope (gesamt)

- User-Accounts oder Login
- Backend / Datenbank
- Mehrere Listen
- Deadlines oder Prioritäten
- Mobile App
- Dark Mode
- Drag & Drop
