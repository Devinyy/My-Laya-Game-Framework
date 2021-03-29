import GamingData from "../Data/gamingdata";
import tempData from "./tempData";
import urls from "./urls";
import soundMgr from "./soundMgr";

const LOCAL_VERSION = '1.0.6';
const LEQU_GAME_ID = 343;

const bannerAd1Uid = 'adunit-2759656c7442acbb';
const bannerAd2Uid = 'adunit-4ed969d0dc800c25';
const bannerAd3Uid = 'adunit-0132a08e62a5bfcb';

const vedioAdUid615 = 'adunit-4f04b62bd878219b';
const vedioAdUid630 = 'adunit-d51355eb5ca0eade';
const vedioAdUid660 = 'adunit-3411671da18d6d1c';

function clampf(a,min,max){
    if(a<min) return min;
    else if(a>max) return max;
    return a;
}

var platform = (()=>{
    
    var leftSecond = 10 * 60;//10min
    var countDownScheduleId = -1;//count down
    var ioCount = 0;
    
    var video = null;
    var banner = null;
    var banner1,banner2,banner3;

    var banner1ShowTimes = 0;
    var banner2ShowTimes = 0;
    var banner3ShowTimes = 0;

    var BANNER_SHOW_MAX_TIMES = 2;

    var nextBannerIndex = 0;

    var timestamp = -1;

    var shareSuccess = null;
    var shareFail = null;
    
    var shareComplete = null;

    //震动相关
    var vibrateTooOften = false;
    var vibrateCoolDownTimeout = -1;    

    //timeout
    var bannerTrickId = -1;    

    //审核状态
    var auditStatus = true;//审核状态

    var jumpEnabled = false;//导出
    var fakeBtnEnabled = false;//假按钮
    var bannerTrickEnabled = false;//误触
    var bannerTrickEggEnabled = false;//砸蛋误触
    var bannerTrickWordEnabled = false;//文字误触
    var videoTrickEggEnabled = false;

    // auditStatus = false;
    // jumpEnabled = true;
    // bannerTrickEnabled = true;
    // bannerTrickEggEnabled = true;
    // bannerTrickWordEnabled = true;

    var oldPlayer = false;
    var isfirstplayer = true;

    var music = null;    

    //插屏广告
    var interstitialAd = null;

    var isConnected = true;

    //指定用户
    var isTrickedUser = false;

    return{ 

        //获取玩家openid
        initOpenid(){
            if(this.hasStorageSync('openid')){
                tempData.openid = this.getStorageSync('openid','string');      
                console.log('玩家openid=',tempData.openid);
                this.zsInit(tempData.openid);
            }else{
                if(Laya.Browser.window.wx && Laya.Browser.window.wx.login && Laya.Browser.window.wx.request){
                    Laya.Browser.window.wx.login({
                        success:(res)=>{
                            if(res.code){                                
                                Laya.Browser.window.wx.request({
                                    url:'https://account.api.snsfun.com/XyxApi/aloneuid',
                                    data:{
                                        gameid:LEQU_GAME_ID,
                                        jscode:res.code
                                    },
                                    success:(re)=>{
                                        if(re.data && re.data.data && re.data.data.uid){
                                            var uid = re.data.data.uid;
                                            this.setStorageSync('openid', uid);
                                            tempData.openid = uid;                                         
                                            console.log('玩家openid=',tempData.openid);
                                            this.zsInit(tempData.openid);
                                        }
                                    }
                                });
                            }else{
                                console.log('登录失败！' + res.errMsg);
                            }
                        }
                    });
                }
            }
        },

        initLequConfig(){
            console.log('本地版本号=',LOCAL_VERSION);

            if(Laya.Browser.window.wx && Laya.Browser.window.wx.request){
                Laya.Browser.window.wx.request({
                    url:'https://account.api.snsfun.com/XyxApi/custom2',
                    data:{
                        gameid:LEQU_GAME_ID
                    },
                    method:'POST',
                    success:(result)=>{
                        console.log('result=',result);
                        if(result.statusCode == 200 && result.data){
                            console.log('后台自定义数据=',result.data);
                            var data = result.data;
                            auditStatus = (data['nonAuditVersion'] || '').indexOf(LOCAL_VERSION) < 0;
                            // 审核状态为真 则应该去去除脏套路的版本
                            console.log('审核状态=',auditStatus);
                            tempData.auditStatus = auditStatus;

                            jumpEnabled = auditStatus ? false : Number(data['jump']) == 1;
                            console.log('导出开关=',jumpEnabled);

                            fakeBtnEnabled = auditStatus ? false : (jumpEnabled ? Number(data['fakeBtn']) == 1 : false);
                            console.log('假返回按钮开关=',fakeBtnEnabled);

                            bannerTrickEnabled = auditStatus ? false : Number(data['bannerTrick']) == 1;
                            console.log('误触开关=',bannerTrickEnabled);

                            bannerTrickEggEnabled = bannerTrickEnabled ? (Number(data['bannerTrickEgg'])) == 1 : false;
                            console.log('砸蛋误触开关=',bannerTrickEggEnabled);
    
                            bannerTrickWordEnabled = bannerTrickEnabled ? (Number(data['bannerTrickWord'])) == 1 : false;
                            console.log('文字误触开关=',bannerTrickEggEnabled);

                            videoTrickEggEnabled = auditStatus ? false : Number(data['videoTrickEgg']) == 1;
                            console.log('视频误触开关=',videoTrickEggEnabled);
                        }
                    }
                });
            }     
        },

        isOldPlayer(){
            return oldPlayer;
        },

        isJumpEnabled(){            
            return jumpEnabled;
        },

        isBannerTrickEnabled(){
            return bannerTrickEnabled && isTrickedUser;
        },

        isBannerTrickEggEnabled(){
            return bannerTrickEggEnabled && isTrickedUser;
        },

        isBannerTrickWordEnabled(){
            return bannerTrickWordEnabled && isTrickedUser;
        },

        isFakeBtnEnabled(){            
            return fakeBtnEnabled;
        },   
        
        isVideoTrickEggEnabled(){
            return videoTrickEggEnabled && isTrickedUser;
        },
        
        //审核状态
        isAuditStatus(){            
            return auditStatus;
        },

        //加载基础分包
        loadBasePacks(callback:Function){
            if(Laya.Browser.window.wx){
                var list = [
                    'atlas',
                    'mainui',  
                    'music',
                    'dragonbones',
                ];                         
                var temp = ()=>{
                    var name = list.shift();
                    if(name){
                        const loadTask = Laya.Browser.window.wx.loadSubpackage({
                            name:name,
                            success:(res)=>{
                                console.log('分包加载成功=',name);
                                temp();
                            },
                            fail:(res)=>{
                                console.log('分包加载失败=',name);
                                list.unshift(name);
                                setTimeout(temp,1000);
                            }
                        });
                        // loadTask.onProgressUpdate(res => {
                        //     console.log('下载进度', res.progress)
                        //     console.log('已经下载的数据长度', res.totalBytesWritten)
                        //     console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
                        // })
                    }else{
                        this.onBaseResLoaded();
                        callback && callback();
                    }
                };
                temp();
            }else{
                this.onBaseResLoaded();
                callback && callback();
            }
        },

        //加载unity分包
        loadunityPacks(callback:Function){
            if(Laya.Browser.window.wx){
                var list = [ 
                    'unity',
                ];                         
                var temp = ()=>{
                    var name = list.shift();
                    if(name){
                        const loadTask = Laya.Browser.window.wx.loadSubpackage({
                            name:name,
                            success:(res)=>{
                                console.log('分包加载成功=',name);
                                temp();
                            },
                            fail:(res)=>{
                                console.log('分包加载失败=',name);
                                list.unshift(name);
                                setTimeout(temp,1000);
                            }
                        });
                        // loadTask.onProgressUpdate(res => {
                        //     console.log('下载进度', res.progress)
                        //     console.log('已经下载的数据长度', res.totalBytesWritten)
                        //     console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
                        // })
                    }else{
                        this.onBaseResLoaded();
                        callback && callback();
                    }
                };
                temp();
            }else{
                this.onBaseResLoaded();
                callback && callback();
            }
        },

        saveSkins(){
            this.setStorageSync('skins',tempData.skins.map((o)=>{return o;}));
        },

        init(){ 
            
            console.log('oldPlayer',this.getStorageSync('oldPlayer'));
            //老玩家标志
            if(this.getStorageSync('oldPlayer')) {
                oldPlayer = true;
                this.setStorageSync('isfirstplayer',false);
                tempData.isfirstplayer = 0;
            }
            else {
                this.setStorageSync('oldPlayer',true);
                this.setStorageSync('isfirstplayer',true);
                tempData.isfirstplayer = 1;
            }
            //获取玩家openid
            //this.initOpenid();

            // 获取后台数据
            this.initLequConfig();

            // 初始化签到数据
            this.initSignInData();
            // 初始化分享
            this.initShare();
            
            // 给全局变量赋值
            // 是否通过新手引导
            tempData.isyindaoover = this.hasStorageSync('isyindaoover') ? this.getStorageSync('isyindaoover','number') : 0;
            this.setStorageSync('isyindaoover',tempData.isyindaoover);
            // 金币
            tempData.gold = this.hasStorageSync('gold') ? this.getStorageSync('gold','number') : 100;
            this.setStorageSync('gold',tempData.gold);
            // 钻石
            tempData.diamond = this.hasStorageSync('diamond') ? this.getStorageSync('diamond','number') : 500;
            this.setStorageSync('diamond',tempData.diamond);
            // 体力数量
            tempData.strength = this.hasStorageSync('strength') ? this.getStorageSync('strength','number') : 50;
            this.setStorageSync('strength',tempData.strength);
            // 当前关卡
            tempData.level = this.hasStorageSync('level') ? this.getStorageSync('level','number') : 0;
            this.setStorageSync('level',tempData.level);
            // 当前阵容
            tempData.lineup = this.hasStorageSync('lineup') ? this.getStorageSync('lineup','object') : [1,2,3,4,5];
            this.setStorageSync('lineup',tempData.lineup);
            tempData.lineup1 = this.hasStorageSync('lineup1') ? this.getStorageSync('lineup1','object') : [1,2,3,4,5];
            this.setStorageSync('lineup1',tempData.lineup1);
            tempData.lineup2 = this.hasStorageSync('lineup2') ? this.getStorageSync('lineup2','object') : [1,2,3,4,5];
            this.setStorageSync('lineup2',tempData.lineup2);
            tempData.lineup3 = this.hasStorageSync('lineup3') ? this.getStorageSync('lineup3','object') : [1,2,3,4,5];
            this.setStorageSync('lineup3',tempData.lineup3);
            // 当前所有防御塔的等级
            // tempData.towerlevel = this.hasStorageSync('towerlevel') ? this.getStorageSync('towerlevel','object') : [    1,1,1,1,1,1,1,1,1,1,
            //                                                                                                             1,1,1,1,1,1,1,1,1,1,];
            tempData.towerlevel = this.hasStorageSync('towerlevel') ? this.getStorageSync('towerlevel','object') : [    1,1,1,1,1,1,0,0,0,0,
                                                                                                                        0,0,0,0,0,0,0,0,0,0,];
            this.setStorageSync('towerlevel',tempData.towerlevel);
            // 当前所有防御塔的碎片
            tempData.towerfragment = this.hasStorageSync('towerfragment') ? this.getStorageSync('towerfragment','object') : [   0,0,0,0,0,0,0,0,0,0,
                                                                                                                                0,0,0,0,0,0,0,0,0,0,];
            this.setStorageSync('towerfragment',tempData.towerfragment);
            // 当前签到礼包的领取状态
            tempData.signingiftarray = this.hasStorageSync('signingiftarray') ? this.getStorageSync('signingiftarray','object') : [ 0,0,0,0,0,0,0 ];
            this.setStorageSync('signingiftarray',tempData.signingiftarray);
            // 当天任务的完成状态
            tempData.missionstatus = this.hasStorageSync('missionstatus') ? this.getStorageSync('missionstatus','object') : [0];
            while (tempData.missionstatus.length < 4){
                tempData.missionstatus.push(0);
            }
            // 今天开启宝箱数量
            tempData.todayopenchesttimes = this.hasStorageSync('todayopenchesttimes') ? this.getStorageSync('todayopenchesttimes','number') : 0;
            // 今天通关次数
            tempData.todaysuccessgametimes = this.hasStorageSync('todaysuccessgametimes') ? this.getStorageSync('todaysuccessgametimes','number') : 0;
            // 今天升级炮塔次数
            tempData.todayupdatetowertimes = this.hasStorageSync('todayupdatetowertimes') ? this.getStorageSync('todayupdatetowertimes','number') : 0;
            // 今天击杀敌人个数
            tempData.todaykillenemytimes = this.hasStorageSync('todaykillenemytimes') ? this.getStorageSync('todaykillenemytimes','number') : 0;
            // 今天使用战力双倍次数
            tempData.todayusedoubleattacktimes = this.hasStorageSync('todayusedoubleattacktimes') ? this.getStorageSync('todayusedoubleattacktimes','number') : 0;
            // 今天打开幸运转盘次数
            tempData.todayopenturntabletime = this.hasStorageSync('todayopenturntabletime') ? this.getStorageSync('todayopenturntabletime','number') : 0;
            // 判断当前进入游戏是否为第二天
            let issecondday = this.isSecondDay();
            tempData.issecondday = issecondday;
            tempData.isseconddaymission = issecondday;
            this.setStorageSync('issecondday',issecondday);
            this.setStorageSync('isseconddaymission',issecondday);
            if(issecondday){
                // 重置本次登陆时间
                this.signInTime();
                tempData.todayopenchesttimes = 0;
                tempData.todaysuccessgametimes = 0;
                tempData.todayupdatetowertimes = 0;
                tempData.todaykillenemytimes = 0;
                tempData.todayusedoubleattacktimes = 0;    
                tempData.todayopenfreechesttime = 5;
                tempData.todayopenfreediamondtime = 5;
                tempData.todayopenturntabletime = 0;    
            }
            this.setStorageSync('todayopenchesttimes',tempData.todayopenchesttimes);
            this.setStorageSync('todaysuccessgametimes',tempData.todaysuccessgametimes);
            this.setStorageSync('todayupdatetowertimes',tempData.todayupdatetowertimes);
            this.setStorageSync('todaykillenemytimes',tempData.todaykillenemytimes);
            this.setStorageSync('todayusedoubleattacktimes',tempData.todayusedoubleattacktimes);
            this.setStorageSync('todayopenturntabletime',tempData.todayopenturntabletime);
            // 当前成就总等级
            tempData.achievementlevel = this.hasStorageSync('achievementlevel') ? this.getStorageSync('achievementlevel','number') : 0;
            // 当前成就值
            tempData.achievementnum = this.hasStorageSync('achievementnum') ? this.getStorageSync('achievementnum','number') : 0;
            // 当前每个成就的等级
            tempData.achievementarray = this.hasStorageSync('achievementarray') ? this.getStorageSync('achievementarray','object') : [0,0,0,0,0,0,0];
            this.setStorageSync('achievementlevel',tempData.achievementlevel);
            this.setStorageSync('achievementnum',tempData.achievementnum);
            this.setStorageSync('achievementarray',tempData.achievementarray);
            // 当前击杀的总敌人数
            tempData.killenemysum = this.hasStorageSync('killenemysum') ? this.getStorageSync('killenemysum','number') : 0;
            // 当前升级炮塔总和
            tempData.updatetowersum = this.hasStorageSync('updatetowersum') ? this.getStorageSync('updatetowersum','number') : 0;
            // 当前获得炮塔总和
            tempData.gettowersum = this.hasStorageSync('gettowersum') ? this.getStorageSync('gettowersum','number') : 0;
            // 当前参加转盘抽奖总和
            tempData.useturntablesum = this.hasStorageSync('useturntablesum') ? this.getStorageSync('useturntablesum','number') : 0;
            // 当前开启经典宝箱总和
            tempData.openfreechestsum = this.hasStorageSync('openfreechestsum') ? this.getStorageSync('openfreechestsum','number') : 0;
            // 当前开启经典宝箱总和
            tempData.openclassicchestsum = this.hasStorageSync('openclassicchestsum') ? this.getStorageSync('openclassicchestsum','number') : 0;
            // 当前开启至尊宝箱总和
            tempData.opensupremechestsum = this.hasStorageSync('opensupremechestsum') ? this.getStorageSync('opensupremechestsum','number') : 0;
            // 当前参加无尽模式总和
            tempData.attendendlesssum = this.hasStorageSync('attendendlesssum') ? this.getStorageSync('attendendlesssum','number') : 0;
            this.setStorageSync('killenemysum',tempData.killenemysum);
            this.setStorageSync('updatetowersum',tempData.updatetowersum);
            this.setStorageSync('gettowersum',tempData.gettowersum);
            this.setStorageSync('useturntablesum',tempData.useturntablesum);
            this.setStorageSync('openfreechestsum',tempData.opensupremechestsum);
            this.setStorageSync('openclassicchestsum',tempData.opensupremechestsum);
            this.setStorageSync('opensupremechestsum',tempData.opensupremechestsum);
            this.setStorageSync('attendendlesssum',tempData.attendendlesssum);

            // 今天开启免费钻石次数
            tempData.todayopenfreediamondtime = this.hasStorageSync('todayopenfreediamondtime') ? this.getStorageSync('todayopenfreediamondtime','number') : 5;
            platform.setStorageSync('todayopenfreediamondtime',tempData.todayopenfreediamondtime);
            // 下次领取免费钻石的时间戳
            let nowtime = new Date().getTime();
            tempData.nextgetdiamondtime = this.hasStorageSync('nextgetdiamondtime') ? this.getStorageSync('nextgetdiamondtime','number') : nowtime;
            platform.setStorageSync('nextgetdiamondtime',tempData.nextgetdiamondtime);
            // 今天开启免费宝箱次数
            tempData.todayopenfreechesttime = this.hasStorageSync('todayopenfreechesttime') ? this.getStorageSync('todayopenfreechesttime','number') : 5;
            platform.setStorageSync('todayopenfreechesttime',tempData.todayopenfreechesttime);
            // 下次领取至尊宝箱的时间戳
            nowtime = new Date().getTime();
            tempData.nextgetfreechesttime = this.hasStorageSync('nextgetfreechesttime') ? this.getStorageSync('nextgetfreechesttime','number') : nowtime;
            platform.setStorageSync('nextgetfreechesttime',tempData.nextgetfreechesttime);
            // 下次领取至尊宝箱的时间戳
            nowtime = new Date().getTime();
            tempData.nextgetsupremechesttime = this.hasStorageSync('nextgetsupremechesttime') ? this.getStorageSync('nextgetsupremechesttime','number') : nowtime;
            platform.setStorageSync('nextgetsupremechesttime',tempData.nextgetsupremechesttime);
            // 今天限量礼包的领取状态
            tempData.limitgiftstatus = this.hasStorageSync('limitgiftstatus') ? this.getStorageSync('limitgiftstatus','object') : [0,0,0];
            platform.setStorageSync('limitgiftstatus',tempData.limitgiftstatus);
            // 下次领取免费钻石的时间戳
            nowtime = new Date().getTime();
            tempData.freediamondcooldowntime = this.hasStorageSync('freediamondcooldowntime') ? this.getStorageSync('freediamondcooldowntime','number') : nowtime;
            platform.setStorageSync('freediamondcooldowntime',tempData.freediamondcooldowntime);
            // 下次领取免费宝箱的时间戳
            nowtime = new Date().getTime();
            tempData.freechestdcooldowntime = this.hasStorageSync('freechestdcooldowntime') ? this.getStorageSync('freechestdcooldowntime','number') : nowtime;
            platform.setStorageSync('freechestdcooldowntime',tempData.freechestdcooldowntime);
            //是否特定场景值进来的用户
            if(Laya.Browser.window.wx && Laya.Browser.window.wx.getLaunchOptionsSync){
                var info = Laya.Browser.window.wx.getLaunchOptionsSync();
                if(info){
                    var scene = Number(info.scene);
                    var shareTicket = info.shareTicket;
                    console.log('launch options =',info);
                    if(scene == 1095 || scene == 1037 || (scene == 1044 && shareTicket)){
                        isTrickedUser = true;
                        console.log('isTrickedUser=',isTrickedUser);
                    }
                }
            }
            console.log('本地数据初始化=',tempData);
        },        

        isConnected(){
            return isConnected;
        },

        //初始化签到数据
        initSignInData(){
            function reset(){
                tempData.signInDays = 0;
                tempData.signInDays2 = 0;
                tempData.signInStatus = 1;
                
            }
            console.log('SIGNINSTAMP',this.hasStorageSync('SIGNINSTAMP'));
            if(this.hasStorageSync('SIGNINSTAMP')){
                var signInStamp = this.getStorageSync('SIGNINSTAMP','number');
                var thatDay = new Date(signInStamp).toDateString();
                var dayNextThatDay = new Date(signInStamp + 24 * 60 * 60 * 1000).toDateString();//签到日期的明天
                var today = new Date().toDateString();
                console.log('上次签到日期=',thatDay,'上次签到日期的第二天=',dayNextThatDay,',今天=',today);

                if(thatDay == today || dayNextThatDay == today){
                    console.log('签到日期是今天');                    

                    if(this.hasStorageSync('SIGNINDAYS')){
                        tempData.signInDays = this.getStorageSync('SIGNINDAYS','number');
                    }else{
                        tempData.signInDays = 0;
                    }
                    if(this.hasStorageSync('SIGNINDAYS2')){
                        tempData.signInDays2 = this.getStorageSync('SIGNINDAYS2','number');
                    }else{
                        tempData.signInDays2 = 0;
                    }
                    tempData.signInStatus = dayNextThatDay == today ? 1 : 0;
                    if(dayNextThatDay != today){
                        this.setStorageSync('isclick_qiandao',0);
                    }
                    
                }else{
                    if(this.hasStorageSync('SIGNINDAYS')){
                        tempData.signInDays = this.getStorageSync('SIGNINDAYS','number');
                    }else{
                        tempData.signInDays = 0;
                    }  
                    tempData.signInDays2 = tempData.signInDays;
                    console.log('用户签到不连续');
                    tempData.signInStatus = 1;
                    // reset();
                }                
            }else{
                console.log('用户未曾签到过');
                reset();                
            }

            //7天重置
            if(tempData.signInDays == 7 && tempData.signInStatus == 1){
                console.log('连续签到7天 签到数据重置');
                reset();
            }

            console.log('用户signInDays=',tempData.signInDays,',signInStatus=',tempData.signInStatus);
        },

        //签到
        signIn(){
            if(tempData.signInStatus == 1){
                tempData.signInDays++;
                tempData.signInStatus = 0;
                this.setStorageSync('SIGNINDAYS',tempData.signInDays);
                this.setStorageSync('SIGNINDAYS2',tempData.signInDays2);
                this.setStorageSync('SIGNINSTAMP',new Date().getTime());
                console.log('tempData.signInDays',tempData.signInDays);
                return true;

            }else{
                console.log('不可签到');
                return false;
            }
        },

        // 登陆时间戳
        signInTime(){
            let time = new Date().getTime();
            tempData.SIGNINTIME = time;
            this.setStorageSync('SIGNINTIME',time);
        },

        // 进入礼物界面时间戳
        openGiftuiTime(){
            let time = new Date().getTime();
            tempData.OPENGIFTUITIME = time;
            this.setStorageSync('OPENGIFTUITIME',time);
        },

        // 离开时间戳
        leaveTime(){
            let time = new Date().getTime();
            tempData.LEAVETIME = time;
            this.setStorageSync('LEAVETIME',time);
        },

        // 判断当前登录是否为第二天
        isSecondDay(){
            if(this.hasStorageSync('SIGNINTIME')){
                var SIGNINTIME = this.getStorageSync('SIGNINTIME','number');
                var thatDay = new Date(SIGNINTIME).toDateString();
                var dayNextThatDay = new Date(SIGNINTIME + 24 * 60 * 60 * 1000).toDateString();//签到日期的明天
                var today = new Date().toDateString();
                console.log('上次登录日期=',thatDay,'上次登录日期的第二天=',dayNextThatDay,',今天=',today);
        
                if(thatDay == today || dayNextThatDay == today){
                    if(thatDay == today){
                        console.log('登录日期是今天，不重置礼物宝箱'); 
                        tempData.SIGNINTIME = this.getStorageSync('SIGNINTIME','number');                
                        return false;
                    }else if(dayNextThatDay == today){
                        console.log('登录日期是昨天，重置礼物宝箱');  
                        return true;
                    }
                    
                }else{
                    console.log('间隔超过1天，重置宝箱');
                    return true;
                }   
            }
            else{
                console.log('用户未曾登录，重置礼物宝箱');
                return true;
            }
                        
        },

        saveGold(){
            this.setStorageSync('gold',tempData.gold);
        },

        saveDiamond(){
            this.setStorageSync('diamond',tempData.diamond);
        },

        saveLevel(){
            this.setStorageSync('level',tempData.level);
        },

        // 分享标题和图片
        getShareInfo(){
            return {
                title:'[有人@我]最热歌曲与全新节奏的完美结合，给你带来畅爽的音乐盛宴！',
                imageUrl:'res/dragonbones/share.png'
            }
        },

        // 初始化胶囊按钮的分享信息
        initShare(){
            if(Laya.Browser.window.wx){
                if(Laya.Browser.window.wx.showShareMenu){
                    Laya.Browser.window.wx.showShareMenu({
                        withShareTicket: true
                    });
                }

                if(Laya.Browser.window.wx.onShareAppMessage){

                    let info = this.getShareInfo();
                    Laya.Browser.window.wx.onShareAppMessage(()=>{
                        return{
                            title:info.title,
                            imageUrl:info.imageUrl
                        };
                    });
                }
            }
        },

        onBaseResLoaded(){
            if(Laya.Browser.window.wx){
                Laya.Browser.window.wx.onShow(()=>{      
                    console.log('wx onShow');
                    Laya.timer.scale = 1;
                    soundMgr.playMusic(GamingData.nowbgmusic,0);
                    Laya.stage.event('wxOnShow');
                    let currentStamp = new Date().getTime();
                    if(currentStamp - timestamp > 1.5 * 1000){
                        console.log('分享成功');
                        shareSuccess && shareSuccess();
                    }else{
                        console.log('分享失败');                     
                        shareFail && shareFail();
                    }
                    shareComplete && shareComplete();
                    shareSuccess = null;
                    shareFail = null;
                    shareComplete = null;
                });

                Laya.Browser.window.wx.onHide(()=>{   
                    console.log('wx hide');
                    timestamp = new Date().getTime();
                    Laya.stage.event('wxOnHide');
                    Laya.timer.scale = 0;
                });
            }            
        },

        // 普通的分享
        share(success:Function=null,fail:Function=()=>{ this.showToast('分享失败') },complele:Function=null){            
            if(Laya.Browser.window.wx && Laya.Browser.window.wx.shareAppMessage){
                let info = this.getShareInfo();
                Laya.Browser.window.wx.shareAppMessage({
                    title:info.title,
                    imageUrl:info.imageUrl
                });
                shareSuccess = success;
                shareFail = fail;
                shareComplete = complele;
            }else{
                success && success();
            }
        },

        // 微信展示小标签
        showToast(str:string){
            console.log(str);
            if(Laya.Browser.window.wx && Laya.Browser.window.wx.showToast){
                Laya.Browser.window.wx.showToast({
                    title:str,
                    icon:'none'
                });
            }
        },

        vibrateShortWhitCD(){             
            //return;            
            if(vibrateTooOften){
                return;
            }
            vibrateTooOften = true;
            // if(vibrateCoolDownTimeout){
            //     clearTimeout(vibrateCoolDownTimeout);
            // }
        },

        vibrateShort(){
            //return;
            if(Laya.Browser.window.wx && Laya.Browser.window.wx.vibrateShort){
                Laya.Browser.window.wx.vibrateShort();
            }
        },

        vibrateLong(){
            if(Laya.Browser.window.wx && Laya.Browser.window.wx.vibrateLong){
                Laya.Browser.window.wx.vibrateLong();
            }else if(Laya.Browser.window.wx && Laya.Browser.window.wx.vibrateShort){                
                Laya.Browser.window.wx.vibrateShort();
                setTimeout(()=>{Laya.Browser.window.wx.vibrateShort();},15);
                setTimeout(()=>{Laya.Browser.window.wx.vibrateShort();},30);
            }
        },

        setSharedCanvasSize(width:number,height:number){
            if(Laya.Browser.window.wx){
                var openDataContext = Laya.Browser.window.wx.getOpenDataContext();
                if(openDataContext){                    
                    var sharedCanvas = openDataContext.canvas;
                    sharedCanvas.width = width;
                    sharedCanvas.height = height;
                }
            }
        },

        postMessage(msg:any){
            if(Laya.Browser.window.wx){
                Laya.Browser.window.wx.getOpenDataContext().postMessage(msg);
            }
        },

        setUserCloudStorage:function(key:any,value:any){
            if(Laya.Browser.window.wx){
                Laya.Browser.window.wx.setUserCloudStorage({
                    KVDataList:[{
                        key:key.toString(),
                        value:value.toString()
                    }]
                });
            }
        },

        isIphoneX(){
            if(Laya.Browser.window.wx && Laya.Browser.window.wx.getSystemInfoSync){
                var info = Laya.Browser.window.wx.getSystemInfoSync();                
                var model = info.model;                
                if(model && (model.indexOf('iPhone X') > -1 || model.indexOf('iPhone 1') > -1)){
                    return true;
                }                
            }
            return false;
        },  

        //离线奖励相关
        preGetOfflineReward(){
            let currentStamp = new Date().getTime();
            // last time get offline reward stamp
            let lgorstamp = this.hasStorageSync('lgorstamp') ? this.getStorageSync('lgorstamp','number') : currentStamp;             
            this.setStorageSync('lgorstamp',currentStamp);
        },

        getOfflineReward(saveScale:number=0){
            let currentStamp = new Date().getTime();
            // last time get offline reward stamp
            let lgorstamp = this.hasStorageSync('lgorstamp') ? this.getStorageSync('lgorstamp','number') : currentStamp;                        

            let pastMinSec = clampf(currentStamp - lgorstamp,0,10*60*60*1000);//10h 60m 60s 1000ms
            let pastMin = Math.floor(pastMinSec / (60 * 1000));

            console.log('上次记录的离线时间戳=',lgorstamp,' 当前时间戳=',currentStamp,' 历时min=',pastMin);

            let value = 1; //// todo
            let offlineReward = Math.floor(pastMin * value);

            if(saveScale>0){
                tempData.diamond += offlineReward * saveScale;
                this.saveCoin();
                this.showToast('恭喜获得离线奖励' + (offlineReward * saveScale) + '金币！');
                this.setStorageSync('lgorstamp',currentStamp);
            }

            return offlineReward;
        },   
        
        alyVideoDot(videoPosition:string,result:string,ext?:string){
            if(Laya.Browser.window.wx && Laya.Browser.window.wx.aly && Laya.Browser.window.wx.aly.videoDot){
                console.log('alyVideoDot=',videoPosition,result);
                Laya.Browser.window.wx.aly.videoDot(videoPosition,result,ext);
            }
        },

        createVideo(complete:Function=null,uncomplete:Function=null,error:Function=null,key:string,adtype:number){     
            if(Laya.Browser.window.wx && Laya.Browser.window.wx.createRewardedVideoAd){
                if(tempData.lastadtype == adtype){
                    
                }else{
                    tempData.lastadtype = adtype;
                    video = null;
                    if(adtype == 1){
                        console.log('创建6-15s广告');
                        video = Laya.Browser.window.wx.createRewardedVideoAd({
                            adUnitId:vedioAdUid615,
                        });
                    }else if(adtype == 2){
                        console.log('创建6-30s广告');
                        video = Laya.Browser.window.wx.createRewardedVideoAd({
                            adUnitId:vedioAdUid630,
                        });
                    }else if(adtype == 3){
                        console.log('创建6-60s广告');
                        video = Laya.Browser.window.wx.createRewardedVideoAd({
                            adUnitId:vedioAdUid660,
                        });
                    }else{
                        this.showToast("广告 id 错误");
                    }
                }

                video.load().then(()=>{
                    Laya.stage.event('wxOnHide');
                    video.show();
                }).catch((err)=>{

                });                

                video.offClose();
                video.onClose((res)=>{
                    if(res && res.isEnded || res === undefined){
                        complete && complete();
                        this.alyVideoDot(key,'success');
                    }else{                    
                        uncomplete && uncomplete();
                        this.alyVideoDot(key,'fail');
                    }
                    video.offClose();
                    Laya.stage.event('wxOnShow');
                });

                video.offError();
                video.onError((err)=>{
                    this.showToast('视频加载中');
                    this.share(complete,uncomplete);                                        
                });

                this.alyVideoDot(key,'show');

            }else{
                complete && complete();
            }
        },

        createBanner(adtype:number){     
            if(Laya.Browser.window.wx && Laya.Browser.window.wx.createBannerAd){

                var info = Laya.Browser.window.wx.getSystemInfoSync();
                var screenWidth = info.screenWidth;
                var screenHeight = info.screenHeight;
                
                if(adtype == 1){
                    banner = Laya.Browser.window.wx.createBannerAd({
                        adUnitId:bannerAd1Uid,
                        style: {left: 0,top: 0,width: 300},
                        adIntervals: 30, // 自动刷新频率不能小于30秒
                    });
                }else if(adtype == 2){
                    banner = Laya.Browser.window.wx.createBannerAd({
                        adUnitId:bannerAd2Uid,
                        style: {left: 0,top: 0,width: 300},
                        adIntervals: 30, // 自动刷新频率不能小于30秒
                    });
                }else if(adtype == 3){
                    banner = Laya.Browser.window.wx.createBannerAd({
                        adUnitId:bannerAd3Uid,
                        style: {left: 0,top: 0,width: 300},
                        adIntervals: 30, // 自动刷新频率不能小于30秒
                    });
                }else{
                    this.showToast("banner id 错误");
                }

                banner.onResize(()=>{
                    banner.style.left = (screenWidth - banner.style.realWidth) / 2;
                    banner.style.top = screenHeight - banner.style.realHeight + (this.isIphoneX() ? -10 : 0);////
                });

                banner.onError((err)=>{
                    console.log('banner获取失败' + err)                                      
                });

                banner.hide(); 

                return banner;
            }

        },

        preloadInterstitialAd(){
            console.log('platform preloadInterstitialAd');
            if(interstitialAd){
                interstitialAd.destroy();
            }
            if(Laya.Browser.window.wx && Laya.Browser.window.wx.createInterstitialAd){
                interstitialAd = Laya.Browser.window.wx.createInterstitialAd({
                    adUnitId:'adunit-420b0b0cd3e6fc15'
                });                                
                interstitialAd.onError((err)=>{    
                    console.log('interstitialAd onError=',err);
                    Laya.stage.event('wxLoadInterstitialAdFailed',null);
                });
                interstitialAd.onClose(()=>{
                    Laya.stage.event('wxLoadInterstitialAdFailed',null);
                });
                interstitialAd.load();
            }
        },

        showInterstitialAd(){
            if(interstitialAd){
                interstitialAd.show().catch((err)=>{
                    console.log('interstitialAd show catch error=',err);                    
                    Laya.stage.event('wxLoadInterstitialAdFailed',null);
                });
            }else{
                Laya.stage.event('wxLoadInterstitialAdFailed',null);
            }
        },

    };
})();

export default platform;