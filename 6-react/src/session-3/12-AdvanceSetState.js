import React from 'react'

class AdvanceSetState extends React.Component {

  state = {
    tasks: [],
    count: 0
  }

  generateTask() {
    const time = Date.now()

    return {
      title: `Task ${time}`,
      id: time
    }
  }

  addTask () {
    const task = this.generateTask()
    this.setState(state => ({tasks: [...state.tasks, task]}), () => console.log(this.state.tasks))

    this.setState((state) => ({count: state.tasks.length}), () => console.log('Initial Count'))
    // this.setState({count: 10})
  }

  render () {
    return (
      <div>
        <button onClick={() => this.addTask()}>Add task</button>
        <hr/>
        <div>
          Count: {this.state.count}
        </div>
        <ol>
          {this.state.tasks.map(task => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default AdvanceSetState