(function () {
    'use strict';

    var Scene = Laya.Scene;
    var REG = Laya.ClassUtils.regClass;
    var ui;
    (function (ui) {
        var test;
        (function (test) {
            class StartSceneUI extends Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("test/StartScene");
                }
            }
            test.StartSceneUI = StartSceneUI;
            REG("ui.test.StartSceneUI", StartSceneUI);
        })(test = ui.test || (ui.test = {}));
    })(ui || (ui = {}));

    var tempData = {
        'openid': false,
        'diamond': 0,
        'level': 1,
        'last_x': 0,
        'last_z': 0,
        'horizonspeed': 0.04,
        'all_distance': 0,
        'fasheweizhi': 0,
        'lastmovedis': 0,
        'isyindao': false,
        'thismissflag': 0,
        'thismissflagcount': 0,
        'map': '',
        'thislevellife': 0,
        'thislevelweapon': 0,
        'thislevelcount': 0,
        'thislevelcombo': 0,
        'thislevelmoney': 0,
        'thislevelenemy': 0,
        'thislevelenergy': 0,
        'isspecialtime': false,
        'thislevelbestscore': 0,
        'isspecialattack': false,
        'xiaobosstimedianwei': [],
        'count': 0,
        'isequitweapon': 0,
        'skin': [0, 0, 0],
        'skinsuipian': [0, 0, 0],
        'skins': [[0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],],
        'upattribute': [5, 5, 10, 10, 10, 20, 20, 20],
        'weaponupattribute': [0, 5, 10, 10, 10, 20, 20, 20],
        'lifeupattribute': [0, 1, 2, 2, 2, 3, 3, 3],
        'moneyup': 1,
        'scoreup': 1,
        'songs': [0],
        'stars': [0],
        'highscores': [0],
        'scorelevel': [0.60, 0.80, 0.95],
        'todayjiesuoskins': 0,
        'todayjiesuosongs': 0,
        'todayvediotimes': 0,
        'todaygifttimes': 0,
        'todaygametimes': 0,
        'todaysupplygifttimes': 0,
        'todayusestrength': 0,
        'todaymoney': 0,
        'inmainuitime': 0,
        'leavetime': 0,
        'SIGNINTIME': 0,
        'OPENGIFTUITIME': 0,
        'LEAVETIME': 0,
        'issecondday': false,
        'isseconddaymission': false,
        'giftstatuslist': [0],
        'time': 0,
        'nowgift': 0,
        'limitgiftstatus': [0, 0, 0],
        'onlinegiftstatus': [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
        'baoxianglingqutimes': 0,
        'limitgift1': 0,
        'num1': 0,
        'limitgift2': 0,
        'num2': 0,
        'limitgift3': 0,
        'key': 0,
        'strength': 0,
        'vediocard': 0,
        'mission1': 0,
        'mission1num': 0,
        'mission2': 0,
        'mission2num': 0,
        'mission3': 0,
        'mission3num': 0,
        'dajiangmission': 0,
        'gainnow': 0,
        'gainnownum': 0,
        'missionstatus': [0, 0, 0, 0],
        'signInDays': 0,
        'signInStatus': 1,
        'isclick_qiandao': 0,
        'isgameover_to_main': 0,
        'isfirstplayer': 1,
        'uibaoxiangmodetime': 1,
        'uishiyongmodetime': 1,
        'isfirstshare': false,
        'isfirstclicksong': false,
        'isfirst1': false,
        'isfirst2': false,
        'isfirst3': false,
        'isfirst4': false,
        'isfirst5': false,
        'isfirst6': false,
        'isfirst7': false,
        'isfirst8': false,
        'isfirst9': false,
        'isfirst10': false,
        'isfinish1': false,
        'isfinish2': false,
        'isfinish3': false,
        'isfinish4': false,
        'isfinish5': false,
        'isfinish6': false,
        'isfinish7': false,
        'isfinish8': false,
        'isfinish9': false,
        'isfinish10': false,
        'isdie1': false,
        'isdie2': false,
        'isrevival1': false,
        'isrevival2': false,
        'islogin1': false,
        'islogin2': false,
        'islogin3': false,
        'islogin4': false,
        'islogin5': false,
        'islogin6': false,
        'islogin7': false,
        'islogin8': false,
        'islogin9': false,
        'islogin10': false,
        'lastadtype': 0,
        'todaylimitskintime': 0,
        'limitskin': 0,
        'todayturntabletime': 0,
        'isyouxijieshutanchu': 0,
        'shiyongpifu': -1,
        'auditStatus': true,
        'isturntableopen': false,
    };

    const urls = {
        unity: {
            scene: {
                gameScene: 'res/unity/mainsence.ls',
                shopScene: 'res/unity/show.ls'
            },
        },
        guanqiamusic: [
            { name: 'Unity', musicurl: 'res/music/sound01.mp3', map: 0, delaytime: 1, stars: 0, highscore: 0, },
            { name: '江南少女', musicurl: 'res/music/sound10.mp3', map: 1, delaytime: 1, stars: 0, highscore: 0, },
            { name: '画画的baby', musicurl: 'res/music/sound03.mp3', map: 0, delaytime: 1, stars: 0, highscore: 0, },
            { name: 'Дадада (Jarico Remix)', musicurl: 'res/music/sound02.mp3', map: 1, delaytime: 1, stars: 0, highscore: 0, },
            { name: 'Roly poly', musicurl: 'res/music/sound04.mp3', map: 0, delaytime: 1, stars: 0, highscore: 0, },
            { name: 'Faded', musicurl: 'res/music/sound05.mp3', map: 1, delaytime: 1, stars: 0, highscore: 0, },
            { name: '谪仙', musicurl: 'res/music/sound07.mp3', map: 0, delaytime: 1, stars: 0, highscore: 0, },
            { name: 'dancing with your ghost', musicurl: 'res/music/sound09.mp3', map: 1, delaytime: 1, stars: 0, highscore: 0, },
            { name: '旧梦一场', musicurl: 'res/music/sound08.mp3', map: 0, delaytime: 1, stars: 0, highscore: 0, },
            { name: '一个人挺好', musicurl: 'res/music/sound06.mp3', map: 1, delaytime: 1, stars: 0, highscore: 0, },
        ],
        nowskin: [
            { weapon: 0, helmet: 0, cloth: 0, bag: 0 },
        ],
        unlockskin: [10, 10, 25, 25, 25, 50, 50, 50],
        weapons: [
            { id: '0', modelurl: 'res/unity/weapon01.lh', name: '棒球棍', icon: 'ui/ICON/weapon01.png' },
            { id: '1', modelurl: 'res/unity/weapon02.lh', name: '武士刀', icon: 'ui/ICON/weapon02.png' },
            { id: '2', modelurl: 'res/unity/weapon03.lh', name: '工兵铲', icon: 'ui/ICON/weapon03.png' },
            { id: '3', modelurl: 'res/unity/weapon04.lh', name: '狼牙木棒', icon: 'ui/ICON/weapon04.png' },
            { id: '4', modelurl: 'res/unity/weapon05.lh', name: '平底锅', icon: 'ui/ICON/weapon05.png' },
            { id: '5', modelurl: 'res/unity/weapon06.lh', name: '打狗棒', icon: 'ui/ICON/weapon06.png' },
            { id: '6', modelurl: 'res/unity/weapon07.lh', name: '尼泊尔弯刀', icon: 'ui/ICON/weapon07.png' },
            { id: '7', modelurl: 'res/unity/weapon08.lh', name: '金箍棒', icon: 'ui/ICON/weapon08.png' },
        ],
        helmets: [
            { id: '0', modelurl: 'res/unity/Head10.lh', icon: 'ui/ICON/Head10.png' },
            { id: '1', modelurl: 'res/unity/Head2.lh', icon: 'ui/ICON/Head2.png' },
            { id: '2', modelurl: 'res/unity/Head14.lh', icon: 'ui/ICON/Head14.png' },
            { id: '3', modelurl: 'res/unity/Head11.lh', icon: 'ui/ICON/Head11.png' },
            { id: '4', modelurl: 'res/unity/Head12.lh', icon: 'ui/ICON/Head12.png' },
            { id: '5', modelurl: 'res/unity/Head3.lh', icon: 'ui/ICON/Head3.png' },
            { id: '6', modelurl: 'res/unity/Head4.lh', icon: 'ui/ICON/Head4.png' },
            { id: '7', modelurl: 'res/unity/Head9.lh', icon: 'ui/ICON/Head9.png' },
        ],
        clothes: [
            { id: '0', modelurl: 'res/unity/Role011.lh', name: '嘻哈男孩', icon: 'ui/ICON/Role011.png' },
            { id: '1', modelurl: 'res/unity/Role002.lh', name: '粉熊', icon: 'ui/ICON/Role002.png' },
            { id: '2', modelurl: 'res/unity/Role015.lh', name: '呆呆鸡', icon: 'ui/ICON/Role015.png' },
            { id: '3', modelurl: 'res/unity/Role012.lh', name: '罗丽塔', icon: 'ui/ICON/Role012.png' },
            { id: '4', modelurl: 'res/unity/Role013.lh', name: '恶灵', icon: 'ui/ICON/Role013.png' },
            { id: '5', modelurl: 'res/unity/Role003.lh', name: '美队', icon: 'ui/ICON/Role003.png' },
            { id: '6', modelurl: 'res/unity/Role004.lh', name: '死仕', icon: 'ui/ICON/Role004.png' },
            { id: '7', modelurl: 'res/unity/Role010.lh', name: '孙悟空', icon: 'ui/ICON/Role010.png' },
        ],
        bags: [
            { id: '0', modelurl: 'res/unity/Prop1.lh', name: '吉他', icon: 'ui/ICON/Prop1.png' },
            { id: '1', modelurl: 'res/unity/Prop2.lh', name: '魔法书', icon: 'ui/ICON/Prop2.png' },
            { id: '2', modelurl: 'res/unity/Prop5.lh', name: '时空行囊', icon: 'ui/ICON/Prop5.png' },
            { id: '3', modelurl: 'res/unity/Prop6.lh', name: '恶魔之翼', icon: 'ui/ICON/Prop6.png' },
            { id: '4', modelurl: 'res/unity/Prop7.lh', name: '滑板', icon: 'ui/ICON/Prop7.png' },
            { id: '5', modelurl: 'res/unity/Prop3.lh', name: '美队之盾', icon: 'ui/ICON/Prop3.png' },
            { id: '6', modelurl: 'res/unity/Prop4.lh', name: '魔法卷轴', icon: 'ui/ICON/Prop4.png' },
            { id: '7', modelurl: 'res/unity/Prop8.lh', name: '光之羽翼', icon: 'ui/ICON/Prop8.png' },
        ],
        gifts: [
            {
                "des": [
                    "[Online]  在线宝箱：普通奖励：ordinary  额外奖励；additional  时间（秒）：time  类型：type  数量：num  权重：weight ",
                    "[type]     道具类型：1：货币 2：体力 3：武器碎片 4：衣服碎片 5：背部碎片 6：钥匙 7：视频卡  8：视频  9：白色装备  10：绿色装备  11：紫色装备",
                    "[Limit]    限量礼包  初级礼包：primary   中级礼包：intermediate  高级礼包：senior    物品类型：propType  道具数量：propNum   ",
                    "[box]      补给宝箱  开启条件：open  消耗道具：openType  道具数量：TypeNum "
                ],
                "Online": [
                    {
                        "time": 0,
                        "ordinary": "1",
                        "ordinaryNum": "30",
                        "additional": "3",
                        "additionalNum": "5"
                    },
                    {
                        "time": 30,
                        "ordinary": "3",
                        "ordinaryNum": "2",
                        "additional": "6",
                        "additionalNum": "1"
                    },
                    {
                        "time": 60,
                        "ordinary": "1",
                        "ordinaryNum": "50",
                        "additional": "2",
                        "additionalNum": "50"
                    },
                    {
                        "time": 90,
                        "ordinary": "6",
                        "ordinaryNum": "1",
                        "additional": "7",
                        "additionalNum": "2"
                    },
                    {
                        "time": 120,
                        "ordinary": "1",
                        "ordinaryNum": "80",
                        "additional": "5",
                        "additionalNum": "5"
                    },
                    {
                        "time": 180,
                        "ordinary": "2",
                        "ordinaryNum": "20",
                        "additional": "6",
                        "additionalNum": "2"
                    },
                    {
                        "time": 300,
                        "ordinary": "5",
                        "ordinaryNum": "5",
                        "additional": "2",
                        "additionalNum": "50"
                    },
                    {
                        "time": 300,
                        "ordinary": "7",
                        "ordinaryNum": "2",
                        "additional": "1",
                        "additionalNum": "800"
                    },
                    {
                        "time": 300,
                        "ordinary": "1",
                        "ordinaryNum": "100",
                        "additional": "7",
                        "additionalNum": "2"
                    },
                    {
                        "time": 300,
                        "ordinary": "4",
                        "ordinaryNum": "5",
                        "additional": "4",
                        "additionalNum": "5"
                    }
                ],
                "Limit": [
                    {
                        "primary": [
                            {
                                "propType": "2",
                                "propNum": "20",
                                "sellType": "1",
                                "sellNum": "100",
                                "weight": "40"
                            },
                            {
                                "propType": "4",
                                "propNum": "2",
                                "sellType": "1",
                                "sellNum": "100",
                                "weight": "30"
                            },
                            {
                                "propType": "5",
                                "propNum": "2",
                                "sellType": "1",
                                "sellNum": "100",
                                "weight": "30"
                            }
                        ]
                    },
                    {
                        "intermediate": [
                            {
                                "propType": "6",
                                "propNum": "1",
                                "sellType": "1",
                                "sellNum": "500",
                                "weight": "30"
                            },
                            {
                                "propType": "3",
                                "propNum": "5",
                                "sellType": "1",
                                "sellNum": "500",
                                "weight": "40"
                            },
                            {
                                "propType": "4",
                                "propNum": "5",
                                "sellType": "1",
                                "sellNum": "500",
                                "weight": "30"
                            }
                        ]
                    },
                    {
                        "senior": [
                            {
                                "propType": "10",
                                "propNum": "1",
                                "sellType": "8",
                                "sellNum": "1"
                            }
                        ]
                    }
                ],
                "box": [
                    {
                        "propType": "5",
                        "propNum": "2",
                        "weight": "20"
                    },
                    {
                        "propType": "4",
                        "propNum": "3",
                        "weight": "10"
                    },
                    {
                        "propType": "4",
                        "propNum": "2",
                        "weight": "20"
                    },
                    {
                        "propType": "3",
                        "propNum": "2",
                        "weight": "10"
                    },
                    {
                        "propType": "3",
                        "propNum": "3",
                        "weight": "7"
                    },
                    {
                        "propType": "2",
                        "propNum": "10",
                        "weight": "20"
                    },
                    {
                        "propType": "2",
                        "propNum": "20",
                        "weight": "10"
                    },
                    {
                        "propType": "7",
                        "propNum": "1",
                        "weight": "3"
                    },
                    {
                        "open": [
                            {
                                "openType1": "1",
                                "TypeNum1": "500",
                                "openType2": "6",
                                "TypeNum2": "1"
                            }
                        ]
                    }
                ]
            }
        ],
        missions: [
            { type: 0, num1: 1, num2: 2, num3: 3, },
            { type: 1, num1: 1, num2: 2, num3: 3, },
            { type: 2, num1: 1, num2: 2, num3: 3, },
            { type: 3, num1: 2, num2: 5, num3: 8, },
            { type: 4, num1: 1, num2: 3, num3: 8, },
            { type: 5, num1: 1, num2: 3, num3: 8, },
            { type: 6, num1: 1000, num2: 3000, num3: 5000, },
        ],
    };

    const LOCAL_VERSION = '1.0.6';
    const LEQU_GAME_ID = 343;
    const bannerAd1Uid = 'adunit-2759656c7442acbb';
    const bannerAd2Uid = 'adunit-4ed969d0dc800c25';
    const bannerAd3Uid = 'adunit-0132a08e62a5bfcb';
    const vedioAdUid615 = 'adunit-4f04b62bd878219b';
    const vedioAdUid630 = 'adunit-d51355eb5ca0eade';
    const vedioAdUid660 = 'adunit-3411671da18d6d1c';
    function clampf(a, min, max) {
        if (a < min)
            return min;
        else if (a > max)
            return max;
        return a;
    }
    var wxAudioMgr = (() => {
        var sounds = {};
        var music = null;
        return {
            StopSound(audio) {
                if (audio) {
                    audio.stop();
                }
            },
            playMusic(url, loop = false) {
                console.log('play music==', url);
                if (music) {
                    music.destroy();
                }
                music = Laya.Browser.window.wx.createInnerAudioContext();
                music.src = url;
                music.loop = loop;
                music.play();
                return music;
            },
            stopMusic(url) {
                console.log('stop music==', url);
                if (music) {
                    music.destroy();
                    music = null;
                }
            },
            pauseMusic(url) {
                console.log('pause music==', url);
                if (music) {
                    music.pause();
                }
            },
            resumeMusic(url) {
                console.log('resume music==', url);
                if (music) {
                    music.play();
                }
            }
        };
    })();
    var platform = (() => {
        var leftSecond = 10 * 60;
        var countDownScheduleId = -1;
        var ioCount = 0;
        var video = null;
        var banner = null;
        var banner1, banner2, banner3;
        var banner1ShowTimes = 0;
        var banner2ShowTimes = 0;
        var banner3ShowTimes = 0;
        var BANNER_SHOW_MAX_TIMES = 2;
        var nextBannerIndex = 0;
        var timestamp = -1;
        var shareSuccess = null;
        var shareFail = null;
        var shareComplete = null;
        var vibrateTooOften = false;
        var vibrateCoolDownTimeout = -1;
        var bannerTrickId = -1;
        var auditStatus = true;
        var jumpEnabled = false;
        var fakeBtnEnabled = false;
        var bannerTrickEnabled = false;
        var bannerTrickEggEnabled = false;
        var bannerTrickWordEnabled = false;
        var videoTrickEggEnabled = false;
        var oldPlayer = false;
        var isfirstplayer = true;
        var music = null;
        var gameLayerEnterTimes = 0;
        var interstitialAd = null;
        var isConnected = true;
        var isTrickedUser = false;
        return {
            initOpenid() {
                if (this.hasStorageSync('openid')) {
                    tempData.openid = this.getStorageSync('openid', 'string');
                    console.log('玩家openid=', tempData.openid);
                    this.zsInit(tempData.openid);
                }
                else {
                    if (Laya.Browser.window.wx && Laya.Browser.window.wx.login && Laya.Browser.window.wx.request) {
                        Laya.Browser.window.wx.login({
                            success: (res) => {
                                if (res.code) {
                                    Laya.Browser.window.wx.request({
                                        url: 'https://account.api.snsfun.com/XyxApi/aloneuid',
                                        data: {
                                            gameid: LEQU_GAME_ID,
                                            jscode: res.code
                                        },
                                        success: (re) => {
                                            if (re.data && re.data.data && re.data.data.uid) {
                                                var uid = re.data.data.uid;
                                                this.setStorageSync('openid', uid);
                                                tempData.openid = uid;
                                                console.log('玩家openid=', tempData.openid);
                                                this.zsInit(tempData.openid);
                                            }
                                        }
                                    });
                                }
                                else {
                                    console.log('登录失败！' + res.errMsg);
                                }
                            }
                        });
                    }
                }
            },
            initLequConfig() {
                console.log('本地版本号=', LOCAL_VERSION);
                if (Laya.Browser.window.wx && Laya.Browser.window.wx.request) {
                    Laya.Browser.window.wx.request({
                        url: 'https://account.api.snsfun.com/XyxApi/custom2',
                        data: {
                            gameid: LEQU_GAME_ID
                        },
                        method: 'POST',
                        success: (result) => {
                            console.log('result=', result);
                            if (result.statusCode == 200 && result.data) {
                                console.log('后台自定义数据=', result.data);
                                var data = result.data;
                                auditStatus = (data['nonAuditVersion'] || '').indexOf(LOCAL_VERSION) < 0;
                                console.log('审核状态=', auditStatus);
                                tempData.auditStatus = auditStatus;
                                jumpEnabled = auditStatus ? false : Number(data['jump']) == 1;
                                console.log('导出开关=', jumpEnabled);
                                fakeBtnEnabled = auditStatus ? false : (jumpEnabled ? Number(data['fakeBtn']) == 1 : false);
                                console.log('假返回按钮开关=', fakeBtnEnabled);
                                bannerTrickEnabled = auditStatus ? false : Number(data['bannerTrick']) == 1;
                                console.log('误触开关=', bannerTrickEnabled);
                                bannerTrickEggEnabled = bannerTrickEnabled ? (Number(data['bannerTrickEgg'])) == 1 : false;
                                console.log('砸蛋误触开关=', bannerTrickEggEnabled);
                                bannerTrickWordEnabled = bannerTrickEnabled ? (Number(data['bannerTrickWord'])) == 1 : false;
                                console.log('文字误触开关=', bannerTrickEggEnabled);
                                videoTrickEggEnabled = auditStatus ? false : Number(data['videoTrickEgg']) == 1;
                                console.log('视频误触开关=', videoTrickEggEnabled);
                            }
                        }
                    });
                }
            },
            isOldPlayer() {
                return oldPlayer;
            },
            isJumpEnabled() {
                return jumpEnabled;
            },
            isBannerTrickEnabled() {
                return bannerTrickEnabled && isTrickedUser;
            },
            isBannerTrickEggEnabled() {
                return bannerTrickEggEnabled && isTrickedUser;
            },
            isBannerTrickWordEnabled() {
                return bannerTrickWordEnabled && isTrickedUser;
            },
            isFakeBtnEnabled() {
                return fakeBtnEnabled;
            },
            isVideoTrickEggEnabled() {
                return videoTrickEggEnabled && isTrickedUser;
            },
            isAuditStatus() {
                return auditStatus;
            },
            loadBasePacks(callback) {
                if (Laya.Browser.window.wx) {
                    var list = [
                        'atlas',
                        'mainui',
                        'unity',
                        'music',
                        'dragonbones',
                    ];
                    var temp = () => {
                        var name = list.shift();
                        if (name) {
                            const loadTask = Laya.Browser.window.wx.loadSubpackage({
                                name: name,
                                success: (res) => {
                                    console.log('分包加载成功=', name);
                                    temp();
                                },
                                fail: (res) => {
                                    console.log('分包加载失败=', name);
                                    list.unshift(name);
                                    setTimeout(temp, 1000);
                                }
                            });
                        }
                        else {
                            this.onBaseResLoaded();
                            callback && callback();
                        }
                    };
                    temp();
                }
                else {
                    this.onBaseResLoaded();
                    callback && callback();
                }
            },
            saveSkins() {
                this.setStorageSync('skins', tempData.skins.map((o) => { return o; }));
            },
            init() {
                tempData.diamond = this.hasStorageSync('diamond') ? this.getStorageSync('diamond', 'number') : 0;
                this.setStorageSync('diamond', tempData.diamond);
                tempData.level = this.hasStorageSync('level') ? this.getStorageSync('level', 'number') : 1;
                tempData.baoxianglingqutimes = this.hasStorageSync('baoxianglingqutimes') ? this.getStorageSync('lebaoxianglingqutimesvel', 'number') : 0;
                tempData.time = this.hasStorageSync('baoxianglingqutimes') ? this.hasStorageSync('baoxianglingqutimes', 'number') : 0;
                console.log('oldPlayer', this.getStorageSync('oldPlayer'));
                if (this.getStorageSync('oldPlayer')) {
                    oldPlayer = true;
                    this.setStorageSync('isfirstplayer', false);
                    tempData.isfirstplayer = 0;
                }
                else {
                    this.setStorageSync('oldPlayer', true);
                    this.setStorageSync('isfirstplayer', true);
                    tempData.isfirstplayer = 1;
                }
                this.initLequConfig();
                this.initSignInData();
                this.initShare();
                tempData.songs = this.hasStorageSync('songs') ? this.getStorageSync('songs', 'object') : [1, 1, 0, 1000, 0, 1000, 0, 0, 1500, 0];
                tempData.stars = this.hasStorageSync('stars') ? this.getStorageSync('stars', 'object') : [0];
                tempData.highscores = this.hasStorageSync('highscores') ? this.getStorageSync('highscores', 'object') : [0];
                while (tempData.stars.length < urls.guanqiamusic.length) {
                    tempData.stars.push(0);
                }
                while (tempData.highscores.length < urls.guanqiamusic.length) {
                    tempData.highscores.push(0);
                }
                tempData.skin = this.hasStorageSync('skin') ? this.getStorageSync('skin', 'object') : [0, 0, -1];
                this.setStorageSync('skin', tempData.skin);
                tempData.skinsuipian = this.hasStorageSync('skinsuipian') ? this.getStorageSync('skinsuipian', 'object') : [0, 0, 0];
                this.setStorageSync('skinsuipian', tempData.skinsuipian);
                tempData.skins = this.hasStorageSync('skins') ? this.getStorageSync('skins', 'object') : [[111, 0, 0, 0, 0, 0, 0, 0],
                    [111, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],];
                this.setStorageSync('skins', tempData.skins);
                tempData.moneyup = this.hasStorageSync('moneyup') ? this.getStorageSync('moneyup', 'number') : 1;
                tempData.scoreup = this.hasStorageSync('scoreup') ? this.getStorageSync('scoreup', 'number') : 1;
                tempData.giftstatuslist = this.hasStorageSync('giftstatuslist') ? this.getStorageSync('giftstatuslist', 'object') : [0];
                let i = 1;
                while (tempData.giftstatuslist.length < urls.gifts[0].Online.length) {
                    let num = 0;
                    for (let j = 0; j <= i; j++) {
                        num += urls.gifts[0].Online[j].time;
                    }
                    tempData.giftstatuslist.push(num);
                    i++;
                }
                this.setStorageSync('giftstatuslist', tempData.giftstatuslist);
                tempData.limitgiftstatus = this.hasStorageSync('limitgiftstatus') ? this.getStorageSync('limitgiftstatus', 'object') : [0];
                while (tempData.limitgiftstatus.length < urls.gifts[0].Limit.length) {
                    tempData.limitgiftstatus.push(0);
                }
                this.setStorageSync('limitgiftstatus', tempData.limitgiftstatus);
                tempData.onlinegiftstatus = this.hasStorageSync('onlinegiftstatus') ? this.getStorageSync('onlinegiftstatus', 'object') : [];
                while (tempData.onlinegiftstatus.length < 2) {
                    let list = [];
                    while (list.length < urls.gifts[0].Online.length) {
                        list.push(0);
                    }
                    tempData.onlinegiftstatus.push(list);
                }
                this.setStorageSync('onlinegiftstatus', tempData.onlinegiftstatus);
                tempData.missionstatus = this.hasStorageSync('missionstatus') ? this.getStorageSync('missionstatus', 'object') : [0];
                while (tempData.missionstatus.length < 4) {
                    tempData.missionstatus.push(0);
                }
                this.setStorageSync('missionstatus', tempData.missionstatus);
                tempData.key = this.hasStorageSync('key') ? this.getStorageSync('key', 'number') : 0;
                this.setStorageSync('key', tempData.key);
                tempData.strength = this.hasStorageSync('strength') ? this.getStorageSync('strength', 'number') : 20;
                this.setStorageSync('strength', tempData.strength);
                tempData.vediocard = this.hasStorageSync('vediocard') ? this.getStorageSync('vediocard', 'number') : 0;
                this.setStorageSync('vediocard', tempData.vediocard);
                tempData.todayjiesuoskins = this.hasStorageSync('todayjiesuoskins') ? this.getStorageSync('todayjiesuoskins', 'number') : 0;
                this.setStorageSync('todayjiesuoskins', tempData.todayjiesuoskins);
                tempData.todayjiesuosongs = this.hasStorageSync('todayjiesuosongs') ? this.getStorageSync('todayjiesuosongs', 'number') : 0;
                this.setStorageSync('todayjiesuosongs', tempData.todayjiesuosongs);
                tempData.todayvediotimes = this.hasStorageSync('todayvediotimes') ? this.getStorageSync('todayvediotimes', 'number') : 0;
                this.setStorageSync('todayvediotimes', tempData.todayvediotimes);
                tempData.todaygifttimes = this.hasStorageSync('todaygifttimes') ? this.getStorageSync('todaygifttimes', 'number') : 0;
                this.setStorageSync('todaygifttimes', tempData.todaygifttimes);
                tempData.todaygametimes = this.hasStorageSync('todaygametimes') ? this.getStorageSync('todaygametimes', 'number') : 0;
                this.setStorageSync('todaygametimes', tempData.todaygametimes);
                tempData.todaysupplygifttimes = this.hasStorageSync('todaysupplygifttimes') ? this.getStorageSync('todaysupplygifttimes', 'number') : 0;
                this.setStorageSync('todaysupplygifttimes', tempData.todaysupplygifttimes);
                tempData.todaymoney = this.hasStorageSync('todaymoney') ? this.getStorageSync('todaymoney', 'number') : 0;
                this.setStorageSync('todaymoney', tempData.todaymoney);
                tempData.todayusestrength = this.hasStorageSync('todayusestrength') ? this.getStorageSync('todayusestrength', 'number') : 0;
                this.setStorageSync('todayusestrength', tempData.todayusestrength);
                tempData.todaylimitskintime = this.hasStorageSync('todaylimitskintime') ? this.getStorageSync('todaylimitskintime', 'number') : 0;
                this.setStorageSync('todaylimitskintime', tempData.todaylimitskintime);
                tempData.todayturntabletime = this.hasStorageSync('todayturntabletime') ? this.getStorageSync('todayturntabletime', 'number') : 0;
                this.setStorageSync('todayturntabletime', tempData.todayturntabletime);
                let issecondday = this.isSecondDay();
                tempData.issecondday = issecondday;
                tempData.isseconddaymission = issecondday;
                this.setStorageSync('issecondday', issecondday);
                this.setStorageSync('isseconddaymission', issecondday);
                if (issecondday) {
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
                if (Laya.Browser.window.wx && Laya.Browser.window.wx.getLaunchOptionsSync) {
                    var info = Laya.Browser.window.wx.getLaunchOptionsSync();
                    if (info) {
                        var scene = Number(info.scene);
                        var shareTicket = info.shareTicket;
                        console.log('launch options =', info);
                        if (scene == 1095 || scene == 1037 || (scene == 1044 && shareTicket)) {
                            isTrickedUser = true;
                            console.log('isTrickedUser=', isTrickedUser);
                        }
                    }
                }
                console.log('本地数据初始化=', tempData);
            },
            isConnected() {
                return isConnected;
            },
            hasStorageSync(key) {
                var value = Laya.LocalStorage.getItem(key);
                return !(value === null || value === undefined || value === '');
            },
            getStorageSync(key, type) {
                if (type == 'object') {
                    var str = Laya.LocalStorage.getItem(key);
                    try {
                        console.log('getJSON' + key, JSON.parse(str));
                        return JSON.parse(str);
                    }
                    catch (err) {
                        return null;
                    }
                }
                else {
                    var value = Laya.LocalStorage.getItem(key);
                    switch (type) {
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
            setStorageSync(key, value) {
                if (typeof value == 'object') {
                    console.log('setJSON', key, value);
                    localStorage.setItem(key, JSON.stringify(value));
                }
                else {
                    Laya.LocalStorage.setItem(key, value);
                }
            },
            deleteStorageSync(key) {
                Laya.LocalStorage.removeItem(key);
            },
            initSignInData() {
                function reset() {
                    tempData.signInDays = 0;
                    tempData.signInStatus = 1;
                }
                console.log('SIGNINSTAMP', this.hasStorageSync('SIGNINSTAMP'));
                if (this.hasStorageSync('SIGNINSTAMP')) {
                    var signInStamp = this.getStorageSync('SIGNINSTAMP', 'number');
                    var thatDay = new Date(signInStamp).toDateString();
                    var dayNextThatDay = new Date(signInStamp + 24 * 60 * 60 * 1000).toDateString();
                    var today = new Date().toDateString();
                    console.log('上次签到日期=', thatDay, '上次签到日期的第二天=', dayNextThatDay, ',今天=', today);
                    if (thatDay == today || dayNextThatDay == today) {
                        console.log('签到日期是今天');
                        if (this.hasStorageSync('SIGNINDAYS')) {
                            tempData.signInDays = this.getStorageSync('SIGNINDAYS', 'number');
                        }
                        else {
                            tempData.signInDays = 0;
                        }
                        tempData.signInStatus = dayNextThatDay == today ? 1 : 0;
                        if (dayNextThatDay != today) {
                            this.setStorageSync('isclick_qiandao', 0);
                        }
                    }
                    else {
                        console.log('用户签到不连续');
                        reset();
                    }
                }
                else {
                    console.log('用户未曾签到过');
                    reset();
                }
                if (tempData.signInDays == 7 && tempData.signInStatus == 1) {
                    console.log('连续签到7天 签到数据重置');
                    reset();
                }
                console.log('用户signInDays=', tempData.signInDays, ',signInStatus=', tempData.signInStatus);
            },
            signIn() {
                if (tempData.signInStatus == 1) {
                    tempData.signInDays++;
                    tempData.signInStatus = 0;
                    this.setStorageSync('SIGNINDAYS', tempData.signInDays);
                    this.setStorageSync('SIGNINSTAMP', new Date().getTime());
                    console.log('tempData.signInDays', tempData.signInDays);
                    return true;
                }
                else {
                    console.log('不可签到');
                    return false;
                }
            },
            signInTime() {
                let time = new Date().getTime();
                tempData.SIGNINTIME = time;
                this.setStorageSync('SIGNINTIME', time);
            },
            openGiftuiTime() {
                let time = new Date().getTime();
                tempData.OPENGIFTUITIME = time;
                this.setStorageSync('OPENGIFTUITIME', time);
            },
            leaveTime() {
                let time = new Date().getTime();
                tempData.LEAVETIME = time;
                this.setStorageSync('LEAVETIME', time);
            },
            isSecondDay() {
                if (this.hasStorageSync('SIGNINTIME')) {
                    var SIGNINTIME = this.getStorageSync('SIGNINTIME', 'number');
                    var thatDay = new Date(SIGNINTIME).toDateString();
                    var dayNextThatDay = new Date(SIGNINTIME + 24 * 60 * 60 * 1000).toDateString();
                    var today = new Date().toDateString();
                    console.log('上次登录日期=', thatDay, '上次登录日期的第二天=', dayNextThatDay, ',今天=', today);
                    if (thatDay == today || dayNextThatDay == today) {
                        if (thatDay == today) {
                            console.log('登录日期是今天，不重置礼物宝箱');
                            tempData.SIGNINTIME = this.getStorageSync('SIGNINTIME', 'number');
                            return false;
                        }
                        else if (dayNextThatDay == today) {
                            console.log('登录日期是昨天，重置礼物宝箱');
                            return true;
                        }
                    }
                    else {
                        console.log('间隔超过1天，重置宝箱');
                        return true;
                    }
                }
                else {
                    console.log('用户未曾登录，重置礼物宝箱');
                    return true;
                }
            },
            saveDiamond() {
                this.setStorageSync('diamond', tempData.diamond);
            },
            saveLevel() {
                this.setStorageSync('level', tempData.level);
            },
            getShareInfo() {
                return {
                    title: '[有人@我]最热歌曲与全新节奏的完美结合，给你带来畅爽的音乐盛宴！',
                    imageUrl: 'res/dragonbones/share.png'
                };
            },
            initShare() {
                if (Laya.Browser.window.wx) {
                    if (Laya.Browser.window.wx.showShareMenu) {
                        Laya.Browser.window.wx.showShareMenu({
                            withShareTicket: true
                        });
                    }
                    if (Laya.Browser.window.wx.onShareAppMessage) {
                        let info = this.getShareInfo();
                        Laya.Browser.window.wx.onShareAppMessage(() => {
                            return {
                                title: info.title,
                                imageUrl: info.imageUrl
                            };
                        });
                    }
                }
            },
            onBaseResLoaded() {
                if (Laya.Browser.window.wx) {
                    Laya.Browser.window.wx.onShow(() => {
                        console.log('wx onShow');
                        Laya.stage.event('wxOnShow');
                        let currentStamp = new Date().getTime();
                        if (currentStamp - timestamp > 1.5 * 1000) {
                            console.log('分享成功');
                            shareSuccess && shareSuccess();
                        }
                        else {
                            console.log('分享失败');
                            shareFail && shareFail();
                        }
                        shareComplete && shareComplete();
                        shareSuccess = null;
                        shareFail = null;
                        shareComplete = null;
                    });
                    Laya.Browser.window.wx.onHide(() => {
                        console.log('wx hide');
                        timestamp = new Date().getTime();
                        Laya.stage.event('wxOnHide');
                    });
                }
            },
            share(success = null, fail = null, complele = null) {
                if (Laya.Browser.window.wx && Laya.Browser.window.wx.shareAppMessage) {
                    if (!tempData.isfirstplayer) {
                        if (!tempData.isfirstshare) {
                            this.aldSendEvent('游戏分享人数');
                        }
                        this.aldSendEvent('游戏分享次数');
                    }
                    let info = this.getShareInfo();
                    Laya.Browser.window.wx.shareAppMessage({
                        title: info.title,
                        imageUrl: info.imageUrl
                    });
                    shareSuccess = success;
                    shareFail = fail;
                    shareComplete = complele;
                }
                else {
                    success && success();
                }
            },
            showToast(str) {
                console.log(str);
                if (Laya.Browser.window.wx && Laya.Browser.window.wx.showToast) {
                    Laya.Browser.window.wx.showToast({
                        title: str,
                        icon: 'none'
                    });
                }
            },
            console(str) {
                if (Laya.Browser.window.wx && Laya.Browser.window.wx.showToast) {
                }
                else {
                    console.log(str);
                }
            },
            vibrateShortWhitCD() {
                if (vibrateTooOften) {
                    return;
                }
                vibrateTooOften = true;
                vibrateCoolDownTimeout = setTimeout(() => {
                    this.vibrateShort();
                    vibrateTooOften = false;
                }, 30);
            },
            vibrateShort() {
                if (Laya.Browser.window.wx && Laya.Browser.window.wx.vibrateShort) {
                    Laya.Browser.window.wx.vibrateShort();
                }
            },
            vibrateLong() {
                if (Laya.Browser.window.wx && Laya.Browser.window.wx.vibrateLong) {
                    Laya.Browser.window.wx.vibrateLong();
                }
                else if (Laya.Browser.window.wx && Laya.Browser.window.wx.vibrateShort) {
                    Laya.Browser.window.wx.vibrateShort();
                    setTimeout(() => { Laya.Browser.window.wx.vibrateShort(); }, 15);
                    setTimeout(() => { Laya.Browser.window.wx.vibrateShort(); }, 30);
                }
            },
            setSharedCanvasSize(width, height) {
                if (Laya.Browser.window.wx) {
                    var openDataContext = Laya.Browser.window.wx.getOpenDataContext();
                    if (openDataContext) {
                        var sharedCanvas = openDataContext.canvas;
                        sharedCanvas.width = width;
                        sharedCanvas.height = height;
                    }
                }
            },
            postMessage(msg) {
                if (Laya.Browser.window.wx) {
                    Laya.Browser.window.wx.getOpenDataContext().postMessage(msg);
                }
            },
            setUserCloudStorage: function (key, value) {
                if (Laya.Browser.window.wx) {
                    Laya.Browser.window.wx.setUserCloudStorage({
                        KVDataList: [{
                                key: key.toString(),
                                value: value.toString()
                            }]
                    });
                }
            },
            playEffect(path) {
                console.log('playEffect=', path);
                Laya.SoundManager.playSound(path, 1);
            },
            stopSound(path) {
                Laya.SoundManager.stopSound(path);
            },
            playMusic(path, loop) {
                console.log('play music=', path);
                if (Laya.Browser.window.wx) {
                    if (loop) {
                        var loopflag = false;
                    }
                    music = wxAudioMgr.playMusic(path, loopflag);
                    return music;
                }
                else {
                    music = Laya.SoundManager.playMusic(path, loop);
                    return music;
                }
            },
            stopMusic(path = '') {
                console.log('stop music=', path);
                if (Laya.Browser.window.wx) {
                    wxAudioMgr.stopMusic(path);
                }
                else {
                    Laya.SoundManager.stopMusic();
                }
            },
            pauseMusic(path) {
                console.log('pause music=', path);
                if (Laya.Browser.window.wx) {
                    wxAudioMgr.pauseMusic(path);
                }
                else {
                    if (music) {
                        music.pause();
                    }
                }
            },
            resumeMusic(path) {
                console.log('resume music=', path);
                if (Laya.Browser.window.wx) {
                    wxAudioMgr.resumeMusic(path);
                }
                else {
                    if (music) {
                        music.resume();
                    }
                }
            },
            isIphoneX() {
                if (Laya.Browser.window.wx && Laya.Browser.window.wx.getSystemInfoSync) {
                    var info = Laya.Browser.window.wx.getSystemInfoSync();
                    var model = info.model;
                    if (model && (model.indexOf('iPhone X') > -1 || model.indexOf('iPhone 1') > -1)) {
                        return true;
                    }
                }
                return false;
            },
            preGetOfflineReward() {
                let currentStamp = new Date().getTime();
                let lgorstamp = this.hasStorageSync('lgorstamp') ? this.getStorageSync('lgorstamp', 'number') : currentStamp;
                this.setStorageSync('lgorstamp', currentStamp);
            },
            getOfflineReward(saveScale = 0) {
                let currentStamp = new Date().getTime();
                let lgorstamp = this.hasStorageSync('lgorstamp') ? this.getStorageSync('lgorstamp', 'number') : currentStamp;
                let pastMinSec = clampf(currentStamp - lgorstamp, 0, 10 * 60 * 60 * 1000);
                let pastMin = Math.floor(pastMinSec / (60 * 1000));
                console.log('上次记录的离线时间戳=', lgorstamp, ' 当前时间戳=', currentStamp, ' 历时min=', pastMin);
                let value = 1;
                let offlineReward = Math.floor(pastMin * value);
                if (saveScale > 0) {
                    tempData.diamond += offlineReward * saveScale;
                    this.saveCoin();
                    this.showToast('恭喜获得离线奖励' + (offlineReward * saveScale) + '金币！');
                    this.setStorageSync('lgorstamp', currentStamp);
                }
                return offlineReward;
            },
            alyVideoDot(videoPosition, result, ext) {
                if (Laya.Browser.window.wx && Laya.Browser.window.wx.aly && Laya.Browser.window.wx.aly.videoDot) {
                    console.log('alyVideoDot=', videoPosition, result);
                    Laya.Browser.window.wx.aly.videoDot(videoPosition, result, ext);
                }
            },
            createVideo(complete = null, uncomplete = null, error = null, key, adtype) {
                if (Laya.Browser.window.wx && Laya.Browser.window.wx.createRewardedVideoAd) {
                    if (tempData.lastadtype == adtype) {
                    }
                    else {
                        tempData.lastadtype = adtype;
                        video = null;
                        if (adtype == 1) {
                            console.log('创建6-15s广告');
                            video = Laya.Browser.window.wx.createRewardedVideoAd({
                                adUnitId: vedioAdUid615,
                            });
                        }
                        else if (adtype == 2) {
                            console.log('创建6-30s广告');
                            video = Laya.Browser.window.wx.createRewardedVideoAd({
                                adUnitId: vedioAdUid630,
                            });
                        }
                        else if (adtype == 3) {
                            console.log('创建6-60s广告');
                            video = Laya.Browser.window.wx.createRewardedVideoAd({
                                adUnitId: vedioAdUid660,
                            });
                        }
                        else {
                            this.showToast("广告 id 错误");
                        }
                    }
                    video.load().then(() => {
                        Laya.stage.event('wxOnHide');
                        video.show();
                    }).catch((err) => {
                    });
                    video.offClose();
                    video.onClose((res) => {
                        if (res && res.isEnded || res === undefined) {
                            complete && complete();
                            this.alyVideoDot(key, 'success');
                        }
                        else {
                            uncomplete && uncomplete();
                            this.alyVideoDot(key, 'fail');
                        }
                        video.offClose();
                        Laya.stage.event('wxOnShow');
                    });
                    video.offError();
                    video.onError((err) => {
                        this.showToast('视频加载中');
                        this.share(complete, uncomplete);
                    });
                    this.alyVideoDot(key, 'show');
                }
                else {
                    complete && complete();
                }
            },
            createBanner(adtype) {
                if (Laya.Browser.window.wx && Laya.Browser.window.wx.createBannerAd) {
                    var info = Laya.Browser.window.wx.getSystemInfoSync();
                    var screenWidth = info.screenWidth;
                    var screenHeight = info.screenHeight;
                    if (adtype == 1) {
                        banner = Laya.Browser.window.wx.createBannerAd({
                            adUnitId: bannerAd1Uid,
                            style: { left: 0, top: 0, width: 300 },
                            adIntervals: 30,
                        });
                    }
                    else if (adtype == 2) {
                        banner = Laya.Browser.window.wx.createBannerAd({
                            adUnitId: bannerAd2Uid,
                            style: { left: 0, top: 0, width: 300 },
                            adIntervals: 30,
                        });
                    }
                    else if (adtype == 3) {
                        banner = Laya.Browser.window.wx.createBannerAd({
                            adUnitId: bannerAd3Uid,
                            style: { left: 0, top: 0, width: 300 },
                            adIntervals: 30,
                        });
                    }
                    else {
                        this.showToast("banner id 错误");
                    }
                    banner.onResize(() => {
                        banner.style.left = (screenWidth - banner.style.realWidth) / 2;
                        banner.style.top = screenHeight - banner.style.realHeight + (this.isIphoneX() ? -10 : 0);
                    });
                    banner.onError((err) => {
                        console.log('banner获取失败' + err);
                    });
                    banner.hide();
                    return banner;
                }
            },
            preloadInterstitialAd() {
                console.log('platform preloadInterstitialAd');
                if (interstitialAd) {
                    interstitialAd.destroy();
                }
                if (Laya.Browser.window.wx && Laya.Browser.window.wx.createInterstitialAd) {
                    interstitialAd = Laya.Browser.window.wx.createInterstitialAd({
                        adUnitId: 'adunit-420b0b0cd3e6fc15'
                    });
                    interstitialAd.onError((err) => {
                        console.log('interstitialAd onError=', err);
                        Laya.stage.event('wxLoadInterstitialAdFailed', null);
                    });
                    interstitialAd.onClose(() => {
                        Laya.stage.event('wxLoadInterstitialAdFailed', null);
                    });
                    interstitialAd.load();
                }
            },
            showInterstitialAd() {
                if (interstitialAd) {
                    interstitialAd.show().catch((err) => {
                        console.log('interstitialAd show catch error=', err);
                        Laya.stage.event('wxLoadInterstitialAdFailed', null);
                    });
                }
                else {
                    Laya.stage.event('wxLoadInterstitialAdFailed', null);
                }
            },
            aldSendEvent(eventname, keydata) {
                if (Laya.Browser.window.wx) {
                    Laya.Browser.window.wx.aldSendEvent(eventname, keydata);
                }
            },
            aldStageonStart(stageId, stageName, userId) {
                if (!userId)
                    userId = '';
                if (Laya.Browser.window.wx) {
                    Laya.Browser.window.wx.aldStage.onStart({
                        stageId: String(stageId),
                        stageName: stageName,
                        userId: userId
                    });
                }
            },
            aldStageonRunning(stageId, stageName, event, params, userId) {
                if (!params.itemId)
                    params.itemId = '';
                if (!params.itemCount)
                    params.itemCount = 1;
                if (!params.desc)
                    params.desc = '';
                if (!params.itemMoney)
                    params.itemMoney = 0;
                if (!userId)
                    userId = '';
                if (Laya.Browser.window.wx) {
                    Laya.Browser.window.wx.aldStage.onRunning({
                        stageId: stageId,
                        stageName: stageName,
                        userId: userId,
                        event: event,
                        params: params,
                    });
                }
            },
            aldStageonEnd(stageId, stageName, success, params, userId) {
                if (!params.desc)
                    params.desc = '';
                if (!userId)
                    userId = '';
                let event = '';
                success ? event = 'complete' : event = 'fail';
                if (Laya.Browser.window.wx) {
                    Laya.Browser.window.wx.aldStage.onEnd({
                        stageId: stageId,
                        stageName: stageName,
                        userId: userId,
                        event: event,
                        params: params,
                    });
                }
            },
        };
    })();

    const tools = {
        ischangping() {
            let stagewidth = Laya.stage.width;
            let stageheight = Laya.stage.height;
            if (stageheight / stagewidth > 1.7795138888888888) {
                return true;
            }
            else {
                return false;
            }
        },
        uichangping() {
            this.width = Laya.stage.width;
            this.height = Laya.stage.height;
        },
        changeCameraField(camera) {
            let stagewidth = Laya.stage.width;
            let stageheight = Laya.stage.height;
            if (stageheight / stagewidth > 1.7795138888888888) {
                camera.fieldOfView = 60;
            }
            else {
                camera.fieldOfView = 50;
            }
        },
        findChildNode: function (parent, path) {
            let result = parent;
            let names = path.split('/');
            for (let i = 0; i < names.length; i++) {
                let name = names[i];
                result = result.getChildByName(name);
                if (result) {
                    continue;
                }
                else {
                    console.log('fail to find node=', path);
                    return null;
                }
            }
            console.log('success to find node=', result.name);
            return result;
        },
        setCastShadow(node, bool) {
            if (node && !node.destroyed) {
                if (node instanceof Laya.MeshSprite3D) {
                    node.meshRenderer.castShadow = bool;
                }
                else if (node instanceof Laya.SkinnedMeshSprite3D) {
                    node.skinnedMeshRenderer.castShadow = bool;
                }
                for (var i = 0; i < node.numChildren; i++) {
                    this.setCastShadow(node.getChildAt(i), bool);
                }
            }
        },
        setReceiveShadow(node, bool) {
            if (node && !node.destroyed) {
                if (node instanceof Laya.MeshSprite3D) {
                    node.meshRenderer.receiveShadow = bool;
                }
                else if (node instanceof Laya.SkinnedMeshSprite3D) {
                    node.skinnedMeshRenderer.receiveShadow = bool;
                }
                for (var i = 0; i < node.numChildren; i++) {
                    this.setReceiveShadow(node.getChildAt(i), bool);
                }
            }
        },
        clampf(a, min, max) {
            if (a < min)
                return min;
            else if (a > max)
                return max;
            return a;
        },
        getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        addgainmoney() {
            for (let i = 0; i < 20; i++) {
                Laya.timer.once(20 * i, this, () => {
                    let gold = new Laya.Image();
                    gold.skin = 'ui/icon_battle_money_02.png';
                    platform.playEffect('res/music/zuanshi.mp3');
                    let x = Laya.stage.width / 2 - 100;
                    let y = Laya.stage.height / 2 - 100;
                    gold.pos(Laya.stage.width / 2, Laya.stage.height / 2);
                    this.addChild(gold);
                    Laya.Tween.to(gold, { x: x + Math.random() * 300 - 150 - 25, y: y + Math.random() * 300 - 150 - 22 }, 200, Laya.Ease.quartOut, Laya.Handler.create(this, () => {
                        Laya.Tween.to(gold, { x: 20, y: 20 }, 250, Laya.Ease.quartIn, Laya.Handler.create(this, () => {
                            gold.destroy();
                        }));
                    }));
                });
                if (i == 19) {
                    let count = 0;
                    Laya.timer.once(20 * i, this, () => {
                        for (let i = Number(this.money_num.text); i <= Number(this.money_num.text) + 1000; i += 2) {
                            Laya.timer.once(2 * count, this, function () {
                                this.money_num.text = String(i);
                                if (i == this.diamond + 1000) {
                                    Laya.timer.once(2 * (count + 1), this, function () {
                                        this.diamond += 1000;
                                        platform.setStorageSync('diamond', this.diamond);
                                        Laya.stage.event('likaibuzu');
                                        this.close();
                                    });
                                }
                            });
                            count += 1;
                        }
                    });
                }
            }
        },
        dif_to_nextday() {
            let nowhour = new Date().getHours();
            let nowmin = new Date().getMinutes();
            let nowsec = new Date().getSeconds();
            console.log(nowhour, nowmin, nowsec);
            let difhour = 23 - nowhour;
            let difmin = 59 - nowmin;
            let difsec = 60 - nowsec;
            this.shuaxinshijian.text = '任务刷新时间：' + difhour + ':' + difmin + ':' + difsec;
            let sumtime = difsec + difmin * 60 + difhour * 3600;
            Laya.timer.loop(1000, this, function () {
                if (sumtime > 1) {
                    sumtime -= 1;
                    let hour = Math.floor(sumtime / 3600);
                    let min = Math.floor((sumtime - hour * 3600) / 60);
                    let sec = Math.floor((sumtime - hour * 3600 - min * 60));
                    if (min < 10) {
                        if (sec < 10) {
                            this.shuaxinshijian.text = '任务刷新时间：' + hour + ':0' + min + ':0' + sec;
                        }
                        else {
                            this.shuaxinshijian.text = '任务刷新时间：' + hour + ':0' + min + ':' + sec;
                        }
                    }
                    else {
                        if (sec < 10) {
                            this.shuaxinshijian.text = '任务刷新时间：' + hour + ':' + min + ':0' + sec;
                        }
                        else {
                            this.shuaxinshijian.text = '任务刷新时间：' + hour + ':' + min + ':' + sec;
                        }
                    }
                    console.log(hour, min, sec);
                }
                else {
                    sumtime = 59 + 59 * 60 + 23 * 3600;
                    this.shuaxinshijian.text = '任务刷新时间：' + '23' + ':' + '59' + ':' + '59';
                }
            });
            return [difhour, difmin, difsec];
        },
        addredtippoint(object, skinurl = 'ui/redpoint.png') {
            let redtips = new Laya.Image;
            redtips.name = 'redtips';
            redtips.skin = skinurl;
            object.addChild(redtips);
            redtips.width = 32;
            redtips.height = 32;
            redtips.x = object.width - 25;
            redtips.y = -16;
        },
        delredtippoint(object, skinurl = 'ui/redpoint.png') {
            while (object.getChildByName('redtips')) {
                let redtips = object.getChildByName('redtips');
                if (redtips) {
                    redtips.removeSelf();
                    redtips.destroy();
                }
            }
        },
        clickuibtn(object) {
            platform.playEffect('res/music/anniu.mp3');
        },
        transition1(level, isyindao = false) {
            let img1 = new Laya.Image;
            img1.skin = 'ui/bg_loading.png';
            img1.width = Laya.stage.width;
            img1.height = Laya.stage.height;
            let x = 0;
            let y = -Laya.stage.height;
            img1.pos(x, 0);
            img1.zOrder = 9999;
            Laya.stage.addChild(img1);
            let imglogo = new Laya.Image;
            imglogo.skin = 'ui/loading00.png';
            imglogo.anchorX = 0.5;
            imglogo.anchorY = 0.5;
            imglogo.pos(288, 354);
            img1.addChild(imglogo);
            let tiplabel = new Laya.Label;
            tiplabel.text = '戴上耳机体验效果最佳';
            tiplabel.italic = true;
            tiplabel.bold = true;
            tiplabel.font = 'Microsoft YaHei';
            tiplabel.fontSize = 32;
            tiplabel.color = '#00f4ff';
            tiplabel.align = 'center';
            tiplabel.valign = 'middle';
            tiplabel.anchorX = 0.5;
            tiplabel.anchorY = 0.5;
            tiplabel.pos(Laya.stage.width / 2, 600);
            img1.addChild(tiplabel);
            Laya.Tween.to(img1, { y: 0 }, 88, Laya.Ease.quartIn, Laya.Handler.create(this, () => {
                Laya.stage.event('chooseedgame', [level, isyindao]);
                Laya.stage.on('guodu2', this, function () {
                    img1.removeSelf();
                    img1.destroy(true);
                });
            }));
        },
        transition2() {
            Laya.timer.once(888, this, function () {
                let img2 = new Laya.Image;
                img2.skin = 'ui/bg_loading.png';
                img2.width = Laya.stage.width;
                img2.height = Laya.stage.height;
                let x = 0;
                let y = 0;
                img2.pos(x, y);
                Laya.stage.addChild(img2);
                let imglogo = new Laya.Image;
                imglogo.skin = 'ui/loading00.png';
                imglogo.anchorX = 0.5;
                imglogo.anchorY = 0.5;
                imglogo.pos(288, 354);
                img2.addChild(imglogo);
                let tiplabel = new Laya.Label;
                tiplabel.text = '戴上耳机体验效果最佳';
                tiplabel.italic = true;
                tiplabel.bold = true;
                tiplabel.font = 'Microsoft YaHei';
                tiplabel.fontSize = 32;
                tiplabel.color = '#00f4ff';
                tiplabel.align = 'center';
                tiplabel.valign = 'middle';
                tiplabel.anchorX = 0.5;
                tiplabel.anchorY = 0.5;
                tiplabel.pos(Laya.stage.width / 2, 600);
                img2.addChild(tiplabel);
                Laya.stage.event('guodu2');
                img2.zOrder = 9999;
                Laya.Tween.to(img2, { y: -Laya.stage.height }, 1288, Laya.Ease.quartIn, Laya.Handler.create(this, () => {
                    Laya.stage.event('trasitionover');
                    img2.removeSelf();
                    img2.destroy(true);
                }));
            });
        },
    };

    class InitMap extends Laya.Script {
        constructor() {
            super();
            InitMap.instance = this;
        }
        loadmapmsg() {
            console.log('初始化地图脚本唤醒！');
            Laya.loader.load('res/leveltable.json', Laya.Handler.create(this, (res) => {
                console.log('leveltable加载完毕');
                this.leveltable = res;
            }));
            Laya.loader.load('res/levelCfg.json', Laya.Handler.create(this, (res) => {
                console.log('levelCfg加载完毕');
                this.levelCfg = res;
            }));
        }
        generateleveltable(nowlevel = 0) {
            var map = this.leveltable[nowlevel]['map'];
            console.log('map = ', map);
            for (let i = 0; i < map.length; ++i) {
                for (let j = 0; j < map[i].length; ++j) {
                    this.placebaseblockandroad(map, i, j);
                }
            }
        }
        placebaseblockandroad(map, i, j) {
            switch (map[i][j]) {
                case -2:
                    break;
                case -1:
                    break;
                case 0:
                    break;
                case 1:
                    break;
                case 2:
                    let buff1blockpre = Laya.loader.getRes("res/unity/LayaScene_SampleScene/Conventional/baseblockbuff1.lh");
                    let buff1block = Laya.Sprite3D.instantiate(buff1blockpre);
                    GameControl.instance.scene_bg.addChild(buff1block);
                    buff1block.transform.localPosition = new Laya.Vector3(-j + 4, 0, -i + 4);
                    break;
                case 3:
                    let buff2blockpre = Laya.loader.getRes("res/unity/LayaScene_SampleScene/Conventional/baseblockbuff2.lh");
                    let buff2block = Laya.Sprite3D.instantiate(buff2blockpre);
                    GameControl.instance.scene_bg.addChild(buff2block);
                    buff2block.transform.localPosition = new Laya.Vector3(-j + 4, 0, -i + 4);
                    break;
                case 4:
                    let blockpre = Laya.loader.getRes("res/unity/LayaScene_SampleScene/Conventional/baseblock.lh");
                    let block = Laya.Sprite3D.instantiate(blockpre);
                    GameControl.instance.scene_bg.addChild(block);
                    block.transform.localPosition = new Laya.Vector3(-j + 4, 0, -i + 4);
                    break;
            }
        }
    }

    class GameControl extends Laya.Script {
        constructor() {
            super();
            GameControl.instance = this;
        }
        onAwake() {
            if (Laya.Browser.window.wx) {
            }
            else {
                Laya.Stat.show(0, 660);
            }
            platform.loadBasePacks(() => {
                var resource = [
                    "res/unity/LayaScene_SampleScene/Conventional/baseblock.lh",
                    "res/unity/LayaScene_SampleScene/Conventional/baseblockbuff1.lh",
                    "res/unity/LayaScene_SampleScene/Conventional/baseblockbuff2.lh",
                    "res/unity/LayaScene_SampleScene/Conventional/chess.lh",
                    "res/unity/LayaScene_SampleScene/Conventional/enemy.lh",
                ];
                Laya.stage.addComponent(InitMap);
                InitMap.instance.loadmapmsg();
                Laya.loader.create(resource, Laya.Handler.create(this, function () {
                    if (this.ui_scene) {
                        this.ui_scene.destroy(true);
                    }
                    if (this.scene_bg) {
                        this.scene_bg.destroy(true);
                    }
                    if (tempData.isfirstplayer) {
                        platform.aldSendEvent('loading加载完进到新手引导阶段');
                        tempData.limitskin = this.randomskin2();
                        platform.setStorageSync('limitskin', tempData.limitskin);
                        tempData.level = 0;
                        this.loadScene3d(0, true);
                    }
                    else {
                        this.loadScene3d(0, true);
                    }
                }));
            });
        }
        loadScene3d(level = 0, isyindao = false) {
            if (!isyindao) {
                tools.transition2();
            }
            if (this.ui_scene) {
                this.ui_scene.destroy(true);
            }
            if (this.scene_bg) {
                this.scene_bg.destroy(true);
            }
            console.log("开始加载场景");
            this.isstart = false;
            tempData.level = level;
            if (platform.hasStorageSync('lifeup')) {
                tempData.thislevellife = platform.getStorageSync('lifeup', 'number');
            }
            else {
                platform.setStorageSync('lifeup', 2);
                tempData.thislevellife = platform.getStorageSync('lifeup', 'number');
            }
            tempData.isequitweapon = 0;
            tempData.thislevelcount = 0;
            tempData.thislevelcombo = 0;
            tempData.thislevelmoney = 0;
            tempData.thislevelenemy = 0;
            tempData.thislevelenergy = 0;
            tempData.thislevelbestscore = 0;
            Laya.Pool.clearBySign("fangkuai");
            Laya.Scene3D.load('res/unity/LayaScene_SampleScene/Conventional/SampleScene.ls', Laya.Handler.create(this, function (res) {
                this.scene_bg = Laya.stage.addChild(res);
                this.camera = this.scene_bg.getChildByName("Main Camera");
                tools.changeCameraField(this.camera);
                Laya.stage.event('finishmainscene');
                InitMap.instance.generateleveltable(level);
            }));
        }
        restartgame(level) {
            console.log("重新开始游戏");
            this.scene_bg.destroy(true);
            Laya.timer.clearAll(this);
            Laya.Scene.close('test/MainScene.json');
            this.loadScene3d(level);
        }
        onDisable() {
            console.log('loading界面关闭');
        }
    }

    class GameUI extends ui.test.StartSceneUI {
        constructor() {
            super();
        }
        onAwake() {
            if (tempData.isfirstplayer) {
                platform.aldSendEvent('进入loading界面人数');
            }
            this.width = Laya.stage.width;
            this.height = Laya.stage.height;
            this.y = 0;
            this.zOrder = 1;
            var skeleton = new Laya.Skeleton();
            skeleton.pos(Laya.stage.width / 2, Laya.stage.height * 2 / 3);
            skeleton.load("res/dragonbones/load.sk");
            Laya.timer.once(333, this, function () {
                this.tip.visible = true;
            });
            this.addChild(skeleton);
            Laya.stage.on('finishmainscene', this, function () {
                this.close();
            });
            Laya.stage.addComponent(GameControl);
        }
        onDisable() {
            console.log('loading界面关闭');
        }
    }

    class GameConfig {
        constructor() {
        }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("script/GameUI.ts", GameUI);
        }
    }
    GameConfig.width = 576;
    GameConfig.height = 1024;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "test/StartScene.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError(true);
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            platform.init();
            if (tempData.isfirstplayer) {
                platform.aldSendEvent('打开游戏人数');
            }
            GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
        }
    }
    new Main();

}());
//# sourceMappingURL=bundle.js.map
