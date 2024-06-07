import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../hooks/useSocket";
import { SocketActions } from "../../utils/SocketActions";
import { AmenityItem } from "../components/AmenityItem";
import { MenuListRight } from "../components/MenuListRight";

export const SorroundingView = ()=>{

    const { socket } = useContext(SocketContext);
    const [ selected, setSelected ] = useState(null);

    const emitSelection = (point)=>{
        setSelected(point);
        socket.emit(SocketActions.INTEREST_POINT, { 
            type: SocketActions.ACTIONS[SocketActions.INTEREST_POINT].SET_POINT,
            payload: point
        })
    }
    
    const clearSelection = ()=>{
        setSelected("")
        socket.emit(SocketActions.INTEREST_POINT, { 
            type: SocketActions.ACTIONS[SocketActions.INTEREST_POINT].CLEAR_POINTS,
            payload: ""
        })
    }


    useEffect(()=>{
        return ()=>{ clearSelection() }
    }, []);

    return(
        <MenuListRight title={"Puntos"}>
            <AmenityItem 
                className={ selected === true ? "selected" : "" } 
                item={ { label: `` } }  
                onClick={ ()=>emitSelection(true) } 
            />
            <AmenityItem 
                className={ selected === true ? "selected" : "" } 
                item={ { label: `` } } 
                onClick={ ()=>emitSelection(true) } 
            />
            <AmenityItem 
                className={ selected === true ? "selected" : "" } 
                item={ { label: `` } } 
                onClick={ ()=>emitSelection(true) } 
            />
            <AmenityItem 
                className={ selected === true ? "selected" : "" } 
                item={ { label: `` } } 
                onClick={ ()=>emitSelection(true) } 
            />


        </MenuListRight>
    );
};