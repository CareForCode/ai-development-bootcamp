import { describe, it, expect } from 'vitest'
import { addTodo } from './addTodo.js'
import { toggleTodo } from './toggleTodo.js'

describe('toggleTodo', () => {
  it('flips completed from false to true', () => {
    const todos = []
    addTodo(todos, 'Task')
    toggleTodo(todos, todos[0].id)
    expect(todos[0].completed).toBe(true)
  })

  it('flips completed from true to false', () => {
    const todos = []
    addTodo(todos, 'Task')
    todos[0].completed = true
    toggleTodo(todos, todos[0].id)
    expect(todos[0].completed).toBe(false)
  })

  it('does nothing when the id does not exist', () => {
    const todos = []
    addTodo(todos, 'Task')
    toggleTodo(todos, 'nonexistent-id')
    expect(todos[0].completed).toBe(false)
  })

  it('does not modify other todos', () => {
    const todos = []
    addTodo(todos, 'Task 1')
    addTodo(todos, 'Task 2')
    toggleTodo(todos, todos[0].id)
    expect(todos[1].completed).toBe(false)
  })
})
