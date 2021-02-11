import { useState, useReducer } from 'react'

function getId (todos) {
  return todos.length ? todos[todos.length - 1].id + 1 : 1
}

function reducer (state, { type, payload }) {
  switch (type) {
    case 'ADD_TODO':
      return [...state, { title: payload, id: getId(state) }]

    case 'REMOVE_TODO':
      return state.filter(el => el.id !== payload)

    default:
      break
  }

  return state
}

const TodosUseState = () => {
  const [todos, dispatch] = useReducer(reducer, [])
  const [task, setTask] = useState('')

  function addTodo () {
    dispatch({ type: 'ADD_TODO', payload: task })
    setTask('')
  }

  function removeTodo (id) {
    dispatch({ type: 'REMOVE_TODO', payload: id })
  }

  return (
    <div>
      <ol>
        {todos.map(({ id, title }, index) => (
          <li key={id}>
            {`id: ${id}, ${title}`}
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
