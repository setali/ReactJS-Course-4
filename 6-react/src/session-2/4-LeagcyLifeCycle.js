import React from 'react'

class LegacyLifeCycle extends React.Component {

  componentWillMount () {
    console.log('UNSAFE_componentWillMount')
  }

  componentWillReceiveProps (nextProps, nextContext) {
    console.log('UNSAFE_componentWillReceiveProps')
  }

  UNSAFE_componentWillUpdate (nextProps, nextState, nextContext) {

  }

  render() {
    console.log('render')
    return (
      <div>
        LegacyLifeCycle
      </div>
    )
  }
}

export default LegacyLifeCycle