import platform from "../PlantForm/platform";
import soundMgr from "../manager/SoundMgr";

export default class btnClickCom extends Laya.Script {
    //核心变量

    constructor() {
        super();
    }

    private self: Laya.Button|Laya.Image;
    private selfScale: Laya.Point = new Laya.Point();
    private timeline: Laya.TimeLine = null;

    onEnable() {
        this.self = this.owner as Laya.Button | Laya.Image;
        this.self.anchorX = 0.5;
        this.self.anchorY = 0.5;
        
        this.selfScale.setTo(this.self.scaleX, this.self.scaleY);

        this.self.on(Laya.Event.MOUSE_DOWN, this, this.becomeSmall);
        this.self.on(Laya.Event.MOUSE_UP, this, this.becomeBig);
        this.self.on(Laya.Event.MOUSE_OUT, this, this.becomeBig);
        this.self.on(Laya.Event.MOUSE_OVER, this, this.becomeSmall);
        this.self.on(Laya.Event.CLICK, this, this.playEffect);
    }

    becomeBig() {
        Laya.Tween.to(this.self, {scaleX: this.selfScale.x, scaleY: this.selfScale.y}, 100);
    }

    becomeSmall() {
        Laya.Tween.to(this.self, {scaleX: this.selfScale.x - 0.1, scaleY: this.selfScale.y - 0.1}, 100);
    }

    playEffect() {
        soundMgr.playEffect('res/music/anniu.mp3');
    }

    zoomAnimation() {
        if(!this.timeline) {
            this.timeline = new Laya.TimeLine();
            this.timeline.to(this.self,{scaleX:0.8,scaleY:0.8},150).to(this.self,{scaleX:1,scaleY:1},150);
            this.timeline.play(0, true);
        }
    }

    onDisable() {
        if(this.timeline) {
            this.timeline.pause();
            this.timeline.reset();
            this.timeline = null;
        }
    }

    onDestroy() {
        if(this.timeline) {
            this.timeline.pause();
            this.timeline.reset();
            this.timeline = null;
        }
    }
}