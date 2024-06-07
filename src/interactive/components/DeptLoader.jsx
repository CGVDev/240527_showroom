import { useGraph, useLoader, useThree } from "@react-three/fiber"
import { Box3, DoubleSide, FrontSide, Group, PointLightHelper, SRGBColorSpace, TextureLoader, TwoPassDoubleSide, Vector3 } from "three";
import { GLTFLoader, RGBELoader, TDSLoader } from "three-stdlib";
import { animated as a, easings, useSpring, useTransition } from "@react-spring/three";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Outlines, useHelper } from "@react-three/drei";
import { DepartmentFactory } from "../utils/DepartmentFactory";
import { FloorPosition } from "../utils/FloorPosition";
import { Department } from "../utils/Department";

export const DeptLoader = ({ url })=>{

    const { gl } = useThree();

    const pointRef = useRef(null);
    useHelper(pointRef, PointLightHelper, 0.1, "red");

    const model = useLoader(TDSLoader, url);

    const { nodes, materials } = useGraph(model);

    // console.log({ nodes, materials});

    const [muros, bano01, bano02, cancel, cocina, comedor, cristales1, cristales2, piso, recamara, murosdiff, bano01diff,  bano02diff, canceldiff, cocinadiff, comedordiff, pisodiff, recamaradiff] = useLoader(TextureLoader, [
        './img/T_04_muros_total.jpg', 
        './img/T_04_bano1_total.jpg', 
        './img/T_04_bano2_total.jpg', 
        './img/T_04_cancel_total.jpg', 
        './img/T_04_cocina_total.jpg', 
        './img/T_04_comedor_total.jpg', 
        './img/T_04_cristales1_total.jpg', 
        './img/T_04_cristales2_total.jpg', 
        './img/T_04_piso_total.jpg', 
        './img/T_04_recamara_total.jpg', 
        './img/T_04_muros_diff.jpg', 
        './img/T_04_bano01_diff.jpg', 
        './img/T_04_bano02_diff.jpg', 
        './img/T_04_cancel_diff.jpg', 
        './img/T_04_cocina_diff.jpg', 
        './img/T_04_comedor_diff.jpg', 
        './img/T_04_piso_diff.jpg', 
        './img/T_04_recamara_diff.jpg', 
    ]);
    // mapTexture.flipY = false;
    muros.anisotropy = gl.capabilities.getMaxAnisotropy();
    muros.colorSpace = SRGBColorSpace;
    bano01.anisotropy = gl.capabilities.getMaxAnisotropy();
    bano02.anisotropy = gl.capabilities.getMaxAnisotropy();
    cancel.anisotropy = gl.capabilities.getMaxAnisotropy();
    cocina.anisotropy = gl.capabilities.getMaxAnisotropy();
    comedor.anisotropy = gl.capabilities.getMaxAnisotropy();

    //-0.1955
    // const position = [-0.205, -0.456, 0.106];
    const position = [0, 0, 0];
    const scale = 1;
    //rY = Math.PI * 1.042
    const rotation = [Math.PI/2, Math.PI, 0];

    return(
        <>
            <group rotation={ rotation } scale={scale} position={ position }>   

                <mesh geometry={nodes.T04_Muros.geometry} position={ nodes.T04_Muros.position } receiveShadow castShadow>
                    <meshBasicMaterial  map={ murosdiff } color={0xFFFFFF} />
                </mesh>
                <mesh geometry={nodes.T04_Baño01.geometry} position={ nodes.T04_Baño01.position } receiveShadow castShadow>
                    <meshBasicMaterial map={ bano01diff }/>
                </mesh>
                <mesh geometry={nodes.T04_Baño02.geometry} position={ nodes.T04_Baño02.position } receiveShadow castShadow>
                    <meshBasicMaterial map={ bano02diff }/>
                </mesh>
                <mesh geometry={nodes.T04_Cancel.geometry} position={ nodes.T04_Cancel.position } receiveShadow castShadow>
                    <meshBasicMaterial map={ canceldiff } />
                </mesh>
                <mesh geometry={nodes.T04_Coc01.geometry} position={ nodes.T04_Coc01.position } receiveShadow castShadow>
                    <meshBasicMaterial map={ cocinadiff } />
                </mesh>
                <mesh geometry={nodes.T04_Comedo.geometry} position={ nodes.T04_Comedo.position } receiveShadow castShadow>
                    <meshBasicMaterial map={ comedordiff } />
                </mesh>
                <mesh geometry={nodes.T04_Crist0.geometry} position={ nodes.T04_Crist0.position } >
                    
                    <meshPhysicalMaterial color={0xFFFFFF} metalness={0} roughness={0.35} transmission={1} thickness={0.01}/>
                </mesh>
                <mesh geometry={nodes.T04_Crista.geometry} position={ nodes.T04_Crista.position } >
                    
                    <meshPhysicalMaterial color={0xFFFFFF} metalness={0} roughness={0} transmission={1} thickness={0.01}/>
                </mesh>
                <mesh geometry={nodes.T04_Piso.geometry} position={ nodes.T04_Piso.position } receiveShadow castShadow>
                    <meshStandardMaterial map={ pisodiff } />
                </mesh>
                <mesh geometry={nodes.T04_Rec01.geometry} position={ nodes.T04_Rec01.position } receiveShadow castShadow>
                    <meshStandardMaterial map={ recamaradiff } />
                </mesh>
                <pointLight args={[ 0xfff59d, 5, 1, 1.5 ]} position={[-1.87, 0.76, 1.24]}/>
                <pointLight args={[ 0xfff59d, 5, 1, 1.5 ]} position={[-1.95, -1.175, 1.24]}/>
            </group>
            
            <group rotation={ [Math.PI/2, Math.PI, Math.PI] } scale={scale} position={ [ 5, 0, 0 ] }>   

                <mesh geometry={nodes.T04_Muros.geometry} position={ nodes.T04_Muros.position }>
                    <meshBasicMaterial map={ muros } color={0xFFFFFF} emi/>
                </mesh>
                <mesh geometry={nodes.T04_Baño01.geometry} position={ nodes.T04_Baño01.position }>
                    <meshBasicMaterial map={ bano01 } />
                </mesh>
                <mesh geometry={nodes.T04_Baño02.geometry} position={ nodes.T04_Baño02.position }>
                    <meshBasicMaterial map={ bano02 } />
                </mesh>
                <mesh geometry={nodes.T04_Cancel.geometry} position={ nodes.T04_Cancel.position }>
                    <meshBasicMaterial map={ cancel } />
                </mesh>
                <mesh geometry={nodes.T04_Coc01.geometry} position={ nodes.T04_Coc01.position }>
                    <meshBasicMaterial map={ cocina } />
                </mesh>
                <mesh geometry={nodes.T04_Comedo.geometry} position={ nodes.T04_Comedo.position }>
                    <meshBasicMaterial map={ comedor } />
                </mesh>
                <mesh geometry={nodes.T04_Crist0.geometry} position={ nodes.T04_Crist0.position } >
                    {/* <meshBasicMaterial {...materials.T04_Crist0 } map={ cristales1 } /> */}
                    <meshPhysicalMaterial color={0xFFFFFF} metalness={0.1} roughness={0.35} transmission={1} thickness={0.01}/>
                </mesh>
                <mesh geometry={nodes.T04_Crista.geometry} position={ nodes.T04_Crista.position } >
                    {/* <meshBasicMaterial {...materials.T04_Crista } map={ cristales2 } /> */}
                    <meshPhysicalMaterial color={0xFFFFFF} metalness={0.1} roughness={0} transmission={1} thickness={0.01}/>
                </mesh>
                <mesh geometry={nodes.T04_Piso.geometry} position={ nodes.T04_Piso.position }>
                    <meshBasicMaterial map={ piso } />
                </mesh>
                <mesh geometry={nodes.T04_Rec01.geometry} position={ nodes.T04_Rec01.position }>
                    <meshBasicMaterial map={ recamara } />
                </mesh>
                
            </group>

            <mesh position={[ 2.5, 3.4, 0]} rotation={[Math.PI/2, 0, 0]} castShadow>
                <planeGeometry args={[9.25,11.5,10]} />
                <meshStandardMaterial color={0xffffff} transparent={ true } opacity={0} />
            </mesh>
            <pointLight ref={pointRef} args={[ 0xfff59d, 2, 10, 0.5 ]} position={[0, 3.2, -0.2]}/>
            
        </>
    );
}