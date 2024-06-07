import { useContext } from "react";
import { useSpring, useTransition } from "@react-spring/three";
import { animated as a, easings } from "@react-spring/three";
import { InteractiveContext } from "../context/InteractiveContext";
import { ApartmentModelStill } from "../../components/ApartmentModelStill";
import { AmenitiesModel } from "./AmenitiesModel";

export const IntApartment3D = ()=>{


    const { state, setState } = useContext(InteractiveContext);

    const departmentsFavorites = useTransition(
        state.favorites, 
        {
            key: item=>item.uuid,
            from:{
                scale: 1.5,
                transmission: 0,
                position: 2
            },
            enter:{
                scale: 1,
                transmission: 0.6,
                position: 1.0
            },
            leave:{
                scale: 1.5,
                transmission: 0,
                position: 2
            }, 
            config: {
                duration: 250
            }
        }
    );

    const departmentSelected = useTransition(
        state.selected, 
        {
            
            from:{
                scale: 1.5,
                transmission: 1,
                position: 2
            },
            enter:{
                scale: 1.1,
                transmission: 0.75,
                position: 1.0
            },
            leave:{
                scale: 1.1,
                transmission: 1,
                position: 2
            }, 
            config: {
                duration: 250
            }
        }
    );

    const departmentFiltered = useTransition(
        state.filtered, 
        {
            key: item=>item.uuid,
            from:{
                scale: 1.5,
                transmission: 1,
                position: 2
            },
            enter:{
                scale: 1.15,
                transmission: 0.75,
                position: 1.0
            },
            leave:{
                scale: 1.1,
                transmission: 1,
                position: 2
            }, 
            config: {
                duration: 250
            }
        }
    );

    const amenitiesTransition = useTransition(
        state.amenities, 
        {
            key: item=>item.uuid,
            from:{
                scale: 1.5,
                transmission: 1,
                position: 2
            },
            enter:{
                scale: 1,
                transmission: 0.75,
                position: 1.0
            },
            leave:{
                scale: 1.5,
                transmission: 1,
                position: 2
            }, 
            config: {
                duration: 250
            }
        }
    )

    const addSelected = (data)=>{
        // setState(state.addToSelected(data));
    }

    const cleanSelected = ()=>{
        // setState(state.dropSelected());
    }

    const addFavorite = (item)=>{
        // setState(state.addFavorite(item));
    }

    const removeFavorite = (item)=>{
        // setState(state.dropFavorite(item.uuid));
    }

    return(
        <>
            <group>
                
                {
                    departmentsFavorites((animation, department)=>{
                        return (
                            <ApartmentModelStill 
                                department={ department } 
                                baseColor={ 0x76ff03 } 
                                hoveredColor={ 0x00c853 } 
                                animation={ animation } 
                                onClick={ removeFavorite } 
                                // onDoubleClick={ openTour } 
                            />
                        )
                    })
                }
                {
                    departmentSelected((animation, department)=>{
                        return(
                            <ApartmentModelStill 
                                department={ department } 
                                baseColor={ 0x00e5ff } 
                                hoveredColor={ 0x00e5ff } 
                                animation={ animation } 
                                onClick={ cleanSelected }
                                onDoubleClick={ addFavorite } 
                            />
                        )
                    })
                }
                {
                    state.isAmenities
                    ?(
                        amenitiesTransition((animation, amenity)=>{
                            return( 
                                <AmenitiesModel
                                    department={ amenity } 
                                    baseColor={ 0xffab00 } 
                                    hoveredColor={ 0xffcd66 } 
                                    animation={ animation } 
                                />
                            )
                        })
                    )
                    : null
                }
                
                
            </group>
        </>
    );
}