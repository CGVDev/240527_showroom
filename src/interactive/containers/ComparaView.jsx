import { useContext } from "react";
import styled from "styled-components";
import { ApartmentFactory } from "../../utils/ApartmentFactory";
import { InteractiveContext } from "../context/InteractiveContext";
import { Group } from "../../utils/Group";

export const ComparaView = ()=>{

    const { state } = useContext(InteractiveContext);



    return(
        <>
            <MainContainer>
                {
                    state.favorites.map((fav, i)=>{
                        
                        return(
                            <ColumnInfo key={ i }>
                                <ColumnContianer>
                                    <ColumnHead>
                                        <Title>{ApartmentFactory.GROUP[fav.type]}<span>{fav.uuid}</span></Title>
                                    </ColumnHead>
                                    <ColumnBody>
                                        <StyledImg src={`./img/${ApartmentFactory.TOUR[fav.type]}.png`} />
                                        
                                    </ColumnBody>
                                    <ColumnPrice>
                                        <AreaContent>{ fav.area } m<sup>2</sup></AreaContent>
                                    </ColumnPrice>
                                    <ColumnFoot>
                                        <FeatureList>
                                            
                                                {
                                                    fav.rooms.map(({ quantity, name})=>{
                                                        return(
                                                            <FeatureItem>{quantity} {name}</FeatureItem>
                                                        )
                                                    })
                                                }
                                        </FeatureList>
                                    </ColumnFoot>
                                    <ColumnPrice>
                                        <SpeachContent>
                                            {Group.SPEACH[ApartmentFactory.GROUP[fav.type]]}
                                        </SpeachContent>
                                    </ColumnPrice>
                                </ColumnContianer>
                            </ColumnInfo>
                        );
                    })
                }
            </MainContainer>
        </>
    );
};

const MainContainer = styled.section`
    width: 100%;
    height: calc(100dvh - 300px);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    position: absolute;
    bottom: 100px;
`;

const ColumnInfo = styled.div`
    width: 33%;
    max-width: 600px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
`;

const ColumnContianer = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    border: 3px solid ${({ theme }) => theme.color.green_100};
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.color.white};
    ${({ theme }) => theme.styles.shadow.green_light};
`

const ColumnHead = styled.div`
    width: 100%;
    padding: 6% 0 14%;
    `;

const Title = styled.h3`
    text-align: center;
    ${({ theme }) => theme.fontStyle.listHeader};
    padding-right: 40px;
    position: relative;
    user-select: none;

    &:before{
        width: 50%;
        display: block;
        content: "";
        border-bottom: 1px solid ${({ theme }) => theme.color.green_100};
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translate(-50%, 0);
    }

    span{
        display: block;
        position: absolute;
        bottom: -15px;
        right: 50%;
        transform: translate(150%, 100%);
        font-size: 0.65em;
    }
`;

const ColumnBody = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`;

const ColumnPrice = styled.div`
    width: 100%;
    padding: 20px;
`;

const ColumnFoot = styled.div`
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.color.green_100};
    padding: 5% 0 5%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledImg = styled.img`
    width: 50%;
    object-fit: contain;
`

const FeatureList = styled.ul`
    width: 75%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0;
    padding: 0;
    list-style: none;
`;

const FeatureItem = styled.li`
    width: 50%;
    text-align: left;
    padding: 0;
    margin: 0;
    ${({ theme }) => theme.fontStyle.listSectionInfo};
    user-select: none;
    `;

const SpeachContent = styled.p`
    ${({ theme }) => theme.fontStyle.listSpeach};
    line-height: 1.2;
    color: ${({ theme }) => theme.color.green_100};;
    user-select: none;
    text-align: center;

`

const AreaContent = styled.h3`
    ${({ theme }) => theme.fontStyle.listArea};
    text-align: right;
    user-select: none;
`;

