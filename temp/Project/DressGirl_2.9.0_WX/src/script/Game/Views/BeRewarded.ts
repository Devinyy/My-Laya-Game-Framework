import { ui } from "../../../ui/layaMaxUI";
import { LwgCurrency, LwgDialogue, LwgPlatform, LwgScene, LwgSound, LwgTools, LwgWX } from "../../Lwg/Lwg";
import { GameAni2D } from "../Control/GameAni2D";
import { GameData } from "../Control/GameData";
import { GameEnum } from "../Control/GameEnum";
import { GameEvent } from "../Control/GameEvent";
import GameSceneName from "../Control/GameSceneName";
import { GameType } from "../Control/GameType";
import { SkinShowScene } from "../Game3D/SkinShowScene";

export default class BeRewarded extends LwgScene.SceneBase {
    owner: ui.Views.BeRewardedUI;
    openData: GameType.openBerewarded;
    scene3D: Laya.Scene3D;
    // item: GameType.ItemData;
    lwgOnAwake(): void {

        if (LwgPlatform.type === LwgPlatform.EmType.OPPO) {
            this.owner.btnADNative.visible = true;
            this.owner.btnADGet.centerX = 140;
        }

        GameData.Sound.playSoundByID(7);
        // this.item = GameData.Item.getObjByID(this.openData.rewardId) as GameType.ItemData;
        this.owner.rewardNum.text = this.openData.item.number.toString();
        this.owner.rewardBigPic.skin = this.openData.item.picBigSkin;
        this.owner.rewardIcon.skin = this.openData.item.iconSkin;
        switch (this.openData.item.type) {
            case GameEnum.ItemType.Skin:
                this.owner.boxNum.visible = false;
                this.owner.btnDirect.visible = false;
                this.owner.imgBtnWordThree.visible = false;
                this.owner.imgBtnDirectWord.visible = true;
                this.owner.rewardBigPic.visible = false;
                //添加3d场景
                SkinShowScene.ins.show(this.owner, this.openData.item.ID, this.openData.item1 ? this.openData.item1.ID : null, this.openData.item1 ? this.openData.item1.ID : null);
                break;
            case GameEnum.ItemType.Currency:
                this.owner.boxNum.visible = true;
                this.owner.btnDirect.visible = true;
                this.owner.imgBtnWordThree.visible = true;
                this.owner.imgBtnDirectWord.visible = false;
                this.owner.rewardBigPic.visible = true;
                break;
            case GameEnum.ItemType.LuckyWheelAgain:
                this.evNotify(GameEvent.updateLuckyWheel);

                break;
            case GameEnum.ItemType.EndlessMode:

                break;
            case GameEnum.ItemType.SkinTry:

                break;
            default:
                break;
        }
    }

    lwgButton(): void {
        this.btnOnceUp(this.owner.btnDirect, () => {
            this.getRewardAni(1);
            this.closeRule();
        })
        this.btnOnceUpADCondition(this.owner.btnADGet,
            () => {
                return this.openData.item.type !== GameEnum.ItemType.Skin;
            },
            () => {
                this.getRewardAni(3);
                this.closeRule();
                this.evNotify(GameEvent.updateLuckyWheel);
            },
            () => {
                GameData.Skin.setObjCompeletByID(this.openData.item.ID);
                this.openData.item1 && GameData.Skin.setObjCompeletByID(this.openData.item1.ID);
                this.openData.item2 && GameData.Skin.setObjCompeletByID(this.openData.item2.ID);
                LwgDialogue.showTips('获得新皮肤！');
                this.closeRule();
                this.evNotify(GameEvent.updateLuckyWheel);
            })
    }

    closeRule(): void {
        if (this.openData.whereFrom === GameSceneName.Levels) {
            this.openScene(GameSceneName.Victory);
        } else {
            this.closeScene();
        }
    }
    getRewardAni(multiple: number = 1): void {
        GameAni2D.getRewardAni(this.openData.item.ID, this.openData.item.number * multiple, () => {
            this.owner.rewardNum.text = LwgTools.Format.strAddNum(this.owner.rewardNum.text, 20);
        }, () => {
            this.owner.rewardNum.text = '0';
            this.closeScene();
        })
    }
}
