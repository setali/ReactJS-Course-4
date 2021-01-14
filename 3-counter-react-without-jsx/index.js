class Counter extends React.Component {

  state = {
    value: 0
  }

  counter = () => React.createElement('span', {}, this.state.value)

  increaseButton = () => {
    return React.createElement(
      'button',
      {
        style: {margin: '10px'},
        onClick: () => {this.setState({value: this.state.value + 1})}
      },
      'Increase'
    )
  }

  decreaseButton = () => {
    return React.createElement(
      'button',
      {
        onClick: () => {this.setState({value: this.state.value - 1})}
      },
      'Decrease'
    )
  }

  render() {
    return React.createElement(
      'div',
      {},
      this.counter(),
      this.increaseButton(),
      this.decreaseButton()
    )
  }
}


const element = React.createElement(Counter)


ReactDOM.render(element, document.getElementById('root'))