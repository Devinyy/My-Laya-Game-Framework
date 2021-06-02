// export enum Enum_fruitType {
//     apple,
//     banana,
//     orange,
// }

// export enum Enum_name {
//     "tom",
//     "jary"
// }

/**
 * name: 界面位置枚举
 */
export enum Enum_viewPos {
    POS_top,                  //顶部
    POS_bottom,               //底部
    POS_center,               //中间
    POS_left,                 //左边
    POS_right,                //右边
}

/**
 * name: 关卡类型枚举
 */
export enum Enum_levelType {
    level_normal = 0,     //普通关卡
    level_island1,        //中间有1个岛屿
    level_island2,        //中间有2个岛屿
    // level_reward,         //奖励
    // level_boss            //boss
}

/**
 * name: 背景音乐枚举
 */
export enum Enum_bgMusic {
    bgMusic_normal,
    bgMusic_reward,
    bgMusic_boss,
}

/**
 * name: 主角状态
 */
export enum Enum_heroStatus {
    status_stay,          //等待
    status_run,           //追踪
    status_traceTree,     //找树
    status_traceBoat,     //找船
    status_cut,           //砍
    status_attackHero,    //攻击玩家
    status_build,         //建造
    status_boat,          //上船
    status_end            //到达终点
}

/**
 * name: 船的状态
 */
export enum Enum_boatStatus {
    status_stay,
    status_build,
    status_run,
}

export enum Enum_skinType {
    skin_none,   //没有皮肤
    skin_hero,
    skin_weapon
}