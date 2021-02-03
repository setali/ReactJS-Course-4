import React from 'react'

class App extends React.Component {

  state = {
    counter1: 0,
    counter2: 0
  }

  render () {
    console.log('Parent render')
    return (
      <div>
        <div>Counter 1 : {this.state.counter1}</div>
        <div>Counter 2 : {this.state.counter2}</div>

        <button onClick={() => this.setState(s => ({counter1: s.counter1 + 1}))}>
          Change Counter 1
        </button>
        <button onClick={() => this.setState(s => ({counter2: s.counter2 + 1}))}>
          Change Counter 2
        </button>

        <MyPureComponent counter={[this.state.counter1]} />
        <MyComponent counter={[this.state.counter1]} />

      </div>
    );
  }
}

class MyPureComponent extends React.PureComponent {

  render () {
    console.log('My Pur Component render', this.props.counter[0])
    return (
      <div>
        My Pure Component {this.props.counter[0]}
      </div>
    );
  }
}

class MyComponent extends React.Component {

  shouldComponentUpdate (nextProps, nextState, nextContext) {
    return nextProps.counter !== this.props.counter[0]
  }

  render () {
    console.log('My Component render', this.props.counter[0])
    return (
      <div>
        My Component {this.props.counter[0]}
      </div>
    );
  }
}

export default App