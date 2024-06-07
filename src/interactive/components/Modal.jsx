import styled from "styled-components";
import { Button } from "./Button";

export const Modal = ({ title="Title", btnLabel, children })=>{
    return(
        <ModalContainer>
            <ModalWrapper>
                <AnchorPosition>
                    <span className="material-symbols-outlined">
                        drag_indicator
                    </span>
                </AnchorPosition>
                <AnchorSize />
                <ModalHeaderContainer>
                    <ModalTitle>{ title }</ModalTitle>
                </ModalHeaderContainer>
                <ModalBodyContainer>
                    { children }
                </ModalBodyContainer>
                <ModalFooterContainer>
                    <Button label={ btnLabel } />
                </ModalFooterContainer>
                
            </ModalWrapper>
        </ModalContainer>
    );
};

const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    max-width: 800px;
    padding: 14px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0 28px 28px 28px;
    background-color: #ffffff00;
    

    &:hover{
        background-color: #ffffff1a;
        box-shadow: inset 1px 1px 8px #ffffff80;
    }
`;

const ModalWrapper = styled.div`
    width: 100%;
    padding: 15px 20px;
    position: relative;
    background-color: #ffffffe6;
    border: 1px solid white;
    border-radius: 0 16px 16px 16px;
    ${ ({ theme })=>theme.utils.shadow }
`;

const AnchorPosition = styled.div`
    width: 35px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${ ({ theme })=>theme.color.green_100 };
    border-radius: 8px 0 0 8px;
    position: absolute;
    top: -1px;
    left: -32px;
    cursor: pointer;
    z-index: -1;

    span{
        width: 100%;
        font-size: ${ ({ theme })=>theme.utils.fluidType(12, 23) };
        color: ${ ({ theme })=>theme.color.white };
        line-height: 1;
        padding: 0;
        margin: 0;
    }
`;

const AnchorSize = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 0 0 26px 0;
    border-right: 14px solid ${ ({ theme })=>theme.color.green_100 };
    border-bottom: 14px solid ${ ({ theme })=>theme.color.green_100 };
    position: absolute;
    bottom: -14px;
    right: -14px;
    z-index: -1;
    cursor: pointer;
`;

const ModalHeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
`;

const ModalTitle = styled.h4`
    font-size: ${ ({ theme })=>theme.utils.fluidType(24, 28) };
    font-weight: 300;
    color: ${ ({ theme })=>theme.color.green_100 };
    margin: 0;
`;

const ModalBodyContainer = styled.div`
    width: 100%;
    padding: 20px 0;
    display: flex;
`;

const ModalFooterContainer = styled.div`
    width: 100%;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;