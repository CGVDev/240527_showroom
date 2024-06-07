import { DepartmentListItem } from "./DepartmentListItem";
import { ListContainer } from "../containers/ListContainer";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useTransition } from "@react-spring/web";
import { FloorPosition } from "../utils/FloorPosition";
import { DepartmentFactory } from "../utils/DepartmentFactory";
import { Box3, Vector3 } from "three";

export const SubmenuDepartmentList = ({ listDepartments })=>{

    
    const { state, setState } = useContext(AppContext);
    // const [ list, setList ] = useState([]);
    
    // const itemsPerPage = 10;
    // const maxPages = state.departments < 10 ? 1 : Math.floor(state.departments/itemsPerPage);

    const addToFavorites = (item)=>{
        setState(state.addToFavorites(item));
    }

    const transitions = useTransition(listDepartments, {
        key: item=>item.uuid,
        from:{
            opacity: 0
        },
        enter:{
            opacity: 1
        },
        leave:{
            opacity: 0
        }, 
        config: {
            duration: 250
        }
    });

    const setCameraPosition = (department)=>{
        let geom = new DepartmentFactory().getGeometry(department.type);
        geom.position.y = FloorPosition.getPosition(department.floor);
        
        let vec = new Vector3();

        geom.getWorldPosition(vec);


        let x = vec.x + 0.02; //+0.215
        let y = vec.y - 0.228; //-0.456
        let z = vec.z + ((vec.z > 0) ? 8.5 : -8.5);

        // console.log(vec.z, z);
        // console.log(geom);

        setState(prev=>prev.setCameraPosition({x, y, z}));
    }

    const setDepartmentHighlight = (department)=>{
        setCameraPosition(department);
        setState(state.addDepartmentHighlight(department));
    }

    // useEffect(()=>{
    //     let pageItems = state.departments.slice(itemsPerPage * page, (itemsPerPage * (page + 1)));
    //     setList(pageItems);
    // }, [page]);

    return(
        <ListContainer>
            { 
                transitions((style, department)=>{
                    return <DepartmentListItem department={ department }  style={ style } key={department.uuid} onClick={ setDepartmentHighlight } onDoubleClick={ addToFavorites }/>
                }) 
            }
        </ListContainer>
    );

};