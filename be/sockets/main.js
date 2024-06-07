const socketMain = (io)=>{
    io.on('connected', ()=>{
        console.log("connected...");
        io.on('change_selected', (data)=>{
            console.log(data);
        })

    })
}

module.exports = socketMain