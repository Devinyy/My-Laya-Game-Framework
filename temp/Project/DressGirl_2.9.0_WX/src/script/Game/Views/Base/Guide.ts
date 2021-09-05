import { ui } from "../../../../ui/layaMaxUI";
import { LwgClick, LwgControl, LwgEvent, LwgGuide, LwgScene, LwgTimer } from "../../../Lwg/Lwg";
import { GameData } from "../../Control/GameData";
import { GameEnum } from "../../Control/GameEnum";
import { GameEvent } from "../../Control/GameEvent";
import GameSceneName from "../../Control/GameSceneName";
import { GameType } from "../../Control/GameType";
import { Role, StateControl } from "../../Game3D/Role";

export class Guide extends LwgGuide.GuideBase {
    lwgOnAwake(): void {
        // this.guideDataArr = [
        //     {
        //         index: 1,
        //         stepReady: () => {
        //             console.log('引导步骤：', 1, '开始');
        //             Role.ins.setState(GameEnum.RoleState.Suspend);
        //         },
        //         click: {
        //             type: LwgGuide.EmClickType.up,
        //             effectType: LwgClick.EmEffectType.NoEffect,
        //             filter: LwgClick.EmfilterType.someBtnExcludeStage,
        //             targetArr: [],
        //             slideValue: 50,
        //         },
        //         continue: true,
        //         mask: {
        //             type: LwgGuide.EmMaskType.round,
        //             roundData: [[200, 500, 100], [300, 500, 100]],
        //         },
        //         stepComplete: () => {
        //             console.log('引导步骤：', 1, '结束');
        //         }
        //     },
        //     {
        //         index: 2,
        //         stepReady: () => {
        //             console.log('引导步骤：', 2, '开始');
        //             Role.ins.setState(GameEnum.RoleState.Suspend);
        //         },
        //         click: {
        //             type: LwgGuide.EmClickType.up,
        //             effectType: LwgClick.EmEffectType.NoEffect,
        //             filter: LwgClick.EmfilterType.someBtnExcludeStage,
        //             targetArr: [this.background],
        //             slideValue: 50,
        //         },
        //         continue: true,
        //         mask: {
        //             type: LwgGuide.EmMaskType.round,
        //             roundData: [[400, 500, 100], [300, 800, 100]],
        //         },
        //         stepComplete: () => {
        //             console.log('引导步骤：', 2, '结束');
        //         }
        //     }
        // ]
        this.guideCompelet = true;
    }

    lwgEvent(): void {
        // this.evRegister(GameEvent.openSceneAniAfter, (name: string) => {
        //     if (name == GameSceneName.Start) {
        //         this.guideDataArr[0].click.targetArr = [(LwgScene.sceneControl[GameSceneName.Start] as ui.Views.Base.StartUI).btnCheckIn];
        //         this.guideStart();
        //     }
        // })
        // this.evRegister(GameEvent.updateLvSchedule, (per: number, mileage: number) => {
        // })
        // LwgEvent.register(GameEvent.changeBoss, this, (type: GameEnum.RoleType) => {
        // })
        // this.evRegister(GameEvent.updateGrowthValue, (growthValue: number) => {
        // })
        // this.evRegister(GameEvent.updateRoleHP, (hp: number) => {
        // })
    }

}



