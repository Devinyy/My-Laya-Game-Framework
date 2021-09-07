import { ui } from "../../../../ui/layaMaxUI";
import { LwgDate, LwgDialogue, LwgScene } from "../../../Lwg/Lwg";
import { GameData } from "../../Control/GameData";

export class DialogHint extends LwgScene.SceneBase {
    owner: ui.Views.Base.DialogHintUI;
    openData: LwgDialogue.TpDialogHint;
    lwgOnAwake(): void {
        // this.owner[this.openData.type].visible = true;
        this.owner.boxTitle.visible = false;
        this.owner.btnCloseDouble.visible = false;
        this.displayNum();
    }
    displayNum(): void {
        if (GameData.Level.todayFree) {
            this.owner.boxADWord.visible = false;
            this.owner.boxFreeWord.visible = true;
        } else {
            this.owner.boxADWord.visible = true;
            this.owner.boxFreeWord.visible = false;
        }
    }
    lwgButton(): void {
        this.btnOnUp(this.owner.btnCloseDouble, () => {
            this.closeScene();
        })
        this.btnOnUpADCondition(this.owner.btnConfirmDouble,
            () => {
                return !GameData.Level.todayFree;
            },
            () => {
                this.openData.onBtnConfirm && this.openData.onBtnConfirm();
                this.closeScene();
            },
            () => {
                GameData.Level.freeLastDate = LwgDate.Now.date;
                this.openData.onBtnConfirm && this.openData.onBtnConfirm();
                this.closeScene();
            })
        this.btnOnUp(this.owner.btnCancelDouble, () => {
            this.closeScene();
        })
    }
}