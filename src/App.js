import './App.css'
import Meditation from './components/Meditation'
import meditations from './data/meditations.js'

const App = () => {
  return (
    <div className="App">
      <nav>
        <section>
          <div>HOME</div>
          <div>ABOUT</div>
          <div>CLASSES</div>
        </section>
        <div>LOG OUT</div>
      </nav>
      <h1>Op e n Meditation Archive</h1>
      {meditations.map((meditation) => (
        <Meditation key={meditation.id} meditation={meditation} />
      ))}
    </div>
  )
}

export default App
