import styled from "styled-components";
import { ApartmentFactory } from "../../utils/ApartmentFactory";

export const PlaneT13 = ({ action })=>{

    return(
        <PlaneContainer>
            <PlaneWrapper>
                <ImageContainer>
                    <PlaneImg src="./img/T13.png" draggable={ false } />
                    <svg  x="0px" y="0px" viewBox="0 0 800 800"  draggable={ false } >
                        <g id="bano_p" onClick={()=>action(ApartmentFactory.TYPOLOGY.T13, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.T13].ROOMS[ApartmentFactory.ROOMS.BANO_P])} >
                            <g className="st0">
                                <path className="st1" d="M659.3,652.1h-24.5c-3.5,0-6.3-2.8-6.3-6.3v-24.5c0-3.5,2.8-6.3,6.3-6.3h24.5c3.5,0,6.3,2.8,6.3,6.3v24.5
                                    C665.6,649.3,662.8,652.1,659.3,652.1z"/>
                                <path className="st2" d="M656.8,654h-19.6c-5.9,0-10.7-4.8-10.7-10.7v-19.6c0-5.9,4.8-10.7,10.7-10.7h19.6c5.9,0,10.7,4.8,10.7,10.7
                                    v19.6C667.5,649.2,662.7,654,656.8,654z M637.2,616.8c-3.8,0-6.9,3.1-6.9,6.9v19.6c0,3.8,3.1,6.9,6.9,6.9h19.6
                                    c3.8,0,6.9-3.1,6.9-6.9v-19.6c0-3.8-3.1-6.9-6.9-6.9H637.2z"/>
                            </g>
                        </g>
                        <g id="recamara_p" onClick={()=>action(ApartmentFactory.TYPOLOGY.T13, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.T13].ROOMS[ApartmentFactory.ROOMS.RECAMARA_P])} >
                            <g className="st0">
                                <path className="st1" d="M648.3,214.1h-24.5c-3.5,0-6.3-2.8-6.3-6.3v-24.5c0-3.5,2.8-6.3,6.3-6.3h24.5c3.5,0,6.3,2.8,6.3,6.3v24.5
                                    C654.6,211.3,651.8,214.1,648.3,214.1z"/>
                                <path className="st2" d="M645.8,216h-19.6c-5.9,0-10.7-4.8-10.7-10.7v-19.6c0-5.9,4.8-10.7,10.7-10.7h19.6c5.9,0,10.7,4.8,10.7,10.7
                                    v19.6C656.5,211.2,651.7,216,645.8,216z M626.2,178.8c-3.8,0-6.9,3.1-6.9,6.9v19.6c0,3.8,3.1,6.9,6.9,6.9h19.6
                                    c3.8,0,6.9-3.1,6.9-6.9v-19.6c0-3.8-3.1-6.9-6.9-6.9H626.2z"/>
                            </g>
                        </g>
                        <g id="bano_s" onClick={()=>action(ApartmentFactory.TYPOLOGY.T13, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.T13].ROOMS[ApartmentFactory.ROOMS.BANO_S])} >
                            <g className="st0">
                                <path className="st1" d="M391.8,535.1h-24.5c-3.5,0-6.3-2.8-6.3-6.3v-24.5c0-3.5,2.8-6.3,6.3-6.3h24.5c3.5,0,6.3,2.8,6.3,6.3v24.5
                                    C398.1,532.3,395.3,535.1,391.8,535.1z"/>
                                <path className="st2" d="M389.3,537h-19.6c-5.9,0-10.7-4.8-10.7-10.7v-19.6c0-5.9,4.8-10.7,10.7-10.7h19.6c5.9,0,10.7,4.8,10.7,10.7
                                    v19.6C400,532.2,395.2,537,389.3,537z M369.7,499.8c-3.8,0-6.9,3.1-6.9,6.9v19.6c0,3.8,3.1,6.9,6.9,6.9h19.6
                                    c3.8,0,6.9-3.1,6.9-6.9v-19.6c0-3.8-3.1-6.9-6.9-6.9H369.7z"/>
                            </g>
                        </g>
                        <g id="recamara_s" onClick={()=>action(ApartmentFactory.TYPOLOGY.T13, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.T13].ROOMS[ApartmentFactory.ROOMS.RECAMARA_S])} >
                            <g className="st0">
                                <path className="st1" d="M371.3,234.6h-24.5c-3.5,0-6.3-2.8-6.3-6.3v-24.5c0-3.5,2.8-6.3,6.3-6.3h24.5c3.5,0,6.3,2.8,6.3,6.3v24.5
                                    C377.6,231.8,374.8,234.6,371.3,234.6z"/>
                                <path className="st2" d="M368.8,236.5h-19.6c-5.9,0-10.7-4.8-10.7-10.7v-19.6c0-5.9,4.8-10.7,10.7-10.7h19.6c5.9,0,10.7,4.8,10.7,10.7
                                    v19.6C379.5,231.7,374.7,236.5,368.8,236.5z M349.2,199.3c-3.8,0-6.9,3.1-6.9,6.9v19.6c0,3.8,3.1,6.9,6.9,6.9h19.6
                                    c3.8,0,6.9-3.1,6.9-6.9v-19.6c0-3.8-3.1-6.9-6.9-6.9H349.2z"/>
                            </g>
                        </g>
                        <g id="cocina" onClick={()=>action(ApartmentFactory.TYPOLOGY.T13, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.T13].ROOMS[ApartmentFactory.ROOMS.COCINA])} >
                            <g className="st0">
                                <path className="st1" d="M197.3,626.6h-24.5c-3.5,0-6.3-2.8-6.3-6.3v-24.5c0-3.5,2.8-6.3,6.3-6.3h24.5c3.5,0,6.3,2.8,6.3,6.3v24.5
                                    C203.6,623.8,200.8,626.6,197.3,626.6z"/>
                                <path className="st2" d="M194.8,628.5h-19.6c-5.9,0-10.7-4.8-10.7-10.7v-19.6c0-5.9,4.8-10.7,10.7-10.7h19.6c5.9,0,10.7,4.8,10.7,10.7
                                    v19.6C205.5,623.7,200.7,628.5,194.8,628.5z M175.2,591.3c-3.8,0-6.9,3.1-6.9,6.9v19.6c0,3.8,3.1,6.9,6.9,6.9h19.6
                                    c3.8,0,6.9-3.1,6.9-6.9v-19.6c0-3.8-3.1-6.9-6.9-6.9H175.2z"/>
                            </g>
                        </g>
                        <g id="sala" onClick={()=>action(ApartmentFactory.TYPOLOGY.T13, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.T13].ROOMS[ApartmentFactory.ROOMS.SALA_P])} >
                            <g className="st0">
                                <path className="st1" d="M219.7,350.4h-24.5c-3.5,0-6.3-2.8-6.3-6.3v-24.5c0-3.5,2.8-6.3,6.3-6.3h24.5c3.5,0,6.3,2.8,6.3,6.3v24.5
                                    C226,347.6,223.2,350.4,219.7,350.4z"/>
                                <path className="st2" d="M217.2,352.3h-19.6c-5.9,0-10.7-4.8-10.7-10.7V322c0-5.9,4.8-10.7,10.7-10.7h19.6c5.9,0,10.7,4.8,10.7,10.7
                                    v19.6C227.9,347.5,223.1,352.3,217.2,352.3z M197.6,315.1c-3.8,0-6.9,3.1-6.9,6.9v19.6c0,3.8,3.1,6.9,6.9,6.9h19.6
                                    c3.8,0,6.9-3.1,6.9-6.9V322c0-3.8-3.1-6.9-6.9-6.9H197.6z"/>
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