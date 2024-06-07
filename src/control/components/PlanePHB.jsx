import styled from "styled-components";
import { ApartmentFactory } from "../../utils/ApartmentFactory";

export const PlanePHB = ({ action })=>{

    return(
        <PlaneContainer>
            <PlaneWrapper>
                <ImageContainer>
                    <PlaneImg src="./img/PH-B.png" draggable={false} />
                    <svg  x="0px" y="0px" viewBox="0 0 800 1150"  draggable={ false } >
                        <g id="cocina_p" onClick={()=>action(ApartmentFactory.TYPOLOGY.PHB, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.PHB].ROOMS[ApartmentFactory.ROOMS.COCINA])}>
                            <g className="st0">
                                <path className="st1" d="M372.8,800.9h-25.7c-6.4,0-11.5-5.2-11.5-11.5v-25.7c0-6.4,5.2-11.5,11.5-11.5h25.7c6.4,0,11.5,5.2,11.5,11.5
                                    v25.7C384.4,795.7,379.2,800.9,372.8,800.9z"/>
                                <path className="st2" d="M372.8,803.4h-25.7c-7.7,0-14-6.3-14-14v-25.7c0-7.7,6.3-14,14-14h25.7c7.7,0,14,6.3,14,14v25.7
                                    C386.9,797.1,380.6,803.4,372.8,803.4z M347.2,754.6c-5,0-9,4.1-9,9v25.7c0,5,4.1,9,9,9h25.7c5,0,9-4.1,9-9v-25.7c0-5-4.1-9-9-9
                                    H347.2z"/>
                            </g>
                        </g>
                        <g id="cocina_s" onClick={()=>action(ApartmentFactory.TYPOLOGY.PHB, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.PHB].ROOMS[ApartmentFactory.ROOMS.COCINA_S])}>
                            <g className="st0">
                                <path className="st1" d="M204.8,800.9h-25.7c-6.4,0-11.5-5.2-11.5-11.5v-25.7c0-6.4,5.2-11.5,11.5-11.5h25.7c6.4,0,11.5,5.2,11.5,11.5
                                    v25.7C216.4,795.7,211.2,800.9,204.8,800.9z"/>
                                <path className="st2" d="M204.8,803.4h-25.7c-7.7,0-14-6.3-14-14v-25.7c0-7.7,6.3-14,14-14h25.7c7.7,0,14,6.3,14,14v25.7
                                    C218.9,797.1,212.6,803.4,204.8,803.4z M179.2,754.6c-5,0-9,4.1-9,9v25.7c0,5,4.1,9,9,9h25.7c5,0,9-4.1,9-9v-25.7c0-5-4.1-9-9-9
                                    H179.2z"/>
                            </g>
                        </g>
                        <g id="sala_p" onClick={()=>action(ApartmentFactory.TYPOLOGY.PHB, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.PHB].ROOMS[ApartmentFactory.ROOMS.SALA_P])}>
                            <g className="st0">
                                <path className="st1" d="M468.5,688.9h-25.7c-6.4,0-11.5-5.2-11.5-11.5v-25.7c0-6.4,5.2-11.5,11.5-11.5h25.7c6.4,0,11.5,5.2,11.5,11.5
                                    v25.7C480,683.7,474.8,688.9,468.5,688.9z"/>
                                <path className="st2" d="M468.5,691.4h-25.7c-7.7,0-14-6.3-14-14v-25.7c0-7.7,6.3-14,14-14h25.7c7.7,0,14,6.3,14,14v25.7
                                    C482.5,685.1,476.2,691.4,468.5,691.4z M442.8,642.6c-5,0-9,4.1-9,9v25.7c0,5,4.1,9,9,9h25.7c5,0,9-4.1,9-9v-25.7c0-5-4.1-9-9-9
                                    H442.8z"/>
                            </g>
                        </g>
                        <g id="sala_s" onClick={()=>action(ApartmentFactory.TYPOLOGY.PHB, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.PHB].ROOMS[ApartmentFactory.ROOMS.SALA_S])}>
                            <g className="st0">
                                <path className="st1" d="M581.5,422.9h-25.7c-6.4,0-11.5-5.2-11.5-11.5v-25.7c0-6.4,5.2-11.5,11.5-11.5h25.7c6.4,0,11.5,5.2,11.5,11.5
                                    v25.7C593,417.7,587.8,422.9,581.5,422.9z"/>
                                <path className="st2" d="M581.5,425.4h-25.7c-7.7,0-14-6.3-14-14v-25.7c0-7.7,6.3-14,14-14h25.7c7.7,0,14,6.3,14,14v25.7
                                    C595.5,419.1,589.2,425.4,581.5,425.4z M555.8,376.6c-5,0-9,4.1-9,9v25.7c0,5,4.1,9,9,9h25.7c5,0,9-4.1,9-9v-25.7c0-5-4.1-9-9-9
                                    H555.8z"/>
                            </g>
                        </g>
                        <g id="recamara_p" onClick={()=>action(ApartmentFactory.TYPOLOGY.PHB, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.PHB].ROOMS[ApartmentFactory.ROOMS.RECAMARA_S])}>
                            <g className="st0">
                                <path className="st1" d="M283.5,405.9h-25.7c-6.4,0-11.5-5.2-11.5-11.5v-25.7c0-6.4,5.2-11.5,11.5-11.5h25.7c6.4,0,11.5,5.2,11.5,11.5
                                    v25.7C295,400.7,289.8,405.9,283.5,405.9z"/>
                                <path className="st2" d="M283.5,408.4h-25.7c-7.7,0-14-6.3-14-14v-25.7c0-7.7,6.3-14,14-14h25.7c7.7,0,14,6.3,14,14v25.7
                                    C297.5,402.1,291.2,408.4,283.5,408.4z M257.8,359.6c-5,0-9,4.1-9,9v25.7c0,5,4.1,9,9,9h25.7c5,0,9-4.1,9-9v-25.7c0-5-4.1-9-9-9
                                    H257.8z"/>
                            </g>
                        </g>
                        <g id="bano_p" onClick={()=>action(ApartmentFactory.TYPOLOGY.PHB, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.PHB].ROOMS[ApartmentFactory.ROOMS.BANO_P])}>
                            <g className="st0">
                                <path className="st1" d="M620.5,231.9h-25.7c-6.4,0-11.5-5.2-11.5-11.5v-25.7c0-6.4,5.2-11.5,11.5-11.5h25.7c6.4,0,11.5,5.2,11.5,11.5
                                    v25.7C632,226.7,626.8,231.9,620.5,231.9z"/>
                                <path className="st2" d="M620.5,234.4h-25.7c-7.7,0-14-6.3-14-14v-25.7c0-7.7,6.3-14,14-14h25.7c7.7,0,14,6.3,14,14v25.7
                                    C634.5,228.1,628.2,234.4,620.5,234.4z M594.8,185.6c-5,0-9,4.1-9,9v25.7c0,5,4.1,9,9,9h25.7c5,0,9-4.1,9-9v-25.7c0-5-4.1-9-9-9
                                    H594.8z"/>
                            </g>
                        </g>
                        <g id="recamara_s" onClick={()=>action(ApartmentFactory.TYPOLOGY.PHB, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.PHB].ROOMS[ApartmentFactory.ROOMS.RECAMARA_T])}>
                            <g className="st0">
                                <path className="st1" d="M288.5,258.8h-25.7c-6.4,0-11.5-5.2-11.5-11.5v-25.7c0-6.4,5.2-11.5,11.5-11.5h25.7c6.4,0,11.5,5.2,11.5,11.5
                                    v25.7C300,253.6,294.8,258.8,288.5,258.8z"/>
                                <path className="st2" d="M288.5,261.3h-25.7c-7.7,0-14-6.3-14-14v-25.7c0-7.7,6.3-14,14-14h25.7c7.7,0,14,6.3,14,14v25.7
                                    C302.5,255,296.2,261.3,288.5,261.3z M262.8,212.5c-5,0-9,4.1-9,9v25.7c0,5,4.1,9,9,9h25.7c5,0,9-4.1,9-9v-25.7c0-5-4.1-9-9-9
                                    H262.8z"/>
                            </g>
                        </g>
                        <g id="bano_s" onClick={()=>action(ApartmentFactory.TYPOLOGY.PHB, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.PHB].ROOMS[ApartmentFactory.ROOMS.BANO_T])}>
                            <g className="st0">
                                <path className="st1" d="M475.1,155.8h-25.7c-6.4,0-11.5-5.2-11.5-11.5v-25.7c0-6.4,5.2-11.5,11.5-11.5h25.7c6.4,0,11.5,5.2,11.5,11.5
                                    v25.7C486.6,150.6,481.4,155.8,475.1,155.8z"/>
                                <path className="st2" d="M475.1,158.3h-25.7c-7.7,0-14-6.3-14-14v-25.7c0-7.7,6.3-14,14-14h25.7c7.7,0,14,6.3,14,14v25.7
                                    C489.1,152,482.8,158.3,475.1,158.3z M449.4,109.5c-5,0-9,4.1-9,9v25.7c0,5,4.1,9,9,9h25.7c5,0,9-4.1,9-9v-25.7c0-5-4.1-9-9-9
                                    H449.4z"/>
                            </g>
                        </g>
                    </svg>
                </ImageContainer>
            </PlaneWrapper>
        </PlaneContainer>

    );
}

const PlaneContainer = styled.section`
    width: 100%;
    height: 0;
    padding-bottom: 69%;
    position: relative;
    transform: scale(0.8) rotate(90deg);
`;

const PlaneWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: center;
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;

    svg{
        width: 100%;
        object-fit: cover;
        transform-origin: center center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        .st0{
            transform-origin: center bottom;
            transform: scale(1.0);
            transition: transform 0.25s ease-out;

            &:hover{
                transform: scale(1.02);
            }
        }

        .st1{
            fill:#4AC0B1;
            fill-opacity: 0.8;
        }

        .st2{
            fill:#FFFFFF;
        }
    }
`;

const PlaneImg = styled.img`
    width: 100%;
    object-fit: cover;
    transform-origin: center center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;