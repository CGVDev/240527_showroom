import styled from 'styled-components';
import { ControlProvider } from './context/ControlContext';
import { Container3D } from './containers/Container3D';
import { ContainerUI } from './containers/ContainerUI';
import { ConSocketEmmiter } from './utils/ConSocketEmmiter';

export const ControlApp = ()=>{

    return(
        <MainWrapper>
            <ControlProvider>
                <ConSocketEmmiter />
                <Container3D />
                <ContainerUI />
            </ControlProvider>
        </MainWrapper>
    );
};

const MainWrapper = styled.div`
    width: 100dvw;
    height: 100dvh;
    max-width: 100%;
    max-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    position: relative;
    overflow: hidden;
    background-color: ${({ theme }) => theme.color.gray_20};;
`;