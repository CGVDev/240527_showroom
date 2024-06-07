import styled from "styled-components";

export const Button = ({ label="Button", action=()=>{} })=>{
    return(
        <ButtonWrapper>
            <ButtonContainer onClick={ action } >
                { label }
            </ButtonContainer>
        </ButtonWrapper>
    );
};

const ButtonWrapper = styled.div`
    max-width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;

    &:first-child{
        padding: 0 10px 0 0;
    }
    
    &:last-child{
        padding: 0 0 0 10px;
    }
`;

const ButtonContainer = styled.a`
    display: block;
    background-color: #4AC0B100;
    border: 1px solid ${ ({ theme })=>theme.color.green_100 };
    border-radius: 16px;
    padding: 8px 18px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    user-select: none;
    transition: background-color 0.35s ease-out, color 0.35s ease-out;
    ${ ({ theme })=>theme.fontStyle.button() }

    &:hover{
        background-color: ${ ({ theme })=>theme.color.green_100 };
        color: ${ ({ theme })=>theme.color.white }
    }
`;