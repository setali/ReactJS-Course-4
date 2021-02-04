import {useState, useEffect} from 'react'

const App = () => {

    const [show, setShow] = useState(true)

    return (
        <div>
            <button onClick={() => setShow(!show)}>
                {show ? 'Hide' : 'Show'}
            </button>

            {show && <Counter />}
        </div>
    )
}

export default App


export const Counter = () => {

    const [counter,setCounter] = useState(0)
    const [status,setStatus] = useState(0)
    const [users,setUsers] = useState([])

    // cDM, cDU, cWU
    useEffect(() => {
        const timeoutId = setTimeout(() => setCounter(counter + 1), 8000)
        console.log('M timeoutId', timeoutId)
        
        return () => {
            console.log('U timeoutId', timeoutId)
            clearTimeout(timeoutId)
        }

    }, [counter])

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal

        fetch('https://jsonplaceholder.typicode.com/users', {signal})
        .then(response => response.json())
        .then(data => setUsers(data))
        

        return () => {
            controller.abort()
        }
    }, [])


    return (
        <div>
            <ol>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ol>
            <hr />
            {counter}
            <hr/>
            {status}
            <button onClick={() => setStatus(status + 1)}>
                +
            </button>

        </div>
    )
}

