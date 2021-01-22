import { Component } from 'react'
// import Counter from './1-Counter'
// import LifeCycle from './2-LifeCycle'
// import ForceUpdate from './3-ForceUpdate'
// import LegacyLifeCycle from './4-LeagcyLifeCycle'
// import UnMounting from './5-UnMounting'
// import ErrorBoundaries from './6-ErrorBoundaries'
// import DefaultProps from './7-DefaultProps'
import ListKeys from './8-ListKeys'

class App extends Component {

  render () {
    return (
      <div className="App">
        <ListKeys />
        {/*<DefaultProps name='Foroutan'  />*/}
        {/*<DefaultProps color='blue'  />*/}
        {/*<DefaultProps name='Saeed' color='green'  />*/}
        {/*<DefaultProps name='Neda' color='black'  />*/}
        {/*<DefaultProps name='Negin' color='yellow'  />*/}
        {/*<ErrorBoundaries />*/}
        {/*<UnMounting />*/}
        {/*<LegacyLifeCycle />*/}
        {/*<ForceUpdate />*/}
        {/*<LifeCycle />*/}
        {/*<Counter initCounter={0} name={'Counter-1'} />*/}
        {/*<Counter> SALAM </Counter>*/}
        {/*<Counter initCounter={10} name={'Counter-2'}/>*/}
        {/*<Counter initCounter={20} name={'Counter-3'}/>*/}
      </div>
    )
  }

}

export default App;
