import { useState, useEffect } from 'react'
import cookie from 'js-cookie'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Sidebar from './Sidebar'
import ThemeContext, { themes } from './ThemeContext'
import UserContext from './UserContext'

const App = () => {
  const [theme, setTheme] = useState(themes.light)
  const [user, setUser] = useState({})
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const token = cookie.get('token')
    if (token) {
      getUser()
    }
  }, [])

  function getUser () {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(result => {
        setUser(result)
        setAuthenticated(true)
      })
      .finally(() => setLoading(false))
  }

  function login () {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(result => {
        setUser(result)
        setAuthenticated(true)
        cookie.set('token', 'my-token', { expires: 7 })
      })
      .finally(() => setLoading(false))
  }

  function logout () {
    setUser({})
    setAuthenticated(false)
    cookie.remove('token')
  }

  if (loading) {
    return 'Loading ........'
  }
  console.log('theme:', theme)
  return (
    <div>
      <UserContext.Provider
        value={{ user, authenticated, login, logout, loading }}
      >
        <ThemeContext.Provider value={theme}>
          <div>
            {theme === themes.light ? (
              <button onClick={() => setTheme(themes.dark)}>Dark</button>
            ) : (
              <button onClick={() => setTheme(themes.light)}>Light</button>
            )}
          </div>
          <Header />
          <section style={{ display: 'flex' }}>
            <Sidebar />
            <Home />
          </section>

          <Footer />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App
