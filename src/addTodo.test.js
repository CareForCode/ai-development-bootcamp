import { describe, it, expect } from 'vitest'
import { addTodo } from './addTodo.js'

describe('addTodo', () => {
  it('returns a todo with the given title', () => {
    const todo = addTodo('Buy milk')
    expect(todo.title).toBe('Buy milk')
  })

  it('sets completed to false by default', () => {
    const todo = addTodo('Buy milk')
    expect(todo.completed).toBe(false)
  })

  it('generates a non-empty string id', () => {
    const todo = addTodo('Buy milk')
    expect(typeof todo.id).toBe('string')
    expect(todo.id.length).toBeGreaterThan(0)
  })
})
