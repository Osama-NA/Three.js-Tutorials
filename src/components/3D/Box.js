import React, { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import dice from "../../images/dice.png";

export const Box = (props) => {

    const mesh = useRef();

    const [active, setActive] = useState(false);

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    });

    const texture = useMemo(() => new THREE.TextureLoader().load(dice), []);

    return (
        <mesh 
            {...props}
            ref={mesh}
            scale={active?[2, 2, 2]:[1.5, 1.5, 1.5]}
            onClick={()=>setActive(!active)}
        >
            <boxBufferGeometry args={[1,1,1]} />
            <meshBasicMaterial attach="material" transparent side={THREE.DoubleSide}>
                <primitive object={texture} attach="map" />
            </meshBasicMaterial>
        </mesh>
    )
}
