// import { DepartmentListItem } from "./DepartmentListItem";
// import { ListContainer } from "../containers/ListContainer";
// import { useContext, useEffect } from "react";
// import { AppContext } from "../context/AppContext";
// import { useTransition } from "@react-spring/web";

// export const DepartmentList = ()=>{

//     const { state, setState } = useContext(AppContext);

//     const addToFavorites = (item)=>{
//         setState(state.addToFavorites(item));
//     }

//     const transitions = useTransition(state.departments, {
//         key: item=>item.uuid,
//         from:{
//             opacity: 0
//         },
//         enter:{
//             opacity: 0
//         },
//         leave:{
//             opacity: 0
//         }, 
//         config: {
//             duration: 250
//         }
//     });

//     useEffect(()=>{
//         let request = async()=>{
//             let data = await state.api.get();
//             setState(prev=>prev.setData(data));
//         }

//         request();
//     }, []);

//     return(
//         <ListContainer>
//             { 
//                 transitions((style, department)=>{
//                     return <DepartmentListItem style={ style } key={department.uuid}  typeA={ department.type } floorA={ department.floor } avaliability={ department.avaliability } action={ ()=>{ addToFavorites(department) } }/>
//                 }) 
//             }
//         </ListContainer>
//     );

// };