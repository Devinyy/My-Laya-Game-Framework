import platform from "../PlantForm/platform" ;
import tempData from "../PlantForm/tempData";
import urls from "../PlantForm/urls";
import tools from "../PlantForm/tools";

import InitMap from "../Common/initmap";


/**
 * 相比脚本方式，继承式页面类，可以直接使用页面定义的属性（通过IDE内var属性定义），比如this.tipLbll，this.scoreLbl，具有代码提示效果
 * 建议：如果是页面级的逻辑，需要频繁访问页面内多个元素，使用继承式写法，如果是独立小模块，功能单一，建议用脚本方式实现，比如子弹脚本。
 */
export default class GameControl extends Laya.Script {

    /**设置单例的引用方式，方便其他类引用 */
    static instance: GameControl;

    constructor() {
        super();
        GameControl.instance = this;
    }

    public ui_scene:Laya.Scene3D;
    public scene_bg:Laya.Scene3D;
    camera:Laya.Camera; 
    isstart:boolean;

    onAwake(){
        if(Laya.Browser.window.wx){ 
        }else{
            Laya.Stat.show(0,660);
        }
        // 加载分包
        platform.loadBasePacks(()=>{
            // 预加载所有资源
            var resource = [ 
                // 预制体模型
                "res/unity/LayaScene_SampleScene/Conventional/baseblock.lh",
                "res/unity/LayaScene_SampleScene/Conventional/baseblockbuff1.lh",
                "res/unity/LayaScene_SampleScene/Conventional/baseblockbuff2.lh",
                "res/unity/LayaScene_SampleScene/Conventional/chess.lh",
                "res/unity/LayaScene_SampleScene/Conventional/enemy.lh",
                
            ];
            
            // 加载地图配置资源
            Laya.stage.addComponent(InitMap);
            InitMap.instance.loadmapmsg();
        
            Laya.loader.create(resource, Laya.Handler.create(this, function(): void{
            
                if(this.ui_scene){
                    this.ui_scene.destroy(true);
                }
        
                if(this.scene_bg){
                    this.scene_bg.destroy(true);
                }
                
                // 如果玩家是
                if(tempData.isfirstplayer){
                    // 进入新手引导
                    platform.aldSendEvent('loading加载完进到新手引导阶段');
                    tempData.limitskin = this.randomskin2();
                    platform.setStorageSync('limitskin',tempData.limitskin);
                    tempData.level = 0;
                    this.loadScene3d(0,true);
                }
                else{
                    this.loadScene3d(0,true);
                }
            }));
        });
    }

    loadScene3d(level:number = 0, isyindao:boolean = false){
        if(!isyindao){
            tools.transition2();
        }
        
        if(this.ui_scene){
            this.ui_scene.destroy(true);
        }
        if(this.scene_bg){
            this.scene_bg.destroy(true);
        }
        
        console.log("开始加载场景");
        this.isstart = false;
        
        tempData.level = level;
        if(platform.hasStorageSync('lifeup')){
            tempData.thislevellife = platform.getStorageSync('lifeup','number');
        }else{
            platform.setStorageSync('lifeup',2);
            tempData.thislevellife = platform.getStorageSync('lifeup','number');
        }
        
        tempData.isequitweapon = 0;
        tempData.thislevelcount = 0;
        tempData.thislevelcombo = 0;
        tempData.thislevelmoney = 0;
        tempData.thislevelenemy = 0;
        tempData.thislevelenergy = 0;
        tempData.thislevelbestscore = 0;
        
        // 清除对象池中的对象
        Laya.Pool.clearBySign("fangkuai");
        
        //加载 3d 场景
        Laya.Scene3D.load('res/unity/LayaScene_SampleScene/Conventional/SampleScene.ls',Laya.Handler.create(this,function(res){
            // 添加场景
            this.scene_bg = Laya.stage.addChild(res);
            // 从场景中获取摄像机
            this.camera = this.scene_bg.getChildByName("Main Camera") as Laya.Camera;
            // 根据手机宽高比例调整视野
            tools.changeCameraField(this.camera);
            Laya.stage.event('finishmainscene');
        
            InitMap.instance.generateleveltable(level);
        
        }));
    }

    // 重新开始函数
    restartgame(level:number){
        console.log("重新开始游戏");
        this.scene_bg.destroy(true);
        Laya.timer.clearAll(this);
        Laya.Scene.close('test/MainScene.json');
        this.loadScene3d(level);
    }


    onDisable(){
        console.log('loading界面关闭');
    }

}

