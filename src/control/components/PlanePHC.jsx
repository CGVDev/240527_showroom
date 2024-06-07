import styled from "styled-components";
import { ApartmentFactory } from "../../utils/ApartmentFactory";

export const PlanePHC = ({ action })=>{

    return(
        <PlaneContainer>
            <PlaneWrapper>
                <ImageContainer>
                    <PlaneImg src="./img/PH-A.png" draggable={false} />
                    <svg  x="0px" y="0px" viewBox="0 0 800 1200"  draggable={ false } >
                        <g id="vestidor" onClick={()=>action(ApartmentFactory.TYPOLOGY.PHC, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.PHC].ROOMS[ApartmentFactory.ROOMS.VESTIDOR])} >
                            <g className="st0">
                                <path className="st1" d="M682.8,837.1h-25.7c-6.4,0-11.5-5.2-11.5-11.5v-25.7c0-6.4,5.2-11.5,11.5-11.5h25.7c6.4,0,11.5,5.2,11.5,11.5
                                    v25.7C694.4,832,689.2,837.1,682.8,837.1z"/>
                                <path className="st2" d="M682.8,839.6h-25.7c-7.7,0-14-6.3-14-14v-25.7c0-7.7,6.3-14,14-14h25.7c7.7,0,14,6.3,14,14v25.7
                                    C696.9,833.3,690.6,839.6,682.8,839.6z M657.2,790.8c-5,0-9,4.1-9,9v25.7c0,5,4.1,9,9,9h25.7c5,0,9-4.1,9-9v-25.7c0-5-4.1-9-9-9
                                    H657.2z"/>
                            </g>
                        </g>
                        <g id="bano_s" onClick={()=>action(ApartmentFactory.TYPOLOGY.PHC, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.PHC].ROOMS[ApartmentFactory.ROOMS.BANO_S])}>
                            <g className="st0">
                                <path className="st1" d="M615,621.9h-25.7c-6.4,0-11.5-5.2-11.5-11.5v-25.7c0-6.4,5.2-11.5,11.5-11.5H615c6.4,0,11.5,5.2,11.5,11.5
                                    v25.7C626.5,616.7,621.3,621.9,615,621.9z"/>
                                <path className="st2" d="M615,624.4h-25.7c-7.7,0-14-6.3-14-14v-25.7c0-7.7,6.3-14,14-14H615c7.7,0,14,6.3,14,14v25.7
                                    C629,618.1,622.7,624.4,615,624.4z M589.3,575.6c-5,0-9,4.1-9,9v25.7c0,5,4.1,9,9,9H615c5,0,9-4.1,9-9v-25.7c0-5-4.1-9-9-9H589.3z
                                    "/>
                            </g>
                        </g>
                        <g id="bano_p" onClick={()=>action(ApartmentFactory.TYPOLOGY.PHC, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.PHC].ROOMS[ApartmentFactory.ROOMS.BANO_P])}>
                            <g className="st0">
                                <path className="st1" d="M648,1014.5h-25.7c-6.4,0-11.5-5.2-11.5-11.5v-25.7c0-6.4,5.2-11.5,11.5-11.5H648c6.4,0,11.5,5.2,11.5,11.5
                                    v25.7C659.6,1009.4,654.4,1014.5,648,1014.5z"/>
                                <path className="st2" d="M648,1017h-25.7c-7.7,0-14-6.3-14-14v-25.7c0-7.7,6.3-14,14-14H648c7.7,0,14,6.3,14,14v25.7
                                    C662.1,1010.7,655.8,1017,648,1017z M622.3,968.3c-5,0-9,4.1-9,9v25.7c0,5,4.1,9,9,9H648c5,0,9-4.1,9-9v-25.7c0-5-4.1-9-9-9H622.3
                                    z"/>
                            </g>
                        </g>
                        <g id="sala_s" onClick={()=>action(ApartmentFactory.TYPOLOGY.PHC, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.PHC].ROOMS[ApartmentFactory.ROOMS.SALA_S])}>
                            <g className="st0">
                                <path className="st1" d="M412.8,600h-25.7c-6.4,0-11.5-5.2-11.5-11.5v-25.7c0-6.4,5.2-11.5,11.5-11.5h25.7c6.4,0,11.5,5.2,11.5,11.5
                                    v25.7C424.4,594.8,419.2,600,412.8,600z"/>
                                <path className="st2" d="M412.8,602.5h-25.7c-7.7,0-14-6.3-14-14v-25.7c0-7.7,6.3-14,14-14h25.7c7.7,0,14,6.3,14,14v25.7
                                    C426.9,596.2,420.6,602.5,412.8,602.5z M387.2,553.7c-5,0-9,4.1-9,9v25.7c0,5,4.1,9,9,9h25.7c5,0,9-4.1,9-9v-25.7c0-5-4.1-9-9-9
                                    H387.2z"/>
                            </g>
                        </g>
                        <g id="sala_p" onClick={()=>action(ApartmentFactory.TYPOLOGY.PHC, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.PHC].ROOMS[ApartmentFactory.ROOMS.SALA_P])}>
                            <g className="st0">
                                <path className="st1" d="M190.4,478.1h-25.7c-6.4,0-11.5-5.2-11.5-11.5v-25.7c0-6.4,5.2-11.5,11.5-11.5h25.7c6.4,0,11.5,5.2,11.5,11.5
                                    v25.7C201.9,472.9,196.7,478.1,190.4,478.1z"/>
                                <path className="st2" d="M190.4,480.6h-25.7c-7.7,0-14-6.3-14-14v-25.7c0-7.7,6.3-14,14-14h25.7c7.7,0,14,6.3,14,14v25.7
                                    C204.4,474.3,198.1,480.6,190.4,480.6z M164.7,431.8c-5,0-9,4.1-9,9v25.7c0,5,4.1,9,9,9h25.7c5,0,9-4.1,9-9v-25.7c0-5-4.1-9-9-9
                                    H164.7z"/>
                            </g>
                        </g>
                        <g id="cocina" onClick={()=>action(ApartmentFactory.TYPOLOGY.PHC, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.PHC].ROOMS[ApartmentFactory.ROOMS.COCINA])}>
                            <g className="st0">
                                <path className="st1" d="M253.6,907.8h-25.7c-6.4,0-11.5-5.2-11.5-11.5v-25.7c0-6.4,5.2-11.5,11.5-11.5h25.7c6.4,0,11.5,5.2,11.5,11.5
                                    v25.7C265.2,902.6,260,907.8,253.6,907.8z"/>
                                <path className="st2" d="M253.6,910.3h-25.7c-7.7,0-14-6.3-14-14v-25.7c0-7.7,6.3-14,14-14h25.7c7.7,0,14,6.3,14,14v25.7
                                    C267.7,904,261.4,910.3,253.6,910.3z M227.9,861.5c-5,0-9,4.1-9,9v25.7c0,5,4.1,9,9,9h25.7c5,0,9-4.1,9-9v-25.7c0-5-4.1-9-9-9
                                    H227.9z"/>
                            </g>
                        </g>
                        <g id="recamara_t" onClick={()=>action(ApartmentFactory.TYPOLOGY.PHC, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.PHC].ROOMS[ApartmentFactory.ROOMS.RECAMARA_S])}>
                            <g className="st0">
                                <path className="st1" d="M666.6,277.8H641c-6.4,0-11.5-5.2-11.5-11.5v-25.7c0-6.4,5.2-11.5,11.5-11.5h25.7c6.4,0,11.5,5.2,11.5,11.5
                                    v25.7C678.2,272.7,673,277.8,666.6,277.8z"/>
                                <path className="st2" d="M666.6,280.3H641c-7.7,0-14-6.3-14-14v-25.7c0-7.7,6.3-14,14-14h25.7c7.7,0,14,6.3,14,14v25.7
                                    C680.7,274,674.4,280.3,666.6,280.3z M641,231.6c-5,0-9,4.1-9,9v25.7c0,5,4.1,9,9,9h25.7c5,0,9-4.1,9-9v-25.7c0-5-4.1-9-9-9H641z"
                                    />
                            </g>
                        </g>
                        <g id="recamara_s" onClick={()=>action(ApartmentFactory.TYPOLOGY.PHC, ApartmentFactory.DETAIL[ApartmentFactory.TYPOLOGY.PHC].ROOMS[ApartmentFactory.ROOMS.RECAMARA_T])}>
                            <g className="st0">
                                <path className="st1" d="M496.9,272.8h-25.7c-6.4,0-11.5-5.2-11.5-11.5v-25.7c0-6.4,5.2-11.5,11.5-11.5h25.7c6.4,0,11.5,5.2,11.5,11.5
                                    v25.7C508.5,267.7,503.3,272.8,496.9,272.8z"/>
                                <path className="st2" d="M496.9,275.3h-25.7c-7.7,0-14-6.3-14-14v-25.7c0-7.7,6.3-14,14-14h25.7c7.7,0,14,6.3,14,14v25.7
                                    C511,269,504.7,275.3,496.9,275.3z M471.2,226.6c-5,0-9,4.1-9,9v25.7c0,5,4.1,9,9,9h25.7c5,0,9-4.1,9-9v-25.7c0-5-4.1-9-9-9H471.2
                                    z"/>
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
    transform: rotate(90deg);
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
        width: 66.66%;
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
    width: 66.66%;
    object-fit: cover;
    transform-origin: center center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;