import {useRouter} from 'next/router'
import axios from 'axios'

const Post = ({post}) => {

    // const router = useRouter()

    // console.log(router.query)

    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    )
}

export async function getServerSideProps({params}) {

    const {data: post} = await axios(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

    return {
        props: {
            post
        }
    }
}


export default Post
