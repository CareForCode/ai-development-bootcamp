import { addTodo } from './addTodo.js';
import { toggleTodo } from './toggleTodo.js';
import { deleteTodo } from './deleteTodo.js';

// Shared DOM references
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

// Allow adding a todo via the Add button or the Enter key
addBtn.addEventListener('click', () => addTodo(input, list));

input.addEventListener('keydown', e => {
  if (e.key === 'Enter') addTodo(input, list);
});

// Event delegation: handle toggle and delete for all list items from the parent
list.addEventListener('change', e => {
  if (e.target.matches('input[type="checkbox"]')) {
    toggleTodo(e.target.closest('li'), e.target.checked);
  }
});

list.addEventListener('click', e => {
  if (e.target.matches('.delete-btn')) {
    deleteTodo(e.target.closest('li'));
  }
});
