import { Suspense, useContext, useRef } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { animated as a } from "@react-spring/three";
import { OrbitControls } from "@react-three/drei";
import { ACESFilmicToneMapping, SRGBColorSpace, VSMShadowMap } from "three";
import { XenterLoader } from "../components/XenterLoader";
import { ApartmentLoader } from "../../components/ApartmentLoader";
import { ControlContext } from "../context/ControlContext";
import { VRLoader } from "../components/VRLoader";
import { ApartmentFactory } from "../../utils/ApartmentFactory";
import { Apartment3D } from "../components/Apartment3D";
import { SunnyLoader } from "../../components/SunnyLoader";
import { Observer } from "./Observer";
import { useGesture } from "@use-gesture/react";
import { Stage } from "../utils/Stages";
import { ProjectOptions } from "../utils/ProjectOptions";

export const Content3DStage2 = ()=>{

    const AnimatedOrbitControls = a(OrbitControls);

    const { state } = useContext(ControlContext);

    return(
        <Main3D>
                    <Canvas
                        className="bg-white"
                        // ref={ canvasRef }
                        gl={ { 
                            antialias: true, 
                            outputColorSpace: SRGBColorSpace,
                            toneMapping: ACESFilmicToneMapping,
                            toneMappingExposure: 1
                        } }
                        camera={{ position: [10, 12, -10], fov: 17.5, near: 0.2, far: 100 }} 
                        dpr={[1,2]}
                        shadows="soft"
                        tone-mapping={ ACESFilmicToneMapping }
                        shadow-map-type={ VSMShadowMap }
                    >
                        {
                            state.stage === Stage.STAGE_2 && !state.isVRActive  && (!state.tour) && (
                                <>
                                    <Suspense>
                                        <XenterLoader url={ state.api.getModelRoute('building_old/scene.gltf') }/>
                                    </Suspense>
                                    <Suspense>
                                        <ApartmentLoader url={ state.api.getModelRoute('blocks/scene.glb') }>
                                            <Apartment3D />
                                        </ApartmentLoader>
                                    </Suspense>
                                </>
                            )
                        }
                        {
                            state.stage === Stage.STAGE_2 && state.isVRActive && state.stageRightMenu !== ProjectOptions.DAYTIME  && (!state.tour) && (
                                <Suspense>
                                    <VRLoader url={ state.api.getModelRoute(`types/${ApartmentFactory.TOUR[state.selected[0].type]}/scene.gltf`) } />
                                </Suspense>
                            )
                        }
                        {
                            state.isVRActive && state.stageRightMenu === ProjectOptions.DAYTIME && (
                                <>
                                    <Suspense>
                                        <SunnyLoader url={ state.api.getModelRoute(`solid/${ApartmentFactory.TOUR[state.selected[0].type]}/scene.glb`) } />
                                    </Suspense>
                                    
                                </>
                            )
                        }
                        
                        {/* {
                            state.stage === Stage.STAGE_3 && (
                                    <Suspense>
                                        <MultiVRLoader 
                                            urls={ state.favorites.map((fav)=>{
                                                return state.api.getModelRoute(`types/${ApartmentFactory.TOUR[fav.type]}/scene.gltf`)
                                            })}
                                        />
                                    </Suspense>
                                )
                        } */}
                        {
                            state.stage === Stage.STAGE_3 && (
                                <>
                                    <Suspense>
                                        <XenterLoader url={ state.api.getModelRoute('building_old/scene.gltf') }/>
                                    </Suspense>
                                    <Suspense>
                                        <ApartmentLoader url={ state.api.getModelRoute('blocks/scene.glb') }>
                                            <Apartment3D />
                                        </ApartmentLoader>
                                    </Suspense>
                                </>
                            )
                        }
                        <AnimatedOrbitControls 
                                enablePan={ false }
                                enableDamping={ true } 
                                dampingFactor={ 0.1 } 
                                minDistance={ 7.5 } 
                                maxDistance={ 7.5 } 
                                minPolarAngle={ 0 } 
                                maxPolarAngle={ Math.PI * 0.45 }
                                // target-x={ tx }
                                // target-y={ ty }
                                // target-z={ tz }
                                enabled={ state.enabledControls }
                                makeDefault
                            />
                        <Observer />
                    </Canvas>
            
        </Main3D>
        
    );
};

const Main3D = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;