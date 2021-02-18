import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import cookie from 'js-cookie'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Posts from './Posts'
import Post from './Post'
import Login from './Login'
import Sidebar from './Sidebar'
import NotFound from './NotFound'
import Profile from './Profile'
import PrivateRoute from './PrivateRoute'
import ThemeContext, { themes } from './ThemeContext'
import UserContext from './UserContext'

const App = () => {
  const [theme, setTheme] = useState(themes.dark)
  const [user, setUser] = useState({})
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = cookie.get('token')
    if (token) {
      getUser()
    }
    else {
      setLoading(false)
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

  return (
    <div>
      <Router>
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
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/posts' exact>
                  <Posts />
                </Route>
                <Route path='/posts/:id' render={props => <Post {...props}/>} />
                <Route path='/login' component={Login} />
                <PrivateRoute path='/profile' component={Profile} />
                <Route path='*' component={NotFound} />
                {/* <Redirect to={'/'} /> */}
              </Switch>
            </section>

            <Footer />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </Router>
    </div>
  )
}

export default App
