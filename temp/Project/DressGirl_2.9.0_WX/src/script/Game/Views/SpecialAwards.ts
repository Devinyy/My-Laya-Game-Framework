import { ui } from "../../../ui/layaMaxUI";
import { LwgClick, LwgColor, LwgControl, LwgScene, LwgTools } from "../../Lwg/Lwg";
import { GameAni2D } from "../Control/GameAni2D";
import { GameData } from "../Control/GameData";
import { GameEff2D } from "../Control/GameEff2D";
import { GameEnum } from "../Control/GameEnum";
import { GameEvent } from "../Control/GameEvent";
import GameSceneName from "../Control/GameSceneName";
import { GameType } from "../Control/GameType";
import { SkinShowScene } from "../Game3D/SkinShowScene";
export default class SpecialAwards extends LwgScene.SceneBase {
    owner: ui.Views.SpecialAwardsUI;
    openData: GameType.openSpecialAwards;
    lwgOnAwake(): void {
        LwgControl.Game.level++;
        //试用皮肤机会无论如何都没有了
        GameData.Sound.playSoundByID(7);
        GameEff2D.interfacePointJet();
        this.owner.imgReward.skin = this.openData.itme.picBigSkin;
        this.owner.btnNextTime.skin = 'Game/UI/img_icon_text_xiacizaishuo.png';
        switch (this.openData.itme.type) {
            case GameEnum.ItemType.Currency:
                // console.log(this.openData.itme.number);
                this.openData.itme.number += Math.round(this.openData.itme.number * GameData.Skill.getSkillAdditionByType(GameEnum.SkillType.reward));
                // console.log(this.openData.itme.number);
                this.owner.boxCurrency.visible = true;
                this.owner.btnNextTime.visible = true;
                this.owner.btnNextTime.skin = 'Game/UI/img_icon_text_zhijielingqu.png';
                this.owner.imgReward.visible = true;
                this.owner.lbCurrencyNum.text = this.openData.itme.number.toString();

                break;
            case GameEnum.ItemType.Skin:
                this.owner.boxSkin.visible = true;
                SkinShowScene.ins.show(this.owner, this.openData.itme.ID);

                break;
            case GameEnum.ItemType.LuckyWheelAgain:
                this.owner.boxLuckyWheelAgain.visible = true;
                this.owner.imgReward.visible = true;

                break;
            case GameEnum.ItemType.EndlessMode:
                this.owner.boxEndlessInto.visible = true;
                this.owner.imgReward.visible = true;
                this.owner.btnNextTime.visible = true;

                break;
            case GameEnum.ItemType.SkinTry:
                this.owner.boxSkinTry.visible = true;
                this.owner.imgReward.visible = true;
                this.owner.btnNextTime.visible = true;
                SkinShowScene.ins.show(this.owner, this.openData.itme.ID);

                break;
            default:
                break;
        }
    }
    lwgButton(): void {
        this.btnOnceUp(this.owner.btnNextTime, () => {
            if (this.owner.boxCurrency.visible) {
                this.getRewardAni(1);
            } else {
                this.openScene(GameSceneName.Start);
            }
        })
        this.btnOnUp(this.owner.btnEndlessInto, () => {
            GameData.Level.endlessFreeNum++;
            GameData.Level.mode = GameEnum.LevelMode.endless;
            this.openScene(GameSceneName.Start);
        })
        this.btnOnUp(this.owner.btnSkinTry, () => {
            this.openScene(GameSceneName.Start);
        })
        this.btnOnUpAD(this.owner.btnCurrency3M, () => {
            this.getRewardAni(2);
        })

        this.btnOnUp(this.owner.btnSkin, () => {

        })

    }
    getRewardAni(multiple: number = 1): void {
        GameAni2D.getRewardAni(this.openData.itme.ID, this.openData.itme.number * multiple, () => {
            this.owner.lbCurrencyNum.text = LwgTools.Format.strAddNum(this.owner.lbCurrencyNum.text, 20);
        }, () => {
            this.owner.lbCurrencyNum.text = '0';
            this.openScene(GameSceneName.Start);
        })
    }
}


