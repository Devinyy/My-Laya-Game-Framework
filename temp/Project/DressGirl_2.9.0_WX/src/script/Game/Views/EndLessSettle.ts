import { LwgClick, LwgCommon, LwgControl, LwgCurrency, LwgData, LwgDate, LwgPlatform, LwgScene, LwgTimer, LwgTools } from "../../Lwg/Lwg";
import { ui } from "../../../ui/layaMaxUI";
import GameSceneName from "../Control/GameSceneName";
import { GameType } from "../Control/GameType";
import { GameData } from "../Control/GameData";
import { GameEnum } from "../Control/GameEnum";
import { GameAni2D } from "../Control/GameAni2D";
import { GameEff2D } from "../Control/GameEff2D";

export default class EndLessSettle extends LwgScene.SceneBase {
    owner: ui.Views.EndLessSettleUI;
    openData: GameType.openSettlement;
    lwgOnAwake(): void {

        if (LwgPlatform.type === LwgPlatform.EmType.OPPO || LwgPlatform.type === LwgPlatform.EmType.VIVO) {
            this.owner.btnADNative.visible = true;
            this.owner.btnADGet.centerX = 140;
        }

        GameData.Sound.playSoundByID(9);
        GameEff2D.interfacePointJet();
        this.openData.diamondNum += Math.round(this.openData.diamondNum * GameData.Skill.getSkillAdditionByType(GameEnum.SkillType.reward));
        this.owner.lbRewardNum.text = this.openData.diamondNum.toString();
        this.owner.lbMileage.text = this.openData.mileage + 'm';
        // console.log('获得金币!', this.openData.diamondNum);
    }
    lwgButton(): void {
        this.btnOnceUpAD(this.owner.btnADGet, () => {
            this.getReward(2);
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
            LwgCurrency.Diamond.addNumDisPlayNode(this.openData.diamondNum * multiple);
            const openData: GameType.openStart = {
                whereFrom: this.owner.name,
            }
            this.openScene(GameSceneName.Start, openData);
        })
    }
}



