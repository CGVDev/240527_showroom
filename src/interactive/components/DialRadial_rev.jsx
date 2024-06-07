import { useCallback, useEffect, useRef, useState } from "react";
import { useMouseCoords } from "../hooks/useMouseCoords";
import { animated as a } from "@react-spring/web";
import styled from "styled-components";

export const DialRadial = ({ rotation=0, ticks, initialAngle=0, finalAngle, callback, direction=-1, value, setUserActivity, centerX=0, centerY=0 })=>{

    const [ angle, setAngle ] = useState(0);
    const tickAngle = (finalAngle - initialAngle) / (ticks - 1);

    const tickGroup = new Array(ticks).fill("").map((_, i)=>{
        return (tickAngle * i) + rotation;
    });

    const dial = useRef(null);

    const { coords, enableCapture, disableCapture, isActive } = useMouseCoords();

    const toDegrees = useCallback((coordinates)=>{
        // let centerY = window.innerHeight/2;
        // let centerX = window.innerWidth/2;

        let normX = coordinates.x > centerX ? -(coordinates.x%centerX) : (centerX - (coordinates.x%centerX));
        let normY = coordinates.y > centerY ? -coordinates.y%centerY : centerY - (coordinates.y%centerY);


        let degree =  (+(((Math.atan2(normY, normX)*180)/(Math.PI)+360)%360).toFixed(0));

        // let prev = direction >= 0 ? (540 - (degree + rotation)) : (degree - rotation);

        // let position = +((prev%360)/tickAngle).toFixed(0);

        return degree;
    }) 

    useEffect(()=>{

        let degree = toDegrees(coords);

        
        let initial = (360 + (initialAngle + rotation))%360;
        let final = finalAngle + rotation;

        // let minDegree = (360 + (degree - rotation))%360 < finalAngle ? degree : 0; 
        let normDegree =  (360 + (degree - rotation))%360;
        let midPoint = ((360 - finalAngle)/2)+finalAngle+rotation;

        
        let finalDeg = (normDegree > 0 && normDegree < finalAngle) ? degree : ( (degree > midPoint) ? initial : final ) 
        let position = +((((finalDeg - rotation) + 360)%360)/tickAngle).toFixed(0);
        
        // console.log({ degree, normDegree, position, initial, final, finalDeg });

        setAngle(finalDeg);
        callback(position);

    }, [coords]);

    useEffect(()=>{
        setUserActivity(isActive);
    }, [ isActive ]);

    return(
        <DialContainer style={{ transform: `translate(-50%, -50%)` }} >
            <DialWrapper>
                <DialIconStart />
                <DialIconEnd />
                <DialWrapper>
                    {
                        tickGroup.map((t, i)=>(
                            <DialTick
                                key={ i } 
                                style={{ transform: `translate(-50%, -50%) rotate(${ t }deg)` }}
                            >
                                <DialTickContainer />
                            </DialTick>
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
    ${ ({ theme })=>theme.utils.centerAbs }
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

const DialTick = styled.li`
    width: 100%;
    height: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    user-select: none;
`;

const DialTickContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;

    &::after{
        display: block;
        content: "";
        width: 5%;
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
    height: 40px;
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
    height: 16px;
    background-color: ${ ({ theme })=>theme.color.green_100 };
    border-radius: 8px;
    /* border: 1px solid ${ ({ theme })=>theme.color.gray_dull }; */
    user-select: none;
    cursor: pointer;
    ${ ({ theme })=>theme.utils.shadow }
    z-index: 800;
`;