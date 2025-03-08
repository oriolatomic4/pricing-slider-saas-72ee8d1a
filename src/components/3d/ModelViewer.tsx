
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stage } from '@react-three/drei';

interface ModelProps {
  url: string;
}

const Model = ({ url }: ModelProps) => {
  const { scene } = useGLTF(url);
  
  return (
    <primitive object={scene} scale={1.5} position={[0, 0, 0]} />
  );
};

interface ModelViewerProps {
  modelUrl: string;
  height?: string;
  className?: string;
}

const ModelViewer = ({ modelUrl, height = '500px', className = '' }: ModelViewerProps) => {
  return (
    <div className={`relative ${className}`} style={{ height }}>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Stage environment="city" intensity={0.6}>
          <Model url={modelUrl} />
        </Stage>
        <OrbitControls 
          autoRotate 
          autoRotateSpeed={1} 
          enablePan={false} 
          enableZoom={true}
          minPolarAngle={Math.PI / 2 - 0.5}
          maxPolarAngle={Math.PI / 2 + 0.5}
        />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
