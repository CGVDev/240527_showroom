import { useGraph, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three-stdlib";
import { Outlines } from "@react-three/drei";

const SingleMesh = ({ children, node })=>{
    return(
        <mesh geometry={node.geometry} position={ node.position } receiveShadow castShadow onClick={e=>{ e.stopPropagation(); }}>
            { children }
        </mesh>
    );
}

export const XenterLoader = ({ url })=>{
    
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

    const xRayMaterialWire = (
        <>
            <meshStandardMaterial color={ 0xe0e0e0 } metalness={0} roughness={1}  transparent={ true } opacity={0.5}/>
        </>
    );


    const building = useLoader(GLTFLoader,url);
    const { nodes, materials } = useGraph(building.scene);
    
    return(
        <>  
            <group position={[-0.802, -0.46, 0.575]} scale={0.0173} rotation={[-Math.PI/2, 0 , 0]} 
            >
                (<>
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
                    {/* marcos fachada fase 2 */}
                    <SingleMesh node={ nodes["Object_11"] } >
                        { xRayMaterialWire }
                    </SingleMesh>
                    {/* marcos fachada laterales */}
                    <SingleMesh node={ nodes["Object_3"] } >
                        { xRayMaterialWire }
                    </SingleMesh>
                    {/* marcos fachada fase 2 */}
                    <SingleMesh node={ nodes["Object_2"] } >
                        { xRayMaterialWire }
                    </SingleMesh>
                    {/* ... */}
                    <SingleMesh node={ nodes["Object_17"] } >
                        <meshBasicMaterial {... materials["wire_242205105"]} />
                    </SingleMesh>
                    {/* muros fase 1-1 */}
                    <SingleMesh node={ nodes["Object_15"] } >
                        { xRayMaterialTransparent }
                    </SingleMesh>
                    {/* cristal */}
                    <SingleMesh node={ nodes["Object_14"] } >
                        <meshBasicMaterial {... materials["wire_143148152"]} />
                    </SingleMesh>
                    {/* muros fase 2 */}
                    <SingleMesh node={ nodes["Object_13"] } >
                        { xRayMaterialTransparent }
                    </SingleMesh>
                    {/* muros fase 1-2 */}
                    <SingleMesh node={ nodes["Object_12"] } >
                        { xRayMaterialTransparent }
                    </SingleMesh>
                    {/* ... */}
                    <SingleMesh node={ nodes["Object_10"] } >
                        { xRayMaterialTransparent }
                    </SingleMesh>
                    {/* base blanco fase 1-2 */}
                    <SingleMesh node={ nodes["Object_9"] } >
                        { xRayMaterialSingle }
                    </SingleMesh>
                    {/* piso */}
                    <SingleMesh node={ nodes["Object_8"] } >
                        { xRayMaterialSingle2 }
                    </SingleMesh>
                    {/* cristal */}
                    <SingleMesh node={ nodes["Object_7"] } >
                        <meshBasicMaterial {... materials["wire_089033070"]} />
                    </SingleMesh>
                    {/* canceles metal */}
                    <SingleMesh node={ nodes["Object_5"] } >
                        { xRayMaterialTransparent }
                    </SingleMesh>
        
                    {/* roof top */}
                    <SingleMesh node={ nodes["Object_6"] } >
                        { xRayMaterialSingle }
                    </SingleMesh>
    
                </>)
            </group>            
        </>
    );
};