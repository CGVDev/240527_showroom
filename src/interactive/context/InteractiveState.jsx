import { Vector3 } from 'three';
import { data } from '../utils/data';
import { Department } from '../utils/Department';
import { DepartmentFactory } from '../utils/DepartmentFactory';
import { API } from '../../utils/API';
import { Screen } from '../../utils/Screen';
import { ApartmentFactory } from '../../utils/ApartmentFactory';

export class InteractiveState{
    constructor(){
        this.departments = [];
        this.selected = [];
        this.favorites = [];
        this.activeScreen = Screen.PANORAMIC;
        this.currentVR = "";
        this.tour360 = null;

        this.interestPoint = "";

        this.controlsEnabled = true;
        this.api = new API({ wp_json:`${process.env.REACT_APP_API_SERVER}:${process.env.REACT_APP_API_PORT}${process.env.REACT_APP_API_ENDPOINT}` });
        this.origin = new Vector3();
        this.minCityDistance = 13; //6
        this.maxCityDistance = 19; //8
        this.cityMaxOpacity = 0.98;
        this.clamp = ((min, max)=>(num)=>Math.min(Math.max(num, min), max))(this.minCityDistance, this.maxCityDistance);

        this.isMobile = (
            (a)=>(
                (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)) || (/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) 
                ? true : false
            ))(navigator.userAgent||navigator.vendor||window.opera);
        this.isFullscreen = false;
        this.types = [];


        this.tours = [];
        this.amenities = [
            new Department("Gimnacio", DepartmentFactory.A_GYM, "03", 0, "gimnacio" ),
            new Department("Ludoteca", DepartmentFactory.A_LUDOTECA, "03", 0, "ludoteca"),
            new Department("Rooftop", DepartmentFactory.A_ROOF, "FPH", 0, "rooftop"),
            new Department("Salón", DepartmentFactory.A_SALON, "03", 0, "salon"),
            new Department("Lounge", DepartmentFactory.A_S_LOUNGE, "03", 0, "salon lounge"),
            new Department("Play", DepartmentFactory.A_S_PLAY, "03", 0, "salon play"),
            new Department("Work", DepartmentFactory.A_S_WORK, "03", 0, "salon work"),
            new Department("SUM", DepartmentFactory.A_SUM, "03", 0, "SUM"),
            new Department("Terraza", DepartmentFactory.A_TERRAZA, "03", 0, "terraza"),
            new Department("Wellness", DepartmentFactory.A_WELLNESS, "03", 0, "wellness"),
        ];
        this.isAmenities = false;
        
        this.departments3DSelector = false;
        this.departmentHighlight = [];

        this.data = data.sunTicks;
        this.sun = new Sun();

        this.cityVisibility = true;
        this.cityOpacity = 1;

        this.menuDaytime = false;

        this.slider = 12;
        this.dayTime = this.data[this.slider];

        this.planePosition = {x: 0, y: 0, z: 0};

        this.cameraVertical = 5;
        this.cameraDistance = 20;
        this.cameraPosition = {x: -15, y: 12, z: -15};

        this.radialMenuActive = false;
        this.radialMenuContent = [];

        this.listDeptIsActive = false;
        this.listDeptIsCompressed = false;
        this.isDaytimeDownActive = false;

        this.listFavoritesIsActive = false;

        this.windowBaseIndex = 900;
        this.isXray = false;
        this.isCutter = false;
        // this.cameraPosition = new Vector3();
        this.updateTime(this.slider);

