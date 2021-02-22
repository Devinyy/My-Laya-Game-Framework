// 游戏中的数据存储

var GamingData = {
    'nowbgmusic': '',               // 现在游戏的背景音乐url
    'uiblocklength':50,
    'choosetowerx':0,               // 当前防御塔所在的x
    'choosetowery':0,               // 当前防御塔所在的y
    'block1index': 0,               // 方块1的下标
    'block1typeindex': 0,           // 方块1的种类下标
    'block1spinindex': 0,           // 方块1的旋转角度
    'block2index': 0,               // 方块2的下标
    'block2typeindex': 0,           // 方块2的种类下标
    'block2spinindex': 0,           // 方块2的旋转角度
    'block3index': 0,               // 方块3的下标
    'block3typeindex': 0,           // 方块3的种类下标
    'block3spinindex': 0,           // 方块3的旋转角度
    'blocktypenowchoose':0,         // 现在选中的方块的种类
    'specialtype':0,                // 目前本局游戏特殊事件的种类
    'isthissaveisspecial':0,        // 当前波次是否有随机事件
    'specialhappentime':0,          // 特殊事件出发的次数
    'battledoubleattack':1,         // 目前游戏双倍攻击是否开启
    'battledoubleattackovertime':0, // 当前游戏双倍攻击的结束事件
    'crystal': 0,                   // 本关游戏中的晶体数量
    'boxuparray': [1,1,1,1,1],      // 本关中的所有方块的升级的等级
    'isgreenbuff': false,           // 本次游戏中是否开启绿色buff
    'isbluebuff': false,            // 本次游戏中是否开启蓝色buff
    'isallbuff': false,             // 本次游戏中是否开启全buff
    'thisgamebossuptype': 0,        // 本次游戏中boss加成的属性种类
    'thisgamebossupnum': 0,         // 本次游戏中boss加成的属性加成的值
    'thisgameattackupnum': 1,       // 本次游戏中攻击加成的值
    'thisgameattackspeedupnum': 1,  // 本次游戏中攻速加成的值
    'thisgamemonstorkillerupnum': 1,  // 本次游戏中小怪生命值的倍率
    'thisgamebossterminatorupnum': 1, // 本次游戏中boss生命值的倍率
    'thisgamecriticalhitpraddnum': 1,// 本次游戏中buff3选1中暴击的倍率
    'thisgameskilladdnum': 1,       // 本次游戏中buff3选1中技能每次释放需要的能量倍率
    'thisgamecrystaladdnum': 0,     // 本次游戏中buff3选1中水晶能量每回合的增加值
    'thisgamerefreshchoosebufftime': 0,// 本次游戏中buff3选1中刷新的次数
    'thisgamechoosedstartuptype': 0,// 本次游戏中选择的初始加成
    'thisgamechoosedstartupnum': 0, // 本次游戏中选择的属性加成
    'thisgamestartuptype1': 0,      // 本次游戏中初始开始加成的属性种类1
    'thisgamestartupnum1': 0,       // 本次游戏中初始开始加成的属性加成的值1
    'thisgamestartuptype2': 0,      // 本次游戏中初始开始加成的属性种类2
    'thisgamestartupnum2': 0,       // 本次游戏中初始开始加成的属性加成的值2
    'thisgamestartuptype3': 0,      // 本次游戏中初始开始加成的属性种类3
    'thisgamestartupnum3': 0,       // 本次游戏中初始开始加成的属性加成的值3
    'thisgameplacetime': 0,         // 本次游戏中放置方块的次数
    'thislevelleftlife': 0,         // 本关游戏中剩余的生命值
    'thislevelmap': [[]],           // 本关的方块的地图
    'thisleveldeviationx': 0,       // 本关地图的x轴偏移量
    'thisleveldeviationy': 0,       // 本关地图的y轴偏移量
    'thislevelwavetime': 0,         // 本关总波次
    'thislevelnowwavetime': 0,      // 本关当前波次
    'thislevelbeatenemynum': 0,     // 本关打败敌人的数量
    'thislevelstartpoint':[],       // 本关起始点在ui中的位置
    'thislevelcentralpointinui':[], // 本关中心点在ui中的位置
    'thiswaveenemynum':0,           // 本波次总数量
    'thiswaveenemydisappearnum': 0, // 本波次击败或者逃脱的敌人数
    'enemystart': [0,0],            // 敌人在地图上出发的起始点
    'enemyend': [0,0],              // 敌人在地图上结束的起始点
    'enemyroadalldis':0,            // 敌人路径的总距离
    'enemyroadInflectionpointarray':[], // 敌人在路径上 每段路径的距离、旋转角度、终点坐标
    'randomeventarray':[0,1,2,3,4,5,6,7,8,9], // 每关随机事件问题的标号
}

export default GamingData;