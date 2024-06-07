import { useGraph, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three-stdlib";

export const VRLoader = ({ url, position=[0, -0.1, 0] })=>{

    const model = useLoader(GLTFLoader, url);

    return(
        <group >
            <primitive object={ model.scene } position={ position } scale={0.125}/>
        </group>
    );
};

