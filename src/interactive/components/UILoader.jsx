import { useProgress, Html } from '@react-three/drei';

export const UILoader = ()=>{
    // const { active, progress, errors, item, loaded, total } = useProgress();
    const { progress } = useProgress();
    return <Html center>{ progress } %</Html>
}