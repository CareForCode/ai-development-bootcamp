export function deleteTodo(todos, id) {
  return todos.filter(t => t.id !== id);
}
