import { describe, it, expect } from 'vitest'
import { deleteTodo } from './deleteTodo.js'

describe('deleteTodo', () => {
  it('removes the li from the DOM', () => {
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    ul.appendChild(li)

    deleteTodo(li)

    expect(ul.children).toHaveLength(0)
  })
})
