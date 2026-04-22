import { describe, it, expect } from 'vitest'
import { toggleTodo } from './toggleTodo.js'

describe('toggleTodo', () => {
  it('flips completed from false to true', () => {
    const todos = [{ id: '1', title: 'Task', completed: false }]
    const result = toggleTodo(todos, '1')
    expect(result[0].completed).toBe(true)
  })

  it('flips completed from true to false', () => {
    const todos = [{ id: '1', title: 'Task', completed: true }]
    const result = toggleTodo(todos, '1')
    expect(result[0].completed).toBe(false)
  })

  it('does not modify other todos', () => {
    const todos = [
      { id: '1', title: 'Task 1', completed: false },
      { id: '2', title: 'Task 2', completed: false },
    ]
    const result = toggleTodo(todos, '1')
    expect(result[1].completed).toBe(false)
  })
})
