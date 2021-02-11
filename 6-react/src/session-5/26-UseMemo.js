import { useState, useMemo, useEffect } from 'react'

const data = [
  { id: 1, title: 'Yek', parentId: null },
  { id: 2, title: 'Do', parentId: 1 },
  { id: 3, title: 'Se', parentId: 1 },
  { id: 4, title: 'Chahar', parentId: 3 },
  { id: 5, title: 'panj', parentId: 3 }
]

const App = () => {
  const [show, setShow] = useState(true)

  return (
    <div>
      <button onClick={() => setShow(s => !s)}>{show ? 'Hide' : 'Show'}</button>
      {show && <Child />}
    </div>
  )
}

const Child = () => {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(heavyProccess)
  useEffect(() => {
    const intervalId = setInterval(() => setCount(c => c + 1), 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  useEffect(() => {
    setValue(heavyProccess)
  }, [])

  //   const value = (999999999999999999n ** 9999n).toString()

  //   const value = useMemo(() => {
  //     console.log('salam')
  //     return (999999999999999999n ** 9999n).toString()
  //   }, [])

  function heavyProccess () {
    console.log('salam')
    return (99999999999n ** 9999n).toString()
  }

  //   const permissions = useMemo(() => {
  //       return func(data)
  //   }, [data])

  return (
    <div>
      count: {count}
      <hr />
      value: {value}
    </div>
  )
}

export default App
