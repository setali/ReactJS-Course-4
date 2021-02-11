import { useState } from 'react'

const TodosUseState = () => {
  const [todos, setTodos] = useState([])
  const [task, setTask] = useState('')

  function getId () {
    return todos.length ? todos[todos.length - 1].id + 1 : 1
  }

  function addTodo () {
    setTodos(todos => [...todos, { id: getId(), title: task }])
    setTask('')
  }

  function removeTodo (id) {
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <ol>
        {todos.map(({ id, title }, index) => (
          <li key={id}>
            {`id: ${id}, index: ${index + 1}, ${title}`}
            <span
              style={{ margin: '5px', color: 'red' }}
              onClick={() => removeTodo(id)}
            >
              x
            </span>
          </li>
        ))}
      </ol>

      <input type='text' value={task} onChange={e => setTask(e.target.value)} />
      <button onClick={addTodo}>Add</button>
    </div>
  )
}

export default TodosUseState
