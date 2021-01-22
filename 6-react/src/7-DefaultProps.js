import {Component} from 'react'

class Title extends Component {

  // static defaultProps = {
  //   color: 'red',
  //   name: 'Ali'
  // }

  render () {
    return (
      <div>
        <h1 style={{color: this.props.color}}>
          {this.props.name}
        </h1>
      </div>
    );
  }
}

Title.defaultProps = {
  color: 'red',
  name: 'Ali'
}




export default Title