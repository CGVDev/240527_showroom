import styled from "styled-components";

export const MenuButton = ({ children, $width, $maxWidth, $action=()=>{}, $tag, $fontSize="110%" })=>{
    return(
        <ItemWrapper $width={ $width } $maxWidth={ $maxWidth } >
            <ItemButton onClick={ $action } $tag={ $tag } $fontSize={$fontSize}>
                { children }
                { $tag ? <span className="tag">{ $tag }</span> : null }
            </ItemButton>
        </ItemWrapper>
    );
}

export const MenuWrapper = styled.ul`
    width: ${ (props)=>props.$sizeW };
    display: flex;
    justify-content: ${ (props)=>props.$justify || "center" };
    align-items: flex-start;
    margin: 0;
    padding: 0;
    list-style: none;
`;

const ItemWrapper = styled.li`
    width: ${ (props)=>props.$width };
    max-width: ${ (props)=>props.$maxWidth || '60px' };
    margin-top: 0;
    margin-right: 10px;
    margin-bottom: 24px;
    margin-left: 10px;

    &:first-child{
        margin-left: 0;

    }
    
    &:last-child{
        margin-right: 0;
    }
`;

const ItemButton = styled.a`
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    ${ ({ theme })=>theme.styles.button }
    position: relative;
    cursor: pointer;

    &:hover::before{
        background-color: #fffc;
    }

    &::before{
        display: block;
        content: "";
        width: calc(100% - 8px);
        height: calc(100% - 8px);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #ffffff1a;
        border-radius: 12px;
        transition: background-color 0.35s ease-out;
    }

    span{
        ${ ({ theme })=>theme.utils.centerAbs }
        color: ${ ({ theme })=>theme.color.green_100 };
        font-size: ${ ({ theme })=>theme.utils.fluidType(32, 34) };
        user-select: none;
    }

    span.tag{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 16px;
        position: absolute;
        top: calc(100% + 6px);
        left: 50%;
        transform: translate(-50%, 0);
        color: ${ ({ theme })=>theme.color.white };
        font-size: ${ (props)=>props.$fontSize };
        font-weight: 400;
        margin: 0;
        line-height: 1;
        text-shadow: 1px 1px 4px #26323899;
        user-select: none;
    }
`;