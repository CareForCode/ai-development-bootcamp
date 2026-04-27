const KEY = 'todos';

export function save(todos) {
  localStorage.setItem(KEY, JSON.stringify(todos));
}

export function load() {
  const stored = localStorage.getItem(KEY);
  return stored ? JSON.parse(stored) : [];
}
