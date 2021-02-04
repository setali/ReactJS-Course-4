import React from 'react'


export default class Users extends React.Component {

    state = {
        users: [
            {id: 1, name: 'Ali'},
            {id: 2, name: 'Masan'},
            {id: 3, name: 'Qoli'},
        ]
    }

    render() {
        return (
            <div>
                {this.state.users.map(user => 
                <User key={user.id} user={user} />)}
            </div>
        )
    }

}

function User({user} ) {

    return (
        <div>
            <span>Name:</span>
            <span>{user.name}</span>
        </div>
    )
}

// class User extends React.Component {
//     render() {
//         return (
//             <div>
//                 <span>Name:</span>
//                 <span>{this.props.user.name}</span>
//             </div>
//         )
//     }
// }
