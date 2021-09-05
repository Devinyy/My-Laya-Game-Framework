import { LwgControl, LwgData, LwgDate, LwgEvent, LwgSound, LwgStorage, LwgTools } from "../../Lwg/Lwg";
import { GameEnum } from "./GameEnum";
import { GameEvent } from "./GameEvent";
import { GameRes, GameResCutIn } from "./GameRes";
import { GameType } from "./GameType";


/**初始化 */
export module GameData {
    export let Guide: GuideData;
    export let Level: LevelData;
    export let LevelScore: LevelScoreData;
    export let Road: RoadData;
    export let Item: ItemData;
    export let Skin: SkinData;
    export let Sound: SoundData;
    export let Reward: RewardData;
    export let CheckIn: CheckInData;
    export let Lottery: LotteryData;
    export let LuckyWheel: LuckyWheelData;
    export let RoadsMsg: RoadsMsgData;
    // export let Role: RoleData;
    export let Animator: AnimatorData;
    export let Skill: SkillData;
    export let Dinosaur: DinosaureData;
    export let FoodValue: FoodValueData;
    export let Body: BodyData;


    export class Init {
        constructor() {
            Guide = new GuideData(GameRes.Json.Guide.dataArr);
            Level = new LevelData(GameRes.Json.Level.dataArr);
            LevelScore = new LevelScoreData(GameRes.Json.LevelScore.dataArr)
            RoadsMsg = new RoadsMsgData(GameRes.Json.RoadsMsg.dataArr);
            Road = new RoadData(GameRes.Json.Road.dataArr);
            Item = new ItemData(GameRes.Json.Item.dataArr);
            Skin = new SkinData();
            Sound = new SoundData(GameRes.Json.Sound.dataArr);
            Reward = new RewardData(GameRes.Json.Reward.dataArr);
            CheckIn = new CheckInData(GameRes.Json.Reward.dataArr);
            Lottery = new LotteryData(GameRes.Json.Reward.dataArr);
            LuckyWheel = new LuckyWheelData(GameRes.Json.Reward.dataArr);
            // Role = new RoleData(GameRes.Json.Role.dataArr);
            Animator = new AnimatorData(GameRes.Json.Animator.dataArr);
            Skill = new SkillData(GameRes.Json.Skill.dataArr);
            Dinosaur = new DinosaureData(GameRes.Json.Dinosaur.dataArr);
            FoodValue = new FoodValueData(GameRes.Json.FoodValue.dataArr);
            Body = new BodyData(GameRes.Json.Body.dataArr);
        }
    }
    class GuideData extends LwgData.BaseTable {
        constructor(arr: any) {
            super(arr);
        }
        get compelet(): boolean {
            return LwgStorage.bool('GuideData/compelet', null, false).value;
        }
        set compelet(val: boolean) {
            LwgStorage.bool('GuideData/compelet', null, false).value = val;
        }
        get stepNum(): number {
            return LwgStorage.number('GuideData/stepNum', null, 1).value;
        }
        set stepNum(val: number) {
            LwgStorage.number('GuideData/stepNum', null, 1).value = val;
        }
        getValueByID(ID: number): string {
            const obj = this.getObjByID(ID) as GameType.GuideData;
            return obj.value;
        }
    }

    class DinosaureData extends LwgData.BaseTable {
        constructor(arr: any) {
            super(arr);
        }
    }

    class FoodValueData extends LwgData.BaseTable {
        constructor(arr: any) {
            super(arr);
        }

        /**
         * 通过名称和状态获得吃食物的增加值
         * @param name 
         * @param form 
         * @returns 
         */
        valueByNameAndForm(name: string, form: GameEnum.FormState): number {
            let num = 0;
            for (let index = 0; index < this.arr.length; index++) {
                const element = this.arr[index];
                if (element.name === name) {
                    num = element[form];
                }
            }
            return num;
        }
    }
    class BodyData extends LwgData.BaseTable {
        constructor(arr: any) {
            super(arr);
        }
        /**
         * 通过名称和状态获得吃食物的增加值
         * @param name 
         * @param form 
         * @returns 
         */
        scaleByNameAndForm(name: string, form: GameEnum.FormState): number {
            let num = 0;
            for (let index = 0; index < this.arr.length; index++) {
                const element = this.arr[index];
                if (element.name === name) {
                    num = element[form];
                }
            }
            return num;
        }
    }

    /**
     * 技能升级
     */
    class SkillData extends LwgData.BaseTable {
        constructor(arr: any) {
            super(arr);
        }
        get levelArr(): number[] {
            const len = this.getTypeNum;
            const arr = [];
            for (let index = 0; index < len; index++) {
                arr.push(1);
            }
            return LwgStorage.array('SkillData/levelArr', null, arr).value;
        }
        /**
         * 等级数组
         */
        set levelArr(val: number[]) {
            for (let index = 0; index < val.length; index++) {
                const maxLv = this.getMaxLevelByType(index);
                if (val[index] > maxLv) {
                    val[index] = maxLv;
                }
            }
            LwgStorage.array('SkillData/levelArr').value = val;
        }

