// import { GameEvent } from "../Game/Control/GameEvent";
let NativeBanner;
import { LwgScene } from "./Lwg";

export class OPPOUtil {

    private bannerId = "344961";
    private nativeId = "355622";
    private nativeId2 = "355619";

    private insertId = "";
    private videoId = "355621";
    public appId = "30586339";
    public isOnline = true;
    public shStatus = 0;

    constructor() {

    }
    /**后台审核状态 */
    getStatus() {
        let httpRequest = new Laya.HttpRequest();
        httpRequest.send("https://account.api.snsfun.com/XyxApi/custom", "gameid=444&v=1.0.0", 'post', 'text', ["Content-Type", "application/x-www-form-urlencoded"])
        httpRequest.once(Laya.Event.COMPLETE, this, (data) => {
            console.log("data:", data)
            if (JSON.parse(data).sh) {
                this.shStatus = JSON.parse(data).sh;
            }
        });
    }
    /**获取网络状态 */
    getNetWorkType() {
        Laya.Browser.window.qg.onNetworkStatusChange((res) => {
            if (!res.isConnected) {
                this.isOnline = false;
            }
            console.log(res.isConnected, res.networkType);
        })
    }
    /**banner广告 */
    public nativeBannerView = null;
    private bannerHeight = 200;
    showBanner(cb = null, fail = null) {
        console.log("创建banner-----------")
        if (!window["qg"] || !this.showOppoAd()) {
            fail && fail();
            Laya.timer.clear(this, this.showBanner);
            Laya.timer.loop(45000, this, this.showBanner);
            return;
        }

        if (this.nativeBannerView && this.nativeBannerView.parent) {
            this.nativeBannerView.removeSelf();
            this.nativeBannerView = null;
            this.createNativeAd2(() => {
                this.nativeBannerView = new NativeBanner();
                this.nativeBannerView.height = this.bannerHeight;
                Laya.stage.addChild(this.nativeBannerView);
                cb && cb();
            });
        } else {
            if (this.nativeAdBannner && this.nativieAdListBanner) {
                this.nativeBannerView = new NativeBanner();
                this.nativeBannerView.height = this.bannerHeight;
                Laya.stage.addChild(this.nativeBannerView);
                cb && cb();
            } else {
                this.createNativeAd2(() => {
                    this.nativeBannerView = new NativeBanner();
                    this.nativeBannerView.height = this.bannerHeight;
                    Laya.stage.addChild(this.nativeBannerView);
                    cb && cb();
                });
            }
        }

    }

    hideBanner() {
        console.log("隐藏banner");
        if (!window["qg"]) return;

        if (this.nativeBannerView && this.nativeBannerView.parent) {
            this.nativeBannerView.removeSelf();
            this.nativeBannerView = null;
        }
        Laya.timer.clearAll(this);
        this.createNativeAd2(null);
    }

    setBannerHeight(height) {
        if (this.nativeBannerView && this.nativeBannerView.parent) {
            this.nativeBannerView.visible = false;
            this.nativeBannerView.height = height;
            this.nativeBannerView.y += this.bannerHeight - height;
            this.bannerHeight = height;
            setTimeout(() => {
                this.nativeBannerView.visible = true;
            }, 500);
        }
    }

    /**原生广告 */
    public nativeAd;
    public nativieAdList;
    createNativeAd(cb = null) {
        if (!Laya.Browser.window.qg) {
            return;
        }
        console.log("开始创建原生icon广告")
        if (this.nativeAd) {
            this.nativeAd.offLoad();
            this.nativeAd.offError();
            // this.nativeAd.destroy();
            // this.nativeAd = null;
            // this.nativieAdList = null;
        }

        let self = this;
        Laya.timer.clear(this, this.createNativeAd);
        Laya.timer.loop(60 * 1000, this, this.createNativeAd);
        this.nativeAd = Laya.Browser.window.qg.createNativeAd({
            posId: self.nativeId
        });
        this.nativeAd.load();

        this.nativeAd.onLoad(function (res) {
            if (res && res.adList) {
                cb && cb();
                self.nativieAdList = res.adList.pop();
                console.log("原生icon广告onload", JSON.stringify(self.nativieAdList));
            }
        });
        this.nativeAd.onError(function (err) {
            console.log("原生icon广告error:", JSON.stringify(err))
        })
    }

