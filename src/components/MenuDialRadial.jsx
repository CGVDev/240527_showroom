import { useCallback, useEffect, useRef, useState } from "react";
import { animated as a } from "@react-spring/web";
import styled from "styled-components";
import { useMouseCoords } from "../hooks/useMouseCoords";
import { ProjectOptions } from "../control/utils/ProjectOptions";

export const MenuDialRadial = ({ tickitems, initialAngle=0, finalAngle, callback, isclockwise=true, value, setUserActivity, iconStart, iconEnd })=>{

    
    const _initialAngle = (360 - ((540 - initialAngle)%360) - 180)%360;
    const totalPositions = tickitems.length;
    const totalAngle = finalAngle - initialAngle;

    const sliceAngle = totalAngle / (totalPositions - 1)
    const tickGroup = new Array(totalPositions).fill("").map((_, i)=>{
        return (_initialAngle + (sliceAngle * i))%360;
    });

    // const [ origin, setOrigin ] = useState({ x:0, y:0 });
    const [ angle, setAngle ] = useState(value*sliceAngle);

    const container = useRef(null);

    const toDegrees = useCallback(({ x, y })=>{
        return (+(((Math.atan2(y, x)*180)/(Math.PI)+360)%360).toFixed(0));
    });

    const toCSSDegree = (degree)=>((540 - degree)%360)

    const degreeToCoords = useCallback((angle)=>{
        let x = Math.cos((angle * Math.PI)/180);
        let y = Math.sin((angle * Math.PI)/180);
        return {x, y};
    });

    const valueToCoords = (position)=>{
        let angle = ((toRealPosition(position) * sliceAngle) + initialAngle)%360;
        return degreeToCoords(angle)
    };

    const toRealPosition = (position)=>{
        let realPosition = isclockwise ? (totalPositions - position) - 1 : position;
        return realPosition;
    }

    const dial = useRef(null);

    const { coords, enableCapture, disableCapture, isActive, setCoords, setOrigin } = useMouseCoords(origin, valueToCoords(value));

    const setValueToCoords = (position, type)=>{
        console.log("RADIAL", position, type)
        setCoords(valueToCoords(position));
        callback(type);
    }

    useEffect(()=>{

        let { width, height, top, left } = container.current.getBoundingClientRect();
        setOrigin({ y: top + (height/2), x: left + (width/2) });
        // setCoords(valueToCoords());

    }, []);

    useEffect(()=>{

        let _clockwiseAngle = toDegrees(coords);
        let clockwiseAngle = toCSSDegree(_clockwiseAngle);

        let angle = isclockwise ? clockwiseAngle : _clockwiseAngle

        let runnedAngle =  (360 + (angle - initialAngle))%360;
        let midPoint = ((360 - totalAngle) / 2) + finalAngle;
        
        /// angulo recorrido según la direccion pero limitado
        let _angle = (runnedAngle >= 0 && runnedAngle <= totalAngle) ? runnedAngle : ( (runnedAngle >= midPoint) ? 0 : (finalAngle - initialAngle) );
        ///angulo para CSS
        let cssAngle = (runnedAngle >= 0 && runnedAngle <= totalAngle) ? clockwiseAngle : ( (runnedAngle >= midPoint) ? (isclockwise ? initialAngle : finalAngle) : (isclockwise ? finalAngle : initialAngle) );

        let position = +(_angle / sliceAngle).toFixed(0);
        
        setAngle(cssAngle);

        callback(tickitems[position]);
        
        // console.log('EFFECT',{ coords, _clockwiseAngle, _initialAngle, _angle, angle, clockwiseAngle, cssAngle, position, runnedAngle, totalAngle, midPoint});

    }, [coords]);

    useEffect(()=>{
        setUserActivity(isActive);
    }, [ isActive ]);

    return(
        <DialContainer ref={ container } >
            <DialWrapper>
                {/* <DialIconStart>
                    { iconStart }
                </DialIconStart>
                <DialIconEnd>
                    { iconEnd }
                </DialIconEnd> */}
                <DialWrapper>
                    {
                        tickGroup.map((t, i)=>(
                            <DialTickContainer
                                key={ i } 
                                style={{ transform: `translate(-50%, -50%) rotate(${ t }deg)` }}
                            >
                                <DialTick>
                                    <TickContainer >
                                        <Tick onClick={ ()=>{ setValueToCoords(i, tickitems[i]) } }>
                                            <span>{ tickitems[i] }</span>
                                        </Tick>
                                    </TickContainer>
                                </DialTick>
                            </DialTickContainer>
                        ))
                    }
                    
                </DialWrapper>
                <DialSelectorContainer style={{ transform: `translate(-50%, -50%) rotate(${ angle }deg)` }}>
                    <DialSelectorButton ref={dial} onMouseDown={ enableCapture } onTouchStart={ enableCapture } onTouchEnd={ disableCapture } onTouchCancel={ disableCapture } />
                </DialSelectorContainer>
            </DialWrapper>
        </DialContainer>
    );
}

const DialContainer = styled.div`
    width: 100%;
    height: 100%;
    ${ ({ theme })=>theme.utils.centerAbs };
    border: 1px solid ${({ theme }) => theme.color.gray_40};
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.gray_40};
    box-shadow: inset 1px 1px 24px ${({ theme }) => theme.color.carbon_dark};
`;

const DialWrapper = styled.ul`
    width: 100%;
    height: 100%;
    position: relative;
    margin: 0;
    padding: 0;
    list-style: none;
`;


const DialTickContainer = styled.li`
    width: 80%;
    height: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    user-select: none;
`;

const DialTick = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
`;

const TickContainer = styled.div`
    width: 12.5%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: -22%;
    transform: translate(0, -50%);
`;

const Tick = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    user-select: none;
    cursor: pointer;

    &:before{
        display: block;
        content: "";
        width: 40%;
        height: 6px;
        background-color: ${ ({ theme })=>theme.color.gray_40 };
        border: 2px solid ${({ theme }) => theme.color.gray_20};
        border-radius: 4px;
        position: absolute;
        top: 50%;
        left: 10%;
        transform: translate(0, -60%);
        box-shadow: ${ ({ theme })=>theme.styles.button.boxShadow };
    }

    span{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 6px;
        border-radius: 4px;
        position: absolute;
        top: 50%;
        left: -60%;
        transform: translate(0, -50%) rotate(-90deg);

    }
`;

const DialSelectorContainer = styled(a.div)`
    width: 100%;
    height: 50px;
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const DialSelectorButton = styled.div`
    width: 50px;
    height: 50px;
    
    
    /* border: 1px solid ${ ({ theme })=>theme.color.gray_dull }; */
    user-select: none;
    position: relative;
    cursor: pointer;
    
    z-index: 800;

    &:before{
        display: block;
        content: "";
        width: 46px;
        height: 46px;
        position: absolute;
        left: 0%;
        top: 50%;
        transform: translate(0, -50%);
        border-radius: 50%;
        background-color: ${ ({ theme })=>theme.color.green_100 };
        ${ ({ theme })=>theme.utils.shadow }
    }
`;