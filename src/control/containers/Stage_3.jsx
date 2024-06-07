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
import { FavoritesListView } from "./FavoritesListView";

export const Stage_3 = ()=>{
    const { state } = useContext(ControlContext);

    return(
        <>

            {
                state.stageLeftMenu === ProjectOptions.FAVORITES_LIST && <FavoritesListView />
            }

        </>
    );
}