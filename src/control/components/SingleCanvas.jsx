import { Canvas } from "@react-three/fiber";
import { ACESFilmicToneMapping, SRGBColorSpace, VSMShadowMap } from "three";

export const SingleCanvas = ({ children })=>{

    return(
        <Canvas
            gl={ { 
                antialias: true, 
                outputColorSpace: SRGBColorSpace,
                toneMapping: ACESFilmicToneMapping,
                toneMappingExposure: 1
            } }
            camera={{ position: [10, 12, -10], fov: 17.5, near: 0.2, far: 100 }} 
            dpr={[1,2]}
            shadows="soft"
            tone-mapping={ ACESFilmicToneMapping }
            shadow-map-type={ VSMShadowMap }
        >
            { children }
        </Canvas>
    );
};