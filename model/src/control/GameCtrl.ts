import platform from "../PlantForm/platform" ;
import tempData from "../PlantForm/tempData";
import urls from "../PlantForm/urls";
import Utils from "../utils/Utils";

import GameConstData from '../data/GameConstData';
import PlayerCtrl from "./PlayerCtrl";
import sceneMgr from "../manager/SceneMgr";
import Game from "../view/Game";


/**
 * 相比脚本方式，继承式页面类，可以直接使用页面定义的属性（通过IDE内var属性定义），比如this.tipLbll，this.scoreLbl，具有代码提示效果
 * 建议：如果是页面级的逻辑，需要频繁访问页面内多个元素，使用继承式写法，如果是独立小模块，功能单一，建议用脚本方式实现，比如子弹脚本。
 */
export default class GameCtrl extends Laya.Script {

    private static instance: GameCtrl = null;
    
    
    constructor() {
        super();
        GameCtrl.instance = this;
    }

    private gameStat;
    

    _ray: Laya.Ray;

    onAwake(){
        console.log("游戏控制脚本唤醒");

        //射线初始化（必须初始化）
		this._ray = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0));
		this.MultipleCamera();

    }

    onUpdate() {
       
    }

    onDisable(){
        // 清除所有的事件属性
        Laya.stage.offAllCaller(this);
        Laya.timer.clearAll(this);
        this.destroy();
    }


	circly:Laya.Sprite = new Laya.Sprite();
    point:Laya.Vector2 = new Laya.Vector2();
	_outHitInfo:Laya.HitResult = new Laya.HitResult();
	judgIsSeen() {
		// 将玩家的五个点坐标转化为屏幕坐标，并进行射线检测
		// 头
		var head = Utils.findChildNode(this.Player2, "mixamorig_Hips/mixamorig_Spine/mixamorig_Spine1/mixamorig_Spine2/mixamorig_Neck/mixamorig_Head/mixamorig_HeadTop_End") as Laya.Sprite3D;
		var headResult = this.RayInspection(head.transform.position);
		// 左手
		var lefthand = Utils.findChildNode(this.Player2, "mixamorig_Hips/mixamorig_Spine/mixamorig_Spine1/mixamorig_Spine2/mixamorig_LeftShoulder/mixamorig_LeftArm/mixamorig_LeftForeArm/mixamorig_LeftHand/mixamorig_LeftHandIndex1/mixamorig_LeftHandIndex2/mixamorig_LeftHandIndex3/mixamorig_LeftHandIndex4") as Laya.Sprite3D;
		var lefthandResult = this.RayInspection(lefthand.transform.position);
		// 右手
		var righthand = Utils.findChildNode(this.Player2, "mixamorig_Hips/mixamorig_Spine/mixamorig_Spine1/mixamorig_Spine2/mixamorig_RightShoulder/mixamorig_RightArm/mixamorig_RightForeArm/mixamorig_RightHand/mixamorig_RightHandIndex1/mixamorig_RightHandIndex2/mixamorig_RightHandIndex3/mixamorig_RightHandIndex4") as Laya.Sprite3D;
		var righthandResult = this.RayInspection(righthand.transform.position);
		// 左脚
		var leftleg = Utils.findChildNode(this.Player2, "mixamorig_Hips/mixamorig_LeftUpLeg/mixamorig_LeftLeg/mixamorig_LeftFoot/mixamorig_LeftToeBase/mixamorig_LeftToe_End") as Laya.Sprite3D;
		var leftlegResult = this.RayInspection(leftleg.transform.position);
		// 右脚
		var rightleg = Utils.findChildNode(this.Player2, "mixamorig_Hips/mixamorig_RightUpLeg/mixamorig_RightLeg/mixamorig_RightFoot/mixamorig_RightToeBase/mixamorig_RightToe_End") as Laya.Sprite3D;
		var rightlegResult = this.RayInspection(rightleg.transform.position);
		console.log(headResult, lefthandResult, righthandResult, leftlegResult, rightlegResult);
		if(headResult[0] || lefthandResult[0] || righthandResult[0] || leftlegResult[0] || rightlegResult[0]) {
			platform.showToast("被摄像机捕捉到咯~");
			// 遍历当前判断的五个节点 , 找出要在图中圈出的坐标点的坐标
			let centerPoint = new Laya.Vector2(0,0);
			let count = 0;
			if(headResult[0]) {
				centerPoint.x += (headResult[1] as Laya.Vector4).x;
				centerPoint.y += (headResult[1] as Laya.Vector4).y;
				count ++;
			}
			if(lefthandResult[0]) {
				centerPoint.x += (lefthandResult[1] as Laya.Vector4).x;
				centerPoint.y += (lefthandResult[1] as Laya.Vector4).y;
				count ++;
			}
			if(righthandResult[0]) {
				centerPoint.x += (righthandResult[1] as Laya.Vector4).x;
				centerPoint.y += (righthandResult[1] as Laya.Vector4).y;
				count ++;
			}
			if(leftlegResult[0]) {
				centerPoint.x += (leftlegResult[1] as Laya.Vector4).x;
				centerPoint.y += (leftlegResult[1] as Laya.Vector4).y;
				count ++;
			}
			if(rightlegResult[0]) {
				centerPoint.x += (rightlegResult[1] as Laya.Vector4).x;
				centerPoint.y += (rightlegResult[1] as Laya.Vector4).y;
				count ++;
			}
			centerPoint.x = centerPoint.x /= count;
			centerPoint.y = centerPoint.y /= count;
			console.log(centerPoint);
			this.circly.graphics.clear();
            Laya.stage.addChild(this.circly);
            //画圆
            this.circly.graphics.drawCircle(centerPoint.x,centerPoint.y,50,"#ff0000");
		}
		else {
			platform.showToast("躲藏成功，你是最靓的仔~");
		}
	}
	

	RayInspection(inspectionPos: Laya.Vector3) {
		var GameScene = Laya.stage.getChildByName('scene3D') as Laya.Scene3D;
		var position2D = new Laya.Vector4();
		this.camera2.worldToViewportPoint(inspectionPos, position2D);
		this.camera2.viewportPointToRay(new Laya.Vector2(position2D.x, position2D.y),this._ray);
		GameScene.physicsSimulation.rayCast(this._ray,this._outHitInfo);
		if(position2D.y < 0 || position2D.y > Laya.stage.height || position2D.x < 0 || position2D.x > Laya.stage.width) 
			return [false,position2D];
		if( !this._outHitInfo.succeeded || !this._outHitInfo.collider ) 
			return [false,position2D];
		if(this._outHitInfo.collider.owner.name.indexOf('Player') > -1) 
			return [true,position2D];
		else 
			return [false,position2D];
	}

    private camera1:Laya.Camera;
    private camera2:Laya.Camera;
    private Player1:Laya.Sprite3D;
    private Player2:Laya.Sprite3D;
    MultipleCamera() {
		sceneMgr.openScene("Scene001", Laya.Handler.create(this, (tempScene: Laya.Scene3D) => {
            Laya.stage.addChildAt(tempScene, 0);
			tempScene.name = 'scene3D';

			Utils.setLightData(tempScene.getChildByName("Directional Light") as Laya.DirectionLight, Laya.ShadowMode.SoftLow);

            this.camera1 = tempScene.getChildByName('CameraPoint').getChildByName('Main Camera') as Laya.Camera;
			this.camera1.removeAllLayers();
			this.camera1.addLayer(4);
			this.camera1.addLayer(2);
            this.camera2 = tempScene.getChildByName('Road').getChildByName('MeshPhone (1)').getChildByName('Camera') as Laya.Camera;
			this.camera2.removeAllLayers();
			this.camera2.addLayer(4);
			this.camera2.addLayer(3);
			this.Player1 = tempScene.getChildByName('CameraPoint').getChildByName('RolePoint').getChildByName('Role001') as Laya.Sprite3D;
			this.Player1.name = "Player";
			this.Player2 = Laya.Sprite3D.instantiate(this.Player1, tempScene.getChildByName('CameraPoint').getChildByName('RolePoint'));
			this.Player2.name = 'PlayerRed';
			this.Player2.layer = 3;
			(this.Player2.getChildAt(0) as Laya.SkinnedMeshSprite3D).layer = 3;
			(this.Player2.getChildAt(1) as Laya.SkinnedMeshSprite3D).layer = 3;
			this.Player2.transform.localPosition = this.Player1.transform.localPosition;
			((this.Player2.getChildAt(0) as Laya.SkinnedMeshSprite3D).skinnedMeshRenderer.material as Laya.BlinnPhongMaterial).albedoColor = new Laya.Vector4(255,0,0,255);
			this.Player1.addComponent(PlayerCtrl);
			var rendertexture = new Laya.RenderTexture(576,Laya.stage.height);
            var Quad = tempScene.getChildByName('Road').getChildByName('MeshPhone (1)').getChildByName('Mobile_Screen') as Laya.MeshSprite3D;
            (Quad.meshRenderer.material as Laya.UnlitMaterial).albedoTexture = rendertexture;
            this.camera2.renderTarget = rendertexture;

			Laya.timer.once(6000, this, () => {
				var texture = new Laya.RenderTexture(500, Laya.stage.height - 124);
				texture = Laya.Camera.drawRenderTextureByScene(this.camera2, Laya.stage.getChildByName('scene3D') as Laya.Scene3D, texture);
				var rtex = new Laya.Texture(((<Laya.Texture2D>(texture as any))), Laya.Texture.DEF_UV);
				Game.instance.ScreenShot.graphics.drawTexture(rtex);
				Game.instance.ScreenShotBox.visible = true;
				Game.instance.ScreenShotBox.on(Laya.Event.CLICK, this, ()=>{
					this.circly.graphics.clear();
					Game.instance.ScreenShotBox.visible = false;
					Laya.timer.once(6000, this, () => {
						var texture = new Laya.RenderTexture(500, Laya.stage.height - 124);
						Laya.Camera.drawRenderTextureByScene(this.camera2, Laya.stage.getChildByName('scene3D') as Laya.Scene3D, texture);
						var rtex = new Laya.Texture(((<Laya.Texture2D>(texture as any))), Laya.Texture.DEF_UV);
						Game.instance.ScreenShot.graphics.drawTexture(rtex);
						Game.instance.ScreenShotBox.visible = true;
						Game.instance.ScreenShotBox.on(Laya.Event.CLICK, this, ()=>{
							Game.instance.ScreenShotBox.visible = false;
						});
						var Quad = tempScene.getChildByName('Road').getChildByName('MeshPhone (1)').getChildByName('Mobile_Screen') as Laya.MeshSprite3D;
						(Quad.meshRenderer.material as Laya.UnlitMaterial).albedoTexture = rendertexture;
						this.camera2.renderTarget = rendertexture;
		
						this.judgIsSeen();
						
					});
				});
				var Quad = tempScene.getChildByName('Road').getChildByName('MeshPhone (1)').getChildByName('Mobile_Screen') as Laya.MeshSprite3D;
				(Quad.meshRenderer.material as Laya.UnlitMaterial).albedoTexture = rendertexture;
				this.camera2.renderTarget = rendertexture;

				this.judgIsSeen();
				
			});

        }));
    }

}