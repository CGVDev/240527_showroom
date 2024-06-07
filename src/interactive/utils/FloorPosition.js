import { Box3, Vector3 } from "three";

export const FloorPosition = (()=>{
    const floor = {};

    const addPosition = (label, object)=>{
        let box = new Box3().setFromObject(object);
        let target = new Vector3();
        box.getCenter(target);
        floor[label] = target.y;
    }

    const getPosition = (num)=>{
        return floor[num];
    }

    const FPB = "PB";
    const F01 = "1";
    const F02 = "2";
    const F03 = "3";
    const F04 = "4";
    const F05 = "5";
    const F06 = "6";
    const F07 = "7";
    const F08 = "8";
    const F09 = "9";
    const F10 = "10";
    const F11 = "11";
    const F12 = "12";
    const F13 = "13";
    const F14 = "14";
    const FPH = "PH";

    return { addPosition, getPosition, F01, F02, F03, F04, F05, F06, F07, F08, F09, F10, F11, F12, F13, F14, FPH, FPB }
})();