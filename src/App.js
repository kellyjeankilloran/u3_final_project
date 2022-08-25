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
      <div className="main">
        <aside>
          <LiveClass liveclasses={liveClasses} />
          {/* <ClassOne variable />
        <ClassOne variable />
        <ClassOne variable />
        <ClassOne variable /> */}
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
