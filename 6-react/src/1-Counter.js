import React from 'react'

class Counter extends React.Component {

  // state = {
  //   counter: 0
  // }

  constructor (props) {
    super(props);
    this.state = {
      counter: props.initCounter
    }
    this.increase = this.increase.bind(this)
  }

  increase () {
    this.setState({counter: this.state.counter + 1})
  }

  decrease = () => this.setState({counter: this.state.counter - 1})

  render () {
    console.log('render', this.props.name)
    return (
      <div>
        Counter: {this.state.counter}
        <button onClick={this.increase}>+</button>
        {/*<button onClick={this.increase.bind(this)}>+</button>*/}
        <button onClick={this.decrease}>-</button>
      </div>
    );
  }
}

export default Counter