    /**banner原生广告 */
    public nativeAdBannner;
    public nativieAdListBanner;
    createNativeAd2(cb) {
        if (!Laya.Browser.window.qg) {
            return;
        }

        if (this.nativeAdBannner) {
            this.nativeAdBannner.offLoad();
            this.nativeAdBannner.offError();
            this.nativeAdBannner.destroy();
            this.nativeAdBannner = null;
            this.nativieAdListBanner = null;
        }

        let self = this;
        this.nativeAdBannner = Laya.Browser.window.qg.createNativeAd({
            posId: self.nativeId2
        });
        this.nativeAdBannner.load();
        this.nativeAdBannner.onLoad(function (res) {
            if (res && res.adList) {
                self.nativieAdListBanner = res.adList.pop();
                cb && cb();
                console.log("原生banner广告onload", JSON.stringify(self.nativieAdListBanner));
            }
        });
        this.nativeAdBannner.onError(function (err) {
            console.log("原生banner广告error:", JSON.stringify(err))
        })
    }

    //
    // public iconAD = null;
    // public iconMS = null;
    // //请求原生广告
    // public createNativeAdICON() {
    //     var _this = this;
    //     if (!Laya.Browser.window.qg) return;
    //     if (SelfGameAllManager.Instance.iconAD) {
    //         SelfGameAllManager.Instance.iconAD.destroy();
    //         SelfGameAllManager.Instance.iconAD = null;
    //         SelfGameAllManager.Instance.iconMS = null;
    //     }
    //     var nativeAd = Laya.Browser.window.qg.createNativeAd({
    //         posId: "278019"
    //     })
    //     nativeAd.onLoad(function (res) {
    //         //获取原生广告参数，并赋值
    //         SelfGameAllManager.Instance.iconAD = nativeAd;
    //         SelfGameAllManager.Instance.iconMS = res.adList.pop();
    //         console.log('icon广告加载', SelfGameAllManager.Instance.iconMS);
    //         //拿到原生广告以后立刻上报，上报以后，玩家点击才算有效点击
    //         nativeAd.reportAdShow({
    //             adId: SelfGameAllManager.Instance.iconMS.adId
    //         })

    //     })
    //     nativeAd.onError(function (e) {
    //         SelfGameAllManager.Instance.iconMS = null;
    //         nativeAd.offLoad();

    //         console.error(e);
    //     })
    //     nativeAd.load();
    // }
    // //玩家点击事件上报以后，玩家点击才算有效点击
    // public clickNativeAdICON() {
    //     if (!Laya.Browser.window.qg) {
    //         return;
    //     }
    //     var _this = SelfGameAllManager.Instance;
    //     if (SelfGameAllManager.Instance.iconAD) {
    //         SelfGameAllManager.Instance.iconAD.reportAdClick({
    //             adId: SelfGameAllManager.Instance.iconMS.adId
    //         })
    //     }
    // }
    // //游戏界面的广告请求参数，通过这个方法把参数传递出去，传递之前要经过规则判定
    // public getNativeAdICON(callback) {
    //     //官方设定oppo前一分钟不弹出任何广告，这里要程序自己实现
    //     //第一个return判断是看看游戏有没有超过1分钟
    //     if (GameConst.timesixty == 0) {
    //         let temp = +new Date();
    //         let temp2 = Math.floor(temp - SelfGameAllManager.Instance.recordtime) / 1000;
    //         if (temp2 < 60) {
    //             callback(null)
    //             return
    //         }
    //     }
    //     if (GameConst.timethrty == 1) {
    //         callback(SelfGameAllManager.Instance.iconMS);
    //         return
    //     }
    // }

    // createNativeAd() {
    //     var that = this;
    //     SelfGameAllManager.Instance.getNativeAdICON(function (res) {
    //         if (res == null) {
    //             that.Btn_Close.centerX = 0;
    //             that.NativeAdBox.visible = false;
    //             that.Btn_CheckAd.visible = false;
    //             return
    //         }
    //         if (res.imgUrlList[0] != undefined) {
    //             that.NativeAd.skin = res.imgUrlList[0];
    //         } else {
    //             that.NativeAd.skin = res.icon;
    //         }
    //         that.Btn_CheckAd.visible = true;
    //         that.NativeAdBox.visible = true;
    //     })
    // }
    // clickNativeAd() {
    //     SelfGameAllManager.Instance.clickNativeAdICON();
    // }
    // closeNativeAd() {
    //     if (GameConst.bigNavAd == 0) {
    //         this.NativeAdBox.visible = false;
    //     } else {
    //         this.clickNativeAd()
    //     }
    // }

