import styled from "styled-components";
import { ApartmentItem } from "../components/ApartmentItem";
import { animated as a, useSpring, useTransition } from "@react-spring/web";
import { useContext, useEffect, useRef, useState } from "react";
import { ControlContext } from "../context/ControlContext";

export const FavoritesListView = ()=>{

    const { state, setState } = useContext(ControlContext);
    const [active, setActive] = useState(false);

    const spring = useSpring({
        opacity: active ? 1 : 0,
        translateX: active ? "0%" : "-100%"
    });

    

    const listTransition = useTransition(
        state.favorites,
        {
            from:{
                opacity: 0,
                // scaleY: 1
            },
            enter:{
                opacity: 1,
                // scaleY: 1
            },
            leave: {
                opacity: 0,
                // scaleY: 0
            }
        }
    );


    useEffect(()=>{
        setActive(true);
    }, []);

    return(
        <DepartmentsContainer >
            <HeadContainer>
                <HeadTitle>Favoritos</HeadTitle>
            </HeadContainer>    

            <FilteredListContainer>
                <FilteredListWrapper>
                    <FilteredList>
                        {
                            listTransition((style, item)=>{
                                let status = "";
                                if(state.selected.length > 0){
                                    status = item.uuid === state.selected[0].uuid ? "selected" : "";
                                }
                                return(
                                    <ApartmentItem className={status} style={style} item={ item }  onClick={ ()=>{ } }/>
                                )
                            })
                        }

                        <ApartmentItem className="empty" item={{ uuid: "", floor: "", area: "" }} />
                    </FilteredList>
                </FilteredListWrapper>
            </FilteredListContainer>
        </DepartmentsContainer>
    );
};

const DepartmentsContainer = styled(a.section)`
    width: 30%;
    height: calc(100dvh - 180px);
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: absolute;
    top: 12dvh;
    left: 0;
    padding: 20px 0 10px 20px;
`;

const HeadContainer = styled.header`
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 10px;
`;

const HeadTitle = styled.h2`
    ${({ theme }) => theme.fontStyle.listHeader};
    line-height: 1;
    text-transform: uppercase;
    margin: 0;
    user-select: none;
`;

const FilteredListContainer = styled.div`
    width: 100%;
    flex-grow: 1;
    margin: 0;
    padding: 0;
    mask-image: linear-gradient(0deg, transparent 0%,black 50px, black 100%);
    overflow: hidden;
    position: relative;
    `;

const FilteredListWrapper = styled.div`
    width: calc(100% + 25px);
    height: 100%;
    padding: 10px 20px 10px 10px;
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;
    overflow-x: hidden;
    overflow-y: scroll;
    `;

const FilteredList = styled.ul`
    width: calc(100% - 20px);
    padding: 0;
    margin: 0;
    list-style: none;
`;

const SubTypeSection = styled.div`
    width: 80%;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    padding: 5px 0;
    position: relative;

    &::after{
        display: block;
        content: "";
        width: 120%;
        height: 1px;
        background-color: ${({ theme }) => theme.color.green_100};
        position: absolute;
        bottom: 0;
        left: 0;
    }

    &:first-child{
        padding-top: 0;
    }
`;

const SubTypeLabel = styled.span`
    display: block;
    position: absolute;
    bottom: 8px;
    right: -20%;
    transform: translate(0, 0);
    ${({ theme }) => theme.fontStyle.listSectionLabel};
    text-transform: uppercase;
`;