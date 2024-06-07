import { useGLTF } from "@react-three/drei";
import { useGraph, useLoader, useThree } from "@react-three/fiber";
import { KTX2Loader, TDSLoader, RGBELoader, KTXLoader } from "three-stdlib";
import * as MeshoptDecoder from 'three/examples/jsm/libs/meshopt_decoder.module';

export const HyattLoader = ({url})=>{

    const gl = useThree(state=>state.gl);
    
    const model = useGLTF(url, false, false, (loader)=>{
        const path = "./basis/";
        const kt2 = new KTX2Loader().setTranscoderPath(path);
        loader.setKTX2Loader(kt2.detectSupport(gl));
        loader.setMeshoptDecoder(MeshoptDecoder.MeshoptDecoder)
    });

    // const { nodes } = useGraph(model);

    // console.log({nodes});

    return(
        <group position={[0, -1.42, 0]}>
            <primitive object={ model.scene }>
            </primitive>
        </group>
    );
};