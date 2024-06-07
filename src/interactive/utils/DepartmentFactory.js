export class DepartmentFactory{
    constructor(){
        this.geometry = {};
        
        if(DepartmentFactory.instance == null){
            DepartmentFactory.instance = this;
            return this;
        }
        
        return DepartmentFactory.instance;
    }

    addGeometry(label, geometry){
        this.geometry[label] = geometry;
        return this;
    };
    
    getGeometry(type){
        console.log(type);
        return this.geometry[type];
    }

    static instance = null;
    static T01 = "T01"
    static T02 = "T02"
    static T03 = "T03"
    static T04 = "T04"
    static T05 = "T05"
    static T06 = "T06"
    static T07 = "T07"
    static T08 = "T08"
    static T09 = "T09"
    static T10 = "T10"
    static T11 = "T11"
    static T12 = "T12"
    static T13 = "T13"
    static T13N2 = "T13N2"
    static T14 = "T14"
    static T15 = "T15"
    static T16 = "T16"
    static T16N2 = "T16N2"
    static T17 = "T17"
    static T18 = "T18"
    static TPH_A = "PH-A"
    static TPH_B = "PH-B"
    static TPH_C = "PH-C"
    static A_GYM = "A_GYM"
    static A_LUDOTECA = "A_LUDOTECA"
    static A_ROOF = "A_ROOF"
    static A_SALON = "A_SALON"
    static A_S_LOUNGE = "A_S_LOUNGE"
    static A_S_PLAY = "A_S_PLAY"
    static A_S_WORK = "A_S_WORK"
    static A_SUM = "A_SUM"
    static A_TERRAZA = "A_TERRAZA"
    static A_WELLNESS = "A_WELLNESS"
    static CUTTER = "CUTTER"
}