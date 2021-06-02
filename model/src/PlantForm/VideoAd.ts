import dataMgr from "../manager/DataMgr";
import platform from "./platform";
import { SingletonBase } from "../base/SingletonBase";

class VideoAd extends SingletonBase {
    /** 视频广告位*/
    public videoAd;
    /** 创建失败*/
    isCreateError = false;
    /** 创建完成*/
    isCreateLoad = false;
    /** 正常vedio广告位id*/
    private _videoAdUid = 'adunit-24e02ac28b62d1b4';

    todayLeftShareGetRewardTime: number;
    
    /**
     * 激励视频组件初始化
     * @param isDelayShow 是否延迟显示
     */
     init(isDelayShow = true) { 
        if (!Laya.Browser.window.wx) {
            return;
        }
        
        this.destroy();

        this.todayLeftShareGetRewardTime = dataMgr.instance.getStorageSync('todayLeftShareGetRewardTime','number');

        this.videoAd = Laya.Browser.window.wx.createRewardedVideoAd({
            adUnitId: this._videoAdUid,
        });

        this.videoAd.onError((res) => {
            this.isCreateError = true;
            console.log('激励视频创建失败');
            if (res.errCode === 1001) {
                console.log('参数错误');
            } else if (res.errCode === 1004) {
                console.log('无合适的广告')
            }
        })

        this.videoAd.load()
            .then(() => {
                this.isCreateLoad = true;
                console.log('激励视频创建成功');
                if (isDelayShow) {
                    console.log('先预加载视频，需要的时候再show')
                } else {
                    this.videoAd.show();
                }
            })
            .catch(err => console.log(err.errMsg, err.errCode));

        return this.videoAd;
    }

    private destroy() {
        this.isCreateError = false;
        this.isCreateLoad = false;
        if (this.videoAd) {
            this.videoAd.offError();
            this.videoAd.offClose();
            this.videoAd.offLoad();
        }
        this.videoAd = null;
    }

    showVideo(complete:Function=null, uncomplete:Function=null, error:Function=null, key?:string, adtype?:number) {
        if(Laya.Browser.window.wx){
            // 如果成功创建了激励视频
            if (this.videoAd && this.isCreateLoad) {
                Laya.stage.event('wxOnHide');
                this.videoAd.show();
                this.onClose(complete, uncomplete, error, key, adtype);
            }
            else {
                // 判断当前分享获得奖励次数是否达到每日上限
                if(this.todayLeftShareGetRewardTime) {
                    this.todayLeftShareGetRewardTime --;
                    platform.share(complete);
                }
                else {
                    platform.showToast("暂无视频");
                }
            }
        }else{
            complete && complete();
        }
    }

    /**
     * 广告关闭
     * @param winCall 成功回调
     * @param failCall 失败回调
     * @param closeCall 关闭回调
     */
    private onClose(winCall:Function=null, failCall:Function=null, closeCall:Function=null, key?:string, adtype?:number) {
        this.videoAd.offClose();
        this.videoAd.onClose((res) => {
            if (res && res.isEnded) {
                // 正常播放结束，可以下发游戏奖励
                winCall && winCall();
            } else {
                failCall && failCall();
                // 打开二次确认弹框
                Laya.View.open("test/VideoExitScene.json", false, {winCall, failCall});
            }
            console.log('关闭激励视频');
            closeCall && closeCall();
            this.videoAd.offError();
            this.videoAd.offClose();
            this.videoAd.offLoad();
            Laya.stage.event('wxOnShow');
            this.destroy();
            this.init();
        })
    }


}

export let Video = VideoAd.getInstance<VideoAd>();