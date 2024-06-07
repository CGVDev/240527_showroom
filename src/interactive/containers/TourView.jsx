import styled from "styled-components";

export const TourView = ({ url })=>{
    console.log(url);
    return(
        <TourContainer>
            <IContainer src={ url } />
        </TourContainer>

    );
};

const TourContainer = styled.section`
    width: 100dvw;
    height: 100dvh;
    position: absolute;
    top: 0;
    left: 0;
`;

const IContainer = styled.iframe`
    width: 100%;
    height: 100%;
    border: none;
`;