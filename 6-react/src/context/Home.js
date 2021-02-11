import { useContext } from 'react'
import ThemeContext from './ThemeContext'

const Home = () => {
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
      <h1>My Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam,nt, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
    </article>
  )
}

export default Home
