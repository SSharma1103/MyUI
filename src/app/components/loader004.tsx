'use client';

import React, { FC, useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";


const Orb: FC = () => {
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
      <meshStandardMaterial wireframe color="#38bdf8" />
    </mesh>
  );
};

export const WireframeOrbPreview: FC = () => {
  return (
    <div className="w-full h-80">
        <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Orb />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
    </div>
  );
};


export const wireframeOrbCodeString = `
'use client';

// First, install the necessary dependencies:
// npm install three @react-three/fiber @react-three/drei
// npm install -D @types/three

import React, { useRef, FC } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const Orb: FC = () => {
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
      <meshStandardMaterial wireframe color="#38bdf8" />
    </mesh>
  );
};

const WireframeOrb: FC = () => {
  return (
    <div className="w-full h-80">
        <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Orb />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
    </div>
  );
};

export default WireframeOrb;
`;
