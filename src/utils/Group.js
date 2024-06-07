import { ApartmentFactory } from "./ApartmentFactory"

export class Group{
    constructor(label, selected=false){
        this.label = label;
        this.selected = selected;
    }

    toggleSelected(){
        this.selected = !this.selected
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
        let state = { ...this }
        Object.setPrototypeOf(state, Group.prototype);
        return state;
    }

    static BALANCE = "Balance";
    static STUDIO = "Studio";
    static DUO = "Duo";
    static LOFT = "Loft";
    static SUITE = "Suite";
    static ELEGANCE = "Elegance";
    static SKY = "Sky";
    static ZENITH = "Zenith";

    static GROUP = {
        [Group.BALANCE]: [
            "T05",
            "T06"
        ],
        [Group.STUDIO]: [
            "T01",
            "T02",
            "T03",
            "T04",
            "T07",
            "T08",
            "T09",
            "T10",
        ],
        [Group.DUO]: [
            "T11",
            "T18"
        ],
        [Group.LOFT]: [
            "T12",
            "T17"
        ],
        [Group.SUITE]: [
            "T13",
            "T13N2",
            "T16",
            "T16N2",
        ],
        [Group.ELEGANCE]: [
            "T14",
            "T15",
        ],
        [Group.SKY]: [
            "PH-A",
            "PH-C",
        ],
        [Group.ZENITH]: [
            "PH-B",
        ],
    };

    static SPEACH = {
        [Group.BALANCE]: '“Departamentos que gozan de 2 orientaciones que llenan tu hogar de luz natural, una recámara con vista panoramica y un family con opción a convertirse en una recámara adicional.”',
        [Group.STUDIO]: '"Descubre el encanto de un espacio ingeniosamente diseñado para ofrecer comodidad y funcionalidad en cada rincón."',
        [Group.DUO]: '“Descubre un diseño sofisticado y funcional, con una exclusa de acceso y un práctico cuarto de lavado, todo pensado para tu confort y conveniencia."',
        [Group.LOFT]: '“Experimenta la perfecta fusión entre trabajo y vida en este increíble loft, donde el diseño innovador se encuentra con un amplio ventanal que inunda el espacio con luz natural."',
        [Group.SUITE]: '“Departamentos que gozan de 2 orientaciones que llenan tu hogar de luz natural y una recamara con vista panoramica.”',
        [Group.ELEGANCE]: '“Descubre la amplitud y la luminosidad en este espectacular departamento con un gran balcón que ilumina todo el espacio, junto con recámaras realmente espaciosas que te brindan el confort y la comodidad que mereces”',
        [Group.SKY]: '“Disfruta del lujo y la luminosidad en este magnífico penthouse, donde las habitaciones espaciosas y realmente iluminadas se complementan con tres orientaciones que garantizan luz natural durante todo el día.”',
        [Group.ZENITH]: '"Sumérgete en la grandeza de este penthouse, donde todos los espacios se enmarcan con una increíble vista de la ciudad, mientras disfrutas de la tranquilidad de nuestra ubicación privilegiada."',
    }
}