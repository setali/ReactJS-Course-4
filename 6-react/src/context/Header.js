import React, { Component } from 'react'
import ThemeContext from './ThemeContext'
import UserContext from './UserContext'

export class Header extends Component {
  render () {
    return (
      <UserContext.Consumer>
        {({ user, authenticated, login, logout, loading }) => (
          <ThemeContext.Consumer>
            {theme => (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  border: '1px solid',
                  margin: '1em',
                  padding: '1em',
                  ...theme
                }}
              >
                <h2>Header</h2>

                {!loading &&
                  (authenticated ? (
                    <span>
                      {user.name}{' '}
                      <span onClick={logout} style={{ color: 'red' }}>
                        Logout
                      </span>
                    </span>
                  ) : (
                    <span onClick={login}>Login</span>
                  ))}
              </div>
            )}
          </ThemeContext.Consumer>
        )}
      </UserContext.Consumer>
    )
  }
}

export default Header
