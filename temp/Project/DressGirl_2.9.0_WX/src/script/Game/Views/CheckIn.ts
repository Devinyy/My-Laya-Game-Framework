import { ui } from "../../../ui/layaMaxUI";
import { LwgClick, LwgCurrency, LwgData, LwgDate, LwgDialogue, LwgScene, LwgTools, } from "../../Lwg/Lwg";
import { GameAni2D } from "../Control/GameAni2D";
import { GameData } from "../Control/GameData";
import { GameEnum } from "../Control/GameEnum";
import { GameEvent } from "../Control/GameEvent";
import GameSceneName from "../Control/GameSceneName";
import { GameType } from "../Control/GameType";

export default class CheckIn extends LwgScene.SceneBase {

    owner: ui.Views.CheckInUI;

    lwgOnAwake(): void {
        this.setListData();
        if (GameData.CheckIn.num >= 6 && !GameData.CheckIn.today) {
            this.owner.aniDay7.play(0, true);
        }
        if (GameData.CheckIn.today) {
            this.owner.btnCheck.visible = false;
            this.owner.btnADGet.visible = false;
            this.owner.lbAlready.visible = true;
        } else {
            this.owner.btnCheck.visible = true;
            this.owner.btnADGet.visible = true;
            this.owner.lbAlready.visible = false;
        }
    }

    setListData(): void {
        this.owner.listDay6.array = GameData.CheckIn.dayArr6;
        this.owner.listDay6.renderHandler = new Laya.Handler(this, this.onlistDay6Render);

        this.owner.listDay7Reward.array = GameData.CheckIn.day7RwardArr;
        this.owner.listDay7Reward.renderHandler = new Laya.Handler(this, this.onlistDay7RewardRender);
        this.owner.listDay7Reward.width = GameData.CheckIn.day7RwardArr.length * 178;
        this.owner.listDay7Reward.visible = false;
    }

    onlistDay6Render(view: ui.Views.CheckInDay6RenderObjUI, index: number): void {
        const data: GameType.ItemData = view.dataSource;
        view.dayNum.skin = `Game/UI/img_icon_text_day${index + 1}.png`;
        view.icon.skin = data.iconSkin;
        view.rewardNum.text = data.number.toString();
        view.rewardNum.text = 'x' + data.number;
        if (GameData.CheckIn.num > index) {
            view.alreadyPic.visible = true;
            view.imgMask.visible = true;
        } else {
            view.alreadyPic.visible = false;
            view.imgMask.visible = false;
        }
        if (GameData.CheckIn.num < 6) {
            if (GameData.CheckIn.num === index) {
                if (!GameData.CheckIn.today) {
                    view.aniHint.play(0, true);
                    view.zOrder = 10;
                }
            } else {
                view.zOrder = 1;
            }
        }
    }

    onDay6select(index: number, view: ui.Views.CheckInDay6RenderObjUI, AD: boolean): void {
        if (GameData.CheckIn.num < 6) {
            if (GameData.CheckIn.num > index) {
                LwgDialogue.showTips('已经签到过了');
            } else if (GameData.CheckIn.num === index) {
                if (!GameData.CheckIn.today) {
                    GameData.CheckIn.num++;
                    GameData.CheckIn.lastDate = LwgDate.Now.date;
                    this.owner.listDay6.refresh();

                    const data = GameData.CheckIn.dayArr6[index];
                    if (data.ID >= 201 && data.ID <= 299) {
                        const obj: GameType.openBerewarded = {
                            item: data,
                        }
                        this.openOverlayScene(GameSceneName.BeRewarded, obj);
                    } else {
                        let num = data.number;
                        if (AD) {
                            num *= 2;
                        }
                        GameAni2D.getRewardAni(data.ID, num, () => {
                        }, () => {
                            this.closeScene();
                        })
                    }
                    view.aniHint.stop();
                } else {
                    LwgDialogue.showTips('不可以');
                }
            } else {
                LwgDialogue.showTips('不可以');
            }
        }
    }

    onlistDay7RewardRender(view: ui.Views.CheckInDay7RrwardRenderObjUI, index: number): void {
        const data: GameType.ItemData = view.dataSource;
        view.icon.skin = data.picBigSkin;
        view.rewardNum.text = data.number.toString();
        if (data.ID >= 201 && data.ID <= 299) {
            view.rewardNum.visible = false;
        } else {
            view.rewardNum.visible = true;
        }
    }

    lwgButton(): void {
        this.btnOnUp(this.owner.btnCheck, () => {
            if (GameData.CheckIn.num >= 6 && !GameData.CheckIn.today) {
                this.onBtnDay7();
            } else {
                const view = <unknown>this.owner.listDay6.getCell(GameData.CheckIn.num) as ui.Views.CheckInDay6RenderObjUI;
                this.onDay6select(GameData.CheckIn.num, view, false);
            }
        })
        this.btnOnUpAD(this.owner.btnADGet, () => {
            if (GameData.CheckIn.num >= 6 && !GameData.CheckIn.today) {
                this.onBtnDay7();
            } else {
                const view = <unknown>this.owner.listDay6.getCell(GameData.CheckIn.num) as ui.Views.CheckInDay6RenderObjUI;
                this.onDay6select(GameData.CheckIn.num, view, true);
            }
        })
    }

    onBtnDay7(): void {
        if (GameData.CheckIn.num >= 6 && !GameData.CheckIn.today) {
            this.owner.aniDay7.stop();
            GameData.CheckIn.num++;
            GameData.CheckIn.lastDate = LwgDate.Now.date;
            const arr = GameData.CheckIn.day7RwardArr;
            if (arr[0].type === GameEnum.ItemType.Skin && arr[1].type === GameEnum.ItemType.Skin) {
                const obj: GameType.openBerewarded = {
                    item: arr[0],
                    item1: arr[1],
                    item2: arr[2],
                }
                this.openOverlayScene(GameSceneName.BeRewarded, obj);
                this.closeScene();
                return;
            }
            for (let index = 0; index < GameData.CheckIn.day7RwardArr.length; index++) {
                const data = GameData.CheckIn.day7RwardArr[index];
                if (data.type === GameEnum.ItemType.Skin) {
                    const obj: GameType.openBerewarded = {
                        item: data,
                    }
                    this.openOverlayScene(GameSceneName.BeRewarded, obj);
                    this.closeScene();
                } else {
                    GameAni2D.getRewardAni(data.ID, data.number, () => {
                    }, () => {
                        this.closeScene();
                    })
                }
            }
        } else {
            LwgDialogue.showTips('不可以');
        }
    }
}