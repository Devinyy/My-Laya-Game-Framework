import { ui } from "../../../ui/layaMaxUI"
import { LwgAni2D, LwgClick, LwgControl, LwgCurrency, LwgData, LwgDate, LwgDialogue, LwgEvent, LwgPlatform, LwgScene, LwgSound, LwgTools } from "../../Lwg/Lwg"
import { GameData } from "../Control/GameData";
import { GameEff2D } from "../Control/GameEff2D";
import { GameEnum } from "../Control/GameEnum";
import GameSceneName from "../Control/GameSceneName";
import { GameType } from "../Control/GameType";
import { Control3D } from "../Game3D/Control3D";
import { SkinScene } from "../Game3D/SkinScene";

export default class Skin extends LwgScene.SceneBase {
    owner: ui.Views.SkinUI;
    /**
     * 当前选中的data
     */
    dataPitch: GameType.SkinData;

    _tapIndex = 0;
    public get tapIndex(): number {
        return this._tapIndex;
    }
    public set tapIndex(index: number) {
        if (index == 0) {
            this.owner.list.array = GameData.Skin.getSkinArrByPart(GameEnum.Part.dress);
        } else if (index == 1) {
            this.owner.list.array = GameData.Skin.getSkinArrByPart(GameEnum.Part.hair);
        } else if (index == 2) {
            this.owner.list.array = GameData.Skin.getSkinArrByPart(GameEnum.Part.wing);
        }
        for (let index = 0; index < this.owner.list.array.length; index++) {
            const element = this.owner.list.array[index] as GameType.SkinData;
            if (element.ID === GameData.Skin.pitchDressID || element.ID === GameData.Skin.pitchHairID || element.ID === GameData.Skin.pitchWingID) {
                this.dataPitch = element as GameType.SkinData;
                this.dataPitch.index = index;
                break;
            }
        }
        if (index === 2) {
            SkinScene.ins.turnBack();
        } else {
            SkinScene.ins.turnFront();
        }
        this.updateBtn();
        this.owner.list.refresh();
        this._tapIndex = index;
    }

    lwgOnAwake(): void {
        this.owner.list.renderHandler = new Laya.Handler(this, this.onListRender);
        this.owner.list.hScrollBarSkin = '';
        this.tapIndex = 0;
    }

    lwgOpenAniAfter(): void {
        Control3D.showSkinScene();
    }

    onListRender(view: ui.Views.SkinRenderObjUI, index: number): void {
        const data = view.dataSource as GameType.SkinData;
        view.imgIcon.skin = `Game/UI/SkinIcon/${data.name}.png`;
        if (index === this.dataPitch.index) {
            view.imgAniBoard.visible = true;
        } else {
            view.imgAniBoard.visible = false;
        }
        view.imgLock.visible = !data.complete;
        view.imgDesIcon.visible = false;
        view.lbDescribe.centerX = 0;
        if (data.complete) {
            if (data.ID === GameData.Skin.pitchDressID || data.ID === GameData.Skin.pitchHairID || data.ID === GameData.Skin.pitchWingID) {
                view.lbDescribe.text = '装备中';
            } else {
                view.lbDescribe.text = '已获得';
            }
        } else {
            switch (data.pathWay) {
                case GameEnum.ItemPathWay.AD:
                    view.imgDesIcon.visible = true;
                    view.imgDesIcon.skin = 'Game/UI/img_icon_common_ad_02.png';
                    if (!data.degreeNum) {
                        data.degreeNum = 0;
                    }
                    view.lbDescribe.text = '(' + data.degreeNum + '/' + data.condition + ')';

                    view.lbDescribe.centerX = 10;
                    break;
                case GameEnum.ItemPathWay.CheckIn:
                    view.lbDescribe.text = '签到获得';
                    break;
                case GameEnum.ItemPathWay.Free:
                    view.lbDescribe.text = '已获得';
                    break;
                case GameEnum.ItemPathWay.Diamond:
                    view.imgDesIcon.visible = true;
                    view.imgDesIcon.skin = 'Game/UI/img_icon_money_01.png';
                    view.lbDescribe.text = data.condition;
                    view.lbDescribe.centerX = 10;
                    break;
                case GameEnum.ItemPathWay.LotteryChest:
                    view.lbDescribe.text = '开宝箱';
                    break;
                case GameEnum.ItemPathWay.LuckyWheel:
                    view.lbDescribe.text = '幸运抽奖';
                    break;
                default:
                    break;
            }
        }
        LwgClick.off(view);
        LwgClick.on(undefined, view, this, null, null,
            (e: Laya.Event, args: any) => {
                this.onListRenderClick(args);
            },
            null, [{}, {}, { view: view, data: data, index: index }, {}]);
    }

