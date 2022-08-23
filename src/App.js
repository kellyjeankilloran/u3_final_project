import './App.css'
import Meditation from './components/Meditation'
import meditations from './data/meditations.js'

const App = () => {
  return (
    <div className="App">
      <h1>Daily Meditation Archive</h1>
      {meditations.map((meditation) => (
        <Meditation key={meditation.id} meditation={meditation} />
      ))}
    </div>
  )
}

export default App
