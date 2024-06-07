import { useContext, useEffect, useState } from "react";
import { InterestPoint } from "../../utils/InteresPoint";
import { AmenityItem } from "../components/AmenityItem";
import { MenuListRight } from "../components/MenuListRight";
import { SocketContext } from "../../hooks/useSocket";
import { SocketActions } from "../../utils/SocketActions";

export const InterestView = ()=>{

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
            <AmenityItem className={ selected === InterestPoint.STORE ? "selected" : "" } item={ { label: InterestPoint.LABEL[InterestPoint.STORE] } }  onClick={ ()=>emitSelection(InterestPoint.STORE) } />
            <AmenityItem className={ selected === InterestPoint.PARK ? "selected" : "" } item={ { label: InterestPoint.LABEL[InterestPoint.PARK] } } onClick={ ()=>emitSelection(InterestPoint.PARK) } />
            <AmenityItem className={ selected === InterestPoint.SUBWAY ? "selected" : "" } item={ { label: InterestPoint.LABEL[InterestPoint.SUBWAY] } } onClick={ ()=>emitSelection(InterestPoint.SUBWAY) } />
            <AmenityItem className={ selected === InterestPoint.ENTERTAINMENT ? "selected" : "" } item={ { label: InterestPoint.LABEL[InterestPoint.ENTERTAINMENT] } } onClick={ ()=>emitSelection(InterestPoint.ENTERTAINMENT) } />
            <AmenityItem className={ selected === InterestPoint.HOSPITAL ? "selected" : "" } item={ { label: InterestPoint.LABEL[InterestPoint.HOSPITAL] } } onClick={ ()=>emitSelection(InterestPoint.HOSPITAL) } />

        </MenuListRight>
    );
};