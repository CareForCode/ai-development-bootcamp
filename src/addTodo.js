export function addTodo(todos, title) {
  const trimmed = title.trim();
  if (!trimmed) return;
  todos.push({ id: crypto.randomUUID(), title: trimmed, completed: false });
}
