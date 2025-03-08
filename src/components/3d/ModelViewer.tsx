
import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stage, PresentationControls } from '@react-three/drei';
import { Mesh, Group } from 'three';

interface ModelProps {
  url: string;
}

const Model = ({ url }: ModelProps) => {
  const group = useRef<Group>(null);
  const { scene } = useGLTF(url);
  
  // Auto rotate the model slowly
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={group}>
      <primitive object={scene} scale={1.5} position={[0, 0, 0]} />
    </group>
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
        <PresentationControls
          global
          zoom={0.8}
          rotation={[0, -Math.PI / 4, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}>
          <Stage environment="city" intensity={0.6}>
            <Model url={modelUrl} />
          </Stage>
        </PresentationControls>
        <OrbitControls
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
