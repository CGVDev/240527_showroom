import { useContext, useEffect } from "react";
import { ControlContext } from "../context/ControlContext";
import { SocketContext } from "../../hooks/useSocket";
import { SocketActions } from "../../utils/SocketActions";
import { ApartmentFactory } from "../../utils/ApartmentFactory";

export const ConSocketEmmiter = ()=>{
    const { state } = useContext(ControlContext);
    const { socket } = useContext(SocketContext);

    useEffect(()=>{
        socket.emit(
            "change_selected", 
            { 
                type: "CHANGE_SELECTED", 
                payload: state.selected.map(s=>s.uuid)
            }
        );
    }, [state.selected]);

    useEffect(()=>{
        socket.emit(
            "change_favorites", 
            { 
                type: "CHANGE_FAVORITES", 
                payload: state.favorites.map(fav=>fav.uuid)
            }
        );
    }, [state.favorites]);

    useEffect(()=>{
        if(state.isVRActive){
            socket.emit(
                "active_vr",
                {
                    type: "ACTIVE_VR",
                    payload: state.selected.map(vr=>vr.type)
                }
            )
        }
        else{
            socket.emit(
                "active_vr",
                {
                    type: "CLOSE_VR",
                    payload: []
                }
            )
            
        }
        
    },[state.isVRActive]);

    useEffect(()=>{
        let payload = {};
        console.log(state.selected);
        if(state.tour){
            payload = state.selected.reduce((acc, tour)=>{
                return {
                    typo: ApartmentFactory.TOUR[tour.type],
                    sphere: ApartmentFactory.DETAIL[ApartmentFactory.TOUR[tour.type]].ROOMS.DEFAULT
                }
            }, {});

            
            // let tour = {
            //     type: state.selected[0] 
            //     ? SocketActions.ACTIONS[SocketActions.TOUR360].OPEN_TOUR
            //     : SocketActions.ACTIONS[SocketActions.TOUR360].CLOSE_TOUR,
            //     payload
            // }
            
            // console.log(state.selected, ApartmentFactory.TOUR["PH-C"], payload) 
            // console.log("TOUR-ROUTE", ApartmentFactory.TOUR[tour.payload.typo], ApartmentFactory.DETAIL[ApartmentFactory.TOUR[tour.payload.typo]])
        }


        socket.emit(
            SocketActions.TOUR360,
            {
                type: state.tour 
                    ? SocketActions.ACTIONS[SocketActions.TOUR360].OPEN_TOUR
                    : SocketActions.ACTIONS[SocketActions.TOUR360].CLOSE_TOUR,
                payload
            }
        )
        // socket.emit(
        //     "screen_tour",
        //     {
        //         type: state.tour ? "OPEN_TOUR" : "CLOSE_TOUR",
        //         payload: state.selected.map(tour=>tour.type)

        //     }
        // )
    }, [state.tour]);

    useEffect(()=>{
        socket.emit(
            SocketActions.SUNNING,
            {
                type: SocketActions.ACTIONS[SocketActions.SUNNING].SET_DAYTIME,
                payload: state.slider
            }
        )
    }, [state.slider]);

    return(<></>)
}