import { useContext } from "react";
import { ControlContext } from "../context/ControlContext";
import styled from "styled-components";
import { Apartment } from "../../utils/Apartment";
import { ApartmentFactory } from "../../utils/ApartmentFactory";
import { ButtonView } from "../../components/ButtonView";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { TablePrices } from "../components/TablePrices";
import { PriceCounter } from "../components/PriceCounter";
import { SocketContext } from "../../hooks/useSocket";
import { SocketActions } from "../../utils/SocketActions";

export const Stage_4 = ()=>{

    const { state, setState } = useContext(ControlContext);
    const { socket } = useContext(SocketContext);

    const changeStage = (type)=>{
        setState(state.initStage5(type));
        socket.emit(SocketActions.SET_VIEW, {
            type: SocketActions.ACTIONS[SocketActions.SET_VIEW].INIT_EXIT,
            payload: {
                type: SocketActions.ACTIONS[SocketActions.SET_VIEW].INIT_EXIT,
                payload: type
            }
        })
    }

    return(
        <>
            <MainContainer>
                {
                    state.favorites.map((fav, i)=>{

                        let { Precio, Planes } = ApartmentFactory.PRICE[ApartmentFactory.GROUP[fav.type]];
                        
                        return(
                            <ColumnInfo>
                                <ColumnContianer>
                                    <ColumnHead>
                                        <Title>{ApartmentFactory.GROUP[fav.type]}<span>{fav.uuid}</span></Title>
                                    </ColumnHead>
                                    <ColumnBody>
                                        <TablePrices content={ Planes } />
                                    </ColumnBody>
                                    <ColumnPrice>
                                        <PriceCounter price={ Precio.Amount } />
                                    </ColumnPrice>
                                    <ColumnFoot>
                                        <ButtonContainer onClick={ ()=>{ changeStage(fav.type) } }>
                                            <ButtonLabel>Comprar</ButtonLabel>
                                        </ButtonContainer>
                                    </ColumnFoot>
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
    height: calc(100dvh - 250px);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    position: absolute;
    bottom: 100px;
`;

const ColumnInfo = styled.div`
    width: 33%;
    max-width: 500px;
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
    border: 3px solid ${({ theme }) => theme.color.gray_40};
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
    flex-grow: 1;
`;

const ColumnPrice = styled.div`
    width: 100%;
    padding: 20px 0;
`;

const ColumnFoot = styled.div`
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.color.green_100};
    padding: 5% 0 0;
    display: flex;
    justify-content: center;
    align-items: center;

`;

const ButtonContainer = styled.li`
    width: 100%;
    max-width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color.green_100};
    border: 1px solid ${({ theme }) => theme.color.green_100};
    border-radius: 300px;
    color: ${({ theme }) => theme.color.green_100};
    padding: 20px 20px;
    margin: 5px;
    white-space: nowrap;
    cursor: pointer;
`;

const ButtonLabel = styled.span`
    ${({ theme }) => theme.fontStyle.buttonLabel};
    color: ${({ theme }) => theme.color.white};;
    user-select: none;
    text-align: center;
    user-select: none;
`;

