import { FlowLightShader } from "./FlowLightShader";

export class FlowLightSprite extends Laya.Sprite {
    constructor() {
        super();
        this.customRenderEnable = true;
        this["_renderType"] = Laya.SpriteConst.CUSTOM;
    }

    public customRender(context: Laya.Context, x: number, y: number): void {
        if (!this.texture || !this.texture.width || !this.texture.height) {
            (context.drawMesh as any)(FlowLightShader.mainID, this.texture, x, y, this.width, this.height)
        } else {
            (context.drawMesh as any)(FlowLightShader.mainID, this.texture, x, y, this.width || this.texture.width, this.height || this.texture.height)
        }
    }
}