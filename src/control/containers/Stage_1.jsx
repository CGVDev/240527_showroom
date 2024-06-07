import styled from "styled-components";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { useContext, useState } from "react";
import { ControlContext } from "../context/ControlContext";
import { Stage } from "../utils/Stages";
import { AmenitiesListView } from "./AmenitiesListView";
import { InterestView } from "./InterestView";
import { ProjectOptions } from "../utils/ProjectOptions";
import { ControlDayTimeView } from "./ControlDayTimeView";
import { AmenitiesOptions } from "../utils/AmenitiesOptions";
import { AmenityFactory } from "../../utils/AmenityFactory";

export const Stage_1 = ()=>{

    const { state, setState } = useContext(ControlContext);

    const toggleAmenitiesMenu = ()=>{
        setState(state.setRadialAmenities(true));
    }

    const toggleProjectMenu = ()=>{
        setState(state.setRadialProject(true));
    }

    const nextStage = ()=>{
        setState(state.initStage2());
    }

    return(
        <>
            <MenuContainer>
                <ButtonContainer>
                    <ButtonPrimary label={ "Proyecto" } onClick={ toggleProjectMenu }/>
                    <ButtonPrimary label={ "Amenidades" } onClick={ toggleAmenitiesMenu } />
                    <ButtonPrimary label={ "Residencias" } onClick={ nextStage } />
                </ButtonContainer>
            </MenuContainer>
            {
                state.radialAmenities && (state.radialAmenitiesOption === AmenitiesOptions.PLACES) && <AmenitiesListView list={ AmenityFactory.instance.amenities } />
            }
            {
                state.radialProject && (state.radialProjectOption === ProjectOptions.INTEREST) && <InterestView />
            }
            {
                state.radialProject && (state.radialProjectOption === ProjectOptions.DAYTIME) && <ControlDayTimeView />
            }
        </>
    );
};

const MenuContainer = styled.section`
    width: 30%;
    height: 86dvh;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: absolute;
    top: 14dvh;
    left: 0;
    padding: 20px 0 10px 20px;
`;

const ButtonContainer = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: flex-start;
    margin: 0;
    padding: 0;
`;