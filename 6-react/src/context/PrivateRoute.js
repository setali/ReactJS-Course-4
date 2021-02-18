import { useContext } from "react"
import { Route, Redirect, useLocation } from 'react-router-dom'
import UserContext from './UserContext'
 
const PrivateRoute = (props) => {
    const {authenticated} = useContext(UserContext)
    const {pathname} = useLocation()

    if (authenticated) {
        return <Route {...props}/>
    }

    return <Redirect to={{pathname: '/login', state: {oldPath: pathname}}} />
}

export default PrivateRoute
