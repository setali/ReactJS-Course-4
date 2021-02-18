import { useContext } from 'react'
import { Redirect, useLocation, useHistory} from 'react-router-dom'
import ThemeContext from './ThemeContext'
import UserContext from './UserContext'

const Home = () => {
  const theme = useContext(ThemeContext)
  const {login, authenticated} = useContext(UserContext)

  const location = useLocation()
  const history = useHistory()


  function singIn() {
    login()
    history.push(location.state?.oldPath ? location.state.oldPath : '/')
  }

  if (authenticated) {
    return <Redirect to='/' />
  }

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
      <h1>Login Page</h1>
      
      <span onClick={singIn}>Login</span>
    </article>
  )
}

export default Home
