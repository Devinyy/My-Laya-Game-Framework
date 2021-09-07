import { ui } from "../../ui/layaMaxUI";
export module LwgPlatform {
    export class InitBase {
        /**
         * @param _type 类型，除了类型Test和Exploit，一般不需要填写，默认Test
         */
        constructor(_type?: EmType) {
            if (_type) {
                type = _type;
            }
            systemInfo = {
                screenWidth: Laya.stage.width,
                screenHeight: Laya.stage.height,
                windowWidth: Laya.stage.width,
                windowHeight: Laya.stage.height,
            }
            if (Laya.Browser.onWeiXin) {
                type = EmType.WeChat;
                systemInfo = Laya.Browser.window.wx.getSystemInfoSync();
            } else if (Laya.Browser.onQGMiniGame) {
                type = EmType.OPPO;
            } else if (Laya.Browser.onVVMiniGame) {
                type = EmType.VIVO;
            } else if (Laya.Browser.onTTMiniGame) {
                type = EmType.Bytedance;
            } else {
                type = EmType.ExploitNoAD;
            }
            if (Laya.Browser.window['conch'] && _type === EmType.TwoTwoThree) {
                type = EmType.TwoTwoThree;
                isConch = true;
            }
            AD = new _AD();
            System = new _System;
        }
        get LwgPlatform(): string {
            return 'LwgPlatform';
        }
    }
    export let isConch: boolean;
    /**平台类型 */
    export enum EmType {
        /**
         * 开发中，不触发广告回调，提示无广告
         */
        Exploit,
        /**
         * 开发中，触发广告回调
         */
        ExploitNoAD,
        /**
         * 微信
         */
        WeChat,
        /**
         * OPPO
         */
        OPPO,
        /**
         * VIVO
         */
        VIVO,
        /**
         * 字节
         */
        Bytedance,
        /**
         * web包，触发广告回调
        */
        WebAD,
        /**
         * web测试包,触发广告回调
         */
        WebTest,
        /**
         * web测试包,每次登录会清除本地数据，触发广告回调
         */
        WebTestClear,
        /**
         * 233平台
         */
        TwoTwoThree,
    };
    export let type: EmType = EmType.ExploitNoAD;

    export type TpBaseInfo = {
        screenWidth?: number,
        screenHeight?: number,
        windowWidth?: number,
        windowHeight?: number,
    }
    export let systemInfo: TpBaseInfo;

    /**
     * 分包
     */
    export class Subpackage {
        /**
         * 分包
         * @param packageList 分包列表
         * @param endCb 结束
         */
        constructor(packageList: string[], endCb: Function) {
            if (type === EmType.WeChat) {
                this.wx(packageList, endCb);
            }
            else if (type === EmType.OPPO || type === EmType.VIVO) {
                this.OPPO(packageList, endCb);
            }
            else {
                endCb && endCb();
            }
        }
        /**
         * 微信分包
         * @param packList 
         * @param cb 
         */
        wx(packList: string[], cb: Function) {
            const list = packList;
            const temp = () => {
                const name = list.shift();
                if (name) {
                    const loadTask = Laya.Browser.window.wx.loadSubpackage({
                        name: name,
                        success: (res: any) => {
                            console.log('分包加载成功=', name, JSON.stringify(res));
                            temp();
                        },
                        fail: (res: any) => {
                            console.log('分包加载失败=', name, JSON.stringify(res));
                            list.unshift(name);
                            setTimeout(temp, 1000);
                        }
                    });
                    // loadTask.onProgressUpdate(res => {
                    //     console.log('下载进度', res.progress)
                    //     console.log('已经下载的数据长度', res.totalBytesWritten)
                    //     console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
                    // })
                } else {
                    cb && cb();
                }
            };
            temp();
        }
        OPPO(packList: string[], cb: Function): void {
            if (Laya.Browser.window.qg) {
                Laya.Stat.hide();
                const list = packList;
                const temp = () => {
                    const name = list.shift();
                    if (name) {
                        const loadTask = Laya.Browser.window.qg.loadSubpackage({
                            name: name,
                            success: (res: any) => {
                                console.log('分包加载成功=', name, JSON.stringify(res));
                                temp();
                            },
                            fail: (res: any) => {
                                console.log('分包加载失败=', name, JSON.stringify(res));
                                list.unshift(name);
                                setTimeout(temp, 1000);
                            }
                        });
                        // loadTask.onProgressUpdate(res => {
                        //     console.log('下载进度', res.progress)
                        //     console.log('已经下载的数据长度', res.totalBytesWritten)
                        //     console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
                        // })
                    } else {
                        cb && cb();
                    }
                };
                temp();
            } else {
                cb && cb();
            }
        }
    }
    export class InitPlatForm {
        constructor(
            _LwgWx: LwgWX.Init,
            _LwgOPPO: LwgOPPO.Init,
            _LwgVIVO: LwgVIVO.Init,
            _Lwg233: LwgTwoTwoThree.Init,
        ) {
            AD.setInstance();
            System.setInstance();
        }
    }
    /**
     * 基本接口
     */
    export class TpADBase {
        /**
         * 场景打开时检测显示
         */
        checkShowWhenOpenScene(sceneName?: string): void { };
        /**
         * 场景关闭后检测显示
         */
        checkShowAfterCloseScene(sceneName?: string): void { };
        /**
         * 关闭弹窗时检测显示
         */
        checkShowWhenCloseOverlayScene(sceneName?: string): void { };
        /**
         * 展示视频广告
         */
        showVideo(watchCompelet: Function, watchClose?: Function): void { };
        /**
         * 手动打开一个原生广告
         */
        showNativeByManual?(): void { };
    }
    export let AD: _AD;
    class _AD implements TpADBase {
        constructor() {
        }
        setInstance(): void {
            switch (type) {
                case EmType.WeChat:
                    this.instance = LwgWX.AD;
                    break;
                case EmType.OPPO:
                    this.instance = LwgOPPO.AD;
                    break;

                case EmType.VIVO:
                    this.instance = LwgVIVO.AD;
                    break;

                case EmType.TwoTwoThree:
                    this.instance = LwgTwoTwoThree.AD;
                    break;

                default:
                    break;
            }
        }
        instance: TpADBase;
        /**
         * 视频广告
         * @param watchCompelet 观看完成回调
         * @param watchClose 中途关闭回调
         */
        showVideo(watchCompelet: Function, watchClose?: Function): void {
            if (LwgPlatform.type === LwgPlatform.EmType.Exploit || LwgPlatform.type === LwgPlatform.EmType.ExploitNoAD || LwgPlatform.type === LwgPlatform.EmType.WebTest || LwgPlatform.type === LwgPlatform.EmType.WebTestClear) {
                watchCompelet && watchCompelet();
            } else {
                if (!this.instance || !this.instance.showVideo) {
                    LwgDialogue.showTips('暂无广告！');
                } else {
                    this.instance.showVideo(watchCompelet, watchClose);
                }
            }
        }
        showNativeByManual(): void {
            if (!this.instance || !this.instance.showNativeByManual) {
                LwgDialogue.showTips('暂无广告！');
            } else {
                this.instance.showNativeByManual()
            }
        }
        checkShowWhenOpenScene(sceneName: string): void {
            this.instance && this.instance.checkShowWhenOpenScene && this.instance.checkShowWhenOpenScene(sceneName);
        }
        checkShowAfterCloseScene(sceneName: string): void {
            this.instance && this.instance.checkShowAfterCloseScene && this.instance.checkShowAfterCloseScene(sceneName);
        }
        checkShowWhenCloseOverlayScene(sceneName: string): void {
            this.instance && this.instance.checkShowWhenCloseOverlayScene && this.instance.checkShowWhenCloseOverlayScene(sceneName);
        }
    }

    export class TpSystemBase {
        checkShowWhenOpenScene?(sceneName: string): void { };
        vibrateShort?(): void { };
        vibrateLong?(): void { };
        share?(rewardCb?: Function): void { };
    }
    export let System: _System;
    class _System {
        constructor() {
        }
        setInstance(): void {
            switch (type) {
                case EmType.WeChat:
                    this.instance = LwgWX.System;
                    break;
                case EmType.OPPO:
                    this.instance = LwgOPPO.System;
                    break;

                case EmType.VIVO:
                    this.instance = LwgVIVO.System;
                    break;

                case EmType.TwoTwoThree:
                    this.instance = LwgTwoTwoThree.System;
                    break;
                default:
                    break;
            }
        }
        instance: TpSystemBase;
        checkShowWhenOpenScene(sceneName: string): void {
            this.instance && this.instance.checkShowWhenOpenScene && this.instance.checkShowWhenOpenScene(sceneName);
        }
        shakeShort(): void {
            this.instance && this.instance.vibrateShort && this.instance.vibrateShort();
        }
        shakeLong(): void {
            this.instance && this.instance.vibrateLong && this.instance.vibrateLong();
        }
        share(rewardCb?: Function): void {
            this.instance && this.instance.share && this.instance.share(rewardCb);
        }
    }
}


/**
 * 233平台
 */
export module LwgTwoTwoThree {
    export let AD: _AD;
    export let System: _System;

    export class Init {
        constructor(ADData: TpADData) {
            AD = new _AD(ADData);
            System = new _System;
        }
    }
    export class _System implements LwgPlatform.TpSystemBase {
        vibrateShort(): void {
            var PlatformClass = Laya.Browser.window.PlatformClass.createClass("demo.MainActivity");
            PlatformClass.callWithBack(null, "vibrateShort");
        }
    }
    export type TpADbanner = {
        /**
         * 用户手动关闭banner的时间，关闭后1分钟内不可以在出现
         */
        lastCloseTime?: number,
        isShow?: boolean,
        showScenes: string[],
        /**
         * 用户关闭5次之后不会在展示
         */
        closeCount?: number,

    }
    export type TpADInsert = {
        showCloseScenes: string[]
    }
    export type TpADData = {
        banner: TpADbanner;
        insert: TpADInsert;
    }
    /**
      * 用户手动关闭banner的时间，关闭后1分钟内不可以在出现
      * 屏幕上只能出现一种类型的广告
      */
    export class _AD implements LwgPlatform.TpADBase {
        constructor(ADData: TpADData) {
            this.banner = ADData.banner;
            this.insert = ADData.insert;
        }
        banner: TpADbanner;
        insert: TpADInsert;

        checkShowWhenOpenScene(): void {
            this.checkShowBannerInScene();
        }
        checkShowWhenCloseOverlayScene(): void {
            this.checkShowBannerInScene();
        }
        checkShowAfterCloseScene(sceneName: string): void {
            this.checkShowInsertAfterCloseScene(sceneName);
        }
        checkShowInsertAfterCloseScene(sceneName: string): void {
            for (let index = 0; index < this.insert.showCloseScenes.length; index++) {
                const element = this.insert.showCloseScenes[index];
                if (element == sceneName) {
                    var PlatformClass = Laya.Browser.window.PlatformClass.createClass("demo.MainActivity");
                    PlatformClass.callWithBack(null, "showInterstitial");
                    break;
                }
            }
        }
        checkShowBannerInScene(): void {
            console.log('JS准备展示banner广告！');
            if (this.banner.lastCloseTime === undefined) {
                this.banner.lastCloseTime = 0;
            }
            if (LwgDate.Now.time - this.banner.lastCloseTime < 60000) {
                console.log('1分钟内不得再次展现视频广告！');
                return;
            }
            if (this.banner.isShow) {
                console.log('已经展示了！');
                return;
            }
            if (this.banner.closeCount === undefined) {
                this.banner.closeCount = 0;
            }
            if (this.banner.closeCount >= 5) {
                console.log('关闭次数达到5次，不会在展示banner！');
                return;
            }
            LwgScene.getCurShowSceneArr((scene: Laya.View) => {
                for (let index = 0; index < this.banner.showScenes.length; index++) {
                    const sceneName = this.banner.showScenes[index];
                    if (sceneName == scene.name) {
                        console.log('准备展示banner!');
                        var PlatformClass = Laya.Browser.window.PlatformClass.createClass("demo.MainActivity");
                        PlatformClass.callWithBack((close: string) => {
                            if (close === 'show') {
                                this.banner.isShow = true;
                                // console.log('js端展示banner成功');
                            }
                            else if (close === '"showFailed"') {
                                // console.log('js端展示banner失败');
                                this.banner.isShow = false;
                            }
                            else if (close === 'close') {
                                // console.log('js端关闭banner成功');
                                this.banner.isShow = false;
                                this.banner.closeCount++;
                                this.banner.lastCloseTime = LwgDate.Now.time;
                            }
                        }, "showBanner");
                        break;
                    }
                }
            });
        }

        showVideoTime: number;
        showVideo(watchCompelet: Function, watchClose: Function): void {
            //5秒钟之内不能再看广告
            if (this.showVideoTime === undefined) {
                this.showVideoTime = 0;
            }
            if (LwgDate.Now.time - this.showVideoTime < 5000) {
                console.log('5秒内不得再次看视频广告！');
                return;
            }
            this.showVideoTime = LwgDate.Now.time;
            var PlatformClass = Laya.Browser.window.PlatformClass.createClass("demo.MainActivity");
            PlatformClass.callWithBack((status: any) => {
                console.log('广告返回状态为', status);
                if (status == "true") {
                    watchCompelet && watchCompelet();
                } else if (status == "false") {
                    watchClose && watchClose();
                    LwgDialogue.showTips("您的视频还没看完，无法获得奖励");
                } else {
                    watchClose && watchClose();
                    LwgDialogue.showTips("视频拉取失败");
                }
            }, "showVideo")
        }
    }
}

export module LwgOPPO {
    export class Init {
        constructor(ADData: TpADData, shortcutInstalle: TpShortcutInstalled) {
            if (LwgPlatform.type !== LwgPlatform.EmType.OPPO) {
                return;
            }
            AD = new _AD(ADData);
            System = new _System(shortcutInstalle);
        }
        get LwgOPPO(): string {
            return 'LwgOPPO';
        }
    }

    /**
     * 桌面图标
     */
    export type TpShortcutInstalled = {
        isShow: boolean,
        btnStyle: BtnStyle;
        sceneName: string,
        rewardCb?: Function,
    }

    /**
    * 一些按钮样式
    */
    export type BtnStyle = {
        width?: number,
        height?: number,
        skin: string,
        x?: number,
        y?: number,
        left?: number,
        right?: number,
        top?: number,
        bottom?: number,
        centerX?: number,
        centerY?: number,
        anchorX?: number,
        anchorY?: number,
    }
    /**
     * 一些按钮的基本设置
     */
    export class BtnBase extends Laya.Image {
        constructor(style: BtnStyle) {
            super();
            this.skin = style.skin;
            this.left = style.left;
            this.right = style.right;
            this.top = style.top;
            this.bottom = style.bottom;
            this.centerX = style.centerX;
            this.centerY = style.centerY;
            this.x = style.x;
            this.y = style.y;
            this.anchorX = style.anchorX;
            this.anchorY = style.anchorY;
            this.zOrder = 1000;
            this.lwgButton();
        }
        lwgButton(): void { };
    }

    export class ShortcutInstalledBtn extends BtnBase {
        constructor(systemIns: LwgOPPO._System, style: BtnStyle) {
            super(style);
            this.systemIns = systemIns;
        }
        systemIns: LwgOPPO._System;
        lwgButton(): void {
            LwgClick.on(null, this, this, null, null, () => {
                this.systemIns.installShortcut(() => {
                    this.destroy();
                });
            })
        }
    }

    export let System: _System;

    export class _System implements LwgPlatform.TpSystemBase {

        constructor(shortcutInstalle: TpShortcutInstalled) {
            this.shortcutInstalle = shortcutInstalle;
        }
        shortcutInstalle: TpShortcutInstalled;
        checkShowWhenOpenScene(sceneName: string): void {
            this.checkShowInstallShortcutBtn(sceneName);
        }
        checkShowInstallShortcutBtn(sceneName: string): void {
            if (this.shortcutInstalle.isShow && sceneName === this.shortcutInstalle.sceneName) {
                this.hasShortcutInstalled(() => {
                    const scene = LwgScene.sceneControl[sceneName] as Laya.View;
                    //加载延迟后，界面可能被关闭
                    scene && scene.parent && scene.addChild(new ShortcutInstalledBtn(this, this.shortcutInstalle.btnStyle));
                })
            }
        }

        /**
         * 是否已创建桌面图标
         */
        private hasShortcutInstalled(cb: Function) {
            Laya.Browser.window.qg.hasShortcutInstalled({
                success: (res: any) => {
                    // 判断图标未存在时，创建图标
                    if (res == false) {
                        cb && cb();
                    }
                },
                fail: (err: any) => {
                    console.log('检测图标是否存在失败:', JSON.stringify(err));
                },
                complete: () => { }
            })
        }
        /**
         * 创建桌面图标
         */
        installShortcut(cb: Function) {
            Laya.Browser.window.qg.installShortcut({
                success: () => {
                    // 执行用户创建图标奖励
                    this.shortcutInstalle.rewardCb && this.shortcutInstalle.rewardCb();
                    cb && cb();
                },
                fail: (err: any) => {
                    console.log('添加桌面图标失败:', JSON.stringify(err));
                },
                complete: () => { }
            })
        }
        vibrateShort() {
            Laya.Browser.window.qg.vibrateShort({
                success: (res: any) => { },
                fail: (res: any) => { },
                complete: (res: any) => { },
            })
        }
        vibrateLong() {
            Laya.Browser.window.qg.vibrateLong({
                success: (res: any) => { },
                fail: (res: any) => { },
                complete: (res: any) => { },
            })
        }
        showToast(title: string, duration: number, icon?: string): void {
            Laya.Browser.window.qg.showToast({
                title: title,
                icon: icon,
                duration: duration
            })
        }
    }

    /**
     * 基本接口，有些广告只有一部分
     */
    export type TpADInstanceBase = {
        show: Function,
        hide: Function,
        //vivo没有，为了统一，可以不用
        // destroy: Function,
        load: Function,
        onLoad: Function,
        offLoad: Function,
        loadCb: Function,

        onError: Function,
        offError: Function,
        errCb: Function,

        onfHide: Function,
        offHide: Function,

        onClose: Function,
        offClose: Function,
        closeCb: Function,
    }
    /**
     * banner广告
     */
    export type TpADbanner = {
        /**
         * OPPO
         */
        adUnitId?: string,
        /**
         * vivo用
         */
        posId?: string,
        showScenes: string[],
        instance?: TpADInstanceBase,
        /**
         * 值为{}则在最底下显示
         */
        style: {
            top?: number,
            left?: number,
            width?: number,
            height?: number
        },
        showTrack?: {
            sceneName: string,
            show: boolean,
        }[],
        /**
         * 如果是true，说明上个界面也是打开，所以不会再次打开，防止重复请求
         */
        lastIsShow?: boolean,
    };

    /**
     * 视频广告
     */
    export type TpADVideo = {
        /**
         * OPPO
         */
        adUnitId?: string,
        /**
         * vivo用
         */
        posId?: string,
        instance?: TpADInstanceBase,
        /**
         * 5秒内不得再点击
         */
        lastShowTime?: number,
        watchCompelet?: Function,
        watchClose?: Function
    }

    /**
     * 用于获取哪张图片进行展示
     */
    export enum EmADNativeType {
        icon,
        banner,
    }
    export class NatievView extends Laya.View {
        constructor(ADIns: LwgOPPO._AD, nativeView: TpADNativeView) {
            super();
            this.ADIns = ADIns;
            this.bntClose = new Laya.Image(LwgPath.LwgUI + 'img_close2.png');
            this.addChild(this.bntClose);
            this.bntClose.size(24, 24);
            this.bntClose.top = 10;
            this.bntClose.right = 10;
            this.bntClose.zOrder = 100;

            this.imgADWord = new Laya.Image(LwgPath.LwgUI + 'img_ad_text2.png');
            this.addChild(this.imgADWord);
            this.imgADWord.size(40, 14);
            this.imgADWord.right = 0;
            this.imgADWord.bottom = 0;
            this.imgADWord.zOrder = 1000;

            this.imgADPic = new Laya.Image();
            this.addChild(this.imgADPic);
            this.imgADPic.top = 0;
            this.imgADPic.bottom = 0;
            this.imgADPic.left = 0;
            this.imgADPic.right = 0;

            this.zOrder = 1000;
            this.left = nativeView.style.left;
            this.right = nativeView.style.right;
            this.top = nativeView.style.top;
            this.bottom = nativeView.style.bottom;
            this.centerX = nativeView.style.centerX;
            this.centerY = nativeView.style.centerY;
            this.x = nativeView.style.x;
            this.y = nativeView.style.y;
            this.size(nativeView.style.width, nativeView.style.height);

            nativeView.view = this;

            const adListItem = this.ADIns.native.lodeNativeRes.adList[0];
            if (nativeView.type === EmADNativeType.icon) {
                this.imgADPic.skin = adListItem.icon;
                //如果没有图片，则相互替代一下
                if (adListItem.icon.length === 0) {
                    this.imgADPic.skin = adListItem.imgUrlList[0];
                } else {
                    this.imgADPic.skin = adListItem.icon;
                }
            }
            else if (nativeView.type === EmADNativeType.banner) {
                if (adListItem.imgUrlList.length === 0) {
                    this.imgADPic.skin = adListItem.icon;
                } else {
                    this.imgADPic.skin = adListItem.imgUrlList[0];
                }
            }
            this.bntClose.once(Laya.Event.CLICK, this, () => {
                this.destroy();
            })
            //展示和点击上传
            this.ADIns.native.instance && this.ADIns.native.instance.reportAdShow({ adId: adListItem.adId });
            this.imgADPic.on(Laya.Event.CLICK, this, () => {
                this.destroy();
                this.ADIns.native.instance && this.ADIns.native.instance.reportAdClick({
                    adId: adListItem.adId,
                })
                this.ADIns.updateNative();
            })
        }
        ADIns: LwgOPPO._AD;
        /**
         * 关闭按钮
         */
        bntClose: Laya.Image;
        /**
         * 广告提示图标
         */
        imgADWord: Laya.Image;
        /**
         * 广告展示的图片
         */
        imgADPic: Laya.Image;
    };

    /**
     * 原生广告
     */
    export type TpADNative = {
        /**
         * OPPO
         */
        adUnitId?: string,
        /**
         * vivo用
         */
        posId?: string,
        lodeNativeRes?: TpLodeNativeRes,
        lastCreateTime?: number,
        intervalTime?: number,
        updateTime?: number,
        instance?: {
            reportAdShow: Function,
            reportAdClick: Function,
        } & TpADInstanceBase,
        nativeViewArr: TpADNativeView[];
    }

    /**
     * 原生广告视图
     */
    export type TpADNativeView = {
        type: EmADNativeType,
        style: {
            width: number,
            height: number,
            left?: number,
            right?: number,
            top?: number,
            bottom?: number,
            centerX?: number,
            centerY?: number,
            x?: number,
            y?: number,
        },
        showScenes: string[],
        view?: Laya.View,
    }
    /**
     * 原生广告加载成功后的信息
     */
    export type TpLodeNativeRes =
        {
            adList: {
                adId: string,
                title: string,
                desc: string,
                icon: string,
                imgUrlList: string[],
                logoUrl: string,
                clickBtnTxt: string,
                creativeType: number,
                interactionType: number,
            }[]
        }

    /**
     * 互推9宫格
     */
    export type TpADGamePortal = {
        adUnitId: string,
        instance?: TpADInstanceBase,
        showScene: {
            sceneName: string,
            btnStyle: BtnStyle,
        }[],
    };
    /**
     * 9宫格按钮
     */
    export class GamePortalBtn extends BtnBase {
        constructor(ADIns: LwgOPPO._AD, style: BtnStyle) {
            super(style);
            this.ADIns = ADIns;
        }
        ADIns: LwgOPPO._AD;
        lwgButton(): void {
            LwgClick.on(null, this, this, null, null, () => {
                this.ADIns.showGamePortal();
            })
        }
    }

    /**
     * 插屏广告，oppo没有
     */
    export type TpADInsertVIVO = {
        posId: string,
        /**
         * 插屏显示的时候其他广告一概不显示
         */
        isShow?: boolean,
        instance?: {
            onClose: Function,
        } & TpADInstanceBase,
        /**
         * 在某些场景关闭后显示
         */
        showCloseScenes: string[],
    }

    /**
     * 广告
     */
    export type TpADData = {
        /**
        * 延迟一段时间展示广告
        */
        delayTime?: number,
        /**
         * 初始化时候的时间
         */
        initTime?: number,

        banner: TpADbanner,
        video: TpADVideo,
        native: TpADNative,
        gamePortal?: TpADGamePortal,
        /**
         * vivo有插屏
         */
        insert?: TpADInsertVIVO,
    }

    /**
     * 广告
     */
    export let AD: _AD;

    /**
      * 1.同时只能展示1个广告
      * 2.没有插屏
      * 3.广告不可频繁刷新，否则不显示
      * 4.位置大小和Laya.stage一样
      * 5.原生只需一个ID即可，因为同屏只可展示一个广告
      */
    export class _AD implements LwgPlatform.TpADBase {
        constructor(data: TpADData) {
            this.ADData = data;
            this.banner = data.banner;
            this.video = data.video;
            this.native = data.native;
            this.insert = data.insert;
            this.gamePortal = data.gamePortal;
            this.ADData.initTime = LwgDate.Now.time;
            this.ADData.delayTime = this.ADData.delayTime ? this.ADData.delayTime : 60000;
            Laya.timer.once(this.ADData.delayTime, this, () => {
                this.checkShowWhenOpenScene();
            });
        }
        /**
         * 所有广告信息
         */
        ADData: TpADData;
        checkShowWhenOpenScene(sceneName?: string): void {
            this.checkShowGamePortalBtnInScene();
            this.checkShowBannerAndNativeInScene();
        }
        checkShowAfterCloseScene(sceneName?: string): void {
            this.checkShowInsertAfterCloseScene(sceneName);
        }
        checkShowWhenCloseOverlayScene(sceneName?: string): void {
            this.checkShowGamePortalBtnInScene();
            this.checkShowBannerAndNativeInScene();
        }
        /**
         * banner广告信息
         */
        banner: TpADbanner;
        /**
         * 检测的广告规则：原生第1，banner第2，格子广告和插屏广告出来则关闭原生和banner
         * @param sceneName 
         * @returns 
         */
        checkShowBannerAndNativeInScene(): void {
            if (LwgDate.Now.time - this.ADData.initTime <= this.ADData.delayTime) {
                return;
            }
            if (this.insert && this.insert.isShow) {
                return;
            }
            //如果当前场景内有原生，则关闭banner，如果没有则检测banner
            const hasShowNative = this.checkShowNativeInScene();
            if (hasShowNative) {
                this.hideBanner();
                console.log('展示插屏，关掉banner');
            } else {
                this.checkShowBannerInScene();
                console.log('展示banner，关掉插屏');
            }
        }
        /**
         * 隐藏两种自动开启和关闭的广告
         */
        hideBannerAndNative(): void {
            this.hideBanner();
            this.hideNative();
        }

        insert: TpADInsertVIVO;
        /**
         * 插屏广告，在某些场景关闭后显示,oppo暂时没有
         * @param sceneName 
         * @returns 
         */
        protected checkShowInsertAfterCloseScene(sceneName: string): void { }

        /**
         * 检查当前显示的场景中的banner显示
         * @returns 
         */
        protected checkShowBannerInScene(): void {
            if (this.banner.lastIsShow) {
                return;
            }
            this.banner.instance = this.createBanner();
            let hasShow = false;
            LwgScene.getCurShowSceneArr((scene: Laya.View) => {
                for (let index = 0; index < this.banner.showScenes.length; index++) {
                    const element = this.banner.showScenes[index];
                    if (element == scene.name) {
                        hasShow = true;
                        this.banner.instance.show().then(() => {
                            console.log('banner广告展示成功！');
                            this.banner.lastIsShow = true;
                        }).catch((err: any) => {
                            console.log('banner广告展示失败！', JSON.stringify(err));
                            this.banner.lastIsShow = false;
                        })
                        break;
                    }
                }
            });
            !hasShow && this.hideBanner();
        }
        protected createBanner(): any {
            return Laya.Browser.window.qg.createBannerAd({
                adUnitId: this.banner.adUnitId,
                style: {
                    top: this.banner.style.top,
                    left: this.banner.style.left,
                    width: this.banner.style.width,
                    height: this.banner.style.height,
                }
            })
        }

        /**
         * banner视频只有打开的时候才会hide
         */
        protected hideBanner(): void {
            this.banner.lastIsShow = false;
            this.banner && this.banner.instance && this.banner.instance.hide();
        }

        native: TpADNative;
        /**
         * 点击之后会刷新
         * 一定时间后会刷新
         */
        updateNative(): void {
            //定时刷新
            Laya.timer.clearAll(this.native);
            Laya.timer.once(this.native.updateTime, this.native, () => {
                this.updateNative();
            })
            //间隔小于一定时间不会创建
            if (this.native.lastCreateTime === undefined) {
                this.native.lastCreateTime = LwgDate.Now.time;
            } else {
                if (LwgDate.Now.time - this.native.lastCreateTime < this.native.intervalTime) {
                    console.log('间隔太短，不会重新刷新');
                    return;
                }
            }
            this.native.lastCreateTime = LwgDate.Now.time;

            //一旦从新加载了，无论加载成功与否，上个广告一定没有了，所以直接关闭
            const nativeViewArr = this.native.nativeViewArr;
            for (let index = 0; index < nativeViewArr.length; index++) {
                const nativeView = nativeViewArr[index];
                nativeView.view && nativeView.view.destroy();
                nativeView.view = null;
            }
            this.native.instance = null;
            this.native.lodeNativeRes = null;

            this.native.instance = this.createNative();
            this.native.instance.offLoad(this.native.instance.loadCb);
            this.native.instance.offError(this.native.instance.errCb);

            this.native.instance.load();
            this.native.instance.loadCb = (res: TpLodeNativeRes) => {
                if (res && res.adList) {
                    this.native.lodeNativeRes = res;
                    console.log("原生广告加载成功：", JSON.stringify(res.adList));
                    //多次循环请求会被屏蔽，所以不会死循环
                    this.checkShowNativeInScene();
                } else {
                    console.log('原生广告加载成功！但是信息错误！', JSON.stringify(res));
                }
            }
            this.native.instance.onLoad(this.native.instance.loadCb);

            this.native.instance.errCb = (err: any) => {
                this.native.instance = null;
                this.native.lodeNativeRes = null;
                console.log("原生广告加载错误", JSON.stringify(err));
            }
            this.native.instance.onError(this.native.instance.errCb);
        }
        protected createNative(): any {
            return Laya.Browser.window.qg.createNativeAd({
                adUnitId: this.native.adUnitId,
            })
        }

        /**
         * 手动展示一个原生
         */
        showNativeByManual(): void {
            if (LwgDate.Now.time - this.ADData.initTime <= this.ADData.delayTime) {
                LwgDialogue.showTips('稍后再试！');
                return;
            }
            if (!this.native.instance || !this.native.lodeNativeRes) {
                LwgDialogue.showTips('稍后再试！');
            } else {
                const adListItem = this.native.lodeNativeRes.adList[0];
                this.native.instance.reportAdClick({
                    adId: adListItem.adId,
                })
            }
            //无论展示与否都会刷新
            this.updateNative();
        }

        /**
         * 对当前显示的场景进行重新显示
         */
        protected checkShowNativeInScene(): boolean {
            this.hideNative();
            let hasShow = false;
            LwgScene.getCurShowSceneArr((scene: Laya.View) => {
                const nativeViewArr = this.native.nativeViewArr;
                for (let i = 0; i < nativeViewArr.length; i++) {
                    const nativeView = nativeViewArr[i];
                    for (let j = 0; j < nativeView.showScenes.length; j++) {
                        const name = nativeView.showScenes[j];
                        if (name === scene.name) {
                            hasShow = true;
                            if (this.native.instance && this.native.lodeNativeRes && this.native.lodeNativeRes.adList && this.native.lodeNativeRes.adList[0]) {
                                scene.parent && scene.addChild(new NatievView(this, nativeView));
                            } else {
                                this.updateNative();
                            }
                        }
                    }
                }
            });
            return hasShow;
        }

        /**
         * 关闭所有原生
         */
        hideNative(): void {
            const nativeViewArr = this.native.nativeViewArr;
            for (let index = 0; index < nativeViewArr.length; index++) {
                const nativeView = nativeViewArr[index];
                nativeView.view && nativeView.view.removeSelf();
            }
        }

        gamePortal: TpADGamePortal;
        checkShowGamePortalBtnInScene(): void {
            LwgScene.getCurShowSceneArr((scene: Laya.View) => {
                for (let index = 0; index < this.gamePortal.showScene.length; index++) {
                    const showSceneData = this.gamePortal.showScene[index];
                    const sceneName = showSceneData.sceneName;
                    if (scene.name === sceneName) {
                        let gamePortalBtn = scene.getChildByName('GamePortalBtn');
                        if (!gamePortalBtn) {
                            gamePortalBtn = new GamePortalBtn(this, showSceneData.btnStyle);
                            gamePortalBtn.name = 'GamePortalBtn';
                            scene && scene.parent && scene.addChild(gamePortalBtn);
                        }
                    }
                }
            })
        }

        /**
         * 互推盒子九宫格广告
         */
        showGamePortal() {
            this.hideBannerAndNative();
            if (Laya.Browser.window.qg.getSystemInfoSync().platformVersionCode >= 1076) {
                this.gamePortal.instance = Laya.Browser.window.qg.createGamePortalAd({
                    adUnitId: this.gamePortal.adUnitId,
                });
                this.gamePortal.instance.offClose(this.gamePortal.instance.closeCb);
                this.gamePortal.instance.offError(this.gamePortal.instance.errCb);
                this.gamePortal.instance.offLoad(this.gamePortal.instance.loadCb);

                this.gamePortal.instance.load();
                this.gamePortal.instance.loadCb = () => {
                    // console.log('互推盒子九宫格广告加载成功');
                    this.gamePortal.instance.show();
                }
                this.gamePortal.instance.onLoad(this.gamePortal.instance.loadCb);

                this.gamePortal.instance.errCb = () => {
                    LwgDialogue.showTips('稍后！');
                }
                this.gamePortal.instance.onError(this.gamePortal.instance.errCb);

                this.gamePortal.instance.closeCb = () => {
                    this.checkShowWhenOpenScene();
                }
                this.gamePortal.instance.onClose(this.gamePortal.instance.closeCb);

            } else {
                console.log('快应用平台版本号低于1076，暂不支持互推盒子相关API');
            }
        }

        video: TpADVideo;
        /**
          * 显示视屏激励广告,单例不用销毁，而且广告每次能展示一次，需要重新拉取
          * @param watchCompelet 观看完成回调
          * @param watchClose 中途退出回调
          * @param ad_place 广告位
          * @returns 
          */
        showVideo(watchCompelet?: Function, watchClose?: Function) {
            //加入新的回调方法
            this.video.watchCompelet = watchCompelet;
            this.video.watchClose = watchClose;

            if (this.video.lastShowTime === undefined) {
                this.video.lastShowTime = 0;
            }
            if (LwgDate.Now.time - this.video.lastShowTime < 5000) {
                console.log('5秒内不得再次看视频广告！');
                return;
            }
            this.video.lastShowTime = LwgDate.Now.time;
            this.video.instance = this.createVideo();
            // 清除上次的回调，vedio是单例
            this.video.instance.offClose(this.video.instance.closeCb);
            this.video.instance.offLoad(this.video.instance.loadCb);
            this.video.instance.offError(this.video.instance.errCb);

            this.video.instance.load();
            LwgSound.stopMusic();
            console.log('关掉背景音乐！');
            this.video.instance.loadCb = () => {
                this.video.instance.show().then(() => {
                }).catch((err: any) => {
                    console.log('激励视频广告展示失败', JSON.stringify(err));
                    LwgSound.stopMusic();
                    console.log('开启背景音乐！');
                });
            }
            this.video.instance.onLoad(this.video.instance.loadCb);

            this.video.instance.errCb = (err: any) => {
                console.log(JSON.stringify(err));
                LwgDialogue.showTips('暂无广告，稍后再试!');
            }
            this.video.instance.onError(this.video.instance.errCb);

            this.video.instance.closeCb = (res: any) => {
                if (res.isEnded) {
                    this.video.watchCompelet && this.video.watchCompelet();
                    LwgDialogue.showTips('观看完成，获得奖励!');
                    LwgSound.playMusic();
                    console.log('开启背景音乐！');
                } else {
                    this.video.watchClose && this.video.watchClose();
                    LwgDialogue.showTips('观看完整广告才可以领取奖励!');
                    LwgSound.playMusic();
                    console.log('开启背景音乐！');
                }
            }
            this.video.instance.onClose(this.video.instance.closeCb);
        }
        createVideo(): any {
            return Laya.Browser.window.qg.createRewardedVideoAd({
                adUnitId: this.video.adUnitId,
            });
        }
    }

    export class File {
        /**
         * 通过截屏比例截屏，这样不必考虑画布带来的屏幕缩放 
         * @param {Function} [func] 成功回调,成功后会返回信息data,data['tempFilePath']为图片路径
         * @param {number} [startXRatio] startXRatio偏移比例0~1，截屏画布的坐标并不是stage坐标，所以尽量截屏后再做大小位置处理，否则可能出问题
         * @param {number} [startYRatio] startYRatio偏移比例0~1，截屏画布的坐标并不是stage坐标，所以尽量截屏后再做大小位置处理，否则可能出问题
         * @param {number} [endXRatio] endXRatio偏移0~1，截图到某个X比例位置，截屏画布的坐标并不是stage坐标，所以尽量截屏后再做大小位置处理，否可能出问题
         * @param {number} [endYRatio] endYRatio偏移0~1，截图到某个Y比例位置，截屏画布的坐标并不是stage坐标，所以尽量截屏后再做大小位置处理，否则可能出问题
         * @param {string} fileType 类型jpg,png
         * @param {string} quality 质量0-1;
         */
        static screenShootByRatio(func?: Function, startXRatio?: number, startYRatio?: number, endXRatio?: number, endYRatio?: number, fileType?: string, quality?: number) {
            // console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', window['__canvas'].width, window['__canvas'].height);

            const _startXRatio = startXRatio ? startXRatio * window['__canvas'].width : 0;
            const _startYRatio = startYRatio ? startYRatio * window['__canvas'].height : 0;

            window['__canvas'].toTempFilePath(
                {
                    x: _startXRatio,
                    y: _startYRatio,
                    width: endXRatio ? endXRatio * window['__canvas'].width - _startXRatio : window['__canvas'].width,
                    height: endYRatio ? endYRatio * window['__canvas'].height - _startYRatio : window['__canvas'].height,
                    // destWidth: window['__canvas'].width,
                    // destHeight:window['__canvas'].height,
                    fileType: fileType ? fileType : 'png',
                    quality: quality ? quality : 1,
                    success: (data: any) => {
                        func && func(data);
                        console.log('.............................截图成功', data['tempFilePath'])
                    },
                    fail: (data: any) => {
                        console.log('？？？？？？？？？？？？？？？？', data['number'])
                        console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx', data['errMsg'])
                    },
                    complete: () => { },
                }
            )
        }

        /**
         *
         * @export
         * @param {Function} [func] 成功回调,成功后会返回信息data,data['tempFilePath']为图片路径
         * @param {number} [x] 起始x位置
         * @param {number} [y] 起始y位置
         * @param {number} [width] 截图宽度
         * @param {number} [height] 截图高度
         * @param {string} [fileType] 类型jpg,png
         * @param {number} [quality] 质量0-1;       
         */
        static screenShoot(func?: Function, x?: number, y?: number, width?: number, height?: number, fileType?: string, quality?: number) {
            // console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', window['__canvas'].width, window['__canvas'].height);
            const _x = x * Laya.stage.clientScaleX;
            const _y = y * Laya.stage.clientScaleY;
            const _width = width * Laya.stage.clientScaleX;
            const _height = height * Laya.stage.clientScaleY;
            window['__canvas'].toTempFilePath(
                {
                    x: _x,
                    y: _y,
                    width: _width,
                    height: _height,
                    // destWidth: window['__canvas'].width,
                    // destHeight:window['__canvas'].height,
                    fileType: fileType ? fileType : 'png',
                    quality: quality ? quality : 1,
                    success: (data: any) => {
                        func && func(data);
                        console.log('.............................截图成功', data['tempFilePath'])
                    },
                    fail: (data: any) => {
                        console.log('？？？？？？？？？？？？？？？？', data['number'])
                        console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx', data['errMsg'])
                    },
                    complete: () => { },
                }
            )
        }

        /**
         *保存图片，会自动覆盖已有文件
         * @export
         * @param {string} tempFilePath 临时写入的文件路径，如截图路径
         * @param {string} name 名称
         * @param {string} func 回调函数参数返回data，data['savedFilePath']为保存路径；
         */
        static picSave(tempFilePath: string, name: string, func?: Function) {
            var FileSystemManager = Laya.Browser.window.qg.getFileSystemManager();

            let data = LwgStorage.array(name, null, [1, `${name}.png`]).value;
            let savedFilePath = Laya.Browser.window.qg.env.USER_DATA_PATH
                + data[0] + data[1];
            let _savedFilePath = Laya.Browser.window.qg.env.USER_DATA_PATH
                + (data[0] + 1) + data[1];
            // console.log('******************************************', data[0], data[1]);
            // console.log('******************************************', data);
            // console.log('******************************************', savedFilePath);
            // console.log('*****************************************', _savedFilePath);
            // 保存函数
            var save = () => {
                FileSystemManager.saveFile(
                    {
                        tempFilePath: tempFilePath,  //临时写入的文件路径，如截图路径
                        filePath: _savedFilePath,
                        success: function (res: any) { //成功回调
                            console.log('-------------------------图片保存成功', res['savedFilePath']);
                            LwgStorage.array(name).value = [data[0] + 1, data[1]];
                            func && func(res);
                        },
                        fail: () => {  //失败回调
                            console.log('xxxxxxxxxxxxxxxxxxxxxxxxx保存图片失败');
                        },
                        complete: () => { }
                    }
                )
            }
            // 判断有没有这个文件，没有这个文件就直接保存
            FileSystemManager.access({
                path: savedFilePath,
                success: () => {
                    // 有的话删除这个文件,然后再保存
                    FileSystemManager.removeSavedFile({
                        filePath: savedFilePath,
                        success: () => {
                            console.log('---------------------------删除保存的图片成功！');
                            save();
                        },
                    })
                },
                fail: () => {
                    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxx没有保存这个文件！');
                    save();
                },
                complete: () => { },
            })
        }

        /**
         * 获取缓存的图片
         * @export
         * @param {string} name 图片名称
         * @return {*}  {string}
         */
        static getStoragePic(name: string): string {
            let data = LwgStorage.array(name).value;
            // console.log('iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii', data);
            // console.log('iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii', data[0], data[1]);
            if (data.length > 0) {
                return Laya.Browser.window.qg.env.USER_DATA_PATH + data[0] + data[1];
            };
        }
    }
}
export module LwgVIVO {
    export class Init {
        constructor(ADData: LwgOPPO.TpADData, shortcutInstalle: LwgOPPO.TpShortcutInstalled) {
            if (LwgPlatform.type !== LwgPlatform.EmType.VIVO) {
                return;
            }

            AD = new _AD(ADData);
            System = new _System(shortcutInstalle);
        }
        get LwgOPPO(): string {
            return 'LwgVIVO';
        }
    }
    export let AD: _AD;
    export let System: _System;
    export class _AD extends LwgOPPO._AD {
        constructor(ADData: LwgOPPO.TpADData) {
            super(ADData);
        }
        checkShowWhenOpenScene(sceneName?: string): void {
            this.checkShowBannerAndNativeInScene();
        }
        checkShowWhenCloseOverlayScene(sceneName?: string): void {
            this.checkShowBannerAndNativeInScene();
        }
        checkShowAfterCloseScene(sceneName?: string): void {
            this.checkShowInsertAfterCloseScene(sceneName);
        }

        createBanner(): any {
            return Laya.Browser.window.qg.createBannerAd({
                posId: this.banner.posId,
                style: {
                    top: this.banner.style.top,
                    left: this.banner.style.left,
                    width: this.banner.style.width,
                    height: this.banner.style.height,
                }
            })
        }
        createNative(): any {
            return Laya.Browser.window.qg.createNativeAd({
                posId: this.native.posId,
            })
        }
        createVideo(): any {
            return Laya.Browser.window.qg.createRewardedVideoAd({
                posId: this.video.posId,
            });
        }

        insert: LwgOPPO.TpADInsertVIVO;
        checkShowInsertAfterCloseScene(sceneName: string): void {
            if (LwgDate.Now.time - this.ADData.initTime <= this.ADData.delayTime) {
                return;
            }
            console.log('插屏广告检测展示', sceneName);
            for (let index = 0; index < this.insert.showCloseScenes.length; index++) {
                const element = this.insert.showCloseScenes[index];
                if (element == sceneName) {
                    this.insert.isShow = true;
                    this.hideBannerAndNative();
                    this.insert.instance = Laya.Browser.window.qg.createInterstitialAd({
                        posId: this.insert.posId,
                    });
                    this.insert.instance.offError(this.insert.instance.errCb);
                    this.insert.instance.offClose(this.insert.instance.closeCb);

                    this.insert.instance.errCb = (err: any) => {
                        console.log("插屏广告加载失败", err);
                        this.insert.isShow = false;
                        this.checkShowBannerAndNativeInScene();
                    }
                    this.insert.instance.onError(this.insert.instance.errCb);

                    this.insert.instance.closeCb = () => {
                        this.insert.isShow = false;
                        this.checkShowBannerAndNativeInScene();
                    }
                    this.insert.instance.onClose(this.insert.instance.closeCb);

                    this.insert.instance.show().then(() => {
                        this.insert.isShow = true;
                        console.log('插屏广告展示成功');
                    }).catch((err: any) => {
                        console.log('插屏广告展示失败', JSON.stringify(err));
                        this.insert.isShow = false;
                        this.checkShowBannerAndNativeInScene();
                    })
                    break;
                }
            }
        }
    }
    export class _System extends LwgOPPO._System {
        showToast(message: string, duration: number): void {
            Laya.Browser.window.qg.showToast({
                message: message,
                duration: duration,
            })
        }
    }
}

export module LwgWX {
    export let Login: _Login;
    export let AD: _AD;
    export let System: _System;
    /**
     * @param {string[]} videoIDArr 视频广告组ID
     * @param {string} bannerID bannerID
     * @param {boolean} [skipADAndTest=false] 是否跳过广告进行测试功能
     */
    export class Init {
        constructor(data: {
            /**
             * 广告
             */
            AD: TpADData,
            /**
             * 分享
             */
            systemData: TpSystemData,
        }) {
            if (LwgPlatform.type !== LwgPlatform.EmType.WeChat) {
                return;
            }
            Login = new _Login;
            AD = new _AD(data.AD);
            System = new _System(data.systemData);
        }
        public get LwgWX(): string {
            return 'LwgWX';
        }
    }

    /**
     * 登录
     */
    class _Login {
        constructor() {
            this.onShow();
            this.onHide();
        }
        /**
         * 记录离线时间
         */
        offlineTime: number;
        //游戏回到前台时触发
        onShow(): void {
            Laya.Browser.window.wx.onShow(() => {
                LwgSound.playMusic();
                console.log("----- 切入前台");
                let curTime = Date.now();
                let offTime = LwgWX.Login.offlineTime;
                if ((curTime - offTime) >= 1500 && LwgWX.AD.video.model == LwgWX.EmADVideoModel.share) {
                    LwgWX.AD.video.watchguideCompeletCb && LwgWX.AD.video.watchguideCompeletCb();
                    LwgDialogue.showTips('分享成功!');
                }
            });
        }

        //游戏切到后台
        onHide(): void {
            Laya.Browser.window.wx.onHide(() => {
                //继续播放背景音乐
                LwgSound.stopMusic();

                let nowTime = new Date().getTime();
                this.offlineTime = nowTime;
                console.log("----- 切入后台， 离线时间", nowTime);
            });
        }
    }

    export type TpSystemData = {
        share: {
            tattle: string,
            imgUrl: string
        }
    }
    class _System implements LwgPlatform.TpSystemBase {
        constructor(systemData: TpSystemData) {
            this.shareTattle = systemData.share.tattle;
            this.shareImgUrl = systemData.share.imgUrl;
            this.onShareAppMessage();
        }
        shareTattle: string = '';
        shareImgUrl: string = '';
        /**
         * 分享
         */
        share(watchCompelet?: Function): void {
            if (Laya.Browser.window.wx) {
                Laya.Browser.window.wx.shareAppMessage({
                    title: this.shareTattle,
                    imageUrl: this.shareImgUrl,
                });
            } else {
                if (!Laya.Browser.onMiniGame) {
                    watchCompelet && watchCompelet();
                }
            }
        }
        /**
         * 分享按钮
         */
        private onShareAppMessage(): void {
            if (!Laya.Browser.onMiniGame) {
                return;
            }
            Laya.Browser.window.wx.showShareMenu({
                withShareTicket: true,
            });
            if (Laya.Browser.window.wx) {
                Laya.Browser.window.wx.onShareAppMessage(() => {
                    return {
                        title: this.shareTattle,
                        imageUrl: this.shareImgUrl,
                    }
                });
            }
        }
        /**
         * 短震动
         */
        vibrateShort(): void {
            if (Laya.Browser.onMiniGame) {
                wx.vibrateShort({
                    success: () => { },
                    fail: () => { },
                    complete: () => { }
                });
            }
        }
        vibrateLong(): void {
            if (Laya.Browser.onMiniGame) {
                wx.vibrateLong({
                    success: () => { },
                    fail: () => { },
                    complete: () => { }
                });
            }
        }
    }
    /**
     * 广告基础
     */
    export type TpADInstanceBase = {
        load?: Function,
        onLoad?: Function,
        onError?: Function,
        show?: Function,
        hide?: Function,
        destroy?: Function,
    }

    /**
     * banner广告
     */
    export type TpADbanner = {
        adUnitId: string,
        showScenes: string[],
        instance?: TpADInstanceBase,
        /**
         * 刷新时间
         */
        autoUpdateTime: 30,
        style: {
            left: number,
            top: number,
            width: number,
        },
        showTrack?: {
            sceneName: string,
            show: boolean,
        }[];
    };
    /**
    * 视频广告
    */
    export type TpADVideo = {
        adUnitId: string,
        instance?: {
            onClose: Function,
            offClose: Function,
            offError: Function,
            offLoad: Function,
        } & TpADInstanceBase,
        /**
        * 广告状态,如果没有视频广告则是分享
        */
        model?: EmADVideoModel,
        /**
         * 5秒内不得再点击
         */
        lastShowTime?: number,
        /**
         * 当前看完广告回调
         */
        watchguideCompeletCb?: Function,
        /**
        * 当前看完广告回调
        */
        closeCb?: Function,
    }

    /**
     * 原生广告组
     */
    export type TpADCustom = {
        adUnitId: string,
        instance?: { onHide?: Function } & TpADInstanceBase,
        style: {
            left: number,
            top: number,
            width?: number, // 用于设置组件宽度，只有部分模板才支持，如矩阵格子模板
            fixed?: number,
        },
        showScenes: string[],
        showTrack?: {
            sceneName: string,
            show: boolean,
        }[];
    }

    /**
     * 插屏广告
     */
    export type TpADInsert = {
        adUnitId: string,
        closeCb?: Function,
        instance?: {
            onClose: Function,
        } & TpADInstanceBase,
        /**
         * 在某些场景关闭后显示
         */
        showCloseScenes: string[],
    }

    /**
     * 广告
     */
    export type TpADData = {
        /**
          * 视频,多个视频和一个视频没有区别
          */
        video: TpADVideo,
        /**
         * banner
         */
        banner: TpADbanner,
        /**
         * 插屏
         */
        Insert: TpADInsert,
        /**
         * 原生广告组
         */
        customArr: TpADCustom[],
    }

    /**
     * 视频广告状态
     */
    export enum EmADVideoModel {
        /**
         * 广告
         */
        AD,
        /**
         * 分享
         */
        share,
        /**
         * 测试
         */
        test,
    }

    /**
     * 广告
     */
    class _AD implements LwgPlatform.TpADBase {
        constructor(data: TpADData) {
            this.lodeVideo(data.video);
            this.banner = data.banner;
            this.lodeBanner();
            this.loadInsert(data.Insert);
            this.lodeCustom(data.customArr);
        }
        /**
         * 原生广告组
         */
        customArr: TpADCustom[];
        /**
         * 视频广组
         */
        video: TpADVideo;
        /**
         * banner广告
         */
        banner: TpADbanner;
        /** 
         * 插屏广告
         */
        insert: TpADInsert;
        /**
         * 设置banner广告再场景中的显示
         */
        checkShowWhenOpenScene(sceneName: string): void {
            this.showBannerInSceneCheck(sceneName);
            this.showCustomInSceneCheck(sceneName);
        }
        checkShowWhenCloseOverlayScene(): void {
            this.showBannerByCloseOverlayScene();
            this.showCustomByCloseOverlayScenes();
        }
        checkShowAfterCloseScene(closeSceneName: string): void {
            this.checkShowInsertAfterCloseScene(closeSceneName);
        }
        /**
         * 初始化banner广告
         * @param bannerData 
         * @param show 
         */
        private lodeBanner(show?: boolean): void {
            // 创建 Banner 广告实例，提前初始化
            if (!this.banner.adUnitId) {
                return;
            }
            this.banner.instance = Laya.Browser.window.wx.createBannerAd({
                adUnitId: this.banner.adUnitId,
                adIntervals: this.banner.autoUpdateTime ? this.banner.autoUpdateTime : 30,
                style: {
                    left: this.banner.style.left ? this.banner.style.left : 0,
                    top: this.banner.style.top ? this.banner.style.top : Laya.Browser.onWeiXin ? Laya.Browser.window.wx.systemInfoSync().windowWidth - 148 : 0,
                    width: this.banner.style.width ? this.banner.style.width : 750,
                }
            })
            this.banner.instance.onLoad(() => {
                show && this.banner.instance.show();
                console.log(`banner${this.banner.adUnitId}广告加载成功!`);
            })
            this.banner.instance.onError((err: any) => {
                console.log(`banner广告:${this.banner.adUnitId}加载失败！错误信息:${JSON.stringify(err)}`);
            })
        }

        /**
         * 检测再当前场景中的显示
         */
        private showBannerInSceneCheck(sceneName: string): void {
            if (!this.banner.showTrack) {
                this.banner.showTrack = [];
            }
            let appear = false;
            for (let index = 0; index < this.banner.showScenes.length; index++) {
                const element = this.banner.showScenes[index];
                if (element == sceneName) {
                    appear = true;
                    break;
                }
            }
            if (appear) {
                this.showBanner();
                this.banner.showTrack.push({
                    sceneName: sceneName,
                    show: true,
                });
            } else {
                this.hideBanner();
                this.banner.showTrack.push({
                    sceneName: sceneName,
                    show: false,
                });
            }
        }
        /**
         * 关闭页面的时候判断上个元素是否是显示的，如果是则打开，不是则直接关闭
         */
        private showBannerByCloseOverlayScene(): void {
            if (!this.banner.showTrack) {
                this.banner.showTrack = [];
            }
            this.banner.showTrack.pop();
            if (this.banner.showTrack.length > 0) {
                if (this.banner.showTrack[this.banner.showTrack.length - 1].show) {
                    this.showBanner();
                } else {
                    this.hideBanner();
                }
            } else {
                this.hideBanner();
            }
        }
        /**
         * 显示banner广告
         */
        showBanner(): void {
            this.banner.instance && this.banner.instance.show().then(() => console.log('banner 广告显示'));
        }
        /**
         * 显示一个新的banner广告,相当于刷新,必须删除原来的banner,还是原来的 adUnitId
         */
        showBannerNew() {
            this.banner.instance && this.banner.instance.destroy();
            this.banner.instance = null;
            this.lodeBanner(true);
        }

        /**
         * 关闭banner广告
         */
        hideBanner(): void {
            this.banner && this.banner.instance && this.banner.instance.hide().then(() => console.log('banner 广告关闭'));
        }

        /**
         * 加载原生广告
         * @param ID 
         * @returns 
         */
        private lodeCustom(customArrData: TpADCustom[]): void {
            this.customArr = customArrData;
            for (let index = 0; index < customArrData.length; index++) {
                const custom = customArrData[index];
                if (!custom.adUnitId) {
                    continue;
                }
                custom.instance = Laya.Browser.window.wx.createCustomAd({
                    adUnitId: custom.adUnitId,
                    style: {
                        left: custom.style.left,
                        top: custom.style.top,
                        width: custom.style.width ? custom.style.width : 100, // 用于设置组件宽度，只有部分模板才支持，如矩阵格子模板
                        fixed: custom.style.fixed // fixed 只适用于小程序环境
                    }
                })
            }
        }
        /**
         * 检测再当前场景中的显示
         */
        private showCustomInSceneCheck(sceneName: string): void {
            for (let i = 0; i < this.customArr.length; i++) {
                const custom = this.customArr[i];
                if (custom && custom.instance) {
                    let appear = false;
                    for (let j = 0; j < custom.showScenes.length; j++) {
                        const name = custom.showScenes[j];
                        if (name == sceneName) {
                            appear = true;
                            break;
                        }
                    }
                    if (!custom.showTrack) {
                        custom.showTrack = [];
                    }
                    if (appear) {
                        custom.instance.show().then(() => {
                            //有时候会延迟，需要进行二次判断
                            let appear = false;
                            for (let j = 0; j < custom.showScenes.length; j++) {
                                const name = custom.showScenes[j];
                                if (name === LwgScene.lastSceneName) {
                                    appear = true;
                                    break;
                                }
                            }
                            if (!appear) {
                                custom.instance.hide();
                            }
                            console.log('原生广告展示！');
                        })
                    } else {
                        custom.instance.hide().then(() => console.log('原生广告关闭！'));
                    }
                    custom.showTrack.push({
                        sceneName: sceneName,
                        show: appear,
                    });
                }
            }
        }

        /**
         * 关闭页面的时候判断上个元素是否是显示的，如果是则打开，不是则直接关闭
         */
        private showCustomByCloseOverlayScenes(): void {
            for (let index = 0; index < this.customArr.length; index++) {
                const custom = this.customArr[index];
                if (!custom.showTrack) {
                    custom.showTrack = [];
                }
                custom.showTrack.pop();
                if (custom.instance) {
                    if (custom.showTrack.length > 0) {
                        if (custom.showTrack[custom.showTrack.length - 1].show) {
                            custom.instance.show().then(() => { console.log('原生广告展示！'); });
                        } else {
                            custom.instance.hide().then(() => console.log('原生广告关闭！'));
                        }
                    } else {
                        custom.instance.hide().then(() => console.log('原生广告关闭！'));
                    }
                }
            }
        }

        /**
         * 加载视频广告
         * @returns 
         */
        private lodeVideo(videoData: TpADVideo): void {
            this.video = videoData;
            var onLodeCb = () => {
                console.log(`激励视频${this.video.adUnitId}广告加载成功!`);
                this.video.instance.offLoad(onLodeCb);
                this.video.instance.offError(onErrorCb);
            }
            var onErrorCb = (err: any) => {
                console.log(`激励视频${this.video.adUnitId}广告加载失败！错误信息:${JSON.stringify(err)}`);
                this.video.instance.offLoad(onLodeCb);
                this.video.instance.offError(onErrorCb);
            }
            if (!this.video.adUnitId) {
                this.video.model = EmADVideoModel.share;
                return;
            } else {
                this.video.model = EmADVideoModel.AD;
            }
            this.video.instance = Laya.Browser.window.wx.createRewardedVideoAd({
                adUnitId: this.video.adUnitId,
            })
            this.video.instance.onLoad(onLodeCb);
            this.video.instance.onError(onErrorCb);
        }

        /**
          * 显示视屏激励广告
          * @param watchCompelet 观看完成回调
          * @param watchClose 中途退出回调
          * @param ad_place 广告位
          * @returns 
          */
        showVideo(watchCompelet: Function, watchClose?: Function): void {
            if (this.video.model === EmADVideoModel.share) {
                this.video.watchguideCompeletCb = watchCompelet;
                System.share(watchCompelet);
                return;
            }
            //5秒钟之内不能再看广告
            if (this.video.lastShowTime === undefined) {
                this.video.lastShowTime = 0;
            }
            if (LwgDate.Now.time - this.video.lastShowTime < 5000) {
                console.log('5秒内不得再次看视频广告！');
                return;
            }
            this.video.lastShowTime = LwgDate.Now.time;
            if (this.video && this.video.instance) {
                var onCloseFunc = (res: any) => {
                    // 用户点击了【关闭广告】按钮
                    // 小于 2.1.0 的基础库版本，res 是一个 undefined
                    if (res && res.isEnded || res === undefined) {
                        // 正常播放结束，可以下发游戏奖励
                        LwgDialogue.showTips('观看完成，获得奖励!');
                        LwgSound.playMusic();
                        watchCompelet && watchCompelet(res);
                    } else {
                        watchClose && watchClose(res);
                        LwgSound.playMusic();
                        LwgDialogue.showTips('观看完整广告才可以领取奖励!');
                    }
                    this.video.instance.offClose(onCloseFunc);
                }
                this.video.instance.show()
                    .catch((err: any) => {
                        console.log(`广告播放失败：${JSON.stringify(err)},准备重新加载`);
                        this.video.instance.load().then(() => this.video.instance.show()
                            .catch(() => {
                                LwgDialogue.showTips('暂无广告！!');
                            }))
                    })
                this.video.instance.onClose(onCloseFunc);
            } else {
                console.log('广告不存在！');
            }
        }

        /**
         * 检测再当前场景中的显示
         */
        private checkShowInsertAfterCloseScene(closeSceneName: string): void {
            for (let index = 0; index < this.insert.showCloseScenes.length; index++) {
                const element = this.insert.showCloseScenes[index];
                if (element == closeSceneName) {
                    this.insert && this.insert.instance && this.insert.instance.show().catch((err: any) => {
                        console.error('插屏广告展示失败！', JSON.stringify(err));
                    })
                    break;
                }
            }
        }

        /**
         * 加载并展示插屏
         * @returns 
         */
        private loadInsert(InsertData: TpADInsert): void {
            this.insert = InsertData;
            if (!this.insert.adUnitId) {
                return;
            }
            this.insert.instance = Laya.Browser.window.wx.createInsertitialAd({
                adUnitId: this.insert.adUnitId,
            });
            this.insert.instance.onLoad(() => {
                console.log('插屏广告加载成功', this.insert);
            });
            this.insert.instance.onError((err: any) => {
                console.error("插屏广告加载失败:" + JSON.stringify(err));
            });
            this.insert.instance.onClose((res: any) => {
                console.log("插屏广告加载关闭:" + JSON.stringify(res));
                this.insert.closeCb && this.insert.closeCb();
            });
        }
    }
}

/**
 * 一些基础路径 
 */
export module LwgPath {
    /**
     * 基础特效元素路径
     */
    export const LwgEffects: string = 'Lwg/Effects/';
    /**
     * 基础特效元素路径
     */
    export const LwgUI: string = 'Lwg/UI/';
    /**
     * 初始化需要的资源路劲
     */
    export const Init: string = 'Init/';
    /**
     * ui资源路径
     */
    export const GameUI: string = 'Game/UI/';
    /**
     * 声音路径
     */
    export const GameSound: string = 'Game/Sound/';
    /**
     * 数据表路径
     */
    export const GameData: string = 'GameData/';
    /**
    * 数据表路径
    */
    export const Skeleton: string = 'GameData/';
    /**
     * 其他场景路径
     */
    export const Views: string = 'Views/';
    /**
     * 基础场景路径
     */
    export const ViewsBase: string = 'Views/Base/';
    /**
     * 3D场景路径
     */
    export const Scene3D: string = 'Game3D/Scene3D/';
    /**
     * 3D预制体路径
     */
    export const Prefab3D: string = 'Game3D/Prefab3D/';
}

/**
 * 游戏控制
 */
export module LwgControl {
    export let Game: _Game;
    export let Login: _Login;
    export let Player: _Player;
    export class Init {
        /**
         * @param levelLoop 第几关开始循环
         * @param levelLoopSection 循环区间
         * @param statShow 性能面板
         * @param multiTouchEnabled 多点触控
         */
        constructor(levelLoop: number, levelLoopSection: [number, number], statShow: boolean, multiTouchEnabled: boolean) {
            Game = new _Game(levelLoop, levelLoopSection, statShow, multiTouchEnabled);
            Login = new _Login();
            Player = new _Player();
        }
        public get LwgControl(): string {
            return 'LwgControl';
        }
    }
    /**
     * 登录
     */
    export class _Login {
        constructor() {
            const curDate = new Date;
            this.info = LwgStorage.arrayArray('Login/info');
            this.info.value.push([curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate(), curDate.getDay(), curDate.getHours(), curDate.getMinutes(), curDate.getSeconds()])
            let arr: Array<Array<any>> = [];
            if (this.info.value.length > 0) {
                for (let index = 0; index < this.info.value.length; index++) {
                    arr.push(this.info.value[index]);
                }
            }
            arr.push([curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate(), curDate.getDay(), curDate.getHours(), curDate.getMinutes(), curDate.getSeconds()]);
            this.info.value = arr;
            this.totalNum++;
            this.todayNum++;
        }
        /**
         * 玩家登陆游戏的总次数信息,包括其中的年月日,星期几
         */
        info: LwgStorage.TpArrayArrVariable;
        /**
         * 玩家登录的总次数
         */
        get totalNum(): number {
            return Laya.LocalStorage.getItem('Login/totalNum') ? Number(Laya.LocalStorage.getItem('Login/totalNum')) : 0;
        };
        set totalNum(val: number) {
            Laya.LocalStorage.setItem('Login/totalNum', val.toString());
        }

        /**
         * 今天登陆了几次
         */
        get todayNum(): number {
            return Laya.LocalStorage.getItem('Login/todayNum') ? Number(Laya.LocalStorage.getItem('Login/todayNum')) : 0;
        };
        set todayNum(val: number) {
            if (LwgDate.Now.date == this.info.value[this.info.value.length - 1][2]) {
                Laya.LocalStorage.setItem('Login/todayNum', val.toString());
            }
        }

        /**
         * 前一天是哪一天，找到最后一次不同于今天的登陆日期
         */
        get dayBefore(): number {
            const arr = this.info.value;
            const curData = arr[arr.length - 1][1];
            let haveFront = false;
            for (let index = arr.length - 1; index < 0; index--) {
                const frontData = arr[index][1];
                if (frontData !== curData) {
                    haveFront = true;
                    return frontData;
                }
            }
            if (!haveFront) {
                return (new Date).getDate();
            }
        }

        /**
         * 前一次登录是哪一天
         */
        get frontDate(): number {
            // 必定登陆了一次，所以只有大于等于2或者1
            if (this.info.value.length >= 2) {
                return this.info.value[this.info.value.length - 2][2];
            } else {
                return this.info.value[this.info.value.length - 1][2];
            }
        };

        /**
         * 上次登录是否和今天一样
         */
        get lastdayComparisonToday(): boolean {
            return this.frontDate == LwgDate.Now.date;
        }
    }

    /**
     * 游戏控制
     */
    class _Game {
        constructor(levelLoop: number, levelLoopSection: [number, number], statShow: boolean, multiTouchEnabled: boolean) {
            this.levelLoop = levelLoop;
            if (LwgPlatform.type == LwgPlatform.EmType.Exploit || LwgPlatform.type == LwgPlatform.EmType.ExploitNoAD && statShow) {
                Laya.Stat.show();
            } else {
                Laya.Stat.hide();
            }
            Laya.MouseManager.multiTouchEnabled = multiTouchEnabled;
        }

        /**
         * 暂停
         */
        get pause(): boolean {
            return this['_pause'];
        };
        set pause(bool: boolean) {
            if (bool) {
                this['_pause'] = false;
                LwgTimer.onOff = false;
                LwgClick.Filter.setValue(LwgClick.EmfilterType.all);

            } else {
                this['_pause'] = true;
                LwgTimer.onOff = true;
                LwgClick.Filter.setValue(LwgClick.EmfilterType.none);
            }
        }

        get level(): number {
            let val = Laya.LocalStorage.getItem('Game/level')
            if (!val) {
                Laya.LocalStorage.setItem('Game/level', (1).toString());
                return 1;
            } else {
                return Number(val);
            }
        };

        /**
         * 关卡数，对应的是表格或配置中的关卡数
         */
        set level(val: number) {
            const curLevel = Laya.LocalStorage.getItem('Game/level') ? Number(Laya.LocalStorage.getItem('Game/level')) : 1;
            //levelReal永远向前记录 val - curNum 就是从存储中获得和赋值的比较，例如+1关，就levelReal+1，如果没有循环关卡和随机关卡，那么levelReal和level一样
            //diff就是本次关卡改变了几关
            const diff = val - curLevel;
            if (diff > 0) {
                this.levelDisplay += diff;
            }
            //一旦大于就开始循环
            if (this.levelLoop != -1 && val >= this.levelLoop) {
                if (this.levelLoopSection[0] !== -1) {
                    Laya.LocalStorage.setItem('Game/level', (this.levelLoopSection[0]).toString());
                } else {
                    Laya.LocalStorage.setItem('Game/level', (1).toString());
                }
            } else {
                Laya.LocalStorage.setItem('Game/level', (val).toString());
                //如果手动修改了当前的关卡，且关卡不小于循环关卡，则真实关卡也需要修改
                if (val <= this.levelLoop) {
                    this.levelDisplay = val;
                }
            }
        }

        /**
         *  用于显示关卡数，有时候从某些关卡后开始循环，或者随机某段关卡，此时需要记录一个真实关卡数，只做显示作用,并且只做正向改变
         */
        get levelDisplay(): number {
            return Laya.LocalStorage.getItem('Game/levelDisplay') ? Number(Laya.LocalStorage.getItem('Game/levelDisplay')) : this.level;
        };
        set levelDisplay(val: number) {
            Laya.LocalStorage.setItem('Game/levelDisplay', val.toString());
        };
        /**
         * 从第几关开始循环
         */
        levelLoop = -1;
        /**
         * 关卡循环区间，第一个为最小循环的区间，第二个为最大循环区间，都为-1说明直接从头循环到levelLoop
         */
        levelLoopSection: [number, number] = [-1, -1];
    }

    /**
     * 玩家信息
     */
    class _Player {
        /**
         * 玩家初始名称
         * @param name 
         */
        constructor(name?: string) {
            this._NAME = name
        }
        private _NAME = 'You';
        /**
         * 名称，玩家会自己填写 
         */
        get NAME(): string {
            return LwgStorage.string('Player/NAME', null, this._NAME).value;
        };
        set NAME(val: string) {
            LwgStorage.string('Player/NAME').value = val;
        };
        /**
         * 等级
         */
        get level(): number {
            return LwgStorage.number('Player/level', null, 1).value;
        };
        set level(val: number) {
            LwgStorage.number('Player/level').value = val;
        };
        /**
         * 经验值
         */
        get empirical(): number {
            return LwgStorage.number('Player/empirical', null, 0).value;
        };
        set empirical(val: number) {
            LwgStorage.number('Player/empirical').value = val;
        };
    }
}

/**
 * 场景
 */
export module LwgScene {
    export class Init {
        /**
         * 初始化
         */
        constructor(data: {
            /**
             * 全部场景脚本
             */
            sceneScript: object,
            /**
             * 通用场景打开动画
             */
            sceneOpenAniType: LwgSceneAni.EmOpenSceneType,
            /**
             * 通用叠加场景打开动画
             */
            overlaySceneCloseAnitype: LwgSceneAni.EmCloseOverlayType,
            /**
             * 通用叠加场景关闭动画
             */
            overlaySceneOpenAnitype: LwgSceneAni.EmOpenOverlayType,
        }) {
            sceneScript = data.sceneScript;
            if (data.sceneOpenAniType) {
                commSceneOpenAniType = data.sceneOpenAniType;
            }
            if (data.overlaySceneOpenAnitype) {
                commOverlaySceneOpenAniType = data.overlaySceneOpenAnitype;
            }
            if (data.overlaySceneCloseAnitype) {
                commOverlaySceneCloseAniType = data.overlaySceneCloseAnitype;
            }

            sceneParent = new Laya.Sprite;
            sceneParent.name = EmSceneParent.sceneParent;
            sceneParent.zOrder = 10;
            sceneParent.size(Laya.stage.width, Laya.stage.height);
            Laya.stage.addChild(sceneParent);

            baseViewObjParent = new Laya.Sprite;
            baseViewObjParent.name = EmSceneParent.baseViewObjParent;
            baseViewObjParent.zOrder = 11;
            baseViewObjParent.size(Laya.stage.width, Laya.stage.height);
            baseViewObjParent.mouseThrough = true;
            Laya.stage.addChild(baseViewObjParent);

            commonViewParent = new Laya.Sprite;
            commonViewParent.name = EmSceneParent.commonViewParent;
            commonViewParent.zOrder = 12;
            commonViewParent.size(Laya.stage.width, Laya.stage.height);
            commonViewParent.mouseThrough = true;
            Laya.stage.addChild(commonViewParent);
        }
        public get LwgScene(): string {
            return 'LwgScene';
        }
    }
    /**2d游戏需要一个背景图，防止在一些动画切换的时候出现黑色底，但是3d不需要，因为3d场景不会消失 */
    export let d2Bg: Laya.Image;

    /**场景控制,访问特定场景用ownerSceneControl[name]访问,这是所有场景，包括各个场景父节点中的场景*/
    export const sceneControl = {};

    /**场景容器，此节点是场景容器，方便增删改查、遮罩以及操作层级等*/
    export let sceneParent: Laya.Sprite;

    /**一些通用的但是不属于场景的view父节点*/
    export let commonViewParent: Laya.Sprite;

    /**一些基础的view父节点，例如金币，钻石，返回按钮等 */
    export let baseViewObjParent: Laya.Sprite;

    /**
     * 最后打开的场景
     */
    export let lastSceneName: string;

    /**
     * 父节点类型
     */
    export enum EmSceneParent {
        sceneParent = 'sceneParent',
        commonViewParent = 'commonViewParent',
        baseViewObjParent = 'baseViewObjParent',
    }

    /**
     * 3d场景的父节点，测试中
     */
    export let scene3DParent: Laya.View;

    /**
     * 和场景名称一样的脚本,初始化的时候添加进去,这个脚本唯一，不可随意调用
     */
    export let sceneScript = {};

    /**
     * 打开的场景顺序,用于返回按钮返回,通过返回按钮返回回去的场景不会被记录，否则会进入来回循环
     */
    export let openSceneTrack: string[] = [];

    /**场景打开动画 */
    export let commSceneOpenAniType: LwgSceneAni.EmOpenSceneType;

    /**弹窗打开动画 */
    export let commOverlaySceneOpenAniType: LwgSceneAni.EmOpenOverlayType;

    /**弹窗关闭动画 */
    export let commOverlaySceneCloseAniType: LwgSceneAni.EmCloseOverlayType;

    /**常用场景的名称，和脚本默认导出类名保持一致*/
    export class NameBase {
        /**
         * 初始化场景
         */
        static Init = 'Init';
        /**
         * 加载界面
         */
        static PreLoad = 'PreLoad';
        /**
         * 页面前的加载页面
         */
        static PreLoadCutIn = 'PreLoadCutIn';
        /**
         * 引导界面
         */
        static Guide = 'Guide';
        /**
         * 通用弹窗
         */
        static CommonDialog = 'CommonDialog';
        /**
         * 游戏参数修改面板
         */
        static GameManager = 'GameManager';
        /**
         * 开始界面
         */
        static Start = 'Start';
        /**
         * 设置页面
         */
        static Set = 'Set';
        /**
         * 提示页面
         */
        static DialogHint = 'DialogHint';
    }

    /**
     * 返回上个场景，不会返回到dialog，返回按钮返回的也不计入
     */
    export function returnToPreviousScene(): void {
        if (openSceneTrack.length >= 2 && openSceneTrack[openSceneTrack.length - 2] !== NameBase.PreLoad) {
            const openName = openSceneTrack[openSceneTrack.length - 2];
            const closeName = openSceneTrack[openSceneTrack.length - 1];
            if (openName === closeName) {
                console.log('返回按钮设置有问题，只能指向start使用！');
                return;
            }
            openSceneTrack.pop();
            openScene(openName, closeName, null, true);
            //到达start场景则不会继续返回
            if (openName === NameBase.Start) {
                openSceneTrack = [NameBase.Start];
            }
        }
    }

    /**
     * 获取当前显示的场景组
     * @param cb 回调，传参为场景
     */
    export function getCurShowSceneArr(cb?: Function): Laya.View[] {
        const arr: Laya.View[] = [];
        for (const key in sceneControl) {
            if (Object.prototype.hasOwnProperty.call(sceneControl, key)) {
                const element = sceneControl[key] as Laya.View;
                if (element.parent) {
                    cb && cb(element);
                    arr.push(element);
                }
            }
        }
        return arr;
    }

    /**
     * 关闭除了自己的其他页面
     * @param selfName 场景名称
     */
    export function closeAllExceptSelf(selfName: string): void {
        for (const key in sceneControl) {
            if (Object.prototype.hasOwnProperty.call(sceneControl, key)) {
                const scene = sceneControl[key] as Laya.Scene;
                if (scene.name !== selfName) {
                    //将现有的场景层级变成零，此时他们还是按照当前顺序排布
                    scene.close();
                }
            }
        }
    }
    /**
     * 将一个场景放到最上面
     * @static
     * @param {Laya.Scene} upScene 场景
     */
    export function upSceneZOder(upScene: Laya.Scene): void {
        let num = 0;
        for (const key in sceneControl) {
            if (Object.prototype.hasOwnProperty.call(sceneControl, key)) {
                const scene = sceneControl[key] as Laya.Scene;
                if (scene.parent) {
                    //将现有的场景层级变成零，此时他们还是按照当前顺序排布
                    scene.zOrder = 0;
                    num++;
                }
            }
        }
        if (upScene) {
            upScene.zOrder = num;
        }
    }

    /**
     * 将一个场景添加到舞台，并且添加同名脚本
     * @param openScene 被打开的场景
     * @param openData 被打开的场景信息
     * @param isOverlay 是否是叠加场景，主场景就一个，isOverlay必定=false，弹窗和叠加场景isOverlay必定=true；
     * @param showReturnBtn 
     * @param parentType 
     * @param scriptName 
     */
    export function addSceneInStage(openScene: Laya.View, openData?: object, isOverlay?: boolean, showReturnBtn?: boolean, parentType?: EmSceneParent, scriptName?: string): void {
        if (openScene) {
            // 添加同名脚本
            const script: SceneBase = addDefaultScript(openScene, scriptName);
            if (script) {
                script.isOverlay = isOverlay;
                script.openData = openData ? openData : {};
                script.showReturnBtn = showReturnBtn;
                openScene[openScene.name] = script;
            }
            //有些场景不受场景父节点的控制,那么就不会添加到sceneControl中去,例如GameManager场景会添加到其他父节点上
            let parent: Laya.Sprite;
            if (parentType === EmSceneParent.commonViewParent) {
                parent = commonViewParent;
            } else if (parentType === EmSceneParent.baseViewObjParent) {
                parent = baseViewObjParent;
            } else {
                parent = sceneParent;
            }
            //先初始化场景父节点
            if (parent.getChildByName(openScene.name)) {
                console.log(`场景${openScene.name}重复出现，请检查代码，可能是按钮点击多次！`);
                LwgClick.Filter.setValue(LwgClick.EmfilterType.all);
                return;
            } else {
                sceneControl[openScene.name] = openScene;
                parent.addChild(openScene);
            }
            //加载页无法点击
            if (openScene.name === NameBase.PreLoadCutIn) {
                openScene.on(Laya.Event.CLICK, openScene, () => {
                    console.log('防止穿透');
                })
            }
        }
    };

    /**
     *  添加脚本
     * @param openScene 场景
     * @param script 如果手动添加一个脚本，那么便不会添加同名脚本
     * @returns 
     */
    export function addDefaultScript(openScene: Laya.View, scriptName: string): SceneBase {
        let script0: SceneBase;
        let spcriptBool = false;
        for (const key in sceneScript) {
            if (Object.prototype.hasOwnProperty.call(sceneScript, key)) {
                const element = sceneScript[key];
                if ((scriptName && key === scriptName) || key === openScene.name) {
                    if (!openScene.getComponent(element)) {
                        script0 = openScene.addComponent(element) as SceneBase;
                        spcriptBool = true;
                        return script0;
                    }
                }
            }
        }
        if (!spcriptBool) {
            console.log(`${openScene.name}场景没有同名脚本！,需在LwgInit脚本中导入该脚本！`);
        }
    }

    /**
     * 走动画流程
     * @param openScene 打开场景
     * @param closeScene 关闭场景
     */
    export function goSceneOpenAni(openScene: Laya.View, closeScene: Laya.View): void {
        const openScript = openScene[openScene.name] as SceneBase;
        const openSceneName = openScene.name;
        var cb = () => {
            if (closeScene) {
                closeScene.close();
            }
            !openScript.isOverlay && closeAllExceptSelf(openSceneName);
            openAniAfterCommCb(openScript);
        }
        if (openScript) {
            let openAniTime = openScript.lwgOpenAni();
            if (openAniTime) {
                Laya.timer.once(openAniTime, this, cb);
            } else {
                LwgSceneAni.playSceneOpen(commSceneOpenAniType, openScene, closeScene, cb);
            }
        }
    }

    /**
     * 打开叠加一个场景
     * @param OpenOverlay 场景
     */
    export function goOverlaySceneOpenAni(OpenOverlay: Laya.View): void {
        const openScript = OpenOverlay[OpenOverlay.name] as SceneBase;
        LwgSceneAni.playOverlaySceneOpen(commOverlaySceneOpenAniType, OpenOverlay, () => {
            openAniAfterCommCb(openScript);
        });
    }

    /**
     * 关闭叠加场景流程
     * @param scene 场景
     */
    export function goOverlaySceneCloseAni(scene: Laya.View): void {
        LwgClick.Filter.setValue(LwgClick.EmfilterType.none);
        LwgSceneAni.playOverlaySceneClose(commOverlaySceneCloseAniType, scene, () => {
            closeOverlayAniAfterCommCb(scene);
        });
    }

    /**
     * 打开通用弹窗
     * @param {Laya.View} Dialog 通用弹窗
     */
    export function goCommonDialogOpenAni(Dialog: Laya.View): void {
        const openScript = Dialog[Dialog.name] as CommonDialogBase;
        const openAni = openScript.Doalog[openScript.openAnitype] as Laya.Animation;
        openAni.play(0, false);
        openAni.once(Laya.Event.COMPLETE, this, () => {
            openAniAfterCommCb(openScript);
        })
    }
    /**
     * 关闭通用弹窗
     * @param {Laya.View} dialog
     */
    export function goCommonDialogCloseAni(dialog: Laya.View): void {
        LwgClick.Filter.setValue(LwgClick.EmfilterType.none);
        const script = dialog[dialog.name] as CommonDialogBase;
        const closeAni = script.Doalog[script.closeAniType] as Laya.Animation;
        closeAni.play(0, false);
        closeAni.once(Laya.Event.COMPLETE, this, () => {
            closeOverlayAniAfterCommCb(dialog);
        })
    }

    /**
     * 设置通用打开动画结束回调
     */
    function openAniAfterCommCb(openScript: SceneBase): void {
        LwgClick.Filter.setValue(LwgClick.EmfilterType.all);
        lastSceneName = openScript.owner.name;
        openScript.setViewShowByOpen();
        openScript.lwgButton();
        //可操作之前，需要获取次数值
        openScript.openNum++;
        openScript.lwgOpenAniAfter();
        //完全打开之后发送事件
        LwgEvent.notify(LwgEvent.BaseEvent.openSceneAniAfter, [openScript.owner.name, openScript.openNum]);
    }

    /**
     * 设置通用关闭动画结束回调
     */
    function closeOverlayAniAfterCommCb(scene: Laya.View): void {
        scene.close();
        LwgPlatform.AD.checkShowWhenCloseOverlayScene(scene.name);
        LwgClick.Filter.setValue(LwgClick.EmfilterType.all);
    }

    /**
     *查找某个节点属于当前哪个场景
     * @param {Laya.Sprite} node
     */
    export function findNodeBelongToScene(node: Laya.Sprite): Laya.View {
        if (node.parent == LwgScene.sceneParent) {
            return node as Laya.View;
        } else {
            return this.findNodeBelongToScene(node.parent as Laya.Sprite);
        }
    }

    /**预加载完毕后，需要打开的场景信息*/
    export const preLoadInfo = {
        openName: null as string,
        fromName: null as string,
        openIsOverlay: null as boolean,
        dataOpen: null as object,
    }

    /**
     * 加载一个场景，并且做一些基础设置
     * @param openName 场景名称
     * @param cb 回调函数
     */
    function lodeScene(openName: string, cb: Function): void {
        LwgClick.Filter.setValue(LwgClick.EmfilterType.none);
        //场景地址
        let url: String = NameBase[openName] ? LwgPath.ViewsBase : LwgPath.Views;
        Laya.Scene.load(`${url}${openName}.json`, Laya.Handler.create(this, function (Scene: Laya.View) {
            Scene.name = openName;
            cb && cb(Scene);
        }))
    }

    /**
     * 预加载后打开场景，预加载内容将在预加载界面按照界面名称执行
     * @param openName 需要打开的场景名称
     * @param openData 传递给下个场景的初始化信息
     * @param fromReturnBtn 是否是从返回按钮中进来的，从返回按钮中进来不会被记录
     * @param showReturnBtn 显示返回按钮
     */
    export function openSceneAndPreLoad(openName: string, fromName: string, openIsOverlay?: boolean, openData?: object) {
        preLoadInfo.openName = openName;
        preLoadInfo.fromName = fromName;
        preLoadInfo.openIsOverlay = openIsOverlay;
        openOverlayScene(NameBase.PreLoadCutIn, openData);
    }

    /**
     * 打开场景
     * @param openName 需要打开的场景名称
     * @param closeName 需要关闭的场景，默认为null
     * @param openData 传递给下个场景的初始化信息
     * @param fromReturnBtn 是否是从返回按钮中进来的，从返回按钮中进来不会被记录
     * @param showReturnBtn 显示返回按钮
     */
    export function openScene(openName: string, closeName?: string, openData?: object, fromReturnBtn?: boolean, showReturnBtn?: boolean): void {
        lodeScene(openName, (Scene: Laya.View) => {
            //如果返回到了start界面则重新计算返回记录
            !fromReturnBtn && openSceneTrack.push(openName);
            addSceneInStage(Scene, openData, false, showReturnBtn);
            goSceneOpenAni(Scene, sceneControl[closeName]);
        })
    }

    /**
     * 叠加一个场景，叠加一个场景不能打开返回按钮，类似弹窗
     * @param openName 场景名称
     * @param openData 场景信息
     */
    export function openOverlayScene(openName: string, openData?: object): void {
        lodeScene(openName, (Scene: Laya.View) => {
            addSceneInStage(Scene, openData, true);
            goOverlaySceneOpenAni(Scene);
        })
    }

    /**
     * 打开其他用途的场景
     */
    export function openOverlayOtherParentView(openName: string, parent: EmSceneParent, openData: any): void {
        lodeScene(openName, (Scene: Laya.View) => {
            LwgScene.addSceneInStage(Scene, openData, true, false, parent);
            goOverlaySceneOpenAni(Scene);
        })
    }

    /**
      * 通用dialog
      * @param openName 场景名称
      * @param openData 场景信息
      */
    export function openCommonDialog(openName: string, openData?: object, openAniType?: EmDialogCommonOpenAniType): void {
        lodeScene(NameBase.CommonDialog, (SceneDialog: ui.Views.Base.DialogCommonUI) => {
            addSceneInStage(SceneDialog, openData, true, false, null, openName);
            goCommonDialogOpenAni(SceneDialog);
            Laya.Scene.load(`${LwgPath.Views}${openName}.json`, Laya.Handler.create(this, function (Scene: Laya.View) {
                SceneDialog.ViewBox.addChild(Scene);
                SceneDialog.ViewBox.size(Scene.width, Scene.height);
                SceneDialog.content.size(SceneDialog.ViewBox.width + 40, SceneDialog.ViewBox.height + 200);
                LwgClick.btnOnceUp(SceneDialog.BtnClose, this, () => {
                    goCommonDialogCloseAni(SceneDialog);
                })
            }))
        })
    }

    /**
     * 关闭一个叠加场景,如果是场景的话则不会被关闭，场景只会走打开下个场景的流程
     * @param closeScene 需要关闭的场景名称
     * */
    export function closeOverlayScene(closeScene?: Laya.View): void {
        if (closeScene) {
            const script = closeScene[closeScene.name] as LwgScene.SceneBase;
            if (script.isOverlay) {
                script.lwgClearOwner();
                goOverlaySceneCloseAni(closeScene);
            } else {
                console.log('只有叠加在场景上面的场景可以自由关闭，否则请使用打开另一个场景，基础场景会自动关闭！');
            }
        }
    }

    /**
     * 清除场景和脚本的tween动画和timer,以及事件
     */
    export function clearScene(caller: any): void {
        Laya.Tween.clearAll(caller);
        Laya.timer.clearAll(caller);
        LwgEvent.offAllCaller(caller);
    }

    /**
     * 脚本通用类
     * */
    class ScriptBase extends Laya.Script {
        ownerSceneName: string = '';
        /**激活时执行一次，重写覆盖*/
        lwgOnAwake(): void { };
        /**适配位置*/
        lwgAdaptive(): void { };
        /**场景中的一些事件，在lwgOnEnable中注册,lwgOnStart以后可以派发这些事件*/
        lwgEvent(): void { };
        evRegister(name: any, func: Function): void {
            LwgEvent.register(name, this, func);
        }
        evRegisterOnce(name: string, func: Function): void {
            LwgEvent.registerOnce(name, this, func);
        }
        evNotify(name: any, args?: Array<any>): void {
            LwgEvent.notify(name, args);
        }
        /**初始化，在onEnable中执行，重写即可覆盖*/
        lwgOnEnable(): void { }
        /**初始化完毕后，onUpdate前执行一次，重写覆盖*/
        lwgOnStart(): void { }
        /**按钮点击事件注册，在开场动画执行之后注册，在onEnable中完成*/
        lwgButton(): void { };
        /**
         * 按下触发的点击事件注册,可以用(e)=>{}简写传递的函数参数
         * @param target 节点
         * @param caller 执行域
         * @param down 按下回调
         * @param effect 效果类型输入'null'则没有效果
        */
        btnOnDown(target: Laya.Sprite, down: Function, effect?: LwgClick.EmEffectType): void {
            LwgClick.btnOnDown(target, this, down, effect);
        }
        /**
         * 按下触发的点击事件注册,可以用(e)=>{}简写传递的函数参数
         * @param target 节点
         * @param caller 执行域
         * @param down 按下回调
         * @param effect 效果类型输入'null'则没有效果
        */
        btnOnDownAD(target: Laya.Sprite, down: Function, effect?: LwgClick.EmEffectType): void {
            LwgClick.btnOnDownAD(target, this, down, effect);
        }
        /**
        * 按下触发的点击事件注册,可以用(e)=>{}简写传递的函数参数
        * @param target 节点
        * @param caller 执行域
        * @param down 按下回调
        * @param effect 效果类型输入'null'则没有效果
        */
        btnOnceDownAD(target: Laya.Sprite, down: Function, effect?: LwgClick.EmEffectType): void {
            LwgClick.btnOnceDownAD(target, this, down, effect);
        }
        /**
          * 抬起触发点击事件注册,可以用(e)=>{}简写传递的函数参数
          * @param target 节点
          * @param move 移动回调
          * @param effect 效果类型输入'null'则没有效果
          */
        btnOnMove(target: Laya.Sprite, move: Function, effect?: LwgClick.EmEffectType): void {
            LwgClick.btnOnMove(target, this, move, effect);
        }
        /**
         * 抬起触发点击事件注册,可以用(e)=>{}简写传递的函数参数
         * @param target 节点
         * @param up 抬起回调
         * @param effect 效果类型输入'null'则没有效果
         */
        btnOnUp(target: Laya.Sprite, up: Function, effect?: LwgClick.EmEffectType): void {
            LwgClick.btnOnUp(target, this, up, effect);
        }

        /**
         * 看广告才触发
         * @param target 
         * @param up 
         * @param effect 
         */
        btnOnUpAD(target: Laya.Sprite, up: Function, effect?: LwgClick.EmEffectType): void {
            LwgClick.btnOnUpAD(target, this, up, effect);
        }

        /**
         * 看广告才触发
         * @param target 
         * @param up 
         * @param effect 
         */
        btnOnceUpAD(target: Laya.Sprite, up: Function, effect?: LwgClick.EmEffectType): void {
            LwgClick.btnOnceUpAD(target, this, up, effect);
        }

        /**
         * 满足条件就看广告，不满足则不看
         * @param target 
         * @param condition 条件
         * @param reachCb 满足条件后看广告
         * @param notReachCb 不满足条件则不看广告
         * @param effect 
         */
        btnOnUpADCondition(target: Laya.Sprite, condition: Function, reachCb: Function, notReachCb: Function, effect?: LwgClick.EmEffectType): void {
            LwgClick.btnOnUpADCondition(target, this, condition, reachCb, notReachCb, effect);
        }
        /**
         * 满足条件就看广告，不满足则不看
         * @param target 
         * @param condition 条件
         * @param reachCb 满足条件后看广告
         * @param notReachCb 不满足条件则不看广告
         * @param effect 
         */
        btnOnceUpADCondition(target: Laya.Sprite, condition: Function, reachCb: Function, notReachCb: Function, effect?: LwgClick.EmEffectType): void {
            LwgClick.btnOnceUpADCondition(target, this, condition, reachCb, notReachCb, effect);
        }

        /**
          * 抬起触发点击事件注册,可以用(e)=>{}简写传递的函数参数
          * @param target 节点
          * @param out 移出回调
          * @param effect 效果类型输入'null'则没有效果
          */
        btnOnOut(target: Laya.Sprite, out: Function, effect?: LwgClick.EmEffectType): void {
            LwgClick.btnOnOut(target, this, out, effect);
        }
        /**
          * 关闭点击事件
          * @param target 节点
          * @param cb 移除，会同时移除四个点击类型的当前回调
          * @param effect 效果类型输入'null'则没有效果
         */
        btnOff(target: Laya.Sprite, cb: Function, effect?: LwgClick.EmEffectType): void {
            LwgClick.off(target);
        }
        /**
          * 通用事件注册,可以用(e)=>{}简写传递的函数参数,可以用btnOff清理
          * @param target 节点
          * @param down 按下回调
          * @param move 移动回调
          * @param up 抬起回调
          * @param out 移出回调
         */
        btnOnFour(target: Laya.Sprite, down?: Function, move?: Function, up?: Function, out?: Function, effect?: LwgClick.EmEffectType): void {
            LwgClick.on(effect, target, this, down, move, up, out);
        }

        /**
        * 按下触发的点击事件注册,可以用(e)=>{}简写传递的函数参数
        * @param target 节点
        * @param caller 执行域
        * @param down 按下回调
        * @param effect 效果类型
       */
        btnOnceDown(target: Laya.Sprite, down: Function, effect?: LwgClick.EmEffectType): void {
            LwgClick.once(effect, target, this, down, null, null, null);
        }
        /**
          * 抬起触发点击事件注册,可以用(e)=>{}简写传递的函数参数
          * @param target 节点
          * @param move 移动回调
          * @param effect 效果类型
         */
        btnOnceMove(target: Laya.Sprite, move: Function, effect?: LwgClick.EmEffectType): void {
            LwgClick.once(effect, target, this, null, move, null, null);
        }
        /**
         * 抬起触发点击事件注册,可以用(e)=>{}简写传递的函数参数
         * @param target 节点
         * @param up 抬起回调
         * @param effect 效果类型
         */
        btnOnceUp(target: Laya.Sprite, up: Function, effect?: LwgClick.EmEffectType): void {
            LwgClick.once(effect, target, this, null, null, up, null);
        }

        /**
         * 抬起触发点击事件注册,可以用(e)=>{}简写传递的函数参数
         * @param target 节点
         * @param up 抬起回调
         * @param effect 效果类型
         */
        btnOnceUpADByCondition(target: Laya.Sprite, condition: boolean, up: Function, effect?: LwgClick.EmEffectType): void {
            LwgClick.once(effect, target, this, null, null, () => {
                if (condition) {
                    LwgPlatform.AD.showVideo(() => {
                        up && up();
                    })
                } else {
                    up && up();
                }
            }, null);
        }

        /**
          * 抬起触发点击事件注册,可以用(e)=>{}简写传递的函数参数
          * @param target 节点
          * @param out 移出回调
          * @param effect 效果类型
         */
        btnOnceOut(target: Laya.Sprite, out: Function, effect?: LwgClick.EmEffectType): void {
            LwgClick.once(effect, target, this, null, null, null, out);
        }
        /**
          * 通用事件注册,可以用(e)=>{}简写传递的函数参数
          * @param target 节点
          * @param down 按下回调
          * @param move 移动回调
          * @param up 抬起回调
          * @param out 移出回调
         */
        btnOnceFour(target: Laya.Sprite, down?: Function, move?: Function, up?: Function, out?: Function, effect?: LwgClick.EmEffectType): void {
            LwgClick.once(effect, target, this, down, move, up, out);
        }

        /**
          * 打开场景
          * @param openName 需要打开的场景名称
          * @param openData 打开场景后初始化的信息
          * @param dialog 界面是否是弹窗，是弹窗则不会关闭任何界面，不是则场景唯一，会直接关闭其他页面
          * @param preLoadCutIn 是否进入预加载页面，进入后需要在PreLoadCutIn界面进行操作，默认为false；
          *  @param showReturn  显示返回按钮
         */
        openScene(openName: string, data?: object, preLoadCutIn?: boolean, showReturn?: boolean): void {
            this.lwgClearOwner();
            if (!preLoadCutIn) {
                LwgScene.openScene(openName, this.owner.name, data, preLoadCutIn, showReturn);
            } else {
                LwgScene.openSceneAndPreLoad(openName, this.owner.name, false, data);
            }
        }
        lwgClearOwner(): void { };

        /**
          * 在当前场景叠加一个场景，可以叠加很多，不可以打开返回按钮，类似弹窗
          * @param openName 需要打开的场景名称
          * @param openData 打开场景后初始化的信息
         */
        openOverlayScene(openName: string, data?: object, preLoadCutIn?: boolean): void {
            if (!preLoadCutIn) {
                LwgScene.openOverlayScene(openName, data);
            } else {
                LwgScene.openSceneAndPreLoad(openName, this.owner.name, true, data);
            }
        }

        /**
         * 打开一个通用弹窗，这个弹窗会将场景view加进去，有通用标题和通用动画、通用场景
         * @param openName 打开场景的名称
         * @param data 信息
         */
        openCommonDialog(openName: string, data?: object, openAniType?: EmDialogCommonOpenAniType): void {
            LwgScene.openCommonDialog(openName, data, openAniType);
        }
        /**每帧执行，不要执行onUpdate，只执行lwgOnUpdate*/
        lwgOnUpdate(): void { };
        /**离开时执行不要执行onDisable，只执行lwgDisable*/
        lwgOnDisable(): void { };
        onStageMouseDown(e: Laya.Event): void { LwgClick.Filter.checkStage() && this.lwgOnStageMouseDown(e) };
        onStageMouseMove(e: Laya.Event): void { LwgClick.Filter.checkStage() && this.lwgOnStageMouseMove(e) };
        onStageMouseUp(e: Laya.Event): void { LwgClick.Filter.checkStage() && this.lwgOnStageMouseUp(e) };
        lwgOnStageMouseDown(e: Laya.Event): void { };
        lwgOnStageMouseMove(e: Laya.Event): void { };
        lwgOnStageMouseUp(e: Laya.Event): void { };
    }

    /**
     * 2D场景通用父类
     */
    export class SceneBase extends ScriptBase {
        constructor() {
            super();
        }
        /**
         * 初始化参数，如果关闭场景有回调，也写在这个对象中
         */
        openData: object;
        /**
         * 是否是叠在场景之上，一般是叠加场景或者dialog，不会关闭任何其他场景
         */
        isOverlay: boolean;
        /**
         * 是否显示返回按钮
         */
        showReturnBtn: boolean;

        /**
         * 当前页面打开的次数
         * 在页面完全被打开时计算
         */
        public get openNum(): number {
            return LwgStorage.number(`${this.owner.name}/openNum`).value;
        }
        public set openNum(val: number) {
            LwgStorage.number(`${this.owner.name}/openNum`).value = val;
        }
        onAwake(): void {
            this.showReturnBtn && LwgCommon.ReturnBtn.show();
            this.setWH();
            this.setBg();
            this.lwgOnAwake();
            this.lwgAdaptive();
        }
        /**
         * 设置宽高
         */
        setWH(): void {
            this.owner['width'] = Laya.stage.width;
            this.owner['height'] = Laya.stage.height;
        }
        /**
         * 设置背景图
         */
        setBg(): void {
            if (this.owner.getChildByName('background')) {
                this.owner.getChildByName('background')['width'] = Laya.stage.width;
                this.owner.getChildByName('background')['height'] = Laya.stage.height;
            }
            if (this.owner['background']) {
                this.owner['background']['width'] = Laya.stage.width;
                this.owner['background']['height'] = Laya.stage.height;
            }
        }
        onEnable() {
            this.lwgEvent();
            this.lwgOnEnable();
        }
        onStart(): void {
            this.lwgOnStart();
        }
        /**
         * 设置资源显示
         */
        setViewShowByOpen(): void {
            // console.log('显示时设置广告显示！', this.owner.name);
            LwgCurrency.Gold.showInSceneCheck(this.owner.name);
            LwgCurrency.Stamina.showInSceneCheck(this.owner.name);
            LwgCurrency.Diamond.showInSceneCheck(this.owner.name);
            LwgCommon.BtnGameManager.showInSceneCheck(this.owner.name);
            LwgPlatform.AD.checkShowWhenOpenScene(this.owner.name);
            LwgPlatform.System.checkShowWhenOpenScene(this.owner.name);
        }

        /**
         * 开场动画,返回的数字为时间倒计时，倒计时结束后开启点击事件,也可以用来屏蔽通用动画，只需返回一个数字即可,如果场景内节点是以prefab添加进去的，那么必须写在lwgOpenAni之前
         */
        lwgOpenAni(): number { return null };
        /**
         * 开场动画之后执行,也是在关闭上个场景之后，场景切换完成后执行，一般场景完全打开后执行一些例如打开其他场景等
         */
        lwgOpenAniAfter(): void { };
        /**按照当前Y轴坐标的高度的比例适配，适配整个舞台*/
        adaptiveHeight(arr: Array<Laya.Sprite>): void {
            LwgAdaptive.stageHeight(arr);
        };
        /**按照当前X轴的高度的比例适配*/
        adaptiveWidth(arr: Array<Laya.Sprite>): void {
            LwgAdaptive.stageWidth(arr);
        };
        /**按照当前X轴的高度的比例适配*/
        adaptiveCenter(arr: Array<Laya.Sprite>): void {
            LwgAdaptive.center(arr, Laya.stage);
        };
        onUpdate(): void { this.lwgOnUpdate() };
        /**
          * 关闭场景
          * @param sceneName 默认为当前场景
          * */
        closeScene(sceneName?: string): void {
            let openScene: Laya.View;
            if (sceneName) {
                openScene = LwgScene.sceneControl[sceneName];
            } else {
                openScene = this.owner as Laya.View;
            }
            LwgScene.closeOverlayScene(openScene);
        }
        /**离场动画,也可以用来屏蔽通用动画，只需返回一个数字即可*/
        lwgCloseAni(): number { return null };

        /**清除场景的事件和timer */
        lwgClearOwner(): void {
            clearScene(this);
            clearScene(this.owner);
        }
        setViewShowByClose(): void {
            //加载页不会执行view的显示操作
            if (this.owner.name !== NameBase.PreLoadCutIn) {
                // 插屏广告在任何场景关闭后都会检测
                LwgPlatform.AD.checkShowAfterCloseScene(this.owner.name);
                //只需要在弹窗关闭时判断，因为场景不需要判断
                if (this.isOverlay) {
                    // LwgPlatform.AD.showByCloseOverlayScene();
                    LwgCurrency.Gold.hideInSceneCheck();
                    LwgCurrency.Diamond.hideInSceneCheck();
                    LwgCurrency.Stamina.hideInSceneCheck();
                    LwgCommon.BtnGameManager.hideInSceneCheck();
                }
            }
        }
        onDisable(): void {
            this.setViewShowByClose();
            this.lwgClearOwner();
            this.lwgOnDisable();
        }
    }

    /**
     * 通用弹窗动画类型
     */
    export enum EmDialogCommonOpenAniType {
        none = 'none',
        open_popup = 'open_popup',
        open_popupRotate = 'open_popupRotate',
    }
    /**
     * 通用弹窗动画关闭类型
     */
    export enum EmDialogCommonCloseAniType {
        none = 'none',
        close_shrink = 'close_shrink',
    }
    /**
     * 通用弹窗
     */
    export class CommonDialogBase extends SceneBase {
        /**弹窗 */
        public get Doalog(): ui.Views.Base.DialogCommonUI {
            return this.owner as ui.Views.Base.DialogCommonUI;
        }
        public openAnitype: string = EmDialogCommonOpenAniType.open_popup;
        public closeAniType: string = EmDialogCommonCloseAniType.close_shrink;
        onAwake(): void {
            this.setWH();
            this.setBg();
            this.lwgOnAwake();
            this.lwgAdaptive();
        }
    }

    /**2D角色、物件通用父类*/
    export class ObjectBase extends ScriptBase {
        constructor() {
            super();
        }
        /**原来的销毁方法并不会清理事件，removeself()才会，这个销毁方法会清理事件*/
        clearAndDestroy(): void {
            this.lwgClearOwner();
            this._owner.destroy();
        }
        /**挂载当前脚本的节点*/
        private get _owner(): LwgNode.Sprite {
            return this.owner as LwgNode.Sprite;
        }
        /**获取当前坐标*/
        get presentPoint(): Laya.Point {
            return new Laya.Point(this._owner.x, this._owner.y);
        }
        /**所属场景*/
        get ownerScene(): Laya.View {
            return this.owner.scene as Laya.View;
        }
        onAwake(): void {
            LwgNode.addProperty(this._owner);
            // 组件变为的self属性
            this._owner[this._owner.name] = this;
            this.ownerSceneName = this._owner.name;
            this.lwgOnAwake();
            this.lwgAdaptive();
        }
        onEnable(): void {
            this.lwgButton();
            this.lwgEvent();
            this.lwgOnEnable();
        }
        onStart(): void {
            this.lwgOnStart();
        }
        onUpdate(): void {
            this.lwgOnUpdate();
        }
        lwgClearOwner(): void {
            clearScene(this);
            clearScene(this.owner);
        }
        onDisable(): void {
            this.lwgClearOwner();
            this.lwgOnDisable();
        }
    }

    /**
     * view的位置信息
     */
    export type ViewObjBaseStyle = {
        x?: number,
        y?: number,
        top?: number,
        bottom?: number,
        left?: number,
        right?: number,
        centerX?: number,
        centerY?: number,
    }
    /**控制游戏中一些通用的节点，例如金币，体力，设置等 */
    export class ViewObjBase {
        /**当前 */
        view: Laya.View;
        /**在ui.Prefab中的名称 */
        viewNameByUI = '';
        /**样式 */
        style: ViewObjBaseStyle = {
            x: 4,
            y: 46,
        };
        /**基本动画时间 */
        aniTime = 100;
        /**出现场场景 */
        appearScene: string[] = [];
        /**
         * 通用显示节点 
         * @param style 样式
         * @param delay 写延时则说明需要动画，则播放默认动画
         * @param parent 父节点，默认为舞台
         */
        show(style: ViewObjBaseStyle = this.style, delay: number = this.aniTime, parent: Laya.Sprite = baseViewObjParent): void {
            this.createView(style, parent);
            this.showAni(delay);
        };

        /**
         * 显示轨迹,每次打开一个场景数组长度加一，关闭的时候，数组长度减一
         */
        showRrackArray: {
            sceneName: string,
            show: boolean,
        }[] = [];
        /**
         * 检测再当前场景中的显示
         */
        showInSceneCheck(sceneName: string): void {
            let appear = false;
            for (let index = 0; index < this.appearScene.length; index++) {
                const element = this.appearScene[index];
                if (element == sceneName) {
                    appear = true;
                    break;
                }
            }
            if (appear) {
                this.show();
                this.showRrackArray.push({
                    sceneName: sceneName,
                    show: true,
                });
            } else {
                this.hide();
                this.showRrackArray.push({
                    sceneName: sceneName,
                    show: false,
                });
            }
        }

        /**
         * 关闭页面的时候判断上个元素是否是显示的，如果是则打开，不是则直接关闭
         */
        hideInSceneCheck(): void {
            this.showRrackArray.pop();
            if (this.showRrackArray.length > 0) {
                if (this.showRrackArray[this.showRrackArray.length - 1].show) {
                    this.show();
                } else {
                    this.hide();
                }
            } else {
                this.hide();
            }
        }

        /**
         * 通用创建view
         * @param x 
         * @param y 
         * @param parent 
         */
        protected createView(style: ViewObjBaseStyle, parent: Laya.Sprite = Laya.stage): void {
            if (!this.view) {
                this.view = new ui.Views.Base[this.viewNameByUI];
                this.view.visible = false;
                this.view.zOrder = 100;
                this.createCb();
            }
            if (parent) {
                parent.addChild(this.view);
            } else {
                commonViewParent.addChild(this.view);
            }
            if (style.x) {
                this.view.x = style.x;
            }
            if (style.y) {
                this.view.y = style.y;
            }
            if (style.left) {
                this.view.left = style.left;
            }
            if (style.right) {
                this.view.right = style.right;
            }
            if (style.centerX) {
                this.view.centerX = style.centerX;
            }
            if (style.centerY) {
                this.view.centerY = style.centerY;
            }
        }

        /**创建成功后回调,用于子类写不同view创建后的不同操作,只会在创建的时候执行一次 */
        protected createCb(): void { };

        /**通用出现动画 */
        protected showAni(delay: number): void {
            //已经出现了则不会在执行动画
            if (this.view.visible) {
                this.showCb();
                return;
            }
            if (delay) {
                this.view.visible = true;
                if (delay) {
                    LwgAni2D.scale_Alpha(this.view, 0, 1, 1, 1, 1, 1, delay, 0, () => {
                        this.showCb();
                    });
                } else {
                    this.showCb();
                }
            }
        }

        /**出现后回调 ,用于子类写不同view出现后的不同操作*/
        protected showCb(): void { };

        /**
         * 通用移动view
         * @param {number} x X坐标
         * @param {number} y Y坐标
         * @param {number} [time=200] 用时[time=200]
         * @param {number} [delay=0] 延时[delay=0]
         * @param {Function} [cb=null] 完成回调 [func=null]
         */
        move(x: number, y?: number, time: number = 200, delay: number = 0, cb: Function = null): void {
            LwgAni2D.move(this.view, x, y ? y : this.view.y, time, () => {
                cb && cb();
            }, delay);
        }

        /**
         * 通用隐藏view
         * @param ani 是否需要动画
         */
        hide(ani?: boolean, cb: Function = null): void {
            if (!this.view) {
                return;
            }
            if (ani) {
                LwgAni2D.scale_Alpha(this.view, 1, 1, 1, 1, 1, 0, this.aniTime, 0, () => {
                    this.view.visible = false;
                    this.hideCb();
                    cb && cb();
                });
            } else {
                this.view.visible = false;
                this.hideCb();
                cb && cb();
            }
        }
        /**消失后回调，用于子类写不同view消失后的不同操作*/
        protected hideCb(): void { };
    }

    /**
     * 再runtime中继承的Image组件脚本
     */
    export class RuntimeImgBase extends Laya.Image {
        onAwake(): void {
            this.lwgOnAwake();
        }
        lwgOnAwake(): void { }
        onDisable(): void {
            this.lwgClear();
            this.lwgOnDisable();
        }
        lwgOnDisable(): void { }
        lwgClear(): void {
            clearScene(this);
        }
    }
    /**
     * 再runtime中继承的View组件脚本
     */
    export class RuntimeImgViwe extends Laya.View {
        onAwake(): void {
            this.lwgOnAwake();
        }
        lwgOnAwake(): void { }
        onDisable(): void {
            this.lwgClear();
            this.lwgOnDisable();
        }
        lwgOnDisable(): void { }
        lwgClear(): void {
            Laya.Tween.clearAll(this);
            Laya.timer.clearAll(this);
            LwgEvent.offAllCaller(this);
        }
    }
}


/**
 * 过场动画
 */
export module LwgSceneAni {
    /**
     * 打开场景动画类型，分为类型和类型中的方法classfiy_aniFunc
     */
    export enum EmOpenSceneType {
        fadeOut_openLaterClose = 'fadeOut_openLaterClose',
        fadeOut_closeLaterOpen = 'fadeOut_closeLaterOpen',
    }

    /**
     * 叠加一个场景的动画类型
     */
    export enum EmOpenOverlayType {
        fadeOut_commonFadeOut = 'fadeOut_commonFadeOut',
    }

    /**
     * 关闭叠加一个场景动画类型
     */
    export enum EmCloseOverlayType {
        fadeOut_commonFadeOut = 'fadeOut_commonFadeOut',
    }

    /**
     * 打开场景时
     * @param type 类型
     * @param openScene 需要打开的场景
     * @param closeScene 需要关闭的场景
     * @param cb 回调
     */
    export function playSceneOpen(type: EmOpenSceneType = EmOpenSceneType.fadeOut_openLaterClose, openScene: Laya.View, closeScene?: Laya.View, cb?: Function): void {
        const dataArr = type.split('_');
        SceneOpen[dataArr[0]][dataArr[1]](openScene, closeScene, cb);
    }

    /**
     * 叠加一个场景时
     * @param type 类型
     * @param openScene 需要打开的dialog
     * @param cb 回调
     */
    export function playOverlaySceneOpen(type: EmOpenOverlayType = EmOpenOverlayType.fadeOut_commonFadeOut, openScene: Laya.View, cb?: Function): void {
        const dataArr = type.split('_');
        OverlaySceneOpen[dataArr[0]][dataArr[1]](openScene, cb);
    }

    /**
     * 关闭弹窗时
     * @param type 类型
     * @param closeScene 需要关闭的dialog
     * @param cb 回调
     */
    export function playOverlaySceneClose(type: EmCloseOverlayType = EmCloseOverlayType.fadeOut_commonFadeOut, closeScene: Laya.View, cb?: Function): void {
        const dataArr = type.split('_');
        OverlaySceneClose[dataArr[0]][dataArr[1]](closeScene, cb);
    }

    /**
     * 场景打开
     */
    module SceneOpen {
        /**
         * 渐隐类
         */
        export class fadeOut {
            /**
             * 被打开的场景完成之后，再关闭场景
             * @param openScene 
             * @param closeScene 
             * @param cb 
             * @returns 
             */
            static openLaterClose(openScene: Laya.View, closeScene?: Laya.View, cb?: Function): number {
                const time = 100;
                openScene['background'] && LwgAni2D.fadeOut(openScene['background'], 0, 1, time / 2);
                LwgAni2D.fadeOut(openScene, 0, 1, time, 0, () => {
                    closeScene && closeScene.close();
                    cb && cb();
                });
                return time;
            }

            /**
             * 被关闭的场景渐隐消失后，显现出被打开的场景
             * @param openScene 
             * @param closeScene 
             * @param cb 
             * @returns 
             */
            static closeLaterOpen(openScene: Laya.View, closeScene?: Laya.View, cb?: Function): number {
                const time = 200;
                const delay = 100;
                if (openScene['Background']) {
                    LwgAni2D.fadeOut(closeScene['Background'], 1, 0, time / 2);
                }
                LwgAni2D.fadeOut(openScene, 1, 0, time, delay, () => {
                    closeScene && closeScene.close();
                    cb && cb();
                })
                return time + delay;
            }
        }
    }
    /**
     * 叠加场景打开
     */
    module OverlaySceneOpen {
        /**
         * 渐隐类
         */
        export class fadeOut {
            static commonFadeOut(openScene: Laya.View, cb: Function): number {
                return SceneOpen.fadeOut.openLaterClose(openScene, null, cb);
            }
        }
        /**
         * 弹出类
         */
        export class Popup {
            static QBounce(openScene: Laya.View, cb: Function): void {

            }
        }
    }

    /**
     * 叠加场景关闭
     */
    module OverlaySceneClose {
        /**
         * 渐隐类
         */
        export class fadeOut {
            static commonFadeOut(closeScene: Laya.View, cb: Function): number {
                const time = 300;
                LwgAni2D.fadeOut(closeScene, 1, 0, time, 0, () => {
                    closeScene && closeScene.close()
                    cb && cb();
                })
                return time;
            }
        }
        /**
         * 缩进类
         */
        export class PinchIn {
            static commonPinchIn(openScene: Laya.View, cb: Function): void {

            }
        }
    }
}

/**节点的拓展*/
export module LwgNode {
    export type TpBase = {
        /**获取世界坐标*/
        gPoint: Laya.Point;
        /**初始位置*/
        fPoint: Laya.Point;
        /**初始全局位置*/
        fGPoint: Laya.Point;
        /**初始角度*/
        fRotation: number;
        /**
         * 和另一个节点之间的距离
         * @param OtherNode 节点
         */
        getDisByNode: (OtherNode: Laya.Sprite) => number;
        /**
         * 和另一个坐标之间的距离,用世界坐标进行计算
         * @param point 节点
         */
        getGlobleDisByPoint: (point: Laya.Point) => number;
        /**
        * 和另一个坐标之间的距离
        * @param point 节点
        */
        getLocalDisByPoint: (point: Laya.Point) => number;
        /**
          * 和另一个坐标之间的距离,用世界坐标进行计算
          * @param point 节点
         */
        getChildGPoint: (Child: Laya.Sprite) => Laya.Point;
    }
    export class Sprite extends Laya.Sprite {
        /**附加属性集合*/
        lwg: TpBase;
    }

    /**img相关*/
    export type ImageProperty = {
    } & TpBase;
    export class Image extends Laya.Image {
        /**附加属性集合*/
        lwg: ImageProperty;
    }

    /**box相关*/
    export type BoxProperty = {
    } & TpBase;
    export class _Box extends Laya.Box {
        /**附加属性集合*/
        lwg: BoxProperty;
    }
    /**
     * 附加一些属性和方法
     * @export
     * @param {Laya.Sprite} node 节点
     * @param {string} [nodeType] 节点类型不同，有些属性也不尽相同,如果为null则使用基本属性
     * @return {*}  {void}
     */
    export function addProperty(node: Laya.Sprite, nodeType?: string): void {
        if (!node) return;
        let lwgPro: TpBase;
        switch (nodeType) {
            case 'Img':
                lwgPro as ImageProperty;
                break;
            case 'box':
                lwgPro as BoxProperty;
                break;

            default:
                lwgPro as TpBase;
                break;
        }
        let getGPoint = (): Laya.Point => {
            if (node.parent) {
                return (node.parent as Laya.Sprite).localToGlobal(new Laya.Point(node.x, node.y))
            } else {
                return null;
            }
        }
        /**初始位置*/
        const fPoint = new Laya.Point(node.x, node.y);
        // 初始世界坐标
        const fGPoint = getGPoint();
        /**初始角度*/
        const fRotation = node.rotation;
        lwgPro = {
            get gPoint(): Laya.Point {
                return getGPoint();
            },
            fPoint: fPoint,
            fGPoint: fGPoint,
            fRotation: fRotation,
            getDisByNode(OtherNode: Laya.Sprite): number {
                const nodePos = getGPoint();
                if (nodePos) {
                    if (OtherNode.parent) {
                        let otherNodePos = (OtherNode.parent as Laya.Sprite).localToGlobal(new Laya.Point(node.x, node.y));
                        return nodePos.distance(otherNodePos.x, otherNodePos.y);
                    }
                }
                return null;
            },
            getGlobleDisByPoint(point: Laya.Point): number {
                const nodeGPos = getGPoint();
                return nodeGPos.distance(point.x, point.y);
            },
            getLocalDisByPoint(point: Laya.Point): number {
                const nodePos = new Laya.Point(node.x, node.y);
                return nodePos.distance(point.x, point.y);
            },
            getChildGPoint(Child: Laya.Sprite): Laya.Point {
                const point = new Laya.Point(Child.x, Child.y);
                const gPoint = node.localToGlobal(point);
                return gPoint;
            }
        }
        node['lwg'] = lwgPro;
    }
}

/**提示模块*/
export module LwgDialogue {
    /**
     * 飘字的动画类型
     */
    export enum EmFloatWordAniType {

    }
    /**
     * 飘字的样式
     */
    export type TpFloatWordStyle = {
        content: string,
        color?: string,
        size?: number,
        /**描边大小 */
        stroke?: number,
        /**描边颜色 */
        strokeColor?: string,
    }
    /**
     * 飘字
     */
    export class FloatWord {
        /**
         * 通用字体
         * @param x 
         * @param y 
         * @param contentStyle 
         * @param scale 
         * @param showIcon 
         * @param aniType 
         */
        static createFontSystem(x: number, y: number, contentStyle: TpFloatWordStyle, scale?: number, showIcon = true, aniType?: EmFloatWordAniType): ui.Views.Base.FloatFontSystemObjUI {
            const floatWord = new ui.Views.Base.FloatFontSystemObjUI();
            const scale0 = scale ? scale : 1;
            floatWord.scale(scale0, scale0);
            Laya.stage.addChild(floatWord);
            floatWord.pos(x, y);
            floatWord.lbContent.text = contentStyle.content;
            if (contentStyle.color) {
                floatWord.lbContent.color = contentStyle.color;
            }
            if (contentStyle.size) {
                floatWord.lbContent.size(contentStyle.size, contentStyle.size);
            }
            if (!showIcon) {
                floatWord.imgIcon.visible = false;
            }
            if (contentStyle.stroke) {
                floatWord.lbContent.stroke = contentStyle.stroke;
            }

            if (contentStyle.strokeColor) {
                floatWord.lbContent.strokeColor = contentStyle.strokeColor;
            }
            floatWord.ani1.on(Laya.Event.LABEL, this, (e: string) => {
                if (e == 'end') {
                    floatWord.destroy();
                    // console.log('销毁飘字!');
                }
            })
            return floatWord;
        }

        /**
         * 切换型艺术字
         * @param x 
         * @param y 
         * @param index 节点下第几个
         * @param scale 
         * @param showIcon 
         * @param aniType 
         */
        static createFontArt(x: number, y: number, index: number, scale?: number, showIcon = true, aniType?: EmFloatWordAniType): void {

        }

        /**
         * 数字形式艺术字
         * @param x 
         * @param y 
         * @param index 节点下第几个
         * @param scale 
         * @param showIcon 
         * @param aniType 
         */
        static createFontArtNum(x: number, y: number, content: string, scale?: number, showIcon = true, aniType?: EmFloatWordAniType): void {

        }
    }

    /**
     * 类型
     */
    export enum EmDialogHint {
        Single = 'Single',
        Double = 'Double',
        Check = 'Check',
    }
    /**
     * 内容
     */
    export type TpDialogHint = {
        type: EmDialogHint,
        content: string,
        onBtnConfirm?: Function,
        onBtnCancel?: Function,
        showBtnClose?: boolean,
    }

    /**
     * 一个提示框
     */
    export function openDialogHint(data: TpDialogHint): void {
        //在所有场景的上方，不受场景打开关闭的逻辑控制
        Laya.Scene.load(`${LwgPath.ViewsBase}${LwgScene.NameBase.DialogHint}.json`, Laya.Handler.create(this, (view: Laya.View) => {
            view.name = LwgScene.NameBase.DialogHint;
            LwgScene.addSceneInStage(view, data, true, false, LwgScene.EmSceneParent.commonViewParent);
            view.zOrder = LwgScene.sceneParent.zOrder + 1;
            LwgScene.goOverlaySceneOpenAni(view);
        }))
    }

    enum Skin {
        blackBord = 'Lwg/UI/img_rectangle_mask_06.png',
    }
    /**
     * 创建一个提示框
     * 动态创建，如果第一次绘制这张合图，可以不合图,否则会卡，因为合图在整个框架图集中
     * @param content 描述
     */
    export function showTips(content: string): void {
        const hide_M = Laya.Pool.getItemByClass('CommonTips', Laya.Sprite);
        hide_M.name = 'CommonTips';//标识符和名称一样

        Laya.stage.addChild(hide_M);
        hide_M.width = Laya.stage.width;
        hide_M.height = 100;
        hide_M.pivotY = hide_M.height / 2;
        hide_M.pivotX = Laya.stage.width / 2;
        hide_M.x = Laya.stage.width / 2;
        hide_M.y = Laya.stage.height / 2;
        hide_M.zOrder = 100;

        // 底图
        const Pic = new Laya.Image();
        hide_M.addChild(Pic);
        Pic.skin = Skin.blackBord;
        Pic.width = Laya.stage.width;
        Pic.pivotX = Laya.stage.width / 2;
        Pic.height = 100;
        Pic.pivotY = Pic.height / 2;
        Pic.y = hide_M.height / 2;
        Pic.x = Laya.stage.width / 2;
        Pic.alpha = 0.6;

        // 提示语
        const Dec = new Laya.Label();
        hide_M.addChild(Dec);
        Dec.width = Laya.stage.width
        Dec.text = content;
        Dec.pivotX = Laya.stage.width / 2;
        Dec.x = Laya.stage.width / 2;
        Dec.height = 100;
        Dec.pivotY = 50;
        Dec.y = hide_M.height / 2;
        Dec.bold = true;
        Dec.fontSize = 35;
        Dec.color = '#ffffff';
        Dec.align = 'center';
        Dec.valign = 'middle';

        // 动画
        Dec.alpha = 0;
        LwgAni2D.scale_Alpha(hide_M, 0, 1, 0, 1, 1, 1, 200, 0, () => {
            LwgAni2D.fadeOut(Dec, 0, 1, 150, 0, () => {
                LwgAni2D.fadeOut(Dec, 1, 0, 200, 800, () => {
                    LwgAni2D.scale_Alpha(hide_M, 1, 1, 1, 1, 0, 0, 200, 0, () => {
                        hide_M.removeSelf();
                    });
                });
            });
        });
    }
}

/**
 * 一些通用按钮,这些按钮都是view需要预加载才能在第一次修改坐标等值，不预加载，第一次修改值将不会成功
 */
export module LwgCommon {
    export let ReturnBtn: _BtnReturn;
    export let BtnGameManager: _GameManagerBtn;

    export class Init {
        constructor(
            set: {
                /** 
                 * 关闭按钮
                 */
                ReturnBtn: {
                    appearScene: string[];
                },
                /**
                 * gm按钮
                 */
                BtnGameManager: {
                    appearScene: string[];
                }
            }
        ) {
            ReturnBtn = new _BtnReturn;
            BtnGameManager = new _GameManagerBtn;
            ReturnBtn.appearScene = set.ReturnBtn.appearScene;
            if (LwgPlatform.type === LwgPlatform.EmType.Exploit || LwgPlatform.type === LwgPlatform.EmType.ExploitNoAD) {
                BtnGameManager.appearScene = set.BtnGameManager.appearScene;
            } else {
                BtnGameManager.appearScene = [];
            }
        }
        public get LwgCommon(): string {
            return 'LwgCommon';
        }
    }

    /**
     * 返回上个场景按钮
     */
    export class _BtnReturn extends LwgScene.ViewObjBase {
        private static _ins: _BtnReturn;
        static get ins() {
            if (!this._ins) {
                this._ins = new _BtnReturn();
            }
            return this._ins;
        }
        view: ui.Views.Base.ReturnBtnObjUI;
        viewNameByUI = 'ReturnBtnObjUI';
        createCb(): void {
            LwgClick.on(LwgClick.effectType, this.view, this, null, null, () => {
                LwgScene.returnToPreviousScene();
            })
        }
    }

    /**
     * 游戏管理页面按钮
     */
    export class _GameManagerBtn extends LwgScene.ViewObjBase {
        private static _ins: _GameManagerBtn;
        static get ins() {
            if (!this._ins) {
                this._ins = new _GameManagerBtn();
            }
            return this._ins;
        }
        viewNameByUI = 'GameManagerBtnObjUI';
        view: ui.Views.Base.GameManagerBtnObjUI;
        style: LwgScene.ViewObjBaseStyle = {
            right: 20,
            bottom: 20,
        }
        createCb(): void {
            LwgClick.on(LwgClick.effectType, this.view, this, null, null, () => {
                if (Laya.stage.getChildByName(LwgScene.NameBase.GameManager)) {
                    return;
                };
                //在所有场景的上方，不受场景打开关闭的逻辑控制
                Laya.Scene.load(`${LwgPath.ViewsBase}${LwgScene.NameBase.GameManager}.json`, Laya.Handler.create(this, (view: Laya.View) => {
                    view.name = LwgScene.NameBase.GameManager;
                    LwgScene.addSceneInStage(view, null, true, false, LwgScene.EmSceneParent.commonViewParent);
                    LwgScene.goOverlaySceneOpenAni(view);
                }))
            })
        }
    }
}

/**
 * 货币
 */
export module LwgCurrency {
    export let Gold: _Gold;
    export let Stamina: _Stamina;
    export let Diamond: _Diamond;
    /**
     * 初始化
     */
    export class Init {
        constructor(/**
            * 资源相关
            */
            set: {
                /**金币 */
                Gold: {
                    /**出现场景 */
                    appearScene: string[],
                    /**初始数量 */
                    initialNum: number,
                    /**点击增加的事件 */
                    btnAddClick?: Function,
                },
                Diamond: {
                    /**出现场景 */
                    appearScene: string[],
                    /**初始数量 */
                    initialNum: number,
                    /**点击增加的事件 */
                    btnAddClick?: Function,
                },
                /**体力 */
                Stamina: {
                    /**出现场景 */
                    appearScene: string[],
                    /**初始数量 */
                    initialNum: number,
                    /**最大体力上线 */
                    maxNum: number,
                    /**增加体力需要多少毫秒 */
                    addOnceByTime: number,
                    /**每次增加多少体力 */
                    addNumByTime: number,
                    /**点击增加的事件 */
                    btnAddClick?: Function,
                }
            },) {
            Gold = new _Gold(set.Gold);
            Diamond = new _Diamond(set.Diamond);
            Stamina = new _Stamina(set.Stamina);
        }
        public get name(): string {
            return 'LwgCurrency';
        }
    }

    /**资源地址*/
    enum SkinUrl {
        "Lwg/UI/img_corner_12.png",
    }

    /**
     * 资源基本类，使用gold作为参考，可以继承
     */
    class BaseCurrency extends LwgScene.ViewObjBase {
        get num(): number {
            return this['_num'];
        }
        set num(val: number) {
            this['_num'] = val;
        }
        /**
         * 在ui.Prefab中的名称
         */
        viewNameByUI = 'GoldObjUI';
        /**
         * 当前view
         */
        view: ui.Views.Base.GoldObjUI;
        /**
         * 初始数量
         */
        initialNum: number = 0;

        protected createCb(): void {
            this.view.num.text = this.num.toString();
            LwgClick.on(LwgClick.EmEffectType.NoEffect, this.view, this, (e: Laya.Event) => {
                e.stopPropagation();
            }, null, (e: Laya.Event) => {
                e.stopPropagation();
                LwgClick.Filter.checkBtn(this.view) && this.btnAddClick && this.btnAddClick();
            })
            LwgEvent.notify(LwgEvent.BaseEvent.redDotHint);
        }

        /**
         * 点击增加金币时调用,图片必须有大小
         */
        btnAddClick: Function;

        /**
         * 刷新数量在节点上的显示
         */
        updateNumOnNode(): void {
            const num = this.view.num;
            if (num['sheet']) {
                // num['value'] = LwgTools.Format.formatNumber(this.num);
                num['value'] = this.num.toString();
            } else {
                // num['text'] = LwgTools.Format.formatNumber(this.num);
                num['text'] = this.num.toString();
            }
        }

        /**增加数量以并且在节点上也表现出来*/
        addNumDisPlayNode(number: number) {
            this.num += number;
            this.updateNumOnNode();
        }

        /**减少数量以并且在节点上也表现出来*/
        subNumDisPlayNode(number: number) {
            this.num -= number;
            this.updateNumOnNode();
        }

        /**增加节点上的表现动画，并不会实质性增加数量*/
        addDisPlayNode(number: number) {
            const lbNum = this.view.getChildByName('Num');
            if (lbNum['sheet']) {
                lbNum['value'] = (Number(lbNum['value']) + number).toString();
            } else {
                lbNum['text'] = (Number(lbNum['text']) + number).toString();
            }
        }

        /**增加数量，但不在节点上表现出来*/
        addNumNoDisPlayNode(number: number) {
            this.num += Number(number);
        }

        /**单个创建*/
        createOne(width: number, height: number, url: string): Laya.Image {
            const Gold = Laya.Pool.getItemByClass('addGold', Laya.Image) as Laya.Image;
            Gold.name = 'addGold';//标识符和名称一样
            Gold.alpha = 1;
            Gold.zOrder = 60;
            Gold.width = width;
            Gold.height = height;
            Gold.pivotX = width / 2;
            Gold.pivotY = height / 2;
            if (!url) {
                Gold.skin = SkinUrl[0];
            } else {
                Gold.skin = url;
            }
            if (this.view) {
                Gold.zOrder = this.view.zOrder + 10;
            }
            return Gold;
        }

        /**
         *  金币表现动画，陆续生成单个金币
         * @param parent 父节点
         * @param number 产生金币的数量
         * @param width 金币的宽度
         * @param height 金币的宽度
         * @param url 金币皮肤地址
         * @param firstPoint 初始位置
         * @param targetPoint 目标位置
         * @param cbStep 每一个金币移动完成后执行的回调
         * @param cbguideCompelet 金币全部创建完成后的回调
        */
        playGetSingleAni(parent: Laya.Sprite, number: number, width: number, height: number, url: string, firstPoint: Laya.Point, targetPoint: Laya.Point, cbStep?: Function, cbguideCompelet?: Function): void {
            for (let index = 0; index < number; index++) {
                Laya.timer.once(index * 30, this, () => {
                    const Gold = this.createOne(width, height, url);
                    parent.addChild(Gold);
                    LwgAni2D.move_Scale(Gold, 1, firstPoint.x, firstPoint.y, targetPoint.x, targetPoint.y, 1, 500, 0, Laya.Ease.cubicInOut, () => {
                        LwgSound.playSound(LwgSound.getMoneyUrl);
                        if (index === number - 1) {
                            Laya.timer.once(300, this, () => {
                                if (cbguideCompelet) {
                                    cbguideCompelet();
                                }
                            })
                        } else {
                            if (cbStep) {
                                cbStep();
                            }
                        }
                        Gold.removeSelf();
                    })
                })
            }
        }

        /**
         * 金币表现动画，生成一堆金币，然后分别移动到目标位置
         * @param parent 父节点
         * @param number 产生金币的数量
         * @param size 金币的宽高
         * @param url 金币皮肤地址
         * @param firstPoint 初始位置
         * @param targetPoint 目标位置
         * @param cbStep 每一个金币移动完成后执行的回调
         * @param cbguideCompelet 金币全部创建完成后的回调
         */
        playGetHeapAni(parent?: Laya.Sprite, number?: number, size?: [number, number], url?: string, firstPoint?: Laya.Point, targetPoint?: Laya.Point, cbStep?: Function, cbguideCompelet?: Function, sound: boolean = true): void {
            for (let index = 0; index < number; index++) {
                const Gold = this.createOne(size[0] ? size[0] : 60, size[1] ? size[1] : 60, url ? url : SkinUrl[0]);
                parent = parent ? parent : Laya.stage;
                parent.addChild(Gold);
                firstPoint = firstPoint ? firstPoint : new Laya.Point(Laya.stage.width / 2, Laya.stage.height / 2);
                targetPoint = targetPoint ? targetPoint : new Laya.Point(this.view.x + this.view.icon.x, this.view.y + this.view.icon.y);
                let x = Math.floor(Math.random() * 2) == 1 ? firstPoint.x + Math.random() * 100 : firstPoint.x - Math.random() * 100;
                let y = Math.floor(Math.random() * 2) == 1 ? firstPoint.y + Math.random() * 100 : firstPoint.y - Math.random() * 100;
                // Gold.rotation = Math.random() * 360;
                LwgAni2D.move_Scale(Gold, 0.5, firstPoint.x, firstPoint.y, x, y, 1, 300, Math.random() * 100 + 100, Laya.Ease.cubicOut, () => {
                    LwgAni2D.move_Scale(Gold, 1, Gold.x, Gold.y, targetPoint.x, targetPoint.y, 1, 400, Math.random() * 200 + 100, Laya.Ease.cubicOut, () => {
                        sound && LwgSound.playSound(LwgSound.getMoneyUrl);
                        if (index === number - 1) {
                            Laya.timer.once(200, this, () => {
                                if (cbguideCompelet) {
                                    cbguideCompelet();
                                }
                            })
                        } else {
                            if (cbStep) {
                                cbStep();
                            }
                        }
                        Gold.destroy(true);
                    })
                });
            }
        }
    }

    /**
     * 金币
     */
    class _Gold extends BaseCurrency {
        constructor(data: {
            appearScene: string[],
            initialNum: number,
            btnAddClick?: Function,
        }) {
            super();
            this.appearScene = data.appearScene;
            this.initialNum = data.initialNum ? data.initialNum : 0;
            if (data.btnAddClick) {
                this.btnAddClick = data.btnAddClick;
            }
        }
        view: ui.Views.Base.GoldObjUI;
        viewNameByUI = 'GoldObjUI';

        /**数量*/
        get num(): number {
            return Laya.LocalStorage.getItem('Gold/num') ? Number(Laya.LocalStorage.getItem('Gold/num')) : this.initialNum;
        };
        set num(val: number) {
            val = Math.round(val);
            Laya.LocalStorage.setItem('Gold/numm', val.toString());
            LwgEvent.notify(LwgEvent.BaseEvent.redDotHint);
        }
    }

    /**
     * 钻石
     */
    class _Diamond extends BaseCurrency {
        constructor(data: {
            appearScene: string[],
            initialNum: number,
            btnAddClick?: Function,
        }) {
            super();
            this.appearScene = data.appearScene;
            this.initialNum = data.initialNum ? data.initialNum : 0;
            if (data.btnAddClick) {
                this.btnAddClick = data.btnAddClick;
            }
        }
        view: ui.Views.Base.DiamondObjUI;
        viewNameByUI = 'DiamondObjUI';
        style = {
            x: 4,
            y: 46,
        }
        get num(): number {
            return Laya.LocalStorage.getItem('Diamond/num') ? Number(Laya.LocalStorage.getItem('Diamond/num')) : this.initialNum;
        }
        set num(val: number) {
            val = Math.round(val);
            Laya.LocalStorage.setItem('Diamond/num', val.toString());
            LwgEvent.notify(LwgEvent.BaseEvent.redDotHint);
        }
    }

    /**
     * 体力
     */
    class _Stamina extends BaseCurrency {
        constructor(data: {
            appearScene: string[],
            initialNum: number,
            maxNum: number,
            addOnceByTime: number,
            addNumByTime: number,
            btnAddClick?: Function,
        }) {
            super();
            this.appearScene = data.appearScene;
            this.initialNum = data.initialNum;
            this.maxNum = data.maxNum;
            this.addOnceByTime = data.addOnceByTime;
            this.addNumByTime = data.addNumByTime;
            if (data.btnAddClick) {
                this.btnAddClick = data.btnAddClick;
            }
        }
        /**
         * 最大体力数量上限
         */
        maxNum = 100;
        initialNum = 50;
        /**
         * 增加体力需要多少时间，毫秒为单位 ,必须是1000的倍数
         */
        addOnceByTime = 1000 * 60 * 5;
        /**
         * 每次自动增加多少点体力
         */
        addNumByTime = 5;
        /**
         * 指代页面 
         */
        view: ui.Views.Base.StaminaObjUI;
        /**
         * 在ui.Prefab中的名称
         */
        viewNameByUI = 'StaminaObjUI';
        style = {
            x: 174,
            y: 46,
        }
        /**
         * 当前剩余体力的数量
         */
        get num(): number {
            return Laya.LocalStorage.getItem('Stamina/num') ? Number(Laya.LocalStorage.getItem('Stamina/num')) : this.initialNum;
        }
        set num(val: number) {
            // if (val > this.maxNum) {
            //     val = this.maxNum;
            // }
            if (val < 0) {
                val = 0;
            }
            val = Math.round(val);
            Laya.LocalStorage.setItem('Stamina/num', val.toString());
            LwgEvent.notify(LwgEvent.BaseEvent.redDotHint);
        }

        protected showCb(): void {
            Laya.timer.clearAll(this);
            this.addRules();
        }

        protected hideCb(): void {
            Laya.timer.clearAll(this);
        }

        /**上次获得体力的时间 */
        get lastAddTime(): number {
            if (!Laya.LocalStorage.getItem('Stamina/lastAddTime')) {
                Laya.LocalStorage.setItem('Stamina/lastAddTime', LwgDate.Now.time.toString());
            }
            return Number(Laya.LocalStorage.getItem('Stamina/lastAddTime'));
        }
        set lastAddTime(val: number) {
            Laya.LocalStorage.setItem('Stamina/lastAddTime', val.toString());
        }

        /**体力增加规则，每次show的时候调用*/
        private addRules(): void {
            LwgTimer.frameLoop(1, this, () => {
                if (this.num >= this.maxNum) {
                    this.view.countDown.text = '00:00';
                    this.view.boxCountHint.visible = false;
                } else {
                    this.view.boxCountHint.visible = true;
                    const time = LwgDate.Now.time - this.lastAddTime;
                    if (LwgDate.Now.time - this.lastAddTime > this.addOnceByTime) {
                        //体力增加，有时候是倍数关系，因为会离线
                        const addNum = Math.round((LwgDate.Now.time - this.lastAddTime) / this.addOnceByTime) * this.addNumByTime;
                        if (this.num < this.maxNum) {
                            this.num += addNum;
                            if (this.num > this.maxNum) {
                                this.num = this.maxNum;
                            }
                        }
                        this.lastAddTime = LwgDate.Now.time;
                        this.view.countDown.text = '00:00';
                    } else {
                        const obj = LwgDate.getHMSByTime(time);
                        const minutes0 = this.addOnceByTime / 1000 / 60 - obj.minutes;
                        const seconds = 59 - obj.seconds;
                        const seconds0 = seconds >= 10 ? seconds : '0' + (seconds);
                        if (minutes0 > 0) {
                            //减一是因为每次秒数都从59开始
                            const minutes = (minutes0 - 1) >= 10 ? (minutes0 - 1) : '0' + (minutes0 - 1);
                            this.view.countDown.text = `${minutes}:${seconds0}`;
                        } else {
                            const seconds0 = seconds >= 10 ? seconds : '0' + (seconds);
                            this.view.countDown.text = `00:${seconds0}`;
                        }
                    }
                }
                this.view.num.text = this.num.toString();
            })
        }
    }
}

/**
 * 事件
 */
export module LwgEvent {
    /**
     * 基础事件
     */
    export class BaseEvent {
        /**
         * 红点提示
         */
        static redDotHint = 'redDotHint';
        /**
         * 打开某个界面
         */
        static openScene = 'openScene';
        /**
         * 完全打开某个界面之后
         */
        static openSceneAniAfter = 'openSceneAniAfter';
    }

    /**
     * 以节点为单位，在节点内注册事件，节点移除或者关闭后，关闭事件监听；如果需要在节点外注册事件，this为EventAdmin，不要写在节点脚本中，否则每次打开一次就会注册
     * 一次
     */
    export const dispatcher: Laya.EventDispatcher = new Laya.EventDispatcher();
    /**
     * 事件注册,总控制事件注册在当前类，每个游戏独有的事件不要注册在这里，防止每关重复注册
     * @param type 事件类型或者名称
     * @param caller 事件的执行域
     * @param listener 响应事件的回调函数,以下写法可以传递参数进来:()=>{}
     */
    export function register(type: any, caller: any, listener: Function) {
        if (!caller) {
            console.error("事件的执行域必须存在!");
        }
        dispatcher.on(type.toString(), caller, listener);
    }
    /**
     * 注册一次事件，响应一次就消失
     * @param type 事件类型或者名称
     * @param caller 事件的执行域
     * @param listener 响应事件的回调函数,以下写法可以传递参数进来:()=>{}
    */
    export function registerOnce(type: any, caller: any, listener: Function) {
        if (!caller) {
            console.error("事件的执行域必须存在!");
        }
        dispatcher.once(type.toString(), caller, listener);
    }
    /**
     * 通知事件
     * @param type 事件类型或者名称
     * @param args 注册事件中的回调函数中的参数
     */
    export function notify(type: any, args?: Array<any>) {
        dispatcher.event(type.toString(), args);
    }
    /**
     * 关闭某个事件
     * @param type 事件类型或者名称
     * @param caller 事件的执行域
     * @param listener 关闭后的回调函数
     * */
    export function off(type: any, caller: any, listener: Function) {
        dispatcher.off(type.toString(), caller, listener);
    }
    /**
     * 关闭所有此类型的事件
     * @param type 事件类型或者名称
    */
    export function offAll(type: any) {
        dispatcher.offAll(type.toString());
    }
    /**
     * 移除某个caller上的所有事件
     * @param caller 执行域
    */
    export function offAllCaller(caller: any) {
        dispatcher.offAllCaller(caller);
    }
}

/**
 * 日期管
 */
export module LwgDate {
    /**
     * 当前
     */
    export class Now {
        /**
         * 年
         */
        static get year(): number {
            return (new Date()).getFullYear();
        };
        /**
         * 月
         */
        static get month(): number {
            return (new Date()).getMonth();
        };
        /**
         * 日
         */
        static get date(): number {
            return (new Date()).getDate();
        };
        /**
         * 周几
         */
        static get day(): number {
            return (new Date()).getDay();
        };
        /**
         * 小时
         */
        static get hours(): number {
            return (new Date()).getHours();
        };
        /**
         * 分钟
         */
        static get minutes(): number {
            return (new Date()).getMinutes();
        };
        /**
         * 秒
         */
        static get seconds(): number {
            return (new Date()).getSeconds();
        };
        /**
         * 毫秒
         */
        static get milliseconds(): number {
            return (new Date()).getMilliseconds();
        };
        /**
         * 全日期
         */
        static get toLocaleDateString(): string {
            return (new Date()).toLocaleDateString();
        };
        /**
         * 当前时间
         */
        static get toLocaleTimeString(): string {
            return (new Date()).toLocaleTimeString();
        };
        /**
         * 时间戳
         */
        static get time(): number {
            return (new Date()).getTime();
        };
        /**
         * 和上个时间相差多少小时
         * @param lastTime 为时间戳
         */
        static getHoursDiffLastTime(lastTime: number): number {
            return getSumHoursByTime(lastTime, this.time);
        };

        /**
         * 和上个时间相差多少分钟
         * @param lastTime 为时间戳
         */
        static getMinutsDiffLastTime(lastTime: number): number {
            return getSumMinutesByTime(lastTime, this.time);
        }

        /**
         * 和上个时间相差多少秒
         * @param lastTime 为时间戳
         */
        static getSecondsDiffLastTime(lastTime: number): number {
            return getSumSecondsByTime(lastTime, this.time);
        }

        /**
         * 和下一个时间相差多少小时
         * @param nextTime 为时间戳
         */
        static getHoursDiffNextTime(nextTime: number): number {
            return getSumHoursByTime(this.time, nextTime);
        };

        /**
         * 和下一个时间相差多少分钟
         * @param nextTime 为时间戳
         */
        static getMinutsDiffNextTime(nextTime: number): number {
            return getSumMinutesByTime(this.time, nextTime);
        }

        /**
         * 和下一个时间相差多少分钟
         * @param nextTime 为时间戳
         */
        static getSecondsDiffNextTime(nextTime: number): number {
            return getSumSecondsByTime(this.time, nextTime);
        }

        /**
         * 以当前时间为基础，输入毫秒数，获取下个时间戳
         */
        static getTimeByMilliseconds(milliseconds: number): number {
            return this.time + milliseconds;
        }
        /**
         * 以当前时间为基础，输入秒数，获取下个时间戳
         */
        static getTimeByScends(seconds: number): number {
            return this.time + seconds * 1000;
        }
        /**
         * 以当前时间为基础，输入分钟数，获取下个时间戳
         */
        static getTimeByMinutes(minutes: number): number {
            return this.time + minutes * 60 * 1000;
        }
        /**
         * 以当前时间为基础，输入分钟数，获取下个时间戳
         */
        static getTimeByHours(hours: number): number {
            return this.time + hours * 60 * 60 * 1000;
        }
    }

    /**
     * 以一个时间为基础，输入一个毫秒数，获取下个时间戳
     */
    export function getTimeByMillisecondsOntime(time: number, seconds: number): number {
        return time + seconds;
    }
    /**
     * 以一个时间为基础，输入一个秒数，获取下个时间戳
     */
    export function getTimeByScendsOntime(time: number, seconds: number): number {
        return time + seconds * 1000;
    }
    /**
     * 以一个时间为基础，输入一个分钟数，获取下个时间戳
     */
    export function getTimeByMinutesOntime(time: number, minutes: number): number {
        return time + minutes * 60 * 1000;
    }
    /**
     * 以一个时间为基础，输入一个小时数，获取下个时间戳
     */
    export function getTimeByHoursOntime(time: number, hours: number): number {
        return time + hours * 60 * 60 * 1000;
    }

    /**
     * 时间戳变成时分秒
     */
    export function getHMSByTime(msec: number): {
        hours: number,
        minutes: number,
        seconds: number,
    } {
        let hours = parseInt(`${msec / (1000 * 60 * 60)}`).toString();
        let minutes = parseInt(`${(msec % (1000 * 60 * 60)) / (1000 * 60)}`).toString();
        let seconds = parseInt(`${(msec % (1000 * 60)) / 1000}`).toString();
        return {
            hours: +hours,
            minutes: +minutes,
            seconds: +seconds,
        }
    }

    /**
     * 两个时间戳的差值换算为时间格式00:00:00， time1为起始时间，time2为结束
     * @param {number} startTimes 起始时间
     * @param {number} endTimes 结束时间
     */
    export function getHMSFormatByTowTime(startTimes: number, endTimes: number): string {
        let msec = (Math.floor(endTimes / 1000) - Math.floor(startTimes / 1000)) * 1000;
        const timeObj = getHMSByTime(msec);
        const hours = timeObj.hours < 10 ? '0' + timeObj.hours : timeObj.hours.toString();
        const minutes = timeObj.minutes < 10 ? '0' + timeObj.minutes : timeObj.minutes.toString();
        const seconds = timeObj.seconds < 10 ? '0' + timeObj.seconds : timeObj.seconds.toString();
        return hours + ':' + minutes + ':' + seconds;
    }

    /**
     * 两个时间戳的差转换为小时
     * @param startTimes 起始时间
     * @param endTimes 结束时间
     * @returns 
     */
    export function getSumHoursByTime(startTimes: number, endTimes: number): number {
        const msec = (Math.floor(endTimes / 1000) - Math.floor(startTimes / 1000)) * 1000;
        const timeObj = getHMSByTime(msec);
        return timeObj.hours + timeObj.minutes * 60 + timeObj.seconds * 3600;
    }
    /**
     * 两个时间戳的差转换为分钟
     * @param startTimes 起始时间
     * @param endTimes 结束时间
     * @returns 
     */
    export function getSumMinutesByTime(startTimes: number, endTimes: number): number {
        const msec = (Math.floor(endTimes / 1000) - Math.floor(startTimes / 1000)) * 1000;
        const timeObj = getHMSByTime(msec);
        return timeObj.hours * 60 + timeObj.minutes + timeObj.seconds / 60;
    }

    /**
     * 两个时间戳的差转换为秒
     * @param startTimes 起始时间
     * @param endTimes 结束时间
     * @returns 
     */
    export function getSumSecondsByTime(startTimes: number, endTimes: number): number {
        const msec = (Math.floor(endTimes / 1000) - Math.floor(startTimes / 1000)) * 1000;
        const timeObj = getHMSByTime(msec);
        return timeObj.hours * 3600 + timeObj.minutes * 60 + timeObj.seconds;
    }
}

/**
 * 循环管理
 */
export module LwgTimer {
    /**
     * 总控制开关,默认为打开
     */
    export let onOff: boolean = true;

    /**
     * 普通无限循环，基于帧
     * @param delay 间隔帧数
     * @param caller 执行域
     * @param method 方法回调
     * @param immediately 是否立即执行一次，默认为false
     * @param args 回调参数[]
     * @param coverBefore 是否覆盖之前的延迟执行，默认为 true。
     */
    export function frameLoop(delay: number, caller: any, method: Function, immediately?: boolean, args?: any[], coverBefore?: boolean): void {
        if (immediately) {
            if (onOff) {
                method();
            }
        }
        Laya.timer.frameLoop(delay, caller, () => {
            if (onOff) {
                method();
            }
        }, args, coverBefore);
    }

    /**
     * 在两个时间区间内中随机时间点触发的无限循环，基于帧
     * @param delay1 间隔帧数区间1
     * @param delay2 间隔帧数区间2
     * @param caller 执行域
     * @param method 方法回调
     * @param args 回调参数[]
     * @param coverBefore 是否覆盖之前的延迟执行，默认为 true 。
     */
    export function frameRandomLoop(delay1: number, delay2: number, caller: any, method: Function, immediately?: boolean, args?: any[], coverBefore?: boolean): void {
        if (immediately) {
            if (onOff) {
                method();
            }
        }
        var func = () => {
            let delay = LwgTools.Num.randomOneInt(delay1, delay2);
            Laya.timer.frameOnce(delay, caller, () => {
                if (onOff) {
                    method();
                    func()
                }
            }, args, coverBefore)
        }
        func();
    }

    /**
     * 有一定次数的循环，基于帧
     * @param delay 时间间隔
     * @param num 次数
     * @param caller 执行域
     * @param method 单次回调函数
     * @param methodguideCompelet 全部完成后的回调函数 
     * @param immediately 是否立即执行一次，默认为false
     * @param args 回调参数[]
     * @param coverBefore 是否覆盖之前的延迟执行，默认为 true 。
     */
    export function frameNumLoop(delay: number, num: number, caller: any, method: Function, methodguideCompelet?: Function, immediately?: boolean, args?: any[], coverBefore?: boolean): void {
        immediately && onOff && method();
        if (num <= 0) {
            return;
        }
        let num0 = 0;
        var func = () => {
            if (onOff) {
                num0++;
                if (num0 >= num) {
                    method();
                    if (methodguideCompelet) {
                        methodguideCompelet();
                    }
                    Laya.timer.clear(caller, func);
                } else {
                    method();
                }
            }
        }
        Laya.timer.frameLoop(delay, caller, func, args, coverBefore);
    }

    /**
     * 有一定次数的循环，并且在随机时间区间内，基于帧
     * @param delay 时间间隔
     * @param num 次数
     * @param method 回调函数
     * @param methodguideCompelet 全部完成后的回调函数 
     * @param immediately 是否立即执行一次，默认为false
     * @param args 回调参数[]
     * @param coverBefore 是否覆盖之前的延迟执行，默认为 true 。
     */
    export function numRandomLoop(delay1: number, delay2: number, num: number, caller: any, method: Function, methodguideCompelet?: Function, immediately?: boolean, args?: any[], coverBefore?: boolean): void {
        immediately && onOff && method();
        if (num <= 0) {
            return;
        }
        let num0 = 0;
        var func = () => {
            let delay = LwgTools.Num.randomOneInt(delay1, delay2);
            Laya.timer.frameOnce(delay, caller, () => {
                if (onOff) {
                    num0++;
                    if (num0 >= num) {
                        method();
                        methodguideCompelet();
                    } else {
                        method();
                        func()
                    }
                }
            }, args, coverBefore)
        }
        func();
    }

    /**
     * 有一定次数的循环，并且在随机时间区间内，基于帧
     * @param delay 时间间隔
     * @param num 次数
     * @param method 回调函数
     * @param methodguideCompelet 全部完成后的回调函数 
     * @param immediately 是否立即执行一次，默认为false
     * @param args 回调参数[]
     * @param coverBefore 是否覆盖之前的延迟执行，默认为 true 。
     */
    export function frameNumRandomLoop(delay1: number, delay2: number, num: number, caller: any, method: Function, methodguideCompelet?: Function, immediately?: boolean, args?: any[], coverBefore?: boolean): void {
        onOff && immediately && method();
        if (num === 0) {
            return;
        }
        let num0 = 0;
        var func = () => {
            let delay = LwgTools.Num.randomOneInt(delay1, delay2);
            Laya.timer.frameOnce(delay, caller, () => {
                if (onOff) {
                    num0++;
                    if (num0 >= num) {
                        method();
                        methodguideCompelet && methodguideCompelet();
                    } else {
                        method();
                        func()
                    }
                }
            }, args, coverBefore)
        }
        func();
    }

    /**
     * 执行一次的计时器，基于帧
     * @param delay 延时
     * @param afterMethod 结束回调函数
     * @param beforeMethod 开始之前的函数
     * @param caller 执行域
     * @param args 回调参数[]
     * @param coverBefore 是否覆盖之前的延迟执行，默认为 true。
     */
    export function frameOnce(delay: number, caller: any, afterMethod: Function, beforeMethod?: Function, args?: any[], coverBefore?: boolean): void {
        onOff && beforeMethod && beforeMethod();
        Laya.timer.frameOnce(delay, caller, () => {
            onOff && afterMethod && afterMethod();
        }, args, coverBefore)
    }
    /**
     * 同时执行很多次的单次的计时器，基于帧，用于一些类似于爆炸特效等
     * @param delay 延时
     * @param num 个数
     * @param afterMethod 结束回调函数
     * @param beforeMethod 开始之前的函数
     * @param args 回调参数[]
     * @param coverBefore 是否覆盖之前的延迟执行，默认为 true 。
     */
    export function frameNumOnce(delay: number, num: number, caller: any, afterMethod: Function, beforeMethod?: Function, args?: any[], coverBefore?: boolean): void {
        for (let index = 0; index < num; index++) {
            onOff && beforeMethod && beforeMethod();
            Laya.timer.frameOnce(delay, caller, () => {
                onOff && afterMethod && afterMethod();
            }, args, coverBefore)
        }
    }

    /**
     * 普通无限循环，基于时间
     * @param delay 时间
     * @param caller 执行域
     * @param method 方法回调
     * @param immediately 是否立即执行一次，默认为false
     * @param args 回调参数[]
     * @param coverBefore 是否覆盖之前的延迟执行，默认为 true 。
     */
    export function loop(delay: number, caller: any, method: Function, immediately?: boolean, args?: any[], coverBefore?: boolean): void {
        onOff && immediately && method && method();
        Laya.timer.loop(delay, caller, () => {
            if (onOff) {
                method();
            }
        }, args, coverBefore);
    }

    /**
     * 在两个时间区间内中随机时间点触发的无限循环，基于时间
     * @param delay1 时间区间1
     * @param delay2 时间区间2
     * @param caller 执行域
     * @param method 单次方法回调
     * @param immediately 是否立即执行一次，默认为false
     * @param args 回调参数[]
     * @param coverBefore 是否覆盖之前的延迟执行，默认为 true 。
     */
    export function randomLoop(delay1: number, delay2: number, caller: any, method: Function, immediately?: boolean, args?: any[], coverBefore?: boolean): void {
        onOff && immediately && method && method();
        var func = () => {
            let delay = LwgTools.Num.randomOneInt(delay1, delay2);
            Laya.timer.once(delay, caller, () => {
                if (onOff) {
                    method();
                    func()
                }
            }, args, coverBefore);
        }
        func();
    }

    /**
     * 有一定次数的循环，基于时间
     * @param delay 时间
     * @param num 次数
     * @param method 回调函数
     * @param immediately 是否立即执行一次，默认为false
     * @param args 回调参数[]
     * @param coverBefore 是否覆盖之前的延迟执行，默认为 true 。
     */
    export function numLoop(delay: number, num: number, caller: any, stepCb: Function, compeletCb?: Function, immediately?: boolean, args?: any[], coverBefore?: boolean): void {
        onOff && immediately && stepCb && stepCb();
        let num0 = 0;
        var func = () => {
            if (onOff) {
                num0++;
                if (num0 > num) {
                    stepCb();
                    compeletCb && compeletCb();
                    Laya.timer.clear(caller, func);
                } else {
                    stepCb();
                }
            }
        }
        Laya.timer.loop(delay, caller, func, args, coverBefore);
    }

    /**
      * 执行一次的计时器，基于时间
      * @param delay 延时
      * @param afterMethod 结束回调函数
      * @param caller 执行域
      * @param beforeMethod 开始之前的函数
      * @param args 回调参数[]
      * @param coverBefore 是否覆盖之前的延迟执行，默认为 true 。
      */
    export function once(delay: number, caller: any, afterMethod: Function, beforeMethod?: Function, args?: any[], coverBefore?: boolean): void {
        onOff && beforeMethod && beforeMethod();
        Laya.timer.once(delay, caller, () => {
            onOff && afterMethod && afterMethod();
        }, args, coverBefore)
    }
}


/**
 * 适配设置
 * 可以做一些自动适配，通过再场景中的名称直接适配,通过模块中的一些规则
 */
export module LwgAdaptive {
    export class Init {
        constructor(_width: number, _height: number) {
            width = _width;
            height = _height;
        }
        public get LwgAdaptive(): string {
            return 'LwgAdaptive';
        }

    }
    export let width: number = 720;
    export let height: number = 1280;
    export let Use = {
        get value(): [number, number] {
            return this['Adaptive/value'] ? this['Adaptive/value'] : null;
        },
        /**
         * 设计分辨率
         *@param val [_designWidth，_desigheight]
         */
        set value(val: [number, number]) {
            this['Adaptive/value'] = val;
        }
    }
    /**
     * @export 根据舞台按场景内节点位置比例适配X轴
     * @param {Array<Laya.Sprite>} arr 节点数组
     */
    export function stageWidth(arr: Array<Laya.Sprite>): void {
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index] as Laya.Sprite;
            if (element.pivotX == 0 && element.width) {
                element.x = element.x / Use.value[0] * Laya.stage.width + element.width / 2;
            } else {
                element.x = element.x / Use.value[0] * Laya.stage.width;
            }
        }
    }
    /**
     * @export 根据舞台按场景内节点位置比例适配Y轴
     * @param {Array<Laya.Sprite>} arr 节点数组
     */
    export function stageHeight(arr: Array<Laya.Sprite>): void {
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index] as Laya.Sprite;
            if (element.pivotY == 0 && element.height) {
                element.y = element.y / Use.value[1] * element.scaleX * Laya.stage.height + element.height / 2;
            } else {
                element.y = element.y / Use.value[1] * element.scaleX * Laya.stage.height;
            }
        }
    }
    /**
     * @export 根据宽高居中
     * @param {Array<Laya.Sprite>} arr 节点数组
     * @param {Laya.Sprite} target 依据什么居中舞台或者父节点
     */
    export function center(arr: Array<Laya.Sprite>, target: Laya.Sprite): void {
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index] as Laya.Sprite;
            if (element.width > 0) {
                element.x = target.width / 2 - (element.width / 2 - element.pivotX) * element.scaleX;
            } else {
                element.x = target.width / 2;
            }
            if (element.height > 0) {
                element.y = target.height / 2 - (element.height / 2 - element.pivotY) * element.scaleY;
            } else {
                element.y = target.height / 2;
            }
        }
    }
}

/**
 * 本地存储
 */
export module LwgStorage {
    class admin {
        removeSelf(): void { }
        /**监听函数，每次值变化的时候会执行一次,不可以改变值，但是可以获取值*/
        func(): void { }
    }
    export class TpNumVariable extends admin {
        value: number;
    }
    export class TpStrVariable extends admin {
        value: string;
    }
    export class TpBoolVariable extends admin {
        value: boolean;
    }
    export class TpArrayVariable extends admin {
        value: Array<any>;
    }
    export class TpArrayArrVariable extends admin {
        value: Array<Array<any>>;
    }
    export class Object extends admin {
        value: {};
    }
    /**
    * @param name 名称
    * @param initial 初始值，如果有值了则无效,默认为0
    * */
    export function number(name: string, _func?: Function, initial?: number): TpNumVariable {
        if (!this[`_num${name}`]) {
            const obj: TpNumVariable = {
                get value(): number {
                    if (Laya.LocalStorage.getItem(name)) {
                        return Number(Laya.LocalStorage.getItem(name));
                    } else {
                        initial = initial ? initial : 0;
                        Laya.LocalStorage.setItem(name, initial.toString());
                        return initial;
                    }
                },
                set value(data: number) {
                    Laya.LocalStorage.setItem(name, data.toString());
                    this['func']();
                },
                removeSelf(): void {
                    Laya.LocalStorage.removeItem(name);
                },
                func(): void {
                    this['_func'] && this['_func']();
                }
            }
            this[`_num${name}`] = obj;
        }
        if (_func) {
            this[`_num${name}`]['_func'] = _func;
        }
        return this[`_num${name}`];
    }
    /**
     * @param name 名称
     * @param initial 初始值，如果有值了则无效，默认为null
     * */
    export function string(name: string, _func?: Function, initial?: string): TpStrVariable {
        if (!this[`_str${name}`]) {
            this[`_str${name}`] = {
                get value(): string {
                    if (Laya.LocalStorage.getItem(name)) {
                        return Laya.LocalStorage.getItem(name);
                    } else {
                        initial = initial ? initial : null;
                        Laya.LocalStorage.setItem(name, initial.toString());
                        return initial;
                    }
                },
                set value(data: string) {
                    Laya.LocalStorage.setItem(name, data.toString());
                    this['func']();
                },
                removeSelf(): void {
                    Laya.LocalStorage.removeItem(name);
                },
                func(): void {
                    this['_func'] && this['_func']();
                }
            }
        }
        if (_func) {
            this[`_str${name}`]['_func'] = _func;
        }
        return this[`_str${name}`];
    }
    /**
     * @param name 名称
     * @param initial 初始值，如果有值了则无效，默认为false
     * */
    export function bool(name: string, _func?: Function, initial?: boolean): TpBoolVariable {
        if (!this[`_bool${name}`]) {
            this[`_bool${name}`] = {
                get value(): any {
                    if (Laya.LocalStorage.getItem(name)) {
                        if (Laya.LocalStorage.getItem(name) === "false") {
                            return false;
                        } else if (Laya.LocalStorage.getItem(name) === "true") {
                            return true;
                        }
                    } else {
                        if (initial) {
                            Laya.LocalStorage.setItem(name, "true");
                        } else {
                            Laya.LocalStorage.setItem(name, "false");
                        }
                        this['func']();
                        return initial;
                    }
                },
                set value(bool: any) {
                    bool = bool ? "true" : "false";
                    Laya.LocalStorage.setItem(name, bool.toString());
                },
                removeSelf(): void {
                    Laya.LocalStorage.removeItem(name);
                },
                func(): void {
                    _func && _func();
                }
            }
        }
        if (_func) {
            this[`_bool${name}`]['_func'] = _func;
        }
        return this[`_bool${name}`];
    }
    /**
    * @param name 名称
    * @param initial 初始值，如果有值了则无效，默认为[]
    * */
    export function array(name: string, _func?: Function, initial?: Array<any>): TpArrayVariable {
        if (!this[`_array${name}`]) {
            this[`_array${name}`] = {
                get value(): Array<any> {
                    try {
                        let data = Laya.LocalStorage.getJSON(name);
                        if (data) {
                            return JSON.parse(data);
                        } else {
                            initial = initial ? initial : [];
                            Laya.LocalStorage.setJSON(name, JSON.stringify(initial));
                            this['func']();
                            return initial;
                        }
                    } catch (error) {
                        return [];
                    }
                },
                set value(array: Array<any>) {
                    Laya.LocalStorage.setJSON(name, JSON.stringify(array));
                },
                removeSelf(): void {
                    Laya.LocalStorage.removeItem(name);
                },
                func(): void {
                    _func && _func();
                }
            }
        }
        if (_func) {
            this[`_array${name}`]['_func'] = _func;
        }
        return this[`_array${name}`];
    }

    /**
      * @param name 名称
      * @param initial 初始值，如果有值了则无效，默认为[]
      * */
    export function object(name: string, _func?: Function, initial?: {}): Object {
        if (!this[`_obj${name}`]) {
            this[`_obj${name}`] = {
                get value(): {} {
                    try {
                        let data = Laya.LocalStorage.getJSON(name);
                        if (data) {
                            return JSON.parse(data);
                        } else {
                            initial = initial ? initial : {};
                            Laya.LocalStorage.setJSON(name, JSON.stringify(initial));
                            this['func']();
                            return initial;
                        }
                    } catch (error) {
                        return {};
                    }
                },
                set value(array: {}) {
                    Laya.LocalStorage.setJSON(name, JSON.stringify(array));
                },
                removeSelf(): void {
                    Laya.LocalStorage.removeItem(name);
                },
                func(): void {
                    _func && _func();
                }
            }
        }
        if (_func) {
            this[`_obj${name}`]['_func'] = _func;
        }
        return this[`_obj${name}`];
    }

    /**
     * @param name 名称
     * @param initial 初始值，如果有值了则无效，默认为[]
     * */
    export function arrayArray(name: string, _func?: Function, initial?: Array<Array<any>>): TpArrayArrVariable {
        if (!this[`arrayArr${name}`]) {

            this[`arrayArr${name}`] = {
                get value(): Array<Array<any>> {
                    try {
                        let data = Laya.LocalStorage.getJSON(name)
                        if (data) {
                            return JSON.parse(data);;
                        } else {
                            initial = initial ? initial : [];
                            Laya.LocalStorage.setItem(name, initial.toString());
                            return initial;
                        }
                    } catch (error) {
                        return [];
                    }
                },
                set value(array: Array<Array<any>>) {
                    Laya.LocalStorage.setJSON(name, JSON.stringify(array));
                    this['func']();
                },
                removeSelf(): void {
                    Laya.LocalStorage.removeItem(name);
                },
                func(): void {
                    _func && _func();
                }
            }
        }
        if (_func) {
            this[`arrayArr${name}`]['_func'] = _func;
        }
        return this[`arrayArr${name}`];
    }
}

/**
 * 数据表管理
 * 在表格中描述的位置填写各种参数类型名词
*/
export module LwgData {
    /**
     * 表格中的基础属性
     */
    export type TpBase = {
        ID: number,
        describe?: string,
        name?: string
    }

    /**
     * 基础的表格
     */
    export class BaseTable {
        constructor(arr: any) {
            this.arr = arr;
        }
        arr: TpBase[] = [];
        /**
         * 通过ID获取对象，如果多个同对象则只返回第一个
         * @param ID ID
         */
        getObjByID(ID: number): TpBase {
            for (const key in this.arr) {
                if (Object.prototype.hasOwnProperty.call(this.arr, key)) {
                    const element = this.arr[key];
                    if (element.ID == ID) {
                        return element;
                    }
                }
            }
        }

        /**
         * 遍历数据数组
         * @param eachCb 每个回调，返回element, index
         * @param endCb 完成
         */
        eachDataArr(eachCb: Function, endCb?: Function): void {
            for (let index = 0; index < this.arr.length; index++) {
                const element = this.arr[index];
                eachCb && eachCb(element, index);
                if (index == this.arr.length - 1) {
                    endCb && endCb();
                }
            }
        }

        /**
         * 通过一个属性名和属性值获取一个对象，如果两个相同则全部返回
         * @param proName 属性名
         * @param val 属性值
         * @returns 
         */
        getObjArrByProNameAndVal(proName: string, val: any): TpBase[] {
            const arr = [];
            for (const key in this.arr) {
                if (Object.prototype.hasOwnProperty.call(this.arr, key)) {
                    const element = this.arr[key];
                    if (element[proName] !== undefined && element[proName] === val) {
                        arr.push(element);
                    }
                }
            }
            return arr;
        }

        /**
         * 通过一个属性名和属性值获取一个第一个满足条件的对象，某些情况下可能不止一个
         * @param proName 属性名
         * @param val 属性值
         * @returns 
         */
        getObjFirstByProNameAndVal(proName: string, val: any): TpBase {
            for (const key in this.arr) {
                if (Object.prototype.hasOwnProperty.call(this.arr, key)) {
                    const element = this.arr[key];
                    if (element[proName] && element[proName] == val) {
                        return element;
                    }
                }
            }
        }

    }

    /**
     *  基础类型
     */
    export type TpItmeTable = {
        /**
         * 唯一标识
         */
        ID: number,
        /**
         * 描述
         */
        describe?: string,
        /**
         * 类型
         */
        type?: number,
    }

    /**
     * 所有的itme的三个属性
     */
    export type TpItemArr = {
        /**
          * 奖励id
          */
        itemArr: number[],
        /**
          * 数量
          */
        numberArr: number[],
        /**
         * 权重，出现概率
         */
        weightArr: number[],
    }

    /**
     * 单个time
     */
    export type TpItemGroup = {
        /**在数组中的哪个位置 */
        index: number,
        /**
         * 奖励item
         */
        ID: number,
        /**
          * 数量
          */
        number: number,
        /**
         * 权重，出现概率
         */
        weight: number,
    }


    /**
     * 队列形式表格
     */
    export class ItmeTable extends BaseTable {
        constructor(arr: any[]) {
            super(arr);
        }
        /**
          * 将item开的头的属性以及对应的例如权重和数量获取到一起item1，item2,item3,这个数据必定是按照item1，item2,item3排序
          * 最大取到200组，设置最大值，那么一定会按照名称排序
          */
        getItemArrObjByID(ID: number): TpItemArr {
            const obj = this.getObjByID(ID);
            const itemArr = [];
            const numberArr = [];
            const weightArr = [];
            for (let i = 1; i < 200; i++) {
                const itemElement = obj['item' + i];
                if (itemElement) {
                    const numberElement = obj['number' + i];
                    const weightElement = obj['weight' + i];
                    for (let j = 0; j < itemElement.length; j++) {
                        //表格中有些有null则不会放进去
                        const item = itemElement[j];
                        if (item) {
                            const number = numberElement[j];
                            const weight = weightElement[j];
                            itemArr.push(item);
                            numberArr.push(number);
                            weightArr.push(weight);
                        }
                    }
                } else {
                    break;
                }
            }
            const objArr: TpItemArr = {
                itemArr: itemArr,
                numberArr: numberArr,
                weightArr: weightArr,
            }
            return objArr;
        }

        /**
         * 将总权重加起来,然后随机出一个，不一定是100，然后随机出一个itemID
         */
        ranSuperpositionWeight(ID: number): TpItemGroup {
            const objArr = this.getItemArrObjByID(ID);
            let sumWeight = 0;
            for (let index = 0; index < objArr.weightArr.length; index++) {
                sumWeight += objArr.weightArr[index];
            }
            let index0 = 0;
            const ran = Math.floor(Math.random() * sumWeight);
            let sumWeight1: number;
            let sumWeight2: number;
            for (let index = 0; index < objArr.weightArr.length; index++) {
                if (index == 0) {
                    if (0 < ran && ran < objArr.weightArr[index]) {
                        index0 = index;
                        break;
                    }
                } else {
                    //前一个累加
                    sumWeight1 = 0;
                    for (let i = 0; i < index; i++) {
                        sumWeight1 += objArr.weightArr[i];
                    }
                    //下一个累加
                    sumWeight2 = 0;
                    for (let j = 0; j < index + 1; j++) {
                        sumWeight2 += objArr.weightArr[j];
                    }
                    //再此区间内
                    if (ran >= sumWeight1 && ran < sumWeight2) {
                        index0 = index;
                        break;
                    }
                }
            }
            const obj: TpItemGroup = {
                index: index0,
                ID: objArr.itemArr[index0],
                number: objArr.numberArr[index0],
                weight: objArr.weightArr[index0],
            }
            // console.log('区间1：', sumWeight1, '区间2：', sumWeight2, '随机：', ran, '总:', sumWeight, '索引值：', index0, obj);
            return obj;
        }

        /**
         * 在itemArr中通过索引值取出一个itemGroup对象
         */
        getItemGroupObjByIndex(ID: number, index: number): TpItemGroup {
            const obj = this.getItemArrObjByID(ID);
            const obj0: TpItemGroup = {
                index: index,
                ID: obj.itemArr[index],
                number: obj.numberArr[index],
                weight: obj.weightArr[index],
            }
            return obj0;
        }

        /**
         * 随机个在itemArr中通过索引值随机一个ID出来，如果是null说明没有这个对象
         */
        getRanItemIdArrByID(ID: number, index: number): any {
            const obj = this.getItemArrObjByID(ID);
            const arr = [];
            for (let index = 0; index < obj.weightArr.length; index++) {
                const element = obj.itemArr[index];
                Math.floor((Math.random() * 100));
                element
            }
            return;
        }
    }

    /**基础获取途径*/
    export type EmTaskUnlockWay = {
        ads?: string;
        gold?: string;
        level?: string;
        diamond?: string;
        free?: string;
        check?: string;
    }

    /**
     * 基础任务表
     */
    export class TasKTable {

    }

    /**
     * 整体操作的表格常用属性
     */
    export type TpEntirety = {
        /**
         * 等级
        */
        level?: number,
        /**
         * 条件
         */
        condition?: string,
        /**
         * 对比条件值，达到了多少
         */
        degreeNum?: number,
        /**
         * 完成，获得
         */
        complete?: boolean,
        /**
         * 是否被选中
         */
        pitch?: boolean,
    } & TpBase;

    /**
     * 整体操作的表格对象
     */
    export class EntiretyTable extends BaseTable {
        /**
         * 数据表名称,存储时使用
         */
        private tableName: string = 'table';
        /**
         * 数据数组
         */
        arr: TpEntirety[];
        /**
         * 上个版本的表格
         */
        lastArr: TpEntirety[] = [];
        /**
         * 是否启用本地存储
         */
        private localStorage: boolean = false;
        /**
         * List
         */
        list: Laya.List;
        /**
         * 注意，长字符串，例如图片信息不要存在表格中，表格中只有短值，否则可能会超出单条存储大小，并且导致加载延迟，数据无法第一时间加载完成，并且不易于版本更新。
         * @param {string} tableName 名称,本地存储也是这个名字。
         * @param {Array<any>} tableArr 数据表数组,没有就是null,不要为[]和undefined,否则默认就有，undefined在json获取的时候会报错，null的本地json对象为"null"，为正确值，itme则时非正确值。
         * @param localStorage 是否存储在本地,默认true。
         * @param addCompare 是否对比原来的
         * @param lastVtableName 如果表格发生改变，对比上个版本的数据表将一些成果继承赋值，默认属性为check，guideCompelet，degreeNum，getAward。
         * @param lastProArr 指定上个版本需要继承的属性，指定后默认完成的属性不会自动继承。
         */
        constructor(tableName?: string, tableArr: Array<any> = null, localStorage: boolean = true, addCompare: boolean = true, lastVtableName?: string, lastProArr?: string[]) {
            super(tableArr);
            if (tableName) {
                this.tableName = tableName;
                if (localStorage) {
                    this.localStorage = localStorage;
                    // 如果需要对比添加对象，则对比后添加，否则直接上传
                    if (addCompare) {
                        this.arr = compareMerge(tableArr, tableName, 'ID');
                    } else {
                        this.arr = compare(tableArr, tableName);
                    }
                    if (lastVtableName) {
                        if (lastProArr) {
                            this.compareLastInforByPro(lastVtableName, lastProArr);
                        } else {
                            this.compareLastDefaultPro(lastVtableName);
                        }
                    }
                }
            }
        }

        /**设置存储和刷新*/
        refreshAndStorage(): void {
            this.localStorage && Laya.LocalStorage.setJSON(this.tableName, JSON.stringify(this.arr));
            this.list && this.list.refresh();
        }

        /**
         * 导入上个版本的属性值,如果没有则不会导入,当前版本有值也不会导入
         * @param {string[]} proArr 属性名称数组
         * @memberof _Table
         */
        private compareLastInforByPro(lastVtableName: string, proArr: string[]): void {
            this.lastArr = this.getLastVersion(lastVtableName);
            for (let index = 0; index < this.lastArr.length; index++) {
                const elementLast = this.lastArr[index];
                for (let index = 0; index < this.arr.length; index++) {
                    const element = this.arr[index];
                    if (elementLast.name === element.name) {
                        for (let index = 0; index < proArr.length; index++) {
                            const proName = proArr[index];
                            element[proName] = elementLast[proName];
                        }
                    }
                }
            }
            this.refreshAndStorage();
        }

        /**
         * 导入上个版本的完成数据，默认为guideCompelet，degreeNum，getAward；
         * @param {string} lastVtableName 上个存储名
         */
        compareLastDefaultPro(lastVtableName: string): void {
            this.lastArr = this.getLastVersion(lastVtableName);
            if (this.lastArr.length > 0) {
                for (let i = 0; i < this.lastArr.length; i++) {
                    const _lastelement = this.lastArr[i];
                    for (let j = 0; j < this.arr.length; j++) {
                        const element = this.arr[j];
                        if (_lastelement.complete) {
                            element.complete = true;
                        }
                        if (_lastelement.degreeNum > element.degreeNum) {
                            element.degreeNum = _lastelement.degreeNum;
                        }
                    }
                }
            }
            this.refreshAndStorage();
        }

        /**
         * 查询以前版本的表格
         * @param lastVtableName 以前版本名称
          */
        getLastVersion(lastVtableName: string): Array<any> {
            let dataArr: any = [];
            try {
                if (Laya.LocalStorage.getJSON(lastVtableName)) {
                    dataArr = JSON.parse(Laya.LocalStorage.getJSON(lastVtableName));
                }
            } catch (error) {
                console.log(lastVtableName + '前版本不存在！')
            }
            return dataArr;
        }

        /**
         * 返回被选中的对象在数组中的位置
         * */
        getPitchIndexInArr(): number {
            for (let index = 0; index < this.arr.length; index++) {
                const element = this.arr[index];
                if (element.name === this.pitchName) {
                    return index;
                }
            }
        }

        /**
          * 返回被选中的对象在List.array中的位置，有时候List.array并不是arr
          * */
        getPitchIndexInListArr(): number {
            if (this.list) {
                for (let index = 0; index < this.list.array.length; index++) {
                    const element = this.list.array[index];
                    if (element.name === this.pitchName) {
                        return index;
                    }
                }
            }
        }

        /**
         * 将选中的对象移动到第一位
         * @param time 所需时间
         * @param func 结束回调
         * */
        listTweenToPitch(time: number, func?: Function): void {
            const index = this.getPitchIndexInListArr();
            index && this.list.tweenTo(index, time, Laya.Handler.create(this, () => {
                func && func();
            }));
        }

        /**
         * 将选中的对象移动到第几位,本身index的差值
         * @param diffIndex 和Pitch相差位置
         * @param time 所需时间
         * @param func 结束回调
         * */
        listTweenToDiffIndexByPitch(diffIndex: number, time: number, func?: Function): void {
            const index = this.getPitchIndexInListArr();
            index && this.list.tweenTo(index + diffIndex, time, Laya.Handler.create(this, () => {
                func && func();
            }));
        }

        /**
         * 将list中的最后一个移动到第一位
         * */
        listScrollToFirstByLast(): void {
            const index = this.list.array.length - 1;
            index && this.list.scrollTo(index);
        }

        /**
         * 通过某个属性名获取列表中第一个等于这个属性值的对象
         * @param {string} proName 属性名
         * @param {*} value 属性值
         */
        getFirstObjByPro(proName: string, value: any): TpEntirety {
            for (const key in this.arr) {
                if (Object.prototype.hasOwnProperty.call(this.arr, key)) {
                    const element = this.arr[key];
                    if (element[proName] === value) {
                        return element;
                    }
                }
            }
        }

        /**
         * 通过名称获取对象，如果多个同对象则只返回第一个
         * @param name 名字
        */
        getObjByName(name: string): TpEntirety {
            for (const key in this.arr) {
                if (Object.prototype.hasOwnProperty.call(this.arr, key)) {
                    const element = this.arr[key];
                    if (element.name == name) {
                        return element;
                    }
                }
            }
        }

        /**
         * 通过ID设置这个id对象
         * @param ID ID
        */
        setObjguideCompeletByID(ID: number): void {
            for (const key in this.arr) {
                if (Object.prototype.hasOwnProperty.call(this.arr, key)) {
                    const element = this.arr[key] as TpEntirety;
                    if (element.ID === ID) {
                        element.complete = true;
                        break;
                    }
                }
            }
            this.refreshAndStorage();
        }

        /**
         * 通过等级获取对象，如果多个同对象则只返回第一个
         * @param level 等级
        */
        getFirstObjByLevel(level: number): TpEntirety {
            for (const key in this.arr) {
                if (Object.prototype.hasOwnProperty.call(this.arr, key)) {
                    const element = this.arr[key];
                    if (element.level == level) {
                        return element;
                    }
                }
            }
        }

        getNameByID(ID: number): string {
            for (let index = 0; index < this.arr.length; index++) {
                const element = this.arr[index];
                if (element.ID === ID) {
                    return element.name;
                }
            }
        }
        /**
         * 通过等级获取对象，如果多个同对象则只返回第一个
         * @param level 等级
        */
        getObjArrByLevel(level: number): TpEntirety[] {
            const arr = [];
            for (const key in this.arr) {
                if (Object.prototype.hasOwnProperty.call(this.arr, key)) {
                    const element = this.arr[key];
                    if (element.level == level) {
                        arr.push(element);
                    }
                }
            }
            return arr;
        }

        /**所有对象完成*/
        setAllComplete(): void {
            for (let index = 0; index < this.arr.length; index++) {
                const element = this.arr[index];
                element.complete = true;
            }
            this.refreshAndStorage();
        }

        /**
         * 带有延迟的完成，用于插入动画
         * @param {number} delay 单个延迟，第一个不会延迟
         * @param {Function} [eachFrontFunc] 每个完成前执行，返回一个参数可以判断是否在执行前已经完成了
         * @param {Function} [eachEedFunc] 每个完成后执行
         * @param {Function} [comFunc] 全部完成后执行
         * @memberof _Table
         */
        setAllCompleteDelay(delay: number, eachFrontFunc: Function, eachEndFunc: Function, comFunc: Function): void {
            for (let index = 0; index < this.arr.length; index++) {
                LwgTimer.once(delay * index, this, () => {
                    const element = this.arr[index];
                    eachFrontFunc && eachFrontFunc(element.complete);
                    element.complete = true;
                    eachEndFunc && eachEndFunc();
                    if (index === this.arr.length - 1) {
                        comFunc && comFunc();
                    }
                    this.refreshAndStorage();
                })
            }
        }

        /**
         * 将所有对象的某个属性值递增一个可变值值
         * @param pro 属性名
         * @param valueFunc 值，是一个可以返回值得func
        */
        addProValueForAll(pro: string, valueFunc: Function): void {
            for (let index = 0; index < this.arr.length; index++) {
                const element = this.arr[index];
                element[pro] += valueFunc();
            }
            this.refreshAndStorage();
        }

        /**
         * 通过一个属性和值随机出一个对象,用于从某个品类中随机获取一个对象
         * @param {string} [pro] 属性名如果不输入则从表中有此属性的对象中盲选一个。
         * @param {*} [value] 属性值默认为null
         * @memberof _DataTable
         */
        randomOneObjByPro(proName: string, value?: any): any {
            let arr = [];
            for (const key in this.arr) {
                if (Object.prototype.hasOwnProperty.call(this.arr, key)) {
                    const element = this.arr[key];
                    if (value) {
                        if (element[proName] && element[proName] == value) {
                            arr.push(element);
                        }
                    } else {
                        if (element[proName]) {
                            arr.push(element);
                        }
                    }
                }
            }
            if (arr.length == 0) {
                return null;
            } else {
                let any = LwgTools.Arr.randomGetOne(arr);
                return any;
            }
        }

        /**
         * 从数组中随机出一个对象
         * @return {*}  {*}
         * @memberof _Table
         */
        randomOneObj(): any {
            const index = LwgTools.Num.randomOneBySection(0, this.arr.length - 1, true);
            return this.arr[index];
        }

        /**
        * 从数组中随机出一定数量的对象
        * @return {*}  {*}
        * @memberof _Table
        */
        randomCountObj(count: number): any {
            const indexArr = LwgTools.Num.randomCountBySection(0, this.arr.length - 1, count, true);
            const arr = [];
            for (let i = 0; i < this.arr.length; i++) {
                for (let j = 0; j < indexArr.length; j++) {
                    if (i === indexArr[j]) {
                        arr.push(this.arr[i]);
                    }
                }
            }
            return arr;
        }

        /**
         * 获取所有完成的对象
         */
        getArrByguideCompelet(): Array<any> {
            let arr = [];
            for (const key in this.arr) {
                if (Object.prototype.hasOwnProperty.call(this.arr, key)) {
                    const element = this.arr[key];
                    if (element.complete) {
                        arr.push(element);
                    }
                }
            }
            return arr;
        }

        /**
         * 获取所有没有完成的对象
         */
        getArrByNoguideCompelet(): Array<any> {
            let arr = [];
            for (const key in this.arr) {
                if (Object.prototype.hasOwnProperty.call(this.arr, key)) {
                    const element = this.arr[key] as TpEntirety;
                    if (!element.complete) {
                        arr.push(element);
                    }
                }
            }
            return arr;
        }

        /**
         * 通过某个属性名称和值获取所有符合条件的对象数组，可以查找出已获得或者未获得
         * @param {string} proName 属性名
         * @param {*} value 值
         * @memberof _DataTable
         */
        getArrByProperty(proName: string, value: any): Array<any> {
            let arr = [];
            for (const key in this.arr) {
                if (Object.prototype.hasOwnProperty.call(this.arr, key)) {
                    const element = this.arr[key];
                    if (element[proName] && element[proName] == value) {
                        arr.push(element);
                    }
                }
            }
            return arr;
        }

        /**
        * 通过某个属性名称和值获取所有不符合当前值的属性，可以反向查找出已获得或者未获得
        * @param {string} proName 属性名
        * @param {*} value 值
        * @memberof _DataTable
        */
        getArrByNoProperty(proName: string, value: any): Array<any> {
            let arr = [];
            for (const key in this.arr) {
                if (Object.prototype.hasOwnProperty.call(this.arr, key)) {
                    const element = this.arr[key];
                    if (element[proName] && element[proName] !== value) {
                        arr.push(element);
                    }
                }
            }
            return arr;
        }

        /**
         * 随机出一个没有完成的对象，如果没有则返回null
         * @param ID 
         */
        getRanObjByNoCompelet(): TpEntirety {
            let arr0: any[] = LwgTools.ObjArray.arrCopy(this.arr);
            if (arr0.length > 0) {
                const arr1 = LwgTools.Arr.randomGetOut(arr0, arr0.length);
                for (let index = 0; index < arr1.length; index++) {
                    const element = arr1[index] as TpEntirety;
                    if (!element.complete) {
                        return element;
                    }
                }
            }
        }

        /**
         * 通过ID设置这个id对象
         * @param ID ID
        */
        setObjCompeletByID(ID: number): void {
            for (const key in this.arr) {
                if (Object.prototype.hasOwnProperty.call(this.arr, key)) {
                    const element = this.arr[key] as TpEntirety;
                    if (element.ID == ID) {
                        element.complete = true;
                        break;
                    }
                }
            }
            this.refreshAndStorage();
        }


        /**检测所有对象是否都完成了*/
        checkAllguideCompelet(): boolean {
            let bool: boolean = true;
            for (let index = 0; index < this.arr.length; index++) {
                const element = this.arr[index];
                if (!element.complete) {
                    bool = false;
                    return bool;
                }
            }
            return bool;
        }

        /**
         * 检测此ID的对象是否都完成了
         * @param ID
         */
        checkguideCompeletByID(ID: number): boolean {
            for (let index = 0; index < this.arr.length; index++) {
                const element = this.arr[index];
                if (element.ID == ID && element.complete) {
                    return true;
                }
            }
        }
        /**
         * 检测此ID的对象是否都完成了
         * @param ID
         */
        checkCompeletByID(ID: number): boolean {
            for (let index = 0; index < this.arr.length; index++) {
                const element = this.arr[index];
                if (element.ID == ID && element.complete) {
                    return true;
                }
            }
        }

        /**
         * 随机出一个没有完成的对象，如果没有则返回null
         * @param ID 
         */
        getRanObjByNoguideCompelet(): TpEntirety {
            let arr0: any[] = LwgTools.ObjArray.arrCopy(this.arr);
            if (arr0.length > 0) {
                const arr1 = LwgTools.Arr.randomGetOut(arr0, arr0.length);
                for (let index = 0; index < arr1.length; index++) {
                    const element = arr1[index] as TpEntirety;
                    if (!element.complete) {
                        return element;
                    }
                }
            }
        }

        /**
         * 遍历完成的对象并依次返回对象
         * @param func 回调函数，内部传参为信息对象
         * @param
         */
        eachArrByguideCompelet(func: Function): void {
            for (let index = 0; index < this.arr.length; index++) {
                const element = this.arr[index];
                if (element.complete) {
                    func && func(element);
                }
            }
        }

        /**
          * 遍历没有完成的对象并依次返回对象
          * @param func 回调函数，内部传参为信息对象
          * @param
         */
        eachArrByNoguideCompelet(func: Function): void {
            for (let index = 0; index < this.arr.length; index++) {
                const element = this.arr[index];
                if (!element.complete) {
                    func && func(element);
                }
            }
        }

        /**
         * 设置选中名称
         */
        get pitchName(): string {
            if (!this[`${this.tableName}/pitchName`]) {
                if (this.localStorage) {
                    return Laya.LocalStorage.getItem(`${this.tableName}/pitchName`) ? Laya.LocalStorage.getItem(`${this.tableName}/pitchName`) : null;
                } else {
                    return this[`${this.tableName}/pitchName`] = null;
                }
            } else {
                return this[`${this.tableName}/pitchName`];
            }
        };
        set pitchName(str: string) {
            this.lastPitchName = this[`${this.tableName}/pitchName`];
            this[`${this.tableName}/pitchName`] = str;
            if (this.localStorage) {
                Laya.LocalStorage.setItem(`${this.tableName}/pitchName`, str.toString());
            }
            this.refreshAndStorage();
        };

        /**
         * 上一次选中的名称
         */
        get lastPitchName(): string {
            if (!this[`${this.tableName}/lastPitchName`]) {
                if (this.localStorage) {
                    return Laya.LocalStorage.getItem(`${this.tableName}/lastPitchName`) ? Laya.LocalStorage.getItem(`${this.tableName}/lastPitchName`) : null;
                } else {
                    return this[`${this.tableName}/lastPitchName`] = null;
                }
            } else {
                return this[`${this.tableName}/lastPitchName`];
            }
        }
        set lastPitchName(str: string) {
            this[`${this.tableName}/lastPitchName`] = str;
            if (this.localStorage && str) {
                Laya.LocalStorage.setItem(`${this.tableName}/lastPitchName`, str.toString());
            }
        };

        /**
         * 在表格中增加一个对象,会更新本地存储
         * @param obj 对象
         * @param storage 是否更新本地存储
         */
        addObj(obj: any, storage: Boolean = true): void {
            // 必须拷贝
            let _obj = LwgTools.ObjArray.objCopy(obj) as TpEntirety;
            for (let index = 0; index < this.arr.length; index++) {
                const element = this.arr[index];
                if (element.name === _obj.name) {
                    this.arr[index] == _obj;
                }
            }
            storage && this.refreshAndStorage();
        }

        /**
         * 在表格中增加一组对象
         * @param objArr 增加的对象数组
         * @param storage 是否更新本地存储
         * */
        addObjArr(objArr: any[], storage: Boolean = true): void {
            const _objArr = LwgTools.ObjArray.arrCopy(objArr);
            for (let i = 0; i < _objArr.length; i++) {
                const obj = _objArr[i];
                // 将原来和当前数组中ID相同的对象冲掉，防止重ID
                for (let j = 0; j < this.arr.length; j++) {
                    const element = this.arr[j];
                    if (obj && obj.ID === element.ID) {
                        this.arr[j] = obj;
                        _objArr.splice(i, 1);
                        i--;
                        continue;
                    }//不重ID的也不可以直接push，否则可能导致遍历索引位错乱
                }
            }
            // 再将剩余的放进去
            for (let k = 0; k < _objArr.length; k++) {
                const element = _objArr[k];
                this.arr.push(element);
            }
            storage && this.refreshAndStorage();
        }

        /**
         * 根据某个值进行排序,并且直给予一个sort属性记录
         * @param  pro 需要进行排序的属性
         * @param  indexPro 记录排序的数组
         * @param  largest  是否是以最大在前，默认为true
         * */
        sortByProperty(pro: string, indexPro?: string, inverted?: boolean, storage: Boolean = true): void {
            LwgTools.ObjArray.sortByProperty(this.arr, pro);
            if (inverted == undefined || inverted) {
                for (let index = this.arr.length - 1; index >= 0; index--) {
                    const element = this.arr[index];
                    element[indexPro] = this.arr.length - index;
                }
                this.arr.reverse();
            } else {
                for (let index = 0; index < this.arr.length; index++) {
                    const element = this.arr[index];
                    element[indexPro] = index + 1;
                }
            }
            storage && this.refreshAndStorage();
        }
    }

    /**
     * 查看本地有无数据，没有则存储，有则不存储
     * @param tableArr 表格
     * @param storageName 本地存储中的json名称
     * @param proName 数组中每个对象中同一个属性名，通过这个名称进行对比
     */
    function compare(tableArr: Array<any>, storageName: string): Array<any> {
        // 第一步，先尝试从本地缓存获取数据，
        // 第二步，如果本地缓存没有，那么直接将数据表存入
        // 部分平台在没有上传的情况下获取可能会报错，所以报错后直接上传
        try {
            Laya.LocalStorage.getJSON(storageName);
        } catch (error) {
            Laya.LocalStorage.setJSON(storageName, JSON.stringify(tableArr));
            return tableArr;
        }
        let storageArr: any;
        if (Laya.LocalStorage.getJSON(storageName)) {
            storageArr = JSON.parse(Laya.LocalStorage.getJSON(storageName));
            // 初始化时可能为null
            if (!tableArr || !storageArr) {
                return storageArr;
            }
        } else {
            storageArr = tableArr;
        }
        Laya.LocalStorage.setJSON(storageName, JSON.stringify(storageArr));
        return storageArr;
    }

    /**
     * 查看本地有无数据，有的话加入新增对象，新增字段，没有就重新存储
     * @param url 表格
     * @param storageName 本地存储中的json名称
     * @param proName 数组中每个对象中同一个唯一的属性名，通过这个名称进行对比
     */
    function compareMerge(tableArr: Array<any>, storageName: string, proName: string): Array<any> {
        // 第一步，先尝试从本地缓存获取数据，
        // 第二步，如果本地缓存有，把本地没有的新增对象复制进去
        // 第三部，查找新表格新加的字段，将其加入
        // 第四步，如果本地缓存没有，那么直接存储当前表格

        // 部分平台在没有上传的情况下获取可能会报错，所以报错后直接上传
        try {
            Laya.LocalStorage.getJSON(storageName);
        } catch (error) {
            Laya.LocalStorage.setJSON(storageName, JSON.stringify(tableArr));
            return tableArr;
        }
        let storageArr: any;
        if (Laya.LocalStorage.getJSON(storageName)) {
            storageArr = JSON.parse(Laya.LocalStorage.getJSON(storageName));
            // 初始化时可能为null
            if (!tableArr || !storageArr) {
                return storageArr;
            }
            const diffArray = LwgTools.ObjArray.getDiffProByTwoArr(tableArr, storageArr, proName);
            console.log(`${storageName}新添加对象：`, diffArray);
            LwgTools.Arr.addToArray(storageArr, diffArray);
            //将新增字段加进去
            LwgTools.ObjArray.mergeObjArr1ToObjArr2ByPro(tableArr, storageArr, proName);

        } else {
            storageArr = tableArr;
        }
        Laya.LocalStorage.setJSON(storageName, JSON.stringify(storageArr));
        return storageArr;
    }
}

/**滤镜模块,主要是为节点和场景等进行颜色变化设置*/
export module LwgColor {
    /**
     * 将RGB三个颜色值转换成16进制的字符串‘#xxxxxx’
     * @param r 
     * @param g
     * @param b
      */
    export function RGBToHexString(r: number, g: number, b: number) {
        return '#' + ("00000" + (r << 16 | g << 8 | b).toString(16)).slice(-6);
    }
    /**
    * 将16进制的字符串‘#xxxxxx’转换成RGB三个颜色值
    * @param r 
    * @param g
    * @param b
     */
    export function hexStringToRGB(str: any): Array<number> {
        let r: number, g: number, b: number;
        r = (0xff << 16 & str) >> 16;
        g = (0xff << 8 & str) >> 8;
        b = 0xff & str;
        return [r, g, b];
    }

    /**
     * 给一张图片染色,包括其子节点,可以设置一个消失时间
     * @param node 节点
     * @param RGBA [R,G,B,A],默认为随机颜色
     * @param vanishtime 默认不会消失，一旦设置后，将会在这个时间延时后消失
     */
    export function colour(node: Laya.Sprite, RGBA?: [number, number, number, number?], vanishtime?: number): Laya.ColorFilter {
        let cf = new Laya.ColorFilter();
        node.blendMode = 'null';
        if (!RGBA) {
            cf.color(LwgTools.Num.randomOneBySection(255, 100, true), LwgTools.Num.randomOneBySection(255, 100, true), LwgTools.Num.randomOneBySection(255, 100, true), 1)
        } else {
            cf.color(RGBA[0], RGBA[1], RGBA[2], RGBA[3])
        }
        node.filters = [cf];
        if (vanishtime) {
            Laya.timer.once(vanishtime, this, () => {
                for (let index = 0; index < node.filters.length; index++) {
                    if (node.filters[index] == cf) {
                        node.filters = [];
                        break;
                    }
                }
            })
        }
        return cf;
    }

    /**
     * 颜色变化生命周期，在时间内改进行一次颜色渐变，之后回到原来的颜色，RGB颜色为匀速增加,基于帧率
     * @param node 节点
     * @param RGBA  [R,G,B,A],A必须输入
     * @param time time为时间， time*2为一个周期，基于帧
     */
    export function changeOnce(node: Laya.Sprite, RGBA: Array<number>, time: number, func?: Function): void {
        if (!node) {
            return;
        }
        let cf = new Laya.ColorFilter();
        cf.color(0, 0, 0, 0);
        let speedR = RGBA[0] / time;
        let speedG = RGBA[1] / time;
        let speedB = RGBA[2] / time;
        let speedA = 0;
        if (RGBA[3]) {
            speedA = RGBA[3] / time;
        }
        let caller = {
            add: true,
        };
        let R = 0, G = 0, B = 0, A = 0;
        LwgTimer.frameLoop(1, caller, () => {
            if (R < RGBA[0] && caller.add) {
                R += speedR;
                G += speedG;
                B += speedB;
                if (speedA !== 0) A += speedA;
                if (R >= RGBA[0]) {
                    caller.add = false;
                }
            } else {
                R -= speedR;
                G -= speedG;
                B -= speedB;
                if (speedA !== 0) A -= speedA;
                if (R <= 0) {
                    if (func) {
                        func();
                    }
                    Laya.timer.clearAll(caller);
                }
            }
            cf.color(R, G, B, A);
            node.filters = [cf];
        })
    }

    /**
     * 颜色变化后不会消失，除非手动清除颜色，可以循环变化，平滑过渡
     * @param node 节点
     * @param RGBA1 颜色区间1值[];
     * @param RGBA2 颜色区间2值[];
     * @param frameTime 每次变化的时间，基于帧
     */
    export function changeConstant(node: Laya.Sprite, RGBA1: Array<number>, RGBA2: Array<number>, frameTime: number): void {
        let cf: Laya.ColorFilter;
        let RGBA0 = [];
        if (!node.filters) {
            cf = new Laya.ColorFilter();
            cf.color(RGBA1[0], RGBA1[1], RGBA1[2], RGBA1[3] ? RGBA1[3] : 1);
            RGBA0 = [RGBA1[0], RGBA1[1], RGBA1[2], RGBA1[3] ? RGBA1[3] : 1];
            node.filters = [cf];
        } else {
            cf = node.filters[0];
            RGBA0 = [node.filters[0]['_alpha'][0], node.filters[0]['_alpha'][1], node.filters[0]['_alpha'][2], node.filters[0]['_alpha'][3] ? node.filters[0]['_alpha'][3] : 1];
        }
        // 随机出一条颜色值
        let RGBA = [LwgTools.Num.randomCountBySection(RGBA1[0], RGBA2[0])[0], LwgTools.Num.randomCountBySection(RGBA1[1], RGBA2[1])[0], LwgTools.Num.randomCountBySection(RGBA1[2], RGBA2[2])[0], LwgTools.Num.randomCountBySection(RGBA1[3] ? RGBA1[3] : 1, RGBA2[3] ? RGBA2[3] : 1)[0]];
        let speedR = (RGBA[0] - RGBA0[0]) / frameTime;
        let speedG = (RGBA[1] - RGBA0[1]) / frameTime;
        let speedB = (RGBA[2] - RGBA0[2]) / frameTime;
        let speedA = 0;
        if (RGBA[3]) {
            speedA = (RGBA[3] - RGBA0[3]) / frameTime;
        }
        // 如果之前有则取消
        if (node['changeCaller']) {
            Laya.timer.clearAll(node['changeCaller']);
        }
        let changeCaller = {};
        node['changeCaller'] = changeCaller;
        let _time = 0;
        LwgTimer.frameLoop(1, changeCaller, () => {
            _time++;
            if (_time <= frameTime) {
                RGBA0[0] += speedR;
                RGBA0[1] += speedG;
                RGBA0[2] += speedB;
            } else {
                Laya.timer.clearAll(changeCaller);
            }
            cf.color(RGBA0[0], RGBA0[1], RGBA0[2], RGBA0[3]);
            node.filters = [cf];
        })
    }
}

/**
 * 3D特效
 */
export module LwgEff3D {
    export let tex2D = {
        爱心2: {
            url: 'Lwg/Effects/3D/img_aixin2.png',
            texture2D: null as Laya.Texture2D,
            name: '爱心2',
        },
        星星8: {
            url: 'Lwg/Effects/3D/img_star8.png',
            texture2D: null as Laya.Texture2D,
            name: '星星8',
        },
        星星5: {
            url: 'Lwg/Effects/3D/img_star5.png',
            texture2D: null as Laya.Texture2D,
            name: '星星5',
        },
        圆形发光: {
            url: 'Lwg/Effects/3D/img_yuanfaguang.png',
            texture2D: null as Laya.Texture2D,
            name: '圆形发光',
        }
    }
    export module Particle {
        /**粒子运动执行域*/
        export class Caller {
            constructor(_time?: number, _appear?: boolean, _move?: boolean, _vinish?: boolean, _frameFuncInterval?: number, _frameFunc?: Function, _endFunc?: Function,) {
                this.frame.interval = _frameFuncInterval ? _frameFuncInterval : 1;
                this.frame.func = _frameFunc ? _frameFunc : null;
                this.endFunc = _endFunc ? _endFunc : null;
                this.time = _time ? _time : 0;
                this.appear = _appear ? _appear : true;
                this.move = _move ? _move : false;
                this.vinish = _vinish ? _vinish : false;

                LwgTimer.frameLoop(1, this, () => {
                    this.time++;
                    // 父节点被移除后也会清理
                    if (this.box) {
                        if (!this.box.parent) {
                            this.clear();
                            return;
                        }
                    }
                    this.time % this.frame.interval == 0 && this.frame.func && this.frame.func();
                    this.appear && this.appearFunc && this.appearFunc();
                    this.move && this.moveFunc && this.moveFunc();
                    this.vinish && this.vinishFunc && this.vinishFunc();
                    this.end && this.endFunc && this.endFunc();
                    this.everyFrameFunc && this.everyFrameFunc();
                    this.clear();
                })
            }
            public get box(): Laya.MeshSprite3D {
                if (!this['_box']) {
                    console.log('粒子没有初始化！');
                }
                return this['_box'];
            }
            public set box(_box: Laya.MeshSprite3D) {
                this['_box'] = _box;
            }
            /**当前运动总时间线*/
            time = 0;
            /**出现开关*/
            appear = true;
            /**出现阶段执行*/
            appearFunc: Function;
            /**运动开关*/
            move = false;
            /**运动阶段执行*/
            moveFunc: Function;
            /**消失开关*/
            vinish = false;
            /**消失阶段执行*/
            vinishFunc: Function;
            everyFrameFunc: Function;
            /**帧执行函数*/
            frame = {
                /**帧执行函数的执行间隔*/
                interval: 1,
                /**执行函数*/
                func: null as Function,
            };
            /**是否清理*/
            end = false;
            /**完成时执行*/
            endFunc: Function;
            /**状态列举*/
            stateType = {
                appear: 'appear',
                move: 'move',
                vinish: 'vinish',
                end: 'end',
            }
            /**状态切换*/
            stateSwitch(str: string): void {
                if (str == 'a' || str == 'appear') {
                    this.appear = true;
                    this.move = false;
                    this.vinish = false;
                    this.end = false;
                }
                if (str == 'm' || str == 'move') {
                    this.appear = false;
                    this.move = true;
                }
                else if (str == 'v' || str == 'vinish') {
                    this.move = false;
                    this.vinish = true;
                }
                else if (str == 'e' || str == 'end') {
                    this.vinish = false;
                    this.end = true;
                }
            }
            /**清理，可用于提前清理*/
            clear(): void {
                if (this.end) {
                    this.mat.destroy();
                    this.box.meshFilter.destroy();
                    this.box.destroy();
                    Laya.timer.clearAll(this);
                }
            }
            /**
             * @export 粒子系统基础单元,计量单位为1
             * @param {Laya.Scene3D} parent 父节点
             * @param {Laya.Vector3} position 位置，世界坐标默认为[0,0,0];
             * @param {[[number, number, number], [number, number, number]]} sectionSize 大小区间默认
             * @param {[[number, number, number], [number, number, number]]} sectionRotation
             * @param {Laya.Texture2D[]} texArr
             * @param {[[number, number, number, number], [number, number, number, number]]} colorRGBA 色彩区间
             * @param {number} multiple 放大倍数，默认为1，可根据模型的具体大小放大倍数
             * @return {*}  {Laya.MeshSprite3D}
             */
            boxInit(parent: Laya.Sprite3D | Laya.Scene3D, position: [number, number, number], sectionSize: [[number, number, number], [number, number, number]], sectionRotation: [[number, number, number], [number, number, number]], texArr: Laya.Texture2D[], colorRGBA: [[number, number, number, number], [number, number, number, number]]): void {
                const scaleX = sectionSize ? LwgTools.Num.randomOneBySection(sectionSize[0][0], sectionSize[1][0]) : LwgTools.Num.randomOneBySection(0.06, 0.08);
                const scaleY = sectionSize ? LwgTools.Num.randomOneBySection(sectionSize[0][1], sectionSize[1][1]) : LwgTools.Num.randomOneBySection(0.06, 0.08);
                const scaleZ = sectionSize ? LwgTools.Num.randomOneBySection(sectionSize[0][2], sectionSize[1][2]) : LwgTools.Num.randomOneBySection(0.06, 0.08);

                this.box = parent.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(scaleX, scaleY, scaleZ))) as Laya.MeshSprite3D;

                if (position) {
                    this.box.transform.position = new Laya.Vector3(position[0], position[1], position[2]);
                } else {
                    this.box.transform.position = new Laya.Vector3(0, 0, 0);
                }
                this.fPosition = new Laya.Vector3(this.box.transform.position.x, this.box.transform.position.y, this.box.transform.position.z);

                this.box.transform.localRotationEulerX = sectionRotation ? LwgTools.Num.randomOneBySection(sectionRotation[0][0], sectionRotation[1][0]) : LwgTools.Num.randomOneBySection(0, 360);
                this.box.transform.localRotationEulerX = sectionRotation ? LwgTools.Num.randomOneBySection(sectionRotation[0][1], sectionRotation[1][1]) : LwgTools.Num.randomOneBySection(0, 360);
                this.box.transform.localRotationEulerX = sectionRotation ? LwgTools.Num.randomOneBySection(sectionRotation[0][2], sectionRotation[1][2]) : LwgTools.Num.randomOneBySection(0, 360);
                this.fEuler = new Laya.Vector3(this.box.transform.localRotationEulerX, this.box.transform.localRotationEulerY, this.box.transform.localRotationEulerZ);

                const mat = this.box.meshRenderer.material = new Laya.BlinnPhongMaterial();
                mat.albedoTexture = texArr ? LwgTools.Arr.randomGetOne(texArr) : tex2D.圆形发光.texture2D;
                mat.renderMode = 2;//忽略透明度
                const R = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][0], colorRGBA[1][0]) : LwgTools.Num.randomOneBySection(0, 1);
                const G = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][1], colorRGBA[1][1]) : LwgTools.Num.randomOneBySection(0, 1);
                const B = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][2], colorRGBA[1][2]) : LwgTools.Num.randomOneBySection(0, 1);
                const A = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][3], colorRGBA[1][3]) : LwgTools.Num.randomOneBySection(0, 1);
                mat.albedoColor = new Laya.Vector4(R, G, B, A);
                this.mat = mat;
            }

            public get fPosition(): Laya.Vector3 {
                return this['_fPosition'];
            };
            public set fPosition(fP: Laya.Vector3) {
                this['_fPosition'] = fP;
            }

            public get fEuler(): Laya.Vector3 {
                return this['_fEuler'];
            }
            public set fEuler(fE: Laya.Vector3) {
                this['_fEuler'] = fE;
            }

            public get mat(): Laya.BlinnPhongMaterial {
                return this.box.meshRenderer.material as Laya.BlinnPhongMaterial;
            }
            public set mat(m: Laya.BlinnPhongMaterial) {
                this.box.meshRenderer.material = m;
            }

            /**角度记录*/
            private _positionByARY_FA = 0;
            /**
             * 位置运动，基于初始位置
             * @param {number} angle  角度速度
             * @param {number} radius 半径
             * @param {number} speedY Y轴速度
             * @param {number} distance 移动距离
             * @param {Function} stateSwitch  stateSwitch 如果传参，必须切换状态，并且执行一次回调，否则会一直执行
             * @memberof boxBase
             */
            positionByARY(angleSpeed: number, radius: number, speedY: number, distance: number, stateSwitch?: Function): void {
                const pXZ = LwgTools.Point.getRoundPointOld(this._positionByARY_FA += angleSpeed, radius, new Laya.Point(this.fPosition.x, this.fPosition.z));
                this.box.transform.position = new Laya.Vector3(pXZ.x, this.box.transform.position.y += speedY, pXZ.y);
                if (this.box.transform.position.y - this.fPosition.y > distance) {
                    stateSwitch && stateSwitch();
                }
            }

            /**初始半径记录*/
            private _positionARXY_FR = 0;
            /**
             * 通过角度、半径、移动x，y值，可以画圈，和位移，没有加速度
             * @param {number} angle 角度
             * @param {number} speedR 半径速度
             * @param {number} [distance] 移动多少距离
             * @param {Function} stateSwitch  stateSwitch 如果传参，必须切换状态，并且执行一次回调，否则会一直执行
             * @memberof _Caller
             */
            positionARXY_R(angle: number, speedR: number, distance?: number, stateSwitch?: Function): void {
                this._positionARXY_FR += speedR;
                const point = LwgTools.Point.getRoundPointOld(angle, this._positionARXY_FR, new Laya.Point(0, 0));
                this.box.transform.position = new Laya.Vector3(this.fPosition.x + point.x, this.fPosition.y + point.y, this.fPosition.z);
                if (this._positionARXY_FR >= distance) {
                    stateSwitch && stateSwitch();
                }
            }

            /**
             * 渐隐消失
             * @param {number} albedoColorASpeed 渐隐速度
             * @param {number} endNum 极限值,默认为0
             * @param {Function} stateSwitch stateSwitch 如果传参，必须切换状态，并且执行一次回调，否则会一直执行
             * @memberof _Caller
             */
            fadeAway(albedoColorASpeed: number, endNum: number = 0, stateSwitch?: Function): void {
                this.mat.albedoColorA -= albedoColorASpeed;
                if (this.mat.albedoColorA <= endNum) {
                    this.mat.albedoColorA = endNum;
                    stateSwitch && stateSwitch();
                }
            }
            /**
            * 渐隐出现
            * @param {number} albedoColorASpeed 渐隐速度
            * @param {number} endNum 极限值,默认为1
            * @param {Function} stateSwitch 如果传参，必须切换状态，并且执行一次回调，否则会一直执行
            * @memberof _Caller
            */
            fadeIn(albedoColorASpeed: number, endNum: number = 1, stateSwitch?: Function): void {
                this.mat.albedoColorA += albedoColorASpeed;
                if (this.mat.albedoColorA >= endNum) {
                    this.mat.albedoColorA = endNum;
                    stateSwitch && stateSwitch();
                }
            }
            /**时间记录*/
            private _positionByTimeRecord = 0;
            /**
             * 根据时间进行位置移动，没有加速度
             * @param {[number, number, number]} posSpeed 各项位移速度
             * @param {number} [time] 时间
             * @param {Function} stateSwitch 如果传参，必须切换状态，并且执行一次回调，否则会一直执行
             * @memberof _Caller
             */
            positionByTime(posSpeed: [number, number, number], time?: number, stateSwitch?: Function): void {
                this._positionByTimeRecord++;
                this.box.transform.position = new Laya.Vector3(this.box.transform.position.x += posSpeed[0], this.box.transform.position.y += posSpeed[1], this.box.transform.position.z += posSpeed[2]);
                if (time && this._positionByTimeRecord > time) {
                    stateSwitch && stateSwitch();
                }
            }

            /**
             * 大小X递增
             * @param {number} scaleSpeedX 速度
             * @param {number} [endNum] 最大值
             * @param {Function} stateSwitch 如果传参，必须切换状态，并且执行一次回调，否则会一直执行
             * @memberof _Caller
             */
            scaleX(scaleSpeedX: number, endNum?: number, stateSwitch?: Function): void {
                this.box.transform.localScaleX += scaleSpeedX;
                if (endNum) {
                    if (scaleSpeedX >= 0) {
                        if (this.box.transform.localScaleX >= endNum) {
                            this.box.transform.localScaleX = endNum;
                            stateSwitch && stateSwitch();
                        }
                    } else {
                        if (this.box.transform.localScaleX <= endNum) {
                            this.box.transform.localScaleX = endNum;
                            stateSwitch && stateSwitch();
                        }
                    }
                }
            }
            /**
             * Y大小递增
             * @param {number} scaleSpeedY 速度
             * @param {number} [endNum] 临界值
             * @param {Function} stateSwitch 如果传参，必须切换状态，并且执行一次回调，否则会一直执行
             * @memberof _Caller
             */
            scaleY(scaleSpeedY: number, endNum?: number, stateSwitch?: Function): void {
                this.box.transform.localScaleY += scaleSpeedY;
                if (endNum) {
                    if (scaleSpeedY >= 0) {
                        if (this.box.transform.localScaleY >= endNum) {
                            this.box.transform.localScaleY = endNum;
                            stateSwitch && stateSwitch();
                        }
                    } else {
                        if (this.box.transform.localScaleY <= endNum) {
                            this.box.transform.localScaleY = endNum;
                            stateSwitch && stateSwitch();
                        }
                    }
                }
            }

            /**
            * Y大小递增
            * @param {number} scaleSpeedY 速度
            * @param {number} [endNum] 临界值
            * @param {Function} stateSwitch 如果传参，必须切换状态，并且执行一次回调，否则会一直执行
            * @memberof _Caller
            */
            scaleZ(scaleSpeedZ: number, endNum?: number, stateSwitch?: Function): void {
                this.box.transform.localScaleZ += scaleSpeedZ;
                if (endNum) {
                    if (scaleSpeedZ >= 0) {
                        if (this.box.transform.localScaleZ >= endNum) {
                            this.box.transform.localScaleZ = endNum;
                            stateSwitch && stateSwitch();
                        }
                    } else {
                        if (this.box.transform.localScaleZ <= endNum) {
                            this.box.transform.localScaleZ = endNum;
                            stateSwitch && stateSwitch();
                        }
                    }
                }
            }
            /**
             * X轴旋转
             * @param {number} rotateSpeedX 速度
             * @param {number} [endNum] 临界值
             * @param {Function} [stateSwitch] 状态切换回调
             * @memberof _Caller
             */
            rotateX(rotateSpeedX: number, endNum?: number, stateSwitch?: Function): void {
                this.box.transform.localRotationEulerX += rotateSpeedX;
                if (endNum) {
                    if (rotateSpeedX >= 0) {
                        if (this.box.transform.localRotationEulerX >= endNum) {
                            this.box.transform.localRotationEulerX = endNum;
                            stateSwitch && stateSwitch();
                        }
                    } else {
                        if (this.box.transform.localRotationEulerX <= endNum) {
                            this.box.transform.localRotationEulerX = endNum;
                            stateSwitch && stateSwitch();
                        }
                    }
                }
            }
            /**
             * Y轴旋转
             * @param {number} rotateSpeedY 速度
             * @param {number} [endNum] 临界值
             * @param {Function} [stateSwitch] 状态切换回调
             * @memberof _Caller
             */
            rotateY(rotateSpeedY: number, endNum?: number, stateSwitch?: Function): void {
                this.box.transform.localRotationEulerY += rotateSpeedY;
                if (endNum) {
                    if (rotateSpeedY >= 0) {
                        if (this.box.transform.localRotationEulerY >= endNum) {
                            this.box.transform.localRotationEulerY = endNum;
                            stateSwitch && stateSwitch();
                        }
                    } else {
                        if (this.box.transform.localRotationEulerY <= endNum) {
                            this.box.transform.localRotationEulerY = endNum;
                            stateSwitch && stateSwitch();
                        }
                    }
                }
            }
            /**
             * Z轴旋转
             * @param {number} rotateSpeedY 速度
             * @param {number} [endNum] 临界值
             * @param {Function} [stateSwitch] 状态切换回调
             * @memberof _Caller
             */
            rotateZ(rotateSpeedZ: number, endNum?: number, stateSwitch?: Function): void {
                this.box.transform.localRotationEulerZ += rotateSpeedZ;
                if (endNum) {
                    if (rotateSpeedZ >= 0) {
                        if (this.box.transform.localRotationEulerZ >= endNum) {
                            this.box.transform.localRotationEulerZ = endNum;
                            stateSwitch && stateSwitch();
                        }
                    } else {
                        if (this.box.transform.localRotationEulerZ <= endNum) {
                            this.box.transform.localRotationEulerZ = endNum;
                            stateSwitch && stateSwitch();
                        }
                    }
                }
            }
            /**
             * 以当前位置为中心点，在一个空间内随机设置位置
             * @param {[[number, number, number], [number, number, number]]} scopeSize 空间区间
             * @memberof _Caller
             */
            randomScopeByPosition(scopeSize: [[number, number, number], [number, number, number]]): void {
                scopeSize = scopeSize ? scopeSize : [[0.1, 0.1, 0.1], [0.3, 0.3, 0.3]]
                LwgTools.D3.randomScopeByPosition(this.box, scopeSize);
            }

            /**忽略Z轴，看起来是一个平面*/
            excludeZ(): void {
                this.box.transform.localScaleZ = 0;
            }
            /**所有角度归零*/
            rotateTheZero(): void {
                this.box.transform.localRotationEulerZ = 0;
                this.box.transform.localRotationEulerX = 0;
                this.box.transform.localRotationEulerY = 0;
            }
            /**所有大小归零*/
            scaleTheZero(): void {
                this.box.transform.localRotationEulerZ = 0;
                this.box.transform.localRotationEulerX = 0;
                this.box.transform.localRotationEulerY = 0;
            }
        }
        /**
         * 旋转，螺旋，向上
         * @param {Laya.Scene3D} parent 父节点
         * @param {[number, number, number]} [position] 位置
         * @param {[[number, number, number], [number, number, number]]} [sectionSize] 大小区间，
         * @param {[[number, number, number], [number, number, number]]} [sectionRotation] 角度区间
         * @param {Laya.Texture2D[]} [texArr] 贴图样式[],默认为爱心2
         * @param {[[number, number, number, number], [number, number, number, number]]} [colorRGBA] 颜色区间
         * @param {[number, number]} [distance] 向上移动距离区间[],默认为0.3,
         * @param {[number, number]} [speedY] 向上速度区间[],默认为0.3
         * @param {[number, number]} [angleSpeed] 旋转速度区间[],默认为 0.02,
         * @param {[number, number]} [radius] 半径区间[],默认为[0.5,0.5],
         * @param {Function} [vinishFunc] 消失时的回调函数
         * @return {*}  {Laya.MeshSprite3D}
         */
        export function spiral(parent: Laya.Sprite3D | Laya.Scene3D, position?: [number, number, number], sectionSize?: [[number, number, number], [number, number, number]], sectionRotation?: [[number, number, number], [number, number, number]], texArr?: Laya.Texture2D[], colorRGBA?: [[number, number, number, number], [number, number, number, number]], distance?: [number, number], speedY?: [number, number], angleSpeed?: [number, number], radius?: [number, number]): Caller {
            const caller = new Caller();
            caller.boxInit(parent, position, sectionSize, sectionRotation, texArr, colorRGBA);
            caller.excludeZ();
            caller.rotateTheZero();
            const _distance = LwgTools.Num.randomNumerical(distance, [1.5, 1.5]);
            const _speedY = LwgTools.Num.randomNumerical(speedY, [0.02, 0.02]);
            const _angleSpeed = LwgTools.Num.randomNumerical(angleSpeed, [6, 6]);
            const _radius = LwgTools.Num.randomNumerical(radius, [0.5, 0.5]);
            caller.mat.albedoColorA = 0;
            caller.stateSwitch('m');
            caller.moveFunc = () => {
                caller.fadeIn(0.2);
                caller.positionByARY(_angleSpeed, _radius, _speedY, _distance, () => {
                    caller.stateSwitch('v');
                });
            }
            caller.vinishFunc = () => {
                caller.fadeAway(0.15, 0, () => {
                    caller.stateSwitch('e');
                })
                caller.positionByTime([0, 0.002, 0]);
            }
            return caller;
        }


        /**
         * 普通爆炸，没有加速
         * @export
         * @param {(Laya.Sprite3D | Laya.Scene3D)} parent 父节点
         * @param {[number, number, number]} [position] 初始位置
         * @param {[[number, number, number], [number, number, number]]} [sectionSize] 初始大小
         * @param {[[number, number, number], [number, number, number]]} [sectionRotation] 初始角度
         * @param {Laya.Texture2D[]} [texArr] 贴图集合
         * @param {[[number, number, number, number], [number, number, number, number]]} [colorRGBA] 颜色区间
         * @param {[number, number]} [distance] 移动距离区间
         * @param {[number, number]} [speedR] 以原点为重的半径速度
         * @return {*}  {_Caller}
         */
        export function explode(parent: Laya.Sprite3D | Laya.Scene3D, position?: [number, number, number], sectionSize?: [[number, number, number], [number, number, number]], sectionRotation?: [[number, number, number], [number, number, number]], texArr?: Laya.Texture2D[], colorRGBA?: [[number, number, number, number], [number, number, number, number]], distance?: [number, number], speedR?: [number, number]): Caller {
            const caller = new Caller();
            caller.boxInit(parent, position, sectionSize, sectionRotation, texArr, colorRGBA);
            caller.excludeZ();
            caller.rotateTheZero();

            const _distance = LwgTools.Num.randomNumerical(distance, [0.3, 0.6]);
            const _speedR = LwgTools.Num.randomNumerical(speedR, [0.008, 0.012]);
            const _angle = LwgTools.Num.randomNumerical([0, 360]);
            caller.mat.albedoColorA = 0;
            caller.stateSwitch('m');
            caller.moveFunc = () => {
                caller.fadeIn(0.15);
                caller.positionARXY_R(_angle, _speedR, _distance, () => {
                    caller.stateSwitch('v');
                })
            }
            caller.vinishFunc = () => {
                caller.fadeAway(0.15, 0, () => {
                    caller.stateSwitch('e');
                })
            }
            return;
        }

        /**
         * @export 简单的渐隐消失，用作拖尾
         * @param {(Laya.Sprite3D | Laya.Scene3D)} parent 父节点
         * @param {[number, number, number]} [position] 位置
         * @param {[[number, number, number], [number, number, number]]} [sectionSize] 大小区间
         * @param {number} [staytime] 出现停留时间，默认10
         * @param {number} [vainshASpeed] 消失透明度的速度，默认0.02
         * @param {number} [vainshSSpeed] 消失缩放速度，默认0.02
         * @param {[[number, number, number], [number, number, number]]} [sectionRotation] 旋转角度，默认随机
         * @param {Laya.Texture2D[]} [texArr] 贴图样式，默认星星5
         * @param {[[number, number, number, number], [number, number, number, number]]} [colorRGBA] 颜色区间
         * @return {*}  {_Caller}
         */
        export function fade(parent: Laya.Sprite3D | Laya.Scene3D, position?: [number, number, number], sectionSize?: [[number, number, number], [number, number, number]], staytime?: number, vainshASpeed?: number, vainshSSpeed?: number, sectionRotation?: [[number, number, number], [number, number, number]], texArr?: Laya.Texture2D[], colorRGBA?: [[number, number, number, number], [number, number, number, number]]): Caller {
            const caller = new Caller();
            caller.boxInit(parent, position, sectionSize ? sectionSize : [[0.04, 0.04, 0], [0.04, 0.04, 0]], sectionRotation, texArr, colorRGBA);
            caller.excludeZ();
            const _staytime = staytime ? staytime : 20;
            const _vainshASpeed = vainshASpeed ? vainshASpeed : 0.02;
            const _vainshSSpeed = vainshSSpeed ? vainshSSpeed : 0.02;
            caller.rotateTheZero();
            caller.stateSwitch('m');
            caller.moveFunc = () => {
                if (caller.time > _staytime) {
                    caller.stateSwitch('v');
                }
            }
            caller.vinishFunc = () => {
                caller.scaleX(_vainshSSpeed);
                caller.fadeAway(_vainshASpeed, 0, () => {
                    caller.stateSwitch('e');
                });
            }
            caller.everyFrameFunc = () => {
                caller.box.transform.localScaleY = caller.box.transform.localScaleX;
            }
            return caller;
        }

        export function starsShine(parent: Laya.Sprite3D | Laya.Scene3D, position?: [number, number, number], scopeSize?: [[number, number, number], [number, number, number]], scaleSpeed?: [number, number], maxScale?: [number, number], angelspeed?: [number, number], ASpeed?: [number, number], texArr?: Laya.Texture2D[], colorRGBA?: [[number, number, number, number], [number, number, number, number]]): Caller {
            const caller = new Caller();
            caller.boxInit(parent, position, null, null, texArr ? texArr : [tex2D.星星5.texture2D], colorRGBA ? colorRGBA : [[15, 15, 15, 1], [30, 30, 30, 1]]);
            caller.excludeZ();
            caller.rotateTheZero();
            caller.scaleTheZero();
            caller.randomScopeByPosition(scopeSize);
            caller.mat.albedoColorA = 0;
            const _maxScale = LwgTools.Num.randomNumerical(maxScale, [1, 2]);
            const _scaleSpeed = LwgTools.Num.randomNumerical(scaleSpeed, [0.01, 0.05]);
            const _angelspeed = LwgTools.Num.randomNumerical(angelspeed, [2, 6], true);
            const _ASpeed = LwgTools.Num.randomNumerical(ASpeed, [0.01, 0.05]);
            caller.appearFunc = () => {
                caller.fadeIn(_ASpeed, 1, () => {
                    caller.stateSwitch('m');
                });
                caller.scaleX(_scaleSpeed, 1);
                caller.rotateZ(_angelspeed);
            }
            caller.moveFunc = () => {
                caller.scaleX(_scaleSpeed, _maxScale, () => {
                    caller.stateSwitch('v');
                })
                caller.rotateZ(_angelspeed);
            }
            caller.vinishFunc = () => {
                caller.fadeAway(_ASpeed, 0, () => {
                    caller.stateSwitch('e');
                })
                caller.scaleX(-_scaleSpeed);
                caller.rotateZ(-_angelspeed);
            }
            caller.everyFrameFunc = () => {
                caller.box.transform.localScaleY = caller.box.transform.localScaleX;
            }
            return caller;
        }
    }
}

/**
 * 2D特效
 */
export module LwgEff2D {
    /**
     * 特效元素的图片地址，所有项目都可用
     */
    export enum SkinUrl {
        爱心1 = 'Lwg/Effects/img_aixin1.png',
        爱心2 = "Lwg/Effects/img_aixin2.png",
        爱心3 = "Lwg/Effects/img_aixin3.png",
        花1 = "Lwg/Effects/img_hua1.png",
        花2 = "Lwg/Effects/img_hua2.png",
        花3 = "Lwg/Effects/img_hua3.png",
        花4 = "Lwg/Effects/img_hua4.png",
        星星1 = "Lwg/Effects/img_star1.png",
        星星2 = "Lwg/Effects/img_star2.png",
        星星3 = "Lwg/Effects/img_star3.png",
        星星4 = "Lwg/Effects/img_star4.png",
        星星5 = "Lwg/Effects/img_star5.png",
        星星6 = "Lwg/Effects/img_star6.png",
        星星7 = "Lwg/Effects/img_star7.png",
        星星8 = "Lwg/Effects/img_star8.png",
        菱形1 = "Lwg/Effects/img_rhombus1.png",
        菱形2 = "Lwg/Effects/img_rhombus1.png",
        菱形3 = "Lwg/Effects/img_rhombus1.png",
        矩形1 = "Lwg/Effects/img_rectangle1.png",
        矩形2 = "Lwg/Effects/img_rectangle2.png",
        矩形3 = "Lwg/Effects/img_rectangle3.png",
        雪花1 = "Lwg/Effects/img_xuehua1.png",
        叶子1 = "Lwg/Effects/img_yezi1.png",
        圆形发光1 = "Lwg/Effects/img_yuanfaguang.png",
        圆形1 = "Lwg/Effects/img_yuan1.png",
        方形光圈1 = "Lwg/Effects/img_ui_square_guang1.png",
        方形圆角光圈1 = "Lwg/Effects/img_ui_square_guang2.png",
        圆形小光环 = "Lwg/Effects/img_xiaoguanghuan.png",
        光圈2 = "Lwg/Effects/img_guangquan2.png",
        三角形1 = "Lwg/Effects/img_triangle1.png",
        三角形2 = "Lwg/Effects/img_triangle2.png",
    }

    /**
     * 光圈模块
     * */
    export module Aperture {

        /**光圈模块的图片基类*/
        export class ApertureImage extends Laya.Image {
            constructor(parent: Laya.Sprite, centerPoint: [number, number], size: [number, number], rotation: Array<number>, urlArr: Array<string>, colorRGBA: Array<Array<number>>, zOrder: number) {
                super();
                if (!parent.parent) {
                    return;
                }
                parent.addChild(this);
                centerPoint ? this.pos(centerPoint[0], centerPoint[1]) : this.pos(0, 0);
                this.width = size ? size[0] : 100;
                this.height = size ? size[1] : 100;
                this.pivotX = this.width / 2;
                this.pivotY = this.height / 2;
                this.rotation = rotation ? LwgTools.Num.randomOneBySection(rotation[0], rotation[1]) : LwgTools.Num.randomOneBySection(360);
                this.skin = urlArr ? LwgTools.Arr.randomGetOne(urlArr) : SkinUrl.花3;
                this.zOrder = zOrder ? zOrder : 0;
                this.alpha = 0;
                let RGBA: [number, number, number, number] = [null, null, null, null];
                RGBA[0] = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][0], colorRGBA[1][0]) : LwgTools.Num.randomOneBySection(180, 255);
                RGBA[1] = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][1], colorRGBA[1][1]) : LwgTools.Num.randomOneBySection(10, 180);
                RGBA[2] = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][2], colorRGBA[1][2]) : LwgTools.Num.randomOneBySection(10, 180);
                RGBA[3] = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][3], colorRGBA[1][3]) : LwgTools.Num.randomOneBySection(1, 1);
                LwgColor.colour(this, RGBA);
            }
        }

        /**
         * 从中心点发出一个光圈，类似波浪，根据光圈不同的样式和节奏,通过控制宽高来控制放大多少
         * @param parent 父节点
         * @param centerPoint 发出位置
         * @param size [宽度,高度]，默认100
         * @param minScale 发出位置
         * @param rotation 角度区间[a,b],默认为随机
         * @param urlArr 图片数组，默认为框架中的图片
         * @param colorRGBA 颜色区间[[][]]
         * @param maxScale 最大放大区间[a,b]
         * @param zOrder 层级，默认为0
         * @param speed 速度区间[a,b]，默认0.025，也表示了消失位置，和波浪的大小
         * @param accelerated 加速度,默认为0.0005
         */
        export function continuous(parent: Laya.Sprite, centerPoint?: [number, number], size?: [number, number], minScale?: [number, number], rotation?: Array<number>, urlArr?: Array<string>, colorRGBA?: Array<Array<number>>, zOrder?: number, maxScale?: [number, number], speed?: [number, number], accelerated?: [number, number]): void {
            const Img = new ApertureImage(parent, centerPoint, size, rotation, urlArr, colorRGBA, zOrder);
            let _speed = speed ? LwgTools.Num.randomOneBySection(speed[0], speed[1]) : 0.025;
            let _accelerated = accelerated ? LwgTools.Num.randomOneBySection(accelerated[0], accelerated[1]) : 0.0005;
            if (minScale) {
                Img.scale(minScale[0], minScale[1]);
            } else {
                Img.scale(0, 0);
            }
            const _maxScale = maxScale ? LwgTools.Num.randomOneBySection(maxScale[0], maxScale[1]) : 2;
            let moveCaller = {
                alpha: true,
                scale: false,
                vanish: false
            };
            Img['moveCaller'] = moveCaller;
            let acc = 0;
            LwgTimer.frameLoop(1, moveCaller, () => {
                if (moveCaller.alpha) {
                    Img.alpha += 0.05;
                    acc = 0;
                    if (Img.alpha >= 1) {
                        moveCaller.alpha = false;
                        moveCaller.scale = true;
                    }
                }
                if (moveCaller.scale) {
                    acc += _accelerated;
                    if (Img.scaleX >= _maxScale) {
                        moveCaller.scale = false;
                        moveCaller.vanish = true;
                    }
                }
                if (moveCaller.vanish) {
                    Img.alpha -= 0.015;
                    if (Img.alpha <= 0) {
                        Img.removeSelf();
                        Laya.timer.clearAll(moveCaller);
                    }
                }
                Img.scaleX = Img.scaleY += (_speed + acc);
            })
        }

        /**
            * 从中心点发出一个光圈，类似波浪，根据光圈不同的样式和节奏,通过控制宽高来控制放大多少
            * @param parent 父节点
            * @param centerPoint 发出位置
            * @param size [宽度,高度]，默认100
            * @param minScale 发出位置
            * @param rotation 角度区间[a,b],默认为随机
            * @param urlArr 图片数组，默认为框架中的图片
            * @param colorRGBA 颜色区间[[][]]
            * @param maxScale 最大放大区间[a,b]
            * @param zOrder 层级，默认为0
            * @param speed 速度区间[a,b]，默认0.025，也表示了消失位置，和波浪的大小
            * @param accelerated 加速度,默认为0.0005
            */
        export function _continuousByDs(parent: Laya.Sprite, centerPoint?: [number, number], size?: [number, number], minScale?: [number, number], rotation?: Array<number>, urlArr?: Array<string>, colorRGBA?: Array<Array<number>>, zOrder?: number, maxScale?: [number, number], speed?: [number, number], accelerated?: [number, number]): void {
            const Img = new ApertureImage(parent, centerPoint, size, rotation, urlArr, colorRGBA, zOrder);
            let _speed = speed ? LwgTools.Num.randomOneBySection(speed[0], speed[1]) : 0.025;
            let _accelerated = accelerated ? LwgTools.Num.randomOneBySection(accelerated[0], accelerated[1]) : 0.0005;
            if (minScale) {
                Img.scale(minScale[0], minScale[1]);
            } else {
                Img.scale(0, 0);
            }
            const _maxScale = maxScale ? LwgTools.Num.randomOneBySection(maxScale[0], maxScale[1]) : 2;
            let moveCaller = {
                alpha: true,
                scale: false,
                vanish: false
            };
            Img['moveCaller'] = moveCaller;
            let acc = 0;
            LwgTimer.frameLoop(1, moveCaller, () => {
                if (moveCaller.alpha) {
                    Img.alpha += 0.05;
                    acc = 0;
                    if (Img.alpha >= 1) {
                        moveCaller.alpha = false;
                        moveCaller.scale = true;
                    }
                }
                if (moveCaller.scale) {
                    acc += _accelerated;
                    if (Img.scaleX > _maxScale) {
                        moveCaller.scale = false;
                        moveCaller.vanish = true;
                    }
                }
                if (moveCaller.vanish) {
                    acc -= _accelerated;
                    if (acc <= 0) {
                        acc = 0;
                        Img.alpha -= 0.015;
                        if (Img.alpha <= 0) {
                            Img.removeSelf();
                            Laya.timer.clearAll(moveCaller);
                        }
                    }
                }
                Img.scaleX = Img.scaleY += (_speed + acc);
            })
        }
    }

    /**粒子模块*/
    export module Particle {
        export class ImgBase extends Laya.Image {
            /**
             * 图片初始值设置
             * Creates an instance of ImgBase.
             * @param parent 父节点
             * @param centerPoint 中心点
             * @param sectionWH 以中心点为中心的矩形生成范围[w,h]
             * @param distance 移动距离，区间[a,b]，随机移动一定的距离后消失;
             * @param width 粒子的宽度区间[a,b]
             * @param height 粒子的高度区间[a,b],如果为空，这高度和宽度一样
             * @param rotation 角度区间[a,b]
             * @param urlArr 图片地址集合，默认为框架中随机的样式
             * @param colorRGBA 上色色值区间[[R,G,B,A],[R,G,B,A]]
             * @param zOrder 层级，默认为1000
             */
            constructor(parent: Laya.Sprite, centerPoint: Laya.Point, sectionWH: [number, number], width: [number, number], height: [number, number], rotation: [number, number], urlArr: Array<string>, colorRGBA: [[number, number, number, number], [number, number, number, number]], zOrder: number) {
                super();
                parent = parent ? parent : Laya.stage;
                parent.addChild(this);
                let sectionWidth = sectionWH ? LwgTools.Num.randomOneBySection(sectionWH[0]) : LwgTools.Num.randomOneBySection(200);
                let sectionHeight = sectionWH ? LwgTools.Num.randomOneBySection(sectionWH[1]) : LwgTools.Num.randomOneBySection(50);
                sectionWidth = LwgTools.Num.randomOneHalf() == 0 ? sectionWidth : -sectionWidth;
                sectionHeight = LwgTools.Num.randomOneHalf() == 0 ? sectionHeight : -sectionHeight;
                this.x = centerPoint ? centerPoint.x + sectionWidth : sectionWidth;
                this.y = centerPoint ? centerPoint.y + sectionHeight : sectionHeight;
                this.width = width ? LwgTools.Num.randomOneBySection(width[0], width[1]) : LwgTools.Num.randomOneBySection(20, 50);
                this.height = height ? LwgTools.Num.randomOneBySection(height[0], height[1]) : this.width;
                this.pivotX = this.width / 2;
                this.pivotY = this.height / 2;
                this.skin = urlArr ? LwgTools.Arr.randomGetOne(urlArr) : SkinUrl.圆形1;
                this.rotation = rotation ? LwgTools.Num.randomOneBySection(rotation[0], rotation[1]) : 0;
                this.alpha = 0;
                this.zOrder = zOrder ? zOrder : 1000;
                let RGBA: [number, number, number, number] = [null, null, null, null];
                RGBA[0] = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][0], colorRGBA[1][0]) : LwgTools.Num.randomOneBySection(180, 255);
                RGBA[1] = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][1], colorRGBA[1][1]) : LwgTools.Num.randomOneBySection(30, 180);
                RGBA[2] = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][2], colorRGBA[1][2]) : LwgTools.Num.randomOneBySection(30, 180);
                RGBA[3] = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][3], colorRGBA[1][3]) : LwgTools.Num.randomOneBySection(1, 1);
                LwgColor.colour(this, RGBA);
            }
        }


        /**
         * 雪花,风雪
         * @param {Laya.Sprite} parent 父节点
         * @param {Laya.Point} [centerPoint] 父节点内坐标
         * @param sectionWH 以中心点为中心的矩形生成范围[w,h]
         * @param {Array<number>} [width] 宽区间[a,b]
         * @param {Array<number>} [height] 高区间[a,b]
         * @param {Array<number>} [rotation] 角度区间[a,b]
         * @param {Array<string>} [urlArr] 角度区间[a,b]
         * @param {Array<Array<number>>} [colorRGBA] 角度区间[a,b]
         * @param {number} [zOrder] 层级
         * @param {Array<number>} [distance] 下落距离区间[a,b]
         * @param {[number, number]} [rotationSpeed] 旋转区间[a,b]
         * @param {Array<number>} [speed] 速度区间[a,b]
         * @param {[number, number]} [windX] 风力（X轴偏移速度）区间[a,b]
         */
        export function snow(parent: Laya.Sprite, centerPoint?: Laya.Point, sectionWH?: [number, number], width?: [number, number], height?: [number, number], rotation?: [number, number], urlArr?: Array<string>, colorRGBA?: [[number, number, number, number], [number, number, number, number]], zOrder?: number, distance?: [number, number], rotationSpeed?: [number, number], speed?: [number, number], windX?: [number, number]): Laya.Image {
            let Img = new ImgBase(parent, centerPoint, sectionWH, width, height, rotation, urlArr, colorRGBA, zOrder);
            let _rotationSpeed = rotationSpeed ? LwgTools.Num.randomOneBySection(rotationSpeed[0], rotationSpeed[1]) : LwgTools.Num.randomOneBySection(0, 1);
            _rotationSpeed = LwgTools.Num.randomOneHalf() == 0 ? _rotationSpeed : -_rotationSpeed;
            let speed0 = speed ? LwgTools.Num.randomOneBySection(speed[0], speed[1]) : LwgTools.Num.randomOneBySection(1, 2.5);
            let _windX = windX ? LwgTools.Num.randomOneBySection(windX[0], windX[1]) : 0;
            let moveCaller = {
                alpha: true,
                move: false,
                vinish: false,
            };
            Img['moveCaller'] = moveCaller;
            let distance0 = 0;
            let distance1 = distance ? LwgTools.Num.randomOneBySection(distance[0], distance[1]) : LwgTools.Num.randomOneBySection(100, 300);
            LwgTimer.frameLoop(1, moveCaller, () => {
                Img.x += _windX;
                Img.rotation += _rotationSpeed;
                if (Img.alpha < 1 && moveCaller.alpha) {
                    Img.alpha += 0.05;
                    distance0 = Img.y++;
                    if (Img.alpha >= 1) {
                        moveCaller.alpha = false;
                        moveCaller.move = true;
                    }
                }
                if (distance0 < distance1 && moveCaller.move) {
                    distance0 = Img.y += speed0;
                    if (distance0 >= distance1) {
                        moveCaller.move = false;
                        moveCaller.vinish = true;
                    }
                }
                if (moveCaller.vinish) {
                    Img.alpha -= 0.03;
                    Img.y += speed0;
                    if (Img.alpha <= 0 || speed0 <= 0) {
                        Img.removeSelf();
                        Laya.timer.clearAll(moveCaller);
                    }
                }
            })
            return Img;
        }


        /**
         * 从一个点出发，向下，前半段移动距离和速度以及减速度有关，后半段渐渐消失距离手动设置，在一定角度内向下喷射出去，喷射彩带，烟花，后半段会减速
         * @param parent 父节点
         * @param point 中心点
         * @param width 粒子的位置宽度范围区间[a,b]
         * @param height 粒子的高度区间[a,b],如果为空，高度和宽度一样
         * @param angle 方向区间[a,b]，默认为[0,90]
         * @param urlArr 图片地址集合，默认为框架中的样式
         * @param colorRGBA 上色色值区间[[R,G,B,A],[R,G,B,A]]
         * @param vanishDistance 移动距离区间[a,b]
         * @param moveSpeed  速度区间[a,b]
         * @param gravity  速度区间[a,b],默认[1-5];
         * @param accelerated 加速度区间[a,b]
         * @param rotationSpeed 旋转区间[a,b]
         * @param scaleRotationSpeed 随机一个XY轴向旋转速度区间[a,b]，默认[0,0.25]；
         * @param skewSpeed 随机一个XY斜方向旋转速度区间[a,b]，默认1~10；范围不小于1;
         * @param zOrder 层级，默认为0
         */
        export function downwardSpray(parent: Laya.Sprite, point?: Laya.Point, width?: [number, number], height?: [number, number], angle?: [number, number], urlArr?: Array<string>, colorRGBA?: [[number, number, number, number], [number, number, number, number]], vanishDistance?: [number, number], moveSpeed?: [number, number], gravity?: [number, number], accelerated?: [number, number], rotationSpeed?: [number, number], scaleRotationSpeed?: [number, number], skewSpeed?: [number, number], zOrder?: number): Laya.Image {
            const Img = new ImgBase(parent, point, [0, 0], width, height, null, urlArr, colorRGBA, zOrder);
            const _angle = angle ? LwgTools.Num.randomOneBySection(angle[0], angle[1]) : LwgTools.Num.randomOneBySection(0, 90);
            const p = LwgTools.Point.getNPointByAngle(_angle);
            const _vanishDistance = vanishDistance ? LwgTools.Num.randomOneBySection(vanishDistance[0], vanishDistance[1]) : LwgTools.Num.randomOneBySection(200, 800);
            let _speed = moveSpeed ? LwgTools.Num.randomOneBySection(moveSpeed[0], moveSpeed[1]) : LwgTools.Num.randomOneBySection(10, 30);
            let accelerated0 = accelerated ? LwgTools.Num.randomOneBySection(accelerated[0], accelerated[1]) : LwgTools.Num.randomOneBySection(0.3, 1.5);
            const _gravity = gravity ? LwgTools.Num.randomOneBySection(gravity[0], gravity[1]) : LwgTools.Num.randomOneBySection(1, 5);
            let acc = 0;
            const moveCaller = {
                appear: true,
                move: false,
                dropFp: null as Laya.Point,
                drop: false,
                vinish: false,
                scaleSub: true,
                scaleAdd: false,
                rotateFunc: null as Function,
            };
            moveCaller.rotateFunc = rotatingWay(Img, rotationSpeed, scaleRotationSpeed, skewSpeed);
            Img['moveCaller'] = moveCaller;
            LwgTimer.frameLoop(1, moveCaller, () => {
                moveCaller.rotateFunc();
                if (moveCaller.appear) {
                    Img.alpha += 0.5;
                    if (Img.alpha >= 1) {
                        moveCaller.appear = false;
                        moveCaller.move = true;
                    }
                    Img.x += p.x * _speed;
                    Img.y += p.y * _speed;
                }
                if (moveCaller.move) {
                    acc -= accelerated0;
                    const speed0 = _speed + acc;
                    Img.x += p.x * speed0;
                    Img.y += p.y * speed0;
                    if (speed0 <= 1) {
                        _speed = 1;
                        moveCaller.dropFp = new Laya.Point(Img.x, Img.y);
                        moveCaller.move = false;
                        moveCaller.drop = true;
                    }
                }
                if (moveCaller.drop) {
                    Img.x += p.x * _speed;
                    Img.y += p.y * _speed;
                    if (moveCaller.dropFp.distance(Img.x, Img.y) > _vanishDistance) {
                        moveCaller.drop = false;
                        moveCaller.vinish = true;
                    }
                }
                if (moveCaller.vinish) {
                    Img.alpha -= 0.05;
                    if (Img.alpha <= 0.3) {
                        Img.removeSelf();
                        Laya.timer.clearAll(moveCaller);
                    }
                }
                Img.y += _gravity;
            })
            return Img;
        }

        /**
         * 旋转方式综合
         * @param {Laya.Image} Img 节点
         * @param {[number, number]} [rotationSpeed] 平面旋转
         * @param {[number, number]} [scaleRotationSpeed] 轴向旋转
         * @param {[number, number]} [skewSpeed] 斜轴向旋转
         * @return {*}  {Function}
         */
        function rotatingWay(Img: Laya.Image, rotationSpeed?: [number, number], scaleRotationSpeed?: [number, number], skewSpeed?: [number, number],): Function {

            let _rotationSpeed = rotationSpeed ? LwgTools.Num.randomOneBySection(rotationSpeed[0], rotationSpeed[1]) : LwgTools.Num.randomOneBySection(0, 1);
            _rotationSpeed = LwgTools.Num.randomOneHalf() == 0 ? _rotationSpeed : -_rotationSpeed;

            const _scaleSpeed = scaleRotationSpeed ? LwgTools.Num.randomOneBySection(scaleRotationSpeed[0], scaleRotationSpeed[1]) : LwgTools.Num.randomOneBySection(0, 0.25);
            const _scaleDir = LwgTools.Num.randomOneHalf();

            let _skewSpeed = skewSpeed ? LwgTools.Num.randomOneBySection(skewSpeed[0], skewSpeed[1]) : LwgTools.Num.randomOneBySection(1, 10);
            _skewSpeed = LwgTools.Num.randomOneHalf() === 1 ? _skewSpeed : -_skewSpeed;
            const _skewDir = LwgTools.Num.randomOneHalf();

            const _scaleOrSkew = LwgTools.Num.randomOneHalf();
            var rotateFunc = () => {
                Img.rotation += _rotationSpeed;
                if (_scaleOrSkew === 1) {
                    if (_skewDir === 1) {
                        Img.skewX += _skewSpeed;
                    } else {
                        Img.skewY += _skewSpeed;
                    }
                } else {
                    if (_scaleDir === 1) {
                        if (Img['moveCaller']['scaleSub']) {
                            Img.scaleX -= _scaleSpeed;
                            if (Img.scaleX <= 0) {
                                Img['moveCaller']['scaleSub'] = false;
                            }
                        } else {
                            Img.scaleX += _scaleSpeed;
                            if (Img.scaleX >= 1) {
                                Img['moveCaller']['scaleSub'] = true;
                            }
                        }
                    } else {
                        if (Img['moveCaller']['scaleSub']) {
                            Img.scaleY -= _scaleSpeed;
                            if (Img.scaleY <= 0) {
                                Img['moveCaller']['scaleSub'] = false;
                            }
                        } else {
                            Img.scaleY += _scaleSpeed;
                            if (Img.scaleY >= 1) {
                                Img['moveCaller']['scaleSub'] = true;
                            }
                        }
                    }
                }
            }
            return rotateFunc;
        }

        /**
         * 旋转缓慢下落，类似落叶飘落，无X轴偏移
         * @param {Laya.Sprite} parent 父节点
         * @param {Laya.Point} [centerPoint] 父节点内坐标
         * @param {Array<number>} sectionWH 以中心点为中心的矩形生成范围[w,h]
         * @param {Array<number>} [width] 宽区间[a,b]
         * @param {Array<number>} [height] 高区间[a,b]
         * @param {Array<string>} [urlArr] 图片地址[a,b]
         * @param {Array<Array<number>>} [colorRGBA] 颜色区间[a,b]
         * @param {Array<number>} [distance] 下落距离区间[a,b],默认[100, 300]
         * @param {Array<number>} [moveSpeed] 速度区间[a,b],默认[1, 2.5]
         * @param {[number, number]} [scaleRotationSpeed] 随机一个XY轴向旋转速度区间[a,b]，默认[0,0.25]；
         * @param {[number, number]} [skewSpeed] 随机一个XY斜方向旋转速度区间[a,b]，默认1~10；范围不小于1
         * @param {[number, number]} [rotationSpeed] 旋转区间[a,b]
         * @param {number} [zOrder] 层级
         */
        export function fallingRotate(parent: Laya.Sprite, centerPoint?: Laya.Point, sectionWH?: [number, number], width?: [number, number], height?: [number, number], urlArr?: Array<string>, colorRGBA?: [[number, number, number, number], [number, number, number, number]], distance?: [number, number], moveSpeed?: [number, number], scaleRotationSpeed?: [number, number], skewSpeed?: [number, number], rotationSpeed?: [number, number], zOrder?: number): Laya.Image {
            const Img = new ImgBase(parent, centerPoint, sectionWH, width, height, null, urlArr, colorRGBA, zOrder);
            const _moveSpeed = moveSpeed ? LwgTools.Num.randomOneBySection(moveSpeed[0], moveSpeed[1]) : LwgTools.Num.randomOneBySection(1, 2.5);

            let _distance0 = 0;
            const _distance = distance ? LwgTools.Num.randomOneBySection(distance[0], distance[1]) : LwgTools.Num.randomOneBySection(100, 300);
            const moveCaller = {
                appear: true,
                move: false,
                vinish: false,
                scaleSub: true,
                scaleAdd: false,
                rotateFunc: null as Function,
            };
            moveCaller.rotateFunc = rotatingWay(Img, rotationSpeed, scaleRotationSpeed, skewSpeed);
            Img['moveCaller'] = moveCaller;
            LwgTimer.frameLoop(1, moveCaller, () => {
                moveCaller.rotateFunc();
                if (moveCaller.appear) {
                    Img.alpha += 0.05;
                    Img.y += _moveSpeed / 2;
                    if (Img.alpha >= 1) {
                        moveCaller.appear = false;
                        moveCaller.move = true;
                    }
                }
                if (moveCaller.move) {
                    Img.y += _moveSpeed;
                    _distance0 += _moveSpeed;
                    if (_distance0 >= _distance) {
                        moveCaller.move = false;
                        moveCaller.vinish = true;
                    }
                }
                if (moveCaller.vinish) {
                    Img.alpha -= 0.01;
                    Img.y += _moveSpeed;
                    if (Img.alpha <= 0) {
                        Img.removeSelf();
                        Laya.timer.clearAll(moveCaller);
                    }
                }
            })
            return Img;
        }

        /**
         * 发射一个垂直向下的粒子，类似于火星下落熄灭，水滴下落，不是下雨状态
         * @param parent 父节点
         * @param centerPoint 中心点
         * @param sectionWH 以中心点为中心的矩形生成范围[w,h]
         * @param width 粒子的宽度区间[a,b]
         * @param height 粒子的高度区间[a,b],如果为空，这高度和宽度一样
         * @param rotation 角度旋转[a,b]
         * @param urlArr 图片地址集合，默认为框架中随机的样式
         * @param colorRGBA 上色色值区间[[R,G,B,A],[R,G,B,A]]
         * @param zOrder 层级，默认为0
         * @param distance 移动距离，区间[a,b]，在其中随机移动一定的距离后消失,默认[100,300]
         * @param speed 速度区间[a,b],默认[4,8]
         * @param accelerated 加速度区间[a,b],默认[0.25, 0.45];
         */
        export function fallingVertical(parent: Laya.Sprite, centerPoint?: Laya.Point, sectionWH?: [number, number], width?: [number, number], height?: [number, number], rotation?: [number, number], urlArr?: Array<string>, colorRGBA?: [[number, number, number, number], [number, number, number, number]], zOrder?: number, distance?: [number, number], speed?: [number, number], accelerated?: [number, number]): Laya.Image {
            let Img = new ImgBase(parent, centerPoint, sectionWH, width, height, rotation, urlArr, colorRGBA, zOrder);
            let speed0 = speed ? LwgTools.Num.randomOneBySection(speed[0], speed[1]) : LwgTools.Num.randomOneBySection(4, 8);
            let accelerated0 = accelerated ? LwgTools.Num.randomOneBySection(accelerated[0], accelerated[1]) : LwgTools.Num.randomOneBySection(0.25, 0.45);
            let acc = 0;
            let moveCaller = {
                alpha: true,
                move: false,
                vinish: false,
            };
            Img['moveCaller'] = moveCaller;
            let distance1 = distance ? LwgTools.Num.randomOneBySection(distance[0], distance[1]) : LwgTools.Num.randomOneBySection(100, 300);
            let fY = Img.y;
            LwgTimer.frameLoop(1, moveCaller, () => {
                if (Img.alpha < 1 && moveCaller.alpha) {
                    Img.alpha += 0.04;
                    if (Img.alpha >= 1) {
                        moveCaller.alpha = false;
                        moveCaller.move = true;
                    }
                }
                if (!moveCaller.alpha) {
                    acc += accelerated0;
                    Img.y += (speed0 + acc);
                }
                if (!moveCaller.alpha && moveCaller.move) {
                    if (Img.y - fY >= distance1) {
                        moveCaller.move = false;
                        moveCaller.vinish = true;
                    }
                }
                if (moveCaller.vinish) {
                    Img.alpha -= 0.03;
                    if (Img.alpha <= 0) {
                        Laya.timer.clearAll(moveCaller);
                        Img.removeSelf();
                    }
                }
            })
            return Img;
        }
        /**
         * 发射一个垂直向上的粒子和 _fallingVertical相反
         * @param parent 父节点
         * @param centerPoint 中心点
         * @param sectionWH 以中心点为中心的矩形生成范围[w,h]
         * @param width 粒子的宽度区间[a,b]
         * @param height 粒子的高度区间[a,b],如果为空，这高度和宽度一样
         * @param rotation 角度旋转[a,b]
         * @param urlArr 图片地址集合，默认为框架中随机的样式
         * @param colorRGBA 上色色值区间[[R,G,B,A],[R,G,B,A]]
         * @param zOrder 层级，默认为0
         * @param distance 移动距离，区间[a,b]，在其中随机移动一定的距离后消失,默认[100,300]
         * @param speed 速度区间[a,b],默认[4,8]
         * @param accelerated 加速度区间[a,b],默认[0.25, 0.45];
         */
        export function fallingVertical_Reverse(parent: Laya.Sprite, centerPoint?: Laya.Point, sectionWH?: [number, number], width?: [number, number], height?: [number, number], rotation?: [number, number], urlArr?: Array<string>, colorRGBA?: [[number, number, number, number], [number, number, number, number]], zOrder?: number, distance?: [number, number], speed?: [number, number], accelerated?: [number, number]): Laya.Image {
            let Img = new ImgBase(parent, centerPoint, sectionWH, width, height, rotation, urlArr, colorRGBA, zOrder);
            let speed0 = speed ? LwgTools.Num.randomOneBySection(speed[0], speed[1]) : LwgTools.Num.randomOneBySection(4, 8);
            let accelerated0 = accelerated ? LwgTools.Num.randomOneBySection(accelerated[0], accelerated[1]) : LwgTools.Num.randomOneBySection(0.25, 0.45);
            let acc = 0;
            let moveCaller = {
                alpha: true,
                move: false,
                vinish: false,
            };
            Img['moveCaller'] = moveCaller;
            let distance1 = distance ? LwgTools.Num.randomOneBySection(distance[0], distance[1]) : LwgTools.Num.randomOneBySection(100, 300);
            let fY = Img.y;
            LwgTimer.frameLoop(1, moveCaller, () => {
                if (Img.alpha < 1 && moveCaller.alpha) {
                    Img.alpha += 0.04;
                    if (Img.alpha >= 1) {
                        moveCaller.alpha = false;
                        moveCaller.move = true;
                    }
                }
                if (!moveCaller.alpha) {
                    acc += accelerated0;
                    Img.y += (speed0 + acc);
                }
                if (!moveCaller.alpha && moveCaller.move) {
                    if (Img.y - fY <= distance1) {
                        moveCaller.move = false;
                        moveCaller.vinish = true;
                    }
                }
                if (moveCaller.vinish) {
                    Img.alpha -= 0.03;
                    if (Img.alpha <= 0) {
                        Laya.timer.clearAll(moveCaller);
                        Img.removeSelf();
                    }
                }
            })
            return Img;
        }
        /**
         * 发射一个徐徐向上的粒子，类似于蒸汽上升，烟雾上升，光点上升，气球上升
         * @param parent 父节点
         * @param caller 执行域
         * @param centerPoint 中心点
         * @param sectionWH 以中心点为中心的矩形生成范围[w,h]
         * @param rotation 角度区间，默认为360
         * @param width 粒子的宽度区间[a,b]
         * @param height 粒子的高度区间[a,b],如果为空，这高度和宽度一样
         * @param urlArr 图片地址集合，默认为框架中随机的样式
         * @param colorRGBA 上色色值区间[[R,G,B,A],[R,G,B,A]]
         * @param speed  速度区间[a,b]
         * @param accelerated 加速度区间[a,b]
         * @param zOrder 层级，默认为0
         */
        export function slowlyUp(parent: Laya.Sprite, centerPoint?: Laya.Point, sectionWH?: [number, number], width?: [number, number], height?: [number, number], rotation?: [number, number], urlArr?: Array<string>, colorRGBA?: [[number, number, number, number], [number, number, number, number]], zOrder?: number, distance?: [number, number], speed?: [number, number], accelerated?: [number, number]): Laya.Image {
            let Img = new ImgBase(parent, centerPoint, sectionWH, width, height, rotation, urlArr, colorRGBA, zOrder);
            let speed0 = speed ? LwgTools.Num.randomOneBySection(speed[0], speed[1]) : LwgTools.Num.randomOneBySection(1.5, 2);
            let accelerated0 = accelerated ? LwgTools.Num.randomOneBySection(accelerated[0], accelerated[1]) : LwgTools.Num.randomOneBySection(0.001, 0.005);
            let acc = 0;
            let moveCaller = {
                alpha: true,
                move: false,
                vinish: false,
            };
            Img['moveCaller'] = moveCaller;
            let fy = Img.y;
            let distance0 = 0;
            let distance1 = distance ? LwgTools.Num.randomOneBySection(distance[0], distance[1]) : LwgTools.Num.randomOneBySection(-250, -600);
            LwgTimer.frameLoop(1, moveCaller, () => {
                if (Img.alpha < 1 && moveCaller.alpha) {
                    Img.alpha += 0.03;
                    if (Img.alpha >= 1) {
                        moveCaller.alpha = false;
                        moveCaller.move = true;
                    }
                }
                if (distance0 > distance1 && moveCaller.move) {

                } else {
                    moveCaller.move = false;
                    moveCaller.vinish = true;
                }
                if (moveCaller.vinish) {
                    Img.alpha -= 0.02;
                    Img.scaleX -= 0.005;
                    Img.scaleY -= 0.005;
                    if (Img.alpha <= 0) {
                        Img.removeSelf();
                        Laya.timer.clearAll(moveCaller);
                    }
                }
                acc += accelerated0;
                Img.y -= (speed0 + acc);
                distance0 = fy - Img.y;
            })
            return Img;
        }


        /**
          * 从圆点出发，整个生命周期为速度和距离有关，速度越快，距离越长，如果是多个，四周，喷射，花型烟花爆炸
          * @param parent 父节点
          * @param centerPoint 发射点默认(0,0);
          * @param width 粒子的宽度区间[a,b]
          * @param height 粒子的高度区间[a,b],如果为空，这高度和宽度一样
          * @param rotation 初始角度默认[0,360]
          * @param urlArr 图片地址集合，默认为框架中随机的样式
          * @param colorRGBA 上色色值区间[[R,G,B,A],[R,G,B,A]]
          * @param distance 移动距离区间[a,b]，默认为[100, 200]
          * @param time 生命周期,时间[a,b]为帧数
          * @param moveAngle 移动方向角度区间，默认为[0，360]
          * @param rotationSpeed 旋转速度，默认为[0, 20]
          * @param zOrder 层级，默认为1000,在最上层
          */
        export function sprayRound(parent: Laya.Sprite, centerPoint?: Laya.Point, width?: [number, number], height?: [number, number], rotation?: [number, number], urlArr?: Array<string>, colorRGBA?: [[number, number, number, number], [number, number, number, number]], distance?: [number, number], time?: [number, number], moveAngle?: [number, number], rotationSpeed?: [number, number], zOrder?: number): Laya.Image {
            let Img = new ImgBase(parent, centerPoint, [0, 0], width, height, rotation, urlArr, colorRGBA, zOrder);
            let centerPoint0 = centerPoint ? centerPoint : new Laya.Point(0, 0);

            let radius = 0;

            const _time = time ? LwgTools.Num.randomOneBySection(time[0], time[1]) : LwgTools.Num.randomOneBySection(30, 50);

            const _distance = distance ? LwgTools.Num.randomOneBySection(distance[0], distance[1]) : LwgTools.Num.randomOneBySection(100, 200);

            const _speed = _distance / _time;

            const _angle = moveAngle ? LwgTools.Num.randomOneBySection(moveAngle[0], moveAngle[1]) : LwgTools.Num.randomOneBySection(0, 360);

            let rotationSpeed0 = rotationSpeed ? LwgTools.Num.randomOneBySection(rotationSpeed[0], rotationSpeed[1]) : LwgTools.Num.randomOneBySection(0, 20);
            rotationSpeed0 = LwgTools.Num.randomOneHalf() == 0 ? rotationSpeed0 : -rotationSpeed0;

            const vinishTime = LwgTools.Num.randomOneInt(60);
            const subAlpha = 1 / vinishTime;

            let moveCaller = {
                alpha: true,
                move: false,
                vinish: false,
            };
            Img['moveCaller'] = moveCaller;
            LwgTimer.frameLoop(1, moveCaller, () => {
                Img.rotation += rotationSpeed0;
                if (Img.alpha < 1 && moveCaller.alpha) {
                    Img.alpha += 0.5;
                    if (Img.alpha >= 1) {
                        moveCaller.alpha = false;
                        moveCaller.move = true;
                    }
                } else {
                    if (!moveCaller.vinish) {
                        radius += _speed;
                        let point = LwgTools.Point.getRoundPointOld(_angle, radius, centerPoint0);
                        Img.pos(point.x, point.y);
                        if (radius > _distance) {
                            moveCaller.move = false;
                            moveCaller.vinish = true;
                        }
                    } else {
                        Img.alpha -= subAlpha;
                        if (Img.alpha <= 0) {
                            Img.removeSelf();
                            Laya.timer.clearAll(moveCaller);
                        }
                        radius += _speed / 2;
                        let point = LwgTools.Point.getRoundPointOld(_angle, radius, centerPoint0);
                        Img.pos(point.x, point.y);
                    }
                }
            })
            return Img;
        }


        /**
          * 单个，四周，喷射，旋转爆炸
          * @param parent 父节点
          * @param centerPoint 发射点默认(0,0);
          * @param width 粒子的宽度区间[a,b]
          * @param height 粒子的高度区间[a,b],如果为空，这高度和宽度一样
          * @param rotation 初始角度默认[0,360]
          * @param urlArr 图片地址集合，默认为框架中随机的样式
          * @param colorRGBA 上色色值区间[[R,G,B,A],[R,G,B,A]]
          * @param distance 移动距离区间[a,b]，默认为[100, 200]
          * @param moveAngle 移动方向角度区间，默认为[0，360]
          * @param rotationSpeed 旋转速度，默认为[0, 20]
          * @param speed  速度区间[a,b]，默认为[3, 10]
          * @param accelerated 加速度区间[a,b]，默认为[0.25, 0.45]
          * @param zOrder 层级，默认为1000,在最上层
          */
        export function spray(parent: Laya.Sprite, centerPoint?: Laya.Point, width?: [number, number], height?: [number, number], rotation?: [number, number], urlArr?: Array<string>, colorRGBA?: [[number, number, number, number], [number, number, number, number]], distance?: [number, number], moveAngle?: [number, number], rotationSpeed?: [number, number], speed?: [number, number], accelerated?: [number, number], zOrder?: number): Laya.Image {
            let Img = new ImgBase(parent, centerPoint, [0, 0], width, height, rotation, urlArr, colorRGBA, zOrder);
            let centerPoint0 = centerPoint ? centerPoint : new Laya.Point(0, 0);
            let speed0 = speed ? LwgTools.Num.randomOneBySection(speed[0], speed[1]) : LwgTools.Num.randomOneBySection(3, 10);
            let accelerated0 = accelerated ? LwgTools.Num.randomOneBySection(accelerated[0], accelerated[1]) : LwgTools.Num.randomOneBySection(0.25, 0.45);
            let acc = 0;
            let moveCaller = {
                alpha: true,
                move: false,
                vinish: false,
            };
            Img['moveCaller'] = moveCaller;
            let radius = 0;
            let distance1 = distance ? LwgTools.Num.randomOneBySection(distance[0], distance[1]) : LwgTools.Num.randomOneBySection(100, 200);
            let angle0 = moveAngle ? LwgTools.Num.randomOneBySection(moveAngle[0], moveAngle[1]) : LwgTools.Num.randomOneBySection(0, 360);
            let rotationSpeed0 = rotationSpeed ? LwgTools.Num.randomOneBySection(rotationSpeed[0], rotationSpeed[1]) : LwgTools.Num.randomOneBySection(0, 20);
            rotationSpeed0 = LwgTools.Num.randomOneHalf() == 0 ? rotationSpeed0 : -rotationSpeed0;
            LwgTimer.frameLoop(1, moveCaller, () => {
                Img.rotation += rotationSpeed0;
                if (Img.alpha < 1 && moveCaller.alpha) {
                    Img.alpha += 0.5;
                    if (Img.alpha >= 1) {
                        moveCaller.alpha = false;
                        moveCaller.move = true;
                    }
                } else {
                    if (radius < distance1 && moveCaller.move) {

                    } else {
                        moveCaller.move = false;
                        moveCaller.vinish = true;
                    }
                    if (moveCaller.vinish) {
                        Img.alpha -= 0.05;
                        if (Img.alpha <= 0.3) {
                            Img.removeSelf();
                            Laya.timer.clearAll(moveCaller);
                        }
                    }
                    acc += accelerated0;
                    radius += speed0 + acc;
                    let point = LwgTools.Point.getRoundPointOld(angle0, radius, centerPoint0);
                    Img.pos(point.x, point.y);
                }
            })
            return Img;
        }

        /**
          * 从一个盒子的周围发射不同方向的粒子
          * @param parent 父节点
          * @param centerPoint 中心点
          * @param sectionWH 以中心点为中心的矩形生成范围[w,h]
          * @param width 粒子的位置宽度范围区间[a,b]
          * @param height 粒子的高度区间[a,b],如果为空，这高度和宽度一样
          * @param rotation 角度区间[a,b]，默认为360
          * @param urlArr 图片地址集合，默认为框架中的样式
          * @param colorRGBA 上色色值区间[[R,G,B,A],[R,G,B,A]]
          * @param zOrder 层级，默认为0
          * @param curtailAngle 角度缩减0~90，填写90则是垂直于每个边
          * @param distance 移动距离区间[a,b]
          * @param rotateSpeed 旋转速度
          * @param speed  速度区间[a,b]
          * @param accelerated 加速度区间[a,b]
          */
        export function outsideBox(parent: Laya.Sprite, centerPoint?: Laya.Point, sectionWH?: [number, number], width?: [number, number], height?: [number, number], rotation?: [number, number], urlArr?: Array<string>, colorRGBA?: [[number, number, number, number], [number, number, number, number]], zOrder?: number, curtailAngle?: number, distance?: [number, number], rotateSpeed?: [number, number], speed?: [number, number], accelerated?: [number, number]): Laya.Image {
            let Img = new ImgBase(parent, centerPoint, [0, 0], width, height, rotation, urlArr, colorRGBA, zOrder);
            let _angle: number = 0;
            sectionWH = sectionWH ? sectionWH : [100, 100];
            let fixedXY = LwgTools.Num.randomOneHalf() == 0 ? 'x' : 'y';
            curtailAngle = curtailAngle ? curtailAngle : 60;
            if (fixedXY == 'x') {
                if (LwgTools.Num.randomOneHalf() == 0) {
                    Img.x += sectionWH[0];
                    _angle = LwgTools.Num.randomOneHalf() == 0 ? LwgTools.Num.randomOneBySection(0, 90 - curtailAngle) : LwgTools.Num.randomOneBySection(0, -90 + curtailAngle);
                } else {
                    Img.x -= sectionWH[0];
                    _angle = LwgTools.Num.randomOneBySection(90 + curtailAngle, 270 - curtailAngle);
                }
                Img.y += LwgTools.Num.randomOneBySection(-sectionWH[1], sectionWH[1]);
            } else {
                if (LwgTools.Num.randomOneHalf() == 0) {
                    Img.y -= sectionWH[1];
                    _angle = LwgTools.Num.randomOneBySection(180 + curtailAngle, 360 - curtailAngle);
                } else {
                    Img.y += sectionWH[1];
                    _angle = LwgTools.Num.randomOneBySection(0 + curtailAngle, 180 - curtailAngle);
                }
                Img.x += LwgTools.Num.randomOneBySection(-sectionWH[0], sectionWH[0]);
            }
            let p = LwgTools.Point.getNPointByAngle(_angle);
            let _distance = distance ? LwgTools.Num.randomOneBySection(distance[0], distance[1]) : LwgTools.Num.randomOneBySection(20, 50);
            let speed0 = speed ? LwgTools.Num.randomOneBySection(speed[0], speed[1]) : LwgTools.Num.randomOneBySection(0.5, 1);
            let accelerated0 = accelerated ? LwgTools.Num.randomOneBySection(accelerated[0], accelerated[1]) : LwgTools.Num.randomOneBySection(0.25, 0.45);
            let acc = 0;
            let rotationSpeed0 = rotateSpeed ? LwgTools.Num.randomOneBySection(rotateSpeed[0], rotateSpeed[1]) : LwgTools.Num.randomOneBySection(0, 20);
            let firstP = new Laya.Point(Img.x, Img.y);
            let moveCaller = {
                alpha: true,
                move: false,
                vinish: false,
            };
            Img['moveCaller'] = moveCaller;
            LwgTimer.frameLoop(1, moveCaller, () => {
                Img.rotation += rotationSpeed0;
                if (moveCaller.alpha) {
                    Img.alpha += 0.5;
                    if (Img.alpha >= 1) {
                        moveCaller.alpha = false;
                        moveCaller.move = true;
                    }
                } else if (moveCaller.move) {
                    if (firstP.distance(Img.x, Img.y) >= _distance) {
                        moveCaller.move = false;
                        moveCaller.vinish = true;
                    }
                } else if (moveCaller.vinish) {
                    Img.alpha -= 0.05;
                    if (Img.alpha <= 0.3) {
                        Img.removeSelf();
                        Laya.timer.clearAll(moveCaller);
                    }
                }
                if (!moveCaller.alpha) {
                    acc += accelerated0;
                    Img.x += p.x * (speed0 + acc);
                    Img.y += p.y * (speed0 + acc);
                }
            })
            return Img;
        }

        /**
         * 单个，移动到目标位置，停止，然后再次移动一点，然后消失
         * @param parent 父节点
         * @param caller 执行域
         * @param centerPoint 中心点
         * @param width 粒子的宽度区间[a,b]
         * @param height 粒子的高度区间[a,b],如果为空，这高度和宽度一样
         * @param rotation 旋转角度
         * @param angle 角度区间，默认为360
         * @param urlArr 图片地址集合，默认为框架中随机的样式
         * @param colorRGBA 上色色值区间[[R,G,B,A],[R,G,B,A]]
         * @param distance 移动距离区间[a,b]
         * @param rotationSpeed 旋转速度
         * @param speed  速度区间[a,b]
         * @param accelerated 加速度区间[a,b]
         * @param zOrder 层级，默认为0
         */
        export function moveToTargetToMove(parent: Laya.Sprite, centerPoint?: Laya.Point, width?: [number, number], height?: [number, number], rotation?: [number, number], angle?: [number, number], urlArr?: Array<string>, colorRGBA?: [[number, number, number, number], [number, number, number, number]], zOrder?: number, distance1?: [number, number], distance2?: [number, number], rotationSpeed?: [number, number], speed?: [number, number], accelerated?: [number, number]): Laya.Image {
            let Img = new ImgBase(parent, centerPoint, [0, 0], width, height, rotation, urlArr, colorRGBA, zOrder);
            let centerPoint0 = centerPoint ? centerPoint : new Laya.Point(0, 0);
            let speed0 = speed ? LwgTools.Num.randomOneBySection(speed[0], speed[1]) : LwgTools.Num.randomOneBySection(5, 6);
            let accelerated0 = accelerated ? LwgTools.Num.randomOneBySection(accelerated[0], accelerated[1]) : LwgTools.Num.randomOneBySection(0.25, 0.45);
            let acc = 0;
            let moveCaller = {
                alpha: true,
                move1: false,
                stop: false,
                move2: false,
                vinish: false,
            };
            Img['moveCaller'] = moveCaller;
            let radius = 0;
            let dis1 = distance1 ? LwgTools.Num.randomOneBySection(distance1[0], distance1[1]) : LwgTools.Num.randomOneBySection(100, 200);
            let dis2 = distance2 ? LwgTools.Num.randomOneBySection(distance2[0], distance2[1]) : LwgTools.Num.randomOneBySection(100, 200);

            let angle0 = angle ? LwgTools.Num.randomOneBySection(angle[0], angle[1]) : LwgTools.Num.randomOneBySection(0, 360);
            Img.rotation = angle0 - 90;
            let rotationSpeed0 = rotationSpeed ? LwgTools.Num.randomOneBySection(rotationSpeed[0], rotationSpeed[1]) : LwgTools.Num.randomOneBySection(0, 20);
            LwgTimer.frameLoop(1, moveCaller, () => {
                if (moveCaller.alpha) {
                    acc += accelerated0;
                    radius += speed0 + acc;
                    Img.alpha += 0.5;
                    if (Img.alpha >= 1) {
                        moveCaller.alpha = false;
                        moveCaller.move1 = true;
                    }
                } else if (moveCaller.move1) {
                    acc += accelerated0;
                    radius += speed0 + acc;
                    if (radius >= dis1) {
                        moveCaller.move1 = false;
                        moveCaller.stop = true;
                    }
                } else if (moveCaller.stop) {
                    acc -= 0.3;
                    radius += 0.1;
                    if (acc <= 0) {
                        moveCaller.stop = false;
                        moveCaller.move2 = true;
                    }
                } else if (moveCaller.move2) {
                    acc += accelerated0 / 2;
                    radius += speed0 + acc;
                    if (radius >= dis1 + dis2) {
                        moveCaller.move2 = false;
                        moveCaller.vinish = true;
                    }
                } else if (moveCaller.vinish) {
                    radius += 0.5;
                    Img.alpha -= 0.05;
                    if (Img.alpha <= 0) {
                        Img.removeSelf();
                        Laya.timer.clearAll(moveCaller);
                    }
                }
                let point = LwgTools.Point.getRoundPointOld(angle0, radius, centerPoint0);
                Img.pos(point.x, point.y);
            })
            return Img;
        }

        /**
         * 以同一个中心点，随机半径的圆形中，发射一个粒子，运动到中心点后消失
         * @param parent 父节点
         * @param caller 执行域
         * @param centerPoint 中心点
         * @param radius 半径区间[a,b]
         * @param rotation 角度区间，默认为360
         * @param width 粒子的宽度区间[a,b]
         * @param height 粒子的高度区间[a,b],如果为空，这高度和宽度一样
         * @param urlArr 图片地址集合，默认为框架中随机的样式
         * @param speed 吸入速度区间[a,b]
         * @param accelerated 加速度区间[a,b]
         * @param zOrder 层级，默认为0
         */
        export function annularInhalation(parent, centerPoint: Laya.Point, radius: Array<number>, rotation?: Array<number>, width?: Array<number>, height?: Array<number>, urlArr?: Array<string>, speed?: Array<number>, accelerated?: number, zOrder?: number): Laya.Image {
            let Img = new Laya.Image();
            parent.addChild(Img);
            width = width ? width : [25, 50];
            Img.width = LwgTools.Num.randomCountBySection(width[0], width[1])[0];
            Img.height = height ? LwgTools.Num.randomCountBySection(height[0], height[1])[0] : Img.width;
            Img.pivotX = Img.width / 2;
            Img.pivotY = Img.height / 2;
            Img.skin = urlArr ? LwgTools.Arr.randomGetOut(urlArr)[0] : SkinUrl[LwgTools.Num.randomCountBySection(0, 12)[0]];
            let radius0 = LwgTools.Num.randomCountBySection(radius[0], radius[1])[0];
            Img.alpha = 0;
            let speed0 = speed ? LwgTools.Num.randomCountBySection(speed[0], speed[1])[0] : LwgTools.Num.randomCountBySection(5, 10)[0];
            let angle = rotation ? LwgTools.Num.randomCountBySection(rotation[0], rotation[1])[0] : LwgTools.Num.randomCountBySection(0, 360)[0];
            let caller = {};
            let acc = 0;
            accelerated = accelerated ? accelerated : 0.35;
            LwgTimer.frameLoop(1, caller, () => {
                if (Img.alpha < 1) {
                    Img.alpha += 0.05;
                    acc += (accelerated / 5);
                    radius0 -= (speed0 / 2 + acc);
                } else {
                    acc += accelerated;
                    radius0 -= (speed0 + acc);
                }
                let point = LwgTools.Point.getRoundPointOld(angle, radius0, centerPoint);
                Img.pos(point.x, point.y);
                if (point.distance(centerPoint.x, centerPoint.y) <= 20 || point.distance(centerPoint.x, centerPoint.y) >= 1000) {
                    Img.removeSelf();
                    Laya.timer.clearAll(caller);
                }
            })
            return Img;
        }
    }

    /**闪烁*/
    export module Glitter {
        export class GlitterImage extends Laya.Image {
            constructor(parent: Laya.Sprite, centerPos: Laya.Point, radiusXY: Array<number>, urlArr: Array<string>, colorRGBA: Array<Array<number>>, width: Array<number>, height: Array<number>, zOder: number) {
                super();
                if (!parent.parent) {
                    return;
                }
                parent.addChild(this);
                this.skin = urlArr ? LwgTools.Arr.randomGetOne(urlArr) : SkinUrl.星星1;
                this.width = width ? LwgTools.Num.randomOneBySection(width[0], width[1]) : 80;
                this.height = height ? LwgTools.Num.randomOneBySection(height[0], height[1]) : this.width;
                this.pivotX = this.width / 2;
                this.pivotY = this.height / 2;
                let p = radiusXY ? LwgTools.Point.randomPointByCenter(centerPos, radiusXY[0], radiusXY[1], 1) : LwgTools.Point.randomPointByCenter(centerPos, 100, 100, 1);
                this.pos(p[0].x, p[0].y);
                const RGBA: [number, number, number, number] = [null, null, null, null];
                RGBA[0] = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][0], colorRGBA[1][0]) : LwgTools.Num.randomOneBySection(10, 255);
                RGBA[1] = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][1], colorRGBA[1][1]) : LwgTools.Num.randomOneBySection(200, 255);
                RGBA[2] = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][2], colorRGBA[1][2]) : LwgTools.Num.randomOneBySection(10, 255);
                RGBA[3] = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][3], colorRGBA[1][3]) : LwgTools.Num.randomOneBySection(1, 1);
                LwgColor.colour(this, RGBA);
                this.alpha = 0;
                this.zOrder = zOder ? zOder : 1000;
            }
        }

        /**
         * 在一个点内的随机范围内，创建一个星星，闪烁后消失
         * @param parent 父节点
         * @param centerPos 中心点
         * @param radiusXY X,Y轴半径，默认问100
         * @param urlArr 图片地址[]，默认为星星图片
         * @param colorRGBA 上色区间[[][]]
         * @param width [a,b];
         * @param height [a,b]如果为null则为width;
         * @param scale  放大到区间 [a,b]
         * @param speed  闪烁速度区间[a,b],默认[0.01,0.02]
         * @param rotateSpeed 旋转速率区间[a,b],默认为正负5度
         */
        export function blinkStar(parent: Laya.Sprite, centerPos?: Laya.Point, radiusXY?: Array<number>, urlArr?: Array<string>, colorRGBA?: Array<Array<number>>, width?: Array<number>, height?: Array<number>, scale?: Array<number>, speed?: Array<number>, rotateSpeed?: Array<number>, zOder?: number): Laya.Image {
            let Img = new GlitterImage(parent, centerPos, radiusXY, urlArr, colorRGBA, width, height, zOder);
            // 最大放大大小
            Img.scaleX = 0;
            Img.scaleY = 0;
            let _scale = scale ? LwgTools.Num.randomOneBySection(scale[0], scale[1]) : LwgTools.Num.randomOneBySection(0.8, 1.2);
            let _speed = speed ? LwgTools.Num.randomOneBySection(speed[0], speed[1]) : LwgTools.Num.randomOneBySection(0.01, 0.02);
            let _rotateSpeed = rotateSpeed ? LwgTools.Num.randomOneInt(rotateSpeed[0], rotateSpeed[1]) : LwgTools.Num.randomOneInt(0, 5);
            _rotateSpeed = LwgTools.Num.randomOneHalf() == 0 ? -_rotateSpeed : _rotateSpeed;
            let moveCaller = {
                appear: true,
                scale: false,
                vanish: false,
            };
            Img['moveCaller'] = moveCaller;
            var ani = () => {
                if (moveCaller.appear) {
                    Img.alpha += 0.1;
                    Img.rotation += _rotateSpeed;
                    Img.scaleX = Img.scaleY += _speed;
                    if (Img.alpha >= 1) {
                        moveCaller.appear = false;
                        moveCaller.scale = true;
                    }
                } else if (moveCaller.scale) {
                    Img.rotation += _rotateSpeed;
                    Img.scaleX = Img.scaleY += _speed;
                    if (Img.scaleX > _scale) {
                        moveCaller.scale = false;
                        moveCaller.vanish = true;
                    }
                } else if (moveCaller.vanish) {
                    Img.rotation -= _rotateSpeed;
                    Img.alpha -= 0.015;
                    Img.scaleX -= 0.01;
                    Img.scaleY -= 0.01;
                    if (Img.scaleX <= 0) {
                        Img.removeSelf();
                        Laya.timer.clearAll(moveCaller);
                    }
                }
            }
            Laya.timer.frameLoop(1, moveCaller, ani);
            return Img;
        }

        /**
       * 渐隐渐出循环闪光
       * @param parent 父节点
       * @param x x位置
       * @param y y位置
       * @param width 宽
       * @param height 高
       * @param zOrder 层级
       * @param url 图片地址
       * @param speed 闪烁速度默认 0.01
       */
        export function simpleInfinite(parent: Laya.Sprite, x: number, y: number, width: number, height: number, zOrder: number, url?: string, speed?: number): Laya.Image {
            let Img = new Laya.Image();
            parent.addChild(Img);
            Img.width = width;
            Img.height = height;
            // Img.pivotX = width / 2;
            // Img.pivotY = height / 2;
            Img.pos(x, y);
            Img.skin = url ? url : SkinUrl.方形光圈1;
            Img.alpha = 0;
            Img.zOrder = zOrder ? zOrder : 0;
            let add = true;
            let caller = {};
            let func = () => {
                if (!add) {
                    Img.alpha -= speed ? speed : 0.01;
                    if (Img.alpha <= 0) {
                        if (caller['end']) {
                            Laya.timer.clearAll(caller);
                            Img.removeSelf();
                        } else {
                            add = true;
                        }
                    }
                } else {
                    Img.alpha += speed ? speed * 2 : 0.01 * 2;
                    if (Img.alpha >= 1) {
                        add = false;
                        caller['end'] = true;
                    }
                }
                // console.log(Img.alpha, Img.width, Img.height, Img.x, Img.y);
            }
            Laya.timer.frameLoop(1, caller, func);
            return Img;
        }
    }

    /**循环模块*/
    export module Circulation {
        /**循环模块图片基类*/
        export class ImageBase extends Laya.Image {
            constructor(parent: Laya.Sprite, urlArr: Array<string>, colorRGBA: Array<Array<number>>, width: Array<number>, height: Array<number>, zOrder: number) {
                super();
                parent.addChild(this);
                this.skin = urlArr ? LwgTools.Arr.randomGetOne(urlArr) : SkinUrl.圆形发光1;
                this.width = width ? LwgTools.Num.randomOneBySection(width[0], width[1]) : 80;
                this.height = height ? LwgTools.Num.randomOneBySection(height[0], height[1]) : this.width;
                this.pivotX = this.width / 2;
                this.pivotY = this.height / 2;
                const RGBA: [number, number, number, number] = [null, null, null, null];
                RGBA[0] = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][0], colorRGBA[1][0]) : LwgTools.Num.randomOneBySection(0, 255);
                RGBA[1] = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][1], colorRGBA[1][1]) : LwgTools.Num.randomOneBySection(0, 255);
                RGBA[2] = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][2], colorRGBA[1][2]) : LwgTools.Num.randomOneBySection(0, 255);
                RGBA[3] = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][3], colorRGBA[1][3]) : LwgTools.Num.randomOneBySection(0, 255);
                LwgColor.colour(this, RGBA);
                this.zOrder = zOrder ? zOrder : 0;
                this.alpha = 0;
                this.scaleX = 0;
                this.scaleY = 0;
            }
        }

        /**
         * 多点循环，在一组点中，以第一个点为起点，最后一个点为终点无限循环
         * @param {Laya.Sprite} parent 父节点
         * @param {Array<Array<number>>} [posArray] 坐标点集合[[x,y]]
         * @param parallel 粒子是平行于当前的移动路径
         * @param {Array<string>} [urlArr] 皮肤结合
         * @param {Array<Array<number>>} [colorRGBA] 颜色区间[[ ][ ]]               
         * @param {Array<number>} [width] 宽度区间[a,b]
         * @param {Array<number>} [height] 高度区间[a,b]
         * @param {number} [zOrder] 层级
         * @param {number} [speed] 速度
         */
        export function corner(parent: Laya.Sprite, posArray: Array<Array<number>>, urlArr?: Array<string>, colorRGBA?: Array<Array<number>>, width?: Array<number>, height?: Array<number>, zOrder?: number, parallel?: boolean, speed?: number): Laya.Image {
            if (posArray.length <= 1) {
                return;
            }
            let Img = new ImageBase(parent, urlArr, colorRGBA, width, height, zOrder);
            let Imgfootprint = new ImageBase(parent, urlArr, colorRGBA, width, height, zOrder);
            Imgfootprint.filters = Img.filters;
            Img.pos(posArray[0][0], posArray[0][1]);
            Img.alpha = 1;
            let moveCaller = {
                num: 0,
                alpha: true,
                move: false,
            };
            Img['moveCaller'] = moveCaller;
            let index = 0;
            Img.scale(1, 1);

            LwgTimer.frameLoop(1, moveCaller, () => {
                let Imgfootprint = new ImageBase(parent, urlArr, colorRGBA, width, height, zOrder);
                Imgfootprint.filters = Img.filters;
                Imgfootprint.x = Img.x;
                Imgfootprint.y = Img.y;
                Imgfootprint.rotation = Img.rotation;
                Imgfootprint.alpha = 1;
                Imgfootprint.zOrder = -1;
                Imgfootprint.scaleX = Img.scaleX;
                Imgfootprint.scaleY = Img.scaleY;
                LwgAni2D.fadeOut(Imgfootprint, 1, 0, 200, 0, () => {
                    Imgfootprint.removeSelf();
                });
                if (Img.parent == null) {
                    Laya.timer.clearAll(moveCaller);
                }
                moveCaller.num++;
                if (urlArr) {
                    if (moveCaller.num > urlArr.length) {
                        moveCaller.num = 0;
                    } else {
                        Img.skin = urlArr[moveCaller.num];
                    }
                }
            })
            var func = () => {
                let targetXY = [posArray[index][0], posArray[index][1]];
                let distance = (new Laya.Point(Img.x, Img.y)).distance(targetXY[0], targetXY[1]);
                if (parallel) {
                    Img.rotation = LwgTools.Point.angleByPointOld(Img.x - targetXY[0], Img.y - targetXY[1]) + 180;
                }
                let time = speed * 100 + distance / 5;
                if (index == posArray.length + 1) {
                    targetXY = [posArray[0][0], posArray[0][1]];
                }
                LwgAni2D.move(Img, targetXY[0], targetXY[1], time, () => {
                    index++;
                    if (index == posArray.length) {
                        index = 0;
                    }
                    func();
                });
            }
            func();
            return Img;
        }
    }
}

/**
 * 点击事件
 */
export module LwgClick {

    export class Init {
        /**
         * 初始化
         * @param _effectType 默认点击效果类型
         * @param _soundUrl 默认音效
         */
        constructor(_effectType: EmEffectType) {
            effectType = _effectType;
        }
        public get LwgClick(): string {
            return 'LwgClick';
        }
    }


    /**
     * 绝对开关，不会进行筛选，如果被关闭那么什么都不可以点击，高于filter
     */
    export let absolute = true;
    /**
     * 筛选级别，分别控制舞台点击和按钮点击
     */
    export enum EmfilterType {
        /**
         * 全部可以点击
         */
        all,
        /**
         * 全部都不可以点击
         */
        none,
        /**
         * 只有舞台可以点击
         */
        stage,
        /**
         * 只有按钮可以点击
         */
        button,
        /**
         *  某些按钮可以点击，舞台也可以点击
         */
        someBtnIncludeStage,
        /**
         * 某些按钮可以点击， 舞台不可以点击
         */
        someBtnExcludeStage,
    }

    /**
     * 筛选设置 ,被筛选的节点必须有名字
     */
    export class Filter {
        private static _value: EmfilterType = EmfilterType.all;
        /**
         * 筛选值,设置筛选值使用setValue
         */
        public static get value(): EmfilterType {
            return this._value;
        }
        /**
         * 某些按钮的数组
         */
        static someBtnArr: Laya.Sprite[] = [];
        /**
         * 设置按钮点击的筛选值
         * @param filterType 当前按钮点击类型
         * @param someBtnArr 如果类型是someBtnIncludeStage和someBtnExcludeStage则必须输入按钮的节点，否则无意义
         */
        public static setValue(filterType: EmfilterType, someBtnArr?: Laya.Sprite[]): void {
            this._value = filterType;
            if (filterType === EmfilterType.someBtnIncludeStage || filterType === EmfilterType.someBtnExcludeStage) {
                if (someBtnArr.length <= 0) {
                    console.log('如果为筛选值为某些按钮，则必须输入按钮名称数组');
                } else {
                    this.someBtnArr = someBtnArr;
                }
            } else {
                this.someBtnArr = [];
            }
        }

        /**
         * @export 通过一个按钮名称检测其是否没有被屏蔽，返回true是没有被屏蔽，false为屏蔽
         * @param {Laya.Sprite} targetName 节点
         * @return {*}  {boolean} 
         */
        static checkBtn(target: Laya.Sprite): boolean {
            if (absolute) {
                if (Filter.value === EmfilterType.button || Filter.value === EmfilterType.all) {
                    return true;
                } else if (Filter.value === EmfilterType.someBtnExcludeStage || Filter.value === EmfilterType.someBtnIncludeStage) {
                    if (Filter.someBtnArr.length > 0) {
                        for (let index = 0; index < Filter.someBtnArr.length; index++) {
                            const btn = Filter.someBtnArr[index];
                            if (btn === target) {
                                return true;
                            }
                        }
                    }
                }
            }
        }

        /**
         * @export 检测舞台是否可以点击
         * @return {*}  {boolean} 
         */
        static checkStage(): boolean {
            let stageClick = false;
            if (LwgClick.absolute) {
                if (Filter.value === EmfilterType.all || Filter.value === EmfilterType.stage || Filter.value === EmfilterType.someBtnIncludeStage) {
                    stageClick = true;
                }
            }
            return stageClick;
        }
    }

    /**点击效果类型*/
    export enum EmEffectType {
        /**
         * 无效果 
         */
        NoEffect = 'NoEffect',
        /**
         * 点击放大
         */
        Largen = 'Largen',
        /**
         * 点击缩小
         */
        Reduce = 'Reduce',
    }
    /**
     * 默认效果类型
     */
    export let effectType: EmEffectType = EmEffectType.Largen;

    /**
     * @export 根据点击效果类型返回效果控制对象
     * @param {string} effectType 类型
     * @return {*}  {*}
     */
    function effectSet(effectType: EmEffectType): ClickEffects.TpEffect {
        return ClickEffects[effectType].ins;
    }
    /**
     * 按下触发的点击事件注册,可以用(e)=>{}简写传递的函数参数
     * @param target 节点
     * @param caller 执行域
     * @param down 按下回调
     * @param effect 效果类型输入'null'则没有效果
     */
    export function btnOnDown(target: Laya.Sprite, caller: any, down: Function, effect?: LwgClick.EmEffectType): void {
        on(effect, target, caller, (e: Laya.Event) => {
            Filter.checkBtn(target) && down && down(e);
        }, null, null, null);
    }

    /**
     * 抬起触发点击事件注册,可以用(e)=>{}简写传递的函数参数
     * @param target 节点
     * @param up 抬起回调
     * @param effect 效果类型输入'null'则没有效果
     */
    export function btnOnDownAD(target: Laya.Sprite, caller: any, up: Function, effect?: LwgClick.EmEffectType): void {
        on(effect, target, caller, (e: Laya.Event) => {
            Filter.checkBtn(target) && LwgPlatform.AD.showVideo(() => {
                up && up(e);
            })
        }, null);
    }
    /**
     * 抬起触发点击事件注册,可以用(e)=>{}简写传递的函数参数
     * @param target 节点
     * @param up 抬起回调
     * @param effect 效果类型输入'null'则没有效果
     */
    export function btnOnceDownAD(target: Laya.Sprite, caller: any, up: Function, effect?: LwgClick.EmEffectType): void {
        once(effect, target, caller, (e: Laya.Event) => {
            Filter.checkBtn(target) && LwgPlatform.AD.showVideo(() => {
                up && up(e);
            })
        }, null);
    }

    /**
      * 抬起触发点击事件注册,可以用(e)=>{}简写传递的函数参数
      * @param target 节点
      * @param move 移动回调
      * @param effect 效果类型输入'null'则没有效果
      */
    export function btnOnMove(target: Laya.Sprite, caller: any, move: Function, effect?: LwgClick.EmEffectType): void {
        on(effect, target, caller, null, (e: Laya.Event) => {
            Filter.checkBtn(target) && move && move(e);
        }, null, null);
    }
    /**
     * 抬起触发点击事件注册,可以用(e)=>{}简写传递的函数参数
     * @param target 节点
     * @param up 抬起回调
     * @param effect 效果类型输入'null'则没有效果
     */
    export function btnOnUp(target: Laya.Sprite, caller: any, up: Function, effect?: LwgClick.EmEffectType): void {
        on(effect, target, caller, null, null, (e: Laya.Event) => {
            Filter.checkBtn(target) && up && up(e);
        }, null);
    }
    /**
     * 抬起触发点击事件注册,可以用(e)=>{}简写传递的函数参数
     * @param target 节点
     * @param up 抬起回调
     * @param effect 效果类型输入'null'则没有效果
     */
    export function btnOnUpAD(target: Laya.Sprite, caller: any, up: Function, effect?: LwgClick.EmEffectType): void {
        on(effect, target, caller, null, null, (e: Laya.Event) => {
            Filter.checkBtn(target) && LwgPlatform.AD.showVideo(() => {
                up && up(e);
            })
        }, null);
    }
    /**
     * 抬起触发点击事件注册,可以用(e)=>{}简写传递的函数参数
     * @param target 节点
     * @param up 抬起回调
     * @param effect 效果类型输入'null'则没有效果
     */
    export function btnOnceUpAD(target: Laya.Sprite, caller: any, up: Function, effect?: LwgClick.EmEffectType): void {
        once(effect, target, caller, null, null, (e: Laya.Event) => {
            Filter.checkBtn(target) && LwgPlatform.AD.showVideo(() => {
                up && up(e);
            })
        }, null);
    }

    /**
     * 满足条件就看广告，不满足则不看
     * @param target 
     * @param condition 条件
     * @param reachCb 满足条件后看广告
     * @param notReachCb 不满足条件则不看广告
     * @param effect 
     */
    export function btnOnUpADCondition(target: Laya.Sprite, caller: any, condition: Function, reachCb: Function, notReachCb: Function, effect?: LwgClick.EmEffectType): void {
        on(effect, target, caller, null, null, (e: Laya.Event) => {
            if (condition && condition()) {
                Filter.checkBtn(target) && LwgPlatform.AD.showVideo(() => {
                    reachCb && reachCb(e);
                })
            } else {
                Filter.checkBtn(target) && notReachCb && notReachCb(e);
            }
        });
    }
    /**
      * 满足条件就看广告，不满足则不看
      * @param target 
      * @param condition 条件
      * @param reachCb 满足条件后看广告
      * @param notReachCb 不满足条件则不看广告
      * @param effect 
      */
    export function btnOnceUpADCondition(target: Laya.Sprite, caller: any, condition: Function, reachCb: Function, notReachCb: Function, effect?: LwgClick.EmEffectType): void {
        once(effect, target, caller, null, null, (e: Laya.Event) => {
            if (condition && condition()) {
                Filter.checkBtn(target) && LwgPlatform.AD.showVideo(() => {
                    reachCb && reachCb(e);
                })
            } else {
                Filter.checkBtn(target) && notReachCb && notReachCb(e);
            }
        });
    }

    /**
      * 抬起触发点击事件注册,可以用(e)=>{}简写传递的函数参数
      * @param target 节点
      * @param out 移出回调
      * @param effect 效果类型输入'null'则没有效果
     */
    export function btnOnOut(target: Laya.Sprite, caller: any, out: Function, effect?: LwgClick.EmEffectType): void {
        on(effect, target, caller, null, null, null, (e: Laya.Event) => {
            Filter.checkBtn(target) && out && out(e);
        });
    }

    /**
      * 关闭点击事件
      * @param target 节点
      * @param cb 移除，会同时移除四个点击类型的当前回调
      * @param effect 效果类型输入'null'则没有效果
     */
    export function btnOff(target: Laya.Sprite, caller: any, cb: Function, effect?: LwgClick.EmEffectType): void {
        off(target);
    }
    /**
      * 通用事件注册,可以用(e)=>{}简写传递的函数参数
      * @param target 节点
      * @param down 按下回调
      * @param move 移动回调
      * @param up 抬起回调
      * @param out 移出回调
     */

    export function btnOnFour(target: Laya.Sprite, caller: any, down?: Function, move?: Function, up?: Function, out?: Function, effect?: LwgClick.EmEffectType): void {
        on(effect, target, caller,
            (e: Laya.Event) => {
                LwgClick.Filter.checkBtn(target) && down && down(e);
            },
            (e: Laya.Event) => {
                LwgClick.Filter.checkBtn(target) && move && move(e);
            },
            (e: Laya.Event) => {
                LwgClick.Filter.checkBtn(target) && up && up(e);
            },
            (e: Laya.Event) => {
                LwgClick.Filter.checkBtn(target) && out && out(e);
            });
    }
    /**
    * 按下触发的点击事件注册,可以用(e)=>{}简写传递的函数参数
    * @param target 节点
    * @param caller 执行域
    * @param down 按下回调
    * @param effect 效果类型输入'null'则没有效果
   */
    export function btnOnceDown(target: Laya.Sprite, caller: any, down: Function, effect?: LwgClick.EmEffectType): void {
        once(effect, target, caller, (e: Laya.Event) => {
            Filter.checkBtn(target) && down && down(e);
        }, null, null, null);
    }
    /**
      * 抬起触发点击事件注册,可以用(e)=>{}简写传递的函数参数
      * @param target 节点
      * @param move 移动回调
      * @param effect 效果类型输入'null'则没有效果
     */
    export function btnOnceMove(target: Laya.Sprite, caller: any, move: Function, effect?: LwgClick.EmEffectType): void {
        once(effect, target, caller, null, (e: Laya.Event) => {
            Filter.checkBtn(target) && move && move(e);
        }, null, null);
    }
    /**
     * 抬起触发点击事件注册,可以用(e)=>{}简写传递的函数参数
     * @param target 节点
     * @param up 抬起回调
     * @param effect 效果类型输入'null'则没有效果
   */
    export function btnOnceUp(target: Laya.Sprite, caller: any, up: Function, effect?: LwgClick.EmEffectType): void {
        once(effect, target, caller, null, null, (e: Laya.Event) => {
            Filter.checkBtn(target) && up && up(e);
        }, null);
    }
    /**
      * 抬起触发点击事件注册,可以用(e)=>{}简写传递的函数参数
      * @param target 节点
      * @param out 移出回调
      * @param effect 效果类型输入'null'则没有效果
     */
    export function btnOnceOut(target: Laya.Sprite, caller: any, out: Function, args?: [], effect?: LwgClick.EmEffectType): void {
        once(effect, target, caller, null, null, null, (e: Laya.Event) => {
            Filter.checkBtn(target) && out && out(e, args);
        });
    }

    /**
      * 通用事件注册,可以用(e)=>{}简写传递的函数参数
      * @param target 节点
      * @param down 按下回调
      * @param move 移动回调
      * @param up 抬起回调
      * @param out 移出回调
     */
    export function btnOnceFour(target: Laya.Sprite, caller: any, down?: Function, move?: Function, up?: Function, out?: Function, allArgs?: [any[], any[], any[], any[]], effect?: LwgClick.EmEffectType): void {
        once(effect, target, caller,
            (e: Laya.Event) => {
                Filter.checkBtn(target) && down && down(e, allArgs[0]);
            },
            (e: Laya.Event) => {
                Filter.checkBtn(target) && move && move(e, allArgs[1]);
            },
            (e: Laya.Event) => {
                Filter.checkBtn(target) && up && up(e, allArgs[2]);
            },
            (e: Laya.Event) => {
                Filter.checkBtn(target) && out && out(e, allArgs[3]);
            }
        );
    }
    // /**
    //  * 点击事件注册,可以用(e)=>{}简写传递的函数参数
    //  * @param effect 效果类型
    //  * @param target 节点
    //  * @param caller 执行域
    //  * @param down 按下函数
    //  * @param move 移动函数
    //  * @param up 抬起函数
    //  * @param out 出屏幕函数
    //  */
    // export function on(effect: EmEffectType, target: Laya.Node, caller: any, down?: Function, move?: Function, up?: Function, out?: Function, args: [any[], any[], any[], any[]] = [[], [], [], []]): void {
    //     if (!effect) {
    //         effect = effectType;
    //     }
    //     const btnEffect = effectSet(effect);
    //     target.on(Laya.Event.MOUSE_DOWN, caller, down, args[0]);
    //     target.on(Laya.Event.MOUSE_MOVE, caller, move, args[1]);
    //     target.on(Laya.Event.MOUSE_UP, caller, up, args[2]);
    //     target.on(Laya.Event.MOUSE_OUT, caller, out, args[3]);
    //     target.on(Laya.Event.MOUSE_DOWN, caller, btnEffect.down);
    //     target.on(Laya.Event.MOUSE_MOVE, caller, btnEffect.move);
    //     target.on(Laya.Event.MOUSE_UP, caller, btnEffect.up);
    //     target.on(Laya.Event.MOUSE_OUT, caller, btnEffect.out);
    // }

    // export module Control {
    type TpCallBackData = {
        target: Laya.Sprite,
        callBackDown: Function,
        callBackMove: Function,
        callBackUp: Function,
        callBackOut: Function,
        caller: any,
    }
    export let callBackArr: TpCallBackData[] = [];
    export function on(effect: EmEffectType, target: Laya.Sprite, caller: any, down?: Function, move?: Function, up?: Function, out?: Function, args: [any, any, any, any] = [{}, {}, {}, {}]): void {
        if (!effect) {
            effect = effectType;
        }
        var callBackDown = (arg: any, e: Laya.Event) => {
            Filter.checkBtn(target) && down && down(e, arg);
        }
        var callBackMove = (arg: any, e: Laya.Event) => {
            Filter.checkBtn(target) && move && move(e, arg);
        }
        var callBackUp = (arg: any, e: Laya.Event) => {
            Filter.checkBtn(target) && up && up(e, arg);
        }
        var callBackOut = (arg: any, e: Laya.Event) => {
            Filter.checkBtn(target) && out && out(e, arg);
        }
        const element: TpCallBackData = {
            target: target,
            caller: caller,
            callBackDown: callBackDown,
            callBackMove: callBackMove,
            callBackUp: callBackUp,
            callBackOut: callBackOut,
        }
        callBackArr.push(element)
        target.on(Laya.Event.MOUSE_DOWN, element.caller, element.callBackDown, [args[0]]);
        target.on(Laya.Event.MOUSE_MOVE, element.caller, element.callBackMove, [args[1]]);
        target.on(Laya.Event.MOUSE_UP, element.caller, element.callBackUp, [args[2]]);
        target.on(Laya.Event.MOUSE_DOWN, element.caller, element.callBackOut, [args[3]]);
        const btnEffect = effectSet(effect);
        target.on(Laya.Event.MOUSE_DOWN, element.caller, btnEffect.down);
        target.on(Laya.Event.MOUSE_MOVE, element.caller, btnEffect.move);
        target.on(Laya.Event.MOUSE_UP, element.caller, btnEffect.up);
        target.on(Laya.Event.MOUSE_OUT, element.caller, btnEffect.out);
    }

    export function once(effect: EmEffectType, target: Laya.Sprite, caller: any, down?: Function, move?: Function, up?: Function, out?: Function, args: [any, any, any, any] = [{}, {}, {}, {}]): void {
        if (!effect) {
            effect = effectType;
        }
        var callBackDown = (arg: any, e: Laya.Event) => {
            Filter.checkBtn(target) && down && down(e, arg);
        }
        var callBackMove = (arg: any, e: Laya.Event) => {
            Filter.checkBtn(target) && move && move(e, arg);
        }
        var callBackUp = (arg: any, e: Laya.Event) => {
            Filter.checkBtn(target) && up && up(e, arg);
        }
        var callBackOut = (arg: any, e: Laya.Event) => {
            Filter.checkBtn(target) && out && out(e, arg);
        }
        const element: TpCallBackData = {
            target: target,
            caller: caller,
            callBackDown: callBackDown,
            callBackMove: callBackMove,
            callBackUp: callBackUp,
            callBackOut: callBackOut,
        }
        callBackArr.push(element)
        target.once(Laya.Event.MOUSE_DOWN, element.caller, element.callBackDown, [args[0]]);
        target.once(Laya.Event.MOUSE_MOVE, element.caller, element.callBackMove, [args[1]]);
        target.once(Laya.Event.MOUSE_UP, element.caller, element.callBackUp, [args[2]]);
        target.once(Laya.Event.MOUSE_DOWN, element.caller, element.callBackOut, [args[3]]);
        const btnEffect = effectSet(effect);
        target.once(Laya.Event.MOUSE_DOWN, element.caller, btnEffect.down);
        target.once(Laya.Event.MOUSE_MOVE, element.caller, btnEffect.move);
        target.once(Laya.Event.MOUSE_UP, element.caller, btnEffect.up);
        target.once(Laya.Event.MOUSE_OUT, element.caller, btnEffect.out);
    }
    /**
     * 移除所有点击事件
     * @param target 
     */
    export function off(target: Laya.Sprite): void {
        for (let index = 0; index < callBackArr.length; index++) {
            const element = callBackArr[index];
            if (element.target === target) {
                target.off(Laya.Event.MOUSE_DOWN, element.caller, element.callBackDown);
                target.off(Laya.Event.MOUSE_MOVE, element.caller, element.callBackMove);
                target.off(Laya.Event.MOUSE_UP, element.caller, element.callBackUp);
                target.off(Laya.Event.MOUSE_DOWN, element.caller, element.callBackOut);
                callBackArr.splice(index, 1);
                index--;
            }
        }
    }
    // }
    // export function once(effect: EmEffectType, target: Laya.Sprite, caller: any, down?: Function, move?: Function, up?: Function, out?: Function, args: [any[], any[], any[], any[]] = [[], [], [], []]): void {
    //     if (!effect) {
    //         effect = effectType;
    //     }
    //     const btnEffect = effectSet(effect);
    //     target.once(Laya.Event.MOUSE_DOWN, caller, down, args[0]);
    //     target.once(Laya.Event.MOUSE_MOVE, caller, move, args[1]);
    //     target.once(Laya.Event.MOUSE_UP, caller, up, args[2]);
    //     target.once(Laya.Event.MOUSE_OUT, caller, out, args[3]);
    //     target.once(Laya.Event.MOUSE_DOWN, caller, btnEffect.down);
    //     target.once(Laya.Event.MOUSE_MOVE, caller, btnEffect.move);
    //     target.once(Laya.Event.MOUSE_UP, caller, btnEffect.up);
    //     target.once(Laya.Event.MOUSE_OUT, caller, btnEffect.out);
    // }

    // /**
    //  * 点击事件的关闭
    //  * @param effect 效果类型 1.'Largen'
    //  * @param target 节点
    //  * @param caller 指向脚本（this）引用
    //  * @param down 按下函数
    //  * @param move 移动函数
    //  * @param up 抬起函数
    //  * @param out 出屏幕函数
    //  */
    // export function off(effect: EmEffectType, target: Laya.Sprite, caller: any, down?: Function, move?: Function, up?: Function, out?: Function): void {
    //     if (!effect) {
    //         effect = effectType;
    //     }
    //     const btnEffect = effectSet(effect ? LwgClick.effectType : effect);
    //     target.off(Laya.Event.MOUSE_DOWN, caller, down);
    //     target.off(Laya.Event.MOUSE_MOVE, caller, move);
    //     target.off(Laya.Event.MOUSE_UP, caller, up);
    //     target.off(Laya.Event.MOUSE_OUT, caller, out);
    //     target.off(Laya.Event.MOUSE_DOWN, caller, btnEffect.down);
    //     target.off(Laya.Event.MOUSE_MOVE, caller, btnEffect.move);
    //     target.off(Laya.Event.MOUSE_UP, caller, btnEffect.up);
    //     target.off(Laya.Event.MOUSE_OUT, caller, btnEffect.out);
    // }

    export module ClickEffects {
        export type TpEffect = {
            down(event: Laya.Event): void,
            move(event: Laya.Event): void,
            up(event: Laya.Event): void,
            out(event: Laya.Event): void,
        }

        /**
         * 没有效果的点击事件，有时候用于防止界面的事件穿透
         */
        export class NoEffect implements TpEffect {
            private static _ins: NoEffect;
            static get ins() {
                if (!this._ins) {
                    this._ins = new NoEffect();
                }
                return this._ins;
            }
            down(): void {
                LwgSound.playBtnSound();
            };
            move(): void { };
            up(): void { };
            out(): void { };
        }

        /**
         * 点击放大的按钮点击效果,每个类是一种效果，和点击的声音一一对应
         */
        export class Largen implements TpEffect {
            private static _ins: Largen;
            static get ins() {
                if (!this._ins) {
                    this._ins = new Largen();
                }
                return this._ins;
            }
            down(event: Laya.Event): void {
                //只有触发效果的位置才会检测
                if (LwgClick.Filter.checkBtn(event.currentTarget)) {
                    event.currentTarget.scale(1.1, 1.1);
                    LwgSound.playBtnSound();
                }
            }
            move(): void { };
            up(event: Laya.Event): void {
                event.currentTarget.scale(1, 1);
            }
            out(event: Laya.Event): void {
                event.currentTarget.scale(1, 1);
            }
        }

        /**
         * 点击缩小的按钮点击效果
         */
        export class Reduce implements TpEffect {
            private static _ins: Reduce;
            static get ins() {
                if (!this._ins) {
                    this._ins = new Reduce();
                }
                return this._ins;
            }
            down(event: Laya.Event): void {
                if (LwgClick.Filter.checkBtn(event.currentTarget)) {
                    event.currentTarget.scale(0.9, 0.9);
                    LwgSound.playBtnSound();
                }
            }
            move(): void { };
            up(event: Laya.Event): void {
                event.currentTarget.scale(1, 1);
            }
            out(event: Laya.Event): void {
                event.currentTarget.scale(1, 1);
            }
        }

        /**
         * 变亮
         */
        export class Brighten implements TpEffect {
            private static _ins: Brighten;
            static get ins() {
                if (!this._ins) {
                    this._ins = new Brighten();
                }
                return this._ins;
            }
            down(event: Laya.Event): void { };
            move(event: Laya.Event): void { };
            up(event: Laya.Event): void { };
            out(event: Laya.Event): void { };
        }

        /**
         * 点击后有个发光环的特效
         */
        export class LuminousRing implements TpEffect {
            private static _ins: LuminousRing;
            static get ins() {
                if (!this._ins) {
                    this._ins = new LuminousRing();
                }
                return this._ins;
            }
            down(event: Laya.Event): void { };
            move(event: Laya.Event): void { };
            up(event: Laya.Event): void { };
            out(event: Laya.Event): void { };
        }
    }

}

export module LwgAni3D {
    /**缓动集合，用于清除当前this上的所有缓动*/
    export let tweenMap: any = {};
    /**帧率*/
    export let frameRate: number = 1;
    /**
      * 移动物体
      * @param target 目标物体
      * @param toPos 要去的目的地坐标
      * @param duration 间隔
      * @param caller 回调执行领域
      * @param ease 缓动函数
      * @param complete 播放完成回调 
      * @param delay 延迟
      * @param coverBefore 是否覆盖上一个缓动
      * @param update 更新函数
      * @param frame 帧数间隔
      */
    export function moveTo(target: Laya.Sprite3D, toPos: Laya.Vector3, duration: number, caller: any
        , ease?: Function, complete?: Function, delay: number = 0, coverBefore: boolean = true, update?: Function, frame?: number) {
        let position: Laya.Vector3 = target.transform.position.clone();
        // target["position"] = target.transform.position;
        if (duration == 0 || duration === undefined || duration === null) {
            target.transform.position = toPos.clone();
            complete && complete.apply(caller);
            return;
        }
        if (frame <= 0 || frame === undefined || frame === null) {
            frame = frameRate;
        }
        let updateRenderPos = () => {
            if (target.transform) {
                target.transform.position = position;
            }
            update && update();
        };
        Laya.timer.once(delay, target, () => {
            Laya.timer.loop(16, target, updateRenderPos);
        });

        let endTween = () => {
            if (target.transform) {
                target.transform.position = toPos.clone();
                Laya.timer.clear(target, updateRenderPos);
            }
            complete && complete.apply(caller);
        }

        let tween = Laya.Tween.to(position, { x: toPos.x, y: toPos.y, z: toPos.z }, duration, ease, Laya.Handler.create(target, endTween), delay, coverBefore);
        if (!tweenMap[target.id]) {
            tweenMap[target.id] = [];
        }
        tweenMap[target.id].push(tween);
    }

    export function moveToX(target: Laya.Sprite3D, XPos: number, duration: number, caller: any
        , ease?: Function, complete?: Function, delay: number = 0, coverBefore: boolean = false, update?: Function, frame?: number) {
        //用于变化的position
        let position: Laya.Vector3 = target.transform.position.clone();
        let toPos = new Laya.Vector3(XPos, position.y, position.z)
        // target["position"] = target.transform.position;
        if (duration == 0 || duration === undefined || duration === null) {
            target.transform.position = toPos.clone();
            complete && complete.apply(caller);
            return;
        }
        if (frame <= 0 || frame === undefined || frame === null) {
            frame = frameRate;
        }

        //逐帧赋值
        let updateRenderPos = () => {
            if (target.transform) {
                target.transform.position = new Laya.Vector3(position.x, target.transform.position.y, target.transform.position.z);
            }
            update && update();
        };
        Laya.timer.once(delay, target, () => {
            Laya.timer.loop(16, target, updateRenderPos);
        });

        //最后，只赋值单属性
        let endTween = () => {
            if (target.transform) {
                target.transform.position = new Laya.Vector3(toPos.clone().x, target.transform.position.y, target.transform.position.z);
                Laya.timer.clear(target, updateRenderPos);
            }
            complete && complete.apply(caller);
        }
        let tween = Laya.Tween.to(position, { x: toPos.x }, duration, ease, Laya.Handler.create(target, endTween), delay, coverBefore);
        if (!tweenMap[target.id]) {
            tweenMap[target.id] = [];
        }
        tweenMap[target.id].push(tween);
    }

    export function moveX(target: Laya.Sprite3D, disX: number, duration: number, caller: any, ease?: Function, complete?: Function, delay: number = 0, coverBefore: boolean = false, update?: Function, frame?: number) {
        const v3Pos = target.transform.position.clone();
        LwgAni3D.moveToX(target, v3Pos.x + disX, duration, caller, ease, complete, delay, coverBefore, update, frame);
    }

    export function moveToY(target: Laya.Sprite3D, posY: number, duration: number, caller: any
        , ease?: Function, complete?: Function, delay: number = 0, coverBefore: boolean = false, update?: Function, frame?: number) {
        let position: Laya.Vector3 = target.transform.position.clone();
        // target["position"] = target.transform.position;
        let toPos = new Laya.Vector3(target.transform.position.x, posY, target.transform.position.z);
        if (duration == 0 || duration === undefined || duration === null) {
            target.transform.position = toPos.clone();
            complete && complete.apply(caller);
            return;
        }
        if (frame <= 0 || frame === undefined || frame === null) {
            frame = frameRate;
        }
        let updateRenderPos = () => {
            if (target.transform) {
                target.transform.position = new Laya.Vector3(target.transform.position.x, position.y, target.transform.position.z);
            }
            update && update();
        };
        Laya.timer.once(delay, target, () => {
            Laya.timer.loop(16, target, updateRenderPos);
        });

        let endTween = () => {
            if (target.transform) {
                target.transform.position = new Laya.Vector3(target.transform.position.x, toPos.clone().y, target.transform.position.z);
                Laya.timer.clear(target, updateRenderPos);
            }
            complete && complete.apply(caller);
        }

        let tween = Laya.Tween.to(position, { y: toPos.y }, duration, ease, Laya.Handler.create(target, endTween), delay, coverBefore);
        if (!tweenMap[target.id]) {
            tweenMap[target.id] = [];
        }
        tweenMap[target.id].push(tween);
    }

    export function moveY(target: Laya.Sprite3D, disY: number, duration: number, caller: any, ease?: Function, complete?: Function, delay: number = 0, coverBefore: boolean = false, update?: Function, frame?: number) {
        const v3Pos = target.transform.position.clone();
        LwgAni3D.moveToY(target, v3Pos.y + disY, duration, caller, ease, complete, delay, coverBefore, update, frame)
    }

    /**
     * z轴移动
     * @param target 
     * @param toPos 
     * @param duration 
     * @param caller 
     * @param ease 
     * @param complete 
     * @param delay 
     * @param coverBefore 
     * @param update 
     * @param frame 
     * @returns 
     */
    export function moveToZ(target: Laya.Sprite3D, posZ: number, duration: number, caller: any
        , ease?: Function, complete?: Function, delay: number = 0, coverBefore: boolean = false, update?: Function, frame?: number) {
        let position: Laya.Vector3 = target.transform.position.clone();
        // target["position"] = target.transform.position;
        let toPos = new Laya.Vector3(target.transform.position.x, target.transform.position.y, posZ);
        if (duration == 0 || duration === undefined || duration === null) {
            target.transform.position = toPos;
            complete && complete.apply(caller);
            return;
        }
        if (frame <= 0 || frame === undefined || frame === null) {
            frame = frameRate;
        }
        let updateRenderPos = () => {
            if (target.transform) {
                target.transform.position = new Laya.Vector3(target.transform.position.x, target.transform.position.y, position.z);
            }
            update && update();
        };
        Laya.timer.once(delay, target, () => {
            Laya.timer.loop(16, target, updateRenderPos);
        });

        let endTween = () => {
            if (target.transform) {
                target.transform.position = new Laya.Vector3(target.transform.position.x, target.transform.position.y, toPos.clone().z);
                Laya.timer.clear(target, updateRenderPos);
            }
            complete && complete.apply(caller);
        }

        let tween = Laya.Tween.to(position, { z: toPos.z }, duration, ease, Laya.Handler.create(target, endTween), delay, coverBefore);
        if (!tweenMap[target.id]) {
            tweenMap[target.id] = [];
        }
        tweenMap[target.id].push(tween);
    }

    /**
     * Z轴移动多少距离
     * @param target 
     * @param toPos 
     * @param duration 
     * @param caller 
     * @param ease 
     * @param complete 
     * @param delay 
     * @param coverBefore 
     * @param update 
     * @param frame 
     */
    export function moveZ(target: Laya.Sprite3D, disZ: number, duration: number, caller: any, ease?: Function, complete?: Function, delay: number = 0, coverBefore: boolean = false, update?: Function, frame?: number): void {
        const v3Pos = target.transform.position.clone();
        LwgAni3D.moveToZ(target, v3Pos.z + disZ, duration, caller, ease, complete, delay, coverBefore, update, frame);
    }

    /**
      * 旋转物体
      * @param target 目标物体
      * @param toPos 要去的目的地
      * @param duration 间隔
      * @param caller 回调执行领域
      * @param ease 缓动函数
      * @param complete 播放完成回调 
      * @param delay 延迟
      * @param coverBefore 是否覆盖上一个缓动
      * @param update 更新函数
      * @param frame 帧数间隔
      */
    export function rotateTo(target: Laya.Sprite3D, toRotation: Laya.Vector3, duration: number, caller: any
        , ease?: Function, complete?: Function, delay?: number, coverBefore?: boolean, update?: Function, frame?: number) {
        let rotation: Laya.Vector3 = target.transform.localRotationEuler.clone();
        if (duration == 0 || duration === undefined || duration === null) {
            target.transform.localRotationEuler = toRotation.clone();
            complete && complete.apply(caller);
            return;
        }
        if (frame <= 0 || frame === undefined || frame === null) {
            frame = frameRate;
        }
        let updateRenderRotation = () => {
            if (target.transform) {
                target.transform.localRotationEuler = rotation;
            }
            update && update();
        };
        Laya.timer.once(delay, target, () => {
            Laya.timer.frameLoop(frame, target, updateRenderRotation);
        });

        let endTween = () => {
            if (target.transform) {
                target.transform.localRotationEuler = toRotation.clone();
                Laya.timer.clear(target, updateRenderRotation);
            }
            complete && complete.apply(caller);
        }

        let tween = Laya.Tween.to(rotation, { x: toRotation.x, y: toRotation.y, z: toRotation.z }, duration, ease, Laya.Handler.create(target, endTween), delay, coverBefore);
        if (!tweenMap[target.id]) {
            tweenMap[target.id] = [];
        }
        tweenMap[target.id].push(tween)
    }

    export function rotateToX(target: Laya.Sprite3D, toRotation: Laya.Vector3, duration: number, caller: any
        , ease?: Function, complete?: Function, delay?: number, coverBefore?: boolean, update?: Function, frame?: number) {
        let rotation: Laya.Vector3 = target.transform.localRotationEuler.clone();
        if (duration == 0 || duration === undefined || duration === null) {
            target.transform.localRotationEuler = toRotation.clone();
            complete && complete.apply(caller);
            return;
        }
        if (frame <= 0 || frame === undefined || frame === null) {
            frame = frameRate;
        }
        let updateRenderRotation = () => {
            if (target.transform) {
                target.transform.localRotationEuler = rotation;
            }
            update && update();
        };
        Laya.timer.once(delay, target, () => {
            Laya.timer.frameLoop(frame, target, updateRenderRotation);
        });

        let endTween = () => {
            if (target.transform) {
                target.transform.localRotationEuler = toRotation.clone();
                Laya.timer.clear(target, updateRenderRotation);
            }
            complete && complete.apply(caller);
        }

        let tween = Laya.Tween.to(rotation, { x: toRotation.x, y: toRotation.y, z: toRotation.z }, duration, ease, Laya.Handler.create(target, endTween), delay, coverBefore);
        if (!tweenMap[target.id]) {
            tweenMap[target.id] = [];
        }
        tweenMap[target.id].push(tween)
    }

    /**
     * 缩放物体
     * @param target 目标物体
     * @param toPos 要去的目的地
     * @param duration 间隔
     * @param caller 回调执行领域
     * @param ease 缓动函数
     * @param complete 播放完成回调 
     * @param delay 延迟
     * @param coverBefore 是否覆盖上一个缓动
     * @param update 更新函数
     * @param frame 帧数间隔
     */
    export function scaleTo(target: Laya.Sprite3D, toScale: Laya.Vector3, duration: number, caller: any
        , ease?: Function, complete?: Function, delay?: number, coverBefore?: boolean, update?: Function, frame?: number) {
        let localScale = target.transform.localScale.clone();
        if (duration == 0 || duration === undefined || duration === null) {
            target.transform.localScale = toScale.clone();
            complete && complete.apply(caller);
            return;
        }
        if (frame <= 0 || frame === undefined || frame === null) {
            frame = frameRate;
        }
        let updateRenderPos = () => {
            if (target.transform) {
                target.transform.localScale = localScale;
            }
            update && update();
        };
        Laya.timer.once(delay, this, () => {
            Laya.timer.frameLoop(frame, target, updateRenderPos);
        });
        let endTween = () => {
            target.transform.localScale = toScale.clone();
            Laya.timer.clear(target, updateRenderPos);
            complete && complete.apply(caller);
        }
        let tween = Laya.Tween.to(localScale, { x: toScale.x, y: toScale.y, z: toScale.z }, duration, ease, Laya.Handler.create(target, endTween), delay, coverBefore);
        if (!tweenMap[target.id]) {
            tweenMap[target.id] = [];
        }
        tweenMap[target.id].push(tween);
    }
    /**
     * 清除3d物体上的所有缓动动画
     * @param target 
     */
    export function ClearTween(target: Laya.Sprite3D) {
        let tweens = tweenMap[target.id] as Array<Laya.Tween>;
        if (tweens && tweens.length) {
            while (tweens.length > 0) {
                let tween = tweens.pop();
                tween.clear();
            }
        }
        Laya.timer.clearAll(target);
    }

    /**
     * 摇头动画，左右各摇摆一次，然后回到原来位置
     * @param target 目标
     * @param range 幅度
     * @param duration 时间
     * @param caller 回调执行域
     * @param func 回调函数
     * @param delay 延时 
     * @param ease 缓动效果
     */
    export function rock(target: Laya.MeshSprite3D, range: Laya.Vector3, duration: number, caller: any, func?: Function, delay?: number, ease?: Function): void {
        if (!delay) {
            delay = 0;
        }
        let v1: Laya.Vector3 = new Laya.Vector3(target.transform.localRotationEulerX + range.x, target.transform.localRotationEulerY + range.y, target.transform.localRotationEulerZ + range.z);

        rotateTo(target, v1, duration / 2, caller, ease, () => {

            let v2: Laya.Vector3 = new Laya.Vector3(target.transform.localRotationEulerX - range.x * 2, target.transform.localRotationEulerY - range.y * 2, target.transform.localRotationEulerZ - range.z * 2);

            rotateTo(target, v2, duration, caller, ease, () => {

                let v3: Laya.Vector3 = new Laya.Vector3(target.transform.localRotationEulerX + range.x, target.transform.localRotationEulerY + range.y, target.transform.localRotationEulerZ + range.z);

                rotateTo(target, v3, duration / 2, caller, ease, () => {
                    if (func) {
                        func();
                    }
                });
            });
        }, delay);
    }

    /**
       * 旋转并移动物体到另一个物体的角度和位置
       * @param Sp3d 要移动的物体
       * @param Target 目标物体
       * @param duration 间隔
       * @param caller 执行域
       * @param ease 缓动函数
       * @param complete 播放完成回调 
       * @param delay 延迟
       * @param clickLock 场景按钮此时是否可以继续点击
       * @param coverBefore 是否覆盖上一个缓动
       * @param update 更新函数
       * @param frame 帧数间隔
       */
    export function moveRotateTo(Sp3d: Laya.MeshSprite3D, Target: Laya.MeshSprite3D, duration: number, caller: any
        , ease?: Function, complete?: Function, delay?: number, coverBefore?: boolean, update?: Function, frame?: number): void {
        moveTo(Sp3d, Target.transform.position, duration, caller, ease, null, delay, coverBefore, update, frame)
        rotateTo(Sp3d, Target.transform.localRotationEuler, duration, caller, ease, complete, delay, coverBefore, null, frame);
    }
}

/**动画模块*/
export module LwgAni2D {
    /**
    *  清理对象上的所有Tween动画
    * @param arr 清理的数组
    */
    export function clearAll(arr: Array<any>): void {
        for (let index = 0; index < arr.length; index++) {
            Laya.Tween.clearAll(arr[index]);
        }
    }
    /**
     * @export 类似于呼吸
     * @param {(Laya.Sprite | Laya.Image)} node 节点
     * @param {number} range 幅度0~1 
     * @param {number} time 时间
     * @param {number} [delay] 延时
     * @param {Function} [cb] 回调
     */
    export function circulation_scale(node: Laya.Sprite, range: number, time: number, delay?: number, cb?: Function): void {
        Laya.Tween.to(node, { scaleX: 1 + range, scaleY: 1 + range }, time, null, Laya.Handler.create(this, () => {
            Laya.Tween.to(node, { scaleX: 1 - range, scaleY: 1 - range }, time * 2 / 3, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(node, { scaleX: 1, scaleY: 1 }, time * 1 / 2, null, Laya.Handler.create(this, () => {
                    cb && cb();
                }), 0);
            }), 0);
        }), delay ? delay : 0);
    }

    /**
     * 左右抖动
     * @param node 节点
     * @param range 幅度
     * @param time 花费时间
     * @param delay 延时
     * @param cb 回调函数
     */
    export function leftRight_Shake(node: Laya.Sprite, range: number, time: number, delay?: number, cb?: Function): void {
        if (!delay) {
            delay = 0;
        }
        Laya.Tween.to(node, { x: node.x - range }, time, null, Laya.Handler.create(this, () => {
            Laya.Tween.to(node, { x: node.x + range * 2 }, time, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(node, { x: node.x - range }, time, null, Laya.Handler.create(this, () => {
                    cb && cb();
                }))
            }))
        }), delay);
    }
    /**
      * 旋转动画
      * @param node 节点
      * @param eRotate 最终角度
      * @param time 花费时间
      * @param delay 延时时间
      * @param cb 回调函数
    */
    export function rotate(node: Laya.Sprite, eRotate: number, time: number, delay?: number, cb?: Function): void {
        Laya.Tween.to(node, { rotation: eRotate }, time, null, Laya.Handler.create(node, () => {
            cb && cb();
        }), delay ? delay : 0);
    }
    /**
     * 上下翻转动画
     * @param node 节点
     * @param time 花费时间
     * @param cb 花费时间
     */
    export function upDown_Overturn(node: Laya.Sprite, time: number, cb?: Function): void {
        Laya.Tween.to(node, { scaleY: 0 }, time, null, Laya.Handler.create(this, () => {
            Laya.Tween.to(node, { scaleY: 1 }, time, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(node, { scaleY: 0 }, time, null, Laya.Handler.create(this, () => {
                    Laya.Tween.to(node, { scaleY: 1 }, time, null, Laya.Handler.create(this, () => {
                        cb && cb();
                    }), 0);
                }), 0);
            }), 0);
        }), 0);
    }

    /**
     * 上下旋转动画
     * @param node 节点
     * @param time 花费时间
     * @param cb 回调函数
     */
    export function leftRight_Overturn(node: Laya.Sprite, time: number, cb: Function): void {
        Laya.Tween.to(node, { scaleX: 0 }, time, null, Laya.Handler.create(this, () => {
            Laya.Tween.to(node, { scaleX: 1 }, time, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(node, { scaleX: 0 }, time, null, Laya.Handler.create(this, () => {
                    Laya.Tween.to(node, { scaleX: 1 }, time, null, Laya.Handler.create(this, () => {
                    }), 0);
                    cb && cb();
                }), 0);
            }), 0);
        }), 0);
    }

    /**
     * 上下抖动
     * @param node 节点
     * @param range 幅度
     * @param time 花费时间
     * @param delay 延迟时间
     * @param cb 回调函数
    */
    export function upDwon_Shake(node: Laya.Sprite, range: number, time: number, delay?: number, cb?: Function): void {
        Laya.Tween.to(node, { y: node.y + range }, time, null, Laya.Handler.create(this, () => {
            Laya.Tween.to(node, { y: node.y - range * 2 }, time, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(node, { y: node.y + range }, time, null, Laya.Handler.create(this, () => {
                    cb && cb();
                }))
            }))
        }), delay ? delay : 0)
    }

    /**
     * 渐隐渐出
     * @param node 节点
     * @param alpha1 最初的透明度
     * @param alpha2 渐隐到的透明度
     * @param time 花费时间
     * @param delay 延时
     * @param cb 回调函数
     */
    export function fadeOut(node: Laya.Sprite, alpha1: number, alpha2: number, time: number, delay?: number, cb?: Function): void {
        node.alpha = alpha1;
        Laya.Tween.to(node, { alpha: alpha2 }, time, null, Laya.Handler.create(this, () => {
            cb && cb();
        }), delay ? delay : 0)
    }

    /**
     * 渐出
     * @param node 节点
     * @param alpha1 最初的透明度
     * @param alpha2 渐隐到的透明度
     * @param time 花费时间
     * @param delay 延时
     * @param func 回调函数
     */
    export function fadeOut_KickBack(node: Laya.Sprite, alpha1: number, alpha2: number, time: number, delay: number, cb: Function): void {
        node.alpha = alpha1;
        Laya.Tween.to(node, { alpha: alpha2 }, time, null, Laya.Handler.create(this, () => {
            cb && cb();
        }), delay)
    }

    /**
    * 渐出+移动，起始位置都是0，最终位置都是1
    * @param node 节点
    * @param firstX 初始x位置
    * @param firstY 初始y位置
    * @param targetX x轴移动位置
    * @param targetY y轴移动位置
    * @param time 花费时间
    * @param delay 延时
    * @param cb 回调函数
    */
    export function move_FadeOut(node: Laya.Sprite, firstX: number, firstY: number, targetX: number, targetY: number, time: number, delay: number, cb: Function): void {
        node.alpha = 0;
        node.x = firstX;
        node.y = firstY;
        Laya.Tween.to(node, { alpha: 1, x: targetX, y: targetY }, time, null, Laya.Handler.create(this, () => {
            cb && cb();
        }), delay)
    }

    /**
     * 渐隐+移动，起始位置都是1，最终位置都是0
     * @param node 节点
     * @param firstX 初始x位置
     * @param firstY 初始y位置
     * @param targetX x轴目标位置
     * @param targetY y轴目标位置
     * @param time 花费时间
     * @param delay 延时
     * @param func 回调函数
    */
    export function move_Fade_Out(node: Laya.Sprite, firstX: number, firstY: number, targetX: number, targetY: number, time: number, delay: number, cb: Function): void {
        node.alpha = 1;
        node.x = firstX;
        node.y = firstY;
        Laya.Tween.to(node, { alpha: 0, x: targetX, y: targetY }, time, null, Laya.Handler.create(this, () => {
            cb && cb();
        }), delay)
    }

    /**
    * 渐出+移动+缩放，起始位置都是0，最终位置都是1
    * @param node 节点
    * @param firstX 初始x位置
    * @param firstY 初始y位置
    * @param targetX x轴移动位置
    * @param targetY y轴移动位置
    * @param time 花费时间
    * @param delay 延时
    * @param cb 回调函数
    */
    export function move_FadeOut_Scale(node: Laya.Sprite, firstX: number, firstY: number, targetX: number, targetY: number, time: number, delay: number, cb: Function): void {
        node.alpha = 0;
        node.x = firstX;
        node.y = firstY;
        Laya.Tween.to(node, { alpha: 1, x: targetX, y: targetY, scaleX: 1, scaleY: 1 }, time, null, Laya.Handler.create(this, () => {
            cb && cb();
        }), delay)
    }

    /**
     * 移动+缩放,等比缩放
     * @param node 节点
     * @param fScale 初始大小
     * @param fX 初始x位置
     * @param fY 初始y位置
     * @param tX x轴目标位置
     * @param tY y轴目标位置
     * @param eScale 最终大小
     * @param time 花费时间
     * @param delay 延时
     * @param ease 效果函数
     * @param func 回调函数
     */
    export function move_Scale(node: Laya.Sprite, fScale: number, fX: number, fY: number, tX: number, tY: number, eScale: number, time: number, delay?: number, ease?: Function, cb?: Function): void {
        node.scaleX = fScale;
        node.scaleY = fScale;
        node.x = fX;
        node.y = fY;
        Laya.Tween.to(node, { x: tX, y: tY, scaleX: eScale, scaleY: eScale }, time, ease ? ease : null, Laya.Handler.create(this, () => {
            cb && cb();
        }), delay ? delay : 0);
    }

    /**
     * @export 移动和旋转
     * @param {Laya.Sprite} Node 节点
     * @param {number} tRotate 最终角度
     * @param {number} tPoint 目标位置
     * @param {number} time 花费时间
     * @param {number} [delay] 延时时间
     * @param {Function} [cb] 回调函数
     */
    export function move_Rotate(Node: Laya.Sprite, tRotate: number, tPoint: Laya.Point, time: number, delay?: number, cb?: Function): void {
        Laya.Tween.to(Node, { rotation: tRotate, x: tPoint.x, y: tPoint.y }, time, null, Laya.Handler.create(Node, () => {
            cb && cb();
        }), delay ? delay : 0);
    }

    /**
     *旋转+放大缩小 
     * @param target 目标节点
     * @param fRotate 初始角度
     * @param fScaleX 初始X缩放
     * @param fScaleY 初始Y缩放
     * @param eRotate 最终角度
     * @param eScaleX 最终X缩放
     * @param eScaleY 最终Y缩放
     * @param time 花费时间
     * @param delay 延迟时间
     * @param cb 回调函数
     */
    export function rotate_Scale(target: Laya.Sprite, fRotate: number, fScaleX: number, fScaleY: number, eRotate: number, eScaleX: number, eScaleY: number, time: number, delay?: number, cb?: Function): void {
        target.scaleX = fScaleX;
        target.scaleY = fScaleY;
        target.rotation = fRotate;
        Laya.Tween.to(target, { rotation: eRotate, scaleX: eScaleX, scaleY: eScaleY }, time, null, Laya.Handler.create(this, () => {
            cb && cb();
            target.rotation = 0;
        }), delay ? delay : 0)
    }

    /**
     * 简单下落
     * @param node 节点
     * @param fY 初始Y位置
     * @param tY 目标Y位置
     * @param rotation 落地角度
     * @param time 花费时间
     * @param delay 延时时间
     * @param cb 回调函数
     */
    export function drop_Simple(node: Laya.Sprite, fY: number, tY: number, rotation: number, time: number, delay: number, cb: Function): void {
        node.y = fY;
        Laya.Tween.to(node, { y: tY, rotation: rotation }, time, Laya.Ease.circOut, Laya.Handler.create(this, () => {
            cb && cb();
        }), delay);
    }

    /**
      * 下落回弹动画 ，类似于连丝蜘蛛下落，下落=》低于目标位置=》回到目标位置
      * @param target 目标
      * @param fAlpha 初始透明度
      * @param firstY 初始位置
      * @param targetY 目标位置
      * @param extendY 延伸长度
      * @param time 花费时间
      * @param delay 延时时间
      * @param cb 结束回调函数
      * */
    export function drop_KickBack(target: Laya.Sprite, fAlpha: number, firstY: number, targetY: number, extendY: number, time: number, delay?: number, cb?: Function): void {
        target.alpha = fAlpha;
        target.y = firstY;
        if (!delay) {
            delay = 0;
        }
        Laya.Tween.to(target, { alpha: 1, y: targetY + extendY }, time, null, Laya.Handler.create(this, () => {

            Laya.Tween.to(target, { y: targetY - extendY / 2 }, time / 2, null, Laya.Handler.create(this, () => {

                Laya.Tween.to(target, { y: targetY }, time / 4, null, Laya.Handler.create(this, () => {
                    cb && cb();
                }), 0);
            }), 0);
        }), delay);
    }

    /**
     * 偏移下落,模仿抛物线
     * @param node 节点
     * @param targetY y目标位置
     * @param targetX x偏移量
     * @param rotation 落地角度
     * @param time 花费时间
     * @param delay 延时时间
     * @param func 回调函数
     */
    export function drop_Excursion(node, targetY, targetX, rotation, time, delay, func): void {
        // 第一阶段
        Laya.Tween.to(node, { x: node.x + targetX, y: node.y + targetY * 1 / 6 }, time, Laya.Ease.expoIn, Laya.Handler.create(this, () => {
            Laya.Tween.to(node, { x: node.x + targetX + 50, y: targetY, rotation: rotation }, time, null, Laya.Handler.create(this, () => {
                if (func !== null) {
                    func();
                }
            }), 0);
        }), delay);
    }

    /**
     * 上升
     * @param node 节点
     * @param initialY 初始y位置
     * @param initialR 初始角度
     * @param targetY 目标y位置
     * @param time 花费时间
     * @param delay 延时时间
     * @param func 回调函数
     */
    export function goUp_Simple(node, initialY, initialR, targetY, time, delay, func): void {
        node.y = initialY;
        node.rotation = initialR;
        Laya.Tween.to(node, { y: targetY, rotation: 0 }, time, Laya.Ease.cubicOut, Laya.Handler.create(this, () => {
            if (func !== null) {
                func();
            }
        }), delay);
    }

    /**
     * 用于卡牌X轴方向的横向旋转
     * 两个面不一样的卡牌旋转动画，卡��正面有内容，卡牌背面没有内容，这个内容是一个子节点
     * @param node 节点
     * @param time 每次旋转1/2次花费时间
     * @param func1 中间回调，是否需要变化卡牌内容,也就是子节点内容
     * @param delay 延时时间
     * @param func2 结束时回调函数
     */
    export function cardRotateX_TowFace(node: Laya.Sprite, time: number, func1?: Function, delay?: number, func2?: Function): void {
        Laya.Tween.to(node, { scaleX: 0 }, time, null, Laya.Handler.create(this, () => {
            // 所有子节点消失
            LwgTools.Node.childrenVisible2D(node, false);
            if (func1) {
                func1();
            }
            Laya.Tween.to(node, { scaleX: 1 }, time * 0.9, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(node, { scaleX: 0 }, time * 0.8, null, Laya.Handler.create(this, () => {

                    LwgTools.Node.childrenVisible2D(node, true);

                    Laya.Tween.to(node, { scaleX: 1 }, time * 0.7, null, Laya.Handler.create(this, () => {
                        if (func2) {
                            func2();
                        }
                    }), 0);
                }), 0);
            }), 0);
        }), delay);
    }

    /**
    * 用于卡牌X轴方向的横向旋转
    * 两个面一样的卡牌旋转动画，正反面内容是一样的
    * @param node 节点
    * @param func1 中间回调，是否需要变化卡牌内容,也就是子节点内容
    * @param time 每次旋转1/2次花费时间
    * @param delay 延时时间
    * @param func2 结束时回调函数
    */
    export function cardRotateX_OneFace(node: Laya.Sprite, func1: Function, time: number, delay: number, func2: Function): void {
        Laya.Tween.to(node, { scaleX: 0 }, time, null, Laya.Handler.create(this, () => {
            if (func1 !== null) {
                func1();
            }
            Laya.Tween.to(node, { scaleX: 1 }, time, null, Laya.Handler.create(this, () => {
                if (func2 !== null) {
                    func2();
                }
            }), 0);
        }), delay);
    }

    /**
    * 用于卡牌Y轴方向的纵向旋转
    * 两个面不一样的卡牌旋转动画，卡牌正面有内容，卡牌背面没有内容，这个内容是一个子节点
    * @param node 节点
    * @param time 每次旋转1/2次花费时间
    * @param func1 中间回调，是否需要变化卡牌内容,也就是子节点内容
    * @param delay 延时时间
    * @param func2 结束时回调函数
    */
    export function cardRotateY_TowFace(node: Laya.Sprite, time: number, func1?: Function, delay?: number, func2?: Function): void {
        Laya.Tween.to(node, { scaleY: 0 }, time, null, Laya.Handler.create(this, () => {
            // 所有子节点消失
            LwgTools.Node.childrenVisible2D(node, false);
            if (func1) {
                func1();
            }
            Laya.Tween.to(node, { scaleY: 1 }, time, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(node, { scaleY: 0 }, time, null, Laya.Handler.create(this, () => {
                    Laya.Tween.to(node, { scaleY: 1 }, time * 1 / 2, null, Laya.Handler.create(this, () => {
                        LwgTools.Node.childrenVisible2D(node, true);
                        if (func2) {
                            func2();
                        }
                    }), 0);
                }), 0);
            }), 0);
        }), delay);
    }

    /**
    * 用于卡牌Y轴方向的纵向旋转
    * 两个面一样的卡牌旋转动画，正反面内容是一样的
    * @param node 节点
    * @param func1 中间回调，是否需要变化卡牌内容,也就是子节点内容
    * @param time 每次旋转1/2次花费时间
    * @param delay 延时时间
    * @param func2 结束时回调函数
    */
    export function cardRotateY_OneFace(node: Laya.Sprite, func1: Function, time: number, delay?: number, func2?: Function): void {
        Laya.Tween.to(node, { scaleY: 0 }, time, null, Laya.Handler.create(this, () => {
            if (func1) {
                func1();
            }
            Laya.Tween.to(node, { scaleY: 1 }, time, null, Laya.Handler.create(this, () => {
                if (func2) {
                    func2();
                }
            }), 0);
        }), delay ? delay : 0);
    }

    /**
     * 移动中变化一次角度属性，分为两个阶段，第一个阶段是移动并且变化角度，第二个阶段是到达目标位置，并且角度回归为0
     * @param node 节点
     * @param targetX 目标x位置
     * @param targetY 目标y位置
     * @param per 中间位置的百分比
     * @param rotation_per 第一阶段变化到多少角度
     * @param time 花费时间
     * @param func
     */
    export function move_changeRotate(node, targetX, targetY, per, rotation_pe, time, func): void {

        let targetPerX = targetX * per + node.x * (1 - per);
        let targetPerY = targetY * per + node.y * (1 - per);

        Laya.Tween.to(node, { x: targetPerX, y: targetPerY, rotation: 45 }, time, null, Laya.Handler.create(this, () => {

            Laya.Tween.to(node, { x: targetX, y: targetY, rotation: 0 }, time, null, Laya.Handler.create(this, () => {
                if (func !== null) {
                    func()
                }
            }), 0);
        }), 0);
    }

    /**
     * 左右拉伸的Q弹动画
     * @param node 节点
     * @param MaxScale 最大拉伸
     * @param time 拉伸需要的时间，然后持续衰减
     * @param delay 延时
     * @param func 回调函数
     */
    export function bomb_LeftRight(node: Laya.Sprite, MaxScale: number, time: number, func?: Function, delay?: number): void {
        Laya.Tween.to(node, { scaleX: MaxScale }, time, Laya.Ease.cubicInOut, Laya.Handler.create(this, () => {
            Laya.Tween.to(node, { scaleX: 0.85 }, time * 0.5, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(node, { scaleX: MaxScale * 0.9 }, time * 0.55, null, Laya.Handler.create(this, () => {
                    Laya.Tween.to(node, { scaleX: 0.95 }, time * 0.6, null, Laya.Handler.create(this, () => {
                        Laya.Tween.to(node, { scaleX: 1 }, time * 0.65, null, Laya.Handler.create(this, () => {
                            if (func) func();
                        }), 0);
                    }), 0);
                }), 0);
            }), 0);
        }), delay);
    }

    /**
     * 类似气球弹出并且回弹，第一个阶段弹到空中，这个阶段可以给个角度，第二阶段落下变为原始状态，第三阶段再次放大一次，这次放大小一点，第四阶段回到原始状态，三、四个阶段是回弹一次，根据第一个阶段参数进行调整
     * @param node 节点
     * @param firstAlpha 初始透明度
     * @param firstScale 最终大小，因为有些节点可能初始Scale并不是1
     * @param maxScale 最大放大比例
     * @param rotation 第一阶段角度 
     * @param time1 第一阶段花费时间
     * @param delay 延时时间
     * @param func 完成后的回调
     */
    export function bombs_Appear(node: Laya.Sprite, firstAlpha: number, endScale: number, maxScale: number, rotation: number, time: number, func?: Function, delay?: number): void {
        node.scale(0, 0);
        node.alpha = firstAlpha;
        Laya.Tween.to(node, { scaleX: maxScale, scaleY: maxScale, alpha: 1, rotation: rotation }, time, Laya.Ease.cubicInOut, Laya.Handler.create(this, () => {
            Laya.Tween.to(node, { scaleX: endScale, scaleY: endScale, rotation: 0 }, time / 2, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(node, { scaleX: endScale + (maxScale - endScale) / 3, scaleY: endScale + (maxScale - endScale) / 3, rotation: 0 }, time / 3, null, Laya.Handler.create(this, () => {
                    Laya.Tween.to(node, { scaleX: endScale, scaleY: endScale, rotation: 0 }, time / 4, null, Laya.Handler.create(this, () => {
                        if (func) {
                            func()
                        }
                    }), 0);
                }), 0);
            }), 0);
        }), delay ? delay : 0);
    }

    /**
     * 类似气球弹出并且回弹，所有子节点按顺序弹出来
     * @param node 节点
     * @param firstAlpha 初始透明度
     * @param endScale 初始大小
     * @param rotation1 第一阶段角度
     * @param scale1 第一阶段放大比例
     * @param time1 第一阶段花费时间
     * @param time2 第二阶段花费时间
     * @param interval 每个子节点的时间间隔
     * @param func 完成回调
     * @param audioType 音效类型
     */
    export function bombs_AppearAllChild(node: Laya.Sprite, firstAlpha, endScale, scale1, rotation1, time1, interval?: number, func?: Function, audioType?: String): void {
        let de1 = 0;
        if (!interval) {
            interval = 100;
        }
        for (let index = 0; index < node.numChildren; index++) {
            let Child = node.getChildAt(index) as Laya.Sprite;
            Child.alpha = 0;
            Laya.timer.once(de1, this, () => {
                Child.alpha = 1;
                if (index !== node.numChildren - 1) {
                    func == null;
                }
                bombs_Appear(Child, firstAlpha, endScale, scale1, rotation1, time1, func);
            })
            de1 += interval;
        }
    }

    /**
     *  类似气球消失，所有子节点按顺序消失
      * @param node 节点
     * @param scale 收缩后的大小
     * @param alpha 收缩后的透明度
     * @param rotation 收缩后的角度 
     * @param time 每个子节点花费时间
     * @param interval 每个子节点时间间隔
     * @param func 完成后的回调
     */
    export function bombs_VanishAllChild(node, endScale, alpha, rotation, time, interval, func?: Function) {
        let de1 = 0;
        if (!interval) {
            interval = 100;
        }
        for (let index = 0; index < node.numChildren; index++) {
            let Child = node.getChildAt(index);
            Laya.timer.once(de1, this, () => {
                if (index !== node.numChildren - 1) {
                    func == null;
                }
                bombs_Vanish(node, endScale, alpha, rotation, time, func);
            })
            de1 += interval;
        }
    }

    /**
     * 类似气球收缩消失
     * @param node 节点
     * @param scale 收缩后的大小
     * @param alpha 收缩后的透明度
     * @param rotation 收缩后的角度 
     * @param time 花费时间
     * @param delay 延时时间
     * @param func 完成后的回调
     */
    export function bombs_Vanish(node: Laya.Node, scale: number, alpha: number, rotation: number, time: number, func?: Function, delay?: number): void {
        Laya.Tween.to(node, { scaleX: scale, scaleY: scale, alpha: alpha, rotation: rotation }, time, Laya.Ease.cubicOut, Laya.Handler.create(this, () => {
            if (func) {
                func()
            }
        }), delay ? delay : 0);
    }

    /**
     * 类似于心脏跳动的回弹效果
     * @param node 节点
     * @param firstScale 初始大小,也就是原始大小
     * @param scale1 需要放大的大小,
     * @param time 花费时间
     * @param delay 延时时间
     * @param func 完成后的回调
     */
    export function swell_shrink(node: Laya.Sprite, firstScale: number, scale1: number, time: number, delay?: number, cb?: Function): void {
        // LwgSound.playSound(Enum.AudioName.commonPopup, 1);
        if (!delay) {
            delay = 0;
        }
        Laya.Tween.to(node, { scaleX: scale1, scaleY: scale1, alpha: 1, }, time, Laya.Ease.cubicInOut, Laya.Handler.create(this, () => {

            Laya.Tween.to(node, { scaleX: firstScale, scaleY: firstScale, rotation: 0 }, time, null, Laya.Handler.create(this, () => {

                Laya.Tween.to(node, { scaleX: firstScale + (scale1 - firstScale) * 0.5, scaleY: firstScale + (scale1 - firstScale) * 0.5, rotation: 0 }, time * 0.5, null, Laya.Handler.create(this, () => {

                    Laya.Tween.to(node, { scaleX: firstScale, scaleY: firstScale, rotation: 0 }, time, null, Laya.Handler.create(this, () => {
                        cb && cb()
                    }), 0);
                }), 0);
            }), 0);
        }), delay);
    }

    /**
     * 简单移动,初始位置可以为null
     * @param node 节点
     * @param targetX 目标x位置
     * @param targetY 目标y位置
     * @param time 花费时间
     * @param func 完成后的回调
     * @param delay 延时时间
     * @param ease 动画类型
     */
    export function move(node: Laya.Sprite, targetX: number, targetY: number, time: number, func?: Function, delay?: number, ease?: Function,): void {
        Laya.Tween.to(node, { x: targetX, y: targetY }, time, ease ? ease : null, Laya.Handler.create(this, () => {
            if (func) {
                func()
            }
        }), delay ? delay : 0);
    }

    /**
    * X轴方向的移动伴随形变回弹效果，移动的过程中X轴会被挤压，然后回到原始状态
    * @param node 节点
    * @param firstX 初始x位置
    * @param firstR 初始角度
    * @param scaleX x轴方向的挤压增量
    * @param scaleY y轴方向的挤压增量
    * @param targetX 目标X位置
    * @param time 花费时间
    * @param delay 延时时间
    * @param func 完成后的回调
    */
    export function move_Deform_X(node, firstX, firstR, targetX, scaleX, scaleY, time, delay, func): void {
        node.alpha = 0;
        node.x = firstX;
        node.rotation = firstR;
        Laya.Tween.to(node, { x: targetX, scaleX: 1 + scaleX, scaleY: 1 + scaleY, rotation: firstR / 3, alpha: 1 }, time, null, Laya.Handler.create(this, () => {
            // 原始状态
            Laya.Tween.to(node, { scaleX: 1, scaleY: 1, rotation: 0 }, time, null, Laya.Handler.create(this, () => {
                if (func !== null) {
                    func()
                }
            }), 0);
        }), delay);
    }


    /**
    * Y轴方向的移动伴随形变回弹效果，移动的过程中X轴会被挤压，然后回到原始状态
    * @param target 节点
    * @param firstY 初始Y位置
    * @param firstR 初始角度
    * @param scaleY y轴方向的挤压
    * @param scaleX x轴方向的挤压
    * @param targeY 目标Y位置
    * @param time 花费时间
    * @param delay 延时时间
    * @param func 完成后的回调
    */
    export function move_Deform_Y(target, firstY, firstR, targeY, scaleX, scaleY, time, delay, func): void {
        target.alpha = 0;
        if (firstY) {
            target.y = firstY;
        }
        target.rotation = firstR;
        Laya.Tween.to(target, { y: targeY, scaleX: 1 + scaleX, scaleY: 1 + scaleY, rotation: firstR / 3, alpha: 1 }, time, null, Laya.Handler.create(this, () => {
            // 原始状态
            Laya.Tween.to(target, { scaleX: 1, scaleY: 1, rotation: 0 }, time, null, Laya.Handler.create(this, () => {
                if (func !== null) {
                    func()
                }
            }), 0);
        }), delay);
    }

    /**
    * 简单的透明度渐变闪烁动画,闪一下消失
    * @param target 节点
    * @param minAlpha 最低到多少透明度
    * @param maXalpha 最高透明度
    * @param time 花费时间
    * @param delay 延迟时间
    * @param func 完成后的回调
    */
    export function blink_FadeOut_v(target, minAlpha, maXalpha, time, delay, func): void {
        target.alpha = minAlpha;
        Laya.Tween.to(target, { alpha: maXalpha }, time, null, Laya.Handler.create(this, () => {
            // 原始状态
            Laya.Tween.to(target, { alpha: minAlpha }, time, null, Laya.Handler.create(this, () => {
                if (func !== null) {
                    func()
                }
            }), 0);
        }), delay);
    }

    /**
      * 简单的透明度渐变闪烁动画，闪烁后不消失
      * @param target 节点
      * @param minAlpha 最低到多少透明度
      * @param maXalpha 最高透明度
      * @param time 花费时间
      * @param delay 延迟时间
      * @param func 完成后的回调
      */
    export function blink_FadeOut(target, minAlpha, maXalpha, time, delay?: number, func?: Function): void {
        target.alpha = minAlpha;
        if (!delay) {
            delay = 0;
        }
        Laya.Tween.to(target, { alpha: minAlpha }, time, null, Laya.Handler.create(this, () => {
            // 原始状态
            Laya.Tween.to(target, { alpha: maXalpha }, time, null, Laya.Handler.create(this, () => {
                if (func) {
                    func()
                }
            }), 0);
        }), delay);
    }

    /**
      * 根据节点的锚点进行摇头动画，类似于不倒翁动画
      * @param target 节点
      * @param rotate 摇摆的幅度
      * @param time 花费时间
      * @param delay 延迟时间
      * @param func 完成后的回调
      */
    export function shookHead_Simple(target, rotate, time, delay?: number, func?: Function): void {
        let firstR = target.rotation;
        Laya.Tween.to(target, { rotation: firstR + rotate }, time, null, Laya.Handler.create(this, () => {
            Laya.Tween.to(target, { rotation: firstR - rotate * 2 }, time, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(target, { rotation: firstR + rotate }, time, null, Laya.Handler.create(this, () => {
                    Laya.Tween.to(target, { rotation: firstR }, time, null, Laya.Handler.create(this, () => {
                        if (func) {
                            func()
                        }
                    }), 0);
                }), 0);
            }), 0);
        }), delay ? delay : 0);
    }

    /**
     * 提示框动画1,从渐隐出现+上移=》停留=》到渐隐消失+向下
     * @param target 节点
     * @param upNum 向上上升高度
     * @param time1 向上上升的时间
     * @param stopTime 停留时间
     * @param downNum 向下消失距离
     * @param time2 向下消失时间
     * @param func 结束回调
     */
    export function hideAni_01(target, upNum, time1, stopTime, downNum, time2, func): void {
        target.alpha = 0;
        Laya.Tween.to(target, { alpha: 1, y: target.y - upNum }, time1, null, Laya.Handler.create(this, () => {
            Laya.Tween.to(target, { y: target.y - 15 }, stopTime, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(target, { alpha: 0, y: target.y + upNum + downNum }, time2, null, Laya.Handler.create(this, () => {
                    if (func !== null) {
                        func()
                    }

                }), 0);
            }), 0);
        }), 0);
    }


    /**
    * 放大缩小加上渐变
    * @param target 节点
    * @param fAlpha 初始透明度
    * @param fScaleX 初始X大小
    * @param fScaleY 初始Y大小
    * @param endScaleX 最终X大小
    * @param endScaleY 最终Y大小
    * @param eAlpha 最终透明度
    * @param time 花费时间
    * @param delay 延迟时间
    * @param func 结束回调
    * @param ease 效果
    */
    export function scale_Alpha(target: Laya.Sprite, fAlpha: number, fScaleX: number, fScaleY: number, eScaleX: number, eScaleY: number, eAlpha: number, time: number, delay?: number, func?: Function, ease?: Function): void {
        if (!delay) {
            delay = 0;
        }
        if (!ease) {
            ease = null;
        }
        target.alpha = fAlpha;
        target.scaleX = fScaleX;
        target.scaleY = fScaleY;
        Laya.Tween.to(target, { scaleX: eScaleX, scaleY: eScaleY, alpha: eAlpha }, time, ease, Laya.Handler.create(this, () => {
            if (func) {
                func()
            }
        }), delay);
    }

    /**
    * 普通缩放
    * @param target 节点
    * @param fScaleX 初始X大小
    * @param fScaleY 初始Y大小
    * @param endScaleX 最终X大小
    * @param endScaleY 最终Y大小
    * @param time 花费时间
    * @param delay 延迟时间
    * @param func 结束回调
    * @param ease 效果
    */
    export function scale(target: Laya.Sprite, fScaleX: number, fScaleY: number, eScaleX: number, eScaleY: number, time: number, delay?: number, func?: Function, ease?: Function): void {
        target.scaleX = fScaleX;
        target.scaleY = fScaleY;
        Laya.Tween.to(target, { scaleX: eScaleX, scaleY: eScaleY }, time, ease ? ease : null, Laya.Handler.create(this, () => {
            if (func) {
                func()
            }
        }), delay ? delay : 0);
    }

    /**
     * 旋转放大回弹动画，旋转放大角度增加=》原始大小和角度=，旋转放大角��增加=》原始大小和角度，有一个回来效果
     * @param target 目标
     * @param eAngle 延伸角度，就是回收前的多出的角度
     * @param eScale 延伸大小，就是回收前的放大的大小
     * @param time1 第一阶段花费时间
     * @param time2 第二阶段花费时间
     * @param delay1 第一阶段延时时间
     * @param delay2 第一阶段延时时间
     * @param func 结束回调函数
     * */
    export function rotate_Magnify_KickBack(node, eAngle, eScale, time1, time2, delay1, delay2, func): void {
        node.alpha = 0;
        node.scaleX = 0;
        node.scaleY = 0;
        Laya.Tween.to(node, { alpha: 1, rotation: 360 + eAngle, scaleX: 1 + eScale, scaleY: 1 + eScale }, time1, null, Laya.Handler.create(this, () => {

            Laya.Tween.to(node, { rotation: 360 - eAngle / 2, scaleX: 1 + eScale / 2, scaleY: 1 + eScale / 2 }, time2, null, Laya.Handler.create(this, () => {

                Laya.Tween.to(node, { rotation: 360 + eAngle / 3, scaleX: 1 + eScale / 5, scaleY: 1 + eScale / 5 }, time2, null, Laya.Handler.create(this, () => {

                    Laya.Tween.to(node, { rotation: 360, scaleX: 1, scaleY: 1 }, time2, null, Laya.Handler.create(this, () => {
                        node.rotation = 0;
                        if (func !== null) {
                            func()
                        }
                    }), 0);
                }), delay2);
            }), 0);
        }), delay1);
    }
}
/**设置模块*/
export module LwgSet {
    /**音效设置*/
    export class Sound {
        static get switch(): boolean {
            return Laya.LocalStorage.getItem('Setting/sound') == '0' ? false : true;
        }
        /**0表示关闭，1表示开启*/
        static set switch(value: boolean) {
            let val: number;
            if (value) {
                val = 1;
            } else {
                val = 0;
            }
            Laya.LocalStorage.setItem('Setting/sound', val.toString());
        }
    };

    /**背景音乐开关*/
    export class BgMusic {
        static get switch(): boolean {
            return Laya.LocalStorage.getItem('Setting/bgMusic') == '0' ? false : true;
        }
        /**0表示关闭，1表示开启*/
        static set switch(value: boolean) {
            let val: number;
            if (value) {
                val = 1;
                Laya.LocalStorage.setItem('Setting/bgMusic', val.toString());
                LwgSound.playMusic();
            } else {
                val = 0;
                Laya.LocalStorage.setItem('Setting/bgMusic', val.toString());
                LwgSound.stopMusic();
            }
        }
    };

    /**震动开关*/
    export class Shake {
        static get switch(): boolean {
            return Laya.LocalStorage.getItem('Setting/shake') == '0' ? false : true;
        }
        /**0表示关闭，1表示开启*/
        static set switch(value: boolean) {
            let val: number;
            if (value) {
                val = 1;
            } else {
                val = 0;
            }
            Laya.LocalStorage.setItem('Setting/shake', val.toString());
        }
    };

    /**设置按钮 */
    export class Button extends LwgScene.ViewObjBase {
        private static _ins: Button;
        static get ins() {
            if (!this._ins) {
                this._ins = new Button();
            }
            return this._ins;
        }
        protected createCb(): void {
            this.view.on(Laya.Event.CLICK, this, this.onView);
        }
        private onView(e: Laya.Event): void {
            e.stopPropagation();
            LwgScene.openScene(LwgScene.NameBase.Set);
        }
    }
}

/**
 * 2.音乐播放模块
 */
export module LwgSound {
    export class Init {
        /**
         * 通用音效
         * @param bgmUrl 默认背景音效
         * @param btnUrl 默认按钮音效
         * @param getMoneyUrl 默认获取金币音效
         */
        constructor(_bgmUrl: string, _btnUrl: string, _getMoneyUrl: string) {
            bgmUrl = _bgmUrl;
            btnUrl = _btnUrl;
            getMoneyUrl = _getMoneyUrl;
            LwgSound.playMusic();
        }
        public get LwgSound(): string {
            return 'LwgSound';
        }
    }
    /**
     * 背景音效地址
     */
    export let bgmUrl = '';
    /**
     * 按钮音效地址
     */
    export let btnUrl = '';
    /**
     * 获得金币
     */
    export let getMoneyUrl = '';

    /**通用音效播放
     * @param url 音效地址，不传则是默认音效
     * @param number 播放次数，默认1次
     * @param func 播放完毕回调
     */
    export function playSound(url?: string, number?: number, func?: Function) {
        if (!url) {
            url = btnUrl;
        }
        if (!number) {
            number = 1;
        }
        if (LwgSet.Sound.switch) {
            Laya.SoundManager.playSound(url, number, Laya.Handler.create(this, () => {
                if (func) {
                    func();
                }
            }));
        }
    }

    /**通用音效播放
     * @param url 音效地址，不传则是默认音效
     * @param number 播放次数，默认1次
     * @param func 播放完毕回调
     */
    export function playBtnSound(number?: number, func?: Function) {
        if (!number) {
            number = 1;
        }
        if (LwgSet.Sound.switch) {
            Laya.SoundManager.playSound(btnUrl, number, Laya.Handler.create(this, () => {
                if (func) {
                    func();
                }
            }));
        }
    }

    /**通用背景音乐播放
    * @param url 音效地址，不传则是默认音效
    * @param number 循环次数，0表示无限循环
    * @param delay 延时时间，默认0
    */
    export function playMusic(url?: string, number?: number, delay?: number) {
        if (LwgSet.BgMusic.switch) {
            Laya.SoundManager.playMusic(url ? url : bgmUrl, number ? number : 0, Laya.Handler.create(this, () => { }), delay ? delay : 0);
        }
    }
    /**停止播放背景音乐*/
    export function stopMusic() {
        Laya.SoundManager.stopMusic();
    }
    /**停止播放一个音效*/
    export function stopSound(url: string) {
        Laya.SoundManager.stopSound(url);
    }
    /**停止播放一个音效*/
    export function stopAllSound() {
        Laya.SoundManager.stopAllSound();
    }
    /**关闭所有声音*/
    export function stopAll() {
        Laya.SoundManager.stopAll();
    }
    //ios退出后台后背景概率性不会出现
    // static _visibilityChange() {
    //     if (ILaya.stage.isVisibility) {
    //         this._recreateWebAudio(() => { SoundManager._stageOnFocus(); });
    //     }
    //     else {
    //         SoundManager._stageOnBlur();
    //     }
    // }

    // static _recreateWebAudio(cb) {
    //     if (WebAudioSound.webAudioEnabled) {
    //         WebAudioSound.ctx.close().then(()=> {
    //             const AudioContext = window.AudioContext
    //                 || window.webkitAudioContext || window.mozAudioContext;
    //             const newCtx = new AudioContext();

    //             if (newCtx) {  //最多可以创建6个AudioContext,超过后为会为空
    //                 WebAudioSound.ctx = newCtx;
    //                 WebAudioSound.setUnlocked(false);
    //                 WebAudioSound.initWebAudio();
    //                 cb();
    //             }
    //         });
    //     }
    // }
}
/**
 * 工具
 */
export module LwgTools {
    /**
     * 关卡操作,节点信息
     */
    export module NodeData {
        /**
           * 获取节点的子节点信息并且下载下来，用于关卡排布
           * @param spirte 所有关卡的父节点
           */
        export function getMsgFromSprite3DArr(spirteArr: Laya.Sprite3D[]) {
            if (spirteArr.length <= 0) {
                console.log("------ getMsg err");
                return;
            }
            console.log("------- getMsg start");
            let levelArr = [];
            let LvRECORD = {
                RECORDS: []
            };
            for (let i = 0; i < spirteArr.length; i++) {
                let child: Laya.Sprite3D = spirteArr[i] as Laya.Sprite3D;
                let levelMsg = {};
                levelMsg["name"] = child.name;
                let childData = [];
                for (let j = 0; j < child.numChildren; j++) {
                    let son: Laya.Sprite3D = child.getChildAt(j) as Laya.Sprite3D;
                    let data = {};
                    setData(data, son);
                    childData.push(data);
                }
                levelMsg["childData"] = childData;
                levelArr.push(levelMsg);
            }
            // console.log("------- getMsg end", levelArr);
            LvRECORD.RECORDS = levelArr;
            writeMsgToFileThenDownload(JSON.stringify(LvRECORD), 'LevelsMsg.json');
        }
        /**
          * 获取节点的子节点信息并且下载下来，用于关卡排布
          * @param spirte 所有关卡的父节点
          */
        export function getMsgFromSprite3D(spirte: Laya.Sprite3D) {
            if (!spirte || spirte.destroyed) {
                console.log("------ getMsg err");
                return;
            }
            console.log("------- getMsg start");
            let levelArr = [];
            let LvRECORD = {
                RECORDS: []
            };
            for (let i = 0; i < spirte.numChildren; i++) {
                let levelMsg = {};
                let child: Laya.Sprite3D = spirte.getChildAt(i) as Laya.Sprite3D;
                levelMsg["name"] = child.name;
                let list = [];
                for (let j = 0; j < child.numChildren; j++) {
                    let son: Laya.Sprite3D = child.getChildAt(j) as Laya.Sprite3D;
                    let data = {};
                    setData(data, son);
                    list.push(data);
                }
                levelMsg["childData"] = list;
                levelArr.push(levelMsg);
            }
            // console.log("------- getMsg end", levelArr);
            LvRECORD.RECORDS = levelArr;
            writeMsgToFileThenDownload(JSON.stringify(LvRECORD), 'Roads.json');
        }

        //将内容写进json文件中并下载
        function writeMsgToFileThenDownload(content: string, filename: string) {
            const eleLink = document.createElement('a');
            eleLink.download = filename;
            eleLink.style.display = 'none';
            const blob = new Blob([content]);
            eleLink.href = URL.createObjectURL(blob);
            document.body.appendChild(eleLink);
            eleLink.click();
            document.body.removeChild(eleLink);
        }
        /**设置data格式 */
        function setData(data: {}, obj: Laya.Sprite3D): void {
            data["name"] = obj.name;
            data["active"] = obj.active;
            data["data"] = {
                "localPositionX": obj.transform.localPosition.x,
                "localPositionY": obj.transform.localPosition.y,
                "localPositionZ": obj.transform.localPosition.z,
                "localRotationEulerX": obj.transform.localRotationEuler.x,
                "localRotationEulerY": obj.transform.localRotationEuler.y,
                "localRotationEulerZ": obj.transform.localRotationEuler.z,
                "localScaleX": obj.transform.localScale.x,
                "localScaleY": obj.transform.localScale.y,
                "localScaleZ": obj.transform.localScale.z,
            }
        }
    }

    /**格式化*/
    export module Format {
        /**
         * 中文1~10
         * @param number 
         * @returns 
         */
        export function numberConvertedtoChinese(number: number): string {
            let str = '';
            switch (number) {
                case 1:
                    str = '一';

                    break;
                case 2:
                    str = '二';

                    break;
                case 3:
                    str = '三';

                    break;
                case 4:
                    str = '四';

                    break;
                case 5:
                    str = '五';

                    break;
                case 6:
                    str = '六';

                    break;
                case 7:
                    str = '七';

                    break;
                case 8:
                    str = '八';

                    break;
                case 9:
                    str = '九';

                    break;
                case 10:
                    str = '十';

                    break;
                default:
                    break;
            }

            return str;

        }

        /**
         * 将数字格式化，例如1000 = 1k；
         * @param number 数字
        */
        export function formatNumber(crc: number, fixNum = 0) {
            let textTemp: string;
            if (crc >= 1e27) {
                textTemp = (crc / 1e27).toFixed(fixNum) + "ae";
            } else if (crc >= 1e24) {
                textTemp = (crc / 1e24).toFixed(fixNum) + "ad";
            } else if (crc >= 1e21) {
                textTemp = (crc / 1e21).toFixed(fixNum) + "ac";
            } else if (crc >= 1e18) {
                textTemp = (crc / 1e18).toFixed(fixNum) + "ab";
            } else if (crc >= 1e15) {
                textTemp = (crc / 1e15).toFixed(fixNum) + "aa";
            } else if (crc >= 1e12) {
                textTemp = (crc / 1e12).toFixed(fixNum) + "t";
            } else if (crc >= 1e9) {
                textTemp = (crc / 1e9).toFixed(fixNum) + "b";
            } else if (crc >= 1e6) {
                textTemp = (crc / 1e6).toFixed(fixNum) + "m";
            } else if (crc >= 1e3) {
                textTemp = (crc / 1e3).toFixed(fixNum) + "k";
            } else {
                textTemp = Math.round(crc).toString();
            }
            return textTemp;
        }
        /**
          * 字符串和数字相加返回字符串
          **/
        export function strAddNum(str: string, num: number): string {
            return (Number(str) + num).toString();
        }
        /**
         * 数字和字符串相加返回数字
         * */
        export function NumAddStr(num: number, str: string): number {
            return Number(str) + num;
        }
    }

    /**节点相关*/
    export module Node {
        /**
         * 子节点在数组中倒序
         * @param spParent 父节点
         */
        export function setChildrenReverseZOrder(spParent: Laya.Node): void {
            for (let index = 0; index < spParent.numChildren; index++) {
                const element = spParent.getChildAt(index);
                spParent.setChildIndex(element, 0);
            }
        }

        /**
         * 一个节点不会超出他的父节点
         * @param Node 节点
         * */
        export function setTieByParent(Node: Laya.Sprite): void {
            const Parent = Node.parent as Laya.Sprite;
            if (Node.x > Parent.width - Node.width / 2) {
                Node.x = Parent.width - Node.width / 2;
            }
            if (Node.x < Node.width / 2) {
                Node.x = Node.width / 2;
            }
            if (Node.y > Parent.height - Node.height / 2) {
                Node.y = Parent.height - Node.height / 2;
            }
            if (Node.y < Node.height / 2) {
                Node.y = Node.height / 2;
            }
        }
        /**
          * 一个节点不会超出舞台
          * @param Node 节点
          * @param center 检测边缘还是坐标点，默认为false
          * */
        export function setTieByStage(Node: Laya.Sprite, center?: boolean): void {
            const Parent = Node.parent as Laya.Sprite;
            const gPoint = Parent.localToGlobal(new Laya.Point(Node.x, Node.y));
            if (!center) {
                if (gPoint.x > Laya.stage.width) {
                    gPoint.x = Laya.stage.width;
                }
            } else {
                if (gPoint.x > Laya.stage.width - Node.width / 2) {
                    gPoint.x = Laya.stage.width - Node.width / 2;
                }
            }

            if (!center) {
                if (gPoint.x < 0) {
                    gPoint.x = 0;
                }
            } else {
                if (gPoint.x < Node.width / 2) {
                    gPoint.x = Node.width / 2;
                }
            }

            if (!center) {
                if (gPoint.y > Laya.stage.height) {
                    gPoint.y = Laya.stage.height;
                }
            } else {
                if (gPoint.y > Laya.stage.height - Node.height / 2) {
                    gPoint.y = Laya.stage.height - Node.height / 2;
                }
            }

            if (!center) {
                if (gPoint.y < 0) {
                    gPoint.y = 0;
                }
            } else {
                if (gPoint.y < Node.height / 2) {
                    gPoint.y = Node.height / 2;
                }
            }
            const lPoint = Parent.globalToLocal(gPoint);
            Node.pos(lPoint.x, lPoint.y);
        }

        /**
          * 检测节点是否超出舞台
          * @param _Sprite 节点
          * @param func 回调函数
          * */
        export function getISLeaveStage(_Sprite: Laya.Sprite, func: Function): Boolean {
            let Parent = _Sprite.parent as Laya.Sprite;
            if (!Parent) {
                return false;
            }
            let gPoint = Parent.localToGlobal(new Laya.Point(_Sprite.x, _Sprite.y));
            if (gPoint.x > Laya.stage.width + 10 || gPoint.x < -10) {
                if (func) {
                    func();
                }
                return true;
            }
            if (gPoint.y > Laya.stage.height + 10 || gPoint.y < -10) {
                if (func) {
                    func();
                }
                return true;
            }
        }

        /**
         * @export 获取一个节点的世界坐标
         * @param {Laya.Sprite} sp 节点
         * @return {*}  {Laya.Point}
         */
        export function getNodeGPoint(sp: Laya.Sprite): Laya.Point {
            if (!sp.parent) {
                return;
            }
            return (sp.parent as Laya.Sprite).localToGlobal(new Laya.Point(sp.x, sp.y));
        }
        /**
        * 检测两个节点的距离是否在指定距离之内,基于舞台,无论在与不在都会返回他们的距离
        * @param _Sprite1 节点1
        * @param _Sprite2 节点2
        * @param distance 距离
        * @param func 回调函数
        */
        export function checkTwoDistance(_Sprite1: Laya.Sprite, _Sprite2: Laya.Sprite, distance?: number, func?: Function): number {
            if (!_Sprite1 || !_Sprite2) {
                return;
            }
            let Parent1 = _Sprite1.parent as Laya.Sprite;
            let Parent2 = _Sprite2.parent as Laya.Sprite;
            if (!_Sprite1.parent || !_Sprite2.parent) {
                return;
            }
            let gPoint1 = Parent1.localToGlobal(new Laya.Point(_Sprite1.x, _Sprite1.y));
            let gPoint2 = Parent2.localToGlobal(new Laya.Point(_Sprite2.x, _Sprite2.y));
            if (gPoint1.distance(gPoint2.x, gPoint2.y) <= distance) {
                func && func();
            }
            return gPoint1.distance(gPoint2.x, gPoint2.y);
        }
        /**
         * @export 返回子节点随着Y轴进行排序数组
         * @param {Laya.Sprite} sp 节点
         * @param {boolean} zOrder 是否改变其层级，默认为true,按照0起始的整数开始排序
         * @param {boolean} [along] 默认为true，Y坐标越大层级越高.false则反向
         */
        export function setChildZOrderByPosY(sp: Laya.Sprite, zOrder?: boolean, along?: boolean): Array<Laya.Sprite> {
            let arr = [];
            if (sp.numChildren == 0) {
                return arr;
            };
            for (let index = 0; index < sp.numChildren; index++) {
                const element = sp.getChildAt(index);
                arr.push(element);
            }
            ObjArray.sortByProperty(arr, 'y');
            if (zOrder) {
                for (let index = 0; index < arr.length; index++) {
                    const element = arr[index];
                    element['zOrder'] = index;
                }
            }
            if (along) {
                let arr0 = [];
                for (let index = arr.length - 1; index >= 0; index--) {
                    const element = arr[index];
                    console.log(element);
                    element['zOrder'] = arr.length - index;
                    arr0.push(element);
                }
                return arr0;
            } else {
                return arr;
            }
        }

        /**
          * 根据子节点的某个属性包括手动赋值的node['属性']，获取相同属性的数组
          * @param node 节点
          * @param property 属性值
          * @param value 值
          * */
        export function getChildArrByProperty(node: Laya.Node, property: string, value: any): Array<Laya.Node> {
            let childArr = [];
            for (let index = 0; index < node.numChildren; index++) {
                const element = node.getChildAt(index);
                if (element[property] == value) {
                    childArr.push(element);
                }
            }
            return childArr;
        }
        /**
         * 随机出数个子节点，返回这个子节点数组
         * @param node 节点
         * @param num 数量，默认为1
         */
        export function randomChildren(node: Laya.Node, num?: number): Array<Laya.Node> {
            let childArr = [];
            let indexArr = [];
            for (let i = 0; i < node.numChildren; i++) {
                indexArr.push(i);
            }
            let randomIndex = LwgTools.Arr.randomGetOut(indexArr, num);
            for (let j = 0; j < randomIndex.length; j++) {
                childArr.push(node.getChildAt(randomIndex[j]));
            }
            return childArr;
        }


        /**
         * 销毁节点的所有子节点，没有子节点则无操作
         * @param node 节点
         */
        export function destroyAllChildren(node: Laya.Node): void {
            for (let index = 0; index < node.numChildren; index++) {
                const element = node.getChildAt(index) as Laya.Node;
                element.destroy(true);
                index--;
            }
        }

        /**
          * 通过某个节点名称销毁所有该名称的子节点
          * @param nodeName 节点名称
          */
        export function destroyOneChildren(node: Laya.Node, nodeName: string): void {
            for (let index = 0; index < node.numChildren; index++) {
                const element = node.getChildAt(index);
                if (element.name == nodeName) {
                    element.destroy(true);
                    index--;
                }
            }
        }

        /**
         * 移除该节点的所有子节点，没有子节点则无操作
         * @param node 节点
         */
        export function removeAllChildren(node: Laya.Node): void {
            if (node.numChildren > 0) {
                node.removeChildren(0, node.numChildren - 1);
            }
        }
        /** 
          * 通过某个节点名称移除所有该名称的子节点通过某个节点名称移除某个子节点
          * @param nodeName 节点名称
          */
        export function removeOneChildren(node: Laya.Node, nodeName: string): void {
            for (let index = 0; index < node.numChildren; index++) {
                const element = node.getChildAt(index);
                if (element.name == nodeName) {
                    element.removeSelf();
                    index--;
                }
            }
        }

        /**
         * 切换显示或隐藏子节点，当输入的名称数组是显示时，其他子节点则是隐藏
         * @param node 节点
         * @param childNameArr 子节点名称数组
         * @param bool 隐藏还是显示，true为显示，flase为隐藏，默认为true
         */
        export function showExcludedChild2D(node: Laya.Sprite, childNameArr: Array<string>, bool?: boolean): void {
            for (let i = 0; i < node.numChildren; i++) {
                let Child = node.getChildAt(i) as Laya.Sprite;
                for (let j = 0; j < childNameArr.length; j++) {
                    if (Child.name == childNameArr[j]) {
                        if (bool || bool == undefined) {
                            Child.visible = true;
                        } else {
                            Child.visible = false;
                        }
                    } else {
                        if (bool || bool == undefined) {
                            Child.visible = false;
                        } else {
                            Child.visible = true;
                        }
                    }
                }
            }
        }
        /**
         * 切换隐藏或显示子节点，当输入的名称数组是隐藏时，其他子节点则是显示
         * @param node 节点
         * @param childNameArr 子节点名称数组
         * @param bool 隐藏还是显示，true为显示，flase为隐藏,默认为true
         */
        export function showExcludedChild3D(node: Laya.MeshSprite3D, childNameArr: Array<string>, bool?: boolean): void {
            for (let i = 0; i < node.numChildren; i++) {
                let Child = node.getChildAt(i) as Laya.MeshSprite3D;
                for (let j = 0; j < childNameArr.length; j++) {
                    if (Child.name == childNameArr[j]) {
                        if (bool || bool == undefined) {
                            Child.active = true;
                        } else {
                            Child.active = false;
                        }
                    } else {
                        if (bool || bool == undefined) {
                            Child.active = false;
                        } else {
                            Child.active = true;
                        }
                    }
                }
            }
        }

        /**
          * 通过prefab创建一个实例,
          * @param {Laya.Prefab} prefab 预制体
          * @param {Laya.Node} [Parent] 父节点
          * @param { [number, number]} [point] 坐标
          * @param { [any]} [script] 添加脚本组件
          * @param { [number]} [zOrder] 层级
          * @param {string} [name] 名称
          * @return {*}  {Laya.Sprite}
          */
        export function createPrefabByPool(prefab: Laya.Prefab, Parent?: Laya.Node, point?: [number, number], script?: any, zOrder?: number, name?: string): LwgNode.Sprite {
            name = name ? name : prefab.json['props']['name'];
            const Sp: Laya.Sprite = Laya.Pool.getItemByCreateFun(name, prefab.create, prefab);
            Parent && Parent.addChild(Sp);
            point && Sp.pos(point[0], point[1]);
            script && Sp.addComponent(script);
            Sp.name = name;
            LwgNode.addProperty(Sp);
            if (zOrder) Sp.zOrder = zOrder;
            return Sp as LwgNode.Sprite;
        }
        /**
         *2D隐藏或者打开所有子节点
         * @param node 节点
         * @param bool visible控制
        */
        export function childrenVisible2D(node: Laya.Sprite, bool: boolean): void {
            for (let index = 0; index < node.numChildren; index++) {
                const element = node.getChildAt(index) as Laya.Sprite;
                if (bool) {
                    element.visible = true;
                } else {
                    element.visible = false;
                }
            }
        }

        /**
         *3D隐藏或者打开所有子节点
         * @param node 节点
         * @param bool visible控制
         */
        export function childrenVisible3D(node: Laya.MeshSprite3D, bool: boolean): void {
            for (let index = 0; index < node.numChildren; index++) {
                const element = node.getChildAt(index) as Laya.MeshSprite3D;
                if (bool) {
                    element.active = true;
                } else {
                    element.active = false;
                }
            }
        }

        /**3D递归向下查找第一个子节点*/
        export function findChild3D(parent: any, name: string): Laya.MeshSprite3D {
            var item: Laya.MeshSprite3D = null;
            //寻找自身一级目录下的子物体有没有该名字的子物体
            item = parent.getChildByName(name) as Laya.MeshSprite3D;
            //如果有，返回他
            if (item != null) return item;
            var go: Laya.MeshSprite3D = null;
            //如果没有，就吧该父物体所有一级子物体下所有的二级子物体找一遍(以此类推)
            for (var i = 0; i < parent.numChildren; i++) {
                go = findChild3D(parent.getChildAt(i) as Laya.MeshSprite3D, name);
                if (go != null)
                    return go;
            }
            return null;
        }

        /**2D递归向下查找子节点*/
        export function findChild2D(parent: any, name: string): Laya.Sprite {
            var item: Laya.Sprite = null;
            //寻找自身一级目录下的子物体有没有该名字的子物体
            item = parent.getChildByName(name) as Laya.Sprite;
            //如果有，返回他
            if (item != null) return item;
            var go: Laya.Sprite = null;
            //如果没有，就吧该父物体所有一级子物体下所有的二级子物体找一遍(以此类推)
            for (var i = 0; i < parent.numChildren; i++) {
                go = findChild2D(parent.getChildAt(i) as Laya.Sprite, name);
                if (go != null)
                    return go;
            }
            return null;
        }

        /**
         * 向上查找，符合名字的父节点
         * @param {Laya.Sprite} node
         */
        export function findNodeBelongToParent(node: Laya.Sprite, parentName: string): Laya.Sprite {
            if (node.parent && node.parent.name == parentName) {
                return node.parent as Laya.Sprite;
            } else {
                if (node.parent) {
                    return findNodeBelongToParent(node.parent as Laya.Sprite, parentName);
                }
            }
        }
    }

    /**数字相关*/
    export module Num {
        /**
         * 返回0或者1，用随机二分之一概率,返回后0是false，true是1，所以Boolen和number都可以判断
         */
        export function randomOneHalf(): number {
            let number: number;
            number = Math.floor(Math.random() * 2);
            return number;
        }

        /**
         * 在两个区间内随机出一个数，如果区间不存在则有默认值，还可以进行一次正负随机
         * @param {[number, number]} numSection
         * @param {[number, number]} defaultNumSection
         * @param {boolean} randomPlusOrMinus
         * @return {*}  {number}
         */
        export function randomNumerical(numSection: [number, number], defaultNumSection?: [number, number], randomPlusOrMinus?: boolean): number {
            let num = numSection ? LwgTools.Num.randomOneBySection(numSection[0], numSection[1]) : LwgTools.Num.randomOneBySection(defaultNumSection[0], defaultNumSection[1]);
            if (randomPlusOrMinus) {
                num = LwgTools.Num.randomOneHalf() === 0 ? num : -num;
            }
            return num;
        }

        /**
         * 在某个区间内取一个整数
         * @param section1 区间1
         * @param section2 区间2，不输入则是0~section1
         */
        export function randomOneInt(section1: number, section2?: number): number {
            if (section2) {
                return Math.round(Math.random() * (section2 - section1)) + section1;
            } else {
                return Math.round(Math.random() * section1);
            }
        }

        /**
         * 返回一个数值区间内的数个随机数,不会重复，包含区间值section
         * @param section1 区间1
         * @param section2 区间2,不输入则是0~section1
         * @param count 数量默认是1个
         * @param intSet 是否是整数,默认是整数，为true
         */
        export function randomCountBySection(section1: number, section2?: number, count?: number, intSet?: boolean): Array<number> {
            let arr = [];
            if (!count) {
                count = 1;
            }
            if (section2) {
                while (count > arr.length) {
                    let num: number;
                    if (intSet || intSet == undefined) {
                        num = Math.round(Math.random() * (section2 - section1)) + section1;
                    } else {
                        num = Math.random() * (section2 - section1) + section1;
                    }
                    arr.push(num);
                    Arr.unique01(arr);
                };
                return arr;
            } else {
                while (count > arr.length) {
                    let num: number;
                    if (intSet || intSet == undefined) {
                        num = Math.round(Math.random() * section1);
                    } else {
                        num = Math.random() * section1;
                    }
                    arr.push(num);
                    Arr.unique01(arr);
                }
                return arr;
            }
        }

        /**
         * 返回一个数值区间内的1个随机数，包含区间值section
         * @param section1 区间1
         * @param section2 区间2,不输入则是0~section1
         * @param intSet 是否是整数,默认是不整数，为false
         */
        export function randomOneBySection(section1: number, section2?: number, intSet?: boolean): number {
            let chage: number;
            if (section1 > section2) {
                chage = section1;
                section1 = section2;
                section2 = chage;
            }
            if (section2) {
                let num: number;
                if (intSet) {
                    num = Math.round(Math.random() * (section2 - section1)) + section1;
                } else {
                    num = Math.random() * (section2 - section1) + section1;
                }
                return num;
            } else {
                let num: number;
                if (intSet) {
                    num = Math.round(Math.random() * section1);
                } else {
                    num = Math.random() * section1;
                }
                return num;
            }
        }
    }

    /**坐标相关*/
    export module Point {
        /**
         * 贝塞尔曲线，返回贝塞尔曲线点 
         * @param anchorpoints 
         * @param pointsAmount 
         * @returns 
         */
        export function createBezierPoints(anchorpoints: Laya.Point[], pointsAmount: number): Laya.Point[] {
            var points = [];
            for (var i = 0; i < pointsAmount; i++) {
                var point = multiPointBezier(anchorpoints, i / pointsAmount);
                points.push(point);
            }
            return points;
        }
        function multiPointBezier(points: Laya.Point[], t: number) {
            var len = points.length;
            var x = 0, y = 0;
            var erxiangshi = function (start: number, end: number) {
                var cs = 1, bcs = 1;
                while (end > 0) {
                    cs *= start;
                    bcs *= end;
                    start--;
                    end--;
                }
                return (cs / bcs);
            };
            for (var i = 0; i < len; i++) {
                var point = points[i];
                x += point.x * Math.pow((1 - t), (len - 1 - i)) * Math.pow(t, i) * (erxiangshi(len - 1, i));
                y += point.y * Math.pow((1 - t), (len - 1 - i)) * Math.pow(t, i) * (erxiangshi(len - 1, i));
            }
            return { x: x, y: y };
        }

        /**
         * 获取当前节点在另一个节点坐标系中的局部坐标
         * @param {Laya.Sprite} element 坐标节点
         * @param {Laya.Sprite} Other 另一个节点
         */
        export function getOtherLocal(element: Laya.Sprite, Other: Laya.Sprite): Laya.Point {
            let Parent = element.parent as Laya.Image;
            let gPoint = Parent.localToGlobal(new Laya.Point(element.x, element.y));
            return Other.globalToLocal(gPoint);
        }

        /**
         * 根据角度计算弧度
         * @param angle 角度
         */
        export function getRadianByAngle(angle: number) {
            return Math.PI / 180 * angle;
        }

        /**
          * 求向量的夹角在坐标系中的角度
          * @param x 坐标x
          * @param y 坐标y
          * */
        export function angleByPointOld(x: number, y: number): number {
            const radian: number = Math.atan2(x, y);
            let angle: number = 90 - radian * (180 / Math.PI);
            if (angle <= 0) {
                angle = 270 + (90 + angle);
            }
            return angle - 90;
        };

        /**
         * 求向量的夹角在坐标系中的角度
         * @param x 坐标x
         * @param y 坐标y
         * */
        export function getAngleByPoint(x: number, y: number): number {
            const radian: number = Math.atan2(y, x);
            let angle: number = radian * (180 / Math.PI);
            if (angle <= 0) {
                angle = 360 + angle;
            }
            return angle;
        };

        /**
          * 通过一个角度，返回一个单位向量
          * @param x 坐标x
          * @param y 坐标y
          * */
        export function getNPointByAngle(angle: number): Laya.Point {
            const radian = (90 - angle) / (180 / Math.PI);
            const p = new Laya.Point(Math.sin(radian), Math.cos(radian));
            p.normalize();
            return p;
        };

        /**
          * 在Laya2维世界中,属性检查器中的角度
          * 通过一个角度，返回一个单位向量
          * @param x 坐标x
          * @param y 坐标y
          * */
        export function angleByPointNew(angle: number): Laya.Point {
            const rad = getRadianByAngle(angle);
            const p = new Laya.Point(Math.cos(rad), Math.sin(rad));
            p.normalize();
            return p;
        };

        /**
          * 二维坐标中一个点按照另一个点旋转一定的角度后，得到的点
          * @param x0 原点X
          * @param y0 原点Y
          * @param x1 旋转点X
          * @param y1 旋转点Y
          * @param angle 角度
          */
        export function dotRotatePoint(x0: number, y0: number, x1: number, y1: number, angle: number): Laya.Point {
            let x2 = x0 + (x1 - x0) * Math.cos(angle * Math.PI / 180) - (y1 - y0) * Math.sin(angle * Math.PI / 180);
            let y2 = y0 + (x1 - x0) * Math.sin(angle * Math.PI / 180) + (y1 - y0) * Math.cos(angle * Math.PI / 180);
            return new Laya.Point(x2, y2);
        }

        /**
         * 根据不同的角度和速度计算坐标,从而产生位移
         * @param angle 角度
         * @param len 长度
         * */
        export function angleAndLenByPoint(angle: number, len: number): Laya.Point {
            const point = new Laya.Point();
            point.x = len * Math.cos(angle * Math.PI / 180);
            point.y = len * Math.sin(angle * Math.PI / 180);
            return point;
        }

        /**
        * 求圆上的点的坐标，可以根据角度和半径作出圆形位移
        * @param angle 角度
        * @param radius 半径
        * @param centerPos 原点
        */
        export function getRoundPointOld(angle: number, radius: number, centerPos: Laya.Point): Laya.Point {
            const radian = getRadianByAngle(angle);
            const X = centerPos.x + Math.sin(radian) * radius;
            const Y = centerPos.y - Math.cos(radian) * radius;
            return new Laya.Point(X, Y);
        }

        /**
         * 求圆上的点的坐标，可以根据角度和半径作出圆形位移
         * @param angle 角度
         * @param radius 半径
         * @param centerPos 原点
         */
        export function getRoundPointNew(angle: number, radius: number, centerPos: Laya.Point): Laya.Point {
            const radian = getRadianByAngle(angle);
            //  Math.sin(hudu)返回y和斜边radius的比值-1*1；
            //  Math.cos(hudu)返回x和斜边radius的比值-1*1；
            if (centerPos) {
                const x = centerPos.x + Math.cos(radian) * radius;
                const y = centerPos.y + Math.sin(radian) * radius;
                return new Laya.Point(x, y);
            } else {
                return new Laya.Point(null, null);
            }
        }

        /**
         * 返回在一个中心点周围的随机产生数个点的数组
         * @param centerPos 中心点坐标
         * @param radiusX X轴半径
         * @param radiusY Y轴半径
         * @param count 产生多少个随机点
         */
        export function randomPointByCenter(centerPos: Laya.Point, radiusX: number, radiusY: number, count: number = 1): Array<Laya.Point> {
            let arr: Array<Laya.Point> = [];
            for (let index = 0; index < count; index++) {
                let x0 = LwgTools.Num.randomCountBySection(0, radiusX, 1, false);
                let y0 = LwgTools.Num.randomCountBySection(0, radiusY, 1, false);
                let diffX = LwgTools.Num.randomOneHalf() == 0 ? x0[0] : -x0[0];
                let diffY = LwgTools.Num.randomOneHalf() == 0 ? y0[0] : -y0[0];
                let p = new Laya.Point(centerPos.x + diffX, centerPos.y + diffY);
                arr.push(p);
            }
            return arr;
        }
        /**
         * @export 返回两个点之间连线上均匀排布的点
         * @param {Laya.Point} p1 点1
         * @param {Laya.Point} p2 点2
         * @param {number} num 个数
         * @return {*}  {Array<Laya.Point>}
         */
        export function getPointArrBetweenTwoPoint(p1: Laya.Point, p2: Laya.Point, num: number): Array<Laya.Point> {
            let arr: Array<Laya.Point> = [];
            let x0 = p2.x - p1.x;
            let y0 = p2.y - p1.y;
            for (let index = 0; index < num; index++) {
                arr.push(new Laya.Point(p1.x + (x0 / num) * index, p1.y + (y0 / num) * index));
            }
            if (arr.length >= 1) {
                arr.unshift();
            }
            if (arr.length >= 1) {
                arr.pop();
            }
            return arr;
        }
        /**
          * 返回一个向量相对于一个点的反向向量，或者反向向量的单位向量，可用于一个物体被另一个物体击退
          * @param Vecoter1 固定点
          * @param Vecoter2 反弹物体向量
          * @param normalizing 是否归一成单位向量
          */
        export function reverseVector(Vecoter1: any, Vecoter2: any, normalizing: boolean): Laya.Point {
            let p = new Laya.Point(Vecoter1.x - Vecoter2.x, Vecoter1.y - Vecoter2.y);
            if (normalizing) {
                p.normalize();
            }
            return p;
        }
    }
    /**
     * 3D
    */
    export module D3 {
        /**
         * 开启灯光投影
         */
        export function setLightShadow(light: Laya.DirectionLight, shadowMode: Laya.ShadowMode = Laya.ShadowMode.SoftHigh, shadowDistance: number = 200, shadowResolution = 4096, shadowCascadesModeshadowCascadesMode: Laya.ShadowCascadesMode = Laya.ShadowCascadesMode.NoCascades): void {
            light.shadowMode = shadowMode;                     //阴影模式
            light.shadowDistance = shadowDistance;                                      //可见阴影距离                        
            light.shadowResolution = shadowResolution;                                   //生成阴影贴图尺寸    
            light.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades;   //阴影的级联模式
        }
        /**
         * 发射投影开关
         * @param node 
         * @param bool 
         */
        export function setCastShadow(node: Laya.Sprite3D, bool: boolean) {
            if (node && !node.destroyed) {
                if (node instanceof Laya.MeshSprite3D) {
                    node.meshRenderer.castShadow = bool;
                } else if (node instanceof Laya.SkinnedMeshSprite3D) {
                    node.skinnedMeshRenderer.castShadow = bool;
                }
                for (var i = 0; i < node.numChildren; i++) {
                    this.setCastShadow(node.getChildAt(i), bool);
                }
            }
        }

        /**
         * 接收投影开关
         * @param node 
         * @param bool 
         */
        export function setReceiveShadow(node: Laya.Sprite3D, bool: boolean) {
            if (node && !node.destroyed) {
                if (node instanceof Laya.MeshSprite3D) {
                    node.meshRenderer.receiveShadow = bool;
                } else if (node instanceof Laya.SkinnedMeshSprite3D) {
                    node.skinnedMeshRenderer.receiveShadow = bool;
                }
                for (var i = 0; i < node.numChildren; i++) {
                    this.setReceiveShadow(node.getChildAt(i), bool);
                }
            }
        }

        /**
         * 以当前位置为中心点，在一个空间内随机设置位置
         * @param {[[number, number, number], [number, number, number]]} scopeSize 空间区间
         * @memberof _Caller
         */
        export function randomScopeByPosition(sp3D: Laya.MeshSprite3D, scopeSize: [[number, number, number], [number, number, number]]): void {
            let _pX = LwgTools.Num.randomOneBySection(scopeSize[0][0], scopeSize[1][0])
            let _pY = LwgTools.Num.randomOneBySection(scopeSize[0][1], scopeSize[1][1])
            let _pZ = LwgTools.Num.randomOneBySection(scopeSize[0][2], scopeSize[1][2])
            _pX = LwgTools.Num.randomOneHalf() == 0 ? _pX : -_pX;
            _pY = LwgTools.Num.randomOneHalf() == 0 ? _pY : -_pY;
            _pZ = LwgTools.Num.randomOneHalf() == 0 ? _pZ : -_pZ;
            sp3D.transform.position = new Laya.Vector3(sp3D.transform.position.x + _pX, sp3D.transform.position.y + _pY, sp3D.transform.position.z + _pZ);
        }

        /**
         * @export 获取模型的大小
         * @param {Laya.MeshSprite3D} MSp3D
         * @return {*}  {Laya.Vector3}
         */
        export function getMeshSize(MSp3D: Laya.MeshSprite3D): Laya.Vector3 {
            if (MSp3D.meshRenderer) {
                let v3: Laya.Vector3;
                let extent = MSp3D.meshRenderer.bounds.getExtent();
                return v3 = new Laya.Vector3(extent.x * 2, extent.y * 2, extent.z * 2)
            }
        }

        /**
         * @export 获取模型的大小
         * @param {Laya.MeshSprite3D} MSp3D
         * @return {*}  {Laya.Vector3}
         */
        export function getSkinMeshSize(MSp3D: Laya.SkinnedMeshSprite3D): Laya.Vector3 {
            if (MSp3D.skinnedMeshRenderer) {
                let v3: Laya.Vector3;
                let extent = MSp3D.skinnedMeshRenderer.bounds.getExtent();
                return v3 = new Laya.Vector3(extent.x * 2, extent.y * 2, extent.z * 2)
            }
        }

        /**
          * 返回两个三维物体的世界空间的距离
          * @param obj1 物体1
          * @param obj2 物体2
          */
        export function getTwoNodeDistance(obj1: Laya.MeshSprite3D, obj2: Laya.MeshSprite3D): number {
            let obj1V3: Laya.Vector3 = obj1.transform.position;
            let obj2V3: Laya.Vector3 = obj2.transform.position;
            let p = new Laya.Vector3();
            // 向量相减后计算长度
            Laya.Vector3.subtract(obj1V3, obj2V3, p);
            let lenp = Laya.Vector3.scalarLength(p);
            return lenp;
        }

        /**
          * 返回两个3维向量之间的距离
          * @param v1 物体1
          * @param v2 物体2
          */
        export function getTwoPositionDistance(v1: Laya.Vector3, v2: Laya.Vector3): number {
            let p = getTwoSubV3(v1, v2);
            let lenp = Laya.Vector3.scalarLength(p);
            return lenp;
        }

        /**
          * 返回相同坐标系中两个三维向量的相减向量（obj1-obj2）
          * @param V31 向量1
          * @param V32 向量2
          * @param normalizing 是否是单位向量,默认为不是
          */
        export function getTwoSubV3(V31: Laya.Vector3, V32: Laya.Vector3, normalizing?: boolean): Laya.Vector3 {
            let p = new Laya.Vector3();
            // 向量相减后计算长度
            Laya.Vector3.subtract(V31, V32, p);
            if (normalizing) {
                let p1: Laya.Vector3 = new Laya.Vector3();
                Laya.Vector3.normalize(p, p1);
                return p1;
            } else {
                return p;
            }
        }

        /**
         * 3D世界中，制约一个物体不会超过和另一个点的最长距离,如果超过或者等于则设置这个球面坐标，并且返回这个坐标
         * @param originV3 原点的位置
         * @param obj 物体
         * @param length 长度
         */
        export function getMaximumDistanceLimit(originV3: Laya.Vector3, obj: Laya.Sprite3D, length: number): Laya.Vector3 {
            // 两个向量相减等于手臂到手的向量
            let subP = new Laya.Vector3();
            let objP = obj.transform.position;
            Laya.Vector3.subtract(objP, originV3, subP);
            // 向量的长度
            let lenP = Laya.Vector3.scalarLength(subP);
            if (lenP >= length) {
                // 归一化向量
                let normalizP = new Laya.Vector3();
                Laya.Vector3.normalize(subP, normalizP);
                // 坐标
                let x = originV3.x + normalizP.x * length;
                let y = originV3.y + normalizP.y * length;
                let z = originV3.z + normalizP.z * length;
                let p = new Laya.Vector3(x, y, z);
                obj.transform.position = p;
                return p;
            }
        }

        /**
         * 将3D坐标转换成屏幕坐标
         * @param v3 3D世界的坐标
         * @param camera 摄像机
         */
        export function getPosToScreen(v3: Laya.Vector3, camera: Laya.Camera): Laya.Vector2 {
            let ScreenV4 = new Laya.Vector4();
            camera.viewport.project(v3, camera.projectionViewMatrix, ScreenV4);
            let point: Laya.Vector2 = new Laya.Vector2();
            point.x = ScreenV4.x / Laya.stage.clientScaleX;
            point.y = ScreenV4.y / Laya.stage.clientScaleY;
            return point;
        }
        /**
          * 返回一个向量相对于一个点的反向向量，或者反向向量的单位向量，可用于一个物体被另一个物体击退
          * @param type 二维还是三维
          * @param Vecoter1 固定点
          * @param Vecoter2 反弹物体向量
          * @param normalizing 是否归一成单位向量
          */
        export function getReverseV3(Vecoter1: any, Vecoter2: any, normalizing: boolean): Laya.Vector3 {
            let p = new Laya.Vector3(Vecoter1.x - Vecoter2.x, Vecoter1.y - Vecoter2.y, Vecoter1.z - Vecoter2.z);
            if (normalizing) {
                let returnP = new Laya.Vector3();
                Laya.Vector3.normalize(p, returnP);
                return returnP;
            } else {
                return p;
            }
        }

        /**
         * 射线检测，返回射线扫描结果，可以筛选结果
         * @param camera 摄像机
         * @param scene3D 当前场景
         * @param vector2 触摸点
         * @param filtrateName 找出指定触摸的模型的信息，如果不传则返回全部信息数组；
         */
        export function rayScanning(camera: Laya.Camera, scene3D: Laya.Scene3D, vector2: Laya.Vector2, filtrateName?: string): any {
            /**射线*/
            let _ray: Laya.Ray = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0));
            /**射线扫描结果*/
            let outs: Array<Laya.HitResult> = new Array<Laya.HitResult>();
            // 如果被画布canvas并不和stage一样大，那么stage会被缩放，位置需要补回来，舞台在画布内，vector2是舞台坐��，要转换为canvas坐标，
            const _v2 = new Laya.Vector2(Laya.stage.clientScaleX * vector2.x, Laya.stage.clientScaleY * vector2.y);
            //射线碰撞到碰撞框，碰撞框的isTrigger属性要勾上，这样只检测碰撞，不产生碰撞反应
            camera.viewportPointToRay(_v2, _ray);
            scene3D.physicsSimulation.rayCastAll(_ray, outs);
            if (filtrateName) {
                let chek;
                for (let i = 0; i < outs.length; i++) {
                    //找出指定
                    let Sp3d = outs[i].collider.owner;
                    if (Sp3d.name == filtrateName) {
                        // 开启移动
                        chek = outs[i];
                    }
                }
                return chek;
            } else {
                return outs;
            }
        }

        /**
         * 射线检测，返回射线扫描的第一个结果，可以筛选结果
         * @param camera 摄像机
         * @param scene3D 当前场景
         * @param vector2 触摸点
         * @param filtrateName 找出指定触摸的模型的信息，如果不传则返回全部信息数组；
         */
        export function rayScanningFirst(camera: Laya.Camera, scene3D: Laya.Scene3D, vector2: Laya.Vector2,): any {
            /**射线*/
            let _ray: Laya.Ray = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0));
            /**射线扫描结果*/
            let out: Laya.HitResult = new Laya.HitResult();
            // 如果被画布canvas并不和stage一样大，那么stage会被缩放，位置需要补回来，舞台在画布内，vector2是舞台坐标，要转换为canvas坐标，
            const _v2 = new Laya.Vector2(Laya.stage.clientScaleX * vector2.x, Laya.stage.clientScaleY * vector2.y);
            //射线碰撞到碰撞框，碰撞框的isTrigger属性要勾上，这样只检测碰撞，不产生碰撞反应
            camera.viewportPointToRay(_v2, _ray);
            scene3D.physicsSimulation.rayCast(_ray, out);
            return out;
        }

        /**
          * 播放动画。
          * @param Sp3D 节点
          * @param name 如果为null则播放默认动画，否则按名字播放动画片段。
          * @param normalizedTime 归一化的播放起始时间。
          * @param layerIndex 层索引。
          */
        export function playAnimator(Sp3D: Laya.Sprite3D, aniName: string, speed: number = 1, normalizedTime?: number, layerIndex?: number): Laya.Animator {
            let sp3DAni = Sp3D.getComponent(Laya.Animator) as Laya.Animator;
            if (!sp3DAni) {
                console.log(Sp3D.name, '没有动画组件');
                return;
            }
            sp3DAni.speed = speed;
            if (!layerIndex) {
                layerIndex = 0;
            }
            if (!aniName) {
                console.log(Sp3D.name, '没有动画组件', aniName);
            } else {
                try {
                    sp3DAni.play(aniName, layerIndex);
                } catch (error) {
                    console.log(Sp3D.name, '没有动画组件', aniName);
                }
            }
            return sp3DAni;
        }
    }

    /**
     * 骨骼动画相关
     */
    export module Skeleton {
        export function sk_indexControl(sk: Laya.Skeleton, name: string): void {
            sk.play(name, true);//从初始位置开始继续播放
            sk.player.currentTime = 15 * 1000 / sk.player.cacheFrameRate;
        }
    }
    /**
     * 绘制
     */
    export module Draw {

        /**
          * 为一个节点绘制一个扇形遮罩
          * 想要遮罩的形状发生变化，必须先将父节点的cacheAs改回“none”，接着改变其角度，再次将cacheAs改为“bitmap”，必须在同一帧内进行，因为是同一帧，所以在当前帧最后或者下一帧前表现出来，帧内时间不会表现任何状态，这是个思路，帧内做任何变化都不会显示，只要帧结尾改回来就行。
          * @param parent 被遮罩的节点，也是父节点
          * @param startAngle 扇形的初始角度
          * @param endAngle 扇形结束角度
         */
        export function drawPieMask(parent: Laya.Sprite, startAngle: number, endAngle: number): Laya.DrawPieCmd {
            // 父节点cacheAs模式必须为"bitmap"
            parent.cacheAs = "bitmap";
            //新建一个sprite作为绘制扇形节点
            let drawPieSpt = new Laya.Sprite();
            //设置叠加模式
            drawPieSpt.blendMode = "destination-out";
            // 加入父节点
            parent.addChild(drawPieSpt);
            // 绘制扇形，位置在中心位置，大小略大于父节点，保证完全遮住
            let drawPie = drawPieSpt.graphics.drawPie(parent.width / 2, parent.height / 2, parent.width / 2 + 10, startAngle, endAngle, "#000000");
            return drawPie;
        }

        /**
         * 对一个Sprite进行截图，返回一个图片信息字符串，可直接当前图片地址使用
         * @export
         * @param {Laya.Sprite} Sp 需要截图的Sp，Sp必须有宽高
         * @param quality 品质0-1;
         * @return {*}  {string}
         */
        export function screenshot(Sp: Laya.Sprite, quality?: number): string {
            const htmlCanvas: Laya.HTMLCanvas = Sp.drawToCanvas(Sp.width, Sp.height, Sp.x, Sp.y);
            const base64 = htmlCanvas.toBase64("image/png", quality ? quality : 1);
            return base64;
        }

        /**绘制类绘制出的贴图和canvas的存储，每次只保存3个，自动销毁*/
        export let _texArr = [];
        /**
         * 将当前摄像机的图像渲染到一个sprite中
         * @export
         * @param {Laya.Camera} camera 摄像机
         * @param {Laya.Sprite} sprite 目标sprite,必须有宽高
         */
        export function cameraToSprite(camera: Laya.Camera, sprite: Laya.Sprite): void {
            // 赋值当前摄像机
            const _camera = camera.clone() as Laya.Camera;
            camera.scene.addChild(_camera);
            _camera.transform.position = camera.transform.position;
            _camera.transform.localRotationEuler = camera.transform.localRotationEuler;
            //选择渲染目标为纹理
            _camera.renderTarget = new Laya.RenderTexture(sprite.width, sprite.height);
            //渲染顺序
            _camera.renderingOrder = -1;
            //清除标记
            _camera.clearFlag = Laya.CameraClearFlags.Sky;
            const ptex = new Laya.Texture(((<Laya.Texture2D>(_camera.renderTarget as any))), Laya.Texture.DEF_UV);
            sprite.graphics.drawTexture(ptex, sprite.x, sprite.y, sprite.width, sprite.height);
            _texArr.push(ptex);
            if (_texArr.length > 3) {
                _texArr[0].destroy();
                _texArr.shift();
            }
            // 延迟销毁照相机，因为渲染需要时间
            LwgTimer.frameOnce(5, this, () => {
                _camera.destroy();
            })
        }

        /**
          * 返回一个节点包括其子节点的截图
          * @export
          * @param {Laya.Sprite} Sp 需要截图的Sp，Sp必须有宽高
          * @param quality 品质0-1;
          * @return {*}  {string}
          */
        export function drawToTex(Sp: Laya.Sprite, quality?: number): Laya.Texture {
            let tex = Sp.drawToTexture(Sp.width, Sp.height, Sp.x, Sp.y) as Laya.Texture;
            return tex;
        }

        /**
         * 在一个节点上绘制一组圆形反向遮罩,可以绘制很多个,但是不要同时存在多个interactionArea，清除直接删除node中的interactionArea节点即可
         * 需要手动删除interactionArea,
         * 圆角矩形的中心点在节点的中间
         * @param node 节点
         * @param circleArr 数量信息数组[[x位置，y位置，radius半径]]
         * @param eliminate 是否清除其他遮罩，默认为true，本参数为false就是接连绘制，不删除
         */
        export function maskRound(sp: Laya.Sprite, circleArr: [number, number, number][], eliminate?: boolean): Laya.Sprite {
            if (eliminate == undefined || eliminate == true) {
                Node.destroyAllChildren(sp);
            }
            let interactionArea = sp.getChildByName('maskRound') as Laya.Sprite;
            if (!interactionArea) {
                interactionArea = new Laya.Sprite();
                interactionArea.name = 'maskRound';
                interactionArea.blendMode = "destination-out";//利用叠加模式创建反向遮罩
                sp.addChild(interactionArea);
            }
            //设置叠加模式
            sp.cacheAs = "bitmap";
            // 画出圆形，可以画很多个圆形
            for (let index = 0; index < circleArr.length; index++) {
                interactionArea.graphics.drawCircle(circleArr[index][0], circleArr[index][1], circleArr[index][2], "#000000");
            }
            interactionArea.pos(0, 0);
            return interactionArea;
        }


        /**
         * 绘制一组矩形遮罩
         * @param sp 节点
         * @param rectArr [x,y,w,h];
         * @param eliminate 是否清除其他遮罩
         */
        export function maskRect(sp: Laya.Sprite, roundrectArr: [number, number, number, number][], eliminate?: boolean): void {
            if (eliminate == undefined || eliminate == true) {
                Node.removeAllChildren(sp);
            }
            let interactionArea = sp.getChildByName('maskRectRound') as Laya.Sprite;
            if (!interactionArea) {
                interactionArea = new Laya.Sprite();
                interactionArea.name = 'maskRectRound';
                interactionArea.blendMode = "destination-out";//利用叠加模式创建反向遮罩
                sp.addChild(interactionArea);
            }
            if (sp.cacheAs !== "bitmap") sp.cacheAs = "bitmap";
            // 画出矩形
            for (let index = 0; index < roundrectArr.length; index++) {
                const element = roundrectArr[index];
                element[0] = Math.round(element[0]);
                element[1] = Math.round(element[1]);
                element[2] = Math.round(element[2]);
                element[3] = Math.round(element[3]);
                interactionArea.graphics.drawRect(element[0], element[1], element[2], element[3], { fillStyle: "#000000" })
            }
        }

        /**
         * 在一个节点上绘制一组圆角矩形反向遮罩,可以绘制很多个，清除直接删除node中的子节点即可,这个方法有个bug，所参数必须为整数，否则绘制会有意想不到的偏差
         * 圆角矩形的中心点在节点的中间
         * @param node 节点
         * @param roundrectArr  数量信息数组[[x位置，y位置，width宽，height高，round圆角角度]]
         * @param eliminate 是否清除其他遮罩，默认为true，本参数为false就是接连绘制，不删除
         */
        export function maskRectRound(sp: Laya.Sprite, roundrectArr: [number, number, number, number, number][], eliminate?: boolean): void {
            if (eliminate == undefined || eliminate == true) {
                Node.removeAllChildren(sp);
            }
            let interactionArea = sp.getChildByName('maskRectRound') as Laya.Sprite;
            if (!interactionArea) {
                interactionArea = new Laya.Sprite();
                interactionArea.name = 'maskRectRound';
                interactionArea.blendMode = "destination-out";//利用叠加模式创建反向遮罩
                sp.addChild(interactionArea);
            }
            if (sp.cacheAs !== "bitmap") sp.cacheAs = "bitmap";
            // 画出矩形
            for (let index = 0; index < roundrectArr.length; index++) {
                const element = roundrectArr[index];
                element[0] = Math.round(element[0]);
                element[1] = Math.round(element[1]);
                element[2] = Math.round(element[2]);
                element[3] = Math.round(element[3]);
                element[4] = Math.round(element[4]);

                interactionArea.graphics.drawPath(element[0], element[1], [["moveTo", element[4], 0], ["lineTo", element[2] - element[4], 0], ["arcTo", element[2], 0, element[2], element[4], element[4]], ["lineTo", element[2], element[3] - element[4]], ["arcTo", element[2], element[3], element[2] - element[4], element[3], element[4]], ["lineTo", element[3] - element[4], element[3]], ["arcTo", 0, element[3], 0, element[3] - element[4], element[4]], ["lineTo", 0, element[4]], ["arcTo", 0, 0, element[4], 0, element[4]], ["closePath"]], { fillStyle: "#000000" });
                interactionArea.pivotX = element[2] / 2;
                interactionArea.pivotY = element[3] / 2;
                interactionArea.pos(0, 0);
            }
        }
    }

    /**对象数组相关*/
    export module ObjArray {
        /**
          * 对象数组按照对象的某个属性排序
          * @param array 对象数组
          * @param property 对象中一个相同的属性名称
          */
        export function sortByProperty(array: any[], property: string): any[] {
            var compare = function (obj1: any, obj2: any) {
                var val1 = obj1[property];
                var val2 = obj2[property];
                if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
                    val1 = Number(val1);
                    val2 = Number(val2);
                }
                if (val1 < val2) {
                    return -1;
                } else if (val1 > val2) {
                    return 1;
                } else {
                    return 0;
                }
            }
            array.sort(compare);
            return array;
        }

        /**
          * 对比两个对象数组中的某个对象属性，返回相对第一个数组中有的这个property属性并且第二个数组中没有这个属性的对象数组，例如两张数据表，通过名字查找，objArr2有8个不同的名字，objArr1也有（也可以没有）这个8个名字，并且objArr1不但有而且还多了2个名字，那么返回objArr1中这两个名字的对象数组,为复制出的新数组
          * @param objArr1 对象数组1
          * @param objArr2 对象数组2
          * @param property 需要对比的属性名称
         */
        export function getDiffProByTwoArr(objArr1: any[], objArr2: any[], property: string): any[] {
            var diffArr = [];
            for (var i = 0; i < objArr1.length; i++) {
                var obj1 = objArr1[i];
                var obj1Name = obj1[property];
                var isExist = false;

                for (var j = 0; j < objArr2.length; j++) {
                    var obj2 = objArr2[j];
                    var obj2Name = obj2[property];
                    if (obj2Name == obj1Name) {
                        isExist = true;
                        break;
                    }
                }
                if (!isExist) {
                    let diffObj = ObjArray.objCopy(obj1);
                    diffArr.push(diffObj);
                }
            }
            return diffArr;
        }

        /**
         * 将第一个数组对象中对象的新字段通过一个属性名添加到第二个对象数组中的对象中，如果需要相互合并，执行两次方法，将两个对象调换位置
         * 一般用于列表添加新字段，proName一般列表中的名称
         * @param objArr1 对象数组1
         * @param objArr2 对象数组2
         * @param proName 两个数组对象都有的属性名称，一般为名称ID、序号、名称等,如果没有属性名，则按数组顺序进行遍历，不推荐
         */
        export function mergeObjArr1ToObjArr2ByPro(objArr1: any[], objArr2: any[], proName?: string): void {
            if (proName) {
                for (let index = 0; index < objArr1.length; index++) {
                    const obj1 = objArr1[index];
                    for (let index = 0; index < objArr2.length; index++) {
                        const obj2 = objArr2[index];
                        for (const key in obj1) {
                            if (Object.prototype.hasOwnProperty.call(obj1, key)) {
                                //如果值为undefined说明就没有，则复制进去，不可以是null，这个是有的
                                if (obj2[key] === undefined) {
                                    obj2[key] = obj1[key];
                                }
                            }
                        }
                    }
                }
            } else {
                for (const key1 in objArr1) {
                    if (Object.prototype.hasOwnProperty.call(objArr1, key1)) {
                        const obj1 = objArr1[key1];
                        for (let index = 0; index < objArr2.length; index++) {
                            const obj2 = objArr2[index];
                            //两个都有同一个通用属性，那么这两个对象可以相互复制
                            if (obj1[proName] != undefined && obj2[proName] !== undefined) {
                                for (const objKey in obj1) {
                                    if (Object.prototype.hasOwnProperty.call(obj1, objKey)) {
                                        //如果值为undefined说明就没有，则复制进去，不可以是null，这个是有的
                                        if (obj2[objKey] === undefined) {
                                            obj2[objKey] = obj1[objKey];
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        /**
         * 返回两个数组对象中，有相同属性的对象集合
         * @param data1 对象数组1
         * @param data2 对象数组2
         * @param property 需要对比的属性名称
         */
        export function identicalPropertyObjArr(data1: any[], data2: any[], property: string): any[] {
            var result = [];
            for (var i = 0; i < data1.length; i++) {
                var obj1 = data1[i];
                var obj1Name = obj1[property];
                var isExist = false;

                for (var j = 0; j < data2.length; j++) {
                    var obj2 = data2[j];
                    var obj2Name = obj2[property];
                    if (obj2Name == obj1Name) {
                        isExist = true;
                        break;
                    }
                }
                if (isExist) {
                    result.push(obj1);
                }
            }
            return result;
        }

        /**
          * 对象数组去根据对象的某个属性值去重
          * @param arr 数组
          * @param property 属性
          * */
        export function uniqueByProPerty(arr: any[], property: string): any[] {
            for (var i = 0, len = arr.length; i < len; i++) {
                for (var j = i + 1, len = arr.length; j < len; j++) {
                    if (arr[i][property] === arr[j][property]) {
                        arr.splice(j, 1);
                        j--;        // 每删除一个数j的值就减1
                        len--;      // j值减小时len也要相应减1（减少循环次数，节省性能）   
                    }
                }
            }
            return arr;
        }

        /**
         * 根据一个对像的属性，从对象数组中返回某个属性的值数组
         * @param arr 
         * @param property 
         */
        export function getArrByValue(objArr: any[], property: string): any[] {
            let arr = [];
            for (let i = 0; i < objArr.length; i++) {
                if (objArr[i][property]) {
                    arr.push(objArr[i][property]);
                }
            }
            return arr;
        }

        /**
         * 对象数组的拷贝
         * @param ObjArray 需要拷贝的对象数组 
         */
        export function arrCopy(ObjArray: any[]): any {
            var sourceCopy = ObjArray instanceof Array ? [] : {};
            for (var item in ObjArray) {
                sourceCopy[item] = typeof ObjArray[item] === 'object' ? objCopy(ObjArray[item]) : ObjArray[item];
            }
            return sourceCopy;
        }

        /**
         * 批量修改对象数组中的某个属性值
         * @param objArr 对象数组
         * */
        export function modifyProValue(objArr: Array<any>, pro: string, value: any): any[] {
            for (const key in objArr) {
                if (Object.prototype.hasOwnProperty.call(objArr, key)) {
                    const element = objArr[key];
                    if (element[pro]) {
                        element[pro] = value;
                    }
                }
            }
            return objArr;
        }

        /**
          * 对象的拷贝,不可以拷贝节点，太大
          * @param obj 需要拷贝的对象
          */
        export function objCopy(obj: any): any {
            var _copyObj = {};
            for (const item in obj) {
                if (obj.hasOwnProperty(item)) {
                    const element = obj[item];
                    if (typeof element === 'object') {
                        // 其中有一种情况是对某个对象值为数组的拷贝
                        if (Array.isArray(element)) {
                            let arr1 = Arr.copy(element);
                            _copyObj[item] = arr1;
                        } else {
                            objCopy(element);
                        }
                    } else {
                        _copyObj[item] = element;
                    }
                }
            }
            return _copyObj;
        }
    }

    /**数组相关*/
    export module Arr {
        /**
         * 排序
         * @param arr 数组
         * @param inverted 是否是倒序 
         */
        export function sort(arr: any[], inverted: boolean = false): any[] {
            if (!inverted) {
                arr.sort((x, y) => {
                    if (x < y) {
                        return -1;
                    } else if (x > y) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
            } else {
                arr.sort((x, y) => {
                    if (x < y) {
                        return 1;
                    } else if (x > y) {
                        return -1;
                    } else {
                        return 0;
                    }
                })
            }
            return arr;
        }

        /**
          * 往第一个数组中陆续添加第二个数组中的元素
          * @param array1 
          * @param array2
          */
        export function addToArray(array1: any[], array2: any[]): any[] {
            for (let index = 0; index < array2.length; index++) {
                const element = array2[index];
                array1.push(element);
            }
            return array1;
        }

        /**
         * 将一个数组倒过来
         * @param array
         */
        export function inverted(array: any[]): any[] {
            let arr = [];
            for (let index = array.length - 1; index >= 0; index--) {
                const element = array[index];
                arr.push(element);
            }
            array = arr;
            return array;
        }

        /**
         * 从一个数组中随机取出几个元素，如果刚好是数组长度，则等于是乱序,此方法不会改变原数组顺序,是返回新的数组
         * @param arr 数组
         * @param num 取出几个元素默认为1个
         */
        export function randomGetOutNewArr(arr: any[], num?: number): any[] {
            if (!num) {
                num = 1;
            }
            let arrCopy = Arr.copy(arr);
            let arr0 = [];
            if (num > arrCopy.length) {
                console.log('数组长度小于取出的数！');
                return;
            } else {
                for (let index = 0; index < num; index++) {
                    let ran = Math.round(Math.random() * (arrCopy.length - 1));
                    let a1 = arrCopy[ran];
                    arrCopy.splice(ran, 1);
                    arr0.push(a1);
                }
                return arr0;
            }
        }
        /**
         * 从一个数组中随机取出几个元素，如果刚好是数组长度，则等于是乱序,此方法不会改变原数组顺序,是返回新的数组
         * @param arr 数组
         * @param num 取出几个元素默认为1个
         */
        export function randomGetOut(arr: any[], num?: number): any[] {
            if (!num) {
                num = 1;
            }
            let arrCopy = Arr.copy(arr);
            let arr0 = [];
            if (num > arrCopy.length) {
                console.log('数组长度小于取出的数！');
                return;
            } else {
                for (let index = 0; index < num; index++) {
                    let ran = Math.round(Math.random() * (arrCopy.length - 1));
                    let a1 = arrCopy[ran];
                    arrCopy.splice(ran, 1);
                    arr0.push(a1);
                }
                return arr0;
            }
        }

        /**
        * 从一个数组中随机取出1个元素
        * @param arr 数组
        */
        export function randomGetOne(arr: any[]): any {
            let arrCopy = copy(arr);
            let ran = Math.round(Math.random() * (arrCopy.length - 1));
            return arrCopy[ran];
        }
        /**
          * 普通数组复制 
          * @param arr1 被复制的数组
          */
        export function copy(arr1: any[]): any[] {
            var arr = [];
            for (var i = 0; i < arr1.length; i++) {
                arr.push(arr1[i]);
            }
            return arr;
        }
        /**
         * 数组去重
         * @param arr 数组
        */
        export function unique01(arr: any[]): any[] {
            for (var i = 0, len = arr.length; i < len; i++) {
                for (var j = i + 1, len = arr.length; j < len; j++) {
                    if (arr[i] === arr[j]) {
                        arr.splice(j, 1);
                        j--;        // 每删除一个数j的值就减1
                        len--;      // j值减小时len也要相���减1（减少循环次数，节省性能）   
                    }
                }
            }
            return arr;
        }
        /**数组去重*/
        export function unique02(arr: any[]): any[] {
            arr = arr.sort();
            var arr1 = [arr[0]];
            for (var i = 1, len = arr.length; i < len; i++) {
                if (arr[i] !== arr[i - 1]) {
                    arr1.push(arr[i]);
                }
            }
            return arr1;
        }
        /**ES6数组去重,返回的数组是新数组，需接收*/
        export function unique03(arr: any[]): any[] {
            return Array.from(new Set(arr));
        }

        /**
          * 返回从第一个数组中排除第二个数组中的元素，也就是第二个数组中没有第一个数组中的这些元素，如果第一个数组包含第二个数组，那么刚好等于是第一个数组排除第二个数组的元素
          * @param arr1 
          * @param arr2 
          */
        export function oneExcludeOtherOne(arr1: any[], arr2: any[]): any[] {
            let arr1Capy = Arr.copy(arr1);
            let arr2Capy = Arr.copy(arr2);
            // console.log(arr1,arr2)
            for (let i = 0; i < arr1Capy.length; i++) {
                for (let j = 0; j < arr2Capy.length; j++) {
                    if (arr1Capy[i] == arr2Capy[j]) {
                        arr1Capy.splice(i, 1);
                        i--;
                    }
                }
            }
            return arr1Capy;
        }
        /**
          * 找出几个数组中都有的元素，或者相互没有的元素，
          * 查找方法如下：如果某个元素的个数等于数组个数，这说明他们都有；
          * @param arrays 数组组成的数组
          * @param exclude 默认为false,false为返回都有的元素，true为返回排除这些相同元素，也就是相互没有的元素
          */
        export function moreExclude(arrays: any[][], exclude?: boolean): any[] {
            // 避免三重for循环嵌套，一步一步做
            // 取出所有元素
            let arr0 = [];
            for (let i = 0; i < arrays.length; i++) {
                for (let j = 0; j < arrays[i].length; j++) {
                    arr0.push(arrays[i][j]);
                }
            }
            // 保留arr0，赋值一份
            let arr1 = copy(arr0);
            // 去重排列出元素列表
            let arr2 = copy(arr1);

            // 列出记录数量的数组
            let arrNum = [];
            for (let k = 0; k < arr2.length; k++) {
                arrNum.push({
                    name: arr2[k],
                    num: 0,
                });
            }

            // 记录数量
            for (let l = 0; l < arr0.length; l++) {
                for (let m = 0; m < arrNum.length; m++) {
                    if (arr0[l] == arrNum[m]['name']) {
                        arrNum[m]['num']++;
                    }
                }
            }
            // 找出数量和arrays长度相同或者不相同的数组
            let arrAllHave = [];
            let arrDiffHave = [];
            for (let n = 0; n < arrNum.length; n++) {
                const element = arrNum[n];
                if (arrNum[n]['num'] == arrays.length) {
                    arrAllHave.push(arrNum[n]['name']);
                } else {
                    arrDiffHave.push(arrNum[n]['name']);
                }
            }
            if (!exclude) {
                return arrAllHave;
            } else {
                return arrDiffHave;
            }
        }
    }
}


/**
 * 引导
 */
export module LwgGuide {

    export class Init {
        /**
         * 引导
         * @param guideView 引导页
         * @param dataArr 数据数组
         * @param guideIndexStorage 是否存储
         */
        constructor(view: GuideBase, dataArr?: TpGuideData[], indexStorage: boolean = false) {
            if (view.guideCompelet) {
                view.close();
            } else {
                view.visible = false;
                view.guideDataArr = dataArr;
                view.guideIndexStorage = indexStorage;
                LwgScene.commonViewParent.addChild(view);
            }
        }
        public get LwgGuide(): string {
            return 'LwgGuide';
        }
    }

    /**
     * 引导的点击类型
     */
    export enum EmClickType {
        /**
         * 按下
         */
        down = 'down',
        /**
         * 移动
         */
        move = 'move',
        /**
         * 抬起
         */
        up = 'up',
        /**
         * 移出
         */
        out = 'out',
        /**
         * 任意滑动
         */
        slide = 'slide',
        /**
         * 左滑动
         */
        slideL = 'slideL',
        /**
         * 右滑动
         */
        slideR = 'slideR',
        /**
         * 左右滑动
         */
        slideLR = 'slideLR',
        /**
         * 上滑动
         */
        slideU = 'slideU',
        /**
         * 下滑动
         */
        slideD = 'slideD',
        /**
         * 上下滑动
         */
        slideUD = 'slideUD',
        /**
         * 多点触摸
         */
        multiTouch = 'multiTouch',
    }

    /**
     * 遮罩挖洞类型
     */
    export enum EmMaskType {
        none = 'none',
        /**
         * 圆形
         */
        round = 'round',
        /**
         * 矩形
         */
        rec = 'rect',
        /**
         * 圆角矩形
         */
        rectRound = 'rectRound',
    }

    /**
     * 引导顺序和信息
     */
    type TpGuideData = {
        /**
         * 引导的索引值，根据这个索引值来判定执行哪一步
         */
        index: number,
        /**
         * 开始前执行
         */
        stepReady: Function,
        /**
         * 完成后执行
         */
        stepComplete: Function,
        /**
         * 点击
         */
        click: {
            /**
             * 点击效果类型
             */
            type: EmClickType,
            /**
             * 点击效果类型
             */
            effectType: LwgClick.EmEffectType,
            /**
             * 点击的筛选值，筛选出可以点击的节点,如果是点击舞台，可有使用引导页面中的背景图和imgclick替代以防止游戏中的某些点击屏蔽了舞台的触发
             */
            filter: LwgClick.EmfilterType,
            /**
             * 目标组,点击任意一个都会触发结束，如果是按照顺序或者全部需要点击就拆成多个步骤进行
             */
            targetArr: Laya.Sprite[],
            /**
             * 滑动触发时的滑动值
             */
            slideValue: number,
        }
        /**
         * 完成后是否继续引导，如果不继续则需要手动触发
         */
        continue: boolean,
        /**
         * 遮罩
         */
        mask?: {
            /**
             * 遮罩类型
             */
            type: EmMaskType,
            /**
             * 圆形的样式数组，x,y,半径
             */
            roundData?: [number, number, number][],
            /**
             * 矩形样式，x,y,长宽
             */
            rectData?: [number, number, number, number][],
            /**
             * 圆角矩形样式,x位置，y位置，width宽，height高，round圆角角度
             */
            rectRoundData?: [number, number, number, number, number][],
        },
    }

    /**
     * 引导，通过监听各种变量来控制引导步骤，在此页面控制点击等
     */
    export class GuideBase extends ui.Views.Base.GuideUI {
        /**
         * 会在当前步骤引导开始的时候执行引导条件,索引值一一对应,太多的话可以用表格
         */
        guideDataArr: TpGuideData[] = [];
        /**
         * 是否存储步骤
         */
        guideIndexStorage: boolean;
        private _guideIndex = 1;
        get guideIndex(): number {
            if (this.guideCompelet) {
                return -1;
            } else {
                if (this.guideIndexStorage) {
                    return LwgStorage.number(`Guide/guideIndex`).value;
                } else {
                    return this._guideIndex;
                }
            }
        }

        /**
         * 引导到达第几步了
         */
        set guideIndex(val: number) {
            this._guideIndex = val;
            if (this.guideIndexStorage) {
                LwgStorage.number(`Guide/guideIndex`).value = val;
            }
            //引导索引值增加时即是结束
            this.clear();
            this.stepData.stepComplete && this.stepData.stepComplete();
            this.guideStepComplete();
            if (this.stepData.continue) {
                this.guideStart();
            }
        }
        get guideCompelet(): boolean {
            return LwgStorage.bool(`Guide/guideCompelet`, null, false).value;
        }
        /**
         * 引导是否完成
         */
        set guideCompelet(val: boolean) {
            LwgStorage.bool(`Guide/guideCompelet`).value = val;
            if (val) {
                this.close();
            }
        }
        onAwake(): void {
            this.lwgOnAwake();
            this.lwgEvent();
        }
        lwgOnAwake(): void { };
        lwgEvent(): void { };
        /**
         * 每个步骤开始时执行，在数组设置无法满足的情况下使用
         */
        guideStartCb(): void { }
        /**
         * 每个步骤结束时执行，在数组设置无法满足的情况下使用，或者是配表时，无法使用函数时
         */
        guideStepComplete(): void { }
        /**
         * 结束后清理
         */
        private clear(): void {
            //全部隐藏
            this.visible = false;
            for (let index = 0; index < this.numChildren; index++) {
                const element = this.getChildAt(index) as Laya.Sprite;
                element.visible = false;
            }
            Laya.timer.clearAll(this);
            this.clickX = null;
            this.clickY = null;
            LwgClick.Filter.setValue(LwgClick.EmfilterType.all);
        }
        evRegister(name: any, func: Function): void {
            LwgEvent.register(name, this, func);
        }
        evRegisterOnce(name: string, func: Function): void {
            LwgEvent.registerOnce(name, this, func);
        }
        evNotify(name: any, args?: any[]): void {
            LwgEvent.notify(name, args);
        }
        /**
         * 当前引导步骤信息
         */
        private stepData: TpGuideData;
        /**
         * 开始引导
         */
        guideStart(): void {
            this.stepData = null;
            for (let index = 0; index < this.guideDataArr.length; index++) {
                const data = this.guideDataArr[index];
                //查看索引值是否匹配
                if (data.index === this.guideIndex) {
                    this.stepData = data;
                }
            }
            //检查当前引导步骤是否存在
            if (this.stepData) {
                //执行引导开始前准备
                this.visible = true;
                this.stepData.stepReady && this.stepData.stepReady();
                //检查是否需要遮罩
                this.stepData.mask && this[`${this.stepData.mask.type}Mask`] && this[`${this.stepData.mask.type}Mask`]();
                //查看点击目标
                const targetArr = this.stepData.click.targetArr;
                for (let index = 0; index < targetArr.length; index++) {
                    const target = targetArr[index];
                    //注册点击类型
                    LwgClick.Filter.setValue(this.stepData.click.filter, this.stepData.click.targetArr);
                    this[`${this.stepData.click.type}Click`] && this[`${this.stepData.click.type}Click`](target);
                }
            } else {
                console.log('不存在引导步骤,引导结束:', this.guideIndex);
                this.guideCompelet = true;
            }
        }
        private noneMask(): void {
            this.background.visible = false;
        }

        private roundMask(): void {
            this.background.visible = true;
            const round = this.stepData.mask.roundData;
            if (round.length > 0) {
                LwgTools.Draw.maskRound(this.background, round);
            } else {
                console.log('步骤：', this.guideIndex, '遮罩数据不正确');
            }
        }
        private rectMask(): void {
            this.background.visible = true;
            const rect = this.stepData.mask.rectData;
            if (rect.length > 0) {
                LwgTools.Draw.maskRect(this.background, rect);
            } else {
                console.log('步骤：', this.guideIndex, '遮罩数据不正确');
            }
        }
        private rectRoundMask(): void {
            this.background.visible = true;
            const rectRound = this.stepData.mask.rectRoundData;
            if (rectRound.length > 0) {
                LwgTools.Draw.maskRectRound(this.background, rectRound);
            } else {
                console.log('步骤：', this.guideIndex, '遮罩数据不正确');
            }
        }

        private downClick(target: Laya.Sprite): void {
            const down = () => {
                LwgClick.off(target);
                this.guideIndex++;
            }
            LwgClick.on(this.stepData.click.effectType, target, this, down, null, null, null, [[], [], [], []]);
        }
        private moveClick(target: Laya.Sprite): void {
            const move = () => {
                LwgClick.off(target);
                this.guideIndex++;
            }
            LwgClick.on(this.stepData.click.effectType, target, this, null, move, null, null, [[], [], [], []]);
        }
        private upClick(target: Laya.Sprite): void {
            // const up = () => {
            //     LwgClick.off(target);
            //     this.guideIndex++;
            // }
            // LwgClick.on(this.stepData.click.effectType, target, this, null, null, up, null, [[], [], [], []]);
            target.once(Laya.Event.MOUSE_UP, this, () => {
                this.guideIndex++;
            })
        }

        private outClick(target: Laya.Sprite): void {
            const out = () => {
                LwgClick.off(target);
                this.guideIndex++;
            }
            LwgClick.on(this.stepData.click.effectType, target, this, null, null, null, out, [[], [], [], []]);
        }

        /**
         * 滑动类型按下坐标
         */
        clickX: number;
        clickY: number;
        /**
         * 滑动类型按下记录
         * @param e 
         */
        commonDown(e: Laya.Event): void {
            this.clickX = e.stageX;
            this.clickY = e.stageY;
        }
        /**
         * 获取滑动值
         */
        public get slideValue(): number {
            return this.stepData.click.slideValue ? this.stepData.click.slideValue : 50;
        };
        private slideClick(target: Laya.Sprite): void {
            const move = (e: Laya.Event) => {
                if (this.clickX) {
                    if (Math.abs(e.stageX - this.clickX) >= this.slideValue || Math.abs(e.stageY - this.clickY) >= this.slideValue) {
                        LwgClick.off(target);
                        this.guideIndex++;
                    }
                }
            }
            LwgClick.on(this.stepData.click.effectType, target, this, this.commonDown, move, null, null, [[], [], [], []]);
        }

        private slideLClick(target: Laya.Sprite): void {
            const move = (e: Laya.Event) => {
                if (this.clickX) {
                    if (e.stageX - this.clickX <= this.slideValue) {
                        LwgClick.off(target);
                        this.guideIndex++;
                    }
                }
            }
            LwgClick.on(this.stepData.click.effectType, target, this, this.commonDown, move, null, null, [[], [], [], []]);
        }

        private slideRClick(target: Laya.Sprite): void {
            const move = (e: Laya.Event) => {
                if (this.clickX) {
                    if (e.stageX - this.clickX >= this.slideValue) {
                        LwgClick.off(target);
                        this.guideIndex++;
                    }
                }
            }
            LwgClick.on(this.stepData.click.effectType, target, this, this.commonDown, move, null, null, [[], [], [], []]);
        }

        private slideLRClick(target: Laya.Sprite): void {
            const move = (e: Laya.Event) => {
                if (this.clickX) {
                    if (Math.abs(e.stageX - this.clickX) >= this.slideValue) {
                        LwgClick.off(target);
                        this.guideIndex++;
                    }
                }
            }
            LwgClick.on(this.stepData.click.effectType, target, this, this.commonDown, move, null, null, [[], [], [], []]);
        }

        private slideUClick(target: Laya.Sprite): void {
            const move = (e: Laya.Event) => {
                if (this.clickY) {
                    if (e.stageY - this.clickY <= this.slideValue) {
                        LwgClick.off(target);
                        this.guideIndex++;
                    }
                }
            }
            LwgClick.on(this.stepData.click.effectType, target, this, this.commonDown, move, null, null, [[], [], [], []]);
        }
        private slideDClick(target: Laya.Sprite): void {
            const move = (e: Laya.Event) => {
                if (this.clickY) {
                    if (e.stageY - this.clickY >= this.slideValue) {
                        LwgClick.off(target);
                        this.guideIndex++;
                    }
                }
            }
            LwgClick.on(this.stepData.click.effectType, target, this, this.commonDown, move, null, null, [[], [], [], []]);
        }
        private slideUDClick(target: Laya.Sprite): void {
            const move = (e: Laya.Event) => {
                if (this.clickY) {
                    if (Math.abs(e.stageY - this.clickY) >= this.slideValue) {
                        LwgClick.off(target);
                        this.guideIndex++;
                    }
                }
            }
            LwgClick.on(this.stepData.click.effectType, target, this, this.commonDown, move, null, null, [[], [], [], []]);
        }
        private multiTouchClick(target: Laya.Sprite): void {

        }
    }
}

/**加载模块*/
export module LwgPreLoad {
    /**
     * 初始化
     */
    export class Init {
        constructor(_showLog = true) {
            showLog = _showLog;
        }
        public get LwgPreLoad(): string {
            return 'LwgPreLoad';
        }
    }
    /**
     * 是否显示加载日志
     */
    export let showLog: boolean;

    type TpLodeBase = {
        url: string | string[],
        /**
         * 分组，清理资源的时候可以分组销毁 
         */
        group?: string,
        /**
         * 销毁并清理
         */
        destoryAndClear?: Function,
        /**
         * 加载完成回调，会传出加载成功后的对象
         */
        callBack?: Function,
        /**
         * lock,是否锁住
         */
        lock?: boolean,
    }
    /**
     * 3D场景的加载，其他3D物体，贴图，Mesh详见：  https://ldc2.layabox.com/doc/?nav=zh-ts-4-3-1
     */
    export type TpLodeScene3D = { instance?: Laya.Scene3D } & TpLodeBase;
    /**
     * D预设的加载，其他3D物体，贴图，Mesh详见：  https://ldc2.layabox.com/doc/?nav=zh-ts-4-3-1
     */
    export type TpLodePrefab3D = {
        url: string | string[],
        instance?: Laya.Sprite3D,
        instanceArr?: Laya.Sprite3D[],
        /**关联贴图，用于清理 */
        texUrlArr?: string[],
    } & TpLodeBase;
    /**
     * 模型网格详见：  https://ldc2.layabox.com/doc/?nav=zh-ts-4-3-1
     */
    export type TpLodeMesh3D = { url: string, instance?: Laya.Mesh } & TpLodeBase;
    /**
     * 材质详见：  https://ldc2.layabox.com/doc/?nav=zh-ts-4-3-1
     */
    export type TpLodeMaterial = { url: string, instance?: Laya.Material } & TpLodeBase;
    /**
     * 2D纹理
     */
    export type TpLodeTexture = { url: string | string[], instance?: Laya.Texture | Laya.Texture[] } & TpLodeBase;
    /**
     * 3D纹理加载详见：  https://ldc2.layabox.com/doc/?nav=zh-ts-4-3-1
     */
    export type TpLodeTexture2D = { instance?: Laya.Texture2D } & TpLodeBase;
    /**
     * 需要加载的图片资源列表,一般是界面的图片
     */
    export type TpLodeImage = { url: string[] | string } & TpLodeBase;
    /**
     * 2D场景
     */
    export type TpLodeView = { instance?: Laya.View } & TpLodeBase;
    /**
     * 2D预制体
     */
    export type TpLodePrefab2D = { instance?: Laya.Prefab } & TpLodeBase;
    /**
     * json数据表
     */
    export type TpLodeJson = {
        dataArr?: any[],
        /**
         * json文件中一般会有一个属性名，这个属性名对应 dataArr,
         */
        dataArrName?: string,
        instance?: any[],
    } & TpLodeBase;
    /**
     * 骨骼动画加载
     */
    export type TpLodeSkeleton = { templet?: Laya.Templet } & TpLodeBase;
    /**
     * 特效列表中的tex2d
     */
    export type TpLodeEffectsTex2D = { texture2D?: Laya.Texture2D } & TpLodeBase;
    /**
     * 图集
     */
    export type TpLodeAtlas = TpLodeBase;

    /**
     * 如果需要加载一组数据,[url1.url2,...]，则可以将需要加载的数组进行遍历赋值给相对应的对象的url，直接加载整个数组也是成立的,只不过加载后，
     * 只能通过Laya.loader.getRes(url)获取
     */
    export class PreLoadBase extends LwgScene.SceneBase {
        // 将模块中的类型格式装进数组,_res中的加载格式必须与其中的类型一一匹配
        private ImageArr: Array<TpLodeImage> = [];
        private TextureArr: Array<TpLodeTexture> = [];
        private Prefab2DArr: Array<TpLodePrefab2D> = [];
        private ViewsArr: Array<TpLodeView> = [];
        private Scene3DArr: Array<TpLodeScene3D> = [];
        private Prefab3DArr: Array<TpLodePrefab3D> = [];
        private Texture2DArr: Array<TpLodeTexture2D> = [];
        private EffectsTex2DArr: Array<TpLodeEffectsTex2D> = [];
        private MaterialArr: Array<TpLodeMaterial> = [];
        private Mesh3DArr: Array<TpLodeMesh3D> = [];
        private JsonArr: Array<TpLodeJson> = [];
        private SkeletonArr: Array<TpLodeSkeleton> = [];
        private AtlasArr: Array<TpLodeAtlas> = [];
        /**
         * 加载顺序依次为3d,2d,数据表，可修改
         */
        private loadRes: Array<any> = [this.ImageArr, this.TextureArr, this.Prefab2DArr, this.ViewsArr, this.Prefab3DArr, this.Texture2DArr, this.EffectsTex2DArr, this.MaterialArr, this.Mesh3DArr, this.Scene3DArr, this.JsonArr, this.SkeletonArr, this.AtlasArr];
        /**
         * 当前加载到哪个分类数组
         */
        private loadOrderIndex: number = 0;
        /**
         * 进度条总长度,长度为所有加载资源类型的数组总长度
         */
        private sumProgress: number = 0;
        /**
         * 当前进度条进度,起始位0，每加载成功1个资源，则加1
         */
        private currentProgress = 0;
        /**
         * 获取加载百分比
         */
        public get lodePercent(): number {
            return this.currentProgress / this.sumProgress;
        }
        /**
         * 是否打印加载日志 
         */
        public showLog: boolean = true;
        /**
         * 载入加载项,执行这个函数开始加载，有时候会在此之前做一些动画效果，所以这个函数手动执行
         * @param res 资源对象
         */
        lodeStart(res: Object): void {
            // 将加载资源放进对应名称的数组
            for (const lodeClassName in res) {
                if (Object.prototype.hasOwnProperty.call(res, lodeClassName)) {
                    const lodeClass = res[lodeClassName];
                    if (lodeClass instanceof Object) {
                        for (const lodeName in lodeClass) {
                            if (Object.prototype.hasOwnProperty.call(lodeClass, lodeName)) {
                                const obj: Object = lodeClass[lodeName];
                                if (obj instanceof Object) {
                                    this[`${lodeClassName}Arr`].push(obj);
                                }
                            }
                        }
                    }
                }
            }
            // 将长度为零的数组删掉,并且计算出总长度 
            for (let index = 0; index < this.loadRes.length; index++) {
                this.sumProgress += this.loadRes[index].length;
                if (this.loadRes[index].length <= 0) {
                    this.loadRes.splice(index, 1);
                    index--;
                }
            }
            // 开场动画后再进行加载
            const time = this.lwgOpenAni();
            Laya.timer.once(time ? time : 0, this, () => {
                this.lodeRules();
            })
        }
        /**
         * 每单个资源加载成功后，进度条每次增加后的回调，第一次加载将会在openAni动画结束之后,会回传url，可验证是哪个加载完成了
         */
        lodeStepComplete(url: string | string[]): void { }
        /**
         * 资源全部加载完成回调,返回的时间根据游戏动态调整,此方法执行后，如果是init场景自动进入proload界面，如果是preload界面根据返回的时间自动进入start界面
         */
        lodeAllComplete(): number { return 0 };
        /**
         * 此方法如果被重写并且返回true则不会直接进入start页面，在lodeAllComplete返回的时间之后执行，用于做一些引导，这些引导会打开其他页面 
         */
        lodeAllCompleteAfter(): boolean { return false };
        /**
         * 单个步骤逐步加载
         * @private
         * @return {*}  {void}
         * @memberof _PreLoadScene
         */
        private stepComplete(url: string | string[]): void {
            this.currentProgress++;
            showLog && console.log('当前进度条进度:', this.currentProgress / this.sumProgress);

            if (this.currentProgress >= this.sumProgress) {
                if (this.sumProgress == 0) {
                    return;
                }
                showLog && console.log(`所有资源加载完成！此时所有资源可通过例如:Laya.loader.getRes("url")获取`);
                this.allComplete();
            } else {
                // 当前进度达到当前长度节点时,去到下一个数组加载
                let number = 0;
                for (let index = 0; index <= this.loadOrderIndex; index++) {
                    number += this.loadRes[index].length;
                }
                if (this.currentProgress === number) {
                    this.loadOrderIndex++;
                }
                this.lodeStepComplete(url);
                this.lodeRules();
            }
        }

        /**
         * 全部完成时
         * @private
         * @memberof _PreLoadScene
         */
        private allComplete(): void {
            Laya.timer.once(this.lodeAllComplete(), this, () => {
                if (!this.lodeAllCompleteAfter()) {
                    // 页面前加载会打开指定场景
                    switch (this.owner.name) {
                        case LwgScene.NameBase.PreLoadCutIn:
                            if (LwgScene.preLoadInfo.openIsOverlay) {
                                this.openOverlayScene(LwgScene.preLoadInfo.openName);
                            } else {
                                this.openScene(LwgScene.preLoadInfo.openName);
                            }
                            break;

                        case LwgScene.NameBase.PreLoad:
                            this.openScene(LwgScene.NameBase.Start);
                            //关闭init界面
                            const initView = Laya.stage.getChildAt(0).getChildByName(LwgScene.NameBase.Init);
                            initView.destroy(true);
                            break;

                        case LwgScene.NameBase.Init:
                            this.openScene(LwgScene.NameBase.PreLoad);

                            break;

                        default:
                            break;
                    }
                }
            })
        }

        /**
         * 加载日志
         * @private
         * @param {any[]} resArr 当前加载的数组种类
         * @param {number} index 加载类型数组索引值
         * @param {*} res 加载完成的资源
         * @param {string} typeName 加载数组类型名称
         * @param {Function} completeFunc 结束后的资源处理函数
         * @memberof _PreLoadScene 
         */
        private lodeLog(resArr: TpLodeBase[], index: number, res: any, typeName: string, completeFunc: Function): void {
            const obj = resArr[index];
            const urlOrUrlArr = resArr[index].url;
            if (typeof urlOrUrlArr === 'object') {
                showLog && console.log(typeName, `数组加载完成，为数组对象`, '长度为:', urlOrUrlArr.length);
            } else {
                if (res == null) {
                    showLog && console.log(`XXXXXXXXXXX${typeName}:${urlOrUrlArr}加载失败！不会停止加载进程！, 数组下标为：${index}, 'XXXXXXXXXXX`);
                } else {
                    showLog && console.log(`${typeName}:${urlOrUrlArr}加载完成！, 数组下标为${index}`);
                    completeFunc && completeFunc();
                }
            }
            obj.callBack && obj.callBack(res);
            this.stepComplete(urlOrUrlArr);
        }
        /**
         * 完全清理某个对象
         * @param obj 
         */
        private addDestoryAndClear(obj: TpLodeBase): void {
            obj.destoryAndClear = () => {
                //     obj['instance'] && obj['instance'].destroy(true);
                //     obj['instance'] = null;
                Laya.loader.clearRes(obj.url as string);
                Laya.Loader.clearRes(obj.url as string);
                //     Laya.Resource.destroyUnusedResources();
            }
        }

        /**
         * 根据加载顺序依次加载,第一次加载将会在openAni动画结束之后
        */
        private lodeRules(): void {
            if (this.loadRes.length <= 0) {
                showLog && console.log('没有加载项');
                this.allComplete();
                return;
            }
            // 已经加载过的分类数组的总长度，从0陆续带入可以看到其实alreadyClassifyLen长度是不包括当前分组的
            let alreadyClassifyLen: number = 0;
            for (let i = 0; i < this.loadOrderIndex; i++) {
                alreadyClassifyLen += this.loadRes[i].length;
            }
            //获取到当前分类加载数组的下标 
            const classifyIndex = this.currentProgress - alreadyClassifyLen;

            switch (this.loadRes[this.loadOrderIndex]) {
                case this.ImageArr:
                    const img = this.ImageArr[classifyIndex];
                    Laya.loader.load(this.ImageArr[classifyIndex].url, Laya.Handler.create(this, (res: any) => {
                        this.lodeLog(this.loadRes[this.loadOrderIndex], classifyIndex, res, '2D图片', null);
                    }));
                    break;

                case this.ViewsArr:
                    const viws = this.ViewsArr[classifyIndex];
                    Laya.loader.load(LwgPath.Views + viws.url + '.json', Laya.Handler.create(this, (scene: Laya.View) => {
                        this.lodeLog(this.loadRes[this.loadOrderIndex], classifyIndex, scene, '2D场景', () => {
                            viws.instance = scene;
                        });
                    }), null, Laya.Loader.JSON);
                    break;

                case this.Scene3DArr:
                    const scene3D = this.Scene3DArr[classifyIndex];

                    Laya.Scene3D.load(scene3D.url + '.ls', Laya.Handler.create(this, (Scene3D: Laya.Scene3D) => {
                        this.lodeLog(this.loadRes[this.loadOrderIndex], classifyIndex, Scene3D, '3D场景', () => {
                            scene3D.instance = Scene3D;
                            this.addDestoryAndClear(scene3D);
                            Laya.loader.setGroup(scene3D.url as string, scene3D.group);
                        });
                    }));
                    break;

                case this.Prefab3DArr:
                    const prefab3D = this.Prefab3DArr[classifyIndex];
                    if (typeof prefab3D.url === 'object') {
                        prefab3D.instanceArr = [];
                        let index = 0;
                        var lodeSp3DArr = (urlArr: string[], sprite3DArr: Laya.Sprite3D[], cb: Function): void => {
                            const url = urlArr[index];
                            if (!url) {
                                cb && cb();
                                return;
                            }
                            Laya.Sprite3D.load(url, Laya.Handler.create(this, (sp3d: Laya.Sprite3D) => {
                                if (sp3d) {
                                    sprite3DArr.push(sp3d);
                                    showLog && console.log('3D预制体：', url, '加载成功');
                                } else {
                                    showLog && console.log('XXXXXXXXXXX 3D预制体：', url, '不存在！,继续加载');
                                }
                                index++;
                                lodeSp3DArr(urlArr, sprite3DArr, cb);
                            }));
                        }

                        lodeSp3DArr(prefab3D.url, prefab3D.instanceArr, () => {
                            this.lodeLog(this.loadRes[this.loadOrderIndex], classifyIndex, prefab3D.instanceArr, '3D预制体', null);
                        });

                    } else {
                        Laya.Sprite3D.load(prefab3D.url + '.lh', Laya.Handler.create(this, (Sp3D: Laya.Sprite3D) => {
                            this.lodeLog(this.loadRes[this.loadOrderIndex], classifyIndex, Sp3D, '3D预制体', () => {
                                prefab3D.instance = Sp3D;
                                this.addDestoryAndClear(prefab3D);
                            });
                        }));
                    }
                    break;

                case this.Mesh3DArr:
                    const mesh3D = this.Mesh3DArr[classifyIndex];
                    Laya.Mesh.load(this.Mesh3DArr[classifyIndex].url, Laya.Handler.create(this, (Mesh3D: Laya.Mesh) => {
                        this.lodeLog(this.loadRes[this.loadOrderIndex], classifyIndex, Mesh3D, '3D网格', () => {
                            mesh3D.instance = Mesh3D;
                            this.addDestoryAndClear(mesh3D);
                        });
                    }));
                    break;

                case this.TextureArr:
                    const texture = this.TextureArr[classifyIndex];
                    Laya.loader.load(this.TextureArr[classifyIndex].url, Laya.Handler.create(this, (tex: Laya.Texture) => {
                        this.lodeLog(this.loadRes[this.loadOrderIndex], classifyIndex, tex, '纹理', () => {
                            texture.instance = tex;
                            this.addDestoryAndClear(texture);
                        });
                    }));
                    break;

                case this.Texture2DArr:
                    const texture2D = this.Texture2DArr[classifyIndex];
                    Laya.Texture2D.load(this.Texture2DArr[classifyIndex].url as string, Laya.Handler.create(this, (tex2D: Laya.Texture2D) => {
                        this.lodeLog(this.loadRes[this.loadOrderIndex], classifyIndex, tex2D, '3D纹理', () => {
                            texture2D.instance = tex2D;
                            this.addDestoryAndClear(texture2D);
                        });
                    }));
                    break;
                case this.EffectsTex2DArr:
                    const effectsTex2D = this.Texture2DArr[classifyIndex];
                    Laya.Texture2D.load(this.EffectsTex2DArr[classifyIndex].url as string, Laya.Handler.create(this, (tex2D: Laya.Texture2D) => {
                        this.lodeLog(this.loadRes[this.loadOrderIndex], classifyIndex, tex2D, '3D纹理', () => {
                            effectsTex2D.instance = tex2D;
                            this.addDestoryAndClear(effectsTex2D);
                        });
                    }));
                    break;

                case this.MaterialArr:
                    const material = this.MaterialArr[classifyIndex];
                    Laya.Material.load(this.MaterialArr[classifyIndex].url + '.lmat', Laya.Handler.create(this, (Material: Laya.Material) => {
                        this.lodeLog(this.loadRes[this.loadOrderIndex], classifyIndex, Material, '材质', () => {
                            material.instance = Material;
                            this.addDestoryAndClear(material);
                            Material.lock = material.lock;
                        });
                    }));
                    break;

                case this.JsonArr:
                    const lodeObj = this.JsonArr[classifyIndex];
                    Laya.loader.load(LwgPath.GameData + lodeObj.url + '.json', Laya.Handler.create(this, (Json: any) => {
                        this.lodeLog(this.loadRes[this.loadOrderIndex], classifyIndex, Json, '数据表', () => {
                            //不同的json表格式
                            if (lodeObj.dataArrName) {
                                lodeObj.dataArr = Json[lodeObj.dataArrName];
                            } else {
                                lodeObj.dataArr = Json["RECORDS"];
                                lodeObj.instance = Json["RECORDS"];
                            }
                        });
                    }), null, Laya.Loader.JSON);
                    break;

                case this.SkeletonArr:
                    //骨骼动画加载比较特殊
                    const skeleton = this.SkeletonArr[classifyIndex];
                    if (!skeleton.templet) {
                        skeleton.templet = new Laya.Templet;
                    }
                    skeleton.templet.on(Laya.Event.ERROR, this, () => {
                        showLog && console.log('XXXXXXXXXXX骨骼动画' + this.SkeletonArr[classifyIndex] + '加载失败！不会停止加载进程！', '数组下标为：', classifyIndex, 'XXXXXXXXXXX');
                        this.stepComplete(skeleton.url);
                    });
                    skeleton.templet.on(Laya.Event.COMPLETE, this, () => {
                        showLog && console.log('骨骼动画', this.SkeletonArr[classifyIndex].url, '加载完成！', '数组下标为：', classifyIndex);
                        this.stepComplete(skeleton.url);
                        this.addDestoryAndClear(skeleton);
                        skeleton.callBack && skeleton.callBack(skeleton.templet);
                        skeleton.templet.lock = skeleton.lock;
                    });
                    skeleton.templet.loadAni(this.SkeletonArr[classifyIndex].url as string);
                    break;

                case this.Prefab2DArr:
                    const prefab2D = this.Prefab2DArr[classifyIndex];
                    Laya.loader.load(this.Prefab2DArr[classifyIndex].url, Laya.Handler.create(this, (prefabJson: JSON) => {
                        this.lodeLog(this.loadRes[this.loadOrderIndex], classifyIndex, prefabJson, '2D预制体', () => {
                            const _prefab = new Laya.Prefab();
                            _prefab.json = prefabJson;
                            prefab2D.instance = _prefab;
                            this.addDestoryAndClear(prefab2D);
                        });
                    }));
                    break;

                default:
                    break;
            }
        }
    }
    /**
     * 页面前的预加载
     */
    export class PreLoadCutInBase extends PreLoadBase {
        public get preLoadOpenName(): string {
            return LwgScene.preLoadInfo.openName;
        }
        public get preLoadFromName(): string {
            return LwgScene.preLoadInfo.fromName;
        }
    }
}

/**
 * 初始化
 */
export module LwgInit {
    /**
     * 基础初始化
     */
    export class InitBase {
        constructor(
            /**
             * 平台相关
             */
            _LwgPlatform: LwgPlatform.InitBase,
            /**
             * 一些控制
             */
            _LwgControl: LwgControl.Init,
            /**
             * 加载
             */
            _LwgPrelode: LwgPreLoad.Init,
            /**
             * 场景
             */
            _LwgScene: LwgScene.Init,
            /**
             * 资源
             */
            _LwgCurrency: LwgCurrency.Init,
            /**
             * 通用
             */
            _LwgCommon: LwgCommon.Init,
            /**
             * 点击
             */
            _LwgClick: LwgClick.Init,
            /**
             * 适配
             */
            _LwgAdaptive: LwgAdaptive.Init,
        ) {

        }
    }
    /**
     * 游戏中的初始化
     */
    export class InitGame {
        constructor(
            _LwgSound: LwgSound.Init,
            _LwgGuide: LwgGuide.Init,
        ) {

        }
    }
}

/**
 * 管理3D的模块
 * 
 */
export module Lwg3D {
    class Script3DBase extends Laya.Script3D {
        /**类名*/
        calssName: string;
        get cameraPos(): Laya.Vector3 {
            if (!this['__cameraPos']) {
                return this['__cameraPos'] = new Laya.Vector3(this.mainCamera.transform.localPositionX, this.mainCamera.transform.localPositionY, this.mainCamera.transform.localPositionZ);
            } else {
                return this['__cameraPos'];
            }
        }
        get mainCamera(): Laya.Camera {
            if (!this['_MainCamera']) {
                if (this.owner.getChildByName('Main Camera')) {
                    return this['_MainCamera'] = this.owner.getChildByName('Main Camera') as Laya.Camera;
                }
                for (let index = 0; index < this.owner.numChildren; index++) {
                    const element = this.owner.getChildAt(index);
                    if (typeof element == typeof (Laya.Camera)) {
                        return this['_MainCamera'] = element as Laya.Camera;
                    }
                }
            } else {
                return this['_MainCamera'];
            }
        }
        set mainCamera(Camera: Laya.Camera) {
            this['_MainCamera'] = Camera;
        }

        /**子节点*/
        child(name: string): Laya.MeshSprite3D {
            if (!this[`_child${name}`]) {
                if (this.owner.getChildByName(name)) {
                    return this[`_child${name}`] = this.owner.getChildByName(name) as Laya.MeshSprite3D;
                } else {
                    console.log(`不存在子节点${name}`);
                }
            } else {
                return this[`_child${name}`];
            }
        }
        private getChildComponent(name: string, Component: string): any {
            if (!this[`_child${name}${Component}`]) {
                let Child = this.owner.getChildByName(name) as Laya.MeshSprite3D;
                if (Child) {
                    if (Child[Component]) {
                        return this[`_child${name}${Component}`] = Child[Component];
                    } else {
                        console.log(`${name}子节点没有${Component}组件`);
                    }
                } else {
                    console.log(`不存在子节点${name}`);
                }
            } else {
                return this[`_child${name}${Component}`];
            }
        }
        /**子节点*/
        childTrans(name: string): Laya.Transform3D {
            return this.getChildComponent(name, 'transform');
        }
        /**子节点网格渲染器*/
        childMRenderer(name: string): Laya.MeshRenderer {
            return this.getChildComponent(name, 'meshRenderer');
        }

        private getFindComponent(name: string, Component: string): any {
            if (!this[`_child${name}${Component}`]) {
                let Node = LwgTools.Node.findChild3D(this.owner, name);
                if (Node) {
                    if (Node[Component]) {
                        return this[`_child${name}${Component}`] = Node[Component];
                    } else {
                        console.log(`${name}场景内节点没有${Component}组件`);
                    }
                } else {
                    console.log(`场景内不存在子节点${name}`);
                }
            } else {
                return this[`_child${name}${Component}`];
            }
        }
        /**从全局查找当前节点，返回第一个*/
        find(name: string): Laya.MeshSprite3D {
            if (!this[`_FindNode${name}`]) {
                let Node = LwgTools.Node.findChild3D(this.owner, name);
                if (Node) {
                    return this[`_FindNode${name}`] = Node;
                } else {
                    console.log(`不存在节点${name}`);
                }
            } else {
                return this[`_FindNode${name}`];
            }
        }
        /**从全局查找当前节点，返回第一个*/
        findMRenderer(name: string): Laya.MeshRenderer {
            return this.getFindComponent(name, 'meshRenderer');
        }

        /**从全局查找当前节点的的transform*/
        findTrans(name: string): Laya.Transform3D {
            return this.getFindComponent(name, 'transform');
        }
        /**重置场景内容*/
        lwgReset(): void { }
        lwgOnAwake(): void {
        }
        /**场景中的一些事件，在lwgOnAwake和lwgOnEnable之间执行*/
        lwgEventRegister(): void { };
        evReg(name: any, func: Function): void {
            LwgEvent.register(name, this, func);
        }
        evNotify(name: any, args?: Array<any>): void {
            LwgEvent.notify(name, args);
        }
        /**初始化，在onEnable中执行，重写即可覆盖*/
        lwgOnEnable(): void { }
        lwgOnStart(): void { }
        /**每帧更新时执行，尽量不要在这里写大循环逻辑或者使用*/
        lwgOnUpdate(): void {
        }
        /**离开时执行，子类不执行onDisable，只执行lwgDisable*/
        lwgOnDisable(): void {
        }
        /**
         * 清理
         */
        lwgClear(): void {
            Laya.timer.clearAll(this);
            Laya.Tween.clearAll(this);
            LwgEvent.offAllCaller(this);
            Laya.timer.clearAll(this.owner);
            Laya.Tween.clearAll(this.owner);
            LwgEvent.offAllCaller(this.owner);
        }
    }

    /**3D场景通用父类*/
    export class Scene3DBase extends Script3DBase {
        constructor() {
            super();
        }
        /**摄像机的初始位置*/
        cameraFp: Laya.Vector3 = new Laya.Vector3;
        onAwake(): void {
            // 类名
            this.calssName = this['__proto__']['constructor'].name;
            if (this.mainCamera) {
                this.cameraFp.x = this.mainCamera.transform.localPositionX;
                this.cameraFp.y = this.mainCamera.transform.localPositionY;
                this.cameraFp.z = this.mainCamera.transform.localPositionZ;
            }
            this.lwgOnAwake();
        }
        onEnable() {
            // 组件变为的self属性
            this.owner[this.calssName] = this;
            this.lwgEventRegister();
            this.lwgOnEnable();
            this.lwgOpenAni();
        }
        onStart(): void {
            this.lwgOnStart();
        }
        /**开场动画*/
        lwgOpenAni(): void {
        }
        /**离场动画*/
        lwgVanishAni(): void {
        }
        onUpdate(): void {
            this.lwgOnUpdate();
        }
        onDisable(): void {
            this.lwgOnDisable();
            this.lwgClear();
        }
    }
    /**3D物件通用父类*/
    export class Object3D extends Script3DBase {
        constructor() {
            super();
        }
        private get _owner(): Laya.MeshSprite3D {
            return this.owner as Laya.MeshSprite3D;
        }
        locScale(): Laya.Vector3 {
            return this._owner.transform.localScale;
        }
        locPos(): Laya.Vector3 {
            return this._owner.transform.localPosition;
        }
        pos(): Laya.Vector3 {
            return this._owner.transform.position;
        }
        locEuler(): Laya.Vector3 {
            return this._owner.transform.localRotationEuler;
        }
        get parent(): Laya.MeshSprite3D {
            return this._owner.parent as Laya.MeshSprite3D;
        }
        get transform(): Laya.Transform3D {
            return this._owner.transform;
        }
        get scene3D(): Laya.Scene3D {
            return this._owner.scene as Laya.Scene3D;
        }
        /**物理组件*/
        get rig3D(): Laya.RigidBody {
            if (!this._owner['__Rigidbody3D']) {
                this._owner['__Rigidbody3D'] = this._owner.getComponent(Laya.Rigidbody3D);
            }
            return this._owner['__Rigidbody3D'];
        }
        ownerAnimator: Laya.Animator;
        onAwake(): void {
            // 组件变为的self属性
            this.lwgOnAwake();
            this.ownerAnimator = this.owner.getComponent(Laya.Animator);
        }
        onEnable() {
            this.lwgEventRegister();
            this.lwgOnEnable();
        }
        onUpdate(): void {
            this.lwgOnUpdate();
        }
        onDisable(): void {
            this.lwgReset();
            this.lwgOnDisable();
            this.lwgClear();
        }
    }
}

LwgPlatform;
LwgTwoTwoThree;
LwgOPPO;
LwgWX;
LwgControl;
LwgScene;
LwgAdaptive;
LwgSceneAni;
LwgNode;
LwgDialogue;
LwgEvent;
LwgTimer;
LwgData;
LwgStorage;
LwgDate;
LwgSet;
LwgSound;
LwgClick;
LwgColor;
LwgEff2D;
LwgAni2D;
LwgCurrency;
LwgTools;
LwgCommon;
LwgPath;
LwgGuide;
LwgPreLoad;
LwgInit;
Lwg3D;
LwgAni3D;
LwgEff3D;
