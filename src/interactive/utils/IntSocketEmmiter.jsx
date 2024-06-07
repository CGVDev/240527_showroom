import { useContext, useEffect, useRef } from "react"
import { InteractiveContext } from "../context/InteractiveContext";
// import { socket } from "../../utils/Socket";
import { SocketContext } from "../../hooks/useSocket";
import { SocketActions } from "../../utils/SocketActions";
import { useThree } from "@react-three/fiber";
import { Vector3 } from "three";

export const IntSocketEmmiter = ()=>{
    const { state, setState } = useContext(InteractiveContext);
    const { socket } = useContext(SocketContext);
    const { get } = useThree(state=>state);

    // const controls = useRef(get().controls);

    const setApartment = (payload)=>{
        setState(state.setSelected(payload));
    }

    const setFavorites = (favs)=>{
        setState(state.setFavorites(favs))
    }

    const setScreen = (data)=>{
        if(data.type === "ACTIVE_VR"){
            setState(state.setCurrentVR(data.payload))
        }
        if(data.type === "CLOSE_VR"){
            setState(state.closeCurrentVR());
        }
    }

    const setTour = (data)=>{
        console.log(data)
        if(data.type === "OPEN_TOUR"){
            setState(state.openTour())
        }
        
        if(data.type === "CLOSE_TOUR"){
            setState(state.closeTour())
        }
    }

    const setInterestPoint = (data)=>{
        if(data.type === SocketActions.ACTIONS[SocketActions.INTEREST_POINT].SET_POINT){
            setState(state.setInterestPoint(data.payload));
        }
        if(data.type === SocketActions.ACTIONS[SocketActions.INTEREST_POINT].CLEAR_POINTS){
            setState(state.cleanInterestPoint())
        }

    };

    const setSun = (data)=>{
        if(data.type === SocketActions.ACTIONS[SocketActions.SUNNING].SET_DAYTIME){
            setState(state.updateTime(data.payload));
        }
    }

    const tourActions = (data)=>{
        console.log(data);
        if(data.type === SocketActions.ACTIONS[SocketActions.TOUR360].OPEN_TOUR){
            setState(state.openTour(data))
        }
        
        if(data.type === SocketActions.ACTIONS[SocketActions.TOUR360].CLOSE_TOUR){
            setState(state.closeTour())
        }
        if(data.type === SocketActions.ACTIONS[SocketActions.TOUR360].SET_SPHERE){
            setState(state.changeSphere(data));
        }
    }

    const setCameraPosition = (data)=>{
        let { payload: { x, y, z } } = data;

            let controls = get().controls;
            if(controls){
                let camera = controls.object;
                
                camera.updateMatrixWorld();
    
                let origin = new Vector3(0,0,0);
                let target = new Vector3(x, y, z);
    
                let distance = camera.position.distanceTo(origin);
    
                target.multiplyScalar(distance);
    
                controls.object.position.set(target.x, target.y, target.z);
            }
    }

    // const disableCamara = ()=>{
    //     let controls = get().controls;
    //         let camera = controls.object;
    //         camera.position.set(0, 8, 26);
    //         setState(state.disableControls());
    // }

    const activeView = (data)=>{
        console.log(data)
        if(data.payload.type === SocketActions.ACTIONS[SocketActions.SET_VIEW].INIT_EXPLORA){
            setState(state.activeExplora());
        }
        if(data.payload.type === SocketActions.ACTIONS[SocketActions.SET_VIEW].INIT_COMPARA){
            setState(state.activeCompara());
        }
        if(data.payload.type === SocketActions.ACTIONS[SocketActions.SET_VIEW].INIT_EXIT){
            console.log("activador")
            setState(state.activeExit());
        }
    }

    useEffect(()=>{
        socket.on("interactive_selected", (data)=>{
            console.log("Interactive", data)
            setApartment(data.payload);
        });

        socket.on("interactive_favorites", (data)=>{
            setFavorites(data.payload);
        });

        socket.on("interactive_vr_action", (data)=>{
            setScreen(data)
        })

        socket.on("screen_tour", (data)=>{
            setTour(data);
        })

        socket.on(SocketActions.INTEREST_POINT, (data)=>{
            setInterestPoint(data)
        })

        socket.on(SocketActions.SUNNING, (data)=>{
            setSun(data);
        })

        socket.on(SocketActions.TOUR360, (data)=>{
            tourActions(data);
        })

        socket.on(SocketActions.CAMERA_FROM_CONTROL, (data)=>{
            setCameraPosition(data)
        })

        socket.on(SocketActions.SET_VIEW, (data)=>{
            console.log(data);
            activeView(data);
        })

    }, []);
    return(<></>)
}