import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from 'three-stdlib';

import styled from "styled-components";

import { Suspense, useContext, useEffect, useRef } from "react";
// import { UILoader } from "../components/UILoader";
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { ACESFilmicToneMapping, SRGBColorSpace, VSMShadowMap, Vector3 } from "three";
import { InteractiveContext } from "../context/InteractiveContext";
import { CityLoader } from "../components/CityLoader";
import { animated as a, useSpring } from "@react-spring/three";
// import { MenuDepartment3D } from "../components/MenuDepartment3D";
import { XenterLoader } from "../components/XenterLoader";
import { ApartmentLoader } from "../../components/ApartmentLoader";
import { IntApartment3D } from "../components/IntApartment3D";
import { Screen } from "../../utils/Screen";
import { ApartmentFactory } from "../../utils/ApartmentFactory";
import { Actions } from "../components/Actions";
import { IntSocketEmmiter } from "../utils/IntSocketEmmiter";
import { VRLoader } from "../components/VRLoader";
import { MultiVRLoader } from "./MultiLoader";


export function Container3D(){

    const AnimatedOrbitControls = a(OrbitControls);
    const AnimatedCamera = a(PerspectiveCamera);
    
    // const { state: { sun: { pos_x, pos_y, intensity } }, setState } = useContext(AppContext);
    const { state, setState } = useContext(InteractiveContext);
    const controls = useRef(null);
    const cameraRef = useRef(null);

    const [{ x: tx, y: ty, z: tz }, targetApi] = useSpring(()=>({
        x: 0,
        y: -0.08,
        z: 0,
        config:{
            duration: 500
        }
    }));
    
    const [{ x: cx, y: cy, z: cz }, cameraApi] = useSpring(()=>({
        x: 15,
        y: 12,
        z: -15,
        config:{
            duration: 500
        }
    }));
    
    const enviromentListener = ()=>{
        // setState(prev=>prev.updateDistance(controls.current.object.position.distanceTo(prev.origin)));
        // let {x, y, z} = controls.current.object.position;
        // let angzx = Math.atan2(z, x) * (180/Math.PI);
        // let angxz = Math.atan2(x, z) * (180/Math.PI);
        // console.log("set listener...", {angxz});
        // cameraApi.set({
        //     x: controls.current.object.position.x, y: controls.current.object.position.y, z: controls.current.object.position.z
        // })

        targetApi.set({
            x: controls.current.target.x, y: controls.current.target.y, z: controls.current.target.z
        })
        

        if((controls.current.target != state.origin) && !controls.current.enablePan ){
            targetApi.start({
                x: 0,
                y: -0.08,
                z: 0
            });
        }
        if(controls.current.enablePan){
            targetApi.set({
                ...controls.current.target
            })
        }
    };

    useEffect(()=>{
        if(controls.current != null){
            let translation = +((state.cameraVertical * 0.058).toFixed(5) - 0.4).toFixed(5);
            controls.current.target = new Vector3(0, translation, -0.15);
            controls.current.object.translateY(-0.58)
        }
    }, [state.cameraVertical]);

    useEffect(()=>{
        if(controls.current != null){
            let { x, y, z} = state.cameraPosition;
            // console.log(state.cameraPosition);

            controls.current.object.position.set(x, y, z);
            controls.current.target = new Vector3(x, y, 0);
        }

    }, [state.cameraPosition]);

    useEffect(()=>{
        // console.log(state.cityOpacity);
        if(controls.current != null){
            if(state.cityOpacity === 0){
                
                // console.log("start...");
                // controls.current.target = ;

                // console.log("opacity down...", state.cityOpacity)
                controls.current.enablePan = true;
                // targetApi.set({
                //     ...controls.current.target
                // });
            }
            else{
                // console.log("opacity up...", state.cityOpacity)
                // if(controls.current.target != targetApi)
                // targetApi.start({
                //     x: 0,
                //     y: -0.08,
                //     z: 0
                // });
                // controls.current.object.updateMatrixWorld();
                controls.current.enablePan = false;
                // console.log("set...");
            }
        }

    }, [state.cityOpacity])

    const dirLight = useRef(null);
  
    return(
        <Wrapper3D>
            {/* {
                state.stage === Stage.STAGE_1 && 
            } */}
            <Canvas 
                // frameloop="demand"
                className="bg-gray"
                gl={ { 
                    antialias: true, 
                    localClippingEnabled: !state.isXray,
                    outputColorSpace: SRGBColorSpace,
                    toneMapping: ACESFilmicToneMapping,
                    toneMappingExposure: 1
                    
                } }
                camera={{ ref: cameraRef,  position: [15, 12, -15], fov: 17.5, near: 0.2, far: 100 }} 
                dpr={[1,2]}
                shadows="soft"
                tone-mapping={ ACESFilmicToneMapping }
                // onCreated={(state)=>{
                //     state.gl.toneMapping = ACESFilmicToneMapping;
                // }}
                shadow-map-type={ VSMShadowMap }
            >
                    {/* <AnimatedCamera
                        ref={ cameraRef }
                        position-x={ cx }
                        position-y={ cy }
                        position-z={ cz }
                        fov={ 17.5 }
                        near={ 1 }
                        far={ 200 }
                        makeDefault 
                    /> */}
                    <fog attach="fog" args={ ["#c1e1fc", 35, 75] }/>
                    <ambientLight 
                        // intensity={ 0.25}
                        intensity={ Math.max(0.48 * state.sun.intensity, 0.05) } 
                        color="#e0ebfc" />
                    <directionalLight 
                        ref={ dirLight } 
                        intensity={ 2.8 * state.sun.intensity }
                        // intensity={ 10 }
                        color={0xfcf2d4} 
                        // color="#fcf2d4" 
                        position={[state.sun.pos_x, state.sun.pos_y, 3]} 
                        lookAt={[0, 0, 0]} 
                        castShadow={ true } 
                        shadow-mapSize-height={ 2048 }
                        shadow-mapSize-width={ 2048 }
                        shadow-radius={ 4 }
                        // shadow-bias={ -0.0008 }
                    >
                        <orthographicCamera attach="shadow-camera" args={[-20, 20, 20, -20]}/>
                    </directionalLight>
                    {/* <directionalLight 
                        ref={ dirLight } 
                        intensity={ 1 } 
                        color="#ffff" 
                        position={[0, 2, 0]} 
                        lookAt={[0, 0, 0]} 
                        castShadow={ true } 
                        shadow-mapSize-height={ 1024 }
                        shadow-mapSize-width={ 1024 }
                        // shadow-bias={ -0.0001 }
                    >
                        <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
                    </directionalLight> */}
                    {
                        (state.activeScreen === Screen.PANORAMIC) &&
                        (
                            <>
                                <Suspense >
                                    <XenterLoader url={ state.api.getModelRoute('scene.gltf') } />
                                </Suspense>
                                <Suspense>
                                    <CityLoader url={ state.api.getModelRoute('./city/city_7.glb') } imgUrl={"./img/xenter-map-texture.png"}/>
                                </Suspense>
                                <Suspense>
                                    <ApartmentLoader url={ state.api.getModelRoute('blocks/scene.glb') }>
                                        <IntApartment3D />
                                    </ApartmentLoader>
                                </Suspense>
                            </>
                        )
                        
                    }
                    {
                        state.activeScreen === Screen.VR &&
                        (
                            <VRLoader url={state.api.getModelRoute(`types/${ApartmentFactory.TOUR[state.currentVR]}/scene.gltf`)}/>
                        )
                        
                    }
                    {
                        // state.activeScreen === Screen.COMPARA && (
                        //     <MultiVRLoader urls={ [ 
                        //         state.api.getModelRoute(`types/${ApartmentFactory.TOUR[state.favorites[0].type]}/scene.gltf`), 
                        //         state.api.getModelRoute(`types/${ApartmentFactory.TOUR[state.favorites[1].type]}/scene.gltf`), 
                        //         state.api.getModelRoute(`types/${ApartmentFactory.TOUR[state.favorites[2].type]}/scene.gltf`), 
                        //     ] }/>
                        // )
                    }
                    
                    <AnimatedOrbitControls 
                        ref={ controls }
                        enablePan={ false }
                        enableDamping={ true } 
                        dampingFactor={ 0.1 } 
                        minDistance={ 2 } 
                        maxDistance={ 44 } 
                        minPolarAngle={ 0 } 
                        maxPolarAngle={ Math.PI * 0.45 }
                        target-x={ tx }
                        target-y={ ty }
                        target-z={ tz }
                        onChange={ enviromentListener } 
                        enabled={ state.controlsEnabled }
                        makeDefault
                        // target={[0, -0.08, 0]}
                    />
                    {/* <Actions /> */}
                {/* <Environment files="./img/royal_esplanade_1k.hdr" /> */}
                <IntSocketEmmiter />
            </Canvas>
        </Wrapper3D>
    );
};

const Wrapper3D = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;