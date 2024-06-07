import { useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";

export const useEnterAnimation = ({ style, config })=>{
    const [ trigger, setTrigger ] = useState(false);

    const styles = useSpring({
        ...style,
        config
    })

    useEffect(()=>{
        setTrigger(true);
    }, []);

    return { styles };
}