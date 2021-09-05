import { ui } from "../../../../ui/layaMaxUI";
import { LwgDialogue, LwgScene } from "../../../Lwg/Lwg";

export class DialogHint extends LwgScene.SceneBase {
    owner: ui.Views.Base.DialogHintUI;
    openData: LwgDialogue.TpDialogHint;
    lwgOnAwake(): void {
        // this.owner[this.openData.type].visible = true;
        this.owner.boxTitle.visible = false;
        this.owner.btnCloseDouble.visible = false;
    }
    lwgButton(): void {
        this.btnOnUp(this.owner.btnCloseDouble, () => {
            this.closeScene();
        })
        this.btnOnUpAD(this.owner.btnConfirmDouble, () => {
            this.openData.onBtnConfirm && this.openData.onBtnConfirm();
            this.closeScene();
        })
        this.btnOnUp(this.owner.btnCancelDouble, () => {
            this.closeScene();
        })
    }
}