import { v4 as UUID } from "uuid";

export class Department{
    constructor(label, type, floor, area, vtUrl="", isSold=false, uuid=null){
        this.uuid = uuid || UUID();
        this.type = type;
        this.floor = floor;
        this.label = label;
        this.isSold = isSold;
        this.area = area;
        this.rooms = [];
        this.vtUrl = vtUrl;
    }
}