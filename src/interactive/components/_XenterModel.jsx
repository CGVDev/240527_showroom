import { useGraph, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three-stdlib";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";
import { MenuBuilding } from "./MenuBuilding";
import { Outlines, useHelper } from "@react-three/drei";
import { useMouseCoords } from "../hooks/useMouseCoords";
import { PlaneCutter } from "./PlaneCutter";
import { DoubleSide, MeshBasicMaterial, PointLightHelper } from "three";

const ClippingMaterial = ({ material, planePosition, ...props })=>{
    return(
        <meshBasicMaterial { ...material } {...props} clipIntersection={ true }>
            <plane attach="clippingPlanes-0" normal={[-1, 0, 0]} constant={ planePosition.x } />
            <plane attach="clippingPlanes-1" normal={[0, -1, 0]} constant={ planePosition.y } />
            <plane attach="clippingPlanes-2" normal={[0, 0, -1]} constant={-planePosition.z } />
        </meshBasicMaterial>
    );
}

const WallMaterial = ({ color, planePosition, ...props })=>{
    return(
        <meshPhysicalMaterial color={color} {...props} clipIntersection={ true } side={DoubleSide} castShadow receiveShadow>
            <plane attach="clippingPlanes-0" normal={[-1, 0, 0]} constant={ planePosition.x } />
            <plane attach="clippingPlanes-1" normal={[0, -1, 0]} constant={ planePosition.y } />
            <plane attach="clippingPlanes-2" normal={[0, 0, -1]} constant={-planePosition.z } />
        </meshPhysicalMaterial>
    );
}

const SingleMesh = ({ children, node })=>{
    return(
        <mesh geometry={node.geometry} position={ node.position } receiveShadow castShadow onClick={e=>{ e.stopPropagation(); }}>
            { children }
        </mesh>
    );
}

export const XenterModel = ({ url })=>{

    // const pointRef = useRef(null);
    // useHelper(pointRef, PointLightHelper, 1.0, "red");
    
    const camera = useThree(state=>state.camera);
    const { state, setState } = useContext(AppContext);

    const [latest, setLatest] = useState(0);
    const [ normalX, setNormalX ] = useState(-1);
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

    const obj = useLoader(GLTFLoader, url);
    const { nodes, materials } = useGraph(obj.scene);


    // const activateMenu = ()=>{
    //     setState(prev=>prev.showRadialMenu(MenuBuilding));
    // }

    const activePlane = (e, axis)=>{
        e.stopPropagation();
        let { x, z } = camera.position;
        let _angle = axis === 'x' ? (Math.atan2(z, x) * (180/Math.PI)) : (Math.atan2(x, z) * (180/Math.PI));
        let _direction = (_angle > 0) ? 1 : -1; 
        setState(state.disableControls());
        setLatest(planePosition[axis]);
        setDirection(_direction);

        if(e.type === "touchmove"){
            let { clientX: x, clientY: y } = e.touches[0];
            setOrigin({ x, y });
        }
        else{
            setOrigin({ x: e.clientX, y: e.clientY });
        }
        setAxis(axis);

        enableCapture();
    }

    const endAction = ()=>{
        setState(state.enableControls());
    }

    const changeNormalX = ()=>{

    }

    const { coords, enableCapture, setOrigin } = useMouseCoords({ x: 0, y: 0 }, { x: 0, y:0 }, ()=>{}, endAction)

    useEffect(()=>{
        let value = 0;
        switch (axis) {
            case "x":
                setPlanePosition({...planePosition, x: latest + ((coords.x * 0.005) * direction)})
                break;
            
            case "z":
                setPlanePosition({...planePosition, z: latest + ((coords.x * 0.003) * direction)})
                break;
            
            case "y":
                value = Math.max(latest + ((coords.y * 0.003)), -0.45578)
                setPlanePosition({ ...planePosition, y: value })
                break;
        
            default:
                break;
        }
    }, [coords]);


    return(
        <>  
            <group>
                {/* { console.log(camera.position) } */}
                {
                    state.isCutter
                        ? (
                            <>
                                {/* x */}
                                <PlaneCutter 
                                    dialColor={ 0x4AC0B1} planeWidth={ 2 } planeHeight={ 2.5 } 
                                    rotation={ [0, -Math.PI/2,  0] } position={ [planePosition.x, 0, 0] } 
                                    dialRotation={[0, Math.PI/2, 0]} 
                                    onPointerDown={ (e)=>activePlane(e, "x") }/>
                                {/* y */}
                                <PlaneCutter 
                                    dialColor={ 0x3F4743} planeWidth={ 2 } planeHeight={ 2 } 
                                    rotation={ [-Math.PI/2, 0,  0] } position={ [0, planePosition.y, 0] } 
                                     dialRotation={[Math.PI/2, Math.PI/2, 0]} offset={[0, -0.5, 0]}
                                    onPointerDown={ (e)=>activePlane(e, "y") } />
                                {/* z */}
                                <PlaneCutter 
                                    dialColor={ 0xA0A0A0} planeWidth={ 2.5 } planeHeight={ 2.5 } 
                                    rotation={ [0,0,0] }  position={ [0, 0, -planePosition.z] } 
                                    dialRotation={[0, Math.PI/2, 0]} 
                                    onPointerDown={ (e)=>activePlane(e, "z") } />
                            </>
                        )
                        : null
                }
            </group>
            <group position={[0.895, -0.4557, -0.376]} scale={0.0171} rotation={[-Math.PI/2, 0, Math.PI * 1.0008 ]} 
                // onClick={ e=>e.stopPropagation() } onDoubleClick={ (e)=>{ e.stopPropagation(); activateMenu(); } }
            >
                {
                    state.isXray
                    ?(<>
                        {/* piso fase 2 */}
                        <SingleMesh node={ nodes["Object_20"] } >
                            { xRayMaterialSingle }
                        </SingleMesh>
                        {/* base granito */}
                        <SingleMesh node={ nodes["Object_19"] } >
                            { xRayMaterialSingle }
                        </SingleMesh>
                        {/* base-cimientos exterior */}
                        <SingleMesh node={ nodes["Object_4"] } >
                            { xRayMaterialSingle }
                        </SingleMesh>
                        {/* rombo fachada fase 2 */}
                        <SingleMesh node={ nodes["Object_18"] } >
                            { xRayMaterialTransparent }
                        </SingleMesh>
                        {/* marcos fachada fase 1 */}
                        <SingleMesh node={ nodes["Object_16"] } >
                            { xRayMaterialWire }
                        </SingleMesh>
                        {/* <MeshMaterial node={ nodes["Object_16"] } material={ materials["wire_236221133"] } altMaterial={ xRayMaterialWire } conditional={ false } planePosition={ planePosition } /> */}
                        {/* marcos fachada fase 2 */}
                        <SingleMesh node={ nodes["Object_11"] } >
                            { xRayMaterialWire }
                        </SingleMesh>
                        {/* <MeshMaterial node={ nodes["Object_11"] } material={ materials["wire_108066017"] } altMaterial={ xRayMaterialWire } conditional={ false } planePosition={ planePosition } /> */}
                        {/* marcos fachada laterales */}
                        <SingleMesh node={ nodes["Object_3"] } >
                            { xRayMaterialWire }
                        </SingleMesh>
                        {/* <MeshMaterial node={ nodes["Object_3"] } material={ materials["wire_021131041"] } altMaterial={ xRayMaterialWire } conditional={ false } planePosition={ planePosition } /> */}
                        {/* marcos fachada fase 2 */}
                        <SingleMesh node={ nodes["Object_2"] } >
                            { xRayMaterialWire }
                        </SingleMesh>
                        {/* <MeshMaterial node={ nodes["Object_2"] } material={ materials["wire_020228098"] } altMaterial={ xRayMaterialWire } conditional={ false } planePosition={ planePosition } /> */}
                        {/* ... */}
                        <SingleMesh node={ nodes["Object_17"] } >
                            <meshBasicMaterial {... materials["wire_242205105"]} />
                        </SingleMesh>
                        {/* <MeshMaterial node={ nodes["Object_17"] } material={ materials["wire_242205105"] } altMaterial={ <meshBasicMaterial {... materials["wire_242205105"]} /> } conditional={ false } planePosition={ planePosition } /> */}
                        {/* muros fase 1-1 */}
                        <SingleMesh node={ nodes["Object_15"] } >
                            { xRayMaterialTransparent }
                        </SingleMesh>
                        {/* <MeshMaterial node={ nodes["Object_15"] } material={ materials["wire_155104218"] } altMaterial={ xRayMaterialTransparent } conditional={ false } planePosition={ planePosition } /> */}
                        {/* cristal */}
                        <SingleMesh node={ nodes["Object_14"] } >
                            <meshBasicMaterial {... materials["wire_143148152"]} />
                        </SingleMesh>
                        {/* <MeshMaterial node={ nodes["Object_14"] } material={ materials["wire_143148152"] } altMaterial={ <meshBasicMaterial {... materials["wire_143148152"]} /> } conditional={ false } planePosition={ planePosition } /> */}
                        {/* muros fase 2 */}
                        <SingleMesh node={ nodes["Object_13"] } >
                            { xRayMaterialTransparent }
                        </SingleMesh>
                        {/* <MeshMaterial node={ nodes["Object_13"] } material={ materials["wire_141191209"] } altMaterial={ xRayMaterialTransparent } conditional={ false } planePosition={ planePosition } /> */}
                        {/* muros fase 1-2 */}
                        <SingleMesh node={ nodes["Object_12"] } >
                            { xRayMaterialTransparent }
                        </SingleMesh>
                        {/* <MeshMaterial node={ nodes["Object_12"] } material={ materials["wire_136033122"] } altMaterial={ xRayMaterialTransparent } conditional={ false } planePosition={ planePosition } /> */}
                        {/* ... */}
                        <SingleMesh node={ nodes["Object_10"] } >
                            { xRayMaterialTransparent }
                        </SingleMesh>
                        {/* <MeshMaterial node={ nodes["Object_10"] } material={ materials["wire_103248098"] } altMaterial={ xRayMaterialTransparent } conditional={ false } planePosition={ planePosition } /> */}
                        {/* base blanco fase 1-2 */}
                        <SingleMesh node={ nodes["Object_9"] } >
                            { xRayMaterialSingle }
                        </SingleMesh>
                        {/* <MeshMaterial node={ nodes["Object_9"] } material={ materials["wire_100148233"] } altMaterial={ xRayMaterialSingle } conditional={ false } planePosition={ planePosition } /> */}
                        {/* piso */}
                        <SingleMesh node={ nodes["Object_8"] } >
                            { xRayMaterialSingle2 }
                        </SingleMesh>
                        {/* <MeshMaterial node={ nodes["Object_8"] } material={ materials["wire_091212139"] } altMaterial={ xRayMaterialSingle2 } conditional={ false } planePosition={ planePosition } /> */}
                        {/* cristal */}
                        <SingleMesh node={ nodes["Object_7"] } >
                            <meshBasicMaterial {... materials["wire_089033070"]} />
                        </SingleMesh>
                        {/* <MeshMaterial node={ nodes["Object_7"] } material={ materials["wire_089033070"] } altMaterial={ <meshBasicMaterial {... materials["wire_089033070"]} /> } conditional={ false } planePosition={ planePosition } /> */}
                        {/* canceles metal */}
                        <SingleMesh node={ nodes["Object_5"] } >
                            { xRayMaterialTransparent }
                        </SingleMesh>
                        {/* <MeshMaterial node={ nodes["Object_5"] } material={ materials["wire_053202239"] } altMaterial={ xRayMaterialTransparent } conditional={ false } planePosition={ planePosition } /> */}
                        {/* roof top */}
                        <SingleMesh node={ nodes["Object_6"] } >
                            { xRayMaterialOutlined }
                        </SingleMesh>
                        {/* <MeshMaterial node={ nodes["Object_6"] } material={ materials["wire_075114052"] } altMaterial={ xRayMaterialOutlined } conditional={ false } planePosition={ planePosition } /> */}
                    </>)
                    :(<>
                        {/* piso fase 2 */}
                        <SingleMesh node={ nodes["Object_20"] } >
                            <ClippingMaterial material={ materials["wire_251200158"] } planePosition={ planePosition } />
                        </SingleMesh>
                        {/* <MeshMaterial node={ nodes["Object_20"] } material={ materials["wire_251200158"] } altMaterial={ xRayMaterialSingle } conditional={ true } planePosition={ planePosition } /> */}
                        {/* base granito */}
                        <SingleMesh node={ nodes["Object_19"] } >
                            <ClippingMaterial material={ materials["wire_251151192"] } planePosition={ planePosition } />
                        </SingleMesh>
                        {/* <MeshMaterial node={ nodes["Object_19"] } material={ materials["wire_251151192"] } altMaterial={ xRayMaterialSingle } conditional={ true } planePosition={ planePosition } /> */}
                        {/* base-cimientos exterior */}
                        <SingleMesh node={ nodes["Object_4"] } >
                            <ClippingMaterial material={ materials["wire_041068059"] } planePosition={ planePosition } />
                        </SingleMesh>
                        {/* <MeshMaterial node={ nodes["Object_4"] } material={ materials["wire_041068059"] } altMaterial={ xRayMaterialSingle } conditional={ true } planePosition={ planePosition } /> */}
                        {/* rombo fachada fase 2 */}
                        <SingleMesh node={ nodes["Object_18"] } >
                            <ClippingMaterial material={ materials["wire_243184028"] } planePosition={ planePosition } />
                        </SingleMesh>
                        {/* <MeshMaterial node={ nodes["Object_18"] } material={ materials["wire_243184028"] } altMaterial={ xRayMaterialTransparent } conditional={ true } planePosition={ planePosition } /> */}
                        {/* marcos fachada fase 1 */}
                        <SingleMesh node={ nodes["Object_16"] } >
                            <ClippingMaterial material={ materials["wire_236221133"] } planePosition={ planePosition } />
                        </SingleMesh>
                        {/* <MeshMaterial node={ nodes["Object_16"] } material={ materials["wire_236221133"] } altMaterial={ xRayMaterialWire } conditional={ true } planePosition={ planePosition } /> */}
                        {/* marcos fachada fase 2 */}
                        <SingleMesh node={ nodes["Object_11"] } >
                            <ClippingMaterial material={ materials["wire_108066017"] } planePosition={ planePosition } />
                        </SingleMesh>
                        {/* <MeshMaterial node={ nodes["Object_11"] } material={ materials["wire_108066017"] } altMaterial={ xRayMaterialWire } conditional={ true } planePosition={ planePosition } /> */}
                        {/* marcos fachada laterales */}
                        <SingleMesh node={ nodes["Object_3"] } >
                            <ClippingMaterial material={ materials["wire_021131041"] } planePosition={ planePosition } />
                        </SingleMesh>
                        {/* <MeshMaterial node={ nodes["Object_3"] } material={ materials["wire_021131041"] } altMaterial={ xRayMaterialWire } conditional={ true } planePosition={ planePosition } /> */}
                        {/* marcos fachada fase 2 */}
                        <SingleMesh node={ nodes["Object_2"] } >
                            <ClippingMaterial material={ materials["wire_020228098"] } planePosition={ planePosition } />
                        </SingleMesh>
                        {/* <MeshMaterial node={ nodes["Object_2"] } material={ materials["wire_020228098"] } altMaterial={ xRayMaterialWire } conditional={ true } planePosition={ planePosition } /> */}
                        {/* ... */}
                        <SingleMesh node={ nodes["Object_17"] } >
                            <ClippingMaterial material={ materials["wire_242205105"] } planePosition={ planePosition } />
                        </SingleMesh>
                        {/* <MeshMaterial node={ nodes["Object_17"] } material={ materials["wire_242205105"] } altMaterial={ <meshBasicMaterial {... materials["wire_242205105"]} /> } conditional={ true } planePosition={ planePosition } /> */}
                        {/* muros fase 1-1 */}
                        <SingleMesh node={ nodes["Object_15"] } >
                            <ClippingMaterial material={ materials["wire_155104218"] } planePosition={ planePosition } />
                            {/* <WallMaterial color={0xffffff} metalness={0} roughness={0.9} planePosition={ planePosition } /> */}
                        </SingleMesh>
                        {/* <MeshMaterial node={ nodes["Object_15"] } material={ materials["wire_155104218"] } altMaterial={ xRayMaterialTransparent } conditional={ true } planePosition={ planePosition } /> */}
                        {/* muros fase 1-2 */}
                        <SingleMesh node={ nodes["Object_12"] } >
                            <ClippingMaterial material={ materials["wire_136033122"] } planePosition={ planePosition } />
                            {/* <WallMaterial color={0xf5f5f5} metalness={0} roughness={0.9} planePosition={ planePosition } /> */}
                        </SingleMesh>
                        {/* <MeshMaterial node={ nodes["Object_12"] } material={ materials["wire_136033122"] } altMaterial={ xRayMaterialTransparent } conditional={ true } planePosition={ planePosition } /> */}
                        {/* ... */}
                        {/* cristal */}
                        <SingleMesh node={ nodes["Object_14"] } >
                            <ClippingMaterial material={ materials["wire_143148152"] } planePosition={ planePosition } />
                        </SingleMesh>
                        {/* <MeshMaterial node={ nodes["Object_14"] } material={ materials["wire_143148152"] } altMaterial={ <meshBasicMaterial {... materials["wire_143148152"]} /> } conditional={ true } planePosition={ planePosition } /> */}
                        {/* muros fase 2 */}
                        <SingleMesh node={ nodes["Object_13"] } >
                            <ClippingMaterial material={ materials["wire_141191209"] } planePosition={ planePosition } />
                            {/* <WallMaterial color={0xffffff} metalness={0.5} roughness={0.5} planePosition={ planePosition } /> */}
                        </SingleMesh>
                        {/* <MeshMaterial node={ nodes["Object_13"] } material={ materials["wire_141191209"] } altMaterial={ xRayMaterialTransparent } conditional={ true } planePosition={ planePosition } /> */}
                        <SingleMesh node={ nodes["Object_10"] } >
                            <ClippingMaterial material={ materials["wire_103248098"] } planePosition={ planePosition } />
                        </SingleMesh>
                        {/* <MeshMaterial node={ nodes["Object_10"] } material={ materials["wire_103248098"] } altMaterial={ xRayMaterialTransparent } conditional={ true } planePosition={ planePosition } /> */}
                        {/* base blanco fase 1-2 */}
                        <SingleMesh node={ nodes["Object_9"] } >
                            <ClippingMaterial material={ materials["wire_100148233"] } planePosition={ planePosition } />
                        </SingleMesh>
                        {/* <MeshMaterial node={ nodes["Object_9"] } material={ materials["wire_100148233"] } altMaterial={ xRayMaterialSingle } conditional={ true } planePosition={ planePosition } /> */}
                        {/* piso */}
                        <SingleMesh node={ nodes["Object_8"] } >
                            <ClippingMaterial material={ materials["wire_091212139"] } planePosition={ planePosition } />
                            {/* <WallMaterial color={ 0xf3f9fe } metalness={0.1} roughness={0.9} planePosition={ planePosition } /> */}
                        </SingleMesh>
                        {/* <MeshMaterial node={ nodes["Object_8"] } material={ materials["wire_091212139"] } altMaterial={ xRayMaterialSingle2 } conditional={ true } planePosition={ planePosition } /> */}
                        {/* cristal */}
                        <SingleMesh node={ nodes["Object_7"] } >
                            <ClippingMaterial material={ materials["wire_089033070"] } planePosition={ planePosition } />
                        </SingleMesh>
                        {/* <MeshMaterial node={ nodes["Object_7"] } material={ materials["wire_089033070"] } altMaterial={ <meshBasicMaterial {... materials["wire_089033070"]} /> } conditional={ true } planePosition={ planePosition } /> */}
                        {/* canceles metal */}
                        <SingleMesh node={ nodes["Object_5"] } >
                            <ClippingMaterial material={ materials["wire_053202239"] } planePosition={ planePosition } />
                        </SingleMesh>
                        {/* <MeshMaterial node={ nodes["Object_5"] } material={ materials["wire_053202239"] } altMaterial={ xRayMaterialTransparent } conditional={ true } planePosition={ planePosition } /> */}
                        {/* roof top */}
                        <SingleMesh node={ nodes["Object_6"] } >
                            <ClippingMaterial material={ materials["wire_075114052"] } planePosition={ planePosition } />
                        </SingleMesh>
                        {/* <MeshMaterial node={ nodes["Object_6"] } material={ materials["wire_075114052"] } altMaterial={ xRayMaterialOutlined } conditional={ true } planePosition={ planePosition } /> */}
                        {/* <pointLight args={[ 0xfffef8, 0.2, 10, 0.5 ]} position={[45, 22, 58]}/>
                        <pointLight args={[ 0xfffef8, 0.2, 10, 0.5 ]} position={[20, 29, 58]}/>
                        <pointLight args={[ 0xfffef8, 0.2, 10, 0.5 ]} position={[28, 22, 58]}/>
                        <pointLight args={[ 0xfffef8, 0.2, 10, 0.5 ]} position={[20, 14, 58]}/>
                        <pointLight args={[ 0xfffef8, 1, 10, 0.5 ]} position={[20, -20, 58]}/> */}
                    </>)
                }
            </group>            
        </>
    );
};