// Toggles the completed state of a TODO item
export function toggleTodo(li, checked) {
  li.classList.toggle('completed', checked);
}
