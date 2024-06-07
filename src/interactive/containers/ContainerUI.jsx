import { LogoContainer } from "./LogoContainer";
import styled from "styled-components";
import { useTransition } from "@react-spring/web";
import { useContext, useEffect, useState } from "react";

import { TouchesUI } from "../components/TouchesUI";
import { Apartment } from "../../utils/Apartment";
import { InteractiveContext } from "../context/InteractiveContext";
import { Screen } from "../../utils/Screen";
import { TourView } from "./TourView";
import { ComparaView } from "./ComparaView";
import { LogoCGVeron } from "../../containers/LogoCGVeron";
import { ExitView } from "./ExitView";

export const ContainerUI = ()=>{

    const { state, setState } = useContext(InteractiveContext);

    const [ daytrigger, setDayTrigger ] = useState([]);
    const [ deptrigger, setDepTrigger ] = useState([]);
    const [ favtrigger, setFavTrigger ] = useState([]);
    const [ helpertrigger, setHelperTrigger ] = useState([]);

    useEffect(()=>{
        let request = async()=>{
            let data = await state.api.get();
            let departments  = data.map(({ uuid, type, floor, area, avaliability, vtUrl, rooms })=>{
                return new Apartment(uuid, type, floor, area, rooms, vtUrl, avaliability, uuid);
            });
            // console.log(departments)
            setState(prev=>prev.setData(departments));
        }

        request();
    }, []);

    useEffect(()=>{
        if(state.listDeptIsActive){
            setDepTrigger([1]);
        }
        else{
            setDepTrigger([]);
        }
    }, [ state.listDeptIsActive ]);

    useEffect(()=>{
        if(state.listFavoritesIsActive){
            setFavTrigger([1]);
        }
        else{
            setFavTrigger([]);
        }
    }, [state.listFavoritesIsActive]);
    
    useEffect(()=>{
        if(state.isDaytimeDownActive){
            setDayTrigger([1]);
        }
        else{
            setDayTrigger([]);
        }
    }, [ state.isDaytimeDownActive ]);
    
    useEffect(()=>{
        if(state.listDeptIsActive || state.listFavoritesIsActive || state.departments3DSelector || state.isAmenities){
            setHelperTrigger([1]);
        }
        else{
            setHelperTrigger([]);
        }
    }, [ state.listDeptIsActive, state.listFavoritesIsActive, state.departments3DSelector, state.isAmenities ]);

    return(
        <>
            
            <LogoContainer img={ "./img/immersive_logo.png" } href={ state.api.rootUrl }/>
            <LogoCGVeron img={ "./img/cgveron_logo.png" } />
            {
                state.activeScreen === Screen.TOUR && state.tour360 && (
                    <TourView url={ state.api.getTourRoute(state.tour360) } />
                )
            }
            {
                state.activeScreen === Screen.COMPARA && (
                    <ComparaView />
                )
            }
            {
                state.activeScreen === Screen.EXIT && (
                    <ExitView />
                )
            }
            <TouchesUI />
        </>
    )
};

const Details = styled.div`
    width: 400px;
    height: 400px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);

`;