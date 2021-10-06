import React from 'react'
import { Canvas } from "@react-three/fiber";
import {Box} from './3D/Box';

export const Dice = () => {
    return (
        <div className="dice">
            <h1>Dice</h1>
            <Canvas>
                <ambientLight intensity={.3} />
                <Box position={[-2, 0, 0]} />
                <Box position={[2, 1, 0]} />
            </Canvas>
        </div>
    )
}
