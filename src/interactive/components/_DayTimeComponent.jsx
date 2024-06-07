import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";
import { animated as a, easings, useSpring } from "@react-spring/web";

export const DayTimeComponent = ()=>{
    const { state, setState } = useContext(AppContext);

    const { time } = useSpring({ 
        time: state.dayTime.minutes,
        config:{
            easing: easings.easeInOutBounce,
            duration: 350
        }
    });

    const { opacity } = useSpring({
        opacity: state.menuDaytime ? 1 : 0,
        config: {
            easing: easings.easeInOutBounce,
            duration: 350
        }
    });

    const sliderRef = useRef(null);

    const changeTime = ()=>{
        setState(prev=>prev.updateTime(sliderRef.current.value));
    }

    useEffect(()=>{
        setState(prev=>prev.updateTime(sliderRef.current.value))
    }, []);


    return(
        <DayTimeContainer style={ { opacity } }>
            <TimeWrapper>
                <IconContainer className="material-symbols-outlined">routine</IconContainer>
                <TimeContainer>
                    <DataContainer>
                        <TimeTitleContainer>
                            <TimeSubtitle>Daytime</TimeSubtitle>
                            <TimeTitle>{ time.to(t =>{
                                let _hour = Math.floor(t/60);
                                let hour = _hour < 10 ? "0"+_hour : _hour;
                                let _minutes = (t%60).toFixed(0);
                                let minutes = _minutes < 10 ? "0"+_minutes : _minutes;
                                return `${hour}:${minutes}`}
                            )}</TimeTitle>
                            <span className="hrs">hrs</span>
                        </TimeTitleContainer>
                    </DataContainer>
                </TimeContainer>
                <TimeSlider>
                    <TimeSliderIcon className="material-symbols-outlined">partly_cloudy_day</TimeSliderIcon>
                    <TimeInputContainer>
                        <InputVertical ref={ sliderRef } onChange={ changeTime } value={ state.slider } />
                    </TimeInputContainer>
                    <TimeSliderIcon className="material-symbols-outlined">nights_stay</TimeSliderIcon>
                </TimeSlider>
            </TimeWrapper>
        </DayTimeContainer>
    );
}

const DayTimeContainer = styled(a.div)`
    width: 100%;
    max-width: 200px;
    position: absolute;
    top: 120px;
    right: 30px;
    border-radius: 16px;
`;

const TimeWrapper = styled.div`
    width: 100%;
    height: 0;
    padding-bottom: 80%;
    position: relative;
`;

const TimeContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: #ffffff31; */
    position: absolute;
    padding: 10px ;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${ ({ theme })=>theme.styles.button }
`;

const DataContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const TimeTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
    position: relative;

    .hrs{

        color: ${ ({ theme })=> theme.color.carbon_dark };
        font-family: ${ ({ theme })=>theme.font.primary };
        font-weight: 500;
    }
`;

const TimeTitle = styled(a.h4)`
    color: ${ ({ theme })=> theme.color.carbon_dark };
    margin: 0;
    font-family: ${ ({ theme })=>theme.font.primary };
    font-weight: 600;
    /* font-size: 66px; */
    font-size: calc(24px + 16 * ((100vw - 300px) / 1140));
    line-height: 1;
    text-shadow: 1px 1px 2px white;
`;

const TimeSubtitle = styled.h3`
    font-family: ${ ({ theme })=>theme.font.primary };
    font-size: calc(12px + 2 * ((100vw - 300px) / 1140));
    font-weight: 400;
    color: ${ ({ theme })=> theme.color.carbon_dark };
    margin: 0;
    line-height: 1;
    position: absolute;
    bottom: 100%;
    left: 0;
`;

const IconContainer = styled.span`
    font-size: calc(20px + 12 * ((100vw - 300px) / 1140));;
    color: ${ ({ theme })=>theme.color.green_100 };
    position: absolute;
    top: 5%;
    right: 5%;
`;

const TimeSlider = styled.div`
    width: calc(100vh - 200%);
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    position: absolute;
    top: 110%;
    right: 50px;
    transform-origin: 100% 0;
    transform: rotate(-90deg);
    /* background-color: #ffffff31; */
    border-radius: 16px;
    border: 1px solid white;
    box-shadow: -1px 1px 8px #313c42;
    padding: 10px;
`;

const TimeSliderIcon = styled.span`
    font-size: calc(20px + 4 * ((100vw - 300px) / 1140));
    color: ${ ({ theme })=>theme.color.green_100 };
    transform: rotate(90deg);
`;

const TimeInputContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${ ({theme})=>`linear-gradient(to right, ${ theme.color.green_dark } 15%, ${ theme.color.green_100 } 35%, ${ theme.color.green_50 } 50%, ${ theme.color.green_100 } 65%, ${ theme.color.green_dark } 85%)` };
    margin: 0 10px;
`;

const InputVertical = styled.input.attrs({ type: 'range', min: 0, max: 24 })`
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 100%;
    height: 100%;
    height: 4px;
    border-radius: 300px;
    /* background: ${ ({theme})=>`linear-gradient(to right, ${ theme.color.green_100 } 10%, ${ theme.color.green_dark } 90%)` }; */
    background: transparent;
`;