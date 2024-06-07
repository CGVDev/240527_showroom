import { Department } from "../../interactive/utils/Department";
import { DepartmentFactory } from "../../interactive/utils/DepartmentFactory";
import { API } from "../../utils/API";
import { ApartmentFactory } from "../../utils/ApartmentFactory";
import { Floor, FloorFactory } from "../../utils/FloorFactory";
import { Group } from "../../utils/Group";
import { Stage_2 } from "../containers/Stage_2";
import { AmenitiesOptions } from "../utils/AmenitiesOptions";
import { ProjectOptions } from "../utils/ProjectOptions";
import { Stage } from "../utils/Stages";

export class ControlState{
    constructor(){
        this.stage = Stage.STAGE_1;
        this.radialProject = false;
        this.radialAmenities = false;
        this.radialProjectOption = ProjectOptions.INTEREST;
        this.radialAmenitiesOption = AmenitiesOptions.PLACES;
        this.stageRightMenu = ProjectOptions.INTEREST; ///Debe controlar todos los menus en right
        this.stageLeftMenu = ProjectOptions.APARTMENT_LIST;
        this.stageCentral = ProjectOptions.BUILDING;
        this.activePositionListener = true;

        this.enabledControls = true;
        this.api = new API({wp_json:`${process.env.REACT_APP_API_SERVER}:${process.env.REACT_APP_API_PORT}${process.env.REACT_APP_API_ENDPOINT}`});
        this.isVRActive = false;
        this.tour = false;
        this.amenities = [];
        this.types = [];
        this.apartments = [];
        this.selected = [];
        this.favorites = [];
        this.filtered = [];
        this.floor = [];
        this.group = [];
        this._floors = new Array(13).fill("").map((_, i)=>new Floor(i + 2));
        this._group = [
            new Group(Group.STUDIO), 
            new Group(Group.LOFT), 
            new Group(Group.BALANCE),
            new Group(Group.DUO),
            new Group(Group.SUITE),
            new Group(Group.ELEGANCE),
            new Group(Group.SKY),
            new Group(Group.ZENITH),
        ];
        // this._group = Object.keys(Group.GROUP).map((label)=>new Group(label));

        this.slider = 12;
        this.data = data.sunTicks;
        this.dayTime = this.data[this.slider];
        this.sun = new Sun();

    }

    enablePositionListener(){
        this.activePositionListener = true;
        return this.recycle();
    }

    disablePositionListener(){
        this.activePositionListener = false;
        return this.recycle();
    }

    changeControlsAvaliability(value){
        this.enabledControls = value;

    }

    setStageRightMenu(type){
        this.stageRightMenu = type;
        return this.recycle();
    }

    setAmenities(list){
        this.amenities = list;
        return this.recycle();
    }

    setRadialAmenitiesOption(type){
        this.radialAmenitiesOption = type;
        return this.recycle();
    }

    setRadialProjectOption(type){
        console.log("STATE", type)
        this.radialProjectOption = type;
        return this.recycle();
    }

    setRadialProject(value){
        this.radialProject = value;
        this.radialAmenities = !value;
        return this.recycle();
    }
    
    setRadialAmenities(value){
        this.radialProject = !value;
        this.radialAmenities = value;
        return this.recycle();
    }

    initStage1(){
        this.stageRightMenu = ProjectOptions.NULL;
        this.radialProject = false;
        this.radialAmenities = false;
        this.stage = Stage.STAGE_1;
        this.enabledControls = true;
        this.activePositionListener = true;
        return this.recycle()
    }

    initStage2(){
        this.stageRightMenu = ProjectOptions.NULL;
        this.stage = Stage.STAGE_2;
        this.isVRActive = false;
        this.enabledControls = true;
        this.activePositionListener = true;
        return this.recycle();
    }

    initStage3(){
        this.stage = Stage.STAGE_3;
        this.stageLeftMenu = ProjectOptions.FAVORITES_LIST;
        this.enabledControls = true;
        this.selected = [];
        this.filtered = [];
        this.activePositionListener = false;
        return this.recycle();
    }

    initStage4(){
        this.stage = Stage.STAGE_4;
        return this.recycle();
    }
    
    initStage5(type){
        this.stage = Stage.STAGE_5;
        return this.recycle();
    }

    setStage(stage){
        this.stage = stage;
        return this.recycle();
    }

    setApartments(data){
        this.apartments = data;
        return this.recycle();
    }

