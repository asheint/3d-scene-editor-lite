interface ObjectsEditorProps {
  onAddObject: (type: 'cube' | 'sphere') => void
}

export default function ObjectsEditor({ onAddObject }: ObjectsEditorProps) {
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
    </div>
  )
}