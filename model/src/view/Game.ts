import { ui } from "../ui/layaMaxUI";

import GameConstData from '../data/GameConstData'
import PlayerCtrl from "../control/PlayerCtrl";
import { Enum_aniPlayerName } from "../enum/Enum_aniPlayerName";


/**
 * 相比脚本方式，继承式页面类，可以直接使用页面定义的属性（通过IDE内var属性定义），比如this.tipLbll，this.scoreLbl，具有代码提示效果
 * 建议：如果是页面级的逻辑，需要频繁访问页面内多个元素，使用继承式写法，如果是独立小模块，功能单一，建议用脚本方式实现，比如子弹脚本。
 */
export default class Game extends ui.test.GameUI {
    

	/**设置单例的引用方式，方便其他类引用 */
    static instance: Game;

	private maxProgressLen = 262;
	private superProgressLen = 204;
	private nowKillEnemyNum = 0;
	private isFirstDown = true;
	private givedQian = 0;
	private boxscaleNum = 1;

    timeLines:Laya.TimeLine[]=[];
    constructor() {
        super();
		Game.instance = this;
    }

	onAwake(){
        console.log("游戏主界面唤醒");
        // 长屏适配
        this.width = Laya.stage.width;
        this.height = Laya.stage.height;
    }

	onOpened() {
		// 响应玩家的触屏事件
        this.Box_YaoGan.on(Laya.Event.MOUSE_DOWN,this,this.MouseDownEvent);
        this.Box_YaoGan.on(Laya.Event.MOUSE_MOVE,this,this.MouseMoveEvent);
        this.Box_YaoGan.on(Laya.Event.MOUSE_UP,this,this.MouseUpEvent);
        this.Box_YaoGan.on(Laya.Event.MOUSE_OUT,this,this.MouseUpEvent);
	}

    onDisable(){
        // 清除所有的事件属性
        Laya.stage.offAllCaller(this);
        Laya.timer.clearAll(this);
		this.Box_YaoGan.offAll();
        this.destroy(true);
    }

	private touchX: number = 0;
	private touchZ: number = 0;
	private zouluAniSpeed = 1;
	public isMouseDown = false;
	MouseDownEvent() {
		this.isMouseDown = true;
		this.touchX = Laya.stage.mouseX;
		this.touchZ = Laya.stage.mouseY;
		this.Box_YG.pos(this.touchX / this.boxscaleNum, this.touchZ / this.boxscaleNum);
		this.Box_YG.visible = true;
		PlayerCtrl.Instance.PlayerAniPlay(Enum_aniPlayerName.Ani_Run);
	}
	private resutlDirVec3 = new Laya.Vector3(0, 0, 0);
	private maxRLen = 50;
	private maxYGUILen = 72;
	MouseMoveEvent() {
		if (!this.isMouseDown) return;

		var ygXTemp = Laya.stage.mouseX;
		var ygZTemp = Laya.stage.mouseY;

		var distanceTemp = this.distance(this.touchX, this.touchZ, ygXTemp, ygZTemp) / this.boxscaleNum;
		if (distanceTemp > this.maxYGUILen) {
			//获取模长比例
			var _l = this.maxYGUILen / distanceTemp;
			//求得摇杆方向
			this.Img_YaoGan.pos(((ygXTemp - this.touchX) / this.boxscaleNum * _l) + this.maxYGUILen, ((ygZTemp - this.touchZ) / this.boxscaleNum * _l) + this.maxYGUILen);

		} else {
			this.Img_YaoGan.pos((ygXTemp - this.touchX) / this.boxscaleNum + this.maxYGUILen, (ygZTemp - this.touchZ) / this.boxscaleNum + this.maxYGUILen);
		}

		var mouseXTemp = Laya.stage.mouseX;
		var mouseZTemp = Laya.stage.mouseY;

		var distanceTemp = this.distance(this.touchX, this.touchZ, mouseXTemp, mouseZTemp);
		if (distanceTemp > this.maxRLen) {
			//获取模长比例
			var _l = this.maxRLen / distanceTemp;
			//求得摇杆方向
			this.resutlDirVec3.x = ((mouseXTemp - this.touchX) * _l);//+ this.touchX;
			this.resutlDirVec3.z = ((mouseZTemp - this.touchZ) * _l); //+ this.touchZ;

			var zouluAniSpeed = 1;
		} else {
			this.resutlDirVec3.x = mouseXTemp - this.touchX;
			this.resutlDirVec3.z = mouseZTemp - this.touchZ;

			var zouluAniSpeed = distanceTemp / this.maxRLen;
		}
		
		// 确定是慢跑还是加速跑
		if(zouluAniSpeed >= 0.6) {
			PlayerCtrl.Instance.PlayerAniPlay(Enum_aniPlayerName.Ani_FastRun);
		}else {
			PlayerCtrl.Instance.PlayerAniPlay(Enum_aniPlayerName.Ani_Run);
		}

		this.resutlDirVec3.x = this.resutlDirVec3.x / GameConstData.UITO3DBiLi;
		this.resutlDirVec3.z = this.resutlDirVec3.z / GameConstData.UITO3DBiLi;

		PlayerCtrl.Instance.PlayerMove(-this.resutlDirVec3.x, -this.resutlDirVec3.z);

	}
	MouseUpEvent() {
		if (!this.isMouseDown) return;
		this.Box_YG.visible = false;
		this.Img_YaoGan.pos(this.maxYGUILen, this.maxYGUILen);
		this.isMouseDown = false;
		PlayerCtrl.Instance.ClearPlayerMoveDir();
		PlayerCtrl.Instance.PlayerAniPlay(Enum_aniPlayerName.Ani_Squat);
    }

	/**求2点之间的距离 */
	private distance(centerX, centerY, mouseX, mouseY) {
		var dx: number = centerX - mouseX;
		var dy: number = centerY - mouseY;
		var distance: number = Math.sqrt(dx * dx + dy * dy);
		return distance;
	}
}