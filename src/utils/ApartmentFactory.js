import { Group } from "./Group";

export class ApartmentFactory{
    constructor(){
        this.geometry = {};
        
        if(ApartmentFactory.instance === null){
            ApartmentFactory.instance = this;
            return this;
        }
        
        return ApartmentFactory.instance;
    }

    addGeometry(label, geometry){
        this.geometry[label] = geometry;
        return this;
    };
    
    getGeometry(type){
        return this.geometry[type];
    }

    static TYPOLOGY = {
        T02: "T02",
        T05: "T05",
        T13: "T13",
        T14: "T14",
        T18: "T18",
        T17: "T17",
        PHB: "PH-B",
        PHC: "PH-C",
        REAL: "REAL"
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
    static REAL = "REAL"

    static TOUR ={
        [ApartmentFactory.T01]: ApartmentFactory.TYPOLOGY.T02,
        [ApartmentFactory.T02]: ApartmentFactory.TYPOLOGY.T02,
        [ApartmentFactory.T03]: ApartmentFactory.TYPOLOGY.T02,
        [ApartmentFactory.T04]: ApartmentFactory.TYPOLOGY.T02,
        [ApartmentFactory.T05]: ApartmentFactory.TYPOLOGY.T05,
        [ApartmentFactory.T06]: ApartmentFactory.TYPOLOGY.T05,
        [ApartmentFactory.T07]: ApartmentFactory.TYPOLOGY.T02,
        [ApartmentFactory.T08]: ApartmentFactory.TYPOLOGY.T02,
        [ApartmentFactory.T09]: ApartmentFactory.TYPOLOGY.T02,
        [ApartmentFactory.T10]: ApartmentFactory.TYPOLOGY.T02,
        [ApartmentFactory.T11]: ApartmentFactory.TYPOLOGY.T18,
        [ApartmentFactory.T12]: ApartmentFactory.TYPOLOGY.T17,
        [ApartmentFactory.T13]: ApartmentFactory.TYPOLOGY.T13,
        [ApartmentFactory.T13N2]: ApartmentFactory.TYPOLOGY.T13,
        [ApartmentFactory.T14]: ApartmentFactory.TYPOLOGY.T14,
        [ApartmentFactory.T15]: ApartmentFactory.TYPOLOGY.T14,
        [ApartmentFactory.T16]: ApartmentFactory.TYPOLOGY.T13,
        [ApartmentFactory.T16N2]: ApartmentFactory.TYPOLOGY.T13,
        [ApartmentFactory.T17]: ApartmentFactory.TYPOLOGY.T17,
        [ApartmentFactory.T18]: ApartmentFactory.TYPOLOGY.T18,
        [ApartmentFactory.TPH_A]: ApartmentFactory.TYPOLOGY.PHC,
        [ApartmentFactory.TPH_B]: ApartmentFactory.TYPOLOGY.PHB,
        [ApartmentFactory.TPH_C]: ApartmentFactory.TYPOLOGY.PHC,
        [ApartmentFactory.REAL]: ApartmentFactory.TYPOLOGY.REAL,
    };

    static GROUP = {
        [ApartmentFactory.T01]: Group.STUDIO,
        [ApartmentFactory.T02]: Group.STUDIO,
        [ApartmentFactory.T03]: Group.STUDIO,
        [ApartmentFactory.T04]: Group.STUDIO,
        [ApartmentFactory.T05]: Group.BALANCE,
        [ApartmentFactory.T06]: Group.BALANCE,
        [ApartmentFactory.T07]: Group.STUDIO,
        [ApartmentFactory.T08]: Group.STUDIO,
        [ApartmentFactory.T09]: Group.STUDIO,
        [ApartmentFactory.T10]: Group.STUDIO,
        [ApartmentFactory.T11]: Group.DUO,
        [ApartmentFactory.T12]: Group.LOFT,
        [ApartmentFactory.T13]: Group.SUITE,
        [ApartmentFactory.T13N2]: Group.SUITE,
        [ApartmentFactory.T14]: Group.ELEGANCE,
        [ApartmentFactory.T15]: Group.ELEGANCE,
        [ApartmentFactory.T16]: Group.SUITE,
        [ApartmentFactory.T16N2]: Group.SUITE,
        [ApartmentFactory.T17]: Group.LOFT,
        [ApartmentFactory.T18]: Group.DUO,
        [ApartmentFactory.TPH_A]: Group.SKY,
        [ApartmentFactory.TPH_B]: Group.ZENITH,
        [ApartmentFactory.TPH_C]: Group.SKY,
    }
    
    static ROOMS = {
        ENTRADA: "entrada",
        COCINA: "cocina",
        COCINA_S: "cocina_s",
        SALA_P: "sala_p",
        SALA_S: "sala_s",
        BANO_P: "bano_p",
        BANO_S: "bano_s",
        BANO_T: "bano_t",
        RECAMARA_P: "recamara_p",
        RECAMARA_S: "recamara_s",
        RECAMARA_T: "recamara_t",
        VESTIDOR: "vestidor",
        STUDIO: "BALANCE",
        BALANCE: "STUDIO",
        DUO: "DUO",
        LOFT: "LOFT",
        SUITE: "SUITE",
        ELEGANCE: "ELEGANCE",
        SKY: "SKY",
        ZENITH: "ZENITH",

    }

    static DETAIL = {
        [ApartmentFactory.TYPOLOGY.T02]:{
            ROOMS:{
                [ApartmentFactory.ROOMS.ENTRADA]: ApartmentFactory.ROOMS.ENTRADA,
                [ApartmentFactory.ROOMS.COCINA]: ApartmentFactory.ROOMS.COCINA,
                [ApartmentFactory.ROOMS.BANO_P]: ApartmentFactory.ROOMS.BANO_P,
                [ApartmentFactory.ROOMS.RECAMARA_P]: ApartmentFactory.ROOMS.RECAMARA_P,
                DEFAULT: ApartmentFactory.ROOMS.ENTRADA
            },
            CLAIM: 'Descubre el encanto de un espacio ingeniosamente diseñado para ofrecer comodidad y funcionalidad en cada rincón.',
        },
        [ApartmentFactory.TYPOLOGY.T05]:{
            ROOMS:{
                [ApartmentFactory.ROOMS.COCINA]: ApartmentFactory.ROOMS.COCINA,
                [ApartmentFactory.ROOMS.SALA_P]: ApartmentFactory.ROOMS.SALA_P,
                [ApartmentFactory.ROOMS.RECAMARA_P]: ApartmentFactory.ROOMS.RECAMARA_P,
                [ApartmentFactory.ROOMS.BANO_P]: ApartmentFactory.ROOMS.BANO_P,
                [ApartmentFactory.ROOMS.SALA_S]: ApartmentFactory.ROOMS.SALA_S,
                [ApartmentFactory.ROOMS.RECAMARA_S]: ApartmentFactory.ROOMS.RECAMARA_S,
                [ApartmentFactory.ROOMS.BANO_S]: ApartmentFactory.ROOMS.BANO_S,
                DEFAULT: ApartmentFactory.ROOMS.COCINA
            },
            CLAIM: 'Departamentos que gozan de 2 orientaciones que llenan tu hogar de luz natural, una recámara con vista panoramica y un family con opción a convertirse en una recámara adicional.',
        },
        [ApartmentFactory.TYPOLOGY.T13]:{
            ROOMS:{
                [ApartmentFactory.ROOMS.COCINA]: ApartmentFactory.ROOMS.COCINA,
                [ApartmentFactory.ROOMS.SALA_P]: ApartmentFactory.ROOMS.SALA_P,
                [ApartmentFactory.ROOMS.RECAMARA_P]: ApartmentFactory.ROOMS.RECAMARA_P,
                [ApartmentFactory.ROOMS.BANO_P]: ApartmentFactory.ROOMS.BANO_P,
                [ApartmentFactory.ROOMS.RECAMARA_S]: ApartmentFactory.ROOMS.RECAMARA_S,
                [ApartmentFactory.ROOMS.BANO_S]: ApartmentFactory.ROOMS.BANO_S,
                DEFAULT: ApartmentFactory.ROOMS.COCINA
            },
            CLAIM: "Departamentos que gozan de 2 orientaciones que llenan tu hogar de luz natural y una recamara con vista panorámica.",
        },
        [ApartmentFactory.TYPOLOGY.T14]:{
            ROOMS:{
                [ApartmentFactory.ROOMS.COCINA]: ApartmentFactory.ROOMS.COCINA,
                [ApartmentFactory.ROOMS.SALA_P]: ApartmentFactory.ROOMS.SALA_P,
                [ApartmentFactory.ROOMS.RECAMARA_P]: ApartmentFactory.ROOMS.RECAMARA_P,
                [ApartmentFactory.ROOMS.BANO_P]: ApartmentFactory.ROOMS.BANO_P,
                [ApartmentFactory.ROOMS.RECAMARA_S]: ApartmentFactory.ROOMS.RECAMARA_S,
                [ApartmentFactory.ROOMS.BANO_S]: ApartmentFactory.ROOMS.BANO_S,
                DEFAULT: ApartmentFactory.ROOMS.COCINA
            },
            CLAIM: "Descubre la amplitud y la luminosidad en este espectacular departamento con un gran balcón que ilumina todo el espacio, junto con recámaras realmente espaciosas que te brindan el confort y la comodidad que mereces.",
        },
        [ApartmentFactory.TYPOLOGY.T17]:{
            ROOMS:{
                [ApartmentFactory.ROOMS.ENTRADA]: ApartmentFactory.ROOMS.ENTRADA,
                [ApartmentFactory.ROOMS.SALA_P]: ApartmentFactory.ROOMS.SALA_P,
                [ApartmentFactory.ROOMS.COCINA]: ApartmentFactory.ROOMS.COCINA,
                [ApartmentFactory.ROOMS.RECAMARA_P]: ApartmentFactory.ROOMS.RECAMARA_P,
                [ApartmentFactory.ROOMS.BANO_P]: ApartmentFactory.ROOMS.BANO_P,
                DEFAULT: ApartmentFactory.ROOMS.ENTRADA
            },
            CLAIM: "Experimenta la perfecta fusión entre trabajo y vida en este increíble loft, donde el diseño innovador se encuentra con un amplio ventanal que inunda el espacio con luz natural.",
        },
        [ApartmentFactory.TYPOLOGY.T18]:{
            ROOMS:{
                [ApartmentFactory.ROOMS.ENTRADA]: ApartmentFactory.ROOMS.ENTRADA,
                [ApartmentFactory.ROOMS.SALA_P]: ApartmentFactory.ROOMS.SALA_P,
                [ApartmentFactory.ROOMS.COCINA]: ApartmentFactory.ROOMS.COCINA,
                [ApartmentFactory.ROOMS.RECAMARA_P]: ApartmentFactory.ROOMS.RECAMARA_P,
                [ApartmentFactory.ROOMS.BANO_P]: ApartmentFactory.ROOMS.BANO_P,
                [ApartmentFactory.ROOMS.RECAMARA_S]: ApartmentFactory.ROOMS.RECAMARA_S,
                [ApartmentFactory.ROOMS.BANO_S]: ApartmentFactory.ROOMS.BANO_S,
                DEFAULT: ApartmentFactory.ROOMS.ENTRADA
            },
            CLAIM: "Descubre un diseño sofisticado y funcional, con una exclusa de acceso y un práctico cuarto de lavado, todo pensado para tu confort y conveniencia.",
        },
        [ApartmentFactory.TYPOLOGY.PHB]:{
            ROOMS:{
                [ApartmentFactory.ROOMS.SALA_P]: ApartmentFactory.ROOMS.SALA_P,
                [ApartmentFactory.ROOMS.COCINA]: ApartmentFactory.ROOMS.COCINA,
                [ApartmentFactory.ROOMS.COCINA_S]: ApartmentFactory.ROOMS.COCINA_S,
                [ApartmentFactory.ROOMS.SALA_S]: ApartmentFactory.ROOMS.SALA_S,
                [ApartmentFactory.ROOMS.BANO_P]: ApartmentFactory.ROOMS.BANO_P,
                [ApartmentFactory.ROOMS.RECAMARA_S]: ApartmentFactory.ROOMS.RECAMARA_S,
                [ApartmentFactory.ROOMS.RECAMARA_T]: ApartmentFactory.ROOMS.RECAMARA_T,
                [ApartmentFactory.ROOMS.BANO_T]: ApartmentFactory.ROOMS.BANO_T,
                DEFAULT: ApartmentFactory.ROOMS.SALA_P
            },
            CLAIM: "Sumérgete en la grandeza de este penthouse, donde todos los espacios se enmarcan con una increíble vista de la ciudad, mientras disfrutas de la tranquilidad de nuestra ubicación privilegiada."
        },
        [ApartmentFactory.TYPOLOGY.PHC]:{
            ROOMS:{
                [ApartmentFactory.ROOMS.COCINA]: ApartmentFactory.ROOMS.COCINA,
                [ApartmentFactory.ROOMS.SALA_P]: ApartmentFactory.ROOMS.SALA_P,
                [ApartmentFactory.ROOMS.SALA_S]: ApartmentFactory.ROOMS.SALA_S,
                [ApartmentFactory.ROOMS.BANO_P]: ApartmentFactory.ROOMS.BANO_P,
                [ApartmentFactory.ROOMS.VESTIDOR]: ApartmentFactory.ROOMS.VESTIDOR,
                [ApartmentFactory.ROOMS.RECAMARA_S]: ApartmentFactory.ROOMS.RECAMARA_S,
                [ApartmentFactory.ROOMS.RECAMARA_T]: ApartmentFactory.ROOMS.RECAMARA_T,
                [ApartmentFactory.ROOMS.BANO_S]: ApartmentFactory.ROOMS.BANO_S,
                DEFAULT: ApartmentFactory.ROOMS.COCINA
            },
            CLAIM: "Disfruta del lujo y la luminosidad en este magnífico Penthouse, donde las habitaciones espaciosas y realmente iluminadas se complementan con tres orientaciones que garantizan luz natural durante todo el día.",
        },
        [ApartmentFactory.TYPOLOGY.REAL]:{
            ROOMS: {
                [ApartmentFactory.ROOMS.ZENITH]: ApartmentFactory.ROOMS.ZENITH,
                [ApartmentFactory.ROOMS.SKY]: ApartmentFactory.ROOMS.SKY,
                [ApartmentFactory.ROOMS.ELEGANCE]: ApartmentFactory.ROOMS.ELEGANCE,
                [ApartmentFactory.ROOMS.SUITE]: ApartmentFactory.ROOMS.SUITE,
                [ApartmentFactory.ROOMS.LOFT]: ApartmentFactory.ROOMS.LOFT,
                [ApartmentFactory.ROOMS.DUO]: ApartmentFactory.ROOMS.DUO,
                [ApartmentFactory.ROOMS.STUDIO]: ApartmentFactory.ROOMS.STUDIO,
                [ApartmentFactory.ROOMS.BALANCE]: ApartmentFactory.ROOMS.BALANCE,
            }
        }
    }

    static SQUEME = {

    }

    static PRICE = {
        [Group.BALANCE]:{
            Precio:{
                Amount: "3,456,000.00"
            },
            Planes:{
                "15/15/70":{
                    Descuento: {
                        percent: "1",
                        amount: "34,560.00",
                    },
                    "Total a pagar": {
                        percent: "",
                        amount: "3,421,440.00"
                    },
                    Enganche: {
                        percent: "15",
                        amount: "513,216.00"
                    },
                    Diferido: {
                        percent: "15",
                        amount: "513,216.00"
                    },
                    "-25 mensualidades": {
                        percent: "",
                        amount: "20,528.64"
                    },
                    "Contra escritura": {
                        percent: "70",
                        amount: "2,395,008.00"
                    }
                },
                "30/30/40":{
                    Descuento: {
                        percent: "6",
                        amount: "207,360.00",
                    },
                    "Total a pagar": {
                        percent: "",
                        amount: "3,248,640.00"
                    },
                    Enganche: {
                        percent: "30",
                        amount: "974,592.00"
                    },
                    Diferido: {
                        percent: "30",
                        amount: "974,592.00"
                    },
                    "-25 mensualidades": {
                        percent: "",
                        amount: "38,983.68"
                    },
                    "Contra escritura": {
                        percent: "40",
                        amount: "1,299,456.00"
                    }
                },
                "90/0/10":{
                    Descuento: {
                        percent: "16",
                        amount: "34,560.00",
                    },
                    "Total a pagar": {
                        percent: "",
                        amount: "2,903,040.00"
                    },
                    Enganche: {
                        percent: "90",
                        amount: "2,612,736.00"
                    },
                    Diferido: {
                        percent: "0",
                        amount: "0.00"
                    },
                    "-25 mensualidades": {
                        percent: "",
                        amount: "0.00"
                    },
                    "Contra escritura": {
                        percent: "10",
                        amount: "290,304.00"
                    }
                },
            }
        },
        [Group.STUDIO]:{
            Precio:{
                Amount: "3,154,000.00"
            },
            Planes:{
                "15/15/70":{
                    Descuento: {
                        percent: "1",
                        amount: "31,540.00",
                    },
                    "Total a pagar": {
                        percent: "",
                        amount: "3,122,460.00"
                    },
                    Enganche: {
                        percent: "15",
                        amount: "468,369.00"
                    },
                    Diferido: {
                        percent: "15",
                        amount: "468,369.00"
                    },
                    "-25 mensualidades": {
                        percent: "",
                        amount: "18,734.76"
                    },
                    "Contra escritura": {
                        percent: "70",
                        amount: "2,185,722.00"
                    }
                },
                "30/30/40":{
                    Descuento: {
                        percent: "6",
                        amount: "189,240.00",
                    },
                    "Total a pagar": {
                        percent: "",
                        amount: "2,964,760.00"
                    },
                    Enganche: {
                        percent: "30",
                        amount: "889,428.00"
                    },
                    Diferido: {
                        percent: "30",
                        amount: "889,428.00"
                    },
                    "-25 mensualidades": {
                        percent: "",
                        amount: "35,577.12"
                    },
                    "Contra escritura": {
                        percent: "40",
                        amount: "1,185,904.00"
                    }
                },
                "90/0/10":{
                    Descuento: {
                        percent: "16",
                        amount: "504,640.00",
                    },
                    "Total a pagar": {
                        percent: "",
                        amount: "2,649,360.00"
                    },
                    Enganche: {
                        percent: "90",
                        amount: "2,384,424.00"
                    },
                    Diferido: {
                        percent: "0",
                        amount: "0.00"
                    },
                    "-25 mensualidades": {
                        percent: "",
                        amount: "0.00"
                    },
                    "Contra escritura": {
                        percent: "10",
                        amount: "264,936.00"
                    }
                },
            }
        },
        [Group.DUO]:{
            Precio:{
                Amount: "3,389,000.00"
            },
            Planes:{
                "15/15/70":{
                    Descuento: {
                        percent: "1",
                        amount: "33,890.00",
                    },
                    "Total a pagar": {
                        percent: "",
                        amount: "3,355,110.00"
                    },
                    Enganche: {
                        percent: "15",
                        amount: "503,266.50"
                    },
                    Diferido: {
                        percent: "15",
                        amount: "503,266.50"
                    },
                    "-25 mensualidades": {
                        percent: "",
                        amount: "20,130.66"
                    },
                    "Contra escritura": {
                        percent: "70",
                        amount: "2,348,577.00"
                    }
                },
                "30/30/40":{
                    Descuento: {
                        percent: "6",
                        amount: "203,340.00",
                    },
                    "Total a pagar": {
                        percent: "",
                        amount: "3,185,660.00"
                    },
                    Enganche: {
                        percent: "30",
                        amount: "955,698.00"
                    },
                    Diferido: {
                        percent: "30",
                        amount: "955,698.00"
                    },
                    "-25 mensualidades": {
                        percent: "",
                        amount: "38,227.92"
                    },
                    "Contra escritura": {
                        percent: "40",
                        amount: "1,274,264.00"
                    }
                },
                "90/0/10":{
                    Descuento: {
                        percent: "16",
                        amount: "542,240.00",
                    },
                    "Total a pagar": {
                        percent: "",
                        amount: "2,846,760.00"
                    },
                    Enganche: {
                        percent: "90",
                        amount: "2,562,084.00"
                    },
                    Diferido: {
                        percent: "0",
                        amount: "0.00"
                    },
                    "-25 mensualidades": {
                        percent: "",
                        amount: "0.00"
                    },
                    "Contra escritura": {
                        percent: "10",
                        amount: "284,676.00"
                    }
                },
            }
        },
        [Group.LOFT]:{
            Precio:{
                Amount: "3,123,000.00"
            },
            Planes:{
                "15/15/70":{
                    Descuento: {
                        percent: "1",
                        amount: "31,230.00",
                    },
                    "Total a pagar": {
                        percent: "",
                        amount: "3,091,770.00"
                    },
                    Enganche: {
                        percent: "15",
                        amount: "463,765.50"
                    },
                    Diferido: {
                        percent: "15",
                        amount: "463,765.50"
                    },
                    "-25 mensualidades": {
                        percent: "",
                        amount: "18,550.62"
                    },
                    "Contra escritura": {
                        percent: "70",
                        amount: "2,164,239.00"
                    }
                },
                "30/30/40":{
                    Descuento: {
                        percent: "6",
                        amount: "187,380.00",
                    },
                    "Total a pagar": {
                        percent: "",
                        amount: "2,935,620.00"
                    },
                    Enganche: {
                        percent: "30",
                        amount: "880,686.00"
                    },
                    Diferido: {
                        percent: "30",
                        amount: "880,686.00"
                    },
                    "-25 mensualidades": {
                        percent: "",
                        amount: "35,227.44"
                    },
                    "Contra escritura": {
                        percent: "40",
                        amount: "1,174,248.00"
                    }
                },
                "90/0/10":{
                    Descuento: {
                        percent: "16",
                        amount: "499,680.00",
                    },
                    "Total a pagar": {
                        percent: "",
                        amount: "2,623,320.00"
                    },
                    Enganche: {
                        percent: "90",
                        amount: "2,360,988.00"
                    },
                    Diferido: {
                        percent: "0",
                        amount: "0.00"
                    },
                    "-25 mensualidades": {
                        percent: "",
                        amount: "0.00"
                    },
                    "Contra escritura": {
                        percent: "10",
                        amount: "262,332.00"
                    }
                },
            }
        },
        [Group.SUITE]:{
            Precio:{
                Amount: "3,415,000.00"
            },
            Planes:{
                "15/15/70":{
                    Descuento: {
                        percent: "1",
                        amount: "34,150.00",
                    },
                    "Total a pagar": {
                        percent: "",
                        amount: "3,380,850.00"
                    },
                    Enganche: {
                        percent: "15",
                        amount: "507,127.50"
                    },
                    Diferido: {
                        percent: "15",
                        amount: "507,127.50"
                    },
                    "-25 mensualidades": {
                        percent: "",
                        amount: "20,285.10"
                    },
                    "Contra escritura": {
                        percent: "70",
                        amount: "2,366,595.00"
                    }
                },
                "30/30/40":{
                    Descuento: {
                        percent: "6",
                        amount: "204,900.00",
                    },
                    "Total a pagar": {
                        percent: "",
                        amount: "3,210,100.00"
                    },
                    Enganche: {
                        percent: "30",
                        amount: "963,030.00"
                    },
                    Diferido: {
                        percent: "30",
                        amount: "963,030.00"
                    },
                    "-25 mensualidades": {
                        percent: "",
                        amount: "38,521.20"
                    },
                    "Contra escritura": {
                        percent: "40",
                        amount: "1,284,040.00"
                    }
                },
                "90/0/10":{
                    Descuento: {
                        percent: "16",
                        amount: "546,400.00",
                    },
                    "Total a pagar": {
                        percent: "",
                        amount: "2,868,600.00"
                    },
                    Enganche: {
                        percent: "90",
                        amount: "2,581,740.00"
                    },
                    Diferido: {
                        percent: "0",
                        amount: "0.00"
                    },
                    "-25 mensualidades": {
                        percent: "",
                        amount: "0.00"
                    },
                    "Contra escritura": {
                        percent: "10",
                        amount: "286,860.00"
                    }
                },
            }
        },
        [Group.ELEGANCE]:{
            Precio:{
                Amount: "3,520,000.00"
            },
            Planes:{
                "15/15/70":{
                    Descuento: {
                        percent: "1",
                        amount: "35,200.00",
                    },
                    "Total a pagar": {
                        percent: "",
                        amount: "3,484,800.00"
                    },
                    Enganche: {
                        percent: "15",
                        amount: "522,720.00"
                    },
                    Diferido: {
                        percent: "15",
                        amount: "522,720.00"
                    },
                    "-25 mensualidades": {
                        percent: "",
                        amount: "20,908.80"
                    },
                    "Contra escritura": {
                        percent: "70",
                        amount: "2,439,360.00"
                    }
                },
                "30/30/40":{
                    Descuento: {
                        percent: "6",
                        amount: "211,200.00",
                    },
                    "Total a pagar": {
                        percent: "",
                        amount: "3,308,800.00"
                    },
                    Enganche: {
                        percent: "30",
                        amount: "992,640.00"
                    },
                    Diferido: {
                        percent: "30",
                        amount: "992,640.00"
                    },
                    "-25 mensualidades": {
                        percent: "",
                        amount: "39,705.60"
                    },
                    "Contra escritura": {
                        percent: "40",
                        amount: "1,323,520.00"
                    }
                },
                "90/0/10":{
                    Descuento: {
                        percent: "16",
                        amount: "563,200.00",
                    },
                    "Total a pagar": {
                        percent: "",
                        amount: "2,956,800.00"
                    },
                    Enganche: {
                        percent: "90",
                        amount: "2,661,120.00"
                    },
                    Diferido: {
                        percent: "0",
                        amount: "0.00"
                    },
                    "-25 mensualidades": {
                        percent: "",
                        amount: "0.00"
                    },
                    "Contra escritura": {
                        percent: "10",
                        amount: "295,680.00"
                    }
                },
            }
        },
        [Group.SKY]:{
            Precio:{
                Amount: "3,890,000.00"
            },
            Planes:{
                "15/15/70":{
                    Descuento: {
                        percent: "1",
                        amount: "38,900.00",
                    },
                    "Total a pagar": {
                        percent: "",
                        amount: "3,851,100.00"
                    },
                    Enganche: {
                        percent: "15",
                        amount: "577,665.00"
                    },
                    Diferido: {
                        percent: "15",
                        amount: "577,665.00"
                    },
                    "-25 mensualidades": {
                        percent: "",
                        amount: "23,106.60"
                    },
                    "Contra escritura": {
                        percent: "70",
                        amount: "2,695,770.00"
                    }
                },
                "30/30/40":{
                    Descuento: {
                        percent: "6",
                        amount: "233,400.00",
                    },
                    "Total a pagar": {
                        percent: "",
                        amount: "3,656,600.00"
                    },
                    Enganche: {
                        percent: "30",
                        amount: "1,096,980.00"
                    },
                    Diferido: {
                        percent: "30",
                        amount: "1,096,980.00"
                    },
                    "-25 mensualidades": {
                        percent: "",
                        amount: "43,879.20"
                    },
                    "Contra escritura": {
                        percent: "40",
                        amount: "1,462,640.00"
                    }
                },
                "90/0/10":{
                    Descuento: {
                        percent: "16",
                        amount: "622,400.00",
                    },
                    "Total a pagar": {
                        percent: "",
                        amount: "3,267,600.00"
                    },
                    Enganche: {
                        percent: "90",
                        amount: "2,940,840.00"
                    },
                    Diferido: {
                        percent: "0",
                        amount: "0.00"
                    },
                    "-25 mensualidades": {
                        percent: "",
                        amount: "0.00"
                    },
                    "Contra escritura": {
                        percent: "10",
                        amount: "326,760.00"
                    }
                },
            }
        },
        [Group.ZENITH]:{
            Precio:{
                Amount: "3,956,000.00"
            },
            Planes:{
                "15/15/70":{
                    Descuento: {
                        percent: "1",
                        amount: "39,560.00",
                    },
                    "Total a pagar": {
                        percent: "",
                        amount: "3,916,440.00"
                    },
                    Enganche: {
                        percent: "15",
                        amount: "587,466.00"
                    },
                    Diferido: {
                        percent: "15",
                        amount: "587,466.00"
                    },
                    "-25 mensualidades": {
                        percent: "",
                        amount: "23,498.64"
                    },
                    "Contra escritura": {
                        percent: "70",
                        amount: "2,741,508.00"
                    }
                },
                "30/30/40":{
                    Descuento: {
                        percent: "6",
                        amount: "237,360.00",
                    },
                    "Total a pagar": {
                        percent: "",
                        amount: "3,718,640.00"
                    },
                    Enganche: {
                        percent: "30",
                        amount: "1,115,592.00"
                    },
                    Diferido: {
                        percent: "30",
                        amount: "1,115,592.00"
                    },
                    "-25 mensualidades": {
                        percent: "",
                        amount: "44,623.68"
                    },
                    "Contra escritura": {
                        percent: "40",
                        amount: "1,487,456.00"
                    }
                },
                "90/0/10":{
                    Descuento: {
                        percent: "16",
                        amount: "632,960.00",
                    },
                    "Total a pagar": {
                        percent: "",
                        amount: "3,323,040.00"
                    },
                    Enganche: {
                        percent: "90",
                        amount: "2,990,736.00"
                    },
                    Diferido: {
                        percent: "0",
                        amount: "0.00"
                    },
                    "-25 mensualidades": {
                        percent: "",
                        amount: "0.00"
                    },
                    "Contra escritura": {
                        percent: "10",
                        amount: "332,304.00"
                    }
                },
            }
        }
    }

}