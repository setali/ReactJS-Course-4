import { useContext } from 'react'
import ThemeContext from './ThemeContext'

const About = () => {
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
      <h1>About Page</h1>
      <p>My about page</p>
    </article>
  )
}

export default About
