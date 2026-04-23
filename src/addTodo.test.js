import { describe, it, expect } from 'vitest'
import { addTodo } from './addTodo.js'

describe('addTodo', () => {
  it('adds a todo with the given title', () => {
    const todos = []
    addTodo(todos, 'Buy milk')
    expect(todos[0].title).toBe('Buy milk')
  })

  it('sets completed to false by default', () => {
    const todos = []
    addTodo(todos, 'Buy milk')
    expect(todos[0].completed).toBe(false)
  })

  it('generates a non-empty string id', () => {
    const todos = []
    addTodo(todos, 'Buy milk')
    expect(typeof todos[0].id).toBe('string')
    expect(todos[0].id.length).toBeGreaterThan(0)
  })

  it('does not add a todo for a whitespace-only title', () => {
    const todos = []
    addTodo(todos, '   ')
    expect(todos).toHaveLength(0)
  })
})
