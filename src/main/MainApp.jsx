import styled from "styled-components";
import { ButtonPrimary } from "../components/ButtonPrimary";
import { Selector } from "../utils/Selector";

export const MainApp = ({ action })=>{

    const fullScreen = ()=>{
        document.body.requestFullscreen();
    }

    return(
        <MainWrapper>
            <ModalContainer>
                <LogoContainer>
                    <ImgContainer src="./img/immersive_logo.png"/>
                </LogoContainer>
                <OptionContainer>
                    <ButtonPrimary label={"Panorama"} onClick={()=>{ 
                        fullScreen();
                        action(Selector.INTERACTIVE) 
                    }}  />
                    <ButtonPrimary label={"Control"} onClick={ ()=>{ 
                        fullScreen();
                        action(Selector.CONTROL) 
                    } } />
                </OptionContainer>
            </ModalContainer>
        </MainWrapper>
    );
};

const MainWrapper = styled.div`
    width: 100dvw;
    height: 100dvh;
    max-width: 100%;
    max-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: ${({ theme }) => theme.color.gray_20};
`;

const ModalContainer = styled.section`
    width: 90%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    border: 1px solid ${({ theme }) => theme.color.green_100};
    border-radius: 12px;
    ${({ theme }) => theme.styles.shadow.green_light};
`;

const LogoContainer = styled.section`
    width: 80%;
    padding: 20px 0;
`;

const ImgContainer = styled.img`
    width: 100%;
    object-fit: cover;
`;

const OptionContainer = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 20px 0;
    list-style: none;
`;