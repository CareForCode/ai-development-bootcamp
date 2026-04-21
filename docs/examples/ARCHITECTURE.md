# ARCHITECTURE.md – Todo App

## Übersicht

Minimale Single-Page-App ohne Framework. Drei Dateien, ein Prinzip: **State → Render → Event**.

```
todo-app/
├── index.html   # Struktur & Einstiegspunkt
├── style.css    # Alle Styles
└── app.js       # State, Logik, DOM-Rendering
```

---

## Architektur-Prinzip: Unidirektionaler Datenfluss

```
┌─────────────┐     Event      ┌─────────────┐
│    User     │ ────────────▶  │   Handler   │
└─────────────┘                └──────┬──────┘
                                      │ mutiert
                                      ▼
                               ┌─────────────┐
                               │    State    │
                               └──────┬──────┘
                                      │ löst aus
                                      ▼
                               ┌─────────────┐
                               │   render()  │
                               └──────┬──────┘
                                      │ schreibt
                                      ▼
                               ┌─────────────┐
                               │     DOM     │
                               └─────────────┘
```

**Regel:** Niemand außer `render()` schreibt in den DOM.  
**Regel:** Niemand außer den Handlern schreibt in `state`.

---

## State-Objekt

```js
const state = {
  todos: [],       // Array von Todo-Objekten
  filter: 'all'    // 'all' | 'open' | 'done'
};
```

### Todo-Objekt

```js
{
  id: 1700000000000,   // Date.now() beim Erstellen
  text: 'Milch kaufen',
  done: false
}
```

---

## Iterationen & Datei-Zustand

### Iteration 1 – v0.1: Anzeigen & Hinzufügen

```
app.js enthält:
  state { todos, filter }
  addTodo(text)
  render()
  
index.html enthält:
  <input id="todo-input">
  <button id="add-btn">
  <ul id="todo-list">
```

Kein localStorage. State lebt nur im Arbeitsspeicher.

---

### Iteration 2 – v0.2: Abhaken & Löschen + Persistenz

Neu in `app.js`:
```
  toggleTodo(id)
  deleteTodo(id)
  saveToStorage()
  loadFromStorage()
```

`render()` erzeugt pro Todo zusätzlich:
- Checkbox (checked ↔ `todo.done`)
- Delete-Button

`localStorage`-Key: `"todos"`

---

### Iteration 3 – v0.3: Filter + Leerer Zustand

Neu in `app.js`:
```
  setFilter(filter)
  getFilteredTodos()
```

`render()` zeigt:
- Filter-Buttons (Alle / Offen / Erledigt)
- Leerer-Zustand-Hinweis wenn keine Todos passen

---

## index.html – Grundstruktur

```html
<div class="app">
  <h1>Meine Todos</h1>

  <div class="input-row">
    <input id="todo-input" type="text" placeholder="Neues Todo...">
    <button id="add-btn">Hinzufügen</button>
  </div>

  <!-- Iteration 3: Filter-Leiste -->
  <div class="filter-bar" id="filter-bar"></div>

  <!-- Wird von render() befüllt -->
  <ul id="todo-list"></ul>

  <!-- Iteration 3: Leerer Zustand -->
  <p class="empty-state" id="empty-state" hidden>Keine Todos hier.</p>
</div>
```

---

## CSS-Klassen-Systematik

| Klasse | Bedeutung |
|--------|-----------|
| `.app` | Haupt-Container, zentriert |
| `.input-row` | Zeile mit Input + Button |
| `.todo-item` | Ein Todo in der Liste |
| `.todo-item--done` | Modifier: Todo ist erledigt |
| `.filter-bar` | Container der Filter-Buttons |
| `.filter-btn` | Ein Filter-Button |
| `.filter-btn--active` | Aktiver Filter |
| `.empty-state` | Hinweis bei leerer Liste |

---

## Was bewusst NICHT in der Architektur ist

- Kein Router – eine einzige View
- Kein Component-System – render() ist monolithisch (bewusst simpel)
- Kein Event-Delegation-Pattern – direkte Event-Listener pro Element
- Kein Error-Handling für localStorage (Lernprojekt)
