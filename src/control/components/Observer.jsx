import { useThree } from "@react-three/fiber"
import { useContext, useEffect } from "react";
import { Vector3, Object3D } from "three";
import { SocketContext } from "../../hooks/useSocket";
import { SocketActions } from "../../utils/SocketActions";
import { ControlContext } from "../context/ControlContext";

export const Observer = ()=>{

    const { state, setState } = useContext(ControlContext);
    const { socket } = useContext(SocketContext);
    const { get } = useThree(state=>state);

    useEffect(()=>{
        let _controls = get().controls;


        _controls.addEventListener("change", ()=>{

            // if(state.activePositionListener){
                let _camera = _controls.object;
    
                _camera.updateMatrixWorld();
    
                let _vector = _camera.position.clone();
                let vector = new Vector3(_vector.x, _vector.y, _vector.z);
                
                vector.normalize();
    
                socket.emit(
                    SocketActions.CAMERA_FROM_CONTROL, 
                    {
                        type: SocketActions.ACTIONS[SocketActions.CAMERA_FROM_CONTROL].SET_CAMERA,
                        payload: vector
                    }
                );

            // }

            
        })
    }, []);


    return(<></>)
}