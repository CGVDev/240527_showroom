import { useSpring, animated as a } from "@react-spring/web";
import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";
import styled from "styled-components";
// import { socket } from "../utils/Socket";

export const LoadingView = ()=>{

    // const [isConnected, setIsConnected] = useState(socket.connected);
    const [ visible, setVisible ] = useState(true);
    const { progress } = useProgress();
    const { opacity } = useSpring({
        opacity: progress === 100 ? 0 : 1,
        config:{
            duration: 450
        }
    });



    useEffect(()=>{
        if(progress === 100){
            setTimeout(()=>{
                setVisible(false);
            }, 1000);
            // if(!isConnected){
            //     console.log("if");
            //     socket.on('connect', ()=>{
            //         setIsConnected(true)
            //         console.log("connected....");
            //     })
            // }
        }
        return ()=>{
            setVisible(true);
        }
    }, [progress]);

    return(
        <>
            {
                visible
                    ? (
                    <LoadingBackground style={{ opacity }}>
                        <LoadingContainer>
                            <LoadingWrapper>
                                <LoaderContainer>
                                    <LoaderWrapper>
                                        <Loader />
                                        <ProgressLabel>{ progress.toFixed(0) }<span>%</span></ProgressLabel>
                                    </LoaderWrapper>
                                </LoaderContainer>
                            </LoadingWrapper>
                        </LoadingContainer>

                    </LoadingBackground>
                    )
                    : null
            }
        </>
    );
};

const LoadingBackground = styled(a.aside)`
    width: 100dvw;
    height: 100dvh;
    background-color: ${({ theme }) => theme.color.gray_20};
    position: fixed;
    top: 0;
    left: 0;
`;

const LoadingContainer = styled.div`
    width: 50%;
    max-width: 250px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const LoadingWrapper = styled.div`
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    position: relative;
`;

const LoaderContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
`;

const LoaderWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border: 1px solid ${({ theme }) => theme.color.white};
    border-radius: 50%;

`;

const Loader = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.0);
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.green_100};
    animation: load 1s ease-in infinite;
    z-index: -1;

    &::before{
        display: block;
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1.0);
        border-radius: 50%;
        background-color: ${({ theme }) => theme.color.green_100};
        animation: load 1s ease-in infinite;
        animation-delay: 0.5s;

    }

    @keyframes load {
        0%{
            transform: translate(-50%, -50%) scale(0.2);
            opacity: 0;
        }
        
        80%{
            transform: translate(-50%, -50%) scale(1.0);
            opacity: 0.6;
        }
        
        100%{
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0;
        }
        
    }
`;

const ProgressLabel = styled.h3`
    font-family: ${({ theme }) => theme.font.primary};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    font-size: ${({ theme }) => theme.utils.fluidType(24, 34)};
    color: ${({ theme }) => theme.color.white};
    margin: 0;
    padding: 0;
    line-height: 1;
    
    span{
        font-size: ${({ theme }) => theme.utils.fluidType(16, 21)};
        font-weight: ${({ theme }) => theme.font.weight.light};
    }
`;