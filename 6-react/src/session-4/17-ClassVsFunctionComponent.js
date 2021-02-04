import React, { Component, useState } from 'react'

function CounterFunction() {

    const [count, setCount] = useState(0)

    return (
        <div>
            {count}
            <button onClick={() => setCount(count + 1)}>
                +
            </button>
        </div>
    )
}


export class CounterClass extends Component {
    
    state = {count: 0}
    render() {
        return (
            <div>
                {this.state.count}
                <button 
                onClick={() => this.setState({count: this.state.count + 1})}>
                    +
                </button>
            </div>
        )
    }
}

export default CounterClass
// export default CounterFunction
