import type { SceneObject } from '../../App'

interface ObjectsEditorProps {
  onAddObject: (type: 'cube' | 'sphere') => void
  selectedObject: SceneObject | undefined
  onMoveObject: (direction: 'left' | 'right' | 'forward' | 'backward' | 'up' | 'down') => void
}

export default function ObjectsEditor({ onAddObject, selectedObject, onMoveObject }: ObjectsEditorProps) {
  const handleAddCube = () => {
    onAddObject('cube')
  }

  const handleAddSphere = () => {
    onAddObject('sphere')
  }

  return (
    <div className="objects-editor">
      <h1>Objects Editor</h1>
      
      <div className="add-objects-section">
        <h2>Add Objects</h2>
        
        <div className="shapes-row">
          <div 
            className="shape-preview"
            onClick={handleAddCube}
            title="Add Cube"
          >
            <div className="shape-icon cube-icon"></div>
            <span>Cube</span>
          </div>
          
          <div 
            className="shape-preview"
            onClick={handleAddSphere}
            title="Add Sphere"
          >
            <div className="shape-icon sphere-icon"></div>
            <span>Sphere</span>
          </div>
        </div>
      </div>

      {/* UPDATED: Move Object Section with 3D controls */}
      <div className="move-object-section">
        <h2>Move Object</h2>
        
        {selectedObject ? (
          <>
            <div className="selected-info">
              <p>Selected: {selectedObject.type}</p>
              <p className="position-info">
                Position: ({selectedObject.position[0].toFixed(1)}, {selectedObject.position[1].toFixed(1)}, {selectedObject.position[2].toFixed(1)})
              </p>
            </div>
            
            <div className="movement-controls">
  <div className="movement-grid">
    <button 
      className="arrow-btn"
      onClick={() => onMoveObject('left')}
      title="Move Left (X-)"
    >
      ←
    </button>
    <span className="axis-label">X</span>
    <button 
      className="arrow-btn"
      onClick={() => onMoveObject('right')}
      title="Move Right (X+)"
    >
      →
    </button>
    
    <button 
      className="arrow-btn"
      onClick={() => onMoveObject('down')}
      title="Move Down (Y-)"
    >
      ⬇
    </button>
    <span className="axis-label">Y</span>
    <button 
      className="arrow-btn"
      onClick={() => onMoveObject('up')}
      title="Move Up (Y+)"
    >
      ⬆
    </button>
    
    <button 
      className="arrow-btn"
      onClick={() => onMoveObject('forward')}
      title="Move Forward (Z-)"
    >
      ↑
    </button>
    <span className="axis-label">Z</span>
    <button 
      className="arrow-btn"
      onClick={() => onMoveObject('backward')}
      title="Move Backward (Z+)"
    >
      ↓
    </button>
  </div>
</div>
          </>
        ) : (
          <p className="no-selection">Click on an object to select it</p>
        )}
      </div>
    </div>
  )
}