export default class GameConstData {
    constructor() { }
    //游戏名称
    public static GameNameNow = "ZMC";


    //UI2D到3D移动距离比例
    public static UITO3DBiLi = 150 * 3;

    public static shopStat = {
        "role": {
            "stat": [1, 0, 0, 0, 0, 0],
            "pay": [0, 1500, 1500, 1500, 1500, 1500],
            "now": 0
        },
        "hanmmer": {
            "stat": [1, 0, 0, 0, 0, 0, 0, 0, 0],
            "pay": [0, 300, 500, 800, 1000, 1200, 1500, 1500, 2000],
            "now": 0
        }
    };

    public static bottomMoveTime = 300;

    public static isloadNativeAd = false;

    public static gamePlayNum = -1;
    public static nowTiLi = 0;

    //玩家每帧 移动距离倍数
    public static playerMoveMaxNum = 0.5;
    //玩家每帧 移动距离倍数 超级模式
    public static playerMoveMaxNumSuper = 0.8;
    // 玩家小技能释放距离
    public static playersmallskilldis = 66;
    //杀一个敌人涨的能量
    public static killEnemyAddNum = 50;
    //旋转持续时间 秒
    public static superDurTime = 5;
    //超级模式 击杀敌人半径
    public static superKillR = 6;

    //血量显示的高度
    public static bloodlinehigh = 230; 

    //金币随机旋转角度  比如值为1  随即范围是-1到1
    public static coinRotaNum = 0.1;
    //一个钱给多少金币
    public static QianGiveCoin = 1;
    //人物距离钱多少范围内可以拾取
    public static PlayerGetQianDis = 5;
    //玩家的检查角度
    public static playerCheckAngle = 30;
    //最大的范围大小
    public static MaxFanWeiLen = 9;
    //默认的范围大小
    public static defaultFanWeiLen = 3;

    //小人死亡特效同时的最大数量
    public static MaxE_jiaonang_shoujiArrayIndex = 30;

    //敌人跟踪玩家的最大范围
    public static enemyMoveWithPlayerMaxDisKaiPingFang = 15;
    //十字移动计算移动点的基本个数
    public static ShiZiMoveCalNum = 5 * 12;
    //斜字移动计算移动点的基本个数
    public static XieMoveCalNum = 7 * 12;

    public static enemyMoveWithPlayerMaxDis = 30;
    public static superKillRSqrt = 5;
    public static PlayerGetQianDisSqrt = 0;

    //离线时间
    public static leaveGameTime = 0;
    //使用振动
    public static isUseVibrate = true;
    //使用音效
    public static soundStat = true;
    //玩家金币
    public static playerCoin: number = 0;
    //当前关卡  
    public static nowLevel = 0;
    //复活次数
    public static rebornMaxNum = 1;

    public static sysInfo;
    //是否ios
    public static isIos: boolean = true;
    public static ttfName: string = "SimHei";
    public static NumfontName: string = "SimHei";
    public static widthFix = 0;
    public static heightFix = 0;

}   
