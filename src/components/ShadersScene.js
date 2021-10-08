import { WavyImage } from './3D/WavyImage';
import { Canvas} from "@react-three/fiber";
import { Suspense } from 'react';

export const ShadersScene = () => {
    return(
        <div className="wavy-image">
            <h1>Wavy Shader Image</h1>
            <h1 className="image-title">Tengen Uzui</h1>
            <Canvas>
                <Suspense fallback={null}>
                    <pointLight position={[10, 10, 10]} />
                    <WavyImage />
                </Suspense>
            </Canvas>
        </div>
    )
}