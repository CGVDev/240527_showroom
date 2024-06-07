import React, { useState } from "react";
import { InteractiveState } from "./InteractiveState";

export const InteractiveContext = React.createContext();

export const InteractiveProvider = ({ children })=>{
    const [ state, setState ] = useState(new InteractiveState());

    return(
        <InteractiveContext.Provider value={ { state, setState } }>
            { children }
        </InteractiveContext.Provider>
    )
}