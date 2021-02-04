import {useState} from 'react'

const Counter = () => {

    const [state, setState] = useState(9)
    const [count, setCount] = useState(0)



    function increase() {
        setState(state + 1)
        setCount(count + 1)
    }

    console.log('render')
    return (
        <div>
            {state}
            <button onClick={increase}>
                +
            </button>
            <hr/>

            {count}
            <button onClick={() => setCount(count + 1)}>
                +
            </button>
        </div>
    )
}

export default Counter
