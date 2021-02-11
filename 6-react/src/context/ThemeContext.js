import { createContext } from 'react'

export const themes = {
  light: {
    color: '#000',
    backgroundColor: '#eee'
  },
  dark: {
    color: '#fff',
    backgroundColor: '#222'
  }
}

const themeContext = createContext()

export default themeContext
