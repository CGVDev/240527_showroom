export class InterestPoint{
    static STORE = 0;
    static PARK = 1;
    static SUBWAY = 2;
    static ENTERTAINMENT = 3;
    static HOSPITAL = 4;

    static LABEL = {
        [InterestPoint.STORE]: "Tiendas",
        [InterestPoint.PARK]: "Parques",
        [InterestPoint.SUBWAY]: "Transporte",
        [InterestPoint.ENTERTAINMENT]: "Entretenimiento",
        [InterestPoint.HOSPITAL]: "Hospital",
    }
}