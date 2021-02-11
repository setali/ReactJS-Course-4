import { useReducer, useState } from 'react'

const defaultState = 0

function reducer (state, { type, payload }) {
  console.log(state)
  switch (type) {
    case 'ADD':
      return state + (payload || 1)

    case 'SUB':
      return state - (payload || 1)

    case 'RESET':
      return defaultState

    default:
      return state
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)
  const [count, setCount] = useState('')

  function add () {
    dispatch({ type: 'ADD', payload: +count })
    setCount('')
  }

  return (
    <div>
      {state}
      <hr />

      <button onClick={() => dispatch({ type: 'ADD' })}>+</button>
      <button onClick={() => dispatch({ type: 'ADD', payload: 2 })}>+2</button>
      <button onClick={() => dispatch({ type: 'ADD', payload: 3 })}>+3</button>
      <button onClick={() => dispatch({ type: 'SUB' })}>-</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>reset</button>

      <hr />

      <input
        type='text'
        value={count}
        onChange={e => setCount(e.target.value)}
      />
      <button onClick={add}>Add</button>
    </div>
  )
}

export default App
