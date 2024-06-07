import { useGraph, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three-stdlib";
import { useContext, useEffect, useRef, useState } from "react";
import { InteractiveContext } from "../context/InteractiveContext";
// import { MenuBuilding } from "./MenuBuilding";
import { Outlines, useHelper } from "@react-three/drei";
import { useMouseCoords } from "../hooks/useMouseCoords";
// import { PlaneCutter } from "./PlaneCutter";
import { DoubleSide, MeshBasicMaterial, PointLightHelper, TextureLoader } from "three";

const ClippingMaterial = ({ material, planePosition, ...props })=>{
    return(
        <meshBasicMaterial { ...material } {...props} clipIntersection={ true }>
            <plane attach="clippingPlanes-0" normal={[-1, 0, 0]} constant={ planePosition.x } />
            <plane attach="clippingPlanes-1" normal={[0, -1, 0]} constant={ planePosition.y } />
            <plane attach="clippingPlanes-2" normal={[0, 0, -1]} constant={-planePosition.z } />
        </meshBasicMaterial>
    );
}

const SingleMesh = ({ children, node })=>{
    return(
        <mesh geometry={node.geometry} position={ node.position } receiveShadow castShadow onClick={e=>{ e.stopPropagation(); }}>
            { children }
        </mesh>
    );
}

export const XenterLoader = ({ url })=>{

    // const pointRef = useRef(null);
    // useHelper(pointRef, PointLightHelper, 1.0, "red");
    
    const camera = useThree(state=>state.camera);
    const { state, setState } = useContext(InteractiveContext);

    const [latest, setLatest] = useState(0);
    // const [ normalX, setNormalX ] = useState(-1);
    const [direction, setDirection] = useState(1);
    const [planePosition, setPlanePosition] = useState({x: 1.5, y: 0, z: 1.0});

    const [ axis, setAxis ] = useState("");
    
    const xRayMaterialTransparent = (
        <>
            <meshPhysicalMaterial color={ 0x18ffff } metalness={ 0 } roughness={ 0 } transmission={0} transparent={ true } opacity={0.2} />
            <Outlines thickness={0.1} color={ 0xffffff } transparent={ true } opacity={0.8}/>
        </>
    );

    const xRayMaterialSingle = (
        <>
            <meshPhysicalMaterial color={ 0x00e5ff } metalness={ 0 } roughness={ 0.5 } transmission={1} thickness={0.01} transparent={true} opacity={0.2} />
            <Outlines thickness={0.04} color={ 0xFFFFFF } transparent={ true } opacity={1}/>
        </>
    );

    const xRayMaterialSingle2 = (
        <>
            <meshPhysicalMaterial color={ 0xffffff } metalness={ 0.1 } roughness={ 0.5 } transmission={1} transparent={true} opacity={0.1} />
            <Outlines thickness={0.06} color={ 0xFFFFFF } transparent={ true } opacity={1}/>
        </>
    );

    const xRayMaterialOutlined = (
        <>
            <meshPhysicalMaterial color={ 0x00e5ff } metalness={ 0 } roughness={ 0.2 } transmission={0.75} emissive={0x00e5ff} emissiveIntensity={0.2} thickness={0.01} />
            <Outlines thickness={0.04} color={ 0xFFFFFF } transparent={ true } opacity={1}/>
        </>
    );

    const xRayMaterialWire = (
        <>
            <meshStandardMaterial color={ 0xe0e0e0 } metalness={0} roughness={1}  transparent={ true } opacity={0.5}/>
        </>
    );

    // console.log(state.api.getModelRoute('scene.gltf'));
    const [ building, mob1, mob2, mob3, mob4, mobrt1, mobrt2 ] = useLoader(GLTFLoader, [
        state.api.getModelRoute('building/scene.gltf'), 
        state.api.getModelRoute('mob_1/scene.gltf'), 
        state.api.getModelRoute('mob_2/scene.gltf'), 
        state.api.getModelRoute('mob_3/scene.gltf'),
        state.api.getModelRoute('mob_4/scene.gltf'),
        state.api.getModelRoute('mob_rt_1/scene.gltf'),
        state.api.getModelRoute('mob_rt_2/scene.gltf'),
    ]);

    // console.log(building);


    return(
        <>  
            <group position={[-0.795, -0.4557, 0.576]} scale={0.0171}  
                // onClick={ e=>e.stopPropagation() } onDoubleClick={ (e)=>{ e.stopPropagation(); activateMenu(); } }
            >
                <primitive object={building.scene} />
                <primitive object={mob1.scene} />
                <primitive object={mob2.scene} />
                <primitive object={mob3.scene} position={[0.01,-0.01,0.6]} />
                <primitive object={mob4.scene} position={[0.01,-0.01,0.6]} />
                <primitive object={mobrt1.scene} />
                <primitive object={mobrt2.scene} />

            </group>            
        </>
    );
};