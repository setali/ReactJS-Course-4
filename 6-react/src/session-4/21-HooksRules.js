import {useState, useEffect} from 'react'

const name = 'ali'

function App() {

    const [count, setCount] = useState(0)
    const [status, setStatus] = useState(0)

    // if (true) {
    //     const [count, setCount] = useState(0)
    // }

    useEffect(() => {
        console.log('salam')
    }, [count])

    const [ali, setAli] = useState(0)

    // function func() {
    //     const [count, setCount] = useState(0)
    // }



    // for (let index = 0; index < 5; index++) {
    //     const [count, setCount] = useState(0)
    // }

    return (
        <div>
            {count}
        </div>
    )
}

export default App
