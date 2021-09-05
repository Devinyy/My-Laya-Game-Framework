import { LwgPath, LwgPreLoad } from "../../Lwg/Lwg";
import Start from "../Views/Base/Start";

type TpLodeImage = LwgPreLoad.TpLodeImage;
type TpLodeScene3D = LwgPreLoad.TpLodeScene3D;
type TpLodePrefab3D = LwgPreLoad.TpLodePrefab3D;
type TpLodeTexture2D = LwgPreLoad.TpLodeTexture2D;
type TpLodeView = LwgPreLoad.TpLodeView;
type TpLodePrefab2D = LwgPreLoad.TpLodePrefab2D;
type TpLodeJson = LwgPreLoad.TpLodeJson;
type TpLodeMaterial = LwgPreLoad.TpLodeMaterial;
type TpLodeSkeleton = LwgPreLoad.TpLodeSkeleton;

export module GameRes {
    // export class Image {
    //     static Img: any = { url: `Game/UI/img_bg_2x.png` };
    // }
    export class Views {
        //基础的不要删
        // static DialogCommon: TpLodeView = { url: `Base/DialogCommon` };
        static DialogHint: TpLodeView = { url: `Base/DialogHint` };
        static Guide: TpLodeView = { url: `Base/Guide` };
        static PreLoad: TpLodeView = { url: `Base/PreLoad` };
        static PreLoadCutIn: TpLodeView = { url: `Base/PreLoadCutIn` };
        static ReturnBtnObj: TpLodeView = { url: `Base/ReturnBtnObj` };
        static GoldObj: TpLodeView = { url: `Base/GoldObj` };
        static DiamondObj: TpLodeView = { url: `Base/DiamondObj` };
        static DiamondSingleObj: TpLodeView = { url: `Base/DiamondObj` };
        static StaminaObj: TpLodeView = { url: `Base/StaminaObj` };
        static GameManagerBtnObj: TpLodeView = { url: `Base/GameManagerBtnObj` };
        static GameManager: TpLodeView = { url: `Base/GameManager` };
        static GameManagerRenderObj: TpLodeView = { url: `Base/GameManagerRenderObj` };
        static FloatFontArtObj: TpLodeView = { url: `Base/FloatFontArtObj` };
        static FloatFontSystemObj: TpLodeView = { url: `Base/FloatFontSystemObj` };
        static RedDotObj: TpLodeView = { url: `Base/RedDotObj` };
        static CloseBtnObj: TpLodeView = { url: `Base/CloseBtnObj` };
        //其他的可以删
        static CheckIn: TpLodeView = { url: `CheckIn` };
        static BeRewarded: TpLodeView = { url: `BeRewarded` };
        static Lottery: TpLodeView = { url: `Lottery` };
        static LuckyWheelRender: TpLodeView = { url: `LuckyWheelRenderObj` };
        static CheckInDay6Render: TpLodeView = { url: `CheckInDay6RenderObj` };
        static CheckInDay7RrwardRender: TpLodeView = { url: `CheckInDay7RrwardRenderObj` };
        static LotteryRenderObj: TpLodeView = { url: `LotteryRenderObj` };
        static SkinRenderObj: TpLodeView = { url: `SkinRenderObj` };

        static SkillUpgradeRenderObj: TpLodeView = { url: `SkillUpgradeRenderObj` };
        static SkillUpgradeObj: TpLodeView = { url: `SkillUpgradeObj` };
    };

    export class Prefab2D { };

    let pathScene3D = `Game3D/Scene3D/LayaScene_MainScenes/Conventional/`;
    export class Scene3D {
        static MainScene: TpLodeScene3D = { url: `${pathScene3D}MainScenes` };
        static SkinShow: TpLodeScene3D = { url: 'Game3D/Scene3D/LayaScene_SkinShow/Conventional/SkinShow' };
        static EndLess: TpLodeScene3D = { url: 'Game3D/Scene3D/LayaScene_EndlessScenes/Conventional/EndlessScenes' };
        static Skin: TpLodeScene3D = { url: 'Game3D/Scene3D/LayaScene_Skin/Conventional/Skin' };
        // static SkinScene: TpLodeScene3D = { url: 'Game3D/Scene3D/LayaScene_Skin/Conventional/Skin' };
    };

    let pathPre3DRole = 'Game3D/Prefab3D/LayaScene_Role/Conventional/';
    let pathPre3DLevels = 'Game3D/Prefab3D/LayaScene_Levels/Conventional/';
    let pathPre3DEffcets = 'Game3D/Prefab3D/LayaScene_Effects/Conventional/';

    export class Prefab3D {
        static role01: TpLodePrefab3D = { url: `${pathPre3DLevels}role01` };

