import { useGraph, useLoader, useThree } from "@react-three/fiber"
import { Box3, DoubleSide, FrontSide, Group, TextureLoader, TwoPassDoubleSide, Vector3 } from "three";
import { GLTFLoader, RGBELoader } from "three-stdlib";
import { useContext, useEffect, useRef, useState } from "react";
import { DepartmentFactory } from "../utils/DepartmentFactory";
import { FloorPosition } from "../utils/FloorPosition";
import { CityView } from "./CityView";
import { InterestPointsView } from "./InterestPointsView";

export const CityLoader = ({ url, imgUrl })=>{

    const { gl } = useThree();

    const model = useLoader(GLTFLoader, url);
    const { nodes } = useGraph(model.scene);

    const points = {
        antara: nodes.antara,
        aurrera_1: nodes.aurrera_1,
        aurrera_2: nodes.aurrera_2,
        h_espanol: nodes.h_espanol,
        h_legaria: nodes.h_legaria,
        liverpool: nodes.liverpool,
        m_cuitlahuac: nodes.m_cuitlahuac,
        m_normal: nodes.m_normal,
        m_polanco: nodes.m_polanco,
        m_popotla: nodes.m_popotla,
        m_sn_cosme: nodes.m_sn_cosme,
        m_sn_joa: nodes.m_sn_joa,
        m_tacuba: nodes.m_tacuba,
        m_colegio: nodes.m_colegio,
        miyana: nodes.miyana,
        plaza_estrellas: nodes.plaza_estrellas,
        revolucion: nodes.revolucion,
        sams_club_polanco: nodes.sams_club_polanco,
        soumaya: nodes.soumaya,
        parque_lincoln: nodes.parque_lincoln,
        parque_saleciano: nodes.parque_saleciano,
        parque_canitas: nodes.parque_canitas,
        parques_polanco: nodes.parques_polanco,
        mu_antropologia: nodes.mu_antropologia,
        teatro_ofelia: nodes.teatro_ofelia
        
    }

    const mapTexture = useLoader(TextureLoader, imgUrl);
    mapTexture.flipY = false;
    mapTexture.anisotropy = gl.capabilities.getMaxAnisotropy();

    return(
        <>
            <CityView cityGeometry={ nodes.city.geometry } mapGeometry={ nodes.map.geometry } mapTexture={ mapTexture } />
            <InterestPointsView points={ points } />
        </>
    );
}