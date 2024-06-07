import styled from "styled-components";

export const LogoContainer = ({img, href})=>{
    return(
        <LogoWrapper href={ href }>
            <img src={ img } alt="xenter logo" draggable={ false }/>
        </LogoWrapper>
    );
}

const LogoWrapper = styled.a`
    display: block;
    width: 20%;
    max-width: 300px;
    position: absolute;
    top: 30px;
    left: 30px;
    user-select: none;
    text-decoration: none;

    @media (orientation: portrait){
        width: 13%;
        max-width: 120px;
    }


    img{
        width: 100%;
        user-select: none;
    }

`;