import styled from "styled-components";
import { ButtonRound } from "../containers/ButtonRound";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useSpring, animated as a } from "@react-spring/web";

export const MenuHelper = ({ style })=>{

    const { state, setState } = useContext(AppContext);

    // const transition = useSpring({
    //     left: state.listFavoritesIsActive ? 45 : window.innerWidth - 45,
    //     translateX: "-50%",
    //     translateY: "-50%" 
    // })

    const toggleFavorites = ()=>{
        setState(state.toggleFavoritesList());
    }

    const toggleCompressed = ()=>{
        setState(state.toggleDeptListCompressed());
    }
    
    const toggleAmenities = ()=>{
        setState(state.toggleAmenities());
    }
    
    const toggleXray = ()=>{
        setState(state.toggleXray());
    }

    const toggleDepartments3DVisibility = ()=>{
        setState(state.toggleDept3DVisibility());
    }
    
    const closeMenuDepartment3D = ()=>{
        setState(state.disableMenuDepartment3D());
    }

    const closeListDepartment = ()=>{
        setState(state.hideDeptList());
    }

    const closeMenus = ()=>{
        if(state.listDeptIsActive || state.listFavoritesIsActive){
            closeListDepartment();
        }
        else{
            closeMenuDepartment3D();
        }
    }
    
    return(
        <MenuHelperContainer style={ style } >
            {
                state.listDeptIsActive || state.listFavoritesIsActive
                ? (
                    <MenuHelperGroup>
                        <ButtonRound onClick={ toggleFavorites }>
                            <span className="material-symbols-outlined">
                                bookmark
                            </span>
                        </ButtonRound>
                        <ButtonRound onClick={ toggleCompressed } >
                            { 
                                state.listDeptIsCompressed 
                                ? (
                                    <span className="material-symbols-outlined">
                                        expand_content
                                        {/*hide*/}
                                        {/*collapse_content*/}
                                    </span>
                                )
                                : (
                                    <span className="material-symbols-outlined">
                                        collapse_content
                                    </span>
                                )
                            }

                        </ButtonRound>
                    </MenuHelperGroup>
                )
                : null
            }
            
            {
                state.departments3DSelector || state.isAmenities
                ? (
                    <MenuHelperGroup>
                        <ButtonRound onClick={ toggleDepartments3DVisibility } >
                            <span className="material-symbols-outlined">
                                deployed_code
                            </span>
                        </ButtonRound>
                        <ButtonRound onClick={ toggleAmenities } >
                            <span className="material-symbols-outlined">
                                self_improvement
                            </span>
                        </ButtonRound>
                        <ButtonRound onClick={ toggleXray } >
                            <span className="material-symbols-outlined">
                                blur_on
                            </span>
                        </ButtonRound>
                    </MenuHelperGroup>
                )
                : null
            }
            <MenuHelperGroup>

                <ButtonRound onClick={ closeMenus } >
                    <span className="material-symbols-outlined">
                        close_small
                    </span>
                </ButtonRound>
            </MenuHelperGroup>
            
        </MenuHelperContainer>
    );
};

const MenuHelperContainer = styled(a.div)`
    width: 15%;
    max-width: 100px;
    border: 1px solid ${ ({ theme })=>theme.color.white };
    border-radius: 300px;
    padding: 6px;
    position: absolute;
    top: 50%;
    /* left: 0; */
    transform: translate(-10px, -50%);
`;

const MenuHelperGroup = styled.div`
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.color.white };
    
    padding: 10px 0;

    &:first-child{
        border-top: none;
    }

`;

