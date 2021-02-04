import {useState, useEffect} from 'react'

const Counter = () => {

    // EA1236
    // EB4368
    const [count, setCount] = useState(0)

    useEffect(() => {
        
        console.log('useEffect', count)
        
        const intervalId = setInterval(() => {
            console.log('setInterval', count)
            setCount(s => s + 1)
        }, 1000)
        
        return () => {
            console.log('clearInterval', count)
            clearInterval(intervalId)
        }
    }, [])


    return (
        <div>
            {count}
        </div>
    )
}

export default Counter
