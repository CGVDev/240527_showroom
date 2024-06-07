import styled from "styled-components";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { MenuButton } from "./ButtonMenu";

export const NavBar = ()=>{

    const { state, setState } = useContext(AppContext);

    const openMenuApartments = ()=>{
        setState(state.toggleDeptList());
    }

    const updateVisibility = ()=>{
        setState(state.updateCityVisibility());
    }

    const openMenuDaytime = ()=>{
        setState(state.toggleDaytimeDown());
    }

    const fullScreen = ()=>{
        setState(state.toggleFullscreen());
    }

    return(
        <MenuWrapper>
            <MenuActions>
                <ContainerActions>
                    <ActionsContainer>
                        {/* <MenuButton $width={"20%"} $maxWidth={"60px"} $tag={"transport"} $fontSize={"80%"} $action={ fullScreen }>
                            <span className="material-symbols-outlined">
                                commute
                            </span>
                        </MenuButton> */}
                        <MenuButton $width={"20%"} $maxWidth={"60px"} $tag={ state.isFullscreen ? "Window" : "Fullscreen"} $fontSize={"80%"} $action={ fullScreen }>
                            <span className="material-symbols-outlined">
                                { state.isFullscreen ? "zoom_in_map" : "zoom_out_map" }
                            </span>
                        </MenuButton>
                        {/* <MenuButton $width={"20%"} $maxWidth={"60px"} $tag={"ruotes"} $fontSize={"80%"}>
                            <span className="material-symbols-outlined">
                                arrow_split
                            </span>
                        </MenuButton>
                        <MenuButton $width={"20%"} $maxWidth={"60px"} $tag={""} $fontSize={"80%"}>
                            <span className="material-symbols-outlined">
                                mode_of_travel
                            </span>
                        </MenuButton> */}
                        <MenuButton $width={"20%"} $maxWidth={"60px"} $tag={"Lista"} $fontSize={"80%"} $action={ openMenuApartments }>
                            <span className="material-symbols-outlined">
                                {/* holiday_village */}
                                lists
                            </span>
                        </MenuButton>
                        
                        <MenuButton $width={"20%"} $maxWidth={"60px"} $tag={"Asoleamiento"} $fontSize={"80%"} $action={ openMenuDaytime }>
                            <span className="material-symbols-outlined">
                                routine
                            </span>
                        </MenuButton>
                        <MenuButton $width={"20%"} $maxWidth={"60px"} $tag={ "Ambiente" } $fontSize={"80%"} $action={ updateVisibility }>
                            <span className="material-symbols-outlined">
                                { state.cityVisibility ? "domain_disabled" : "domain" }
                            </span>
                        </MenuButton>
                    </ActionsContainer>
                </ContainerActions>
            </MenuActions>

        </MenuWrapper>
    );
};

const MenuWrapper = styled.nav`
    max-width: 90%;
    min-width: 390px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    position: absolute;
    top: 0;
    right: 0;
    padding: 20px 20px 0 0;
`;

const MenuActions = styled.ul`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: stretch;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
`;

const ContainerActions = styled.li`
    width: 80%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    user-select: none;
`;

const ActionsContainer = styled.ul`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    margin: 0;
    padding: 0 10px;
    list-style: none;
`;