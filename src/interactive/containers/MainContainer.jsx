import styled from "styled-components";
import { Container3D } from "./Contianer3D";
import { ContainerUI } from "./ContainerUI";
import { useEffect } from "react";

export const MainContainer = ()=>{
    return(
        <MainWrapper>
            <Container3D />
            <ContainerUI />
        </MainWrapper>
    );
};

const MainWrapper = styled.div`
    width: 100dvw;
    height: 100dvh;
    max-width: 100%;
    max-height: 100%;
    margin: 0;
    padding: 0;
    position: relative;
    overflow: hidden;
`;