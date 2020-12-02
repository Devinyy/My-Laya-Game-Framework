var tempData = {
    'openid' : false,
    'diamond' : 0,
    'level': 1, // 关卡

    'last_x': 0, // 上次鼠标所在的x轴
    'last_z': 0, // 上次鼠标所在的z轴
    'horizonspeed': 0.04, // 人物水平移动的速度
    'all_distance': 0, // 道路总长度
    'fasheweizhi': 0, // 玩家发射导弹击毁 boss 的位置
    'lastmovedis' : 0, // 上次移动的道路距离长度
    'isyindao': false, // 是否为初始引导关卡
    'thismissflag': 0, //这次遗漏的小球的flag
    'thismissflagcount': 0, //这次遗漏的相同flag的小球的数量
    'map':'', // 本关的地图
    'thislevellife':0, // 本关剩余生命值
    'thislevelweapon':0, // 本关武器
    'thislevelcount' :0, // 本关分数
    'thislevelcombo' :0, // 本关连击数
    'thislevelmoney' :0, // 本关金钱数
    'thislevelenemy' :0, // 本关敌人数
    'thislevelenergy' :0, // 本关能量值
    'isspecialtime' :false, // 本关是否为特殊关卡时间
    'thislevelbestscore' :0, // 本关理论最高分

    'isspecialattack': false,// 是否开启特殊攻击模式
    'xiaobosstimedianwei':[], // 小boss以及之后节奏点的时间点位

    'count': 0, // 这一关获得的分数

    'isequitweapon': 0, // 玩家是否装备有武器

    'skin': [0,0,0],   // 目前使用的皮肤
    'skinsuipian': [0,0,0],   // 目前使用的皮肤碎片
    'skins': [[0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0],], // 所有拥有的皮肤

    'upattribute': [5,5,10,10,10,20,20,20],
    'weaponupattribute': [0,5,10,10,10,20,20,20],
    'lifeupattribute': [0,1,2,2,2,3,3,3],
    'moneyup':1,
    'scoreup':1,

    
    'songs' : [0], // 目前所有歌曲的解锁状态
    'stars': [0], // 目前所有歌曲的星星数
    'highscores': [0], // 目前所有歌曲的最高分
    'scorelevel': [0.60, 0.80, 0.95], // 三星达标分数百分比

    'todayjiesuoskins': 0, // 今天解锁皮肤数
    'todayjiesuosongs':0, // 今天的解锁歌曲数
    'todayvediotimes':0, // 今天的视频观看数
    'todaygifttimes':0, // 今天的在线宝箱领取数量
    'todaygametimes':0, // 今天的游戏次数
    'todaysupplygifttimes':0, // 今天领取补给宝箱次数
    'todayusestrength':0, // 今天消耗体力数量
    'todaymoney':0, // 今天获得的金币数
    
    'inmainuitime':0, // 进入主界面的时间
    'leavetime':0, // 离开主界面的时间

    'SIGNINTIME': 0, // 本次登陆时间戳
    'OPENGIFTUITIME': 0, // 进入宝箱界面时间戳
    'LEAVETIME': 0, // 离开游戏时间戳
    'issecondday': false, // 是否第二天进入游戏
    'isseconddaymission': false, // 是否第二天进入任务ui

    'giftstatuslist': [0], // 礼物领取状态列表
    'time' : 0, // 记录现在正在解锁的宝箱还需等待的时间
    'nowgift' : 0, // 记录现在正在解锁的宝箱
    'limitgiftstatus': [0,0,0], // 记录限量宝箱当天的领取状态
    'onlinegiftstatus': [[0,0,0,0,0,0,0,0,0,0],
                         [0,0,0,0,0,0,0,0,0,0]], // 记录在线宝箱当天的领取状态
    'baoxianglingqutimes': 0 , //宝箱领取次数
    'limitgift1':0, //当天的限量礼包1的奖励
    'num1': 0, //当天的限量礼包1奖励的数量
    'limitgift2': 0, //当天的限量礼包2的奖励
    'num2': 0, //当天的限量礼包1奖励的数量
    'limitgift3': 0, //当天的限量礼包3的奖励
    'key': 0, //钥匙数
    'strength':0, //体力数
    'vediocard':0, // 视频卡数

    'mission1':0, //当天的任务1
    'mission1num': 0, //当天任务1所需的达标数
    'mission2': 0, //当天的任务2
    'mission2num': 0, //当天任务2所需的达标数
    'mission3': 0, //当天的任务3
    'mission3num': 0, //当天任务3所需的达标数
    'dajiangmission':0, //当天的大奖类别

    'gainnow':0, // 当前获得的奖励类型
    'gainnownum':0, // 当前获得的奖励类型数量

    'missionstatus':[0,0,0,0], // 当前任务完成的情况

    'signInDays' : 0,   // 签到天数
    'signInStatus': 1,  // 签到状态
    'isclick_qiandao':  0,
    'isgameover_to_main' : 0,
    'isfirstplayer' : 1,
    'uibaoxiangmodetime' : 1,  // UI中宝箱模式的切换次数
    'uishiyongmodetime' : 1,  // UI中试用皮肤模式的切换次数
    'isfirstshare':false, // 是否第一次分享游戏
    'isfirstclicksong':false, // 是否第一次点击游戏
    'isfirst1':false, // 是否第一次进入歌曲关卡
    'isfirst2':false, // 是否第一次进入歌曲关卡
    'isfirst3':false, // 是否第一次进入歌曲关卡
    'isfirst4':false, // 是否第一次进入歌曲关卡
    'isfirst5':false, // 是否第一次进入歌曲关卡
    'isfirst6':false, // 是否第一次进入歌曲关卡
    'isfirst7':false, // 是否第一次进入歌曲关卡
    'isfirst8':false, // 是否第一次进入歌曲关卡
    'isfirst9':false, // 是否第一次进入歌曲关卡
    'isfirst10':false, // 是否第一次进入歌曲关卡
    'isfinish1':false, // 是否完成歌曲关卡
    'isfinish2':false, // 是否完成歌曲关卡
    'isfinish3':false, // 是否完成歌曲关卡
    'isfinish4':false, // 是否完成歌曲关卡
    'isfinish5':false, // 是否完成歌曲关卡
    'isfinish6':false, // 是否完成歌曲关卡
    'isfinish7':false, // 是否完成歌曲关卡
    'isfinish8':false, // 是否完成歌曲关卡
    'isfinish9':false, // 是否完成歌曲关卡
    'isfinish10':false, // 是否完成歌曲关卡
    'isdie1':false, // 第一关死亡的人数
    'isdie2':false, // 第二关死亡的人数
    'isrevival1':false, // 第一关复活的人数
    'isrevival2':false, // 第二关复活的人数
    'islogin1':false,
    'islogin2':false,
    'islogin3':false,
    'islogin4':false,
    'islogin5':false,
    'islogin6':false,
    'islogin7':false,
    'islogin8':false,
    'islogin9':false,
    'islogin10':false,

    'lastadtype':0,

    'todaylimitskintime':0,
    'limitskin':0,

    'todayturntabletime':0,

    'isyouxijieshutanchu':0,
    'shiyongpifu':-1,

    'auditStatus': true,

    'isturntableopen':false,

}

export default tempData;