import { useState } from 'react'
import SceneCanvas from './components/scene/SceneCanvas'
import ObjectsEditor from './components/editor/ShapeEditor'
import './App.css'

export interface SceneObject {
  id: string
  type: 'cube' | 'sphere'
  position: [number, number, number]
  rotation: [number, number, number]
  scale: [number, number, number]
  color: string
}

function App() {
  // This is the array to store of all objects in the scene
  const [sceneObjects, setSceneObjects] = useState<SceneObject[]>([])

  // add a new object
  const addObject = (type: 'cube' | 'sphere') => {
    const newObject: SceneObject = {
      id: `${type}_${Date.now()}`, // Unique ID using current time
      type: type,
      position: [0, 0, 0], 
      rotation: [0, 0, 0], 
      scale: [1, 1, 1],  
      color: type === 'cube' ? '#ff6b35' : '#4fc3f7' 
    }

    setSceneObjects(prev => [...prev, newObject])
    console.log(`Added ${type}!`, newObject)
  }

  return (
    <div className="App">
      <SceneCanvas objects={sceneObjects} />
      <ObjectsEditor onAddObject={addObject} />
    </div>
  )
}

export default App