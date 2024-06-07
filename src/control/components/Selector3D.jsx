import { useContext, useEffect, useState } from "react";
import { useTransition } from "@react-spring/three";
import { ApartmentModelBase } from "../../components/ApartmentModelBase";
import { ControlContext } from "../context/ControlContext";

export const Selector3D = ({ addDepartment })=>{

    const { state } = useContext(ControlContext);
    const [ departmentsSelectables, setDepartmentsSelectables ] = useState([]);

    const departments = useTransition(
        departmentsSelectables, 
        {
            from:{
                scale: 1.5,
                transmission: 1,
                position: 2
            },
            enter:{
                scale: 1,
                transmission: 0.75,
                position: 1
            },
            leave:{
                scale: 1.5,
                transmission: 1,
                position: 2
            }, 
            config: {
                duration: 350
            }
        }
    );

    useEffect(()=>{
        let filtered = [...state.apartments];
        let triggered = [...state.favorites, ...state.selected, ...state.filtered]
        triggered.forEach(element => {
            let index = filtered.indexOf(element);
            if( index >= 0){
                filtered.splice(index, 1);
            }
        });
        setDepartmentsSelectables(filtered);
    }, [state.apartments, state.favorites, state.selected]);

    return(
        <>
            {
                departments(( animation, department )=>{
                    return (
                        <ApartmentModelBase 
                            baseColor={ 0x78909c } 
                            hoveredColor={ 0x00e5ff } 
                            department={ department } 
                            animation={ animation } 
                            onClick={ addDepartment }
                        />
                    )
                })
            } 
        </>
    );
}