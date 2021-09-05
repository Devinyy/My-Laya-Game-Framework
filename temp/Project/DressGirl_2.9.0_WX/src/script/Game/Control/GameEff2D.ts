import { LwgSound, LwgEff2D, LwgTimer, LwgTools } from "../../Lwg/Lwg";

export class GameEff2D {
    /**
     * @static 上面左右喷少量彩带, 普通页面，效果平淡，二级界面
     * @param {Laya.Sprite} parent
     * @memberof GameEffects
     */
    static interfacePointJet(scene?: Laya.View): void {
        const diff = 100;
        const arr = [
            /**红紫*/[[255, 33, 33, 1], [200, 33, 255, 1]],
            /**蓝绿*/[[33, 255, 216, 1], [59, 255, 33, 1]],
            /**绿黄*/[[169, 255, 33, 1], [255, 111, 33, 1]],
            /**黄红*/[[255, 111, 33, 1], [255, 33, 33, 1]]
        ];
        LwgTimer.frameNumLoop(7, 10, this, () => {
            for (let index = 0; index < 5; index++) {
                const ran1 = LwgTools.Arr.randomGetOne(arr);
                const ran2 = LwgTools.Arr.randomGetOne(arr);
                const ran3 = LwgTools.Arr.randomGetOne(arr);
                LwgEff2D.Particle.downwardSpray(scene, new Laya.Point(Laya.stage.width * 1 / 4, -diff), [10, 30], [10, 30], [0, 90], [LwgEff2D.SkinUrl.矩形1], ran1);
                LwgEff2D.Particle.downwardSpray(scene, new Laya.Point(Laya.stage.width * 3 / 4, -diff), [10, 30], [10, 30], [90, 180], [LwgEff2D.SkinUrl.矩形1], ran2);
                LwgEff2D.Particle.downwardSpray(scene, new Laya.Point(-diff, Laya.stage.height / 4), [10, 30], [10, 30], [0, 90], [LwgEff2D.SkinUrl.矩形1], null);
                LwgEff2D.Particle.downwardSpray(scene, new Laya.Point(Laya.stage.width + diff, Laya.stage.height / 4), [10, 30], [10, 30], [90, 180], [LwgEff2D.SkinUrl.矩形1], ran3);
            }
        })
    }

    /**
     * 全屏，完成，左右交叉，路径
     * @param {Laya.Scene} scene 场景
     * @memberof _GameEffects
     */
    static completeCross(): void {
        let num = 4;
        let spcaing = 20;
        for (let index = 0; index < num; index++) {
            let moveY = 7 * index + 5;
            let p1 = new Laya.Point(-200, Laya.stage.height);
            let _caller = {};
            let funcL = () => {
                p1.x += spcaing;
                if (p1.x > Laya.stage.width) {
                    Laya.timer.clearAll(_caller);
                }
                p1.y -= moveY;
                LwgEff2D.Particle.fallingVertical(Laya.stage, new Laya.Point(p1.x, p1.y), [0, 0], null, null, [0, 360], [LwgEff2D.SkinUrl.花2], [[255, 222, 0, 1], [255, 24, 0, 1]], null, [100, 200], [0.8, 1.5], [0.05, 0.1])
            }
            LwgTimer.frameLoop(1, _caller, () => {
                funcL();
            })

            let p2 = new Laya.Point(Laya.stage.width + 200, Laya.stage.height);
            let _callerR = {};
            let funcR = () => {
                p2.x -= spcaing;
                if (p2.x < 0) {
                    Laya.timer.clearAll(_callerR);
                }
                p2.y -= moveY;
                LwgEff2D.Particle.fallingVertical(Laya.stage, new Laya.Point(p2.x, p2.y), [0, 0], null, null, [0, 360], [LwgEff2D.SkinUrl.花2], [[255, 222, 0, 1], [255, 24, 0, 1]], null, [100, 200], [0.8, 1.5], [0.05, 0.1])
            }
            LwgTimer.frameLoop(1, _callerR, () => {
                funcR();
            })
        }
    };

