import React from 'react'

class Counter extends React.Component {

  state = { value: 0 }

  render() {

    return (
      <div>
        <span>{`Counter value is ${this.state.value}`}</span>
        <button style={{margin: '10px'}} onClick={() => {this.setState({value: this.state.value + 1})}}>Increase</button>
        <button onClick={() => {this.setState({value: this.state.value - 1})}}>Decrease</button>
      </div>
    )
  }
}

export default Counter