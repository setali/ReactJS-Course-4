import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import Counter from './Counter'

test('Counter testing pure', () => {
  const root = document.createElement('div')
  ReactDOM.render(<Counter />, root)

  const h3 = root.querySelector('h3').textContent
  expect(h3).toBe('My Counter')

  const button = root.querySelector('button')
  const buttonText = button.textContent
  expect(buttonText).toBe('Increment')
  expect(button).not.toBeNull()
})

test('Counter testing with testing library', () => {
  const { getByText, getByTestId } = render(<Counter />)
  getByText(/my counter/i)
  getByText('Increment')
  const counterValue = getByTestId('counter-value')
  expect(counterValue.textContent).toBe('0')
})

test('Counter testing click', () => {
  const { getByText, getByTestId } = render(<Counter />)
  const button = getByText('Increment')
  const value = getByTestId('counter-value')

  expect(value.textContent).toBe('0')

  button.click()
  button.click()
  button.click()
  button.click()

  expect(value.textContent).toBe('4')

  button.click()
  button.click()
  button.click()

  expect(value.textContent).toBe('7')
})
