import styled from "styled-components";

export const LogoCGVeron = ({img, ...props})=>{
    return(
        <LogoWrapper {...props} >
            <img src={ img } alt="cgveron logo" draggable={ false }/>
        </LogoWrapper>
    );
}

const LogoWrapper = styled.div`
    display: block;
    width: 15%;
    max-width: 200px;
    position: absolute;
    top: 30px;
    right: 30px;
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