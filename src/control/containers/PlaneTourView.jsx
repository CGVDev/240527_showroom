import { animated as a, useSpring} from "@react-spring/web";
import { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useGesture } from "@use-gesture/react";
import { SocketActions } from "../../utils/SocketActions";
import { SocketContext } from "../../hooks/useSocket";
import { PlanePHC } from "../components/PlanePHC";
import { PlanePHB } from "../components/PlanePHB";
import { PlaneT18 } from "../components/PlaneT18";
import { PlaneT17 } from "../components/PlaneT17";
import { PlaneT14 } from "../components/PlaneT14";
import { PlaneT13 } from "../components/PlaneT13";
import { PlaneT05 } from "../components/PlaneT05";
import { PlaneT02 } from "../components/PlaneT02";
import { ControlContext } from "../context/ControlContext";
import { ApartmentFactory } from "../../utils/ApartmentFactory";

export const PlaneTourView = ()=>{
    const { state } = useContext(ControlContext);
    const [ active, setActive ] = useState(false);
    const { socket } = useContext(SocketContext);

    const target = useRef();

    const changeSphere = (typo, sphere)=>{
        socket.emit(
            SocketActions.TOUR360, 
            {
                type: SocketActions.ACTIONS[SocketActions.TOUR360].SET_SPHERE,
                payload: {
                    typo,
                    sphere
                }
            }
        );
    }

    const spring = useSpring({
        opacity: active ? 1 : 0
    });

    const [style, api] = useSpring(() => ({
        x: 0,
        y: 0,
        scale: 1,
        rotateZ: 0,
    }))

    useGesture(
        {
            onDrag: ({ pinching, cancel, offset: [x, y], ...rest }) => {
                // if (pinching) return cancel()
                // api.start({ x, y })
                return cancel();
            },
            onPinch: ({ origin: [ox, oy], first, movement: [ms], offset: [s, a], memo }) => {
                if (first) {
                  const { width, height, x, y } = target.current.getBoundingClientRect()
                  const tx = ox - (x + width / 2)
                  const ty = oy - (y + height / 2)
                  memo = [style.x.get(), style.y.get(), tx, ty]
                }
        
                const x = memo[0] - (ms - 1) * memo[2]
                const y = memo[1] - (ms - 1) * memo[3]
                api.start({ scale: s, rotateZ: a, x, y })
                return memo
            },
        },
        {
            target,
            drag: { from: () => [style.x.get(), style.y.get()] },
            pinch: { scaleBounds: { min: 0.5, max: 1.2 }, rubberband: true }
        }
    );

    useEffect(()=>{
        setActive(true);
        return ()=>{ setActive(false) }
    }, []);

    return(
        <PlaneTourContainer style={ spring } >
            <PlaneTourWrapper ref={target} style={ style } >
                {
                    (ApartmentFactory.TOUR[state.selected[0].type] === ApartmentFactory.TYPOLOGY.T02) && <PlaneT02 action={ changeSphere } />
                }
                {
                    (ApartmentFactory.TOUR[state.selected[0].type] === ApartmentFactory.TYPOLOGY.T05) && <PlaneT05 action={ changeSphere } />
                }
                {
                    (ApartmentFactory.TOUR[state.selected[0].type] === ApartmentFactory.TYPOLOGY.T13) && <PlaneT13 action={ changeSphere } />
                }
                {
                    (ApartmentFactory.TOUR[state.selected[0].type] === ApartmentFactory.TYPOLOGY.T14) && <PlaneT14 action={ changeSphere } />
                }
                {
                    (ApartmentFactory.TOUR[state.selected[0].type] === ApartmentFactory.TYPOLOGY.T17) && <PlaneT17 action={ changeSphere } />
                }
                {
                    (ApartmentFactory.TOUR[state.selected[0].type] === ApartmentFactory.TYPOLOGY.T18) && <PlaneT18 action={ changeSphere } />
                }
                {
                    (ApartmentFactory.TOUR[state.selected[0].type] === ApartmentFactory.TYPOLOGY.PHB) && <PlanePHB action={ changeSphere } />
                }
                {
                    (ApartmentFactory.TOUR[state.selected[0].type] === ApartmentFactory.TYPOLOGY.PHC) && <PlanePHC action={ changeSphere } />
                }

            </PlaneTourWrapper>
        </PlaneTourContainer>
    );
};

const PlaneTourContainer = styled(a.section)`
    width: 45%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
`;

const PlaneTourWrapper = styled(a.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
    touch-action: none;
`;