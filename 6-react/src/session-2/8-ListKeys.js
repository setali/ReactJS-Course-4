import { Component } from 'react'

class Users extends Component {

  state = {users: []}

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({users}))
  }

  render () {
    return (
      <ul>
        {this.state.users.map((user) => <User key={user.id} user={user} />)}
      </ul>
    );
  }
}

class User extends Component {

  render () {
    const {name} = this.props.user

    return (
      <li>
        {name}
      </li>
    );
  }
}

export default Users