        static paopao01: TpLodePrefab3D = { url: `${pathPre3DLevels}paopao01` };
        static paopao02: TpLodePrefab3D = { url: `${pathPre3DLevels}paopao02` };
        static paopao03: TpLodePrefab3D = { url: `${pathPre3DLevels}paopao03` };
        static Road_Base: TpLodePrefab3D = { url: `${pathPre3DLevels}Road_Base` };
        static Road_999: TpLodePrefab3D = { url: `${pathPre3DLevels}Road_999` };
        static Road_997: TpLodePrefab3D = { url: `${pathPre3DLevels}Road_997` };
        static Road_888: TpLodePrefab3D = { url: `${pathPre3DLevels}Road_888` };
        static ZhangaiBian_01: TpLodePrefab3D = { url: `${pathPre3DLevels}ZhangaiBian_01` };
        static ZhangaiBian_02: TpLodePrefab3D = { url: `${pathPre3DLevels}ZhangaiBian_02` };
        static ZhangaiBian_03: TpLodePrefab3D = { url: `${pathPre3DLevels}ZhangaiBian_03` };
        static KeyFood: TpLodePrefab3D = { url: `${pathPre3DLevels}KeyFood` };
        static zhangai00: TpLodePrefab3D = { url: `${pathPre3DLevels}zhangai00` };
        static zhangai01: TpLodePrefab3D = { url: `${pathPre3DLevels}zhangai01` };
        static zhangai02: TpLodePrefab3D = { url: `${pathPre3DLevels}zhangai02` };
        static zhangai03: TpLodePrefab3D = { url: `${pathPre3DLevels}zhangai03` };
        static zhangai04: TpLodePrefab3D = { url: `${pathPre3DLevels}zhangai04` };
        static zhangai05: TpLodePrefab3D = { url: `${pathPre3DLevels}zhangai05` };
        static zhangai06: TpLodePrefab3D = { url: `${pathPre3DLevels}zhangai06` };
        static zhangai07: TpLodePrefab3D = { url: `${pathPre3DLevels}zhangai07` };
        static zhangai_xiepo: TpLodePrefab3D = { url: `${pathPre3DLevels}zhangai_xiepo` };
        static RoadTied: TpLodePrefab3D = { url: `${pathPre3DLevels}RoadTied` };
        static drop: TpLodePrefab3D = { url: `${pathPre3DLevels}drop` };

        static marginC: TpLodePrefab3D = { url: `${pathPre3DLevels}scene_1` };
        static marginE: TpLodePrefab3D = { url: `${pathPre3DLevels}scene_2` };

        static effect_change01: TpLodePrefab3D = { url: `${pathPre3DEffcets}effect_change01` }
        static effect_change02: TpLodePrefab3D = { url: `${pathPre3DEffcets}effect_change02` }
        static effect_change03: TpLodePrefab3D = { url: `${pathPre3DEffcets}effect_change03` }
        static effect_change04: TpLodePrefab3D = { url: `${pathPre3DEffcets}effect_change04` }

        static travel01: TpLodePrefab3D = { url: `${pathPre3DEffcets}travel01` }
        static travel02: TpLodePrefab3D = { url: `${pathPre3DEffcets}travel02` }
        static travel03: TpLodePrefab3D = { url: `${pathPre3DEffcets}travel03` }
        static travel04: TpLodePrefab3D = { url: `${pathPre3DEffcets}travel04` }

        static effect_zuanshi: TpLodePrefab3D = { url: `${pathPre3DEffcets}effect_zuanshi` }
        static effect_chongci: TpLodePrefab3D = { url: `${pathPre3DEffcets}effect_chongci` }
        static effect_right: TpLodePrefab3D = { url: `${pathPre3DEffcets}effect_right` }

        // static Roads: TpLodePrefab3D = { url: `${pathPre3DLevels}Roads` };
        // static marginCommon: TpLodePrefab3D = { url: `${pathPre3DLevels}margin` }
        // static marginEndless: TpLodePrefab3D = { url: `${pathPre3DLevels}margin2` }
        // static end_chest: TpLodePrefab3D = { url: `${pathPre3DLevels}end_chest` }

