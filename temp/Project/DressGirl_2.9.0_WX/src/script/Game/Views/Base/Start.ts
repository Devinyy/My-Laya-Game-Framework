import { ui } from "../../../../ui/layaMaxUI";
import { LwgClick, LwgControl, LwgCurrency, LwgDialogue, LwgEvent, LwgScene, LwgTools } from "../../../Lwg/Lwg";
import { GameData } from "../../Control/GameData";
import { GameEnum } from "../../Control/GameEnum";
import { GameEvent } from "../../Control/GameEvent";
import { GameRes } from "../../Control/GameRes";
import GameSceneName from "../../Control/GameSceneName";
import { GameType } from "../../Control/GameType";
import { Control3D } from "../../Game3D/Control3D";

/**测试模块,每个模块分开，默认导出一个类，这个类是默认挂载的脚本类，如果有多个脚本，
 * 那么在这个默认类中进行添加，或者在其他地方动态添加*/
export default class Start extends LwgScene.SceneBase {
    owner: ui.Views.Base.StartUI;
    openData: GameType.openStart;
    lwgOnAwake(): void {
        // LwgTools.NodeData.getMsgFromSprite3D(GameRes.Prefab3D.Roads.instance as any);
        // console.log(GameRes.Prefab3D.Roads.instance);
        this.showCurMode();
    }
    lwgOpenAniAfter(): void {
        Laya.timer.once(500, this, () => {
            this.evNotify(GameEvent.redDotHint);
        })
        if (this.openData && this.openData.whereFrom == GameSceneName.Victory) {
            this.updateKey(true);
        } else {
            //新玩家弹签到规则
            if (LwgControl.Login.totalNum === 1) {
                if (this.openNum === 2 && !GameData.CheckIn.today) {
                    this.openOverlayScene(GameSceneName.CheckIn);
                } else {
                    this.updateKey(true);
                }
            } else {
                if (!GameData.CheckIn.today) {
                    this.openOverlayScene(GameSceneName.CheckIn);
                } else {
                    this.updateKey(true);
                }
            }
        }
    }
    lwgButton(): void {
        this.btnOnDown(this.owner.startPic, () => {
            if (GameData.Level.mode === GameEnum.LevelMode.endless) {
                if (GameData.Level.endlessFreeNum > 0) {
                    this.openScene(GameSceneName.PropTry);
                    GameData.Level.endlessFreeNum--;
                } else {
                    LwgDialogue.openDialogHint({
                        type: LwgDialogue.EmDialogHint.Double,
                        content: '是否开启无尽模式',
                        onBtnConfirm: () => {
                            this.openScene(GameSceneName.PropTry);
                        },
                    })
                }
            } else {
                if (LwgCurrency.Stamina.num >= 5) {
                    if (LwgControl.Game.level > 1) {
                        if (LwgControl.Game.level % 2 === 0) {
                            this.openScene(GameSceneName.PropTry);
                        } else {
                            const id = GameData.Skin.getRanSkinTryByWing();
                            if (id) {
                                const openData: GameType.openSkinTry = {
                                    id: id,
                                }
                                this.openScene(GameSceneName.SkinTry, openData);
                            } else {
                                this.openScene(GameSceneName.PropTry);
                            }
                        }
                    } else {
                        LwgCurrency.Stamina.addNumDisPlayNode(-5);
                        this.openScene(GameSceneName.Levels);
                    }
                } else {
                    LwgDialogue.showTips('体力不够了！');
                    const data: GameType.openADGetReward = {
                        type: GameEnum.ResType.Stamina,
                    }
                    this.openOverlayScene(GameSceneName.ADGetReward, data);
                }
            }
        })

        this.btnOnUp(this.owner.btnLuckyWheel, () => {
            this.openOverlayScene(GameSceneName.LuckyWheel);
        })

        this.btnOnUp(this.owner.btnCheckIn, () => {
            this.openOverlayScene(GameSceneName.CheckIn);
        })

        this.btnOnUpADCondition(this.owner.btnLottery,
            () => {
                return GameData.Lottery.KeyNum < 3;
            },
            () => {
                GameData.Lottery.KeyNum++;
                this.updateKey(true);
                if (this.owner[`key${GameData.Lottery.KeyNum}Ani`]) {
                    this.owner[`key${GameData.Lottery.KeyNum}Ani`].play(0, false);
                }
            }, () => {
                const data: GameType.openLottery = {
                    whereFrom: this.owner.name,
                }
                this.openOverlayScene(GameSceneName.Lottery, data);
            })
        this.btnOnUp(this.owner.btnSkin, () => {
            this.openScene(GameSceneName.Skin, null, true);
        })
        this.btnOnUp(this.owner.btnCutMode, () => {
            this.changeMode();
        })
    }
    lwgEvent(): void {
        this.evRegister(GameEvent.updateKeyNumStart, (openLottery: boolean) => {
            this.updateKey(openLottery);
        })
    }
    lwgOnStart(): void {
        // this.evNotify(GameEvent.updateKeyNumStart);
    }

    showCurMode(): void {
        if (GameData.Level.mode === GameEnum.LevelMode.common) {
            this.owner.btnCutMode.skin = 'Game/UI/img_home_btn_wujin.png';
            this.owner.lbEndlessTitle.visible = false;
            this.owner.imgLogo.visible = true;
            Control3D.showMainScene();
        } else {
            this.owner.lbEndlessTitle.visible = true;
            this.owner.imgLogo.visible = false;
            this.owner.btnCutMode.skin = 'Game/UI/img_home_btn_putong.png';
            Control3D.showEndLess();
        }
    }
    changeMode(): void {
        LwgClick.Filter.setValue(LwgClick.EmfilterType.none);
        LwgCurrency.Diamond.hide();
        LwgCurrency.Stamina.hide();
        this.owner.aniChangeMode.play(0, false);
        this.owner.aniChangeMode.once(Laya.Event.LABEL, this, () => {
            LwgCurrency.Diamond.show();
            LwgCurrency.Stamina.show();
            if (GameData.Level.mode === GameEnum.LevelMode.common) {
                GameData.Level.mode = GameEnum.LevelMode.endless;
            } else {
                GameData.Level.mode = GameEnum.LevelMode.common;
            }
            this.showCurMode();
            LwgClick.Filter.setValue(LwgClick.EmfilterType.all);
        })
    }
    updateKey(openLottery: boolean = false): void {
        for (let index = 1; index < 4; index++) {
            if (index > GameData.Lottery.KeyNum) {
                this.owner[`key${index}`].visible = false;
            } else {
                this.owner[`key${index}`].visible = true;
            }
        }
        if (GameData.Lottery.KeyNum >= 3) {
            this.owner.btnLotteryADPic.visible = false;
            if (openLottery) {
                Laya.timer.once(100, this, () => {
                    const data: GameType.openLottery = {
                        whereFrom: this.owner.name,
                    }
                    this.openOverlayScene(GameSceneName.Lottery, data);
                })
            }
        } else {
            this.owner.btnLotteryADPic.visible = true;
        }
    }
}


