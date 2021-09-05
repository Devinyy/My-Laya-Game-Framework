import { ui } from "../../../ui/layaMaxUI";
import { LwgSound, LwgScene, LwgControl } from "../../Lwg/Lwg";
import { GameData } from "../Control/GameData";
import GameSceneName from "../Control/GameSceneName";

export default class Defeated extends LwgScene.SceneBase {
    owner: ui.Views.DefeatedUI;
    lwgOpenAniAfter(): void {
        this.owner.lbLvNum.text = LwgControl.Game.level.toString();
        GameData.Sound.playSoundByID(20);
    }
    lwgButton(): void {
        this.btnOnUp(this.owner.btnAgain, () => {
            this.openScene(GameSceneName.Start);
        })
        this.btnOnUp(this.owner.btnADGet, () => {
            LwgControl.Game.level++;
            this.openScene(GameSceneName.Start);
        })
    }
}