        /**
         * 某个类型等级增加
         * @param type 
         * @param num
         * @returns 
         */
        addLevelByType(type: GameEnum.SkillType, num = 1): void {
            const arr = [];
            for (let index = 0; index < GameData.Skill.levelArr.length; index++) {
                let element = GameData.Skill.levelArr[index];
                if (type === index) {
                    arr.push(element + num);
                } else {
                    arr.push(element)
                }
            }
            GameData.Skill.levelArr = arr;
        }

        /**
         * 当前技能等级的升级价格
         */
        public getCurConsumeByType(type: GameEnum.SkillType): number {
            const level = this.levelArr[type];
            let consume = 200;
            this.eachDataArr((element: GameType.SkillData) => {
                if (element.type === type && element.level === level) {
                    consume = element.consume;
                }
            })
            return consume;
        }

        /**
         * 获取当前技能类型的等级
         */
        public getCurLevelByType(type: GameEnum.SkillType): number {
            return this.levelArr[type];
        }

        /**
         * 获取类型数量
         */
        public get getTypeNum(): number {
            const arr = [];
            this.eachDataArr((element: GameType.SkillData) => {
                arr.push(element.type);
            })
            const len = LwgTools.Arr.unique01(arr).length;
            return len;
        }

        /**
         * 获取当前分类的最大升级数
         * @param type 类型
         */
        public getMaxLevelByType(type: GameEnum.SkillType): number {
            const arr: GameType.SkillData[] = [];
            const len = this.getTypeNum;
            for (let index = 0; index < len; index++) {
                this.eachDataArr((element: GameType.SkillData) => {
                    if (element.type === type) {
                        arr.push(element);
                    }
                })
            }
            LwgTools.ObjArray.sortByProperty(arr, 'level');
            return arr.pop().level;
        }

        /**
         * 获取攻击力
         * @returns 
         */
        getSkillAdditionByType(type: GameEnum.SkillType): number {
            const lv = this.levelArr[type];
            let addtion: number[] = [1];
            this.eachDataArr((element: GameType.SkillData) => {
                if (element.type === type && element.level === lv) {
                    addtion = element.addition;
                }
            })
            return addtion[0];
        }

        /**
         * 获取当前等级的的数据数组
         */
        getObjArrByCurLv(): GameType.SkillData[] {
            const arr: GameType.SkillData[] = [];
            const len = this.getTypeNum;
            for (let index = 0; index < len; index++) {
                const level = this.levelArr[index];
                this.eachDataArr((element: GameType.SkillData) => {
                    if (element.type === index && element.level === level) {
                        arr.push(element);
                    }
                })
            }
            return arr;
        }
    }

    /**
     * 播放动画的名称
     */
    class AnimatorData extends LwgData.BaseTable {
        constructor(arr: any) {
            super(arr);
        }
        /**
         * 通过角色的名字和动画类型获取一个动画名
         * @param roleName 角色名
         * @param anitype 动作名
         */
        getClipNameByRoleNameAndAni(roleName: string, aniType: GameEnum.RoleAni): string {
            const obj = this.getObjFirstByProNameAndVal('name', roleName);
            if (obj) {
                return obj[aniType] ? obj[aniType] : null;
            } else {
                console.log(roleName, obj, '不存在动画:', aniType);
            }
        }
    }

    class RoleData extends LwgData.EntiretyTable {
        constructor(arr: any) {
            for (let index = 0; index < arr.length; index++) {
                const element = arr[index] as GameType.RoleData;
                if (201 <= element.ID && element.ID <= 206) {
                    element.complete = true;
                }
            }
            super('SkinData/arr', arr);
        }

        getType(ID: number): GameEnum.ItemPathWay {
            const obj = this.getObjByID(ID) as GameType.RoleData;
            return obj.pathWay;
        }
        getNameByID(ID: number): string {
            const obj = this.getObjByID(ID) as GameType.RoleData;
            return obj.name;
        }
        get getDefultName(): string {
            const obj = this.getObjByID(201) as GameType.RoleData;
            return obj.name;
        }

        /**
         * 设置当前选择的恐龙出战
         */
        setBattleByID(ID: number): void {
            for (let index = 0; index < this.arr.length; index++) {
                const element = this.arr[index] as GameType.RoleData;
                if (element.ID === ID) {
                    element.battle = true;
                } else {
                    if (element.type.substr(0, 1) === element.type.substr(0, 1)) {
                        element.battle = false;
                    }
                }
            }
            this.refreshAndStorage();
        }

