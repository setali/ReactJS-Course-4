import { useState, useEffect } from 'react'
import Todos from './Todos'

const Post = () => {
  const [post, setPost] = useState({})

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => setPost(data))
  }, [])

  return (
    <div>
      <h1>Post item</h1>
      <p>{post.title}</p>
    </div>
  )
}

export default Post
