import { Component } from 'react'

export default class Parent extends Component {
  render () {
    return (
      <div>
        <ErrorBoundaries>
          <Child/>
          <Child/>
          <Child/>
        </ErrorBoundaries>
      </div>
    );
  }
}

class ErrorBoundaries extends Component {

  state = {hasError: false}

  static getDerivedStateFromError(error) {
    console.log('My Error =>', error.message)
    return {
      hasError: true
    }
  }

  // componentDidCatch (error, errorInfo) {
  //   console.log('My Error =>', error.message)
  //   this.setState({hasError: true})
  // }

  render () {

    if (this.state.hasError) {
      return 'Sorry!!!! App crashed'
    }

    console.log(this.props.children[0])
    return this.props.children
  }
}

class Child extends Component {
  state = {counter: 0}

  render () {

    if (this.state.counter === 4) {
      throw new Error('App crashed')
    }

    return (
      <div>
        Child: {this.state.counter}

        <button onClick={() => this.setState({
          counter: this.state.counter + 1
        })}>
          Increase
        </button>
      </div>
    );
  }
}