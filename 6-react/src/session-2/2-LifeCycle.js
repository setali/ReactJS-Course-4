import React from 'react'

class LifeCycle extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      counter: 0
    }
    console.log('constructor')
  }

  componentDidMount () {
    console.log('componentDidMount')
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', props, state)

    if (state.counter % 2) {
      return {
        counter: state.counter + 1
      }
    }

    return null
  }

  shouldComponentUpdate (nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate', nextProps, nextState)

    if (nextState.counter % 4 === 0) {
      return false
    }

    return true
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log('componentDidUpdate')
    console.log('state: ', prevState, '===>', this.state)
    console.log('props: ', prevProps, '===>', this.props)
    console.log('snapshot: ', snapshot)
  }

  getSnapshotBeforeUpdate (prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate')
    return this.state.counter - prevState.counter
  }

  render () {
    console.log('render')
    return (
      <div>
        {this.state.counter}
        <button onClick={() => this.setState({counter: this.state.counter + 1})}>
          Increase
        </button>
      </div>
    );
  }
}

export default LifeCycle