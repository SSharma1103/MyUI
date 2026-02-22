'use client';

import React, { FC, useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { cn } from './utils';

interface OrbProps {
  color?: string;
}

const Orb: FC<OrbProps> = ({ color = "#38bdf8" }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.8, 32, 32]} />
      <meshStandardMaterial wireframe color={color} />
    </mesh>
  );
};

interface WireframeOrbProps extends React.HTMLAttributes<HTMLDivElement> {
  orbColor?: string;
}

export const WireframeOrbPreview: FC<WireframeOrbProps> = ({
  orbColor = "#38bdf8",
  className,
  ...props
}) => {
  return (
    <div className={cn("w-full h-80", className)} {...props}>
        <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Orb color={orbColor} />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
    </div>
  );
};

export default WireframeOrbPreview;
