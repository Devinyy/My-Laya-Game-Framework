import { LwgEvent, LwgTools } from "../../Lwg/Lwg";
import { GameData } from "../Control/GameData";
import { GameEvent } from "../Control/GameEvent";
import { GameRes } from "../Control/GameRes";
import { GameType } from "../Control/GameType";
import { SceneBase } from "./SceneBase";

export class EndLessScene extends SceneBase {
    static ins: EndLessScene;
    constructor() {
        super(GameRes.Scene3D.EndLess.instance);
        EndLessScene.ins = this;
        this.scene.name = 'EndLessScene';
    }
    ready(): void {
        this.roadDestoryDistance = 200;
        this.roadAddTime = 50;
        this.showbase();
    }
    clear(): void {
        this.hideBase();
    }

    type: string;
    setEndData(): void {
        LwgEvent.notify(GameEvent.roadIndex, [this.roadIndex]);
        // console.log('创建！');
        const indexItem1 = Math.round(Math.random() * 38) + 200;
        const indexItem2 = Math.round(Math.random() * 10) + 300;
        const indexItem3 = Math.round(Math.random() * 17) + 311;
        const indexItem4 = Math.round(Math.random() * 8) + 329;

        let ranIndex: number;
        if (this.roadIndex === 0) {
            ranIndex = 888;
        } else if (this.roadIndex === 1) {
            ranIndex = indexItem1;
            this.type = 'A';
        } else if (this.roadIndex > 1 && this.roadIndex <= 10) {
            if (this.type === 'A') {
                ranIndex = indexItem1;
                this.type = 'B';
            } else if (this.type === 'B') {
                ranIndex = indexItem2;
                this.type = 'C';
            } else if (this.type === 'C') {
                const ran = LwgTools.Num.randomOneHalf();
                if (ran === 1) {
                    ranIndex = indexItem1;
                } else {
                    ranIndex = indexItem2;
                }
                this.type = 'A';
            }
        } else if (this.roadIndex > 10 && this.roadIndex <= 20) {
            if (this.type === 'A') {
                ranIndex = indexItem1;
                this.type = 'B';
            } else if (this.type === 'B') {
                ranIndex = indexItem3;
                this.type = 'C';
            } else if (this.type === 'C') {
                const ran = LwgTools.Num.randomOneHalf();
                if (ran === 1) {
                    ranIndex = indexItem1;
                    this.type = 'A';
                } else {
                    ranIndex = indexItem3;
                    this.type = 'D';
                }
            } else if (this.type === 'D') {
                const ran = LwgTools.Num.randomOneHalf();
                if (ran === 1) {
                    ranIndex = indexItem1;
                } else {
                    ranIndex = indexItem3;
                }
                this.type = 'A';
            }
        } else if (this.roadIndex > 20) {
            if (this.type === 'A') {
                ranIndex = indexItem1;
                this.type = 'B';
            } else if (this.type === 'B') {
                ranIndex = indexItem4;
                this.type = 'C';
            } else if (this.type === 'C') {
                ranIndex = indexItem4;
                this.type = 'D';
            } else if (this.type === 'D') {
                const ran = LwgTools.Num.randomOneHalf();
                if (ran === 1) {
                    ranIndex = indexItem1;
                } else {
                    ranIndex = indexItem4;
                }
                this.type = 'A';
            }
        }
        // console.log(this.type);
        const roadData = GameData.Road.getObjByID(ranIndex);
        if (!roadData) {
            console.log('表格中没有这个路段', ranIndex, '第', this.roadIndex);
        } else {
            const newRoadData = LwgTools.ObjArray.objCopy(roadData) as GameType.RoadData;
            newRoadData.color = '0';
            this.endRoadData = newRoadData;
        }
    }
}