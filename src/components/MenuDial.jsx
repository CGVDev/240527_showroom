import styled from "styled-components";
import { animated as a, useSpring, easings } from "@react-spring/web";
import { useContext, useEffect, useRef, useState } from "react";
import { useHover } from "@use-gesture/react";
import { ControlContext } from "../control/context/ControlContext";
import { MenuDialRadial } from "./MenuDialRadial";
import { ProjectOptions } from "../control/utils/ProjectOptions";

export const MenuDial = ({ style, tickitems, setUserActivity, callback })=>{

    const { state, setState } = useContext(ControlContext);
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
        time: 260,
        // time: state.dayTime.minutes,
        config:{
            easing: easings.linear,
            duration: 800
        }
    });

    const setRadialProject = (type)=>{
        console.log("DIAL", type)
        callback(type);
    }

    useEffect(()=>{
        setUserActivity(isMoving || isHovering);
    }, [isMoving, isHovering]);

    // useEffect(()=>{
    //     setTrigger(true);
    // }, []);

    return(
        <MenuDaytimeContainer style={ style } ref={ target }>
            <MenuDaytimeWrapper>
                
                
                <MenuDialRadial 
                    initialAngle={ 60 } 
                    finalAngle={ 120 } 
                    value={state.slider}
                    callback={ setRadialProject }
                    tickitems={ tickitems }
                    setUserActivity={ isActive }
                    iconStart={ <span className="material-symbols-outlined"></span> }
                    iconEnd={ <span className="material-symbols-outlined"></span> }
                />
                <TimeCounterContainer>

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

    &:before, &:after{
        display: block;
        content: "";
        border: 1px solid ${({ theme }) => theme.color.gray_40};
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &:before{
        width: 140%;
        height: 140%;
    }
    
    &:after{
        width: calc(100% + 30px);
        height: calc(100% + 30px);
    }
`;

const TimeCounterContainer = styled.div`
    width: calc(100% - 100px);
    height: calc(100% - 100px);
    /* border: 1px solid ${ ({ theme })=>theme.color.carbon_dull }; */
    border-radius: 50%;
    ${ ({ theme })=>theme.utils.centerAbs }
    /* ${ ({ theme })=>theme.styles.shadowMedium } */
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.gray_20};
    /* box-shadow: inset 1px 1px 4px #fff; */
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
