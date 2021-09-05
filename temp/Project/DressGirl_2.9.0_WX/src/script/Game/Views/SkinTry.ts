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

export default class SkinTry extends LwgScene.SceneBase {
    owner: ui.Views.SkinTryUI;
    openData: GameType.openSkinTry;
    lwgOnAwake(): void {
        if (LwgPlatform.type === LwgPlatform.EmType.OPPO) {
            this.owner.btnADNative.visible = true;
            this.owner.btnADGet.centerX = 140;
        }

        SkinShowScene.ins.show(this.owner, this.openData.id);
    }
    lwgButton(): void {
        this.btnOnUpAD(this.owner.btnADGet, () => {
            const name = GameData.Skin.getNameByID(this.openData.id);
            Role.ins.changeSkin(null, null, name);
            this.rule();
        })
        this.btnOnUp(this.owner.btnDirect, () => {
            this.rule();
        })
    }
    rule(): void {
        if (GameData.Level.mode === GameEnum.LevelMode.common) {
            LwgCurrency.Stamina.addNumDisPlayNode(-5);
        }
        this.openScene(GameSceneName.Levels);
    }
}