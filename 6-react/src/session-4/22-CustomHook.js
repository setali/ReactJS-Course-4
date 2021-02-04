import {useState} from 'react'

const App = () => {

    const username = useForm()
    const password = useForm()

    console.log('username', username)

    return (
        <div>
        <input 
            type="text"
            placeholder="username"
            {...username}
        />
        <input 
            type="text"
            placeholder="password"
            {...password}
        />
        </div>
    )
}

function useForm(defaultValue = '') {
    const [value, setValue] = useState(defaultValue)

    return {
        value,
        onChange: e => setValue(e.target.value)
    }

}

// const App = () => {

//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')


//     return (
//         <div>
//         <input 
//             type="text"
//             placeholder="username"
//             value={username}
//             onChange={e => setUsername(e.target.value)}
//         />
//         <input 
//             type="text"
//             placeholder="password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//         />
//         </div>
//     )
// }

export default App
