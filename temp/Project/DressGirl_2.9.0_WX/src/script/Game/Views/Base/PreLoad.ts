import { ui } from "../../../../ui/layaMaxUI";
import { LwgGuide, LwgInit, LwgOPPO, LwgPlatform, LwgPreLoad, LwgSound, LwgTools, LwgWX } from "../../../Lwg/Lwg";
import { GameData } from "../../Control/GameData";
import { GameRes } from "../../Control/GameRes";
import GameSceneName from "../../Control/GameSceneName";
import { Control3D } from "../../Game3D/Control3D";
import { Guide } from "./Guide";
export default class PreLoad extends LwgPreLoad.PreLoadBase {
    owner: ui.Views.Base.PreLoadUI;
    lwgOnAwake(): void { };
    lwgAdaptive(): void {
        // const ratio = Laya.stage.height / this.owner.bg.height;
        // this.owner.bg.height *= ratio;
        // this.owner.bg.width *= ratio;
    }
    lwgOpenAniAfter(): void {
        //分包
        new LwgPlatform.Subpackage(
            ['Game', 'Game3D', 'res'],
            () => {
                this.lodeStart(GameRes);
            });
    }
    lodeStepComplete(url: string | string[]): void {
    };
    lodeAllComplete(): number {
        new GameData.Init();
        new Control3D.Init();
        new LwgInit.InitGame(
            new LwgSound.Init(
                GameData.Sound.getUrlByID(1),
                GameData.Sound.getUrlByID(2),
                GameData.Sound.getUrlByID(6),
            ),
            new LwgGuide.Init(
                new Guide()
            )
        );
        new LwgPlatform.InitAD(
            //微信
            new LwgWX.Init({
                AD: {
                    video: {
                        adUnitId: 'adunit-1da20fd609b9024f',
                    },
                    banner: {
                        adUnitId: 'adunit-b9dbd3a6afc57ff5',
                        autoUpdateTime: 30,
                        showScenes: [
                            GameSceneName.Start,
                            GameSceneName.Lottery,
                            GameSceneName.CheckIn,
                            GameSceneName.LuckyWheel,
                            GameSceneName.Victory,
                            GameSceneName.Defeated,
                            GameSceneName.ADGetReward,
                            GameSceneName.BeRewarded,
                            GameSceneName.SkinTry,
                        ],
                        style: {
                            left: 0,
                            top: LwgPlatform.systemInfo.windowHeight - 148,
                            width: 750,
                        }
                    },
                    Insert: {
                        adUnitId: 'adunit-ecdad304d783e848',
                        showCloseScenesLaterArr: [
                            GameSceneName.Victory,
                            GameSceneName.EndLessSettle,
                        ],
                    },
                    customArr:
                        [
                            {
                                adUnitId: 'adunit-7c99540a0f616ad6',
                                showScenes: [
                                    GameSceneName.Start,
                                    GameSceneName.Levels,
                                ],
                                style: {
                                    left: LwgPlatform.systemInfo.windowWidth - 100,
                                    top: 90,
                                }
                            }
                        ],
                },
                systemData: {
                    share: {
                        tattle: '[有人@我]超解压小游戏来啦！',
                        imgUrl: 'img_share.jpg',
                    }
                }
            }),
            new LwgOPPO.Init({
                delayTime: 60000,
                banner: {
                    adUnitId: '370605',
                    showScenes: [
                        GameSceneName.Start,
                        GameSceneName.Levels,
                        GameSceneName.SkinTry,
                        GameSceneName.PropTry,
                        GameSceneName.Resurgence,
                    ],
                    style: {}
                },
                video: {
                    adUnitId: '370621',
                },
                nativeData: {
                    adUnitId: '370622',
                    updateTime: 60000,
                    intervalTime: 10000,
                    dataArr: [
                        {
                            type: LwgOPPO.EmADNativeType.icon,
                            style: {
                                width: 100,
                                height: 100,
                                left: 9,
                                top: 160
                            },
                            showScenes: [
                                GameSceneName.Skin,
                            ],
                        },
                        {
                            type: LwgOPPO.EmADNativeType.banner,
                            style: {
                                width: Laya.stage.width,
                                height: 200,
                                centerX: 0,
                                bottom: 0
                            },
                            showScenes: [
                                GameSceneName.Lottery,
                                GameSceneName.CheckIn,
                                GameSceneName.LuckyWheel,
                                GameSceneName.Victory,
                                GameSceneName.Defeated,
                                GameSceneName.BeRewarded,
                            ],
                        }
                    ],
                },
                gamePortal: {
                    adUnitId: '370613',
                    showScene: [
                        {
                            sceneName: GameSceneName.Start,
                            btnStyle: {
                                anchorX: 0.5,
                                anchorY: 0.5,
                                x: 42,
                                y: 352,
                                skin: 'Game/UI/img_btn_mainui_gengduohaowan.png',
                            },
                        }

                    ]
                },
                insert: {
                    type: LwgOPPO.EmInsertType.GamePortal,
                    showCloseScenesLaterArr: [
                        GameSceneName.Victory
                    ]
                }
            },
                {
                    isShow: true,
                    btnStyle: {
                        anchorX: 0.5,
                        anchorY: 0.5,
                        x: 534,
                        y: 249,
                        skin: 'Game/UI/img_btn_mainui_tianjiazhuomian.png',
                    },
                    sceneName: GameSceneName.Start,
                })
        )

        return 10;
    }
    lodeAllCompleteAfter(): boolean { return false };
}
