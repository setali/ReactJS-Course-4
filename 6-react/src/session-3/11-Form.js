import React from 'react'

class Form extends React.Component {

  constructor () {
    super();
    this.state = {
      username: '',
      password: ''
    }

    this.handleChangeUsername = this.handleChangeUsername.bind(this)
  }

  handleChangeUsername(e) {
    this.setState({username: e.target.value})
  }

  handleChangePassword(e) {
    this.setState({password: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state)
    this.setState({
      username: '',
      password: ''
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            username:
          </label>
          <input type="text" value={this.state.username} onChange={this.handleChangeUsername}/>

          <label>
            password:
          </label>
          <input type="text" value={this.state.password} onChange={(e) => this.handleChangePassword(e)}/>

          <hr/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

class AdvanceForm extends React.Component {

  constructor () {
    super();
    this.state = {
      username: '',
      password: ''
    }

    this.handleChangeInput = this.handleChangeInput.bind(this)
  }

  handleChangeInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state)
    this.setState({
      username: '',
      password: ''
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            username:
          </label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChangeInput}
          />

          <label>
            password:
          </label>
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleChangeInput}
          />

          <hr/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default AdvanceForm
