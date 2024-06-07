import { useContext } from "react";
import { ApartmentDetailView } from "./ApartmentDetailView";
import { ApartmentListView } from "./ApartmentListView";
import { ControlContext } from "../context/ControlContext";
import { PlaneTourView } from "./PlaneTourView";
import { DetailNavView } from "../components/DetailNavView";
import { VRActionsView } from "./VRActionsView";
import { ProjectOptions } from "../utils/ProjectOptions";
import { ControlDayTimeView } from "./ControlDayTimeView";
import { SorroundingView } from "./SorroundingView";

export const Stage_2 = ()=>{
    const { state } = useContext(ControlContext);

    return(
        <>

            { 
                state.stageLeftMenu && !state.tour && !state.isVRActive && <ApartmentListView />
            }
            { 
                !state.tour && state.isVRActive && <VRActionsView />
            }

            {
                state.tour && <PlaneTourView />
            }
            {
                state.selected.length > 0 && !state.tour && !state.isVRActive && <ApartmentDetailView />
            }
            {
                state.isVRActive && (state.stageRightMenu === ProjectOptions.DAYTIME) && <ControlDayTimeView />
            }
            {
                state.isVRActive && (state.stageRightMenu === ProjectOptions.SORROUNDINGS) && <SorroundingView />
            }
            {
                state.selected.length > 0 && <DetailNavView />
            }

        </>
    );
}