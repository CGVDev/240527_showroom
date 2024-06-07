// import data from '../utils/db.json';

export class API{
    constructor({ root_url='./', theme_url='./', jsonRoute="/wp-json/da_manage/v1", modelRoute="models/" }){
        this.rootUrl = root_url;
        this.themeUrl = theme_url;
        this.wp_json = this.rootUrl + jsonRoute;
        this.list = "/list";
        this.types = "/types";
        this.img = "/img/";
        this.models = "/models/";
        this.tour = "/tour/";
        this.floor = '';
        this.type = '';
    }

    getModelRoute(model){
        return this.themeUrl + this.models + model;
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
        // const res = await fetch(this.getWPListRoute());
        // const { departments } = await res.json();
        // let route = this.getWPListRoute()
        // console.log({route, departments, res});
        // return departments;
        // console.log("departamentos: ", data.departments.length);
        // return data.departments;
    }

    async apartmentType(){
        const res = await fetch(this.rootUrl + "type");
        return await res.json();
    }


}