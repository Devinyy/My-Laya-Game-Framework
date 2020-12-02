import tempData from "./tempData";
import urls from "./urls";

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

// 音乐相关函数
var wxAudioMgr = (()=>{
    var sounds = {};
    var music = null;    
    return{        

        StopSound(audio){
            if(audio){
                audio.stop();
            }
        },

        playMusic(url:string,loop:boolean=false){
            //这个就不复用了 反正就一个bgm
            console.log('play music==',url);
            if(music){
                music.destroy();
            }
            music = Laya.Browser.window.wx.createInnerAudioContext();
            music.src = url;
            music.loop = loop;
            ////music.playbackRate = 2.0;////
            music.play();                       
            return music;
        },

        stopMusic(url:string){
            console.log('stop music==',url);
            if(music){
                music.destroy();
                music = null;
            }            
        },

        pauseMusic(url:string){
            console.log('pause music==',url);
            if(music){
                music.pause();
            }
        },

        resumeMusic(url:string){
            console.log('resume music==',url);
            if(music){                
                music.play();
            }
        }
        
    }
})();

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

    //记录已经加载的分包key 问题是进入开始界面所有歌曲都是可以播放的状态... 这就很难过了 ...
    var gameLayerEnterTimes = 0;

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
                    'unity',   
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

        saveSkins(){
            this.setStorageSync('skins',tempData.skins.map((o)=>{return o;}));
        },

        init(){ 
            
            // 给全局变量赋值
            tempData.diamond = this.hasStorageSync('diamond') ? this.getStorageSync('diamond','number') : 0;
            this.setStorageSync('diamond',tempData.diamond);
            tempData.level = this.hasStorageSync('level') ? this.getStorageSync('level','number') : 1;
            tempData.baoxianglingqutimes = this.hasStorageSync('baoxianglingqutimes') ? this.getStorageSync('lebaoxianglingqutimesvel','number') : 0;
            tempData.time = this.hasStorageSync('baoxianglingqutimes') ? this.hasStorageSync('baoxianglingqutimes','number') : 0;
            
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
            
            // 歌曲是否解锁
            tempData.songs = this.hasStorageSync('songs') ? this.getStorageSync('songs','object') : [1,1,0,1000,0,1000,0,0,1500,0]; 

            // 分数星星相关
            tempData.stars = this.hasStorageSync('stars') ? this.getStorageSync('stars','object') : [0]; 
            tempData.highscores = this.hasStorageSync('highscores') ? this.getStorageSync('highscores','object') : [0]; 
            // 补全所有星星
            while (tempData.stars.length < urls.guanqiamusic.length){
                tempData.stars.push(0);
            }
            // 补全所有最高分
            while (tempData.highscores.length < urls.guanqiamusic.length){
                tempData.highscores.push(0);
            }

            //皮肤相关
            tempData.skin = this.hasStorageSync('skin') ? this.getStorageSync('skin','object') : [0,0,-1]; // 正在使用的皮肤
            this.setStorageSync('skin',tempData.skin);
            tempData.skinsuipian = this.hasStorageSync('skinsuipian') ? this.getStorageSync('skinsuipian','object') : [0,0,0]; // 目前各个部位已有的皮肤碎片数量
            this.setStorageSync('skinsuipian',tempData.skinsuipian);
            tempData.skins = this.hasStorageSync('skins') ? this.getStorageSync('skins','object') : [[111,0,0,0,0,0,0,0],
                                                                                                     [111,0,0,0,0,0,0,0],
                                                                                                     [0,0,0,0,0,0,0,0],]; // 所有的皮肤列表
            this.setStorageSync('skins',tempData.skins);
            // 皮肤加成相关
            tempData.moneyup = this.hasStorageSync('moneyup') ? this.getStorageSync('moneyup','number') : 1;
            tempData.scoreup = this.hasStorageSync('scoreup') ? this.getStorageSync('scoreup','number') : 1;

            // 礼包领取相关
            tempData.giftstatuslist = this.hasStorageSync('giftstatuslist') ? this.getStorageSync('giftstatuslist','object') : [0];
            // 补全所有礼包状态
            let i = 1;
            while (tempData.giftstatuslist.length < urls.gifts[0].Online.length){
                let num = 0;
                for(let j=0;j<=i;j++){
                    num += urls.gifts[0].Online[j].time;
                }
                tempData.giftstatuslist.push(num);
                i++;
            }
            this.setStorageSync('giftstatuslist',tempData.giftstatuslist);
            // 限量宝箱的领取状态
            tempData.limitgiftstatus = this.hasStorageSync('limitgiftstatus') ? this.getStorageSync('limitgiftstatus','object') : [0];
            while (tempData.limitgiftstatus.length < urls.gifts[0].Limit.length){
                tempData.limitgiftstatus.push(0);
            }
            this.setStorageSync('limitgiftstatus',tempData.limitgiftstatus);
            // 在线宝箱的领取状态
            tempData.onlinegiftstatus = this.hasStorageSync('onlinegiftstatus') ? this.getStorageSync('onlinegiftstatus','object') : [];
            while(tempData.onlinegiftstatus.length<2){
                let list = [];
                while (list.length < urls.gifts[0].Online.length){
                    list.push(0);
                }
                tempData.onlinegiftstatus.push(list);
            }
            this.setStorageSync('onlinegiftstatus',tempData.onlinegiftstatus);

            // 当天任务的完成状态
            tempData.missionstatus = this.hasStorageSync('missionstatus') ? this.getStorageSync('missionstatus','object') : [0];
            while (tempData.missionstatus.length < 4){
                tempData.missionstatus.push(0);
            }
            this.setStorageSync('missionstatus',tempData.missionstatus);

            // 钥匙数量
            tempData.key = this.hasStorageSync('key') ? this.getStorageSync('key','number') : 0;
            this.setStorageSync('key',tempData.key);

            // 体力数量
            tempData.strength = this.hasStorageSync('strength') ? this.getStorageSync('strength','number') : 20;
            this.setStorageSync('strength',tempData.strength);

            // 视频卡数量
            tempData.vediocard = this.hasStorageSync('vediocard') ? this.getStorageSync('vediocard','number') : 0;
            this.setStorageSync('vediocard',tempData.vediocard);

            // 今天的解锁皮肤数
            tempData.todayjiesuoskins = this.hasStorageSync('todayjiesuoskins') ? this.getStorageSync('todayjiesuoskins','number') : 0;
            this.setStorageSync('todayjiesuoskins',tempData.todayjiesuoskins);

            // 今天的解锁歌曲数
            tempData.todayjiesuosongs = this.hasStorageSync('todayjiesuosongs') ? this.getStorageSync('todayjiesuosongs','number') : 0;
            this.setStorageSync('todayjiesuosongs',tempData.todayjiesuosongs);

            // 今天看视频观看数
            tempData.todayvediotimes = this.hasStorageSync('todayvediotimes') ? this.getStorageSync('todayvediotimes','number') : 0;
            this.setStorageSync('todayvediotimes',tempData.todayvediotimes);

            // 今天的在线宝箱领取数量
            tempData.todaygifttimes = this.hasStorageSync('todaygifttimes') ? this.getStorageSync('todaygifttimes','number') : 0;
            this.setStorageSync('todaygifttimes',tempData.todaygifttimes);

            // 今天的游戏次数
            tempData.todaygametimes = this.hasStorageSync('todaygametimes') ? this.getStorageSync('todaygametimes','number') : 0;  
            this.setStorageSync('todaygametimes',tempData.todaygametimes);

            // 今天的领取补给宝箱次数
            tempData.todaysupplygifttimes = this.hasStorageSync('todaysupplygifttimes') ? this.getStorageSync('todaysupplygifttimes','number') : 0; 
            this.setStorageSync('todaysupplygifttimes',tempData.todaysupplygifttimes);

            // 今天的获得的金币数
            tempData.todaymoney = this.hasStorageSync('todaymoney') ? this.getStorageSync('todaymoney','number') : 0;
            this.setStorageSync('todaymoney',tempData.todaymoney);

            // 今天的消耗体力数量
            tempData.todayusestrength = this.hasStorageSync('todayusestrength') ? this.getStorageSync('todayusestrength','number') : 0; 
            this.setStorageSync('todayusestrength',tempData.todayusestrength);

            // 今天的限定皮肤观看次数
            tempData.todaylimitskintime = this.hasStorageSync('todaylimitskintime') ? this.getStorageSync('todaylimitskintime','number') : 0; 
            this.setStorageSync('todaylimitskintime',tempData.todaylimitskintime);

            // 今天的转盘观看次数
            tempData.todayturntabletime = this.hasStorageSync('todayturntabletime') ? this.getStorageSync('todayturntabletime','number') : 0; 
            this.setStorageSync('todayturntabletime',tempData.todayturntabletime);

            // 判断当前进入游戏是否为第二天
            let issecondday = this.isSecondDay();
            tempData.issecondday = issecondday;
            tempData.isseconddaymission = issecondday;
            this.setStorageSync('issecondday',issecondday);
            this.setStorageSync('isseconddaymission',issecondday);
            if(issecondday){
                // 重置本次登陆时间
                this.signInTime();
                tempData.todaygametimes = 0;
                tempData.todayjiesuosongs = 0;
                tempData.todaymoney = 0;
                tempData.todaygifttimes = 0;
                tempData.todayjiesuoskins = 0;
                tempData.todaysupplygifttimes = 0;
                tempData.todayusestrength = 0;
                tempData.todayvediotimes = 0;
                tempData.todaylimitskintime = 0;
                tempData.todayturntabletime = 0;
            }

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

        // 查看是否有此值存储
        hasStorageSync(key:string){
            var value = Laya.LocalStorage.getItem(key);
            return !(value === null || value === undefined || value === '');
        },

        // 获取本地存储的键值
        getStorageSync(key:string,type:string){
            if(type == 'object'){
                // let getvalue = Laya.LocalStorage.getJSON(key);
                // console.log('getJSON' + key , getvalue);                
                // return Laya.LocalStorage.getJSON(key);
                var str = Laya.LocalStorage.getItem(key);
                try{
                    console.log('getJSON' + key , JSON.parse(str));             
                    return JSON.parse(str);
                }catch(err){
                    return null;
                }

            }else{
                var value = Laya.LocalStorage.getItem(key);
                switch(type){
                    default:
                    case 'string':
                    return value;
                    case 'number':
                    return Number(value);
                    case 'boolean':
                    return value == 'true';
                }                
            }
        },        

        // 往本地存数值
        setStorageSync(key:string,value:any){
            if(typeof value == 'object'){
                console.log('setJSON',key,value);                
                localStorage.setItem(key,JSON.stringify(value));
                // Laya.LocalStorage.setJSON(key,value);
            }else{
                Laya.LocalStorage.setItem(key,value);
            }
        },

        // 往本地删除数据
        deleteStorageSync(key:string){
            Laya.LocalStorage.removeItem(key);
        },

        //初始化签到数据
        initSignInData(){
            function reset(){
                tempData.signInDays = 0;
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
                    tempData.signInStatus = dayNextThatDay == today ? 1 : 0;
                    if(dayNextThatDay != today){
                        this.setStorageSync('isclick_qiandao',0);
                    }
                    
                }else{
                    console.log('用户签到不连续');
                    reset();
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
                });
            }            
        },

        // 普通的分享
        share(success:Function=null,fail:Function=null,complele:Function=null){            

            if(Laya.Browser.window.wx && Laya.Browser.window.wx.shareAppMessage){

                if(!tempData.isfirstplayer){
                    if(!tempData.isfirstshare){
                        this.aldSendEvent('游戏分享人数');
                    }
                    this.aldSendEvent('游戏分享次数');
                }

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

        // 打印数据
        console(str){
            if(Laya.Browser.window.wx && Laya.Browser.window.wx.showToast){
            }else{
                console.log(str);
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
            vibrateCoolDownTimeout = setTimeout(()=>{
                this.vibrateShort();
                vibrateTooOften = false;
            },30);
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

        playEffect(path:string){
            console.log('playEffect=',path);
            Laya.SoundManager.playSound(path,1);
        },

        stopSound(path:string){            
            Laya.SoundManager.stopSound(path);
        },

        playMusic(path:string,loop:number):any{
            console.log('play music=',path);
            if(Laya.Browser.window.wx){ 
                // music = Laya.SoundManager.playMusic(path,loop); 
                if(loop){
                    var loopflag:boolean = false;
                }
                music = wxAudioMgr.playMusic(path,loopflag);
                return music;
            }else{
                music = Laya.SoundManager.playMusic(path,loop); 
                return music;
            }            
        },

        stopMusic(path:string=''){
            console.log('stop music=',path);
            if(Laya.Browser.window.wx){
                wxAudioMgr.stopMusic(path);
            }else{
                Laya.SoundManager.stopMusic();
            }
        },

        pauseMusic(path:string){
            console.log('pause music=',path);
            if(Laya.Browser.window.wx){
                wxAudioMgr.pauseMusic(path);
            }else{
                if(music){
                    music.pause();
                }
            }
        },

        resumeMusic(path:string){
            console.log('resume music=',path);
            if(Laya.Browser.window.wx){
                wxAudioMgr.resumeMusic(path);
            }else{
                if(music){
                    music.resume();
                }
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

        // 发送自定义事件函数
        /**
		 * 使用 EventDispatcher 对象注册指定类型的事件侦听器对象，以使侦听器能够接收事件通知。
		 * @param eventname 事件的类型。
		 * @param keydata (可选)传入的事件参数与值，格式为 {'参数key' : '参数value'}
		 */
        aldSendEvent(eventname:string , keydata?:{} ){
            if(Laya.Browser.window.wx){
                Laya.Browser.window.wx.aldSendEvent(eventname,keydata);
            }
        },

        //关卡开始
        /**
		 * 使用 EventDispatcher 对象注册指定类型的事件侦听器对象，以使侦听器能够接收事件通知。
		 * @param stageId   关卡ID
		 * @param stageName 关卡名称
		 * @param userId    用户ID（可选）
		 */
        aldStageonStart(stageId:number,stageName:string,userId?:string){
            if(!userId) userId = '';
            if(Laya.Browser.window.wx){
                Laya.Browser.window.wx.aldStage.onStart({
                    stageId   : String(stageId), //关卡ID， 必须是1 || 2 || 1.1 || 12.2 格式 该字段必传
                    stageName : stageName,//关卡名称，该字段必传
                    userId    : userId //用户ID
                  });
            }
        },

        //关卡进行中
        /**
		 * 使用 EventDispatcher 对象注册指定类型的事件侦听器对象，以使侦听器能够接收事件通知。
		 * @param stageId   关卡ID
		 * @param stageName 关卡名称
		 * @param userId    用户ID（可选）
         * @param event     事件类型  （1、payStart:发起支付 2、paySuccess:支付成功 3、payFail:支付失败 4、tools:使用道具 5、award:奖励）
		 * @param params    事件参数
		 * @param params.itemName  商品/道具名称 
         * @param params.itemId    商品/道具ID（可选）
         * @param params.itemCount 商品/道具数量（可选，默认：1） 
         * @param params.desc      商品/道具描述（可选）
         * @param params.itemMoney 商品/道具价格（可选 默认:0）
		 */
        aldStageonRunning(stageId:string,stageName:string,event:string,params:{ itemName:string, itemId?:string, itemCount?:number, desc?:string, itemMoney?:Number},userId?:'',){
            if(!params.itemId) params.itemId = '';
            if(!params.itemCount) params.itemCount = 1;
            if(!params.desc) params.desc = '';
            if(!params.itemMoney) params.itemMoney = 0;
            if(!userId) userId = '';
            if(Laya.Browser.window.wx){
                // 在关卡中使用道具
                Laya.Browser.window.wx.aldStage.onRunning({
                    stageId   : stageId,
                    stageName : stageName,
                    userId    : userId,
                    event     : event,
                    params    : params,
                })
            }
        },

        //关卡结束
        /**
		 * 使用 EventDispatcher 对象注册指定类型的事件侦听器对象，以使侦听器能够接收事件通知。
		 * @param stageId      关卡ID
		 * @param stageName    关卡名称
		 * @param userId       用户ID（可选）
         * @param success      事件类型  （1、true:关卡完成 2、false:关卡失败）
		 * @param params       事件参数
         * @param params.desc  对关卡失败/成功的描述（可选）
		 */
        aldStageonEnd(stageId:string,stageName:string,success:boolean,params:{desc?:string,},userId?:'',){
            if(!params.desc) params.desc = '';
            if(!userId) userId = '';
            let event = '';
            success ? event='complete' : event='fail';
            if(Laya.Browser.window.wx){
                // 在关卡中使用道具
                Laya.Browser.window.wx.aldStage.onEnd({
                    stageId   : stageId,
                    stageName : stageName,
                    userId    : userId,
                    event     : event,
                    params    : params,
                })
            }
        },

    };
})();

export default platform;