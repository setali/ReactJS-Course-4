import Link from 'next/link'
import {useState, useEffect} from 'react'
import axios from 'axios'

const Posts = ({posts}) => {

    // const [posts, setPosts] = useState([])

    // useEffect(() => {
    //     // axios('https://jsonplaceholder.typicode.com/posts')
    //     //     .then(response => setPosts(response.data))
    //     console.log(posts)
    // }, [])


    return (
        <div>
            <h2>
                Posts list
            </h2>
            <ol>
                {posts.map(({id, title}) => (
                    <Link href={`/post/${id}`}  key={id}>
                        <a>
                            <li>
                                {title}
                            </li>
                        </a>
                    </Link>
                ))}
            </ol>
        </div>
    )
}

// function delay(time) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(), time * 1000)
//     })
// }

export async function getServerSideProps() {

    // const response = await axios('https://jsonplaceholder.typicode.com/posts')
    // const posts = response.data

    const {data: posts} = await axios('https://jsonplaceholder.typicode.com/posts')

    // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    // const posts = await response.json()

    // await delay(10)

    return {
        props: {
            posts
        }
    }
}


export default Posts
