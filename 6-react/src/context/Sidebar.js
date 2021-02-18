import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import ThemeContext from './ThemeContext'
import UserContext from './UserContext'
import './sidebar.css'

export class Sidebar extends Component {
  static contextType = ThemeContext

  render () {
    return (
      <div
        style={{
          border: '1px solid',
          margin: '1em',
          padding: '1em',
          flex: 1,
          ...this.context
        }}
      >
        <h3>Sidebar</h3>
        <ul>
          <li>
            <NavLink exact to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/about'}>About</NavLink>
          </li>
          <li>
            <NavLink to={'/contact'}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={'/posts'}>Posts</NavLink>
          </li>
          <UserContext.Consumer>
            {({authenticated}) => authenticated && (
              <li>
                <NavLink to={'/profile'}>Profile</NavLink>
              </li>
            )}
          </UserContext.Consumer>
        </ul>
      </div>
    )
  }
}

export default Sidebar
