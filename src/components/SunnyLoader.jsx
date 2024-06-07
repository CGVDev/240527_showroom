import { useGraph, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three-stdlib";
import { DoubleSide, MeshPhysicalMaterial } from "three/src/Three.js";

export const SunnyLoader = ({ url })=>{

    const apartment = useLoader(GLTFLoader, url);
    const { nodes } = useGraph(apartment.scene);

    console.log(nodes)

    return(
        <group scale={0.125} >
            <mesh geometry={ nodes["Object_37"].geometry } castShadow receiveShadow>
                <meshPhysicalMaterial color={ "0xFFFFFF" } roughness={0.5} metalness={0.5} side={ DoubleSide }/>
            </mesh>
            {/* {
                Object.keys(nodes).map((item)=>{
                    console.log(item)
                    return(
                        <group position={[0,1,0]}>
                            <mesh geometry={ nodes[item].geometry } castShadow receiveShadow>
                                <meshPhysicalMaterial color={ "0xFFFFFF" } />
                            </mesh>
                        </group>

                    )
                })
            } */}
            {/* <primitive object={apartment.scene} /> */}
        </group>
    );
};