import { useEffect, useState } from "react"
import { useMouseCoords } from "../hooks/useMouseCoords";
import styled from "styled-components";
import { useTransition, animated as a, easings } from "@react-spring/web";
import { v4 as UUID } from "uuid";

export const TouchesUI = ()=>{

    // const { coords, enableCapture, disableCapture, setCoords } = useMouseCoords({x: 0, y: 0}, {x: 0, y: 0}, ()=>{}, ()=>{}, false);
    const [ touches, setTouches ] = useState([]);
    const [ avaliable, setAvaliable ] = useState(null);
    
    // const listenTouches = (e)=>{
    //     if(e.type === "touchmove"){
    //         let { screenX: x, screenY: y } = e.touches[0];
    //         setCoords({ x, y: -y });
    //     }
    //     else{
    //         setCoords({ x: e.pageX, y: -e.pageY });
    //     }
    //     enableCapture();
        
    //     setTouches([{}]);
    // }

    // const clearTouches = (e)=>{
    //     disableCapture();
    //     setTouches([]);
     
    // }

    const touchesAnimation = useTransition( touches, {
        keys: item=>item.identifier,
        from: {
            opacity: 1,
            scale: 0.5,
            
        }, 
        enter:{
            opacity: 0.4,
            scale: 1,
            
        },
        leave: {
            opacity: 0.1,
            scale: 0.5,
            

        },
        config:{
            duration: 250, 
            easing: easings.easeOutElastic
        }

    })



    // useEffect(()=>{
    //     window.addEventListener("mousedown", listenTouches, { capture: true });
    //     window.addEventListener("mouseup", clearTouches, { capture: true });
    //     window.addEventListener("touchstart", listenTouches, { capture: true });
    //     window.addEventListener("touchend", clearTouches, { capture: true });
    //     return ()=>{
    //         window.removeEventListener("mousedown", listenTouches);
    //         window.removeEventListener("mouseup", clearTouches);
    //         window.removeEventListener("touchstart", listenTouches);
    //         window.removeEventListener("touchend", clearTouches);
    //     }
    // }, []);

    const listenMove = (e)=>{
        e.identifier = avaliable;
        setTouches([e]);
    }

    useEffect(()=>{
        window.addEventListener("touchstart", (e)=>{
            setTouches([...e.touches]);
        });
        window.addEventListener("touchmove", (e)=>{
            setTouches([...e.touches]);
        });
        window.addEventListener("touchend", (e)=>{
            setTouches([...e.touches]);
        });
        window.addEventListener("mousedown", (e)=>{
            setAvaliable(e.timeStamp);
            e.identifier = avaliable;
            // console.log("click", e);
            setTouches([e]);
        });
        window.addEventListener("mouseup", ()=>{
            setAvaliable(null);
            setTouches([]);
        })
    }, []);

    useEffect(()=>{
        if(avaliable){
            window.addEventListener("mousemove", listenMove);
        }
        return ()=>{
            window.removeEventListener("mousemove", listenMove);
        }
    }, [avaliable]);

    return(
        <>
            { touchesAnimation((animation, touchPoint)=>{
                return(

                    <TouchContainer style={ { ...animation, left: touchPoint.clientX, top: touchPoint.clientY } }>
                        <TouchWrapper>
                            <TouchIndicator>
                                {/* <span className="material-symbols-outlined">
                                    fingerprint
                                </span> */}
                            </TouchIndicator>
                        </TouchWrapper>
                    </TouchContainer>
                );
            }) }
            
        </>
    )
}

const TouchContainer = styled(a.span)`
    display: inline;
    width: 0px;
    height: 0px;
    position: absolute;
    user-select: none;
    touch-action: none;
    pointer-events: none;
    z-index: 999999;
`;

const TouchWrapper = styled.span`
    display: inline;
    width: 0px;
    height: 0px;
    position: relative;
    user-select: none;
    touch-action: none;
    pointer-events: none;
`;

const TouchIndicator = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    background-color: ${ ({ theme })=>theme.color.green_100 };
    border: 1px solid white;
    border-radius: 50%;
    position: absolute;
    user-select: none;
    touch-action: none;
    pointer-events: none;
    transform: translate(-50%, -50%);


    &::after{
        display: inline;
        content: "";
        width: 90px;
        height: 90px;
        border: 2px solid ${ ({ theme })=>theme.color.green_100 };
        border-radius: 50%;
        position: absolute;
        user-select: none;
        pointer-events: none;
        touch-action: none;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    span{
        display: block;
        color: ${ ({ theme })=>theme.color.white };
        font-size: 72px;
        margin: 0;
        padding: 0;
        user-select: none;
        touch-action: none;
        pointer-events: none;
    }
`;