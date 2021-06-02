//按钮动画脚本

export default class BtnAniCom extends Laya.Script {
    //核心变量

    constructor() {
        super();
    }

    self: Laya.Button|Laya.Image|Laya.Sprite;
    timeline: Laya.TimeLine = null;

    onAwake() {
        this.self = this.owner as Laya.Button|Laya.Image|Laya.Sprite;
        if(!this.timeline) {
            this.timeline = new Laya.TimeLine();
            this.timeline.to(this.self,{scaleX:0.8,scaleY:0.8},188).to(this.self,{scaleX:1,scaleY:1},188);
            this.timeline.play(0, true);
        }
    }

	public playAni() {
        if(!this.timeline) {
            this.timeline = new Laya.TimeLine();
            this.timeline.to(this.self,{scaleX:0.8,scaleY:0.8},188).to(this.self,{scaleX:1,scaleY:1},188);
        }
        this.timeline.play(0, true);
    }

    public stopAni() {
        if(this.timeline) {
            this.timeline.pause();
        }
    }

    onDisable() {
        if(this.timeline) {
            this.timeline.pause();
            this.timeline.reset();
            this.timeline = null;
        }
    }
}