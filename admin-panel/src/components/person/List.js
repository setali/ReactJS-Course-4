import React from 'react'
import axios from 'axios'
import { DeleteOutlined } from '@ant-design/icons'
import Table from '../utils/Table'

class List extends React.Component {

    state = {
        users: [],
        loading: true
    }

    columns = [
        {
            title: 'Id',
            key: 'id',
        },
        {
            title: 'Name',
            key: 'name',
        },
        {
            title: 'Usernane',
            key: 'username',
        },
        {
            title: 'Address',
            key: 'address',
            render: (field, record) => `${field.city} ${field.street} ${field.suite}`
        },
        {
            title: 'Action',
            key: 'action',
            render: (f, r) => (<span onClick={() => this.remove(r.id)}><DeleteOutlined /></span>)
        },
    ];


    remove(id) {
        console.log(id)
        // axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`, { id })
        //     .then(response => console.log(response))
    }

    componentDidMount() {
        axios('https://jsonplaceholder.typicode.com/users')
            .then(response => this.setState({ users: response.data }))
            .finally(() => {
                this.setState({loading: false})
            }) 
    }


    render() {
        return (
            <div>
               <Table
                    columns={this.columns}
                    data={this.state.users}
                    loading={this.state.loading}
                />
            </div>
        )
    }
}

export default List