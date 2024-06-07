// import data from '../utils/db.json';
import { ApartmentFactory } from './ApartmentFactory';

export class API{
    constructor({ root_url='./', wp_json="http://192.168.1.108:80/xenter/wp-json/da_manage/v1" }){
        this.rootUrl = root_url;
        this.wp_json = wp_json;
        this.list = "/list";
        this.types = "/types";
        this.img = "/img/";
        this.models = "models/";
        this.tour = "tours/";
        this.floor = '';
        this.type = '';
        
    }



    getModelRoute(model){
        return this.rootUrl + this.models + model;
    }

    getTourRoute(data){
        console.log(ApartmentFactory.DETAIL[ApartmentFactory.TOUR[data.payload.typo]])
        return this.rootUrl + this.tour + ApartmentFactory.TOUR[data.payload.typo] + `?media-name=${ApartmentFactory.DETAIL[ApartmentFactory.TOUR[data.payload.typo]].ROOMS[data.payload.sphere]}`;
    }

    getWPTypesRoute(getParams=null){
        return this.wp_json + this.type + (getParams ? `?${getParams}` : "");
    }
    
    getWPListRoute(getParams=null, limit=1000){
        return this.wp_json + this.list + `?limit=${limit}&` + (getParams ? `${getParams}` : "");
    }
    
    getWPImageRoute(img){
        return this.themeUrl + this.img + img;
    }

    async get(){
        // if('siteData' in window){
            const res = await fetch(this.getWPListRoute());
            const { departments } = await res.json();
            let route = this.getWPListRoute()
            // console.log({route, departments, res});
            return departments;
        // }
        // else{
        //     console.log("departamentos: ", data.departments.length);
        //     return data.departments;
        // }
    }

    async apartmentType(){
        const res = await fetch(this.rootUrl + "type");
        return await res.json();
    }

    async getFilteredList(types, floors){
        let _query = this.getWPListRoute((types.length > 0 ? `type=${types.join(',')}&` : "") + (floors.length > 0 ? `floor=${floors.join(',')}` : "")); 
        const res = await fetch(_query);
        return await res.json();
    }


}