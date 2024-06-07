import { Department } from "../interactive/utils/Department";

export class AmenityFactory{
    constructor(){
        this.geometry={}
        this.amenities = [
            new Department(AmenityFactory.LABEL[AmenityFactory.A_GYM], AmenityFactory.A_GYM, "03", 0, "gimnacio" ),
            new Department(AmenityFactory.LABEL[AmenityFactory.A_LUDOTECA], AmenityFactory.A_LUDOTECA, "03", 0, "ludoteca"),
            new Department(AmenityFactory.LABEL[AmenityFactory.A_ROOF], AmenityFactory.A_ROOF, "FPH", 0, "rooftop"),
            new Department(AmenityFactory.LABEL[AmenityFactory.A_SALON], AmenityFactory.A_SALON, "03", 0, "salon"),
            new Department(AmenityFactory.LABEL[AmenityFactory.A_S_LOUNGE], AmenityFactory.A_S_LOUNGE, "03", 0, "salon lounge"),
            new Department(AmenityFactory.LABEL[AmenityFactory.A_S_PLAY], AmenityFactory.A_S_PLAY, "03", 0, "salon play"),
            new Department(AmenityFactory.LABEL[AmenityFactory.A_S_WORK], AmenityFactory.A_S_WORK, "03", 0, "salon work"),
            new Department(AmenityFactory.LABEL[AmenityFactory.A_SUM], AmenityFactory.A_SUM, "03", 0, "SUM"),
            new Department(AmenityFactory.LABEL[AmenityFactory.A_TERRAZA], AmenityFactory.A_TERRAZA, "03", 0, "terraza"),
            new Department(AmenityFactory.LABEL[AmenityFactory.A_WELLNESS], AmenityFactory.A_WELLNESS, "03", 0, "wellness"),
        ];
        

        if(AmenityFactory.instance === null){
            AmenityFactory.instance = this;
            return this;
        }

        return AmenityFactory.instance;
    }

    addGeometry(label, geometry){
        this.geometry[label] = geometry;
        return this;
    };

    getGeometry(type){
        return this.geometry[type];
    };

    static instance = null;

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

    static LABEL = {
        [AmenityFactory.A_GYM]: "Gimnacio",
        [AmenityFactory.A_LUDOTECA]: "Ludoteca",
        [AmenityFactory.A_ROOF]: "Rooftop",
        [AmenityFactory.A_SALON]: "Salón",
        [AmenityFactory.A_S_LOUNGE]: "Lounge",
        [AmenityFactory.A_S_PLAY]: "Play",
        [AmenityFactory.A_S_WORK]: "Work",
        [AmenityFactory.A_SUM]: "SUM",
        [AmenityFactory.A_TERRAZA]: "Terraza",
        [AmenityFactory.A_WELLNESS]: "Wellness",
    }
};