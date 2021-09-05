import { LwgEvent } from "../../Lwg/Lwg";
import { GameData } from "../Control/GameData";
import { GameEnum } from "../Control/GameEnum";
import { GameEvent } from "../Control/GameEvent";
import { GameRes } from "../Control/GameRes";
import { SceneBase } from "./SceneBase";

export class MainScene extends SceneBase {
    static ins: MainScene;
    constructor() {
        super(GameRes.Scene3D.MainScene.instance);
        MainScene.ins = this;
        this.scene.name = 'MainScene';
    }

    fAIndex: number;
    fBIndex: number;
    /**
     * 准备
     */
    ready(): void {
        this.roleType = null;
        this.roadDataArr = GameData.Level.getRoadDataArr();
        // console.log(this.roadDataArr);
        this.showbase();

        //计算总里程
        for (let index = 0; index < this.roadDataArr.length - 3; index++) {
            const element = this.roadDataArr[index];
            this.mileageTotal += element.length;
        }
    }

    clear(): void {
        this.hideBase();
    }
}