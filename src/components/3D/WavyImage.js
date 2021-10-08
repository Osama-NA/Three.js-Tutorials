import * as THREE from 'three';
import React, {useRef} from 'react';
import {shaderMaterial} from '@react-three/drei';
import { extend, useFrame, useLoader } from "@react-three/fiber";
import glsl from 'babel-plugin-glsl/macro';
import uzui from "../../images/uzui.png";

const WavyShaderMaterial = shaderMaterial(
    //Uniform
    {   
        uTime: 0,
        uColor: new THREE.Color(0.0, 0.0, 0.0),
        uTexture: new THREE.Texture()
    },
    //Vertex Shader
    glsl`
        precision mediump float;
        
        varying vec2 vUv;
        varying float vWave;
        
        uniform float uTime;

        #pragma glslify: snoise3 = require(glsl-noise/simplex/3d);

        void main(){
            vUv = uv;

            vec3 pos = position;
            float noiseFreq = 1.5; 
            float noiseAmp = 0.02;
            vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
            pos.z += snoise3(noisePos) * noiseAmp;
            vWave = pos.z;

            //Change pos to position to make just the image wavy not the full plane
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 0.1);
        }
    `,
    //Fragment Shader
    glsl`
        precision mediump float;

        uniform vec3 uColor;
        uniform float uTime;
        uniform sampler2D uTexture;

        varying vec2 vUv;
        varying float vWave;

        void main(){
            float wave = vWave * 0.5; // change 0.5 to control image waviness
            vec3 texture = texture2D(uTexture, vUv + wave).rgb; //change vUv + wave to vUv to make just the plane wavy but not the image
            gl_FragColor = vec4(texture, 1.0);
        }
    `
)

extend({WavyShaderMaterial});

export const WavyImage = (props) => {

    const ref= useRef();

    const [image] = useLoader(THREE.TextureLoader, [uzui]);

    useFrame(({clock}) => ref.current.uTime = clock.getElapsedTime())

    return(
        <>
            <mesh>
                <planeBufferGeometry args={[0.4, 0.6, 16, 16]} /> {/* to make the waves smoother you can increae the vertexes [16,16], note: more vertexes more gpu-use more laggy */}
                <wavyShaderMaterial color="rgba(0,0,0,0)" ref={ref} uTexture={image}/>
            </mesh>
        </>
    )
}