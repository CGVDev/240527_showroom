import { animated } from "@react-spring/three";
import { useSpring } from "@react-spring/web";
import { useLoader, useThree } from "@react-three/fiber";
import { useContext, useEffect } from "react";
import { GLTFLoader } from "three-stdlib";
import { InteractiveContext } from "../context/InteractiveContext";

export const MultiVRLoader = ({ urls, position=[0, -0.1, 0] })=>{

    const { state, setState } = useContext(InteractiveContext);
    const { get } = useThree(state=>state)

    const {rotateX} = useSpring({
        from:{
            rotateX: 0
        },
        to:{
            rotateX: Math.PI * 2
        },
        loop: true,
        config:{
            duration: 10000
        }
    })


    const [ model1, model2, model3] = useLoader(GLTFLoader, urls);

    useEffect(()=>{
        // let camera = get().controls.object;

        // setState(state.disableControls());
        // camera.position.set([0, 0, 22]);


        // setState(state.disableControls());
    }, []);

    return(
        <>
            <animated.group position={ [4,0.8,0] } rotation={rotateX.to(x=>[0, x, 0])}>
                <primitive object={ model1.scene } position={ position } scale={0.25}/>
            </animated.group>
            <animated.group position={[ 0 ,0.8, 0 ]} rotation={rotateX.to(x=>[0, x, 0])}>
                <primitive object={ model2.scene } position={ position } scale={0.25}/>
            </animated.group>
            <animated.group position={[ -4 ,0.8, 0 ]} rotation={rotateX.to(x=>[0, x, 0])}>
                <primitive object={ model3.scene } position={ position } scale={0.25}/>
            </animated.group>
        </>
    );
};
