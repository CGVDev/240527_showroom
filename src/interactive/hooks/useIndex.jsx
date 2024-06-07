import { useEffect, useState } from "react"

export const useIndex = (back, front)=>{

    const [ isEnable, setIsEnable ] = useState(false);
    const [ zIndex, setZIndex ] = useState(front);

    const enable = ()=>{
        setIsEnable(true);
        setZIndex(front);
    };

    const disable = ()=>{
        setIsEnable(false);
        setZIndex(back);
    };

    useEffect(()=>{
        if(isEnable){
            window.addEventListener('mousemove', enable);
            window.addEventListener('mouseup', disable);
            window.addEventListener('touchmove', enable);
            window.addEventListener('touchend', disable);

            return ()=>{
                window.removeEventListener('mousemove', enable);
                window.removeEventListener('mouseup', disable);
                window.removeEventListener('touchmove', enable);
                window.removeEventListener('touchend', disable);
            }
        }
    }, [isEnable]);

    return { zIndex, enable, disable }
}