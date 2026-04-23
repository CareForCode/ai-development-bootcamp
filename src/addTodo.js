export function addTodo(todos, title) {
  const trimmed = title.trim();
  if (!trimmed) return;
  todos.push({ id: Date.now().toString(), title: trimmed, completed: false });
}
