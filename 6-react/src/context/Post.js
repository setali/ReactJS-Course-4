import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import { useContext } from 'react'
import ThemeContext from './ThemeContext'

const Post = (props) => {
  const theme = useContext(ThemeContext)
  const [post, setPost] = useState({})
  const {id} = useParams()

  console.log('rendr')

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
    .then(data => setPost(data))
  }, [id])

  return <div style={{
    border: '1px solid',
    margin: '1em',
    padding: '1em',
    flex: 3,
    ...theme
  }}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
  </div>
}

export default Post
