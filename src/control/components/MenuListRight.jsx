import styled from "styled-components";
import { ApartmentItem } from "../components/ApartmentItem";
import { useSpring, animated as a } from "@react-spring/web";
import { useEffect, useState } from "react";

export const MenuListRight = ({ title, children })=>{

    const [active, setActive] = useState(false);

    const spring = useSpring({
        opacity: active ? 1 : 0,
        translateX: active ? "0%" : "100%"

    });

    useEffect(()=>{
        setActive(true);
        return ()=>{ setActive(false) }
    }, []);



    return(
        <MenuListContainer style={ spring } >
            <HeadContainer>
                <HeadTitle>{ title }</HeadTitle>
            </HeadContainer>
            <FilteredListContainer>
                <FilteredListWrapper>
                    <FilteredList>
                        { children }
                        <ApartmentItem className="empty" item={{ uuid: "", floor: "", area: "" }} />
                    </FilteredList>
                </FilteredListWrapper>
            </FilteredListContainer>
        </MenuListContainer>
    );
};

const MenuListContainer = styled(a.section)`
    width: 30%;
    height: 86dvh;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: absolute;
    top: 12dvh;
    right: 0;
    padding: 20px 20px 10px 0px;
`;

const HeadContainer = styled.header`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
`;

const HeadTitle = styled.h2`
    ${({ theme }) => theme.fontStyle.listHeader};
    line-height: 1;
    text-transform: uppercase;
    margin: 0;
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