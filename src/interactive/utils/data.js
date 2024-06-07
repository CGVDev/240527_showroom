class SunTick{
    constructor(minutes, index){
        this.minutes = minutes;
        this.index = index;
    }

    // getTime(){
    //     let hour = Math.floor(this.minutes / 60);
    //     let minutes = this.minutes % 60; 
    //     return {hour, minutes}
    // }
}

export const data = {
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