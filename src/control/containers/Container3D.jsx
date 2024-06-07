import { Suspense, useContext } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { animated as a, useSpring } from "@react-spring/three";
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { ACESFilmicToneMapping, SRGBColorSpace, VSMShadowMap } from "three";
import { XenterLoader } from "../components/XenterLoader";
import { ApartmentLoader } from "../../components/ApartmentLoader";
import { ControlContext } from "../context/ControlContext";
import { VRLoader } from "../components/VRLoader";
import { ApartmentFactory } from "../../utils/ApartmentFactory";
import { LoadingView } from "../../containers/LoadingView";
import { Apartment3D } from "../components/Apartment3D";
import { MenuDial } from "../../components/MenuDial";
import { RadialMenuView } from "./RadialMenuView";
import { ProjectOptions } from "../utils/ProjectOptions";
import { AmenitiesOptions } from "../utils/AmenitiesOptions";
import { Stage } from "../utils/Stages";
import { Content3DStage1 } from "../components/Content3DStage1";
import { Content3DStage2 } from "../components/Content3DStage2";
import { Content3DStage3 } from "../components/Content3DStage3";
import { Content3DStage5 } from "./Content3DStage5";

export const Container3D = ()=>{

    const { state } = useContext(ControlContext);

    return(
        <>
            { 
                state.stage === Stage.STAGE_1 && <Content3DStage1 />
            }
            { 
                (state.stage === Stage.STAGE_2 || state.stage === Stage.STAGE_3) && <Content3DStage2 />
            }
            {
                state.stage === Stage.STAGE_5 && <Content3DStage5 />
            }
        </>
        
    );
};