        getDinosaurGroupArr(): GameType.RoleData[] {
            const groupArr: GameType.RoleData[] = [];
            for (let index = 0; index < this.arr.length; index++) {
                const element = this.arr[index] as GameType.RoleData;
                if (element.battle) {
                    groupArr.push(element);
                }
            }
            return groupArr;
        }
        get getNameByVegan(): string {
            for (let index = 0; index < this.arr.length; index++) {
                const element = this.arr[index] as GameType.RoleData;
                if (element.battle && element.type.substr(0, 1) === 'A') {
                    return element.name;
                }
            }
        }
        get getNameByMeat(): string {
            for (let index = 0; index < this.arr.length; index++) {
                const element = this.arr[index] as GameType.RoleData;
                if (element.battle && element.type.substr(0, 1) === 'C') {
                    return element.name;
                }
            }
        }
        get getNameByEvolve_vegan(): string {
            for (let index = 0; index < this.arr.length; index++) {
                const element = this.arr[index] as GameType.RoleData;
                if (element.battle && element.type.substr(0, 1) === 'B') {
                    return element.name;
                }
            }
        }
        get getNameByEvolve_meat(): string {
            for (let index = 0; index < this.arr.length; index++) {
                const element = this.arr[index] as GameType.RoleData;
                if (element.battle && element.type.substr(0, 1) === 'D') {
                    return element.name;
                }
            }
        }

        /**
         * 通过当前名字获取进化名字
         * 如果是进化级别，则获取退化级别
         */
        getEvolveNameByName(name: string): string {
            const obj = this.getFirstObjByPro('name', name) as GameType.RoleData;
            const type = obj.type.substr(0, 1);
            let newTypeHead = 'A';
            switch (type) {
                case 'A':
                    newTypeHead = 'B';
                    break;
                case 'B':
                    newTypeHead = 'A';
                    break;
                case 'C':
                    newTypeHead = 'D';
                    break;
                case 'D':
                    newTypeHead = 'C';
                    break;
                default:
                    break;
            }
            for (let index = 0; index < this.arr.length; index++) {
                const element = this.arr[index] as GameType.RoleData;
                if (element.battle && element.type.substr(0, 1) === newTypeHead) {
                    return element.name;
                }
            }
        }
    }

    class RewardData extends LwgData.ItmeTable {
        constructor(arr: any) {
            super(arr);
        }
        getPrepareReward(): LwgData.TpItemGroup {
            const itemArr = this.getItemArrObjByID(10016);
            const itemGroup: LwgData.TpItemGroup = {
                index: 0,
                ID: itemArr.itemArr[0],
                number: itemArr.numberArr[0],
                weight: itemArr.weightArr[0],
            }
            return itemGroup;
        }
    }

    /**
     * 音效
     */
    class SoundData extends LwgData.BaseTable {
        constructor(arr: any) {
            super(arr);
        }
        /**
         * 通过id获取一个url
         * @param ID 
         * @returns 
         */
        getUrlByID(ID: number): string {
            const obj = this.getObjByID(ID);
            if (!obj) {
                return null;
            } else {
                return `Game/Sound/${obj.name}`;
            }
        }
        playSoundByID(ID: number): void {
            LwgSound.playSound(this.getUrlByID(ID));
        }
        sotpSoundByID(ID: number): void {
            LwgSound.stopSound(this.getUrlByID(ID));
        }
        playBgmByID(ID: number): void {
            LwgSound.playMusic(this.getUrlByID(ID));
        }
    }

    /**
     * 皮肤
     */
    class SkinData extends LwgData.EntiretyTable {
        constructor() {
            const arr = [];
            for (let index = 0; index < GameRes.Json.Item.dataArr.length; index++) {
                const element = GameRes.Json.Item.dataArr[index] as GameType.SkinData;
                if (element.type === GameEnum.ItemType.Skin) {
                    arr.push(element);
                }
            }
            super('SkinData/arr', arr);
            this.setObjCompeletByID(201);
            this.setObjCompeletByID(207);
            this.setObjCompeletByID(213);
        }

        public get pitchHairID(): number {
            return LwgStorage.number('SkinData/pitchHairID', null, 207).value;
        }
        public set pitchHairID(val: number) {
            LwgStorage.number('SkinData/pitchHairID').value = val;
        }
        public get pitchHairName(): string {
            return this.getObjByID(this.pitchHairID).name;
        }

        public get pitchDressID(): number {
            return LwgStorage.number('SkinData/pitchDressID', null, 201).value;
        }
        public set pitchDressID(val: number) {
            LwgStorage.number('SkinData/pitchDressID').value = val;
        }
        public get pitchDressName(): string {
            return this.getObjByID(this.pitchDressID).name;
        }

        public get pitchWingID(): number {
            return LwgStorage.number('SkinData/pitchWingID', null, 213).value;
        }
        public set pitchWingID(val: number) {
            LwgStorage.number('SkinData/pitchWingID').value = val;
        }
        public get pitchWingName(): string {
            return this.getObjByID(this.pitchWingID).name;
        }

