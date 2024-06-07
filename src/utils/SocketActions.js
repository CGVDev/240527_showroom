class SocketActions{
    static INTEREST_POINT = 'INTEREST_POINT';
    static SUNNING = 'SUNNING';
    static TOUR360 = 'TOUR360';
    static SET_VIEW = "SET_VIEW";
    static CAMERA_FROM_CONTROL = 'CAMERA_FROM_CONTROL';
    static CAMERA_FROM_PANORAMA = 'CAMERA_FROM_PANORAMA';

    static ACTIONS = {
        [SocketActions.INTEREST_POINT]: {
            SET_POINT: "SET_POINT",
            CLEAR_POINTS: "CLEAR_POINTS",
        },

        [SocketActions.SUNNING]:{
            SET_DAYTIME: "SET_DAYTIME",
        },

        [SocketActions.TOUR360]:{
            OPEN_TOUR: "OPEN_TOUR",
            CLOSE_TOUR: "CLOSE_TOUR",
            SET_SPHERE: "SET_SPHERE",
        },

        [SocketActions.CAMERA_FROM_CONTROL]:{
            SET_CAMERA: 'SET_CAMERA'
        },

        [SocketActions.SET_VIEW]:{
            INIT_START: "INIT_START",
            INIT_COMPARA: "INIT_COMPARA",
            INIT_EXPLORA: "INIT_EXPLORA",
            INIT_EXIT: "INIT_EXIT"
        },

    }
}

module.exports = { SocketActions }