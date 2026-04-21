// Grab references to the persistent UI elements
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

// Creates a new TODO item from the current input value and appends it to the list
function addTodo() {
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

  // Toggle the 'completed' CSS class when the checkbox is checked or unchecked
  li.querySelector('input[type="checkbox"]').addEventListener('change', e => {
    li.classList.toggle('completed', e.target.checked);
  });

  // Remove the item from the DOM when the delete button is clicked
  li.querySelector('.delete-btn').addEventListener('click', () => {
    li.remove();
  });

  list.appendChild(li);
  input.value = ''; // Clear the input field after adding
}

// Allow adding a todo via the Add button or the Enter key
addBtn.addEventListener('click', addTodo);
input.addEventListener('keydown', e => {
  if (e.key === 'Enter') addTodo();
});
