import type { SceneObject } from "../../App";

interface ObjectsEditorProps {
  onAddObject: (type: "cube" | "sphere") => void;

  selectedObject: SceneObject | undefined;

  allObjects: SceneObject[];

  onMoveObject: (
    direction: "left" | "right" | "forward" | "backward" | "up" | "down"
  ) => void;

  onRotateObject: (
    axis: "x" | "y" | "z",
    direction: "positive" | "negative"
  ) => void;

  onScaleObject: (
    axis: "x" | "y" | "z",
    direction: "increase" | "decrease"
  ) => void;

  onSaveScene: () => void;

  onLoadScene: (event: React.ChangeEvent<HTMLInputElement>) => void;

  onDeleteObject: () => void;
}

export default function ObjectsEditor({
  onAddObject,
  selectedObject,
  allObjects,
  onMoveObject,
  onRotateObject,
  onScaleObject,
  onSaveScene,
  onLoadScene,
  onDeleteObject,
}: ObjectsEditorProps) {
  const handleAddCube = () => {
    onAddObject("cube");
  };

  const handleAddSphere = () => {
    onAddObject("sphere");
  };

  const radiansToDegrees = (radians: number) => {
    return ((radians * 180) / Math.PI).toFixed(0);
  };

  return (
    <div className="objects-editor">
      <h1>Objects Editor</h1>

      <div className="save-load-section">
        <div className="save-load-controls">
          <label htmlFor="load-scene-input" className="load-btn">
            Load Scene
            <input
              id="load-scene-input"
              type="file"
              accept=".json"
              onChange={onLoadScene}
              style={{ display: "none" }}
            />
          </label>

          <button
            className={`save-btn ${allObjects.length === 0 ? "disabled" : ""}`}
            onClick={() => {
              if (allObjects.length === 0) {
                alert("Cannot save an empty scene. Add some objects first!");
                return;
              }
              onSaveScene();
            }}
            disabled={allObjects.length === 0}
            title={
              allObjects.length === 0
                ? "Add objects to save scene"
                : "Export scene as JSON file"
            }
          >
            Save Scene
          </button>
        </div>
      </div>

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

      {selectedObject ? (
        <>
          <div className="move-object-section">
            <h2>Move Object</h2>
            <div className="selected-info">
              <p>Selected: {selectedObject.type}</p>
              <p className="position-info">
                Position: ({selectedObject.position[0].toFixed(1)},{" "}
                {selectedObject.position[1].toFixed(1)},{" "}
                {selectedObject.position[2].toFixed(1)})
              </p>
            </div>

            <div className="movement-controls">
              <div className="movement-grid">
                <button
                  className="arrow-btn"
                  onClick={() => onMoveObject("left")}
                  title="Move Left (X-)"
                >
                  ←
                </button>
                <span className="axis-label">X</span>
                <button
                  className="arrow-btn"
                  onClick={() => onMoveObject("right")}
                  title="Move Right (X+)"
                >
                  →
                </button>

                <button
                  className="arrow-btn"
                  onClick={() => onMoveObject("down")}
                  title="Move Down (Y-)"
                >
                  ⬇
                </button>
                <span className="axis-label">Y</span>
                <button
                  className="arrow-btn"
                  onClick={() => onMoveObject("up")}
                  title="Move Up (Y+)"
                >
                  ⬆
                </button>

                <button
                  className="arrow-btn"
                  onClick={() => onMoveObject("forward")}
                  title="Move Forward (Z-)"
                >
                  ↑
                </button>
                <span className="axis-label">Z</span>
                <button
                  className="arrow-btn"
                  onClick={() => onMoveObject("backward")}
                  title="Move Backward (Z+)"
                >
                  ↓
                </button>
              </div>
            </div>
          </div>

          <div className="rotate-object-section">
            <h2>Rotate Object</h2>
            <div className="selected-info">
              <p className="rotation-info">
                Rotation: ({radiansToDegrees(selectedObject.rotation[0])}°,{" "}
                {radiansToDegrees(selectedObject.rotation[1])}°,{" "}
                {radiansToDegrees(selectedObject.rotation[2])}°)
              </p>
            </div>

            <div className="rotation-controls">
              <div className="rotation-grid">
                <button
                  className="rotate-btn"
                  onClick={() => onRotateObject("x", "negative")}
                  title="Rotate X- (Pitch Down)"
                >
                  ↶
                </button>
                <span className="axis-label">X</span>
                <button
                  className="rotate-btn"
                  onClick={() => onRotateObject("x", "positive")}
                  title="Rotate X+ (Pitch Up)"
                >
                  ↷
                </button>

                <button
                  className="rotate-btn"
                  onClick={() => onRotateObject("y", "negative")}
                  title="Rotate Y- (Turn Left)"
                >
                  ↶
                </button>
                <span className="axis-label">Y</span>
                <button
                  className="rotate-btn"
                  onClick={() => onRotateObject("y", "positive")}
                  title="Rotate Y+ (Turn Right)"
                >
                  ↷
                </button>

                <button
                  className="rotate-btn"
                  onClick={() => onRotateObject("z", "negative")}
                  title="Rotate Z- (Roll Left)"
                >
                  ↶
                </button>
                <span className="axis-label">Z</span>
                <button
                  className="rotate-btn"
                  onClick={() => onRotateObject("z", "positive")}
                  title="Rotate Z+ (Roll Right)"
                >
                  ↷
                </button>
              </div>
            </div>
          </div>

          <div className="scale-object-section">
            <h2>Scale Object</h2>
            <div className="selected-info">
              <p className="scale-info">
                Scale: ({selectedObject.scale[0].toFixed(1)},{" "}
                {selectedObject.scale[1].toFixed(1)},{" "}
                {selectedObject.scale[2].toFixed(1)})
              </p>
            </div>

            <div className="scale-controls">
              <div className="scale-grid">
                <button
                  className="scale-btn"
                  onClick={() => onScaleObject("x", "decrease")}
                  title="Scale X- (Make Narrower)"
                >
                  ←
                </button>
                <span className="axis-label">X</span>
                <button
                  className="scale-btn"
                  onClick={() => onScaleObject("x", "increase")}
                  title="Scale X+ (Make Wider)"
                >
                  →
                </button>

                <button
                  className="scale-btn"
                  onClick={() => onScaleObject("y", "decrease")}
                  title="Scale Y- (Make Shorter)"
                >
                  ↓
                </button>
                <span className="axis-label">Y</span>
                <button
                  className="scale-btn"
                  onClick={() => onScaleObject("y", "increase")}
                  title="Scale Y+ (Make Taller)"
                >
                  ↑
                </button>

                <button
                  className="scale-btn"
                  onClick={() => onScaleObject("z", "decrease")}
                  title="Scale Z- (Make Thinner)"
                >
                  ↓
                </button>
                <span className="axis-label">Z</span>
                <button
                  className="scale-btn"
                  onClick={() => onScaleObject("z", "increase")}
                  title="Scale Z+ (Make Deeper)"
                >
                  ↑
                </button>
              </div>
            </div>
          </div>

          <div className="delete-object-section">
            <div className="delete-controls">
              <button
                className="delete-btn"
                onClick={onDeleteObject}
                title="Delete selected object"
              >
                Delete Object
              </button>
              <div className="selected-info">
                <p className="warning-text">⚠️ This action cannot be undone</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="no-selection-section">
          <h2>Object Controls</h2>
          <p className="no-selection">
            Click on an object to select it and access move, rotate, scale, and
            delete controls.
          </p>
        </div>
      )}
    </div>
  );
}
