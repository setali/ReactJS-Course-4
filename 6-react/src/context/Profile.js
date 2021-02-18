import { useContext } from 'react'
import ThemeContext from './ThemeContext'
import UserContext from './UserContext'

const Profile = () => {
  const theme = useContext(ThemeContext)
  const {user} = useContext(UserContext)

  return (
    <article
      style={{
        border: '1px solid',
        margin: '1em',
        padding: '1em',
        flex: 3,
        ...theme
      }}
    >
      <h1>My Profile</h1>
      <p>
        name: {user.name}
      </p>
    </article>
  )
}

export default Profile
