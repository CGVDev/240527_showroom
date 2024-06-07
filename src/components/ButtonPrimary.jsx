import styled from "styled-components";

export const ButtonPrimary = ({ label, ...props })=>{
    return(
        <ButtonPrimaryContainer { ...props }>
            <ButtonPrimaryLabel>{ label }</ButtonPrimaryLabel>
        </ButtonPrimaryContainer>
    );
};

const ButtonPrimaryContainer = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 300px;
    padding: 15px 25px;
    margin: 10px 0;
    cursor: pointer;
    transform: scale(1.0);
    transition: transform 0.25s ease-out;
    box-shadow: ${({ theme }) => theme.styles.button.boxShadow};

    &:hover{
        transform: scale(1.05);
    }
`;

const ButtonPrimaryLabel = styled.span`
    display: block;
    ${({ theme }) => theme.fontStyle.buttonLabelPrimary};
    text-transform: uppercase;
`;