        getSkinArrByPart(part: GameEnum.Part): GameType.SkinData[] {
            const arr = [];
            for (let index = 0; index < this.arr.length; index++) {
                const element = this.arr[index] as GameType.SkinData;
                if (element.part === part) {
                    arr.push(element);
                }
            }
            return arr;
        }

        setCompeletByData(data: GameType.SkinData): void {
            for (let index = 0; index < this.arr.length; index++) {
                const element = this.arr[index] as GameType.SkinData;
                if (element.ID === data.ID) {
                    element.complete = true;
                    if (data.part === GameEnum.Part.dress) {
                        this.pitchDressID = data.ID;

                    } else if (data.part === GameEnum.Part.hair) {
                        this.pitchHairID = data.ID;

                    } else if (data.part === GameEnum.Part.wing) {
                        this.pitchWingID = data.ID;
                    }
                    break;
                }
            }
            this.refreshAndStorage();
        }

        /** 
         * 获取当前皮肤的血量属性
         */
        getHPByName(name: string): number {
            const obj = this.getObjByName(name) as GameType.RoleData;
            const attr = obj.attribute.split('_');
            if (attr.length > 1) {
                if (+attr[0] === 1) {
                    return +attr[1];
                }
            }
            return 0;
        }

        /**
         * 获取当前皮肤的血量属性
         */
        getAttackByName(name: string): number {
            const obj = this.getObjByName(name) as GameType.RoleData;
            const attr = obj.attribute.split('_');
            if (attr.length > 1) {
                if (+attr[0] === 2) {
                    return +attr[1];
                }
            }
            return 0;
        }

        /**
         * 获取一个没有获得的随机皮肤ID,用于皮肤试用
         */
        getRanSkinTryByWing(): number {
            const arr = [];
            for (let index = 0; index < this.arr.length; index++) {
                const element = this.arr[index] as GameType.SkinData;
                if (element.part === GameEnum.Part.wing && !element.complete) {
                    arr.push(element.ID);
                }
            }
            if (arr.length > 0) {
                // console.log(LwgTools.Arr.randomGetOne(arr));
                return LwgTools.Arr.randomGetOne(arr);
            }
        }

        /**
         * 获取一个没有获得的随机皮肤ID,用于皮肤试用
         */
        getRanSkinObjByAD(): GameType.SkinData {
            const arr: GameType.SkinData[] = [];
            for (let index = 0; index < this.arr.length; index++) {
                const element = this.arr[index] as GameType.SkinData;
                if (!element.complete && element.pathWay === GameEnum.ItemPathWay.AD) {
                    arr.push(element);
                }
            }
            LwgTools.Arr.randomGetOut(arr, arr.length);
            return arr[0];
        }

        /**
         *  判断除了签到皮肤和宝箱皮肤的两个皮肤以外的皮肤还有没有可以解锁的，用于红点提示
         */
        public get getNoCompeletExCheckAndLottery(): boolean {
            for (let index = 0; index < this.arr.length; index++) {
                const element = this.arr[index] as GameType.SkinData;
                if (element.pathWay !== GameEnum.ItemPathWay.LotteryChest && element.pathWay !== GameEnum.ItemPathWay.CheckIn) {
                    if (!element.complete) {
                        return true;
                    }
                }
            }
        }
    }

    /**
     * 场景内容信息
     */
    class RoadsMsgData extends LwgData.BaseTable {
        constructor(arr: any[]) {
            super(arr);
        }
        /**
         * 获取本关的场景内容信息
         */
        getDataByLevel(): GameType.RoadsMsgData[] {
            const msgArr: GameType.RoadsMsgData[] = [];
            const dataArr = GameData.Level.getRoadDataArr();
            for (let i = 0; i < dataArr.length; i++) {
                const raodData = dataArr[i];
                for (let j = 0; j < this.arr.length; j++) {
                    const msg = <unknown>this.arr[j] as GameType.RoadsMsgData;
                    if (msg.name === raodData.name) {
                        msg.length = raodData.length;
                        msgArr.push(msg);
                    }
                }
            }
            return msgArr;
        }
        getChildDataArrByRoadName(name: string): GameType.RoadsMsgChildData[] {
            for (let index = 0; index < this.arr.length; index++) {
                const element = <unknown>this.arr[index] as GameType.RoadsMsgData;
                if (element.name === name) {
                    return element.childData;
                }
            }
        }
    }


    class LevelScoreData extends LwgData.BaseTable {
        constructor(arr: any[]) {
            super(arr);
        }
        // /**
        //  * 获取当前段数总分
        //  * @returns 
        //  */
        // getScoreByNum(num: number): number {
        //     let sum = 0;
        //     for (let index = 1; index <= num; index++) {
        //         const obj = <unknown>this.getObjByID(index) as GameType.LevelScoreData;
        //         sum += obj.rewardId;
        //     }
        //     return sum;
        // }

