import { useContext, useEffect, useState } from "react";
import { useSpring, useTransition } from "@react-spring/three";
import { animated as a, easings } from "@react-spring/three";
import { useThree } from "@react-three/fiber";
import { ControlContext } from "../context/ControlContext";
import { ApartmentModelBase } from "../../components/ApartmentModelBase";
import { AmenitiesModel } from "../../components/AmenitiesModel";
import { Selector3D } from "./Selector3D";
import { ApartmentModelStill } from "../../components/ApartmentModelStill";

export const Apartment3D = ()=>{

    // const camera = useThree(state=>state.camera)
    // Math.PI * 0.0325
    // const position = [0.26, -0.4558, -0.01];
    // const rotation = [0, 0, 0];
    // const scale = 0.93;

    // const img = (msg)=>{

    //     function roundRect(ctx, x, y, w, h, r) {
    //         ctx.beginPath();
    //         ctx.moveTo(x+r, y);
    //         ctx.lineTo(x+w-r, y);
    //         ctx.quadraticCurveTo(x+w, y, x+w, y+r);
    //         ctx.lineTo(x+w, y+h-r);
    //         ctx.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
    //         ctx.lineTo(x+r, y+h);
    //         ctx.quadraticCurveTo(x, y+h, x, y+h-r);
    //         ctx.lineTo(x, y+r);
    //         ctx.quadraticCurveTo(x, y, x+r, y);
    //         ctx.closePath();
    //         ctx.fill();
    //         ctx.stroke();   
    //     };
    //     let borderThickness = 10;

    //     let canvas = document.createElement('canvas')
    //     let ctx = canvas.getContext('2d')
        
    //     let metrics = ctx.measureText(msg);
    //     let textWidth = metrics.width
        
    //     ctx.fillStyle = "rgba(255, 255, 255, 1.0)";
    //     ctx.lineWidth = borderThickness;
    //     roundRect(ctx, 0, 0, 300, 150, 8)
        
    //     ctx.textBaseline = 'middle'
    //     ctx.font = `bold 70px -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif`
    //     ctx.textAlign = "center";
    //     ctx.fillStyle = "rgba(0, 0, 0, 1.0)";
    //     ctx.fillText(msg, 140, 80);
    //     return canvas
    // };


    const { state, setState } = useContext(ControlContext);

    const departmentsFavorites = useTransition(state.favorites, {
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

    });

    // const amenitiesTransition = useTransition(state.amenities, {
    //     key: item=>item.uuid,
    //     from:{
    //         scale: 1.5,
    //         transmission: 1,
    //         position: 2
    //     },
    //     enter:{
    //         scale: 1,
    //         transmission: 0.75,
    //         position: 1.0
    //     },
    //     leave:{
    //         scale: 1.5,
    //         transmission: 1,
    //         position: 2
    //     }, 
    //     config: {
    //         duration: 250
    //     }

    // })

    const departmentSelected = useTransition(
        state.selected, 
        {
            key: item=>item.uuid,
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

    const addSelected = (data)=>{
        setState(state.addToSelected(data));
    }

    const cleanSelected = ()=>{
        setState(state.dropSelected());
    }

    const addFavorite = (item)=>{
        setState(state.addFavorite(item));
    }

    const removeFavorite = (item)=>{
        setState(state.dropFavorite(item.uuid));
    }

    return(
        <>
            <group>
                <Selector3D addDepartment={ addSelected }/>
                
                {
                    departmentsFavorites((animation, department)=>{
                        return (
                            <ApartmentModelStill 
                                department={ department } 
                                baseColor={ 0x76ff03 } 
                                hoveredColor={ 0x00c853 } 
                                animation={ animation } 
                                onClick={ removeFavorite } 
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
                    departmentFiltered((animation, department)=>{
                        return(
                            <ApartmentModelBase 
                                department={ department } 
                                baseColor={ 0xFBC02D } 
                                hoveredColor={ 0xFBC02D } 
                                animation={ animation } 
                                onClick={ cleanSelected }
                                onDoubleClick={ addFavorite } 
                            />
                        )
                    })
                }
                {/* {
                    state.radialAmenities
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
                } */}
                
                
            </group>
        </>
    );
}