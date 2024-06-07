import styled from "styled-components";
import { ApartmentFactory } from "../../utils/ApartmentFactory";

export const PlaneT05 = ({ action })=>{

    return(
        <PlaneContainer>
            <PlaneWrapper>
                <ImageContainer>
                    <PlaneImg src="./img/T05.png" draggable={ false } />
                    <svg  x="0px" y="0px" viewBox="0 0 500 500"  draggable={ false } >
                        <g id="recamara_p"  onClick={()=>action(ApartmentFactory.TYPOLOGY.T05, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.T05].ROOMS[ApartmentFactory.ROOMS.RECAMARA_P])} >
                            <g className="st0">
                                <path className="st1" d="M383.6,118.8h-3.9c-6.4,0-11.5-5.2-11.5-11.5v-3.9c0-6.4,5.2-11.5,11.5-11.5h3.9c6.4,0,11.5,5.2,11.5,11.5
                                    v3.9C395.2,113.6,390,118.8,383.6,118.8z"/>
                                <path className="st2" d="M388.8,120.1h-14.2c-4.3,0-7.8-3.5-7.8-7.8V98.2c0-4.3,3.5-7.8,7.8-7.8h14.2c4.3,0,7.8,3.5,7.8,7.8v14.2
                                    C396.6,116.7,393.1,120.1,388.8,120.1z M374.6,93.2c-2.8,0-5,2.2-5,5v14.2c0,2.8,2.2,5,5,5h14.2c2.8,0,5-2.2,5-5V98.2
                                    c0-2.8-2.2-5-5-5H374.6z"/>
                            </g>
                        </g>
                        <g id="sala_s"  onClick={()=>action(ApartmentFactory.TYPOLOGY.T05, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.T05].ROOMS[ApartmentFactory.ROOMS.SALA_S])} >
                            <g className="st0">
                                <path className="st1" d="M389.3,373.8h-3.9c-6.4,0-11.5-5.2-11.5-11.5v-3.9c0-6.4,5.2-11.5,11.5-11.5h3.9c6.4,0,11.5,5.2,11.5,11.5
                                    v3.9C400.8,368.7,395.7,373.8,389.3,373.8z"/>
                                <path className="st2" d="M394.5,375.2h-14.2c-4.3,0-7.8-3.5-7.8-7.8v-14.2c0-4.3,3.5-7.8,7.8-7.8h14.2c4.3,0,7.8,3.5,7.8,7.8v14.2
                                    C402.2,371.7,398.7,375.2,394.5,375.2z M380.3,348.3c-2.8,0-5,2.2-5,5v14.2c0,2.8,2.2,5,5,5h14.2c2.8,0,5-2.2,5-5v-14.2
                                    c0-2.8-2.2-5-5-5H380.3z"/>
                            </g>
                        </g>
                        <g id="bano_s" onClick={()=>action(ApartmentFactory.TYPOLOGY.T05, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.T05].ROOMS[ApartmentFactory.ROOMS.BANO_S])} >
                            <g className="st0">
                                <path className="st1" d="M286.1,396.3h-3.9c-6.4,0-11.5-5.2-11.5-11.5v-3.9c0-6.4,5.2-11.5,11.5-11.5h3.9c6.4,0,11.5,5.2,11.5,11.5
                                    v3.9C297.7,391.1,292.5,396.3,286.1,396.3z"/>
                                <path className="st2" d="M291.3,397.7h-14.2c-4.3,0-7.8-3.5-7.8-7.8v-14.2c0-4.3,3.5-7.8,7.8-7.8h14.2c4.3,0,7.8,3.5,7.8,7.8v14.2
                                    C299,394.2,295.6,397.7,291.3,397.7z M277.1,370.7c-2.8,0-5,2.2-5,5v14.2c0,2.8,2.2,5,5,5h14.2c2.8,0,5-2.2,5-5v-14.2
                                    c0-2.8-2.2-5-5-5H277.1z"/>
                            </g>
                        </g>
                        <g id="bano_p"  onClick={()=>action(ApartmentFactory.TYPOLOGY.T05, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.T05].ROOMS[ApartmentFactory.ROOMS.BANO_P])} >
                            <g className="st0">
                                <path className="st1" d="M276.9,256.4H273c-6.4,0-11.5-5.2-11.5-11.5V241c0-6.4,5.2-11.5,11.5-11.5h3.9c6.4,0,11.5,5.2,11.5,11.5v3.9
                                    C288.4,251.2,283.2,256.4,276.9,256.4z"/>
                                <path className="st2" d="M282,257.8h-14.2c-4.3,0-7.8-3.5-7.8-7.8v-14.2c0-4.3,3.5-7.8,7.8-7.8H282c4.3,0,7.8,3.5,7.8,7.8V250
                                    C289.8,254.3,286.3,257.8,282,257.8z M267.8,230.8c-2.8,0-5,2.2-5,5V250c0,2.8,2.2,5,5,5H282c2.8,0,5-2.2,5-5v-14.2
                                    c0-2.8-2.2-5-5-5H267.8z"/>
                            </g>
                        </g>
                        <g id="bano_s"  onClick={()=>action(ApartmentFactory.TYPOLOGY.T05, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.T05].ROOMS[ApartmentFactory.ROOMS.RECAMARA_S])} >
                            <g className="st0">
                                <path className="st1" d="M289,121.5h-3.9c-6.4,0-11.5-5.2-11.5-11.5v-3.9c0-6.4,5.2-11.5,11.5-11.5h3.9c6.4,0,11.5,5.2,11.5,11.5v3.9
                                    C300.5,116.4,295.3,121.5,289,121.5z"/>
                                <path className="st2" d="M294.1,122.9h-14.2c-4.3,0-7.8-3.5-7.8-7.8V101c0-4.3,3.5-7.8,7.8-7.8h14.2c4.3,0,7.8,3.5,7.8,7.8v14.2
                                    C301.9,119.4,298.4,122.9,294.1,122.9z M279.9,96c-2.8,0-5,2.2-5,5v14.2c0,2.8,2.2,5,5,5h14.2c2.8,0,5-2.2,5-5V101
                                    c0-2.8-2.2-5-5-5H279.9z"/>
                            </g>
                        </g>
                        <g id="sala_p"  onClick={()=>action(ApartmentFactory.TYPOLOGY.T05, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.T05].ROOMS[ApartmentFactory.ROOMS.SALA_P])} >
                            <g className="st0">
                                <path className="st1" d="M126.5,167.8h-14.3c-3.5,0-6.3-2.8-6.3-6.3v-14.3c0-3.5,2.8-6.3,6.3-6.3h14.3c3.5,0,6.3,2.8,6.3,6.3v14.3
                                    C132.8,165,130,167.8,126.5,167.8z"/>
                                <path className="st2" d="M126.5,169.2h-14.2c-4.3,0-7.8-3.5-7.8-7.8v-14.2c0-4.3,3.5-7.8,7.8-7.8h14.2c4.3,0,7.8,3.5,7.8,7.8v14.2
                                    C134.2,165.7,130.7,169.2,126.5,169.2z M112.3,142.2c-2.8,0-5,2.2-5,5v14.2c0,2.8,2.2,5,5,5h14.2c2.8,0,5-2.2,5-5v-14.2
                                    c0-2.8-2.2-5-5-5H112.3z"/>
                            </g>
                        </g>
                        <g id="entrada"  onClick={()=>action(ApartmentFactory.TYPOLOGY.T05, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.T05].ROOMS[ApartmentFactory.ROOMS.ENTRADA])} >
                            <g className="st0">
                                <path className="st1" d="M111.7,396.3H97.4c-3.5,0-6.3-2.8-6.3-6.3v-14.3c0-3.5,2.8-6.3,6.3-6.3h14.3c3.5,0,6.3,2.8,6.3,6.3v14.3
                                    C118,393.4,115.1,396.3,111.7,396.3z"/>
                                <path className="st2" d="M111.6,397.7H97.4c-4.3,0-7.8-3.5-7.8-7.8v-14.2c0-4.3,3.5-7.8,7.8-7.8h14.2c4.3,0,7.8,3.5,7.8,7.8v14.2
                                    C119.4,394.2,115.9,397.7,111.6,397.7z M97.4,370.7c-2.8,0-5,2.2-5,5v14.2c0,2.8,2.2,5,5,5h14.2c2.8,0,5-2.2,5-5v-14.2
                                    c0-2.8-2.2-5-5-5H97.4z"/>
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