import styled from "styled-components";
import { ApartmentFactory } from "../../utils/ApartmentFactory";

export const PlaneT18 = ({ action })=>{

    return(
        <PlaneContainer>
            <PlaneWrapper>
                <ImageContainer>
                    <PlaneImg src="./img/T18.png" draggable={ false } />
                    <svg  x="0px" y="0px" viewBox="0 0 800 1200"  draggable={ false } >
                    <g id="entrada" onClick={()=>action(ApartmentFactory.TYPOLOGY.T18, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.T18].ROOMS[ApartmentFactory.ROOMS.ENTRADA])} >
                        <g className="st0">
                            <path className="st1" d="M485.9,1034.8h-35.9c-3.5,0-6.3-2.8-6.3-6.3v-35.9c0-3.5,2.8-6.3,6.3-6.3h35.9c3.5,0,6.3,2.8,6.3,6.3v35.9
                                C492.3,1031.9,489.4,1034.8,485.9,1034.8z"/>
                            <path className="st2" d="M480.8,1037.3h-25.6c-7.7,0-14-6.3-14-14v-25.6c0-7.7,6.3-14,14-14h25.6c7.7,0,14,6.3,14,14v25.6
                                C494.8,1031,488.5,1037.3,480.8,1037.3z M455.2,988.7c-5,0-9,4-9,9v25.6c0,5,4,9,9,9h25.6c5,0,9-4,9-9v-25.6c0-5-4-9-9-9H455.2z"
                                />
                        </g>
                    </g>
                    <g id="sala" onClick={()=>action(ApartmentFactory.TYPOLOGY.T18, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.T18].ROOMS[ApartmentFactory.ROOMS.SALA_P])} >
                        <g className="st0">
                            <path className="st1" d="M391.2,843.8h-35.9c-3.5,0-6.3-2.8-6.3-6.3v-35.9c0-3.5,2.8-6.3,6.3-6.3h35.9c3.5,0,6.3,2.8,6.3,6.3v35.9
                                C397.5,840.9,394.7,843.8,391.2,843.8z"/>
                            <path className="st2" d="M386,846.3h-25.6c-7.7,0-14-6.3-14-14v-25.6c0-7.7,6.3-14,14-14H386c7.7,0,14,6.3,14,14v25.6
                                C400,840,393.7,846.3,386,846.3z M360.5,797.7c-5,0-9,4-9,9v25.6c0,5,4,9,9,9H386c5,0,9-4,9-9v-25.6c0-5-4-9-9-9H360.5z"/>
                        </g>
                    </g>
                    <g id="cocina" onClick={()=>action(ApartmentFactory.TYPOLOGY.T18, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.T18].ROOMS[ApartmentFactory.ROOMS.COCINA])} >
                        <g className="st0">
                            <path className="st1" d="M584.2,707.8h-35.9c-3.5,0-6.3-2.8-6.3-6.3v-35.9c0-3.5,2.8-6.3,6.3-6.3h35.9c3.5,0,6.3,2.8,6.3,6.3v35.9
                                C590.5,704.9,587.7,707.8,584.2,707.8z"/>
                            <path className="st2" d="M579,710.3h-25.6c-7.7,0-14-6.3-14-14v-25.6c0-7.7,6.3-14,14-14H579c7.7,0,14,6.3,14,14v25.6
                                C593,704,586.7,710.3,579,710.3z M553.5,661.7c-5,0-9,4-9,9v25.6c0,5,4,9,9,9H579c5,0,9-4,9-9v-25.6c0-5-4-9-9-9H553.5z"/>
                        </g>
                    </g>
                    <g id="bano_s" onClick={()=>action(ApartmentFactory.TYPOLOGY.T18, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.T18].ROOMS[ApartmentFactory.ROOMS.BANO_S])} >
                        <g className="st0">
                            <path className="st1" d="M650.2,479.8h-35.9c-3.5,0-6.3-2.8-6.3-6.3v-35.9c0-3.5,2.8-6.3,6.3-6.3h35.9c3.5,0,6.3,2.8,6.3,6.3v35.9
                                C656.5,476.9,653.7,479.8,650.2,479.8z"/>
                            <path className="st2" d="M645,482.3h-25.6c-7.7,0-14-6.3-14-14v-25.6c0-7.7,6.3-14,14-14H645c7.7,0,14,6.3,14,14v25.6
                                C659,476,652.7,482.3,645,482.3z M619.5,433.7c-5,0-9,4-9,9v25.6c0,5,4,9,9,9H645c5,0,9-4,9-9v-25.6c0-5-4-9-9-9H619.5z"/>
                        </g>
                    </g>
                    <g id="recamara_s" onClick={()=>action(ApartmentFactory.TYPOLOGY.T18, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.T18].ROOMS[ApartmentFactory.ROOMS.RECAMARA_S])} >
                        <g className="st0">
                            <path className="st1" d="M245.2,494.8h-35.9c-3.5,0-6.3-2.8-6.3-6.3v-35.9c0-3.5,2.8-6.3,6.3-6.3h35.9c3.5,0,6.3,2.8,6.3,6.3v35.9
                                C251.5,491.9,248.7,494.8,245.2,494.8z"/>
                            <path className="st2" d="M240,497.3h-25.6c-7.7,0-14-6.3-14-14v-25.6c0-7.7,6.3-14,14-14H240c7.7,0,14,6.3,14,14v25.6
                                C254,491,247.7,497.3,240,497.3z M214.5,448.7c-5,0-9,4-9,9v25.6c0,5,4,9,9,9H240c5,0,9-4,9-9v-25.6c0-5-4-9-9-9H214.5z"/>
                        </g>
                    </g>
                    <g id="bano_p" onClick={()=>action(ApartmentFactory.TYPOLOGY.T18, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.T18].ROOMS[ApartmentFactory.ROOMS.BANO_P])} >
                        <g className="st0">
                            <path className="st1" d="M557.4,263.8h-35.9c-3.5,0-6.3-2.8-6.3-6.3v-35.9c0-3.5,2.8-6.3,6.3-6.3h35.9c3.5,0,6.3,2.8,6.3,6.3v35.9
                                C563.8,260.9,560.9,263.8,557.4,263.8z"/>
                            <path className="st2" d="M552.3,266.3h-25.6c-7.7,0-14-6.3-14-14v-25.6c0-7.7,6.3-14,14-14h25.6c7.7,0,14,6.3,14,14v25.6
                                C566.2,260,560,266.3,552.3,266.3z M526.7,217.7c-5,0-9,4-9,9v25.6c0,5,4,9,9,9h25.6c5,0,9-4,9-9v-25.6c0-5-4-9-9-9H526.7z"/>
                        </g>
                    </g>
                    <g id="recamara_p" onClick={()=>action(ApartmentFactory.TYPOLOGY.T18, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.T18].ROOMS[ApartmentFactory.ROOMS.RECAMARA_P])} >
                        <g className="st0">
                            <path className="st1" d="M257.4,183.8h-35.9c-3.5,0-6.3-2.8-6.3-6.3v-35.9c0-3.5,2.8-6.3,6.3-6.3h35.9c3.5,0,6.3,2.8,6.3,6.3v35.9
                                C263.8,180.9,260.9,183.8,257.4,183.8z"/>
                            <path className="st2" d="M252.3,186.3h-25.6c-7.7,0-14-6.3-14-14v-25.6c0-7.7,6.3-14,14-14h25.6c7.7,0,14,6.3,14,14v25.6
                                C266.3,180,260,186.3,252.3,186.3z M226.7,137.7c-5,0-9,4-9,9v25.6c0,5,4,9,9,9h25.6c5,0,9-4,9-9v-25.6c0-5-4-9-9-9H226.7z"/>
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
    padding-bottom: 66.66%;
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