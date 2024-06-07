import { useContext, useEffect, useState } from "react";
import { DepartmentModel } from "./DepartmentModel";
import { AppContext } from "../context/AppContext";
import { useTransition } from "@react-spring/three";

export const SubmenuDepartments3DSelector = ({ addDepartment })=>{

    const { state } = useContext(AppContext);
    const [ departmentsSelectables, setDepartmentsSelectables ] = useState([]);

    const departments = useTransition(departmentsSelectables, {
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
    });

    useEffect(()=>{
        let filtered = [...state.departments];
        state.favorites.forEach(element => {
            let index = filtered.indexOf(element);
            if( index >= 0){
                filtered.splice(index, 1);
            }
        });
        setDepartmentsSelectables(filtered);
    }, [state.departments, state.favorites]);

    return(
        <>
            {
                departments(( animation, department )=>{
                    return (
                        <DepartmentModel baseColor={ 0x78909c } hoveredColor={ 0x00e5ff } department={ department } animation={ animation } onClick={ addDepartment }/>
                    )
                })
            } 
        </>
    );
}