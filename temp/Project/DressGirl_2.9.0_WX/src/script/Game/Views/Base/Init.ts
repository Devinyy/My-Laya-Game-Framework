import Defeated from "../Defeated";
import { LwgAdaptive, LwgClick, LwgCommon, LwgControl, LwgCurrency, LwgGuide, LwgInit, LwgPlatform, LwgPreLoad, LwgScene, LwgSound, LwgTimer, LwgWX } from "../../../Lwg/Lwg";
import Start from "./Start";
import Levels from "../Levels";
import Victory from "../Victory";
import PreLoad from "./PreLoad";
import PreLoadCutIn from "./PreLoadCutIn";
import GameManager from "./GameManager";
import LuckyWheel from "../LuckyWheel";
import CheckIn from "../CheckIn";
import Lottery from "../Lottery";
import BeRewarded from "../BeRewarded";
import ADGetReward from "../ADGetReward";
import Skin from "../Skin";
import GameSceneName from "../../Control/GameSceneName";
import { GameType } from "../../Control/GameType";
import { GameEnum } from "../../Control/GameEnum";
import { ui } from "../../../../ui/layaMaxUI";
import SkinTry from "../SkinTry";
import { DialogHint } from "./DialogHint";
import EndLessSettle from "../EndLessSettle";
import SpecialAwards from "../SpecialAwards";
import { Guide } from "./Guide";
import { GameResInit } from "../../Control/GameRes";
import Resurgence from "../Resurgence";
import PropTry from "../PropTry";

export default class Init extends LwgPreLoad.PreLoadBase {
    owner: ui.Views.Base.InitUI;
    lwgOnAwake(): void {
        new LwgInit.InitBase(
            new LwgPlatform.Init(
                LwgPlatform.EmType.ExploitNoAD,
            ),
            new LwgControl.Init(
                30,
                [6, -1],
                true,
                false
            ),
            new LwgPreLoad.Init(
                false,
            ),
            new LwgScene.Init(
                {
                    sceneScript: {
                        PreLoad: PreLoad,
                        PreLoadCutIn: PreLoadCutIn,
                        Guide: Guide,
                        GameManager: GameManager,
                        DialogHint: DialogHint,
                        Start: Start,
                        Levels: Levels,
                        Defeated: Defeated,
                        Victory: Victory,
                        LuckyWheel: LuckyWheel,
                        BeRewarded: BeRewarded,
                        CheckIn: CheckIn,
                        Lottery: Lottery,
                        ADGetReward: ADGetReward,
                        Skin: Skin,
                        SkinTry: SkinTry,
                        EndLessSettle: EndLessSettle,
                        SpecialAwards: SpecialAwards,
                        Resurgence: Resurgence,
                        PropTry: PropTry,
                    },
                    sceneOpenAniType: null,
                    overlaySceneCloseAnitype: null,
                    overlaySceneOpenAnitype: null,
                }),
            new LwgCurrency.Init(
                {
                    Gold: {
                        appearScene: [],
                        initialNum: 0,
                    },
                    Diamond: {
                        appearScene: [
                            GameSceneName.Start,
                            GameSceneName.Victory,
                            GameSceneName.Lottery,
                            GameSceneName.LuckyWheel,
                            GameSceneName.Defeated,
                            GameSceneName.GameManager,
                            GameSceneName.Skin,
                            GameSceneName.CheckIn,
                            GameSceneName.ADGetReward,
                            GameSceneName.BeRewarded,
                            GameSceneName.SpecialAwards,
                            GameSceneName.EndLessSettle,
                        ],
                        initialNum: 0,
                    },
                    Stamina: {
                        appearScene: [
                            GameSceneName.Start,
                            GameSceneName.LuckyWheel,
                            GameSceneName.ADGetReward,
                            GameSceneName.BeRewarded,
                            GameSceneName.GameManager,
                        ],
                        initialNum: 50,
                        maxNum: 50,
                        addOnceByTime: 1000 * 60 * 5,
                        addNumByTime: 5,
                        btnAddClick: () => {
                            const data: GameType.openADGetReward = {
                                type: GameEnum.ResType.Stamina,
                            }
                            LwgScene.openOverlayScene(GameSceneName.ADGetReward, data);
                        }
                    }
                }
            ),
            new LwgCommon.Init(
                {
                    ReturnBtn: {
                        appearScene: [],
                    },
                    BtnGameManager: {
                        appearScene: [
                            GameSceneName.Start,
                            GameSceneName.Levels,
                        ],
                    }
                }
            ),
            new LwgClick.Init(
                LwgClick.EmEffectType.Largen,
            ),

            new LwgAdaptive.Init(576, 1024),
        );
        this.lodeStart(GameResInit);
    }

    lodeAllComplete(): number {
        return 2500;
    }
}


