import React from 'react'


const data = [
  {name: 'Ali', family: 'Mousavi'},
  {name: 'Saeed', family: 'Ghadiri'},
  {name: 'Neda', family: 'Moeini'},
  {name: 'Samira', family: 'RadmaneshFar'},
  {name: 'Froutan', family: 'Aghdasi'},
  {name: 'Kianoosh', family: 'Soleimani'},
]

export default class Table extends React.Component {

  render () {
    return (
      <table border={1}>
        {data.map(el => (
          <tr key={el.name+el.family}>
            <Columns el={el} />
          </tr>
        ))}
      </table>
    );
  }
}

class Columns extends React.Component {

  render () {
    return (
      <React.Fragment>
        <td>{this.props.el.name}</td>
        <td>{this.props.el.family}</td>
      </React.Fragment>

    );
  }
}





















