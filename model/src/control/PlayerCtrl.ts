import { ui } from "../ui/layaMaxUI";

import platform from "../PlantForm/platform" ;
import tempData from "../PlantForm/tempData";
import urls from "../PlantForm/urls";
import Utils from "../utils/Utils";

import GameConstData from '../data/GameConstData';
import { Enum_gameState } from "../enum/Enum_gameState";
import { Enum_aniPlayerName } from "../enum/Enum_aniPlayerName";


/**
 * 相比脚本方式，继承式页面类，可以直接使用页面定义的属性（通过IDE内var属性定义），比如this.tipLbll，this.scoreLbl，具有代码提示效果
 * 建议：如果是页面级的逻辑，需要频繁访问页面内多个元素，使用继承式写法，如果是独立小模块，功能单一，建议用脚本方式实现，比如子弹脚本。
 */
export default class PlayerCtrl extends Laya.Script3D {

    private static instance: PlayerCtrl = null;
    
    
    constructor() {
        super();
        PlayerCtrl.instance = this;
    }

    private gameStat: Enum_gameState = Enum_gameState.wait;

    private NowAni: string = "";
    private _Player: Laya.Sprite3D;
    private _PlayerTran: Laya.Transform3D;
    private playerPos = new Laya.Vector3(0, 0, 0);
    private _PlayerAni: Laya.Animator;
    private _PlayerRed: Laya.Sprite3D;
    private _PlayerRedTran: Laya.Transform3D;
    private _PlayerRedAni: Laya.Animator;
    private playerRedPos = new Laya.Vector3(0, 0, 0);

    private _Scene: Laya.Scene3D;
    private _DialogManager: Laya.DialogManager;
    private _MainScene: Laya.Dialog;
    private _Camera: Laya.Camera;

    private sceneGeZiObj = {};

    public isInSuper = false;
    public superFinishTime = -1;

    onAwake(){
        console.log("玩家脚本唤醒");
        // 获取对象
        this._Player = this.owner as Laya.Sprite3D;
        this._PlayerTran = this._Player.transform;
        this._PlayerAni = this._Player.getComponent(Laya.Animator) as Laya.Animator;
        this._PlayerRed = this.owner.parent.getChildByName('PlayerRed') as Laya.Sprite3D;
        this._PlayerRedTran = this._PlayerRed.transform;
        this._PlayerRedAni = this._PlayerRed.getComponent(Laya.Animator) as Laya.Animator;
        
        this.PlayerAniPlay(Enum_aniPlayerName.Ani_Squat);
        
        this._Scene = Laya.stage.getChildByName('scene3D') as Laya.Scene3D;
        this._Camera = this._Scene.getChildByName('CameraPoint').getChildByName('Main Camera') as Laya.Camera;
        for(let i=0;i<Laya.stage.numChildren;i++){
            if(Laya.stage.getChildAt(i).name == ''){
                this._DialogManager = Laya.stage.getChildAt(i) as Laya.DialogManager;
                this._MainScene = this._DialogManager.getChildByName('MainScene') as Laya.Dialog;
            } 
        }

        // 初始化游戏状态
        this.GameStartWithGameUI();
    }

    private playerCalMoveEndVec3 = new Laya.Vector3(0, 0, 0);
    private playerLookAtQua = new Laya.Quaternion(0, 0, 0, 0);
    private playerLerpOutQua = new Laya.Quaternion(0, 0, 0, 0);
    private lookAtUsedPlayerVec3 = new Laya.Vector3(0, 0, 0);
    private upVec3 = new Laya.Vector3(0, 1, 0);
    private playerMoveDir = new Laya.Vector3(0, 0, 0);
    private playerFUZDir = new Laya.Vector3(0, 0, 0);

