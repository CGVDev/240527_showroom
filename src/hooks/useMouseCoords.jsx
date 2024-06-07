import { useEffect, useState } from "react"

export const useMouseCoords = (_origin={ x: 0, y: 0 }, initial={ x: 0, y:0 }, onEnable=()=>{}, onDisable=()=>{}, nonPropagable=true)=>{

    const [ origin, setOrigin ] = useState(_origin);
    const [ coords, setCoords ] = useState(initial);
    const [ enabled, setEnabled ] = useState(false);

    const captureCoords = (e)=>{
        if(nonPropagable){
            e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation();
        }
        if(e.type === "touchmove"){
            let { clientX: x, clientY: y } = e.touches[0];
            setCoords(normCoords({ x, y }));
        }
        else{
            setCoords(normCoords({ x: e.clientX, y: e.clientY }));
        }
    };

    const normCoords = ({ x, y })=>{
        // let normX = x > origin.x ? -(x % origin.x) : (origin.x - (x % origin.x));
        // let normY = y > origin.y ? -(y % origin.y) : (origin.y - (y % origin.y));
        let normX = x - origin.x;
        let normY = -(y - origin.y);

        return { x: normX, y: normY };
    }

    const disableCapture = ()=>{
        setEnabled(false);
        onDisable();
    };

    const enableCapture = ()=>{
        setEnabled(true);
        onEnable();
    };
    
    useEffect(()=>{

        if(enabled){
            window.addEventListener('mousemove', captureCoords, { passive: false });
            window.addEventListener('mouseup', disableCapture, { passive: false });
            window.addEventListener('touchmove', captureCoords, { passive: false });
            window.addEventListener('touchend', disableCapture, { passive: false });

            return ()=>{
                window.removeEventListener('mousemove', captureCoords);
                window.removeEventListener('mouseup', disableCapture);
                window.removeEventListener('touchmove', captureCoords);
                window.removeEventListener('touchend', disableCapture);
            }
        }

    }, [enabled]);


    return{ coords, enableCapture, disableCapture, isActive: enabled, setCoords, setOrigin };
}