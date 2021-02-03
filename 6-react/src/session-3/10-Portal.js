import React from 'react'
import ReactDOM from 'react-dom'

const portal = document.getElementById('portal')

class Portal extends React.Component {
  state = {counter: 0}
  
  componentDidMount () {
    setInterval(() => this.setState({counter: this.state.counter + 1}), 1000)
  }

  render () {
    const p = ReactDOM.createPortal(this.state.counter, portal)
    console.log(p)
    return p
  }
}

export default Portal