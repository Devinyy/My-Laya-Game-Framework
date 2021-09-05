import { LwgAni2D, LwgClick, LwgCommon, LwgControl, LwgCurrency, LwgData, LwgDate, LwgScene, LwgTimer, LwgTools } from "../../Lwg/Lwg";
import { GameRes } from "../Control/GameRes";
import { GameEvent } from "../Control/GameEvent";
import { ui } from "../../../ui/layaMaxUI";
import GameSceneName from "../Control/GameSceneName";
import { GameType } from "../Control/GameType";
import { GameData } from "../Control/GameData";
import { Control3D } from "../Game3D/Control3D";
import { GameEnum } from "../Control/GameEnum";

export default class Levels extends LwgScene.SceneBase {
    owner: ui.Views.LevelsUI;
    openData: GameType.openLevels;
    /**
     * 当前分数记录
     */
    get curScore(): number {
        return this['_curScore'] ? this['_curScore'] : 0;
    }
    set curScore(val: number) {
        this['_curScore'] = val;
    }

    public get bubblesNum(): number {
        return this['_bubblesNum'] ? this['_bubblesNum'] : 0;
    }
    public set bubblesNum(val: number) {
        this['_bubblesNum'] = val;
        this.owner.lbBubblesNum.text = val.toString();
    }

    public get mileage(): number {
        return this['_mileage'] ? this['_mileage'] : 0;
    }
    public set mileage(val: number) {
        this['_mileage'] = Math.floor(val);
        this.owner.lbMileage.text = this['_mileage'] + 'm';
    }

    public get diamondNum(): number {
        return this['_diamondNum'] ? this['_diamondNum'] : 0;
    }
    public set diamondNum(val: number) {
        this.owner.lbDiamondNum.text = 'x' + val;
        this['_diamondNum'] = val
    }

    lwgOnAwake(): void {
        this.curScore = 0;
    }
    lwgOnStart(): void {
        Control3D.start(this.openData.sprint);
        this.setLevelProgress();
        this.updateKey();
        if (GameData.Level.mode === GameEnum.LevelMode.endless) {
            this.owner.boxLv.visible = false;
            this.owner.boxKey.visible = false;
            this.owner.imgDiamond.visible = true;
            this.owner.imgDiamond.pos(60, 149);
        } else {
            this.owner.boxEndless.visible = false;
            this.owner.imgDiamond.pos(67, 70);
        }
    }
    /**
     * 设置进度条
     */
    setLevelProgress(): void {
        this.owner.lbCurLevel.text = LwgControl.Game.levelDisplay.toString();
    }

    roleFirstHp: number;
    bossFirstHp: number;
    roleLv: number = 1;

