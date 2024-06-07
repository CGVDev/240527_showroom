import { v4 as uuid } from "uuid";

export class FloorFactory{
    constructor(){
        this.floorList = {};

        if(FloorFactory.instance === null){
            FloorFactory.instance = this;
            return this;
        }

        return FloorFactory.instance;

    }

    addFloor(label, object){

    }

    getFloorList(){
        let _floors = Object.keys(this.floorList);
        return _floors;
    }

    static instance = null;
    static FPB = "PB";
    static F01 = "1";
    static F02 = "2";
    static F03 = "3";
    static F04 = "4";
    static F05 = "5";
    static F06 = "6";
    static F07 = "7";
    static F08 = "8";
    static F09 = "9";
    static F10 = "10";
    static F11 = "11";
    static F12 = "12";
    static F13 = "13";
    static F14 = "14";
    static FPH = "PH";

    static VALUE = {
        [FloorFactory.FPB]: "PB",
        [FloorFactory.F01]: "1",
        [FloorFactory.F02]: "2",
        [FloorFactory.F03]: "3",
        [FloorFactory.F04]: "4",
        [FloorFactory.F05]: "5",
        [FloorFactory.F06]: "6",
        [FloorFactory.F07]: "7",
        [FloorFactory.F08]: "8",
        [FloorFactory.F09]: "9",
        [FloorFactory.F10]: "10",
        [FloorFactory.F11]: "11",
        [FloorFactory.F12]: "12",
        [FloorFactory.F13]: "13",
        [FloorFactory.F14]: "14",
        [FloorFactory.FPH]: "PH",
    }
};

export class Floor{
    constructor(label, selected=false){
        this.uuid = uuid();
        this.label = label;
        this.selected = selected;
    }

    toggleSelected(){
        this.selected = !this.selected;
        return this.recycle();
    }

    select(){
        this.selected = true;
        return this.recycle();
    }
    
    unselect(){
        this.selected = false;
        return this.recycle();
    }

    recycle(){
        let _floor = {...this};
        Object.setPrototypeOf(_floor, Floor.prototype);
        return _floor;
    }
}