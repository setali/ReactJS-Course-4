import { Component } from 'react'
// import Counter from './session-2/1-Counter'
// import LifeCycle from './session-2/2-LifeCycle'
// import ForceUpdate from './session-2/3-ForceUpdate'
// import LegacyLifeCycle from './session-2/4-LeagcyLifeCycle'
// import UnMounting from './session-2/5-UnMounting'
// import ErrorBoundaries from './session-2/6-ErrorBoundaries'
// import DefaultProps from './session-2/7-DefaultProps'
// import ListKeys from './session-2/8-ListKeys'
// import Fragment from './9-Fragment'
// import Portal from './10-Portal'
// import Form from './11-Form'
// import AdvanceSetState from './12-AdvanceSetState'
// import CreateRef from './13-CreateRef'
// import PureComponent from './14-PureComponent'
import HOC from './15-HOC/App'

class App extends Component {

  render () {
    return (
      <div className="App">
        <HOC />
        {/*<PureComponent />*/}
        {/*<CreateRef />*/}
        {/*<AdvanceSetState />*/}
        {/*<Form />*/}
        {/*<Portal />*/}
        {/*<Fragment />*/}
        {/*<ListKeys />*/}
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
