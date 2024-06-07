const express = require("express");
const socketio = require("socket.io");
const socketMain = require("./sockets/main");
const { SocketActions } = require("../src/utils/SocketActions");

const app = express();
app.use(express.static("./fe"));

const server = app.listen(8080);

const io = socketio(server, {
    cors: {
        origin: ['http://localhost:3000', 'http://127.0.0.1:3000','http://192.168.3.232:3000', 'http://192.168.3.231:3000']
    }
});

// socketMain(io);



io.on('connect', (socket)=>{
    console.log("conected");
    // socket.emit('handshake', { connected: true });
    socket.on("change_selected", (data)=>{
        console.log(data);
        io.emit("interactive_selected", data);
    })
    
    socket.on("change_favorites", (data)=>{
        console.log(data);
        io.emit("interactive_favorites", data);
    })

    socket.on("active_vr", (data)=>{
        io.emit("interactive_vr_action", data)
    })

    // socket.on("screen_tour", (data)=>{
    //     io.emit("screen_tour", data)
    // });

    socket.on(SocketActions.INTEREST_POINT, (data)=>{
        io.emit(SocketActions.INTEREST_POINT, data);
    })

    socket.on(SocketActions.SUNNING, (data)=>(
        io.emit(SocketActions.SUNNING, data)
    ))

    socket.on(SocketActions.TOUR360, (data)=>{
        console.log(data);
        io.emit(SocketActions.TOUR360, data);
    })

    socket.on(SocketActions.CAMERA_FROM_CONTROL, (data)=>{
        io.emit(SocketActions.CAMERA_FROM_CONTROL, data);
    })

    socket.on(SocketActions.SET_VIEW, (data)=>{
        io.emit(SocketActions.SET_VIEW, data)
    })
})