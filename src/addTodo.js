export function addTodo(todos, title, dueDate = null) {
  const trimmed = title.trim();
  if (!trimmed) return;
  todos.push({ id: crypto.randomUUID(), title: trimmed, completed: false, dueDate: dueDate || null });
}
