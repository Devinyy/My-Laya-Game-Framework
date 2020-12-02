import { ui } from "../ui/layaMaxUI";

import platform from "../PlantForm/platform" ;
import tempData from "../PlantForm/tempData";

import urls from "../PlantForm/urls";
import tools from "../PlantForm/tools";
import GameControl from "../Controller/GameControl";


/**
 * 相比脚本方式，继承式页面类，可以直接使用页面定义的属性（通过IDE内var属性定义），比如this.tipLbll，this.scoreLbl，具有代码提示效果
 * 建议：如果是页面级的逻辑，需要频繁访问页面内多个元素，使用继承式写法，如果是独立小模块，功能单一，建议用脚本方式实现，比如子弹脚本。
 */
export default class InitMap extends Laya.Script {

    /**设置单例的引用方式，方便其他类引用 */
    static instance: InitMap;
    
    constructor() {
        super();
        InitMap.instance = this;
    }
    
    public leveltable: [];
    public levelCfg: any;

    // 加载地图配置资源
    loadmapmsg(){
        // 初始化地图脚本唤醒
        console.log('初始化地图脚本唤醒！');
        // 加载关卡配置
        Laya.loader.load('res/leveltable.json',Laya.Handler.create(this,(res)=>{
            console.log('leveltable加载完毕');
            this.leveltable = res;
        }));
        // 加载关卡配置
        Laya.loader.load('res/levelCfg.json',Laya.Handler.create(this,(res)=>{
            console.log('levelCfg加载完毕');
            this.levelCfg = res;
        }));
    }

    // 根据记载好的关卡资源，生成关卡场景
    generateleveltable(nowlevel = 0){
        var map:[][] = this.leveltable[nowlevel]['map'];
        console.log('map = ',map);
        // 根据地图将底座放在地图上
        for(let i=0; i<map.length; ++i){
            for(let j=0; j<map[i].length; ++j){
                this.placebaseblockandroad(map,i,j);
            }
        }
    }

    // 根据当前位置的棋子种类判断并且防止棋子
    placebaseblockandroad(map,i,j){
        switch(map[i][j]){
            // 终点
            case -2:
                break;
            // 起点
            case -1:
                break;
            // 路径
            case 0:
                break;
            // 空格子
            case 1:
                break;
            // buff1格子
            case 2:
                let buff1blockpre = Laya.loader.getRes("res/unity/LayaScene_SampleScene/Conventional/baseblockbuff1.lh");
                let buff1block = Laya.Sprite3D.instantiate(buff1blockpre);
                GameControl.instance.scene_bg.addChild(buff1block);
                buff1block.transform.localPosition = new Laya.Vector3(-j+4, 0, -i+4);
                break;
            // buff2格子
            case 3:
                let buff2blockpre = Laya.loader.getRes("res/unity/LayaScene_SampleScene/Conventional/baseblockbuff2.lh");
                let buff2block = Laya.Sprite3D.instantiate(buff2blockpre);
                GameControl.instance.scene_bg.addChild(buff2block);
                buff2block.transform.localPosition = new Laya.Vector3(-j+4, 0, -i+4);
                break;
            // 普通格子
            case 4:
                let blockpre = Laya.loader.getRes("res/unity/LayaScene_SampleScene/Conventional/baseblock.lh");
                let block = Laya.Sprite3D.instantiate(blockpre);
                GameControl.instance.scene_bg.addChild(block);
                block.transform.localPosition = new Laya.Vector3(-j+4, 0, -i+4);
                break; 
        }
    }

}
