import BasicEvent from './components/BasicEvent'
import EventObjects from './components/EventObjects'
import PropEvents from './components/PropEvents'
import Propagation from './components/Propagation'
import '../src/App.css'

function App() {
  return (
    <div>
      <BasicEvent/>
      <PropEvents/>
      <Propagation/>
      <EventObjects/>
    </div>
  )
}

export default App
