import styled from "styled-components";
import { animated as a, easings, useChain, useSpringRef, useTransition } from "@react-spring/web";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";
import { MenuBuilding } from "./MenuBuilding";

export const NavRadial = ()=>{

    const { state, setState } = useContext(AppContext);
    const [ container, setContainer ] = useState([]);
    // const [ distance, setDistance ] = useState(false);
    const [ isActive, setIsActive ] = useState(false);
    
    const target = useRef(null);
    
    const counter = useRef(null);
    const springRef = useSpringRef();
    const transitionRef = useSpringRef();

    const springs = useTransition(
        container, 
        {
            ref: springRef,
            from:{ opacity: 0, translateX: '-50%', translateY: '-50%', scale: 0 },
            enter: { opacity: 1, translateX: '-50%', translateY: '-50%', scale: 1 },
            leave: { opacity: 0, translateX: '-50%', translateY: '-50%', scale: 0 },
            config: {
                easing: easings.easeInBounce
            }
        }
    );

    const transitions = useTransition(
        state.radialMenuContent,
        {
            ref: transitionRef,
            from:{ opacity: 0, translateX: '-50%', translateY: '-50%', scale: 0 },
            enter: { opacity: 1, translateX: '-50%', translateY: '-50%', scale: 1 },
            leave: { opacity: 0, translateX: '-50%', translateY: '-50%', scale: 0 },
            config: {
                easing: easings.easeInBounce
            }
        }
    )

    useChain([springRef, transitionRef], [0, 0.3], 750);

    const setTimer = ()=>{
        // console.log("setTimer...");
        counter.current = setTimeout(()=>{
            setState(prev=>prev.cleanActiveMenu());
            setTimeout(()=>{
                // console.log("executed...");
                setState(prev=>prev.hideRadialMenu());
            }, 200);
        }, state.isMobile ? 4000 : 3000);
    };

    const clearTimer = ()=>{
        // console.log("clearTimer...");
        clearTimeout(counter.current);
    };

    const updateActivity = (state)=>{
        setIsActive(state)
    }

    useEffect(()=>{
        if(isActive){
            clearTimer();
        }
        else{
            setTimer();
        }
    }, [ isActive ])

    useEffect(()=>{
        if(state.radialMenuActive){
            setContainer([1]);
            setTimer();
        }
        else{
            setTimeout(()=>{
                setContainer([]);
            }, 100);
        }
    }, [state.radialMenuActive]);

    // useEffect(()=>{
    //     setDistance(prev =>{
    //         if((!prev) && (state.cameraDistance < 5)){
    //             return true;
    //         }
    //         if(state.cameraDistance > 25){
    //             return false
    //         }
    //         return prev;
    //     });
    // }, [state.cameraDistance]);

    // useEffect(()=>{
    //     if(distance && (state.radialMenuContent.length === 0)){
    //         setState(prev=>prev.showRadialMenu(MenuBuilding));
    //     }
    // }, [distance])
    
    return(
        <>
            {
                springs((style, _)=>(
                    <MenuBuildingContainer style={ style } ref={ target }>
                        {/* <MenuBuildingWrapper onMouseOver={()=>{ clearTimer(); }} onMouseLeave={ ()=>{ setTimer(); } }> */}
                        <MenuBuildingWrapper ref={target} imgUrl={state.api.getWPImageRoute("bg-texture.png")}>
                            { 
                                transitions((style, Item)=>{
                                    return <Item style={ style } setUserActivity={ updateActivity }/>
                                })
                            }
                        </MenuBuildingWrapper>
                    </MenuBuildingContainer>
                ))
            }
        </>
    );
};

const MenuBuildingContainer = styled(a.div)`
    width: 80%;
    max-width: 700px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const MenuBuildingWrapper = styled.div`
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    position: relative;
    border-radius: 50%;
    background-color: #fff3;
    box-shadow: inset 1px 1px 4px #fff;
    background-image: ${props=>`url(${props.imgUrl})`};
    background-size: 10px;
    /* background: rgba(0,0,0, 0.4);
    background: radial-gradient(circle, #0000001a 0%, #0000001a 69%, #0000 10%);  */
`;



