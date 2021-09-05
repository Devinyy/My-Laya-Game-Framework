import { ui } from "../../../ui/layaMaxUI"
import { LwgAni2D, LwgClick, LwgControl, LwgCurrency, LwgData, LwgDate, LwgDialogue, LwgPlatform, LwgScene, LwgSound, LwgTools, LwgWX } from "../../Lwg/Lwg"
import { GameData } from "../Control/GameData";
import { GameEnum } from "../Control/GameEnum";
import { GameRes } from "../Control/GameRes";
import GameSceneName from "../Control/GameSceneName";
import { GameType } from "../Control/GameType";
import { Control3D } from "../Game3D/Control3D";
import { Role } from "../Game3D/Role";
import { SkinScene } from "../Game3D/SkinScene";
import { SkinShowScene } from "../Game3D/SkinShowScene";

export default class PropTry extends LwgScene.SceneBase {
    owner: ui.Views.PropTryUI;
    openData: GameType.openSkinTry;
    item: GameType.ItemData;

    lwgOnAwake(): void {

        if (LwgPlatform.type === LwgPlatform.EmType.OPPO) {
            this.owner.btnADNative.visible = true;
            this.owner.btnADGet.centerX = 140;
        }

        if (GameData.Level.mode === GameEnum.LevelMode.endless) {
            this.owner.lbDescribe.text = '使用后可无敌冲刺5秒';
        } else {
            this.owner.lbDescribe.text = '使用后可无敌冲刺5秒';
        }
    }
    lwgButton(): void {
        this.btnOnUpAD(this.owner.btnADGet, () => {
            this.rule(GameEnum.MoveForwardArgs.sprint);
        })
        this.btnOnUp(this.owner.btnDirect, () => {
            this.rule(GameEnum.MoveForwardArgs.none);
        })
    }
    rule(prop?: GameEnum.MoveForwardArgs): void {
        const openData: GameType.openLevels = {
            sprint: prop,
        }
        if (GameData.Level.mode === GameEnum.LevelMode.common) {
            LwgCurrency.Stamina.addNumDisPlayNode(-5);
        }
        this.openScene(GameSceneName.Levels, openData);
    }
}