    /**
     * 全屏，完成特效，斜方向交叉，融合，消失
     * @memberof _GameEffects
     */
    static completeSidelingCross(): void {
        let len = Laya.stage.width;
        let _height = Laya.stage.height * 2.5;

        let Img = new Laya.Image;
        Img.width = 100;
        Img.height = _height;
        Img.rotation = 40;
        Img.pos(0, 0);
        Laya.stage.addChild(Img);

        Img.zOrder = 1000;

        let num = 20;
        let spcaing = 40;
        for (let index = 0; index < num; index++) {
            let p1 = new Laya.Point(0, Img.height / num * index);
            let p2 = new Laya.Point(Laya.stage.width, Img.height / num * index);
            let _caller = {};
            let func = () => {
                p1.x += spcaing;
                if (p1.x > len) {
                    Laya.timer.clearAll(_caller);
                }
                p2.x -= spcaing;
                if (p2.x > len) {
                    Laya.timer.clearAll(_caller);
                }
                if (index % 2 == 0) {
                    LwgEff2D.Particle.fallingVertical(Img, new Laya.Point(p1.x, p1.y), [0, 0], null, null, [0, 360], [LwgEff2D.SkinUrl.星星8], [[255, 222, 0, 1], [255, 24, 0, 1]], null, [100, 200], [0.8, 1.5], [0.05, 0.1])
                } else {
                    LwgEff2D.Particle.fallingVertical_Reverse(Img, new Laya.Point(p2.x, p2.y), [0, 0], null, null, [0, 360], [LwgEff2D.SkinUrl.星星8], [[255, 222, 0, 1], [255, 24, 0, 1]], null, [-100, -200], [-0.8, -1.5], [-0.05, -0.1])
                }
            }
            LwgTimer.frameNumLoop(2, 50, _caller, () => {
                func();
            })
        }
    }

    /**
     * @static 烟花庆祝,彩带，花圆圈爆炸。
     * @param func 回调，不是精确时间
     * @memberof _GameEffects
     */
    static fireworksCelebrate(func?: Function) {
        const centerP1 = new Laya.Point(Laya.stage.width / 2, 0);
        const num1 = 150;
        LwgTimer.frameNumRandomLoop(1, 3, num1, this, () => {
            LwgEff2D.Particle.fallingRotate(Laya.stage, centerP1, [Laya.stage.width, 0], [10, 30], [10, 30], [LwgEff2D.SkinUrl.矩形1, LwgEff2D.SkinUrl.矩形2, LwgEff2D.SkinUrl.矩形3], null, [300, Laya.stage.height], [1, 8]);
        })

        const num2 = 16;
        const centerP2 = new Laya.Point(Laya.stage.width / 2, Laya.stage.height / 2 - 50);
        LwgTimer.frameNumRandomLoop(10, 25, num2, this, () => {
            const count = LwgTools.Num.randomOneInt(10, 20);
            const time = 30;
            const dis = LwgTools.Num.randomOneInt(100, 300);
            const radomP = LwgTools.Point.randomPointByCenter(centerP2, 500, 150)[0];
            for (let index = 0; index < count * 2; index++) {
                LwgEff2D.Particle.sprayRound(Laya.stage, radomP, null, [20, 40], null, [LwgEff2D.SkinUrl.花4], null, [dis, dis], [time, time]);
            }
            for (let index = 0; index < count * 2; index++) {
                LwgEff2D.Particle.sprayRound(Laya.stage, radomP, null, [20, 40], null, [LwgEff2D.SkinUrl.花4], null, [50, dis - 20], [time, time]);
            }
        }, () => {
            func && func();
        })
    }

