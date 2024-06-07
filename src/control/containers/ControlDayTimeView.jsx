import styled from "styled-components";
import { MenuDaytime } from "../components/MenuDaytime";
import { useEffect, useState } from "react";
import { animated as a, useSpring } from "@react-spring/web";


export const ControlDayTimeView = ()=>{
    const [active, setActive] = useState(false);

    const spring = useSpring({
        opacity: active ? 1 : 0

    });

    useEffect(()=>{
        setActive(true);
        return ()=>{ setActive(false) }
    }, []);

    return(
        <DaytimeContainer style={ spring }>
            <MenuDaytime />
        </DaytimeContainer>
    );
};

const DaytimeContainer = styled(a.section)`
    width: 30%;
    height: 100dvh;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: absolute;
    top: 0;
    right: 0;
    padding: 20px 20px 10px 0px;
`;