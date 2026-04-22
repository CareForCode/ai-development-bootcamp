import { describe, it, expect, beforeEach } from 'vitest'
import { addTodo } from './addTodo.js'

describe('addTodo', () => {
  let input, list

  beforeEach(() => {
    input = document.createElement('input')
    list = document.createElement('ul')
  })

  it('appends a new li to the list', () => {
    input.value = 'Buy milk'
    addTodo(input, list)
    expect(list.children).toHaveLength(1)
  })

  it('li contains the input text', () => {
    input.value = 'Buy milk'
    addTodo(input, list)
    expect(list.querySelector('span').textContent).toBe('Buy milk')
  })

  it('li contains a checkbox', () => {
    input.value = 'Buy milk'
    addTodo(input, list)
    expect(list.querySelector('input[type="checkbox"]')).not.toBeNull()
  })

  it('li contains a delete button', () => {
    input.value = 'Buy milk'
    addTodo(input, list)
    expect(list.querySelector('button.delete-btn')).not.toBeNull()
  })

  it('clears the input after adding', () => {
    input.value = 'Buy milk'
    addTodo(input, list)
    expect(input.value).toBe('')
  })

  it('does nothing for empty input', () => {
    input.value = ''
    addTodo(input, list)
    expect(list.children).toHaveLength(0)
  })

  it('does nothing for whitespace-only input', () => {
    input.value = '   '
    addTodo(input, list)
    expect(list.children).toHaveLength(0)
  })
})
