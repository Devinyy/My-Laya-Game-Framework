var tempData = {
    'openid' : false,
    'auditStatus': true,
    'lastadtype':0,
    'fontname' : '',
    'gold' : 0, // 金币
    'diamond' : 0, // 钻石数量
    'strength':0, // 体力数
    'level': 0, // 关卡

    'signInDays' : 0,   // 签到天数
    'signInDays2' : 0,   // 签到天数2
    'signInStatus': 1,  // 签到状态
    'signingiftarray': [  0,0,0,0,0,0,0 ],  // 签到礼包领取状态


    'lineup': [1,2,3,4,5],  // 当前出战阵容
    'lineup1': [1,2,3,4,5], // 阵容1 
    'lineup2': [1,2,3,4,5], // 阵容2 
    'lineup3': [1,2,3,4,5], // 阵容3 
    'nowchoosetower':0, // 现在选择的防御塔
    'towerlevel': [ 1,1,1,1,1,0,0,0,0,0,
                    0,0,0,0,0,0,0,0,0,0 ],  // 现在所有的防御塔的等级
    'towerfragment': [  0,0,0,0,0,0,0,0,0,0,
                        0,0,0,0,0,0,0,0,0,0 ], // 所有拥有的防御塔的碎片
    
    'mission1':0, //当天的任务1
    'mission1num': 0, //当天任务1所需的达标数
    'mission2': 0, //当天的任务2
    'mission2num': 0, //当天任务2所需的达标数
    'mission3': 0, //当天的任务3
    'mission3num': 0, //当天任务3所需的达标数
    'missionstatus':[0,0,0,0], // 当前任务完成的情况
    'todayopenchesttimes': 0, // 今天开启宝箱数量
    'todaysuccessgametimes': 0, // 今天通关次数
    'todayupdatetowertimes':0, // 今天升级炮塔次数
    'todaykillenemytimes':0, // 今天击杀敌人个数
    'todayusedoubleattacktimes':0, // 今天使用战力双倍次数
    'achievementlevel':0, // 当前成就总等级
    'achievementnum':0, // 当前成就值
    'achievementarray':[0,0,0,0,0,0,0], // 当前每个成就的等级
    'killenemysum':0, // 当前击杀敌人的数量总和
    'updatetowersum':0, // 当前升级炮塔总和
    'gettowersum':0, // 当前获得炮塔总和
    'useturntablesum':0, // 当前参加转盘抽奖总和
    'openfreechestsum':0, // 当前开启免费宝箱总和
    'openclassicchestsum':0, // 当前开启经典宝箱总和
    'opensupremechestsum':0, // 当前开启至尊宝箱总和
    'attendendlesssum':0, // 当前参加无尽模式总和
    'todayopenfreechesttime':0, // 今天开启免费宝箱次数
    'todayopenfreediamondtime':0, // 今天开启免费钻石宝箱次数
    'todayopenturntabletime':0, // 今天开启幸运转盘次数
    'nextgetdiamondtime':0, // 下次领取免费钻石的时间戳
    'nextgetfreechesttime':0, // 下次领取免费宝箱的时间戳
    'nextgetsupremechesttime':0, // 下次领取至尊宝箱的时间戳
    'freediamondcooldowntime':0, // 下次领取免费钻石的时间戳
    'freechestdcooldowntime':0, // 下次领取免费宝箱的时间戳
    'limitgiftstatus':[0,0,0], // 当天的限量礼包的领取状态
    'limitgift1':0, //当天的限量礼包1的奖励
    'num1': 0, //当天的限量礼包1奖励的数量
    'limitgift2': 0, //当天的限量礼包2的奖励
    'num2': 0, //当天的限量礼包2奖励的数量
    'limitgift3': 0, //当天的限量礼包3的奖励
    'num3': 0, //当天的限量礼包3奖励的数量
    'thistimegetrewardresulgt':[], // 本次抽奖获得的物品
    'thistimeopenschesttype':0, // 本次打开的宝箱种类
     
    'skin': [0,0,0],   // 目前使用的皮肤
    'skinsuipian': [0,0,0],   // 目前使用的皮肤碎片
    'skins': [[0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0],], // 所有拥有的皮肤
              
    'inmainuitime':0, // 进入主界面的时间
    'leavetime':0, // 离开主界面的时间
    'SIGNINTIME': 0, // 本次登陆时间戳
    'OPENGIFTUITIME': 0, // 进入宝箱界面时间戳
    'LEAVETIME': 0, // 离开游戏时间戳
    'issecondday': false, // 是否第二天进入游戏
    'isseconddaymission': false, // 是否第二天进入任务ui
    
}

export default tempData;