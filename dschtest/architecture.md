# Architecture: Todo App

**Stack:** HTML + CSS + JS — no frameworks, no build step, no backend.

---

## File Structure

```
index.html   — markup and document shell
style.css    — all visual styles
app.js       — state and DOM logic
```

Open `index.html` directly in a browser. No server required.

---

## index.html

Document shell only. No inline styles or scripts.

```
<head>
  link rel="stylesheet" href="style.css"
  script defer src="app.js"
</head>
<body>
  <header>   — app title
  <main>
    <div class="input-row">
      <input type="text" id="todo-input" placeholder="New todo…" aria-label="New todo">
      <button id="add-btn">Add</button>
    </div>
    <ul id="todo-list"></ul>
  </main>
</body>
```

Todo items are injected by `app.js` as `<li>` elements:

```html
<li>
  <input type="checkbox" id="item-{id}" aria-label="{text}">
  <label for="item-{id}">{text}</label>
  <button aria-label="Delete {text}">✕</button>
</li>
```

---

## style.css

- One `:root` block with color and spacing tokens
- Mobile-first, single-column; `max-width` + `margin: auto` for wider viewports
- Flexbox on `.input-row` — input stretches, button stays fixed-width
- `.done label` — `text-decoration: line-through; opacity: 0.5`
- `:focus-visible` on all interactive elements for keyboard nav

---

## app.js

### State (module scope)

```js
let todos = [];  // [{ id: number, text: string, done: boolean }]
let nextId = 0;
```

State lives only in memory. Refresh resets it (FR-05).

### Functions

| Function | What it does |
|----------|--------------|
| `addTodo(text)` | Appends `{ id: nextId++, text, done: false }` to `todos`, calls `render()` |
| `toggleTodo(id)` | Flips `done` on the matching item, calls `render()` |
| `deleteTodo(id)` | Removes the matching item from `todos`, calls `render()` |
| `render()` | Clears `#todo-list`, rebuilds all `<li>` nodes from `todos`, wires per-item events |

### Event wiring (once, on `DOMContentLoaded`)

| Event | Handler |
|-------|---------|
| `#add-btn` click | `addTodo(input.value.trim())` — no-op if empty (AC-02) |
| `#todo-input` keydown `Enter` | Same as Add click |
| per-item checkbox `change` | `toggleTodo(id)` |
| per-item delete button `click` | `deleteTodo(id)` |

---

## Acceptance Criteria → Implementation

| AC | Satisfied by |
|----|-------------|
| AC-01 | `addTodo` + `render` appends item to list |
| AC-02 | `trim()` + empty guard in Add handler |
| AC-03 | `toggleTodo` sets `.done` class → CSS strikethrough |
| AC-04 | Same toggle removes `.done` class |
| AC-05 | `deleteTodo` removes only that item |
| AC-06 | No persistence — state is in-memory only |
