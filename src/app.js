import { addTodo } from './addTodo.js';
import { toggleTodo } from './toggleTodo.js';
import { deleteTodo } from './deleteTodo.js';

let todos = [];

const input = document.getElementById('todo-input');
const dueDateInput = document.getElementById('due-date-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');
const emptyState = document.getElementById('empty-state');

function render() {
  list.innerHTML = '';
  todos.forEach(todo => {
    const li = document.createElement('li');
    li.dataset.id = todo.id;
    if (todo.completed) li.classList.add('completed');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;

    const span = document.createElement('span');
    span.textContent = todo.title;

    const btn = document.createElement('button');
    btn.className = 'delete-btn';
    btn.textContent = '✕';

    li.append(checkbox, span);

    if (todo.dueDate) {
      const due = document.createElement('span');
      due.className = 'due-date';
      due.dataset.dueDate = todo.dueDate;
      due.textContent = todo.dueDate;
      li.appendChild(due);
    }

    li.appendChild(btn);
    list.appendChild(li);
  });
  emptyState.classList.toggle('hidden', todos.length > 0);
}

function handleAdd() {
  addTodo(todos, input.value, dueDateInput.value);
  input.value = '';
  dueDateInput.value = '';
  render();
}

addBtn.addEventListener('click', handleAdd);
input.addEventListener('keydown', e => { if (e.key === 'Enter') handleAdd(); });

list.addEventListener('change', e => {
  if (e.target.matches('input[type="checkbox"]')) {
    toggleTodo(todos, e.target.closest('li').dataset.id);
    render();
  }
});

list.addEventListener('click', e => {
  if (e.target.matches('.delete-btn')) {
    deleteTodo(todos, e.target.closest('li').dataset.id);
    render();
  }
});

render();
