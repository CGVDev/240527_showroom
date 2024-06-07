export class Tipology{
    getLabel(tipology){
        return Tipology.TYPES[tipology];
    }

    static ["1BR"] = "1br";
    static ["2BR"] = "2br";
    static ["3BR"] = "3br";
    static TYPES = {
        [Tipology["1BR"]]: "1 Recámara",
        [Tipology["2BR"]]: "2 Recámara",
        [Tipology["3BR"]]: "3 Recámara",
    }
}