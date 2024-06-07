import { animated as a, useSpring } from "@react-spring/web";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { BreadCrumItem } from "../components/BreadCrumItem";
import { ControlContext } from "../context/ControlContext";
import { Stage } from "../utils/Stages";
import { BreadCrum } from "../../utils/BreadCrum";
import { SocketContext } from "../../hooks/useSocket";
import { SocketActions } from "../../utils/SocketActions";

export const BreadCrumView = ()=>{

    const { socket } = useContext(SocketContext);
    const { state, setState } = useContext(ControlContext);
    const [ active, setActive ] = useState(false);

    const spring = useSpring({
        opacity: active ? 1 : 0,
        translateX: "-50%",
        translateY: active ? "0%" : "50%",

    });

    const setStage = (stage)=>{
        setState(state.setStage(stage));
    }

    useEffect(()=>{
        setActive(true);
        return ()=>{ setActive(false) }
    }, []);

    return(
        <BreadCrumContainer style={ spring }>
            <BreadCrumWrapper>
                <BreadCrumItem 
                    status={ (state.stage === Stage.STAGE_1) || (state.stage === Stage.STAGE_2) ? BreadCrum.SELECTED : (state.stage > Stage.STAGE_2) ? BreadCrum.ENABLED : BreadCrum.DISABLED} 
                    label={ "Explora" } 
                    icon={ 1 } 
                    onClick={ ()=>{ 
                        socket.emit(SocketActions.SET_VIEW, {
                            type: SocketActions.ACTIONS[SocketActions.SET_VIEW].INIT_EXPLORA,
                            payload: {
                                type: SocketActions.ACTIONS[SocketActions.SET_VIEW].INIT_EXPLORA,
                                payload: ""
                            }
                        })
                        setState(state.initStage1()) 
                    } }  
                />
                <BreadCrumItem 
                    status={ state.stage === Stage.STAGE_3 ? BreadCrum.SELECTED : (state.favorites.length === 3) ? BreadCrum.ENABLED : BreadCrum.DISABLED }
                    label={ "Compara" } 
                    icon={ 2 } 
                    onClick={ ()=>{ 
                        socket.emit(SocketActions.SET_VIEW, {
                            type: SocketActions.ACTIONS[SocketActions.SET_VIEW].INIT_COMPARA,
                            payload: {
                                type: SocketActions.ACTIONS[SocketActions.SET_VIEW].INIT_COMPARA,
                                payload: ""
                            }
                        })
                        setState(state.initStage3());
                    } } 
                />

                <BreadCrumItem 
                    status={ state.stage === Stage.STAGE_4 ? BreadCrum.SELECTED : (state.favorites.length === 3) ? BreadCrum.ENABLED : BreadCrum.DISABLED}
                    label={ "Cotiza" } 
                    icon={ 3 } 
                    onClick={ ()=>{ setState(state.initStage4()) } } 
                />

                <BreadCrumItem 
                    status={ state.stage === Stage.STAGE_5 ? BreadCrum.SELECTED : BreadCrum.DISABLED}
                    label={ "Conoce tu Nuevo Hogar" } 
                    icon={ 4 } 
                    onClick={ ()=>{ setStage(Stage.STAGE_0) } } 
                />
            </BreadCrumWrapper>
        </BreadCrumContainer>
    );
}

const BreadCrumContainer = styled(a.section)`
    width: 90%;
    max-width: 1200px;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, 0);
    /* border: 1px solid ${({ theme }) => theme.color.gray_40}; */
    border-radius: 300px;
    padding: 10px;
`;

const BreadCrumWrapper = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    list-style: none;
    padding: 0;
    margin: 0;

    &::before{
        display: block;
        content: "";
        width: calc(110% - 20px);
        height: 4px;
        border-radius: 300px;
        background-color: ${({ theme }) => theme.color.green_100};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
    }
`;