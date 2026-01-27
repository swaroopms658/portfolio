import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = ({ count = 5000 }) => {
    const points = useMemo(() => {
        const p = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            p[i * 3] = (Math.random() - 0.5) * 100;
            p[i * 3 + 1] = (Math.random() - 0.5) * 100;
            p[i * 3 + 2] = (Math.random() - 0.5) * 100;
        }
        return p;
    }, [count]);

    const pointsRef = useRef();

    useFrame((state) => {
        pointsRef.current.rotation.y += 0.0005;
        pointsRef.current.rotation.x += 0.0002;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="position"
                    count={points.length / 3}
                    array={points}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.1}
                color="#ffffff"
                sizeAttenuation={true}
                transparent
                opacity={0.4}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
};

const Scene3D = () => {
    return (
        <div className="scene-container" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            background: 'radial-gradient(circle at center, #0a0a1a 0%, #000000 100%)'
        }}>
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <ParticleField />
            </Canvas>
        </div>
    );
};

export default Scene3D;
