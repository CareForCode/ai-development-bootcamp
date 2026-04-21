# CLAUDE.md – Todo App Workshop

## Projekt-Kontext

Minimale Todo-App als Lernprojekt für Junior Developer.  
Kein Framework, kein Build-Tool, kein Backend. Nur HTML, CSS, JavaScript.

## Stack & Constraints

- **Sprachen:** Vanilla JS (ES6+), HTML5, CSS3
- **Keine** Libraries, Frameworks oder npm
- **Keine** Build-Tools (kein Vite, Webpack, etc.)
- **Persistenz:** `localStorage` – kein Server
- **Browser-Target:** Moderne Browser (Chrome/Firefox/Edge aktuell)
- **Dateien:** `index.html`, `style.css`, `app.js` – flache Struktur, kein Ordner-Chaos

## Iterationsplan

Das Projekt wird in **3 Iterationen** gebaut. Jede Iteration ist ein eigener Git-Tag.

| Iteration | Tag | Scope |
|-----------|-----|-------|
| 1 | `v0.1` | Todos hinzufügen & anzeigen (nur in-memory) |
| 2 | `v0.2` | Todos abhaken & löschen + localStorage |
| 3 | `v0.3` | Filter (alle / offen / erledigt) + leerer Zustand |

## Coding-Regeln

1. **Kein Code ohne Anforderung** – nur implementieren was im PRD steht
2. **Eine Funktion, eine Aufgabe** – Funktionen bleiben unter 20 Zeilen
3. **Kein globaler State-Spaghetti** – State lebt in einem einzigen `state`-Objekt
4. **DOM-Updates nur über `render()`** – nie direkt DOM-Elemente mutieren
5. **Kommentare auf Deutsch** – das ist ein Lernprojekt

## Namenskonventionen

- Funktionen: `camelCase`, Verben (`addTodo`, `deleteTodo`, `renderTodos`)
- CSS-Klassen: `kebab-case` (`todo-item`, `todo-item--done`)
- IDs: Timestamps (`Date.now()`)

## Was Claude NICHT tun soll

- Keinen TypeScript-Code generieren
- Keine ES-Module (`import/export`) – alles in einer JS-Datei
- Keine `class`-Syntax für State-Management
- Kein CSS-Framework (kein Bootstrap, Tailwind etc.)
- Keine Kommentare auf Englisch

## Commit-Format

```
feat: Todo hinzufügen implementiert
fix: Enter-Taste funktionierte nicht
style: Button-Hover-Effekt
docs: README ergänzt
```
