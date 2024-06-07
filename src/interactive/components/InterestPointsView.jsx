import { animated as a, useSpring } from "@react-spring/three";
import { useContext } from "react";
import { InteractiveContext } from "../context/InteractiveContext";
import { InterestPoint } from "../../utils/InteresPoint";

export const InterestPointsView = ({ points })=>{
    
    const { state } = useContext(InteractiveContext);

    // const { tagState, setTagState } = useContext(TagContext);

    const spring = useSpring({
        from:{
            posX: 1
        },
        to:{
            posX: 0
        },
        loop: true,
        config:{
            duration: 500,
            loop: true
        }
    });

    // console.log(points);


    return(
        <group position={[0.25, -0.65, -0.1]} scale={0.93}>
            {
                state.interestPoint === InterestPoint.HOSPITAL && (
                    <>
                        <a.mesh position={[0,0,0]} geometry={ points.h_espanol.geometry } castShadow receiveShadow >
                            <a.meshPhysicalMaterial color={0xF50057} metalness={ 0 } roughness={ 0 } transmission={ 0.3 } />
                        </a.mesh>
                        <mesh geometry={ points.h_legaria.geometry } castShadow receiveShadow >
                            <a.meshPhysicalMaterial color={0xF50057} metalness={ 0 } roughness={ 0 } transmission={ 0.3 } />
                        </mesh>
                    </>
                )
            }
            {
                state.interestPoint === InterestPoint.STORE && (
                    <>
                        <mesh geometry={ points.aurrera_1.geometry } castShadow receiveShadow >
                            <a.meshPhysicalMaterial color={0x0268a0} metalness={ 0 } roughness={ 0 } transmission={ 0.3 } />
                        </mesh>
                        <mesh geometry={ points.aurrera_2.geometry } castShadow receiveShadow >
                            <a.meshPhysicalMaterial color={0x0268a0} metalness={ 0 } roughness={ 0 } transmission={ 0.3 } />
                        </mesh>
                        <mesh geometry={ points.sams_club_polanco.geometry } castShadow receiveShadow >
                            <a.meshPhysicalMaterial color={0x0268a0} metalness={ 0 } roughness={ 0 } transmission={ 0.3 } />
                        </mesh>
                        <mesh geometry={ points.plaza_estrellas.geometry } castShadow receiveShadow position={[0, 0.2, 0]}>
                            <a.meshPhysicalMaterial color={0xc79f54} metalness={ 0 } roughness={ 0 } transmission={ 0.3 } />
                        </mesh>
                        <mesh geometry={ points.parques_polanco.geometry } castShadow receiveShadow position={[0, 0.2, 0]}>
                            <a.meshPhysicalMaterial color={0xc79f54} metalness={ 0 } roughness={ 0 } transmission={ 0.3 } />
                        </mesh>
                        <mesh geometry={ points.antara.geometry } castShadow receiveShadow >
                            <a.meshPhysicalMaterial color={0xc79f54} metalness={ 0 } roughness={ 0 } transmission={ 0.3 } />
                        </mesh>
                        <mesh geometry={ points.liverpool.geometry } castShadow receiveShadow position={[0, 0.2, 0]}>
                            <a.meshPhysicalMaterial color={0xc79f54} metalness={ 0 } roughness={ 0 } transmission={ 0.3 } />
                        </mesh>
                        <mesh geometry={ points.miyana.geometry } castShadow receiveShadow position={[0, 0.2, 0]}>
                            <a.meshPhysicalMaterial color={0xc79f54} metalness={ 0 } roughness={ 0 } transmission={ 0.3 } />
                        </mesh>
                    </>
                )
            }
            {
                state.interestPoint === InterestPoint.PARK && (
                    <>
                        <mesh geometry={ points.parque_lincoln.geometry } castShadow receiveShadow position={[0, 0.2, 0]}>
                            <a.meshPhysicalMaterial color={0x64DD17} metalness={ 0 } roughness={ 0 } transmission={ 0.3 } />
                        </mesh>
                        <mesh geometry={ points.parque_saleciano.geometry } castShadow receiveShadow position={[0, 0.2, 0]}>
                            <a.meshPhysicalMaterial color={0x64DD17} metalness={ 0 } roughness={ 0 } transmission={ 0.3 } />
                        </mesh>
                        <mesh geometry={ points.parque_canitas.geometry } castShadow receiveShadow position={[0, 0.2, 0]}>
                            <a.meshPhysicalMaterial color={0x64DD17} metalness={ 0 } roughness={ 0 } transmission={ 0.3 } />
                        </mesh>
                    </>
                )
            }
            {
                state.interestPoint === InterestPoint.SUBWAY && (
                    <group position={[0, -0.6, 0]}>
                        <mesh geometry={ points.m_cuitlahuac.geometry } castShadow receiveShadow position={[0, 0.2, 0]}>
                            <a.meshPhysicalMaterial color={0xFF8F00} metalness={ 0 } roughness={ 0 } transmission={ 0.3 } />
                        </mesh>
                        <mesh geometry={ points.m_colegio.geometry } castShadow receiveShadow position={[0, 0.2, 0]}>
                            <a.meshPhysicalMaterial color={0xFF8F00} metalness={ 0 } roughness={ 0 } transmission={ 0.3 } />
                        </mesh>
                        <mesh geometry={ points.m_normal.geometry } astShadow receiveShadow position={[0, 0.2, 0]}>
                            <a.meshPhysicalMaterial color={0xFF8F00} metalness={ 0 } roughness={ 0 } transmission={ 0.3 } />
                        </mesh>
                        <mesh geometry={ points.m_polanco.geometry } castShadow receiveShadow position={[0, 0.6, 0]}>
                            <a.meshPhysicalMaterial color={0xFF8F00} metalness={ 0 } roughness={ 0 } transmission={ 0.3 } />
                        </mesh>
                        <mesh geometry={ points.m_popotla.geometry } castShadow receiveShadow position={[0, 0.2, 0]}>
                            <a.meshPhysicalMaterial color={0xFF8F00} metalness={ 0 } roughness={ 0 } transmission={ 0.3 } />
                        </mesh>
                        <mesh geometry={ points.m_sn_cosme.geometry } castShadow receiveShadow position={[0, 0.2, 0]}>
                            <a.meshPhysicalMaterial color={0xFF8F00} metalness={ 0 } roughness={ 0 } transmission={ 0.3 } />
                        </mesh>
                        <mesh geometry={ points.m_sn_joa.geometry } castShadow receiveShadow position={[0, 0.2, 0]}>
                            <a.meshPhysicalMaterial color={0xFF8F00} metalness={ 0 } roughness={ 0 } transmission={ 0.3 } />
                        </mesh>
                        <mesh geometry={ points.m_tacuba.geometry } castShadow receiveShadow position={[0, 0.2, 0]}>
                            <a.meshPhysicalMaterial color={0xFF8F00} metalness={ 0 } roughness={ 0 } transmission={ 0.3 } />
                        </mesh>
                    </group>
                )
            }
            {
                state.interestPoint === InterestPoint.ENTERTAINMENT && (
                    <>
                        <mesh geometry={ points.teatro_ofelia.geometry } castShadow receiveShadow position={[0, 0.2, 0]}>
                            <a.meshPhysicalMaterial color={0x9b51e0} metalness={ 0 } roughness={ 0 } transmission={ 0.3 } />
                        </mesh>
                        <mesh geometry={ points.mu_antropologia.geometry } castShadow receiveShadow position={[0, 0.2, 0]}>
                            <a.meshPhysicalMaterial color={0x9b51e0} metalness={ 0 } roughness={ 0 } transmission={ 0.3 } />
                        </mesh>
                        <mesh geometry={ points.revolucion.geometry } castShadow receiveShadow position={[0, 0.2, 0]}>
                            <a.meshPhysicalMaterial color={0x9b51e0} metalness={ 0 } roughness={ 0 } transmission={ 0.3 } />
                        </mesh>
                    </>    

                )
                
            }
        </group>
    );
};
