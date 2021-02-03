import React from 'react'
import ACL from './ACL'

class Button extends React.Component {

  render () {
    return (
      <button {...this.props}>
        {this.props.children}
      </button>
    )
  }
}

export default ACL(Button)
