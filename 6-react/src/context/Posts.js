import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import ThemeContext from './ThemeContext'

const Posts = () => {
    const theme = useContext(ThemeContext)

    const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
  }, [])

  return <div style={{
    border: '1px solid',
    margin: '1em',
    padding: '1em',
    flex: 3,
    ...theme
  }}>
      <ol>
          {posts.map(({id, title}) => (
            <li key={id}>
                <Link to={`/posts/${id}`}>
                {title}
                </Link>
            </li>
          ))
          }
      </ol>
  </div>
}

export default Posts