    /**插屏广告 */
    showInsertAd() {
        console.log("展示插屏");
        if (!Laya.Browser.window.qg || !this.isOnline) {
            return;
        }
        let self = this;
        var insertAd = Laya.Browser.window.qg.createInsertAd({
            posId: self.insertId
        })
        insertAd.load();
        insertAd.onError(function (err) {
            console.log("insertAd.onError res", JSON.stringify(err));
        })

        insertAd.onLoad(function () {
            console.log("插屏广告加载");
            insertAd.show();
        })
        insertAd.onClose(function () {
            // self.showBanner();
        })
    }

    /**判断是否展示插屏广告 */
    isShowInsertAd() {
        if (!this.nativieAdList) {
            return false;
        }
        let adTimes = Laya.LocalStorage.getItem("interAdTimes");
        if (!adTimes) {
            Laya.LocalStorage.setItem("interAdTimes", "1");
            let time = new Date().getTime();
            Laya.LocalStorage.setItem("interAdTime", "" + time);
            return true;
        } else {
            let thatday = parseInt(Laya.LocalStorage.getItem("interAdTime"));
            if (new Date(thatday).toDateString() == new Date().toDateString()) {
                if (parseInt(adTimes) > 7) {
                    console.log("adTimes:", parseInt(adTimes))
                    return false;
                } else {
                    //判断广告间隔
                    let timeMinus = new Date().getTime() - thatday;
                    if (timeMinus < 60000) {
                        console.log("timeMinus:", timeMinus,)
                        return false;
                    } else {
                        let times = parseInt(adTimes) + 1;
                        Laya.LocalStorage.setItem("interAdTimes", "" + times);
                        let time = new Date().getTime();
                        Laya.LocalStorage.setItem("interAdTime", "" + time);
                        return true;
                    }
                }
            } else {
                console.log("date:", new Date(thatday).toDateString(), new Date().toDateString())
                Laya.LocalStorage.setItem("interAdTimes", "1");
                let time = new Date().getTime();
                Laya.LocalStorage.setItem("interAdTime", "" + time);
                return true;
            }
        }
    }

    /**数据上报 */
    reportMonitor() {
        if (window["qg"]) {
            let platformVersionCode = Laya.Browser.window["qg"].getSystemInfoSync().platformVersionCode;
            if (platformVersionCode >= 1060) {
                Laya.Browser.window["qg"].reportMonitor('game_scene', 0)
            }
        }
    }

    /**广告初始化 */
    initAdService() {
        if (window["qg"] && this.isOnline) {
            let self = this;
            window["qg"].initAdService({
                appId: self.appId,
                isDebug: true,
                success: function (res) {
                    console.log("广告初始化成功");
                    self.createNativeAd();
                    self.createNativeAd2(null);
                    self.showBanner();
                    // GameUtil.showTips("广告初始化成功")
                },
                fail: function (res) {
                    console.log("广告初始化失败:" + res.code + res.msg);
                    // GameUtil.showTips("广告初始化失败:")
                },
                complete: function (res) {
                    console.log("广告初始化complete");
                }
            });
            // qg.setEnableDebug({
            //     enableDebug: true, // true 为打开，false 为关闭
            //     success: function () {
            //         // 以下语句将会在 vConsole 面板输出 
            //         console.log("test consol log");
            //         console.info("test console info");
            //         console.warn("test consol warn");
            //         console.debug("test consol debug");
            //         console.error("test consol error");
            //     },
            //     complete: function () {
            //     },
            //     fail: function () {
            //     }
            // });
        }
    }

