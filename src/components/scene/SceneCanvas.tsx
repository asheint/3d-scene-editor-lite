import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
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
  const outlineRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (outlineRef.current && isSelected) {
      const time = state.clock.getElapsedTime();
      const opacity = Math.sin(time * 4) * 0.3 + 0.7;
      (outlineRef.current.material as THREE.MeshBasicMaterial).opacity =
        opacity;
    }
  });

  return (
    <group>
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
          emissive={isSelected ? "#111111" : "#000000"}
        />
      </mesh>

      {isSelected && (
        <mesh
          ref={outlineRef}
          position={object.position}
          rotation={object.rotation}
          scale={object.scale.map((s) => s * 1.05) as [number, number, number]} // Slightly larger
        >
          {object.type === "cube" ? (
            <boxGeometry args={[1, 1, 1]} />
          ) : (
            <sphereGeometry args={[0.5, 32, 32]} />
          )}
          <meshBasicMaterial
            color="#646cff"
            transparent
            opacity={0.7}
            side={THREE.BackSide}
          />
        </mesh>
      )}
    </group>
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
