import { GLTFLoader } from "three-stdlib";
import { Hotspot3D } from "./Hotspot3D";
import { useGraph, useLoader } from "@react-three/fiber";

export const HST18 = ()=>{
    const hotspots = useLoader(GLTFLoader, "./models/types/T18/hotspots.glb");
    const { nodes: { entrada, sala, cocina, recamara_s, recamara_p, bano_s, bano_p } } = useGraph(hotspots.scene);

    return(
        <>
            <Hotspot3D geometry={ entrada.geometry } />
            <Hotspot3D geometry={ sala.geometry } />
            <Hotspot3D geometry={ recamara_p.geometry } />
            <Hotspot3D geometry={ recamara_s.geometry } />
            <Hotspot3D geometry={ cocina.geometry } />
            <Hotspot3D geometry={ bano_s.geometry } />
            <Hotspot3D geometry={ bano_p.geometry } />
        </>
    );
};