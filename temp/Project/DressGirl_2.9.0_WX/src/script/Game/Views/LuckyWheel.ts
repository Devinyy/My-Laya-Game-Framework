import { ui } from "../../../ui/layaMaxUI";
import { LwgSound, LwgClick, LwgDialogue, LwgScene, LwgTimer, LwgDate, LwgTools, LwgPlatform } from "../../Lwg/Lwg";
import { GameAni2D } from "../Control/GameAni2D";
import { GameData } from "../Control/GameData";
import { GameEnum } from "../Control/GameEnum";
import { GameEvent } from "../Control/GameEvent";
import GameSceneName from "../Control/GameSceneName";
import { GameType } from "../Control/GameType";

export default class LuckyWheel extends LwgScene.SceneBase {
    owner: ui.Views.LuckyWheelUI;
    lwgOnAwake(): void {
        this.updateRewardView();
        this.playAutoTurn();

        if (LwgPlatform.type === LwgPlatform.EmType.OPPO || LwgPlatform.type === LwgPlatform.EmType.VIVO) {
            this.owner.btnADNative.visible = true;
            this.owner.btnADGet.centerX = 140;
        }
    }

    lwgOnStart(): void {
        this.evNotify(GameEvent.updateLuckyWheel);
    }

    lwgEvent(): void {
        this.evRegister(GameEvent.updateLuckyWheel, () => {
            this.displayNum();
            this.updateRewardView();
        })
    }

    displayNum(): void {
        if (GameData.LuckyWheel.todayFree) {
            this.owner.lbNum.text = 1 + '次';
            this.owner.imgWordTurn.visible = false;
            this.owner.imgWordFree.visible = true;
        } else {
            this.owner.imgWordTurn.visible = true;
            this.owner.imgWordFree.visible = false;
            this.owner.lbNum.text = 0 + '次';
        }
    }

    lwgButton(): void {
        this.btnOnUp(this.owner.btnADGet, () => {
            if (this.isDoTurning) {
                LwgDialogue.showTips('等一下呗');
            } else {
                if (GameData.LuckyWheel.todayFree) {
                    GameData.LuckyWheel.lastDate = LwgDate.Now.date;
                    this.playTurn();
                    this.displayNum();
                } else {
                    LwgPlatform.AD.showVideo(() => {
                        this.playTurn();
                    })
                }
            }
        })
        this.btnOnUp(this.owner.btnLater, () => {
            if (this.isDoTurning) {
                LwgDialogue.showTips('请稍等！');
            } else {
                this.closeScene();
                this.stopAutoTurn();
            }
        })
        this.btnOnUp(this.owner.btnADNative, () => {
            LwgPlatform.AD.showNativeByManual();
        })
    }

    /**
     * 第一个奖励角度,后面会根据这个角度排布
     */
    firstRewardAngle = 22.5;
    /**
     * 设置奖励信息
     */
    updateRewardView(): void {
        LwgTools.Node.destroyAllChildren(this.owner.rewardContent);
        const arr = GameData.LuckyWheel.getItemArr;
        const num = arr.length;
        for (let index = 0; index < num; index++) {
            const rewardUI = new ui.Views.LuckyWheelRenderObjUI;
            this.owner.rewardContent.addChild(rewardUI);
            rewardUI.rotation = index * 360 / num + this.firstRewardAngle;
            rewardUI.name = `${index}`;
            rewardUI.pos(this.owner.rewardContent.width / 2, this.owner.rewardContent.height / 2);
            const item = arr[index];
            rewardUI.icon.skin = item.picSkin;
            rewardUI.num.text = item.number.toString();
            if (item.type === GameEnum.ItemType.Skin) {
                rewardUI.num.visible = false;
                rewardUI.icon.scale(0.6, 0.6);
            } else {
                rewardUI.num.visible = true;
                rewardUI.icon.scale(1, 1);
            }
        }
    }

    /**
     * 是否在转动中
     */
    isDoTurning: boolean = false;
    /**
     * 旋转几圈
     */
    turnLaps: number = 5;
    /**
     * 每转一圈耗时
     */
    turnOneTime = 1000;

    playTurn(): void {
        this.stopAutoTurn();
        this.isDoTurning = true;
        GameData.Sound.playSoundByID(4);
        //随机最终停下的位置
        let angle: number = 0;
        const item = GameData.LuckyWheel.ranReward;
        const index = item.index;
        angle = index * (360 / 8) + this.firstRewardAngle;
        const time = this.turnLaps * this.turnOneTime + Math.floor(angle / 360 * this.turnOneTime);
        Laya.timer.once(time - 100, this, () => {
            GameData.Sound.sotpSoundByID(4);
        })
        // console.log('转盘转到的索引值为：', itemGroup);
        Laya.Tween.to(this.owner.rewardContent, { rotation: 360 * this.turnLaps - angle }, time, Laya.Ease.cubicOut, Laya.Handler.create(this, () => {
            GameData.Sound.playSoundByID(5);
            // console.log(angle, this.owner.rewardContent.rotation);
            this.owner.rewardContent.rotation = 360 - angle;
            if (item.type == GameEnum.ItemType.LuckyWheelAgain) {
                LwgDialogue.showTips('抽奖次数+1！');
                GameData.LuckyWheel.lastDate = 0;
                this.displayNum();
                this.isDoTurning = false;
            } else {
                const openData: GameType.openBerewarded = {
                    item: item,
                }
                Laya.timer.once(1000, this, () => {
                    this.openOverlayScene(GameSceneName.BeRewarded, openData);
                    this.isDoTurning = false;
                    this.playAutoTurn();
                })
            }
        }));
    }

    /**
     * 自转
     */
    playAutoTurn(): void {
        LwgTimer.frameLoop(1, this.owner.rewardContent, () => {
            this.owner.rewardContent.rotation += 0.05;
        })
    }
    /**
     * 停止自转
     */
    stopAutoTurn(): void {
        Laya.timer.clearAll(this.owner.rewardContent);
    }
}