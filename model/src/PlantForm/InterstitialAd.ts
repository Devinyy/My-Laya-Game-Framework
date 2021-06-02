import { SingletonBase } from "../base/SingletonBase";

class InterstitialAd extends SingletonBase {
    /** 插屏广告位*/
    public interstitialAd;
    /** 创建失败*/
    interstitialLoadError = false;
    /** 创建成功*/
    interstitialAdLoadBack = false;
    /** 正常interstitial广告位id*/
    private _adUnitId = 'adunit-fa192a3154b38c9c';

    /**
     * 广告组件初始化
     */
    public init(isDelayShow = true) {
        if (!Laya.Browser.window.wx) {
            return;
        }
        this.createAd(isDelayShow);
    }

    destory() {
        this.interstitialAdLoadBack = false;
        this.interstitialLoadError = false;
        console.log('清理插屏');
        Laya.timer.clearAll(this);
        if (this.interstitialAd) {
            this.interstitialAd.offLoad();
            this.interstitialAd.destroy();
            this.interstitialAd = null;
        }
        this.init();
    }

    public createAd(isDelayShow = true) {
        this.interstitialAd = Laya.Browser.window.wx.createInterstitialAd({
            adUnitId: this._adUnitId,
            style: {
                width: 300,
                left: 0,
                top: 200 ,
                height: 600
            }
        })

        this.interstitialAd.onError((res) => {
            if (res.errCode === 1004) {
                console.log('无合适的广告');
            } else if (res.errCode === 1001) {
                console.log('参数错误,使用方法错误');
            }
            this.interstitialLoadError = true;
        })
    }

    showInterstitialAd() {
        if (this.interstitialAd) { 
            this.interstitialAd.show();
        }
    }

    hideInterstitialAd() {
        this.interstitialAd && this.interstitialAd.hide();
        this.destory();
    }
}

export let Interstitial = InterstitialAd.getInstance<InterstitialAd>();