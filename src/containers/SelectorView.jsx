import styled from "styled-components";
import { ButtonPrimary } from "../components/ButtonPrimary";
import { useState } from "react";
import { Selector } from "../utils/Selector";
import { MainApp } from "../main/MainApp";
import { InteractiveApp } from "../interactive/InteractiveApp";
import { ControlApp } from "../control/ControlApp";

export const SelectorView = ()=>{
    const [selector, setSelector ] = useState(Selector.MAIN);

    const changeView = (view)=>{
        setSelector(view);
    }

    return(
        <>
            {
                selector === Selector.MAIN
                ?(
                    <MainApp action={ changeView } />
                )
                : null
            }
            {
                selector === Selector.INTERACTIVE
                ?(
                    <InteractiveApp />
                )
                : null
            }
            {
                selector === Selector.CONTROL
                ?(
                    <ControlApp />
                )
                : null
            }
        </>
    );
};

