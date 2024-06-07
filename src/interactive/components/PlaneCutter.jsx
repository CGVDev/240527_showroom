import { animated as a } from "@react-spring/three";
import { Plane } from "@react-three/drei";
import { useEffect, useState } from "react";
import { DoubleSide } from "three";
import { DepartmentFactory } from "../utils/DepartmentFactory";

const APlane = a(Plane);

export const PlaneCutter = ({ rotation, position, planeWidth=3.0, planeHeight=3.0, offset=[0,0,0], dialRotation=[0,0,0], dialColor=0xFFFFFF, onPointerDown, ...props })=>{

    const [ hovered, setHovered ] = useState(false);
    const dial = new DepartmentFactory().getGeometry(DepartmentFactory.CUTTER);

    const setInitial = (e)=>{
        e.stopPropagation();
        setHovered(true);
    }

    const setFinal = ()=>{
        setHovered(false);
    }

    // useEffect(()=>{
    //     setHovered(true);
    // }, [position]);

    return(
        <group position={position} rotation={rotation}>
            <group position={offset} rotation={[0,0,0]}>

                <mesh geometry={dial.geometry}  position={[ (planeWidth/2 + (0.1 / 2)), -0.425, 0 ]} rotation={dialRotation} onPointerDown={onPointerDown} onPointerOver={ (e)=>{ setInitial(e) } } onPointerLeave={ ()=>{ setFinal() } } onPointerCancel={ ()=>{ setFinal() } }>
                    {/* <cylinderGeometry args={[ 0.1, 0.1, 0.05, 24 ]} /> */}
                    <meshPhongMaterial color={dialColor} shininess={100} reflectivity={0.5} emissive={ dialColor } emissiveIntensity={0.5} specular={ 0xffffff }/>
                </mesh>
                <Plane args={[planeWidth, 0.01, 1] } position={[0, -0.4558, 0]} >
                    <shaderMaterial
                        vertexShader="
                            out vec2 v_uv;
                            void main(){
                                v_uv = uv;
                                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                            }
                        "
                        fragmentShader="
                            in vec2 v_uv;
                            void main(){
                                gl_FragColor = vec4(0.29, 0.752, 0.694, 0.8);
                            }
                        "
                        side={ DoubleSide }
                        transparent={ true }
                    />
                </Plane>
                {
                    hovered
                        ? 
                        (
                            <Plane args={[planeWidth, planeHeight, 1] } position={[0,(planeHeight/2 + (-0.4558)),0]} >
                                <shaderMaterial
                                    vertexShader="
                                        out vec2 v_uv;
                                        
                                        void main(){
                                            v_uv = uv;
                                            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                                        }
                                    "
                                    fragmentShader="
                                        in vec2 v_uv;

                                        float fadeCalc(vec2 pt, vec2 size, vec2 center, float borderWidth){
                                                                       
                                            float h = step(borderWidth, pt.x) - step((1.0 - borderWidth), pt.x);
                                            float v = step(borderWidth, pt.y) - step((1.0 - borderWidth), pt.y);
                                            
                                            return h * v;
                                        }
                                            
                                            void main(){
                                            //gl_FragColor = mix(vec4(1.0, 1.0, 0.0, 1.0), vec4(1.0, 1.0, 0.0, 0.0), sin(v_uv.x));
                                            
                                            //float f_radius = 0.9;
                                            //float inCircle = 1.0 - step(f_radius, length(v_position.xy));
                                            //vec3 color = vec3(0.5, 1.0, 0.0) * inCircle;
                                            
                                            //float inRect = rect(v_position.xy, vec2(1.0, 1.0), vec2(0.0, 0.0));
                                            //vec3 color = vec3(0.5, 1.0, 0.0) * inRect;
                                            
                                            float borderWidth = 0.01;
                                            
                                            float inFade = fadeCalc(v_uv.xy, vec2(1.0, 1.0), vec2(0.0, 0.0), borderWidth);
                                            vec4 color = vec4(0.29, 0.752, 0.694, cos(((1.0 - v_uv.y) * 2.0 ) * inFade));
                                            
                                            gl_FragColor = color;
                                        }
                                    "
                                    side={ DoubleSide }
                                    transparent={ true }
                                />
                            </Plane>
                        )
                        : null
                }
                                    {/* <mesh position={[ -planeWidth/2, -0.42, 0 ]} {...props} rotation={dialRotation} onPointerOver={ (e)=>{ setInitial(e) } } onPointerLeave={ ()=>{ setFinal() } } onPointerCancel={ ()=>{ setFinal() } }>
                    <cylinderGeometry args={[ 0.1, 0.1, 0.05, 24 ]} />
                    <meshStandardMaterial color={dialColor} />
                </mesh> */}
                
                
            </group>        
        </group>
    );
}