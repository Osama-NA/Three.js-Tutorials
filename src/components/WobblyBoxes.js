import React from 'react'
import { WobblyBox } from './3D/WobblyBox';
import { Canvas } from "@react-three/fiber";
import { softShadows, OrbitControls } from '@react-three/drei';

softShadows();

export const WobblyBoxes = () => {
    return (
        <div className="wobbly-boxes">
            <h1>Wobbly Boxes</h1>
            <Canvas shadows colorManagement camera={{ position: [-5, 3, 10], fov: 60 }} >
                <ambientLight intensity={0.3} />
                <directionalLight
                    castShadow
                    position={[2, 8, -1]}
                    intensity={1.3}
                    shadow-mapSize-width={"1024"}
                    shadow-mapSize-height={"1024"}
                    shadow-camera-far={50}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                />
                <pointLight position={[-10, 0, -20]} intensity={0.5} />
                <pointLight position={[0, -10, 0]} intensity={1.5} />

                <group>
                    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
                        <planeBufferGeometry attach="geometry" args={[300, 300]} />
                        <shadowMaterial attach="material" opacity={.2} />
                    </mesh>

                    <WobblyBox position={[-8, 0, -2]} args={[2, 2, 3]} color="orange" speed={6} />
                    <WobblyBox position={[0, 1, 1]} args={[3, 4, 1]} color="pink" speed={2.5} />
                    <WobblyBox position={[8, 0, -2]} args={[3, 3, 3]} color="green" speed={6} />
                </group>

                <OrbitControls />
            </Canvas>
        </div>
    )
}
