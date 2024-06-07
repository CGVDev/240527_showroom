import { v4 as UUID } from "uuid";

export class Apartment{
    constructor(label, type, floor, area, rooms, vtUrl="", isSold=false, uuid=null){
        this.uuid = uuid || UUID();
        this.type = type;
        this.floor = floor;
        this.label = label;
        this.isSold = isSold;
        this.area = area;
        this.rooms = rooms;
        this.vtUrl = vtUrl;
    }
}