import { ui } from "../../../../ui/layaMaxUI";
import { LwgControl, LwgCurrency, LwgScene, LwgSet, LwgSound } from "../../../Lwg/Lwg";
export default class GameManager extends LwgScene.SceneBase {
    owner: ui.Views.Base.GameManagerUI;
    dataArr: { key: string, value: any }[] =
        [
            {
                key: '钻石数量',
                get value(): number {
                    return LwgCurrency.Diamond.num;
                },
                set value(val: number) {
                    LwgCurrency.Diamond.num = val;
                    LwgCurrency.Diamond.updateNumOnNode();
                }
            },
            {
                key: '体力',
                get value(): number {
                    return LwgCurrency.Stamina.num;
                },
                set value(val: number) {
                    LwgCurrency.Stamina.num = val;
                    LwgCurrency.Stamina.updateNumOnNode();
                }
            },
            {
                key: '关卡数',
                get value(): number {
                    return LwgControl.Game.level;
                },
                set value(val: number) {
                    LwgControl.Game.level = val;
                }
            },
            {
                key: '背景音乐',
                get value(): number {

                    if (LwgSet.BgMusic.switch) {
                        return 1;
                    } else {
                        return 0;
                    }
                },
                set value(val: number) {
                    if (val === 1) {
                        LwgSet.BgMusic.switch = true;
                    } else {
                        LwgSet.BgMusic.switch = false;
                    }
                }
            },
            {
                key: '音效',
                get value(): number {
                    if (LwgSet.Sound.switch) {
                        return 1;
                    } else {
                        return 0;
                    }
                },
                set value(val: number) {
                    if (val === 1) {
                        LwgSet.Sound.switch = true;
                    } else {
                        LwgSet.Sound.switch = false;
                    }
                }
            },
        ]
    lwgOnAwake(): void {
        this.updataView();
    }
    /**
     * 刷新视图
     */
    updataView(): void {
        for (let index = 0; index < this.dataArr.length; index++) {
            const data = this.dataArr[index];
            const Render = new ui.Views.Base.GameManagerRenderObjUI();
            Render.lbKey.text = data.key;
            const len0 = data.key.length - 10;
            if (len0 > 0) {
                Render.lbKey.fontSize = 26 - len0 * 2;
            }

            Render.txPValue.text = data.value;
            this.owner.plValueView.addChild(Render);
            Render.y = 50 + index * (Render.height + 10);
            Render.centerX = 0;
        }
    }

    lwgButton(): void {
        this.btnOnUp(this.owner.btnConfirm, () => {
            for (let index = 0; index < this.owner.plValueView.numChildren; index++) {
                const Element = this.owner.plValueView.getChildAt(index) as ui.Views.Base.GameManagerRenderObjUI;
                this.dataArr[index].value = + Element.txPValue.text;
            }
        })
        this.btnOnUp(this.owner.btnClose, () => {
            this.closeScene();
        })

        this.btnOnUp(this.owner.btnClear, () => {
            this.closeScene();
            Laya.LocalStorage.clear();
        })

        //注册写入和框外按下事件
        for (let index = 0; index < this.owner.plValueView.numChildren; index++) {
            const Element = this.owner.plValueView.getChildAt(index) as ui.Views.Base.GameManagerRenderObjUI;
            Element.txPValue.on(Laya.Event.FOCUS, this, () => {
                this.dataArr[index].value = + Element.txPValue.text;
            });
        }

        //注册写入和框外按下事件
        for (let index = 0; index < this.owner.plValueView.numChildren; index++) {
            const Element = this.owner.plValueView.getChildAt(index) as ui.Views.Base.GameManagerRenderObjUI;
            Element.txPValue.on(Laya.Event.BLUR, this, () => {
                this.dataArr[index].value = + Element.txPValue.text;
            });
        }
    }
}
