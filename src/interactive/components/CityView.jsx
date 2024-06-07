import { easings, useSpring } from "@react-spring/three";
import { useContext, useEffect, useState } from "react";
import { AppContext, InteractiveContext } from "../context/InteractiveContext";
import { animated as a } from "@react-spring/three";
import { Outlines } from "@react-three/drei";

export const CityView = ({ cityGeometry, mapGeometry, mapTexture})=>{
    //-0.1955
    // const position = [-0.205, -0.456, 0.106];
    const position = [0.25, -0.4558, -0.01];
    const scale = 0.93;
    //rY = Math.PI * 1.042
    // Math.PI * 0.0325
    const rotation = [0, 0, 0];

    const { state } = useContext( InteractiveContext );
    const [ visibility, setVisibility ] = useState(state.cityVisibility);

    const { opacity } = useSpring({ 
        opacity: state.cityOpacity,
        onStart: {
            opacity: ()=>{
                if(state.cityVisibility){
                    setVisibility(true);
                }
            }
        },
        onRest:{
            opacity: ({ value })=>{
                if(value >= 0.2 && state.cityVisibility){
                    setVisibility(true);
                }
                else{
                    setVisibility(false);
                }
            }
        },
        config:{
            easing: easings.easeOutSine,
            duration: 0
        }
    });

    useEffect(()=>{
        setVisibility(state.cityVisibility);
    }, [state.cityVisibility]);

    return(
        <>
            <mesh geometry={ cityGeometry } castShadow receiveShadow position={position} rotation={ rotation } scale={ scale }>
                <a.meshPhysicalMaterial color={0xe3f2fd} metalness={ 0 } roughness={ 0 } transmission={ 0.2 } transparent={ true } opacity={ opacity } visible={ visibility }/>
                <Outlines thickness={0.002} color={ 0x334b5e } transparent={ true } opacity={0.9} visible={ visibility } />
            </mesh>
            <mesh geometry={ mapGeometry }  castShadow receiveShadow position={position} rotation={ rotation } scale={ scale } onClick={e=>{ e.stopPropagation(); }} onPointerDown={e=>{ e.stopPropagation(); }} >
                <meshPhysicalMaterial color={ 0xffffff }  metalness={ 0 } roughness={ 1 } map={ mapTexture } flatShading={ true } transparent={false} />
            </mesh>
        </>

    );
};