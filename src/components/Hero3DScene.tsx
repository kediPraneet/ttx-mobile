import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function FloatingCard({ position, text, color }: { position: [number, number, number]; text: string; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 6) * 0.1;
    }
    if (textRef.current) {
      textRef.current.lookAt(0, 0, 10);
    }
  });

  return (
    <Float speed={40} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position}>
        <mesh ref={meshRef}>
          <boxGeometry args={[2, 1.2, 0.1]} />
          <meshStandardMaterial 
            color={color} 
            metalness={0.3} 
            roughness={0.4}
            emissive={color}
            emissiveIntensity={0.2}
          />
        </mesh>
        <mesh ref={textRef} position={[0, 0, 0.1]}>
          <planeGeometry args={[1.5, 0.4]} />
          <meshBasicMaterial color="#000000" transparent opacity={0} />
        </mesh>
      </group>
    </Float>
  );
}

function ConnectingLines() {
  return (
    <>
      <mesh position={[-1.25, 0.25, 0]}>
        <boxGeometry args={[2.5, 0.05, 0.05]} />
        <meshStandardMaterial color="#ff9500" emissive="#ff9500" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[1.25, -0.25, 0]}>
        <boxGeometry args={[2.5, 0.05, 0.05]} />
        <meshStandardMaterial color="#ff9500" emissive="#ff9500" emissiveIntensity={0.5} />
      </mesh>
    </>
  );
}

export const Hero3DScene = () => {
  return (
    <div className="w-full h-[400px] md:h-[600px]">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#ff9500" />
        <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={0.5} color="#ffb700" />
        
        <FloatingCard position={[-2.5, 0.5, 0]} text="User" color="#ff9500" />
        <FloatingCard position={[0, 0, 0]} text="Admin" color="#ffb700" />
        <FloatingCard position={[2.5, -0.5, 0]} text="Analytics" color="#ff9500" />
        
        <ConnectingLines />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={15}
        />
      </Canvas>
    </div>
  );
};
