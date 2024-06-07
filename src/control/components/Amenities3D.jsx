import { useContext, useEffect, useState } from "react";
import { useSpring, useTransition } from "@react-spring/three";
import { animated as a, easings } from "@react-spring/three";
import { useThree } from "@react-three/fiber";
import { ControlContext } from "../context/ControlContext";
import { ApartmentModelBase } from "../../components/ApartmentModelBase";
import { AmenitiesModel } from "../../components/AmenitiesModel";
import { Selector3D } from "./Selector3D";
import { ApartmentModelStill } from "../../components/ApartmentModelStill";

export const Amenities3D = ()=>{

    const { state } = useContext(ControlContext);

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

    return(
        <>
            <group>
                {
                    state.radialAmenities && (
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
                }
            </group>
        </>
    );
}