    showVideo(winCall?: Function, failCall?: Function, type = 0) {
        if (!window["qg"]) {
            winCall && winCall();
            return;
        };
        if (!this.isOnline) {
            failCall && failCall();
            this.showToast('当前没有网络，请稍后再试');
            return;
        }
        let videoId = this.videoId;

        let qg = Laya.Browser.window.qg
        var videoAd = qg.createRewardedVideoAd({
            adUnitId: videoId
        });
        videoAd.load();
        let loadFun = function () {
            console.log('激励视频加载成功')
            videoAd.show();
            videoAd.offLoad(loadFun);
        }
        videoAd.onLoad(loadFun);
        let closeFun = function (res) {
            if (res.isEnded) {
                if (type != 0) {
                    //打点--观看结束
                    Laya.Browser.window.qg.leuok.adVideo({ type: type, subType: 4 });
                    //打点--获得奖励
                    Laya.Browser.window.qg.leuok.adVideo({ type: type, subType: 5 });
                }
                console.log('激励视频广告完成，发放奖励')
                winCall && winCall();
            } else {
                if (type != 0) {
                    //打点--视频中途关闭视频
                    Laya.Browser.window.qg.leuok.adVideo({ type: type, subType: 3 });
                }

                console.log('激励视频广告取消关闭，不发放奖励')
                failCall && failCall();
            }
            videoAd.offClose(closeFun);
        }
        videoAd.onClose(closeFun);
        let self = this;
        let errFun = function (err) {
            console.log(JSON.stringify(err));
            if (type != 0) {
                //打点--没有可观看的广告
                Laya.Browser.window.qg.leuok.adVideo({ type: type, subType: 6 });
            }
            self.showToast('当前没有广告，请稍后再试');
            videoAd.offError(errFun)
        }
        videoAd.onError(errFun);
    }

    showToast(str) {
        if (window["qg"]) {
            Laya.Browser.window.qg.showToast({
                title: str,
                icon: 'none',
                duration: 2000
            })
        }
    }

    vibrateShort() {
        if (Laya.Browser.window.qg) {
            Laya.Browser.window.qg.vibrateShort({
                success: function (res) { },
                fail: function (res) { },
                complete: function (res) { }
            })
        }
    }

    /**是否已创建桌面图标 */
    hasShortcutInstalled() {
        if (window["qg"]) {
            Laya.Browser.window.qg.hasShortcutInstalled({
                success: function (res) {
                    console.log("创建桌面图标：", res)
                    if (res == false) {
                        return false;
                    } else {
                        return true;
                    }
                },
                fail: function (err) {
                    return false;
                },
                complete: function () {

                }
            })
        } else {
            return false;
        }
    }

    /**创建桌面图标 */
    installShortcut(cb) {
        if (window["qg"]) {
            let self = this;
            Laya.Browser.window.qg.installShortcut({
                success: function () {
                    //接口调用成功
                    cb && cb();
                },
                fail: function (err) {
                },
                complete: function () { }
            })
        }
    }

    /**互推盒子九宫格广告 */
    showGamePortalAd() {
        if (Laya.Browser.window.qg.getSystemInfoSync().platformVersionCode >= 1076) {
            let self = this;
            var gamePortalAd = Laya.Browser.window.qg.createGamePortalAd({
                adUnitId: '355623'
            });
            gamePortalAd.load().then(function () {
                console.log('load success')
            }).catch(function (error) {
                console.log('load fail with:' + error.errCode + ',' + error.errMsg)
            });
            gamePortalAd.onLoad(function () {
                console.log('互推盒子九宫格广告加载成功')
                gamePortalAd.show();
                self.hideBanner();
            });
            gamePortalAd.onClose(function () {
                self.showBanner();
                // let sceneBase = new LwgScene.SceneBase();
                // sceneBase.evNotify(GameEvent.showNativeIcon)
            });
            gamePortalAd.onError(function () {
                self.showToast('加载出错，请稍后再试');
            })
        } else {
            console.log('快应用平台版本号低于1076，暂不支持互推盒子相关 API')
        }
    }


    /**指色渠道登录 */
    zsLogin() {
        if (!Laya.Browser.window.qg) {
            return;
        }
        let zs = window["zs"].sdk;
        zs.login((uid) => {
            console.log("zs 登录成功", uid);
            zs.init(uid);
        }, () => {
            console.log("zs 登录失败");
        })
    }
    private loginTime = new Date().getTime();
    public gamePlayed = false;

    showOppoAd() {
        let now = new Date().getTime();
        let timeMinus = (now - this.loginTime) / 1000;

        if (timeMinus > 30) {
            return true;
        } else {
            return false;
        }

    }

    /**无限体力 */
    public freeStamina = false;
}
var OppoUtil = new OPPOUtil();
export default OppoUtil;