import interact from "interactjs";
import { useEffect, useRef, useState } from "react";

export const useDraggable = (interactiveRef)=>{
    
    const [ isEnabled, setIsEnabled ] = useState(true);
    
    // const interactiveRef = useRef(null);
    const [ elementPosition, setElementPosition ] = useState(interactiveRef.current === null ? { left: ((window.innerWidth/2) - (Math.min(window.innerWidth * 0.9, 800)/2)), top: ((window.innerHeight/2) - (Math.min(window.innerHeight * 0.9, 800)/2)), width: Math.min(window.innerWidth * 0.9, 800), height: Math.min(window.innerWidth * 0.45, 400) } : { left: interactiveRef.current.clientLeft, top:interactiveRef.current.clientTop , width: interactiveRef.current.offsetWidth, height: interactiveRef.current.offsetHeight });

    let { left, top, width, height } = elementPosition;

    const enable = ()=>{
        if(interactiveRef.current != null){
            interact(interactiveRef.current)
            .draggable({
                modifiers: [ interact.modifiers.restrictRect({ 
                    // restriction: container, 
                    endOnly: true
                 }) ],
                inertia: true
            })
            .on("dragmove", (e)=>{
                left += e.dx;
                top += e.dy;

                setElementPosition(()=>({
                    width: interactiveRef.current.offsetWidth,
                    height: interactiveRef.current.offsetHeight,
                    top,
                    left
                }));
            })
            .resizable({
                edges: { top: false, bottom: true, left: false, right: true },
                listeners:{
                    move: (event)=>{
                        setElementPosition(prev=>({
                            ...prev,
                            width: prev.width + event.deltaRect.right,
                            height: (prev.width + event.deltaRect.right) / 2
                        }))
                    }
                }
            })
        }
        
    }

    const disable = ()=>{
        if(interactiveRef.current != null){
            interact(interactiveRef.current).unset();
        }
    }

    useEffect(()=>{
        if(isEnabled){
            setElementPosition({ left: interactiveRef.current.offsetLeft, top:interactiveRef.current.offsetTop , width: interactiveRef.current.offsetWidth, height: interactiveRef.current.offsetHeight });
            enable();
        }
        else{
            disable();
        }
        return ()=>{disable()};
    }, [ isEnabled ])

    return{
        ref: interactiveRef,
        style: {
            left: elementPosition.left,
            top: elementPosition.top,
            width: `${elementPosition.width}px`,
            height: `${elementPosition.height}px`,
            position: "absolute",
            touchAction: "none",
            zIndex: 999
        },
        position: elementPosition,
        isEnabled,
        enable: ()=> setIsEnabled(true),
        disable: ()=> setIsEnabled(false)
    };
};