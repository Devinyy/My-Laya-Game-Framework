import { ui } from "../../../ui/layaMaxUI";
import { LwgClick, LwgCurrency, LwgDialogue, LwgEvent, LwgScene, LwgSound } from "../../Lwg/Lwg";
import { GameData } from "../Control/GameData";
import { GameEnum } from "../Control/GameEnum";
import GameSceneName from "../Control/GameSceneName";
import { GameType } from "../Control/GameType";

export default class SkillUpgradeObj extends ui.Views.SkillUpgradeObjUI {
    constructor() {
        super();
    }
    onAwake(): void {
        const arr = [];
        for (let index = 0; index < GameData.Skill.getTypeNum; index++) {
            const data: GameType.SkillData = {
                ID: null,
                name: null,
                level: null,
                type: index,
                consume: null,
                addition: null,
            }
            arr.push(data);
        }
        this.list.array = arr;
        // console.log('升级信息', this.list.array);
        this.list.renderHandler = new Laya.Handler(this, this.onlistRender);
    }
    onlistRender(view: ui.Views.SkillUpgradeRenderObjUI, index: number): void {
        const data = view.dataSource as GameType.SkillData;
        //用于升级红点提示的名称判断
        view.name = 'skill';
        switch (data.type) {
            case GameEnum.SkillType.speed:
                view.imgName.skin = 'Game/UI/img_text_skill_01.png';
                view.imgSkillIcon.skin = 'Game/UI/icon_mainui_shengjiicon01.png';
                break;
            case GameEnum.SkillType.energy:
                view.imgName.skin = 'Game/UI/img_text_skill_02.png';
                view.imgSkillIcon.skin = 'Game/UI/icon_mainui_shengjiicon02.png';
                break;
            case GameEnum.SkillType.reward:
                view.imgName.skin = 'Game/UI/img_text_skill_03.png';
                view.imgSkillIcon.skin = 'Game/UI/icon_mainui_shengjiicon03.png';
                break;

            default:
                break;
        }
        const lv = GameData.Skill.getCurLevelByType(data.type);
        view.lbLevel.text = '等级' + lv.toString();
        data.level = lv;
        const maxLv = GameData.Skill.getMaxLevelByType(data.type);
        if (data.level >= maxLv) {
            view.ImgMaxLv.visible = true;
            view.imgResIcon.visible = false;
            view.lbConsume.visible = false;
            view.ImgResBoard.visible = false;
        } else {
            view.ImgMaxLv.visible = false;
            view.imgResIcon.visible = true;
            view.lbConsume.visible = true;
            view.ImgResBoard.visible = true;
        }
        const consume = GameData.Skill.getCurConsumeByType(data.type);
        view.lbConsume.text = consume.toString();
        data.consume = consume;
        LwgClick.off(view.imgBoard);
        LwgClick.on(LwgClick.EmEffectType.Largen, view.imgBoard, this, null, null, (e: Laya.Event, args: any) => {
            this.onBtnUpgrade(args);
        }, null, [{}, {}, { view: view, data: data }, {}]);
    }
    onBtnUpgrade(args: { view: ui.Views.SkillUpgradeRenderObjUI, data: GameType.SkillData }): void {
        const maxLv = GameData.Skill.getMaxLevelByType(args.data.type);
        if (args.data.level >= maxLv) {
            LwgDialogue.showTips('等级已满');
        } else {
            if (LwgCurrency.Diamond.num >= args.data.consume) {
                LwgDialogue.showTips('升级成功');
                GameData.Sound.playSoundByID(8);
                this.list.refresh();
                args.data.level++;
                GameData.Skill.addLevelByType(args.data.type);
                LwgCurrency.Diamond.subNumDisPlayNode(args.data.consume);
                args.data.consume = GameData.Skill.getCurConsumeByType(args.data.type);
            } else {
                const data: GameType.openADGetReward = {
                    type: GameEnum.ResType.Diamond,
                }
                LwgScene.openOverlayScene(GameSceneName.ADGetReward, data);
            }
        }
    }
}