        // 加载数组
        // static Roads: TpLodePrefab3D = {
        //     url: (function () {
        //         const arr = [];
        //         for (let index = 10; index < 35; index++) {
        //             let path: string;
        //             let index0: number = index + 1;
        //             if (index0 < 10) {
        //                 path = `${pathPre3DLevels}Road_00${index0}.lh`;
        //             } else if (10 <= index0 && index0 < 100) {
        //                 path = `${pathPre3DLevels}Road_0${index0}.lh`;
        //             }
        //             arr.push(path);
        //         }
        //         for (let index = 40; index <= 72; index++) {
        //             let path: string;
        //             if (index < 10) {
        //                 path = `${pathPre3DLevels}Road_00${index}.lh`;
        //             } else if (10 <= index && index < 100) {
        //                 path = `${pathPre3DLevels}Road_0${index}.lh`;
        //             }
        //             arr.push(path);
        //         }
        //         for (let index = 100; index <= 105; index++) {
        //             let path: string;
        //             path = `${pathPre3DLevels}Road_${index}.lh`;
        //             arr.push(path);
        //         }
        //         for (let index = 200; index <= 238; index++) {
        //             let path: string;
        //             path = `${pathPre3DLevels}Road_${index}.lh`;
        //             arr.push(path);
        //         }
        //         for (let index = 300; index <= 316; index++) {
        //             let path: string;
        //             path = `${pathPre3DLevels}Road_${index}.lh`;
        //             arr.push(path);
        //         }
        //         for (let index = 300; index <= 316; index++) {
        //             let path: string;
        //             path = `${pathPre3DLevels}Road_${index}.lh`;
        //             arr.push(path);
        //         }
        //         arr.push(`${pathPre3DLevels}Road_001.lh`);
        //         arr.push(`${pathPre3DLevels}Road_998.lh`);
        //         arr.push(`${pathPre3DLevels}Road_998.lh`);
        //         arr.push(`${pathPre3DLevels}Road_888.lh`);
        //         arr.push(`${pathPre3DLevels}Road_997.lh`);
        //         return arr;

        //     })() as any,
        // }
    };

    /**放在GamData中 */
    export class Json {
        static RoadsMsg: TpLodeJson = { url: `RoadsMsg` };
        static Road: TpLodeJson = { url: `Road` };
        static Guide: TpLodeJson = { url: `guide1` };
        static Level: TpLodeJson = { url: `Level` };
        static LevelScore: TpLodeJson = { url: `LevelScore` };
        static Item: TpLodeJson = { url: `Item1` };
        static Reward: TpLodeJson = { url: `Reward1` };
        static Sound: TpLodeJson = { url: `Sound` };
        static Role: TpLodeJson = { url: `Role` };
        static Animator: TpLodeJson = { url: `Animator` };
        static Skill: TpLodeJson = { url: `Skill` };
        static Dinosaur: TpLodeJson = { url: `Dinosaur` };
        static FoodValue: TpLodeJson = { url: `FoodValue` };
        static Body: TpLodeJson = { url: `Body` };
    };

    export class Mesh3D { };
    let colorMatPath = 'Game3D/Prefab3D/LayaScene_Levels/Conventional/Assets/Art/Mesh/Texture/Materials/';
    export class Material {
        static dress01: TpLodeMaterial = { url: `${colorMatPath}hair01b`, lock: true };
        static hair01: TpLodeMaterial = { url: `${colorMatPath}hair01a`, lock: true };
        static dress02: TpLodeMaterial = { url: `${colorMatPath}hair02b`, lock: true };
        static hair02: TpLodeMaterial = { url: `${colorMatPath}hair02a`, lock: true };
        static dress03: TpLodeMaterial = { url: `${colorMatPath}hair03b`, lock: true };
        static hair03: TpLodeMaterial = { url: `${colorMatPath}hair03a`, lock: true };
        static dress04: TpLodeMaterial = { url: `${colorMatPath}T_Cloth_01`, lock: true };
        static hair04: TpLodeMaterial = { url: `${colorMatPath}T_Cloth_01`, lock: true };
        static endlessRoad: TpLodeMaterial = { url: `${colorMatPath}hair03b 2`, lock: true };

        static bubble01: TpLodeMaterial = { url: `${colorMatPath}Colour_03`, lock: true };
        static bubble02: TpLodeMaterial = { url: `${colorMatPath}Colour_04`, lock: true };
        static bubble03: TpLodeMaterial = { url: `${colorMatPath}Colour_05`, lock: true };
    };
    export class Texture { };
    export class Pic2D { };
    export class Skeleton { };
    /**图片需要设置成不打包*/
    export class EffectTex2D { };
}

/**
 * 场景前加载 
 */
export module GameResCutIn {
    export module Skin {
        export class Scene3D {
            static SkinScene: TpLodeScene3D = { url: 'Game3D/Scene3D/LayaScene_Skin/Conventional/Skin' };
        }
    }
}

/**
 * init场景加载，加载一部分资源有时候也是为了在展示公司logo的同时减少load加载的压力
 */
export module GameResInit {
    export class Image {
        static ImgArr: TpLodeImage = { url: ['Init/Preload/img_LOGO.png', 'Init/img_bg_2x.png'] };
    }
    export class Skeleton {
        /**
         * logo的资源如果进如load页面才加载，可能会有延迟
         */
        static LOGO: TpLodeSkeleton = { url: 'Init/Logo/LogoAnim.sk' };
        static load: TpLodeSkeleton = { url: 'Init/Preload/load.sk', lock: true };
    }
}

