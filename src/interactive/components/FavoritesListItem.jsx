import styled from "styled-components";
import { animated as a } from "@react-spring/web";
import { Button } from "./Button";


export const FavoritesListItem = ({ item, style, closeAction, btnAction, imageRoute })=>{
    let { type, floor, area, avaliability, rooms, uuid, vtUrl } = item;

    return(
        <FavoritesItemContainer key={uuid} style={ style }>
            <FavoritesItemWrapper>
                <FavoriteContent>
                    <FavoriteContentContainer>
                        <FavoriteRow $justify="space-between" $align="flex-start">
                            <WindowTitleBar>
                                <span className="material-symbols-outlined icon">
                                    texture
                                </span>
                                <FavoriteTitle>{type}/{floor}</FavoriteTitle>
                            </WindowTitleBar>
                            <WindowActionBar>
                                    <WindowActionItem onClick={ ()=>{ closeAction( uuid ) } }>
                                        <WindowActionWrapper>
                                            <span className="material-symbols-outlined">
                                                close
                                            </span>
                                        </WindowActionWrapper>
                                    </WindowActionItem>
                            </WindowActionBar>
                        </FavoriteRow>
                        <FavoriteCol $justify="flex-start" >
                            
                            <FavoriteRow $justify="flex-starts">
                                <FavoriteAvaliability>{ avaliability ? 'Disponible' : 'Vendido' }</FavoriteAvaliability>
                            </FavoriteRow>
                            <FavoriteRow>
                                <FavoriteIcon className="material-symbols-outlined icon">auto_awesome_mosaic</FavoriteIcon>
                                <FavoriteArea>
                                    { area } <span className="sqr">&nbsp;m<sup>2</sup></span>
                                </FavoriteArea>
                            </FavoriteRow>
                            <FavoriteRow>
                                <FavoriteListContainer>
                                    {
                                        rooms.map((feature, i )=>{
                                            return <FavoriteListItem key={ i } >{feature.amount} { feature.name }</FavoriteListItem>
                                        })
                                    }
                                </FavoriteListContainer>
                            </FavoriteRow>
                            

                        </FavoriteCol>
                        <FavoriteCol>
                            <FavoriteRow>
                                <FavoriteImageContainer>
                                    <FavoriteImage src={ imageRoute }/>
                                </FavoriteImageContainer>
                            </FavoriteRow>
                            <FavoriteRow $justify={ "flex-end" }>
                                <Button label="Virtual Tour" action={ ()=>{ btnAction({url: type, label: uuid}) } } />
                            </FavoriteRow>
                        </FavoriteCol>
                    </FavoriteContentContainer>

                </FavoriteContent>
            </FavoritesItemWrapper>
        </FavoritesItemContainer>
    );
};

const FavoritesItemContainer = styled(a.div)`
    width: 100%;
    flex-grow: 1;
`;

const FavoritesItemWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 5px 0;

    &::before{
        display: block;
        content: "";
        width: 100%;
        height: 100%;
        background-image: url("./img/bg-texture.png");
        background-size: 11px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
`;

const FavoriteContent = styled.div`
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    flex-grow: 1;
    border: 1px solid #fff0;
    border-radius: 16px;
    background: linear-gradient(45deg, rgba(74, 192, 176, 0.5) 0%, rgba(100%, 100%, 100%, 0.1) 60%);
    padding: 10px;
    overflow: hidden;
    ${ ({ theme })=>theme.styles.shadow.medium };
    flex-grow: 1;
`;

const FavoriteContentContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    border-radius: 8px;
    background-color: ${ ({ theme })=>theme.color.white };
    ${ ({ theme })=>theme.styles.shadow.medium };
    overflow: hidden;
    
`;

const FavoriteCol = styled.div`
    width: 50%;
    min-width: 180px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: ${ props=>(props.$justify || "space-between")};
    align-items: flex-start;
`;

const FavoriteRow = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: ${ props=>(props.$justify  || 'flex-start') };
    align-items: ${ props=>(props.$align  || 'center') };

    &:first-child{
        padding: 0 0 10px 0;
    }
    
    &:last-child{
        padding: 10px 0 0 0;
    }
`;

const FavoriteTitle = styled.h2`
    ${ ({ theme })=>theme.fontStyle.h1 }
    color: ${ ({ theme })=>theme.color.white };
    font-size: ${ ({ theme })=>theme.utils.fluidType(24,30) };
    font-weight: ${ ({ theme })=>theme.font.weight.black };
    user-select: none;

`;

const FavoriteAvaliability = styled.h3`
    ${ ({ theme })=>theme.fontStyle.list };
    color: ${ ({ theme })=>theme.color.white };
    background-color: ${ ({ theme })=>theme.color.green_100 };
    padding: 5px 20px;
    border-radius: 100px;
    user-select: none;
`;

const FavoriteIcon = styled.span`
    margin: 0;
    font-size: ${ ({ theme })=>theme.utils.fluidType(22, 28) };
    color: ${ ({ theme })=>theme.color.carbon_dark };
    line-height: 1;
    padding: 0 5px 0 0;
    user-select: none;
`;

const FavoriteArea = styled.h3`
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    ${ ({ theme })=>theme.fontStyle.h2 }
    font-size: ${ ({ theme })=>theme.utils.fluidType(18, 24) };
    color: ${ ({ theme })=>theme.color.gray_100 };
    user-select: none;

    .sqr{
        display: inline-block;
        font-size: ${ ({ theme })=>theme.utils.fluidType(12,18) };
        font-weight: ${ ({ theme })=>theme.font.weight.medium };
        user-select: none;
    }
`;

const FavoriteListContainer = styled.ul`
    width: 100%;

`;

const FavoriteListItem = styled.li`
    width: 100%;
`;

const WindowTitleBar = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 10px 5px 0;
    background-color: ${ ({ theme })=>theme.color.green_100 };

    span.icon{
        font-size: 40px;
        color: ${ ({ theme })=>theme.color.white };
        padding: 0 10px 0 0;
        user-select: none;
    }
`;

const WindowActionBar = styled.ul`
    margin: 0;
    padding: 5px;
    list-style: none;

`;

const WindowActionItem = styled.li`
    width: 30px;
    height: 30px;
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: transform 0.35s ease-out;
    transform: scale(1.0);
    user-select: none;

    &:hover{
        transform: scale(1.2);
    }
`;

const WindowActionWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    span{
        width: 100%;
        font-size: 30px;
        color: ${ ({ theme })=>theme.color.carbon_100 };
    }
`;

const FavoriteImageContainer = styled.div`
    width: 100%;
    height: 0;
    padding-bottom: 60%;
    position: relative;
`;

const FavoriteImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
`;