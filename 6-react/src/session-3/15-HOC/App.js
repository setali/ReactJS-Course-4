import React from 'react'
import Tasks from './Tasks'
import Button from './Button'
import {acl} from './ACL'

class App extends React.Component {

  render () {
    return (
      <div>
        <h2>My App</h2>
        <hr/>

        <Button permission="add-task"> Add task </Button>

        <Tasks permission="view-task-list" title="Task list" />

        {/*{acl('view-task-list') && <Tasks title="Task list" />}*/}
      </div>
    );
  }
}

export default App
