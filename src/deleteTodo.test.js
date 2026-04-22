import { describe, it, expect } from 'vitest'
import { deleteTodo } from './deleteTodo.js'

describe('deleteTodo', () => {
  it('removes the todo with the matching id', () => {
    const todos = [{ id: '1', title: 'Task', completed: false }]
    const result = deleteTodo(todos, '1')
    expect(result).toHaveLength(0)
  })

  it('keeps todos with other ids', () => {
    const todos = [
      { id: '1', title: 'Task 1', completed: false },
      { id: '2', title: 'Task 2', completed: false },
    ]
    const result = deleteTodo(todos, '1')
    expect(result).toHaveLength(1)
    expect(result[0].id).toBe('2')
  })
})
