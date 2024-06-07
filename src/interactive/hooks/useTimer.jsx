import { useEffect, useRef, useState } from "react"

export const useTimer = ({ callback, initial=true, time=500 })=>{

    const [ isActive, setIsActive ] = useState(initial);
    const timer = useRef(null);

    const setTimer = ()=>{
        timer.current = setTimeout(()=>{
            callback();
        }, time);
    }

    const clearTimer = ()=>{
        clearTimeout(timer.current);
    }

    useEffect(()=>{
        if(!isActive){
            setTimer();
        }
        return clearTimer;
    }, [isActive]);

    return { isActive, setIsActive }
}