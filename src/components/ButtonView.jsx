import styled from "styled-components";

export const ButtonView = ({ item, ...props })=>{
    return(
        <ButtonContainer className={item.selected ? "selected" : ""} {...props} >
            <ButtonLabel>{ item.label }</ButtonLabel>
        </ButtonContainer>
    );
};

const ButtonContainer = styled.li`
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.color.green_100};
    border-radius: 300px;
    color: ${({ theme }) => theme.color.green_100};
    padding: 10px 20px;
    margin: 5px;
    white-space: nowrap;
    cursor: pointer;

    &.selected{
        background-color: ${({ theme }) => theme.color.green_100};

        span{
            color: ${({ theme }) => theme.color.white};
        }
    }
`;

const ButtonLabel = styled.span`
    ${({ theme }) => theme.fontStyle.buttonLabel};
    user-select: none;
    text-align: center;
`;