import { useContext, useEffect } from "react";
import { ControlContext } from "../context/ControlContext";
import { Apartment } from "../../utils/Apartment";
import { LoadingView } from "../../containers/LoadingView";
import { LogoContainer } from "../../containers/LogoContainer";
import { Stage } from "../utils/Stages";
import { Stage_1 } from "./Stage_1";
import { Stage_2 } from "./Stage_2";
import { BreadCrumView } from "./BreadCrumView";
import { Stage_3 } from "./Stage_3";
import { Stage_4 } from "./Stage_4";
import { LogoCGVeron } from "../../containers/LogoCGVeron";
import { Stage_5 } from "./Stage_5";

export const ContainerUI = ()=>{

    const { state, setState } = useContext(ControlContext);

    const setStage1 = ()=>{
        setState(state.initStage1());
    }

    useEffect(()=>{
        let request = async()=>{
            let data = await state.api.get();
            let departments  = data.map(({ uuid, type, floor, area, rooms, avaliability, vtUrl })=>{
                return new Apartment(uuid, type, floor, area, rooms, vtUrl, avaliability, uuid);
            });
            setState(prev=>prev.setApartments(departments));
        }

        request();

    }, []);

    return(
        <>  
            <LoadingView />
            <LogoContainer img={ "./img/immersive_logo.png" } onClick={ ()=>{ setStage1() } } />
            <LogoCGVeron img={ "./img/cgveron_logo.png" } />
            {
                state.stage === Stage.STAGE_1 && <Stage_1 />
            }
            {
                state.stage === Stage.STAGE_2 && <Stage_2 />            
            }
            {
                state.stage === Stage.STAGE_3 && <Stage_3 />            
            }
            {
                state.stage === Stage.STAGE_4 && <Stage_4 />            
            }
            {
                state.stage === Stage.STAGE_5 && <Stage_5 />            
            }
            <BreadCrumView />
            
        </>
    );
}
