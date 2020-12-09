import platform from "../PlantForm/platform" ;
import tempData from "../PlantForm/tempData";

import tools from "../PlantForm/tools";
import urls from "../PlantForm/urls";

export default class btncontroller extends Laya.Button{

    constructor(){
        super();
    }

    self: Laya.Button;

    onAwake(){
        // 给按钮添加按钮点击的缩放动画
        this.self = this;
        this.self.on(Laya.Event.MOUSE_DOWN,this,function(){
            this.self.scale(1.2,1.2);
        });
        this.self.on(Laya.Event.MOUSE_UP,this,function(){
            this.self.scale(1.0,1.0);
        });
        this.self.on(Laya.Event.MOUSE_OUT,this,function(){
            this.self.scale(1.0,1.0);
        });
        this.self.on(Laya.Event.MOUSE_OVER,this,function(){
            this.self.scale(1.2,1.2);
        });
        // 给按钮添加点击的音效
        this.self.on(Laya.Event.CLICK,this,function(){
            platform.playEffect('res/music/anniu.mp3');
        });
    }
}
