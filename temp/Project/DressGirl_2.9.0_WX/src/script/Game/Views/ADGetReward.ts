import { ui } from "../../../ui/layaMaxUI";
import { LwgPlatform, LwgScene, LwgTools } from "../../Lwg/Lwg";
import { GameAni2D } from "../Control/GameAni2D";
import { GameEnum } from "../Control/GameEnum";
import { GameType } from "../Control/GameType";

export default class ADGetReward extends LwgScene.SceneBase {
    owner: ui.Views.ADGetRewardUI;
    openData: GameType.openADGetReward;
    rewardNum: number;
    multiple: number = 1;
    lwgOnAwake(): void {

        if (LwgPlatform.type === LwgPlatform.EmType.OPPO || LwgPlatform.type === LwgPlatform.EmType.VIVO) {
            this.owner.btnADNative.visible = true;
            this.owner.btnADGet.centerX = 140;
        }

        switch (this.openData.type) {
            case GameEnum.ResType.Gold:

                break;
            case GameEnum.ResType.Diamond:
                this.owner.rewardBigPic.skin = 'Game/UI/img_icon_zuanshibig.png';
                this.owner.rewardIcon.skin = 'Game/UI/img_icon_money_01.png';

                this.owner.tattleWard.skin = 'Game/UI/img_icon_text_zuanshibuzu.png';

                this.rewardNum = 500;
                this.multiple = 1;

                break;
            case GameEnum.ResType.Stamina:
                this.owner.rewardBigPic.skin = 'Game/UI/img_icon_tili_02.png';
                this.owner.rewardIcon.skin = 'Game/UI/img_icon_money_02.png';
                this.owner.tattleWard.skin = 'Game/UI/img_icon_text_tilibuzu.png';

                this.rewardNum = 20;
                this.multiple = 3;

                break;

            default:
                break;
        }
        this.owner.rewardNum.text = this.rewardNum.toString();
    }
    lwgButton(): void {
        this.btnOnUpAD(this.owner.btnADGet, () => {
            GameAni2D.getRewardAni(this.openData.type, this.rewardNum, () => {
                this.owner.rewardNum.text = LwgTools.Format.strAddNum(this.owner.rewardNum.text, 20);
            }, () => {
                this.owner.rewardNum.text = '0';
                this.closeScene();
            })
        })
        this.btnOnceUp(this.owner.btnNextTime, (e: Laya.Event) => {
            this.closeScene();
        })
        this.btnOnUp(this.owner.btnADNative, () => {
            LwgPlatform.AD.showNativeByManual();
        })
    }
}