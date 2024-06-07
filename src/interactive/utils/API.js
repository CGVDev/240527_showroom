import data from '../utils/db.json';

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

    getTourRoute(tour){
        let _tour = "";
        console.log("API TOUR....", tour);
        switch (tour) {
            case "T01":
                _tour = "T01"
                break;

            case "T10":
                _tour = "T01"
                break;

            case "T02":
                _tour = "T02"
                break;
            case "T03":
                _tour = "T02"
                break;
            case "T04":
                _tour = "T02"
                break;
            case "T07":
                _tour = "T02"
                break;
            case "T08":
                _tour = "T02"
                break;
            case "T09":
                _tour = "T02"
                break;
                
            case "T05":
                _tour = "T05"
                break;
            
            case "T06":
                _tour = "T05"
                break;
                    
            case "T11":
                _tour = "T11"
                break;

            case "T12":
                _tour = "T12"
                break;
            
            case "T13":
                _tour = "T13"
                break;
            
            case "T16":
                _tour = "T13"
                break;
            
            case "T13N2":
                _tour = "T13N2"
                break;
            
            case "T16N2":
                _tour = "T13N2"
                break;
            
            case "T14":
                _tour = "T14"
                break;

            case "T15":
                _tour = "T14"
                break;
            
            case "T17":
                _tour = "T17"
                break;
            
            case "T18":
                _tour = "T18"
                break;
            
            case "PH-A":
                _tour = "PH-C"
                break;
            
            case "PH-C":
                _tour = "PH-C"
                break;
            
            case "PH-B":
                _tour = "PH-B"
                break;
            default:
                _tour = "T01"
                break;
        }
        return this.themeUrl + this.tour + _tour;
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
        console.log("departamentos: ", data.departments.length);
        return data.departments;
    }

    async apartmentType(){
        const res = await fetch(this.rootUrl + "type");
        return await res.json();
    }


}