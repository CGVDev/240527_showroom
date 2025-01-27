import styled from "styled-components";
import { ApartmentFactory } from "../../utils/ApartmentFactory";

export const PlaneT02 = ({ action })=>{

    return(
        <PlaneContainer>
            <PlaneWrapper>
                <ImageContainer>
                    <PlaneImg src="./img/T02.png" draggable={ false } />
                    <svg  x="0px" y="0px" viewBox="0 0 800 1143"  draggable={ false } >
                        <g id="entrada" onClick={()=>action(ApartmentFactory.TYPOLOGY.T02, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.T02].ROOMS[ApartmentFactory.ROOMS.ENTRADA])} >
                            <g className="st0">
                                <path className="st1" d="M460.6,1015.9h-25.7c-6.4,0-11.5-5.2-11.5-11.5v-25.7c0-6.4,5.2-11.5,11.5-11.5h25.7
                                    c6.4,0,11.5,5.2,11.5,11.5v25.7C472.2,1010.7,467,1015.9,460.6,1015.9z"/>
                                <path className="st2" d="M460.6,1018.4h-25.7c-7.7,0-14-6.3-14-14v-25.7c0-7.7,6.3-14,14-14h25.7c7.7,0,14,6.3,14,14v25.7
                                    C474.7,1012.1,468.4,1018.4,460.6,1018.4z M434.9,969.6c-5,0-9,4.1-9,9v25.7c0,5,4.1,9,9,9h25.7c5,0,9-4.1,9-9v-25.7
                                    c0-5-4.1-9-9-9H434.9z"/>
                            </g>
                        </g>
                        <g id="bano" onClick={()=>action(ApartmentFactory.TYPOLOGY.T02, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.T02].ROOMS[ApartmentFactory.ROOMS.BANO_P])} >
                            <g className="st0">
                                <path className="st1" d="M331.6,942.9h-25.7c-6.4,0-11.5-5.2-11.5-11.5v-25.7c0-6.4,5.2-11.5,11.5-11.5h25.7c6.4,0,11.5,5.2,11.5,11.5
                                    v25.7C343.2,937.7,338,942.9,331.6,942.9z"/>
                                <path className="st2" d="M331.6,945.4h-25.7c-7.7,0-14-6.3-14-14v-25.7c0-7.7,6.3-14,14-14h25.7c7.7,0,14,6.3,14,14v25.7
                                    C345.7,939.1,339.4,945.4,331.6,945.4z M305.9,896.6c-5,0-9,4.1-9,9v25.7c0,5,4.1,9,9,9h25.7c5,0,9-4.1,9-9v-25.7c0-5-4.1-9-9-9
                                    H305.9z"/>
                            </g>
                        </g>
                        <g id="cocina" onClick={()=>action(ApartmentFactory.TYPOLOGY.T02, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.T02].ROOMS[ApartmentFactory.ROOMS.COCINA])} >
                            <g className="st0">
                                <path className="st1" d="M474.6,582.4h-25.7c-6.4,0-11.5-5.2-11.5-11.5v-25.7c0-6.4,5.2-11.5,11.5-11.5h25.7c6.4,0,11.5,5.2,11.5,11.5
                                    v25.7C486.2,577.2,481,582.4,474.6,582.4z"/>
                                <path className="st2" d="M474.6,584.9h-25.7c-7.7,0-14-6.3-14-14v-25.7c0-7.7,6.3-14,14-14h25.7c7.7,0,14,6.3,14,14v25.7
                                    C488.7,578.6,482.4,584.9,474.6,584.9z M448.9,536.1c-5,0-9,4.1-9,9v25.7c0,5,4.1,9,9,9h25.7c5,0,9-4.1,9-9v-25.7c0-5-4.1-9-9-9
                                    H448.9z"/>
                            </g>
                        </g>
                        <g id="recamara" onClick={()=>action(ApartmentFactory.TYPOLOGY.T02, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.T02].ROOMS[ApartmentFactory.ROOMS.RECAMARA_P])} >
                            <g className="st0">
                                <path className="st1" d="M482.5,291.4h-25.7c-6.4,0-11.5-5.2-11.5-11.5v-25.7c0-6.4,5.2-11.5,11.5-11.5h25.7c6.4,0,11.5,5.2,11.5,11.5
                                    v25.7C494.1,286.2,488.9,291.4,482.5,291.4z"/>
                                <path className="st2" d="M482.5,293.9h-25.7c-7.7,0-14-6.3-14-14v-25.7c0-7.7,6.3-14,14-14h25.7c7.7,0,14,6.3,14,14v25.7
                                    C496.6,287.6,490.3,293.9,482.5,293.9z M456.8,245.1c-5,0-9,4.1-9,9v25.7c0,5,4.1,9,9,9h25.7c5,0,9-4.1,9-9v-25.7c0-5-4.1-9-9-9
                                    H456.8z"/>
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
    padding-bottom: 69.99%;
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