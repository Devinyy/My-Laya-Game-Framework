import { ui } from "../../../ui/layaMaxUI"
import { LwgData, LwgDate, LwgDialogue, LwgPlatform, LwgScene } from "../../Lwg/Lwg"
import { GameAni2D } from "../Control/GameAni2D";
import { GameData } from "../Control/GameData";
import { GameEff2D } from "../Control/GameEff2D";
import { GameEnum } from "../Control/GameEnum";
import { GameEvent } from "../Control/GameEvent";
import GameSceneName from "../Control/GameSceneName";
import { GameType } from "../Control/GameType";
import { Control3D } from "../Game3D/Control3D";

export default class Lottery extends LwgScene.SceneBase {
    owner: ui.Views.LotteryUI;
    openData: GameType.openLottery;
    lwgOnAwake(): void {
        this.createChest();
        this.updateKey();
        const baseReward = GameData.Lottery.getBestReward;
        this.owner.imgBestRewardPic.skin = baseReward.picSkin;
        if (baseReward.type !== GameEnum.ItemType.Skin) {
            this.owner.imgBestRewardPic.centerY = -16;
            this.owner.lbBsetRewardNum.text = 'x' + baseReward.number.toString();
        }
    }
    lwgOpenAniAfter(): void {
        GameEff2D.bothBlinkOnSprite2(this.owner.boxTitle, new Laya.Point(Laya.stage.width * 2 / 3, 0), this);
    }

    lwgButton(): void {
        this.btnOnceUp(this.owner.btnReturn, () => {
            this.closeScene();
        })
        this.btnOnUpAD(this.owner.btnADGet, () => {
            if (this.openChestNum < 9) {
                GameData.Lottery.KeyNum += 3;
                this.updateKey();
                this.evNotify(GameEvent.updateKeyNumStart);
            }
        })
    }

    /**
     * 当前打开了几个宝箱
     */
    openChestNum: number = 0;
    /**
     * 设置宝箱
     */
    createChest(): void {
        const moveX = 20;
        const moveY = 10;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const chestView = new ui.Views.LotteryRenderObjUI;
                const point = new Laya.Point(this.owner.chestBox.width / 3 * i + chestView.width / 2 + moveX, this.owner.chestBox.height / 3 * j + chestView.height / 2 + moveY);
                chestView.pos(point.x, point.y);
                this.owner.chestBox.addChild(chestView);
                chestView.lbNum.visible = false;
                chestView.imgRewardIcon.visible = false;
                if (GameData.Lottery.KeyNum >= 3) {
                    this.btnOnUp(chestView, () => {
                        if (GameData.Lottery.KeyNum > 0) {
                            this.onClickChest(chestView, false);
                        } else {
                            if (chestView['beOpen']) {
                                LwgDialogue.showTips('奖励已领取！');
                            } else {
                                LwgPlatform.AD.showVideo(() => {
                                    this.onClickChest(chestView, true);
                                })
                            }
                        }
                    })
                } else {
                    if (i == 2 && j == 2) {
                        this.owner.btnReturn.visible = true;
                        this.owner.chestBox.on(Laya.Event.CLICK, this, () => {
                            LwgDialogue.showTips('请凑足3把金钥匙！');
                        })
                    }
                }
            }
        }
    }
    onClickChest(chestView: ui.Views.LotteryRenderObjUI, AD: boolean): void {
        if (!chestView['beOpen']) {
            this.openChestNum++;
            chestView['beOpen'] = true;
            chestView.lbNum.visible = true;
            chestView.imgRewardIcon.visible = true;
            chestView.chestIcon.visible = false;
            //第9个必定是皮肤奖励
            let item: GameType.ItemData;
            if (this.openChestNum === 9) {
                item = GameData.Lottery.getBestReward;
                this.owner.btnADGet.visible = false;
                this.owner.boxKey.visible = false;
                this.owner.lbOpenAll.visible = true;
            } else {
                item = GameData.Lottery.ranReward;
            }
            chestView.lbNum.text = 'x' + item.number.toString();
            chestView.imgRewardIcon.skin = item.picSkin;
            if (!AD) {
                GameData.Lottery.KeyNum--;
            }
            this.evNotify(GameEvent.updateKeyNumStart);
            //不同奖励不同情况
            if (item.type === GameEnum.ItemType.Skin) {
                const obj: GameType.openBerewarded = {
                    item: item,
                }
                this.openOverlayScene(GameSceneName.BeRewarded, obj);
                chestView.lbNum.visible = false;
                chestView.imgRewardIcon.top = 10;
                chestView.imgRewardIcon.bottom = 10;
                chestView.imgRewardIcon.left = 10;
                chestView.imgRewardIcon.right = 10;
            } else {
                GameAni2D.getRewardAni(item.ID, item.number);
            }
            chestView.imgAd.visible = false;
            this.updateKey();
            chestView.zOrder = LwgDate.Now.time;
            GameEff2D.oneFireworks2(chestView, new Laya.Point(chestView.width / 2, chestView.height / 2));
            GameData.Sound.playSoundByID(9);
        } else {
            LwgDialogue.showTips('奖励已领取！');
        }
    }

    updateKey(): void {
        if (GameData.Lottery.KeyNum === 0) {
            this.owner.btnReturn.visible = true;
            if (this.openChestNum < 9) {
                this.owner.btnADGet.visible = true;
            }
        } else {
            this.owner.btnADGet.visible = false;
        }
        for (let index = 1; index < 4; index++) {
            if (index > GameData.Lottery.KeyNum) {
                this.owner[`key${index}`].visible = false;
            } else {
                this.owner[`key${index}`].visible = true;
            }
        }
        for (let index = 0; index < this.owner.chestBox.numChildren; index++) {
            const element = this.owner.chestBox.getChildAt(index) as ui.Views.LotteryRenderObjUI;
            if (GameData.Lottery.KeyNum === 0) {
                if (!element['beOpen']) {
                    element.imgAd.visible = true;
                }
            } else {
                element.imgAd.visible = false;
            }
        }
        // console.log('钥匙数量', GameData.Lottery.KeyNum);
    }
}