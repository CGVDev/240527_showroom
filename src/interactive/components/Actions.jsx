import { useThree } from "@react-three/fiber";
import { useContext, useEffect, useState } from "react";
import { InteractiveContext } from "../context/InteractiveContext";


const clamp = ((min, max)=>(num)=>Math.min(Math.max(num, min), max))(2, 8);

export const Actions = ()=>{
    const { state, setState } = useContext(InteractiveContext);

    const { get } = useThree(state=>state);

    const [ distance, setDistance ] = useState(0);
    const [ opacity, setOpacity ] = useState(1);

    useEffect(()=>{
        let _controls = get().controls;
        
        _controls.addEventListener("change", ()=>{
            let _distance = +_controls.object.position.distanceTo(state.origin).toFixed(0);
            setDistance(_distance);
        })
    }, []);

    useEffect(()=>{
        if(distance != state.cameraDistance){
            setState(state.updateDistance(distance));
        }
    
    }, [distance])

    // useEffect(()=>{
    //     camera.position.set(state.cameraPosition);
    // }, [state.cameraPosition]);



    return (<></>);
}

