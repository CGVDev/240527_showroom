import styled from "styled-components";
import { ApartmentFactory } from "../../utils/ApartmentFactory";

export const PlaneT17 = ({ action })=>{

    return(
        <PlaneContainer>
            <PlaneWrapper>
                <ImageContainer>
                    <PlaneImg src="./img/T17.png" draggable={ false } />
                    <svg  x="0px" y="0px" viewBox="0 0 800 1159"  draggable={ false } >
                        <g id="cocina" onClick={()=>action(ApartmentFactory.TYPOLOGY.T17, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.T17].ROOMS[ApartmentFactory.ROOMS.COCINA])} >
                            <g className="st0">
                                <path className="st1" d="M494.2,870.1h-34.5c-3.5,0-6.3-2.8-6.3-6.3v-34.5c0-3.5,2.8-6.3,6.3-6.3h34.5c3.5,0,6.3,2.8,6.3,6.3v34.5
                                    C500.6,867.2,497.7,870.1,494.2,870.1z"/>
                                <path className="st2" d="M489.4,872.5h-24.8c-7.5,0-13.6-6.1-13.6-13.6v-24.8c0-7.5,6.1-13.6,13.6-13.6h24.8c7.5,0,13.6,6.1,13.6,13.6
                                    v24.8C503,866.4,496.9,872.5,489.4,872.5z M464.6,825.3c-4.8,0-8.7,3.9-8.7,8.7v24.8c0,4.8,3.9,8.7,8.7,8.7h24.8
                                    c4.8,0,8.7-3.9,8.7-8.7v-24.8c0-4.8-3.9-8.7-8.7-8.7H464.6z"/>
                            </g>
                        </g>
                        <g id="entrada" onClick={()=>action(ApartmentFactory.TYPOLOGY.T17, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.T17].ROOMS[ApartmentFactory.ROOMS.ENTRADA])} >
                            <g className="st0">
                                <path className="st1" d="M262.2,810.1h-34.5c-3.5,0-6.3-2.8-6.3-6.3v-34.5c0-3.5,2.8-6.3,6.3-6.3h34.5c3.5,0,6.3,2.8,6.3,6.3v34.5
                                    C268.6,807.2,265.7,810.1,262.2,810.1z"/>
                                <path className="st2" d="M257.4,812.5h-24.8c-7.5,0-13.6-6.1-13.6-13.6v-24.8c0-7.5,6.1-13.6,13.6-13.6h24.8c7.5,0,13.6,6.1,13.6,13.6
                                    v24.8C271,806.4,264.9,812.5,257.4,812.5z M232.6,765.3c-4.8,0-8.7,3.9-8.7,8.7v24.8c0,4.8,3.9,8.7,8.7,8.7h24.8
                                    c4.8,0,8.7-3.9,8.7-8.7v-24.8c0-4.8-3.9-8.7-8.7-8.7H232.6z"/>
                            </g>
                        </g>
                        <g id="recamara" onClick={()=>action(ApartmentFactory.TYPOLOGY.T17, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.T17].ROOMS[ApartmentFactory.ROOMS.RECAMARA_P])} >
                            <g className="st0">
                                <path className="st1" d="M314.2,638.1h-34.5c-3.5,0-6.3-2.8-6.3-6.3v-34.5c0-3.5,2.8-6.3,6.3-6.3h34.5c3.5,0,6.3,2.8,6.3,6.3v34.5
                                    C320.6,635.2,317.7,638.1,314.2,638.1z"/>
                                <path className="st2" d="M309.4,640.5h-24.8c-7.5,0-13.6-6.1-13.6-13.6v-24.8c0-7.5,6.1-13.6,13.6-13.6h24.8c7.5,0,13.6,6.1,13.6,13.6
                                    v24.8C323,634.4,316.9,640.5,309.4,640.5z M284.6,593.3c-4.8,0-8.7,3.9-8.7,8.7v24.8c0,4.8,3.9,8.7,8.7,8.7h24.8
                                    c4.8,0,8.7-3.9,8.7-8.7v-24.8c0-4.8-3.9-8.7-8.7-8.7H284.6z"/>
                            </g>
                        </g>
                        <g id="comedor" onClick={()=>action(ApartmentFactory.TYPOLOGY.T17, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.T17].ROOMS[ApartmentFactory.ROOMS.SALA_P])} >
                            <g className="st0">
                                <path className="st1" d="M424.2,664.1h-34.5c-3.5,0-6.3-2.8-6.3-6.3v-34.5c0-3.5,2.8-6.3,6.3-6.3h34.5c3.5,0,6.3,2.8,6.3,6.3v34.5
                                    C430.6,661.2,427.7,664.1,424.2,664.1z"/>
                                <path className="st2" d="M419.4,666.5h-24.8c-7.5,0-13.6-6.1-13.6-13.6v-24.8c0-7.5,6.1-13.6,13.6-13.6h24.8c7.5,0,13.6,6.1,13.6,13.6
                                    v24.8C433,660.4,426.9,666.5,419.4,666.5z M394.6,619.3c-4.8,0-8.7,3.9-8.7,8.7v24.8c0,4.8,3.9,8.7,8.7,8.7h24.8
                                    c4.8,0,8.7-3.9,8.7-8.7v-24.8c0-4.8-3.9-8.7-8.7-8.7H394.6z"/>
                            </g>
                        </g>
                        <g id="bano" onClick={()=>action(ApartmentFactory.TYPOLOGY.T17, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.T17].ROOMS[ApartmentFactory.ROOMS.BANO_P])} >
                            <g className="st0">
                                <path className="st1" d="M403.1,251.1h-34.5c-3.5,0-6.3-2.8-6.3-6.3v-34.5c0-3.5,2.8-6.3,6.3-6.3h34.5c3.5,0,6.3,2.8,6.3,6.3v34.5
                                    C409.4,248.2,406.6,251.1,403.1,251.1z"/>
                                <path className="st2" d="M398.3,253.5h-24.8c-7.5,0-13.6-6.1-13.6-13.6v-24.8c0-7.5,6.1-13.6,13.6-13.6h24.8c7.5,0,13.6,6.1,13.6,13.6
                                    v24.8C411.8,247.4,405.7,253.5,398.3,253.5z M373.4,206.3c-4.8,0-8.7,3.9-8.7,8.7v24.8c0,4.8,3.9,8.7,8.7,8.7h24.8
                                    c4.8,0,8.7-3.9,8.7-8.7v-24.8c0-4.8-3.9-8.7-8.7-8.7H373.4z"/>
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
    transform: scale(0.8) rotate(-90deg);
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