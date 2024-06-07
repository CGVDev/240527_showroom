import { useContext } from "react";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { ButtonWhite, MenuLeftContainer } from "../components/MenuLeft";
import { ControlContext } from "../context/ControlContext";
import { Stage } from "../utils/Stages";
import { ProjectOptions } from "../utils/ProjectOptions";

export const VRActionsView = ()=>{

    const { state, setState } = useContext(ControlContext);

    const setRightMenu = (type)=>{
        setState(state.setStageRightMenu(type));
    }

    const nextStage = (stage)=>{
        setState(state.setStage(stage));
    }
    return(
        <MenuLeftContainer>
            {/* <ButtonPrimary label="Vistas Reales" onClick={ ()=>setRightMenu(ProjectOptions.SORROUNDINGS) } />
            <ButtonPrimary label="Asoleamiento" onClick={ ()=>setRightMenu(ProjectOptions.DAYTIME) } /> */}
            {/* <ButtonPrimary label="Bookmarks" onClick={ ()=>setRightMenu(ProjectOptions.DAYTIME) } /> */}
            {/* <ButtonPrimary label="Cotizar" onClick={ ()=>nextStage(Stage.STAGE_3) } /> */}
        </MenuLeftContainer>
    );
};