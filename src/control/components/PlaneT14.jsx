import styled from "styled-components";
import { ApartmentFactory } from "../../utils/ApartmentFactory";

export const PlaneT14 = ({ action })=>{

    return(
        <PlaneContainer>
            <PlaneWrapper>
                <ImageContainer>
                    <PlaneImg src="./img/T14.png" draggable={ false } />
                    <svg  x="0px" y="0px" viewBox="0 0 800 800"  draggable={ false } >
                        <g id="cocina" onClick={()=>action(ApartmentFactory.TYPOLOGY.T14, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.T14].ROOMS[ApartmentFactory.ROOMS.COCINA])} >
                            <g className="st0">
                                <path className="st1" d="M439.3,655.1h-24.5c-3.5,0-6.3-2.8-6.3-6.3v-24.5c0-3.5,2.8-6.3,6.3-6.3h24.5c3.5,0,6.3,2.8,6.3,6.3v24.5
                                    C445.6,652.3,442.8,655.1,439.3,655.1z"/>
                                <path className="st2" d="M436.8,657h-19.6c-5.9,0-10.7-4.8-10.7-10.7v-19.6c0-5.9,4.8-10.7,10.7-10.7h19.6c5.9,0,10.7,4.8,10.7,10.7
                                    v19.6C447.5,652.2,442.7,657,436.8,657z M417.2,619.8c-3.8,0-6.9,3.1-6.9,6.9v19.6c0,3.8,3.1,6.9,6.9,6.9h19.6
                                    c3.8,0,6.9-3.1,6.9-6.9v-19.6c0-3.8-3.1-6.9-6.9-6.9H417.2z"/>
                            </g>
                        </g>
                        <g id="bano_p" onClick={()=>action(ApartmentFactory.TYPOLOGY.T14, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.T14].ROOMS[ApartmentFactory.ROOMS.BANO_P])} >
                            <g className="st0">
                                <path className="st1" d="M659.3,673.7h-24.5c-3.5,0-6.3-2.8-6.3-6.3v-24.5c0-3.5,2.8-6.3,6.3-6.3h24.5c3.5,0,6.3,2.8,6.3,6.3v24.5
                                    C665.6,670.9,662.8,673.7,659.3,673.7z"/>
                                <path className="st2" d="M656.8,675.6h-19.6c-5.9,0-10.7-4.8-10.7-10.7v-19.6c0-5.9,4.8-10.7,10.7-10.7h19.6c5.9,0,10.7,4.8,10.7,10.7
                                    v19.6C667.5,670.8,662.7,675.6,656.8,675.6z M637.2,638.4c-3.8,0-6.9,3.1-6.9,6.9v19.6c0,3.8,3.1,6.9,6.9,6.9h19.6
                                    c3.8,0,6.9-3.1,6.9-6.9v-19.6c0-3.8-3.1-6.9-6.9-6.9H637.2z"/>
                            </g>
                        </g>
                        <g id="recamara_p" onClick={()=>action(ApartmentFactory.TYPOLOGY.T14, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.T14].ROOMS[ApartmentFactory.ROOMS.RECAMARA_P])} >
                            <g className="st0">
                                <path className="st1" d="M564.3,393.6h-24.5c-3.5,0-6.3-2.8-6.3-6.3v-24.5c0-3.5,2.8-6.3,6.3-6.3h24.5c3.5,0,6.3,2.8,6.3,6.3v24.5
                                    C570.6,390.8,567.8,393.6,564.3,393.6z"/>
                                <path className="st2" d="M561.8,395.5h-19.6c-5.9,0-10.7-4.8-10.7-10.7v-19.6c0-5.9,4.8-10.7,10.7-10.7h19.6c5.9,0,10.7,4.8,10.7,10.7
                                    v19.6C572.5,390.7,567.7,395.5,561.8,395.5z M542.2,358.3c-3.8,0-6.9,3.1-6.9,6.9v19.6c0,3.8,3.1,6.9,6.9,6.9h19.6
                                    c3.8,0,6.9-3.1,6.9-6.9v-19.6c0-3.8-3.1-6.9-6.9-6.9H542.2z"/>
                            </g>
                        </g>
                        <g id="sala" onClick={()=>action(ApartmentFactory.TYPOLOGY.T14, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.T14].ROOMS[ApartmentFactory.ROOMS.SALA_P])} >
                            <g className="st0">
                                <path className="st1" d="M412.3,344.6h-24.5c-3.5,0-6.3-2.8-6.3-6.3v-24.5c0-3.5,2.8-6.3,6.3-6.3h24.5c3.5,0,6.3,2.8,6.3,6.3v24.5
                                    C418.6,341.8,415.8,344.6,412.3,344.6z"/>
                                <path className="st2" d="M409.8,346.5h-19.6c-5.9,0-10.7-4.8-10.7-10.7v-19.6c0-5.9,4.8-10.7,10.7-10.7h19.6c5.9,0,10.7,4.8,10.7,10.7
                                    v19.6C420.5,341.7,415.7,346.5,409.8,346.5z M390.2,309.3c-3.8,0-6.9,3.1-6.9,6.9v19.6c0,3.8,3.1,6.9,6.9,6.9h19.6
                                    c3.8,0,6.9-3.1,6.9-6.9v-19.6c0-3.8-3.1-6.9-6.9-6.9H390.2z"/>
                            </g>
                        </g>
                        <g id="bano_s" onClick={()=>action(ApartmentFactory.TYPOLOGY.T14, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.T14].ROOMS[ApartmentFactory.ROOMS.BANO_S])} >
                            <g className="st0">
                                <path className="st1" d="M238.3,580.6h-24.5c-3.5,0-6.3-2.8-6.3-6.3v-24.5c0-3.5,2.8-6.3,6.3-6.3h24.5c3.5,0,6.3,2.8,6.3,6.3v24.5
                                    C244.6,577.8,241.8,580.6,238.3,580.6z"/>
                                <path className="st2" d="M235.8,582.5h-19.6c-5.9,0-10.7-4.8-10.7-10.7v-19.6c0-5.9,4.8-10.7,10.7-10.7h19.6c5.9,0,10.7,4.8,10.7,10.7
                                    v19.6C246.5,577.7,241.7,582.5,235.8,582.5z M216.2,545.3c-3.8,0-6.9,3.1-6.9,6.9v19.6c0,3.8,3.1,6.9,6.9,6.9h19.6
                                    c3.8,0,6.9-3.1,6.9-6.9v-19.6c0-3.8-3.1-6.9-6.9-6.9H216.2z"/>
                            </g>
                        </g>
                        <g id="recamara_s" onClick={()=>action(ApartmentFactory.TYPOLOGY.T14, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.T14].ROOMS[ApartmentFactory.ROOMS.RECAMARA_S])} >
                            <g className="st0">
                                <path className="st1" d="M199.2,317.6h-24.5c-3.5,0-6.3-2.8-6.3-6.3v-24.5c0-3.5,2.8-6.3,6.3-6.3h24.5c3.5,0,6.3,2.8,6.3,6.3v24.5
                                    C205.5,314.8,202.7,317.6,199.2,317.6z"/>
                                <path className="st2" d="M196.7,319.5h-19.6c-5.9,0-10.7-4.8-10.7-10.7v-19.6c0-5.9,4.8-10.7,10.7-10.7h19.6c5.9,0,10.7,4.8,10.7,10.7
                                    v19.6C207.4,314.7,202.6,319.5,196.7,319.5z M177.1,282.3c-3.8,0-6.9,3.1-6.9,6.9v19.6c0,3.8,3.1,6.9,6.9,6.9h19.6
                                    c3.8,0,6.9-3.1,6.9-6.9v-19.6c0-3.8-3.1-6.9-6.9-6.9H177.1z"/>
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
    padding-bottom: 100%;
    position: relative;
    transform: scale(0.8) rotate(0deg);
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