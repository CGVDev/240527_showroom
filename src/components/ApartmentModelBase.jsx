import { animated as a, useSpring } from "@react-spring/three";
import { Outlines } from "@react-three/drei";
import { FloorPosition } from "../utils/FloorPosition";
import { useRef, useState } from "react";
import { ApartmentFactory } from "../utils/ApartmentFactory";


export const ApartmentModelBase = ({ baseColor, hoveredColor, department, animation, onClick=()=>{}, onDoubleClick=()=>{} })=>{
    

    const data = new ApartmentFactory().getGeometry(department.type);
    let floor = FloorPosition.getPosition(department.floor);

    // console.log({
    //     dept: department,
    //     type: department.type,
    //     floor: FloorPosition.getPosition(department.floor)
    // });

    const [ hovered, setHovered ] = useState(false);
    const timer = useRef(null);

    const { opacity } = useSpring({
        opacity: hovered ? 1.0 : 0.0,
        config: {
            duration: 300
        }
    });

    const img = (msg)=>{

        function roundRect(ctx, x, y, w, h, r) {
            ctx.beginPath();
            ctx.moveTo(x+r, y);
            ctx.lineTo(x+w-r, y);
            ctx.quadraticCurveTo(x+w, y, x+w, y+r);
            ctx.lineTo(x+w, y+h-r);
            ctx.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
            ctx.lineTo(x+r, y+h);
            ctx.quadraticCurveTo(x, y+h, x, y+h-r);
            ctx.lineTo(x, y+r);
            ctx.quadraticCurveTo(x, y, x+r, y);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();   
        };
        let borderThickness = 10;

        let canvas = document.createElement('canvas');
        canvas.style.userSelect = "none";
        canvas.style.pointerEvents = "none";
        canvas.style.touchAction = "none";
        let ctx = canvas.getContext('2d');
        
        let metrics = ctx.measureText(msg);
        let textWidth = metrics.width;
        
        ctx.fillStyle = "rgba(255, 255, 255, 1.0)";
        ctx.lineWidth = borderThickness;
        roundRect(ctx, 0, 0, 300, 150, 8)
        
        ctx.textBaseline = 'middle'
        ctx.font = `bold 70px -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif`
        ctx.textAlign = "center";
        ctx.fillStyle = "rgba(0, 0, 0, 1.0)";
        ctx.fillText(msg, 140, 80);
        return canvas
    };

    const { scale } = useSpring({
        scale: hovered ? 1.1 : 1,
        config:{
            duration: 250
        }
    });

    const listener = (e)=>{
        e.stopPropagation();
        if(timer.current == null){
            timer.current = setTimeout(()=>{
                onClick(department);
                timer.current = null;
            }, 200)
        }
        else{
            clearTimeout(timer.current);
            onDoubleClick(department);
            timer.current = null;
        }
    };

    return(
        <a.mesh geometry={ data.geometry } position-x={ data.position.x } position-y={ floor } position-z={ animation.position.to(t=>t * data.position.z) } scale={ animation.scale > 1 ? animation.scale : scale } onPointerOver={(e)=>{ e.stopPropagation(); setHovered(true) }} onPointerOut={ ()=>{ setHovered(false) } } onClick={ (e)=>listener(e) } onDoubleClick={ e=>{ e.stopPropagation() } }>
            <a.meshPhysicalMaterial color={ hovered ? hoveredColor : baseColor } metalness={ 0.01 } roughness={ 0.2 } thickness={0.001} transmission={ 0.5 } transparent={ true } opacity={ animation.transmission }/>
            <Outlines thickness={0.005} color={ hovered ? 0x00b0ff : 0xFFFFFF } transparent={ true } opacity={0.9}/>
            {
                hovered
                ? (
                    <sprite scale={ [0.14, 0.05 , 1.0] } position={ [data.position.x > 0.24 ? 0.18 : 0, 0.05, (data.position.x > 0.28) ? 0 : ((data.position.z > 0) ? 0.16 : -0.16) ] } onPointerEnter={()=>false} onPointerMove={()=>false} onPointerOver={()=>false} >
                        <a.spriteMaterial 
                            attach="material"
                            color={ 0x4AC0B1 } 
                            opacity={ opacity }
                        >
                            <canvasTexture attach="map" image={img(department.uuid)} />
                        </a.spriteMaterial>
                    
                    </sprite> 
                )
                : null
            }
        </a.mesh>
    );
};