        getRewardIDByHpPer(per: number): number {
            per = per * 100;
            let id = 1;
            for (let index = 0; index < this.arr.length; index++) {
                const element = this.arr[index] as GameType.LevelScoreData;
                // console.log(per,element.HP);
                if (per < element.HP) {
                    const front = this.arr[index - 1] as GameType.LevelScoreData;
                    if (front) {
                        id = front.ID;
                    }
                    break;
                }
            }
            const endObj = this.arr[this.arr.length - 1] as GameType.LevelScoreData;
            if (per > endObj.HP) {
                id = 8;
            }
            const startObj = this.arr[0] as GameType.LevelScoreData;
            if (per < startObj.HP) {
                id = 1;
            }
            return id;
        }

        getRewardByNum(num: number): GameType.ItemData {
            const obj = this.getObjByID(num) as GameType.LevelScoreData;
            const rewardId = obj.rewardId;
            const rewardObj = GameData.Reward.ranSuperpositionWeight(rewardId);
            let item: GameType.ItemData;
            if (rewardObj.ID === 999) {
                const skinObj = GameData.Skin.getRanSkinObjByAD();
                if (!skinObj) {
                    //备用
                    const rewardObjP = GameData.Reward.getPrepareReward();
                    item = GameData.Item.getItemBaseByID(rewardObjP.ID) as GameType.ItemData;
                    item.number = rewardObjP.number;
                } else {
                    //皮肤
                    item = GameData.Item.getItemBaseByID(skinObj.ID) as GameType.ItemData;
                    item.number = rewardObj.number;
                    item.type = 999;
                }
            } else {
                //普通
                item = GameData.Item.getItemBaseByID(rewardObj.ID) as GameType.ItemData;
                item.number = rewardObj.number;
            }
            // console.log(item);
            return item;
        }
    }

    /**关卡 */
    class LevelData extends LwgData.ItmeTable {
        constructor(arr: any[]) {
            super(arr);
        }
        public get mode(): GameEnum.LevelMode {
            return this['_mode'] ? this['_mode'] : GameEnum.LevelMode.common;
        }
        public set mode(val: GameEnum.LevelMode) {
            this['_mode'] = val;
        }

        get endlessFreeNum(): number {
            return LwgStorage.number('LevelData/endlessFreeNum', null, 0).value;
        }
        /**
         * 免费进入无尽模式的次数
         */
        set endlessFreeNum(val: number) {
            LwgStorage.number('LevelData/endlessFreeNum', null, 0).value = val;
        }

        get playEndlessNum(): number {
            return LwgStorage.number('LevelData/playEndlessNum', null, 1).value;
        }
        /**
         * 交替切换无尽关卡的数据
         */
        set playEndlessNum(val: number) {
            LwgStorage.number('LevelData/playEndlessNum', null, 1).value = val;
        }

        getEndlessLvData(): GameType.RoadData[] {
            GameData.Level.playEndlessNum++;
            const roadArr: GameType.RoadData[] = [];
            // let obj = this.getEndlessLvObj();
            // for (let index = 0; index < obj.roadArr.length; index++) {
            //     const unitId = obj.roadArr[index];
            //     const unitObj = GameData.Road.getObjByID(unitId) as GameType.RoadData;
            //     const nameStrArr = unitObj.name.split(',');
            //     const ranName = LwgTools.Arr.randomGetOne(nameStrArr);
            //     const newObj: GameType.RoadData = {
            //         ID: unitObj.ID,
            //         name: ranName,
            //         length: unitObj.length,
            //         height: unitObj.height,
            //         color: unitObj.height,
            //     }
            //     roadArr.push(newObj);
            // }
            return roadArr;
        }
        private getEndlessLvObj(): GameType.LevelData {
            let obj: GameType.LevelData;
            // if (this.playEndlessNum % 2 == 0) {
            obj = this.getObjByID(101) as GameType.LevelData;
            // } else {
            //     obj = this.getObjByID(68) as GameType.LevelData;
            // }
            return obj;
        }