    lwgEvent(): void {
        this.evRegister(GameEvent.updateRoleDataDisplay, (pos: Laya.Point) => {
            this.owner.boxRoleData.pos(pos.x, pos.y - 120);
        })

        this.evRegister(GameEvent.readyVSBOSS, () => {
            this.owner.boxLv.visible = false;
            this.owner.boxRoleData.visible = false;
        })

        this.evRegister(GameEvent.hideRoleHP, () => {
            this.owner.boxRoleData.visible = false;
        })

        this.evRegister(GameEvent.showRoleHP, () => {
            this.owner.boxRoleData.visible = true;
        })

        this.evRegister(GameEvent.storageNum, (num: number) => {
            this.bubblesNum = num;
        })

        this.evRegister(GameEvent.bubblesNum, (bubblesNum: number, num: number, rainbowEnergyPer: number) => {
            if (bubblesNum < 0) {
                bubblesNum = 0;
            }
            if (num > 0) {
                this.bubblesNum += num;
                if (GameData.Level.mode === GameEnum.LevelMode.endless) {
                    this.diamondNum = this.bubblesNum;
                }
            }
            this.showContinuousNum(num);
            if (!this.startShowNum) {
                this.startShowNum = true;
            }
            this.owner.imgRainbowEnergy.y = this.owner.imgRainbowEnergy.height * (1 - rainbowEnergyPer);
        })

        this.evRegister(GameEvent.reduceStorage, (time1: number, time2: number) => {
            this.owner.imgDiamond.visible = true;
            Laya.timer.once(time1, this, () => {
                LwgAni2D.move(this.owner.imgRainbowEnergy, this.owner.imgRainbowEnergy.x, this.owner.imgRainbowEnergy.height, time2);
            })
            this.owner.btnReturn.visible = false;
        })

        this.evRegister(GameEvent.updateLvSchedule, (per: number, mileage: number) => {
            // console.log(per);
            this.owner.levelProgress.mask.width = per * 280;
            this.mileage = mileage;
        })
        this.evRegister(GameEvent.victory, () => {
            this.owner.boxRoleData.visible = false;
            const openData: GameType.openVictory = {
                score: this.diamondNum,
            }
            this.openScene(GameSceneName.Victory, openData);
        })

        this.evRegister(GameEvent.defeated, () => {
            const data: GameType.openSettlement = {
                diamondNum: this.bubblesNum,
                mileage: this.mileage,
            }
            if (GameData.Level.mode === GameEnum.LevelMode.endless) {
                Laya.timer.once(1000, this, () => {
                    this.openScene(GameSceneName.EndLessSettle, data);
                })
            } else {
                this.openScene(GameSceneName.Defeated);
            }
        })

        this.evRegister(GameEvent.Resurgence, (type: GameEnum.ResurgenceType.drop) => {
            const data: GameType.OpenResurgence = {
                type: type,
            }
            this.openOverlayScene(GameSceneName.Resurgence, data);
        })

        this.evRegister(GameEvent.updateDiamond, (num: number) => {
            this.diamondNum = num;
        })

        this.evRegister(GameEvent.hideStorage, (num: number) => {
            this.owner.boxStorage.visible = false;
        })

        this.evRegister(GameEvent.pickedKey, () => {
            GameData.Lottery.KeyNum++;
            this.updateKey();
        })
    }

    lastTime: number = 0;
    lastPlusOrMinus: number = 0;
    lastNum: number = 0;
    startShowNum: boolean;
    /**
      * 递增效果
      */
    showContinuousNum(num: number): void {
        if (!this.startShowNum) {
            return;
        }
        Laya.timer.clearAll(this.owner.lbContinuousNum);
        this.owner.lbContinuousNum.visible = true;
        const time = 1000;
        if (LwgDate.Now.time - this.lastTime < time) {
            if (this.lastPlusOrMinus > 0 && num > 0) {
                this.lastNum += num;
            } else if (this.lastPlusOrMinus < 0 && num < 0) {
                this.lastNum += num;
            } else {
                this.lastNum = num;
            }
        } else {
            this.lastNum = num;
        }
        if (num < 0) {
            this.owner.aniBeAttacked.play(0, false);
        }
        this.lastPlusOrMinus = num;
        this.lastTime = LwgDate.Now.time;
        if (this.lastNum > 0) {
            this.owner.lbContinuousNum.text = '+' + this.lastNum;
            this.owner.lbContinuousNum.strokeColor = '#37db21';
            if (this.lastNum === 1) {
                GameData.Sound.playSoundByID(11);
            } else if (this.lastNum === 2) {
                GameData.Sound.playSoundByID(12);
            } else if (this.lastNum === 3) {
                GameData.Sound.playSoundByID(13);
            } else if (this.lastNum >= 4) {
                GameData.Sound.playSoundByID(14);
            }
        } else if (this.lastNum === 0) {
            this.owner.lbContinuousNum.visible = false;
        } else {
            this.owner.lbContinuousNum.text = this.lastNum.toString();
            this.owner.lbContinuousNum.strokeColor = '#db2f21';
        }
        this.owner.aniContinuousNum.play(0, false);
        Laya.timer.once(time, this.owner.lbContinuousNum, () => {
            this.owner.lbContinuousNum.visible = false;
        })
    }

    clickNum = 1;
    refuelMode: number;
    specialAwardsOpenData: GameType.openSpecialAwards;
    lwgButton(): void {
        this.btnOnceUp(this.owner.btnReturn, () => {
            this.openScene(GameSceneName.Start, null, true);
        })
    }

    updateKey(): void {
        for (let index = 1; index < 4; index++) {
            if (index > GameData.Lottery.KeyNum) {
                this.owner[`key${index}`].visible = false;
            } else {
                this.owner[`key${index}`].visible = true;
            }
        }
    }
}

