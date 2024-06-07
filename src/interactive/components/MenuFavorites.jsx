import styled from "styled-components";
import { ListContainer } from "../containers/ListContainer";
import { FavoritesListItem } from "./FavoritesListItem";
import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../context/AppContext";
import { useTransition, animated as a } from "@react-spring/web";

export const MenuFavorites = ({ styles })=>{

    const { state, setState } = useContext(AppContext);
    const transitions = useTransition(state.favorites, {
        key: (item)=>item.uuid,
        from: {
            translateX: "100%",
            opacity: 0
        },
        enter: {
            translateX: "0%",
            opacity: 1
        },
        leave:{
            translateX: "100%",
            opacity: 0
        },
        config:{
            duration: 250,
        }
    })

    const addTour = (tour)=>{
        setState(state.addTour(tour));
    };

    const closeFavorite = (uuid)=>{
        setState(state.dropFavorite(uuid));
    };

    return(
        <MenuFavoritesContainer style={ styles }>
            <MenuDepartmentsHeader >
                <MenuDepartmentHeaderWrapper>
                    
                    <MenuDepartmentsTitle>
                                <span className="material-symbols-outlined">
                                    bookmark
                                </span>
                        {
                            true
                                ? (
                                        "Bookmarks"
                                )
                                : null
                        }
                    </MenuDepartmentsTitle>
                    

                </MenuDepartmentHeaderWrapper>
            </MenuDepartmentsHeader>
            <MenuBody>
                <ListContainer $direction="row" $justify="center">
                    {
                        transitions((style, item)=>{
                            return <FavoritesListItem item={ item } closeAction={closeFavorite} style={ style } btnAction={ addTour } imageRoute={ state.api.getWPImageRoute(item.type) + ".png" } />
                        })
                    }
                </ListContainer>
            </MenuBody>
        </MenuFavoritesContainer>
    );
};

const MenuFavoritesContainer = styled(a.section)`
    width: 80%;
    height: calc(100% - 250px);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    max-width: 600px;
    max-height: 1200px;
    position: absolute;
    top: 200px;
    left: 0;
    /* transform: translate(0, -50%); */
    /* background-color: #FFF4; */
    border-radius: 0 16px 16px 0;
    overflow: hidden;

    @media (orientation: portrait){
        width: calc(85% - 15px);
        height: calc(100% - 150px);
        top: 120px;
        max-width: 500px;
    }
`;

const MenuBody = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    flex-grow: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`;

const MenuDepartmentsHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 10px 10px 0;
    /* background-color: ${ ({ theme })=>theme.color.green_100 }; */
    cursor: pointer;
    user-select: none;

    span{
        color: ${ ({ theme })=>theme.color.white };
        font-size: 30px;
        padding: 0 10px 0 0;
        user-select: none;
    }
`;

const MenuDepartmentHeaderWrapper = styled.div`
    width: 100%;
    background-color: ${ ({ theme })=>theme.color.green_100 };
    border: 1px solid ${ ({ theme })=>theme.color.green_50 };
    border-radius: 0 30px 30px 0;
    padding: 8px 20px;

`;

const MenuDepartmentsTitle = styled.h2`
    ${ ({ theme })=>theme.fontStyle.h2 };
    color: ${ ({ theme })=>theme.color.white };
    white-space: nowrap;

`;