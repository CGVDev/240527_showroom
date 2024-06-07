import { useGraph, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three-stdlib";
import { FloorPosition } from "../utils/FloorPosition";
import { ApartmentFactory } from "../utils/ApartmentFactory";  
import { useEffect } from "react";
import { Apartment3D } from "../control/components/Apartment3D";
import { IntApartment3D } from "../interactive/components/IntApartment3D";
import { AmenityFactory } from "../utils/AmenityFactory";

export const ApartmentLoader = ({ url, children })=>{

    const apartment = useLoader(GLTFLoader, url);
    const { nodes } = useGraph(apartment.scene);

    useEffect(()=>{

        FloorPosition.addPosition(FloorPosition.FPB, nodes.p_b);
        FloorPosition.addPosition(FloorPosition.F01, nodes.p_1);
        FloorPosition.addPosition(FloorPosition.F02, nodes.p_2);
        FloorPosition.addPosition(FloorPosition.F03, nodes.p_3);
        FloorPosition.addPosition(FloorPosition.F04, nodes.p_4);
        FloorPosition.addPosition(FloorPosition.F05, nodes.p_5);
        FloorPosition.addPosition(FloorPosition.F06, nodes.p_6);
        FloorPosition.addPosition(FloorPosition.F07, nodes.p_7);
        FloorPosition.addPosition(FloorPosition.F08, nodes.p_8);
        FloorPosition.addPosition(FloorPosition.F09, nodes.p_9);
        FloorPosition.addPosition(FloorPosition.F10, nodes.p_10);
        FloorPosition.addPosition(FloorPosition.F11, nodes.p_11);
        FloorPosition.addPosition(FloorPosition.F12, nodes.p_12);
        FloorPosition.addPosition(FloorPosition.F13, nodes.p_13);
        FloorPosition.addPosition(FloorPosition.F14, nodes.p_14);
        FloorPosition.addPosition(FloorPosition.FPH, nodes.r_t);

        new ApartmentFactory()
            .addGeometry(ApartmentFactory.T01, nodes.T1)
            .addGeometry(ApartmentFactory.T02, nodes.T2)
            .addGeometry(ApartmentFactory.T03, nodes.T3)
            .addGeometry(ApartmentFactory.T04, nodes.T4)
            .addGeometry(ApartmentFactory.T05, nodes.T5)
            .addGeometry(ApartmentFactory.T06, nodes.T6)
            .addGeometry(ApartmentFactory.T07, nodes.T7)
            .addGeometry(ApartmentFactory.T08, nodes.T8)
            .addGeometry(ApartmentFactory.T09, nodes.T9)
            .addGeometry(ApartmentFactory.T10, nodes.T10)
            .addGeometry(ApartmentFactory.T11, nodes.T11)
            .addGeometry(ApartmentFactory.T12, nodes.T12)
            .addGeometry(ApartmentFactory.T13, nodes.T13)
            .addGeometry(ApartmentFactory.T13N2, nodes.T13N2)
            .addGeometry(ApartmentFactory.T14, nodes.T14)
            .addGeometry(ApartmentFactory.T15, nodes.T15)
            .addGeometry(ApartmentFactory.T16, nodes.T16)
            .addGeometry(ApartmentFactory.T16N2, nodes.T16N2)
            .addGeometry(ApartmentFactory.T17, nodes.T17)
            .addGeometry(ApartmentFactory.T18, nodes.T18)
            .addGeometry(ApartmentFactory.TPH_A, nodes["PH_A"])
            .addGeometry(ApartmentFactory.TPH_B, nodes["PH_B"])
            .addGeometry(ApartmentFactory.TPH_C, nodes["PH_C"])
            .addGeometry(ApartmentFactory.CUTTER, nodes.cutter);
            
        new AmenityFactory()
            .addGeometry(ApartmentFactory.A_GYM, nodes.gimnacio)
            .addGeometry(ApartmentFactory.A_LUDOTECA, nodes.ludoteca)
            .addGeometry(ApartmentFactory.A_ROOF, nodes.roof_top)
            .addGeometry(ApartmentFactory.A_SALON, nodes.salon)
            .addGeometry(ApartmentFactory.A_S_LOUNGE, nodes.social_lounge)
            .addGeometry(ApartmentFactory.A_S_PLAY, nodes.social_play)
            .addGeometry(ApartmentFactory.A_S_WORK, nodes.social_work)
            .addGeometry(ApartmentFactory.A_SUM, nodes.sum)
            .addGeometry(ApartmentFactory.A_TERRAZA, nodes.terraza)
            .addGeometry(ApartmentFactory.A_WELLNESS, nodes.wellness);
            
    }, [nodes])
 
    return(
        <group position={ [-0.16, -0.4558, 0.21] } scale={ 0.93 } rotation={ [0, Math.PI, 0] }>
            { children }
        </group>
    );
};

