import { useRouter } from 'next/router'
import Head from 'next/head'
import axios from 'axios'
import Error from '../_error'

const Post = ({ post = {}, statusCode }) => {
  // const router = useRouter()

  // console.log(router.query)

  if (statusCode) {
    return <Error statusCode={statusCode} />
  }

  return (
    <div>
      <Head>
        <title>ReactJS | {post.title}</title>
      </Head>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  )
}

export async function getServerSideProps ({ params, req }) {
  let statusCode = null,
    post

  try {
    const response = await axios(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    )

    post = response.data
  } catch (e) {
    statusCode = e.response.status
  }

  return {
    props: {
      post,
      statusCode
    }
  }
}

export default Post
