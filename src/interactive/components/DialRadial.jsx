import { useCallback, useEffect, useRef, useState } from "react";
import { useMouseCoords } from "../hooks/useMouseCoords";
import { animated as a } from "@react-spring/web";
import styled from "styled-components";

export const DialRadial = ({ ticks, initialAngle=0, finalAngle, callback, isclockwise=true, value, setUserActivity, iconStart, iconEnd })=>{

    
    const _initialAngle = (360 - ((540 - initialAngle)%360) - 180)%360;
    const totalPositions = ticks;
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

    const setValueToCoords = (position)=>{
        setCoords(valueToCoords(position));
        // callback(position);
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

        callback(position);
        
        // console.log('EFFECT',{ coords, _clockwiseAngle, _initialAngle, _angle, angle, clockwiseAngle, cssAngle, position, runnedAngle, totalAngle, midPoint});

    }, [coords]);

    useEffect(()=>{
        setUserActivity(isActive);
    }, [ isActive ]);

    return(
        <DialContainer ref={ container } >
            <DialWrapper>
                <DialIconStart>
                    { iconStart }
                </DialIconStart>
                <DialIconEnd>
                    { iconEnd }
                </DialIconEnd>
                <DialWrapper>
                    {
                        tickGroup.map((t, i)=>(
                            <DialTickContainer
                                key={ i } 
                                style={{ transform: `translate(-50%, -50%) rotate(${ t }deg)` }}
                            >
                                <DialTick>
                                    <TickContainer >
                                        <Tick onClick={ ()=>{ setValueToCoords(i) } } />
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
`;

const DialWrapper = styled.ul`
    width: 100%;
    height: 100%;
    position: relative;
    margin: 0;
    padding: 0;
    list-style: none;
`;

const DialIconStart = styled.div`
    width: 100%;
    height: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-40deg);

    span{
        font-size: 44px;
        position: relative;
        transform: rotate(40deg);
        color: ${ ({ theme })=>theme.color.green_100 };
        user-select: none;
    }    
`;

const DialIconEnd = styled.div`
    width: 100%;
    height: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-140deg);
    
    span{
        font-size: 44px;
        position: relative;
        transform: rotate(140deg);
        color: ${ ({ theme })=>theme.color.green_100 };
        user-select: none;
    }
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
    left: -12.5%;
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
        width: 50%;
        height: 2px;
        background-color: ${ ({ theme })=>theme.color.green_100 };
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(0, -50%);
        ${ ({ theme })=>theme.utils.shadow };
    }
`;

const DialSelectorContainer = styled(a.div)`
    width: 96%;
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
        width: 50px;
        height: 16px;
        position: absolute;
        left: 0%;
        top: 50%;
        transform: translate(0, -50%);
        border-radius: 8px;
        background-color: ${ ({ theme })=>theme.color.green_100 };
        ${ ({ theme })=>theme.utils.shadow }
    }
`;