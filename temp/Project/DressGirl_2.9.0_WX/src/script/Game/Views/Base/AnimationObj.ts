import { FlowLightSprite } from "../../../Lwg/FlowLightSprite";
import { LwgAni2D, LwgScene, LwgTimer } from "../../../Lwg/Lwg";

/**
 * 按钮物件等提示，通过节点的名字来判断使用哪种提示动画
 */
export default class AnimationObj extends LwgScene.RuntimeImgBase {
    constructor() {
        super();
    }
    lwgOnAwake(): void {
        this.breatheBtnHint();
        if (this.name === 'imgLogo') {
            let flowLightSp = new FlowLightSprite();
            flowLightSp.loadImage("Init/Preload/img_LOGO.png");
            flowLightSp.zOrder = 1000;
            this.addChild(flowLightSp);
        }
    }
    /**b
     * 呼吸按钮提示
     */
    breatheBtnHint(): void {
        LwgAni2D.circulation_scale(this, 0.05, 200, 0, () => {
            this.breatheBtnHint();
        })
    }
    /**
    * 左右Q弹伸缩
    */
    bombFlexLR(): void {
        LwgTimer.loop(2000, this, () => {
            LwgAni2D.bomb_LeftRight(this, 1.22, 250);
        }, true);
    }
}