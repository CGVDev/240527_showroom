import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";

export const ListContainer = ({ children, $justify="flex-start", $align="flex-start", $direction="column", $wrap="wrap"})=>{

    const { state } = useContext(AppContext);
    const container = useRef(null);

    useEffect(()=>{
            container.current.scroll({
                top: container.current.clientHeight, 
                left: 0,
                behavior: "smooth"
            });
    }, [state.favorites]);

    return(
        <CutterContainer>
            <ListSection ref={ container } >
                <ListWrapper $justify={ $justify } $align={ $align } $direction={ $direction } $wrap={ $wrap } >
                    { children }
                </ListWrapper>
            </ListSection>
        </CutterContainer>
    );
};

export const ListHeader = styled.div`
    width: 100%;
    padding: 20%;
    overflow: hidden;
`;

const CutterContainer = styled.div`
    width: 100%;
    height: 100%;
    flex-grow: 1;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    overflow: hidden;
`;

const ListSection = styled.section`
    width: calc(100% + 25px);
    height: 100%;
    max-width: calc(100% + 20px);
    position: relative;
    overflow-y: scroll;
    scroll-behavior: smooth;
`;

const ListWrapper = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: ${ props=>props.$wrap };
    flex-direction: ${ props=>props.$direction };
    justify-content: ${ props=>props.$justify };
    align-items: ${ props=>props.$align };
    list-style: none;
    padding: 10px 25px 10px 20px;
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
`;