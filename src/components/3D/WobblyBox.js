import React, {useRef, useState} from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshWobbleMaterial } from '@react-three/drei';


export const WobblyBox = (props) => {

    const mesh = useRef();
    
    const [wobble, setWobble] = useState(false);

    useFrame(() => mesh.current.rotation.x = mesh.current.rotation.y += 0.02 ); 

    return (
        <>
            <mesh 
                castShadow
                ref={mesh} {...props} 
                position={props.position}
                onClick={()=>setWobble(!wobble)}
            >
                <boxBufferGeometry attach="geometry" args={props.args} />
                {   // on click mesh material changes to wobble or standard depending on 'wobble' state
                    wobble ?
                        <MeshWobbleMaterial attach="material" color={props.color} speed={props.speed} factor={.5} />:
                        <meshStandardMaterial attach="material" color={props.color} />
                }
            </mesh>
        </>
    )
}
