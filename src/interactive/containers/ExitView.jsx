import styled from "styled-components";

export const ExitView = ()=>{
    console.log("exit...");
    return(
        <ImageContainer>
            <ImageStyled src="./img/bg_exit.png"/>
        </ImageContainer>
    );
}

const ImageContainer = styled.section`
    width: 100dvw;
    height: 100dvh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const ImageStyled = styled.img`
    width: 100%;
    height: 100%;
    object-fit: fill;
`