    addToSelected(item){
        let isIncluded = this.favorites.includes(item);
        if(!isIncluded){
            this.selected = [item];
            return this.recycle();
        }
        return this;
    }

    dropSelected(){
        this.selected = [];
        return this.recycle();
    }

    addFavorite(item){
        let isIncluded = this.favorites.includes(item);
        let isMin = this.favorites.length <= 3;
        if(!isIncluded && isMin){
            this.favorites = [...this.favorites, item];
            this.selected = [];
            return this.recycle();
        }
        return this;
    }

    addToFavorites(){
        if(this.selected.length > 0){
            let isIncluded = this.favorites.includes(this.selected[0]);
            if(!isIncluded){
                let _selected = this.selected[0]
                this.favorites = [...this.favorites, _selected];
                this.isVRActive = false;
                this.selected = [];
                this.tour = false;
                return this.recycle();
            }
        }
        return this;
    }

    dropFavorite(uuid){

        let _favorites = this.favorites.filter( item=>item.uuid!==uuid );
        this.favorites = _favorites;
        return this.recycle();
    }

    enableVR(){
        this.isVRActive = true;
        return this.recycle();
    }
    
    disableVR(){
        this.isVRActive = false;
        return this.recycle();
    }

    toggleVR(){
        let _status =  this.isVRActive;
        this.isVRActive = !_status;
        return this.recycle();
    }

    toggleTour(){
        this.tour = !this.tour;
        return this.recycle();
    }

    toggleFloorSelect(uuid){
        this._floors = this._floors.map(item=>item.unselect());

        let _item = this._floors.find(item=>item.uuid === uuid);
        let _index = this._floors.indexOf(_item);

        this._floors[_index] = _item.select();
        let _floors = [...this._floors];
        this._floors = _floors;
        this.filtered = [];
        
        return this.recycle();
    }

    toggleGroupSelect(label){
        this._group = this._group.map(item=>item.unselect());
        
        let _item = this._group.find(item=>item.label === label);
        let _index = this._group.indexOf(_item);

        this._group[_index] = _item.select();
        let _group = [...this._group];
        this._group = _group;
        this.filtered = [];
        return this.recycle();
    }

    setFilteredList(list){
        this.filtered = list;
        return this.recycle();
    }

    clearFilteredList(){
        this.filtered = [];
        return this.recycle();
    }

    findItem(uuid){
        let item = this._floors.find(item=>item.uuid === uuid);
        let index = this._floors.indexOf(item);
        return { item, index };
      }

    updateTime(value){
        this.slider = value;
        this.sun = this.sun.updateProps(value);
        this.dayTime = this.data[this.slider];
        return this.recycle();
    }

    recycle(){
        let state = { ...this }
        Object.setPrototypeOf(state, ControlState.prototype);
        return state;
    }
};

class Sun{
    constructor(diameter=6, maxValue=24, maxIntensity=1){
        this.diameter = diameter;
        this.maxValue = maxValue;
        this.maxIntensity = maxIntensity;
        this.tick = Math.PI / this.maxValue;
        this.pos_x = 0;
        this.pos_y = 0;
        this.intensity = 1;
    }

    updateProps(value){
        let angle = this.tick * (this.maxValue - value);
        this.pos_x = +((Math.cos(angle) * this.diameter).toFixed(2));
        this.pos_y = +((Math.sin(angle) * this.diameter).toFixed(2));
        this.intensity = +(this.maxIntensity * (this.pos_y / this.diameter)).toFixed(2)
        return this;
    }
}

class SunTick{
    constructor(minutes, index){
        this.minutes = minutes;
        this.index = index;
    }
}

const data = {
    sunTicks: [
        new SunTick(360, 0),
        new SunTick(390, 1),
        new SunTick(420, 2),
        new SunTick(450, 3),
        new SunTick(480, 4),
        new SunTick(510, 5),
        new SunTick(540, 6),
        new SunTick(570, 7),
        new SunTick(600, 8),
        new SunTick(630, 9),
        new SunTick(660, 10),
        new SunTick(690, 11),
        new SunTick(720, 12),
        new SunTick(750, 13),
        new SunTick(780, 14),
        new SunTick(810, 15),
        new SunTick(840, 16),
        new SunTick(870, 17),
        new SunTick(900, 18),
        new SunTick(930, 19),
        new SunTick(960, 20),
        new SunTick(990, 21),
        new SunTick(1020, 22),
        new SunTick(1050, 23),
        new SunTick(1080, 24),
    ]
}