import styled from "styled-components";
import { animated as a, useSpring, easings } from "@react-spring/web";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";
import { DialRadial } from "./DialRadial";
import { useDrag, useHover } from "@use-gesture/react";
import { useTimer } from "../hooks/useTimer";

export const MenuDaytimeDown = ({ style })=>{

    const { state, setState } = useContext(AppContext);
    const [ isMoving, setIsMoving ] = useState(true);
    const [ isHovering, setIsHovering ] = useState(true);

    const target = useRef(null);

    const { setIsActive } = useTimer({ 
        callback: ()=>{ setState(state.hideDaytimeDown()) },
        time: 3000,
        initial: true
    });

    const { time } = useSpring({ 
        time: state.dayTime.minutes,
        config:{
            easing: easings.linear,
            duration: 800
        }
    });

    const isActive = (state)=>{
        setIsMoving(state)
    }

    useHover(
        ({ hovering })=>{
            setIsHovering(hovering);
        }, 
        {
            target
        }
    );

    useEffect(()=>{
        setIsActive(isMoving || isHovering)
    }, [isMoving, isHovering]);

    return(
        <MenuContainer>
            <MenuWrapper>
                <MenuDaytimeContainer ref={ target } style={ style }>
                    <MenuDaytimeWrapper>
                        
                        {/* <TimeCounterContainer>
                            <CounterWrapper>
                                <Counter>
                                { time.to(t =>{
                                    let _hour = Math.floor(t/60);
                                    let hour = _hour < 10 ? "0"+_hour : _hour;
                                    let _minutes = (t%60).toFixed(0);
                                    let minutes = _minutes < 10 ? "0"+_minutes : _minutes;
                                    return `${hour}:${minutes}`}
                                )}

                                </Counter>
                            </CounterWrapper>

                        </TimeCounterContainer> */}
                       
                        <DialRadial 
                            ticks={ 25 } 
                            rotation={ 10 } 
                            initialAngle={ 10 } 
                            finalAngle={ 170 } 
                            value={state.slider}
                            callback={ (e)=>setState(prev=>prev.updateTime(e)) }
                            setUserActivity={ isActive }
                            iconStart={ <span className="material-symbols-outlined">partly_cloudy_day</span> }
                            iconEnd={ <span className="material-symbols-outlined">nights_stay</span> }
                        />
                         <TimeCounterContainer>
                            <CounterContainer>
                                <CounterWrapper>
                                    <CounterTitle>Daytime</CounterTitle>
                                    <DigitContainer>
                                        <Counter $positionX={ 'right: 100%' }>
                                            { time.to(t =>{
                                                let _hour = Math.floor(t/60);
                                                let hour = _hour < 10 ? "0"+_hour : _hour;
                                                return `${hour}`
                                            })}
                                        </Counter>
                                        <span>:</span>
                                        <Counter $positionX={ 'left: 100%' }>
                                            { time.to(t =>{
                                                let _minutes = (t%60).toFixed(0);
                                                let minutes = _minutes < 10 ? "0"+_minutes : _minutes;
                                                return `${minutes}`
                                            })}
                                        </Counter>
                                    </DigitContainer>
                                </CounterWrapper>
                            </CounterContainer>

                        </TimeCounterContainer>
                    </MenuDaytimeWrapper>
                </MenuDaytimeContainer>
            </MenuWrapper>
        </MenuContainer>
    );
};

const MenuContainer = styled(a.section)`
    width: 80%;
    max-width: 600px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform-origin: 50% 50%;
    transform: translate(-50%, 45%);
    
    /* background-color: #fff3;
    box-shadow: inset 1px 1px 4px #fff;
    border-radius: 50%; */
`;

const MenuWrapper = styled.div`
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    position: relative;
    border-radius: 50%;
    background-color: #fff3;
    box-shadow: 1px 1px 16px #4f4f4fa0, inset 1px 1px 4px #fff;
    background-image: url("./img/bg-texture.png");
    background-size: 10px;
`;

const MenuDaytimeContainer = styled(a.div)`
    width: 96%;
    height: 96%;
    padding: 10px;
    ${ ({ theme })=>theme.utils.centerAbs }
`;

const MenuDaytimeWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const TimeCounterContainer = styled.div`
    width: 70%;
    height: 70%;
    /* border: 1px solid ${ ({ theme })=>theme.color.carbon_dull }; */
    border-radius: 50%;
    ${ ({ theme })=>theme.utils.centerAbs }
    /* ${ ({ theme })=>theme.styles.shadowMedium } */
    display: flex;
    justify-content: center;
    background-color: #fff3;
    box-shadow: inset 1px 1px 4px #fff;
`;

const CounterContainer = styled.section`
    width: 100%;
    height: 82%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CounterWrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    
`;

const CounterTitle = styled.p`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-100%, -180%);
    font-size: ${ ({ theme })=>theme.utils.fluidType(12, 18) };
    font-weight: ${ ({ theme })=>theme.font.weight.medium };
`;

const DigitContainer = styled.p`
    position: relative;
    font-family: ${ ({ theme })=>theme.font.primary };
    font-size: ${ ({ theme })=>theme.utils.fluidType(18, 40) };
    font-weight: ${ ({ theme })=>theme.font.weight.bold };
    line-height: 1;
    margin: 0;
`;


const Counter = styled(a.span)`
    display: block;
    position: absolute;
    top: 50%;
    ${ props=>props.$positionX };
    transform: translate(0, -50%);
`;