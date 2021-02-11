import { useRef, useEffect } from 'react'

const App = () => {
  const myInput = useRef()

  useEffect(() => {
    myInput.current.focus()
  }, [])

  return (
    <div>
      <input type='text' ref={myInput} />
    </div>
  )
}

export default App