    onUpdate() {
        if (this.gameStat == Enum_gameState.gaming) {
            if (this.playerMoveDir.x != 0 || this.playerMoveDir.z != 0) {
                var mulNum = GameConstData.playerMoveMaxNum;
                // 摄像机跟随角色
                this._Camera.transform.localPositionX += this.playerMoveDir.x * mulNum;
                this._Camera.transform.localPositionZ += this.playerMoveDir.z * mulNum;
                this.GetPlayerPos( this._PlayerTran.localPositionX + this.playerMoveDir.x * mulNum, this._PlayerTran.localPositionZ + this.playerMoveDir.z * mulNum);
                // 归一化角色与不同颜色的人物
                this.SetPlayerRedPos();
            }
        }
    }

    onDisable(){
        // 清除所有的事件属性
        Laya.stage.offAllCaller(this);
        Laya.timer.clearAll(this);
        this.destroy();
    }

    GameStartWithGameUI(){
        this.gameStat = Enum_gameState.gaming;
    }

    // 玩家播放动画
    private inAttack = false;
    private isCanMove = true;
    PlayerAniPlay(statName: string, isCheckStat = true) {
        if(this.NowAni == statName)
            return;
        if (this.gameStat == Enum_gameState.finish && isCheckStat)
            return;
        this.NowAni = statName;
        this._PlayerAni.play(statName, 0, 0);
        this._PlayerRedAni.play(statName, 0, 0);
    }

    ClearPlayerMoveDir() {
        this.playerMoveDir.x = 0;
        this.playerMoveDir.z = 0;
    }

    PlayerMove(toX, toZ) {
        if (!this.isCanMove) {
            return;
        }
        // console.log(toX, toZ);
        this.playerMoveDir.x = toX;
        this.playerMoveDir.z = toZ;
    }

    public static get Instance() {
        return this.instance;
    }

    // public get MainCamera() {
    //     return this.mainCamera;
    // }

    //result 1xy都采用 2只采用x 3只采用y 4死亡
    GetPlayerPos(toX = 99999, toZ = 99999) {
        var geziX = Math.round(toX);
        var geziY = Math.round(toZ);
        var result = 0;
        var isDead = false;
        
        result = 1;

        this.playerPos.x = geziX;
        this.playerPos.z = geziY;

        this.playerCalMoveEndVec3.x = toX;
        this.playerCalMoveEndVec3.z = toZ;
        
        this.playerFUZDir.x = toX;
        this.playerFUZDir.z = -toZ;

        this.lookAtUsedPlayerVec3.x = this._PlayerTran.localPositionX;
        this.lookAtUsedPlayerVec3.z = -this._PlayerTran.localPositionZ;
        // 计算摄像机视线在人物上的观察四元数
        Laya.Quaternion.lookAt(this.lookAtUsedPlayerVec3, this.playerFUZDir, this.upVec3, this.playerLookAtQua);
        // 根据观察四元数计算人物的旋转角度（第三个值插值比例表示灵敏度，越高越灵敏）
        Laya.Quaternion.lerp(this._PlayerTran.rotation, this.playerLookAtQua, 0.5, this.playerLerpOutQua);
        this._PlayerTran.rotation = this.playerLerpOutQua;

        this._PlayerTran.localPositionX = this.playerCalMoveEndVec3.x;
        this._PlayerTran.localPositionZ = this.playerCalMoveEndVec3.z;

        if (isDead) {
            PlayerCtrl.Instance.PlayerDead();
        }
        return result;
    }

    SetPlayerRedPos() {
        this._PlayerRedTran.localPosition = this._PlayerTran.localPosition;
        this._PlayerRedTran.localRotationEuler = this._PlayerTran.localRotationEuler;
    }

    PlayerDead(){
        console.log("玩家死亡");
    }

}

export enum SceneGeZiLeiXing {
    cantmove = 0,
    road = 1,
    zhangaiwu = 2,
    zhuangshipin = 3,
    smallenemy_knife = 4,
    smallenemy_archery = 5,
    smallenemy_boom = 6,
    bigenemy_knife = 7,
    bigenemy_fire = 8,
    superboss = 9,
    zhongdian = 10,
}