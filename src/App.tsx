import { useState } from "react";
import SceneCanvas from "./components/scene/SceneCanvas";
import ObjectsEditor from "./components/editor/ShapeEditor";
import "./App.css";

export interface SceneObject {
  id: string;
  type: "cube" | "sphere";
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  color: string;
}

function App() {
  const [sceneObjects, setSceneObjects] = useState<SceneObject[]>([]);
  const [selectedObjectId, setSelectedObjectId] = useState<string | null>(null);

  const addObject = (type: "cube" | "sphere") => {
    const newObject: SceneObject = {
      id: `${type}_${Date.now()}`,
      type: type,
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      color: type === "cube" ? "#ff6b35" : "#4fc3f7",
    };

    setSceneObjects((prev) => [...prev, newObject]);
    setSelectedObjectId(newObject.id);
    console.log(`Added ${type}!`, newObject);
  };

  const selectObject = (objectId: string) => {
    setSelectedObjectId(objectId);
    console.log(`Selected object: ${objectId}`);
  };

  const moveSelectedObject = (
    direction: "left" | "right" | "forward" | "backward" | "up" | "down"
  ) => {
    if (!selectedObjectId) {
      console.log("No object selected!");
      return;
    }

    setSceneObjects((prev) =>
      prev.map((obj) => {
        if (obj.id === selectedObjectId) {
          const newPosition: [number, number, number] = [...obj.position];

          switch (direction) {
            case "right":
              newPosition[0] += 1;
              break;
            case "left":
              newPosition[0] -= 1;
              break;
            case "up":
              newPosition[1] += 1;
              break;
            case "down":
              newPosition[1] -= 1;
              break;
            case "forward":
              newPosition[2] -= 1;
              break;
            case "backward":
              newPosition[2] += 1;
              break;
          }

          return { ...obj, position: newPosition };
        }
        return obj;
      })
    );

    console.log(`Moved ${direction}`);
  };

  const rotateSelectedObject = (
    axis: "x" | "y" | "z",
    direction: "positive" | "negative"
  ) => {
    if (!selectedObjectId) {
      console.log("No object selected!");
      return;
    }

    const rotationStep = 0.2;

    setSceneObjects((prev) =>
      prev.map((obj) => {
        if (obj.id === selectedObjectId) {
          const newRotation: [number, number, number] = [...obj.rotation];

          let axisIndex: number;
          if (axis === "x") {
            axisIndex = 0;
          } else if (axis === "y") {
            axisIndex = 1;
          } else {
            axisIndex = 2;
          }

          if (direction === "positive") {
            newRotation[axisIndex] += rotationStep;
          } else {
            newRotation[axisIndex] -= rotationStep;
          }

          return { ...obj, rotation: newRotation };
        }

        return obj;
      })
    );

    console.log(`Rotated ${axis}-axis ${direction}`);
  };

  const scaleSelectedObject = (
    axis: "x" | "y" | "z",
    direction: "increase" | "decrease"
  ) => {
    if (!selectedObjectId) {
      console.log("No object selected!");
      return;
    }

    const scaleStep = 0.1; // How much to scale each time

    setSceneObjects((prev) =>
      prev.map((obj) => {
        if (obj.id === selectedObjectId) {
          const newScale: [number, number, number] = [...obj.scale];

          // Figure out which axis to scale (0=X, 1=Y, 2=Z)
          let axisIndex: number;
          if (axis === "x") {
            axisIndex = 0;
          } else if (axis === "y") {
            axisIndex = 1;
          } else {
            axisIndex = 2;
          }

          // Increase or decrease the scale
          if (direction === "increase") {
            newScale[axisIndex] += scaleStep;
          } else {
            newScale[axisIndex] -= scaleStep;
            // Don't let it go below 0.1 (too small)
            if (newScale[axisIndex] < 0.1) {
              newScale[axisIndex] = 0.1;
            }
          }

          return { ...obj, scale: newScale };
        }

        return obj;
      })
    );

    console.log(`Scaled ${axis}-axis ${direction}`);
  };

  const selectedObject = sceneObjects.find(
    (obj) => obj.id === selectedObjectId
  );

  return (
    <div className="App">
      <SceneCanvas
        objects={sceneObjects}
        selectedObjectId={selectedObjectId}
        onSelectObject={selectObject}
      />
      <ObjectsEditor
        onAddObject={addObject}
        selectedObject={selectedObject}
        onMoveObject={moveSelectedObject}
        onRotateObject={rotateSelectedObject}
        onScaleObject={scaleSelectedObject}
      />
    </div>
  );
}

export default App;