    onListRenderClick(args: { view: ui.Views.SkinRenderObjUI, data: GameType.SkinData, index: number }): void {
        this.dataPitch = args.data;
        this.dataPitch.index = args.index;
        SkinScene.ins.change(args.data.ID);
        this.owner.list.refresh();
        this.updateBtn();
        if (this.dataPitch.complete) {
            if (this.dataPitch.part === GameEnum.Part.dress) {
                GameData.Skin.pitchDressID = this.dataPitch.ID;
            }
            if (this.dataPitch.part === GameEnum.Part.hair) {
                GameData.Skin.pitchHairID = this.dataPitch.ID;
            }
            if (this.dataPitch.part === GameEnum.Part.wing) {
                GameData.Skin.pitchWingID = this.dataPitch.ID;
            }
        }
    }

    updateBtn(): void {
        if (this.dataPitch.degreeNum === undefined) {
            this.dataPitch.degreeNum = 0;
        }
        let name: string;
        switch (this.dataPitch.pathWay) {
            case GameEnum.ItemPathWay.AD:
                name = 'boxAD';
                this.owner.boxADNum.text = '(' + this.dataPitch.degreeNum + '/' + this.dataPitch.condition + ')';
                break;
            case GameEnum.ItemPathWay.CheckIn:
                name = 'boxCheckIn';
                break;
            case GameEnum.ItemPathWay.Free:
                name = 'boxFree';
                break;
            case GameEnum.ItemPathWay.Diamond:
                name = 'boxGold';
                this.owner.boxGoldNum.text = this.dataPitch.condition.toString();
                break;
            case GameEnum.ItemPathWay.LotteryChest:
                name = 'boxLotteryChest';
                break;
            case GameEnum.ItemPathWay.LuckyWheel:
                name = 'boxLuckyWheel';
                break;
            default:
                break;
        }
        for (let index = 0; index < this.owner.btnGet.numChildren; index++) {
            const element = this.owner.btnGet.getChildAt(index) as Laya.Box;
            if (element.name == name) {
                element.visible = true;
            } else {
                element.visible = false;
            }
        }
        if (this.dataPitch.complete) {
            this.owner.btnGet.visible = false;
        } else {
            this.owner.btnGet.visible = true;
        }
    }

    compelet(): void {
        this.dataPitch.complete = true;
        GameData.Skin.setCompeletByData(this.dataPitch);
        this.owner.list.refresh();
        this.updateBtn();
        const cell = this.owner.list.getCell(this.dataPitch.index);
        const lpos = this.owner.list.localToGlobal(new Laya.Point(cell.x + cell.width / 2, cell.y + cell.height / 2));
        GameEff2D.oneFireworks3(this.owner, lpos);
        GameData.Sound.playSoundByID(7);
    }

    lwgButton(): void {
        for (let i = 0; i < this.owner.boxTap.numChildren; i++) {
            const element = this.owner.boxTap.getChildAt(i) as Laya.Image;
            this.btnOnDown(element, () => {
                for (let index = 0; index < this.owner.boxTap.numChildren; index++) {
                    const elementbtn = this.owner.boxTap.getChildAt(index) as Laya.Image;
                    if (elementbtn === element) {
                        elementbtn.skin = 'Game/UI/img_btn_tab_1.png';
                        this.tapIndex = index;
                    } else {
                        elementbtn.skin = 'Game/UI/img_btn_tab_2.png';
                    }
                }
            }, LwgClick.EmEffectType.NoEffect)
        }


        this.btnOnUp(this.owner.btnReturn, () => {
            this.openScene(GameSceneName.Start, null, true);
        })
        this.btnOnUp(this.owner.btnGet, () => {
            if (this.dataPitch.complete) {
                LwgDialogue.showTips('已经获得！');
                return;
            }
            switch (this.dataPitch.pathWay) {
                case GameEnum.ItemPathWay.AD:
                    LwgPlatform.AD.showVideo(() => {
                        this.dataPitch.degreeNum++;
                        this.owner.boxADNum.text = '(' + this.dataPitch.degreeNum + '/' + this.dataPitch.condition + ')';
                        if (this.dataPitch.degreeNum >= +this.dataPitch.condition) {
                            this.compelet();
                        }
                    })
                    break;
                case GameEnum.ItemPathWay.CheckIn:
                    LwgDialogue.showTips('签到页面获取！');
                    break;
                case GameEnum.ItemPathWay.Free:
                    LwgDialogue.showTips('已经获得！');
                    break;
                case GameEnum.ItemPathWay.Diamond:
                    if (LwgCurrency.Diamond.num >= +this.dataPitch.condition) {
                        this.compelet();
                        LwgDialogue.showTips('购买成功！');
                    } else {
                        const data: GameType.openADGetReward = {
                            type: GameEnum.ResType.Diamond,
                        }
                        LwgScene.openOverlayScene(GameSceneName.ADGetReward, data);
                    }
                    break;
                case GameEnum.ItemPathWay.LotteryChest:
                    LwgDialogue.showTips('宝箱页面获取！');
                    break;
                case GameEnum.ItemPathWay.LuckyWheel:
                    LwgDialogue.showTips('抽奖页面获取！');
                    break;
                default:
                    break;
            }
        })
    }
}