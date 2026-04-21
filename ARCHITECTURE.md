# Architecture

## TODO App — v1.0

---

## Overview

Single-page, in-browser TODO application. No build tools, no frameworks, no external dependencies. Three files, plain web standards.

---

## File Structure

```
/
├── index.html      # Page structure and DOM skeleton
├── style.css       # All visual styling
└── app.js          # State management and DOM interactions
```

---

## index.html

Responsibilities:
- Defines the page skeleton (head, body, meta)
- Links `style.css` and `app.js`
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

## app.js

Responsibilities:
- Maintains in-memory `todos` array (no persistence)
- Renders the full list to the DOM on every state change
- Handles all user events (add, toggle, delete)

### Data model

```js
// In-memory array — reset on page reload
let todos = [];

// Each item:
{ id: string, title: string, completed: boolean }
```

`id` is generated via `Date.now().toString()`.

### Functions

| Function | Description |
|---|---|
| `addTodo(title)` | Appends a new item to `todos`, re-renders |
| `toggleTodo(id)` | Flips `completed` on the matching item, re-renders |
| `deleteTodo(id)` | Removes item by `id`, re-renders |
| `render()` | Clears and rebuilds `#todo-list` from `todos`; toggles empty-state |

### Event wiring (set up on `DOMContentLoaded`)

- `#add-btn` click → `addTodo`
- `#todo-input` keydown `Enter` → `addTodo`
- Delegated click on `#todo-list` → `toggleTodo` (checkbox) or `deleteTodo` (delete button)

Input is trimmed before use; empty/whitespace submissions are ignored.

---

## Data Flow

```
User action
    │
    ▼
Event handler (app.js)
    │
    ▼
Mutate todos[]
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

- No persistence — `todos` lives only for the current page session
- No auth, no backend, no routing
- Plain HTML/CSS/JS only — no npm, no bundler, no framework
