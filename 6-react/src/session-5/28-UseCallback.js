import { useEffect, useState, useCallback } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [height, setHeight] = useState(0)
  useEffect(() => {
    const intervalId = setInterval(() => setCount(c => c + 1), 1000)
    return () => clearInterval(intervalId)
  }, [])

  //   const myInput = function (node) {
  //     console.log('node:', node)
  //     if (node !== null) {
  //       node.focus()
  //     }
  //   }

  const myInput = useCallback(node => {
    node?.focus()
  }, [])

  const myHeight = useCallback(node => {
    node && setHeight(node.getBoundingClientRect().height.toFixed(2))
  }, [])

  return (
    <div>
      <h4 ref={myHeight}>Salam</h4>
      <div>Height: {height}</div>
      <hr />
      {count}
      <hr />
      <input ref={myInput} />
    </div>
  )
}

export default App
