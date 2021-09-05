export module GameEnum {
    /**
     * 看广告获得奖励的类型
     */
    export enum ResType {
        Gold = 101,
        Diamond = 102,
        Stamina = 103,
    }
    /**
     * 奖励类型
     */
    export enum ItemType {
        Currency = 1,
        Skin = 2,
        LuckyWheelAgain = 3,
        EndlessMode = 4,
        SkinTry = 999,
    }

    export enum SkillType {
        speed = 0,
        energy = 1,
        reward = 2,
    }

    export enum ItemPathWay {
        Free = '0',
        Diamond = '1',
        LotteryChest = '2',
        CheckIn = '3',
        AD = '4',
        LuckyWheel = '5',
    }

    /**
     * 当前主角处于什么状态
     */
    export enum RoleState {
        /**
         * 暂停
         */
        Suspend = 'Suspend',
        /**
         * 准备阶段，一般再start页面
         */
        Ready = 'Ready',
        /**
         * 开始中
         */
        Start = 'Start',
        /**
         * 跑步状态
         */
        Run = 'Run',
        /**
         * 钻石
         */
        Diamond = 'Diamond',
        /**
         * 撞墙
         */
        Wall = 'Wall',
        /**
         * 泡泡
         */
        Bubble = 'Bubble',
        /**
         * 变换
         */
        Door = 'Door',
        /**
         * 斜坡
         */
        Slope = 'Slope',
        /**
         * 钥匙
         */
        KeyFood = 'KeyFood',
        /**
         * 
         */
        Drop = 'Drop',
        /**
         * 终点
         */
        Destination = 'Destination',
        /**
          * 跳舞
          */
        Dance = 'Dance',
        /**
         * 完成本关
         */
        Victory = 'Victory',
        /**
         * 失败
         */
        Defeated = 'Defeated',
        /**
         * 失败
         */
        Resurgence = 'Resurgence',
    }
    export enum RoleAni {
        idle = 'idle',
        run = 'run',
        fall = 'fall',
        slide = 'slide',
        dance = 'dance',
    }

    export enum ResurgenceType {
        drop = 'drop',
        wall = 'wall',
        bubbleError = 'bubbleError',
    }

    export enum BubbleAni {
        idle = 'idle01',
        retract = 'idle02',
        ball = 'idle03',
    }
    export enum StampBubbleState {
        Destination = 'Destination',
        Run = 'Run',
    }

    export enum MoveForwardArgs {
        none,
        sprint,
        errorBubble,
        rightBubble,
    }

    export enum FormState {
        base = 'base',
        vegan1 = 'vegan1',
        vegan2 = 'vegan2',
        vegan3 = 'vegan3',
        meat1 = 'meat1',
        meat2 = 'meat2',
        meat3 = 'meat3',
    }
    /**
     * boss类型，食肉或者食草
     */
    export enum RoleType {
        vegan = 'vegan',
        meat = 'meat',
    }

    /**
     * 部件
     */
    export enum Part {
        dress = '1',
        hair = '2',
        wing = '3',
    }

    /**
     * 颜色对应的索引值
     */
    export enum Colour {
        red = 1,
        yellow = 2,
        blue = 3,
        rainbow = 4,
    }

    /**
     * 模式
     */
    export enum LevelMode {
        common = 'common',
        endless = 'endless',
    }
}
