import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { DepartmentModel } from "./DepartmentModel";
import { useSpring, useTransition } from "@react-spring/three";
import { SubmenuDepartments3DSelector } from "./SubmenuDepartments3DSelector";
import { animated as a, easings } from "@react-spring/three";
import { useThree } from "@react-three/fiber";
import { AmenitiesModel } from "./AmenitiesModel";

export const MenuDepartment3D = ()=>{

    const camera = useThree(state=>state.camera)
    // Math.PI * 0.0325
    const position = [0.26, -0.4558, -0.01];
    const rotation = [0, 0, 0];
    const scale = 0.93;

    const [departmentsSelector, setDepartmentSelector] = useState([]);


    const img = (msg)=>{

        function roundRect(ctx, x, y, w, h, r) {
            ctx.beginPath();
            ctx.moveTo(x+r, y);
            ctx.lineTo(x+w-r, y);
            ctx.quadraticCurveTo(x+w, y, x+w, y+r);
            ctx.lineTo(x+w, y+h-r);
            ctx.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
            ctx.lineTo(x+r, y+h);
            ctx.quadraticCurveTo(x, y+h, x, y+h-r);
            ctx.lineTo(x, y+r);
            ctx.quadraticCurveTo(x, y, x+r, y);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();   
        };
        let borderThickness = 10;

        let canvas = document.createElement('canvas')
        let ctx = canvas.getContext('2d')
        
        let metrics = ctx.measureText(msg);
        let textWidth = metrics.width
        
        ctx.fillStyle = "rgba(255, 255, 255, 1.0)";
        ctx.lineWidth = borderThickness;
        roundRect(ctx, 0, 0, 300, 150, 8)
        
        ctx.textBaseline = 'middle'
        ctx.font = `bold 70px -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif`
        ctx.textAlign = "center";
        ctx.fillStyle = "rgba(0, 0, 0, 1.0)";
        ctx.fillText(msg, 140, 80);
        return canvas
    };

    const { state, setState } = useContext(AppContext);

    const departmentsSelectorTransition = useTransition(departmentsSelector, {
        from:{
            scale: 0.0,
            opacity: 0.0
        },
        enter:{
            scale: 0.3,
            opacity: 1.0
        },
        leave:{
            scale: 0.0,
            opacity: 0.0
        }, 
        config: {
            duration: 450,
            easing: easings.easeInOutElastic
        }
    })

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

    const amenitiesTransition = useTransition(state.amenities, {
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

    })

    const departmentHighlight = useTransition(state.departmentHighlight, {
        key: item=>item.uuid,
        from:{
            scale: 0,
            transmission: 1,
            position: 2
        },
        enter:{
            scale: 1.5,
            transmission: 0.75,
            position: 1.0
        },
        leave:{
            scale: 0.2,
            transmission: 1,
            position: 2
        }, 
        config: {
            duration: 250
        }
    })

    useEffect(()=>{
        if(state.departments3DSelector){
            setDepartmentSelector([1]); 
        }else{
            setDepartmentSelector([]);
        }
    }, [ state.departments3DSelector ]);

    const openTour = (data)=>{
        setState(state.addTour({ url: data.type, label: data.uuid }));
    }

    const addDepartment = (data)=>{
        setState(state.addToFavorites(data));
    }

    const removeDepartment = (data)=>{
        setState(state.dropFavorite(data.uuid));
    }

    // const closeMenuDepartment3D = (e)=>{
    //     e.stopPropagation();
    //     setState(state.disableMenuDepartment3D());
    // }

    // const toggleAmenities = (e)=>{
    //     e.stopPropagation();
    //     setState(state.toggleAmenities());
    // }

    // const toggleXray = (e)=>{
    //     e.stopPropagation();
    //     setState(state.toggleXray());
    // }

    return(
        <>
            <group rotation={ rotation } scale={scale} position={ position }>
                
                {
                    departmentsSelectorTransition((style)=>{
                        return(
                            <>
                                {/* <a.group rotation-y={(camera.rotation.y + (3 * Math.PI))%Math.PI  } position={[0 , 1.5, 0]}>
                                    <a.sprite scale-x={style.scale} scale-y={style.scale} scale-z={0.1} position={ [0.44, 0, 0] } onClick={ (e)=>{ toggleXray(e) } }>
                                        <a.spriteMaterial 
                                            attach="material"
                                            color={0x4AC0B1} 
                                            opacity={scale.opacity}
                                        >
                                        </a.spriteMaterial>
                                    </a.sprite> 
                                    <a.sprite scale-x={style.scale} scale-y={style.scale} scale-z={0.1} position={ [0, 0, 0] } onClick={ (e)=>{ closeMenuDepartment3D(e) } }>
                                        <a.spriteMaterial 
                                            attach="material"
                                            color={0x00c853} 
                                            opacity={scale.opacity}
                                        >
                                        </a.spriteMaterial>
                                    </a.sprite> 
                                    <a.sprite scale-x={style.scale} scale-y={style.scale} scale-z={0.1} position={ [-0.44, 0, 0] } onClick={ (e)=>{ toggleAmenities(e) } }>
                                        <a.spriteMaterial 
                                            attach="material"
                                            color={0x00e5ff} 
                                            opacity={scale.opacity}
                                        >
                                        </a.spriteMaterial>
                                    </a.sprite> 

                                </a.group> */}
                                <SubmenuDepartments3DSelector addDepartment={ addDepartment }/>
                            </>
                        )
                    })
                }
                {
                    departmentsFavorites((animation, department)=>{
                        return (
                            <DepartmentModel baseColor={ 0x76ff03 } hoveredColor={ 0x00c853 } department={ department } animation={ animation } onClick={ openTour } onDoubleClick={ removeDepartment } />
                        )
                    })
                }
                {
                    state.isAmenities
                    ?(
                        amenitiesTransition((animation, amenity)=>{
                            return <AmenitiesModel department={ amenity } baseColor={ 0xffab00 } hoveredColor={ 0xffcd66 } animation={ animation } />
                        })
                    )
                    : null
                }
                {
                    departmentHighlight((animation, department)=>{
                        return(
                            <DepartmentModel department={ department } baseColor={ 0x00e5ff } hoveredColor={ 0x00e5ff } animation={ animation } onDoubleClick={ addDepartment } />
                        )
                    })
                }
                
            </group>
        </>
    );
}