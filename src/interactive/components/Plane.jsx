import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export function Plane(){
    const mapTexture = useLoader(TextureLoader, './img/xenter-map-texture.png');

    mapTexture.anisotropy = 128;
    return(
        <mesh rotation={[-Math.PI /2, 0, -Math.PI * 0.96]} position={ [-1, -0.4556, 0.78] } receiveShadow={ true } castShadow={ true }>
            <planeGeometry args={[90, 90, 90]} />
            <meshStandardMaterial 
                transparent={ true }
                map={ mapTexture }
            />
        </mesh>
    );
}