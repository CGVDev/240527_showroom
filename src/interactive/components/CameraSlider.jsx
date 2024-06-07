import { useThree } from "@react-three/fiber";
import { useContext, useRef } from "react";
import { AppContext } from "../context/AppContext";

export const CameraSlider = ()=>{
    const {setState} = useContext(AppContext);
    const inputRef = useRef(null);
    
    const updateCameraPosition = ()=>{
        setState(prev=>prev.updateCameraVertical(inputRef.current.value));
    }

    return(
        <input type="range" onChange={updateCameraPosition} ref={inputRef} min={0} max={13}>
        </input>
    );
};