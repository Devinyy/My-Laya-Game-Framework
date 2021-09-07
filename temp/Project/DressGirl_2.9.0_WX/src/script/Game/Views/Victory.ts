import { ui } from "../../../ui/layaMaxUI";
import { LwgSound, LwgCurrency, LwgScene, LwgControl, LwgTimer, LwgPlatform } from "../../Lwg/Lwg";
import { GameAni2D } from "../Control/GameAni2D";
import { GameData } from "../Control/GameData";
import { GameEff2D } from "../Control/GameEff2D";
import { GameEnum } from "../Control/GameEnum";
import GameSceneName from "../Control/GameSceneName";
import { GameType } from "../Control/GameType";

export default class Victory extends LwgScene.SceneBase {
    owner: ui.Views.VictoryUI;
    openData: GameType.openVictory;
    score: number = 0;
    lwgOnAwake(): void {

        if (LwgPlatform.type === LwgPlatform.EmType.OPPO || LwgPlatform.type === LwgPlatform.EmType.VIVO) {
            this.owner.btnADNative.visible = true;
            this.owner.btnADGet.centerX = 140;
        }

        this.score = Math.round(this.openData.score * 1 * (1 + GameData.Skill.getSkillAdditionByType(GameEnum.SkillType.reward)));
        // console.log('技能增加奖励', GameData.Skill.getSkillAdditionByType(GameEnum.SkillType.reward), this.score);
        this.owner.lbRewardNum.text = 'x' + this.score.toString();
        this.owner.lbLvNum.text = LwgControl.Game.level.toString();
        GameData.Sound.playSoundByID(19);
        GameEff2D.interfacePointJet(this.owner);
    }

    multiple = 1;
    lwgOpenAniAfter(): void {
        LwgControl.Game.level++;
        LwgTimer.frameLoop(1, this, () => {
            const rotation = Math.abs(this.owner.imgPointerMultiple.rotation);
            if (rotation > 0 && rotation <= 10) {
                this.multiple = 2;
            } else if (rotation > 10 && rotation <= 30) {
                this.multiple = 3;

            } else if (rotation > 30 && rotation <= 60) {
                this.multiple = 4;

            } else if (rotation > 60 && rotation <= 90) {
                this.multiple = 5;
            }
            this.owner.lbRewardNum.text = (this.score * this.multiple).toString();
        })
    }
    lwgButton(): void {
        this.btnOnUpAD(this.owner.btnADGet, () => {
            this.getReward(this.multiple);
        })
        this.btnOnceUp(this.owner.btnDirect, () => {
            this.getReward(1);
        })
        this.btnOnUp(this.owner.btnADNative, () => {
            LwgPlatform.AD.showNativeByManual();
        })
    }
    getReward(multiple: number = 1): void {
        GameAni2D.getRewardAni(GameEnum.ResType.Diamond, null, null, () => {
            LwgCurrency.Diamond.addNumDisPlayNode(this.score * multiple);
            const openData: GameType.openStart = {
                whereFrom: this.owner.name,
            }
            this.openScene(GameSceneName.Start, openData, true);
        })
    }
}