        this.rootUrl = "./";
        this.modelDir = "models/";
        this.json = ""
        this.cityModel  = "city.7.glb"
        this.mainModel = "scene.gltf"


        

//         window.addEventListener('gesturestart', e => e.preventDefault());
// window.addEventListener('gesturechange', e => e.preventDefault());
// window.addEventListener('gestureend', e => e.preventDefault());

    }

    

    setInterestPoint(point){
        this.interestPoint = point;
        return this.recycle();
    }

    cleanInterestPoint(){
        this.interestPoint = "";
        return this.recycle();
    }

    setSelected(selected){
        let _selected = selected.map(s=>this.departments.find(item=>item.uuid === s));
        console.log("INT_STATE", _selected, selected)
        this.selected = [..._selected];
        return this.recycle();
    }

    setFavorites(favs){
        let _favs = favs.map(fav=>this.departments.find(item=>item.uuid === fav));
        this.favorites = _favs;
        return this.recycle();
    }

    setCurrentVR(type){
        this.activeScreen = Screen.VR;
        this.currentVR = type;
        return this.recycle();
    }

    closeCurrentVR(){
        this.activeScreen = Screen.PANORAMIC;
        this.currentVR = "";
        return this.recycle();
    }

    openTour(data){
        this.activeScreen = Screen.TOUR;
        this.tour360 = data;
        return this.recycle();
    }

    changeSphere(data){
        this.tour360 = data;
        return this.recycle();
    }

    closeTour(){
        this.activeScreen = Screen.PANORAMIC;
        return this.recycle();
    }

    activeExplora(){
        this.activeScreen = Screen.PANORAMIC;
        this.controlsEnabled = true;
        return this.recycle();
    }

    activeCompara(){
        this.activeScreen = Screen.COMPARA;
        return this.recycle();
    }

    activeExit(){
        console.log("ACTIVE EXIT");
        this.activeScreen = Screen.EXIT;
        return this.recycle();
    }




    getModelUrl(){
        return this.rootUrl + this.modelDir
    }

    enableControls(){
        this.controlsEnabled = true;
        return this.updateState();
    }

    disableControls(){
        this.controlsEnabled = false;
        return this.updateState();
    }

    updateIndex(){
        this.windowBaseIndex += 1;
        return this.updateState();
    }

    setTopIndex(){
        this.windowBaseIndex += 1
        return this.updateState();
    }

    toggleMenuDaytime(){
        this.menuDaytime = !this.menuDaytime;
        this.isDaytimeDownActive = false;
        return this.updateState();
    }

    updateCityVisibility(){
        this.cityVisibility = !this.cityVisibility;
        return this.updateState();
    }

    updateSun(value){
        this.sun = this.sun.updateProps(value);
        return this.updateState();
    }

    updateSlider(value){
        this.slider = value;
        return this.updateState();
    }

    updateTime(value){
        this.slider = value;
        this.sun = this.sun.updateProps(value);
        this.dayTime = this.data[this.slider];
        return this.updateState();
    }

    updateState(){
        let state = { ...this }
        Object.setPrototypeOf(state, InteractiveState.prototype);
        return state;
    }

    recycle(){
        let state = { ...this }
        Object.setPrototypeOf(state, InteractiveState.prototype);
        return state;
    }

    updateDistance(num){
        let opacity = ((this.clamp(num) - this.minCityDistance) * this.cityMaxOpacity) / (this.maxCityDistance - this.minCityDistance);
        this.cameraDistance = num;
        if(opacity !== this.cityOpacity){
            this.cityOpacity = opacity;
        }
        return this.updateState();;
    }

    setCameraPosition(position){
        this.cameraPosition = position;
        return this.updateState();
    }

    updateCameraVertical(value){
        this.cameraVertical = value;
        return this.updateState();
    }


    showRadialMenu(menu){
        this.isDaytimeDownActive = false;
        this.listDeptIsActive = false;
        this.radialMenuActive = true;
        this.radialMenuContent = [menu];

        return this.updateState();
    }

    hideRadialMenu(){
        this.radialMenuActive = false;
        return this.updateState();
    }

    updateActiveMenu(menu){
        this.radialMenuContent = [menu];
        return this.updateState();
    }

    cleanActiveMenu(){
        this.radialMenuContent = [];
        return this.updateState();
    }

    setData(data){
        this.departments = data;
        return this.updateState();
    }

    addToFavorites(item){
        let isIncluded = this.favorites.includes(item);
        if(!isIncluded){
            this.departmentHighlight = [];
            this.favorites = [...this.favorites, item];
            return this.updateState();
        }
        return this;
    }

    dropFavorite(uuid){
        this.favorites = this.favorites.filter( item=>item.uuid!==uuid );
        return this.updateState();
    }

    addTour(tour){
        this.tours.push(tour);
        return this.updateState();
    }

    dropTour(tour){
        this.tours = this.tours.filter(item=>item.label !== tour);
        return this.updateState();
    }

    toggleDeptList(){
        this.radialMenuActive = false;
        this.isDaytimeDownActive = false;
        this.departmentHighlight = [];
        this.listFavoritesIsActive = false;
        this.listDeptIsActive = !this.listDeptIsActive;
        return this.updateState();
    }

    hideDeptList(){
        this.listDeptIsActive = false;
        this.listFavoritesIsActive = false;
        return this.updateState();
    }

    toggleFullscreen(){
        this.isFullscreen = document.fullscreenElement ? true : false;
        if(!this.isFullscreen){
            document.body.requestFullscreen();
        }
        else{
            document.exitFullscreen();
        }
        return this.updateState();
    }

    toggleDaytimeDown(){
        this.isDaytimeDownActive = !this.isDaytimeDownActive;
        this.listDeptIsActive = false
        this.radialMenuActive = false
        return this.updateState();
    }

    hideDaytimeDown(){
        this.isDaytimeDownActive = false;
        return this.updateState();
    }

    setType(types){
        this.types = [...types];
        return this.updateState();
    }

    setFilterType(type){
        this.api.type = type;
        return this.updateState();
    }

    toggleMenuDepartment3D(){
        this.departments3DSelector = !this.departments3DSelector;
        this.radialMenuActive = false;
        return this.updateState();
    }

    enableMenuDepartment3D(){
        this.departments3DSelector = true;
        this.radialMenuActive = false;
        return this.updateState();
    }

    toggleDept3DVisibility(){
        this.departments3DSelector = !this.departments3DSelector;
        return this.updateState();
    }

    disableMenuDepartment3D(){
        this.departments3DSelector = false;
        this.isAmenities = false;

        return this.updateState();
    }

    toggleAmenities(){
        this.isAmenities = !this.isAmenities;
        return this.updateState();
    }
    
    enableAmenities(){
        this.isAmenities = true;
        return this.updateState();
    }

    toggleXray(){
        this.isXray = !this.isXray;
        this.radialMenuActive = false;
        return this.updateState();
    }

    setPlanePosition(value){
        this.planePosition = {...this.planePosition, ...value};
        return this.updateState();
    }

    toggleCutter(){
        this.isCutter = !this.isCutter;
        this.radialMenuActive = false;
        return this.updateState();
    }

    addDepartmentHighlight(department){
        this.departmentHighlight = [department];
        return this.updateState();
    }

    cleanDepartmentHighlight(){
        this.departmentHighlight = [];
        return this.updateState();
    }

    toggleDeptListCompressed(){
        this.listDeptIsCompressed = !this.listDeptIsCompressed;
        return this.updateState();
    }

    toggleFavoritesList(){
        this.listFavoritesIsActive = this.listDeptIsActive;
        this.listDeptIsActive = !this.listDeptIsActive;
        return this.updateState();
    }

}

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