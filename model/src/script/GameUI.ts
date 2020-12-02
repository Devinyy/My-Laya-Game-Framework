import { ui } from "../ui/layaMaxUI";

import platform from "../PlantForm/platform" ;
import tempData from "../PlantForm/tempData";

import GameControl from "../Controller/GameControl";

/**
 * 相比脚本方式，继承式页面类，可以直接使用页面定义的属性（通过IDE内var属性定义），比如this.tipLbll，this.scoreLbl，具有代码提示效果
 * 建议：如果是页面级的逻辑，需要频繁访问页面内多个元素，使用继承式写法，如果是独立小模块，功能单一，建议用脚本方式实现，比如子弹脚本。
 */
export default class GameUI extends ui.test.StartSceneUI {

    constructor() {
        super();
    }

    onAwake(){
        // 加载loading界面
        if(tempData.isfirstplayer){
            platform.aldSendEvent('进入loading界面人数');
        }
        this.width = Laya.stage.width;
        this.height = Laya.stage.height;
        this.y = 0;
        this.zOrder = 1;
        var skeleton:Laya.Skeleton = new Laya.Skeleton();
        skeleton.pos(Laya.stage.width/2,Laya.stage.height*2/3);
        //通过加载直接创建动画
        skeleton.load("res/dragonbones/load.sk");
        Laya.timer.once(333,this,function(){
            this.tip.visible = true;
        });
        //添加到UI界面
        this.addChild(skeleton);
        Laya.stage.on('finishmainscene',this,function(){
            this.close();
        });
        // 添加游戏控制脚本
        Laya.stage.addComponent(GameControl);

    }

    onDisable(){
        console.log('loading界面关闭');
    }

}