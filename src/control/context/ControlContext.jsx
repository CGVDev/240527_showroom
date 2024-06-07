import React, { useState } from "react";
import { ControlState } from "./ControlState";

export const ControlContext = React.createContext();

export const ControlProvider = ({ children })=>{
    const [ state, setState ] = useState(new ControlState());

    return(
        <ControlContext.Provider value={ { state, setState } }>
            { children }
        </ControlContext.Provider>
    )
}