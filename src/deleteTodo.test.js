import { describe, it, expect } from 'vitest'
import { addTodo } from './addTodo.js'
import { deleteTodo } from './deleteTodo.js'

describe('deleteTodo', () => {
  it('removes the todo with the matching id', () => {
    const todos = []
    addTodo(todos, 'Task')
    deleteTodo(todos, todos[0].id)
    expect(todos).toHaveLength(0)
  })

  it('keeps todos with other ids', () => {
    const todos = []
    addTodo(todos, 'Task 1')
    addTodo(todos, 'Task 2')
    const id = todos[0].id
    deleteTodo(todos, id)
    expect(todos).toHaveLength(1)
    expect(todos[0].title).toBe('Task 2')
  })
})
