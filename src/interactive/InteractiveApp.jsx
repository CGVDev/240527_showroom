import styled from 'styled-components';
import { Container3D } from './containers/Contianer3D';
import { TagView } from './containers/TagView';
import { TagProvider } from './context/TagContext';
import { InteractiveProvider } from './context/InteractiveContext';
import { LoadingView } from '../containers/LoadingView';
import { IntSocketEmmiter } from './utils/IntSocketEmmiter';
import { ContainerUI } from './containers/ContainerUI';
import { useEffect } from 'react';

export const InteractiveApp = ()=>{

    // useEffect(()=>{
    //     if('TouchFree' in window){
    //         console.log("TouchFree");
    //         window.TouchFree.Init();
    //     }
    // });

    return(
        <MainWrapper>
            <InteractiveProvider>              
                <Container3D />
                <ContainerUI />
                <LoadingView />
            </InteractiveProvider>
            
        </MainWrapper>
    );
};

const MainWrapper = styled.div`
    width: 100dvw;
    height: 100dvh;
    max-width: 100%;
    max-height: 100%;
    margin: 0;
    padding: 0;
    position: relative;
    overflow: hidden;
`;