import { useState } from 'react'

const Todos = () => {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  function addTodo (e) {
    e.preventDefault()
    if (!todo) return
    setTodos([...todos, todo])
    setTodo('')
  }
  return (
    <div>
      <ol data-testid='todos-list'>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ol>

      <form onSubmit={addTodo}>
        <input
          placeholder='Todo'
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />

        <button type='submit'>Add todo</button>
      </form>
    </div>
  )
}

export default Todos
