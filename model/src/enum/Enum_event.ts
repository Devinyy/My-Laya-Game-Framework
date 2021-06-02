/**
 * name: 事件枚举
 */
export enum Enum_event {
    Event_mainView = "mainView",            //菜单界面
    Event_winView = "winView",              //胜利界面
    Event_failView = "failView",            //失败界面
    Event_boxView = "boxView",              //宝箱界面
    Event_revivalView = "revivalView",      //复活界面
    Event_rankView = "rankView",            //排行榜界面
    Event_skinView = "skinView",            //皮肤界面
    Event_moneyView = "moneyView",          //货币界面
    Event_freeSkinView = "freeSkinView",    //皮肤试用界面
    Event_turnView = "turnView",            //转盘界面
    Event_registView = "registView",        //签到界面
    Event_taskView = "taskView",            //任务界面
    Event_storeView = "storeView",          //商店界面
    Event_offlineView = "offlineView",      //离线奖励界面
    Event_celeView = "celeView",            //恭喜获得界面
    Event_incomeAddView = "incomeAddView",  //双倍收益界面
    Event_newSkin = "newSkinView",          //解锁皮肤界面
    Event_newSkinReward = "newSkinReward",  //解锁皮肤额外奖励界面
    Event_giftBox = "giftBoxView",          //抽奖宝箱界面
    Event_book = "bookView",                //主角图鉴界面
    Event_detailView = "detailView",        //玩法介绍界面
    Event_challenge = "challenge",          //冠军挑战界面
    Event_challengeSucc = "challengeSucc",  //挑战成功界面
    Event_challengeFail = "challengeFail",  //挑战失败界面

    Event_onShow_box = "onShow_box",        //返回前台(宝箱界面)
    Event_loadViewOpened = "loadViewOpened",//加载界面已经打开
    Event_resetMoney = "resetMoney",        //重置货币数量
    Event_setShadowStatus = "shadowStatus", //设置阴影状态

    Event_hitHero = "hitHero",              //碰撞到主角
    Event_hitDiamond = "hitDiamond",        //碰撞钻石
    Event_hitBarrier = "hitBarrier",        //碰撞障碍物
    Event_isEnd = "isEnd",                  //到达终点
    Event_clickSkin = "clickSkin",          //选中皮肤
    Event_doRandSkin = "doRandSkin",        //随机皮肤
    Event_clickBox = "clickBox",            //选中宝箱

    Event_upGrade = "upGrade",              //升级
    Event_upGradeSucc = "upGradeSucc",      //升级成功
    Event_clickRight = "clickRight",        //向右切换
    Event_addHeroInMenuView = "addHeroInMenuView",  //添加主角到菜单界面

    Event_gameWin = "gameWin",              //游戏胜利

    Event_gameFail = "gameFail",            //游戏失败
    Event_addSpeed = "addSpeed",            //速度增加
    Event_gameGoOn = "gameGoOn",            //继续游戏
    Event_dobleIncome = "doubleIncome",     //开始双倍收益
    Event_updateStore = "updateStore",      //刷新商店数据
    Event_changeHeroSkin_skinView = "changeHeroSkin_skinView",            //切换主角皮肤
    Event_changeWeapon_skinView = "changeWwapon_skinView", //改变皮肤界面中的武器
    Event_changeWeapon_gameView = "changeWeapon_gameView", //改变游戏界面中的武器

    Event_initKeyImg = "initKeyImg",        //初始化钥匙图片

    Event_registRedPoint = "redPoint_regist", //签到小红点

    Event_arriveEnd = "arriveEnd",            //到达终点
    Event_hitBeach = "hitBeach",              //抵达海滩
    Event_doGraphics = "doGraphics",          //渲染
    Event_showCountNum = "showCountNum",      //显示数量文本
    Event_showFreeSkinProperty = "showFreeSkinProperty",      //显示试用皮肤属性
}