import { Lwg3D, LwgAni3D, LwgTools } from "../../Lwg/Lwg";
import { GameData } from "../Control/GameData";
import { GameEnum } from "../Control/GameEnum";
import { GameRes, GameResCutIn } from "../Control/GameRes";
import { GameType } from "../Control/GameType";
import { SkinBase } from "./SkinBase";

export class SkinScene extends SkinBase {
    static ins: SkinScene;
    constructor() {
        super();
        SkinScene.ins = this;
    }
    fRX: number;
    scene: Laya.Scene3D;
    camera: Laya.Camera;
    skinPoint: Laya.Sprite3D;
    skin: Laya.Sprite3D;
    show(): void {
        this.scene = GameResCutIn.Skin.Scene3D.SkinScene.instance;
        this.camera = this.scene.getChildByName('Main Camera') as Laya.Camera;
        this.skinPoint = this.scene.getChildByName('SkinPoint') as Laya.Sprite3D;
        this.skin = GameRes.Prefab3D.role01.instance.clone() as Laya.Sprite3D;
        this.fRX = this.skin.transform.localRotationEulerY;
        this.skinPoint.addChild(this.skin);
        if (Laya.Browser.pixelRatio >= 16 / 9) {
            // console.log('视野增加');
            this.camera.fieldOfView += 5;
        }
        Laya.stage.addChild(this.scene);
        this.scene.name = 'SkinScene';
        this.init();
    }
    hide(): void {
        if (this.scene) {
            this.scene.destroy(true);
            this.scene = null;
            this.skinPoint = null;
            Laya.Resource.destroyUnusedResources();
        }
    }
    change(ID: number): void {
        this.changePart(ID);
    }

    turnTime = 500;
    turnBack(): void {
        this.skinPoint && LwgAni3D.ClearTween(this.skinPoint);
        this.skinPoint && LwgAni3D.rotateTo(this.skinPoint, new Laya.Vector3(0, 230, 0), this.turnTime, this, null, () => {
        });
    }
    turnFront(): void {
        this.skinPoint && LwgAni3D.ClearTween(this.skinPoint);
        this.skinPoint && LwgAni3D.rotateTo(this.skinPoint, new Laya.Vector3(0, 45, 0), this.turnTime, this, null, () => {
        });
    }
}