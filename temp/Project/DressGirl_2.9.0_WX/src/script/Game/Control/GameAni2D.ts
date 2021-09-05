import { LwgAni2D, LwgClick, LwgCurrency, LwgTimer } from "../../Lwg/Lwg";
import { GameData } from "./GameData";
export class GameAni2D {
    /**弹开*/
    static dialogOpenPopup(Content: Laya.Sprite, Bg?: Laya.Sprite, func?: Function): number {
        Content.scene.zOrder = Laya.stage.numChildren - 1;
        const time = 100;
        const delay = 100;
        Content.scale(0.5, 0.5);
        LwgAni2D.bombs_Appear(Content, 0, 1, 1.2, 0, time * 3, () => {
            func && func();
        });
        if (Bg) {
            Bg.alpha = 0;
            LwgAni2D.fadeOut(Bg, 0, 1, 200, delay * 2);
        }
        return time * 3;
    }

    /**渐隐打开*/
    static dialogOpenFadeOut(Content: Laya.Sprite, Bg?: Laya.Sprite, func?: Function): number {
        Bg && LwgAni2D.fadeOut(Bg, 0, 1, 300, 0, () => {
            func && func();
        });
        LwgAni2D.fadeOut(Content, 0, 1, 250, 0, () => {
            !Bg && func && func();
        });
        return 300;
    }

    /**渐隐关闭*/
    static dialogCloseFadeOut(Content: Laya.Sprite, Bg?: Laya.Sprite, func?: Function): number {
        const time = 60;
        const delay = 100;
        LwgAni2D.fadeOut(Content, 1, 0, time * 3, delay * 1.5, () => {
            func && func();
        });
        Bg && LwgAni2D.fadeOut(Bg, 1, 0, time * 3);
        return time * 3 + delay * 1.5;
    }

    /**逐渐打字*/
    static charactersEffect(label: Laya.Label, bodyText: string, func?: Function): void {
        for (let index = 0; index < bodyText.length; index++) {
            const char = bodyText.charAt(index);
            LwgTimer.frameOnce(10 * index, this, () => {
                label.text += char;
                if (index == bodyText.length - 1) {
                    func && func();
                }
            })
        }
    }

    /**放大缩小用于提示*/
    static scaleHint(Node: Laya.Sprite, caller: any): void {
        LwgTimer.loop(1000, caller, () => {
            LwgAni2D.swell_shrink(Node, 1, 1.05, 300);
        })
    }

    /**渐隐提示*/
    static _fadeHint(Node: Laya.Sprite, caller: any): void {
        LwgAni2D.fadeOut(Node, 0, 0.6, 1500, 0, () => {
            LwgAni2D.fadeOut(Node, 0.6, 0, 800, 0, () => {
                LwgTimer.frameOnce(30, caller, () => {
                    this._fadeHint(Node, caller);
                })
            })
        })
    }

    /**
     * 呼吸按钮提示
     */
    static breatheBtnHint(node: Laya.Sprite, caller: any): void {
        LwgAni2D.circulation_scale(node, 0.05, 200, 0, () => {
            this.breatheBtnHint(node, caller);
        })
    }

    /**
     * 左右Q弹伸缩
     */
    static bombFlexLR(node: Laya.Sprite, caller: any): void {
        LwgTimer.loop(2000, caller, () => {
            LwgAni2D.bomb_LeftRight(node, 1.22, 250);
        }, true);
    }

    /**获取奖励动画规则 */
    static getRewardAni(ID: number, num: number, cbStep?: Function, cbCompelet?: Function): void {
        const item = GameData.Item.getItemBaseByID(ID);
        switch (ID) {
            case 102:
                LwgCurrency.Diamond.playGetHeapAni(null, 15, [49, 45], item.iconSkin, null, null, () => {
                    cbStep && cbStep();
                }, () => {
                    LwgCurrency.Diamond.addNumDisPlayNode(num);
                    cbCompelet && cbCompelet();
                });
                break;
            case 103:
                LwgCurrency.Stamina.playGetHeapAni(null, 15, [37, 52], item.iconSkin, null, null, () => {
                    cbStep && cbStep();
                }, () => {
                    LwgCurrency.Stamina.addNumDisPlayNode(num);
                    cbCompelet && cbCompelet();
                });
                break;

            default:
                break;
        }
    }
}