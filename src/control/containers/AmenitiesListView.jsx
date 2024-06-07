import { useContext, useEffect, useState } from "react";
import { AmenityItem } from "../components/AmenityItem";
import { MenuListRight } from "../components/MenuListRight";
import { ControlContext } from "../context/ControlContext";

export const AmenitiesListView = ({ list })=>{

    const { state, setState } = useContext(ControlContext);
    const [selected, setSelected] = useState(list);

    const changeSelected = (amenity)=>{
        setSelected([amenity]);
    }

    useEffect(()=>{
        setState(state.setAmenities(selected));
    }, [selected]);

    return(
        <MenuListRight title={"Amenidades"}>
            {
                list.map(amenity=>{
                    return <AmenityItem key={amenity.label} className={ selected.includes(amenity) ? "selected" : "" } item={ amenity }  onClick={ ()=>changeSelected(amenity) }/>
                })
            }
        </MenuListRight>
    );
};