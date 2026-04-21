# Product Requirements Document: Todo App

**Version:** 1.1  
**Status:** Final  
**Last updated:** 2026-04-21

---

## 1. Product Vision

A minimal, browser-based Todo application that lets users manage a list of tasks within a single session. No accounts, no backend, no complexity — just a fast and frictionless way to track what needs to get done.

---

## 2. Scope

### In scope
- Creating todo items
- Displaying all items in a list
- Marking items as done via a checkbox
- Deleting items

### Out of scope
- User authentication
- Data persistence (no local storage, no backend)
- Editing existing items
- Due dates, priorities, tags, or categories
- Multi-device sync

---

## 3. User Stories

| ID | As a user, I want to… | So that… |
|----|----------------------|----------|
| US-01 | Enter a new todo item and add it to the list | I can capture tasks quickly |
| US-02 | See all my todo items in a list | I have an overview of what needs to be done |
| US-03 | Check off a todo item with a checkbox | I can visually mark completed tasks |
| US-04 | See a visual distinction between done and not-done items | I can easily tell what is still open |
| US-05 | Delete a todo item | I can remove items I no longer need |

---

## 4. Functional Requirements

### FR-01 — Add Item
- The UI provides an input field and a submission mechanism (button or Enter key).
- On submission, a non-empty text input creates a new todo item appended to the list.
- The input field clears after submission.
- Submitting an empty or whitespace-only input is a no-op (no item created).

### FR-02 — Display List
- All todo items are displayed in the order they were added (insertion order).
- Each item shows its text label, a checkbox, and a delete control.
- The list is empty by default on page load.

### FR-03 — Complete Item
- Each item has a checkbox. Clicking it toggles the item's completed state.
- A completed item is visually distinguished (e.g., strikethrough text, muted color).
- Toggling is reversible — unchecking restores the item to its open state.

### FR-04 — Delete Item
- Each item has a delete control (e.g., a button or icon).
- Clicking it immediately removes the item from the list without a confirmation dialog.

### FR-05 — No Persistence
- All data lives in memory only.
- Refreshing or closing the page resets the list to empty. This is expected behavior and requires no warning to the user.

---

## 5. Non-Functional Requirements

| Category | Requirement |
|----------|-------------|
| Platform | Runs in a modern desktop browser (Chrome, Firefox, Safari, Edge) |
| Responsiveness | Usable on mobile viewports (min 375px width) |
| Performance | All interactions feel instant (no loading states needed) |
| Accessibility | Checkboxes and buttons are keyboard-navigable and have accessible labels |
| Dependencies | No mandatory backend; frontend-only implementation |

---

## 6. UI Sketch (Wireframe Description)

```
┌─────────────────────────────────┐
│  Todo App                       │
├─────────────────────────────────┤
│  [__________________________]  [Add] │
├─────────────────────────────────┤
│  ☐  Buy groceries          [✕] │
│  ☑  Write PRD              [✕] │  ← strikethrough, muted
│  ☐  Book dentist           [✕] │
└─────────────────────────────────┘
```

- Top: single-line text input + Add button
- Below: scrollable list of items, each with checkbox (left) and delete button (right)
- Completed items are visually de-emphasized

---

## 7. Acceptance Criteria

| ID | Criterion |
|----|-----------|
| AC-01 | A user can type text, press Enter or click Add, and see the item appear at the bottom of the list |
| AC-02 | Submitting an empty input does nothing |
| AC-03 | Clicking a checkbox marks the item done with a visible style change (e.g. strikethrough) |
| AC-04 | Clicking the checkbox again un-marks the item |
| AC-05 | Clicking the delete button removes only that item from the list |
| AC-06 | After a page refresh, the list is empty |

---

## 8. Decisions Log

| # | Question | Decision |
|---|----------|----------|
| Q1 | Should completed items be shown inline or moved to a separate section? | Inline — completed items stay in their original position in the list |
| Q2 | Is a count of open/completed items useful in the header? | No — out of scope for now |

---

*End of document*