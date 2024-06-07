import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";
import { data } from '../utils/data';
import { WiDaySunny } from 'react-icons/wi';
import { RiBox2Line, RiHazeLine, RiMoonClearLine, RiMoonLine, RiSunCloudyLine, RiSunLine } from 'react-icons/ri';
import { FiSun, FiSunrise } from 'react-icons/fi';
import { GoSun, GoMoon } from 'react-icons/go';

export const SunSlider = ()=>{

    const slider = useRef(null);

    const { state, setState } = useContext(AppContext);

    const changeSun = ()=>{
        setState(prev=>prev.updateSlider(slider.current.value).updateSun(slider.current.value))
    }

    const changeTick = (value)=>{
        console.log(value);
        setState(prev=>prev.updateSlider(value).updateSun(value));
    }

    useEffect(()=>{
        setState(prev=>prev.updateSun(slider.current.value));
    }, [])

    return(
        <SliderContainer>
            <div>
                <span class="material-symbols-outlined">
                    routine
                </span>
                <span class="material-symbols-outlined">
                    partly_cloudy_day
                </span>
                <span class="material-symbols-outlined">
                    light_mode
                </span>
                <span class="material-symbols-outlined">
                    nights_stay
                </span>
                <span class="material-symbols-outlined">
                    contrast
                </span>
                <span class="material-symbols-outlined">
                    brightness_4
                </span>
                <span class="material-symbols-outlined">
                    tonality
                </span>
                
                <span class="material-symbols-outlined">
                    nightlight
                </span>
                <span class="material-symbols-outlined">
                    mode_night
                </span>
                <span class="material-symbols-outlined">
                    quiet_time
                </span>
                <span class="material-symbols-outlined">
                    sunny
                </span>
                <span class="material-symbols-outlined">
                    clear_day
                </span>
                <span class="material-symbols-outlined">
                    bedtime
                </span>
                <span class="material-symbols-outlined">
                    wb_sunny
                </span>
            </div>
            <div>
                <RiBox2Line />
                <RiHazeLine />
                <RiSunLine />
                <RiSunCloudyLine />
                <RiMoonClearLine />
                <RiMoonLine />
                <FiSun />
                <FiSunrise />
                <GoSun />
                <GoMoon />
                <WiDaySunny />

            </div>
            <LabelContainer>
                {
                    data.sunTicks.map((time, i)=>{
                        return <Tick label={ time.label } labelvalue={ time.value } cb={changeTick} key={i} />
                    })
                }
            </LabelContainer>
            <input type="range" min="0" max="24" ref={ slider } onChange={ changeSun } value={ state.slider }/>
        </SliderContainer>
    );
}

const Tick = ({ label, labelvalue, cb })=>{
    return(
        <LabelWrapper onClick={ ()=>cb(labelvalue) }>
            <TickLabel>
                { label }
            </TickLabel>
            <TickGraph />
        </LabelWrapper>
    );
}

const SliderContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px 15px;
    position: absolute;
    bottom: 10vh;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: #fff9;
    /* border-radius: 16px; */

    input{
        width: 97.5%;
    }
`;

const LabelContainer = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const LabelWrapper = styled.li`
    width: 4.1%;
    height: 4px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    color: ${ ({ theme })=>theme.color.carbon_dark };
    cursor: pointer;
    position: relative;
`;

const TickLabel = styled.span`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: light;
    color: ${ ({ theme })=>theme.color.carbon_dark };
    position: absolute;
    left: 50%;
    bottom: 16px;
    transform: translate(-50%, 0);
`;

const TickGraph = styled.span`
    display: block;
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 300px;
    margin-top: 4px;
    background-color: ${ ({ theme })=>theme.color.green_100 };
    position: absolute;
    left: 50%;
    bottom: 3px;
    transform: translate(-50%, 0);
`;