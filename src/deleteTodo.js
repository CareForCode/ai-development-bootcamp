export function deleteTodo(todos, id) {
  const index = todos.findIndex(t => t.id === id);
  if (index !== -1) todos.splice(index, 1);
}
