import React, { Component } from 'react'
import ThemeContext from './ThemeContext'

export class Footer extends Component {
  render () {
    return (
      <div
        style={{
          border: '1px solid',
          margin: '1em',
          padding: '1em',
          ...this.context
        }}
      >
        Footer
      </div>
    )
  }
}

Footer.contextType = ThemeContext

export default Footer