        getEndlessStartChild(): number {
            const obj = this.getEndlessLvObj() as GameType.LevelData;
            return obj.startChild;
        }
        // 888,1,102,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71
        // getEndlessLvFood(): string {
        // let obj: GameType.LevelData;
        // if (this.playEndlessNum % 2 == 0) {
        // obj = this.getObjByID(67) as GameType.LevelData;
        // return 'FoodB0' + obj.FoodB;
        // } else {
        //     obj = this.getObjByID(68) as GameType.LevelData;
        //     return 'FoodA0' + obj.FoodA;
        // }
        // }
        /**
         * 获取当前关卡路段信息,使用真实关卡信息获取路段信息
         */
        getRoadDataArr(): GameType.RoadData[] {
            const roadArr: GameType.RoadData[] = [];
            let curLevelObj: GameType.LevelData = this.getObjByID(LwgControl.Game.level) as any;
            if (!curLevelObj) {
                curLevelObj = this.getObjByID(1) as any;
            }
            for (let index = 0; index < curLevelObj.roadArr.length; index++) {
                const unitId = curLevelObj.roadArr[index];
                const unitObj = GameData.Road.getObjByID(unitId) as GameType.RoadData;
                const unitObjNew = LwgTools.ObjArray.objCopy(unitObj) as GameType.RoadData;
                unitObjNew.color = curLevelObj.colour[index] ? curLevelObj.colour[index] : '0';
                // console.log(curLevelObj.colour[index]);
                roadArr.push(unitObjNew);
            }
            // console.log(roadArr);
            return roadArr;
        }



        /**
         * 升一级需要多少吃几个水果
         */
        upgradeValue = 20;
        /**
         * 每吃一个食物增加体积
         */
        eatFoodScale = 0.05;
        /**
         * 吃一个食物第一个小恐龙增加的体积
         */
        eatFoodScaleByBaby = 0.01;

        /**
         * 临时本关分数
         */
        levelScore: number;

        getCommonStartChild(): number {
            let curLevelObj: GameType.LevelData = this.getObjByID(LwgControl.Game.level) as any;
            if (!curLevelObj) {
                curLevelObj = this.getObjByID(1) as any;
            }
            return curLevelObj.startChild;
        }
        getBossHPByLevel(): number {
            let curLevelObj: GameType.LevelData = this.getObjByID(LwgControl.Game.level) as any;
            if (!curLevelObj) {
                curLevelObj = this.getObjByID(1) as any;
            }
            return curLevelObj.bossHP;
        }
        getBossASpeedByLevel(): number {
            let curLevelObj: GameType.LevelData = this.getObjByID(LwgControl.Game.level) as any;
            if (!curLevelObj) {
                curLevelObj = this.getObjByID(1) as any;
            }
            return curLevelObj.bossaspeed;
        }
        getBossAttackByLevel(): number {
            let curLevelObj: GameType.LevelData = this.getObjByID(LwgControl.Game.level) as any;
            if (!curLevelObj) {
                curLevelObj = this.getObjByID(1) as any;
            }
            return curLevelObj.bossattack;
        }
        getFoodAType(): number {
            let curLevelObj: GameType.LevelData = this.getObjByID(LwgControl.Game.level) as any;
            if (!curLevelObj) {
                curLevelObj = this.getObjByID(1) as any;
            }
            return curLevelObj.FoodA;
        }
        getFoodBType(): number {
            let curLevelObj: GameType.LevelData = this.getObjByID(LwgControl.Game.level) as any;
            if (!curLevelObj) {
                curLevelObj = this.getObjByID(1) as any;
            }
            return curLevelObj.FoodB;
        }
    }

    /**
     * 场景
     */
    class RoadData extends LwgData.ItmeTable {
        constructor(arr: any[]) {
            super(arr);
        }
    }

    /**
     * 签到
     */
    class CheckInData extends LwgData.ItmeTable {
        constructor(arr: any[]) {
            super(arr);
        }

        /**当前签到第几天了，7日签到为7天一个循环*/
        get num(): number {
            return LwgStorage.number('CheckInData/num').value;
        }
        set num(num: number) {
            LwgStorage.number('CheckInData/num').value = num;
        }

        /**上次的签到日期，主要判断今日会不会弹出签到，不一样则弹出签到，一样则不弹出签到*/
        get lastDate(): number {
            return LwgStorage.number('CheckInData/lastDate', null, -1).value;
        }
        set lastDate(date: number) {
            LwgStorage.number('CheckInData/lastDate').value = date;
            LwgEvent.notify(GameEvent.redDotHint);
        }

        /**今天是否已经签到*/
        get today(): boolean {
            return this.lastDate == LwgDate.Now.date;
        }

        /**
         * 初始化签到奖励信息
         */
        get dayArr6(): GameType.ItemData[] {
            const arrdata = [];
            if (arrdata.length <= 0) {
                for (let i = 0; i < 6; i++) {
                    const obj = this.getItemArrObjByID(10000 + i + 1);
                    for (let j = 0; j < obj.weightArr.length; j++) {
                        const weight = obj.weightArr[j];
                        const number = obj.numberArr[j];
                        const ran = Math.floor(Math.random() * 10);
                        if (weight > ran) {
                            const ranItemId = obj.itemArr[j];
                            const item = Item.getItemBaseByID(ranItemId);
                            item.number = number;
                            arrdata.push(item);
                        }
                    }
                }
            }
            return arrdata;
        }

