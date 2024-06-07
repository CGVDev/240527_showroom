import styled from "styled-components";

export const ButtonDetailNav = ({ item, ...props })=>{
    return(
        <ButtonContainer className={item.selected ? "selected" : ""} {...props} >
            <ButtonLabel>{ item.label }</ButtonLabel>
        </ButtonContainer>
    );
};

const ButtonContainer = styled.li`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.color.green_100};
    border-radius: 10px;
    color: ${({ theme }) => theme.color.green_100};
    padding: 10px 20px;
    margin: 0 5px;
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