import { Suspense, useContext } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { animated as a } from "@react-spring/three";
import { OrbitControls } from "@react-three/drei";
import { ACESFilmicToneMapping, SRGBColorSpace, VSMShadowMap } from "three";
import { XenterLoader } from "../components/XenterLoader";
import { ApartmentLoader } from "../../components/ApartmentLoader";
import { ControlContext } from "../context/ControlContext";
import { ProjectOptions } from "../utils/ProjectOptions";
import { AmenitiesOptions } from "../utils/AmenitiesOptions";
import { Stage } from "../utils/Stages";
import { RadialMenuView } from "../containers/RadialMenuView";
import { Amenities3D } from "./Amenities3D";
import { Observer } from "./Observer";

export const Content3DStage3 = ()=>{

    const AnimatedOrbitControls = a(OrbitControls);

    const { state, setState } = useContext(ControlContext);

    const changeRadialProjectOption = (type)=>{
        setState(state.setRadialProjectOption(type));
    }

    const changeRadialAmenitiesOption = (type)=>{
        setState(state.setRadialAmenitiesOption(type));
    }

    return(
        <Main3D>
            <Content3D>
                {
                    state.radialProject && state.stage === Stage.STAGE_1 && <RadialMenuView tickitems={[ ProjectOptions.INTEREST, ProjectOptions.DAYTIME, ProjectOptions.ROUTES ] } callback={ changeRadialProjectOption }/>
                }
                {
                    state.radialAmenities && state.stage === Stage.STAGE_1 && <RadialMenuView tickitems={[ AmenitiesOptions.PLACES, AmenitiesOptions.PLANES, AmenitiesOptions.STILLS ] } callback={ changeRadialAmenitiesOption }/>
                }
                <PreWrapper>
                <Wrapper3D>
                    <Canvas
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
                            !state.isVRActive
                            ?(
                                <>
                                    <Suspense>
                                        <XenterLoader url={ state.api.getModelRoute('building_old/scene.gltf') }/>
                                    </Suspense>
                                    <Suspense>
                                        <ApartmentLoader url={ state.api.getModelRoute('blocks/scene.glb') }>
                                            <Amenities3D />
                                        </ApartmentLoader>
                                    </Suspense>
                                </>
                            )
                            : null
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
                                makeDefault
                            />
                            <Observer />
                    </Canvas>
                </Wrapper3D>

                </PreWrapper>
            </Content3D>
        </Main3D>
        
    );
};

const Main3D = styled.div`
    width: 40%;
    max-width: 70dvh;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content3D = styled.div`
    width: 100%;
    height: 0%;
    padding-bottom: 100%;
    position: relative;
`;

const PreWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Wrapper3D = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
`;