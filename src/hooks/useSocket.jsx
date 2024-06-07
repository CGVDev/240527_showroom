import React, { useEffect, useMemo, useRef, useState } from "react"
import { io } from "socket.io-client"

export const useSocket = (endpoint)=>{
    const socket = useMemo(()=>io.connect(endpoint), [endpoint]);

    // useEffect(()=>{
    //     socket.on('connect', ()=>{
    //         console.log("connected...")
    //     })
    //     socket.on('disconnect', ()=>{
    //         console.log("disconnected...")
    //     })
        
    // }, [])

    return{
        socket
    }
}

export const SocketContext = React.createContext();

export const SocketProvider = ({endpoint, children})=>{
    const [{ socket }] = useState(useSocket(endpoint));
    const [connected, setConnected] = useState(socket.connected);

    useEffect(()=>{
        setConnected(socket.connected);
    }, [socket.connected]);

    return(
        <SocketContext.Provider value={ { socket, connected } }>
            {children}
        </SocketContext.Provider>
    );
}