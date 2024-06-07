import styled from "styled-components";

export const ButtonRound = ({ children, ...props })=>{
    return(
        <ButtonRoundContainer { ...props }>
            <ButtonRoundWrapper>
                <ButtonView>
                    { children }
                </ButtonView>
            </ButtonRoundWrapper>
        </ButtonRoundContainer>

    );
}

const ButtonRoundContainer = styled.div`
    width: 100%;
    max-width: 90px;
    position: relative;
    padding: 5px 3px;

    &:first-child{
        padding-top: 0;
    }

    &:last-child{
        padding-bottom: 0;
    }
`;

const ButtonRoundWrapper = styled.div`
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    position: relative;
`;

const ButtonView = styled.div`
    width: 100%;
    height: 100%;
    background-color: #4ac0b074;
    display: flex;
    justify-content: center;
    align-items: center;
    border:  1px solid ${({ theme }) => theme.color.green_100};
    border-radius: 50%;
    transition: background-color 0.25s ease-out;
    ${ ({ theme })=>theme.utils.centerAbs }
    ${ ({ theme })=>theme.styles.shadow.medium }

    &:hover{
        background-color: #4ac0b000;

        span{
            color: ${({ theme }) => theme.color.green_100};
        }
    }

    span{
        color: ${({ theme }) => theme.color.white};
        font-size: ${({ theme }) => theme.utils.fluidType(20, 30)};
        transition: color 0.25s ease-out;
    }
`;