import axios from 'axios'
import Link from 'next/link'

const User = ({user = {}}) => {
    return (
        <div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>

            <hr />

            <Link href={"/user"}>
                <a>
                    Return to list
                </a>
            </Link>
        </div>
    )
}

export async function getStaticPaths() {

    // const users = [
    //     {params: {id: '1'}},
    //     {params: {id: '2'}},
    //     {params: {id: '3'}},
    // ]

    const {data: users} = await axios('https://jsonplaceholder.typicode.com/users')

    users.length = 5
    const paths = users.map(user => ({params: {id: `${user.id}`}}))

    return {
        paths ,
        fallback: true
    }
}

export async function getStaticProps({params}) {

    const {data: user} = await axios(`https://jsonplaceholder.typicode.com/users/${params.id}`)

    console.log('Get user')

    return {
        props: {
            user
        },
        revalidate: 5
    }
}


export default User
