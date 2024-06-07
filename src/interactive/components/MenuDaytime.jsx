import styled from "styled-components";
import { animated as a, useSpring, easings } from "@react-spring/web";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";
import { DialRadial } from "./DialRadial";
import { useDrag, useHover } from "@use-gesture/react";

export const MenuDaytime = ({ style, setUserActivity })=>{

    const { state, setState } = useContext(AppContext);
    const [ isMoving, setIsMoving ] = useState(false);
    const [ isHovering, setIsHovering ] = useState(false);
    
    const target = useRef(null);

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

    const { time } = useSpring({ 
        time: state.dayTime.minutes,
        config:{
            easing: easings.linear,
            duration: 800
        }
    });

    useEffect(()=>{
        setUserActivity(isMoving || isHovering);
    }, [isMoving, isHovering]);

    // useEffect(()=>{
    //     setTrigger(true);
    // }, []);

    return(
        <MenuDaytimeContainer style={ style } ref={ target }>
            <MenuDaytimeWrapper>
                
                
                <DialRadial 
                    ticks={ 25 } 
                    initialAngle={ -30 } 
                    finalAngle={ 210 } 
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
    );
};

const MenuDaytimeContainer = styled(a.div)`
    width: 96%;
    height: 96%;
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
    height: 100%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CounterWrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    
`;

const CounterTitle = styled.p`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-100%, -180%);
    font-size: ${ ({ theme })=>theme.utils.fluidType(12, 20) };
    font-weight: ${ ({ theme })=>theme.font.weight.medium };
`;

const DigitContainer = styled.p`
    position: relative;
    font-family: ${ ({ theme })=>theme.font.primary };
    font-size: ${ ({ theme })=>theme.utils.fluidType(24, 60) };
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
`

// const Counter = styled(a.p)`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-family: ${ ({ theme })=>theme.font.primary };
//     font-size: ${ ({ theme })=>theme.utils.fluidType(24, 72) };
//     font-weight: ${ ({ theme })=>theme.font.weight.bold };
//     margin: 0;
//     line-height: 1;
//     user-select: none;
// `;
