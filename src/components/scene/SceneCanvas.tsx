import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type { SceneObject } from "../../App";

interface SceneCanvasProps {
  objects: SceneObject[];
  selectedObjectId: string | null;
  onSelectObject: (objectId: string) => void;
}

function Object3D({
  object,
  isSelected,
  onSelect,
}: {
  object: SceneObject;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <mesh
      position={object.position}
      rotation={object.rotation}
      scale={object.scale}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
    >
      {object.type === "cube" ? (
        <boxGeometry args={[1, 1, 1]} />
      ) : (
        <sphereGeometry args={[0.5, 32, 32]} />
      )}
      <meshStandardMaterial
        color={object.color}
        emissive={isSelected ? "#333333" : "#000000"}
      />
    </mesh>
  );
}

export default function SceneCanvas({
  objects,
  selectedObjectId,
  onSelectObject,
}: SceneCanvasProps) {
  return (
    <div
      style={{
        width: "calc(100vw - 250px)",
        height: "100vh",
        marginRight: "250px",
      }}
    >
      <Canvas camera={{ position: [5, 5, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        <OrbitControls enablePan enableZoom enableRotate />

        {objects.map((object) => (
          <Object3D
            key={object.id}
            object={object}
            isSelected={object.id === selectedObjectId}
            onSelect={() => onSelectObject(object.id)}
          />
        ))}
      </Canvas>
    </div>
  );
}
