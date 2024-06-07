import styled from "styled-components";
import { ButtonView } from "../../components/ButtonView";
import { useContext, useEffect, useState } from "react";
import { ControlContext } from "../context/ControlContext";
import { animated as a, useSpring } from "@react-spring/web";
import { ButtonDetailNav } from "../../components/ButtonDetailNav";
import { SocketContext } from "../../hooks/useSocket";
import { SocketActions } from "../../utils/SocketActions";
import { Group } from "../../utils/Group";
import { ApartmentFactory } from "../../utils/ApartmentFactory";

class Selection{
    static SURROUNDINGS = "SORROUNDINGS";
    static VIRTUAL_TOUR = "TOUR";
    static VIEW_3D = "VIEW_3D";
    static BUILDING = "BUILDING";
    static NULL = "";
}

export const DetailNavView = ()=>{
    const { socket } = useContext(SocketContext);
    const { state, setState } = useContext(ControlContext);
    const [selected, setSelected] = useState()

    const [active, setActive] = useState(false);

    const spring = useSpring({
        opacity: active ? 1 : 0,
        translateX: active? "0%" : "100%"
    })

    const addToFavorites = ()=>{
        setState(state.addToFavorites());
    }

    const toggleVR = ()=>{
        if(state.tour){
            setSelected(Selection.VIRTUAL_TOUR);
            setState(state.toggleTour());
        }
        else{
            setSelected(Selection.VIEW_3D);
            setState(state.toggleVR());
        }
    }

    const toggleTour = ()=>{
        setSelected(Selection.VIRTUAL_TOUR);
        setState(state.toggleTour());
    }

    const toggleReal = ()=>{
        if(setSelected === Selection.SURROUNDINGS){
            setSelected(Selection.NULL);
        }
        else{
            setSelected(Selection.SURROUNDINGS);
            socket.emit(SocketActions.TOUR360, {
                type: SocketActions.ACTIONS[SocketActions.TOUR360].OPEN_TOUR,
                payload: {
                    typo: "REAL",
                    sphere: ApartmentFactory.GROUP[state.selected[0].type].toUpperCase()
                }
            })
        }
    }

    useEffect(()=>{
        setActive(true)
        return()=>{ setActive(false) }
    }, []);
    return(
        <DetailNavContainer style={spring}>
            <DetailNavWrapper>
                <ButtonGroup>
                    <ButtonDetailNav item={ { label:"Vistas Reales", selected: selected === Selection.SURROUNDINGS} } onClick={ toggleReal }/>
                    <ButtonDetailNav item={ { label:"Tour Virtual", selected: selected === Selection.VIRTUAL_TOUR} } onClick={ toggleTour }/>
                    <ButtonDetailNav item={ { label: state.isVRActive ? "Edificio 3D" : "Maqueta 3D", selected: selected === Selection.VIEW_3D} } onClick={ toggleVR }/>
                </ButtonGroup>
                <ButtonGroup>
                    <ButtonDetailNav item={ { label:"+ Bookmark", selected: false, selected: true } } onClick={ addToFavorites }/>
                </ButtonGroup>
            </DetailNavWrapper>
        </DetailNavContainer>
    );
}

const DetailNavContainer = styled(a.section)`
    width: 30%;
    max-width: 500px;
    padding: 10px;
    position: absolute;
    bottom: 100px;
    right: 20px;
`;

const DetailNavWrapper = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const ButtonGroup = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: stretch;
    padding: 5px 0;
`;