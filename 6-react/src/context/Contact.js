import { useContext } from 'react'
import ThemeContext from './ThemeContext'

const Contact = () => {
  const theme = useContext(ThemeContext)
  return (
    <article
      style={{
        border: '1px solid',
        margin: '1em',
        padding: '1em',
        flex: 3,
        ...theme
      }}
    >
      <h1>Contact Page</h1>
      <p>My Contact page</p>
    </article>
  )
}

export default Contact
