import { describe, it, expect } from 'vitest'
import { toggleTodo } from './toggleTodo.js'

describe('toggleTodo', () => {
  it('adds completed class when checked is true', () => {
    const li = document.createElement('li')
    toggleTodo(li, true)
    expect(li.classList.contains('completed')).toBe(true)
  })

  it('removes completed class when checked is false', () => {
    const li = document.createElement('li')
    li.classList.add('completed')
    toggleTodo(li, false)
    expect(li.classList.contains('completed')).toBe(false)
  })
})
