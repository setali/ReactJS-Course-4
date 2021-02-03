import React from 'react'

class CreateRef extends React.Component {

  state = {
    show: false
  }

  textInputRef = React.createRef()

  toggleInput() {
    this.setState(s => ({show: !s.show}), () => {
      console.log(this.textInputRef.current)
      if (this.textInputRef.current) {
        this.textInputRef.current.focus()
      }
    })
  }

  render () {
    return (
      <div>
        <button onClick={() => this.toggleInput()}>
          {this.state.show ? 'Hide' : 'Show'}
        </button>
        {this.state.show &&
        <input ref={this.textInputRef} type="text"/>}
      </div>
    );
  }
}

export default CreateRef