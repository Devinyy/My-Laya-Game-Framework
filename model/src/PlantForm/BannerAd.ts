import platform from "./platform";
import { SingletonBase } from "../base/SingletonBase";

class BannerAd extends SingletonBase {
    /** banner广告位*/
    public bannerAd;
    /** 创建失败*/
    bannerLoadError = false;
    /** 创建成功*/
    bannerLoadBack = false;
    /** 正常banner广告位id*/
    private _adUnitId1 = 'adunit-4c31bb853616ccb5';
    private _adUnitId2 = 'adunit-60501d72e3387899';
    private _adUnitId3 = 'adunit-3e4d85664b1fb303';

    BANNER_SHOW_NOW_TIMES = 0;
    BANNER_SHOW_MAX_TIMES = 2;

    nextBannerIndex = 1;

    /**
     * 广告组件初始化
     */
    public init(isDelayShow = true, adUnitIdtype = 1) {
        if (!Laya.Browser.window.wx) {
            return;
        }
        this.createAd(isDelayShow, adUnitIdtype);
    }

    destory() {
        this.bannerLoadBack = false;
        this.bannerLoadError = false;
        console.log('清理banner');
        Laya.timer.clearAll(this);
        if (this.bannerAd) {
            this.bannerAd.offLoad();
            this.bannerAd.destroy();
            this.bannerAd = null;
        }
        this.init(true, this.nextBannerIndex);
    }

    public createAd(isDelayShow = true, adUnitIdtype = 1) {
        var info = Laya.Browser.window.wx.getSystemInfoSync();
        var screenWidth = info.screenWidth;
        var screenHeight = info.screenHeight;
        var CreateBannerAdUnitId;
        if(adUnitIdtype == 1) {
            CreateBannerAdUnitId = this._adUnitId1;
        }
        else if(adUnitIdtype == 2) {
            CreateBannerAdUnitId = this._adUnitId2;
        }
        else {
            CreateBannerAdUnitId = this._adUnitId3;
        }
        this.bannerAd = Laya.Browser.window.wx.createBannerAd({
            adUnitId: CreateBannerAdUnitId,
            style: {
                width: 300,
                left: 0,
                top: 0,
                height: 50
            },
            adIntervals: 30, // 自动刷新频率不能小于30秒
        })

        this.bannerAd.onError((res) => {
            if (res.errCode === 1004) {
                console.log('banner获取失败————无合适的广告');
            } else if (res.errCode === 1001) {
                console.log('banner获取失败————参数错误,使用方法错误');
            }
            this.bannerLoadError = true;
        })

        if (Laya.stage.screenMode == 'vertical') {
            //竖屏
            this.bannerAd.style.width = screenWidth;
        } else {
            this.bannerAd.style.width = 300;
        }

        this.bannerAd.onResize((res) => {
            console.log('创建banner广告resize回调');
            this.bannerAd.style.left = (screenWidth - this.bannerAd.style.realWidth) / 2;
            this.bannerAd.style.top = screenHeight - this.bannerAd.style.realHeight + (this.isIphoneX() ? -10 : 0);////
            if (this.bannerAd && this.bannerAd.style) {
                if (!isDelayShow) {
                    this.bannerAd.show();
                }
                else {
                    this.bannerAd.hide();
                }
                this.bannerLoadBack = true;
            }
        })
    }

    showBanner() {
        this.bannerAd && this.bannerAd.show();
        this.BANNER_SHOW_NOW_TIMES ++;
        if (!this.bannerAd) {
            Laya.Scene.open("test/BannerScene.json", false, "bottom");
        }
    }

    hideBanner(isclosebannerscene:boolean = false){
        this.bannerAd && this.bannerAd.hide();
        if(this.BANNER_SHOW_NOW_TIMES >= this.BANNER_SHOW_MAX_TIMES) {
            this.nextBannerIndex ++;
            if(this.nextBannerIndex > 3) {
                this.nextBannerIndex = 1;
            }
            this.destory();
        }
        if(!isclosebannerscene) {
            Laya.Scene.close("test/BannerScene.json");
        }
    }

    private isIphoneX(){
        if(Laya.Browser.window.wx && Laya.Browser.window.wx.getSystemInfoSync){
            var info = Laya.Browser.window.wx.getSystemInfoSync();                
            var model = info.model;                
            if(model && (model.indexOf('iPhone X') > -1 || model.indexOf('iPhone 1') > -1)){
                return true;
            }                
        }
        return false;
    }

}

export var Banner = BannerAd.getInstance<BannerAd>();