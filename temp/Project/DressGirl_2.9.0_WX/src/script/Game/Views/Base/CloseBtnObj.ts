import { ui } from "../../../../ui/layaMaxUI";
import { LwgClick, LwgScene } from "../../../Lwg/Lwg";

/**
 * 关闭场景按钮，只能关闭弹窗和叠加场景
 */
export default class CloseBtnObj extends LwgScene.RuntimeImgBase {
    lwgOnAwake() {
        LwgClick.off(this);
        LwgClick.on(undefined, this, this, null, null, () => {
            this.closeSene();
        });
    }
    isClose: boolean;
    closeSene(): void {
        if (this.isClose) {
            return;
        }
        this.isClose = true;
        LwgScene.closeOverlayScene(LwgScene.findNodeBelongToScene(this));
    }
}