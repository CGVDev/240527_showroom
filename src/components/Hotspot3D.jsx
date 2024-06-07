import { DoubleSide } from "three";

export const Hotspot3D = ({ geometry, ...props })=>{
    return(
        <mesh geometry={ geometry } {...props} >
            <shaderMaterial
                vertexShader="
                    out vec2 v_uv;
                    
                    void main(){
                        v_uv = uv;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                "
                fragmentShader="
                    in vec2 v_uv;

                    float fadeCalc(vec2 pt, vec2 size, vec2 center, float borderWidth){
                                                    
                        float h = step(borderWidth, pt.x) - step((1.0 - borderWidth), pt.x);
                        float v = step(borderWidth, pt.y) - step((1.0 - borderWidth), pt.y);
                        
                        return h * v;
                    }
                        
                        void main(){
                        //gl_FragColor = mix(vec4(1.0, 1.0, 0.0, 1.0), vec4(1.0, 1.0, 0.0, 0.0), sin(v_uv.x));
                        
                        //float f_radius = 0.9;
                        //float inCircle = 1.0 - step(f_radius, length(v_position.xy));
                        //vec3 color = vec3(0.5, 1.0, 0.0) * inCircle;
                        
                        //float inRect = rect(v_position.xy, vec2(1.0, 1.0), vec2(0.0, 0.0));
                        //vec3 color = vec3(0.5, 1.0, 0.0) * inRect;
                        
                        float borderWidth = 0.01;
                        
                        float inFade = fadeCalc(v_uv.xy, vec2(1.0, 1.0), vec2(0.0, 0.0), borderWidth);
                        vec4 color = vec4(0.29, 0.752, 0.694, cos(((1.0 - v_uv.y) * 2.0 ) * inFade));
                        
                        gl_FragColor = color;
                    }
                "
                side={ DoubleSide }
                transparent={ true }
            />
        </mesh>
    );
}