    /**单个花爆炸，点击打开宝箱*/
    static oneFireworks1(parent: Laya.Sprite, point: Laya.Point): void {
        const count = LwgTools.Num.randomOneInt(10, 20);
        const time = 30;
        const dis = LwgTools.Num.randomOneInt(100, 300);
        for (let index = 0; index < count * 2; index++) {
            LwgEff2D.Particle.sprayRound(parent, point, null, [20, 40], null, [LwgEff2D.SkinUrl.星星1], null, [dis, dis], [time, time]);
        }
        for (let index = 0; index < count * 2; index++) {
            LwgEff2D.Particle.sprayRound(parent, point, null, [20, 40], null, [LwgEff2D.SkinUrl.星星1], null, [50, dis - 20], [time, time]);
        }
    }
    /**单个花爆炸，点击打开宝箱*/
    static oneFireworks2(parent: Laya.Sprite, point: Laya.Point): void {
        const dis1 = 40;
        const dis2 = 120;

        const width1 = 10;
        const width2 = 30;

        const time1 = 5;
        const time2 = 15;

        const rSpeed1 = 5;
        const rSpeed2 = 15;

        for (let index = 0; index < 5; index++) {
            LwgEff2D.Particle.sprayRound(parent, point, [width1, width2], null, null, [LwgEff2D.SkinUrl.矩形1], [[50, 50, 50, 1], [50, 50, 50, 1]], [dis1, dis2], [time1, time2], null, [rSpeed1, rSpeed2]);
        }
        for (let index = 0; index < 5; index++) {
            LwgEff2D.Particle.sprayRound(parent, point, [width1, width2], null, null, [LwgEff2D.SkinUrl.矩形1], [[156, 99, 55, 1], [156, 99, 55, 1]], [dis1, dis2], [time1, time2], null, [rSpeed1, rSpeed2]);
        }
        for (let index = 0; index < 10; index++) {
            LwgEff2D.Particle.sprayRound(parent, point, [width1, width2], null, null, [LwgEff2D.SkinUrl.矩形1], [[120, 120, 120, 1], [120, 120, 120, 1]], [dis1, dis2], [time1, time2], null, [rSpeed1, rSpeed2]);
        }
    }
    /**单个花爆炸，点击打开宝箱*/
    static oneFireworks3(parent: Laya.Sprite, point: Laya.Point): void {
        for (let index = 0; index < 20; index++) {
            LwgEff2D.Particle.sprayRound(parent, point, [10, 30], null, null, [LwgEff2D.SkinUrl.矩形1], null, [30, 80], [3, 8], null, [5, 15]);
        }
    }
    /**
     * 场景内，普通爆炸，形成一个圆形，用于某些物体弹出的背景效果
     * @param scene 场景
     * */
    static circleFlowe(scene: Laya.Scene): void {
        const count = 90;
        const time = 35;
        const dis = LwgTools.Num.randomOneInt(500, 500);
        const p = new Laya.Point(Laya.stage.width / 2, Laya.stage.height / 2);
        for (let index = 0; index < count; index++) {
            LwgEff2D.Particle.sprayRound(scene, p, null, [20, 40], null, [LwgEff2D.SkinUrl.花4], null, [dis, dis], [time, time], null, null, 5);
        }
        for (let index = 0; index < count * 2; index++) {
            LwgEff2D.Particle.sprayRound(scene, p, null, [20, 40], null, [LwgEff2D.SkinUrl.花4], null, [100, dis - 20], [time, time], null, null, 5);
        }
    }

    /**
     * @static 在一个节点旁边闪烁星星,使用在例如logo的旁边，两个
     * @param {Laya.Scene} parent 父节点
     * @param {Laya.Sprite} pos 节点位置
     * @memberof _GameEffects
     */
    static bothBlinkOnSprite1(parent: Laya.Sprite, pos: Laya.Point, caller: any): any {
        // 星星闪烁动画左边
        LwgTimer.frameRandomLoop(30, 50, caller, () => {
            LwgEff2D.Glitter.blinkStar(parent, new Laya.Point(pos.x - 200, pos.y), [150, 100], [LwgEff2D.SkinUrl.星星1], null, [80, 80]);
        }, true)
        // 星星闪烁动画右边
        LwgTimer.frameRandomLoop(30, 50, caller, () => {
            LwgEff2D.Glitter.blinkStar(parent, new Laya.Point(pos.x + 200, pos.y), [150, 100], [LwgEff2D.SkinUrl.星星1], null, [80, 80]);
        }, true)
    }

    /**
     * @static 在一个节点旁边闪烁星星,使用在例如logo的旁边，单个
     * @param {Laya.Scene} parent 父节点
     * @param {Laya.Sprite} pos 节点位置
     * @memberof _GameEffects
     */
    static bothBlinkOnSprite2(parent: Laya.Sprite, pos: Laya.Point, caller: any): void {
        // 星星闪烁动画左边
        LwgTimer.frameRandomLoop(30, 50, caller, () => {
            LwgEff2D.Glitter.blinkStar(parent, new Laya.Point(pos.x, pos.y), [120, 50], [LwgEff2D.SkinUrl.星星1], null, [40, 40]);
        }, true)
    }

    /**
     * @static 简单的爆炸，用于按钮弹出等
     * @param {Laya.Sprite} Parent 父节点
     * @param {Laya.Point} p 位置
     * @param {number} [delay] 延时
     * @memberof _GameEffects
     */
    static circleExplode(Parent: Laya.Sprite, p: Laya.Point, delay?: number): void {
        LwgTimer.once(delay ? delay : 0, this, () => {
            const count = 40;
            const time = 5;
            const dis = LwgTools.Num.randomOneInt(30, 30);
            for (let index = 0; index < count; index++) {
                LwgEff2D.Particle.sprayRound(Parent, p, null, [20, 40], null, [LwgEff2D.SkinUrl.星星8], null, [dis, dis], [time, time], null, null, 5);
            }
            LwgSound.playSound();
        })
    }
}