        /**
         * 初始化签到奖励信息
         */
        get day7RwardArr(): GameType.ItemData[] {
            const arrdata = [];
            if (arrdata.length <= 0) {
                const obj = this.getItemArrObjByID(10007);
                for (let index = 0; index < obj.weightArr.length; index++) {
                    const weight = obj.weightArr[index];
                    const ran = Math.floor(Math.random() * 10);
                    const number = obj.numberArr[index];
                    if (weight > ran) {
                        let ranItemId = obj.itemArr[index];
                        let item = Item.getItemBaseByID(ranItemId);
                        ranItemId = obj.itemArr[index];
                        item.number = number;
                        arrdata.push(item);
                    }
                }
            }
            return arrdata;
        }
    }

    /**
     * 9选三的宝箱
     */
    class LotteryData extends LwgData.ItmeTable {
        constructor(arr: any[]) {
            super(arr);
        }
        /**
         * 当前几把宝箱钥匙
         */
        get KeyNum(): number {
            return LwgStorage.number('LotteryData/chestKeyNum').value;
        }
        /**
         * 当前几把宝箱钥匙， 最多不超过3把
         */
        set KeyNum(num: number) {
            if (num > 3) {
                num = 3;
            }
            LwgStorage.number('LotteryData/chestKeyNum').value = num;
        }
        /**
         * 随机出一个宝箱奖励
         */
        public get ranReward(): GameType.ItemData {
            let item: GameType.ItemData;
            const itemGroup = this.ranSuperpositionWeight(10015);
            if (itemGroup.ID === 999) {
                const itemSkin = this.getOneSkin();
                if (itemSkin) {
                    //有就添加基础属性
                    item = GameData.Item.getItemBaseByID(itemSkin.ID);
                    item.number = itemGroup.number;
                    item.index = itemGroup.index;
                } else {
                    //替代
                    let itemGroupNew = GameData.Reward.getItemGroupObjByIndex(10016, 0);
                    item = GameData.Item.getItemBaseByID(itemGroupNew.ID);
                    item.number = itemGroupNew.number;
                    item.index = itemGroupNew.index;
                }
            } else {
                item = GameData.Item.getItemBaseByID(itemGroup.ID);
                item.number = itemGroup.number;
                item.index = itemGroup.index;
            }
            return item;
        }

        /**
         * 随机出要给当前可以随机出来的奖励
         */
        getOneSkin(): GameType.SkinData {
            const arr: GameType.SkinData[] = [];
            for (let index = 0; index < GameData.Skin.arr.length; index++) {
                const element = GameData.Skin.arr[index] as GameType.SkinData;
                if (element.type === GameEnum.ItemType.Skin && element.pathWay === GameEnum.ItemPathWay.LotteryChest && !element.complete) {
                    arr.push(element);
                }
            }
            if (arr.length === 0) {
                return;
            } else {
                return arr[0];
            }
        }

        /**
         * 固定皮肤奖励，如果获取了则用备用奖励
         */
        public get getBestReward(): GameType.ItemData {
            const itemGroup = GameData.Reward.getItemGroupObjByIndex(10015, 8);
            let item: GameType.ItemData;
            if (itemGroup.ID === 999) {
                const itemSkin = this.getOneSkin();
                if (itemSkin) {
                    //有就添加基础属性
                    item = GameData.Item.getItemBaseByID(itemSkin.ID);
                    item.number = itemGroup.number;
                    item.index = itemGroup.index;
                } else {
                    //替代
                    let itemGroupNew = GameData.Reward.getItemGroupObjByIndex(10016, 0);
                    item = GameData.Item.getItemBaseByID(itemGroupNew.ID);
                    item.number = itemGroupNew.number;
                    item.index = itemGroupNew.index;
                }
            } else {
                item = GameData.Item.getItemBaseByID(itemGroup.ID);
                item.number = itemGroup.number;
                item.index = itemGroup.index;
            }
            return item;
        }
    }

    /**
     * 幸运抽奖
     */
    class LuckyWheelData extends LwgData.ItmeTable {
        constructor(arr: any[]) {
            super(arr);
        }

        /**
         * 随机出要给当前可以随机出来的奖励
         */
        getOneSkin(): GameType.SkinData {
            const arr: GameType.SkinData[] = [];
            for (let index = 0; index < GameData.Skin.arr.length; index++) {
                const element = GameData.Skin.arr[index] as GameType.SkinData;
                if (element.type === GameEnum.ItemType.Skin && element.pathWay === GameEnum.ItemPathWay.LuckyWheel && !element.complete) {
                    arr.push(element);
                }
            }
            if (arr.length === 0) {
                return;
            } else {
                return arr[0];
            }
        }

