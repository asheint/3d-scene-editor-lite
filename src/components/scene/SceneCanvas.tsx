import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import type { SceneObject } from '../../App'

interface SceneCanvasProps {
  objects: SceneObject[]
}

// Component to render a single 3D object
function Object3D({ object }: { object: SceneObject }) {
  return (
    <mesh 
      position={object.position}
      rotation={object.rotation}
      scale={object.scale}
    >
      {object.type === 'cube' ? (
        <boxGeometry args={[1, 1, 1]} />
      ) : (
        <sphereGeometry args={[0.5, 32, 32]} />
      )}
      <meshStandardMaterial color={object.color} />
    </mesh>
  )
}

export default function SceneCanvas({ objects }: SceneCanvasProps) {
  return (
    <div style={{ 
      width: 'calc(100vw - 250px)',
      height: '100vh',
      marginRight: '250px'
    }}>
      <Canvas camera={{ position: [5, 5, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        <OrbitControls enablePan enableZoom enableRotate />
        
        {objects.map(object => (
          <Object3D key={object.id} object={object} />
        ))}
        
      </Canvas>
    </div>
  )
}