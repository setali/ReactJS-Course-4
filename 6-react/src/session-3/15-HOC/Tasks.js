import React from 'react'
import Button from './Button'
import ACL from './ACL'

class Tasks extends React.Component {

  state = {
    tasks: [
      {id: 1, title: 'Task 1'},
      {id: 2, title: 'Task 2'},
    ]
  }

  render () {
    console.log('Tasks props => ', this.props)
    return (
      <div>
        <h4>{this.props.title}</h4>
        <ol>
          {
            this.state.tasks.map(({id, title}) => (
              <li key={id}>
                {title} {` - `}
                <Button permission="remove-task"> Remove Task </Button>
              </li>
            ))
          }
        </ol>
      </div>
    );
  }
}


export default ACL(Tasks)
// export default Tasks
