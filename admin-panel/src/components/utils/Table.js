import { Table as AntTable } from 'antd'

const Table = ({columns, data, ...otherProps}) => {
    console.log(otherProps)

    const tableColumns = columns.map(column => ({...column, dataIndex: column.key}))

    return (
        <div>
             <AntTable
                    columns={tableColumns}
                    dataSource={data}
                    {...otherProps}
                />
        </div>
    )
}

Table.defaultProps = {
    rowKey: 'id'
}

export default Table
