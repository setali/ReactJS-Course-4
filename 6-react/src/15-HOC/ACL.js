// ACCESS CONTROL LIST
import React from 'react'

const user = {
  name: 'Ali',
  family: 'Mousavi',
  permissions: ['view-task-list', 'remove-task', 'add-task']
}

export default function ACL (Component) {

  return class MyACL extends React.Component {
    render () {
      return user.permissions.includes(this.props.permission) && <Component {...this.props} />
      // if (user.permissions.includes(this.props.permission)) {
      //   return <Component {...this.props}/>
      // }
      // else {
      //   return null
      // }
    }
  }
}

export function acl(permission) {
  return user.permissions.includes(permission)
}
