import styled from "styled-components";
import { ButtonView } from "../../components/ButtonView";
import { useContext } from "react";
import { ControlContext } from "../context/ControlContext";
import { animated as a, useSpring, useTransition } from "@react-spring/web";
import { ApartmentFactory } from "../../utils/ApartmentFactory";

export const ApartmentDetailView = ()=>{

    const { state, setState } = useContext(ControlContext);

    const spring = useSpring({
        opacity: state.selected.length ? 1 : 0,
        scale: state.selected.length ? 1 : 0,
    })

    const deptTransition = useTransition(
        state.selected,
        {
            from: {
                opacity: 0,
                translateX: "200%"
            },
            enter: {
                opacity: 1,
                translateX: "0%"
            },
            leave: {
                opacity: 0,
                translateX: "200%"
            },
        }
    );

    const addToFavorites = ()=>{
        setState(state.addToFavorites());
    }

    const toggleVR = ()=>{
        setState(state.toggleVR());
    }

    const toggleTour = ()=>{
        setState(state.toggleTour());
    }

    return(
        <ApartmentDetailContainer>
            <HeaderContainer>
                <HeaderTitle>
                    Detalle
                </HeaderTitle>
            </HeaderContainer>
            
            <BodyContainer >
                {
                    deptTransition((style, dept)=>{
                        return(
                            <BodyWrapper style={ style }>

                                <SubheaderContainer>
                                    <SubheaderTitle>
                                        <ApartmentGroup>
                                            { ApartmentFactory.GROUP[state.selected[0].type] }
                                        </ApartmentGroup>
                                        <ApartmentIdentifier>
                                            { dept.uuid }

                                        </ApartmentIdentifier>
                                    </SubheaderTitle>
                                    <AreaTitle>
                                        { dept.area } 
                                        m<sup>2</sup>
                                    </AreaTitle>

                                </SubheaderContainer>
                                <PlaneContainer>
                                    <ImageContainer>
                                        <ImgStyled src={`./img/${ApartmentFactory.TOUR[dept.type]}.png`} draggable={false} />
                                    </ImageContainer>
                                </PlaneContainer>
                                
                                <InfoContainer>
                                    {
                                        dept.rooms.map((item)=>{
                                            return <InfoItem>{`${item.quantity} ${item.name}`}</InfoItem>
                                        })
                                    }
                                </InfoContainer>
                            </BodyWrapper>
                        )
                    })
                }
            </BodyContainer>
        </ApartmentDetailContainer>
    );
}

const ApartmentDetailContainer = styled(a.section)`
    width: 30%;
    max-width: 500px;
    height: calc(100dvh - 300px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30%;
    max-width: 500px;
    position: absolute;
    bottom: 200px;
    right: 20px;
    padding: 20px;
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 10px 10px 30px 10px;
`;

const HeaderTitle = styled.h2`
    ${({ theme }) => theme.fontStyle.listHeader};
    text-transform: uppercase;
    user-select: none;
`;

const SubheaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 10px;
`;

const SubheaderTitle = styled.h3`
    display: block;
    ${({ theme }) => theme.fontStyle.listSubheader};
    text-transform: uppercase;
    user-select: none;
    position: relative;
    padding: 0 20px 5px 0;
    border-bottom: 1px solid ${({ theme }) => theme.color.green_100};;
`;


const ApartmentGroup = styled.span`
`;

const ApartmentIdentifier = styled.span`
    display: block;
    position: absolute;
    bottom: -10px;
    right: 0;
    transform: translate(0, 100%);
    font-size: 20px;
`;

const AreaTitle = styled.span`
    display: inline-block;
    ${({ theme }) => theme.fontStyle.listArea};

    sup{
        font-weight: ${({ theme }) => theme.font.weight.regular};
        font-size: 0.6em;
    }
`;

const BodyContainer = styled.div`
    width: 100%;
    flex-grow: 1;
    position: relative;
    `;

const BodyWrapper = styled(a.div)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    position: absolute;
    top: 0;
    right: 0;
`;

const PlaneContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 24px 24px 24px 0;
    position: relative;
    flex-grow: 1;
    `;

const ImageContainer = styled.div`
    width: 0;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
`;

const ImgStyled = styled.img`
    height: 90%;
    object-fit: cover;
`;


const InfoContainer = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: flex-start;
    margin: 0;
    padding: 0px 10px 30px 30px;
    list-style: none;
`;

const InfoItem = styled.li`
    width: 50%;
    max-width: 190px;
    padding: 0;
    margin: 0;
    ${({ theme }) => theme.fontStyle.listSectionInfo};
    user-select: none;
    white-space: nowrap;
`;

const FooterContainer = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 20px 10px;
`;
