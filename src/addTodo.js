// Creates a new TODO item and appends it to the list
export function addTodo(input, list) {
  const title = input.value.trim();
  // Ignore empty or whitespace-only submissions
  if (!title) return;

  // Build the list item with a checkbox, title text, and delete button
  const li = document.createElement('li');
  li.innerHTML = `
    <input type="checkbox">
    <span>${title}</span>
    <button class="delete-btn">✕</button>
  `;

  list.appendChild(li);
  input.value = ''; // Clear the input field after adding
}
