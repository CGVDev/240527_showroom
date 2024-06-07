import { useContext, useEffect } from 'react';
import io from 'socket.io-client';
import { ControlContext } from './ControlContext';

export const socket = io('http://127.0.0.1:8080');

export const SocketConnection =()=>{

    const { state } = useContext(ControlContext);

    useEffect(()=>{
        socket.on('connect', ()=>{
            console.log("connected...");
        });
        return ()=>{socket.disconnect()};
    }, []);

    useEffect(()=>{
        console.log("init socket");
        if(state.selected.length > 0){
            socket.emit('change_selected', { action: "CHANGE_SELECTED", payload: state.selected[0].uuid })
        }
    }, [state.selected]);

    return(<></>);
}
