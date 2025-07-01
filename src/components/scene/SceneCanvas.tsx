import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function SceneCanvas() {
  return (
    <div style={{ 
      width: 'calc(100vw - 250px)', // Full width - editor width
      height: '100vh',
      marginRight: '250px' // Make a room for the editor
    }}>
      <Canvas camera={{ position: [5, 5, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        <OrbitControls enablePan enableZoom enableRotate />
        
        {/* Test cube */}
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </Canvas>
    </div>
  )
}