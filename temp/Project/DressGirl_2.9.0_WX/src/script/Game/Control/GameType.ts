import { LwgData, LwgDate, LwgNode } from "../../Lwg/Lwg";
import { GameEnum } from "./GameEnum";
import GameSceneName from "./GameSceneName";
export module GameType {
    /**
     * 打开宝箱页面
     */
    export type openLottery = {
        whereFrom: string,
    };
    /**
     * 打开主界面
     */
    export type openStart = {
        whereFrom: string,
    };
    /**
     * 打开皮肤试用
     */
    export type openSpecialAwards = {
        itme: GameType.ItemData,
        whereFrom: string,
    }
    /**
     * 打开皮肤试用
     */
    export type openSkinTry = {
        id: number,
    }

    /**
     * 打开奖励界面
     */
    export type openBerewarded = {
        item: ItemData;
        item1?: ItemData;
        item2?: ItemData;
        /**从哪个界面来 */
        whereFrom?: string,
    }
    /**
     * 结算信息
     */
    export type openSettlement = {
        diamondNum: number;
        mileage: number;
    }
    /**
     * 结算信息
     */
    export type openVictory = {
        score: number;
    }
    /**
     * 看广告获得奖励的信息
     */
    export type openADGetReward = {
        type: GameEnum.ResType,
    }
    /**
     * 看广告获得奖励的信息
     */
    export type openLevels = {
        sprint: GameEnum.MoveForwardArgs,
    }
    export type OpenResurgence = {
        type: GameEnum.ResurgenceType.drop,
    }

    export type SoundData = {
        format: string
        type: number,
    } & LwgData.TpBase;

    /**
      * item中的属性
      */
    export type ItemData = {
        ID: number,
        /**
         * 索引值
         */
        index: number,
        /**
         * 数量
         */
        number: number,
        /**
         *类型
         */
        type: number,
        /**
         * 模型
         */
        name: string;
        picSkin: string;
        iconSkin: string;
        picBigSkin: string;
    }

    /**
     * 关卡数据对象类型
     */
    export type LevelData = {
        roadArr: number[];
        speed: number;
        startChild: number;
        bossHP: number;
        bossattack: number;
        bossaspeed: number;
        FoodA: number;
        FoodB: number;
        Reward: number;
        colour: string[];
    } & LwgData.TpItmeTable;

    export type LevelScoreData = {
        rewardId: number,
        HP: number,
    } & LwgData.TpBase;

    /**
     * 技能
     */
    export type SkillData = {
        name: string,
        level: number,
        type: GameEnum.SkillType,
        consume: number,
        addition: number[],
    } & LwgData.TpBase;

    /**
     * 场景数据对象类型
     */
    export type RoadData = {
        name: string;
        length: number;
        height: number;
        color: string;
        index1: number;
        index2: number;
        index3: number;
    } & LwgData.TpBase;

    /**
     * 皮肤信息属性
     */
    export type SkinData = {
        price: number,
        type: number,
        part: string,
        pathWay: GameEnum.ItemPathWay,
        battle: boolean,
        attribute: string,
        index: number,
    } & LwgData.TpEntirety;

    /**
     * 皮肤获取途径信息
     */
    export type RoleData = {
        type: string,
        pathWay: GameEnum.ItemPathWay,
        battle: boolean,
        attribute: string,
        level: number,
    } & LwgData.TpEntirety;

    /**
     * 动作
     */
    export type AnimatorData = {
        run: string;
        attack: string;
        dead: string;
    } & LwgData.TpBase;
    /**
      * 关卡信息
      */
    export type RoadsMsgData = {
        name: string,
        active: boolean,
        length: number,
        childData: RoadsMsgChildData[];
    };
    export type RoadsMsgChildData = {
        name: string,
        active: boolean,
        data: {
            localPositionX: number,
            localPositionY: number,
            localPositionZ: number,
            localRotationEulerX: number,
            localRotationEulerY: number,
            localRotationEulerZ: number,
            localScaleX: number,
            localScaleY: number,
            localScaleZ: number
        },
    }

    export type GuideData = {
        value: string;
    } & LwgData.TpBase;

    export type guideData = {
        type: GameEnum.RoleType;
    }

    export type RoadSp3D = {
        heightRoad?: number,
    } & Laya.Sprite3D;

    export type BubbleSp3D = {
        colorIndex?: GameEnum.Colour,
    } & Laya.Sprite3D;
}