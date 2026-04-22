export function addTodo(title) {
  return { id: Date.now().toString(), title, completed: false };
}