        /**
         * 随机出一个宝箱奖励
         */
        public get ranReward(): GameType.ItemData {
            let item: GameType.ItemData;
            const itemGroup = this.ranSuperpositionWeight(10014);
            if (itemGroup.ID === 999) {
                const itemSkin = this.getOneSkin();
                if (itemSkin) {
                    //有就添加基础属性
                    item = GameData.Item.getItemBaseByID(itemSkin.ID);
                    item.number = itemGroup.number;
                    item.index = itemGroup.index;
                } else {
                    //替代
                    let itemGroupNew = GameData.Reward.getItemGroupObjByIndex(10016, 0);
                    item = GameData.Item.getItemBaseByID(itemGroupNew.ID);
                    item.number = itemGroupNew.number;
                    item.index = itemGroupNew.index;
                }
            } else {
                item = GameData.Item.getItemBaseByID(itemGroup.ID);
                item.number = itemGroup.number;
                item.index = itemGroup.index;
            }
            return item;
        }

        /**
         * 获取整个奖励数组
         */
        get getItemArr(): GameType.ItemData[] {
            const itemArr = [];
            const obj = this.getItemArrObjByID(10014);
            for (let index = 0; index < obj.weightArr.length; index++) {
                const itemGroup: LwgData.TpItemGroup = {
                    index: index,
                    ID: obj.itemArr[index],
                    number: obj.numberArr[index],
                    weight: obj.weightArr[index],
                }
                let item: GameType.ItemData;
                if (itemGroup.ID === 999) {
                    const itemSkin = this.getOneSkin();
                    if (itemSkin) {
                        //有就添加基础属性
                        item = GameData.Item.getItemBaseByID(itemSkin.ID);
                        item.number = itemGroup.number;
                        item.index = itemGroup.index;
                    } else {
                        //替代
                        let itemGroupNew = GameData.Reward.getItemGroupObjByIndex(10016, 0);
                        item = GameData.Item.getItemBaseByID(itemGroupNew.ID);
                        item.number = itemGroupNew.number;
                        item.index = itemGroupNew.index;
                    }
                } else {
                    item = GameData.Item.getItemBaseByID(itemGroup.ID);
                    item.number = itemGroup.number;
                    item.index = itemGroup.index;
                }
                itemArr.push(item);
            }
            return itemArr;
        }

        /**上次免费抽奖时间*/
        get lastDate(): number {
            return LwgStorage.number('LuckyWheelData/lastDate', null, -1).value;
        }
        set lastDate(date: number) {
            LwgStorage.number('LuckyWheelData/lastDate').value = date;
            LwgEvent.notify(GameEvent.redDotHint);
        }

        /**今日有没有免费抽奖，就一次*/
        get todayFree(): boolean {
            return this.lastDate !== LwgDate.Now.date;
        }
    }

    /**
     * 道具
     */
    class ItemData extends LwgData.ItmeTable {
        constructor(arr: any[]) {
            super(arr);
        }
        /**
         *  设置皮肤
         *  没有数量，获取后需添加数量
         */
        getItemBaseByID(ID: number): GameType.ItemData {
            const skinObj = this.getObjByID(ID) as GameType.ItemData;
            if (skinObj.type === GameEnum.ItemType.Skin) {
                const path = 'Game/UI/SkinIcon/';
                skinObj.iconSkin = path + skinObj.name + '.png';
                skinObj.picSkin = path + skinObj.name + '.png';
                skinObj.picBigSkin = path + skinObj.name + '.png';
            } else {
                let iconName = '';
                let picName = '';
                let picBigName = '';
                switch (ID) {
                    case 101:
                        iconName = `img_icon_money_01`;
                        picName = `img_icon_money_01b`;
                        picBigName = `img_icon_zuanshibig`;
                        break;

                    case 102:
                        iconName = `img_icon_money_01`;
                        picName = `img_icon_money_01b`;
                        picBigName = `img_icon_zuanshibig`;
                        break;

                    case 103:

                        iconName = `img_icon_money_02`;
                        picName = `img_icon_money_02`;
                        picBigName = `img_icon_tili_02`;
                        break;

                    case 301:
                        iconName = `img_icon_zhuanpan_zailaiyici`;
                        picName = `img_icon_zhuanpan_zailaiyici`;
                        picBigName = `img_icon_zhuanpan_zailaiyici`;
                        break;

                    case 401:
                        iconName = `img_icon_wujin_big`;
                        picName = `img_icon_wujin_big`;
                        picBigName = `img_icon_wujin_big`;
                        break;

                    default:
                        break;
                }
                const basePath = 'Game/UI/';
                skinObj.iconSkin = basePath + iconName + '.png';
                skinObj.picSkin = basePath + picName + '.png';
                skinObj.picBigSkin = basePath + picBigName + '.png';
            }
            //设置默认属性
            skinObj.number = 1;
            skinObj.index = 0;
            // copy一份，因为后面会修改
            const obj = LwgTools.ObjArray.objCopy(skinObj) as GameType.ItemData;
            return obj;
        }
    }
}
