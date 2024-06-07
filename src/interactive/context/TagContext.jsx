import React, { useState } from "react";
import { TagState } from "./TagState";

export const TagContext = React.createContext();

export const TagProvider = ({ children })=>{
    const [ tagState, setTagState ] = useState(new TagState());

    return(
        <TagContext.Provider value={ { tagState, setTagState } }>
            { children }
        </TagContext.Provider>
    )
}