import './App.css'
import Meditation from './components/Meditation'
import meditations from './data/meditations.js'
import LiveClass from './components/LiveClass'
import liveClasses from './data/liveClasses'
import Social from './components/Social'

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
      {/* <p>
        Open is a mindfulness studio. Enter a place to come to your senses —
        meditation, music, breathwork, and movement awaken body and mind to
        bring you to the present moment.
      </p> */}
      <div className="main">
        <aside>
          <LiveClass liveclasses={liveClasses} />
        </aside>
        <div className="meditationChunk">
          {meditations.map((meditation) => (
            <Meditation key={meditation.id} meditation={meditation} />
          ))}
        </div>
      </div>
      <footer>
        <Social />
      </footer>
    </div>
  )
}

export default App
