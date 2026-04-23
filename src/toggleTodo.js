export function toggleTodo(todos, id) {
  const todo = todos.find(t => t.id === id);
  if (todo) todo.completed = !todo.completed;
}
