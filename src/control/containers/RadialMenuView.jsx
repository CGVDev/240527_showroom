import styled from "styled-components";
import { MenuDial } from "../../components/MenuDial";
import { useEffect, useState } from "react";
import { animated as a, useSpring } from "@react-spring/web";
import { ProjectOptions } from "../utils/ProjectOptions";


export const RadialMenuView = ({ tickitems, callback })=>{

    const [animation, setAnimation] = useState(false);

    const spring = useSpring({
        opacity: animation ? 1 : 0,
        scale: animation ? 1 : 0.5,
        translateX: "-50%",
        translateY: "-50%"
    })

    useEffect(()=>{
        setAnimation(true);
        return ()=>{ setAnimation(false) };
    }, []);

    return(
        <RadialContainer style={ spring } >
            <MenuDial setUserActivity={()=>{}} tickitems={ tickitems } callback={callback}/>
        </RadialContainer>
    );
};

const RadialContainer = styled(a.div)`
    width: 120%;
    height: 120%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: top left;
    transform: translate(-50%, -50%);  
`;