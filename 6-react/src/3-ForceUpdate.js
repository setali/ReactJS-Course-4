import React from 'react'

class ForceUpdate extends React.Component{

  getRandom = () => this.forceUpdate()

  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log('componentDidUpdate')
  }

  shouldComponentUpdate (nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate')
  }

  render () {
    return (
      <div>
        {Math.random()}
        <button onClick={this.getRandom}>
          Get random
        </button>
      </div>
    );
  }
}

export default ForceUpdate