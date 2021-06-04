(function () {
    'use strict';

    var View = Laya.View;
    var REG = Laya.ClassUtils.regClass;
    var ui;
    (function (ui) {
        var test;
        (function (test) {
            class GameUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("test/Game");
                }
            }
            test.GameUI = GameUI;
            REG("ui.test.GameUI", GameUI);
            class LoadUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("test/Load");
                }
            }
            test.LoadUI = LoadUI;
            REG("ui.test.LoadUI", LoadUI);
        })(test = ui.test || (ui.test = {}));
    })(ui || (ui = {}));

    class GameConstData {
        constructor() {
        }
    }
    GameConstData.GameNameNow = "ZMC";
    GameConstData.UITO3DBiLi = 150 * 3;
    GameConstData.shopStat = {
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
    GameConstData.bottomMoveTime = 300;
    GameConstData.isloadNativeAd = false;
    GameConstData.gamePlayNum = -1;
    GameConstData.nowTiLi = 0;
    GameConstData.playerMoveMaxNum = 0.5;
    GameConstData.playerMoveMaxNumSuper = 0.8;
    GameConstData.playersmallskilldis = 66;
    GameConstData.killEnemyAddNum = 50;
    GameConstData.superDurTime = 5;
    GameConstData.superKillR = 6;
    GameConstData.bloodlinehigh = 230;
    GameConstData.coinRotaNum = 0.1;
    GameConstData.QianGiveCoin = 1;
    GameConstData.PlayerGetQianDis = 5;
    GameConstData.playerCheckAngle = 30;
    GameConstData.MaxFanWeiLen = 9;
    GameConstData.defaultFanWeiLen = 3;
    GameConstData.MaxE_jiaonang_shoujiArrayIndex = 30;
    GameConstData.enemyMoveWithPlayerMaxDisKaiPingFang = 15;
    GameConstData.ShiZiMoveCalNum = 5 * 12;
    GameConstData.XieMoveCalNum = 7 * 12;
    GameConstData.enemyMoveWithPlayerMaxDis = 30;
    GameConstData.superKillRSqrt = 5;
    GameConstData.PlayerGetQianDisSqrt = 0;
    GameConstData.leaveGameTime = 0;
    GameConstData.isUseVibrate = true;
    GameConstData.soundStat = true;
    GameConstData.playerCoin = 0;
    GameConstData.nowLevel = 0;
    GameConstData.rebornMaxNum = 1;
    GameConstData.isIos = true;
    GameConstData.ttfName = "SimHei";
    GameConstData.NumfontName = "SimHei";
    GameConstData.widthFix = 0;
    GameConstData.heightFix = 0;

    var Enum_gameState;
    (function (Enum_gameState) {
        Enum_gameState[Enum_gameState["wait"] = 0] = "wait";
        Enum_gameState[Enum_gameState["gaming"] = 1] = "gaming";
        Enum_gameState[Enum_gameState["finish"] = 2] = "finish";
        Enum_gameState[Enum_gameState["gamePause"] = 3] = "gamePause";
    })(Enum_gameState || (Enum_gameState = {}));

    var Enum_aniPlayerName;
    (function (Enum_aniPlayerName) {
        Enum_aniPlayerName["Ani_Squat"] = "Male";
        Enum_aniPlayerName["Ani_Run"] = "Running";
        Enum_aniPlayerName["Ani_FastRun"] = "Fast Run";
        Enum_aniPlayerName["Ani_Win"] = "Win";
    })(Enum_aniPlayerName || (Enum_aniPlayerName = {}));

    class PlayerCtrl extends Laya.Script3D {
        constructor() {
            super();
            this.gameStat = Enum_gameState.wait;
            this.NowAni = "";
            this.playerPos = new Laya.Vector3(0, 0, 0);
            this.playerRedPos = new Laya.Vector3(0, 0, 0);
            this.sceneGeZiObj = {};
            this.isInSuper = false;
            this.superFinishTime = -1;
            this.playerCalMoveEndVec3 = new Laya.Vector3(0, 0, 0);
            this.playerLookAtQua = new Laya.Quaternion(0, 0, 0, 0);
            this.playerLerpOutQua = new Laya.Quaternion(0, 0, 0, 0);
            this.lookAtUsedPlayerVec3 = new Laya.Vector3(0, 0, 0);
            this.upVec3 = new Laya.Vector3(0, 1, 0);
            this.playerMoveDir = new Laya.Vector3(0, 0, 0);
            this.playerFUZDir = new Laya.Vector3(0, 0, 0);
            this.inAttack = false;
            this.isCanMove = true;
            PlayerCtrl.instance = this;
        }
        onAwake() {
            console.log("玩家脚本唤醒");
            this._Player = this.owner;
            this._PlayerTran = this._Player.transform;
            this._PlayerAni = this._Player.getComponent(Laya.Animator);
            this._PlayerRed = this.owner.parent.getChildByName('PlayerRed');
            this._PlayerRedTran = this._PlayerRed.transform;
            this._PlayerRedAni = this._PlayerRed.getComponent(Laya.Animator);
            this.PlayerAniPlay(Enum_aniPlayerName.Ani_Squat);
            this._Scene = Laya.stage.getChildByName('scene3D');
            this._Camera = this._Scene.getChildByName('CameraPoint').getChildByName('Main Camera');
            for (let i = 0; i < Laya.stage.numChildren; i++) {
                if (Laya.stage.getChildAt(i).name == '') {
                    this._DialogManager = Laya.stage.getChildAt(i);
                    this._MainScene = this._DialogManager.getChildByName('MainScene');
                }
            }
            this.GameStartWithGameUI();
        }
        onUpdate() {
            if (this.gameStat == Enum_gameState.gaming) {
                if (this.playerMoveDir.x != 0 || this.playerMoveDir.z != 0) {
                    var mulNum = GameConstData.playerMoveMaxNum;
                    this._Camera.transform.localPositionX += this.playerMoveDir.x * mulNum;
                    this._Camera.transform.localPositionZ += this.playerMoveDir.z * mulNum;
                    this.GetPlayerPos(this._PlayerTran.localPositionX + this.playerMoveDir.x * mulNum, this._PlayerTran.localPositionZ + this.playerMoveDir.z * mulNum);
                    this.SetPlayerRedPos();
                }
            }
        }
        onDisable() {
            Laya.stage.offAllCaller(this);
            Laya.timer.clearAll(this);
            this.destroy();
        }
        GameStartWithGameUI() {
            this.gameStat = Enum_gameState.gaming;
        }
        PlayerAniPlay(statName, isCheckStat = true) {
            if (this.NowAni == statName)
                return;
            if (this.gameStat == Enum_gameState.finish && isCheckStat)
                return;
            this.NowAni = statName;
            this._PlayerAni.play(statName, 0, 0);
            this._PlayerRedAni.play(statName, 0, 0);
        }
        ClearPlayerMoveDir() {
            this.playerMoveDir.x = 0;
            this.playerMoveDir.z = 0;
        }
        PlayerMove(toX, toZ) {
            if (!this.isCanMove) {
                return;
            }
            this.playerMoveDir.x = toX;
            this.playerMoveDir.z = toZ;
        }
        static get Instance() {
            return this.instance;
        }
        GetPlayerPos(toX = 99999, toZ = 99999) {
            var geziX = Math.round(toX);
            var geziY = Math.round(toZ);
            var result = 0;
            var isDead = false;
            result = 1;
            this.playerPos.x = geziX;
            this.playerPos.z = geziY;
            this.playerCalMoveEndVec3.x = toX;
            this.playerCalMoveEndVec3.z = toZ;
            this.playerFUZDir.x = toX;
            this.playerFUZDir.z = -toZ;
            this.lookAtUsedPlayerVec3.x = this._PlayerTran.localPositionX;
            this.lookAtUsedPlayerVec3.z = -this._PlayerTran.localPositionZ;
            Laya.Quaternion.lookAt(this.lookAtUsedPlayerVec3, this.playerFUZDir, this.upVec3, this.playerLookAtQua);
            Laya.Quaternion.lerp(this._PlayerTran.rotation, this.playerLookAtQua, 0.5, this.playerLerpOutQua);
            this._PlayerTran.rotation = this.playerLerpOutQua;
            this._PlayerTran.localPositionX = this.playerCalMoveEndVec3.x;
            this._PlayerTran.localPositionZ = this.playerCalMoveEndVec3.z;
            if (isDead) {
                PlayerCtrl.Instance.PlayerDead();
            }
            return result;
        }
        SetPlayerRedPos() {
            this._PlayerRedTran.localPosition = this._PlayerTran.localPosition;
            this._PlayerRedTran.localRotationEuler = this._PlayerTran.localRotationEuler;
        }
        PlayerDead() {
            console.log("玩家死亡");
        }
    }
    PlayerCtrl.instance = null;
    var SceneGeZiLeiXing;
    (function (SceneGeZiLeiXing) {
        SceneGeZiLeiXing[SceneGeZiLeiXing["cantmove"] = 0] = "cantmove";
        SceneGeZiLeiXing[SceneGeZiLeiXing["road"] = 1] = "road";
        SceneGeZiLeiXing[SceneGeZiLeiXing["zhangaiwu"] = 2] = "zhangaiwu";
        SceneGeZiLeiXing[SceneGeZiLeiXing["zhuangshipin"] = 3] = "zhuangshipin";
        SceneGeZiLeiXing[SceneGeZiLeiXing["smallenemy_knife"] = 4] = "smallenemy_knife";
        SceneGeZiLeiXing[SceneGeZiLeiXing["smallenemy_archery"] = 5] = "smallenemy_archery";
        SceneGeZiLeiXing[SceneGeZiLeiXing["smallenemy_boom"] = 6] = "smallenemy_boom";
        SceneGeZiLeiXing[SceneGeZiLeiXing["bigenemy_knife"] = 7] = "bigenemy_knife";
        SceneGeZiLeiXing[SceneGeZiLeiXing["bigenemy_fire"] = 8] = "bigenemy_fire";
        SceneGeZiLeiXing[SceneGeZiLeiXing["superboss"] = 9] = "superboss";
        SceneGeZiLeiXing[SceneGeZiLeiXing["zhongdian"] = 10] = "zhongdian";
    })(SceneGeZiLeiXing || (SceneGeZiLeiXing = {}));

    class Game extends ui.test.GameUI {
        constructor() {
            super();
            this.maxProgressLen = 262;
            this.superProgressLen = 204;
            this.nowKillEnemyNum = 0;
            this.isFirstDown = true;
            this.givedQian = 0;
            this.boxscaleNum = 1;
            this.timeLines = [];
            this.touchX = 0;
            this.touchZ = 0;
            this.zouluAniSpeed = 1;
            this.isMouseDown = false;
            this.resutlDirVec3 = new Laya.Vector3(0, 0, 0);
            this.maxRLen = 50;
            this.maxYGUILen = 72;
            Game.instance = this;
        }
        onAwake() {
            console.log("游戏主界面唤醒");
            this.width = Laya.stage.width;
            this.height = Laya.stage.height;
        }
        onOpened() {
            this.Box_YaoGan.on(Laya.Event.MOUSE_DOWN, this, this.MouseDownEvent);
            this.Box_YaoGan.on(Laya.Event.MOUSE_MOVE, this, this.MouseMoveEvent);
            this.Box_YaoGan.on(Laya.Event.MOUSE_UP, this, this.MouseUpEvent);
            this.Box_YaoGan.on(Laya.Event.MOUSE_OUT, this, this.MouseUpEvent);
        }
        onDisable() {
            Laya.stage.offAllCaller(this);
            Laya.timer.clearAll(this);
            this.Box_YaoGan.offAll();
            this.destroy(true);
        }
        MouseDownEvent() {
            this.isMouseDown = true;
            this.touchX = Laya.stage.mouseX;
            this.touchZ = Laya.stage.mouseY;
            this.Box_YG.pos(this.touchX / this.boxscaleNum, this.touchZ / this.boxscaleNum);
            this.Box_YG.visible = true;
            PlayerCtrl.Instance.PlayerAniPlay(Enum_aniPlayerName.Ani_Run);
        }
        MouseMoveEvent() {
            if (!this.isMouseDown)
                return;
            var ygXTemp = Laya.stage.mouseX;
            var ygZTemp = Laya.stage.mouseY;
            var distanceTemp = this.distance(this.touchX, this.touchZ, ygXTemp, ygZTemp) / this.boxscaleNum;
            if (distanceTemp > this.maxYGUILen) {
                var _l = this.maxYGUILen / distanceTemp;
                this.Img_YaoGan.pos(((ygXTemp - this.touchX) / this.boxscaleNum * _l) + this.maxYGUILen, ((ygZTemp - this.touchZ) / this.boxscaleNum * _l) + this.maxYGUILen);
            }
            else {
                this.Img_YaoGan.pos((ygXTemp - this.touchX) / this.boxscaleNum + this.maxYGUILen, (ygZTemp - this.touchZ) / this.boxscaleNum + this.maxYGUILen);
            }
            var mouseXTemp = Laya.stage.mouseX;
            var mouseZTemp = Laya.stage.mouseY;
            var distanceTemp = this.distance(this.touchX, this.touchZ, mouseXTemp, mouseZTemp);
            if (distanceTemp > this.maxRLen) {
                var _l = this.maxRLen / distanceTemp;
                this.resutlDirVec3.x = ((mouseXTemp - this.touchX) * _l);
                this.resutlDirVec3.z = ((mouseZTemp - this.touchZ) * _l);
                var zouluAniSpeed = 1;
            }
            else {
                this.resutlDirVec3.x = mouseXTemp - this.touchX;
                this.resutlDirVec3.z = mouseZTemp - this.touchZ;
                var zouluAniSpeed = distanceTemp / this.maxRLen;
            }
            if (zouluAniSpeed >= 0.6) {
                PlayerCtrl.Instance.PlayerAniPlay(Enum_aniPlayerName.Ani_FastRun);
            }
            else {
                PlayerCtrl.Instance.PlayerAniPlay(Enum_aniPlayerName.Ani_Run);
            }
            this.resutlDirVec3.x = this.resutlDirVec3.x / GameConstData.UITO3DBiLi;
            this.resutlDirVec3.z = this.resutlDirVec3.z / GameConstData.UITO3DBiLi;
            PlayerCtrl.Instance.PlayerMove(-this.resutlDirVec3.x, -this.resutlDirVec3.z);
        }
        MouseUpEvent() {
            if (!this.isMouseDown)
                return;
            this.Box_YG.visible = false;
            this.Img_YaoGan.pos(this.maxYGUILen, this.maxYGUILen);
            this.isMouseDown = false;
            PlayerCtrl.Instance.ClearPlayerMoveDir();
            PlayerCtrl.Instance.PlayerAniPlay(Enum_aniPlayerName.Ani_Squat);
        }
        distance(centerX, centerY, mouseX, mouseY) {
            var dx = centerX - mouseX;
            var dy = centerY - mouseY;
            var distance = Math.sqrt(dx * dx + dy * dy);
            return distance;
        }
    }

    var GamingData = {
        'nowbgmusic': '',
        'uiblocklength': 50,
        'choosetowerx': 0,
        'choosetowery': 0,
        'block1index': 0,
        'block1typeindex': 0,
        'block1spinindex': 0,
        'block2index': 0,
        'block2typeindex': 0,
        'block2spinindex': 0,
        'block3index': 0,
        'block3typeindex': 0,
        'block3spinindex': 0,
        'blocktypenowchoose': 0,
        'specialtype': 0,
        'isthissaveisspecial': 0,
        'specialhappentime': 0,
        'battledoubleattack': 1,
        'battledoubleattackovertime': 0,
        'crystal': 0,
        'boxuparray': [1, 1, 1, 1, 1],
        'isgreenbuff': false,
        'isbluebuff': false,
        'isallbuff': false,
        'thisgamebossuptype': 0,
        'thisgamebossupnum': 0,
        'thisgameattackupnum': 1,
        'thisgameattackspeedupnum': 1,
        'thisgamemonstorkillerupnum': 1,
        'thisgamebossterminatorupnum': 1,
        'thisgamecriticalhitpraddnum': 1,
        'thisgameskilladdnum': 1,
        'thisgamecrystaladdnum': 0,
        'thisgamerefreshchoosebufftime': 0,
        'thisgamechoosedstartuptype': 0,
        'thisgamechoosedstartupnum': 0,
        'thisgamestartuptype1': 0,
        'thisgamestartupnum1': 0,
        'thisgamestartuptype2': 0,
        'thisgamestartupnum2': 0,
        'thisgamestartuptype3': 0,
        'thisgamestartupnum3': 0,
        'thisgameplacetime': 0,
        'thislevelleftlife': 0,
        'thislevelmap': [[]],
        'thisleveldeviationx': 0,
        'thisleveldeviationy': 0,
        'thislevelwavetime': 0,
        'thislevelnowwavetime': 0,
        'thislevelbeatenemynum': 0,
        'thislevelstartpoint': [],
        'thislevelcentralpointinui': [],
        'thiswaveenemynum': 0,
        'thiswaveenemydisappearnum': 0,
        'enemystart': [0, 0],
        'enemyend': [0, 0],
        'enemyroadalldis': 0,
        'enemyroadInflectionpointarray': [],
        'randomeventarray': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    };

    var tempData = {
        'openid': false,
        'auditStatus': true,
        'lastadtype': 0,
        'fontname': '',
        'gold': 0,
        'diamond': 0,
        'strength': 0,
        'level': 0,
        'signInDays': 0,
        'signInDays2': 0,
        'signInStatus': 1,
        'signingiftarray': [0, 0, 0, 0, 0, 0, 0],
        'lineup': [1, 2, 3, 4, 5],
        'lineup1': [1, 2, 3, 4, 5],
        'lineup2': [1, 2, 3, 4, 5],
        'lineup3': [1, 2, 3, 4, 5],
        'nowchoosetower': 0,
        'towerlevel': [1, 1, 1, 1, 1, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'towerfragment': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'mission1': 0,
        'mission1num': 0,
        'mission2': 0,
        'mission2num': 0,
        'mission3': 0,
        'mission3num': 0,
        'missionstatus': [0, 0, 0, 0],
        'todayopenchesttimes': 0,
        'todaysuccessgametimes': 0,
        'todayupdatetowertimes': 0,
        'todaykillenemytimes': 0,
        'todayusedoubleattacktimes': 0,
        'achievementlevel': 0,
        'achievementnum': 0,
        'achievementarray': [0, 0, 0, 0, 0, 0, 0],
        'killenemysum': 0,
        'updatetowersum': 0,
        'gettowersum': 0,
        'useturntablesum': 0,
        'openfreechestsum': 0,
        'openclassicchestsum': 0,
        'opensupremechestsum': 0,
        'attendendlesssum': 0,
        'todayopenfreechesttime': 0,
        'todayopenfreediamondtime': 0,
        'todayopenturntabletime': 0,
        'nextgetdiamondtime': 0,
        'nextgetfreechesttime': 0,
        'nextgetsupremechesttime': 0,
        'freediamondcooldowntime': 0,
        'freechestdcooldowntime': 0,
        'limitgiftstatus': [0, 0, 0],
        'limitgift1': 0,
        'num1': 0,
        'limitgift2': 0,
        'num2': 0,
        'limitgift3': 0,
        'num3': 0,
        'thistimegetrewardresulgt': [],
        'thistimeopenschesttype': 0,
        'skin': [0, 0, 0],
        'skinsuipian': [0, 0, 0],
        'skins': [[0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],],
        'inmainuitime': 0,
        'leavetime': 0,
        'SIGNINTIME': 0,
        'OPENGIFTUITIME': 0,
        'LEAVETIME': 0,
        'issecondday': false,
        'isseconddaymission': false,
    };

    'use strict';
    class SingletonBase {
        constructor() {
            if (this._instance) {
                throw "singleton class is not use new constructor";
            }
        }
        static getInstance() {
            let instance = this._instance;
            if (!instance) {
                instance = this._instance = new this();
            }
            return instance;
        }
    }

    class SoundMgr extends SingletonBase {
        constructor() {
            super();
            SoundMgr.instance = this;
        }
        static playEffect(path) {
            Laya.SoundManager.playSound(path, 1);
        }
        static stopSound(path) {
            Laya.SoundManager.stopSound(path);
        }
        static playMusic(path, loop) {
            console.log('play music=', path);
            if (Laya.Browser.window.wx) {
                if (loop) {
                    SoundMgr.music = this.wxPlayMusic(path, false);
                }
                else {
                    SoundMgr.music = this.wxPlayMusic(path, true);
                }
                return SoundMgr.music;
            }
            else {
                SoundMgr.music = Laya.SoundManager.playMusic(path, loop);
                return SoundMgr.music;
            }
        }
        static stopMusic(path = '') {
            console.log('stop music=', path);
            if (Laya.Browser.window.wx) {
                this.wxStopMusic(path);
            }
            else {
                Laya.SoundManager.stopMusic();
            }
        }
        static pauseMusic(path) {
            console.log('pause music=', path);
            if (Laya.Browser.window.wx) {
                this.wxPauseMusic(path);
            }
            else {
                if (SoundMgr.music) {
                    SoundMgr.music.pause();
                }
            }
        }
        static resumeMusic(path) {
            console.log('resume music=', path);
            if (Laya.Browser.window.wx) {
                this.wxResumeMusic(path);
            }
            else {
                if (SoundMgr.music) {
                    SoundMgr.music.resume();
                }
            }
        }
        static wxPlayMusic(url, loop = false) {
            console.log('play music==', url);
            if (SoundMgr.music) {
                SoundMgr.music.destroy();
            }
            SoundMgr.music = Laya.Browser.window.wx.createInnerAudioContext();
            SoundMgr.music.src = url;
            SoundMgr.music.loop = loop;
            SoundMgr.music.play();
            return SoundMgr.music;
        }
        static wxPauseMusic(url) {
            console.log('pause music==', url);
            if (SoundMgr.music) {
                SoundMgr.music.pause();
            }
        }
        static wxResumeMusic(url) {
            console.log('resume music==', url);
            if (SoundMgr.music) {
                SoundMgr.music.play();
            }
        }
        static wxStopMusic(url) {
            console.log('stop music==', url);
            if (SoundMgr.music) {
                SoundMgr.music.destroy();
                SoundMgr.music = null;
            }
        }
    }
    SoundMgr.sounds = {};
    SoundMgr.music = null;

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
            loadunityPacks(callback) {
                if (Laya.Browser.window.wx) {
                    var list = [
                        'unity',
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
                console.log('oldPlayer', this.getStorageSync('oldPlayer'));
                if (this.getStorageSync('oldPlayer')) {
                    oldPlayer = true;
                    this.setStorageSync('isfirstplayer', false);
                }
                else {
                    this.setStorageSync('oldPlayer', true);
                    this.setStorageSync('isfirstplayer', true);
                }
                this.initLequConfig();
                this.initSignInData();
                this.initShare();
                let issecondday = this.isSecondDay();
                tempData.issecondday = issecondday;
                tempData.isseconddaymission = issecondday;
                this.setStorageSync('issecondday', issecondday);
                this.setStorageSync('isseconddaymission', issecondday);
                if (issecondday) {
                    this.signInTime();
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
            initSignInData() {
                function reset() {
                    tempData.signInDays = 0;
                    tempData.signInDays2 = 0;
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
                        if (this.hasStorageSync('SIGNINDAYS2')) {
                            tempData.signInDays2 = this.getStorageSync('SIGNINDAYS2', 'number');
                        }
                        else {
                            tempData.signInDays2 = 0;
                        }
                        tempData.signInStatus = dayNextThatDay == today ? 1 : 0;
                        if (dayNextThatDay != today) {
                            this.setStorageSync('isclick_qiandao', 0);
                        }
                    }
                    else {
                        if (this.hasStorageSync('SIGNINDAYS')) {
                            tempData.signInDays = this.getStorageSync('SIGNINDAYS', 'number');
                        }
                        else {
                            tempData.signInDays = 0;
                        }
                        tempData.signInDays2 = tempData.signInDays;
                        console.log('用户签到不连续');
                        tempData.signInStatus = 1;
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
                    this.setStorageSync('SIGNINDAYS2', tempData.signInDays2);
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
                        Laya.timer.scale = 1;
                        SoundMgr.playMusic(GamingData.nowbgmusic, 0);
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
                        Laya.timer.scale = 0;
                    });
                }
            },
            share(success = null, fail = () => { this.showToast('分享失败'); }, complele = null) {
                if (Laya.Browser.window.wx && Laya.Browser.window.wx.shareAppMessage) {
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
            vibrateShortWhitCD() {
                if (vibrateTooOften) {
                    return;
                }
                vibrateTooOften = true;
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
        };
    })();

    class Utils {
        constructor() {
            Utils.instance = this;
        }
        static ischangping() {
            if (Laya.stage.height / Laya.stage.width > 1.7795138888888888) {
                return true;
            }
            else {
                return false;
            }
        }
        static uichangping(object) {
            object.width = Laya.stage.width;
            object.height = Laya.stage.height;
        }
        static changeCameraField(camera) {
            let stagewidth = Laya.stage.width;
            let stageheight = Laya.stage.height;
            if (stageheight / stagewidth > 1.7795138888888888) {
                camera.fieldOfView = 60;
            }
            else {
                camera.fieldOfView = 50;
            }
        }
        static findChildNode(parentObj, path) {
            let result = parentObj;
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
            return result;
        }
        static setLightData(light, lightMode = Laya.ShadowMode.SoftLow, lightDistance = 100, lightResolution = 2048) {
            light.shadowMode = lightMode;
            light.shadowDistance = lightDistance;
            light.shadowResolution = lightResolution;
            light.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades;
        }
        static setCastShadow(node, bool) {
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
        }
        static setReceiveShadow(node, bool) {
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
        }
        static clampf(a, min, max) {
            if (a < min)
                return min;
            else if (a > max)
                return max;
            return a;
        }
        static getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        static dif_to_nextday(lab_countDown) {
            let nowhour = new Date().getHours();
            let nowmin = new Date().getMinutes();
            let nowsec = new Date().getSeconds();
            console.log(nowhour, nowmin, nowsec);
            let difhour = 23 - nowhour;
            let difmin = 59 - nowmin;
            let difsec = 60 - nowsec;
            lab_countDown.text = '任务刷新时间：' + difhour + ':' + difmin + ':' + difsec;
            let sumtime = difsec + difmin * 60 + difhour * 3600;
            Laya.timer.loop(1000, this, function () {
                if (sumtime > 1) {
                    sumtime -= 1;
                    let hour = Math.floor(sumtime / 3600);
                    let min = Math.floor((sumtime - hour * 3600) / 60);
                    let sec = Math.floor((sumtime - hour * 3600 - min * 60));
                    if (min < 10) {
                        if (sec < 10) {
                            lab_countDown.text = '任务刷新时间：' + hour + ':0' + min + ':0' + sec;
                        }
                        else {
                            lab_countDown.text = '任务刷新时间：' + hour + ':0' + min + ':' + sec;
                        }
                    }
                    else {
                        if (sec < 10) {
                            lab_countDown.text = '任务刷新时间：' + hour + ':' + min + ':0' + sec;
                        }
                        else {
                            lab_countDown.text = '任务刷新时间：' + hour + ':' + min + ':' + sec;
                        }
                    }
                    console.log(hour, min, sec);
                }
                else {
                    sumtime = 59 + 59 * 60 + 23 * 3600;
                    lab_countDown.text = '任务刷新时间：' + '23' + ':' + '59' + ':' + '59';
                }
            });
            return [difhour, difmin, difsec];
        }
        static addbloodline(object, x, y) {
            let bloodline = new Laya.Sprite();
            bloodline.graphics.drawLine(-20, -60, 20, -60, '#222222', 4);
            bloodline.name = 'bloodline';
            object.addChild(bloodline);
            let bloodline2 = new Laya.Sprite();
            bloodline2.graphics.drawLine(-20, -60, 20, -60, 'green', 4);
            bloodline2.name = 'bloodline2';
            bloodline.addChild(bloodline2);
            bloodline.x = x;
            bloodline.y = y;
            return bloodline;
        }
        static addredtippoint(object, skinurl = 'ui/ass1/redpoint.png') {
            let redtips = new Laya.Image;
            redtips.name = 'redtips';
            redtips.skin = skinurl;
            object.addChild(redtips);
            redtips.width = 32;
            redtips.height = 32;
            redtips.x = object.width - 25;
            redtips.y = -16;
        }
        static delredtippoint(object, skinurl = 'ui/ass1/redpoint.png') {
            while (object.getChildByName('redtips')) {
                let redtips = object.getChildByName('redtips');
                if (redtips) {
                    redtips.removeSelf();
                    redtips.destroy();
                }
            }
        }
        static transition1() {
            let img1 = new Laya.Image;
            img1.skin = 'ui/z_bigpic/Main_BG.jpg';
            img1.width = Laya.stage.width;
            img1.height = Laya.stage.height;
            let x = 0;
            let y = -Laya.stage.height;
            img1.pos(x, 0);
            img1.zOrder = 9999;
            Laya.stage.addChild(img1);
            img1.name = 'img1';
            img1.on(Laya.Event.MOUSE_DOWN, img1, (e) => { e.stopPropagation(); });
            img1.on(Laya.Event.MOUSE_MOVE, img1, (e) => { e.stopPropagation(); });
            img1.on(Laya.Event.MOUSE_UP, img1, (e) => { e.stopPropagation(); });
            Laya.loader.create("prefab/startmiddle.json", Laya.Handler.create(this, (res) => {
                let startmiddle = Laya.loader.getRes("prefab/startmiddle.json");
                let cell = new Laya.View();
                cell.createView(startmiddle);
                img1.addChild(cell);
                cell.pos(Laya.stage.width, Laya.stage.height / 2);
            }));
            Laya.Tween.to(img1, { y: 0 }, 88, Laya.Ease.quartIn, Laya.Handler.create(this, () => { }));
        }
        static transition2() {
            Laya.timer.once(1500, this, function () {
                let img1 = Laya.stage.getChildByName('img1');
                if (img1) {
                    let img2 = new Laya.Image;
                    img2.skin = 'ui/z_bigpic/Main_BG.jpg';
                    img2.width = Laya.stage.width;
                    img2.height = Laya.stage.height;
                    let x = 0;
                    let y = 0;
                    img2.pos(x, y);
                    Laya.stage.addChild(img2);
                    img1.removeSelf();
                    img1.destroy();
                    img2.on(Laya.Event.MOUSE_DOWN, img2, (e) => { e.stopPropagation(); });
                    img2.on(Laya.Event.MOUSE_MOVE, img2, (e) => { e.stopPropagation(); });
                    img2.on(Laya.Event.MOUSE_UP, img2, (e) => { e.stopPropagation(); });
                    Laya.stage.event('guodu2');
                    img2.zOrder = 9999;
                    Laya.loader.create("prefab/startmiddle.json", Laya.Handler.create(this, (res) => {
                        let startmiddle = Laya.loader.getRes("prefab/startmiddle.json");
                        let cell = new Laya.View();
                        cell.createView(startmiddle);
                        img2.addChild(cell);
                        cell.pos(Laya.stage.width, Laya.stage.height / 2);
                    }));
                    Laya.Tween.to(img2, { y: -Laya.stage.height }, 1, Laya.Ease.quartIn, Laya.Handler.create(this, () => {
                        Laya.stage.event('trasitionover');
                        img2.removeSelf();
                        img2.destroy(true);
                    }));
                }
            });
        }
        static InverseTransformPoint(origin, point) {
            var xx = new Laya.Vector3();
            origin.getRight(xx);
            var yy = new Laya.Vector3();
            origin.getUp(yy);
            var zz = new Laya.Vector3();
            origin.getForward(zz);
            var zz1 = new Laya.Vector3(-zz.x, -zz.y, -zz.z);
            var x = this.ProjectDistance(point, origin.position, xx);
            var y = this.ProjectDistance(point, origin.position, yy);
            var z = this.ProjectDistance(point, origin.position, zz1);
            var value = new Laya.Vector3(x, y, z);
            return value;
        }
        static TransformPoint(origin, point) {
            var value = new Laya.Vector3();
            Laya.Vector3.transformQuat(point, origin.rotation, value);
            Laya.Vector3.add(value, origin.position, value);
            return value;
        }
        static ProjectDistance(A, C, B) {
            var CA = new Laya.Vector3();
            Laya.Vector3.subtract(A, C, CA);
            var angle = this.Angle2(CA, B) * Math.PI / 180;
            var distance = Laya.Vector3.distance(A, C);
            distance *= Math.cos(angle);
            return distance;
        }
        static Angle2(ma, mb) {
            var v1 = (ma.x * mb.x) + (ma.y * mb.y) + (ma.z * mb.z);
            var ma_val = Math.sqrt(ma.x * ma.x + ma.y * ma.y + ma.z * ma.z);
            var mb_val = Math.sqrt(mb.x * mb.x + mb.y * mb.y + mb.z * mb.z);
            var cosM = v1 / (ma_val * mb_val);
            if (cosM < -1)
                cosM = -1;
            if (cosM > 1)
                cosM = 1;
            var angleAMB = Math.acos(cosM) * 180 / Math.PI;
            return angleAMB;
        }
        static WorldToScreen2(camera, point) {
            var pointA = this.InverseTransformPoint(camera.transform, point);
            var distance = pointA.z;
            var out = new Laya.Vector3();
            camera.viewport.project(point, camera.projectionViewMatrix, out);
            var value = new Laya.Vector3(out.x / Laya.stage.clientScaleX, out.y / Laya.stage.clientScaleY, distance);
            return value;
        }
        static ScreenToWorld(camera, point) {
            var distance = point.z;
            var halfFOV = (camera.fieldOfView * 0.5) * Math.PI / 180;
            var height = distance * Math.tan(halfFOV);
            var width = height * camera.aspectRatio;
            var lowerLeft = new Laya.Vector3();
            var tx = camera.transform;
            var right = new Laya.Vector3();
            tx.getRight(right);
            var xx = new Laya.Vector3(right.x * width, right.y * width, right.z * width);
            Laya.Vector3.subtract(tx.position, xx, lowerLeft);
            var up = new Laya.Vector3();
            tx.getUp(up);
            var yy = new Laya.Vector3(up.x * height, up.y * height, up.z * height);
            Laya.Vector3.subtract(lowerLeft, yy, lowerLeft);
            var forward = new Laya.Vector3();
            tx.getForward(forward);
            var zz = new Laya.Vector3(-forward.x * distance, -forward.y * distance, -forward.z * distance);
            Laya.Vector3.add(lowerLeft, zz, lowerLeft);
            var v = new Laya.Vector3();
            v.x = width / Laya.stage.width * point.x * 2;
            v.y = height / Laya.stage.height * point.y * 2;
            v.z = 0;
            var value = new Laya.Vector3();
            lowerLeft = this.InverseTransformPoint(tx, lowerLeft);
            Laya.Vector3.add(lowerLeft, v, value);
            value = this.TransformPoint(tx, value);
            return value;
        }
        static getAngle(_a, _b) {
            let b = new Laya.Vector3(_b.x, _b.y, _b.z);
            let a = new Laya.Vector3(_a.x, _a.y, _a.z);
            b.x -= a.x;
            b.z -= a.z;
            let deltaAngle = 0;
            if (b.x == 0 && b.z == 0) {
                return 0;
            }
            else if (b.x > 0 && b.z > 0) {
                deltaAngle = 0;
            }
            else if (b.x > 0 && b.z == 0) {
                return 90;
            }
            else if (b.x > 0 && b.z < 0) {
                deltaAngle = 180;
            }
            else if (b.x == 0 && b.z < 0) {
                return 180;
            }
            else if (b.x < 0 && b.z < 0) {
                deltaAngle = -180;
            }
            else if (b.x < 0 && b.z == 0) {
                return -90;
            }
            else if (b.x < 0 && b.z > 0) {
                deltaAngle = 0;
            }
            let angle = this.radianToAngle(Math.atan(b.x / b.z)) - deltaAngle;
            return angle;
        }
        static radianToAngle(radian) {
            let angle = radian / Math.PI * 180;
            return angle;
        }
        static DeepCopy(source) {
            if (null == source || {} == source || [] == source) {
                return source;
            }
            let newObject;
            let isArray = false;
            if (source.length) {
                newObject = [];
                isArray = true;
            }
            else {
                newObject = {};
                isArray = false;
            }
            for (let key of Object.keys(source)) {
                if (null == source[key]) {
                    if (isArray) {
                        newObject.push(null);
                    }
                    else {
                        newObject[key] = null;
                    }
                }
                else {
                    let sub = (typeof source[key] == 'object') ? this.DeepCopy(source[key]) : source[key];
                    if (isArray) {
                        newObject.push(sub);
                    }
                    else {
                        newObject[key] = sub;
                    }
                }
            }
            return newObject;
        }
        static changeTexture(MeshSpriteObj, textureUrl) {
            let bg1material = MeshSpriteObj.meshRenderer.material;
            Laya.loader.load(textureUrl, Laya.Handler.create(this, (texture) => {
                bg1material.albedoTexture = texture;
            }));
        }
        static getMaterial(MeshSpriteObj, isSharedMatretial) {
            if (isSharedMatretial) {
                var MeshSpriteMaterial = MeshSpriteObj.meshRenderer.sharedMaterial;
            }
            else {
                var MeshSpriteMaterial = MeshSpriteObj.meshRenderer.material;
            }
            return MeshSpriteMaterial;
        }
        static rotateMaps(matrix) {
            const n = matrix.length;
            for (let i = n - 1; i >= 0; i--) {
                for (let j = 0; j < n; j++) {
                    const current = matrix[i][j];
                    matrix[j].push(current);
                    if (j === n - 1) {
                        matrix[i].splice(0, n);
                    }
                }
            }
            return matrix;
        }
        static rotationarray(matrix, spinangle) {
            let resultarray = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[i].length; j++) {
                    if (spinangle == 0) {
                        resultarray[i][j] = matrix[i][j];
                    }
                    else if (spinangle == 90) {
                        resultarray[i][j] = matrix[matrix.length - 1 - j][i];
                    }
                    else if (spinangle == 180) {
                        resultarray[i][j] = matrix[matrix.length - 1 - i][matrix.length - 1 - j];
                    }
                    else if (spinangle == 270) {
                        resultarray[i][j] = matrix[j][matrix.length - 1 - i];
                    }
                }
            }
            return resultarray;
        }
        static xrotationarray(matrix) {
            let resultarray = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[i].length; j++) {
                    resultarray[i][j] = matrix[matrix.length - 1 - i][j];
                }
            }
            return resultarray;
        }
        static rotationpoint(matrix, spinangle, point) {
            let i = 0;
            let j = 0;
            if (spinangle == 0) {
                i = point[0];
                j = point[1];
            }
            else if (spinangle == 90) {
                i = point[1];
                j = matrix.length - 1 - point[0];
            }
            else if (spinangle == 180) {
                i = matrix.length - 1 - point[0];
                j = matrix.length - 1 - point[1];
            }
            else if (spinangle == 270) {
                i = matrix.length - 1 - point[1];
                j = point[0];
            }
            return [i, j];
        }
        static xrotationpoint(matrix, point) {
            let i = 0;
            let j = 0;
            i = matrix.length - 1 - point[0];
            j = j;
            return [i, j];
        }
        static countProByWeight(dataArr, isRepeat = true, count = 1) {
            let natrueArr = dataArr;
            let arr = natrueArr.concat();
            let _data = [];
            for (let c = 1; c <= count; c++) {
                let totalWeight = 0;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].weight) {
                        totalWeight += Number(arr[i].weight);
                    }
                    else {
                        totalWeight += Number(arr[i].rate);
                    }
                }
                let r = this.getRandomIntInclusive(1, totalWeight);
                let n = 0;
                for (let _i = 0; _i < arr.length; _i++) {
                    let data = arr[_i];
                    if (data.weight) {
                        var w = Number(data.weight);
                    }
                    else {
                        var w = Number(data.rate);
                    }
                    if (r > n && r <= n + w) {
                        _data.push(data);
                        if (!isRepeat)
                            arr.splice(_i, 1);
                        break;
                    }
                    else
                        n += w;
                }
            }
            return _data;
        }
        static compare(property) {
            return function (a, b) {
                if (a && b) {
                    var value1 = a[property];
                    var value2 = b[property];
                    if (value1) {
                        if (value2) {
                            return -(value1 - value2);
                        }
                    }
                    else
                        return 0;
                }
            };
        }
        static deletezero(num) {
            num = Number(num);
            let s = num.toString();
            if (s.indexOf(".") > 0) {
                s = s.replace("0+?$", "");
                s = s.replace("[.]$", "");
            }
            return s;
        }
        static createMask() {
            var layer = new Laya.View();
            layer.size(Laya.stage.width, Laya.stage.height);
            layer.zOrder = 98;
            var bg = new Laya.Box();
            bg.size(Laya.stage.width, Laya.stage.height);
            bg.bgColor = '#000000';
            bg.alpha = 0.8;
            layer.addChild(bg);
            bg.mouseEnabled = false;
            bg.on(Laya.Event.MOUSE_DOWN, bg, (e) => { e.stopPropagation(); });
            bg.on(Laya.Event.MOUSE_MOVE, bg, (e) => { e.stopPropagation(); });
            bg.on(Laya.Event.MOUSE_UP, bg, (e) => { e.stopPropagation(); });
            Laya.loader.create("prefab/dialog2.json", Laya.Handler.create(this, function () {
                let cellView = Laya.loader.getRes("prefab/dialog2.json");
                let cell = new Laya.View();
                cell.createView(cellView);
                cell.name = 'dialog2';
                layer.addChild(cell);
                cell.x = bg.width / 2;
                cell.y = bg.height / 2;
                cell.visible = false;
                Laya.stage.event('addfinish');
            }));
            return layer;
        }
        static ChangeListLabelFont(parent) {
            if (parent instanceof Laya.List) {
                var itemRenderTemp = parent.itemRender;
                var childs = itemRenderTemp["child"];
            }
            else
                var childs = parent;
            for (var childI = 0; childI < childs.length; childI++) {
                var childTemp = childs[childI];
                if (this.ttfName) {
                    if (childTemp["type"] == "Label") {
                        childTemp["props"]["font"] = this.ttfName;
                    }
                    var childTempsChildre = childTemp["child"];
                    if (childTempsChildre && childTempsChildre.length != 0) {
                        this.ChangeListLabelFont(childTempsChildre);
                    }
                }
            }
        }
        static findAndChangeFont(parent, isChangeFont = true) {
            for (let i = 0; i < parent._children.length; i++) {
                let child = parent._children[i];
                if (this.ttfName && isChangeFont) {
                    if (child instanceof Laya.Label) {
                        this.ChangeLabel(child);
                    }
                    if (child._children.length != 0) {
                        this.findAndChangeFontChild(child);
                    }
                }
            }
        }
        static findAndChangeFontChild(parent) {
            for (let i = 0; i < parent._children.length; i++) {
                let child = parent._children[i];
                if (this.ttfName) {
                    if (child instanceof Laya.Label) {
                        this.ChangeLabel(child);
                    }
                    if (child._children.length != 0) {
                        this.findAndChangeFontChild(child);
                    }
                }
            }
        }
        static ChangeLabel(child) {
            if (child.name == "Num_Font") {
                child.font = this.ttfName;
            }
            else {
                child.font = this.ttfName;
            }
        }
        getBezierPos(ctrlPosArr, precison) {
            var resArr = [];
            precison *= 2;
            var number = ctrlPosArr.length;
            if (number < 2) {
                console.log("控制点数不能小于 2");
                return resArr;
            }
            var yangHuiArr = this.getYangHuiTriangle(number);
            for (var i = 0; i < precison; i++) {
                if (i % 2 == 1) {
                    continue;
                }
                var t = i / precison;
                var tmpX = 0;
                var tmpY = 0;
                var tmpZ = 0;
                for (let j = 0; j < number; j++) {
                    tmpX += Math.pow(1 - t, number - j - 1) * ctrlPosArr[j].x * Math.pow(t, j) * yangHuiArr[j];
                    tmpY += Math.pow(1 - t, number - j - 1) * ctrlPosArr[j].y * Math.pow(t, j) * yangHuiArr[j];
                    tmpZ += Math.pow(1 - t, number - j - 1) * ctrlPosArr[j].z * Math.pow(t, j) * yangHuiArr[j];
                }
                resArr.push(new Laya.Vector3(tmpX, tmpY, tmpZ));
            }
            return resArr;
        }
        getYangHuiTriangle(num) {
            var yangHuiArr = new Array();
            if (num === 1) {
                yangHuiArr[0] = 1;
            }
            else {
                yangHuiArr[0] = yangHuiArr[1] = 1;
                for (var i = 3; i <= num; i++) {
                    var t = new Array();
                    for (var j = 0; j < i - 1; j++) {
                        t[j] = yangHuiArr[j];
                    }
                    yangHuiArr[0] = yangHuiArr[i - 1] = 1;
                    for (var j = 0; j < i - 2; j++) {
                        yangHuiArr[j + 1] = t[j] + t[j + 1];
                    }
                }
            }
            return yangHuiArr;
        }
    }
    Utils.ttfName = "SimHei";
    Utils.NumfontName = "SimHei";

    var Enum_url;
    (function (Enum_url) {
        Enum_url["url_scene"] = "res/unity/LayaScene_";
    })(Enum_url || (Enum_url = {}));

    class sceneMgr {
        static openScene(sceneName, complete) {
            Laya.Scene3D.load(Enum_url.url_scene + sceneName + this.common_file + sceneName + ".ls", complete);
        }
    }
    sceneMgr.Instance = new sceneMgr();
    sceneMgr.common_file = "/Conventional/";

    class GameCtrl extends Laya.Script {
        constructor() {
            super();
            this.circly = new Laya.Sprite();
            this.point = new Laya.Vector2();
            this._outHitInfo = new Laya.HitResult();
            GameCtrl.instance = this;
        }
        onAwake() {
            console.log("游戏控制脚本唤醒");
            this._ray = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0));
            this.MultipleCamera();
        }
        onUpdate() {
        }
        onDisable() {
            Laya.stage.offAllCaller(this);
            Laya.timer.clearAll(this);
            this.destroy();
        }
        judgIsSeen() {
            var head = Utils.findChildNode(this.Player2, "mixamorig_Hips/mixamorig_Spine/mixamorig_Spine1/mixamorig_Spine2/mixamorig_Neck/mixamorig_Head/mixamorig_HeadTop_End");
            var headResult = this.RayInspection(head.transform.position);
            var lefthand = Utils.findChildNode(this.Player2, "mixamorig_Hips/mixamorig_Spine/mixamorig_Spine1/mixamorig_Spine2/mixamorig_LeftShoulder/mixamorig_LeftArm/mixamorig_LeftForeArm/mixamorig_LeftHand/mixamorig_LeftHandIndex1/mixamorig_LeftHandIndex2/mixamorig_LeftHandIndex3/mixamorig_LeftHandIndex4");
            var lefthandResult = this.RayInspection(lefthand.transform.position);
            var righthand = Utils.findChildNode(this.Player2, "mixamorig_Hips/mixamorig_Spine/mixamorig_Spine1/mixamorig_Spine2/mixamorig_RightShoulder/mixamorig_RightArm/mixamorig_RightForeArm/mixamorig_RightHand/mixamorig_RightHandIndex1/mixamorig_RightHandIndex2/mixamorig_RightHandIndex3/mixamorig_RightHandIndex4");
            var righthandResult = this.RayInspection(righthand.transform.position);
            var leftleg = Utils.findChildNode(this.Player2, "mixamorig_Hips/mixamorig_LeftUpLeg/mixamorig_LeftLeg/mixamorig_LeftFoot/mixamorig_LeftToeBase/mixamorig_LeftToe_End");
            var leftlegResult = this.RayInspection(leftleg.transform.position);
            var rightleg = Utils.findChildNode(this.Player2, "mixamorig_Hips/mixamorig_RightUpLeg/mixamorig_RightLeg/mixamorig_RightFoot/mixamorig_RightToeBase/mixamorig_RightToe_End");
            var rightlegResult = this.RayInspection(rightleg.transform.position);
            console.log(headResult, lefthandResult, righthandResult, leftlegResult, rightlegResult);
            if (headResult[0] || lefthandResult[0] || righthandResult[0] || leftlegResult[0] || rightlegResult[0]) {
                platform.showToast("被摄像机捕捉到咯~");
                let centerPoint = new Laya.Vector2(0, 0);
                let count = 0;
                if (headResult[0]) {
                    centerPoint.x += headResult[1].x;
                    centerPoint.y += headResult[1].y;
                    count++;
                }
                if (lefthandResult[0]) {
                    centerPoint.x += lefthandResult[1].x;
                    centerPoint.y += lefthandResult[1].y;
                    count++;
                }
                if (righthandResult[0]) {
                    centerPoint.x += righthandResult[1].x;
                    centerPoint.y += righthandResult[1].y;
                    count++;
                }
                if (leftlegResult[0]) {
                    centerPoint.x += leftlegResult[1].x;
                    centerPoint.y += leftlegResult[1].y;
                    count++;
                }
                if (rightlegResult[0]) {
                    centerPoint.x += rightlegResult[1].x;
                    centerPoint.y += rightlegResult[1].y;
                    count++;
                }
                centerPoint.x = centerPoint.x /= count;
                centerPoint.y = centerPoint.y /= count;
                console.log(centerPoint);
                this.circly.graphics.clear();
                Laya.stage.addChild(this.circly);
                this.circly.graphics.drawCircle(centerPoint.x, centerPoint.y, 50, "#ff0000");
            }
            else {
                platform.showToast("躲藏成功，你是最靓的仔~");
            }
        }
        RayInspection(inspectionPos) {
            var GameScene = Laya.stage.getChildByName('scene3D');
            var position2D = new Laya.Vector4();
            this.camera2.worldToViewportPoint(inspectionPos, position2D);
            this.camera2.viewportPointToRay(new Laya.Vector2(position2D.x, position2D.y), this._ray);
            GameScene.physicsSimulation.rayCast(this._ray, this._outHitInfo);
            if (position2D.y < 0 || position2D.y > Laya.stage.height || position2D.x < 0 || position2D.x > Laya.stage.width)
                return [false, position2D];
            if (!this._outHitInfo.succeeded || !this._outHitInfo.collider)
                return [false, position2D];
            if (this._outHitInfo.collider.owner.name.indexOf('Player') > -1)
                return [true, position2D];
            else
                return [false, position2D];
        }
        MultipleCamera() {
            sceneMgr.openScene("Scene001", Laya.Handler.create(this, (tempScene) => {
                Laya.stage.addChildAt(tempScene, 0);
                tempScene.name = 'scene3D';
                Utils.setLightData(tempScene.getChildByName("Directional Light"), Laya.ShadowMode.SoftLow);
                this.camera1 = tempScene.getChildByName('CameraPoint').getChildByName('Main Camera');
                this.camera1.removeAllLayers();
                this.camera1.addLayer(4);
                this.camera1.addLayer(2);
                this.camera2 = tempScene.getChildByName('Road').getChildByName('MeshPhone (1)').getChildByName('Camera');
                this.camera2.removeAllLayers();
                this.camera2.addLayer(4);
                this.camera2.addLayer(3);
                this.Player1 = tempScene.getChildByName('CameraPoint').getChildByName('RolePoint').getChildByName('Role001');
                this.Player1.name = "Player";
                this.Player2 = Laya.Sprite3D.instantiate(this.Player1, tempScene.getChildByName('CameraPoint').getChildByName('RolePoint'));
                this.Player2.name = 'PlayerRed';
                this.Player2.layer = 3;
                this.Player2.getChildAt(0).layer = 3;
                this.Player2.getChildAt(1).layer = 3;
                this.Player2.transform.localPosition = this.Player1.transform.localPosition;
                this.Player2.getChildAt(0).skinnedMeshRenderer.material.albedoColor = new Laya.Vector4(255, 0, 0, 255);
                this.Player1.addComponent(PlayerCtrl);
                var rendertexture = new Laya.RenderTexture(576, Laya.stage.height);
                var Quad = tempScene.getChildByName('Road').getChildByName('MeshPhone (1)').getChildByName('Mobile_Screen');
                Quad.meshRenderer.material.albedoTexture = rendertexture;
                this.camera2.renderTarget = rendertexture;
                Laya.timer.once(6000, this, () => {
                    var texture = new Laya.RenderTexture(500, Laya.stage.height - 124);
                    texture = Laya.Camera.drawRenderTextureByScene(this.camera2, Laya.stage.getChildByName('scene3D'), texture);
                    var rtex = new Laya.Texture(texture, Laya.Texture.DEF_UV);
                    Game.instance.ScreenShot.graphics.drawTexture(rtex);
                    Game.instance.ScreenShotBox.visible = true;
                    Game.instance.ScreenShotBox.on(Laya.Event.CLICK, this, () => {
                        this.circly.graphics.clear();
                        Game.instance.ScreenShotBox.visible = false;
                        Laya.timer.once(6000, this, () => {
                            var texture = new Laya.RenderTexture(500, Laya.stage.height - 124);
                            Laya.Camera.drawRenderTextureByScene(this.camera2, Laya.stage.getChildByName('scene3D'), texture);
                            var rtex = new Laya.Texture(texture, Laya.Texture.DEF_UV);
                            Game.instance.ScreenShot.graphics.drawTexture(rtex);
                            Game.instance.ScreenShotBox.visible = true;
                            Game.instance.ScreenShotBox.on(Laya.Event.CLICK, this, () => {
                                Game.instance.ScreenShotBox.visible = false;
                            });
                            var Quad = tempScene.getChildByName('Road').getChildByName('MeshPhone (1)').getChildByName('Mobile_Screen');
                            Quad.meshRenderer.material.albedoTexture = rendertexture;
                            this.camera2.renderTarget = rendertexture;
                            this.judgIsSeen();
                        });
                    });
                    var Quad = tempScene.getChildByName('Road').getChildByName('MeshPhone (1)').getChildByName('Mobile_Screen');
                    Quad.meshRenderer.material.albedoTexture = rendertexture;
                    this.camera2.renderTarget = rendertexture;
                    this.judgIsSeen();
                });
            }));
        }
    }
    GameCtrl.instance = null;

    var Enum_viewName;
    (function (Enum_viewName) {
        Enum_viewName["View_Load"] = "test/Load";
        Enum_viewName["View_Game"] = "test/Game";
    })(Enum_viewName || (Enum_viewName = {}));

    class ViewMgr {
        static openView(viewUrl, closeOther, param, complete) {
            Laya.Scene.open(viewUrl + '.json', closeOther, param, complete);
        }
    }
    ViewMgr.Instance = new ViewMgr();
    ViewMgr.view_detailView = null;
    ViewMgr.view_menu = null;
    ViewMgr.view_box = null;
    ViewMgr.view_win = null;
    ViewMgr.view_fail = null;
    ViewMgr.view_revival = null;
    ViewMgr.view_rank = null;
    ViewMgr.view_skin_menu = null;
    ViewMgr.view_regist = null;
    ViewMgr.view_money = null;
    ViewMgr.view_turn = null;
    ViewMgr.view_freeSkin = null;
    ViewMgr.view_task = null;
    ViewMgr.view_celebrate = null;
    ViewMgr.view_main = null;
    ViewMgr.view_store = null;
    ViewMgr.view_incomeAdd = null;
    ViewMgr.view_offline = null;
    ViewMgr.view_newSkin = null;
    ViewMgr.view_newSkinReward = null;
    ViewMgr.view_turnView = null;
    ViewMgr.view_powerView = null;
    ViewMgr.view_giftBoxView = null;
    ViewMgr.view_bookView = null;

    class Load extends ui.test.LoadUI {
        constructor() {
            super();
            Load.instance = this;
        }
        onAwake() {
            this.width = Laya.stage.width;
            this.height = Laya.stage.height;
            Laya.stage.addComponent(GameCtrl);
        }
        onOpened() {
            Laya.timer.once(3300, this, this.openMainUI);
        }
        openMainUI() {
            ViewMgr.openView(Enum_viewName.View_Game, true);
        }
    }

    class GameConfig {
        constructor() {
        }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("view/Game.ts", Game);
            reg("view/Load.ts", Load);
        }
    }
    GameConfig.width = 576;
    GameConfig.height = 1024;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "vertical";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "test/Load.scene";
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
            GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
        }
    }
    new Main();

}());
