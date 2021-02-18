import { useContext } from 'react'
import ThemeContext from './ThemeContext'

const NotFound = () => {
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
      <h1>NotFound Page</h1>
    </article>
  )
}

export default NotFound
