import styled from "styled-components";
import { useDraggable } from "../hooks/useDraggable";
import { animated as a } from "@react-spring/web";
import { useRef } from "react";
import { useIndex } from "../hooks/useIndex";

export const TourContainer = ({ label, url, transitionStyle, closeAction })=>{

    const ref = useRef(null);
    const { style } = useDraggable(ref);

    const { zIndex, enable, disable } = useIndex(999, 1000);
    console.log(zIndex);


    return(
        <TourWrapper style={ { ...style, zIndex } } ref={ ref } onMouseDown={ enable } onTouchStart={ enable } onTouchEnd={ disable } onTouchCancel={ disable } >
            <WindowContainer>
                <WindowWrapper style={ transitionStyle }>
                    <IContainer src={ url } />
                    <WindowHead>
                        <IconContainer >
                            <span className="material-symbols-outlined icon">
                                texture
                            </span>
                        </IconContainer>
                        <TourLabelContainer>
                            <TourLabel>{ label }</TourLabel>
                        </TourLabelContainer>
                    </WindowHead>
                    <TourCloseContainer>
                        <TourCloseButton onClick={ closeAction }>
                            <span className="material-symbols-outlined">
                                close
                            </span>
                        </TourCloseButton>
                    </TourCloseContainer>
                    <WindowScaleIndicator>
                        <span className="material-symbols-outlined">
                            expand_content
                        </span>
                    </WindowScaleIndicator>
                </WindowWrapper>
            </WindowContainer>
        </TourWrapper>

    );
}

const TourWrapper = styled.div`
    width: 80%;
    /* max-width: 1200px; */
    max-height: 600px;
    position: absolute;
    top: 15%;
    left: 30%;
    background: linear-gradient(135deg, rgba(100%, 100%, 100%, 0.1) 40%, rgba(74, 192, 176, 0.5) 100%);
    ${ ({ theme })=>theme.styles.shadow.medium }
`;

const WindowContainer = styled.div`
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    position: relative;
    border: 1px solid white;
`;

const WindowWrapper = styled(a.div)`
    width: 100%;
    height: 100%;
    padding: 10px;
    ${ ({ theme })=>theme.utils.centerAbs }
`;

const WindowHead = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 30px 0 0;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${ ({ theme })=>theme.color.green_100 };
    ${ ({ theme })=>theme.styles.shadow.medium }
`;

const IconContainer = styled.div`
    padding: 0;
    span{
        font-size: 50px;
        color: ${ ({ theme })=>theme.color.white };
        user-select: none;
    }
`;

const TourLabelContainer = styled.div`
    padding: 5px 0 5px 10px;
`;

const TourLabel = styled.h5`
    ${ ({ theme })=>theme.fontStyle.h5 };
    color: ${ ({ theme })=>theme.color.white };
    user-select: none;
`;

const TourCloseContainer = styled.div`
    width: 20%;
    max-width: 100px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
`;

const TourCloseButton = styled.div`
    width: 60px;
    height: 60px;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;

    span{
        font-size: 30px;
        color: ${ ({ theme })=>theme.color.white };
        user-select: none;
    }
`;

const IContainer = styled.iframe`
    width: 100%;
    height: 100%;
    border: none;
`;

const WindowScaleIndicator = styled.div`
    width: 120px;
    height: 60px;
    position: absolute;
    bottom: -1px;
    right: -1px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    span{
        color: white;
        background-color: ${ ({ theme })=>theme.color.green_dark };
        transform: rotate(90deg);
        font-size: 30px;
        user-select: none;
    }
`