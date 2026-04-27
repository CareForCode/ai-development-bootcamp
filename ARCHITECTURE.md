# Architecture

## TODO App — v1.0

---

## Overview

Single-page, in-browser TODO application. No build tools, no frameworks, no external dependencies. Plain web standards. TODOs are persisted via `localStorage`.

---

## File Structure

```
/
├── index.html          # Page structure and DOM skeleton
├── css/
│   └── style.css       # All visual styling
└── src/
    ├── app.js          # Event wiring and DOM references
    ├── addTodo.js      # Creates and appends todo items
    ├── toggleTodo.js   # Toggles completed state
    ├── deleteTodo.js   # Removes todo items
    └── storage.js      # localStorage persistence (save/load)
```

---

## index.html

Responsibilities:
- Defines the page skeleton (head, body, meta)
- Links `css/style.css` and `src/app.js`
- Contains the static layout: header, input row, todo list container, empty-state message

Key elements:
- `<input id="todo-input">` — task entry field
- `<button id="add-btn">` — triggers add action
- `<ul id="todo-list">` — dynamic list; `app.js` renders items here
- `<p id="empty-state">` — shown when list is empty

---

## style.css

Responsibilities:
- Layout (centered single column, responsive width)
- Input row and button appearance
- Todo item layout (checkbox left, title center, delete button right)
- Completed-item style (strikethrough text, muted color)
- Empty-state visibility toggle via `.hidden` utility class

No external fonts or icon libraries. Delete button uses a plain `✕` character.

---

## storage.js

Responsibilities:
- Encapsulates all `localStorage` access under a single key (`'todos'`)
- Keeps persistence details out of `app.js`

| Export | Description |
|---|---|
| `save(todos)` | Serializes `todos` array to JSON and writes to `localStorage` |
| `load()` | Reads and deserializes from `localStorage`; returns `[]` if nothing stored |

---

## app.js

Responsibilities:
- Loads initial state from `storage.js` on startup
- Maintains the `todos` array and renders the full list on every state change
- Handles all user events (add, toggle, delete) and persists after each mutation

### Data model

```js
// Persisted to localStorage under key 'todos'
let todos = load();

// Each item:
{ id: string, title: string, completed: boolean, dueDate: string | null }
```

`id` is generated via `crypto.randomUUID()`.

### Functions

| Function | Description |
|---|---|
| `addTodo(title)` | Appends a new item to `todos`, saves, re-renders |
| `toggleTodo(id)` | Flips `completed` on the matching item, saves, re-renders |
| `deleteTodo(id)` | Removes item by `id`, saves, re-renders |
| `render()` | Clears and rebuilds `#todo-list` from `todos`; toggles empty-state |

### Event wiring (set up on `DOMContentLoaded`)

- `#add-btn` click → `addTodo`
- `#todo-input` keydown `Enter` → `addTodo`
- Delegated click on `#todo-list` → `toggleTodo` (checkbox) or `deleteTodo` (delete button)

Input is trimmed before use; empty/whitespace submissions are ignored.

---

## Data Flow

```
Page load
    │
    ▼
load() — read todos[] from localStorage
    │
    ▼
render() — initial UI

User action
    │
    ▼
Event handler (app.js)
    │
    ▼
Mutate todos[]
    │
    ├──▶ save() — write todos[] to localStorage
    │
    ▼
render() — rebuild DOM from todos[]
    │
    ▼
Updated UI
```

No two-way binding, no virtual DOM — every state change triggers a full list re-render. Sufficient for the expected data size (handful of items).

---

## Constraints (from PRD)

- No auth, no backend, no routing
- Plain HTML/CSS/JS only — no npm, no bundler, no framework
