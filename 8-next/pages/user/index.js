import axios from 'axios'
import Link from 'next/link'


const Users = ({users}) => {
    return (
        <div>
            <h2>
                Users list
            </h2>
            <ol>
                {users.map(({id, name}) => (
                    <Link href={`/user/${id}`}  key={id}>
                        <a>
                            <li>
                                {name}
                            </li>
                        </a>
                    </Link>
                ))}
            </ol>
        </div>
    )
}

export async function getStaticProps() {
    const {data: users} = await axios('https://jsonplaceholder.typicode.com/users')

    // users.length = 5
    console.log('salam')
    return {
        props: {
            users
        },
        revalidate: 5 // seconds
    }
}

export default Users
