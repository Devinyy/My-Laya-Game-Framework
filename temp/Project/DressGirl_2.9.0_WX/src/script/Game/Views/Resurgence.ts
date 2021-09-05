import { ui } from "../../../ui/layaMaxUI"
import { LwgAni2D, LwgClick, LwgControl, LwgCurrency, LwgData, LwgDate, LwgDialogue, LwgPlatform, LwgScene, LwgSound, LwgTimer, LwgTools, LwgWX } from "../../Lwg/Lwg"
import { GameData } from "../Control/GameData";
import { GameEnum } from "../Control/GameEnum";
import { GameEvent } from "../Control/GameEvent";
import { GameRes } from "../Control/GameRes";
import GameSceneName from "../Control/GameSceneName";
import { GameType } from "../Control/GameType";
import { Role } from "../Game3D/Role";

export default class Resurgence extends LwgScene.SceneBase {
    owner: ui.Views.ResurgenceUI;
    item: GameType.ItemData;
    openData: GameType.OpenResurgence;
    lwgOnAwake(): void {
        if (LwgPlatform.type === LwgPlatform.EmType.OPPO) {
            this.owner.btnADNative.visible = true;
            this.owner.btnADGet.centerX = 140;
        }
     }
    countDown = 9;
    lwgOpenAniAfter(): void {
        LwgTimer.numLoop(1000, 10, this, () => {
            this.countDown -= 1;
            if (this.countDown === -1) {
                this.countDown = 0;
                this.evNotify(GameEvent.defeated);
                this.closeScene();
            }
            this.owner.ftcCountDown.value = this.countDown.toString();
        })
    }
    lwgButton(): void {
        this.btnOnUpAD(this.owner.btnADGet, () => {
            Role.ins.setState(GameEnum.RoleState.Resurgence, [this.openData.type]);
            this.closeScene();
        })
        this.btnOnUp(this.owner.btnAbandon, () => {
            this.evNotify(GameEvent.defeated);
            this.closeScene();
        })
    }
}