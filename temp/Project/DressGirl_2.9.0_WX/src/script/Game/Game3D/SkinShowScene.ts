import { LwgTools } from "../../Lwg/Lwg";
import { GameData } from "../Control/GameData";
import { GameEnum } from "../Control/GameEnum";
import { GameRes } from "../Control/GameRes";
import { GameType } from "../Control/GameType";
import { SkinBase } from "./SkinBase";

export class SkinShowScene extends SkinBase {
    static ins: SkinShowScene;
    constructor() {
        super();
        SkinShowScene.ins = this;
        this.scene = GameRes.Scene3D.SkinShow.instance;
        this.camera = this.scene.getChildByName('Main Camera') as Laya.Camera;
        this.fieldOfViewFirst = this.camera.fieldOfView;
        this.cameraFLP = this.camera.transform.localPositionY;
        this.scene.name = 'SkinShowScene';
        this.skinShowPoint = this.scene.getChildByName('SkinShowPoint') as Laya.Sprite3D;
        if (Laya.Browser.pixelRatio >= 16 / 9) {
            this.camera.fieldOfView = this.fieldOfViewFirst + 5;
        } else {
            this.camera.fieldOfView = this.fieldOfViewFirst;
        }
        this.skin = GameRes.Prefab3D.role01.instance.clone() as Laya.Sprite3D;
        this.skinShowPoint.addChild(this.skin);
        this.init();
    }
    fieldOfViewFirst: number;
    scene: Laya.Scene3D;
    camera: Laya.Camera;
    cameraFLP: number;
    skinShowPoint: Laya.Sprite3D;
    skin: Laya.Sprite3D;
    show(view: Laya.View, id1: number, id2?: number, id3?: number): void {
        this.change(id1, id2, id3);
        view.addChild(this.scene);
    }
    change(id1: number, id2: number, id3: number): void {
        id1 && this.changePart(id1);
        id2 && this.changePart(id2);
        id3 && this.changePart(id3);
    }
}