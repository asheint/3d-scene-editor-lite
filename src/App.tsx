import SceneCanvas from './components/scene/SceneCanvas'
import ObjectsEditor from './components/editor/ShapeEditor' // Note: still same file, just renamed component
import './App.css'

function App() {
  return (
    <div className="App">
      <SceneCanvas />
      <ObjectsEditor />
    </div>
  )
}

export default App