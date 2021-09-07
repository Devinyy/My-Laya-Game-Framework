export class FlowLightShader {
    public static vs: string = `
    #define FSHIGHPRECISION
    attribute vec4 posuv;
    attribute vec4 attribColor;
    attribute vec4 attribFlags;
    uniform vec4 clipMatDir;
    uniform vec2 clipMatPos;		
    varying vec2 cliped;
    uniform vec2 size;
    uniform vec2 clipOff;	
    varying vec2 v_texCoord;	
    attribute vec2 texcoord;
    //#endif
    //#endif
    varying vec4 v_texcoordAlpha;
    varying vec4 v_color;
    varying float v_useTex;
    void main() {
        vec4 pos = vec4(posuv.xy,0.,1.);
    //#endif
        vec4 pos1  =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,0.,1.0);
    //#else //#ifdef MVP3D 2
        gl_Position=pos1;
    //#endif
        v_texcoordAlpha.xy = posuv.zw;
        
        v_color = attribColor/255.0;
        v_color.xyz*=v_color.w;
        
        v_useTex = attribFlags.r/255.0;
        float clipw = length(clipMatDir.xy);
        float cliph = length(clipMatDir.zw);
        
        vec2 clpos = clipMatPos.xy;
    //	#endif
        vec2 clippos = pos.xy - clpos;	
        if(clipw>20000. && cliph>20000.)
            cliped = vec2(0.5,0.5);
        else {
            
            cliped=vec2( dot(clippos,clipMatDir.xy)/clipw/clipw, dot(clippos,clipMatDir.zw)/cliph/cliph);
        }
        v_texCoord.xy = posuv.zw;
    }`
    public static ps: string = `
    #define FSHIGHPRECISION
    //#ifdef FSHIGHPRECISION
    precision highp float;
    //#endif
    varying vec4 v_texcoordAlpha;
    varying vec4 v_color;
    varying float v_useTex;
    uniform sampler2D texture;
    uniform sampler2D temp;
    varying vec2 cliped;
      uniform float  _sinTime;
      varying vec2 v_texCoord;
    //#endif
    //#endif
    //#endif
    //#endif
    //#endif
    void main() {
        vec4 color = texture2D(texture, v_texcoordAlpha.xy).rgba;
        float width = 0.15;       //流光的宽度范围 (调整该值改变流光的宽度)
        float start =sin(_sinTime) +0.45 ;  //流光的起始x坐标
        float strength = 0.01;   //流光增亮强度   (调整该值改变流光的增亮强度)
        float offset = 0.5;      //偏移值         (调整该值改变流光的倾斜程度)
        // if( start <= v_texCoord.x && v_texCoord.x <= (start + width))
        if( v_texCoord.x < (start - offset * v_texCoord.y) &&  v_texCoord.x > (start - offset * v_texCoord.y - width))
        {
            float strength = 0.01;
            vec3 improve = strength * vec3(255, 255, 255);
            vec3 result = improve * color.rgb;
            gl_FragColor = vec4(result, color.a);
        }else{
            gl_FragColor = color;
        }
    //   #endif
    //   #endif
    //   #endif
    //   #endif
    }`
    public static mainID: number = 4089// CustomShader.getId();
}