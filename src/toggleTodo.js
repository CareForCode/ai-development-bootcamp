export function toggleTodo(todos, id) {
  return todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
}
