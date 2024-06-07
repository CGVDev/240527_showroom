import styled from "styled-components";

export const ButtonQuad = ({ item, children, ...props })=>{
    return(
        <ButtonContainer {...props} >
            <ButtonWrapper className={ item.selected ? "selected" : "" } >
                { children }
            </ButtonWrapper>
        </ButtonContainer>
    );
}

const ButtonContainer = styled.span`
    display: block;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    position: relative;
`

const ButtonWrapper = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid ${({ theme }) => theme.color.green_100};
    border-radius: 12px;

    &.selected{
        background-color: ${({ theme }) => theme.color.green_100};

        span{
            color: ${({ theme }) => theme.color.white};;
        }
    }
`;

export const ButtonQuadContainer = styled.li`
    width: 14%;
    padding: 5px;
    cursor: pointer;
`;

export const ButtonQuadLabel = styled.span`
    display: block;
    ${({ theme }) => theme.fontStyle.buttonLabel };
    user-select: none;
`;