(function () {
    'use strict';

    var View = Laya.View;
    var REG = Laya.ClassUtils.regClass;
    var ui;
    (function (ui) {
        var Views;
        (function (Views) {
            class ADGetRewardUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Views/ADGetReward");
                }
            }
            Views.ADGetRewardUI = ADGetRewardUI;
            REG("ui.Views.ADGetRewardUI", ADGetRewardUI);
            class BeRewardedUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Views/BeRewarded");
                }
            }
            Views.BeRewardedUI = BeRewardedUI;
            REG("ui.Views.BeRewardedUI", BeRewardedUI);
            class CheckInUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Views/CheckIn");
                }
            }
            Views.CheckInUI = CheckInUI;
            REG("ui.Views.CheckInUI", CheckInUI);
            class CheckInDay6RenderObjUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Views/CheckInDay6RenderObj");
                }
            }
            Views.CheckInDay6RenderObjUI = CheckInDay6RenderObjUI;
            REG("ui.Views.CheckInDay6RenderObjUI", CheckInDay6RenderObjUI);
            class CheckInDay7RrwardRenderObjUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Views/CheckInDay7RrwardRenderObj");
                }
            }
            Views.CheckInDay7RrwardRenderObjUI = CheckInDay7RrwardRenderObjUI;
            REG("ui.Views.CheckInDay7RrwardRenderObjUI", CheckInDay7RrwardRenderObjUI);
            class DefeatedUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Views/Defeated");
                }
            }
            Views.DefeatedUI = DefeatedUI;
            REG("ui.Views.DefeatedUI", DefeatedUI);
            class EndLessSettleUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Views/EndLessSettle");
                }
            }
            Views.EndLessSettleUI = EndLessSettleUI;
            REG("ui.Views.EndLessSettleUI", EndLessSettleUI);
            class LevelsUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Views/Levels");
                }
            }
            Views.LevelsUI = LevelsUI;
            REG("ui.Views.LevelsUI", LevelsUI);
            class LotteryUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Views/Lottery");
                }
            }
            Views.LotteryUI = LotteryUI;
            REG("ui.Views.LotteryUI", LotteryUI);
            class LotteryRenderObjUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Views/LotteryRenderObj");
                }
            }
            Views.LotteryRenderObjUI = LotteryRenderObjUI;
            REG("ui.Views.LotteryRenderObjUI", LotteryRenderObjUI);
            class LuckyWheelUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Views/LuckyWheel");
                }
            }
            Views.LuckyWheelUI = LuckyWheelUI;
            REG("ui.Views.LuckyWheelUI", LuckyWheelUI);
            class LuckyWheelRenderObjUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Views/LuckyWheelRenderObj");
                }
            }
            Views.LuckyWheelRenderObjUI = LuckyWheelRenderObjUI;
            REG("ui.Views.LuckyWheelRenderObjUI", LuckyWheelRenderObjUI);
            class PropTryUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Views/PropTry");
                }
            }
            Views.PropTryUI = PropTryUI;
            REG("ui.Views.PropTryUI", PropTryUI);
            class ResurgenceUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Views/Resurgence");
                }
            }
            Views.ResurgenceUI = ResurgenceUI;
            REG("ui.Views.ResurgenceUI", ResurgenceUI);
            class SkillUpgradeObjUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Views/SkillUpgradeObj");
                }
            }
            Views.SkillUpgradeObjUI = SkillUpgradeObjUI;
            REG("ui.Views.SkillUpgradeObjUI", SkillUpgradeObjUI);
            class SkillUpgradeRenderObjUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Views/SkillUpgradeRenderObj");
                }
            }
            Views.SkillUpgradeRenderObjUI = SkillUpgradeRenderObjUI;
            REG("ui.Views.SkillUpgradeRenderObjUI", SkillUpgradeRenderObjUI);
            class SkinUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Views/Skin");
                }
            }
            Views.SkinUI = SkinUI;
            REG("ui.Views.SkinUI", SkinUI);
            class SkinRenderObjUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Views/SkinRenderObj");
                }
            }
            Views.SkinRenderObjUI = SkinRenderObjUI;
            REG("ui.Views.SkinRenderObjUI", SkinRenderObjUI);
            class SkinTryUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Views/SkinTry");
                }
            }
            Views.SkinTryUI = SkinTryUI;
            REG("ui.Views.SkinTryUI", SkinTryUI);
            class SpecialAwardsUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Views/SpecialAwards");
                }
            }
            Views.SpecialAwardsUI = SpecialAwardsUI;
            REG("ui.Views.SpecialAwardsUI", SpecialAwardsUI);
            class VictoryUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("Views/Victory");
                }
            }
            Views.VictoryUI = VictoryUI;
            REG("ui.Views.VictoryUI", VictoryUI);
        })(Views = ui.Views || (ui.Views = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var Views;
        (function (Views) {
            var Base;
            (function (Base) {
                class CloseBtnObjUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Views/Base/CloseBtnObj");
                    }
                }
                Base.CloseBtnObjUI = CloseBtnObjUI;
                REG("ui.Views.Base.CloseBtnObjUI", CloseBtnObjUI);
                class DialogCommonUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Views/Base/DialogCommon");
                    }
                }
                Base.DialogCommonUI = DialogCommonUI;
                REG("ui.Views.Base.DialogCommonUI", DialogCommonUI);
                class DialogHintUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Views/Base/DialogHint");
                    }
                }
                Base.DialogHintUI = DialogHintUI;
                REG("ui.Views.Base.DialogHintUI", DialogHintUI);
                class DiamondObjUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Views/Base/DiamondObj");
                    }
                }
                Base.DiamondObjUI = DiamondObjUI;
                REG("ui.Views.Base.DiamondObjUI", DiamondObjUI);
                class DiamondSingleObjUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Views/Base/DiamondSingleObj");
                    }
                }
                Base.DiamondSingleObjUI = DiamondSingleObjUI;
                REG("ui.Views.Base.DiamondSingleObjUI", DiamondSingleObjUI);
                class FloatFontArtObjUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Views/Base/FloatFontArtObj");
                    }
                }
                Base.FloatFontArtObjUI = FloatFontArtObjUI;
                REG("ui.Views.Base.FloatFontArtObjUI", FloatFontArtObjUI);
                class FloatFontSystemObjUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Views/Base/FloatFontSystemObj");
                    }
                }
                Base.FloatFontSystemObjUI = FloatFontSystemObjUI;
                REG("ui.Views.Base.FloatFontSystemObjUI", FloatFontSystemObjUI);
                class GameManagerUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Views/Base/GameManager");
                    }
                }
                Base.GameManagerUI = GameManagerUI;
                REG("ui.Views.Base.GameManagerUI", GameManagerUI);
                class GameManagerBtnObjUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Views/Base/GameManagerBtnObj");
                    }
                }
                Base.GameManagerBtnObjUI = GameManagerBtnObjUI;
                REG("ui.Views.Base.GameManagerBtnObjUI", GameManagerBtnObjUI);
                class GameManagerRenderObjUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Views/Base/GameManagerRenderObj");
                    }
                }
                Base.GameManagerRenderObjUI = GameManagerRenderObjUI;
                REG("ui.Views.Base.GameManagerRenderObjUI", GameManagerRenderObjUI);
                class GoldObjUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Views/Base/GoldObj");
                    }
                }
                Base.GoldObjUI = GoldObjUI;
                REG("ui.Views.Base.GoldObjUI", GoldObjUI);
                class GuideUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Views/Base/Guide");
                    }
                }
                Base.GuideUI = GuideUI;
                REG("ui.Views.Base.GuideUI", GuideUI);
                class InitUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Views/Base/Init");
                    }
                }
                Base.InitUI = InitUI;
                REG("ui.Views.Base.InitUI", InitUI);
                class PreLoadUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Views/Base/PreLoad");
                    }
                }
                Base.PreLoadUI = PreLoadUI;
                REG("ui.Views.Base.PreLoadUI", PreLoadUI);
                class PreLoadCutInUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Views/Base/PreLoadCutIn");
                    }
                }
                Base.PreLoadCutInUI = PreLoadCutInUI;
                REG("ui.Views.Base.PreLoadCutInUI", PreLoadCutInUI);
                class RedDotObjUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Views/Base/RedDotObj");
                    }
                }
                Base.RedDotObjUI = RedDotObjUI;
                REG("ui.Views.Base.RedDotObjUI", RedDotObjUI);
                class ReturnBtnObjUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Views/Base/ReturnBtnObj");
                    }
                }
                Base.ReturnBtnObjUI = ReturnBtnObjUI;
                REG("ui.Views.Base.ReturnBtnObjUI", ReturnBtnObjUI);
                class SetUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Views/Base/Set");
                    }
                }
                Base.SetUI = SetUI;
                REG("ui.Views.Base.SetUI", SetUI);
                class StaminaObjUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Views/Base/StaminaObj");
                    }
                }
                Base.StaminaObjUI = StaminaObjUI;
                REG("ui.Views.Base.StaminaObjUI", StaminaObjUI);
                class StartUI extends View {
                    constructor() { super(); }
                    createChildren() {
                        super.createChildren();
                        this.loadScene("Views/Base/Start");
                    }
                }
                Base.StartUI = StartUI;
                REG("ui.Views.Base.StartUI", StartUI);
            })(Base = Views.Base || (Views.Base = {}));
        })(Views = ui.Views || (ui.Views = {}));
    })(ui || (ui = {}));

    var LwgPlatform;
    (function (LwgPlatform) {
        class Init {
            constructor(_type) {
                if (_type) {
                    LwgPlatform.type = _type;
                }
                LwgPlatform.systemInfo = {
                    screenWidth: Laya.stage.width,
                    screenHeight: Laya.stage.height,
                    windowWidth: Laya.stage.width,
                    windowHeight: Laya.stage.height,
                };
                if (Laya.Browser.onWeiXin) {
                    LwgPlatform.type = EmType.WeChat;
                    LwgPlatform.systemInfo = Laya.Browser.window.wx.getSystemInfoSync();
                }
                else if (Laya.Browser.onQGMiniGame) {
                    LwgPlatform.type = EmType.OPPO;
                }
                else if (Laya.Browser.onVVMiniGame) {
                    LwgPlatform.type = EmType.VIVO;
                }
                else if (Laya.Browser.onTTMiniGame) {
                    LwgPlatform.type = EmType.Bytedance;
                }
                else {
                    LwgPlatform.type = EmType.ExploitNoAD;
                }
            }
            get LwgPlatform() {
                return 'LwgPlatform';
            }
        }
        LwgPlatform.Init = Init;
        let EmType;
        (function (EmType) {
            EmType[EmType["Exploit"] = 0] = "Exploit";
            EmType[EmType["ExploitNoAD"] = 1] = "ExploitNoAD";
            EmType[EmType["WeChat"] = 2] = "WeChat";
            EmType[EmType["OPPO"] = 3] = "OPPO";
            EmType[EmType["VIVO"] = 4] = "VIVO";
            EmType[EmType["Bytedance"] = 5] = "Bytedance";
            EmType[EmType["WebAD"] = 6] = "WebAD";
            EmType[EmType["WebTest"] = 7] = "WebTest";
            EmType[EmType["WebTestClear"] = 8] = "WebTestClear";
        })(EmType = LwgPlatform.EmType || (LwgPlatform.EmType = {}));
        ;
        LwgPlatform.type = EmType.ExploitNoAD;
        class Subpackage {
            constructor(packageList, endCb) {
                if (LwgPlatform.type === EmType.WeChat) {
                    this.wx(packageList, endCb);
                }
                else if (LwgPlatform.type === EmType.OPPO) {
                    this.OPPO(packageList, endCb);
                }
                else {
                    endCb && endCb();
                }
            }
            wx(packList, cb) {
                const list = packList;
                const temp = () => {
                    const name = list.shift();
                    if (name) {
                        const loadTask = Laya.Browser.window.wx.loadSubpackage({
                            name: name,
                            success: (res) => {
                                console.log('分包加载成功=', name, JSON.stringify(res));
                                temp();
                            },
                            fail: (res) => {
                                console.log('分包加载失败=', name, JSON.stringify(res));
                                list.unshift(name);
                                setTimeout(temp, 1000);
                            }
                        });
                    }
                    else {
                        cb && cb();
                    }
                };
                temp();
            }
            OPPO(packList, cb) {
                if (Laya.Browser.window.qg) {
                    Laya.Stat.hide();
                    const list = packList;
                    const temp = () => {
                        const name = list.shift();
                        if (name) {
                            const loadTask = Laya.Browser.window.qg.loadSubpackage({
                                name: name,
                                success: (res) => {
                                    console.log('分包加载成功=', name, JSON.stringify(res));
                                    temp();
                                },
                                fail: (res) => {
                                    console.log('分包加载失败=', name, JSON.stringify(res));
                                    list.unshift(name);
                                    setTimeout(temp, 1000);
                                }
                            });
                        }
                        else {
                            cb && cb();
                        }
                    };
                    temp();
                }
                else {
                    cb && cb();
                }
            }
            VIVO(packList, cb) {
                if (Laya.Browser.window.qg) {
                    Laya.Stat.hide();
                    const list = packList;
                    const temp = () => {
                        const name = list.shift();
                        if (name) {
                            const loadTask = Laya.Browser.window.qg.loadSubpackage({
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
                            cb && cb();
                        }
                    };
                    temp();
                }
                else {
                    cb && cb();
                }
            }
        }
        LwgPlatform.Subpackage = Subpackage;
        class InitAD {
            constructor(_LwgWx, _LwgOPPO) { }
        }
        LwgPlatform.InitAD = InitAD;
        class AD {
            static showVideo(watchCompelet, watchClose) {
                if (LwgPlatform.type === LwgPlatform.EmType.Exploit || LwgPlatform.type === LwgPlatform.EmType.ExploitNoAD || LwgPlatform.type === LwgPlatform.EmType.WebTest || LwgPlatform.type === LwgPlatform.EmType.WebTestClear) {
                    watchCompelet && watchCompelet();
                }
                else if (LwgPlatform.type === EmType.WeChat) {
                    LwgWX.AD.showVideo(watchCompelet, watchClose);
                }
                else if (LwgPlatform.type === EmType.OPPO) {
                    LwgOPPO.AD.showVideo(watchCompelet, watchClose);
                }
            }
            static showNative() {
                if (LwgPlatform.type === EmType.OPPO) {
                    LwgOPPO.AD.showNative();
                }
            }
            static showADInScene(sceneName) {
                if (LwgPlatform.type === EmType.WeChat) {
                    LwgWX.AD && LwgWX.AD.setShowInScenes(sceneName);
                }
                else if (LwgPlatform.type === EmType.OPPO) {
                    LwgOPPO.AD && LwgOPPO.AD.setShowInScenes(sceneName);
                    LwgOPPO.System && LwgOPPO.System.checkInstallShortcut(sceneName);
                }
            }
            static showADCloseSceneLater(sceneName) {
                if (LwgPlatform.type === EmType.WeChat) {
                    LwgWX.AD && LwgWX.AD.showInsertCloseSceneCheck(sceneName);
                }
                else if (LwgPlatform.type === EmType.OPPO) {
                    LwgOPPO.AD && LwgOPPO.AD.showInsertCloseSceneCheck(sceneName);
                }
            }
            static hideADInScene() {
                if (LwgPlatform.type === EmType.WeChat) {
                    LwgWX.AD && LwgWX.AD.setHideInScenes();
                }
                else if (LwgPlatform.type === EmType.OPPO) {
                    LwgOPPO.AD && LwgOPPO.AD.setHideInScenes();
                }
            }
        }
        LwgPlatform.AD = AD;
        class System {
            static shakeShort() {
                if (LwgPlatform.type === EmType.WeChat) {
                    LwgWX.System.vibrateShort();
                }
                else if (LwgPlatform.type === EmType.OPPO) {
                    LwgOPPO.System.vibrateShort();
                }
            }
            static shakeLong() {
                if (LwgPlatform.type === EmType.WeChat) {
                    LwgWX.System.vibrateLong();
                }
                else if (LwgPlatform.type === EmType.OPPO) {
                    LwgOPPO.System.vibrateLong();
                }
            }
            static share(watchCompelet) {
                if (LwgPlatform.type === EmType.WeChat) {
                    LwgWX.System.share(watchCompelet);
                }
            }
        }
        LwgPlatform.System = System;
    })(LwgPlatform || (LwgPlatform = {}));
    var LwgOPPO;
    (function (LwgOPPO) {
        let EmADNativeType;
        (function (EmADNativeType) {
            EmADNativeType[EmADNativeType["icon"] = 0] = "icon";
            EmADNativeType[EmADNativeType["banner"] = 1] = "banner";
        })(EmADNativeType = LwgOPPO.EmADNativeType || (LwgOPPO.EmADNativeType = {}));
        class NatievView extends Laya.View {
            constructor(native) {
                super();
                if (!LwgOPPO.AD.nativeData || !LwgOPPO.AD.nativeData.instance || !LwgOPPO.AD.nativeData.lodeNativeRes || !LwgOPPO.AD.nativeData.lodeNativeRes.adList) {
                    this.removeSelf();
                    return;
                }
                if (LwgOPPO.AD.insert && LwgOPPO.AD.insert.isShow) {
                    this.removeSelf();
                    return;
                }
                this.bntClose = new Laya.Image();
                this.addChild(this.bntClose);
                this.bntClose.skin = LwgPath.LwgUI + 'img_close2.png';
                this.bntClose.size(24, 24);
                this.bntClose.top = 10;
                this.bntClose.right = 10;
                this.bntClose.zOrder = 1000;
                this.imgAdTag = new Laya.Image();
                this.addChild(this.imgAdTag);
                this.imgAdTag.skin = LwgPath.LwgUI + 'img_ad_text2.png';
                this.imgAdTag.size(40, 14);
                this.imgAdTag.right = 0;
                this.imgAdTag.bottom = 0;
                this.imgAdTag.zOrder = 1000;
                this.imgADPic = new Laya.Image();
                this.addChild(this.imgADPic);
                this.imgADPic.top = 0;
                this.imgADPic.bottom = 0;
                this.imgADPic.left = 0;
                this.imgADPic.right = 0;
                this.zOrder = 10000;
                this.left = native.style.left;
                this.right = native.style.right;
                this.top = native.style.top;
                this.bottom = native.style.bottom;
                this.centerX = native.style.centerX;
                this.centerY = native.style.centerY;
                this.x = native.style.x;
                this.y = native.style.y;
                native.view = this;
                const adListItem = LwgOPPO.AD.nativeData.lodeNativeRes.adList[0];
                if (native.type === EmADNativeType.icon) {
                    this.imgADPic.skin = adListItem.icon;
                    if (adListItem.icon.length === 0) {
                        this.imgADPic.skin = adListItem.imgUrlList[0];
                    }
                    else {
                        this.imgADPic.skin = adListItem.icon;
                    }
                }
                else if (native.type === EmADNativeType.banner) {
                    if (adListItem.imgUrlList.length === 0) {
                        this.imgADPic.skin = adListItem.icon;
                    }
                    else {
                        this.imgADPic.skin = adListItem.imgUrlList[0];
                    }
                }
                this.size(native.style.width, native.style.height);
                this.bntClose.once(Laya.Event.CLICK, this, () => {
                    this.destroy();
                });
                LwgOPPO.AD.nativeData.instance && LwgOPPO.AD.nativeData.instance.reportAdShow({ adId: adListItem.adId });
                this.imgADPic.on(Laya.Event.CLICK, this, () => {
                    this.destroy();
                    LwgOPPO.AD.nativeData.instance && LwgOPPO.AD.nativeData.instance.reportAdClick({
                        adId: adListItem.adId,
                    });
                    LwgOPPO.AD.createNative();
                });
            }
        }
        LwgOPPO.NatievView = NatievView;
        ;
        class BtnGamePortal extends Laya.Image {
            constructor(style) {
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
                this.lwgButton();
            }
            lwgButton() {
                LwgClick.on(null, this, this, null, null, () => {
                    LwgOPPO.AD.showGamePortal();
                });
            }
        }
        LwgOPPO.BtnGamePortal = BtnGamePortal;
        let EmInsertType;
        (function (EmInsertType) {
            EmInsertType[EmInsertType["GamePortal"] = 0] = "GamePortal";
        })(EmInsertType = LwgOPPO.EmInsertType || (LwgOPPO.EmInsertType = {}));
        class BtnShortcutInstalled extends BtnGamePortal {
            constructor(style) {
                super(style);
            }
            lwgButton() {
                LwgClick.on(null, this, this, null, null, () => {
                    LwgOPPO.System.installShortcut(() => {
                        this.destroy();
                    });
                });
            }
        }
        LwgOPPO.BtnShortcutInstalled = BtnShortcutInstalled;
        class Init {
            constructor(ADData, shortcutInstalle) {
                if (LwgPlatform.type !== LwgPlatform.EmType.OPPO) {
                    return;
                }
                LwgOPPO.AD = new _AD(ADData);
                LwgOPPO.System = new _System(shortcutInstalle);
            }
            get LwgOPPO() {
                return 'LwgOPPO';
            }
        }
        LwgOPPO.Init = Init;
        class _System {
            constructor(shortcutInstalle) {
                this.shortcutInstalle = shortcutInstalle;
            }
            checkInstallShortcut(sceneName) {
                if (this.shortcutInstalle.isShow && sceneName === this.shortcutInstalle.sceneName) {
                    this.hasShortcutInstalled(() => {
                        const scene = LwgScene.sceneControl[sceneName];
                        scene && scene.parent && scene.addChild(new BtnShortcutInstalled(this.shortcutInstalle.btnStyle));
                    });
                }
            }
            hasShortcutInstalled(cb) {
                Laya.Browser.window.qg.hasShortcutInstalled({
                    success: (res) => {
                        if (res == false) {
                            cb && cb();
                        }
                    },
                    fail: (err) => {
                        console.log('检测图标是否存在失败:', JSON.stringify(err));
                    },
                    complete: () => { }
                });
            }
            installShortcut(cb) {
                Laya.Browser.window.qg.installShortcut({
                    success: () => {
                        this.shortcutInstalle.rewardCb && this.shortcutInstalle.rewardCb();
                        cb && cb();
                    },
                    fail: (err) => {
                        console.log('添加桌面图标失败:', JSON.stringify(err));
                    },
                    complete: () => { }
                });
            }
            vibrateShort() {
                Laya.Browser.window.qg.vibrateShort({
                    success: (res) => { },
                    fail: (res) => { },
                    complete: (res) => { },
                });
            }
            vibrateLong() {
                Laya.Browser.window.qg.vibrateLong({
                    success: (res) => { },
                    fail: (res) => { },
                    complete: (res) => { },
                });
            }
        }
        class _AD {
            constructor(data) {
                this.ADData = data;
                this.banner = data.banner;
                this.video = data.video;
                this.nativeData = data.nativeData;
                this.gamePortal = data.gamePortal;
                this.insert = data.insert;
                this.nativeData.lastShowTime = LwgDate.Now.time;
                this.ADData.delayTime = this.ADData.delayTime ? this.ADData.delayTime : 60000;
                this.createNative();
            }
            setShowInScenes(sceneName) {
                this.showBannerInSceneCheck(sceneName);
                this.showNativeInSceneCheck(sceneName);
                this.showGamePortalBtnInSceneCheck(sceneName);
            }
            setHideInScenes() {
                this.hideBannerInSceneCheck();
            }
            showBanner() {
                if (this.insert.isShow) {
                    return;
                }
                if (this.banner.lastState === 1) {
                    return;
                }
                this.banner.instance = Laya.Browser.window.qg.createBannerAd({
                    adUnitId: this.banner.adUnitId,
                    style: {
                        top: this.banner.style.top,
                        left: this.banner.style.left,
                        width: this.banner.style.width,
                        height: this.banner.style.height,
                    }
                });
                this.banner.instance.show().then(() => {
                    console.log('banner广告展示完成');
                    this.banner.lastState = 1;
                }).catch((err) => {
                    console.log('banner广告展示失败', JSON.stringify(err));
                    this.banner.lastState = 0;
                });
            }
            showBannerInSceneCheck(sceneName) {
                if (LwgDate.Now.time - this.nativeData.lastShowTime <= this.ADData.delayTime) {
                    return;
                }
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
                }
                else {
                    this.hideBanner();
                    this.banner.showTrack.push({
                        sceneName: sceneName,
                        show: false,
                    });
                }
            }
            hideBannerInSceneCheck() {
                if (LwgDate.Now.time - this.nativeData.lastShowTime <= this.ADData.delayTime) {
                    return;
                }
                if (!this.banner.showTrack) {
                    this.banner.showTrack = [];
                }
                this.banner.showTrack.pop();
                if (this.banner.showTrack.length > 0) {
                    if (this.banner.showTrack[this.banner.showTrack.length - 1].show) {
                        this.showBanner();
                    }
                    else {
                        this.hideBanner();
                    }
                }
                else {
                    this.hideBanner();
                }
            }
            hideBanner() {
                this.banner && this.banner.instance && this.banner.instance.hide();
                this.banner.lastState = 0;
            }
            showVideo(watchCompelet, watchClose) {
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
                this.video.instance = Laya.Browser.window.qg.createRewardedVideoAd({
                    adUnitId: this.video.adUnitId,
                });
                this.video.instance.offClose(this.video.closeCB);
                this.video.instance.offLoad(this.video.lodeCB);
                this.video.instance.offError(this.video.errCB);
                this.video.instance.load();
                this.video.lodeCB = () => {
                    this.video.instance.show();
                };
                this.video.instance.onLoad(this.video.lodeCB);
                this.video.errCB = (err) => {
                    console.log(JSON.stringify(err));
                    LwgDialogue.showTips('暂无广告，稍后再试!');
                };
                this.video.instance.onError(this.video.errCB);
                this.video.closeCB = (res) => {
                    if (res.isEnded) {
                        this.video.watchCompelet && this.video.watchCompelet();
                        LwgDialogue.showTips('观看完成，获得奖励!');
                    }
                    else {
                        this.video.watchClose && this.video.watchClose();
                        LwgDialogue.showTips('观看完整广告才可以领取奖励!');
                    }
                };
                this.video.instance.onClose(this.video.closeCB);
            }
            createNative() {
                if (LwgDate.Now.time - this.nativeData.lastShowTime <= this.ADData.delayTime) {
                    return;
                }
                Laya.timer.clearAll(this.nativeData);
                Laya.timer.once(this.nativeData.updateTime, this.nativeData, () => {
                    this.createNative();
                });
                if (this.nativeData.lastCreateTime === undefined) {
                    this.nativeData.lastCreateTime = LwgDate.Now.time;
                }
                else {
                    if (LwgDate.Now.time - this.nativeData.lastCreateTime < this.nativeData.intervalTime) {
                        console.log('间隔太短，不会重新刷新');
                        return;
                    }
                }
                this.nativeData.lastCreateTime = LwgDate.Now.time;
                const dataArr = this.nativeData.dataArr;
                for (let index = 0; index < dataArr.length; index++) {
                    const element = dataArr[index];
                    element.view && element.view.destroy();
                    element.view = null;
                }
                this.nativeData.instance = null;
                this.nativeData.lodeNativeRes = null;
                this.nativeData.instance = Laya.Browser.window.qg.createNativeAd({
                    adUnitId: this.nativeData.adUnitId,
                });
                this.nativeData.instance.offLoad(this.nativeData.instance.loadCb);
                this.nativeData.instance.offError(this.nativeData.instance.errCb);
                this.nativeData.instance.load();
                this.nativeData.instance.loadCb = (res) => {
                    if (res && res.adList) {
                        this.nativeData.lodeNativeRes = res;
                        console.log("原生广告加载成功,广告信息：", JSON.stringify(res.adList));
                        this.showNativeInCurScene();
                    }
                    else {
                        console.log('原生广告加载成功！但是信息错误！', JSON.stringify(res));
                    }
                };
                this.nativeData.instance.onLoad(this.nativeData.instance.loadCb);
                this.nativeData.instance.errCb = (err) => {
                    this.nativeData.instance = null;
                    this.nativeData.lodeNativeRes = null;
                    console.log("原生广告加载错误,10秒内可能不会再次加载", JSON.stringify(err));
                };
                this.nativeData.instance.onError(this.nativeData.instance.errCb);
            }
            showNative() {
                if (!this.nativeData.instance || !this.nativeData.lodeNativeRes) {
                    LwgDialogue.showTips('稍后再试！');
                }
                else {
                    const adListItem = this.nativeData.lodeNativeRes.adList[0];
                    this.nativeData.instance.reportAdClick({
                        adId: adListItem.adId,
                    });
                }
                this.createNative();
            }
            showNativeInSceneCheck(sceneName) {
                if (!LwgOPPO.AD.nativeData.instance) {
                    this.createNative();
                }
                else {
                    const dataArr = this.nativeData.dataArr;
                    for (let i = 0; i < dataArr.length; i++) {
                        const native = dataArr[i];
                        let appear = false;
                        for (let j = 0; j < native.showScenes.length; j++) {
                            const name = native.showScenes[j];
                            if (name == sceneName) {
                                appear = true;
                                break;
                            }
                        }
                        if (appear) {
                            const scene = LwgScene.sceneControl[sceneName];
                            scene && scene.parent && scene.addChild(new NatievView(native));
                        }
                    }
                }
            }
            showNativeInCurScene() {
                LwgScene.getCurShowSceneArr((scene) => {
                    const dataArr = this.nativeData.dataArr;
                    for (let i = 0; i < dataArr.length; i++) {
                        const native = dataArr[i];
                        for (let j = 0; j < native.showScenes.length; j++) {
                            const name = native.showScenes[j];
                            if (name == scene.name) {
                                scene.parent && scene.addChild(new NatievView(native));
                                break;
                            }
                        }
                    }
                });
            }
            hideNative() {
                const dataArr = this.nativeData.dataArr;
                for (let index = 0; index < dataArr.length; index++) {
                    const element = dataArr[index];
                    element.view && element.view.removeSelf();
                }
            }
            showInsertCloseSceneCheck(sceneName) {
                console.log('准备展示插屏！');
                for (let index = 0; index < this.insert.showCloseScenesLaterArr.length; index++) {
                    const element = this.insert.showCloseScenesLaterArr[index];
                    if (element == sceneName) {
                        if (this.insert.type === EmInsertType.GamePortal) {
                            this.insert.isShow = true;
                            this.showGamePortal();
                        }
                        break;
                    }
                }
            }
            createGamePortal() {
                if (Laya.Browser.window.qg.getSystemInfoSync().platformVersionCode >= 1076) {
                    this.gamePortal.instance = Laya.Browser.window.qg.createGamePortalAd({
                        adUnitId: this.gamePortal.adUnitId,
                    });
                    this.gamePortal.instance.offClose(this.gamePortal.instance.closeCb);
                    this.gamePortal.instance.offError(this.gamePortal.instance.errCb);
                    this.gamePortal.instance.offLoad(this.gamePortal.instance.loadCb);
                    this.gamePortal.instance.load();
                    this.gamePortal.instance.loadCb = () => {
                        this.gamePortal.instance.show();
                    };
                    this.gamePortal.instance.onLoad(this.gamePortal.instance.loadCb);
                    this.gamePortal.instance.errCb = () => {
                        LwgDialogue.showTips('稍后！');
                    };
                    this.gamePortal.instance.onError(this.gamePortal.instance.errCb);
                    this.gamePortal.instance.closeCb = () => {
                        this.checkADShowRule();
                    };
                    this.gamePortal.instance.onClose(this.gamePortal.instance.closeCb);
                }
                else {
                    console.log('快应用平台版本号低于1076，暂不支持互推盒子相关API');
                }
            }
            checkADShowRule() {
                this.insert.isShow = false;
                const arr = LwgScene.getCurShowSceneArr();
                if (arr.length === 1) {
                    this.showBannerInSceneCheck(LwgScene.lastSceneName);
                }
                else {
                    this.showNativeInCurScene();
                }
            }
            showGamePortal() {
                this.createGamePortal();
                this.hideBanner();
                this.hideNative();
            }
            showGamePortalBtnInSceneCheck(sceneName) {
                const showSceneData = this.gamePortal.showScene;
                for (let i = 0; i < showSceneData.length; i++) {
                    const sceneData = showSceneData[i];
                    if (sceneData.sceneName === sceneName) {
                        const scene = LwgScene.sceneControl[sceneName];
                        scene.parent && scene.addChild(new BtnGamePortal(sceneData.btnStyle));
                    }
                }
            }
        }
        class File {
            static screenShootByRatio(func, startXRatio, startYRatio, endXRatio, endYRatio, fileType, quality) {
                const _startXRatio = startXRatio ? startXRatio * window['__canvas'].width : 0;
                const _startYRatio = startYRatio ? startYRatio * window['__canvas'].height : 0;
                window['__canvas'].toTempFilePath({
                    x: _startXRatio,
                    y: _startYRatio,
                    width: endXRatio ? endXRatio * window['__canvas'].width - _startXRatio : window['__canvas'].width,
                    height: endYRatio ? endYRatio * window['__canvas'].height - _startYRatio : window['__canvas'].height,
                    fileType: fileType ? fileType : 'png',
                    quality: quality ? quality : 1,
                    success: (data) => {
                        func && func(data);
                        console.log('.............................截图成功', data['tempFilePath']);
                    },
                    fail: (data) => {
                        console.log('？？？？？？？？？？？？？？？？', data['number']);
                        console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx', data['errMsg']);
                    },
                    complete: () => { },
                });
            }
            static screenShoot(func, x, y, width, height, fileType, quality) {
                const _x = x * Laya.stage.clientScaleX;
                const _y = y * Laya.stage.clientScaleY;
                const _width = width * Laya.stage.clientScaleX;
                const _height = height * Laya.stage.clientScaleY;
                window['__canvas'].toTempFilePath({
                    x: _x,
                    y: _y,
                    width: _width,
                    height: _height,
                    fileType: fileType ? fileType : 'png',
                    quality: quality ? quality : 1,
                    success: (data) => {
                        func && func(data);
                        console.log('.............................截图成功', data['tempFilePath']);
                    },
                    fail: (data) => {
                        console.log('？？？？？？？？？？？？？？？？', data['number']);
                        console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx', data['errMsg']);
                    },
                    complete: () => { },
                });
            }
            static picSave(tempFilePath, name, func) {
                var FileSystemManager = Laya.Browser.window.qg.getFileSystemManager();
                let data = LwgStorage.array(name, null, [1, `${name}.png`]).value;
                let savedFilePath = Laya.Browser.window.qg.env.USER_DATA_PATH
                    + data[0] + data[1];
                let _savedFilePath = Laya.Browser.window.qg.env.USER_DATA_PATH
                    + (data[0] + 1) + data[1];
                var save = () => {
                    FileSystemManager.saveFile({
                        tempFilePath: tempFilePath,
                        filePath: _savedFilePath,
                        success: function (res) {
                            console.log('-------------------------图片保存成功', res['savedFilePath']);
                            LwgStorage.array(name).value = [data[0] + 1, data[1]];
                            func && func(res);
                        },
                        fail: () => {
                            console.log('xxxxxxxxxxxxxxxxxxxxxxxxx保存图片失败');
                        },
                        complete: () => { }
                    });
                };
                FileSystemManager.access({
                    path: savedFilePath,
                    success: () => {
                        FileSystemManager.removeSavedFile({
                            filePath: savedFilePath,
                            success: () => {
                                console.log('---------------------------删除保存的图片成功！');
                                save();
                            },
                        });
                    },
                    fail: () => {
                        console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxx没有保存这个文件！');
                        save();
                    },
                    complete: () => { },
                });
            }
            static getStoragePic(name) {
                let data = LwgStorage.array(name).value;
                if (data.length > 0) {
                    return Laya.Browser.window.qg.env.USER_DATA_PATH + data[0] + data[1];
                }
                ;
            }
        }
        LwgOPPO.File = File;
    })(LwgOPPO || (LwgOPPO = {}));
    var LwgWX;
    (function (LwgWX) {
        class Init {
            constructor(data) {
                if (LwgPlatform.type !== LwgPlatform.EmType.WeChat) {
                    return;
                }
                LwgWX.Login = new _Login;
                LwgWX.AD = new _AD(data.AD);
                LwgWX.System = new _System(data.systemData);
            }
            get LwgWX() {
                return 'LwgWX';
            }
        }
        LwgWX.Init = Init;
        class _Login {
            constructor() {
                if (!Laya.Browser.onWeiXin) {
                    return;
                }
                this.onShow();
                this.onHide();
            }
            onShow() {
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
            onHide() {
                Laya.Browser.window.wx.onHide(() => {
                    LwgSound.stopMusic();
                    let nowTime = new Date().getTime();
                    this.offlineTime = nowTime;
                    console.log("----- 切入后台， 离线时间", nowTime);
                });
            }
        }
        class _System {
            constructor(systemData) {
                this.shareTattle = '';
                this.shareImgUrl = '';
                this.shareTattle = systemData.share.tattle;
                this.shareImgUrl = systemData.share.imgUrl;
                this.onShareAppMessage();
            }
            share(watchCompelet) {
                if (Laya.Browser.window.wx) {
                    Laya.Browser.window.wx.shareAppMessage({
                        title: this.shareTattle,
                        imageUrl: this.shareImgUrl,
                    });
                }
                else {
                    if (!Laya.Browser.onMiniGame) {
                        watchCompelet && watchCompelet();
                    }
                }
            }
            onShareAppMessage() {
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
                        };
                    });
                }
            }
            vibrateShort() {
                if (Laya.Browser.onMiniGame) {
                    wx.vibrateShort({
                        success: () => {
                        },
                        fail: () => {
                        },
                        complete: () => {
                        }
                    });
                }
            }
            vibrateLong() {
                if (Laya.Browser.onMiniGame) {
                    wx.vibrateLong({
                        success: () => {
                        },
                        fail: () => {
                        },
                        complete: () => {
                        }
                    });
                }
            }
        }
        let EmADVideoModel;
        (function (EmADVideoModel) {
            EmADVideoModel[EmADVideoModel["AD"] = 0] = "AD";
            EmADVideoModel[EmADVideoModel["share"] = 1] = "share";
            EmADVideoModel[EmADVideoModel["test"] = 2] = "test";
        })(EmADVideoModel = LwgWX.EmADVideoModel || (LwgWX.EmADVideoModel = {}));
        class _AD {
            constructor(data) {
                if (LwgPlatform.type !== LwgPlatform.EmType.WeChat) {
                    return;
                }
                this.lodeVideo(data.video);
                this.lodeBanner(data.banner);
                this.loadInsert(data.Insert);
                this.lodeCustom(data.customArr);
            }
            setShowInScenes(sceneName) {
                this.showBannerInSceneCheck(sceneName);
                this.showCustomInSceneCheck(sceneName);
            }
            setHideInScenes() {
                this.hideBannerInSceneCheck();
                this.hideCustomInSceneCheck();
            }
            lodeBanner(bannerData, show) {
                this.banner = bannerData;
                if (!this.banner.adUnitId) {
                    return;
                }
                this.banner.instance = Laya.Browser.window.wx.createBannerAd({
                    adUnitId: bannerData.adUnitId,
                    adIntervals: this.banner.autoUpdateTime ? this.banner.autoUpdateTime : 30,
                    style: {
                        left: bannerData.style.left ? bannerData.style.left : 0,
                        top: bannerData.style.top ? bannerData.style.top : Laya.Browser.onWeiXin ? Laya.Browser.window.wx.systemInfoSync().windowWidth - 148 : 0,
                        width: bannerData.style.width ? bannerData.style.width : 750,
                    }
                });
                this.banner.instance.onLoad(() => {
                    show && this.banner.instance.show();
                    console.log(`banner${this.banner.adUnitId}广告加载成功!`);
                });
                this.banner.instance.onError((err) => {
                    console.log(`banner广告:${this.banner.adUnitId}加载失败！错误信息:${JSON.stringify(err)}`);
                });
            }
            showBannerInSceneCheck(sceneName) {
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
                }
                else {
                    this.hideBanner();
                    this.banner.showTrack.push({
                        sceneName: sceneName,
                        show: false,
                    });
                }
            }
            hideBannerInSceneCheck() {
                if (!this.banner.showTrack) {
                    this.banner.showTrack = [];
                }
                this.banner.showTrack.pop();
                if (this.banner.showTrack.length > 0) {
                    if (this.banner.showTrack[this.banner.showTrack.length - 1].show) {
                        this.showBanner();
                    }
                    else {
                        this.hideBanner();
                    }
                }
                else {
                    this.hideBanner();
                }
            }
            showBanner() {
                this.banner && this.banner.instance && this.banner.instance.show().then(() => console.log('banner 广告显示'));
            }
            showBannerNew() {
                this.banner.instance.destroy();
                this.banner.instance = null;
                this.lodeBanner(this.banner, true);
            }
            hideBanner() {
                this.banner && this.banner.instance && this.banner.instance.hide().then(() => console.log('banner 广告关闭'));
            }
            lodeCustom(customArrData) {
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
                            width: custom.style.width ? custom.style.width : 100,
                            fixed: custom.style.fixed
                        }
                    });
                }
            }
            showCustomInSceneCheck(sceneName) {
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
                            });
                        }
                        else {
                            custom.instance.hide().then(() => console.log('原生广告关闭！'));
                        }
                        custom.showTrack.push({
                            sceneName: sceneName,
                            show: appear,
                        });
                    }
                }
            }
            hideCustomInSceneCheck() {
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
                            }
                            else {
                                custom.instance.hide().then(() => console.log('原生广告关闭！'));
                            }
                        }
                        else {
                            custom.instance.hide().then(() => console.log('原生广告关闭！'));
                        }
                    }
                }
            }
            lodeVideo(videoData) {
                this.video = videoData;
                var onLodeCb = () => {
                    console.log(`激励视频${this.video.adUnitId}广告加载成功!`);
                    this.video.instance.offLoad(onLodeCb);
                    this.video.instance.offError(onErrorCb);
                };
                var onErrorCb = (err) => {
                    console.log(`激励视频${this.video.adUnitId}广告加载失败！错误信息:${JSON.stringify(err)}`);
                    this.video.instance.offLoad(onLodeCb);
                    this.video.instance.offError(onErrorCb);
                };
                if (!this.video.adUnitId) {
                    this.video.model = EmADVideoModel.share;
                    return;
                }
                else {
                    this.video.model = EmADVideoModel.AD;
                }
                this.video.instance = Laya.Browser.window.wx.createRewardedVideoAd({
                    adUnitId: this.video.adUnitId,
                });
                this.video.instance.onLoad(onLodeCb);
                this.video.instance.onError(onErrorCb);
            }
            showVideo(watchCompelet, watchClose) {
                if (this.video.model === EmADVideoModel.share) {
                    this.video.watchguideCompeletCb = watchCompelet;
                    LwgWX.System.share(watchCompelet);
                    return;
                }
                if (this.video.lastShowTime === undefined) {
                    this.video.lastShowTime = 0;
                }
                if (LwgDate.Now.time - this.video.lastShowTime < 5000) {
                    console.log('5秒内不得再次看视频广告！');
                    return;
                }
                this.video.lastShowTime = LwgDate.Now.time;
                if (this.video && this.video.instance) {
                    var onCloseFunc = (res) => {
                        if (res && res.isEnded || res === undefined) {
                            LwgDialogue.showTips('观看完成，获得奖励!');
                            LwgSound.playMusic();
                            watchCompelet && watchCompelet(res);
                        }
                        else {
                            watchClose && watchClose(res);
                            LwgSound.playMusic();
                            LwgDialogue.showTips('观看完整广告才可以领取奖励!');
                        }
                        this.video.instance.offClose(onCloseFunc);
                    };
                    this.video.instance.show()
                        .catch((err) => {
                        console.log(`广告播放失败：${JSON.stringify(err)},准备重新加载`);
                        this.video.instance.load().then(() => this.video.instance.show()
                            .catch(() => {
                            LwgDialogue.showTips('暂无广告！!');
                        }));
                    });
                    this.video.instance.onClose(onCloseFunc);
                }
                else {
                    console.log('广告不存在！');
                }
            }
            showInsertCloseSceneCheck(sceneName) {
                if (!Laya.Browser.onWeiXin) {
                    return;
                }
                for (let index = 0; index < this.insert.showCloseScenesLaterArr.length; index++) {
                    const element = this.insert.showCloseScenesLaterArr[index];
                    if (element == sceneName) {
                        this.insert && this.insert.instance && this.insert.instance.show().catch((err) => {
                            console.error('插屏广告展示失败！', JSON.stringify(err));
                        });
                        break;
                    }
                }
            }
            loadInsert(InsertData) {
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
                this.insert.instance.onError((err) => {
                    console.error("插屏广告加载失败:" + JSON.stringify(err));
                });
                this.insert.instance.onClose((res) => {
                    console.log("插屏广告加载关闭:" + JSON.stringify(res));
                    this.insert.closeCb && this.insert.closeCb();
                });
            }
        }
    })(LwgWX || (LwgWX = {}));
    var LwgPath;
    (function (LwgPath) {
        LwgPath.LwgEffects = 'Lwg/Effects/';
        LwgPath.LwgUI = 'Lwg/UI/';
        LwgPath.Init = 'Init/';
        LwgPath.GameUI = 'Game/UI/';
        LwgPath.GameSound = 'Game/Sound/';
        LwgPath.GameData = 'GameData/';
        LwgPath.Skeleton = 'GameData/';
        LwgPath.Views = 'Views/';
        LwgPath.ViewsBase = 'Views/Base/';
        LwgPath.Scene3D = 'Game3D/Scene3D/';
        LwgPath.Prefab3D = 'Game3D/Prefab3D/';
    })(LwgPath || (LwgPath = {}));
    var LwgControl;
    (function (LwgControl) {
        class Init {
            constructor(levelLoop, levelLoopSection, statShow, multiTouchEnabled) {
                LwgControl.Game = new _Game(levelLoop, levelLoopSection, statShow, multiTouchEnabled);
                LwgControl.Login = new _Login();
                LwgControl.Player = new _Player();
            }
            get LwgControl() {
                return 'LwgControl';
            }
        }
        LwgControl.Init = Init;
        class _Login {
            constructor() {
                const curDate = new Date;
                this.info = LwgStorage.arrayArray('Login/info');
                this.info.value.push([curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate(), curDate.getDay(), curDate.getHours(), curDate.getMinutes(), curDate.getSeconds()]);
                let arr = [];
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
            get totalNum() {
                return Laya.LocalStorage.getItem('Login/totalNum') ? Number(Laya.LocalStorage.getItem('Login/totalNum')) : 0;
            }
            ;
            set totalNum(val) {
                Laya.LocalStorage.setItem('Login/totalNum', val.toString());
            }
            get todayNum() {
                return Laya.LocalStorage.getItem('Login/todayNum') ? Number(Laya.LocalStorage.getItem('Login/todayNum')) : 0;
            }
            ;
            set todayNum(val) {
                if (LwgDate.Now.date == this.info.value[this.info.value.length - 1][2]) {
                    Laya.LocalStorage.setItem('Login/todayNum', val.toString());
                }
            }
            get dayBefore() {
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
            get frontDate() {
                if (this.info.value.length >= 2) {
                    return this.info.value[this.info.value.length - 2][2];
                }
                else {
                    return this.info.value[this.info.value.length - 1][2];
                }
            }
            ;
            get lastdayComparisonToday() {
                return this.frontDate == LwgDate.Now.date;
            }
        }
        LwgControl._Login = _Login;
        class _Game {
            constructor(levelLoop, levelLoopSection, statShow, multiTouchEnabled) {
                this.levelLoop = -1;
                this.levelLoopSection = [-1, -1];
                this.levelLoop = levelLoop;
                if (LwgPlatform.type == LwgPlatform.EmType.Exploit || LwgPlatform.type == LwgPlatform.EmType.ExploitNoAD && statShow) {
                    Laya.Stat.show();
                }
                else {
                    Laya.Stat.hide();
                }
                Laya.MouseManager.multiTouchEnabled = multiTouchEnabled;
            }
            get pause() {
                return this['_pause'];
            }
            ;
            set pause(bool) {
                if (bool) {
                    this['_pause'] = false;
                    LwgTimer.onOff = false;
                    LwgClick.Filter.setValue(LwgClick.EmfilterType.all);
                }
                else {
                    this['_pause'] = true;
                    LwgTimer.onOff = true;
                    LwgClick.Filter.setValue(LwgClick.EmfilterType.none);
                }
            }
            get level() {
                let val = Laya.LocalStorage.getItem('Game/level');
                if (!val) {
                    Laya.LocalStorage.setItem('Game/level', (1).toString());
                    return 1;
                }
                else {
                    return Number(val);
                }
            }
            ;
            set level(val) {
                const curLevel = Laya.LocalStorage.getItem('Game/level') ? Number(Laya.LocalStorage.getItem('Game/level')) : 1;
                const diff = val - curLevel;
                if (diff > 0) {
                    this.levelDisplay += diff;
                }
                if (this.levelLoop != -1 && val >= this.levelLoop) {
                    if (this.levelLoopSection[0] !== -1) {
                        Laya.LocalStorage.setItem('Game/level', (this.levelLoopSection[0]).toString());
                    }
                    else {
                        Laya.LocalStorage.setItem('Game/level', (1).toString());
                    }
                }
                else {
                    Laya.LocalStorage.setItem('Game/level', (val).toString());
                    if (val <= this.levelLoop) {
                        this.levelDisplay = val;
                    }
                }
            }
            get levelDisplay() {
                return Laya.LocalStorage.getItem('Game/levelDisplay') ? Number(Laya.LocalStorage.getItem('Game/levelDisplay')) : this.level;
            }
            ;
            set levelDisplay(val) {
                Laya.LocalStorage.setItem('Game/levelDisplay', val.toString());
            }
            ;
        }
        class _Player {
            constructor(name) {
                this._NAME = 'You';
                this._NAME = name;
            }
            get NAME() {
                return LwgStorage.string('Player/NAME', null, this._NAME).value;
            }
            ;
            set NAME(val) {
                LwgStorage.string('Player/NAME').value = val;
            }
            ;
            get level() {
                return LwgStorage.number('Player/level', null, 1).value;
            }
            ;
            set level(val) {
                LwgStorage.number('Player/level').value = val;
            }
            ;
            get empirical() {
                return LwgStorage.number('Player/empirical', null, 0).value;
            }
            ;
            set empirical(val) {
                LwgStorage.number('Player/empirical').value = val;
            }
            ;
        }
    })(LwgControl || (LwgControl = {}));
    var LwgScene;
    (function (LwgScene) {
        class Init {
            constructor(data) {
                LwgScene.sceneScript = data.sceneScript;
                if (data.sceneOpenAniType) {
                    LwgScene.commSceneOpenAniType = data.sceneOpenAniType;
                }
                if (data.overlaySceneOpenAnitype) {
                    LwgScene.commOverlaySceneOpenAniType = data.overlaySceneOpenAnitype;
                }
                if (data.overlaySceneCloseAnitype) {
                    LwgScene.commOverlaySceneCloseAniType = data.overlaySceneCloseAnitype;
                }
                LwgScene.sceneParent = new Laya.Sprite;
                LwgScene.sceneParent.name = EmSceneParent.sceneParent;
                LwgScene.sceneParent.zOrder = 10;
                LwgScene.sceneParent.size(Laya.stage.width, Laya.stage.height);
                Laya.stage.addChild(LwgScene.sceneParent);
                LwgScene.baseViewObjParent = new Laya.Sprite;
                LwgScene.baseViewObjParent.name = EmSceneParent.baseViewObjParent;
                LwgScene.baseViewObjParent.zOrder = 11;
                LwgScene.baseViewObjParent.size(Laya.stage.width, Laya.stage.height);
                LwgScene.baseViewObjParent.mouseThrough = true;
                Laya.stage.addChild(LwgScene.baseViewObjParent);
                LwgScene.commonViewParent = new Laya.Sprite;
                LwgScene.commonViewParent.name = EmSceneParent.commonViewParent;
                LwgScene.commonViewParent.zOrder = 12;
                LwgScene.commonViewParent.size(Laya.stage.width, Laya.stage.height);
                LwgScene.commonViewParent.mouseThrough = true;
                Laya.stage.addChild(LwgScene.commonViewParent);
            }
            get LwgScene() {
                return 'LwgScene';
            }
        }
        LwgScene.Init = Init;
        LwgScene.sceneControl = {};
        let EmSceneParent;
        (function (EmSceneParent) {
            EmSceneParent["sceneParent"] = "sceneParent";
            EmSceneParent["commonViewParent"] = "commonViewParent";
            EmSceneParent["baseViewObjParent"] = "baseViewObjParent";
        })(EmSceneParent = LwgScene.EmSceneParent || (LwgScene.EmSceneParent = {}));
        LwgScene.sceneScript = {};
        LwgScene.openSceneTrack = [];
        class NameBase {
        }
        NameBase.Init = 'Init';
        NameBase.PreLoad = 'PreLoad';
        NameBase.PreLoadCutIn = 'PreLoadCutIn';
        NameBase.Guide = 'Guide';
        NameBase.CommonDialog = 'CommonDialog';
        NameBase.GameManager = 'GameManager';
        NameBase.Start = 'Start';
        NameBase.Set = 'Set';
        NameBase.DialogHint = 'DialogHint';
        LwgScene.NameBase = NameBase;
        function returnToPreviousScene() {
            if (LwgScene.openSceneTrack.length >= 2 && LwgScene.openSceneTrack[LwgScene.openSceneTrack.length - 2] !== NameBase.PreLoad) {
                const openName = LwgScene.openSceneTrack[LwgScene.openSceneTrack.length - 2];
                const closeName = LwgScene.openSceneTrack[LwgScene.openSceneTrack.length - 1];
                if (openName === closeName) {
                    console.log('返回按钮设置有问题，只能指向start使用！');
                    return;
                }
                LwgScene.openSceneTrack.pop();
                openScene(openName, closeName, null, true);
                if (openName === NameBase.Start) {
                    LwgScene.openSceneTrack = [NameBase.Start];
                }
            }
        }
        LwgScene.returnToPreviousScene = returnToPreviousScene;
        function getCurShowSceneArr(cb) {
            const arr = [];
            for (const key in LwgScene.sceneControl) {
                if (Object.prototype.hasOwnProperty.call(LwgScene.sceneControl, key)) {
                    const element = LwgScene.sceneControl[key];
                    if (element.parent) {
                        cb && cb(element);
                        arr.push(element);
                    }
                }
            }
            return arr;
        }
        LwgScene.getCurShowSceneArr = getCurShowSceneArr;
        function closeAllExceptSelf(selfName) {
            for (const key in LwgScene.sceneControl) {
                if (Object.prototype.hasOwnProperty.call(LwgScene.sceneControl, key)) {
                    const scene = LwgScene.sceneControl[key];
                    if (scene.name !== selfName) {
                        scene.close();
                    }
                }
            }
        }
        LwgScene.closeAllExceptSelf = closeAllExceptSelf;
        function upSceneZOder(upScene) {
            let num = 0;
            for (const key in LwgScene.sceneControl) {
                if (Object.prototype.hasOwnProperty.call(LwgScene.sceneControl, key)) {
                    const scene = LwgScene.sceneControl[key];
                    if (scene.parent) {
                        scene.zOrder = 0;
                        num++;
                    }
                }
            }
            if (upScene) {
                upScene.zOrder = num;
            }
        }
        LwgScene.upSceneZOder = upSceneZOder;
        function addSceneInStage(openScene, openData, isOverlay, showReturnBtn, parentType, scriptName) {
            if (openScene) {
                const script = addDefaultScript(openScene, scriptName);
                if (script) {
                    script.isOverlay = isOverlay;
                    script.openData = openData ? openData : {};
                    script.showReturnBtn = showReturnBtn;
                    openScene[openScene.name] = script;
                }
                let parent;
                if (parentType === EmSceneParent.commonViewParent) {
                    parent = LwgScene.commonViewParent;
                }
                else if (parentType === EmSceneParent.baseViewObjParent) {
                    parent = LwgScene.baseViewObjParent;
                }
                else {
                    parent = LwgScene.sceneParent;
                }
                if (parent.getChildByName(openScene.name)) {
                    console.log(`场景${openScene.name}重复出现，请检查代码，可能是按钮点击多次！`);
                    LwgClick.Filter.setValue(LwgClick.EmfilterType.all);
                    return;
                }
                else {
                    LwgScene.sceneControl[openScene.name] = openScene;
                    parent.addChild(openScene);
                }
                if (openScene.name === NameBase.PreLoadCutIn) {
                    openScene.on(Laya.Event.CLICK, openScene, () => {
                        console.log('防止穿透');
                    });
                }
            }
        }
        LwgScene.addSceneInStage = addSceneInStage;
        ;
        function addDefaultScript(openScene, scriptName) {
            let script0;
            let spcriptBool = false;
            for (const key in LwgScene.sceneScript) {
                if (Object.prototype.hasOwnProperty.call(LwgScene.sceneScript, key)) {
                    const element = LwgScene.sceneScript[key];
                    if ((scriptName && key === scriptName) || key === openScene.name) {
                        if (!openScene.getComponent(element)) {
                            script0 = openScene.addComponent(element);
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
        LwgScene.addDefaultScript = addDefaultScript;
        function goSceneOpenAni(openScene, closeScene) {
            const openScript = openScene[openScene.name];
            const openSceneName = openScene.name;
            var cb = () => {
                closeScene && closeScene.close();
                !openScript.isOverlay && closeAllExceptSelf(openSceneName);
                openAniAfterCommCb(openScript);
            };
            if (openScript) {
                let openAniTime = openScript.lwgOpenAni();
                if (openAniTime) {
                    Laya.timer.once(openAniTime, this, cb);
                }
                else {
                    LwgSceneAni.playSceneOpen(LwgScene.commSceneOpenAniType, openScene, closeScene, cb);
                }
            }
        }
        LwgScene.goSceneOpenAni = goSceneOpenAni;
        function goOverlaySceneOpenAni(OpenOverlay) {
            const openScript = OpenOverlay[OpenOverlay.name];
            LwgSceneAni.playOverlaySceneOpen(LwgScene.commOverlaySceneOpenAniType, OpenOverlay, () => {
                openAniAfterCommCb(openScript);
            });
        }
        LwgScene.goOverlaySceneOpenAni = goOverlaySceneOpenAni;
        function goOverlaySceneCloseAni(scene) {
            LwgClick.Filter.setValue(LwgClick.EmfilterType.none);
            LwgSceneAni.playOverlaySceneClose(LwgScene.commOverlaySceneCloseAniType, scene, () => {
                closeAniAfterCommCb(scene);
            });
        }
        LwgScene.goOverlaySceneCloseAni = goOverlaySceneCloseAni;
        function goCommonDialogOpenAni(Dialog) {
            const openScript = Dialog[Dialog.name];
            const openAni = openScript.Doalog[openScript.openAnitype];
            openAni.play(0, false);
            openAni.once(Laya.Event.COMPLETE, this, () => {
                openAniAfterCommCb(openScript);
            });
        }
        LwgScene.goCommonDialogOpenAni = goCommonDialogOpenAni;
        function goCommonDialogCloseAni(dialog) {
            LwgClick.Filter.setValue(LwgClick.EmfilterType.none);
            const script = dialog[dialog.name];
            const closeAni = script.Doalog[script.closeAniType];
            closeAni.play(0, false);
            closeAni.once(Laya.Event.COMPLETE, this, () => {
                closeAniAfterCommCb(dialog);
            });
        }
        LwgScene.goCommonDialogCloseAni = goCommonDialogCloseAni;
        function openAniAfterCommCb(openScript) {
            LwgClick.Filter.setValue(LwgClick.EmfilterType.all);
            LwgScene.lastSceneName = openScript.owner.name;
            openScript.setViewShowByOpen();
            openScript.lwgButton();
            openScript.openNum++;
            openScript.lwgOpenAniAfter();
            LwgEvent.notify(LwgEvent.BaseEvent.openSceneAniAfter, [openScript.owner.name, openScript.openNum]);
        }
        function closeAniAfterCommCb(scene) {
            scene.close();
            LwgClick.Filter.setValue(LwgClick.EmfilterType.all);
        }
        function findNodeBelongToScene(node) {
            if (node.parent == LwgScene.sceneParent) {
                return node;
            }
            else {
                return this.findNodeBelongToScene(node.parent);
            }
        }
        LwgScene.findNodeBelongToScene = findNodeBelongToScene;
        LwgScene.preLoadInfo = {
            openName: null,
            fromName: null,
            openIsOverlay: null,
            dataOpen: null,
        };
        function lodeScene(openName, cb) {
            LwgClick.Filter.setValue(LwgClick.EmfilterType.none);
            let url = NameBase[openName] ? LwgPath.ViewsBase : LwgPath.Views;
            Laya.Scene.load(`${url}${openName}.json`, Laya.Handler.create(this, function (Scene) {
                Scene.name = openName;
                cb && cb(Scene);
            }));
        }
        function openSceneAndPreLoad(openName, fromName, openIsOverlay, openData) {
            LwgScene.preLoadInfo.openName = openName;
            LwgScene.preLoadInfo.fromName = fromName;
            LwgScene.preLoadInfo.openIsOverlay = openIsOverlay;
            openOverlayScene(NameBase.PreLoadCutIn, openData);
        }
        LwgScene.openSceneAndPreLoad = openSceneAndPreLoad;
        function openScene(openName, closeName, openData, fromReturnBtn, showReturnBtn) {
            lodeScene(openName, (Scene) => {
                !fromReturnBtn && LwgScene.openSceneTrack.push(openName);
                addSceneInStage(Scene, openData, false, showReturnBtn);
                goSceneOpenAni(Scene, LwgScene.sceneControl[closeName]);
            });
        }
        LwgScene.openScene = openScene;
        function openOverlayScene(openName, openData) {
            lodeScene(openName, (Scene) => {
                addSceneInStage(Scene, openData, true);
                goOverlaySceneOpenAni(Scene);
            });
        }
        LwgScene.openOverlayScene = openOverlayScene;
        function openOverlayOtherParentView(openName, parent, openData) {
            lodeScene(openName, (Scene) => {
                LwgScene.addSceneInStage(Scene, openData, true, false, parent);
                goOverlaySceneOpenAni(Scene);
            });
        }
        LwgScene.openOverlayOtherParentView = openOverlayOtherParentView;
        function openCommonDialog(openName, openData, openAniType) {
            lodeScene(NameBase.CommonDialog, (SceneDialog) => {
                addSceneInStage(SceneDialog, openData, true, false, null, openName);
                goCommonDialogOpenAni(SceneDialog);
                Laya.Scene.load(`${LwgPath.Views}${openName}.json`, Laya.Handler.create(this, function (Scene) {
                    SceneDialog.ViewBox.addChild(Scene);
                    SceneDialog.ViewBox.size(Scene.width, Scene.height);
                    SceneDialog.content.size(SceneDialog.ViewBox.width + 40, SceneDialog.ViewBox.height + 200);
                    LwgClick.btnOnceUp(SceneDialog.BtnClose, this, () => {
                        goCommonDialogCloseAni(SceneDialog);
                    });
                }));
            });
        }
        LwgScene.openCommonDialog = openCommonDialog;
        function closeOverlayScene(closeScene) {
            if (closeScene) {
                const script = closeScene[closeScene.name];
                if (script.isOverlay) {
                    script.lwgClearOwner();
                    goOverlaySceneCloseAni(closeScene);
                }
                else {
                    console.log('只有叠加在场景上面的场景可以自由关闭，否则请使用打开另一个场景，基础场景会自动关闭！');
                }
            }
        }
        LwgScene.closeOverlayScene = closeOverlayScene;
        function clearScene(caller) {
            Laya.Tween.clearAll(caller);
            Laya.timer.clearAll(caller);
            LwgEvent.offAllCaller(caller);
        }
        LwgScene.clearScene = clearScene;
        class ScriptBase extends Laya.Script {
            constructor() {
                super(...arguments);
                this.ownerSceneName = '';
            }
            lwgOnAwake() { }
            ;
            lwgAdaptive() { }
            ;
            lwgEvent() { }
            ;
            evRegister(name, func) {
                LwgEvent.register(name, this, func);
            }
            evRegisterOnce(name, func) {
                LwgEvent.registerOnce(name, this, func);
            }
            evNotify(name, args) {
                LwgEvent.notify(name, args);
            }
            lwgOnEnable() { }
            lwgOnStart() { }
            lwgButton() { }
            ;
            btnOnDown(target, down, effect) {
                LwgClick.btnOnDown(target, this, down, effect);
            }
            btnOnDownAD(target, down, effect) {
                LwgClick.btnOnDownAD(target, this, down, effect);
            }
            btnOnceDownAD(target, down, effect) {
                LwgClick.btnOnceDownAD(target, this, down, effect);
            }
            btnOnMove(target, move, effect) {
                LwgClick.btnOnMove(target, this, move, effect);
            }
            btnOnUp(target, up, effect) {
                LwgClick.btnOnUp(target, this, up, effect);
            }
            btnOnUpAD(target, up, effect) {
                LwgClick.btnOnUpAD(target, this, up, effect);
            }
            btnOnceUpAD(target, up, effect) {
                LwgClick.btnOnceUpAD(target, this, up, effect);
            }
            btnOnUpADCondition(target, condition, reachCb, notReachCb, effect) {
                LwgClick.btnOnUpADCondition(target, this, condition, reachCb, notReachCb, effect);
            }
            btnOnceUpADCondition(target, condition, reachCb, notReachCb, effect) {
                LwgClick.btnOnceUpADCondition(target, this, condition, reachCb, notReachCb, effect);
            }
            btnOnOut(target, out, effect) {
                LwgClick.btnOnOut(target, this, out, effect);
            }
            btnOff(target, cb, effect) {
                LwgClick.off(target);
            }
            btnOnFour(target, down, move, up, out, effect) {
                LwgClick.on(effect, target, this, down, move, up, out);
            }
            btnOnceDown(target, down, effect) {
                LwgClick.once(effect, target, this, down, null, null, null);
            }
            btnOnceMove(target, move, effect) {
                LwgClick.once(effect, target, this, null, move, null, null);
            }
            btnOnceUp(target, up, effect) {
                LwgClick.once(effect, target, this, null, null, up, null);
            }
            btnOnceUpADByCondition(target, condition, up, effect) {
                LwgClick.once(effect, target, this, null, null, () => {
                    if (condition) {
                        LwgPlatform.AD.showVideo(() => {
                            up && up();
                        });
                    }
                    else {
                        up && up();
                    }
                }, null);
            }
            btnOnceOut(target, out, effect) {
                LwgClick.once(effect, target, this, null, null, null, out);
            }
            btnOnceFour(target, down, move, up, out, effect) {
                LwgClick.once(effect, target, this, down, move, up, out);
            }
            openScene(openName, data, preLoadCutIn, showReturn) {
                this.lwgClearOwner();
                if (!preLoadCutIn) {
                    LwgScene.openScene(openName, this.owner.name, data, preLoadCutIn, showReturn);
                }
                else {
                    LwgScene.openSceneAndPreLoad(openName, this.owner.name, false, data);
                }
            }
            lwgClearOwner() { }
            ;
            openOverlayScene(openName, data, preLoadCutIn) {
                if (!preLoadCutIn) {
                    LwgScene.openOverlayScene(openName, data);
                }
                else {
                    LwgScene.openSceneAndPreLoad(openName, this.owner.name, true, data);
                }
            }
            openCommonDialog(openName, data, openAniType) {
                LwgScene.openCommonDialog(openName, data, openAniType);
            }
            lwgOnUpdate() { }
            ;
            lwgOnDisable() { }
            ;
            onStageMouseDown(e) { LwgClick.Filter.checkStage() && this.lwgOnStageMouseDown(e); }
            ;
            onStageMouseMove(e) { LwgClick.Filter.checkStage() && this.lwgOnStageMouseMove(e); }
            ;
            onStageMouseUp(e) { LwgClick.Filter.checkStage() && this.lwgOnStageMouseUp(e); }
            ;
            lwgOnStageMouseDown(e) { }
            ;
            lwgOnStageMouseMove(e) { }
            ;
            lwgOnStageMouseUp(e) { }
            ;
        }
        class SceneBase extends ScriptBase {
            constructor() {
                super();
            }
            get openNum() {
                return LwgStorage.number(`${this.owner.name}/openNum`).value;
            }
            set openNum(val) {
                LwgStorage.number(`${this.owner.name}/openNum`).value = val;
            }
            onAwake() {
                this.showReturnBtn && LwgCommon.ReturnBtn.show();
                this.setWH();
                this.setBg();
                this.lwgOnAwake();
                this.lwgAdaptive();
            }
            setWH() {
                this.owner['width'] = Laya.stage.width;
                this.owner['height'] = Laya.stage.height;
            }
            setBg() {
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
            onStart() {
                this.lwgOnStart();
            }
            setViewShowByOpen() {
                LwgCurrency.Gold.showInSceneCheck(this.owner.name);
                LwgCurrency.Stamina.showInSceneCheck(this.owner.name);
                LwgCurrency.Diamond.showInSceneCheck(this.owner.name);
                LwgCommon.BtnGameManager.showInSceneCheck(this.owner.name);
                LwgPlatform.AD.showADInScene(this.owner.name);
            }
            lwgOpenAni() { return null; }
            ;
            lwgOpenAniAfter() { }
            ;
            adaptiveHeight(arr) {
                LwgAdaptive.stageHeight(arr);
            }
            ;
            adaptiveWidth(arr) {
                LwgAdaptive.stageWidth(arr);
            }
            ;
            adaptiveCenter(arr) {
                LwgAdaptive.center(arr, Laya.stage);
            }
            ;
            onUpdate() { this.lwgOnUpdate(); }
            ;
            closeScene(sceneName) {
                let openScene;
                if (sceneName) {
                    openScene = LwgScene.sceneControl[sceneName];
                }
                else {
                    openScene = this.owner;
                }
                LwgScene.closeOverlayScene(openScene);
            }
            lwgCloseAni() { return null; }
            ;
            lwgClearOwner() {
                clearScene(this);
                clearScene(this.owner);
            }
            setViewShowByClose() {
                if (this.owner.name !== NameBase.PreLoadCutIn) {
                    LwgPlatform.AD.showADCloseSceneLater(this.owner.name);
                    if (this.isOverlay) {
                        LwgPlatform.AD.hideADInScene();
                        LwgCurrency.Gold.hideInSceneCheck();
                        LwgCurrency.Diamond.hideInSceneCheck();
                        LwgCurrency.Stamina.hideInSceneCheck();
                        LwgCommon.BtnGameManager.hideInSceneCheck();
                    }
                }
            }
            onDisable() {
                this.setViewShowByClose();
                this.lwgClearOwner();
                this.lwgOnDisable();
            }
        }
        LwgScene.SceneBase = SceneBase;
        let EmDialogCommonOpenAniType;
        (function (EmDialogCommonOpenAniType) {
            EmDialogCommonOpenAniType["none"] = "none";
            EmDialogCommonOpenAniType["open_popup"] = "open_popup";
            EmDialogCommonOpenAniType["open_popupRotate"] = "open_popupRotate";
        })(EmDialogCommonOpenAniType = LwgScene.EmDialogCommonOpenAniType || (LwgScene.EmDialogCommonOpenAniType = {}));
        let EmDialogCommonCloseAniType;
        (function (EmDialogCommonCloseAniType) {
            EmDialogCommonCloseAniType["none"] = "none";
            EmDialogCommonCloseAniType["close_shrink"] = "close_shrink";
        })(EmDialogCommonCloseAniType = LwgScene.EmDialogCommonCloseAniType || (LwgScene.EmDialogCommonCloseAniType = {}));
        class CommonDialogBase extends SceneBase {
            constructor() {
                super(...arguments);
                this.openAnitype = EmDialogCommonOpenAniType.open_popup;
                this.closeAniType = EmDialogCommonCloseAniType.close_shrink;
            }
            get Doalog() {
                return this.owner;
            }
            onAwake() {
                this.setWH();
                this.setBg();
                this.lwgOnAwake();
                this.lwgAdaptive();
            }
        }
        LwgScene.CommonDialogBase = CommonDialogBase;
        class ObjectBase extends ScriptBase {
            constructor() {
                super();
            }
            clearAndDestroy() {
                this.lwgClearOwner();
                this._owner.destroy();
            }
            get _owner() {
                return this.owner;
            }
            get presentPoint() {
                return new Laya.Point(this._owner.x, this._owner.y);
            }
            get ownerScene() {
                return this.owner.scene;
            }
            onAwake() {
                LwgNode.addProperty(this._owner);
                this._owner[this._owner.name] = this;
                this.ownerSceneName = this._owner.name;
                this.lwgOnAwake();
                this.lwgAdaptive();
            }
            onEnable() {
                this.lwgButton();
                this.lwgEvent();
                this.lwgOnEnable();
            }
            onStart() {
                this.lwgOnStart();
            }
            onUpdate() {
                this.lwgOnUpdate();
            }
            lwgClearOwner() {
                clearScene(this);
                clearScene(this.owner);
            }
            onDisable() {
                this.lwgClearOwner();
                this.lwgOnDisable();
            }
        }
        LwgScene.ObjectBase = ObjectBase;
        class ViewObjBase {
            constructor() {
                this.viewNameByUI = '';
                this.style = {
                    x: 4,
                    y: 46,
                };
                this.aniTime = 100;
                this.appearScene = [];
                this.showRrackArray = [];
            }
            show(style = this.style, delay = this.aniTime, parent = LwgScene.baseViewObjParent) {
                this.createView(style, parent);
                this.showAni(delay);
            }
            ;
            showInSceneCheck(sceneName) {
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
                }
                else {
                    this.hide();
                    this.showRrackArray.push({
                        sceneName: sceneName,
                        show: false,
                    });
                }
            }
            hideInSceneCheck() {
                this.showRrackArray.pop();
                if (this.showRrackArray.length > 0) {
                    if (this.showRrackArray[this.showRrackArray.length - 1].show) {
                        this.show();
                    }
                    else {
                        this.hide();
                    }
                }
                else {
                    this.hide();
                }
            }
            createView(style, parent = Laya.stage) {
                if (!this.view) {
                    this.view = new ui.Views.Base[this.viewNameByUI];
                    this.view.visible = false;
                    this.view.zOrder = 100;
                    this.createCb();
                }
                if (parent) {
                    parent.addChild(this.view);
                }
                else {
                    LwgScene.commonViewParent.addChild(this.view);
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
            createCb() { }
            ;
            showAni(delay) {
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
                    }
                    else {
                        this.showCb();
                    }
                }
            }
            showCb() { }
            ;
            move(x, y, time = 200, delay = 0, cb = null) {
                LwgAni2D.move(this.view, x, y ? y : this.view.y, time, () => {
                    cb && cb();
                }, delay);
            }
            hide(ani, cb = null) {
                if (!this.view) {
                    return;
                }
                if (ani) {
                    LwgAni2D.scale_Alpha(this.view, 1, 1, 1, 1, 1, 0, this.aniTime, 0, () => {
                        this.view.visible = false;
                        this.hideCb();
                        cb && cb();
                    });
                }
                else {
                    this.view.visible = false;
                    this.hideCb();
                    cb && cb();
                }
            }
            hideCb() { }
            ;
        }
        LwgScene.ViewObjBase = ViewObjBase;
        class RuntimeImgBase extends Laya.Image {
            onAwake() {
                this.lwgOnAwake();
            }
            lwgOnAwake() { }
            onDisable() {
                this.lwgClear();
                this.lwgOnDisable();
            }
            lwgOnDisable() { }
            lwgClear() {
                clearScene(this);
            }
        }
        LwgScene.RuntimeImgBase = RuntimeImgBase;
        class RuntimeImgViwe extends Laya.View {
            onAwake() {
                this.lwgOnAwake();
            }
            lwgOnAwake() { }
            onDisable() {
                this.lwgClear();
                this.lwgOnDisable();
            }
            lwgOnDisable() { }
            lwgClear() {
                Laya.Tween.clearAll(this);
                Laya.timer.clearAll(this);
                LwgEvent.offAllCaller(this);
            }
        }
        LwgScene.RuntimeImgViwe = RuntimeImgViwe;
    })(LwgScene || (LwgScene = {}));
    var LwgSceneAni;
    (function (LwgSceneAni) {
        let EmOpenSceneType;
        (function (EmOpenSceneType) {
            EmOpenSceneType["fadeOut_openLaterClose"] = "fadeOut_openLaterClose";
            EmOpenSceneType["fadeOut_closeLaterOpen"] = "fadeOut_closeLaterOpen";
        })(EmOpenSceneType = LwgSceneAni.EmOpenSceneType || (LwgSceneAni.EmOpenSceneType = {}));
        let EmOpenOverlayType;
        (function (EmOpenOverlayType) {
            EmOpenOverlayType["fadeOut_commonFadeOut"] = "fadeOut_commonFadeOut";
        })(EmOpenOverlayType = LwgSceneAni.EmOpenOverlayType || (LwgSceneAni.EmOpenOverlayType = {}));
        let EmCloseOverlayType;
        (function (EmCloseOverlayType) {
            EmCloseOverlayType["fadeOut_commonFadeOut"] = "fadeOut_commonFadeOut";
        })(EmCloseOverlayType = LwgSceneAni.EmCloseOverlayType || (LwgSceneAni.EmCloseOverlayType = {}));
        function playSceneOpen(type = EmOpenSceneType.fadeOut_openLaterClose, openScene, closeScene, cb) {
            const dataArr = type.split('_');
            SceneOpen[dataArr[0]][dataArr[1]](openScene, closeScene, cb);
        }
        LwgSceneAni.playSceneOpen = playSceneOpen;
        function playOverlaySceneOpen(type = EmOpenOverlayType.fadeOut_commonFadeOut, openScene, cb) {
            const dataArr = type.split('_');
            OverlaySceneOpen[dataArr[0]][dataArr[1]](openScene, cb);
        }
        LwgSceneAni.playOverlaySceneOpen = playOverlaySceneOpen;
        function playOverlaySceneClose(type = EmCloseOverlayType.fadeOut_commonFadeOut, closeScene, cb) {
            const dataArr = type.split('_');
            OverlaySceneClose[dataArr[0]][dataArr[1]](closeScene, cb);
        }
        LwgSceneAni.playOverlaySceneClose = playOverlaySceneClose;
        let SceneOpen;
        (function (SceneOpen) {
            class fadeOut {
                static openLaterClose(openScene, closeScene, cb) {
                    const time = 100;
                    openScene['background'] && LwgAni2D.fadeOut(openScene['background'], 0, 1, time / 2);
                    LwgAni2D.fadeOut(openScene, 0, 1, time, 0, () => {
                        closeScene && closeScene.close();
                        cb && cb();
                    });
                    return time;
                }
                static closeLaterOpen(openScene, closeScene, cb) {
                    const time = 200;
                    const delay = 100;
                    if (openScene['Background']) {
                        LwgAni2D.fadeOut(closeScene['Background'], 1, 0, time / 2);
                    }
                    LwgAni2D.fadeOut(openScene, 1, 0, time, delay, () => {
                        closeScene && closeScene.close();
                        cb && cb();
                    });
                    return time + delay;
                }
            }
            SceneOpen.fadeOut = fadeOut;
        })(SceneOpen || (SceneOpen = {}));
        let OverlaySceneOpen;
        (function (OverlaySceneOpen) {
            class fadeOut {
                static commonFadeOut(openScene, cb) {
                    return SceneOpen.fadeOut.openLaterClose(openScene, null, cb);
                }
            }
            OverlaySceneOpen.fadeOut = fadeOut;
            class Popup {
                static QBounce(openScene, cb) {
                }
            }
            OverlaySceneOpen.Popup = Popup;
        })(OverlaySceneOpen || (OverlaySceneOpen = {}));
        let OverlaySceneClose;
        (function (OverlaySceneClose) {
            class fadeOut {
                static commonFadeOut(closeScene, cb) {
                    const time = 300;
                    LwgAni2D.fadeOut(closeScene, 1, 0, time, 0, () => {
                        closeScene && closeScene.close();
                        cb && cb();
                    });
                    return time;
                }
            }
            OverlaySceneClose.fadeOut = fadeOut;
            class PinchIn {
                static commonPinchIn(openScene, cb) {
                }
            }
            OverlaySceneClose.PinchIn = PinchIn;
        })(OverlaySceneClose || (OverlaySceneClose = {}));
    })(LwgSceneAni || (LwgSceneAni = {}));
    var LwgNode;
    (function (LwgNode) {
        class Sprite extends Laya.Sprite {
        }
        LwgNode.Sprite = Sprite;
        class Image extends Laya.Image {
        }
        LwgNode.Image = Image;
        class _Box extends Laya.Box {
        }
        LwgNode._Box = _Box;
        function addProperty(node, nodeType) {
            if (!node)
                return;
            let lwgPro;
            switch (nodeType) {
                case 'Img':
                    lwgPro;
                    break;
                case 'box':
                    lwgPro;
                    break;
                default:
                    lwgPro;
                    break;
            }
            let getGPoint = () => {
                if (node.parent) {
                    return node.parent.localToGlobal(new Laya.Point(node.x, node.y));
                }
                else {
                    return null;
                }
            };
            const fPoint = new Laya.Point(node.x, node.y);
            const fGPoint = getGPoint();
            const fRotation = node.rotation;
            lwgPro = {
                get gPoint() {
                    return getGPoint();
                },
                fPoint: fPoint,
                fGPoint: fGPoint,
                fRotation: fRotation,
                getDisByNode(OtherNode) {
                    const nodePos = getGPoint();
                    if (nodePos) {
                        if (OtherNode.parent) {
                            let otherNodePos = OtherNode.parent.localToGlobal(new Laya.Point(node.x, node.y));
                            return nodePos.distance(otherNodePos.x, otherNodePos.y);
                        }
                    }
                    return null;
                },
                getGlobleDisByPoint(point) {
                    const nodeGPos = getGPoint();
                    return nodeGPos.distance(point.x, point.y);
                },
                getLocalDisByPoint(point) {
                    const nodePos = new Laya.Point(node.x, node.y);
                    return nodePos.distance(point.x, point.y);
                },
                getChildGPoint(Child) {
                    const point = new Laya.Point(Child.x, Child.y);
                    const gPoint = node.localToGlobal(point);
                    return gPoint;
                }
            };
            node['lwg'] = lwgPro;
        }
        LwgNode.addProperty = addProperty;
    })(LwgNode || (LwgNode = {}));
    var LwgDialogue;
    (function (LwgDialogue) {
        let EmFloatWordAniType;
        (function (EmFloatWordAniType) {
        })(EmFloatWordAniType = LwgDialogue.EmFloatWordAniType || (LwgDialogue.EmFloatWordAniType = {}));
        class FloatWord {
            static createFontSystem(x, y, contentStyle, scale, showIcon = true, aniType) {
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
                floatWord.ani1.on(Laya.Event.LABEL, this, (e) => {
                    if (e == 'end') {
                        floatWord.destroy();
                    }
                });
                return floatWord;
            }
            static createFontArt(x, y, index, scale, showIcon = true, aniType) {
            }
            static createFontArtNum(x, y, content, scale, showIcon = true, aniType) {
            }
        }
        LwgDialogue.FloatWord = FloatWord;
        let EmDialogHint;
        (function (EmDialogHint) {
            EmDialogHint["Single"] = "Single";
            EmDialogHint["Double"] = "Double";
            EmDialogHint["Check"] = "Check";
        })(EmDialogHint = LwgDialogue.EmDialogHint || (LwgDialogue.EmDialogHint = {}));
        function openDialogHint(data) {
            Laya.Scene.load(`${LwgPath.ViewsBase}${LwgScene.NameBase.DialogHint}.json`, Laya.Handler.create(this, (view) => {
                view.name = LwgScene.NameBase.DialogHint;
                LwgScene.addSceneInStage(view, data, true, false, LwgScene.EmSceneParent.commonViewParent);
                view.zOrder = LwgScene.sceneParent.zOrder + 1;
                LwgScene.goOverlaySceneOpenAni(view);
            }));
        }
        LwgDialogue.openDialogHint = openDialogHint;
        let Skin;
        (function (Skin) {
            Skin["blackBord"] = "Lwg/UI/img_rectangle_mask_06.png";
        })(Skin || (Skin = {}));
        function showTips(content) {
            const hide_M = Laya.Pool.getItemByClass('CommonTips', Laya.Sprite);
            hide_M.name = 'CommonTips';
            Laya.stage.addChild(hide_M);
            hide_M.width = Laya.stage.width;
            hide_M.height = 100;
            hide_M.pivotY = hide_M.height / 2;
            hide_M.pivotX = Laya.stage.width / 2;
            hide_M.x = Laya.stage.width / 2;
            hide_M.y = Laya.stage.height / 2;
            hide_M.zOrder = 100;
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
            const Dec = new Laya.Label();
            hide_M.addChild(Dec);
            Dec.width = Laya.stage.width;
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
        LwgDialogue.showTips = showTips;
    })(LwgDialogue || (LwgDialogue = {}));
    var LwgCommon;
    (function (LwgCommon) {
        class Init {
            constructor(set) {
                LwgCommon.ReturnBtn = new _BtnReturn;
                LwgCommon.BtnGameManager = new _GameManagerBtn;
                LwgCommon.ReturnBtn.appearScene = set.ReturnBtn.appearScene;
                if (LwgPlatform.type === LwgPlatform.EmType.Exploit || LwgPlatform.type === LwgPlatform.EmType.ExploitNoAD) {
                    LwgCommon.BtnGameManager.appearScene = set.BtnGameManager.appearScene;
                }
                else {
                    LwgCommon.BtnGameManager.appearScene = [];
                }
            }
            get LwgCommon() {
                return 'LwgCommon';
            }
        }
        LwgCommon.Init = Init;
        class _BtnReturn extends LwgScene.ViewObjBase {
            constructor() {
                super(...arguments);
                this.viewNameByUI = 'ReturnBtnObjUI';
            }
            static get ins() {
                if (!this._ins) {
                    this._ins = new _BtnReturn();
                }
                return this._ins;
            }
            createCb() {
                LwgClick.on(LwgClick.effectType, this.view, this, null, null, () => {
                    LwgScene.returnToPreviousScene();
                });
            }
        }
        LwgCommon._BtnReturn = _BtnReturn;
        class _GameManagerBtn extends LwgScene.ViewObjBase {
            constructor() {
                super(...arguments);
                this.viewNameByUI = 'GameManagerBtnObjUI';
                this.style = {
                    right: 20,
                    bottom: 20,
                };
            }
            static get ins() {
                if (!this._ins) {
                    this._ins = new _GameManagerBtn();
                }
                return this._ins;
            }
            createCb() {
                LwgClick.on(LwgClick.effectType, this.view, this, null, null, () => {
                    if (Laya.stage.getChildByName(LwgScene.NameBase.GameManager)) {
                        return;
                    }
                    ;
                    Laya.Scene.load(`${LwgPath.ViewsBase}${LwgScene.NameBase.GameManager}.json`, Laya.Handler.create(this, (view) => {
                        view.name = LwgScene.NameBase.GameManager;
                        LwgScene.addSceneInStage(view, null, true, false, LwgScene.EmSceneParent.commonViewParent);
                        LwgScene.goOverlaySceneOpenAni(view);
                    }));
                });
            }
        }
        LwgCommon._GameManagerBtn = _GameManagerBtn;
    })(LwgCommon || (LwgCommon = {}));
    var LwgCurrency;
    (function (LwgCurrency) {
        class Init {
            constructor(set) {
                LwgCurrency.Gold = new _Gold(set.Gold);
                LwgCurrency.Diamond = new _Diamond(set.Diamond);
                LwgCurrency.Stamina = new _Stamina(set.Stamina);
            }
            get name() {
                return 'LwgCurrency';
            }
        }
        LwgCurrency.Init = Init;
        let SkinUrl;
        (function (SkinUrl) {
            SkinUrl[SkinUrl["Lwg/UI/img_corner_12.png"] = 0] = "Lwg/UI/img_corner_12.png";
        })(SkinUrl || (SkinUrl = {}));
        class BaseCurrency extends LwgScene.ViewObjBase {
            constructor() {
                super(...arguments);
                this.viewNameByUI = 'GoldObjUI';
                this.initialNum = 0;
            }
            get num() {
                return this['_num'];
            }
            set num(val) {
                this['_num'] = val;
            }
            createCb() {
                this.view.num.text = this.num.toString();
                LwgClick.on(LwgClick.EmEffectType.NoEffect, this.view, this, (e) => {
                    e.stopPropagation();
                }, null, (e) => {
                    e.stopPropagation();
                    LwgClick.Filter.checkBtn(this.view) && this.btnAddClick && this.btnAddClick();
                });
                LwgEvent.notify(LwgEvent.BaseEvent.redDotHint);
            }
            updateNumOnNode() {
                const num = this.view.num;
                if (num['sheet']) {
                    num['value'] = this.num.toString();
                }
                else {
                    num['text'] = this.num.toString();
                }
            }
            addNumDisPlayNode(number) {
                this.num += number;
                this.updateNumOnNode();
            }
            subNumDisPlayNode(number) {
                this.num -= number;
                this.updateNumOnNode();
            }
            addDisPlayNode(number) {
                const lbNum = this.view.getChildByName('Num');
                if (lbNum['sheet']) {
                    lbNum['value'] = (Number(lbNum['value']) + number).toString();
                }
                else {
                    lbNum['text'] = (Number(lbNum['text']) + number).toString();
                }
            }
            addNumNoDisPlayNode(number) {
                this.num += Number(number);
            }
            createOne(width, height, url) {
                const Gold = Laya.Pool.getItemByClass('addGold', Laya.Image);
                Gold.name = 'addGold';
                Gold.alpha = 1;
                Gold.zOrder = 60;
                Gold.width = width;
                Gold.height = height;
                Gold.pivotX = width / 2;
                Gold.pivotY = height / 2;
                if (!url) {
                    Gold.skin = SkinUrl[0];
                }
                else {
                    Gold.skin = url;
                }
                if (this.view) {
                    Gold.zOrder = this.view.zOrder + 10;
                }
                return Gold;
            }
            playGetSingleAni(parent, number, width, height, url, firstPoint, targetPoint, cbStep, cbguideCompelet) {
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
                                });
                            }
                            else {
                                if (cbStep) {
                                    cbStep();
                                }
                            }
                            Gold.removeSelf();
                        });
                    });
                }
            }
            playGetHeapAni(parent, number, size, url, firstPoint, targetPoint, cbStep, cbguideCompelet, sound = true) {
                for (let index = 0; index < number; index++) {
                    const Gold = this.createOne(size[0] ? size[0] : 60, size[1] ? size[1] : 60, url ? url : SkinUrl[0]);
                    parent = parent ? parent : Laya.stage;
                    parent.addChild(Gold);
                    firstPoint = firstPoint ? firstPoint : new Laya.Point(Laya.stage.width / 2, Laya.stage.height / 2);
                    targetPoint = targetPoint ? targetPoint : new Laya.Point(this.view.x + this.view.icon.x, this.view.y + this.view.icon.y);
                    let x = Math.floor(Math.random() * 2) == 1 ? firstPoint.x + Math.random() * 100 : firstPoint.x - Math.random() * 100;
                    let y = Math.floor(Math.random() * 2) == 1 ? firstPoint.y + Math.random() * 100 : firstPoint.y - Math.random() * 100;
                    LwgAni2D.move_Scale(Gold, 0.5, firstPoint.x, firstPoint.y, x, y, 1, 300, Math.random() * 100 + 100, Laya.Ease.cubicOut, () => {
                        LwgAni2D.move_Scale(Gold, 1, Gold.x, Gold.y, targetPoint.x, targetPoint.y, 1, 400, Math.random() * 200 + 100, Laya.Ease.cubicOut, () => {
                            sound && LwgSound.playSound(LwgSound.getMoneyUrl);
                            if (index === number - 1) {
                                Laya.timer.once(200, this, () => {
                                    if (cbguideCompelet) {
                                        cbguideCompelet();
                                    }
                                });
                            }
                            else {
                                if (cbStep) {
                                    cbStep();
                                }
                            }
                            Gold.destroy(true);
                        });
                    });
                }
            }
        }
        class _Gold extends BaseCurrency {
            constructor(data) {
                super();
                this.viewNameByUI = 'GoldObjUI';
                this.appearScene = data.appearScene;
                this.initialNum = data.initialNum ? data.initialNum : 0;
                if (data.btnAddClick) {
                    this.btnAddClick = data.btnAddClick;
                }
            }
            get num() {
                return Laya.LocalStorage.getItem('Gold/num') ? Number(Laya.LocalStorage.getItem('Gold/num')) : this.initialNum;
            }
            ;
            set num(val) {
                val = Math.round(val);
                Laya.LocalStorage.setItem('Gold/numm', val.toString());
                LwgEvent.notify(LwgEvent.BaseEvent.redDotHint);
            }
        }
        class _Diamond extends BaseCurrency {
            constructor(data) {
                super();
                this.viewNameByUI = 'DiamondObjUI';
                this.style = {
                    x: 4,
                    y: 46,
                };
                this.appearScene = data.appearScene;
                this.initialNum = data.initialNum ? data.initialNum : 0;
                if (data.btnAddClick) {
                    this.btnAddClick = data.btnAddClick;
                }
            }
            get num() {
                return Laya.LocalStorage.getItem('Diamond/num') ? Number(Laya.LocalStorage.getItem('Diamond/num')) : this.initialNum;
            }
            set num(val) {
                val = Math.round(val);
                Laya.LocalStorage.setItem('Diamond/num', val.toString());
                LwgEvent.notify(LwgEvent.BaseEvent.redDotHint);
            }
        }
        class _Stamina extends BaseCurrency {
            constructor(data) {
                super();
                this.maxNum = 100;
                this.initialNum = 50;
                this.addOnceByTime = 1000 * 60 * 5;
                this.addNumByTime = 5;
                this.viewNameByUI = 'StaminaObjUI';
                this.style = {
                    x: 174,
                    y: 46,
                };
                this.appearScene = data.appearScene;
                this.initialNum = data.initialNum;
                this.maxNum = data.maxNum;
                this.addOnceByTime = data.addOnceByTime;
                this.addNumByTime = data.addNumByTime;
                if (data.btnAddClick) {
                    this.btnAddClick = data.btnAddClick;
                }
            }
            get num() {
                return Laya.LocalStorage.getItem('Stamina/num') ? Number(Laya.LocalStorage.getItem('Stamina/num')) : this.initialNum;
            }
            set num(val) {
                if (val < 0) {
                    val = 0;
                }
                val = Math.round(val);
                Laya.LocalStorage.setItem('Stamina/num', val.toString());
                LwgEvent.notify(LwgEvent.BaseEvent.redDotHint);
            }
            showCb() {
                Laya.timer.clearAll(this);
                this.addRules();
            }
            hideCb() {
                Laya.timer.clearAll(this);
            }
            get lastAddTime() {
                if (!Laya.LocalStorage.getItem('Stamina/lastAddTime')) {
                    Laya.LocalStorage.setItem('Stamina/lastAddTime', LwgDate.Now.time.toString());
                }
                return Number(Laya.LocalStorage.getItem('Stamina/lastAddTime'));
            }
            set lastAddTime(val) {
                Laya.LocalStorage.setItem('Stamina/lastAddTime', val.toString());
            }
            addRules() {
                LwgTimer.frameLoop(1, this, () => {
                    if (this.num >= this.maxNum) {
                        this.view.countDown.text = '00:00';
                        this.view.boxCountHint.visible = false;
                    }
                    else {
                        this.view.boxCountHint.visible = true;
                        const time = LwgDate.Now.time - this.lastAddTime;
                        if (LwgDate.Now.time - this.lastAddTime > this.addOnceByTime) {
                            const addNum = Math.round((LwgDate.Now.time - this.lastAddTime) / this.addOnceByTime) * this.addNumByTime;
                            if (this.num < this.maxNum) {
                                this.num += addNum;
                                if (this.num > this.maxNum) {
                                    this.num = this.maxNum;
                                }
                            }
                            this.lastAddTime = LwgDate.Now.time;
                            this.view.countDown.text = '00:00';
                        }
                        else {
                            const obj = LwgDate.getHMSByTime(time);
                            const minutes0 = this.addOnceByTime / 1000 / 60 - obj.minutes;
                            const seconds = 59 - obj.seconds;
                            const seconds0 = seconds >= 10 ? seconds : '0' + (seconds);
                            if (minutes0 > 0) {
                                const minutes = (minutes0 - 1) >= 10 ? (minutes0 - 1) : '0' + (minutes0 - 1);
                                this.view.countDown.text = `${minutes}:${seconds0}`;
                            }
                            else {
                                const seconds0 = seconds >= 10 ? seconds : '0' + (seconds);
                                this.view.countDown.text = `00:${seconds0}`;
                            }
                        }
                    }
                    this.view.num.text = this.num.toString();
                });
            }
        }
    })(LwgCurrency || (LwgCurrency = {}));
    var LwgEvent;
    (function (LwgEvent) {
        class BaseEvent {
        }
        BaseEvent.redDotHint = 'redDotHint';
        BaseEvent.openScene = 'openScene';
        BaseEvent.openSceneAniAfter = 'openSceneAniAfter';
        LwgEvent.BaseEvent = BaseEvent;
        LwgEvent.dispatcher = new Laya.EventDispatcher();
        function register(type, caller, listener) {
            if (!caller) {
                console.error("事件的执行域必须存在!");
            }
            LwgEvent.dispatcher.on(type.toString(), caller, listener);
        }
        LwgEvent.register = register;
        function registerOnce(type, caller, listener) {
            if (!caller) {
                console.error("事件的执行域必须存在!");
            }
            LwgEvent.dispatcher.once(type.toString(), caller, listener);
        }
        LwgEvent.registerOnce = registerOnce;
        function notify(type, args) {
            LwgEvent.dispatcher.event(type.toString(), args);
        }
        LwgEvent.notify = notify;
        function off(type, caller, listener) {
            LwgEvent.dispatcher.off(type.toString(), caller, listener);
        }
        LwgEvent.off = off;
        function offAll(type) {
            LwgEvent.dispatcher.offAll(type.toString());
        }
        LwgEvent.offAll = offAll;
        function offAllCaller(caller) {
            LwgEvent.dispatcher.offAllCaller(caller);
        }
        LwgEvent.offAllCaller = offAllCaller;
    })(LwgEvent || (LwgEvent = {}));
    var LwgDate;
    (function (LwgDate) {
        class Now {
            static get year() {
                return (new Date()).getFullYear();
            }
            ;
            static get month() {
                return (new Date()).getMonth();
            }
            ;
            static get date() {
                return (new Date()).getDate();
            }
            ;
            static get day() {
                return (new Date()).getDay();
            }
            ;
            static get hours() {
                return (new Date()).getHours();
            }
            ;
            static get minutes() {
                return (new Date()).getMinutes();
            }
            ;
            static get seconds() {
                return (new Date()).getSeconds();
            }
            ;
            static get milliseconds() {
                return (new Date()).getMilliseconds();
            }
            ;
            static get toLocaleDateString() {
                return (new Date()).toLocaleDateString();
            }
            ;
            static get toLocaleTimeString() {
                return (new Date()).toLocaleTimeString();
            }
            ;
            static get time() {
                return (new Date()).getTime();
            }
            ;
            static getHoursDiffLastTime(lastTime) {
                return getSumHoursByTime(lastTime, this.time);
            }
            ;
            static getMinutsDiffLastTime(lastTime) {
                return getSumMinutesByTime(lastTime, this.time);
            }
            static getSecondsDiffLastTime(lastTime) {
                return getSumSecondsByTime(lastTime, this.time);
            }
            static getHoursDiffNextTime(nextTime) {
                return getSumHoursByTime(this.time, nextTime);
            }
            ;
            static getMinutsDiffNextTime(nextTime) {
                return getSumMinutesByTime(this.time, nextTime);
            }
            static getSecondsDiffNextTime(nextTime) {
                return getSumSecondsByTime(this.time, nextTime);
            }
            static getTimeByMilliseconds(milliseconds) {
                return this.time + milliseconds;
            }
            static getTimeByScends(seconds) {
                return this.time + seconds * 1000;
            }
            static getTimeByMinutes(minutes) {
                return this.time + minutes * 60 * 1000;
            }
            static getTimeByHours(hours) {
                return this.time + hours * 60 * 60 * 1000;
            }
        }
        LwgDate.Now = Now;
        function getTimeByMillisecondsOntime(time, seconds) {
            return time + seconds;
        }
        LwgDate.getTimeByMillisecondsOntime = getTimeByMillisecondsOntime;
        function getTimeByScendsOntime(time, seconds) {
            return time + seconds * 1000;
        }
        LwgDate.getTimeByScendsOntime = getTimeByScendsOntime;
        function getTimeByMinutesOntime(time, minutes) {
            return time + minutes * 60 * 1000;
        }
        LwgDate.getTimeByMinutesOntime = getTimeByMinutesOntime;
        function getTimeByHoursOntime(time, hours) {
            return time + hours * 60 * 60 * 1000;
        }
        LwgDate.getTimeByHoursOntime = getTimeByHoursOntime;
        function getHMSByTime(msec) {
            let hours = parseInt(`${msec / (1000 * 60 * 60)}`).toString();
            let minutes = parseInt(`${(msec % (1000 * 60 * 60)) / (1000 * 60)}`).toString();
            let seconds = parseInt(`${(msec % (1000 * 60)) / 1000}`).toString();
            return {
                hours: +hours,
                minutes: +minutes,
                seconds: +seconds,
            };
        }
        LwgDate.getHMSByTime = getHMSByTime;
        function getHMSFormatByTowTime(startTimes, endTimes) {
            let msec = (Math.floor(endTimes / 1000) - Math.floor(startTimes / 1000)) * 1000;
            const timeObj = getHMSByTime(msec);
            const hours = timeObj.hours < 10 ? '0' + timeObj.hours : timeObj.hours.toString();
            const minutes = timeObj.minutes < 10 ? '0' + timeObj.minutes : timeObj.minutes.toString();
            const seconds = timeObj.seconds < 10 ? '0' + timeObj.seconds : timeObj.seconds.toString();
            return hours + ':' + minutes + ':' + seconds;
        }
        LwgDate.getHMSFormatByTowTime = getHMSFormatByTowTime;
        function getSumHoursByTime(startTimes, endTimes) {
            const msec = (Math.floor(endTimes / 1000) - Math.floor(startTimes / 1000)) * 1000;
            const timeObj = getHMSByTime(msec);
            return timeObj.hours + timeObj.minutes * 60 + timeObj.seconds * 3600;
        }
        LwgDate.getSumHoursByTime = getSumHoursByTime;
        function getSumMinutesByTime(startTimes, endTimes) {
            const msec = (Math.floor(endTimes / 1000) - Math.floor(startTimes / 1000)) * 1000;
            const timeObj = getHMSByTime(msec);
            return timeObj.hours * 60 + timeObj.minutes + timeObj.seconds / 60;
        }
        LwgDate.getSumMinutesByTime = getSumMinutesByTime;
        function getSumSecondsByTime(startTimes, endTimes) {
            const msec = (Math.floor(endTimes / 1000) - Math.floor(startTimes / 1000)) * 1000;
            const timeObj = getHMSByTime(msec);
            return timeObj.hours * 3600 + timeObj.minutes * 60 + timeObj.seconds;
        }
        LwgDate.getSumSecondsByTime = getSumSecondsByTime;
    })(LwgDate || (LwgDate = {}));
    var LwgTimer;
    (function (LwgTimer) {
        LwgTimer.onOff = true;
        function frameLoop(delay, caller, method, immediately, args, coverBefore) {
            if (immediately) {
                if (LwgTimer.onOff) {
                    method();
                }
            }
            Laya.timer.frameLoop(delay, caller, () => {
                if (LwgTimer.onOff) {
                    method();
                }
            }, args, coverBefore);
        }
        LwgTimer.frameLoop = frameLoop;
        function frameRandomLoop(delay1, delay2, caller, method, immediately, args, coverBefore) {
            if (immediately) {
                if (LwgTimer.onOff) {
                    method();
                }
            }
            var func = () => {
                let delay = LwgTools.Num.randomOneInt(delay1, delay2);
                Laya.timer.frameOnce(delay, caller, () => {
                    if (LwgTimer.onOff) {
                        method();
                        func();
                    }
                }, args, coverBefore);
            };
            func();
        }
        LwgTimer.frameRandomLoop = frameRandomLoop;
        function frameNumLoop(delay, num, caller, method, methodguideCompelet, immediately, args, coverBefore) {
            immediately && LwgTimer.onOff && method();
            if (num <= 0) {
                return;
            }
            let num0 = 0;
            var func = () => {
                if (LwgTimer.onOff) {
                    num0++;
                    if (num0 >= num) {
                        method();
                        if (methodguideCompelet) {
                            methodguideCompelet();
                        }
                        Laya.timer.clear(caller, func);
                    }
                    else {
                        method();
                    }
                }
            };
            Laya.timer.frameLoop(delay, caller, func, args, coverBefore);
        }
        LwgTimer.frameNumLoop = frameNumLoop;
        function numRandomLoop(delay1, delay2, num, caller, method, methodguideCompelet, immediately, args, coverBefore) {
            immediately && LwgTimer.onOff && method();
            if (num <= 0) {
                return;
            }
            let num0 = 0;
            var func = () => {
                let delay = LwgTools.Num.randomOneInt(delay1, delay2);
                Laya.timer.frameOnce(delay, caller, () => {
                    if (LwgTimer.onOff) {
                        num0++;
                        if (num0 >= num) {
                            method();
                            methodguideCompelet();
                        }
                        else {
                            method();
                            func();
                        }
                    }
                }, args, coverBefore);
            };
            func();
        }
        LwgTimer.numRandomLoop = numRandomLoop;
        function frameNumRandomLoop(delay1, delay2, num, caller, method, methodguideCompelet, immediately, args, coverBefore) {
            LwgTimer.onOff && immediately && method();
            if (num === 0) {
                return;
            }
            let num0 = 0;
            var func = () => {
                let delay = LwgTools.Num.randomOneInt(delay1, delay2);
                Laya.timer.frameOnce(delay, caller, () => {
                    if (LwgTimer.onOff) {
                        num0++;
                        if (num0 >= num) {
                            method();
                            methodguideCompelet && methodguideCompelet();
                        }
                        else {
                            method();
                            func();
                        }
                    }
                }, args, coverBefore);
            };
            func();
        }
        LwgTimer.frameNumRandomLoop = frameNumRandomLoop;
        function frameOnce(delay, caller, afterMethod, beforeMethod, args, coverBefore) {
            LwgTimer.onOff && beforeMethod && beforeMethod();
            Laya.timer.frameOnce(delay, caller, () => {
                LwgTimer.onOff && afterMethod && afterMethod();
            }, args, coverBefore);
        }
        LwgTimer.frameOnce = frameOnce;
        function frameNumOnce(delay, num, caller, afterMethod, beforeMethod, args, coverBefore) {
            for (let index = 0; index < num; index++) {
                LwgTimer.onOff && beforeMethod && beforeMethod();
                Laya.timer.frameOnce(delay, caller, () => {
                    LwgTimer.onOff && afterMethod && afterMethod();
                }, args, coverBefore);
            }
        }
        LwgTimer.frameNumOnce = frameNumOnce;
        function loop(delay, caller, method, immediately, args, coverBefore) {
            LwgTimer.onOff && immediately && method && method();
            Laya.timer.loop(delay, caller, () => {
                if (LwgTimer.onOff) {
                    method();
                }
            }, args, coverBefore);
        }
        LwgTimer.loop = loop;
        function randomLoop(delay1, delay2, caller, method, immediately, args, coverBefore) {
            LwgTimer.onOff && immediately && method && method();
            var func = () => {
                let delay = LwgTools.Num.randomOneInt(delay1, delay2);
                Laya.timer.once(delay, caller, () => {
                    if (LwgTimer.onOff) {
                        method();
                        func();
                    }
                }, args, coverBefore);
            };
            func();
        }
        LwgTimer.randomLoop = randomLoop;
        function numLoop(delay, num, caller, stepCb, compeletCb, immediately, args, coverBefore) {
            LwgTimer.onOff && immediately && stepCb && stepCb();
            let num0 = 0;
            var func = () => {
                if (LwgTimer.onOff) {
                    num0++;
                    if (num0 > num) {
                        stepCb();
                        compeletCb && compeletCb();
                        Laya.timer.clear(caller, func);
                    }
                    else {
                        stepCb();
                    }
                }
            };
            Laya.timer.loop(delay, caller, func, args, coverBefore);
        }
        LwgTimer.numLoop = numLoop;
        function once(delay, caller, afterMethod, beforeMethod, args, coverBefore) {
            LwgTimer.onOff && beforeMethod && beforeMethod();
            Laya.timer.once(delay, caller, () => {
                LwgTimer.onOff && afterMethod && afterMethod();
            }, args, coverBefore);
        }
        LwgTimer.once = once;
    })(LwgTimer || (LwgTimer = {}));
    var LwgAdaptive;
    (function (LwgAdaptive) {
        class Init {
            constructor(_width, _height) {
                LwgAdaptive.width = _width;
                LwgAdaptive.height = _height;
            }
            get LwgAdaptive() {
                return 'LwgAdaptive';
            }
        }
        LwgAdaptive.Init = Init;
        LwgAdaptive.width = 720;
        LwgAdaptive.height = 1280;
        LwgAdaptive.Use = {
            get value() {
                return this['Adaptive/value'] ? this['Adaptive/value'] : null;
            },
            set value(val) {
                this['Adaptive/value'] = val;
            }
        };
        function stageWidth(arr) {
            for (let index = 0; index < arr.length; index++) {
                const element = arr[index];
                if (element.pivotX == 0 && element.width) {
                    element.x = element.x / LwgAdaptive.Use.value[0] * Laya.stage.width + element.width / 2;
                }
                else {
                    element.x = element.x / LwgAdaptive.Use.value[0] * Laya.stage.width;
                }
            }
        }
        LwgAdaptive.stageWidth = stageWidth;
        function stageHeight(arr) {
            for (let index = 0; index < arr.length; index++) {
                const element = arr[index];
                if (element.pivotY == 0 && element.height) {
                    element.y = element.y / LwgAdaptive.Use.value[1] * element.scaleX * Laya.stage.height + element.height / 2;
                }
                else {
                    element.y = element.y / LwgAdaptive.Use.value[1] * element.scaleX * Laya.stage.height;
                }
            }
        }
        LwgAdaptive.stageHeight = stageHeight;
        function center(arr, target) {
            for (let index = 0; index < arr.length; index++) {
                const element = arr[index];
                if (element.width > 0) {
                    element.x = target.width / 2 - (element.width / 2 - element.pivotX) * element.scaleX;
                }
                else {
                    element.x = target.width / 2;
                }
                if (element.height > 0) {
                    element.y = target.height / 2 - (element.height / 2 - element.pivotY) * element.scaleY;
                }
                else {
                    element.y = target.height / 2;
                }
            }
        }
        LwgAdaptive.center = center;
    })(LwgAdaptive || (LwgAdaptive = {}));
    var LwgStorage;
    (function (LwgStorage) {
        class admin {
            removeSelf() { }
            func() { }
        }
        class TpNumVariable extends admin {
        }
        LwgStorage.TpNumVariable = TpNumVariable;
        class TpStrVariable extends admin {
        }
        LwgStorage.TpStrVariable = TpStrVariable;
        class TpBoolVariable extends admin {
        }
        LwgStorage.TpBoolVariable = TpBoolVariable;
        class TpArrayVariable extends admin {
        }
        LwgStorage.TpArrayVariable = TpArrayVariable;
        class TpArrayArrVariable extends admin {
        }
        LwgStorage.TpArrayArrVariable = TpArrayArrVariable;
        class Object extends admin {
        }
        LwgStorage.Object = Object;
        function number(name, _func, initial) {
            if (!this[`_num${name}`]) {
                const obj = {
                    get value() {
                        if (Laya.LocalStorage.getItem(name)) {
                            return Number(Laya.LocalStorage.getItem(name));
                        }
                        else {
                            initial = initial ? initial : 0;
                            Laya.LocalStorage.setItem(name, initial.toString());
                            return initial;
                        }
                    },
                    set value(data) {
                        Laya.LocalStorage.setItem(name, data.toString());
                        this['func']();
                    },
                    removeSelf() {
                        Laya.LocalStorage.removeItem(name);
                    },
                    func() {
                        this['_func'] && this['_func']();
                    }
                };
                this[`_num${name}`] = obj;
            }
            if (_func) {
                this[`_num${name}`]['_func'] = _func;
            }
            return this[`_num${name}`];
        }
        LwgStorage.number = number;
        function string(name, _func, initial) {
            if (!this[`_str${name}`]) {
                this[`_str${name}`] = {
                    get value() {
                        if (Laya.LocalStorage.getItem(name)) {
                            return Laya.LocalStorage.getItem(name);
                        }
                        else {
                            initial = initial ? initial : null;
                            Laya.LocalStorage.setItem(name, initial.toString());
                            return initial;
                        }
                    },
                    set value(data) {
                        Laya.LocalStorage.setItem(name, data.toString());
                        this['func']();
                    },
                    removeSelf() {
                        Laya.LocalStorage.removeItem(name);
                    },
                    func() {
                        this['_func'] && this['_func']();
                    }
                };
            }
            if (_func) {
                this[`_str${name}`]['_func'] = _func;
            }
            return this[`_str${name}`];
        }
        LwgStorage.string = string;
        function bool(name, _func, initial) {
            if (!this[`_bool${name}`]) {
                this[`_bool${name}`] = {
                    get value() {
                        if (Laya.LocalStorage.getItem(name)) {
                            if (Laya.LocalStorage.getItem(name) === "false") {
                                return false;
                            }
                            else if (Laya.LocalStorage.getItem(name) === "true") {
                                return true;
                            }
                        }
                        else {
                            if (initial) {
                                Laya.LocalStorage.setItem(name, "true");
                            }
                            else {
                                Laya.LocalStorage.setItem(name, "false");
                            }
                            this['func']();
                            return initial;
                        }
                    },
                    set value(bool) {
                        bool = bool ? "true" : "false";
                        Laya.LocalStorage.setItem(name, bool.toString());
                    },
                    removeSelf() {
                        Laya.LocalStorage.removeItem(name);
                    },
                    func() {
                        _func && _func();
                    }
                };
            }
            if (_func) {
                this[`_bool${name}`]['_func'] = _func;
            }
            return this[`_bool${name}`];
        }
        LwgStorage.bool = bool;
        function array(name, _func, initial) {
            if (!this[`_array${name}`]) {
                this[`_array${name}`] = {
                    get value() {
                        try {
                            let data = Laya.LocalStorage.getJSON(name);
                            if (data) {
                                return JSON.parse(data);
                            }
                            else {
                                initial = initial ? initial : [];
                                Laya.LocalStorage.setJSON(name, JSON.stringify(initial));
                                this['func']();
                                return initial;
                            }
                        }
                        catch (error) {
                            return [];
                        }
                    },
                    set value(array) {
                        Laya.LocalStorage.setJSON(name, JSON.stringify(array));
                    },
                    removeSelf() {
                        Laya.LocalStorage.removeItem(name);
                    },
                    func() {
                        _func && _func();
                    }
                };
            }
            if (_func) {
                this[`_array${name}`]['_func'] = _func;
            }
            return this[`_array${name}`];
        }
        LwgStorage.array = array;
        function object(name, _func, initial) {
            if (!this[`_obj${name}`]) {
                this[`_obj${name}`] = {
                    get value() {
                        try {
                            let data = Laya.LocalStorage.getJSON(name);
                            if (data) {
                                return JSON.parse(data);
                            }
                            else {
                                initial = initial ? initial : {};
                                Laya.LocalStorage.setJSON(name, JSON.stringify(initial));
                                this['func']();
                                return initial;
                            }
                        }
                        catch (error) {
                            return {};
                        }
                    },
                    set value(array) {
                        Laya.LocalStorage.setJSON(name, JSON.stringify(array));
                    },
                    removeSelf() {
                        Laya.LocalStorage.removeItem(name);
                    },
                    func() {
                        _func && _func();
                    }
                };
            }
            if (_func) {
                this[`_obj${name}`]['_func'] = _func;
            }
            return this[`_obj${name}`];
        }
        LwgStorage.object = object;
        function arrayArray(name, _func, initial) {
            if (!this[`arrayArr${name}`]) {
                this[`arrayArr${name}`] = {
                    get value() {
                        try {
                            let data = Laya.LocalStorage.getJSON(name);
                            if (data) {
                                return JSON.parse(data);
                                ;
                            }
                            else {
                                initial = initial ? initial : [];
                                Laya.LocalStorage.setItem(name, initial.toString());
                                return initial;
                            }
                        }
                        catch (error) {
                            return [];
                        }
                    },
                    set value(array) {
                        Laya.LocalStorage.setJSON(name, JSON.stringify(array));
                        this['func']();
                    },
                    removeSelf() {
                        Laya.LocalStorage.removeItem(name);
                    },
                    func() {
                        _func && _func();
                    }
                };
            }
            if (_func) {
                this[`arrayArr${name}`]['_func'] = _func;
            }
            return this[`arrayArr${name}`];
        }
        LwgStorage.arrayArray = arrayArray;
    })(LwgStorage || (LwgStorage = {}));
    var LwgData;
    (function (LwgData) {
        class BaseTable {
            constructor(arr) {
                this.arr = [];
                this.arr = arr;
            }
            getObjByID(ID) {
                for (const key in this.arr) {
                    if (Object.prototype.hasOwnProperty.call(this.arr, key)) {
                        const element = this.arr[key];
                        if (element.ID == ID) {
                            return element;
                        }
                    }
                }
            }
            eachDataArr(eachCb, endCb) {
                for (let index = 0; index < this.arr.length; index++) {
                    const element = this.arr[index];
                    eachCb && eachCb(element, index);
                    if (index == this.arr.length - 1) {
                        endCb && endCb();
                    }
                }
            }
            getObjArrByProNameAndVal(proName, val) {
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
            getObjFirstByProNameAndVal(proName, val) {
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
        LwgData.BaseTable = BaseTable;
        class ItmeTable extends BaseTable {
            constructor(arr) {
                super(arr);
            }
            getItemArrObjByID(ID) {
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
                            const item = itemElement[j];
                            if (item) {
                                const number = numberElement[j];
                                const weight = weightElement[j];
                                itemArr.push(item);
                                numberArr.push(number);
                                weightArr.push(weight);
                            }
                        }
                    }
                    else {
                        break;
                    }
                }
                const objArr = {
                    itemArr: itemArr,
                    numberArr: numberArr,
                    weightArr: weightArr,
                };
                return objArr;
            }
            ranSuperpositionWeight(ID) {
                const objArr = this.getItemArrObjByID(ID);
                let sumWeight = 0;
                for (let index = 0; index < objArr.weightArr.length; index++) {
                    sumWeight += objArr.weightArr[index];
                }
                let index0 = 0;
                const ran = Math.floor(Math.random() * sumWeight);
                let sumWeight1;
                let sumWeight2;
                for (let index = 0; index < objArr.weightArr.length; index++) {
                    if (index == 0) {
                        if (0 < ran && ran < objArr.weightArr[index]) {
                            index0 = index;
                            break;
                        }
                    }
                    else {
                        sumWeight1 = 0;
                        for (let i = 0; i < index; i++) {
                            sumWeight1 += objArr.weightArr[i];
                        }
                        sumWeight2 = 0;
                        for (let j = 0; j < index + 1; j++) {
                            sumWeight2 += objArr.weightArr[j];
                        }
                        if (ran >= sumWeight1 && ran < sumWeight2) {
                            index0 = index;
                            break;
                        }
                    }
                }
                const obj = {
                    index: index0,
                    ID: objArr.itemArr[index0],
                    number: objArr.numberArr[index0],
                    weight: objArr.weightArr[index0],
                };
                return obj;
            }
            getItemGroupObjByIndex(ID, index) {
                const obj = this.getItemArrObjByID(ID);
                const obj0 = {
                    index: index,
                    ID: obj.itemArr[index],
                    number: obj.numberArr[index],
                    weight: obj.weightArr[index],
                };
                return obj0;
            }
            getRanItemIdArrByID(ID, index) {
                const obj = this.getItemArrObjByID(ID);
                const arr = [];
                for (let index = 0; index < obj.weightArr.length; index++) {
                    const element = obj.itemArr[index];
                    Math.floor((Math.random() * 100));
                    element;
                }
                return;
            }
        }
        LwgData.ItmeTable = ItmeTable;
        class TasKTable {
        }
        LwgData.TasKTable = TasKTable;
        class EntiretyTable extends BaseTable {
            constructor(tableName, tableArr = null, localStorage = true, addCompare = true, lastVtableName, lastProArr) {
                super(tableArr);
                this.tableName = 'table';
                this.lastArr = [];
                this.localStorage = false;
                if (tableName) {
                    this.tableName = tableName;
                    if (localStorage) {
                        this.localStorage = localStorage;
                        if (addCompare) {
                            this.arr = compareMerge(tableArr, tableName, 'ID');
                        }
                        else {
                            this.arr = compare(tableArr, tableName);
                        }
                        if (lastVtableName) {
                            if (lastProArr) {
                                this.compareLastInforByPro(lastVtableName, lastProArr);
                            }
                            else {
                                this.compareLastDefaultPro(lastVtableName);
                            }
                        }
                    }
                }
            }
            refreshAndStorage() {
                this.localStorage && Laya.LocalStorage.setJSON(this.tableName, JSON.stringify(this.arr));
                this.list && this.list.refresh();
            }
            compareLastInforByPro(lastVtableName, proArr) {
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
            compareLastDefaultPro(lastVtableName) {
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
            getLastVersion(lastVtableName) {
                let dataArr = [];
                try {
                    if (Laya.LocalStorage.getJSON(lastVtableName)) {
                        dataArr = JSON.parse(Laya.LocalStorage.getJSON(lastVtableName));
                    }
                }
                catch (error) {
                    console.log(lastVtableName + '前版本不存在！');
                }
                return dataArr;
            }
            getPitchIndexInArr() {
                for (let index = 0; index < this.arr.length; index++) {
                    const element = this.arr[index];
                    if (element.name === this.pitchName) {
                        return index;
                    }
                }
            }
            getPitchIndexInListArr() {
                if (this.list) {
                    for (let index = 0; index < this.list.array.length; index++) {
                        const element = this.list.array[index];
                        if (element.name === this.pitchName) {
                            return index;
                        }
                    }
                }
            }
            listTweenToPitch(time, func) {
                const index = this.getPitchIndexInListArr();
                index && this.list.tweenTo(index, time, Laya.Handler.create(this, () => {
                    func && func();
                }));
            }
            listTweenToDiffIndexByPitch(diffIndex, time, func) {
                const index = this.getPitchIndexInListArr();
                index && this.list.tweenTo(index + diffIndex, time, Laya.Handler.create(this, () => {
                    func && func();
                }));
            }
            listScrollToFirstByLast() {
                const index = this.list.array.length - 1;
                index && this.list.scrollTo(index);
            }
            getFirstObjByPro(proName, value) {
                for (const key in this.arr) {
                    if (Object.prototype.hasOwnProperty.call(this.arr, key)) {
                        const element = this.arr[key];
                        if (element[proName] === value) {
                            return element;
                        }
                    }
                }
            }
            getObjByName(name) {
                for (const key in this.arr) {
                    if (Object.prototype.hasOwnProperty.call(this.arr, key)) {
                        const element = this.arr[key];
                        if (element.name == name) {
                            return element;
                        }
                    }
                }
            }
            setObjguideCompeletByID(ID) {
                for (const key in this.arr) {
                    if (Object.prototype.hasOwnProperty.call(this.arr, key)) {
                        const element = this.arr[key];
                        if (element.ID === ID) {
                            element.complete = true;
                            break;
                        }
                    }
                }
                this.refreshAndStorage();
            }
            getFirstObjByLevel(level) {
                for (const key in this.arr) {
                    if (Object.prototype.hasOwnProperty.call(this.arr, key)) {
                        const element = this.arr[key];
                        if (element.level == level) {
                            return element;
                        }
                    }
                }
            }
            getNameByID(ID) {
                for (let index = 0; index < this.arr.length; index++) {
                    const element = this.arr[index];
                    if (element.ID === ID) {
                        return element.name;
                    }
                }
            }
            getObjArrByLevel(level) {
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
            setAllComplete() {
                for (let index = 0; index < this.arr.length; index++) {
                    const element = this.arr[index];
                    element.complete = true;
                }
                this.refreshAndStorage();
            }
            setAllCompleteDelay(delay, eachFrontFunc, eachEndFunc, comFunc) {
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
                    });
                }
            }
            addProValueForAll(pro, valueFunc) {
                for (let index = 0; index < this.arr.length; index++) {
                    const element = this.arr[index];
                    element[pro] += valueFunc();
                }
                this.refreshAndStorage();
            }
            randomOneObjByPro(proName, value) {
                let arr = [];
                for (const key in this.arr) {
                    if (Object.prototype.hasOwnProperty.call(this.arr, key)) {
                        const element = this.arr[key];
                        if (value) {
                            if (element[proName] && element[proName] == value) {
                                arr.push(element);
                            }
                        }
                        else {
                            if (element[proName]) {
                                arr.push(element);
                            }
                        }
                    }
                }
                if (arr.length == 0) {
                    return null;
                }
                else {
                    let any = LwgTools.Arr.randomGetOne(arr);
                    return any;
                }
            }
            randomOneObj() {
                const index = LwgTools.Num.randomOneBySection(0, this.arr.length - 1, true);
                return this.arr[index];
            }
            randomCountObj(count) {
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
            getArrByguideCompelet() {
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
            getArrByNoguideCompelet() {
                let arr = [];
                for (const key in this.arr) {
                    if (Object.prototype.hasOwnProperty.call(this.arr, key)) {
                        const element = this.arr[key];
                        if (!element.complete) {
                            arr.push(element);
                        }
                    }
                }
                return arr;
            }
            getArrByProperty(proName, value) {
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
            getArrByNoProperty(proName, value) {
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
            getRanObjByNoCompelet() {
                let arr0 = LwgTools.ObjArray.arrCopy(this.arr);
                if (arr0.length > 0) {
                    const arr1 = LwgTools.Arr.randomGetOut(arr0, arr0.length);
                    for (let index = 0; index < arr1.length; index++) {
                        const element = arr1[index];
                        if (!element.complete) {
                            return element;
                        }
                    }
                }
            }
            setObjCompeletByID(ID) {
                for (const key in this.arr) {
                    if (Object.prototype.hasOwnProperty.call(this.arr, key)) {
                        const element = this.arr[key];
                        if (element.ID == ID) {
                            element.complete = true;
                            break;
                        }
                    }
                }
                this.refreshAndStorage();
            }
            checkAllguideCompelet() {
                let bool = true;
                for (let index = 0; index < this.arr.length; index++) {
                    const element = this.arr[index];
                    if (!element.complete) {
                        bool = false;
                        return bool;
                    }
                }
                return bool;
            }
            checkguideCompeletByID(ID) {
                for (let index = 0; index < this.arr.length; index++) {
                    const element = this.arr[index];
                    if (element.ID == ID && element.complete) {
                        return true;
                    }
                }
            }
            checkCompeletByID(ID) {
                for (let index = 0; index < this.arr.length; index++) {
                    const element = this.arr[index];
                    if (element.ID == ID && element.complete) {
                        return true;
                    }
                }
            }
            getRanObjByNoguideCompelet() {
                let arr0 = LwgTools.ObjArray.arrCopy(this.arr);
                if (arr0.length > 0) {
                    const arr1 = LwgTools.Arr.randomGetOut(arr0, arr0.length);
                    for (let index = 0; index < arr1.length; index++) {
                        const element = arr1[index];
                        if (!element.complete) {
                            return element;
                        }
                    }
                }
            }
            eachArrByguideCompelet(func) {
                for (let index = 0; index < this.arr.length; index++) {
                    const element = this.arr[index];
                    if (element.complete) {
                        func && func(element);
                    }
                }
            }
            eachArrByNoguideCompelet(func) {
                for (let index = 0; index < this.arr.length; index++) {
                    const element = this.arr[index];
                    if (!element.complete) {
                        func && func(element);
                    }
                }
            }
            get pitchName() {
                if (!this[`${this.tableName}/pitchName`]) {
                    if (this.localStorage) {
                        return Laya.LocalStorage.getItem(`${this.tableName}/pitchName`) ? Laya.LocalStorage.getItem(`${this.tableName}/pitchName`) : null;
                    }
                    else {
                        return this[`${this.tableName}/pitchName`] = null;
                    }
                }
                else {
                    return this[`${this.tableName}/pitchName`];
                }
            }
            ;
            set pitchName(str) {
                this.lastPitchName = this[`${this.tableName}/pitchName`];
                this[`${this.tableName}/pitchName`] = str;
                if (this.localStorage) {
                    Laya.LocalStorage.setItem(`${this.tableName}/pitchName`, str.toString());
                }
                this.refreshAndStorage();
            }
            ;
            get lastPitchName() {
                if (!this[`${this.tableName}/lastPitchName`]) {
                    if (this.localStorage) {
                        return Laya.LocalStorage.getItem(`${this.tableName}/lastPitchName`) ? Laya.LocalStorage.getItem(`${this.tableName}/lastPitchName`) : null;
                    }
                    else {
                        return this[`${this.tableName}/lastPitchName`] = null;
                    }
                }
                else {
                    return this[`${this.tableName}/lastPitchName`];
                }
            }
            set lastPitchName(str) {
                this[`${this.tableName}/lastPitchName`] = str;
                if (this.localStorage && str) {
                    Laya.LocalStorage.setItem(`${this.tableName}/lastPitchName`, str.toString());
                }
            }
            ;
            addObj(obj, storage = true) {
                let _obj = LwgTools.ObjArray.objCopy(obj);
                for (let index = 0; index < this.arr.length; index++) {
                    const element = this.arr[index];
                    if (element.name === _obj.name) {
                        this.arr[index] == _obj;
                    }
                }
                storage && this.refreshAndStorage();
            }
            addObjArr(objArr, storage = true) {
                const _objArr = LwgTools.ObjArray.arrCopy(objArr);
                for (let i = 0; i < _objArr.length; i++) {
                    const obj = _objArr[i];
                    for (let j = 0; j < this.arr.length; j++) {
                        const element = this.arr[j];
                        if (obj && obj.ID === element.ID) {
                            this.arr[j] = obj;
                            _objArr.splice(i, 1);
                            i--;
                            continue;
                        }
                    }
                }
                for (let k = 0; k < _objArr.length; k++) {
                    const element = _objArr[k];
                    this.arr.push(element);
                }
                storage && this.refreshAndStorage();
            }
            sortByProperty(pro, indexPro, inverted, storage = true) {
                LwgTools.ObjArray.sortByProperty(this.arr, pro);
                if (inverted == undefined || inverted) {
                    for (let index = this.arr.length - 1; index >= 0; index--) {
                        const element = this.arr[index];
                        element[indexPro] = this.arr.length - index;
                    }
                    this.arr.reverse();
                }
                else {
                    for (let index = 0; index < this.arr.length; index++) {
                        const element = this.arr[index];
                        element[indexPro] = index + 1;
                    }
                }
                storage && this.refreshAndStorage();
            }
        }
        LwgData.EntiretyTable = EntiretyTable;
        function compare(tableArr, storageName) {
            try {
                Laya.LocalStorage.getJSON(storageName);
            }
            catch (error) {
                Laya.LocalStorage.setJSON(storageName, JSON.stringify(tableArr));
                return tableArr;
            }
            let storageArr;
            if (Laya.LocalStorage.getJSON(storageName)) {
                storageArr = JSON.parse(Laya.LocalStorage.getJSON(storageName));
                if (!tableArr || !storageArr) {
                    return storageArr;
                }
            }
            else {
                storageArr = tableArr;
            }
            Laya.LocalStorage.setJSON(storageName, JSON.stringify(storageArr));
            return storageArr;
        }
        function compareMerge(tableArr, storageName, proName) {
            try {
                Laya.LocalStorage.getJSON(storageName);
            }
            catch (error) {
                Laya.LocalStorage.setJSON(storageName, JSON.stringify(tableArr));
                return tableArr;
            }
            let storageArr;
            if (Laya.LocalStorage.getJSON(storageName)) {
                storageArr = JSON.parse(Laya.LocalStorage.getJSON(storageName));
                if (!tableArr || !storageArr) {
                    return storageArr;
                }
                const diffArray = LwgTools.ObjArray.getDiffProByTwoArr(tableArr, storageArr, proName);
                console.log(`${storageName}新添加对象：`, diffArray);
                LwgTools.Arr.addToArray(storageArr, diffArray);
                LwgTools.ObjArray.mergeObjArr1ToObjArr2ByPro(tableArr, storageArr, proName);
            }
            else {
                storageArr = tableArr;
            }
            Laya.LocalStorage.setJSON(storageName, JSON.stringify(storageArr));
            return storageArr;
        }
    })(LwgData || (LwgData = {}));
    var LwgColor;
    (function (LwgColor) {
        function RGBToHexString(r, g, b) {
            return '#' + ("00000" + (r << 16 | g << 8 | b).toString(16)).slice(-6);
        }
        LwgColor.RGBToHexString = RGBToHexString;
        function hexStringToRGB(str) {
            let r, g, b;
            r = (0xff << 16 & str) >> 16;
            g = (0xff << 8 & str) >> 8;
            b = 0xff & str;
            return [r, g, b];
        }
        LwgColor.hexStringToRGB = hexStringToRGB;
        function colour(node, RGBA, vanishtime) {
            let cf = new Laya.ColorFilter();
            node.blendMode = 'null';
            if (!RGBA) {
                cf.color(LwgTools.Num.randomOneBySection(255, 100, true), LwgTools.Num.randomOneBySection(255, 100, true), LwgTools.Num.randomOneBySection(255, 100, true), 1);
            }
            else {
                cf.color(RGBA[0], RGBA[1], RGBA[2], RGBA[3]);
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
                });
            }
            return cf;
        }
        LwgColor.colour = colour;
        function changeOnce(node, RGBA, time, func) {
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
                    if (speedA !== 0)
                        A += speedA;
                    if (R >= RGBA[0]) {
                        caller.add = false;
                    }
                }
                else {
                    R -= speedR;
                    G -= speedG;
                    B -= speedB;
                    if (speedA !== 0)
                        A -= speedA;
                    if (R <= 0) {
                        if (func) {
                            func();
                        }
                        Laya.timer.clearAll(caller);
                    }
                }
                cf.color(R, G, B, A);
                node.filters = [cf];
            });
        }
        LwgColor.changeOnce = changeOnce;
        function changeConstant(node, RGBA1, RGBA2, frameTime) {
            let cf;
            let RGBA0 = [];
            if (!node.filters) {
                cf = new Laya.ColorFilter();
                cf.color(RGBA1[0], RGBA1[1], RGBA1[2], RGBA1[3] ? RGBA1[3] : 1);
                RGBA0 = [RGBA1[0], RGBA1[1], RGBA1[2], RGBA1[3] ? RGBA1[3] : 1];
                node.filters = [cf];
            }
            else {
                cf = node.filters[0];
                RGBA0 = [node.filters[0]['_alpha'][0], node.filters[0]['_alpha'][1], node.filters[0]['_alpha'][2], node.filters[0]['_alpha'][3] ? node.filters[0]['_alpha'][3] : 1];
            }
            let RGBA = [LwgTools.Num.randomCountBySection(RGBA1[0], RGBA2[0])[0], LwgTools.Num.randomCountBySection(RGBA1[1], RGBA2[1])[0], LwgTools.Num.randomCountBySection(RGBA1[2], RGBA2[2])[0], LwgTools.Num.randomCountBySection(RGBA1[3] ? RGBA1[3] : 1, RGBA2[3] ? RGBA2[3] : 1)[0]];
            let speedR = (RGBA[0] - RGBA0[0]) / frameTime;
            let speedG = (RGBA[1] - RGBA0[1]) / frameTime;
            let speedB = (RGBA[2] - RGBA0[2]) / frameTime;
            let speedA = 0;
            if (RGBA[3]) {
                speedA = (RGBA[3] - RGBA0[3]) / frameTime;
            }
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
                }
                else {
                    Laya.timer.clearAll(changeCaller);
                }
                cf.color(RGBA0[0], RGBA0[1], RGBA0[2], RGBA0[3]);
                node.filters = [cf];
            });
        }
        LwgColor.changeConstant = changeConstant;
    })(LwgColor || (LwgColor = {}));
    var LwgEff3D;
    (function (LwgEff3D) {
        LwgEff3D.tex2D = {
            爱心2: {
                url: 'Lwg/Effects/3D/img_aixin2.png',
                texture2D: null,
                name: '爱心2',
            },
            星星8: {
                url: 'Lwg/Effects/3D/img_star8.png',
                texture2D: null,
                name: '星星8',
            },
            星星5: {
                url: 'Lwg/Effects/3D/img_star5.png',
                texture2D: null,
                name: '星星5',
            },
            圆形发光: {
                url: 'Lwg/Effects/3D/img_yuanfaguang.png',
                texture2D: null,
                name: '圆形发光',
            }
        };
        let Particle;
        (function (Particle) {
            class Caller {
                constructor(_time, _appear, _move, _vinish, _frameFuncInterval, _frameFunc, _endFunc) {
                    this.time = 0;
                    this.appear = true;
                    this.move = false;
                    this.vinish = false;
                    this.frame = {
                        interval: 1,
                        func: null,
                    };
                    this.end = false;
                    this.stateType = {
                        appear: 'appear',
                        move: 'move',
                        vinish: 'vinish',
                        end: 'end',
                    };
                    this._positionByARY_FA = 0;
                    this._positionARXY_FR = 0;
                    this._positionByTimeRecord = 0;
                    this.frame.interval = _frameFuncInterval ? _frameFuncInterval : 1;
                    this.frame.func = _frameFunc ? _frameFunc : null;
                    this.endFunc = _endFunc ? _endFunc : null;
                    this.time = _time ? _time : 0;
                    this.appear = _appear ? _appear : true;
                    this.move = _move ? _move : false;
                    this.vinish = _vinish ? _vinish : false;
                    LwgTimer.frameLoop(1, this, () => {
                        this.time++;
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
                    });
                }
                get box() {
                    if (!this['_box']) {
                        console.log('粒子没有初始化！');
                    }
                    return this['_box'];
                }
                set box(_box) {
                    this['_box'] = _box;
                }
                stateSwitch(str) {
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
                clear() {
                    if (this.end) {
                        this.mat.destroy();
                        this.box.meshFilter.destroy();
                        this.box.destroy();
                        Laya.timer.clearAll(this);
                    }
                }
                boxInit(parent, position, sectionSize, sectionRotation, texArr, colorRGBA) {
                    const scaleX = sectionSize ? LwgTools.Num.randomOneBySection(sectionSize[0][0], sectionSize[1][0]) : LwgTools.Num.randomOneBySection(0.06, 0.08);
                    const scaleY = sectionSize ? LwgTools.Num.randomOneBySection(sectionSize[0][1], sectionSize[1][1]) : LwgTools.Num.randomOneBySection(0.06, 0.08);
                    const scaleZ = sectionSize ? LwgTools.Num.randomOneBySection(sectionSize[0][2], sectionSize[1][2]) : LwgTools.Num.randomOneBySection(0.06, 0.08);
                    this.box = parent.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(scaleX, scaleY, scaleZ)));
                    if (position) {
                        this.box.transform.position = new Laya.Vector3(position[0], position[1], position[2]);
                    }
                    else {
                        this.box.transform.position = new Laya.Vector3(0, 0, 0);
                    }
                    this.fPosition = new Laya.Vector3(this.box.transform.position.x, this.box.transform.position.y, this.box.transform.position.z);
                    this.box.transform.localRotationEulerX = sectionRotation ? LwgTools.Num.randomOneBySection(sectionRotation[0][0], sectionRotation[1][0]) : LwgTools.Num.randomOneBySection(0, 360);
                    this.box.transform.localRotationEulerX = sectionRotation ? LwgTools.Num.randomOneBySection(sectionRotation[0][1], sectionRotation[1][1]) : LwgTools.Num.randomOneBySection(0, 360);
                    this.box.transform.localRotationEulerX = sectionRotation ? LwgTools.Num.randomOneBySection(sectionRotation[0][2], sectionRotation[1][2]) : LwgTools.Num.randomOneBySection(0, 360);
                    this.fEuler = new Laya.Vector3(this.box.transform.localRotationEulerX, this.box.transform.localRotationEulerY, this.box.transform.localRotationEulerZ);
                    const mat = this.box.meshRenderer.material = new Laya.BlinnPhongMaterial();
                    mat.albedoTexture = texArr ? LwgTools.Arr.randomGetOne(texArr) : LwgEff3D.tex2D.圆形发光.texture2D;
                    mat.renderMode = 2;
                    const R = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][0], colorRGBA[1][0]) : LwgTools.Num.randomOneBySection(0, 1);
                    const G = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][1], colorRGBA[1][1]) : LwgTools.Num.randomOneBySection(0, 1);
                    const B = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][2], colorRGBA[1][2]) : LwgTools.Num.randomOneBySection(0, 1);
                    const A = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][3], colorRGBA[1][3]) : LwgTools.Num.randomOneBySection(0, 1);
                    mat.albedoColor = new Laya.Vector4(R, G, B, A);
                    this.mat = mat;
                }
                get fPosition() {
                    return this['_fPosition'];
                }
                ;
                set fPosition(fP) {
                    this['_fPosition'] = fP;
                }
                get fEuler() {
                    return this['_fEuler'];
                }
                set fEuler(fE) {
                    this['_fEuler'] = fE;
                }
                get mat() {
                    return this.box.meshRenderer.material;
                }
                set mat(m) {
                    this.box.meshRenderer.material = m;
                }
                positionByARY(angleSpeed, radius, speedY, distance, stateSwitch) {
                    const pXZ = LwgTools.Point.getRoundPointOld(this._positionByARY_FA += angleSpeed, radius, new Laya.Point(this.fPosition.x, this.fPosition.z));
                    this.box.transform.position = new Laya.Vector3(pXZ.x, this.box.transform.position.y += speedY, pXZ.y);
                    if (this.box.transform.position.y - this.fPosition.y > distance) {
                        stateSwitch && stateSwitch();
                    }
                }
                positionARXY_R(angle, speedR, distance, stateSwitch) {
                    this._positionARXY_FR += speedR;
                    const point = LwgTools.Point.getRoundPointOld(angle, this._positionARXY_FR, new Laya.Point(0, 0));
                    this.box.transform.position = new Laya.Vector3(this.fPosition.x + point.x, this.fPosition.y + point.y, this.fPosition.z);
                    if (this._positionARXY_FR >= distance) {
                        stateSwitch && stateSwitch();
                    }
                }
                fadeAway(albedoColorASpeed, endNum = 0, stateSwitch) {
                    this.mat.albedoColorA -= albedoColorASpeed;
                    if (this.mat.albedoColorA <= endNum) {
                        this.mat.albedoColorA = endNum;
                        stateSwitch && stateSwitch();
                    }
                }
                fadeIn(albedoColorASpeed, endNum = 1, stateSwitch) {
                    this.mat.albedoColorA += albedoColorASpeed;
                    if (this.mat.albedoColorA >= endNum) {
                        this.mat.albedoColorA = endNum;
                        stateSwitch && stateSwitch();
                    }
                }
                positionByTime(posSpeed, time, stateSwitch) {
                    this._positionByTimeRecord++;
                    this.box.transform.position = new Laya.Vector3(this.box.transform.position.x += posSpeed[0], this.box.transform.position.y += posSpeed[1], this.box.transform.position.z += posSpeed[2]);
                    if (time && this._positionByTimeRecord > time) {
                        stateSwitch && stateSwitch();
                    }
                }
                scaleX(scaleSpeedX, endNum, stateSwitch) {
                    this.box.transform.localScaleX += scaleSpeedX;
                    if (endNum) {
                        if (scaleSpeedX >= 0) {
                            if (this.box.transform.localScaleX >= endNum) {
                                this.box.transform.localScaleX = endNum;
                                stateSwitch && stateSwitch();
                            }
                        }
                        else {
                            if (this.box.transform.localScaleX <= endNum) {
                                this.box.transform.localScaleX = endNum;
                                stateSwitch && stateSwitch();
                            }
                        }
                    }
                }
                scaleY(scaleSpeedY, endNum, stateSwitch) {
                    this.box.transform.localScaleY += scaleSpeedY;
                    if (endNum) {
                        if (scaleSpeedY >= 0) {
                            if (this.box.transform.localScaleY >= endNum) {
                                this.box.transform.localScaleY = endNum;
                                stateSwitch && stateSwitch();
                            }
                        }
                        else {
                            if (this.box.transform.localScaleY <= endNum) {
                                this.box.transform.localScaleY = endNum;
                                stateSwitch && stateSwitch();
                            }
                        }
                    }
                }
                scaleZ(scaleSpeedZ, endNum, stateSwitch) {
                    this.box.transform.localScaleZ += scaleSpeedZ;
                    if (endNum) {
                        if (scaleSpeedZ >= 0) {
                            if (this.box.transform.localScaleZ >= endNum) {
                                this.box.transform.localScaleZ = endNum;
                                stateSwitch && stateSwitch();
                            }
                        }
                        else {
                            if (this.box.transform.localScaleZ <= endNum) {
                                this.box.transform.localScaleZ = endNum;
                                stateSwitch && stateSwitch();
                            }
                        }
                    }
                }
                rotateX(rotateSpeedX, endNum, stateSwitch) {
                    this.box.transform.localRotationEulerX += rotateSpeedX;
                    if (endNum) {
                        if (rotateSpeedX >= 0) {
                            if (this.box.transform.localRotationEulerX >= endNum) {
                                this.box.transform.localRotationEulerX = endNum;
                                stateSwitch && stateSwitch();
                            }
                        }
                        else {
                            if (this.box.transform.localRotationEulerX <= endNum) {
                                this.box.transform.localRotationEulerX = endNum;
                                stateSwitch && stateSwitch();
                            }
                        }
                    }
                }
                rotateY(rotateSpeedY, endNum, stateSwitch) {
                    this.box.transform.localRotationEulerY += rotateSpeedY;
                    if (endNum) {
                        if (rotateSpeedY >= 0) {
                            if (this.box.transform.localRotationEulerY >= endNum) {
                                this.box.transform.localRotationEulerY = endNum;
                                stateSwitch && stateSwitch();
                            }
                        }
                        else {
                            if (this.box.transform.localRotationEulerY <= endNum) {
                                this.box.transform.localRotationEulerY = endNum;
                                stateSwitch && stateSwitch();
                            }
                        }
                    }
                }
                rotateZ(rotateSpeedZ, endNum, stateSwitch) {
                    this.box.transform.localRotationEulerZ += rotateSpeedZ;
                    if (endNum) {
                        if (rotateSpeedZ >= 0) {
                            if (this.box.transform.localRotationEulerZ >= endNum) {
                                this.box.transform.localRotationEulerZ = endNum;
                                stateSwitch && stateSwitch();
                            }
                        }
                        else {
                            if (this.box.transform.localRotationEulerZ <= endNum) {
                                this.box.transform.localRotationEulerZ = endNum;
                                stateSwitch && stateSwitch();
                            }
                        }
                    }
                }
                randomScopeByPosition(scopeSize) {
                    scopeSize = scopeSize ? scopeSize : [[0.1, 0.1, 0.1], [0.3, 0.3, 0.3]];
                    LwgTools.D3.randomScopeByPosition(this.box, scopeSize);
                }
                excludeZ() {
                    this.box.transform.localScaleZ = 0;
                }
                rotateTheZero() {
                    this.box.transform.localRotationEulerZ = 0;
                    this.box.transform.localRotationEulerX = 0;
                    this.box.transform.localRotationEulerY = 0;
                }
                scaleTheZero() {
                    this.box.transform.localRotationEulerZ = 0;
                    this.box.transform.localRotationEulerX = 0;
                    this.box.transform.localRotationEulerY = 0;
                }
            }
            Particle.Caller = Caller;
            function spiral(parent, position, sectionSize, sectionRotation, texArr, colorRGBA, distance, speedY, angleSpeed, radius) {
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
                };
                caller.vinishFunc = () => {
                    caller.fadeAway(0.15, 0, () => {
                        caller.stateSwitch('e');
                    });
                    caller.positionByTime([0, 0.002, 0]);
                };
                return caller;
            }
            Particle.spiral = spiral;
            function explode(parent, position, sectionSize, sectionRotation, texArr, colorRGBA, distance, speedR) {
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
                    });
                };
                caller.vinishFunc = () => {
                    caller.fadeAway(0.15, 0, () => {
                        caller.stateSwitch('e');
                    });
                };
                return;
            }
            Particle.explode = explode;
            function fade(parent, position, sectionSize, staytime, vainshASpeed, vainshSSpeed, sectionRotation, texArr, colorRGBA) {
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
                };
                caller.vinishFunc = () => {
                    caller.scaleX(_vainshSSpeed);
                    caller.fadeAway(_vainshASpeed, 0, () => {
                        caller.stateSwitch('e');
                    });
                };
                caller.everyFrameFunc = () => {
                    caller.box.transform.localScaleY = caller.box.transform.localScaleX;
                };
                return caller;
            }
            Particle.fade = fade;
            function starsShine(parent, position, scopeSize, scaleSpeed, maxScale, angelspeed, ASpeed, texArr, colorRGBA) {
                const caller = new Caller();
                caller.boxInit(parent, position, null, null, texArr ? texArr : [LwgEff3D.tex2D.星星5.texture2D], colorRGBA ? colorRGBA : [[15, 15, 15, 1], [30, 30, 30, 1]]);
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
                };
                caller.moveFunc = () => {
                    caller.scaleX(_scaleSpeed, _maxScale, () => {
                        caller.stateSwitch('v');
                    });
                    caller.rotateZ(_angelspeed);
                };
                caller.vinishFunc = () => {
                    caller.fadeAway(_ASpeed, 0, () => {
                        caller.stateSwitch('e');
                    });
                    caller.scaleX(-_scaleSpeed);
                    caller.rotateZ(-_angelspeed);
                };
                caller.everyFrameFunc = () => {
                    caller.box.transform.localScaleY = caller.box.transform.localScaleX;
                };
                return caller;
            }
            Particle.starsShine = starsShine;
        })(Particle = LwgEff3D.Particle || (LwgEff3D.Particle = {}));
    })(LwgEff3D || (LwgEff3D = {}));
    var LwgEff2D;
    (function (LwgEff2D) {
        let SkinUrl;
        (function (SkinUrl) {
            SkinUrl["\u7231\u5FC31"] = "Lwg/Effects/img_aixin1.png";
            SkinUrl["\u7231\u5FC32"] = "Lwg/Effects/img_aixin2.png";
            SkinUrl["\u7231\u5FC33"] = "Lwg/Effects/img_aixin3.png";
            SkinUrl["\u82B11"] = "Lwg/Effects/img_hua1.png";
            SkinUrl["\u82B12"] = "Lwg/Effects/img_hua2.png";
            SkinUrl["\u82B13"] = "Lwg/Effects/img_hua3.png";
            SkinUrl["\u82B14"] = "Lwg/Effects/img_hua4.png";
            SkinUrl["\u661F\u661F1"] = "Lwg/Effects/img_star1.png";
            SkinUrl["\u661F\u661F2"] = "Lwg/Effects/img_star2.png";
            SkinUrl["\u661F\u661F3"] = "Lwg/Effects/img_star3.png";
            SkinUrl["\u661F\u661F4"] = "Lwg/Effects/img_star4.png";
            SkinUrl["\u661F\u661F5"] = "Lwg/Effects/img_star5.png";
            SkinUrl["\u661F\u661F6"] = "Lwg/Effects/img_star6.png";
            SkinUrl["\u661F\u661F7"] = "Lwg/Effects/img_star7.png";
            SkinUrl["\u661F\u661F8"] = "Lwg/Effects/img_star8.png";
            SkinUrl["\u83F1\u5F621"] = "Lwg/Effects/img_rhombus1.png";
            SkinUrl["\u83F1\u5F622"] = "Lwg/Effects/img_rhombus1.png";
            SkinUrl["\u83F1\u5F623"] = "Lwg/Effects/img_rhombus1.png";
            SkinUrl["\u77E9\u5F621"] = "Lwg/Effects/img_rectangle1.png";
            SkinUrl["\u77E9\u5F622"] = "Lwg/Effects/img_rectangle2.png";
            SkinUrl["\u77E9\u5F623"] = "Lwg/Effects/img_rectangle3.png";
            SkinUrl["\u96EA\u82B11"] = "Lwg/Effects/img_xuehua1.png";
            SkinUrl["\u53F6\u5B501"] = "Lwg/Effects/img_yezi1.png";
            SkinUrl["\u5706\u5F62\u53D1\u51491"] = "Lwg/Effects/img_yuanfaguang.png";
            SkinUrl["\u5706\u5F621"] = "Lwg/Effects/img_yuan1.png";
            SkinUrl["\u65B9\u5F62\u5149\u57081"] = "Lwg/Effects/img_ui_square_guang1.png";
            SkinUrl["\u65B9\u5F62\u5706\u89D2\u5149\u57081"] = "Lwg/Effects/img_ui_square_guang2.png";
            SkinUrl["\u5706\u5F62\u5C0F\u5149\u73AF"] = "Lwg/Effects/img_xiaoguanghuan.png";
            SkinUrl["\u5149\u57082"] = "Lwg/Effects/img_guangquan2.png";
            SkinUrl["\u4E09\u89D2\u5F621"] = "Lwg/Effects/img_triangle1.png";
            SkinUrl["\u4E09\u89D2\u5F622"] = "Lwg/Effects/img_triangle2.png";
        })(SkinUrl = LwgEff2D.SkinUrl || (LwgEff2D.SkinUrl = {}));
        let Aperture;
        (function (Aperture) {
            class ApertureImage extends Laya.Image {
                constructor(parent, centerPoint, size, rotation, urlArr, colorRGBA, zOrder) {
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
                    let RGBA = [null, null, null, null];
                    RGBA[0] = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][0], colorRGBA[1][0]) : LwgTools.Num.randomOneBySection(180, 255);
                    RGBA[1] = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][1], colorRGBA[1][1]) : LwgTools.Num.randomOneBySection(10, 180);
                    RGBA[2] = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][2], colorRGBA[1][2]) : LwgTools.Num.randomOneBySection(10, 180);
                    RGBA[3] = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][3], colorRGBA[1][3]) : LwgTools.Num.randomOneBySection(1, 1);
                    LwgColor.colour(this, RGBA);
                }
            }
            Aperture.ApertureImage = ApertureImage;
            function continuous(parent, centerPoint, size, minScale, rotation, urlArr, colorRGBA, zOrder, maxScale, speed, accelerated) {
                const Img = new ApertureImage(parent, centerPoint, size, rotation, urlArr, colorRGBA, zOrder);
                let _speed = speed ? LwgTools.Num.randomOneBySection(speed[0], speed[1]) : 0.025;
                let _accelerated = accelerated ? LwgTools.Num.randomOneBySection(accelerated[0], accelerated[1]) : 0.0005;
                if (minScale) {
                    Img.scale(minScale[0], minScale[1]);
                }
                else {
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
                });
            }
            Aperture.continuous = continuous;
            function _continuousByDs(parent, centerPoint, size, minScale, rotation, urlArr, colorRGBA, zOrder, maxScale, speed, accelerated) {
                const Img = new ApertureImage(parent, centerPoint, size, rotation, urlArr, colorRGBA, zOrder);
                let _speed = speed ? LwgTools.Num.randomOneBySection(speed[0], speed[1]) : 0.025;
                let _accelerated = accelerated ? LwgTools.Num.randomOneBySection(accelerated[0], accelerated[1]) : 0.0005;
                if (minScale) {
                    Img.scale(minScale[0], minScale[1]);
                }
                else {
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
                });
            }
            Aperture._continuousByDs = _continuousByDs;
        })(Aperture = LwgEff2D.Aperture || (LwgEff2D.Aperture = {}));
        let Particle;
        (function (Particle) {
            class ImgBase extends Laya.Image {
                constructor(parent, centerPoint, sectionWH, width, height, rotation, urlArr, colorRGBA, zOrder) {
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
                    let RGBA = [null, null, null, null];
                    RGBA[0] = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][0], colorRGBA[1][0]) : LwgTools.Num.randomOneBySection(180, 255);
                    RGBA[1] = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][1], colorRGBA[1][1]) : LwgTools.Num.randomOneBySection(30, 180);
                    RGBA[2] = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][2], colorRGBA[1][2]) : LwgTools.Num.randomOneBySection(30, 180);
                    RGBA[3] = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][3], colorRGBA[1][3]) : LwgTools.Num.randomOneBySection(1, 1);
                    LwgColor.colour(this, RGBA);
                }
            }
            Particle.ImgBase = ImgBase;
            function snow(parent, centerPoint, sectionWH, width, height, rotation, urlArr, colorRGBA, zOrder, distance, rotationSpeed, speed, windX) {
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
                });
                return Img;
            }
            Particle.snow = snow;
            function downwardSpray(parent, point, width, height, angle, urlArr, colorRGBA, vanishDistance, moveSpeed, gravity, accelerated, rotationSpeed, scaleRotationSpeed, skewSpeed, zOrder) {
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
                    dropFp: null,
                    drop: false,
                    vinish: false,
                    scaleSub: true,
                    scaleAdd: false,
                    rotateFunc: null,
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
                });
                return Img;
            }
            Particle.downwardSpray = downwardSpray;
            function rotatingWay(Img, rotationSpeed, scaleRotationSpeed, skewSpeed) {
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
                        }
                        else {
                            Img.skewY += _skewSpeed;
                        }
                    }
                    else {
                        if (_scaleDir === 1) {
                            if (Img['moveCaller']['scaleSub']) {
                                Img.scaleX -= _scaleSpeed;
                                if (Img.scaleX <= 0) {
                                    Img['moveCaller']['scaleSub'] = false;
                                }
                            }
                            else {
                                Img.scaleX += _scaleSpeed;
                                if (Img.scaleX >= 1) {
                                    Img['moveCaller']['scaleSub'] = true;
                                }
                            }
                        }
                        else {
                            if (Img['moveCaller']['scaleSub']) {
                                Img.scaleY -= _scaleSpeed;
                                if (Img.scaleY <= 0) {
                                    Img['moveCaller']['scaleSub'] = false;
                                }
                            }
                            else {
                                Img.scaleY += _scaleSpeed;
                                if (Img.scaleY >= 1) {
                                    Img['moveCaller']['scaleSub'] = true;
                                }
                            }
                        }
                    }
                };
                return rotateFunc;
            }
            function fallingRotate(parent, centerPoint, sectionWH, width, height, urlArr, colorRGBA, distance, moveSpeed, scaleRotationSpeed, skewSpeed, rotationSpeed, zOrder) {
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
                    rotateFunc: null,
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
                });
                return Img;
            }
            Particle.fallingRotate = fallingRotate;
            function fallingVertical(parent, centerPoint, sectionWH, width, height, rotation, urlArr, colorRGBA, zOrder, distance, speed, accelerated) {
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
                });
                return Img;
            }
            Particle.fallingVertical = fallingVertical;
            function fallingVertical_Reverse(parent, centerPoint, sectionWH, width, height, rotation, urlArr, colorRGBA, zOrder, distance, speed, accelerated) {
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
                });
                return Img;
            }
            Particle.fallingVertical_Reverse = fallingVertical_Reverse;
            function slowlyUp(parent, centerPoint, sectionWH, width, height, rotation, urlArr, colorRGBA, zOrder, distance, speed, accelerated) {
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
                    }
                    else {
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
                });
                return Img;
            }
            Particle.slowlyUp = slowlyUp;
            function sprayRound(parent, centerPoint, width, height, rotation, urlArr, colorRGBA, distance, time, moveAngle, rotationSpeed, zOrder) {
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
                    }
                    else {
                        if (!moveCaller.vinish) {
                            radius += _speed;
                            let point = LwgTools.Point.getRoundPointOld(_angle, radius, centerPoint0);
                            Img.pos(point.x, point.y);
                            if (radius > _distance) {
                                moveCaller.move = false;
                                moveCaller.vinish = true;
                            }
                        }
                        else {
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
                });
                return Img;
            }
            Particle.sprayRound = sprayRound;
            function spray(parent, centerPoint, width, height, rotation, urlArr, colorRGBA, distance, moveAngle, rotationSpeed, speed, accelerated, zOrder) {
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
                    }
                    else {
                        if (radius < distance1 && moveCaller.move) {
                        }
                        else {
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
                });
                return Img;
            }
            Particle.spray = spray;
            function outsideBox(parent, centerPoint, sectionWH, width, height, rotation, urlArr, colorRGBA, zOrder, curtailAngle, distance, rotateSpeed, speed, accelerated) {
                let Img = new ImgBase(parent, centerPoint, [0, 0], width, height, rotation, urlArr, colorRGBA, zOrder);
                let _angle = 0;
                sectionWH = sectionWH ? sectionWH : [100, 100];
                let fixedXY = LwgTools.Num.randomOneHalf() == 0 ? 'x' : 'y';
                curtailAngle = curtailAngle ? curtailAngle : 60;
                if (fixedXY == 'x') {
                    if (LwgTools.Num.randomOneHalf() == 0) {
                        Img.x += sectionWH[0];
                        _angle = LwgTools.Num.randomOneHalf() == 0 ? LwgTools.Num.randomOneBySection(0, 90 - curtailAngle) : LwgTools.Num.randomOneBySection(0, -90 + curtailAngle);
                    }
                    else {
                        Img.x -= sectionWH[0];
                        _angle = LwgTools.Num.randomOneBySection(90 + curtailAngle, 270 - curtailAngle);
                    }
                    Img.y += LwgTools.Num.randomOneBySection(-sectionWH[1], sectionWH[1]);
                }
                else {
                    if (LwgTools.Num.randomOneHalf() == 0) {
                        Img.y -= sectionWH[1];
                        _angle = LwgTools.Num.randomOneBySection(180 + curtailAngle, 360 - curtailAngle);
                    }
                    else {
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
                    }
                    else if (moveCaller.move) {
                        if (firstP.distance(Img.x, Img.y) >= _distance) {
                            moveCaller.move = false;
                            moveCaller.vinish = true;
                        }
                    }
                    else if (moveCaller.vinish) {
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
                });
                return Img;
            }
            Particle.outsideBox = outsideBox;
            function moveToTargetToMove(parent, centerPoint, width, height, rotation, angle, urlArr, colorRGBA, zOrder, distance1, distance2, rotationSpeed, speed, accelerated) {
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
                    }
                    else if (moveCaller.move1) {
                        acc += accelerated0;
                        radius += speed0 + acc;
                        if (radius >= dis1) {
                            moveCaller.move1 = false;
                            moveCaller.stop = true;
                        }
                    }
                    else if (moveCaller.stop) {
                        acc -= 0.3;
                        radius += 0.1;
                        if (acc <= 0) {
                            moveCaller.stop = false;
                            moveCaller.move2 = true;
                        }
                    }
                    else if (moveCaller.move2) {
                        acc += accelerated0 / 2;
                        radius += speed0 + acc;
                        if (radius >= dis1 + dis2) {
                            moveCaller.move2 = false;
                            moveCaller.vinish = true;
                        }
                    }
                    else if (moveCaller.vinish) {
                        radius += 0.5;
                        Img.alpha -= 0.05;
                        if (Img.alpha <= 0) {
                            Img.removeSelf();
                            Laya.timer.clearAll(moveCaller);
                        }
                    }
                    let point = LwgTools.Point.getRoundPointOld(angle0, radius, centerPoint0);
                    Img.pos(point.x, point.y);
                });
                return Img;
            }
            Particle.moveToTargetToMove = moveToTargetToMove;
            function annularInhalation(parent, centerPoint, radius, rotation, width, height, urlArr, speed, accelerated, zOrder) {
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
                    }
                    else {
                        acc += accelerated;
                        radius0 -= (speed0 + acc);
                    }
                    let point = LwgTools.Point.getRoundPointOld(angle, radius0, centerPoint);
                    Img.pos(point.x, point.y);
                    if (point.distance(centerPoint.x, centerPoint.y) <= 20 || point.distance(centerPoint.x, centerPoint.y) >= 1000) {
                        Img.removeSelf();
                        Laya.timer.clearAll(caller);
                    }
                });
                return Img;
            }
            Particle.annularInhalation = annularInhalation;
        })(Particle = LwgEff2D.Particle || (LwgEff2D.Particle = {}));
        let Glitter;
        (function (Glitter) {
            class GlitterImage extends Laya.Image {
                constructor(parent, centerPos, radiusXY, urlArr, colorRGBA, width, height, zOder) {
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
                    const RGBA = [null, null, null, null];
                    RGBA[0] = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][0], colorRGBA[1][0]) : LwgTools.Num.randomOneBySection(10, 255);
                    RGBA[1] = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][1], colorRGBA[1][1]) : LwgTools.Num.randomOneBySection(200, 255);
                    RGBA[2] = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][2], colorRGBA[1][2]) : LwgTools.Num.randomOneBySection(10, 255);
                    RGBA[3] = colorRGBA ? LwgTools.Num.randomOneBySection(colorRGBA[0][3], colorRGBA[1][3]) : LwgTools.Num.randomOneBySection(1, 1);
                    LwgColor.colour(this, RGBA);
                    this.alpha = 0;
                    this.zOrder = zOder ? zOder : 1000;
                }
            }
            Glitter.GlitterImage = GlitterImage;
            function blinkStar(parent, centerPos, radiusXY, urlArr, colorRGBA, width, height, scale, speed, rotateSpeed, zOder) {
                let Img = new GlitterImage(parent, centerPos, radiusXY, urlArr, colorRGBA, width, height, zOder);
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
                    }
                    else if (moveCaller.scale) {
                        Img.rotation += _rotateSpeed;
                        Img.scaleX = Img.scaleY += _speed;
                        if (Img.scaleX > _scale) {
                            moveCaller.scale = false;
                            moveCaller.vanish = true;
                        }
                    }
                    else if (moveCaller.vanish) {
                        Img.rotation -= _rotateSpeed;
                        Img.alpha -= 0.015;
                        Img.scaleX -= 0.01;
                        Img.scaleY -= 0.01;
                        if (Img.scaleX <= 0) {
                            Img.removeSelf();
                            Laya.timer.clearAll(moveCaller);
                        }
                    }
                };
                Laya.timer.frameLoop(1, moveCaller, ani);
                return Img;
            }
            Glitter.blinkStar = blinkStar;
            function simpleInfinite(parent, x, y, width, height, zOrder, url, speed) {
                let Img = new Laya.Image();
                parent.addChild(Img);
                Img.width = width;
                Img.height = height;
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
                            }
                            else {
                                add = true;
                            }
                        }
                    }
                    else {
                        Img.alpha += speed ? speed * 2 : 0.01 * 2;
                        if (Img.alpha >= 1) {
                            add = false;
                            caller['end'] = true;
                        }
                    }
                };
                Laya.timer.frameLoop(1, caller, func);
                return Img;
            }
            Glitter.simpleInfinite = simpleInfinite;
        })(Glitter = LwgEff2D.Glitter || (LwgEff2D.Glitter = {}));
        let Circulation;
        (function (Circulation) {
            class ImageBase extends Laya.Image {
                constructor(parent, urlArr, colorRGBA, width, height, zOrder) {
                    super();
                    parent.addChild(this);
                    this.skin = urlArr ? LwgTools.Arr.randomGetOne(urlArr) : SkinUrl.圆形发光1;
                    this.width = width ? LwgTools.Num.randomOneBySection(width[0], width[1]) : 80;
                    this.height = height ? LwgTools.Num.randomOneBySection(height[0], height[1]) : this.width;
                    this.pivotX = this.width / 2;
                    this.pivotY = this.height / 2;
                    const RGBA = [null, null, null, null];
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
            Circulation.ImageBase = ImageBase;
            function corner(parent, posArray, urlArr, colorRGBA, width, height, zOrder, parallel, speed) {
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
                        }
                        else {
                            Img.skin = urlArr[moveCaller.num];
                        }
                    }
                });
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
                };
                func();
                return Img;
            }
            Circulation.corner = corner;
        })(Circulation = LwgEff2D.Circulation || (LwgEff2D.Circulation = {}));
    })(LwgEff2D || (LwgEff2D = {}));
    var LwgClick;
    (function (LwgClick) {
        class Init {
            constructor(_effectType) {
                LwgClick.effectType = _effectType;
            }
            get LwgClick() {
                return 'LwgClick';
            }
        }
        LwgClick.Init = Init;
        LwgClick.absolute = true;
        let EmfilterType;
        (function (EmfilterType) {
            EmfilterType[EmfilterType["all"] = 0] = "all";
            EmfilterType[EmfilterType["none"] = 1] = "none";
            EmfilterType[EmfilterType["stage"] = 2] = "stage";
            EmfilterType[EmfilterType["button"] = 3] = "button";
            EmfilterType[EmfilterType["someBtnIncludeStage"] = 4] = "someBtnIncludeStage";
            EmfilterType[EmfilterType["someBtnExcludeStage"] = 5] = "someBtnExcludeStage";
        })(EmfilterType = LwgClick.EmfilterType || (LwgClick.EmfilterType = {}));
        class Filter {
            static get value() {
                return this._value;
            }
            static setValue(filterType, someBtnArr) {
                this._value = filterType;
                if (filterType === EmfilterType.someBtnIncludeStage || filterType === EmfilterType.someBtnExcludeStage) {
                    if (someBtnArr.length <= 0) {
                        console.log('如果为筛选值为某些按钮，则必须输入按钮名称数组');
                    }
                    else {
                        this.someBtnArr = someBtnArr;
                    }
                }
                else {
                    this.someBtnArr = [];
                }
            }
            static checkBtn(target) {
                if (LwgClick.absolute) {
                    if (Filter.value === EmfilterType.button || Filter.value === EmfilterType.all) {
                        return true;
                    }
                    else if (Filter.value === EmfilterType.someBtnExcludeStage || Filter.value === EmfilterType.someBtnIncludeStage) {
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
            static checkStage() {
                let stageClick = false;
                if (LwgClick.absolute) {
                    if (Filter.value === EmfilterType.all || Filter.value === EmfilterType.stage || Filter.value === EmfilterType.someBtnIncludeStage) {
                        stageClick = true;
                    }
                }
                return stageClick;
            }
        }
        Filter._value = EmfilterType.all;
        Filter.someBtnArr = [];
        LwgClick.Filter = Filter;
        let EmEffectType;
        (function (EmEffectType) {
            EmEffectType["NoEffect"] = "NoEffect";
            EmEffectType["Largen"] = "Largen";
            EmEffectType["Reduce"] = "Reduce";
        })(EmEffectType = LwgClick.EmEffectType || (LwgClick.EmEffectType = {}));
        LwgClick.effectType = EmEffectType.Largen;
        function effectSet(effectType) {
            return ClickEffects[effectType].ins;
        }
        function btnOnDown(target, caller, down, effect) {
            on(effect, target, caller, (e) => {
                Filter.checkBtn(target) && down && down(e);
            }, null, null, null);
        }
        LwgClick.btnOnDown = btnOnDown;
        function btnOnDownAD(target, caller, up, effect) {
            on(effect, target, caller, (e) => {
                Filter.checkBtn(target) && LwgPlatform.AD.showVideo(() => {
                    up && up(e);
                });
            }, null);
        }
        LwgClick.btnOnDownAD = btnOnDownAD;
        function btnOnceDownAD(target, caller, up, effect) {
            once(effect, target, caller, (e) => {
                Filter.checkBtn(target) && LwgPlatform.AD.showVideo(() => {
                    up && up(e);
                });
            }, null);
        }
        LwgClick.btnOnceDownAD = btnOnceDownAD;
        function btnOnMove(target, caller, move, effect) {
            on(effect, target, caller, null, (e) => {
                Filter.checkBtn(target) && move && move(e);
            }, null, null);
        }
        LwgClick.btnOnMove = btnOnMove;
        function btnOnUp(target, caller, up, effect) {
            on(effect, target, caller, null, null, (e) => {
                Filter.checkBtn(target) && up && up(e);
            }, null);
        }
        LwgClick.btnOnUp = btnOnUp;
        function btnOnUpAD(target, caller, up, effect) {
            on(effect, target, caller, null, null, (e) => {
                Filter.checkBtn(target) && LwgPlatform.AD.showVideo(() => {
                    up && up(e);
                });
            }, null);
        }
        LwgClick.btnOnUpAD = btnOnUpAD;
        function btnOnceUpAD(target, caller, up, effect) {
            once(effect, target, caller, null, null, (e) => {
                Filter.checkBtn(target) && LwgPlatform.AD.showVideo(() => {
                    up && up(e);
                });
            }, null);
        }
        LwgClick.btnOnceUpAD = btnOnceUpAD;
        function btnOnUpADCondition(target, caller, condition, reachCb, notReachCb, effect) {
            on(effect, target, caller, null, null, (e) => {
                if (condition && condition()) {
                    Filter.checkBtn(target) && LwgPlatform.AD.showVideo(() => {
                        reachCb && reachCb(e);
                    });
                }
                else {
                    Filter.checkBtn(target) && notReachCb && notReachCb(e);
                }
            });
        }
        LwgClick.btnOnUpADCondition = btnOnUpADCondition;
        function btnOnceUpADCondition(target, caller, condition, reachCb, notReachCb, effect) {
            once(effect, target, caller, null, null, (e) => {
                if (condition && condition()) {
                    Filter.checkBtn(target) && LwgPlatform.AD.showVideo(() => {
                        reachCb && reachCb(e);
                    });
                }
                else {
                    Filter.checkBtn(target) && notReachCb && notReachCb(e);
                }
            });
        }
        LwgClick.btnOnceUpADCondition = btnOnceUpADCondition;
        function btnOnOut(target, caller, out, effect) {
            on(effect, target, caller, null, null, null, (e) => {
                Filter.checkBtn(target) && out && out(e);
            });
        }
        LwgClick.btnOnOut = btnOnOut;
        function btnOff(target, caller, cb, effect) {
            off(target);
        }
        LwgClick.btnOff = btnOff;
        function btnOnFour(target, caller, down, move, up, out, effect) {
            on(effect, target, caller, (e) => {
                LwgClick.Filter.checkBtn(target) && down && down(e);
            }, (e) => {
                LwgClick.Filter.checkBtn(target) && move && move(e);
            }, (e) => {
                LwgClick.Filter.checkBtn(target) && up && up(e);
            }, (e) => {
                LwgClick.Filter.checkBtn(target) && out && out(e);
            });
        }
        LwgClick.btnOnFour = btnOnFour;
        function btnOnceDown(target, caller, down, effect) {
            once(effect, target, caller, (e) => {
                Filter.checkBtn(target) && down && down(e);
            }, null, null, null);
        }
        LwgClick.btnOnceDown = btnOnceDown;
        function btnOnceMove(target, caller, move, effect) {
            once(effect, target, caller, null, (e) => {
                Filter.checkBtn(target) && move && move(e);
            }, null, null);
        }
        LwgClick.btnOnceMove = btnOnceMove;
        function btnOnceUp(target, caller, up, effect) {
            once(effect, target, caller, null, null, (e) => {
                Filter.checkBtn(target) && up && up(e);
            }, null);
        }
        LwgClick.btnOnceUp = btnOnceUp;
        function btnOnceOut(target, caller, out, args, effect) {
            once(effect, target, caller, null, null, null, (e) => {
                Filter.checkBtn(target) && out && out(e, args);
            });
        }
        LwgClick.btnOnceOut = btnOnceOut;
        function btnOnceFour(target, caller, down, move, up, out, allArgs, effect) {
            once(effect, target, caller, (e) => {
                Filter.checkBtn(target) && down && down(e, allArgs[0]);
            }, (e) => {
                Filter.checkBtn(target) && move && move(e, allArgs[1]);
            }, (e) => {
                Filter.checkBtn(target) && up && up(e, allArgs[2]);
            }, (e) => {
                Filter.checkBtn(target) && out && out(e, allArgs[3]);
            });
        }
        LwgClick.btnOnceFour = btnOnceFour;
        LwgClick.callBackArr = [];
        function on(effect, target, caller, down, move, up, out, args = [{}, {}, {}, {}]) {
            if (!effect) {
                effect = LwgClick.effectType;
            }
            var callBackDown = (arg, e) => {
                Filter.checkBtn(target) && down && down(e, arg);
            };
            var callBackMove = (arg, e) => {
                Filter.checkBtn(target) && move && move(e, arg);
            };
            var callBackUp = (arg, e) => {
                Filter.checkBtn(target) && up && up(e, arg);
            };
            var callBackOut = (arg, e) => {
                Filter.checkBtn(target) && out && out(e, arg);
            };
            const element = {
                target: target,
                caller: caller,
                callBackDown: callBackDown,
                callBackMove: callBackMove,
                callBackUp: callBackUp,
                callBackOut: callBackOut,
            };
            LwgClick.callBackArr.push(element);
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
        LwgClick.on = on;
        function once(effect, target, caller, down, move, up, out, args = [{}, {}, {}, {}]) {
            if (!effect) {
                effect = LwgClick.effectType;
            }
            var callBackDown = (arg, e) => {
                Filter.checkBtn(target) && down && down(e, arg);
            };
            var callBackMove = (arg, e) => {
                Filter.checkBtn(target) && move && move(e, arg);
            };
            var callBackUp = (arg, e) => {
                Filter.checkBtn(target) && up && up(e, arg);
            };
            var callBackOut = (arg, e) => {
                Filter.checkBtn(target) && out && out(e, arg);
            };
            const element = {
                target: target,
                caller: caller,
                callBackDown: callBackDown,
                callBackMove: callBackMove,
                callBackUp: callBackUp,
                callBackOut: callBackOut,
            };
            LwgClick.callBackArr.push(element);
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
        LwgClick.once = once;
        function off(target) {
            for (let index = 0; index < LwgClick.callBackArr.length; index++) {
                const element = LwgClick.callBackArr[index];
                if (element.target === target) {
                    target.off(Laya.Event.MOUSE_DOWN, element.caller, element.callBackDown);
                    target.off(Laya.Event.MOUSE_MOVE, element.caller, element.callBackMove);
                    target.off(Laya.Event.MOUSE_UP, element.caller, element.callBackUp);
                    target.off(Laya.Event.MOUSE_DOWN, element.caller, element.callBackOut);
                    LwgClick.callBackArr.splice(index, 1);
                    index--;
                }
            }
        }
        LwgClick.off = off;
        let ClickEffects;
        (function (ClickEffects) {
            class NoEffect {
                static get ins() {
                    if (!this._ins) {
                        this._ins = new NoEffect();
                    }
                    return this._ins;
                }
                down() {
                    LwgSound.playBtnSound();
                }
                ;
                move() { }
                ;
                up() { }
                ;
                out() { }
                ;
            }
            ClickEffects.NoEffect = NoEffect;
            class Largen {
                static get ins() {
                    if (!this._ins) {
                        this._ins = new Largen();
                    }
                    return this._ins;
                }
                down(event) {
                    if (LwgClick.Filter.checkBtn(event.currentTarget)) {
                        event.currentTarget.scale(1.1, 1.1);
                        LwgSound.playBtnSound();
                    }
                }
                move() { }
                ;
                up(event) {
                    event.currentTarget.scale(1, 1);
                }
                out(event) {
                    event.currentTarget.scale(1, 1);
                }
            }
            ClickEffects.Largen = Largen;
            class Reduce {
                static get ins() {
                    if (!this._ins) {
                        this._ins = new Reduce();
                    }
                    return this._ins;
                }
                down(event) {
                    if (LwgClick.Filter.checkBtn(event.currentTarget)) {
                        event.currentTarget.scale(0.9, 0.9);
                        LwgSound.playBtnSound();
                    }
                }
                move() { }
                ;
                up(event) {
                    event.currentTarget.scale(1, 1);
                }
                out(event) {
                    event.currentTarget.scale(1, 1);
                }
            }
            ClickEffects.Reduce = Reduce;
            class Brighten {
                static get ins() {
                    if (!this._ins) {
                        this._ins = new Brighten();
                    }
                    return this._ins;
                }
                down(event) { }
                ;
                move(event) { }
                ;
                up(event) { }
                ;
                out(event) { }
                ;
            }
            ClickEffects.Brighten = Brighten;
            class LuminousRing {
                static get ins() {
                    if (!this._ins) {
                        this._ins = new LuminousRing();
                    }
                    return this._ins;
                }
                down(event) { }
                ;
                move(event) { }
                ;
                up(event) { }
                ;
                out(event) { }
                ;
            }
            ClickEffects.LuminousRing = LuminousRing;
        })(ClickEffects = LwgClick.ClickEffects || (LwgClick.ClickEffects = {}));
    })(LwgClick || (LwgClick = {}));
    var LwgAni3D;
    (function (LwgAni3D) {
        LwgAni3D.tweenMap = {};
        LwgAni3D.frameRate = 1;
        function moveTo(target, toPos, duration, caller, ease, complete, delay = 0, coverBefore = true, update, frame) {
            let position = target.transform.position.clone();
            if (duration == 0 || duration === undefined || duration === null) {
                target.transform.position = toPos.clone();
                complete && complete.apply(caller);
                return;
            }
            if (frame <= 0 || frame === undefined || frame === null) {
                frame = LwgAni3D.frameRate;
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
            };
            let tween = Laya.Tween.to(position, { x: toPos.x, y: toPos.y, z: toPos.z }, duration, ease, Laya.Handler.create(target, endTween), delay, coverBefore);
            if (!LwgAni3D.tweenMap[target.id]) {
                LwgAni3D.tweenMap[target.id] = [];
            }
            LwgAni3D.tweenMap[target.id].push(tween);
        }
        LwgAni3D.moveTo = moveTo;
        function moveToX(target, XPos, duration, caller, ease, complete, delay = 0, coverBefore = false, update, frame) {
            let position = target.transform.position.clone();
            let toPos = new Laya.Vector3(XPos, position.y, position.z);
            if (duration == 0 || duration === undefined || duration === null) {
                target.transform.position = toPos.clone();
                complete && complete.apply(caller);
                return;
            }
            if (frame <= 0 || frame === undefined || frame === null) {
                frame = LwgAni3D.frameRate;
            }
            let updateRenderPos = () => {
                if (target.transform) {
                    target.transform.position = new Laya.Vector3(position.x, target.transform.position.y, target.transform.position.z);
                }
                update && update();
            };
            Laya.timer.once(delay, target, () => {
                Laya.timer.loop(16, target, updateRenderPos);
            });
            let endTween = () => {
                if (target.transform) {
                    target.transform.position = new Laya.Vector3(toPos.clone().x, target.transform.position.y, target.transform.position.z);
                    Laya.timer.clear(target, updateRenderPos);
                }
                complete && complete.apply(caller);
            };
            let tween = Laya.Tween.to(position, { x: toPos.x }, duration, ease, Laya.Handler.create(target, endTween), delay, coverBefore);
            if (!LwgAni3D.tweenMap[target.id]) {
                LwgAni3D.tweenMap[target.id] = [];
            }
            LwgAni3D.tweenMap[target.id].push(tween);
        }
        LwgAni3D.moveToX = moveToX;
        function moveX(target, disX, duration, caller, ease, complete, delay = 0, coverBefore = false, update, frame) {
            const v3Pos = target.transform.position.clone();
            LwgAni3D.moveToX(target, v3Pos.x + disX, duration, caller, ease, complete, delay, coverBefore, update, frame);
        }
        LwgAni3D.moveX = moveX;
        function moveToY(target, posY, duration, caller, ease, complete, delay = 0, coverBefore = false, update, frame) {
            let position = target.transform.position.clone();
            let toPos = new Laya.Vector3(target.transform.position.x, posY, target.transform.position.z);
            if (duration == 0 || duration === undefined || duration === null) {
                target.transform.position = toPos.clone();
                complete && complete.apply(caller);
                return;
            }
            if (frame <= 0 || frame === undefined || frame === null) {
                frame = LwgAni3D.frameRate;
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
            };
            let tween = Laya.Tween.to(position, { y: toPos.y }, duration, ease, Laya.Handler.create(target, endTween), delay, coverBefore);
            if (!LwgAni3D.tweenMap[target.id]) {
                LwgAni3D.tweenMap[target.id] = [];
            }
            LwgAni3D.tweenMap[target.id].push(tween);
        }
        LwgAni3D.moveToY = moveToY;
        function moveY(target, disY, duration, caller, ease, complete, delay = 0, coverBefore = false, update, frame) {
            const v3Pos = target.transform.position.clone();
            LwgAni3D.moveToY(target, v3Pos.y + disY, duration, caller, ease, complete, delay, coverBefore, update, frame);
        }
        LwgAni3D.moveY = moveY;
        function moveToZ(target, posZ, duration, caller, ease, complete, delay = 0, coverBefore = false, update, frame) {
            let position = target.transform.position.clone();
            let toPos = new Laya.Vector3(target.transform.position.x, target.transform.position.y, posZ);
            if (duration == 0 || duration === undefined || duration === null) {
                target.transform.position = toPos;
                complete && complete.apply(caller);
                return;
            }
            if (frame <= 0 || frame === undefined || frame === null) {
                frame = LwgAni3D.frameRate;
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
            };
            let tween = Laya.Tween.to(position, { z: toPos.z }, duration, ease, Laya.Handler.create(target, endTween), delay, coverBefore);
            if (!LwgAni3D.tweenMap[target.id]) {
                LwgAni3D.tweenMap[target.id] = [];
            }
            LwgAni3D.tweenMap[target.id].push(tween);
        }
        LwgAni3D.moveToZ = moveToZ;
        function moveZ(target, disZ, duration, caller, ease, complete, delay = 0, coverBefore = false, update, frame) {
            const v3Pos = target.transform.position.clone();
            LwgAni3D.moveToZ(target, v3Pos.z + disZ, duration, caller, ease, complete, delay, coverBefore, update, frame);
        }
        LwgAni3D.moveZ = moveZ;
        function rotateTo(target, toRotation, duration, caller, ease, complete, delay, coverBefore, update, frame) {
            let rotation = target.transform.localRotationEuler.clone();
            if (duration == 0 || duration === undefined || duration === null) {
                target.transform.localRotationEuler = toRotation.clone();
                complete && complete.apply(caller);
                return;
            }
            if (frame <= 0 || frame === undefined || frame === null) {
                frame = LwgAni3D.frameRate;
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
            };
            let tween = Laya.Tween.to(rotation, { x: toRotation.x, y: toRotation.y, z: toRotation.z }, duration, ease, Laya.Handler.create(target, endTween), delay, coverBefore);
            if (!LwgAni3D.tweenMap[target.id]) {
                LwgAni3D.tweenMap[target.id] = [];
            }
            LwgAni3D.tweenMap[target.id].push(tween);
        }
        LwgAni3D.rotateTo = rotateTo;
        function rotateToX(target, toRotation, duration, caller, ease, complete, delay, coverBefore, update, frame) {
            let rotation = target.transform.localRotationEuler.clone();
            if (duration == 0 || duration === undefined || duration === null) {
                target.transform.localRotationEuler = toRotation.clone();
                complete && complete.apply(caller);
                return;
            }
            if (frame <= 0 || frame === undefined || frame === null) {
                frame = LwgAni3D.frameRate;
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
            };
            let tween = Laya.Tween.to(rotation, { x: toRotation.x, y: toRotation.y, z: toRotation.z }, duration, ease, Laya.Handler.create(target, endTween), delay, coverBefore);
            if (!LwgAni3D.tweenMap[target.id]) {
                LwgAni3D.tweenMap[target.id] = [];
            }
            LwgAni3D.tweenMap[target.id].push(tween);
        }
        LwgAni3D.rotateToX = rotateToX;
        function scaleTo(target, toScale, duration, caller, ease, complete, delay, coverBefore, update, frame) {
            let localScale = target.transform.localScale.clone();
            if (duration == 0 || duration === undefined || duration === null) {
                target.transform.localScale = toScale.clone();
                complete && complete.apply(caller);
                return;
            }
            if (frame <= 0 || frame === undefined || frame === null) {
                frame = LwgAni3D.frameRate;
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
            };
            let tween = Laya.Tween.to(localScale, { x: toScale.x, y: toScale.y, z: toScale.z }, duration, ease, Laya.Handler.create(target, endTween), delay, coverBefore);
            if (!LwgAni3D.tweenMap[target.id]) {
                LwgAni3D.tweenMap[target.id] = [];
            }
            LwgAni3D.tweenMap[target.id].push(tween);
        }
        LwgAni3D.scaleTo = scaleTo;
        function ClearTween(target) {
            let tweens = LwgAni3D.tweenMap[target.id];
            if (tweens && tweens.length) {
                while (tweens.length > 0) {
                    let tween = tweens.pop();
                    tween.clear();
                }
            }
            Laya.timer.clearAll(target);
        }
        LwgAni3D.ClearTween = ClearTween;
        function rock(target, range, duration, caller, func, delay, ease) {
            if (!delay) {
                delay = 0;
            }
            let v1 = new Laya.Vector3(target.transform.localRotationEulerX + range.x, target.transform.localRotationEulerY + range.y, target.transform.localRotationEulerZ + range.z);
            rotateTo(target, v1, duration / 2, caller, ease, () => {
                let v2 = new Laya.Vector3(target.transform.localRotationEulerX - range.x * 2, target.transform.localRotationEulerY - range.y * 2, target.transform.localRotationEulerZ - range.z * 2);
                rotateTo(target, v2, duration, caller, ease, () => {
                    let v3 = new Laya.Vector3(target.transform.localRotationEulerX + range.x, target.transform.localRotationEulerY + range.y, target.transform.localRotationEulerZ + range.z);
                    rotateTo(target, v3, duration / 2, caller, ease, () => {
                        if (func) {
                            func();
                        }
                    });
                });
            }, delay);
        }
        LwgAni3D.rock = rock;
        function moveRotateTo(Sp3d, Target, duration, caller, ease, complete, delay, coverBefore, update, frame) {
            moveTo(Sp3d, Target.transform.position, duration, caller, ease, null, delay, coverBefore, update, frame);
            rotateTo(Sp3d, Target.transform.localRotationEuler, duration, caller, ease, complete, delay, coverBefore, null, frame);
        }
        LwgAni3D.moveRotateTo = moveRotateTo;
    })(LwgAni3D || (LwgAni3D = {}));
    var LwgAni2D;
    (function (LwgAni2D) {
        function clearAll(arr) {
            for (let index = 0; index < arr.length; index++) {
                Laya.Tween.clearAll(arr[index]);
            }
        }
        LwgAni2D.clearAll = clearAll;
        function circulation_scale(node, range, time, delay, cb) {
            Laya.Tween.to(node, { scaleX: 1 + range, scaleY: 1 + range }, time, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(node, { scaleX: 1 - range, scaleY: 1 - range }, time * 2 / 3, null, Laya.Handler.create(this, () => {
                    Laya.Tween.to(node, { scaleX: 1, scaleY: 1 }, time * 1 / 2, null, Laya.Handler.create(this, () => {
                        cb && cb();
                    }), 0);
                }), 0);
            }), delay ? delay : 0);
        }
        LwgAni2D.circulation_scale = circulation_scale;
        function leftRight_Shake(node, range, time, delay, cb) {
            if (!delay) {
                delay = 0;
            }
            Laya.Tween.to(node, { x: node.x - range }, time, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(node, { x: node.x + range * 2 }, time, null, Laya.Handler.create(this, () => {
                    Laya.Tween.to(node, { x: node.x - range }, time, null, Laya.Handler.create(this, () => {
                        cb && cb();
                    }));
                }));
            }), delay);
        }
        LwgAni2D.leftRight_Shake = leftRight_Shake;
        function rotate(node, eRotate, time, delay, cb) {
            Laya.Tween.to(node, { rotation: eRotate }, time, null, Laya.Handler.create(node, () => {
                cb && cb();
            }), delay ? delay : 0);
        }
        LwgAni2D.rotate = rotate;
        function upDown_Overturn(node, time, cb) {
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
        LwgAni2D.upDown_Overturn = upDown_Overturn;
        function leftRight_Overturn(node, time, cb) {
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
        LwgAni2D.leftRight_Overturn = leftRight_Overturn;
        function upDwon_Shake(node, range, time, delay, cb) {
            Laya.Tween.to(node, { y: node.y + range }, time, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(node, { y: node.y - range * 2 }, time, null, Laya.Handler.create(this, () => {
                    Laya.Tween.to(node, { y: node.y + range }, time, null, Laya.Handler.create(this, () => {
                        cb && cb();
                    }));
                }));
            }), delay ? delay : 0);
        }
        LwgAni2D.upDwon_Shake = upDwon_Shake;
        function fadeOut(node, alpha1, alpha2, time, delay, cb) {
            node.alpha = alpha1;
            Laya.Tween.to(node, { alpha: alpha2 }, time, null, Laya.Handler.create(this, () => {
                cb && cb();
            }), delay ? delay : 0);
        }
        LwgAni2D.fadeOut = fadeOut;
        function fadeOut_KickBack(node, alpha1, alpha2, time, delay, cb) {
            node.alpha = alpha1;
            Laya.Tween.to(node, { alpha: alpha2 }, time, null, Laya.Handler.create(this, () => {
                cb && cb();
            }), delay);
        }
        LwgAni2D.fadeOut_KickBack = fadeOut_KickBack;
        function move_FadeOut(node, firstX, firstY, targetX, targetY, time, delay, cb) {
            node.alpha = 0;
            node.x = firstX;
            node.y = firstY;
            Laya.Tween.to(node, { alpha: 1, x: targetX, y: targetY }, time, null, Laya.Handler.create(this, () => {
                cb && cb();
            }), delay);
        }
        LwgAni2D.move_FadeOut = move_FadeOut;
        function move_Fade_Out(node, firstX, firstY, targetX, targetY, time, delay, cb) {
            node.alpha = 1;
            node.x = firstX;
            node.y = firstY;
            Laya.Tween.to(node, { alpha: 0, x: targetX, y: targetY }, time, null, Laya.Handler.create(this, () => {
                cb && cb();
            }), delay);
        }
        LwgAni2D.move_Fade_Out = move_Fade_Out;
        function move_FadeOut_Scale(node, firstX, firstY, targetX, targetY, time, delay, cb) {
            node.alpha = 0;
            node.x = firstX;
            node.y = firstY;
            Laya.Tween.to(node, { alpha: 1, x: targetX, y: targetY, scaleX: 1, scaleY: 1 }, time, null, Laya.Handler.create(this, () => {
                cb && cb();
            }), delay);
        }
        LwgAni2D.move_FadeOut_Scale = move_FadeOut_Scale;
        function move_Scale(node, fScale, fX, fY, tX, tY, eScale, time, delay, ease, cb) {
            node.scaleX = fScale;
            node.scaleY = fScale;
            node.x = fX;
            node.y = fY;
            Laya.Tween.to(node, { x: tX, y: tY, scaleX: eScale, scaleY: eScale }, time, ease ? ease : null, Laya.Handler.create(this, () => {
                cb && cb();
            }), delay ? delay : 0);
        }
        LwgAni2D.move_Scale = move_Scale;
        function move_Rotate(Node, tRotate, tPoint, time, delay, cb) {
            Laya.Tween.to(Node, { rotation: tRotate, x: tPoint.x, y: tPoint.y }, time, null, Laya.Handler.create(Node, () => {
                cb && cb();
            }), delay ? delay : 0);
        }
        LwgAni2D.move_Rotate = move_Rotate;
        function rotate_Scale(target, fRotate, fScaleX, fScaleY, eRotate, eScaleX, eScaleY, time, delay, cb) {
            target.scaleX = fScaleX;
            target.scaleY = fScaleY;
            target.rotation = fRotate;
            Laya.Tween.to(target, { rotation: eRotate, scaleX: eScaleX, scaleY: eScaleY }, time, null, Laya.Handler.create(this, () => {
                cb && cb();
                target.rotation = 0;
            }), delay ? delay : 0);
        }
        LwgAni2D.rotate_Scale = rotate_Scale;
        function drop_Simple(node, fY, tY, rotation, time, delay, cb) {
            node.y = fY;
            Laya.Tween.to(node, { y: tY, rotation: rotation }, time, Laya.Ease.circOut, Laya.Handler.create(this, () => {
                cb && cb();
            }), delay);
        }
        LwgAni2D.drop_Simple = drop_Simple;
        function drop_KickBack(target, fAlpha, firstY, targetY, extendY, time, delay, cb) {
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
        LwgAni2D.drop_KickBack = drop_KickBack;
        function drop_Excursion(node, targetY, targetX, rotation, time, delay, func) {
            Laya.Tween.to(node, { x: node.x + targetX, y: node.y + targetY * 1 / 6 }, time, Laya.Ease.expoIn, Laya.Handler.create(this, () => {
                Laya.Tween.to(node, { x: node.x + targetX + 50, y: targetY, rotation: rotation }, time, null, Laya.Handler.create(this, () => {
                    if (func !== null) {
                        func();
                    }
                }), 0);
            }), delay);
        }
        LwgAni2D.drop_Excursion = drop_Excursion;
        function goUp_Simple(node, initialY, initialR, targetY, time, delay, func) {
            node.y = initialY;
            node.rotation = initialR;
            Laya.Tween.to(node, { y: targetY, rotation: 0 }, time, Laya.Ease.cubicOut, Laya.Handler.create(this, () => {
                if (func !== null) {
                    func();
                }
            }), delay);
        }
        LwgAni2D.goUp_Simple = goUp_Simple;
        function cardRotateX_TowFace(node, time, func1, delay, func2) {
            Laya.Tween.to(node, { scaleX: 0 }, time, null, Laya.Handler.create(this, () => {
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
        LwgAni2D.cardRotateX_TowFace = cardRotateX_TowFace;
        function cardRotateX_OneFace(node, func1, time, delay, func2) {
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
        LwgAni2D.cardRotateX_OneFace = cardRotateX_OneFace;
        function cardRotateY_TowFace(node, time, func1, delay, func2) {
            Laya.Tween.to(node, { scaleY: 0 }, time, null, Laya.Handler.create(this, () => {
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
        LwgAni2D.cardRotateY_TowFace = cardRotateY_TowFace;
        function cardRotateY_OneFace(node, func1, time, delay, func2) {
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
        LwgAni2D.cardRotateY_OneFace = cardRotateY_OneFace;
        function move_changeRotate(node, targetX, targetY, per, rotation_pe, time, func) {
            let targetPerX = targetX * per + node.x * (1 - per);
            let targetPerY = targetY * per + node.y * (1 - per);
            Laya.Tween.to(node, { x: targetPerX, y: targetPerY, rotation: 45 }, time, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(node, { x: targetX, y: targetY, rotation: 0 }, time, null, Laya.Handler.create(this, () => {
                    if (func !== null) {
                        func();
                    }
                }), 0);
            }), 0);
        }
        LwgAni2D.move_changeRotate = move_changeRotate;
        function bomb_LeftRight(node, MaxScale, time, func, delay) {
            Laya.Tween.to(node, { scaleX: MaxScale }, time, Laya.Ease.cubicInOut, Laya.Handler.create(this, () => {
                Laya.Tween.to(node, { scaleX: 0.85 }, time * 0.5, null, Laya.Handler.create(this, () => {
                    Laya.Tween.to(node, { scaleX: MaxScale * 0.9 }, time * 0.55, null, Laya.Handler.create(this, () => {
                        Laya.Tween.to(node, { scaleX: 0.95 }, time * 0.6, null, Laya.Handler.create(this, () => {
                            Laya.Tween.to(node, { scaleX: 1 }, time * 0.65, null, Laya.Handler.create(this, () => {
                                if (func)
                                    func();
                            }), 0);
                        }), 0);
                    }), 0);
                }), 0);
            }), delay);
        }
        LwgAni2D.bomb_LeftRight = bomb_LeftRight;
        function bombs_Appear(node, firstAlpha, endScale, maxScale, rotation, time, func, delay) {
            node.scale(0, 0);
            node.alpha = firstAlpha;
            Laya.Tween.to(node, { scaleX: maxScale, scaleY: maxScale, alpha: 1, rotation: rotation }, time, Laya.Ease.cubicInOut, Laya.Handler.create(this, () => {
                Laya.Tween.to(node, { scaleX: endScale, scaleY: endScale, rotation: 0 }, time / 2, null, Laya.Handler.create(this, () => {
                    Laya.Tween.to(node, { scaleX: endScale + (maxScale - endScale) / 3, scaleY: endScale + (maxScale - endScale) / 3, rotation: 0 }, time / 3, null, Laya.Handler.create(this, () => {
                        Laya.Tween.to(node, { scaleX: endScale, scaleY: endScale, rotation: 0 }, time / 4, null, Laya.Handler.create(this, () => {
                            if (func) {
                                func();
                            }
                        }), 0);
                    }), 0);
                }), 0);
            }), delay ? delay : 0);
        }
        LwgAni2D.bombs_Appear = bombs_Appear;
        function bombs_AppearAllChild(node, firstAlpha, endScale, scale1, rotation1, time1, interval, func, audioType) {
            let de1 = 0;
            if (!interval) {
                interval = 100;
            }
            for (let index = 0; index < node.numChildren; index++) {
                let Child = node.getChildAt(index);
                Child.alpha = 0;
                Laya.timer.once(de1, this, () => {
                    Child.alpha = 1;
                    if (index !== node.numChildren - 1) {
                        func == null;
                    }
                    bombs_Appear(Child, firstAlpha, endScale, scale1, rotation1, time1, func);
                });
                de1 += interval;
            }
        }
        LwgAni2D.bombs_AppearAllChild = bombs_AppearAllChild;
        function bombs_VanishAllChild(node, endScale, alpha, rotation, time, interval, func) {
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
                });
                de1 += interval;
            }
        }
        LwgAni2D.bombs_VanishAllChild = bombs_VanishAllChild;
        function bombs_Vanish(node, scale, alpha, rotation, time, func, delay) {
            Laya.Tween.to(node, { scaleX: scale, scaleY: scale, alpha: alpha, rotation: rotation }, time, Laya.Ease.cubicOut, Laya.Handler.create(this, () => {
                if (func) {
                    func();
                }
            }), delay ? delay : 0);
        }
        LwgAni2D.bombs_Vanish = bombs_Vanish;
        function swell_shrink(node, firstScale, scale1, time, delay, cb) {
            if (!delay) {
                delay = 0;
            }
            Laya.Tween.to(node, { scaleX: scale1, scaleY: scale1, alpha: 1, }, time, Laya.Ease.cubicInOut, Laya.Handler.create(this, () => {
                Laya.Tween.to(node, { scaleX: firstScale, scaleY: firstScale, rotation: 0 }, time, null, Laya.Handler.create(this, () => {
                    Laya.Tween.to(node, { scaleX: firstScale + (scale1 - firstScale) * 0.5, scaleY: firstScale + (scale1 - firstScale) * 0.5, rotation: 0 }, time * 0.5, null, Laya.Handler.create(this, () => {
                        Laya.Tween.to(node, { scaleX: firstScale, scaleY: firstScale, rotation: 0 }, time, null, Laya.Handler.create(this, () => {
                            cb && cb();
                        }), 0);
                    }), 0);
                }), 0);
            }), delay);
        }
        LwgAni2D.swell_shrink = swell_shrink;
        function move(node, targetX, targetY, time, func, delay, ease) {
            Laya.Tween.to(node, { x: targetX, y: targetY }, time, ease ? ease : null, Laya.Handler.create(this, () => {
                if (func) {
                    func();
                }
            }), delay ? delay : 0);
        }
        LwgAni2D.move = move;
        function move_Deform_X(node, firstX, firstR, targetX, scaleX, scaleY, time, delay, func) {
            node.alpha = 0;
            node.x = firstX;
            node.rotation = firstR;
            Laya.Tween.to(node, { x: targetX, scaleX: 1 + scaleX, scaleY: 1 + scaleY, rotation: firstR / 3, alpha: 1 }, time, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(node, { scaleX: 1, scaleY: 1, rotation: 0 }, time, null, Laya.Handler.create(this, () => {
                    if (func !== null) {
                        func();
                    }
                }), 0);
            }), delay);
        }
        LwgAni2D.move_Deform_X = move_Deform_X;
        function move_Deform_Y(target, firstY, firstR, targeY, scaleX, scaleY, time, delay, func) {
            target.alpha = 0;
            if (firstY) {
                target.y = firstY;
            }
            target.rotation = firstR;
            Laya.Tween.to(target, { y: targeY, scaleX: 1 + scaleX, scaleY: 1 + scaleY, rotation: firstR / 3, alpha: 1 }, time, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(target, { scaleX: 1, scaleY: 1, rotation: 0 }, time, null, Laya.Handler.create(this, () => {
                    if (func !== null) {
                        func();
                    }
                }), 0);
            }), delay);
        }
        LwgAni2D.move_Deform_Y = move_Deform_Y;
        function blink_FadeOut_v(target, minAlpha, maXalpha, time, delay, func) {
            target.alpha = minAlpha;
            Laya.Tween.to(target, { alpha: maXalpha }, time, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(target, { alpha: minAlpha }, time, null, Laya.Handler.create(this, () => {
                    if (func !== null) {
                        func();
                    }
                }), 0);
            }), delay);
        }
        LwgAni2D.blink_FadeOut_v = blink_FadeOut_v;
        function blink_FadeOut(target, minAlpha, maXalpha, time, delay, func) {
            target.alpha = minAlpha;
            if (!delay) {
                delay = 0;
            }
            Laya.Tween.to(target, { alpha: minAlpha }, time, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(target, { alpha: maXalpha }, time, null, Laya.Handler.create(this, () => {
                    if (func) {
                        func();
                    }
                }), 0);
            }), delay);
        }
        LwgAni2D.blink_FadeOut = blink_FadeOut;
        function shookHead_Simple(target, rotate, time, delay, func) {
            let firstR = target.rotation;
            Laya.Tween.to(target, { rotation: firstR + rotate }, time, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(target, { rotation: firstR - rotate * 2 }, time, null, Laya.Handler.create(this, () => {
                    Laya.Tween.to(target, { rotation: firstR + rotate }, time, null, Laya.Handler.create(this, () => {
                        Laya.Tween.to(target, { rotation: firstR }, time, null, Laya.Handler.create(this, () => {
                            if (func) {
                                func();
                            }
                        }), 0);
                    }), 0);
                }), 0);
            }), delay ? delay : 0);
        }
        LwgAni2D.shookHead_Simple = shookHead_Simple;
        function hideAni_01(target, upNum, time1, stopTime, downNum, time2, func) {
            target.alpha = 0;
            Laya.Tween.to(target, { alpha: 1, y: target.y - upNum }, time1, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(target, { y: target.y - 15 }, stopTime, null, Laya.Handler.create(this, () => {
                    Laya.Tween.to(target, { alpha: 0, y: target.y + upNum + downNum }, time2, null, Laya.Handler.create(this, () => {
                        if (func !== null) {
                            func();
                        }
                    }), 0);
                }), 0);
            }), 0);
        }
        LwgAni2D.hideAni_01 = hideAni_01;
        function scale_Alpha(target, fAlpha, fScaleX, fScaleY, eScaleX, eScaleY, eAlpha, time, delay, func, ease) {
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
                    func();
                }
            }), delay);
        }
        LwgAni2D.scale_Alpha = scale_Alpha;
        function scale(target, fScaleX, fScaleY, eScaleX, eScaleY, time, delay, func, ease) {
            target.scaleX = fScaleX;
            target.scaleY = fScaleY;
            Laya.Tween.to(target, { scaleX: eScaleX, scaleY: eScaleY }, time, ease ? ease : null, Laya.Handler.create(this, () => {
                if (func) {
                    func();
                }
            }), delay ? delay : 0);
        }
        LwgAni2D.scale = scale;
        function rotate_Magnify_KickBack(node, eAngle, eScale, time1, time2, delay1, delay2, func) {
            node.alpha = 0;
            node.scaleX = 0;
            node.scaleY = 0;
            Laya.Tween.to(node, { alpha: 1, rotation: 360 + eAngle, scaleX: 1 + eScale, scaleY: 1 + eScale }, time1, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(node, { rotation: 360 - eAngle / 2, scaleX: 1 + eScale / 2, scaleY: 1 + eScale / 2 }, time2, null, Laya.Handler.create(this, () => {
                    Laya.Tween.to(node, { rotation: 360 + eAngle / 3, scaleX: 1 + eScale / 5, scaleY: 1 + eScale / 5 }, time2, null, Laya.Handler.create(this, () => {
                        Laya.Tween.to(node, { rotation: 360, scaleX: 1, scaleY: 1 }, time2, null, Laya.Handler.create(this, () => {
                            node.rotation = 0;
                            if (func !== null) {
                                func();
                            }
                        }), 0);
                    }), delay2);
                }), 0);
            }), delay1);
        }
        LwgAni2D.rotate_Magnify_KickBack = rotate_Magnify_KickBack;
    })(LwgAni2D || (LwgAni2D = {}));
    var LwgSet;
    (function (LwgSet) {
        class Sound {
            static get switch() {
                return Laya.LocalStorage.getItem('Setting/sound') == '0' ? false : true;
            }
            static set switch(value) {
                let val;
                if (value) {
                    val = 1;
                }
                else {
                    val = 0;
                }
                Laya.LocalStorage.setItem('Setting/sound', val.toString());
            }
        }
        LwgSet.Sound = Sound;
        ;
        class BgMusic {
            static get switch() {
                return Laya.LocalStorage.getItem('Setting/bgMusic') == '0' ? false : true;
            }
            static set switch(value) {
                let val;
                if (value) {
                    val = 1;
                    Laya.LocalStorage.setItem('Setting/bgMusic', val.toString());
                    LwgSound.playMusic();
                }
                else {
                    val = 0;
                    Laya.LocalStorage.setItem('Setting/bgMusic', val.toString());
                    LwgSound.stopMusic();
                }
            }
        }
        LwgSet.BgMusic = BgMusic;
        ;
        class Shake {
            static get switch() {
                return Laya.LocalStorage.getItem('Setting/shake') == '0' ? false : true;
            }
            static set switch(value) {
                let val;
                if (value) {
                    val = 1;
                }
                else {
                    val = 0;
                }
                Laya.LocalStorage.setItem('Setting/shake', val.toString());
            }
        }
        LwgSet.Shake = Shake;
        ;
        class Button extends LwgScene.ViewObjBase {
            static get ins() {
                if (!this._ins) {
                    this._ins = new Button();
                }
                return this._ins;
            }
            createCb() {
                this.view.on(Laya.Event.CLICK, this, this.onView);
            }
            onView(e) {
                e.stopPropagation();
                LwgScene.openScene(LwgScene.NameBase.Set);
            }
        }
        LwgSet.Button = Button;
    })(LwgSet || (LwgSet = {}));
    var LwgSound;
    (function (LwgSound) {
        class Init {
            constructor(_bgmUrl, _btnUrl, _getMoneyUrl) {
                LwgSound.bgmUrl = _bgmUrl;
                LwgSound.btnUrl = _btnUrl;
                LwgSound.getMoneyUrl = _getMoneyUrl;
                LwgSound.playMusic();
            }
            get LwgSound() {
                return 'LwgSound';
            }
        }
        LwgSound.Init = Init;
        LwgSound.bgmUrl = '';
        LwgSound.btnUrl = '';
        LwgSound.victoryUrl = '';
        LwgSound.defeatedUrl = '';
        LwgSound.getMoneyUrl = '';
        function playSound(url, number, func) {
            if (!url) {
                url = LwgSound.btnUrl;
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
        LwgSound.playSound = playSound;
        function playBtnSound(number, func) {
            if (!number) {
                number = 1;
            }
            if (LwgSet.Sound.switch) {
                Laya.SoundManager.playSound(LwgSound.btnUrl, number, Laya.Handler.create(this, () => {
                    if (func) {
                        func();
                    }
                }));
            }
        }
        LwgSound.playBtnSound = playBtnSound;
        function playMusic(url, number, delay) {
            if (LwgSet.BgMusic.switch) {
                Laya.SoundManager.playMusic(url ? url : LwgSound.bgmUrl, number ? number : 0, Laya.Handler.create(this, () => { }), delay ? delay : 0);
            }
        }
        LwgSound.playMusic = playMusic;
        function stopMusic() {
            Laya.SoundManager.stopMusic();
        }
        LwgSound.stopMusic = stopMusic;
        function stopSound(url) {
            Laya.SoundManager.stopSound(url);
        }
        LwgSound.stopSound = stopSound;
        function stopAllSound() {
            Laya.SoundManager.stopAllSound();
        }
        LwgSound.stopAllSound = stopAllSound;
        function stopAll() {
            Laya.SoundManager.stopAll();
        }
        LwgSound.stopAll = stopAll;
    })(LwgSound || (LwgSound = {}));
    var LwgTools;
    (function (LwgTools) {
        let NodeData;
        (function (NodeData) {
            function getMsgFromSprite3DArr(spirteArr) {
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
                    let child = spirteArr[i];
                    let levelMsg = {};
                    levelMsg["name"] = child.name;
                    let childData = [];
                    for (let j = 0; j < child.numChildren; j++) {
                        let son = child.getChildAt(j);
                        let data = {};
                        setData(data, son);
                        childData.push(data);
                    }
                    levelMsg["childData"] = childData;
                    levelArr.push(levelMsg);
                }
                LvRECORD.RECORDS = levelArr;
                writeMsgToFileThenDownload(JSON.stringify(LvRECORD), 'LevelsMsg.json');
            }
            NodeData.getMsgFromSprite3DArr = getMsgFromSprite3DArr;
            function getMsgFromSprite3D(spirte) {
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
                    let child = spirte.getChildAt(i);
                    levelMsg["name"] = child.name;
                    let list = [];
                    for (let j = 0; j < child.numChildren; j++) {
                        let son = child.getChildAt(j);
                        let data = {};
                        setData(data, son);
                        list.push(data);
                    }
                    levelMsg["childData"] = list;
                    levelArr.push(levelMsg);
                }
                LvRECORD.RECORDS = levelArr;
                writeMsgToFileThenDownload(JSON.stringify(LvRECORD), 'Roads.json');
            }
            NodeData.getMsgFromSprite3D = getMsgFromSprite3D;
            function writeMsgToFileThenDownload(content, filename) {
                const eleLink = document.createElement('a');
                eleLink.download = filename;
                eleLink.style.display = 'none';
                const blob = new Blob([content]);
                eleLink.href = URL.createObjectURL(blob);
                document.body.appendChild(eleLink);
                eleLink.click();
                document.body.removeChild(eleLink);
            }
            function setData(data, obj) {
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
                };
            }
        })(NodeData = LwgTools.NodeData || (LwgTools.NodeData = {}));
        let Format;
        (function (Format) {
            function numberConvertedtoChinese(number) {
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
            Format.numberConvertedtoChinese = numberConvertedtoChinese;
            function formatNumber(crc, fixNum = 0) {
                let textTemp;
                if (crc >= 1e27) {
                    textTemp = (crc / 1e27).toFixed(fixNum) + "ae";
                }
                else if (crc >= 1e24) {
                    textTemp = (crc / 1e24).toFixed(fixNum) + "ad";
                }
                else if (crc >= 1e21) {
                    textTemp = (crc / 1e21).toFixed(fixNum) + "ac";
                }
                else if (crc >= 1e18) {
                    textTemp = (crc / 1e18).toFixed(fixNum) + "ab";
                }
                else if (crc >= 1e15) {
                    textTemp = (crc / 1e15).toFixed(fixNum) + "aa";
                }
                else if (crc >= 1e12) {
                    textTemp = (crc / 1e12).toFixed(fixNum) + "t";
                }
                else if (crc >= 1e9) {
                    textTemp = (crc / 1e9).toFixed(fixNum) + "b";
                }
                else if (crc >= 1e6) {
                    textTemp = (crc / 1e6).toFixed(fixNum) + "m";
                }
                else if (crc >= 1e3) {
                    textTemp = (crc / 1e3).toFixed(fixNum) + "k";
                }
                else {
                    textTemp = Math.round(crc).toString();
                }
                return textTemp;
            }
            Format.formatNumber = formatNumber;
            function strAddNum(str, num) {
                return (Number(str) + num).toString();
            }
            Format.strAddNum = strAddNum;
            function NumAddStr(num, str) {
                return Number(str) + num;
            }
            Format.NumAddStr = NumAddStr;
        })(Format = LwgTools.Format || (LwgTools.Format = {}));
        let Node;
        (function (Node_1) {
            function setChildrenReverseZOrder(spParent) {
                for (let index = 0; index < spParent.numChildren; index++) {
                    const element = spParent.getChildAt(index);
                    spParent.setChildIndex(element, 0);
                }
            }
            Node_1.setChildrenReverseZOrder = setChildrenReverseZOrder;
            function setTieByParent(Node) {
                const Parent = Node.parent;
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
            Node_1.setTieByParent = setTieByParent;
            function setTieByStage(Node, center) {
                const Parent = Node.parent;
                const gPoint = Parent.localToGlobal(new Laya.Point(Node.x, Node.y));
                if (!center) {
                    if (gPoint.x > Laya.stage.width) {
                        gPoint.x = Laya.stage.width;
                    }
                }
                else {
                    if (gPoint.x > Laya.stage.width - Node.width / 2) {
                        gPoint.x = Laya.stage.width - Node.width / 2;
                    }
                }
                if (!center) {
                    if (gPoint.x < 0) {
                        gPoint.x = 0;
                    }
                }
                else {
                    if (gPoint.x < Node.width / 2) {
                        gPoint.x = Node.width / 2;
                    }
                }
                if (!center) {
                    if (gPoint.y > Laya.stage.height) {
                        gPoint.y = Laya.stage.height;
                    }
                }
                else {
                    if (gPoint.y > Laya.stage.height - Node.height / 2) {
                        gPoint.y = Laya.stage.height - Node.height / 2;
                    }
                }
                if (!center) {
                    if (gPoint.y < 0) {
                        gPoint.y = 0;
                    }
                }
                else {
                    if (gPoint.y < Node.height / 2) {
                        gPoint.y = Node.height / 2;
                    }
                }
                const lPoint = Parent.globalToLocal(gPoint);
                Node.pos(lPoint.x, lPoint.y);
            }
            Node_1.setTieByStage = setTieByStage;
            function getISLeaveStage(_Sprite, func) {
                let Parent = _Sprite.parent;
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
            Node_1.getISLeaveStage = getISLeaveStage;
            function getNodeGPoint(sp) {
                if (!sp.parent) {
                    return;
                }
                return sp.parent.localToGlobal(new Laya.Point(sp.x, sp.y));
            }
            Node_1.getNodeGPoint = getNodeGPoint;
            function checkTwoDistance(_Sprite1, _Sprite2, distance, func) {
                if (!_Sprite1 || !_Sprite2) {
                    return;
                }
                let Parent1 = _Sprite1.parent;
                let Parent2 = _Sprite2.parent;
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
            Node_1.checkTwoDistance = checkTwoDistance;
            function setChildZOrderByPosY(sp, zOrder, along) {
                let arr = [];
                if (sp.numChildren == 0) {
                    return arr;
                }
                ;
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
                }
                else {
                    return arr;
                }
            }
            Node_1.setChildZOrderByPosY = setChildZOrderByPosY;
            function getChildArrByProperty(node, property, value) {
                let childArr = [];
                for (let index = 0; index < node.numChildren; index++) {
                    const element = node.getChildAt(index);
                    if (element[property] == value) {
                        childArr.push(element);
                    }
                }
                return childArr;
            }
            Node_1.getChildArrByProperty = getChildArrByProperty;
            function randomChildren(node, num) {
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
            Node_1.randomChildren = randomChildren;
            function destroyAllChildren(node) {
                for (let index = 0; index < node.numChildren; index++) {
                    const element = node.getChildAt(index);
                    element.destroy(true);
                    index--;
                }
            }
            Node_1.destroyAllChildren = destroyAllChildren;
            function destroyOneChildren(node, nodeName) {
                for (let index = 0; index < node.numChildren; index++) {
                    const element = node.getChildAt(index);
                    if (element.name == nodeName) {
                        element.destroy(true);
                        index--;
                    }
                }
            }
            Node_1.destroyOneChildren = destroyOneChildren;
            function removeAllChildren(node) {
                if (node.numChildren > 0) {
                    node.removeChildren(0, node.numChildren - 1);
                }
            }
            Node_1.removeAllChildren = removeAllChildren;
            function removeOneChildren(node, nodeName) {
                for (let index = 0; index < node.numChildren; index++) {
                    const element = node.getChildAt(index);
                    if (element.name == nodeName) {
                        element.removeSelf();
                        index--;
                    }
                }
            }
            Node_1.removeOneChildren = removeOneChildren;
            function showExcludedChild2D(node, childNameArr, bool) {
                for (let i = 0; i < node.numChildren; i++) {
                    let Child = node.getChildAt(i);
                    for (let j = 0; j < childNameArr.length; j++) {
                        if (Child.name == childNameArr[j]) {
                            if (bool || bool == undefined) {
                                Child.visible = true;
                            }
                            else {
                                Child.visible = false;
                            }
                        }
                        else {
                            if (bool || bool == undefined) {
                                Child.visible = false;
                            }
                            else {
                                Child.visible = true;
                            }
                        }
                    }
                }
            }
            Node_1.showExcludedChild2D = showExcludedChild2D;
            function showExcludedChild3D(node, childNameArr, bool) {
                for (let i = 0; i < node.numChildren; i++) {
                    let Child = node.getChildAt(i);
                    for (let j = 0; j < childNameArr.length; j++) {
                        if (Child.name == childNameArr[j]) {
                            if (bool || bool == undefined) {
                                Child.active = true;
                            }
                            else {
                                Child.active = false;
                            }
                        }
                        else {
                            if (bool || bool == undefined) {
                                Child.active = false;
                            }
                            else {
                                Child.active = true;
                            }
                        }
                    }
                }
            }
            Node_1.showExcludedChild3D = showExcludedChild3D;
            function createPrefabByPool(prefab, Parent, point, script, zOrder, name) {
                name = name ? name : prefab.json['props']['name'];
                const Sp = Laya.Pool.getItemByCreateFun(name, prefab.create, prefab);
                Parent && Parent.addChild(Sp);
                point && Sp.pos(point[0], point[1]);
                script && Sp.addComponent(script);
                Sp.name = name;
                LwgNode.addProperty(Sp);
                if (zOrder)
                    Sp.zOrder = zOrder;
                return Sp;
            }
            Node_1.createPrefabByPool = createPrefabByPool;
            function childrenVisible2D(node, bool) {
                for (let index = 0; index < node.numChildren; index++) {
                    const element = node.getChildAt(index);
                    if (bool) {
                        element.visible = true;
                    }
                    else {
                        element.visible = false;
                    }
                }
            }
            Node_1.childrenVisible2D = childrenVisible2D;
            function childrenVisible3D(node, bool) {
                for (let index = 0; index < node.numChildren; index++) {
                    const element = node.getChildAt(index);
                    if (bool) {
                        element.active = true;
                    }
                    else {
                        element.active = false;
                    }
                }
            }
            Node_1.childrenVisible3D = childrenVisible3D;
            function findChild3D(parent, name) {
                var item = null;
                item = parent.getChildByName(name);
                if (item != null)
                    return item;
                var go = null;
                for (var i = 0; i < parent.numChildren; i++) {
                    go = findChild3D(parent.getChildAt(i), name);
                    if (go != null)
                        return go;
                }
                return null;
            }
            Node_1.findChild3D = findChild3D;
            function findChild2D(parent, name) {
                var item = null;
                item = parent.getChildByName(name);
                if (item != null)
                    return item;
                var go = null;
                for (var i = 0; i < parent.numChildren; i++) {
                    go = findChild2D(parent.getChildAt(i), name);
                    if (go != null)
                        return go;
                }
                return null;
            }
            Node_1.findChild2D = findChild2D;
            function findNodeBelongToParent(node, parentName) {
                if (node.parent && node.parent.name == parentName) {
                    return node.parent;
                }
                else {
                    if (node.parent) {
                        return findNodeBelongToParent(node.parent, parentName);
                    }
                }
            }
            Node_1.findNodeBelongToParent = findNodeBelongToParent;
        })(Node = LwgTools.Node || (LwgTools.Node = {}));
        let Num;
        (function (Num) {
            function randomOneHalf() {
                let number;
                number = Math.floor(Math.random() * 2);
                return number;
            }
            Num.randomOneHalf = randomOneHalf;
            function randomNumerical(numSection, defaultNumSection, randomPlusOrMinus) {
                let num = numSection ? LwgTools.Num.randomOneBySection(numSection[0], numSection[1]) : LwgTools.Num.randomOneBySection(defaultNumSection[0], defaultNumSection[1]);
                if (randomPlusOrMinus) {
                    num = LwgTools.Num.randomOneHalf() === 0 ? num : -num;
                }
                return num;
            }
            Num.randomNumerical = randomNumerical;
            function randomOneInt(section1, section2) {
                if (section2) {
                    return Math.round(Math.random() * (section2 - section1)) + section1;
                }
                else {
                    return Math.round(Math.random() * section1);
                }
            }
            Num.randomOneInt = randomOneInt;
            function randomCountBySection(section1, section2, count, intSet) {
                let arr = [];
                if (!count) {
                    count = 1;
                }
                if (section2) {
                    while (count > arr.length) {
                        let num;
                        if (intSet || intSet == undefined) {
                            num = Math.round(Math.random() * (section2 - section1)) + section1;
                        }
                        else {
                            num = Math.random() * (section2 - section1) + section1;
                        }
                        arr.push(num);
                        Arr.unique01(arr);
                    }
                    ;
                    return arr;
                }
                else {
                    while (count > arr.length) {
                        let num;
                        if (intSet || intSet == undefined) {
                            num = Math.round(Math.random() * section1);
                        }
                        else {
                            num = Math.random() * section1;
                        }
                        arr.push(num);
                        Arr.unique01(arr);
                    }
                    return arr;
                }
            }
            Num.randomCountBySection = randomCountBySection;
            function randomOneBySection(section1, section2, intSet) {
                let chage;
                if (section1 > section2) {
                    chage = section1;
                    section1 = section2;
                    section2 = chage;
                }
                if (section2) {
                    let num;
                    if (intSet) {
                        num = Math.round(Math.random() * (section2 - section1)) + section1;
                    }
                    else {
                        num = Math.random() * (section2 - section1) + section1;
                    }
                    return num;
                }
                else {
                    let num;
                    if (intSet) {
                        num = Math.round(Math.random() * section1);
                    }
                    else {
                        num = Math.random() * section1;
                    }
                    return num;
                }
            }
            Num.randomOneBySection = randomOneBySection;
        })(Num = LwgTools.Num || (LwgTools.Num = {}));
        let Point;
        (function (Point) {
            function createBezierPoints(anchorpoints, pointsAmount) {
                var points = [];
                for (var i = 0; i < pointsAmount; i++) {
                    var point = multiPointBezier(anchorpoints, i / pointsAmount);
                    points.push(point);
                }
                return points;
            }
            Point.createBezierPoints = createBezierPoints;
            function multiPointBezier(points, t) {
                var len = points.length;
                var x = 0, y = 0;
                var erxiangshi = function (start, end) {
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
            function getOtherLocal(element, Other) {
                let Parent = element.parent;
                let gPoint = Parent.localToGlobal(new Laya.Point(element.x, element.y));
                return Other.globalToLocal(gPoint);
            }
            Point.getOtherLocal = getOtherLocal;
            function getRadianByAngle(angle) {
                return Math.PI / 180 * angle;
            }
            Point.getRadianByAngle = getRadianByAngle;
            function angleByPointOld(x, y) {
                const radian = Math.atan2(x, y);
                let angle = 90 - radian * (180 / Math.PI);
                if (angle <= 0) {
                    angle = 270 + (90 + angle);
                }
                return angle - 90;
            }
            Point.angleByPointOld = angleByPointOld;
            ;
            function getAngleByPoint(x, y) {
                const radian = Math.atan2(y, x);
                let angle = radian * (180 / Math.PI);
                if (angle <= 0) {
                    angle = 360 + angle;
                }
                return angle;
            }
            Point.getAngleByPoint = getAngleByPoint;
            ;
            function getNPointByAngle(angle) {
                const radian = (90 - angle) / (180 / Math.PI);
                const p = new Laya.Point(Math.sin(radian), Math.cos(radian));
                p.normalize();
                return p;
            }
            Point.getNPointByAngle = getNPointByAngle;
            ;
            function angleByPointNew(angle) {
                const rad = getRadianByAngle(angle);
                const p = new Laya.Point(Math.cos(rad), Math.sin(rad));
                p.normalize();
                return p;
            }
            Point.angleByPointNew = angleByPointNew;
            ;
            function dotRotatePoint(x0, y0, x1, y1, angle) {
                let x2 = x0 + (x1 - x0) * Math.cos(angle * Math.PI / 180) - (y1 - y0) * Math.sin(angle * Math.PI / 180);
                let y2 = y0 + (x1 - x0) * Math.sin(angle * Math.PI / 180) + (y1 - y0) * Math.cos(angle * Math.PI / 180);
                return new Laya.Point(x2, y2);
            }
            Point.dotRotatePoint = dotRotatePoint;
            function angleAndLenByPoint(angle, len) {
                const point = new Laya.Point();
                point.x = len * Math.cos(angle * Math.PI / 180);
                point.y = len * Math.sin(angle * Math.PI / 180);
                return point;
            }
            Point.angleAndLenByPoint = angleAndLenByPoint;
            function getRoundPointOld(angle, radius, centerPos) {
                const radian = getRadianByAngle(angle);
                const X = centerPos.x + Math.sin(radian) * radius;
                const Y = centerPos.y - Math.cos(radian) * radius;
                return new Laya.Point(X, Y);
            }
            Point.getRoundPointOld = getRoundPointOld;
            function getRoundPointNew(angle, radius, centerPos) {
                const radian = getRadianByAngle(angle);
                if (centerPos) {
                    const x = centerPos.x + Math.cos(radian) * radius;
                    const y = centerPos.y + Math.sin(radian) * radius;
                    return new Laya.Point(x, y);
                }
                else {
                    return new Laya.Point(null, null);
                }
            }
            Point.getRoundPointNew = getRoundPointNew;
            function randomPointByCenter(centerPos, radiusX, radiusY, count = 1) {
                let arr = [];
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
            Point.randomPointByCenter = randomPointByCenter;
            function getPointArrBetweenTwoPoint(p1, p2, num) {
                let arr = [];
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
            Point.getPointArrBetweenTwoPoint = getPointArrBetweenTwoPoint;
            function reverseVector(Vecoter1, Vecoter2, normalizing) {
                let p = new Laya.Point(Vecoter1.x - Vecoter2.x, Vecoter1.y - Vecoter2.y);
                if (normalizing) {
                    p.normalize();
                }
                return p;
            }
            Point.reverseVector = reverseVector;
        })(Point = LwgTools.Point || (LwgTools.Point = {}));
        let D3;
        (function (D3) {
            function setLightShadow(light, shadowMode = Laya.ShadowMode.SoftHigh, shadowDistance = 200, shadowResolution = 4096, shadowCascadesModeshadowCascadesMode = Laya.ShadowCascadesMode.NoCascades) {
                light.shadowMode = shadowMode;
                light.shadowDistance = shadowDistance;
                light.shadowResolution = shadowResolution;
                light.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades;
            }
            D3.setLightShadow = setLightShadow;
            function setCastShadow(node, bool) {
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
            D3.setCastShadow = setCastShadow;
            function setReceiveShadow(node, bool) {
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
            D3.setReceiveShadow = setReceiveShadow;
            function randomScopeByPosition(sp3D, scopeSize) {
                let _pX = LwgTools.Num.randomOneBySection(scopeSize[0][0], scopeSize[1][0]);
                let _pY = LwgTools.Num.randomOneBySection(scopeSize[0][1], scopeSize[1][1]);
                let _pZ = LwgTools.Num.randomOneBySection(scopeSize[0][2], scopeSize[1][2]);
                _pX = LwgTools.Num.randomOneHalf() == 0 ? _pX : -_pX;
                _pY = LwgTools.Num.randomOneHalf() == 0 ? _pY : -_pY;
                _pZ = LwgTools.Num.randomOneHalf() == 0 ? _pZ : -_pZ;
                sp3D.transform.position = new Laya.Vector3(sp3D.transform.position.x + _pX, sp3D.transform.position.y + _pY, sp3D.transform.position.z + _pZ);
            }
            D3.randomScopeByPosition = randomScopeByPosition;
            function getMeshSize(MSp3D) {
                if (MSp3D.meshRenderer) {
                    let v3;
                    let extent = MSp3D.meshRenderer.bounds.getExtent();
                    return v3 = new Laya.Vector3(extent.x * 2, extent.y * 2, extent.z * 2);
                }
            }
            D3.getMeshSize = getMeshSize;
            function getSkinMeshSize(MSp3D) {
                if (MSp3D.skinnedMeshRenderer) {
                    let v3;
                    let extent = MSp3D.skinnedMeshRenderer.bounds.getExtent();
                    return v3 = new Laya.Vector3(extent.x * 2, extent.y * 2, extent.z * 2);
                }
            }
            D3.getSkinMeshSize = getSkinMeshSize;
            function getTwoNodeDistance(obj1, obj2) {
                let obj1V3 = obj1.transform.position;
                let obj2V3 = obj2.transform.position;
                let p = new Laya.Vector3();
                Laya.Vector3.subtract(obj1V3, obj2V3, p);
                let lenp = Laya.Vector3.scalarLength(p);
                return lenp;
            }
            D3.getTwoNodeDistance = getTwoNodeDistance;
            function getTwoPositionDistance(v1, v2) {
                let p = getTwoSubV3(v1, v2);
                let lenp = Laya.Vector3.scalarLength(p);
                return lenp;
            }
            D3.getTwoPositionDistance = getTwoPositionDistance;
            function getTwoSubV3(V31, V32, normalizing) {
                let p = new Laya.Vector3();
                Laya.Vector3.subtract(V31, V32, p);
                if (normalizing) {
                    let p1 = new Laya.Vector3();
                    Laya.Vector3.normalize(p, p1);
                    return p1;
                }
                else {
                    return p;
                }
            }
            D3.getTwoSubV3 = getTwoSubV3;
            function getMaximumDistanceLimit(originV3, obj, length) {
                let subP = new Laya.Vector3();
                let objP = obj.transform.position;
                Laya.Vector3.subtract(objP, originV3, subP);
                let lenP = Laya.Vector3.scalarLength(subP);
                if (lenP >= length) {
                    let normalizP = new Laya.Vector3();
                    Laya.Vector3.normalize(subP, normalizP);
                    let x = originV3.x + normalizP.x * length;
                    let y = originV3.y + normalizP.y * length;
                    let z = originV3.z + normalizP.z * length;
                    let p = new Laya.Vector3(x, y, z);
                    obj.transform.position = p;
                    return p;
                }
            }
            D3.getMaximumDistanceLimit = getMaximumDistanceLimit;
            function getPosToScreen(v3, camera) {
                let ScreenV4 = new Laya.Vector4();
                camera.viewport.project(v3, camera.projectionViewMatrix, ScreenV4);
                let point = new Laya.Vector2();
                point.x = ScreenV4.x / Laya.stage.clientScaleX;
                point.y = ScreenV4.y / Laya.stage.clientScaleY;
                return point;
            }
            D3.getPosToScreen = getPosToScreen;
            function getReverseV3(Vecoter1, Vecoter2, normalizing) {
                let p = new Laya.Vector3(Vecoter1.x - Vecoter2.x, Vecoter1.y - Vecoter2.y, Vecoter1.z - Vecoter2.z);
                if (normalizing) {
                    let returnP = new Laya.Vector3();
                    Laya.Vector3.normalize(p, returnP);
                    return returnP;
                }
                else {
                    return p;
                }
            }
            D3.getReverseV3 = getReverseV3;
            function rayScanning(camera, scene3D, vector2, filtrateName) {
                let _ray = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0));
                let outs = new Array();
                const _v2 = new Laya.Vector2(Laya.stage.clientScaleX * vector2.x, Laya.stage.clientScaleY * vector2.y);
                camera.viewportPointToRay(_v2, _ray);
                scene3D.physicsSimulation.rayCastAll(_ray, outs);
                if (filtrateName) {
                    let chek;
                    for (let i = 0; i < outs.length; i++) {
                        let Sp3d = outs[i].collider.owner;
                        if (Sp3d.name == filtrateName) {
                            chek = outs[i];
                        }
                    }
                    return chek;
                }
                else {
                    return outs;
                }
            }
            D3.rayScanning = rayScanning;
            function rayScanningFirst(camera, scene3D, vector2) {
                let _ray = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0));
                let out = new Laya.HitResult();
                const _v2 = new Laya.Vector2(Laya.stage.clientScaleX * vector2.x, Laya.stage.clientScaleY * vector2.y);
                camera.viewportPointToRay(_v2, _ray);
                scene3D.physicsSimulation.rayCast(_ray, out);
                return out;
            }
            D3.rayScanningFirst = rayScanningFirst;
            function playAnimator(Sp3D, aniName, speed = 1, normalizedTime, layerIndex) {
                let sp3DAni = Sp3D.getComponent(Laya.Animator);
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
                }
                else {
                    try {
                        sp3DAni.play(aniName, layerIndex);
                    }
                    catch (error) {
                        console.log(Sp3D.name, '没有动画组件', aniName);
                    }
                }
                return sp3DAni;
            }
            D3.playAnimator = playAnimator;
        })(D3 = LwgTools.D3 || (LwgTools.D3 = {}));
        let Skeleton;
        (function (Skeleton) {
            function sk_indexControl(sk, name) {
                sk.play(name, true);
                sk.player.currentTime = 15 * 1000 / sk.player.cacheFrameRate;
            }
            Skeleton.sk_indexControl = sk_indexControl;
        })(Skeleton = LwgTools.Skeleton || (LwgTools.Skeleton = {}));
        let Draw;
        (function (Draw) {
            function drawPieMask(parent, startAngle, endAngle) {
                parent.cacheAs = "bitmap";
                let drawPieSpt = new Laya.Sprite();
                drawPieSpt.blendMode = "destination-out";
                parent.addChild(drawPieSpt);
                let drawPie = drawPieSpt.graphics.drawPie(parent.width / 2, parent.height / 2, parent.width / 2 + 10, startAngle, endAngle, "#000000");
                return drawPie;
            }
            Draw.drawPieMask = drawPieMask;
            function screenshot(Sp, quality) {
                const htmlCanvas = Sp.drawToCanvas(Sp.width, Sp.height, Sp.x, Sp.y);
                const base64 = htmlCanvas.toBase64("image/png", quality ? quality : 1);
                return base64;
            }
            Draw.screenshot = screenshot;
            Draw._texArr = [];
            function cameraToSprite(camera, sprite) {
                const _camera = camera.clone();
                camera.scene.addChild(_camera);
                _camera.transform.position = camera.transform.position;
                _camera.transform.localRotationEuler = camera.transform.localRotationEuler;
                _camera.renderTarget = new Laya.RenderTexture(sprite.width, sprite.height);
                _camera.renderingOrder = -1;
                _camera.clearFlag = Laya.CameraClearFlags.Sky;
                const ptex = new Laya.Texture(_camera.renderTarget, Laya.Texture.DEF_UV);
                sprite.graphics.drawTexture(ptex, sprite.x, sprite.y, sprite.width, sprite.height);
                Draw._texArr.push(ptex);
                if (Draw._texArr.length > 3) {
                    Draw._texArr[0].destroy();
                    Draw._texArr.shift();
                }
                LwgTimer.frameOnce(5, this, () => {
                    _camera.destroy();
                });
            }
            Draw.cameraToSprite = cameraToSprite;
            function drawToTex(Sp, quality) {
                let tex = Sp.drawToTexture(Sp.width, Sp.height, Sp.x, Sp.y);
                return tex;
            }
            Draw.drawToTex = drawToTex;
            function maskRound(sp, circleArr, eliminate) {
                if (eliminate == undefined || eliminate == true) {
                    Node.destroyAllChildren(sp);
                }
                let interactionArea = sp.getChildByName('maskRound');
                if (!interactionArea) {
                    interactionArea = new Laya.Sprite();
                    interactionArea.name = 'maskRound';
                    interactionArea.blendMode = "destination-out";
                    sp.addChild(interactionArea);
                }
                sp.cacheAs = "bitmap";
                for (let index = 0; index < circleArr.length; index++) {
                    interactionArea.graphics.drawCircle(circleArr[index][0], circleArr[index][1], circleArr[index][2], "#000000");
                }
                interactionArea.pos(0, 0);
                return interactionArea;
            }
            Draw.maskRound = maskRound;
            function maskRect(sp, roundrectArr, eliminate) {
                if (eliminate == undefined || eliminate == true) {
                    Node.removeAllChildren(sp);
                }
                let interactionArea = sp.getChildByName('maskRectRound');
                if (!interactionArea) {
                    interactionArea = new Laya.Sprite();
                    interactionArea.name = 'maskRectRound';
                    interactionArea.blendMode = "destination-out";
                    sp.addChild(interactionArea);
                }
                if (sp.cacheAs !== "bitmap")
                    sp.cacheAs = "bitmap";
                for (let index = 0; index < roundrectArr.length; index++) {
                    const element = roundrectArr[index];
                    element[0] = Math.round(element[0]);
                    element[1] = Math.round(element[1]);
                    element[2] = Math.round(element[2]);
                    element[3] = Math.round(element[3]);
                    interactionArea.graphics.drawRect(element[0], element[1], element[2], element[3], { fillStyle: "#000000" });
                }
            }
            Draw.maskRect = maskRect;
            function maskRectRound(sp, roundrectArr, eliminate) {
                if (eliminate == undefined || eliminate == true) {
                    Node.removeAllChildren(sp);
                }
                let interactionArea = sp.getChildByName('maskRectRound');
                if (!interactionArea) {
                    interactionArea = new Laya.Sprite();
                    interactionArea.name = 'maskRectRound';
                    interactionArea.blendMode = "destination-out";
                    sp.addChild(interactionArea);
                }
                if (sp.cacheAs !== "bitmap")
                    sp.cacheAs = "bitmap";
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
            Draw.maskRectRound = maskRectRound;
        })(Draw = LwgTools.Draw || (LwgTools.Draw = {}));
        let ObjArray;
        (function (ObjArray_1) {
            function sortByProperty(array, property) {
                var compare = function (obj1, obj2) {
                    var val1 = obj1[property];
                    var val2 = obj2[property];
                    if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
                        val1 = Number(val1);
                        val2 = Number(val2);
                    }
                    if (val1 < val2) {
                        return -1;
                    }
                    else if (val1 > val2) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                };
                array.sort(compare);
                return array;
            }
            ObjArray_1.sortByProperty = sortByProperty;
            function getDiffProByTwoArr(objArr1, objArr2, property) {
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
            ObjArray_1.getDiffProByTwoArr = getDiffProByTwoArr;
            function mergeObjArr1ToObjArr2ByPro(objArr1, objArr2, proName) {
                if (proName) {
                    for (let index = 0; index < objArr1.length; index++) {
                        const obj1 = objArr1[index];
                        for (let index = 0; index < objArr2.length; index++) {
                            const obj2 = objArr2[index];
                            for (const key in obj1) {
                                if (Object.prototype.hasOwnProperty.call(obj1, key)) {
                                    if (obj2[key] === undefined) {
                                        obj2[key] = obj1[key];
                                    }
                                }
                            }
                        }
                    }
                }
                else {
                    for (const key1 in objArr1) {
                        if (Object.prototype.hasOwnProperty.call(objArr1, key1)) {
                            const obj1 = objArr1[key1];
                            for (let index = 0; index < objArr2.length; index++) {
                                const obj2 = objArr2[index];
                                if (obj1[proName] != undefined && obj2[proName] !== undefined) {
                                    for (const objKey in obj1) {
                                        if (Object.prototype.hasOwnProperty.call(obj1, objKey)) {
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
            ObjArray_1.mergeObjArr1ToObjArr2ByPro = mergeObjArr1ToObjArr2ByPro;
            function identicalPropertyObjArr(data1, data2, property) {
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
            ObjArray_1.identicalPropertyObjArr = identicalPropertyObjArr;
            function uniqueByProPerty(arr, property) {
                for (var i = 0, len = arr.length; i < len; i++) {
                    for (var j = i + 1, len = arr.length; j < len; j++) {
                        if (arr[i][property] === arr[j][property]) {
                            arr.splice(j, 1);
                            j--;
                            len--;
                        }
                    }
                }
                return arr;
            }
            ObjArray_1.uniqueByProPerty = uniqueByProPerty;
            function getArrByValue(objArr, property) {
                let arr = [];
                for (let i = 0; i < objArr.length; i++) {
                    if (objArr[i][property]) {
                        arr.push(objArr[i][property]);
                    }
                }
                return arr;
            }
            ObjArray_1.getArrByValue = getArrByValue;
            function arrCopy(ObjArray) {
                var sourceCopy = ObjArray instanceof Array ? [] : {};
                for (var item in ObjArray) {
                    sourceCopy[item] = typeof ObjArray[item] === 'object' ? objCopy(ObjArray[item]) : ObjArray[item];
                }
                return sourceCopy;
            }
            ObjArray_1.arrCopy = arrCopy;
            function modifyProValue(objArr, pro, value) {
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
            ObjArray_1.modifyProValue = modifyProValue;
            function objCopy(obj) {
                var _copyObj = {};
                for (const item in obj) {
                    if (obj.hasOwnProperty(item)) {
                        const element = obj[item];
                        if (typeof element === 'object') {
                            if (Array.isArray(element)) {
                                let arr1 = Arr.copy(element);
                                _copyObj[item] = arr1;
                            }
                            else {
                                objCopy(element);
                            }
                        }
                        else {
                            _copyObj[item] = element;
                        }
                    }
                }
                return _copyObj;
            }
            ObjArray_1.objCopy = objCopy;
        })(ObjArray = LwgTools.ObjArray || (LwgTools.ObjArray = {}));
        let Arr;
        (function (Arr) {
            function sort(arr, inverted = false) {
                if (!inverted) {
                    arr.sort((x, y) => {
                        if (x < y) {
                            return -1;
                        }
                        else if (x > y) {
                            return 1;
                        }
                        else {
                            return 0;
                        }
                    });
                }
                else {
                    arr.sort((x, y) => {
                        if (x < y) {
                            return 1;
                        }
                        else if (x > y) {
                            return -1;
                        }
                        else {
                            return 0;
                        }
                    });
                }
                return arr;
            }
            Arr.sort = sort;
            function addToArray(array1, array2) {
                for (let index = 0; index < array2.length; index++) {
                    const element = array2[index];
                    array1.push(element);
                }
                return array1;
            }
            Arr.addToArray = addToArray;
            function inverted(array) {
                let arr = [];
                for (let index = array.length - 1; index >= 0; index--) {
                    const element = array[index];
                    arr.push(element);
                }
                array = arr;
                return array;
            }
            Arr.inverted = inverted;
            function randomGetOutNewArr(arr, num) {
                if (!num) {
                    num = 1;
                }
                let arrCopy = Arr.copy(arr);
                let arr0 = [];
                if (num > arrCopy.length) {
                    console.log('数组长度小于取出的数！');
                    return;
                }
                else {
                    for (let index = 0; index < num; index++) {
                        let ran = Math.round(Math.random() * (arrCopy.length - 1));
                        let a1 = arrCopy[ran];
                        arrCopy.splice(ran, 1);
                        arr0.push(a1);
                    }
                    return arr0;
                }
            }
            Arr.randomGetOutNewArr = randomGetOutNewArr;
            function randomGetOut(arr, num) {
                if (!num) {
                    num = 1;
                }
                let arrCopy = Arr.copy(arr);
                let arr0 = [];
                if (num > arrCopy.length) {
                    console.log('数组长度小于取出的数！');
                    return;
                }
                else {
                    for (let index = 0; index < num; index++) {
                        let ran = Math.round(Math.random() * (arrCopy.length - 1));
                        let a1 = arrCopy[ran];
                        arrCopy.splice(ran, 1);
                        arr0.push(a1);
                    }
                    return arr0;
                }
            }
            Arr.randomGetOut = randomGetOut;
            function randomGetOne(arr) {
                let arrCopy = copy(arr);
                let ran = Math.round(Math.random() * (arrCopy.length - 1));
                return arrCopy[ran];
            }
            Arr.randomGetOne = randomGetOne;
            function copy(arr1) {
                var arr = [];
                for (var i = 0; i < arr1.length; i++) {
                    arr.push(arr1[i]);
                }
                return arr;
            }
            Arr.copy = copy;
            function unique01(arr) {
                for (var i = 0, len = arr.length; i < len; i++) {
                    for (var j = i + 1, len = arr.length; j < len; j++) {
                        if (arr[i] === arr[j]) {
                            arr.splice(j, 1);
                            j--;
                            len--;
                        }
                    }
                }
                return arr;
            }
            Arr.unique01 = unique01;
            function unique02(arr) {
                arr = arr.sort();
                var arr1 = [arr[0]];
                for (var i = 1, len = arr.length; i < len; i++) {
                    if (arr[i] !== arr[i - 1]) {
                        arr1.push(arr[i]);
                    }
                }
                return arr1;
            }
            Arr.unique02 = unique02;
            function unique03(arr) {
                return Array.from(new Set(arr));
            }
            Arr.unique03 = unique03;
            function oneExcludeOtherOne(arr1, arr2) {
                let arr1Capy = Arr.copy(arr1);
                let arr2Capy = Arr.copy(arr2);
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
            Arr.oneExcludeOtherOne = oneExcludeOtherOne;
            function moreExclude(arrays, exclude) {
                let arr0 = [];
                for (let i = 0; i < arrays.length; i++) {
                    for (let j = 0; j < arrays[i].length; j++) {
                        arr0.push(arrays[i][j]);
                    }
                }
                let arr1 = copy(arr0);
                let arr2 = copy(arr1);
                let arrNum = [];
                for (let k = 0; k < arr2.length; k++) {
                    arrNum.push({
                        name: arr2[k],
                        num: 0,
                    });
                }
                for (let l = 0; l < arr0.length; l++) {
                    for (let m = 0; m < arrNum.length; m++) {
                        if (arr0[l] == arrNum[m]['name']) {
                            arrNum[m]['num']++;
                        }
                    }
                }
                let arrAllHave = [];
                let arrDiffHave = [];
                for (let n = 0; n < arrNum.length; n++) {
                    const element = arrNum[n];
                    if (arrNum[n]['num'] == arrays.length) {
                        arrAllHave.push(arrNum[n]['name']);
                    }
                    else {
                        arrDiffHave.push(arrNum[n]['name']);
                    }
                }
                if (!exclude) {
                    return arrAllHave;
                }
                else {
                    return arrDiffHave;
                }
            }
            Arr.moreExclude = moreExclude;
        })(Arr = LwgTools.Arr || (LwgTools.Arr = {}));
    })(LwgTools || (LwgTools = {}));
    var LwgGuide;
    (function (LwgGuide) {
        class Init {
            constructor(view, dataArr, indexStorage = false) {
                if (view.guideCompelet) {
                    view.close();
                }
                else {
                    view.visible = false;
                    view.guideDataArr = dataArr;
                    view.guideIndexStorage = indexStorage;
                    LwgScene.commonViewParent.addChild(view);
                }
            }
            get LwgGuide() {
                return 'LwgGuide';
            }
        }
        LwgGuide.Init = Init;
        let EmClickType;
        (function (EmClickType) {
            EmClickType["down"] = "down";
            EmClickType["move"] = "move";
            EmClickType["up"] = "up";
            EmClickType["out"] = "out";
            EmClickType["slide"] = "slide";
            EmClickType["slideL"] = "slideL";
            EmClickType["slideR"] = "slideR";
            EmClickType["slideLR"] = "slideLR";
            EmClickType["slideU"] = "slideU";
            EmClickType["slideD"] = "slideD";
            EmClickType["slideUD"] = "slideUD";
            EmClickType["multiTouch"] = "multiTouch";
        })(EmClickType = LwgGuide.EmClickType || (LwgGuide.EmClickType = {}));
        let EmMaskType;
        (function (EmMaskType) {
            EmMaskType["none"] = "none";
            EmMaskType["round"] = "round";
            EmMaskType["rec"] = "rect";
            EmMaskType["rectRound"] = "rectRound";
        })(EmMaskType = LwgGuide.EmMaskType || (LwgGuide.EmMaskType = {}));
        class GuideBase extends ui.Views.Base.GuideUI {
            constructor() {
                super(...arguments);
                this.guideDataArr = [];
                this._guideIndex = 1;
            }
            get guideIndex() {
                if (this.guideCompelet) {
                    return -1;
                }
                else {
                    if (this.guideIndexStorage) {
                        return LwgStorage.number(`Guide/guideIndex`).value;
                    }
                    else {
                        return this._guideIndex;
                    }
                }
            }
            set guideIndex(val) {
                this._guideIndex = val;
                if (this.guideIndexStorage) {
                    LwgStorage.number(`Guide/guideIndex`).value = val;
                }
                this.clear();
                this.stepData.stepComplete && this.stepData.stepComplete();
                this.guideStepComplete();
                if (this.stepData.continue) {
                    this.guideStart();
                }
            }
            get guideCompelet() {
                return LwgStorage.bool(`Guide/guideCompelet`, null, false).value;
            }
            set guideCompelet(val) {
                LwgStorage.bool(`Guide/guideCompelet`).value = val;
                if (val) {
                    this.close();
                }
            }
            onAwake() {
                this.lwgOnAwake();
                this.lwgEvent();
            }
            lwgOnAwake() { }
            ;
            lwgEvent() { }
            ;
            guideStartCb() { }
            guideStepComplete() { }
            clear() {
                this.visible = false;
                for (let index = 0; index < this.numChildren; index++) {
                    const element = this.getChildAt(index);
                    element.visible = false;
                }
                Laya.timer.clearAll(this);
                this.clickX = null;
                this.clickY = null;
                LwgClick.Filter.setValue(LwgClick.EmfilterType.all);
            }
            evRegister(name, func) {
                LwgEvent.register(name, this, func);
            }
            evRegisterOnce(name, func) {
                LwgEvent.registerOnce(name, this, func);
            }
            evNotify(name, args) {
                LwgEvent.notify(name, args);
            }
            guideStart() {
                this.stepData = null;
                for (let index = 0; index < this.guideDataArr.length; index++) {
                    const data = this.guideDataArr[index];
                    if (data.index === this.guideIndex) {
                        this.stepData = data;
                    }
                }
                if (this.stepData) {
                    this.visible = true;
                    this.stepData.stepReady && this.stepData.stepReady();
                    this.stepData.mask && this[`${this.stepData.mask.type}Mask`] && this[`${this.stepData.mask.type}Mask`]();
                    const targetArr = this.stepData.click.targetArr;
                    for (let index = 0; index < targetArr.length; index++) {
                        const target = targetArr[index];
                        LwgClick.Filter.setValue(this.stepData.click.filter, this.stepData.click.targetArr);
                        this[`${this.stepData.click.type}Click`] && this[`${this.stepData.click.type}Click`](target);
                    }
                }
                else {
                    console.log('不存在引导步骤,引导结束:', this.guideIndex);
                    this.guideCompelet = true;
                }
            }
            noneMask() {
                this.background.visible = false;
            }
            roundMask() {
                this.background.visible = true;
                const round = this.stepData.mask.roundData;
                if (round.length > 0) {
                    LwgTools.Draw.maskRound(this.background, round);
                }
                else {
                    console.log('步骤：', this.guideIndex, '遮罩数据不正确');
                }
            }
            rectMask() {
                this.background.visible = true;
                const rect = this.stepData.mask.rectData;
                if (rect.length > 0) {
                    LwgTools.Draw.maskRect(this.background, rect);
                }
                else {
                    console.log('步骤：', this.guideIndex, '遮罩数据不正确');
                }
            }
            rectRoundMask() {
                this.background.visible = true;
                const rectRound = this.stepData.mask.rectRoundData;
                if (rectRound.length > 0) {
                    LwgTools.Draw.maskRectRound(this.background, rectRound);
                }
                else {
                    console.log('步骤：', this.guideIndex, '遮罩数据不正确');
                }
            }
            downClick(target) {
                const down = () => {
                    LwgClick.off(target);
                    this.guideIndex++;
                };
                LwgClick.on(this.stepData.click.effectType, target, this, down, null, null, null, [[], [], [], []]);
            }
            moveClick(target) {
                const move = () => {
                    LwgClick.off(target);
                    this.guideIndex++;
                };
                LwgClick.on(this.stepData.click.effectType, target, this, null, move, null, null, [[], [], [], []]);
            }
            upClick(target) {
                target.once(Laya.Event.MOUSE_UP, this, () => {
                    this.guideIndex++;
                });
            }
            outClick(target) {
                const out = () => {
                    LwgClick.off(target);
                    this.guideIndex++;
                };
                LwgClick.on(this.stepData.click.effectType, target, this, null, null, null, out, [[], [], [], []]);
            }
            commonDown(e) {
                this.clickX = e.stageX;
                this.clickY = e.stageY;
            }
            get slideValue() {
                return this.stepData.click.slideValue ? this.stepData.click.slideValue : 50;
            }
            ;
            slideClick(target) {
                const move = (e) => {
                    if (this.clickX) {
                        if (Math.abs(e.stageX - this.clickX) >= this.slideValue || Math.abs(e.stageY - this.clickY) >= this.slideValue) {
                            LwgClick.off(target);
                            this.guideIndex++;
                        }
                    }
                };
                LwgClick.on(this.stepData.click.effectType, target, this, this.commonDown, move, null, null, [[], [], [], []]);
            }
            slideLClick(target) {
                const move = (e) => {
                    if (this.clickX) {
                        if (e.stageX - this.clickX <= this.slideValue) {
                            LwgClick.off(target);
                            this.guideIndex++;
                        }
                    }
                };
                LwgClick.on(this.stepData.click.effectType, target, this, this.commonDown, move, null, null, [[], [], [], []]);
            }
            slideRClick(target) {
                const move = (e) => {
                    if (this.clickX) {
                        if (e.stageX - this.clickX >= this.slideValue) {
                            LwgClick.off(target);
                            this.guideIndex++;
                        }
                    }
                };
                LwgClick.on(this.stepData.click.effectType, target, this, this.commonDown, move, null, null, [[], [], [], []]);
            }
            slideLRClick(target) {
                const move = (e) => {
                    if (this.clickX) {
                        if (Math.abs(e.stageX - this.clickX) >= this.slideValue) {
                            LwgClick.off(target);
                            this.guideIndex++;
                        }
                    }
                };
                LwgClick.on(this.stepData.click.effectType, target, this, this.commonDown, move, null, null, [[], [], [], []]);
            }
            slideUClick(target) {
                const move = (e) => {
                    if (this.clickY) {
                        if (e.stageY - this.clickY <= this.slideValue) {
                            LwgClick.off(target);
                            this.guideIndex++;
                        }
                    }
                };
                LwgClick.on(this.stepData.click.effectType, target, this, this.commonDown, move, null, null, [[], [], [], []]);
            }
            slideDClick(target) {
                const move = (e) => {
                    if (this.clickY) {
                        if (e.stageY - this.clickY >= this.slideValue) {
                            LwgClick.off(target);
                            this.guideIndex++;
                        }
                    }
                };
                LwgClick.on(this.stepData.click.effectType, target, this, this.commonDown, move, null, null, [[], [], [], []]);
            }
            slideUDClick(target) {
                const move = (e) => {
                    if (this.clickY) {
                        if (Math.abs(e.stageY - this.clickY) >= this.slideValue) {
                            LwgClick.off(target);
                            this.guideIndex++;
                        }
                    }
                };
                LwgClick.on(this.stepData.click.effectType, target, this, this.commonDown, move, null, null, [[], [], [], []]);
            }
            multiTouchClick(target) {
            }
        }
        LwgGuide.GuideBase = GuideBase;
    })(LwgGuide || (LwgGuide = {}));
    var LwgPreLoad;
    (function (LwgPreLoad) {
        class Init {
            constructor(_showLog = true) {
                LwgPreLoad.showLog = _showLog;
            }
            get LwgPreLoad() {
                return 'LwgPreLoad';
            }
        }
        LwgPreLoad.Init = Init;
        class PreLoadBase extends LwgScene.SceneBase {
            constructor() {
                super(...arguments);
                this.ImageArr = [];
                this.TextureArr = [];
                this.Prefab2DArr = [];
                this.ViewsArr = [];
                this.Scene3DArr = [];
                this.Prefab3DArr = [];
                this.Texture2DArr = [];
                this.EffectsTex2DArr = [];
                this.MaterialArr = [];
                this.Mesh3DArr = [];
                this.JsonArr = [];
                this.SkeletonArr = [];
                this.AtlasArr = [];
                this.loadRes = [this.ImageArr, this.TextureArr, this.Prefab2DArr, this.ViewsArr, this.Prefab3DArr, this.Texture2DArr, this.EffectsTex2DArr, this.MaterialArr, this.Mesh3DArr, this.Scene3DArr, this.JsonArr, this.SkeletonArr, this.AtlasArr];
                this.loadOrderIndex = 0;
                this.sumProgress = 0;
                this.currentProgress = 0;
                this.showLog = true;
            }
            get lodePercent() {
                return this.currentProgress / this.sumProgress;
            }
            lodeStart(res) {
                for (const lodeClassName in res) {
                    if (Object.prototype.hasOwnProperty.call(res, lodeClassName)) {
                        const lodeClass = res[lodeClassName];
                        if (lodeClass instanceof Object) {
                            for (const lodeName in lodeClass) {
                                if (Object.prototype.hasOwnProperty.call(lodeClass, lodeName)) {
                                    const obj = lodeClass[lodeName];
                                    if (obj instanceof Object) {
                                        this[`${lodeClassName}Arr`].push(obj);
                                    }
                                }
                            }
                        }
                    }
                }
                for (let index = 0; index < this.loadRes.length; index++) {
                    this.sumProgress += this.loadRes[index].length;
                    if (this.loadRes[index].length <= 0) {
                        this.loadRes.splice(index, 1);
                        index--;
                    }
                }
                const time = this.lwgOpenAni();
                Laya.timer.once(time ? time : 0, this, () => {
                    this.lodeRules();
                });
            }
            lodeStepComplete(url) { }
            lodeAllComplete() { return 0; }
            ;
            lodeAllCompleteAfter() { return false; }
            ;
            stepComplete(url) {
                this.currentProgress++;
                LwgPreLoad.showLog && console.log('当前进度条进度:', this.currentProgress / this.sumProgress);
                if (this.currentProgress >= this.sumProgress) {
                    if (this.sumProgress == 0) {
                        return;
                    }
                    LwgPreLoad.showLog && console.log(`所有资源加载完成！此时所有资源可通过例如:Laya.loader.getRes("url")获取`);
                    this.allComplete();
                }
                else {
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
            allComplete() {
                Laya.timer.once(this.lodeAllComplete(), this, () => {
                    if (!this.lodeAllCompleteAfter()) {
                        switch (this.owner.name) {
                            case LwgScene.NameBase.PreLoadCutIn:
                                if (LwgScene.preLoadInfo.openIsOverlay) {
                                    this.openOverlayScene(LwgScene.preLoadInfo.openName);
                                }
                                else {
                                    this.openScene(LwgScene.preLoadInfo.openName);
                                }
                                break;
                            case LwgScene.NameBase.PreLoad:
                                this.openScene(LwgScene.NameBase.Start);
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
                });
            }
            lodeLog(resArr, index, res, typeName, completeFunc) {
                const obj = resArr[index];
                const urlOrUrlArr = resArr[index].url;
                if (typeof urlOrUrlArr === 'object') {
                    LwgPreLoad.showLog && console.log(typeName, `数组加载完成，为数组对象`, '长度为:', urlOrUrlArr.length);
                }
                else {
                    if (res == null) {
                        LwgPreLoad.showLog && console.log(`XXXXXXXXXXX${typeName}:${urlOrUrlArr}加载失败！不会停止加载进程！, 数组下标为：${index}, 'XXXXXXXXXXX`);
                    }
                    else {
                        LwgPreLoad.showLog && console.log(`${typeName}:${urlOrUrlArr}加载完成！, 数组下标为${index}`);
                        completeFunc && completeFunc();
                    }
                }
                obj.callBack && obj.callBack(res);
                this.stepComplete(urlOrUrlArr);
            }
            addDestoryAndClear(obj) {
                obj.destoryAndClear = () => {
                    Laya.loader.clearRes(obj.url);
                    Laya.Loader.clearRes(obj.url);
                };
            }
            lodeRules() {
                if (this.loadRes.length <= 0) {
                    LwgPreLoad.showLog && console.log('没有加载项');
                    this.allComplete();
                    return;
                }
                let alreadyClassifyLen = 0;
                for (let i = 0; i < this.loadOrderIndex; i++) {
                    alreadyClassifyLen += this.loadRes[i].length;
                }
                const classifyIndex = this.currentProgress - alreadyClassifyLen;
                switch (this.loadRes[this.loadOrderIndex]) {
                    case this.ImageArr:
                        const img = this.ImageArr[classifyIndex];
                        Laya.loader.load(this.ImageArr[classifyIndex].url, Laya.Handler.create(this, (res) => {
                            this.lodeLog(this.loadRes[this.loadOrderIndex], classifyIndex, res, '2D图片', null);
                        }));
                        break;
                    case this.ViewsArr:
                        const viws = this.ViewsArr[classifyIndex];
                        Laya.loader.load(LwgPath.Views + viws.url + '.json', Laya.Handler.create(this, (scene) => {
                            this.lodeLog(this.loadRes[this.loadOrderIndex], classifyIndex, scene, '2D场景', () => {
                                viws.instance = scene;
                            });
                        }), null, Laya.Loader.JSON);
                        break;
                    case this.Scene3DArr:
                        const scene3D = this.Scene3DArr[classifyIndex];
                        Laya.Scene3D.load(scene3D.url + '.ls', Laya.Handler.create(this, (Scene3D) => {
                            this.lodeLog(this.loadRes[this.loadOrderIndex], classifyIndex, Scene3D, '3D场景', () => {
                                scene3D.instance = Scene3D;
                                this.addDestoryAndClear(scene3D);
                                Laya.loader.setGroup(scene3D.url, scene3D.group);
                            });
                        }));
                        break;
                    case this.Prefab3DArr:
                        const prefab3D = this.Prefab3DArr[classifyIndex];
                        if (typeof prefab3D.url === 'object') {
                            prefab3D.instanceArr = [];
                            let index = 0;
                            var lodeSp3DArr = (urlArr, sprite3DArr, cb) => {
                                const url = urlArr[index];
                                if (!url) {
                                    cb && cb();
                                    return;
                                }
                                Laya.Sprite3D.load(url, Laya.Handler.create(this, (sp3d) => {
                                    if (sp3d) {
                                        sprite3DArr.push(sp3d);
                                        LwgPreLoad.showLog && console.log('3D预制体：', url, '加载成功');
                                    }
                                    else {
                                        LwgPreLoad.showLog && console.log('XXXXXXXXXXX 3D预制体：', url, '不存在！,继续加载');
                                    }
                                    index++;
                                    lodeSp3DArr(urlArr, sprite3DArr, cb);
                                }));
                            };
                            lodeSp3DArr(prefab3D.url, prefab3D.instanceArr, () => {
                                this.lodeLog(this.loadRes[this.loadOrderIndex], classifyIndex, prefab3D.instanceArr, '3D预制体', null);
                            });
                        }
                        else {
                            Laya.Sprite3D.load(prefab3D.url + '.lh', Laya.Handler.create(this, (Sp3D) => {
                                this.lodeLog(this.loadRes[this.loadOrderIndex], classifyIndex, Sp3D, '3D预制体', () => {
                                    prefab3D.instance = Sp3D;
                                    this.addDestoryAndClear(prefab3D);
                                });
                            }));
                        }
                        break;
                    case this.Mesh3DArr:
                        const mesh3D = this.Mesh3DArr[classifyIndex];
                        Laya.Mesh.load(this.Mesh3DArr[classifyIndex].url, Laya.Handler.create(this, (Mesh3D) => {
                            this.lodeLog(this.loadRes[this.loadOrderIndex], classifyIndex, Mesh3D, '3D网格', () => {
                                mesh3D.instance = Mesh3D;
                                this.addDestoryAndClear(mesh3D);
                            });
                        }));
                        break;
                    case this.TextureArr:
                        const texture = this.TextureArr[classifyIndex];
                        Laya.loader.load(this.TextureArr[classifyIndex].url, Laya.Handler.create(this, (tex) => {
                            this.lodeLog(this.loadRes[this.loadOrderIndex], classifyIndex, tex, '纹理', () => {
                                texture.instance = tex;
                                this.addDestoryAndClear(texture);
                            });
                        }));
                        break;
                    case this.Texture2DArr:
                        const texture2D = this.Texture2DArr[classifyIndex];
                        Laya.Texture2D.load(this.Texture2DArr[classifyIndex].url, Laya.Handler.create(this, (tex2D) => {
                            this.lodeLog(this.loadRes[this.loadOrderIndex], classifyIndex, tex2D, '3D纹理', () => {
                                texture2D.instance = tex2D;
                                this.addDestoryAndClear(texture2D);
                            });
                        }));
                        break;
                    case this.EffectsTex2DArr:
                        const effectsTex2D = this.Texture2DArr[classifyIndex];
                        Laya.Texture2D.load(this.EffectsTex2DArr[classifyIndex].url, Laya.Handler.create(this, (tex2D) => {
                            this.lodeLog(this.loadRes[this.loadOrderIndex], classifyIndex, tex2D, '3D纹理', () => {
                                effectsTex2D.instance = tex2D;
                                this.addDestoryAndClear(effectsTex2D);
                            });
                        }));
                        break;
                    case this.MaterialArr:
                        const material = this.MaterialArr[classifyIndex];
                        Laya.Material.load(this.MaterialArr[classifyIndex].url + '.lmat', Laya.Handler.create(this, (Material) => {
                            this.lodeLog(this.loadRes[this.loadOrderIndex], classifyIndex, Material, '材质', () => {
                                material.instance = Material;
                                this.addDestoryAndClear(material);
                                Material.lock = material.lock;
                            });
                        }));
                        break;
                    case this.JsonArr:
                        const lodeObj = this.JsonArr[classifyIndex];
                        Laya.loader.load(LwgPath.GameData + lodeObj.url + '.json', Laya.Handler.create(this, (Json) => {
                            this.lodeLog(this.loadRes[this.loadOrderIndex], classifyIndex, Json, '数据表', () => {
                                if (lodeObj.dataArrName) {
                                    lodeObj.dataArr = Json[lodeObj.dataArrName];
                                }
                                else {
                                    lodeObj.dataArr = Json["RECORDS"];
                                    lodeObj.instance = Json["RECORDS"];
                                }
                            });
                        }), null, Laya.Loader.JSON);
                        break;
                    case this.SkeletonArr:
                        const skeleton = this.SkeletonArr[classifyIndex];
                        if (!skeleton.templet) {
                            skeleton.templet = new Laya.Templet;
                        }
                        skeleton.templet.on(Laya.Event.ERROR, this, () => {
                            LwgPreLoad.showLog && console.log('XXXXXXXXXXX骨骼动画' + this.SkeletonArr[classifyIndex] + '加载失败！不会停止加载进程！', '数组下标为：', classifyIndex, 'XXXXXXXXXXX');
                            this.stepComplete(skeleton.url);
                        });
                        skeleton.templet.on(Laya.Event.COMPLETE, this, () => {
                            LwgPreLoad.showLog && console.log('骨骼动画', this.SkeletonArr[classifyIndex].url, '加载完成！', '数组下标为：', classifyIndex);
                            this.stepComplete(skeleton.url);
                            this.addDestoryAndClear(skeleton);
                            skeleton.callBack && skeleton.callBack(skeleton.templet);
                            skeleton.templet.lock = skeleton.lock;
                        });
                        skeleton.templet.loadAni(this.SkeletonArr[classifyIndex].url);
                        break;
                    case this.Prefab2DArr:
                        const prefab2D = this.Prefab2DArr[classifyIndex];
                        Laya.loader.load(this.Prefab2DArr[classifyIndex].url, Laya.Handler.create(this, (prefabJson) => {
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
        LwgPreLoad.PreLoadBase = PreLoadBase;
        class PreLoadCutInBase extends PreLoadBase {
            get preLoadOpenName() {
                return LwgScene.preLoadInfo.openName;
            }
            get preLoadFromName() {
                return LwgScene.preLoadInfo.fromName;
            }
        }
        LwgPreLoad.PreLoadCutInBase = PreLoadCutInBase;
    })(LwgPreLoad || (LwgPreLoad = {}));
    var LwgInit;
    (function (LwgInit) {
        class InitBase {
            constructor(_LwgPlatform, _LwgControl, _LwgPrelode, _LwgScene, _LwgCurrency, _LwgCommon, _LwgClick, _LwgAdaptive) {
            }
        }
        LwgInit.InitBase = InitBase;
        class InitGame {
            constructor(_LwgSound, _LwgGuide) {
            }
        }
        LwgInit.InitGame = InitGame;
    })(LwgInit || (LwgInit = {}));
    var Lwg3D;
    (function (Lwg3D) {
        class Script3DBase extends Laya.Script3D {
            get cameraPos() {
                if (!this['__cameraPos']) {
                    return this['__cameraPos'] = new Laya.Vector3(this.mainCamera.transform.localPositionX, this.mainCamera.transform.localPositionY, this.mainCamera.transform.localPositionZ);
                }
                else {
                    return this['__cameraPos'];
                }
            }
            get mainCamera() {
                if (!this['_MainCamera']) {
                    if (this.owner.getChildByName('Main Camera')) {
                        return this['_MainCamera'] = this.owner.getChildByName('Main Camera');
                    }
                    for (let index = 0; index < this.owner.numChildren; index++) {
                        const element = this.owner.getChildAt(index);
                        if (typeof element == typeof (Laya.Camera)) {
                            return this['_MainCamera'] = element;
                        }
                    }
                }
                else {
                    return this['_MainCamera'];
                }
            }
            set mainCamera(Camera) {
                this['_MainCamera'] = Camera;
            }
            child(name) {
                if (!this[`_child${name}`]) {
                    if (this.owner.getChildByName(name)) {
                        return this[`_child${name}`] = this.owner.getChildByName(name);
                    }
                    else {
                        console.log(`不存在子节点${name}`);
                    }
                }
                else {
                    return this[`_child${name}`];
                }
            }
            getChildComponent(name, Component) {
                if (!this[`_child${name}${Component}`]) {
                    let Child = this.owner.getChildByName(name);
                    if (Child) {
                        if (Child[Component]) {
                            return this[`_child${name}${Component}`] = Child[Component];
                        }
                        else {
                            console.log(`${name}子节点没有${Component}组件`);
                        }
                    }
                    else {
                        console.log(`不存在子节点${name}`);
                    }
                }
                else {
                    return this[`_child${name}${Component}`];
                }
            }
            childTrans(name) {
                return this.getChildComponent(name, 'transform');
            }
            childMRenderer(name) {
                return this.getChildComponent(name, 'meshRenderer');
            }
            getFindComponent(name, Component) {
                if (!this[`_child${name}${Component}`]) {
                    let Node = LwgTools.Node.findChild3D(this.owner, name);
                    if (Node) {
                        if (Node[Component]) {
                            return this[`_child${name}${Component}`] = Node[Component];
                        }
                        else {
                            console.log(`${name}场景内节点没有${Component}组件`);
                        }
                    }
                    else {
                        console.log(`场景内不存在子节点${name}`);
                    }
                }
                else {
                    return this[`_child${name}${Component}`];
                }
            }
            find(name) {
                if (!this[`_FindNode${name}`]) {
                    let Node = LwgTools.Node.findChild3D(this.owner, name);
                    if (Node) {
                        return this[`_FindNode${name}`] = Node;
                    }
                    else {
                        console.log(`不存在节点${name}`);
                    }
                }
                else {
                    return this[`_FindNode${name}`];
                }
            }
            findMRenderer(name) {
                return this.getFindComponent(name, 'meshRenderer');
            }
            findTrans(name) {
                return this.getFindComponent(name, 'transform');
            }
            lwgReset() { }
            lwgOnAwake() {
            }
            lwgEventRegister() { }
            ;
            evReg(name, func) {
                LwgEvent.register(name, this, func);
            }
            evNotify(name, args) {
                LwgEvent.notify(name, args);
            }
            lwgOnEnable() { }
            lwgOnStart() { }
            lwgOnUpdate() {
            }
            lwgOnDisable() {
            }
            lwgClear() {
                Laya.timer.clearAll(this);
                Laya.Tween.clearAll(this);
                LwgEvent.offAllCaller(this);
                Laya.timer.clearAll(this.owner);
                Laya.Tween.clearAll(this.owner);
                LwgEvent.offAllCaller(this.owner);
            }
        }
        class Scene3DBase extends Script3DBase {
            constructor() {
                super();
                this.cameraFp = new Laya.Vector3;
            }
            onAwake() {
                this.calssName = this['__proto__']['constructor'].name;
                if (this.mainCamera) {
                    this.cameraFp.x = this.mainCamera.transform.localPositionX;
                    this.cameraFp.y = this.mainCamera.transform.localPositionY;
                    this.cameraFp.z = this.mainCamera.transform.localPositionZ;
                }
                this.lwgOnAwake();
            }
            onEnable() {
                this.owner[this.calssName] = this;
                this.lwgEventRegister();
                this.lwgOnEnable();
                this.lwgOpenAni();
            }
            onStart() {
                this.lwgOnStart();
            }
            lwgOpenAni() {
            }
            lwgVanishAni() {
            }
            onUpdate() {
                this.lwgOnUpdate();
            }
            onDisable() {
                this.lwgOnDisable();
                this.lwgClear();
            }
        }
        Lwg3D.Scene3DBase = Scene3DBase;
        class Object3D extends Script3DBase {
            constructor() {
                super();
            }
            get _owner() {
                return this.owner;
            }
            locScale() {
                return this._owner.transform.localScale;
            }
            locPos() {
                return this._owner.transform.localPosition;
            }
            pos() {
                return this._owner.transform.position;
            }
            locEuler() {
                return this._owner.transform.localRotationEuler;
            }
            get parent() {
                return this._owner.parent;
            }
            get transform() {
                return this._owner.transform;
            }
            get scene3D() {
                return this._owner.scene;
            }
            get rig3D() {
                if (!this._owner['__Rigidbody3D']) {
                    this._owner['__Rigidbody3D'] = this._owner.getComponent(Laya.Rigidbody3D);
                }
                return this._owner['__Rigidbody3D'];
            }
            onAwake() {
                this.lwgOnAwake();
                this.ownerAnimator = this.owner.getComponent(Laya.Animator);
            }
            onEnable() {
                this.lwgEventRegister();
                this.lwgOnEnable();
            }
            onUpdate() {
                this.lwgOnUpdate();
            }
            onDisable() {
                this.lwgReset();
                this.lwgOnDisable();
                this.lwgClear();
            }
        }
        Lwg3D.Object3D = Object3D;
    })(Lwg3D || (Lwg3D = {}));
    LwgPlatform;
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

    class AnimationObj extends LwgScene.RuntimeImgBase {
        constructor() {
            super();
        }
        lwgOnAwake() {
            this.breatheBtnHint();
        }
        breatheBtnHint() {
            LwgAni2D.circulation_scale(this, 0.05, 200, 0, () => {
                this.breatheBtnHint();
            });
        }
        bombFlexLR() {
            LwgTimer.loop(2000, this, () => {
                LwgAni2D.bomb_LeftRight(this, 1.22, 250);
            }, true);
        }
    }

    class CloseBtnObj extends LwgScene.RuntimeImgBase {
        lwgOnAwake() {
            LwgClick.off(this);
            LwgClick.on(undefined, this, this, null, null, () => {
                this.closeSene();
            });
        }
        closeSene() {
            if (this.isClose) {
                return;
            }
            this.isClose = true;
            LwgScene.closeOverlayScene(LwgScene.findNodeBelongToScene(this));
        }
    }

    var GameEnum;
    (function (GameEnum) {
        let ResType;
        (function (ResType) {
            ResType[ResType["Gold"] = 101] = "Gold";
            ResType[ResType["Diamond"] = 102] = "Diamond";
            ResType[ResType["Stamina"] = 103] = "Stamina";
        })(ResType = GameEnum.ResType || (GameEnum.ResType = {}));
        let ItemType;
        (function (ItemType) {
            ItemType[ItemType["Currency"] = 1] = "Currency";
            ItemType[ItemType["Skin"] = 2] = "Skin";
            ItemType[ItemType["LuckyWheelAgain"] = 3] = "LuckyWheelAgain";
            ItemType[ItemType["EndlessMode"] = 4] = "EndlessMode";
            ItemType[ItemType["SkinTry"] = 999] = "SkinTry";
        })(ItemType = GameEnum.ItemType || (GameEnum.ItemType = {}));
        let SkillType;
        (function (SkillType) {
            SkillType[SkillType["speed"] = 0] = "speed";
            SkillType[SkillType["energy"] = 1] = "energy";
            SkillType[SkillType["reward"] = 2] = "reward";
        })(SkillType = GameEnum.SkillType || (GameEnum.SkillType = {}));
        let ItemPathWay;
        (function (ItemPathWay) {
            ItemPathWay["Free"] = "0";
            ItemPathWay["Diamond"] = "1";
            ItemPathWay["LotteryChest"] = "2";
            ItemPathWay["CheckIn"] = "3";
            ItemPathWay["AD"] = "4";
            ItemPathWay["LuckyWheel"] = "5";
        })(ItemPathWay = GameEnum.ItemPathWay || (GameEnum.ItemPathWay = {}));
        let RoleState;
        (function (RoleState) {
            RoleState["Suspend"] = "Suspend";
            RoleState["Ready"] = "Ready";
            RoleState["Start"] = "Start";
            RoleState["Run"] = "Run";
            RoleState["Diamond"] = "Diamond";
            RoleState["Wall"] = "Wall";
            RoleState["Bubble"] = "Bubble";
            RoleState["Door"] = "Door";
            RoleState["Slope"] = "Slope";
            RoleState["KeyFood"] = "KeyFood";
            RoleState["Drop"] = "Drop";
            RoleState["Destination"] = "Destination";
            RoleState["Dance"] = "Dance";
            RoleState["Victory"] = "Victory";
            RoleState["Defeated"] = "Defeated";
            RoleState["Resurgence"] = "Resurgence";
        })(RoleState = GameEnum.RoleState || (GameEnum.RoleState = {}));
        let RoleAni;
        (function (RoleAni) {
            RoleAni["idle"] = "idle";
            RoleAni["run"] = "run";
            RoleAni["fall"] = "fall";
            RoleAni["slide"] = "slide";
            RoleAni["dance"] = "dance";
        })(RoleAni = GameEnum.RoleAni || (GameEnum.RoleAni = {}));
        let ResurgenceType;
        (function (ResurgenceType) {
            ResurgenceType["drop"] = "drop";
            ResurgenceType["wall"] = "wall";
            ResurgenceType["bubbleError"] = "bubbleError";
        })(ResurgenceType = GameEnum.ResurgenceType || (GameEnum.ResurgenceType = {}));
        let BubbleAni;
        (function (BubbleAni) {
            BubbleAni["idle"] = "idle01";
            BubbleAni["retract"] = "idle02";
            BubbleAni["ball"] = "idle03";
        })(BubbleAni = GameEnum.BubbleAni || (GameEnum.BubbleAni = {}));
        let StampBubbleState;
        (function (StampBubbleState) {
            StampBubbleState["Destination"] = "Destination";
            StampBubbleState["Run"] = "Run";
        })(StampBubbleState = GameEnum.StampBubbleState || (GameEnum.StampBubbleState = {}));
        let MoveForwardArgs;
        (function (MoveForwardArgs) {
            MoveForwardArgs[MoveForwardArgs["none"] = 0] = "none";
            MoveForwardArgs[MoveForwardArgs["sprint"] = 1] = "sprint";
            MoveForwardArgs[MoveForwardArgs["errorBubble"] = 2] = "errorBubble";
            MoveForwardArgs[MoveForwardArgs["rightBubble"] = 3] = "rightBubble";
        })(MoveForwardArgs = GameEnum.MoveForwardArgs || (GameEnum.MoveForwardArgs = {}));
        let FormState;
        (function (FormState) {
            FormState["base"] = "base";
            FormState["vegan1"] = "vegan1";
            FormState["vegan2"] = "vegan2";
            FormState["vegan3"] = "vegan3";
            FormState["meat1"] = "meat1";
            FormState["meat2"] = "meat2";
            FormState["meat3"] = "meat3";
        })(FormState = GameEnum.FormState || (GameEnum.FormState = {}));
        let RoleType;
        (function (RoleType) {
            RoleType["vegan"] = "vegan";
            RoleType["meat"] = "meat";
        })(RoleType = GameEnum.RoleType || (GameEnum.RoleType = {}));
        let Part;
        (function (Part) {
            Part["dress"] = "1";
            Part["hair"] = "2";
            Part["wing"] = "3";
        })(Part = GameEnum.Part || (GameEnum.Part = {}));
        let Colour;
        (function (Colour) {
            Colour[Colour["red"] = 1] = "red";
            Colour[Colour["yellow"] = 2] = "yellow";
            Colour[Colour["blue"] = 3] = "blue";
            Colour[Colour["rainbow"] = 4] = "rainbow";
        })(Colour = GameEnum.Colour || (GameEnum.Colour = {}));
        let LevelMode;
        (function (LevelMode) {
            LevelMode["common"] = "common";
            LevelMode["endless"] = "endless";
        })(LevelMode = GameEnum.LevelMode || (GameEnum.LevelMode = {}));
    })(GameEnum || (GameEnum = {}));

    class GameEvent extends LwgEvent.BaseEvent {
    }
    GameEvent.addMileageCur = 'addMileageCur';
    GameEvent.colorIndex = 'colorIndex';
    GameEvent.changeBoss = 'changeBoss';
    GameEvent.changeFood = 'changeFood';
    GameEvent.updateDiamond = 'updateDiamond';
    GameEvent.roadIndex = 'roadIndex';
    GameEvent.D3_2DScore = 'D3to2DScore';
    GameEvent.D2_3DScore = 'D2_3DScore';
    GameEvent.attackByClickStart = 'attackByClickStart';
    GameEvent.attackByClick = 'attackByClick';
    GameEvent.attackByClickEnd = 'attackByClickEnd';
    GameEvent.updateHead = 'updateHead';
    GameEvent.updateRoleDataDisplay = 'updateRoleDataDisplay';
    GameEvent.readyVSBOSS = 'readyVSBOSS';
    GameEvent.changeBossForm = 'changeBossForm';
    GameEvent.updateBossHP = 'updateBossHP';
    GameEvent.updateRoleHP = 'updateRoleHP';
    GameEvent.hideRoleHP = 'hideRoleHP';
    GameEvent.showRoleHP = 'showRoleHP';
    GameEvent.updateGrowthValue = 'updateGrowthValue';
    GameEvent.updateLvSchedule = 'updateLvSchedule';
    GameEvent.receiveAward = 'receiveAward';
    GameEvent.defeated = 'defeated';
    GameEvent.victory = 'victory';
    GameEvent.pickedKey = 'pickedKey';
    GameEvent.updateKeyNumStart = 'updateKeyNumStart';
    GameEvent.updateLuckyWheel = 'updateLuckyWheel';
    GameEvent.LEVELMODE = 'LEVELMODE';
    GameEvent.bubblesNum = 'bubblesNum';
    GameEvent.storageNum = 'storageNum';
    GameEvent.reduceStorage = 'reduceStorage';
    GameEvent.Resurgence = 'Resurgence';
    GameEvent.hideStorage = 'hideStorage';

    var GameRes;
    (function (GameRes) {
        class Views {
        }
        Views.DialogHint = { url: `Base/DialogHint` };
        Views.Guide = { url: `Base/Guide` };
        Views.PreLoad = { url: `Base/PreLoad` };
        Views.PreLoadCutIn = { url: `Base/PreLoadCutIn` };
        Views.ReturnBtnObj = { url: `Base/ReturnBtnObj` };
        Views.GoldObj = { url: `Base/GoldObj` };
        Views.DiamondObj = { url: `Base/DiamondObj` };
        Views.DiamondSingleObj = { url: `Base/DiamondObj` };
        Views.StaminaObj = { url: `Base/StaminaObj` };
        Views.GameManagerBtnObj = { url: `Base/GameManagerBtnObj` };
        Views.GameManager = { url: `Base/GameManager` };
        Views.GameManagerRenderObj = { url: `Base/GameManagerRenderObj` };
        Views.FloatFontArtObj = { url: `Base/FloatFontArtObj` };
        Views.FloatFontSystemObj = { url: `Base/FloatFontSystemObj` };
        Views.RedDotObj = { url: `Base/RedDotObj` };
        Views.CloseBtnObj = { url: `Base/CloseBtnObj` };
        Views.CheckIn = { url: `CheckIn` };
        Views.BeRewarded = { url: `BeRewarded` };
        Views.Lottery = { url: `Lottery` };
        Views.LuckyWheelRender = { url: `LuckyWheelRenderObj` };
        Views.CheckInDay6Render = { url: `CheckInDay6RenderObj` };
        Views.CheckInDay7RrwardRender = { url: `CheckInDay7RrwardRenderObj` };
        Views.LotteryRenderObj = { url: `LotteryRenderObj` };
        Views.SkinRenderObj = { url: `SkinRenderObj` };
        Views.SkillUpgradeRenderObj = { url: `SkillUpgradeRenderObj` };
        Views.SkillUpgradeObj = { url: `SkillUpgradeObj` };
        GameRes.Views = Views;
        ;
        class Prefab2D {
        }
        GameRes.Prefab2D = Prefab2D;
        ;
        let pathScene3D = `Game3D/Scene3D/LayaScene_MainScenes/Conventional/`;
        class Scene3D {
        }
        Scene3D.MainScene = { url: `${pathScene3D}MainScenes` };
        Scene3D.SkinShow = { url: 'Game3D/Scene3D/LayaScene_SkinShow/Conventional/SkinShow' };
        Scene3D.EndLess = { url: 'Game3D/Scene3D/LayaScene_EndlessScenes/Conventional/EndlessScenes' };
        Scene3D.Skin = { url: 'Game3D/Scene3D/LayaScene_Skin/Conventional/Skin' };
        GameRes.Scene3D = Scene3D;
        ;
        let pathPre3DRole = 'Game3D/Prefab3D/LayaScene_Role/Conventional/';
        let pathPre3DLevels = 'Game3D/Prefab3D/LayaScene_Levels/Conventional/';
        let pathPre3DEffcets = 'Game3D/Prefab3D/LayaScene_Effects/Conventional/';
        class Prefab3D {
        }
        Prefab3D.role01 = { url: `${pathPre3DLevels}role01` };
        Prefab3D.paopao01 = { url: `${pathPre3DLevels}paopao01` };
        Prefab3D.paopao02 = { url: `${pathPre3DLevels}paopao02` };
        Prefab3D.paopao03 = { url: `${pathPre3DLevels}paopao03` };
        Prefab3D.Road_Base = { url: `${pathPre3DLevels}Road_Base` };
        Prefab3D.Road_999 = { url: `${pathPre3DLevels}Road_999` };
        Prefab3D.Road_997 = { url: `${pathPre3DLevels}Road_997` };
        Prefab3D.Road_888 = { url: `${pathPre3DLevels}Road_888` };
        Prefab3D.ZhangaiBian_01 = { url: `${pathPre3DLevels}ZhangaiBian_01` };
        Prefab3D.ZhangaiBian_02 = { url: `${pathPre3DLevels}ZhangaiBian_02` };
        Prefab3D.ZhangaiBian_03 = { url: `${pathPre3DLevels}ZhangaiBian_03` };
        Prefab3D.KeyFood = { url: `${pathPre3DLevels}KeyFood` };
        Prefab3D.zhangai00 = { url: `${pathPre3DLevels}zhangai00` };
        Prefab3D.zhangai01 = { url: `${pathPre3DLevels}zhangai01` };
        Prefab3D.zhangai02 = { url: `${pathPre3DLevels}zhangai02` };
        Prefab3D.zhangai03 = { url: `${pathPre3DLevels}zhangai03` };
        Prefab3D.zhangai04 = { url: `${pathPre3DLevels}zhangai04` };
        Prefab3D.zhangai05 = { url: `${pathPre3DLevels}zhangai05` };
        Prefab3D.zhangai06 = { url: `${pathPre3DLevels}zhangai06` };
        Prefab3D.zhangai07 = { url: `${pathPre3DLevels}zhangai07` };
        Prefab3D.zhangai_xiepo = { url: `${pathPre3DLevels}zhangai_xiepo` };
        Prefab3D.RoadTied = { url: `${pathPre3DLevels}RoadTied` };
        Prefab3D.drop = { url: `${pathPre3DLevels}drop` };
        Prefab3D.marginC = { url: `${pathPre3DLevels}scene_1` };
        Prefab3D.marginE = { url: `${pathPre3DLevels}scene_2` };
        Prefab3D.effect_change01 = { url: `${pathPre3DEffcets}effect_change01` };
        Prefab3D.effect_change02 = { url: `${pathPre3DEffcets}effect_change02` };
        Prefab3D.effect_change03 = { url: `${pathPre3DEffcets}effect_change03` };
        Prefab3D.effect_change04 = { url: `${pathPre3DEffcets}effect_change04` };
        Prefab3D.travel01 = { url: `${pathPre3DEffcets}travel01` };
        Prefab3D.travel02 = { url: `${pathPre3DEffcets}travel02` };
        Prefab3D.travel03 = { url: `${pathPre3DEffcets}travel03` };
        Prefab3D.travel04 = { url: `${pathPre3DEffcets}travel04` };
        Prefab3D.effect_zuanshi = { url: `${pathPre3DEffcets}effect_zuanshi` };
        Prefab3D.effect_chongci = { url: `${pathPre3DEffcets}effect_chongci` };
        Prefab3D.effect_right = { url: `${pathPre3DEffcets}effect_right` };
        GameRes.Prefab3D = Prefab3D;
        ;
        class Json {
        }
        Json.RoadsMsg = { url: `RoadsMsg` };
        Json.Road = { url: `Road` };
        Json.Guide = { url: `guide1` };
        Json.Level = { url: `Level` };
        Json.LevelScore = { url: `LevelScore` };
        Json.Item = { url: `Item1` };
        Json.Reward = { url: `Reward1` };
        Json.Sound = { url: `Sound` };
        Json.Role = { url: `Role` };
        Json.Animator = { url: `Animator` };
        Json.Skill = { url: `Skill` };
        Json.Dinosaur = { url: `Dinosaur` };
        Json.FoodValue = { url: `FoodValue` };
        Json.Body = { url: `Body` };
        GameRes.Json = Json;
        ;
        class Mesh3D {
        }
        GameRes.Mesh3D = Mesh3D;
        ;
        let colorMatPath = 'Game3D/Prefab3D/LayaScene_Levels/Conventional/Assets/Art/Mesh/Texture/Materials/';
        class Material {
        }
        Material.dress01 = { url: `${colorMatPath}hair01b`, lock: true };
        Material.hair01 = { url: `${colorMatPath}hair01a`, lock: true };
        Material.dress02 = { url: `${colorMatPath}hair02b`, lock: true };
        Material.hair02 = { url: `${colorMatPath}hair02a`, lock: true };
        Material.dress03 = { url: `${colorMatPath}hair03b`, lock: true };
        Material.hair03 = { url: `${colorMatPath}hair03a`, lock: true };
        Material.dress04 = { url: `${colorMatPath}T_Cloth_01`, lock: true };
        Material.hair04 = { url: `${colorMatPath}T_Cloth_01`, lock: true };
        Material.endlessRoad = { url: `${colorMatPath}hair03b 2`, lock: true };
        Material.bubble01 = { url: `${colorMatPath}Colour_03`, lock: true };
        Material.bubble02 = { url: `${colorMatPath}Colour_04`, lock: true };
        Material.bubble03 = { url: `${colorMatPath}Colour_05`, lock: true };
        GameRes.Material = Material;
        ;
        class Texture {
        }
        GameRes.Texture = Texture;
        ;
        class Pic2D {
        }
        GameRes.Pic2D = Pic2D;
        ;
        class Skeleton {
        }
        GameRes.Skeleton = Skeleton;
        ;
        class EffectTex2D {
        }
        GameRes.EffectTex2D = EffectTex2D;
        ;
    })(GameRes || (GameRes = {}));
    var GameResCutIn;
    (function (GameResCutIn) {
        let Skin;
        (function (Skin) {
            class Scene3D {
            }
            Scene3D.SkinScene = { url: 'Game3D/Scene3D/LayaScene_Skin/Conventional/Skin' };
            Skin.Scene3D = Scene3D;
        })(Skin = GameResCutIn.Skin || (GameResCutIn.Skin = {}));
    })(GameResCutIn || (GameResCutIn = {}));
    var GameResInit;
    (function (GameResInit) {
        class Image {
        }
        Image.ImgArr = { url: ['Init/Preload/img_LOGO.png', 'Init/img_bg_2x.png'] };
        GameResInit.Image = Image;
        class Skeleton {
        }
        Skeleton.LOGO = { url: 'Init/Logo/LogoAnim.sk' };
        Skeleton.load = { url: 'Init/Preload/load.sk', lock: true };
        GameResInit.Skeleton = Skeleton;
    })(GameResInit || (GameResInit = {}));

    var GameData;
    (function (GameData) {
        class Init {
            constructor() {
                GameData.Guide = new GuideData(GameRes.Json.Guide.dataArr);
                GameData.Level = new LevelData(GameRes.Json.Level.dataArr);
                GameData.LevelScore = new LevelScoreData(GameRes.Json.LevelScore.dataArr);
                GameData.RoadsMsg = new RoadsMsgData(GameRes.Json.RoadsMsg.dataArr);
                GameData.Road = new RoadData(GameRes.Json.Road.dataArr);
                GameData.Item = new ItemData(GameRes.Json.Item.dataArr);
                GameData.Skin = new SkinData();
                GameData.Sound = new SoundData(GameRes.Json.Sound.dataArr);
                GameData.Reward = new RewardData(GameRes.Json.Reward.dataArr);
                GameData.CheckIn = new CheckInData(GameRes.Json.Reward.dataArr);
                GameData.Lottery = new LotteryData(GameRes.Json.Reward.dataArr);
                GameData.LuckyWheel = new LuckyWheelData(GameRes.Json.Reward.dataArr);
                GameData.Animator = new AnimatorData(GameRes.Json.Animator.dataArr);
                GameData.Skill = new SkillData(GameRes.Json.Skill.dataArr);
                GameData.Dinosaur = new DinosaureData(GameRes.Json.Dinosaur.dataArr);
                GameData.FoodValue = new FoodValueData(GameRes.Json.FoodValue.dataArr);
                GameData.Body = new BodyData(GameRes.Json.Body.dataArr);
            }
        }
        GameData.Init = Init;
        class GuideData extends LwgData.BaseTable {
            constructor(arr) {
                super(arr);
            }
            get compelet() {
                return LwgStorage.bool('GuideData/compelet', null, false).value;
            }
            set compelet(val) {
                LwgStorage.bool('GuideData/compelet', null, false).value = val;
            }
            get stepNum() {
                return LwgStorage.number('GuideData/stepNum', null, 1).value;
            }
            set stepNum(val) {
                LwgStorage.number('GuideData/stepNum', null, 1).value = val;
            }
            getValueByID(ID) {
                const obj = this.getObjByID(ID);
                return obj.value;
            }
        }
        class DinosaureData extends LwgData.BaseTable {
            constructor(arr) {
                super(arr);
            }
        }
        class FoodValueData extends LwgData.BaseTable {
            constructor(arr) {
                super(arr);
            }
            valueByNameAndForm(name, form) {
                let num = 0;
                for (let index = 0; index < this.arr.length; index++) {
                    const element = this.arr[index];
                    if (element.name === name) {
                        num = element[form];
                    }
                }
                return num;
            }
        }
        class BodyData extends LwgData.BaseTable {
            constructor(arr) {
                super(arr);
            }
            scaleByNameAndForm(name, form) {
                let num = 0;
                for (let index = 0; index < this.arr.length; index++) {
                    const element = this.arr[index];
                    if (element.name === name) {
                        num = element[form];
                    }
                }
                return num;
            }
        }
        class SkillData extends LwgData.BaseTable {
            constructor(arr) {
                super(arr);
            }
            get levelArr() {
                const len = this.getTypeNum;
                const arr = [];
                for (let index = 0; index < len; index++) {
                    arr.push(1);
                }
                return LwgStorage.array('SkillData/levelArr', null, arr).value;
            }
            set levelArr(val) {
                for (let index = 0; index < val.length; index++) {
                    const maxLv = this.getMaxLevelByType(index);
                    if (val[index] > maxLv) {
                        val[index] = maxLv;
                    }
                }
                LwgStorage.array('SkillData/levelArr').value = val;
            }
            addLevelByType(type, num = 1) {
                const arr = [];
                for (let index = 0; index < GameData.Skill.levelArr.length; index++) {
                    let element = GameData.Skill.levelArr[index];
                    if (type === index) {
                        arr.push(element + num);
                    }
                    else {
                        arr.push(element);
                    }
                }
                GameData.Skill.levelArr = arr;
            }
            getCurConsumeByType(type) {
                const level = this.levelArr[type];
                let consume = 200;
                this.eachDataArr((element) => {
                    if (element.type === type && element.level === level) {
                        consume = element.consume;
                    }
                });
                return consume;
            }
            getCurLevelByType(type) {
                return this.levelArr[type];
            }
            get getTypeNum() {
                const arr = [];
                this.eachDataArr((element) => {
                    arr.push(element.type);
                });
                const len = LwgTools.Arr.unique01(arr).length;
                return len;
            }
            getMaxLevelByType(type) {
                const arr = [];
                const len = this.getTypeNum;
                for (let index = 0; index < len; index++) {
                    this.eachDataArr((element) => {
                        if (element.type === type) {
                            arr.push(element);
                        }
                    });
                }
                LwgTools.ObjArray.sortByProperty(arr, 'level');
                return arr.pop().level;
            }
            getSkillAdditionByType(type) {
                const lv = this.levelArr[type];
                let addtion = [1];
                this.eachDataArr((element) => {
                    if (element.type === type && element.level === lv) {
                        addtion = element.addition;
                    }
                });
                return addtion[0];
            }
            getObjArrByCurLv() {
                const arr = [];
                const len = this.getTypeNum;
                for (let index = 0; index < len; index++) {
                    const level = this.levelArr[index];
                    this.eachDataArr((element) => {
                        if (element.type === index && element.level === level) {
                            arr.push(element);
                        }
                    });
                }
                return arr;
            }
        }
        class AnimatorData extends LwgData.BaseTable {
            constructor(arr) {
                super(arr);
            }
            getClipNameByRoleNameAndAni(roleName, aniType) {
                const obj = this.getObjFirstByProNameAndVal('name', roleName);
                if (obj) {
                    return obj[aniType] ? obj[aniType] : null;
                }
                else {
                    console.log(roleName, obj, '不存在动画:', aniType);
                }
            }
        }
        class RoleData extends LwgData.EntiretyTable {
            constructor(arr) {
                for (let index = 0; index < arr.length; index++) {
                    const element = arr[index];
                    if (201 <= element.ID && element.ID <= 206) {
                        element.complete = true;
                    }
                }
                super('SkinData/arr', arr);
            }
            getType(ID) {
                const obj = this.getObjByID(ID);
                return obj.pathWay;
            }
            getNameByID(ID) {
                const obj = this.getObjByID(ID);
                return obj.name;
            }
            get getDefultName() {
                const obj = this.getObjByID(201);
                return obj.name;
            }
            setBattleByID(ID) {
                for (let index = 0; index < this.arr.length; index++) {
                    const element = this.arr[index];
                    if (element.ID === ID) {
                        element.battle = true;
                    }
                    else {
                        if (element.type.substr(0, 1) === element.type.substr(0, 1)) {
                            element.battle = false;
                        }
                    }
                }
                this.refreshAndStorage();
            }
            getDinosaurGroupArr() {
                const groupArr = [];
                for (let index = 0; index < this.arr.length; index++) {
                    const element = this.arr[index];
                    if (element.battle) {
                        groupArr.push(element);
                    }
                }
                return groupArr;
            }
            get getNameByVegan() {
                for (let index = 0; index < this.arr.length; index++) {
                    const element = this.arr[index];
                    if (element.battle && element.type.substr(0, 1) === 'A') {
                        return element.name;
                    }
                }
            }
            get getNameByMeat() {
                for (let index = 0; index < this.arr.length; index++) {
                    const element = this.arr[index];
                    if (element.battle && element.type.substr(0, 1) === 'C') {
                        return element.name;
                    }
                }
            }
            get getNameByEvolve_vegan() {
                for (let index = 0; index < this.arr.length; index++) {
                    const element = this.arr[index];
                    if (element.battle && element.type.substr(0, 1) === 'B') {
                        return element.name;
                    }
                }
            }
            get getNameByEvolve_meat() {
                for (let index = 0; index < this.arr.length; index++) {
                    const element = this.arr[index];
                    if (element.battle && element.type.substr(0, 1) === 'D') {
                        return element.name;
                    }
                }
            }
            getEvolveNameByName(name) {
                const obj = this.getFirstObjByPro('name', name);
                const type = obj.type.substr(0, 1);
                let newTypeHead = 'A';
                switch (type) {
                    case 'A':
                        newTypeHead = 'B';
                        break;
                    case 'B':
                        newTypeHead = 'A';
                        break;
                    case 'C':
                        newTypeHead = 'D';
                        break;
                    case 'D':
                        newTypeHead = 'C';
                        break;
                    default:
                        break;
                }
                for (let index = 0; index < this.arr.length; index++) {
                    const element = this.arr[index];
                    if (element.battle && element.type.substr(0, 1) === newTypeHead) {
                        return element.name;
                    }
                }
            }
        }
        class RewardData extends LwgData.ItmeTable {
            constructor(arr) {
                super(arr);
            }
            getPrepareReward() {
                const itemArr = this.getItemArrObjByID(10016);
                const itemGroup = {
                    index: 0,
                    ID: itemArr.itemArr[0],
                    number: itemArr.numberArr[0],
                    weight: itemArr.weightArr[0],
                };
                return itemGroup;
            }
        }
        class SoundData extends LwgData.BaseTable {
            constructor(arr) {
                super(arr);
            }
            getUrlByID(ID) {
                const obj = this.getObjByID(ID);
                if (!obj) {
                    return null;
                }
                else {
                    return `Game/Sound/${obj.name}`;
                }
            }
            playSoundByID(ID) {
                LwgSound.playSound(this.getUrlByID(ID));
            }
            sotpSoundByID(ID) {
                LwgSound.stopSound(this.getUrlByID(ID));
            }
            playBgmByID(ID) {
                LwgSound.playMusic(this.getUrlByID(ID));
            }
        }
        class SkinData extends LwgData.EntiretyTable {
            constructor() {
                const arr = [];
                for (let index = 0; index < GameRes.Json.Item.dataArr.length; index++) {
                    const element = GameRes.Json.Item.dataArr[index];
                    if (element.type === GameEnum.ItemType.Skin) {
                        arr.push(element);
                    }
                }
                super('SkinData/arr', arr);
                this.setObjCompeletByID(201);
                this.setObjCompeletByID(207);
                this.setObjCompeletByID(213);
            }
            get pitchHairID() {
                return LwgStorage.number('SkinData/pitchHairID', null, 207).value;
            }
            set pitchHairID(val) {
                LwgStorage.number('SkinData/pitchHairID').value = val;
            }
            get pitchHairName() {
                return this.getObjByID(this.pitchHairID).name;
            }
            get pitchDressID() {
                return LwgStorage.number('SkinData/pitchDressID', null, 201).value;
            }
            set pitchDressID(val) {
                LwgStorage.number('SkinData/pitchDressID').value = val;
            }
            get pitchDressName() {
                return this.getObjByID(this.pitchDressID).name;
            }
            get pitchWingID() {
                return LwgStorage.number('SkinData/pitchWingID', null, 213).value;
            }
            set pitchWingID(val) {
                LwgStorage.number('SkinData/pitchWingID').value = val;
            }
            get pitchWingName() {
                return this.getObjByID(this.pitchWingID).name;
            }
            getSkinArrByPart(part) {
                const arr = [];
                for (let index = 0; index < this.arr.length; index++) {
                    const element = this.arr[index];
                    if (element.part === part) {
                        arr.push(element);
                    }
                }
                return arr;
            }
            setCompeletByData(data) {
                for (let index = 0; index < this.arr.length; index++) {
                    const element = this.arr[index];
                    if (element.ID === data.ID) {
                        element.complete = true;
                        if (data.part === GameEnum.Part.dress) {
                            this.pitchDressID = data.ID;
                        }
                        else if (data.part === GameEnum.Part.hair) {
                            this.pitchHairID = data.ID;
                        }
                        else if (data.part === GameEnum.Part.wing) {
                            this.pitchWingID = data.ID;
                        }
                        break;
                    }
                }
                this.refreshAndStorage();
            }
            getHPByName(name) {
                const obj = this.getObjByName(name);
                const attr = obj.attribute.split('_');
                if (attr.length > 1) {
                    if (+attr[0] === 1) {
                        return +attr[1];
                    }
                }
                return 0;
            }
            getAttackByName(name) {
                const obj = this.getObjByName(name);
                const attr = obj.attribute.split('_');
                if (attr.length > 1) {
                    if (+attr[0] === 2) {
                        return +attr[1];
                    }
                }
                return 0;
            }
            getRanSkinTryByWing() {
                const arr = [];
                for (let index = 0; index < this.arr.length; index++) {
                    const element = this.arr[index];
                    if (element.part === GameEnum.Part.wing && !element.complete) {
                        arr.push(element.ID);
                    }
                }
                if (arr.length > 0) {
                    return LwgTools.Arr.randomGetOne(arr);
                }
            }
            getRanSkinObjByAD() {
                const arr = [];
                for (let index = 0; index < this.arr.length; index++) {
                    const element = this.arr[index];
                    if (!element.complete && element.pathWay === GameEnum.ItemPathWay.AD) {
                        arr.push(element);
                    }
                }
                LwgTools.Arr.randomGetOut(arr, arr.length);
                return arr[0];
            }
            get getNoCompeletExCheckAndLottery() {
                for (let index = 0; index < this.arr.length; index++) {
                    const element = this.arr[index];
                    if (element.pathWay !== GameEnum.ItemPathWay.LotteryChest && element.pathWay !== GameEnum.ItemPathWay.CheckIn) {
                        if (!element.complete) {
                            return true;
                        }
                    }
                }
            }
        }
        class RoadsMsgData extends LwgData.BaseTable {
            constructor(arr) {
                super(arr);
            }
            getDataByLevel() {
                const msgArr = [];
                const dataArr = GameData.Level.getRoadDataArr();
                for (let i = 0; i < dataArr.length; i++) {
                    const raodData = dataArr[i];
                    for (let j = 0; j < this.arr.length; j++) {
                        const msg = this.arr[j];
                        if (msg.name === raodData.name) {
                            msg.length = raodData.length;
                            msgArr.push(msg);
                        }
                    }
                }
                return msgArr;
            }
            getChildDataArrByRoadName(name) {
                for (let index = 0; index < this.arr.length; index++) {
                    const element = this.arr[index];
                    if (element.name === name) {
                        return element.childData;
                    }
                }
            }
        }
        class LevelScoreData extends LwgData.BaseTable {
            constructor(arr) {
                super(arr);
            }
            getRewardIDByHpPer(per) {
                per = per * 100;
                let id = 1;
                for (let index = 0; index < this.arr.length; index++) {
                    const element = this.arr[index];
                    if (per < element.HP) {
                        const front = this.arr[index - 1];
                        if (front) {
                            id = front.ID;
                        }
                        break;
                    }
                }
                const endObj = this.arr[this.arr.length - 1];
                if (per > endObj.HP) {
                    id = 8;
                }
                const startObj = this.arr[0];
                if (per < startObj.HP) {
                    id = 1;
                }
                return id;
            }
            getRewardByNum(num) {
                const obj = this.getObjByID(num);
                const rewardId = obj.rewardId;
                const rewardObj = GameData.Reward.ranSuperpositionWeight(rewardId);
                let item;
                if (rewardObj.ID === 999) {
                    const skinObj = GameData.Skin.getRanSkinObjByAD();
                    if (!skinObj) {
                        const rewardObjP = GameData.Reward.getPrepareReward();
                        item = GameData.Item.getItemBaseByID(rewardObjP.ID);
                        item.number = rewardObjP.number;
                    }
                    else {
                        item = GameData.Item.getItemBaseByID(skinObj.ID);
                        item.number = rewardObj.number;
                        item.type = 999;
                    }
                }
                else {
                    item = GameData.Item.getItemBaseByID(rewardObj.ID);
                    item.number = rewardObj.number;
                }
                return item;
            }
        }
        class LevelData extends LwgData.ItmeTable {
            constructor(arr) {
                super(arr);
                this.upgradeValue = 20;
                this.eatFoodScale = 0.05;
                this.eatFoodScaleByBaby = 0.01;
            }
            get mode() {
                return this['_mode'] ? this['_mode'] : GameEnum.LevelMode.common;
            }
            set mode(val) {
                this['_mode'] = val;
            }
            get endlessFreeNum() {
                return LwgStorage.number('LevelData/endlessFreeNum', null, 0).value;
            }
            set endlessFreeNum(val) {
                LwgStorage.number('LevelData/endlessFreeNum', null, 0).value = val;
            }
            get playEndlessNum() {
                return LwgStorage.number('LevelData/playEndlessNum', null, 1).value;
            }
            set playEndlessNum(val) {
                LwgStorage.number('LevelData/playEndlessNum', null, 1).value = val;
            }
            getEndlessLvData() {
                GameData.Level.playEndlessNum++;
                const roadArr = [];
                return roadArr;
            }
            getEndlessLvObj() {
                let obj;
                obj = this.getObjByID(101);
                return obj;
            }
            getEndlessStartChild() {
                const obj = this.getEndlessLvObj();
                return obj.startChild;
            }
            getRoadDataArr() {
                const roadArr = [];
                let curLevelObj = this.getObjByID(LwgControl.Game.level);
                if (!curLevelObj) {
                    curLevelObj = this.getObjByID(1);
                }
                for (let index = 0; index < curLevelObj.roadArr.length; index++) {
                    const unitId = curLevelObj.roadArr[index];
                    const unitObj = GameData.Road.getObjByID(unitId);
                    const unitObjNew = LwgTools.ObjArray.objCopy(unitObj);
                    unitObjNew.color = curLevelObj.colour[index] ? curLevelObj.colour[index] : '0';
                    roadArr.push(unitObjNew);
                }
                return roadArr;
            }
            getCommonStartChild() {
                let curLevelObj = this.getObjByID(LwgControl.Game.level);
                if (!curLevelObj) {
                    curLevelObj = this.getObjByID(1);
                }
                return curLevelObj.startChild;
            }
            getBossHPByLevel() {
                let curLevelObj = this.getObjByID(LwgControl.Game.level);
                if (!curLevelObj) {
                    curLevelObj = this.getObjByID(1);
                }
                return curLevelObj.bossHP;
            }
            getBossASpeedByLevel() {
                let curLevelObj = this.getObjByID(LwgControl.Game.level);
                if (!curLevelObj) {
                    curLevelObj = this.getObjByID(1);
                }
                return curLevelObj.bossaspeed;
            }
            getBossAttackByLevel() {
                let curLevelObj = this.getObjByID(LwgControl.Game.level);
                if (!curLevelObj) {
                    curLevelObj = this.getObjByID(1);
                }
                return curLevelObj.bossattack;
            }
            getFoodAType() {
                let curLevelObj = this.getObjByID(LwgControl.Game.level);
                if (!curLevelObj) {
                    curLevelObj = this.getObjByID(1);
                }
                return curLevelObj.FoodA;
            }
            getFoodBType() {
                let curLevelObj = this.getObjByID(LwgControl.Game.level);
                if (!curLevelObj) {
                    curLevelObj = this.getObjByID(1);
                }
                return curLevelObj.FoodB;
            }
        }
        class RoadData extends LwgData.ItmeTable {
            constructor(arr) {
                super(arr);
            }
        }
        class CheckInData extends LwgData.ItmeTable {
            constructor(arr) {
                super(arr);
            }
            get num() {
                return LwgStorage.number('CheckInData/num').value;
            }
            set num(num) {
                LwgStorage.number('CheckInData/num').value = num;
            }
            get lastDate() {
                return LwgStorage.number('CheckInData/lastDate', null, -1).value;
            }
            set lastDate(date) {
                LwgStorage.number('CheckInData/lastDate').value = date;
                LwgEvent.notify(GameEvent.redDotHint);
            }
            get today() {
                return this.lastDate == LwgDate.Now.date;
            }
            get dayArr6() {
                const arrdata = [];
                if (arrdata.length <= 0) {
                    for (let i = 0; i < 6; i++) {
                        const obj = this.getItemArrObjByID(10000 + i + 1);
                        for (let j = 0; j < obj.weightArr.length; j++) {
                            const weight = obj.weightArr[j];
                            const number = obj.numberArr[j];
                            const ran = Math.floor(Math.random() * 10);
                            if (weight > ran) {
                                const ranItemId = obj.itemArr[j];
                                const item = GameData.Item.getItemBaseByID(ranItemId);
                                item.number = number;
                                arrdata.push(item);
                            }
                        }
                    }
                }
                return arrdata;
            }
            get day7RwardArr() {
                const arrdata = [];
                if (arrdata.length <= 0) {
                    const obj = this.getItemArrObjByID(10007);
                    for (let index = 0; index < obj.weightArr.length; index++) {
                        const weight = obj.weightArr[index];
                        const ran = Math.floor(Math.random() * 10);
                        const number = obj.numberArr[index];
                        if (weight > ran) {
                            let ranItemId = obj.itemArr[index];
                            let item = GameData.Item.getItemBaseByID(ranItemId);
                            ranItemId = obj.itemArr[index];
                            item.number = number;
                            arrdata.push(item);
                        }
                    }
                }
                return arrdata;
            }
        }
        class LotteryData extends LwgData.ItmeTable {
            constructor(arr) {
                super(arr);
            }
            get KeyNum() {
                return LwgStorage.number('LotteryData/chestKeyNum').value;
            }
            set KeyNum(num) {
                if (num > 3) {
                    num = 3;
                }
                LwgStorage.number('LotteryData/chestKeyNum').value = num;
            }
            get ranReward() {
                let item;
                const itemGroup = this.ranSuperpositionWeight(10015);
                if (itemGroup.ID === 999) {
                    const itemSkin = this.getOneSkin();
                    if (itemSkin) {
                        item = GameData.Item.getItemBaseByID(itemSkin.ID);
                        item.number = itemGroup.number;
                        item.index = itemGroup.index;
                    }
                    else {
                        let itemGroupNew = GameData.Reward.getItemGroupObjByIndex(10016, 0);
                        item = GameData.Item.getItemBaseByID(itemGroupNew.ID);
                        item.number = itemGroupNew.number;
                        item.index = itemGroupNew.index;
                    }
                }
                else {
                    item = GameData.Item.getItemBaseByID(itemGroup.ID);
                    item.number = itemGroup.number;
                    item.index = itemGroup.index;
                }
                return item;
            }
            getOneSkin() {
                const arr = [];
                for (let index = 0; index < GameData.Skin.arr.length; index++) {
                    const element = GameData.Skin.arr[index];
                    if (element.type === GameEnum.ItemType.Skin && element.pathWay === GameEnum.ItemPathWay.LotteryChest && !element.complete) {
                        arr.push(element);
                    }
                }
                if (arr.length === 0) {
                    return;
                }
                else {
                    return arr[0];
                }
            }
            get getBestReward() {
                const itemGroup = GameData.Reward.getItemGroupObjByIndex(10015, 8);
                let item;
                if (itemGroup.ID === 999) {
                    const itemSkin = this.getOneSkin();
                    if (itemSkin) {
                        item = GameData.Item.getItemBaseByID(itemSkin.ID);
                        item.number = itemGroup.number;
                        item.index = itemGroup.index;
                    }
                    else {
                        let itemGroupNew = GameData.Reward.getItemGroupObjByIndex(10016, 0);
                        item = GameData.Item.getItemBaseByID(itemGroupNew.ID);
                        item.number = itemGroupNew.number;
                        item.index = itemGroupNew.index;
                    }
                }
                else {
                    item = GameData.Item.getItemBaseByID(itemGroup.ID);
                    item.number = itemGroup.number;
                    item.index = itemGroup.index;
                }
                return item;
            }
        }
        class LuckyWheelData extends LwgData.ItmeTable {
            constructor(arr) {
                super(arr);
            }
            getOneSkin() {
                const arr = [];
                for (let index = 0; index < GameData.Skin.arr.length; index++) {
                    const element = GameData.Skin.arr[index];
                    if (element.type === GameEnum.ItemType.Skin && element.pathWay === GameEnum.ItemPathWay.LuckyWheel && !element.complete) {
                        arr.push(element);
                    }
                }
                if (arr.length === 0) {
                    return;
                }
                else {
                    return arr[0];
                }
            }
            get ranReward() {
                let item;
                const itemGroup = this.ranSuperpositionWeight(10014);
                if (itemGroup.ID === 999) {
                    const itemSkin = this.getOneSkin();
                    if (itemSkin) {
                        item = GameData.Item.getItemBaseByID(itemSkin.ID);
                        item.number = itemGroup.number;
                        item.index = itemGroup.index;
                    }
                    else {
                        let itemGroupNew = GameData.Reward.getItemGroupObjByIndex(10016, 0);
                        item = GameData.Item.getItemBaseByID(itemGroupNew.ID);
                        item.number = itemGroupNew.number;
                        item.index = itemGroupNew.index;
                    }
                }
                else {
                    item = GameData.Item.getItemBaseByID(itemGroup.ID);
                    item.number = itemGroup.number;
                    item.index = itemGroup.index;
                }
                return item;
            }
            get getItemArr() {
                const itemArr = [];
                const obj = this.getItemArrObjByID(10014);
                for (let index = 0; index < obj.weightArr.length; index++) {
                    const itemGroup = {
                        index: index,
                        ID: obj.itemArr[index],
                        number: obj.numberArr[index],
                        weight: obj.weightArr[index],
                    };
                    let item;
                    if (itemGroup.ID === 999) {
                        const itemSkin = this.getOneSkin();
                        if (itemSkin) {
                            item = GameData.Item.getItemBaseByID(itemSkin.ID);
                            item.number = itemGroup.number;
                            item.index = itemGroup.index;
                        }
                        else {
                            let itemGroupNew = GameData.Reward.getItemGroupObjByIndex(10016, 0);
                            item = GameData.Item.getItemBaseByID(itemGroupNew.ID);
                            item.number = itemGroupNew.number;
                            item.index = itemGroupNew.index;
                        }
                    }
                    else {
                        item = GameData.Item.getItemBaseByID(itemGroup.ID);
                        item.number = itemGroup.number;
                        item.index = itemGroup.index;
                    }
                    itemArr.push(item);
                }
                return itemArr;
            }
            get lastDate() {
                return LwgStorage.number('LuckyWheelData/lastDate', null, -1).value;
            }
            set lastDate(date) {
                LwgStorage.number('LuckyWheelData/lastDate').value = date;
                LwgEvent.notify(GameEvent.redDotHint);
            }
            get todayFree() {
                return this.lastDate !== LwgDate.Now.date;
            }
        }
        class ItemData extends LwgData.ItmeTable {
            constructor(arr) {
                super(arr);
            }
            getItemBaseByID(ID) {
                const skinObj = this.getObjByID(ID);
                if (skinObj.type === GameEnum.ItemType.Skin) {
                    const path = 'Game/UI/SkinIcon/';
                    skinObj.iconSkin = path + skinObj.name + '.png';
                    skinObj.picSkin = path + skinObj.name + '.png';
                    skinObj.picBigSkin = path + skinObj.name + '.png';
                }
                else {
                    let iconName = '';
                    let picName = '';
                    let picBigName = '';
                    switch (ID) {
                        case 101:
                            iconName = `img_icon_money_01`;
                            picName = `img_icon_money_01b`;
                            picBigName = `img_icon_zuanshibig`;
                            break;
                        case 102:
                            iconName = `img_icon_money_01`;
                            picName = `img_icon_money_01b`;
                            picBigName = `img_icon_zuanshibig`;
                            break;
                        case 103:
                            iconName = `img_icon_money_02`;
                            picName = `img_icon_money_02`;
                            picBigName = `img_icon_tili_02`;
                            break;
                        case 301:
                            iconName = `img_icon_zhuanpan_zailaiyici`;
                            picName = `img_icon_zhuanpan_zailaiyici`;
                            picBigName = `img_icon_zhuanpan_zailaiyici`;
                            break;
                        case 401:
                            iconName = `img_icon_wujin_big`;
                            picName = `img_icon_wujin_big`;
                            picBigName = `img_icon_wujin_big`;
                            break;
                        default:
                            break;
                    }
                    const basePath = 'Game/UI/';
                    skinObj.iconSkin = basePath + iconName + '.png';
                    skinObj.picSkin = basePath + picName + '.png';
                    skinObj.picBigSkin = basePath + picBigName + '.png';
                }
                skinObj.number = 1;
                skinObj.index = 0;
                const obj = LwgTools.ObjArray.objCopy(skinObj);
                return obj;
            }
        }
    })(GameData || (GameData = {}));

    class GameSceneName extends LwgScene.NameBase {
    }
    GameSceneName.PersonalInfo = 'PersonalInfo';
    GameSceneName.Levels = 'Levels';
    GameSceneName.SelectLevel = 'SelectLevel';
    GameSceneName.Settle = 'Settle';
    GameSceneName.Victory = 'Victory';
    GameSceneName.Defeated = 'Defeated';
    GameSceneName.Share = 'Share';
    GameSceneName.CheckIn = 'CheckIn';
    GameSceneName.Ranking = 'Ranking';
    GameSceneName.Shop = 'Shop';
    GameSceneName.Task = 'Task';
    GameSceneName.LuckyWheel = 'LuckyWheel';
    GameSceneName.BeRewarded = 'BeRewarded';
    GameSceneName.Lottery = 'Lottery';
    GameSceneName.ADGetReward = 'ADGetReward';
    GameSceneName.Skin = 'Skin';
    GameSceneName.SkinTry = 'SkinTry';
    GameSceneName.EndLessSettle = 'EndLessSettle';
    GameSceneName.SpecialAwards = 'SpecialAwards';
    GameSceneName.Resurgence = 'Resurgence';
    GameSceneName.PropTry = 'PropTry';

    class Defeated extends LwgScene.SceneBase {
        lwgOpenAniAfter() {
            this.owner.lbLvNum.text = LwgControl.Game.level.toString();
            GameData.Sound.playSoundByID(20);
        }
        lwgButton() {
            this.btnOnUp(this.owner.btnAgain, () => {
                this.openScene(GameSceneName.Start);
            });
            this.btnOnUp(this.owner.btnADGet, () => {
                LwgControl.Game.level++;
                this.openScene(GameSceneName.Start);
            });
        }
    }

    class Effect3D {
        constructor() {
            Effect3D.ins = this;
        }
        get effParent() {
            let parent;
            let scene;
            if (GameData.Level.mode === GameEnum.LevelMode.common) {
                scene = GameRes.Scene3D.MainScene.instance;
            }
            else {
                scene = GameRes.Scene3D.EndLess.instance;
            }
            parent = scene.getChildByName('effParent');
            if (!parent) {
                parent = new Laya.Sprite3D;
                parent.name = 'effParent';
                scene.addChild(parent);
            }
            return parent;
        }
        ready() {
            LwgTools.Node.destroyAllChildren(this.effParent);
        }
        play_Right(v3, prent) {
            const eff = GameRes.Prefab3D.effect_right.instance.clone();
            this.playBase(eff, v3, 3000, prent);
            return eff;
        }
        play_zuanshi(v3, prent) {
            const eff = GameRes.Prefab3D.effect_zuanshi.instance.clone();
            this.playBase(eff, v3, 3000, prent);
            return eff;
        }
        play_Change(v3, index, prent) {
            const eff = GameRes.Prefab3D['effect_change0' + index].instance.clone();
            this.playBase(eff, v3, 3000, prent);
            return eff;
        }
        playBase(eff, v3, time, parent, localPos) {
            this.effParent.addChild(eff);
            if (parent) {
                parent.addChild(eff);
            }
            else {
                this.effParent.addChild(eff);
            }
            if (localPos) {
                eff.transform.localPosition = v3;
            }
            else {
                eff.transform.position = v3;
            }
            if (time !== -1) {
                Laya.timer.once(time, this, () => {
                    eff.destroy(true);
                });
            }
        }
    }

    class SceneBase {
        constructor(scene) {
            this.roadAddTime = 200;
            this.roadDestoryDistance = 80;
            this.roadDataArr = [];
            this.redBase = [1, 0.45, 0.35];
            this.yellowBase = [1, 0.70, 0.17];
            this.blueBase = [0.3, 0.6, 1];
            this.redCount = 0;
            this.yellowCount = 0;
            this.blueCount = 0;
            this.mileageRoad = 0;
            this.heightRoad = 0;
            this.mileageTotal = 0;
            this._mileageCur = 0;
            this.scene = scene;
            Laya.stage.addChild(this.scene);
            this.camaraPoint = this.scene.getChildByName('CameraPoint');
            this.mainCamara = this.camaraPoint.getChildByName('Main Camera');
            if (Laya.Browser.pixelRatio >= 16 / 9) {
                this.mainCamara.fieldOfView += 5;
            }
            const mainCamaraP = this.mainCamara.transform.position;
            this.mainCamaraFP = new Laya.Vector3(mainCamaraP.x, mainCamaraP.y, mainCamaraP.z);
            this.directionalLight = this.camaraPoint.getChildByName('Directional Light');
            this.roadParent = new Laya.Sprite3D;
            this.roadParent.name = 'roadParent';
            this.scene.addChild(this.roadParent);
            this.marginParent = new Laya.Sprite3D;
            this.marginParent.name = 'marginParent';
            this.scene.addChild(this.marginParent);
        }
        get endRoadData() {
            return this._endRoadData;
        }
        set endRoadData(val) {
            this.redCount = 0;
            this.yellowCount = 0;
            this.blueCount = 0;
            this._endRoadData = val;
        }
        get mileageCur() {
            return this._mileageCur;
        }
        set mileageCur(val) {
            this._mileageCur = val;
            if (GameData.Level.mode === GameEnum.LevelMode.common) {
                if (this._mileageCur > this.mileageTotal) {
                    this._mileageCur = this.mileageTotal;
                }
            }
            LwgEvent.notify(GameEvent.updateLvSchedule, [this._mileageCur / this.mileageTotal, this._mileageCur]);
        }
        showbase() {
            Laya.timer.clearAll(this);
            this.mileageRoad = 0;
            this.heightRoad = 0;
            this.mileageTotal = 0;
            this.mileageCur = 0;
            this.roadIndex = 0;
            this.marginIndex = -2;
            this.colorIndex = 1;
            this.start();
            this.RoadAdd();
            this.RoadDestory();
            LwgEvent.register(GameEvent.addMileageCur, this, (num) => {
                this.mileageCur += num;
            });
        }
        start() {
            LwgTools.Node.destroyAllChildren(this.marginParent);
            LwgTools.Node.destroyAllChildren(this.roadParent);
            for (let i = 0; i < 4; i++) {
                this.createRoad();
            }
            this.createMargin();
        }
        createMargin() {
            if (GameData.Level.mode === GameEnum.LevelMode.common) {
                this.endMargin = GameRes.Prefab3D.marginC.instance.clone();
            }
            else {
                this.endMargin = GameRes.Prefab3D.marginE.instance.clone();
            }
            this.marginParent.addChild(this.endMargin);
            this.endMargin.transform.position = new Laya.Vector3(0, 0, this.marginIndex * 200);
            this.marginIndex++;
        }
        setEndData() {
            this.endRoadData = this.roadDataArr[this.roadIndex];
        }
        createRoad() {
            this.setEndData();
            if (!this.endRoadData) {
                return;
            }
            var add = () => {
                this.roadParent.addChild(this.endRoad);
                this.endRoad.transform.position = new Laya.Vector3(0, this.heightRoad, this.mileageRoad);
                this.mileageRoad += this.endRoadData.length;
                this.heightRoad += this.endRoadData.height;
                this.endRoad.heightRoad = this.heightRoad;
                this.roadIndex++;
            };
            if (this.endRoadData.name === 'Road_999' || this.endRoadData.name === 'Road_888' || this.endRoadData.name === 'Road_997') {
                this.endRoad = GameRes.Prefab3D[this.endRoadData.name].instance.clone();
                if (this.endRoadData.name === 'Road_888') {
                    this.changeRodeColor(this.endRoad);
                }
                add();
            }
            else {
                const childDataArr = GameData.RoadsMsg.getChildDataArrByRoadName(this.endRoadData.name);
                if (childDataArr) {
                    this.endRoad = new Laya.Sprite3D();
                    this.endRoad.name = this.endRoadData.name;
                    add();
                    for (let index = 0; index < childDataArr.length; index++) {
                        const childData = childDataArr[index];
                        let res = this.resCorresponding(childData.name);
                        if (!res) {
                            console.log(this.endRoadData.name, '不存在资源:', childData.name);
                            return false;
                        }
                        let child = res.clone();
                        this.endRoad.addChild(child);
                        child.transform.localPosition = new Laya.Vector3(childData.data.localPositionX, childData.data.localPositionY, childData.data.localPositionZ);
                        child.transform.localScale = new Laya.Vector3(childData.data.localScaleX, childData.data.localScaleY, childData.data.localScaleZ);
                        child.transform.localRotationEuler = new Laya.Vector3(childData.data.localRotationEulerX, childData.data.localRotationEulerY, childData.data.localRotationEulerZ);
                        child.active = childData.active;
                        if (child.name.substr(0, 7) === 'KeyFood') {
                            child.transform.localPositionY += 2;
                        }
                        this.changeRodeColor(child);
                        this.changeDoorColor(child);
                    }
                    this.setBubbleColorIndex();
                    for (let j = 0; j < this.endRoad.numChildren; j++) {
                        const element = this.endRoad.getChildAt(j);
                        this.changeColor(element);
                    }
                }
                else {
                    console.log(this.endRoadData.name, '没有数据', this.endRoadData, '索引值：', this.roadIndex);
                    Laya.timer.clearAll(this);
                    return false;
                }
            }
            return true;
        }
        resCorresponding(name) {
            let res;
            if (name.substr(0, 6) === 'paopao') {
                const name0 = name.substr(0, 8);
                res = GameRes.Prefab3D[name0].instance;
                const index = name.substr(7, 1);
                this.endRoadData['index' + index] = 1;
            }
            else if (name.substr(0, 11) === 'ZhangaiBian') {
                const name0 = name.substr(0, 14);
                if (GameData.Level.mode === GameEnum.LevelMode.common) {
                    this.colorIndex = +name.substr(13, 1);
                }
                else {
                    this.colorIndex = Math.floor(Math.random() * 3) + 1;
                }
                res = GameRes.Prefab3D[name0].instance;
            }
            else if (name.substr(0, 8) === 'RoadTied') {
                res = GameRes.Prefab3D.RoadTied.instance;
            }
            else if (name.substr(0, 9) === 'Road_Base') {
                res = GameRes.Prefab3D.Road_Base.instance;
            }
            else if (name.substr(0, 7) === 'KeyFood') {
                res = GameRes.Prefab3D.KeyFood.instance;
            }
            else if (name.substr(0, 13) === 'zhangai_xiepo') {
                res = GameRes.Prefab3D.zhangai_xiepo.instance;
            }
            else if (name.substr(0, 8) === 'zhangai0') {
                const index = +name.substr(8, 1);
                res = GameRes.Prefab3D[`zhangai0${index}`].instance;
            }
            else if (name.substr(0, 4) === 'drop') {
                res = GameRes.Prefab3D.drop.instance;
            }
            return res;
        }
        setBubbleColorIndex() {
            const colorArr = this.endRoadData.color.split('_');
            let group = 0;
            if (this.endRoadData.index1 && this.endRoadData.index2 && this.endRoadData.index3) {
                group = 3;
            }
            else if (this.endRoadData.index1 && this.endRoadData.index2) {
                group = 2;
            }
            else if (this.endRoadData.index1) {
                group = 1;
            }
            if (colorArr.length === 1) {
                if (group > 1) {
                    const ran = Math.floor(Math.random() * group) + 1;
                    this.endRoadData['index' + ran] = this.colorIndex;
                    for (let i = 0; i < 3; i++) {
                        if (i !== ran) {
                            this.endRoadData['index' + i] = Math.floor(Math.random() * 3) + 1;
                        }
                    }
                }
                else {
                    this.endRoadData.index1 = this.colorIndex;
                }
            }
            else {
                for (let i = 0; i < colorArr.length; i++) {
                    const index = +colorArr[i];
                    if (index === 0) {
                        this.endRoadData[`index${i + 1}`] = Math.floor(Math.random() * 3) + 1;
                    }
                    else {
                        this.endRoadData[`index${i + 1}`] = index;
                    }
                }
            }
        }
        changeColor(bubble) {
            if (bubble.name.substr(0, 6) === 'paopao') {
                const group = +bubble.name.substr(7, 1);
                const index0 = this.endRoadData[`index${group}`];
                if (!GameRes.Material[`bubble0${index0}`]) {
                    console.log('不存在资源', `bubble0${index0}`);
                }
                else {
                    const bubble01 = bubble.getChildByName('pao01');
                    const bubble02 = bubble.getChildByName('pao02');
                    const mat = GameRes.Material['bubble0' + index0].instance;
                    bubble.colorIndex = index0;
                    const coe1 = 0.05;
                    const coe2 = 0.05;
                    const coe3 = 0.02;
                    var gradualChange = (arr) => {
                    };
                    if (index0 === 1) {
                        gradualChange(this.redBase);
                    }
                    else if (index0 === 2) {
                        gradualChange(this.yellowBase);
                    }
                    else if (index0 === 3) {
                        gradualChange(this.blueBase);
                    }
                    bubble02.meshRenderer.material = bubble01.meshRenderer.material = mat;
                }
            }
        }
        ;
        changeRodeColor(roadBase) {
            if (roadBase.name.substr(0, 9) === 'Road_Base' || roadBase.name.substr(0, 9) === 'Road_888') {
                if (GameData.Level.mode === GameEnum.LevelMode.endless) {
                    const base01 = roadBase.getChildByName('road_base_01');
                    if (base01) {
                        const mat = base01.meshRenderer.material;
                        mat.albedoColor = new Laya.Vector4(0.3, 0.18, 0.92, 1);
                    }
                }
            }
        }
        changeDoorColor(door) {
            if (door['alreadyChange'] || GameData.Level.mode === GameEnum.LevelMode.common) {
                return;
            }
            if (door.name.substr(0, 11) === 'ZhangaiBian') {
                const position = door.transform.position.clone();
                const parent = door.parent;
                let newDoor;
                const res = GameRes.Prefab3D['ZhangaiBian_0' + this.colorIndex];
                if (!res) {
                }
                else {
                    newDoor = res.instance.clone();
                    newDoor['alreadyChange'] = true;
                    parent.addChild(newDoor);
                    newDoor.transform.position = position;
                    door.active = false;
                }
            }
        }
        RoadAdd() {
            Laya.timer.frameLoop(1, this, () => {
                if (this.endRoad && this.endRoad.transform) {
                    if (this.endRoad.transform.position.z - this.camaraPoint.transform.position.z < 100) {
                        if (this.createRoad()) {
                            if (this.roadIndex > 3) {
                                const originalPos = this.endRoad.transform.position.clone();
                                this.endRoad.transform.localPositionY = originalPos.y - 20;
                                LwgAni3D.moveToY(this.endRoad, originalPos.y + 3, this.roadAddTime, this, null, () => {
                                    LwgAni3D.moveToY(this.endRoad, originalPos.y, this.roadAddTime / 2, this, null, () => {
                                    });
                                });
                            }
                        }
                    }
                }
                let dis = 0;
                if (GameData.Level.mode === GameEnum.LevelMode.endless) {
                    dis = 0;
                }
                if (this.endMargin && this.endMargin.transform) {
                    if (this.camaraPoint.transform.position.z - this.endMargin.transform.position.z > dis) {
                        this.createMargin();
                    }
                }
            });
        }
        RoadDestory() {
            Laya.timer.frameLoop(10, this, () => {
                if (this.roadIndex > 2) {
                    for (let i = 0; i < this.roadParent.numChildren; i++) {
                        const Road = this.roadParent.getChildAt(i);
                        if (Road.name !== 'Road_999' && Road.name !== 'Road_997') {
                            if (this.camaraPoint.transform.localPositionZ - Road.transform.position.z > this.roadDestoryDistance) {
                                Road.destroy(true);
                            }
                        }
                    }
                }
                if (this.marginIndex > 2) {
                    if (this.marginParent.numChildren > 1) {
                        for (let j = 0; j < this.marginParent.numChildren; j++) {
                            const margin = this.marginParent.getChildAt(j);
                            if (this.camaraPoint.transform.localPositionZ - margin.transform.position.z > 200) {
                                margin.destroy(true);
                            }
                        }
                    }
                }
            });
        }
        hideBase() {
            LwgEvent.offAllCaller(this);
            Laya.timer.clearAll(this);
            LwgTools.Node.destroyAllChildren(this.marginParent);
            LwgTools.Node.destroyAllChildren(this.roadParent);
        }
    }

    class EndLessScene extends SceneBase {
        constructor() {
            super(GameRes.Scene3D.EndLess.instance);
            EndLessScene.ins = this;
            this.scene.name = 'EndLessScene';
        }
        ready() {
            this.roadDestoryDistance = 200;
            this.roadAddTime = 50;
            this.showbase();
        }
        clear() {
            this.hideBase();
        }
        setEndData() {
            LwgEvent.notify(GameEvent.roadIndex, [this.roadIndex]);
            const indexItem1 = Math.round(Math.random() * 38) + 200;
            const indexItem2 = Math.round(Math.random() * 10) + 300;
            const indexItem3 = Math.round(Math.random() * 17) + 311;
            const indexItem4 = Math.round(Math.random() * 8) + 329;
            let ranIndex;
            if (this.roadIndex === 0) {
                ranIndex = 888;
            }
            else if (this.roadIndex === 1) {
                ranIndex = indexItem1;
                this.type = 'A';
            }
            else if (this.roadIndex > 1 && this.roadIndex <= 10) {
                if (this.type === 'A') {
                    ranIndex = indexItem1;
                    this.type = 'B';
                }
                else if (this.type === 'B') {
                    ranIndex = indexItem2;
                    this.type = 'C';
                }
                else if (this.type === 'C') {
                    const ran = LwgTools.Num.randomOneHalf();
                    if (ran === 1) {
                        ranIndex = indexItem1;
                    }
                    else {
                        ranIndex = indexItem2;
                    }
                    this.type = 'A';
                }
            }
            else if (this.roadIndex > 10 && this.roadIndex <= 20) {
                if (this.type === 'A') {
                    ranIndex = indexItem1;
                    this.type = 'B';
                }
                else if (this.type === 'B') {
                    ranIndex = indexItem3;
                    this.type = 'C';
                }
                else if (this.type === 'C') {
                    const ran = LwgTools.Num.randomOneHalf();
                    if (ran === 1) {
                        ranIndex = indexItem1;
                        this.type = 'A';
                    }
                    else {
                        ranIndex = indexItem3;
                        this.type = 'D';
                    }
                }
                else if (this.type === 'D') {
                    const ran = LwgTools.Num.randomOneHalf();
                    if (ran === 1) {
                        ranIndex = indexItem1;
                    }
                    else {
                        ranIndex = indexItem3;
                    }
                    this.type = 'A';
                }
            }
            else if (this.roadIndex > 20) {
                if (this.type === 'A') {
                    ranIndex = indexItem1;
                    this.type = 'B';
                }
                else if (this.type === 'B') {
                    ranIndex = indexItem4;
                    this.type = 'C';
                }
                else if (this.type === 'C') {
                    ranIndex = indexItem4;
                    this.type = 'D';
                }
                else if (this.type === 'D') {
                    const ran = LwgTools.Num.randomOneHalf();
                    if (ran === 1) {
                        ranIndex = indexItem1;
                    }
                    else {
                        ranIndex = indexItem4;
                    }
                    this.type = 'A';
                }
            }
            const roadData = GameData.Road.getObjByID(ranIndex);
            if (!roadData) {
                console.log('表格中没有这个路段', ranIndex, '第', this.roadIndex);
            }
            else {
                const newRoadData = LwgTools.ObjArray.objCopy(roadData);
                newRoadData.color = '0';
                this.endRoadData = newRoadData;
            }
        }
    }

    class MainScene extends SceneBase {
        constructor() {
            super(GameRes.Scene3D.MainScene.instance);
            MainScene.ins = this;
            this.scene.name = 'MainScene';
        }
        ready() {
            this.roleType = null;
            this.roadDataArr = GameData.Level.getRoadDataArr();
            this.showbase();
            for (let index = 0; index < this.roadDataArr.length - 3; index++) {
                const element = this.roadDataArr[index];
                this.mileageTotal += element.length;
            }
        }
        clear() {
            this.hideBase();
        }
    }

    class Role {
        constructor() {
            Role.ins = this;
            this.changeScene(MainScene.ins.scene);
            StateControl.Init();
        }
        changeScene(scene) {
            this.scene = scene;
            this.cameraPoint = this.scene.getChildByName('CameraPoint');
            this.camera = this.cameraPoint.getChildByName('Main Camera');
            if (!this.scene.getChildByName('Role')) {
                this.role = new Laya.Sprite3D;
                this.role.name = 'Role';
                this.scene.addChild(this.role);
            }
            else {
                this.role = this.scene.getChildByName('Role');
            }
            this.changeSkin();
            this.changeColor(4);
            this.changeTravel(4);
        }
        setState(state, args = []) {
            StateControl.stateClear();
            switch (state) {
                case GameEnum.RoleState.Suspend:
                    StateControl.Suspend.ins.action();
                    break;
                case GameEnum.RoleState.Ready:
                    StateControl.stateReset();
                    StateControl.Ready.ins.action();
                    break;
                case GameEnum.RoleState.Start:
                    StateControl.stateReset();
                    StateControl.Start.ins.action(args, () => {
                        this.setState(GameEnum.RoleState.Run, args);
                    });
                    break;
                case GameEnum.RoleState.Resurgence:
                    StateControl.Resurgence.ins.action(args, () => {
                        this.setState(GameEnum.RoleState.Run, args);
                    });
                    break;
                case GameEnum.RoleState.Run:
                    StateControl.MoveCrosswise.ins.action();
                    StateControl.MoveForward.ins.action(args);
                    StateControl.Run.ins.action();
                    break;
                case GameEnum.RoleState.Diamond:
                    StateControl.Diamond.ins.action(args, () => {
                        this.setState(GameEnum.RoleState.Run);
                    });
                    break;
                case GameEnum.RoleState.Wall:
                    StateControl.Wall.ins.action(args, () => {
                        this.setState(GameEnum.RoleState.Run);
                    }, () => {
                        this.setState(GameEnum.RoleState.Defeated);
                    });
                    break;
                case GameEnum.RoleState.Bubble:
                    StateControl.MoveCrosswise.ins.action();
                    StateControl.Bubble.ins.action(args, (args) => {
                        StateControl.MoveForward.ins.action(args);
                    }, () => {
                        this.setState(GameEnum.RoleState.Defeated);
                    });
                    break;
                case GameEnum.RoleState.Door:
                    StateControl.Door.ins.action(args, () => {
                        this.setState(GameEnum.RoleState.Run);
                    });
                    break;
                case GameEnum.RoleState.Drop:
                    StateControl.Drop.ins.action(args, () => {
                        this.setState(GameEnum.RoleState.Run);
                    }, (drop) => {
                        this.setState(GameEnum.RoleState.Defeated, [GameEnum.ResurgenceType.drop]);
                    });
                    break;
                case GameEnum.RoleState.Slope:
                    StateControl.Slope.ins.action(args, () => {
                        this.setState(GameEnum.RoleState.Run);
                    });
                    StateControl.MoveCrosswise.ins.action();
                    break;
                case GameEnum.RoleState.KeyFood:
                    StateControl.KeyFood.ins.action(args, () => {
                        this.setState(GameEnum.RoleState.Run);
                    });
                    break;
                case GameEnum.RoleState.Destination:
                    StateControl.MoveCrosswise.ins.action();
                    StateControl.Destination.ins.action(args, () => {
                        this.setState(GameEnum.RoleState.Dance);
                    });
                    break;
                case GameEnum.RoleState.Dance:
                    StateControl.Dance.ins.action(args, () => {
                        this.setState(GameEnum.RoleState.Victory);
                    });
                    break;
                case GameEnum.RoleState.Victory:
                    StateControl.Victory.ins.action();
                    break;
                case GameEnum.RoleState.Defeated:
                    StateControl.Defeated.ins.action(args);
                    break;
                default:
                    break;
            }
            this.state = state;
        }
        playAniRole(aniName) {
            return LwgTools.D3.playAnimator(this.skin, aniName);
        }
        playAniCrossFade(aniName) {
            const animator = this.skin.getComponent(Laya.Animator);
            animator.crossFade(aniName, 1);
        }
        playAniByCommon(roleSkin, aniName) {
            return;
            const aniCilp = GameData.Animator.getClipNameByRoleNameAndAni(roleSkin.name, aniName);
            return LwgTools.D3.playAnimator(roleSkin, aniCilp);
        }
        get colorIndex() {
            return this._colorIndex ? this._colorIndex : 1;
        }
        set colorIndex(val) {
            this._colorIndex = val;
            LwgEvent.notify(GameEvent.updateRoleHP, [this._colorIndex]);
        }
        changeColor(colorIdnex = GameEnum.Colour.red) {
            this.colorIndex = colorIdnex;
            if (colorIdnex !== GameEnum.Colour.rainbow) {
                this.hair.meshRenderer.material = GameRes.Material[`dress0${colorIdnex}`].instance;
                this.dress.skinnedMeshRenderer.material = GameRes.Material[`hair0${colorIdnex}`].instance;
            }
            else {
                this.dress.skinnedMeshRenderer.material = GameRes.Material[`hair0${colorIdnex}`].instance;
            }
        }
        changeTravel(colorIndex) {
            const travelPointL = LwgTools.Node.findChild3D(this.skin, 'TravelPointL');
            for (let index = 0; index < travelPointL.numChildren; index++) {
                const element = travelPointL.getChildAt(index);
                if (+element.name.substr(7, 1) === colorIndex) {
                    element.active = true;
                }
                else {
                    element.active = false;
                }
            }
            const travelPointR = LwgTools.Node.findChild3D(this.skin, 'TravelPointR');
            for (let index = 0; index < travelPointR.numChildren; index++) {
                const element = travelPointR.getChildAt(index);
                if (+element.name.substr(7, 1) === colorIndex) {
                    element.active = true;
                }
                else {
                    element.active = false;
                }
            }
        }
        changeSkin(dressName, hairName, wingName) {
            dressName = dressName ? dressName : GameData.Skin.pitchDressName;
            hairName = hairName ? hairName : GameData.Skin.pitchHairName;
            wingName = wingName ? wingName : GameData.Skin.pitchWingName;
            LwgTools.Node.destroyAllChildren(this.role);
            this.skin = GameRes.Prefab3D.role01.instance.clone();
            this.role.addChild(this.skin);
            const box = this.skin.getChildByName('box');
            if (!box.getComponent(RoleScript)) {
                box.addComponent(RoleScript);
            }
            for (let index = 0; index < this.skin.numChildren; index++) {
                const part = this.skin.getChildAt(index);
                if (part.name.substr(0, 5) === 'Dress') {
                    if (part.name === dressName) {
                        part.active = true;
                        this.dress = part;
                    }
                    else {
                        part.active = false;
                    }
                }
            }
            const hairParent = LwgTools.Node.findChild3D(this.skin, 'mixamorig:HeadTop_End');
            for (let index = 0; index < hairParent.numChildren; index++) {
                const part = hairParent.getChildAt(index);
                if (part.name === hairName) {
                    part.active = true;
                    this.hair = part.getChildAt(0);
                }
                else {
                    part.active = false;
                }
            }
            const wingPoint = LwgTools.Node.findChild3D(this.skin, 'WingPoint');
            for (let index = 0; index < wingPoint.numChildren; index++) {
                const part = wingPoint.getChildAt(index);
                if (part.name === wingName) {
                    part.active = true;
                    this.wing = part.getChildAt(0);
                }
                else {
                    part.active = false;
                }
            }
        }
        showFontHP(num, sp3D, diffX, diffY) {
            return;
            const sp3d0 = sp3D ? sp3D : Role.ins.role;
            const point = LwgTools.D3.getPosToScreen(sp3d0.transform.position, Role.ins.camera);
            let color = '#ff5547';
            if (num >= 0) {
                color = '#56ff47';
            }
            const numStr = num > 0 ? '+' + num.toString() : num.toString();
            let diffX0 = diffX === undefined ? 100 : diffX;
            let diffY0 = diffY === undefined ? 100 : diffY;
            const scale = sp3d0.transform.localScaleX;
            diffX0 *= scale;
            diffY0 *= scale;
            LwgDialogue.FloatWord.createFontSystem(point.x + diffX0, point.y + diffY0, { content: numStr, color: color }, 1, false);
        }
        showFontAttribute(str) {
            return;
            let color = '#56ff47';
            const point = LwgTools.D3.getPosToScreen(Role.ins.role.transform.position, Role.ins.camera);
            point.y -= this.role.transform.localScaleX * 100;
            point.y -= 50;
            LwgDialogue.FloatWord.createFontSystem(point.x, point.y, { content: str, color: color }, 1, false);
        }
        updateLevelDisplay() {
            const point = LwgTools.D3.getPosToScreen(Role.ins.role.transform.position, Role.ins.camera);
            point.y -= this.role.transform.localScaleX * 100;
            point.y -= 50;
            LwgEvent.notify(GameEvent.updateRoleDataDisplay, [point]);
        }
    }
    class RoleScript extends Lwg3D.Object3D {
        onTriggerEnter(other) {
            const otherOwner = other.owner;
            const name = otherOwner.name;
            if (otherOwner['alreadyEnter']) {
                return;
            }
            otherOwner['alreadyEnter'] = true;
            if (name.substr(0, 6) == 'paopao') {
                Role.ins.setState(GameEnum.RoleState.Bubble, [otherOwner]);
            }
            else if (name.substr(0, 11) == 'ZhangaiBian') {
                Role.ins.setState(GameEnum.RoleState.Door, [otherOwner]);
            }
            else if (name.substr(0, 11) == 'destination') {
                Role.ins.setState(GameEnum.RoleState.Destination, [otherOwner]);
            }
            else if (name.substr(0, 13) == 'zhangai_xiepo') {
                Role.ins.setState(GameEnum.RoleState.Slope, [otherOwner]);
            }
            else if (name.substr(0, 8) == 'zhangai0') {
                Role.ins.setState(GameEnum.RoleState.Wall, [otherOwner]);
            }
            else if (name.substr(0, 7) == 'KeyFood') {
                Role.ins.setState(GameEnum.RoleState.KeyFood, [otherOwner]);
            }
            else if (name.substr(0, 4) == 'drop') {
                Role.ins.setState(GameEnum.RoleState.Drop, [otherOwner]);
            }
        }
        onTriggerExit(other) {
            return;
            const otherOwner = other.owner;
            const name = otherOwner.name;
            if (name.substr(0, 12) === 'yanjiang') {
                if (otherOwner['alreadyExit']) {
                    return;
                }
                otherOwner['alreadyExit'] = true;
            }
        }
    }
    class aniScript extends Lwg3D.Object3D {
        lwgOnAwake() {
        }
        attackEnd() {
            const animator = this.owner.getComponent(Laya.Animator);
            const state = GameData.Animator.getClipNameByRoleNameAndAni(this.owner.name, GameEnum.RoleAni.idle);
            animator.crossFade(state, 1);
        }
    }
    var StateControl;
    (function (StateControl) {
        function stateReset() {
            for (const key in StateControl) {
                if (Object.prototype.hasOwnProperty.call(StateControl, key)) {
                    const state = StateControl[key];
                    if (state['ins'] && state['ins']['reset']) {
                        state['ins']['reset']();
                    }
                }
            }
        }
        StateControl.stateReset = stateReset;
        function stateClear() {
            for (const key in StateControl) {
                if (Object.prototype.hasOwnProperty.call(StateControl, key)) {
                    const state = StateControl[key];
                    if (state['ins'] && state['ins']['actionStop']) {
                        state['ins']['actionStop']();
                    }
                }
            }
        }
        StateControl.stateClear = stateClear;
        function Init() {
            for (const key in StateControl) {
                if (Object.prototype.hasOwnProperty.call(StateControl, key)) {
                    const state = StateControl[key];
                    const name = state['name'];
                    if (name && name && name !== 'Init' && name !== 'stateClear' && name !== 'stateBase') {
                        new state();
                    }
                }
            }
        }
        StateControl.Init = Init;
        class stateBase {
            action(args, continueCb, endCb) { }
            ;
        }
        StateControl.stateBase = stateBase;
        class Suspend {
            constructor() {
                Suspend.ins = this;
            }
            action() {
            }
        }
        StateControl.Suspend = Suspend;
        class Ready {
            constructor() {
                Ready.ins = this;
            }
            action() {
                Role.ins.cameraPoint.transform.position = new Laya.Vector3(2, -7, -7);
                Role.ins.cameraPoint.transform.localRotationEuler = new Laya.Vector3(-15, 147.5, 4.8);
                Role.ins.role.transform.localPosition = new Laya.Vector3(0, 0, 0);
                Role.ins.role.transform.localScale = new Laya.Vector3(1, 1, 1);
                Role.ins.role.transform.localRotationEuler = new Laya.Vector3(0, 0, 0);
                Role.ins.changeSkin();
                Role.ins.changeColor();
                Role.ins.changeTravel(0);
                Role.ins.playAniRole(GameEnum.RoleAni.dance);
                Laya.timer.frameLoop(1, this, () => {
                    Role.ins.updateLevelDisplay();
                });
            }
            actionStop() {
                Laya.timer.clearAll(this);
            }
        }
        StateControl.Ready = Ready;
        class Start {
            constructor() {
                Start.ins = this;
            }
            action(args, endCb) {
                Laya.timer.frameLoop(1, this, () => {
                    Role.ins.updateLevelDisplay();
                });
                const time = 1000;
                LwgAni3D.moveTo(Role.ins.cameraPoint, new Laya.Vector3(0, 0, 0), time, this, null, () => {
                });
                LwgAni3D.rotateTo(Role.ins.cameraPoint, new Laya.Vector3(0, 0, 0), time, this, null, () => {
                    endCb && endCb();
                    Role.ins.changeTravel(Role.ins.colorIndex);
                });
            }
            actionStop() {
                Laya.timer.clearAll(this);
            }
        }
        StateControl.Start = Start;
        class MoveForward {
            constructor() {
                this.bubbleCaller = {};
                this.bubbleAddSpeed = 0;
                this.bubbleTime = 50;
                this.sprintCaller = {};
                this.sprintAddSpeed = 0.5;
                this.speedSprint = 0;
                this.speedBubble = 0;
                this.speedBase = 0;
                MoveForward.ins = this;
                this.reset();
            }
            get speed() {
                return this.speedBase + this.speedBubble + this.speedSprint;
            }
            get sprintTime() {
                if (GameData.Level.mode === GameEnum.LevelMode.endless) {
                    return 6000;
                }
                else {
                    return 6000;
                }
            }
            reset() {
                this.speedBase = 0.8 * (1 + GameData.Skill.getSkillAdditionByType(GameEnum.SkillType.speed));
                this.speedBubble = 0;
                this.speedSprint = 0;
                this.sprintAddSpeed = 0.5;
                this.bubbleAddSpeed = 0;
                if (GameData.Level.mode === GameEnum.LevelMode.endless) {
                    LwgEvent.offAllCaller(this);
                    LwgEvent.register(GameEvent.roadIndex, this, () => {
                        this.speedBase += 0.03;
                    });
                }
            }
            action(args = []) {
                if (args[0] === GameEnum.MoveForwardArgs.sprint) {
                    this.sprintProps();
                }
                else {
                    if (args[0] === GameEnum.MoveForwardArgs.rightBubble) {
                        this.bubbleAddSpeed = 0.15;
                    }
                    else if (args[0] === GameEnum.MoveForwardArgs.errorBubble) {
                        this.bubbleAddSpeed = -0.2;
                    }
                    this.bubble();
                }
                Laya.timer.frameLoop(1, this, this.actionCb);
            }
            actionCb() {
                LwgEvent.notify(GameEvent.addMileageCur, [this.speed]);
                Role.ins.cameraPoint.transform.translate(new Laya.Vector3(0, 0, this.speed), false);
                Role.ins.role.transform.translate(new Laya.Vector3(0, 0, this.speed), false);
                Role.ins.updateLevelDisplay();
            }
            bubble() {
                Laya.timer.clearAll(this.bubbleCaller);
                this.speedBubble = this.bubbleAddSpeed;
                this.isBubble = true;
                Laya.timer.once(this.bubbleTime, this.bubbleCaller, () => {
                    this.isBubble = false;
                    const subSpeed = this.bubbleAddSpeed / 15;
                    LwgTimer.frameNumLoop(1, 15, this.bubbleCaller, () => {
                        this.speedBubble -= subSpeed;
                    }, () => {
                        this.speedBubble = 0;
                        Role.ins.playAniRole(GameEnum.RoleAni.run);
                    });
                });
            }
            sprintProps() {
                this.isSprint = true;
                this.sprintEff && this.sprintEff.destroy(true);
                this.sprintEff = GameRes.Prefab3D.effect_chongci.instance.clone();
                Role.ins.changeColor(GameEnum.Colour.rainbow);
                Laya.timer.once(200, this, () => {
                    Role.ins.changeTravel(GameEnum.Colour.rainbow);
                });
                Role.ins.skin.addChild(this.sprintEff);
                Laya.timer.clearAll(this.sprintCaller);
                this.speedSprint = this.sprintAddSpeed;
                Laya.timer.once(this.sprintTime, this.sprintCaller, () => {
                    this.isSprint = false;
                    const subSpeed = this.sprintAddSpeed / 15;
                    LwgTimer.frameNumLoop(1, 15, this.sprintCaller, () => {
                        this.speedSprint -= subSpeed;
                    }, () => {
                        this.speedSprint = 0;
                        this.sprintEff && this.sprintEff.destroy(true);
                        Door.ins.changeColor();
                        Role.ins.playAniRole(GameEnum.RoleAni.run);
                    });
                });
            }
            stopBubble() {
                Laya.timer.clearAll(this.bubbleCaller);
            }
            actionStop() {
                Laya.timer.clear(this, this.actionCb);
            }
        }
        StateControl.MoveForward = MoveForward;
        class MoveCrosswise {
            constructor() {
                this.isDestination = false;
                MoveCrosswise.ins = this;
                this.reset();
            }
            reset() {
                this.speed = 0.06;
                StateControl.gMoveScope = [-10, 10];
                StateControl.gMoveCameraScope = [-6, 6];
                this.isDestination = false;
            }
            action() {
                Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.stageMove);
                Laya.stage.on(Laya.Event.MOUSE_UP, this, this.stageUp);
                Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.stageUp);
            }
            stageMove(event) {
                if (this.isDestination) {
                    return;
                }
                if (this.mouseX) {
                    this.setScopeLimit(Role.ins.cameraPoint, event);
                    this.setScopeLimit(Role.ins.role, event);
                    this.mouseX = event.stageX;
                }
                else {
                    this.mouseX = event.stageX;
                }
            }
            setScopeLimit(target, e) {
                let croMouseX = this.mouseX;
                let diffX = e.stageX - croMouseX;
                let targetX = 0;
                if (target == Role.ins.cameraPoint) {
                    targetX = target.transform.position.x - diffX * this.speed * 0.6;
                }
                else {
                    targetX = target.transform.position.x - diffX * this.speed;
                }
                target.transform.position = new Laya.Vector3(targetX, target.transform.position.y, target.transform.position.z);
                const posTarget = target.transform.position.clone();
                if (target == Role.ins.cameraPoint) {
                    if (target.transform.position.x < StateControl.gMoveCameraScope[0]) {
                        target.transform.position = new Laya.Vector3(StateControl.gMoveCameraScope[0], posTarget.y, posTarget.z);
                    }
                    if (target.transform.position.x > StateControl.gMoveCameraScope[1]) {
                        target.transform.position = new Laya.Vector3(StateControl.gMoveCameraScope[1], posTarget.y, posTarget.z);
                    }
                }
                else {
                    if (target.transform.position.x < StateControl.gMoveScope[0]) {
                        target.transform.position = new Laya.Vector3(StateControl.gMoveScope[0], posTarget.y, posTarget.z);
                    }
                    if (target.transform.position.x > StateControl.gMoveScope[1]) {
                        target.transform.position = new Laya.Vector3(StateControl.gMoveScope[1], posTarget.y, posTarget.z);
                    }
                }
            }
            stageUp(e) {
                this.mouseX = null;
            }
            actionStop() {
                this.mouseX = null;
                Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.stageMove);
                Laya.stage.off(Laya.Event.MOUSE_UP, this, this.stageUp);
                Laya.stage.off(Laya.Event.MOUSE_OUT, this, this.stageUp);
            }
        }
        StateControl.MoveCrosswise = MoveCrosswise;
        class Run {
            constructor() {
                Run.ins = this;
            }
            action() {
                Role.ins.playAniRole(GameEnum.RoleAni.run);
            }
        }
        StateControl.Run = Run;
        class Slope {
            constructor() {
                this.high = 20;
                this.moveLen = 70;
                Slope.ins = this;
            }
            action(args, cuntinueCb) {
                const time1 = 150;
                const time2 = 500;
                cuntinueCb && cuntinueCb();
                LwgAni3D.moveToY(Role.ins.role, this.high, time1, this, Laya.Ease.quadOut, () => {
                    LwgAni3D.moveToY(Role.ins.role, 0, time2, this, Laya.Ease.quadIn, () => { });
                });
                LwgAni3D.moveZ(Role.ins.role, this.moveLen, time1 + time2, this);
                const cameraDiffY = Role.ins.cameraPoint.transform.position.y - Role.ins.role.transform.position.y;
                LwgAni3D.moveToY(Role.ins.cameraPoint, this.high + cameraDiffY, time1, this, Laya.Ease.quadOut, () => {
                    LwgAni3D.moveToY(Role.ins.cameraPoint, cameraDiffY, time2, this, Laya.Ease.quadIn, () => { });
                });
                LwgAni3D.moveZ(Role.ins.cameraPoint, this.moveLen, time1 + time2, this);
            }
        }
        StateControl.Slope = Slope;
        class Drop {
            constructor() {
                Drop.ins = this;
            }
            action(ags = [], cuntinueCb, defeatedCb) {
                if (MoveForward.ins.isSprint) {
                    cuntinueCb && cuntinueCb();
                    return;
                }
                this.cameraPointPos = Role.ins.cameraPoint.transform.position.clone();
                this.rolePos = Role.ins.role.transform.position.clone();
                const time = 1000;
                LwgAni3D.moveZ(Role.ins.role, 30, time, this, null, () => {
                    defeatedCb && defeatedCb(GameEnum.ResurgenceType.drop);
                });
                LwgAni3D.moveZ(Role.ins.cameraPoint, 30, time, this);
                LwgAni3D.moveY(Role.ins.role, -30, time, this);
            }
        }
        StateControl.Drop = Drop;
        class Diamond {
            constructor() {
                this.addNum = 5;
                this.sumNum = 0;
                Diamond.ins = this;
            }
            reset() {
                this.sumNum = 0;
            }
            action(args = [], continueCb) {
            }
        }
        StateControl.Diamond = Diamond;
        class Wall {
            constructor() {
                this.invincibleTime = 3000;
                this.invincibleCaller = {};
                Wall.ins = this;
            }
            reset() {
                this.isInvincible = false;
            }
            get subBubbleNum() {
                return GameData.Level.mode === GameEnum.LevelMode.common ? 10 : 25;
            }
            action(args = [], cuntinueCb, defeatedCb) {
                MoveForward.ins.stopBubble();
                if (this.isInvincible || Resurgence.ins.isResurgence || MoveForward.ins.isSprint) {
                    cuntinueCb && cuntinueCb();
                    return;
                }
                LwgPlatform.System.shakeShort();
                Bubble.ins.rainbowEnergyNum -= this.subBubbleNum;
                GameData.Sound.playSoundByID(15);
                const posZ = -10;
                const high = Role.ins.role.transform.position.y;
                const time = 200 + high * 50;
                Role.ins.playAniRole(GameEnum.RoleAni.fall);
                LwgAni3D.moveZ(Role.ins.role, posZ, time, this, Laya.Ease.quadOut, () => {
                    if (Bubble.ins.rainbowEnergyNum < 0) {
                        defeatedCb && defeatedCb();
                        GameData.Sound.playSoundByID(18);
                    }
                    else {
                        Laya.timer.once(1500, this, () => {
                            cuntinueCb && cuntinueCb();
                        });
                        this.isInvincible = true;
                        Laya.timer.once(this.invincibleTime, this.invincibleCaller, () => {
                            this.isInvincible = false;
                        });
                    }
                });
                LwgAni3D.moveZ(Role.ins.cameraPoint, posZ, time, this);
                LwgAni3D.moveY(Role.ins.role, -high, time, this);
                LwgAni3D.moveY(Role.ins.cameraPoint, -high, time, this);
            }
        }
        StateControl.Wall = Wall;
        class Bubble {
            constructor() {
                this.addNum = 1;
                this.subNum = -2;
                this._rainbowEnergyNum = 0;
                this.rainbowEnergyMaxNum = 50;
                this.rainbowCaller = {};
                this.errorCaller = {};
                this.isDestination = false;
                this.diamondSumNum = 0;
                Bubble.ins = this;
            }
            get rainbowEnergyNum() {
                return this._rainbowEnergyNum;
            }
            set rainbowEnergyNum(val) {
                const num = val - this._rainbowEnergyNum;
                if (val >= this.rainbowEnergyMaxNum) {
                    val = this.rainbowEnergyMaxNum;
                }
                if (val < -5) {
                    val = -5;
                }
                this._rainbowEnergyNum = val;
                LwgEvent.notify(GameEvent.bubblesNum, [this._rainbowEnergyNum, num, this.rainbowEnergyNum / this.rainbowEnergyMaxNum]);
            }
            reset() {
                this.rainbowEnergyNum = Math.round(this.rainbowEnergyMaxNum * GameData.Skill.getSkillAdditionByType(GameEnum.SkillType.energy));
                this.diamondSumNum = 0;
            }
            action(args = [], continueCb, defeatedCb) {
                const bubble = args[0];
                LwgPlatform.System.shakeShort();
                if (this.isDestination) {
                    LwgTools.D3.playAnimator(bubble, GameEnum.BubbleAni.retract);
                    Effect3D.ins.play_zuanshi(bubble.transform.position);
                    this.diamondSumNum++;
                    const point = LwgTools.D3.getPosToScreen(bubble.transform.position, Role.ins.camera);
                    point.y -= 150;
                    LwgCurrency.Diamond.playGetHeapAni(null, 1, [49, 45], 'Game/UI/img_icon_money_01.png', new Laya.Point(point.x, point.y), new Laya.Point(65, 70), null, () => {
                        LwgEvent.notify(GameEvent.updateDiamond, [this.diamondSumNum]);
                    }, false);
                    GameData.Sound.playSoundByID(6);
                    const bubbleParent = bubble.parent;
                    let rubin;
                    if (bubble.name === "paopao01") {
                        rubin = bubbleParent.getChildByName("rubin (1)");
                    }
                    else if (bubble.name === "paopao01 (1)") {
                        rubin = bubbleParent.getChildByName("rubin");
                    }
                    else if (bubble.name === "paopao01 (2)") {
                        rubin = bubbleParent.getChildByName("rubin (2)");
                    }
                    Effect3D.ins.play_zuanshi(rubin.transform.position.clone());
                    rubin && rubin.destroy(true);
                }
                else {
                    let cbArgs = [];
                    let high = 0.2;
                    var right = () => {
                        this.rainbowEnergyNum += this.addNum;
                        LwgTools.D3.playAnimator(bubble, GameEnum.BubbleAni.retract);
                        cbArgs = [GameEnum.MoveForwardArgs.rightBubble];
                        Effect3D.ins.play_Right(bubble.transform.position);
                        continueCb && continueCb(cbArgs);
                    };
                    if (bubble.colorIndex === Role.ins.colorIndex) {
                        right();
                    }
                    else {
                        LwgTools.D3.playAnimator(bubble, GameEnum.BubbleAni.ball);
                        if (MoveForward.ins.isSprint) {
                            right();
                        }
                        else if (Wall.ins.isInvincible || Resurgence.ins.isResurgence) {
                            cbArgs = [GameEnum.MoveForwardArgs.errorBubble];
                            GameData.Sound.playSoundByID(21);
                            continueCb && continueCb(cbArgs);
                        }
                        else {
                            this.rainbowEnergyNum += this.subNum;
                            if (this.rainbowEnergyNum < 0) {
                                MoveForward.ins.stopBubble();
                                Role.ins.playAniRole(GameEnum.RoleAni.fall);
                                defeatedCb && defeatedCb();
                                return;
                            }
                            else {
                                cbArgs = [GameEnum.MoveForwardArgs.errorBubble];
                                GameData.Sound.playSoundByID(21);
                                continueCb && continueCb(cbArgs);
                            }
                        }
                    }
                    const time = 50;
                    Laya.timer.once(time, this.errorCaller, () => {
                        LwgAni3D.moveY(Role.ins.role, high, time, this.errorCaller, null, () => {
                            LwgAni3D.moveToY(Role.ins.role, 0, time, this.errorCaller);
                        });
                    });
                    Role.ins.playAniRole(GameEnum.RoleAni.slide);
                }
            }
        }
        StateControl.Bubble = Bubble;
        class Door {
            constructor() {
                Door.ins = this;
            }
            action(args = [], cuntinueCb) {
                const door = args[0];
                this.colorIndex = +door.name.substr(13, 1);
                LwgPlatform.System.shakeShort();
                GameData.Sound.playSoundByID(16);
                if (!MoveForward.ins.isSprint) {
                    this.changeColor();
                }
                cuntinueCb && cuntinueCb();
            }
            changeColor() {
                Role.ins.changeColor(this.colorIndex);
                Role.ins.changeTravel(this.colorIndex);
                Effect3D.ins.play_Change(Role.ins.role.transform.position.clone(), this.colorIndex, Role.ins.role);
            }
        }
        StateControl.Door = Door;
        class KeyFood {
            constructor() {
                KeyFood.ins = this;
            }
            action(args = [], continueCb) {
                continueCb && continueCb();
                const key = args[0].parent;
                key.removeSelf();
                LwgEvent.notify(GameEvent.pickedKey);
                GameData.Sound.playSoundByID(10);
                Effect3D.ins.play_zuanshi(Role.ins.role.transform.position.clone());
            }
        }
        StateControl.KeyFood = KeyFood;
        class Destination {
            constructor() {
                Destination.ins = this;
            }
            reset() {
                Bubble.ins.isDestination = false;
            }
            action(args = [], continueCb) {
                Laya.timer.once(200, this, () => {
                    Role.ins.changeColor(4);
                    Role.ins.changeTravel(4);
                });
                const chongci = GameRes.Prefab3D.effect_chongci.instance.clone();
                Role.ins.skin.addChild(chongci);
                Bubble.ins.isDestination = true;
                let steps = 25;
                let num = Math.round(Bubble.ins.rainbowEnergyNum / (Bubble.ins.rainbowEnergyMaxNum / steps));
                const roadLen = num == 0 ? 30 : 38;
                const high = 3 * (num - 1);
                const len = 8 * num;
                const speedBase = (MoveForward.ins.speed * 60) * 2;
                const time1 = 1000 * roadLen / speedBase;
                const time2 = 1000 * Math.sqrt(len * len + high * high) / speedBase;
                var end = () => {
                    continueCb();
                    chongci.destroy();
                    Role.ins.changeTravel(0);
                };
                LwgEvent.notify(GameEvent.reduceStorage, [time1, time2 + 100]);
                LwgAni3D.moveZ(Role.ins.role, roadLen, time1, this, null, () => {
                    if (num === 0) {
                        end();
                    }
                    else {
                        LwgAni3D.moveY(Role.ins.role, high, time2, this, null, () => {
                            if (num >= steps) {
                                MoveCrosswise.ins.isDestination = true;
                                const len997 = 65;
                                const time3 = 1000 * len997 / speedBase;
                                LwgAni3D.moveZ(Role.ins.role, len997, time3, this, null, () => {
                                    end();
                                });
                                LwgAni3D.moveToX(Role.ins.role, 0, time3 / 2, this);
                                LwgAni3D.moveZ(Role.ins.cameraPoint, len997, time3, this);
                                LwgAni3D.moveZ(Role.ins.cameraPoint, len997, time3, this);
                                LwgAni3D.moveToX(Role.ins.cameraPoint, 0, time3 / 2, this);
                            }
                            else {
                                end();
                            }
                        });
                        LwgAni3D.moveZ(Role.ins.role, len, time2, this);
                        LwgAni3D.moveY(Role.ins.cameraPoint, high, time2, this);
                        LwgAni3D.moveZ(Role.ins.cameraPoint, len, time2, this);
                    }
                });
                LwgAni3D.moveZ(Role.ins.cameraPoint, roadLen, time1, this);
            }
        }
        StateControl.Destination = Destination;
        class Victory {
            constructor() {
                Victory.ins = this;
            }
            action() {
                Laya.timer.once(1500, this, () => {
                    LwgEvent.notify(GameEvent.victory);
                });
            }
        }
        StateControl.Victory = Victory;
        class Dance {
            constructor() {
                Dance.ins = this;
            }
            action(args, continueCb) {
                LwgEvent.notify(GameEvent.hideStorage);
                MoveCrosswise.ins.isDestination = true;
                const time1 = 300;
                const time2 = 1000;
                GameData.Sound.playSoundByID(17);
                Role.ins.playAniCrossFade(GameEnum.RoleAni.dance);
                LwgAni3D.rotateTo(Role.ins.role, new Laya.Vector3(0, -180, 0), time1, this);
                LwgAni3D.moveY(Role.ins.cameraPoint, -7, time2, this);
                LwgAni3D.rotateTo(Role.ins.cameraPoint, new Laya.Vector3(-12, -20, 5), time2, this);
                LwgAni3D.moveZ(Role.ins.cameraPoint, 11, time2, this);
                Laya.timer.once(1500, this, () => {
                    continueCb && continueCb();
                });
            }
        }
        StateControl.Dance = Dance;
        class Resurgence {
            constructor() {
                this.isResurgence = false;
                this.resurgenceCaller = {};
                Resurgence.ins = this;
            }
            reset() {
                this.isResurgence = false;
            }
            action(args, cuntinueCb) {
                Bubble.ins.rainbowEnergyNum = 0;
                if (args[0] == GameEnum.ResurgenceType.drop) {
                    Role.ins.role.transform.position = new Laya.Vector3(Drop.ins.rolePos.x, Drop.ins.rolePos.y, Drop.ins.rolePos.z + 50);
                    Role.ins.cameraPoint.transform.position = new Laya.Vector3(Drop.ins.cameraPointPos.x, Drop.ins.cameraPointPos.y, Drop.ins.cameraPointPos.z + 50);
                }
                cuntinueCb && cuntinueCb();
                this.isResurgence = true;
                Laya.timer.once(3000, this.resurgenceCaller, () => {
                    this.isResurgence = false;
                    Defeated.ins.isDefeated = false;
                });
            }
        }
        StateControl.Resurgence = Resurgence;
        class Defeated {
            constructor() {
                Defeated.ins = this;
            }
            reset() {
                this.isDefeated = false;
            }
            action(args) {
                if (this.isDefeated) {
                    return;
                }
                this.isDefeated = true;
                Laya.timer.once(1000, this, () => {
                    LwgEvent.notify(GameEvent.Resurgence, [args[0]]);
                });
            }
        }
        StateControl.Defeated = Defeated;
    })(StateControl || (StateControl = {}));

    class SkinBase {
        init() {
            for (let index = 0; index < this.skin.numChildren; index++) {
                const part = this.skin.getChildAt(index);
                if (part.name.substr(0, 5) === 'Dress') {
                    if (part.name === GameData.Skin.pitchDressName) {
                        part.active = true;
                    }
                    else {
                        part.active = false;
                    }
                    part.skinnedMeshRenderer.material = GameRes.Material.dress01.instance;
                }
            }
            const hairParent = LwgTools.Node.findChild3D(this.skin, 'mixamorig:HeadTop_End');
            for (let index = 0; index < hairParent.numChildren; index++) {
                const part = hairParent.getChildAt(index);
                if (part.name === GameData.Skin.pitchHairName) {
                    part.active = true;
                }
                else {
                    part.active = false;
                }
            }
            const wingPoint = LwgTools.Node.findChild3D(this.skin, 'WingPoint');
            for (let index = 0; index < wingPoint.numChildren; index++) {
                const part = wingPoint.getChildAt(index);
                if (part.name === GameData.Skin.pitchWingName) {
                    part.active = true;
                }
                else {
                    part.active = false;
                }
            }
            const TravelPointL = LwgTools.Node.findChild3D(this.skin, 'TravelPointL');
            TravelPointL.active = false;
            const TravelPointR = LwgTools.Node.findChild3D(this.skin, 'TravelPointR');
            TravelPointR.active = false;
        }
        changePart(id) {
            let parent;
            const partData = GameData.Skin.getObjByID(id);
            if (!partData) {
                console.log('没有', id, '的皮肤信息');
                return;
            }
            if (partData.part === GameEnum.Part.dress) {
                parent = this.skin;
            }
            else if (partData.part === GameEnum.Part.hair) {
                parent = LwgTools.Node.findChild3D(this.skin, 'mixamorig:HeadTop_End');
            }
            else if (partData.part === GameEnum.Part.wing) {
                parent = LwgTools.Node.findChild3D(this.skin, 'WingPoint');
            }
            if (parent === this.skin) {
                for (let index = 0; index < parent.numChildren; index++) {
                    const part = parent.getChildAt(index);
                    if (parent === this.skin && part.name.substr(0, 5) === 'Dress') {
                        if (part.name === partData.name) {
                            part.active = true;
                        }
                        else {
                            part.active = false;
                        }
                    }
                }
            }
            else {
                for (let index = 0; index < parent.numChildren; index++) {
                    const part = parent.getChildAt(index);
                    if (part.name === partData.name) {
                        part.active = true;
                    }
                    else {
                        part.active = false;
                    }
                }
            }
        }
    }

    class SkinScene extends SkinBase {
        constructor() {
            super();
            this.turnTime = 500;
            SkinScene.ins = this;
        }
        show() {
            this.scene = GameResCutIn.Skin.Scene3D.SkinScene.instance;
            this.camera = this.scene.getChildByName('Main Camera');
            this.skinPoint = this.scene.getChildByName('SkinPoint');
            this.skin = GameRes.Prefab3D.role01.instance.clone();
            this.fRX = this.skin.transform.localRotationEulerY;
            this.skinPoint.addChild(this.skin);
            if (Laya.Browser.pixelRatio >= 16 / 9) {
                this.camera.fieldOfView += 5;
            }
            Laya.stage.addChild(this.scene);
            this.scene.name = 'SkinScene';
            this.init();
        }
        hide() {
            if (this.scene) {
                this.scene.destroy(true);
                this.scene = null;
                this.skinPoint = null;
                Laya.Resource.destroyUnusedResources();
            }
        }
        change(ID) {
            this.changePart(ID);
        }
        turnBack() {
            this.skinPoint && LwgAni3D.ClearTween(this.skinPoint);
            this.skinPoint && LwgAni3D.rotateTo(this.skinPoint, new Laya.Vector3(0, 230, 0), this.turnTime, this, null, () => {
            });
        }
        turnFront() {
            this.skinPoint && LwgAni3D.ClearTween(this.skinPoint);
            this.skinPoint && LwgAni3D.rotateTo(this.skinPoint, new Laya.Vector3(0, 45, 0), this.turnTime, this, null, () => {
            });
        }
    }

    class SkinShowScene extends SkinBase {
        constructor() {
            super();
            SkinShowScene.ins = this;
            this.scene = GameRes.Scene3D.SkinShow.instance;
            this.camera = this.scene.getChildByName('Main Camera');
            this.fieldOfViewFirst = this.camera.fieldOfView;
            this.cameraFLP = this.camera.transform.localPositionY;
            this.scene.name = 'SkinShowScene';
            this.skinShowPoint = this.scene.getChildByName('SkinShowPoint');
            if (Laya.Browser.pixelRatio >= 16 / 9) {
                this.camera.fieldOfView = this.fieldOfViewFirst + 5;
            }
            else {
                this.camera.fieldOfView = this.fieldOfViewFirst;
            }
            this.skin = GameRes.Prefab3D.role01.instance.clone();
            this.skinShowPoint.addChild(this.skin);
            this.init();
        }
        show(view, id1, id2, id3) {
            this.change(id1, id2, id3);
            view.addChild(this.scene);
        }
        change(id1, id2, id3) {
            id1 && this.changePart(id1);
            id2 && this.changePart(id2);
            id3 && this.changePart(id3);
        }
    }

    var Control3D;
    (function (Control3D) {
        class Init {
            constructor() {
                new MainScene();
                new EndLessScene();
                new Role();
                new Effect3D();
                new SkinScene();
                new SkinShowScene();
            }
        }
        Control3D.Init = Init;
        function start(sprint) {
            Role.ins.setState(GameEnum.RoleState.Start, [sprint]);
        }
        Control3D.start = start;
        function hideAll() {
            SkinScene.ins.hide();
            MainScene.ins.scene.active = false;
            MainScene.ins.clear();
            EndLessScene.ins.scene.active = false;
            EndLessScene.ins.clear();
        }
        Control3D.hideAll = hideAll;
        function showMainScene() {
            hideAll();
            MainScene.ins.scene.active = true;
            MainScene.ins.ready();
            Role.ins.changeScene(MainScene.ins.scene);
            Role.ins.setState(GameEnum.RoleState.Ready);
        }
        Control3D.showMainScene = showMainScene;
        function showEndLess() {
            hideAll();
            EndLessScene.ins.scene.active = true;
            EndLessScene.ins.ready();
            Role.ins.changeScene(EndLessScene.ins.scene);
            Role.ins.setState(GameEnum.RoleState.Ready);
        }
        Control3D.showEndLess = showEndLess;
        function showSkinScene() {
            hideAll();
            SkinScene.ins.show();
        }
        Control3D.showSkinScene = showSkinScene;
    })(Control3D || (Control3D = {}));

    class Start extends LwgScene.SceneBase {
        lwgOnAwake() {
            this.showCurMode();
        }
        lwgOpenAniAfter() {
            Laya.timer.once(500, this, () => {
                this.evNotify(GameEvent.redDotHint);
            });
            if (this.openData && this.openData.whereFrom == GameSceneName.Victory) {
                this.updateKey(true);
            }
            else {
                if (LwgControl.Login.totalNum === 1) {
                    if (this.openNum === 2 && !GameData.CheckIn.today) {
                        this.openOverlayScene(GameSceneName.CheckIn);
                    }
                    else {
                        this.updateKey(true);
                    }
                }
                else {
                    if (!GameData.CheckIn.today) {
                        this.openOverlayScene(GameSceneName.CheckIn);
                    }
                    else {
                        this.updateKey(true);
                    }
                }
            }
        }
        lwgButton() {
            this.btnOnDown(this.owner.startPic, () => {
                if (GameData.Level.mode === GameEnum.LevelMode.endless) {
                    if (GameData.Level.endlessFreeNum > 0) {
                        this.openScene(GameSceneName.PropTry);
                        GameData.Level.endlessFreeNum--;
                    }
                    else {
                        LwgDialogue.openDialogHint({
                            type: LwgDialogue.EmDialogHint.Double,
                            content: '是否开启无尽模式',
                            onBtnConfirm: () => {
                                this.openScene(GameSceneName.PropTry);
                            },
                        });
                    }
                }
                else {
                    if (LwgCurrency.Stamina.num >= 5) {
                        if (LwgControl.Game.level > 1) {
                            if (LwgControl.Game.level % 2 === 0) {
                                this.openScene(GameSceneName.PropTry);
                            }
                            else {
                                const id = GameData.Skin.getRanSkinTryByWing();
                                if (id) {
                                    const openData = {
                                        id: id,
                                    };
                                    this.openScene(GameSceneName.SkinTry, openData);
                                }
                                else {
                                    this.openScene(GameSceneName.PropTry);
                                }
                            }
                        }
                        else {
                            LwgCurrency.Stamina.addNumDisPlayNode(-5);
                            this.openScene(GameSceneName.Levels);
                        }
                    }
                    else {
                        LwgDialogue.showTips('体力不够了！');
                        const data = {
                            type: GameEnum.ResType.Stamina,
                        };
                        this.openOverlayScene(GameSceneName.ADGetReward, data);
                    }
                }
            });
            this.btnOnUp(this.owner.btnLuckyWheel, () => {
                this.openOverlayScene(GameSceneName.LuckyWheel);
            });
            this.btnOnUp(this.owner.btnCheckIn, () => {
                this.openOverlayScene(GameSceneName.CheckIn);
            });
            this.btnOnUpADCondition(this.owner.btnLottery, () => {
                return GameData.Lottery.KeyNum < 3;
            }, () => {
                GameData.Lottery.KeyNum++;
                this.updateKey(true);
                if (this.owner[`key${GameData.Lottery.KeyNum}Ani`]) {
                    this.owner[`key${GameData.Lottery.KeyNum}Ani`].play(0, false);
                }
            }, () => {
                const data = {
                    whereFrom: this.owner.name,
                };
                this.openOverlayScene(GameSceneName.Lottery, data);
            });
            this.btnOnUp(this.owner.btnSkin, () => {
                this.openScene(GameSceneName.Skin, null, true);
            });
            this.btnOnUp(this.owner.btnCutMode, () => {
                this.changeMode();
            });
        }
        lwgEvent() {
            this.evRegister(GameEvent.updateKeyNumStart, (openLottery) => {
                this.updateKey(openLottery);
            });
        }
        lwgOnStart() {
        }
        showCurMode() {
            if (GameData.Level.mode === GameEnum.LevelMode.common) {
                this.owner.btnCutMode.skin = 'Game/UI/img_home_btn_wujin.png';
                this.owner.lbEndlessTitle.visible = false;
                this.owner.imgLogo.visible = true;
                Control3D.showMainScene();
            }
            else {
                this.owner.lbEndlessTitle.visible = true;
                this.owner.imgLogo.visible = false;
                this.owner.btnCutMode.skin = 'Game/UI/img_home_btn_putong.png';
                Control3D.showEndLess();
            }
        }
        changeMode() {
            LwgClick.Filter.setValue(LwgClick.EmfilterType.none);
            LwgCurrency.Diamond.hide();
            LwgCurrency.Stamina.hide();
            this.owner.aniChangeMode.play(0, false);
            this.owner.aniChangeMode.once(Laya.Event.LABEL, this, () => {
                LwgCurrency.Diamond.show();
                LwgCurrency.Stamina.show();
                if (GameData.Level.mode === GameEnum.LevelMode.common) {
                    GameData.Level.mode = GameEnum.LevelMode.endless;
                }
                else {
                    GameData.Level.mode = GameEnum.LevelMode.common;
                }
                this.showCurMode();
                LwgClick.Filter.setValue(LwgClick.EmfilterType.all);
            });
        }
        updateKey(openLottery = false) {
            for (let index = 1; index < 4; index++) {
                if (index > GameData.Lottery.KeyNum) {
                    this.owner[`key${index}`].visible = false;
                }
                else {
                    this.owner[`key${index}`].visible = true;
                }
            }
            if (GameData.Lottery.KeyNum >= 3) {
                this.owner.btnLotteryADPic.visible = false;
                if (openLottery) {
                    Laya.timer.once(100, this, () => {
                        const data = {
                            whereFrom: this.owner.name,
                        };
                        this.openOverlayScene(GameSceneName.Lottery, data);
                    });
                }
            }
            else {
                this.owner.btnLotteryADPic.visible = true;
            }
        }
    }

    class Levels extends LwgScene.SceneBase {
        constructor() {
            super(...arguments);
            this.roleLv = 1;
            this.lastTime = 0;
            this.lastPlusOrMinus = 0;
            this.lastNum = 0;
            this.clickNum = 1;
        }
        get curScore() {
            return this['_curScore'] ? this['_curScore'] : 0;
        }
        set curScore(val) {
            this['_curScore'] = val;
        }
        get bubblesNum() {
            return this['_bubblesNum'] ? this['_bubblesNum'] : 0;
        }
        set bubblesNum(val) {
            this['_bubblesNum'] = val;
            this.owner.lbBubblesNum.text = val.toString();
        }
        get mileage() {
            return this['_mileage'] ? this['_mileage'] : 0;
        }
        set mileage(val) {
            this['_mileage'] = Math.floor(val);
            this.owner.lbMileage.text = this['_mileage'] + 'm';
        }
        get diamondNum() {
            return this['_diamondNum'] ? this['_diamondNum'] : 0;
        }
        set diamondNum(val) {
            this.owner.lbDiamondNum.text = 'x' + val;
            this['_diamondNum'] = val;
        }
        lwgOnAwake() {
            this.curScore = 0;
        }
        lwgOnStart() {
            Control3D.start(this.openData.sprint);
            this.setLevelProgress();
            this.updateKey();
            if (GameData.Level.mode === GameEnum.LevelMode.endless) {
                this.owner.boxLv.visible = false;
                this.owner.boxKey.visible = false;
                this.owner.imgDiamond.visible = true;
                this.owner.imgDiamond.pos(60, 149);
            }
            else {
                this.owner.boxEndless.visible = false;
                this.owner.imgDiamond.pos(67, 70);
            }
        }
        setLevelProgress() {
            this.owner.lbCurLevel.text = LwgControl.Game.levelDisplay.toString();
        }
        lwgEvent() {
            this.evRegister(GameEvent.updateRoleDataDisplay, (pos) => {
                this.owner.boxRoleData.pos(pos.x, pos.y - 120);
            });
            this.evRegister(GameEvent.readyVSBOSS, () => {
                this.owner.boxLv.visible = false;
                this.owner.boxRoleData.visible = false;
            });
            this.evRegister(GameEvent.hideRoleHP, () => {
                this.owner.boxRoleData.visible = false;
            });
            this.evRegister(GameEvent.showRoleHP, () => {
                this.owner.boxRoleData.visible = true;
            });
            this.evRegister(GameEvent.storageNum, (num) => {
                this.bubblesNum = num;
            });
            this.evRegister(GameEvent.bubblesNum, (bubblesNum, num, rainbowEnergyPer) => {
                if (bubblesNum < 0) {
                    bubblesNum = 0;
                }
                if (num > 0) {
                    this.bubblesNum += num;
                    if (GameData.Level.mode === GameEnum.LevelMode.endless) {
                        this.diamondNum = this.bubblesNum;
                    }
                }
                this.showContinuousNum(num);
                if (!this.startShowNum) {
                    this.startShowNum = true;
                }
                this.owner.imgRainbowEnergy.y = this.owner.imgRainbowEnergy.height * (1 - rainbowEnergyPer);
            });
            this.evRegister(GameEvent.reduceStorage, (time1, time2) => {
                this.owner.imgDiamond.visible = true;
                Laya.timer.once(time1, this, () => {
                    LwgAni2D.move(this.owner.imgRainbowEnergy, this.owner.imgRainbowEnergy.x, this.owner.imgRainbowEnergy.height, time2);
                });
                this.owner.btnReturn.visible = false;
            });
            this.evRegister(GameEvent.updateLvSchedule, (per, mileage) => {
                this.owner.levelProgress.mask.width = per * 280;
                this.mileage = mileage;
            });
            this.evRegister(GameEvent.victory, () => {
                this.owner.boxRoleData.visible = false;
                const openData = {
                    score: this.diamondNum,
                };
                this.openScene(GameSceneName.Victory, openData);
            });
            this.evRegister(GameEvent.defeated, () => {
                const data = {
                    diamondNum: this.bubblesNum,
                    mileage: this.mileage,
                };
                if (GameData.Level.mode === GameEnum.LevelMode.endless) {
                    Laya.timer.once(1000, this, () => {
                        this.openScene(GameSceneName.EndLessSettle, data);
                    });
                }
                else {
                    this.openScene(GameSceneName.Defeated);
                }
            });
            this.evRegister(GameEvent.Resurgence, (type) => {
                const data = {
                    type: type,
                };
                this.openOverlayScene(GameSceneName.Resurgence, data);
            });
            this.evRegister(GameEvent.updateDiamond, (num) => {
                this.diamondNum = num;
            });
            this.evRegister(GameEvent.hideStorage, (num) => {
                this.owner.boxStorage.visible = false;
            });
            this.evRegister(GameEvent.pickedKey, () => {
                GameData.Lottery.KeyNum++;
                this.updateKey();
            });
        }
        showContinuousNum(num) {
            if (!this.startShowNum) {
                return;
            }
            Laya.timer.clearAll(this.owner.lbContinuousNum);
            this.owner.lbContinuousNum.visible = true;
            const time = 1000;
            if (LwgDate.Now.time - this.lastTime < time) {
                if (this.lastPlusOrMinus > 0 && num > 0) {
                    this.lastNum += num;
                }
                else if (this.lastPlusOrMinus < 0 && num < 0) {
                    this.lastNum += num;
                }
                else {
                    this.lastNum = num;
                }
            }
            else {
                this.lastNum = num;
            }
            if (num < 0) {
                this.owner.aniBeAttacked.play(0, false);
            }
            this.lastPlusOrMinus = num;
            this.lastTime = LwgDate.Now.time;
            if (this.lastNum > 0) {
                this.owner.lbContinuousNum.text = '+' + this.lastNum;
                this.owner.lbContinuousNum.strokeColor = '#37db21';
                if (this.lastNum === 1) {
                    GameData.Sound.playSoundByID(11);
                }
                else if (this.lastNum === 2) {
                    GameData.Sound.playSoundByID(12);
                }
                else if (this.lastNum === 3) {
                    GameData.Sound.playSoundByID(13);
                }
                else if (this.lastNum >= 4) {
                    GameData.Sound.playSoundByID(14);
                }
            }
            else if (this.lastNum === 0) {
                this.owner.lbContinuousNum.visible = false;
            }
            else {
                this.owner.lbContinuousNum.text = this.lastNum.toString();
                this.owner.lbContinuousNum.strokeColor = '#db2f21';
            }
            this.owner.aniContinuousNum.play(0, false);
            Laya.timer.once(time, this.owner.lbContinuousNum, () => {
                this.owner.lbContinuousNum.visible = false;
            });
        }
        lwgButton() {
            this.btnOnceUp(this.owner.btnReturn, () => {
                this.openScene(GameSceneName.Start, null, true);
            });
        }
        updateKey() {
            for (let index = 1; index < 4; index++) {
                if (index > GameData.Lottery.KeyNum) {
                    this.owner[`key${index}`].visible = false;
                }
                else {
                    this.owner[`key${index}`].visible = true;
                }
            }
        }
    }

    class GameAni2D {
        static dialogOpenPopup(Content, Bg, func) {
            Content.scene.zOrder = Laya.stage.numChildren - 1;
            const time = 100;
            const delay = 100;
            Content.scale(0.5, 0.5);
            LwgAni2D.bombs_Appear(Content, 0, 1, 1.2, 0, time * 3, () => {
                func && func();
            });
            if (Bg) {
                Bg.alpha = 0;
                LwgAni2D.fadeOut(Bg, 0, 1, 200, delay * 2);
            }
            return time * 3;
        }
        static dialogOpenFadeOut(Content, Bg, func) {
            Bg && LwgAni2D.fadeOut(Bg, 0, 1, 300, 0, () => {
                func && func();
            });
            LwgAni2D.fadeOut(Content, 0, 1, 250, 0, () => {
                !Bg && func && func();
            });
            return 300;
        }
        static dialogCloseFadeOut(Content, Bg, func) {
            const time = 60;
            const delay = 100;
            LwgAni2D.fadeOut(Content, 1, 0, time * 3, delay * 1.5, () => {
                func && func();
            });
            Bg && LwgAni2D.fadeOut(Bg, 1, 0, time * 3);
            return time * 3 + delay * 1.5;
        }
        static charactersEffect(label, bodyText, func) {
            for (let index = 0; index < bodyText.length; index++) {
                const char = bodyText.charAt(index);
                LwgTimer.frameOnce(10 * index, this, () => {
                    label.text += char;
                    if (index == bodyText.length - 1) {
                        func && func();
                    }
                });
            }
        }
        static scaleHint(Node, caller) {
            LwgTimer.loop(1000, caller, () => {
                LwgAni2D.swell_shrink(Node, 1, 1.05, 300);
            });
        }
        static _fadeHint(Node, caller) {
            LwgAni2D.fadeOut(Node, 0, 0.6, 1500, 0, () => {
                LwgAni2D.fadeOut(Node, 0.6, 0, 800, 0, () => {
                    LwgTimer.frameOnce(30, caller, () => {
                        this._fadeHint(Node, caller);
                    });
                });
            });
        }
        static breatheBtnHint(node, caller) {
            LwgAni2D.circulation_scale(node, 0.05, 200, 0, () => {
                this.breatheBtnHint(node, caller);
            });
        }
        static bombFlexLR(node, caller) {
            LwgTimer.loop(2000, caller, () => {
                LwgAni2D.bomb_LeftRight(node, 1.22, 250);
            }, true);
        }
        static getRewardAni(ID, num, cbStep, cbCompelet) {
            const item = GameData.Item.getItemBaseByID(ID);
            switch (ID) {
                case 102:
                    LwgCurrency.Diamond.playGetHeapAni(null, 15, [49, 45], item.iconSkin, null, null, () => {
                        cbStep && cbStep();
                    }, () => {
                        LwgCurrency.Diamond.addNumDisPlayNode(num);
                        cbCompelet && cbCompelet();
                    });
                    break;
                case 103:
                    LwgCurrency.Stamina.playGetHeapAni(null, 15, [37, 52], item.iconSkin, null, null, () => {
                        cbStep && cbStep();
                    }, () => {
                        LwgCurrency.Stamina.addNumDisPlayNode(num);
                        cbCompelet && cbCompelet();
                    });
                    break;
                default:
                    break;
            }
        }
    }

    class GameEff2D {
        static interfacePointJet(scene) {
            const diff = 100;
            const arr = [
                [[255, 33, 33, 1], [200, 33, 255, 1]],
                [[33, 255, 216, 1], [59, 255, 33, 1]],
                [[169, 255, 33, 1], [255, 111, 33, 1]],
                [[255, 111, 33, 1], [255, 33, 33, 1]]
            ];
            LwgTimer.frameNumLoop(7, 10, this, () => {
                for (let index = 0; index < 5; index++) {
                    const ran1 = LwgTools.Arr.randomGetOne(arr);
                    const ran2 = LwgTools.Arr.randomGetOne(arr);
                    const ran3 = LwgTools.Arr.randomGetOne(arr);
                    LwgEff2D.Particle.downwardSpray(scene, new Laya.Point(Laya.stage.width * 1 / 4, -diff), [10, 30], [10, 30], [0, 90], [LwgEff2D.SkinUrl.矩形1], ran1);
                    LwgEff2D.Particle.downwardSpray(scene, new Laya.Point(Laya.stage.width * 3 / 4, -diff), [10, 30], [10, 30], [90, 180], [LwgEff2D.SkinUrl.矩形1], ran2);
                    LwgEff2D.Particle.downwardSpray(scene, new Laya.Point(-diff, Laya.stage.height / 4), [10, 30], [10, 30], [0, 90], [LwgEff2D.SkinUrl.矩形1], null);
                    LwgEff2D.Particle.downwardSpray(scene, new Laya.Point(Laya.stage.width + diff, Laya.stage.height / 4), [10, 30], [10, 30], [90, 180], [LwgEff2D.SkinUrl.矩形1], ran3);
                }
            });
        }
        static completeCross() {
            let num = 4;
            let spcaing = 20;
            for (let index = 0; index < num; index++) {
                let moveY = 7 * index + 5;
                let p1 = new Laya.Point(-200, Laya.stage.height);
                let _caller = {};
                let funcL = () => {
                    p1.x += spcaing;
                    if (p1.x > Laya.stage.width) {
                        Laya.timer.clearAll(_caller);
                    }
                    p1.y -= moveY;
                    LwgEff2D.Particle.fallingVertical(Laya.stage, new Laya.Point(p1.x, p1.y), [0, 0], null, null, [0, 360], [LwgEff2D.SkinUrl.花2], [[255, 222, 0, 1], [255, 24, 0, 1]], null, [100, 200], [0.8, 1.5], [0.05, 0.1]);
                };
                LwgTimer.frameLoop(1, _caller, () => {
                    funcL();
                });
                let p2 = new Laya.Point(Laya.stage.width + 200, Laya.stage.height);
                let _callerR = {};
                let funcR = () => {
                    p2.x -= spcaing;
                    if (p2.x < 0) {
                        Laya.timer.clearAll(_callerR);
                    }
                    p2.y -= moveY;
                    LwgEff2D.Particle.fallingVertical(Laya.stage, new Laya.Point(p2.x, p2.y), [0, 0], null, null, [0, 360], [LwgEff2D.SkinUrl.花2], [[255, 222, 0, 1], [255, 24, 0, 1]], null, [100, 200], [0.8, 1.5], [0.05, 0.1]);
                };
                LwgTimer.frameLoop(1, _callerR, () => {
                    funcR();
                });
            }
        }
        ;
        static completeSidelingCross() {
            let len = Laya.stage.width;
            let _height = Laya.stage.height * 2.5;
            let Img = new Laya.Image;
            Img.width = 100;
            Img.height = _height;
            Img.rotation = 40;
            Img.pos(0, 0);
            Laya.stage.addChild(Img);
            Img.zOrder = 1000;
            let num = 20;
            let spcaing = 40;
            for (let index = 0; index < num; index++) {
                let p1 = new Laya.Point(0, Img.height / num * index);
                let p2 = new Laya.Point(Laya.stage.width, Img.height / num * index);
                let _caller = {};
                let func = () => {
                    p1.x += spcaing;
                    if (p1.x > len) {
                        Laya.timer.clearAll(_caller);
                    }
                    p2.x -= spcaing;
                    if (p2.x > len) {
                        Laya.timer.clearAll(_caller);
                    }
                    if (index % 2 == 0) {
                        LwgEff2D.Particle.fallingVertical(Img, new Laya.Point(p1.x, p1.y), [0, 0], null, null, [0, 360], [LwgEff2D.SkinUrl.星星8], [[255, 222, 0, 1], [255, 24, 0, 1]], null, [100, 200], [0.8, 1.5], [0.05, 0.1]);
                    }
                    else {
                        LwgEff2D.Particle.fallingVertical_Reverse(Img, new Laya.Point(p2.x, p2.y), [0, 0], null, null, [0, 360], [LwgEff2D.SkinUrl.星星8], [[255, 222, 0, 1], [255, 24, 0, 1]], null, [-100, -200], [-0.8, -1.5], [-0.05, -0.1]);
                    }
                };
                LwgTimer.frameNumLoop(2, 50, _caller, () => {
                    func();
                });
            }
        }
        static fireworksCelebrate(func) {
            const centerP1 = new Laya.Point(Laya.stage.width / 2, 0);
            const num1 = 150;
            LwgTimer.frameNumRandomLoop(1, 3, num1, this, () => {
                LwgEff2D.Particle.fallingRotate(Laya.stage, centerP1, [Laya.stage.width, 0], [10, 30], [10, 30], [LwgEff2D.SkinUrl.矩形1, LwgEff2D.SkinUrl.矩形2, LwgEff2D.SkinUrl.矩形3], null, [300, Laya.stage.height], [1, 8]);
            });
            const num2 = 16;
            const centerP2 = new Laya.Point(Laya.stage.width / 2, Laya.stage.height / 2 - 50);
            LwgTimer.frameNumRandomLoop(10, 25, num2, this, () => {
                const count = LwgTools.Num.randomOneInt(10, 20);
                const time = 30;
                const dis = LwgTools.Num.randomOneInt(100, 300);
                const radomP = LwgTools.Point.randomPointByCenter(centerP2, 500, 150)[0];
                for (let index = 0; index < count * 2; index++) {
                    LwgEff2D.Particle.sprayRound(Laya.stage, radomP, null, [20, 40], null, [LwgEff2D.SkinUrl.花4], null, [dis, dis], [time, time]);
                }
                for (let index = 0; index < count * 2; index++) {
                    LwgEff2D.Particle.sprayRound(Laya.stage, radomP, null, [20, 40], null, [LwgEff2D.SkinUrl.花4], null, [50, dis - 20], [time, time]);
                }
            }, () => {
                func && func();
            });
        }
        static oneFireworks1(parent, point) {
            const count = LwgTools.Num.randomOneInt(10, 20);
            const time = 30;
            const dis = LwgTools.Num.randomOneInt(100, 300);
            for (let index = 0; index < count * 2; index++) {
                LwgEff2D.Particle.sprayRound(parent, point, null, [20, 40], null, [LwgEff2D.SkinUrl.星星1], null, [dis, dis], [time, time]);
            }
            for (let index = 0; index < count * 2; index++) {
                LwgEff2D.Particle.sprayRound(parent, point, null, [20, 40], null, [LwgEff2D.SkinUrl.星星1], null, [50, dis - 20], [time, time]);
            }
        }
        static oneFireworks2(parent, point) {
            const dis1 = 40;
            const dis2 = 120;
            const width1 = 10;
            const width2 = 30;
            const time1 = 5;
            const time2 = 15;
            const rSpeed1 = 5;
            const rSpeed2 = 15;
            for (let index = 0; index < 5; index++) {
                LwgEff2D.Particle.sprayRound(parent, point, [width1, width2], null, null, [LwgEff2D.SkinUrl.矩形1], [[50, 50, 50, 1], [50, 50, 50, 1]], [dis1, dis2], [time1, time2], null, [rSpeed1, rSpeed2]);
            }
            for (let index = 0; index < 5; index++) {
                LwgEff2D.Particle.sprayRound(parent, point, [width1, width2], null, null, [LwgEff2D.SkinUrl.矩形1], [[156, 99, 55, 1], [156, 99, 55, 1]], [dis1, dis2], [time1, time2], null, [rSpeed1, rSpeed2]);
            }
            for (let index = 0; index < 10; index++) {
                LwgEff2D.Particle.sprayRound(parent, point, [width1, width2], null, null, [LwgEff2D.SkinUrl.矩形1], [[120, 120, 120, 1], [120, 120, 120, 1]], [dis1, dis2], [time1, time2], null, [rSpeed1, rSpeed2]);
            }
        }
        static oneFireworks3(parent, point) {
            for (let index = 0; index < 20; index++) {
                LwgEff2D.Particle.sprayRound(parent, point, [10, 30], null, null, [LwgEff2D.SkinUrl.矩形1], null, [30, 80], [3, 8], null, [5, 15]);
            }
        }
        static circleFlowe(scene) {
            const count = 90;
            const time = 35;
            const dis = LwgTools.Num.randomOneInt(500, 500);
            const p = new Laya.Point(Laya.stage.width / 2, Laya.stage.height / 2);
            for (let index = 0; index < count; index++) {
                LwgEff2D.Particle.sprayRound(scene, p, null, [20, 40], null, [LwgEff2D.SkinUrl.花4], null, [dis, dis], [time, time], null, null, 5);
            }
            for (let index = 0; index < count * 2; index++) {
                LwgEff2D.Particle.sprayRound(scene, p, null, [20, 40], null, [LwgEff2D.SkinUrl.花4], null, [100, dis - 20], [time, time], null, null, 5);
            }
        }
        static bothBlinkOnSprite1(parent, pos, caller) {
            LwgTimer.frameRandomLoop(30, 50, caller, () => {
                LwgEff2D.Glitter.blinkStar(parent, new Laya.Point(pos.x - 200, pos.y), [150, 100], [LwgEff2D.SkinUrl.星星1], null, [80, 80]);
            }, true);
            LwgTimer.frameRandomLoop(30, 50, caller, () => {
                LwgEff2D.Glitter.blinkStar(parent, new Laya.Point(pos.x + 200, pos.y), [150, 100], [LwgEff2D.SkinUrl.星星1], null, [80, 80]);
            }, true);
        }
        static bothBlinkOnSprite2(parent, pos, caller) {
            LwgTimer.frameRandomLoop(30, 50, caller, () => {
                LwgEff2D.Glitter.blinkStar(parent, new Laya.Point(pos.x, pos.y), [120, 50], [LwgEff2D.SkinUrl.星星1], null, [40, 40]);
            }, true);
        }
        static circleExplode(Parent, p, delay) {
            LwgTimer.once(delay ? delay : 0, this, () => {
                const count = 40;
                const time = 5;
                const dis = LwgTools.Num.randomOneInt(30, 30);
                for (let index = 0; index < count; index++) {
                    LwgEff2D.Particle.sprayRound(Parent, p, null, [20, 40], null, [LwgEff2D.SkinUrl.星星8], null, [dis, dis], [time, time], null, null, 5);
                }
                LwgSound.playSound();
            });
        }
    }

    class Victory extends LwgScene.SceneBase {
        constructor() {
            super(...arguments);
            this.score = 0;
            this.multiple = 1;
        }
        lwgOnAwake() {
            if (LwgPlatform.type === LwgPlatform.EmType.OPPO) {
                this.owner.btnADNative.visible = true;
                this.owner.btnADGet.centerX = 140;
            }
            this.score = Math.round(this.openData.score * 1 * (1 + GameData.Skill.getSkillAdditionByType(GameEnum.SkillType.reward)));
            this.owner.lbRewardNum.text = 'x' + this.score.toString();
            this.owner.lbLvNum.text = LwgControl.Game.level.toString();
            GameData.Sound.playSoundByID(19);
            GameEff2D.interfacePointJet(this.owner);
        }
        lwgOpenAniAfter() {
            LwgControl.Game.level++;
            LwgTimer.frameLoop(1, this, () => {
                const rotation = Math.abs(this.owner.imgPointerMultiple.rotation);
                if (rotation > 0 && rotation <= 10) {
                    this.multiple = 2;
                }
                else if (rotation > 10 && rotation <= 30) {
                    this.multiple = 3;
                }
                else if (rotation > 30 && rotation <= 60) {
                    this.multiple = 4;
                }
                else if (rotation > 60 && rotation <= 90) {
                    this.multiple = 5;
                }
                this.owner.lbRewardNum.text = (this.score * this.multiple).toString();
            });
        }
        lwgButton() {
            this.btnOnUpAD(this.owner.btnADGet, () => {
                this.getReward(this.multiple);
            });
            this.btnOnceUp(this.owner.btnDirect, () => {
                this.getReward(1);
            });
        }
        getReward(multiple = 1) {
            GameAni2D.getRewardAni(GameEnum.ResType.Diamond, null, null, () => {
                LwgCurrency.Diamond.addNumDisPlayNode(this.score * multiple);
                const openData = {
                    whereFrom: this.owner.name,
                };
                this.openScene(GameSceneName.Start, openData, true);
            });
        }
    }

    class Guide extends LwgGuide.GuideBase {
        lwgOnAwake() {
            this.guideCompelet = true;
        }
        lwgEvent() {
        }
    }

    class PreLoad extends LwgPreLoad.PreLoadBase {
        lwgOnAwake() { }
        ;
        lwgAdaptive() {
        }
        lwgOpenAniAfter() {
            new LwgPlatform.Subpackage(['Game', 'Game3D', 'res'], () => {
                this.lodeStart(GameRes);
            });
        }
        lodeStepComplete(url) {
        }
        ;
        lodeAllComplete() {
            new GameData.Init();
            new Control3D.Init();
            new LwgInit.InitGame(new LwgSound.Init(GameData.Sound.getUrlByID(1), GameData.Sound.getUrlByID(2), GameData.Sound.getUrlByID(6)), new LwgGuide.Init(new Guide()));
            new LwgPlatform.InitAD(new LwgWX.Init({
                AD: {
                    video: {
                        adUnitId: 'adunit-1da20fd609b9024f',
                    },
                    banner: {
                        adUnitId: 'adunit-b9dbd3a6afc57ff5',
                        autoUpdateTime: 30,
                        showScenes: [
                            GameSceneName.Start,
                            GameSceneName.Lottery,
                            GameSceneName.CheckIn,
                            GameSceneName.LuckyWheel,
                            GameSceneName.Victory,
                            GameSceneName.Defeated,
                            GameSceneName.ADGetReward,
                            GameSceneName.BeRewarded,
                            GameSceneName.SkinTry,
                        ],
                        style: {
                            left: 0,
                            top: LwgPlatform.systemInfo.windowHeight - 148,
                            width: 750,
                        }
                    },
                    Insert: {
                        adUnitId: 'adunit-ecdad304d783e848',
                        showCloseScenesLaterArr: [
                            GameSceneName.Victory,
                            GameSceneName.EndLessSettle,
                        ],
                    },
                    customArr: [
                        {
                            adUnitId: 'adunit-7c99540a0f616ad6',
                            showScenes: [
                                GameSceneName.Start,
                                GameSceneName.Levels,
                            ],
                            style: {
                                left: LwgPlatform.systemInfo.windowWidth - 100,
                                top: 90,
                            }
                        }
                    ],
                },
                systemData: {
                    share: {
                        tattle: '[有人@我]超解压小游戏来啦！',
                        imgUrl: 'img_share.jpg',
                    }
                }
            }), new LwgOPPO.Init({
                delayTime: 60000,
                banner: {
                    adUnitId: '370605',
                    showScenes: [
                        GameSceneName.Start,
                        GameSceneName.Levels,
                        GameSceneName.SkinTry,
                        GameSceneName.PropTry,
                        GameSceneName.Resurgence,
                    ],
                    style: {}
                },
                video: {
                    adUnitId: '370621',
                },
                nativeData: {
                    adUnitId: '370622',
                    updateTime: 60000,
                    intervalTime: 10000,
                    dataArr: [
                        {
                            type: LwgOPPO.EmADNativeType.icon,
                            style: {
                                width: 100,
                                height: 100,
                                left: 9,
                                top: 160
                            },
                            showScenes: [
                                GameSceneName.Skin,
                            ],
                        },
                        {
                            type: LwgOPPO.EmADNativeType.banner,
                            style: {
                                width: Laya.stage.width,
                                height: 200,
                                centerX: 0,
                                bottom: 0
                            },
                            showScenes: [
                                GameSceneName.Lottery,
                                GameSceneName.CheckIn,
                                GameSceneName.LuckyWheel,
                                GameSceneName.Victory,
                                GameSceneName.Defeated,
                                GameSceneName.BeRewarded,
                            ],
                        }
                    ],
                },
                gamePortal: {
                    adUnitId: '370613',
                    showScene: [
                        {
                            sceneName: GameSceneName.Start,
                            btnStyle: {
                                anchorX: 0.5,
                                anchorY: 0.5,
                                x: 42,
                                y: 352,
                                skin: 'Game/UI/img_btn_mainui_gengduohaowan.png',
                            },
                        }
                    ]
                },
                insert: {
                    type: LwgOPPO.EmInsertType.GamePortal,
                    showCloseScenesLaterArr: [
                        GameSceneName.Victory
                    ]
                }
            }, {
                isShow: true,
                btnStyle: {
                    anchorX: 0.5,
                    anchorY: 0.5,
                    x: 534,
                    y: 249,
                    skin: 'Game/UI/img_btn_mainui_tianjiazhuomian.png',
                },
                sceneName: GameSceneName.Start,
            }));
            return 10;
        }
        lodeAllCompleteAfter() { return false; }
        ;
    }

    class PreLoadCutIn extends LwgPreLoad.PreLoadCutInBase {
        lwgOnAwake() {
        }
        lwgOpenAniAfter() {
            this.lodeStart([this.preLoadOpenName] ? GameResCutIn[this.preLoadOpenName] : {});
            if (this.preLoadFromName === GameSceneName.Victory) {
                Laya.Resource.destroyUnusedResources();
            }
        }
        lodeAllComplete() {
            return 800;
        }
    }

    class GameManager extends LwgScene.SceneBase {
        constructor() {
            super(...arguments);
            this.dataArr = [
                {
                    key: '钻石数量',
                    get value() {
                        return LwgCurrency.Diamond.num;
                    },
                    set value(val) {
                        LwgCurrency.Diamond.num = val;
                        LwgCurrency.Diamond.updateNumOnNode();
                    }
                },
                {
                    key: '体力',
                    get value() {
                        return LwgCurrency.Stamina.num;
                    },
                    set value(val) {
                        LwgCurrency.Stamina.num = val;
                        LwgCurrency.Stamina.updateNumOnNode();
                    }
                },
                {
                    key: '关卡数',
                    get value() {
                        return LwgControl.Game.level;
                    },
                    set value(val) {
                        LwgControl.Game.level = val;
                    }
                },
                {
                    key: '背景音乐',
                    get value() {
                        if (LwgSet.BgMusic.switch) {
                            return 1;
                        }
                        else {
                            return 0;
                        }
                    },
                    set value(val) {
                        if (val === 1) {
                            LwgSet.BgMusic.switch = true;
                        }
                        else {
                            LwgSet.BgMusic.switch = false;
                        }
                    }
                },
                {
                    key: '音效',
                    get value() {
                        if (LwgSet.Sound.switch) {
                            return 1;
                        }
                        else {
                            return 0;
                        }
                    },
                    set value(val) {
                        if (val === 1) {
                            LwgSet.Sound.switch = true;
                        }
                        else {
                            LwgSet.Sound.switch = false;
                        }
                    }
                },
            ];
        }
        lwgOnAwake() {
            this.updataView();
        }
        updataView() {
            for (let index = 0; index < this.dataArr.length; index++) {
                const data = this.dataArr[index];
                const Render = new ui.Views.Base.GameManagerRenderObjUI();
                Render.lbKey.text = data.key;
                const len0 = data.key.length - 10;
                if (len0 > 0) {
                    Render.lbKey.fontSize = 26 - len0 * 2;
                }
                Render.txPValue.text = data.value;
                this.owner.plValueView.addChild(Render);
                Render.y = 50 + index * (Render.height + 10);
                Render.centerX = 0;
            }
        }
        lwgButton() {
            this.btnOnUp(this.owner.btnConfirm, () => {
                for (let index = 0; index < this.owner.plValueView.numChildren; index++) {
                    const Element = this.owner.plValueView.getChildAt(index);
                    this.dataArr[index].value = +Element.txPValue.text;
                }
            });
            this.btnOnUp(this.owner.btnClose, () => {
                this.closeScene();
            });
            this.btnOnUp(this.owner.btnClear, () => {
                this.closeScene();
                Laya.LocalStorage.clear();
            });
            for (let index = 0; index < this.owner.plValueView.numChildren; index++) {
                const Element = this.owner.plValueView.getChildAt(index);
                Element.txPValue.on(Laya.Event.FOCUS, this, () => {
                    this.dataArr[index].value = +Element.txPValue.text;
                });
            }
            for (let index = 0; index < this.owner.plValueView.numChildren; index++) {
                const Element = this.owner.plValueView.getChildAt(index);
                Element.txPValue.on(Laya.Event.BLUR, this, () => {
                    this.dataArr[index].value = +Element.txPValue.text;
                });
            }
        }
    }

    class LuckyWheel extends LwgScene.SceneBase {
        constructor() {
            super(...arguments);
            this.firstRewardAngle = 22.5;
            this.isDoTurning = false;
            this.turnLaps = 5;
            this.turnOneTime = 1000;
        }
        lwgOnAwake() {
            this.updateRewardView();
            this.playAutoTurn();
            if (LwgPlatform.type === LwgPlatform.EmType.OPPO) {
                this.owner.btnADNative.visible = true;
                this.owner.btnADGet.centerX = 140;
            }
        }
        lwgOnStart() {
            this.evNotify(GameEvent.updateLuckyWheel);
        }
        lwgEvent() {
            this.evRegister(GameEvent.updateLuckyWheel, () => {
                this.displayNum();
                this.updateRewardView();
            });
        }
        displayNum() {
            if (GameData.LuckyWheel.todayFree) {
                this.owner.lbNum.text = 1 + '次';
                this.owner.imgWordTurn.visible = false;
                this.owner.imgWordFree.visible = true;
            }
            else {
                this.owner.imgWordTurn.visible = true;
                this.owner.imgWordFree.visible = false;
                this.owner.lbNum.text = 0 + '次';
            }
        }
        lwgButton() {
            this.btnOnUp(this.owner.btnADGet, () => {
                if (this.isDoTurning) {
                    LwgDialogue.showTips('等一下呗');
                }
                else {
                    if (GameData.LuckyWheel.todayFree) {
                        GameData.LuckyWheel.lastDate = LwgDate.Now.date;
                        this.playTurn();
                        this.displayNum();
                    }
                    else {
                        LwgPlatform.AD.showVideo(() => {
                            this.playTurn();
                        });
                    }
                }
            });
            this.btnOnUp(this.owner.btnLater, () => {
                if (this.isDoTurning) {
                    LwgDialogue.showTips('请稍等！');
                }
                else {
                    this.closeScene();
                    this.stopAutoTurn();
                }
            });
            this.btnOnUp(this.owner.btnADNative, () => {
                LwgPlatform.AD.showNative();
            });
        }
        updateRewardView() {
            LwgTools.Node.destroyAllChildren(this.owner.rewardContent);
            const arr = GameData.LuckyWheel.getItemArr;
            const num = arr.length;
            for (let index = 0; index < num; index++) {
                const rewardUI = new ui.Views.LuckyWheelRenderObjUI;
                this.owner.rewardContent.addChild(rewardUI);
                rewardUI.rotation = index * 360 / num + this.firstRewardAngle;
                rewardUI.name = `${index}`;
                rewardUI.pos(this.owner.rewardContent.width / 2, this.owner.rewardContent.height / 2);
                const item = arr[index];
                rewardUI.icon.skin = item.picSkin;
                rewardUI.num.text = item.number.toString();
                if (item.type === GameEnum.ItemType.Skin) {
                    rewardUI.num.visible = false;
                    rewardUI.icon.scale(0.6, 0.6);
                }
                else {
                    rewardUI.num.visible = true;
                    rewardUI.icon.scale(1, 1);
                }
            }
        }
        playTurn() {
            this.stopAutoTurn();
            this.isDoTurning = true;
            GameData.Sound.playSoundByID(4);
            let angle = 0;
            const item = GameData.LuckyWheel.ranReward;
            const index = item.index;
            angle = index * (360 / 8) + this.firstRewardAngle;
            const time = this.turnLaps * this.turnOneTime + Math.floor(angle / 360 * this.turnOneTime);
            Laya.timer.once(time - 100, this, () => {
                GameData.Sound.sotpSoundByID(4);
            });
            Laya.Tween.to(this.owner.rewardContent, { rotation: 360 * this.turnLaps - angle }, time, Laya.Ease.cubicOut, Laya.Handler.create(this, () => {
                GameData.Sound.playSoundByID(5);
                this.owner.rewardContent.rotation = 360 - angle;
                if (item.type == GameEnum.ItemType.LuckyWheelAgain) {
                    LwgDialogue.showTips('抽奖次数+1！');
                    GameData.LuckyWheel.lastDate = 0;
                    this.displayNum();
                    this.isDoTurning = false;
                }
                else {
                    const openData = {
                        item: item,
                    };
                    Laya.timer.once(1000, this, () => {
                        this.openOverlayScene(GameSceneName.BeRewarded, openData);
                        this.isDoTurning = false;
                        this.playAutoTurn();
                    });
                }
            }));
        }
        playAutoTurn() {
            LwgTimer.frameLoop(1, this.owner.rewardContent, () => {
                this.owner.rewardContent.rotation += 0.05;
            });
        }
        stopAutoTurn() {
            Laya.timer.clearAll(this.owner.rewardContent);
        }
    }

    class CheckIn extends LwgScene.SceneBase {
        lwgOnAwake() {
            this.setListData();
            if (GameData.CheckIn.num >= 6 && !GameData.CheckIn.today) {
                this.owner.aniDay7.play(0, true);
            }
            if (GameData.CheckIn.today) {
                this.owner.btnCheck.visible = false;
                this.owner.btnADGet.visible = false;
                this.owner.lbAlready.visible = true;
            }
            else {
                this.owner.btnCheck.visible = true;
                this.owner.btnADGet.visible = true;
                this.owner.lbAlready.visible = false;
            }
        }
        setListData() {
            this.owner.listDay6.array = GameData.CheckIn.dayArr6;
            this.owner.listDay6.renderHandler = new Laya.Handler(this, this.onlistDay6Render);
            this.owner.listDay7Reward.array = GameData.CheckIn.day7RwardArr;
            this.owner.listDay7Reward.renderHandler = new Laya.Handler(this, this.onlistDay7RewardRender);
            this.owner.listDay7Reward.width = GameData.CheckIn.day7RwardArr.length * 178;
            this.owner.listDay7Reward.visible = false;
        }
        onlistDay6Render(view, index) {
            const data = view.dataSource;
            view.dayNum.skin = `Game/UI/img_icon_text_day${index + 1}.png`;
            view.icon.skin = data.iconSkin;
            view.rewardNum.text = data.number.toString();
            view.rewardNum.text = 'x' + data.number;
            if (GameData.CheckIn.num > index) {
                view.alreadyPic.visible = true;
                view.imgMask.visible = true;
            }
            else {
                view.alreadyPic.visible = false;
                view.imgMask.visible = false;
            }
            if (GameData.CheckIn.num < 6) {
                if (GameData.CheckIn.num === index) {
                    if (!GameData.CheckIn.today) {
                        view.aniHint.play(0, true);
                        view.zOrder = 10;
                    }
                }
                else {
                    view.zOrder = 1;
                }
            }
        }
        onDay6select(index, view, AD) {
            if (GameData.CheckIn.num < 6) {
                if (GameData.CheckIn.num > index) {
                    LwgDialogue.showTips('已经签到过了');
                }
                else if (GameData.CheckIn.num === index) {
                    if (!GameData.CheckIn.today) {
                        GameData.CheckIn.num++;
                        GameData.CheckIn.lastDate = LwgDate.Now.date;
                        this.owner.listDay6.refresh();
                        const data = GameData.CheckIn.dayArr6[index];
                        if (data.ID >= 201 && data.ID <= 299) {
                            const obj = {
                                item: data,
                            };
                            this.openOverlayScene(GameSceneName.BeRewarded, obj);
                        }
                        else {
                            let num = data.number;
                            if (AD) {
                                num *= 2;
                            }
                            GameAni2D.getRewardAni(data.ID, num, () => {
                            }, () => {
                                this.closeScene();
                            });
                        }
                        view.aniHint.stop();
                    }
                    else {
                        LwgDialogue.showTips('不可以');
                    }
                }
                else {
                    LwgDialogue.showTips('不可以');
                }
            }
        }
        onlistDay7RewardRender(view, index) {
            const data = view.dataSource;
            view.icon.skin = data.picBigSkin;
            view.rewardNum.text = data.number.toString();
            if (data.ID >= 201 && data.ID <= 299) {
                view.rewardNum.visible = false;
            }
            else {
                view.rewardNum.visible = true;
            }
        }
        lwgButton() {
            this.btnOnUp(this.owner.btnCheck, () => {
                if (GameData.CheckIn.num >= 6 && !GameData.CheckIn.today) {
                    this.onBtnDay7();
                }
                else {
                    const view = this.owner.listDay6.getCell(GameData.CheckIn.num);
                    this.onDay6select(GameData.CheckIn.num, view, false);
                }
            });
            this.btnOnUpAD(this.owner.btnADGet, () => {
                if (GameData.CheckIn.num >= 6 && !GameData.CheckIn.today) {
                    this.onBtnDay7();
                }
                else {
                    const view = this.owner.listDay6.getCell(GameData.CheckIn.num);
                    this.onDay6select(GameData.CheckIn.num, view, true);
                }
            });
        }
        onBtnDay7() {
            if (GameData.CheckIn.num >= 6 && !GameData.CheckIn.today) {
                this.owner.aniDay7.stop();
                GameData.CheckIn.num++;
                GameData.CheckIn.lastDate = LwgDate.Now.date;
                const arr = GameData.CheckIn.day7RwardArr;
                if (arr[0].type === GameEnum.ItemType.Skin && arr[1].type === GameEnum.ItemType.Skin) {
                    const obj = {
                        item: arr[0],
                        item1: arr[1],
                        item2: arr[2],
                    };
                    this.openOverlayScene(GameSceneName.BeRewarded, obj);
                    this.closeScene();
                    return;
                }
                for (let index = 0; index < GameData.CheckIn.day7RwardArr.length; index++) {
                    const data = GameData.CheckIn.day7RwardArr[index];
                    if (data.type === GameEnum.ItemType.Skin) {
                        const obj = {
                            item: data,
                        };
                        this.openOverlayScene(GameSceneName.BeRewarded, obj);
                        this.closeScene();
                    }
                    else {
                        GameAni2D.getRewardAni(data.ID, data.number, () => {
                        }, () => {
                            this.closeScene();
                        });
                    }
                }
            }
            else {
                LwgDialogue.showTips('不可以');
            }
        }
    }

    class Lottery extends LwgScene.SceneBase {
        constructor() {
            super(...arguments);
            this.openChestNum = 0;
        }
        lwgOnAwake() {
            this.createChest();
            this.updateKey();
            const baseReward = GameData.Lottery.getBestReward;
            this.owner.imgBestRewardPic.skin = baseReward.picSkin;
            if (baseReward.type !== GameEnum.ItemType.Skin) {
                this.owner.imgBestRewardPic.centerY = -16;
                this.owner.lbBsetRewardNum.text = 'x' + baseReward.number.toString();
            }
        }
        lwgOpenAniAfter() {
            GameEff2D.bothBlinkOnSprite2(this.owner.boxTitle, new Laya.Point(Laya.stage.width * 2 / 3, 0), this);
        }
        lwgButton() {
            this.btnOnceUp(this.owner.btnReturn, () => {
                this.closeScene();
            });
            this.btnOnUpAD(this.owner.btnADGet, () => {
                if (this.openChestNum < 9) {
                    GameData.Lottery.KeyNum += 3;
                    this.updateKey();
                    this.evNotify(GameEvent.updateKeyNumStart);
                }
            });
        }
        createChest() {
            const moveX = 20;
            const moveY = 10;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    const chestView = new ui.Views.LotteryRenderObjUI;
                    const point = new Laya.Point(this.owner.chestBox.width / 3 * i + chestView.width / 2 + moveX, this.owner.chestBox.height / 3 * j + chestView.height / 2 + moveY);
                    chestView.pos(point.x, point.y);
                    this.owner.chestBox.addChild(chestView);
                    chestView.lbNum.visible = false;
                    chestView.imgRewardIcon.visible = false;
                    if (GameData.Lottery.KeyNum >= 3) {
                        this.btnOnUp(chestView, () => {
                            if (GameData.Lottery.KeyNum > 0) {
                                this.onClickChest(chestView, false);
                            }
                            else {
                                if (chestView['beOpen']) {
                                    LwgDialogue.showTips('奖励已领取！');
                                }
                                else {
                                    LwgPlatform.AD.showVideo(() => {
                                        this.onClickChest(chestView, true);
                                    });
                                }
                            }
                        });
                    }
                    else {
                        if (i == 2 && j == 2) {
                            this.owner.btnReturn.visible = true;
                            this.owner.chestBox.on(Laya.Event.CLICK, this, () => {
                                LwgDialogue.showTips('请凑足3把金钥匙！');
                            });
                        }
                    }
                }
            }
        }
        onClickChest(chestView, AD) {
            if (!chestView['beOpen']) {
                this.openChestNum++;
                chestView['beOpen'] = true;
                chestView.lbNum.visible = true;
                chestView.imgRewardIcon.visible = true;
                chestView.chestIcon.visible = false;
                let item;
                if (this.openChestNum === 9) {
                    item = GameData.Lottery.getBestReward;
                    this.owner.btnADGet.visible = false;
                    this.owner.boxKey.visible = false;
                    this.owner.lbOpenAll.visible = true;
                }
                else {
                    item = GameData.Lottery.ranReward;
                }
                chestView.lbNum.text = 'x' + item.number.toString();
                chestView.imgRewardIcon.skin = item.picSkin;
                if (!AD) {
                    GameData.Lottery.KeyNum--;
                }
                this.evNotify(GameEvent.updateKeyNumStart);
                if (item.type === GameEnum.ItemType.Skin) {
                    const obj = {
                        item: item,
                    };
                    this.openOverlayScene(GameSceneName.BeRewarded, obj);
                    chestView.lbNum.visible = false;
                    chestView.imgRewardIcon.top = 10;
                    chestView.imgRewardIcon.bottom = 10;
                    chestView.imgRewardIcon.left = 10;
                    chestView.imgRewardIcon.right = 10;
                }
                else {
                    GameAni2D.getRewardAni(item.ID, item.number);
                }
                chestView.imgAd.visible = false;
                this.updateKey();
                chestView.zOrder = LwgDate.Now.time;
                GameEff2D.oneFireworks2(chestView, new Laya.Point(chestView.width / 2, chestView.height / 2));
                GameData.Sound.playSoundByID(9);
            }
            else {
                LwgDialogue.showTips('奖励已领取！');
            }
        }
        updateKey() {
            if (GameData.Lottery.KeyNum === 0) {
                this.owner.btnReturn.visible = true;
                if (this.openChestNum < 9) {
                    this.owner.btnADGet.visible = true;
                }
            }
            else {
                this.owner.btnADGet.visible = false;
            }
            for (let index = 1; index < 4; index++) {
                if (index > GameData.Lottery.KeyNum) {
                    this.owner[`key${index}`].visible = false;
                }
                else {
                    this.owner[`key${index}`].visible = true;
                }
            }
            for (let index = 0; index < this.owner.chestBox.numChildren; index++) {
                const element = this.owner.chestBox.getChildAt(index);
                if (GameData.Lottery.KeyNum === 0) {
                    if (!element['beOpen']) {
                        element.imgAd.visible = true;
                    }
                }
                else {
                    element.imgAd.visible = false;
                }
            }
        }
    }

    class BeRewarded extends LwgScene.SceneBase {
        lwgOnAwake() {
            if (LwgPlatform.type === LwgPlatform.EmType.OPPO) {
                this.owner.btnADNative.visible = true;
                this.owner.btnADGet.centerX = 140;
            }
            GameData.Sound.playSoundByID(7);
            this.owner.rewardNum.text = this.openData.item.number.toString();
            this.owner.rewardBigPic.skin = this.openData.item.picBigSkin;
            this.owner.rewardIcon.skin = this.openData.item.iconSkin;
            switch (this.openData.item.type) {
                case GameEnum.ItemType.Skin:
                    this.owner.boxNum.visible = false;
                    this.owner.btnDirect.visible = false;
                    this.owner.imgBtnWordThree.visible = false;
                    this.owner.imgBtnDirectWord.visible = true;
                    this.owner.rewardBigPic.visible = false;
                    SkinShowScene.ins.show(this.owner, this.openData.item.ID, this.openData.item1 ? this.openData.item1.ID : null, this.openData.item1 ? this.openData.item1.ID : null);
                    break;
                case GameEnum.ItemType.Currency:
                    this.owner.boxNum.visible = true;
                    this.owner.btnDirect.visible = true;
                    this.owner.imgBtnWordThree.visible = true;
                    this.owner.imgBtnDirectWord.visible = false;
                    this.owner.rewardBigPic.visible = true;
                    break;
                case GameEnum.ItemType.LuckyWheelAgain:
                    this.evNotify(GameEvent.updateLuckyWheel);
                    break;
                case GameEnum.ItemType.EndlessMode:
                    break;
                case GameEnum.ItemType.SkinTry:
                    break;
                default:
                    break;
            }
        }
        lwgButton() {
            this.btnOnceUp(this.owner.btnDirect, () => {
                this.getRewardAni(1);
                this.closeRule();
            });
            this.btnOnceUpADCondition(this.owner.btnADGet, () => {
                return this.openData.item.type !== GameEnum.ItemType.Skin;
            }, () => {
                this.getRewardAni(3);
                this.closeRule();
                this.evNotify(GameEvent.updateLuckyWheel);
            }, () => {
                GameData.Skin.setObjCompeletByID(this.openData.item.ID);
                this.openData.item1 && GameData.Skin.setObjCompeletByID(this.openData.item1.ID);
                this.openData.item2 && GameData.Skin.setObjCompeletByID(this.openData.item2.ID);
                LwgDialogue.showTips('获得新皮肤！');
                this.closeRule();
                this.evNotify(GameEvent.updateLuckyWheel);
            });
        }
        closeRule() {
            if (this.openData.whereFrom === GameSceneName.Levels) {
                this.openScene(GameSceneName.Victory);
            }
            else {
                this.closeScene();
            }
        }
        getRewardAni(multiple = 1) {
            GameAni2D.getRewardAni(this.openData.item.ID, this.openData.item.number * multiple, () => {
                this.owner.rewardNum.text = LwgTools.Format.strAddNum(this.owner.rewardNum.text, 20);
            }, () => {
                this.owner.rewardNum.text = '0';
                this.closeScene();
            });
        }
    }

    class ADGetReward extends LwgScene.SceneBase {
        constructor() {
            super(...arguments);
            this.multiple = 1;
        }
        lwgOnAwake() {
            if (LwgPlatform.type === LwgPlatform.EmType.OPPO) {
                this.owner.btnADNative.visible = true;
                this.owner.btnADGet.centerX = 140;
            }
            switch (this.openData.type) {
                case GameEnum.ResType.Gold:
                    break;
                case GameEnum.ResType.Diamond:
                    this.owner.rewardBigPic.skin = 'Game/UI/img_icon_zuanshibig.png';
                    this.owner.rewardIcon.skin = 'Game/UI/img_icon_money_01.png';
                    this.owner.tattleWard.skin = 'Game/UI/img_icon_text_zuanshibuzu.png';
                    this.rewardNum = 500;
                    this.multiple = 1;
                    break;
                case GameEnum.ResType.Stamina:
                    this.owner.rewardBigPic.skin = 'Game/UI/img_icon_tili_02.png';
                    this.owner.rewardIcon.skin = 'Game/UI/img_icon_money_02.png';
                    this.owner.tattleWard.skin = 'Game/UI/img_icon_text_tilibuzu.png';
                    this.rewardNum = 20;
                    this.multiple = 3;
                    break;
                default:
                    break;
            }
            this.owner.rewardNum.text = this.rewardNum.toString();
        }
        lwgButton() {
            this.btnOnUpAD(this.owner.btnADGet, () => {
                GameAni2D.getRewardAni(this.openData.type, this.rewardNum, () => {
                    this.owner.rewardNum.text = LwgTools.Format.strAddNum(this.owner.rewardNum.text, 20);
                }, () => {
                    this.owner.rewardNum.text = '0';
                    this.closeScene();
                });
            });
            this.btnOnUpAD(this.owner.btnNextTime, () => {
                this.closeScene();
            });
        }
    }

    class Skin extends LwgScene.SceneBase {
        constructor() {
            super(...arguments);
            this._tapIndex = 0;
        }
        get tapIndex() {
            return this._tapIndex;
        }
        set tapIndex(index) {
            if (index == 0) {
                this.owner.list.array = GameData.Skin.getSkinArrByPart(GameEnum.Part.dress);
            }
            else if (index == 1) {
                this.owner.list.array = GameData.Skin.getSkinArrByPart(GameEnum.Part.hair);
            }
            else if (index == 2) {
                this.owner.list.array = GameData.Skin.getSkinArrByPart(GameEnum.Part.wing);
            }
            for (let index = 0; index < this.owner.list.array.length; index++) {
                const element = this.owner.list.array[index];
                if (element.ID === GameData.Skin.pitchDressID || element.ID === GameData.Skin.pitchHairID || element.ID === GameData.Skin.pitchWingID) {
                    this.dataPitch = element;
                    this.dataPitch.index = index;
                    break;
                }
            }
            if (index === 2) {
                SkinScene.ins.turnBack();
            }
            else {
                SkinScene.ins.turnFront();
            }
            this.updateBtn();
            this.owner.list.refresh();
            this._tapIndex = index;
        }
        lwgOnAwake() {
            this.owner.list.renderHandler = new Laya.Handler(this, this.onListRender);
            this.owner.list.hScrollBarSkin = '';
            this.tapIndex = 0;
        }
        lwgOpenAniAfter() {
            Control3D.showSkinScene();
        }
        onListRender(view, index) {
            const data = view.dataSource;
            view.imgIcon.skin = `Game/UI/SkinIcon/${data.name}.png`;
            if (index === this.dataPitch.index) {
                view.imgAniBoard.visible = true;
            }
            else {
                view.imgAniBoard.visible = false;
            }
            view.imgLock.visible = !data.complete;
            view.imgDesIcon.visible = false;
            view.lbDescribe.centerX = 0;
            if (data.complete) {
                if (data.ID === GameData.Skin.pitchDressID || data.ID === GameData.Skin.pitchHairID || data.ID === GameData.Skin.pitchWingID) {
                    view.lbDescribe.text = '装备中';
                }
                else {
                    view.lbDescribe.text = '已获得';
                }
            }
            else {
                switch (data.pathWay) {
                    case GameEnum.ItemPathWay.AD:
                        view.imgDesIcon.visible = true;
                        view.imgDesIcon.skin = 'Game/UI/img_icon_common_ad_02.png';
                        if (!data.degreeNum) {
                            data.degreeNum = 0;
                        }
                        view.lbDescribe.text = '(' + data.degreeNum + '/' + data.condition + ')';
                        view.lbDescribe.centerX = 10;
                        break;
                    case GameEnum.ItemPathWay.CheckIn:
                        view.lbDescribe.text = '签到获得';
                        break;
                    case GameEnum.ItemPathWay.Free:
                        view.lbDescribe.text = '已获得';
                        break;
                    case GameEnum.ItemPathWay.Diamond:
                        view.imgDesIcon.visible = true;
                        view.imgDesIcon.skin = 'Game/UI/img_icon_money_01.png';
                        view.lbDescribe.text = data.condition;
                        view.lbDescribe.centerX = 10;
                        break;
                    case GameEnum.ItemPathWay.LotteryChest:
                        view.lbDescribe.text = '开宝箱';
                        break;
                    case GameEnum.ItemPathWay.LuckyWheel:
                        view.lbDescribe.text = '幸运抽奖';
                        break;
                    default:
                        break;
                }
            }
            LwgClick.off(view);
            LwgClick.on(undefined, view, this, null, null, (e, args) => {
                this.onListRenderClick(args);
            }, null, [{}, {}, { view: view, data: data, index: index }, {}]);
        }
        onListRenderClick(args) {
            this.dataPitch = args.data;
            this.dataPitch.index = args.index;
            SkinScene.ins.change(args.data.ID);
            this.owner.list.refresh();
            this.updateBtn();
            if (this.dataPitch.complete) {
                if (this.dataPitch.part === GameEnum.Part.dress) {
                    GameData.Skin.pitchDressID = this.dataPitch.ID;
                }
                if (this.dataPitch.part === GameEnum.Part.hair) {
                    GameData.Skin.pitchHairID = this.dataPitch.ID;
                }
                if (this.dataPitch.part === GameEnum.Part.wing) {
                    GameData.Skin.pitchWingID = this.dataPitch.ID;
                }
            }
        }
        updateBtn() {
            if (this.dataPitch.degreeNum === undefined) {
                this.dataPitch.degreeNum = 0;
            }
            let name;
            switch (this.dataPitch.pathWay) {
                case GameEnum.ItemPathWay.AD:
                    name = 'boxAD';
                    this.owner.boxADNum.text = '(' + this.dataPitch.degreeNum + '/' + this.dataPitch.condition + ')';
                    break;
                case GameEnum.ItemPathWay.CheckIn:
                    name = 'boxCheckIn';
                    break;
                case GameEnum.ItemPathWay.Free:
                    name = 'boxFree';
                    break;
                case GameEnum.ItemPathWay.Diamond:
                    name = 'boxGold';
                    this.owner.boxGoldNum.text = this.dataPitch.condition.toString();
                    break;
                case GameEnum.ItemPathWay.LotteryChest:
                    name = 'boxLotteryChest';
                    break;
                case GameEnum.ItemPathWay.LuckyWheel:
                    name = 'boxLuckyWheel';
                    break;
                default:
                    break;
            }
            for (let index = 0; index < this.owner.btnGet.numChildren; index++) {
                const element = this.owner.btnGet.getChildAt(index);
                if (element.name == name) {
                    element.visible = true;
                }
                else {
                    element.visible = false;
                }
            }
            if (this.dataPitch.complete) {
                this.owner.btnGet.visible = false;
            }
            else {
                this.owner.btnGet.visible = true;
            }
        }
        compelet() {
            this.dataPitch.complete = true;
            GameData.Skin.setCompeletByData(this.dataPitch);
            this.owner.list.refresh();
            this.updateBtn();
            const cell = this.owner.list.getCell(this.dataPitch.index);
            const lpos = this.owner.list.localToGlobal(new Laya.Point(cell.x + cell.width / 2, cell.y + cell.height / 2));
            GameEff2D.oneFireworks3(this.owner, lpos);
            GameData.Sound.playSoundByID(7);
        }
        lwgButton() {
            for (let i = 0; i < this.owner.boxTap.numChildren; i++) {
                const element = this.owner.boxTap.getChildAt(i);
                this.btnOnDown(element, () => {
                    for (let index = 0; index < this.owner.boxTap.numChildren; index++) {
                        const elementbtn = this.owner.boxTap.getChildAt(index);
                        if (elementbtn === element) {
                            elementbtn.skin = 'Game/UI/img_btn_tab_1.png';
                            this.tapIndex = index;
                        }
                        else {
                            elementbtn.skin = 'Game/UI/img_btn_tab_2.png';
                        }
                    }
                }, LwgClick.EmEffectType.NoEffect);
            }
            this.btnOnUp(this.owner.btnReturn, () => {
                this.openScene(GameSceneName.Start, null, true);
            });
            this.btnOnUp(this.owner.btnGet, () => {
                if (this.dataPitch.complete) {
                    LwgDialogue.showTips('已经获得！');
                    return;
                }
                switch (this.dataPitch.pathWay) {
                    case GameEnum.ItemPathWay.AD:
                        LwgPlatform.AD.showVideo(() => {
                            this.dataPitch.degreeNum++;
                            this.owner.boxADNum.text = '(' + this.dataPitch.degreeNum + '/' + this.dataPitch.condition + ')';
                            if (this.dataPitch.degreeNum >= +this.dataPitch.condition) {
                                this.compelet();
                            }
                        });
                        break;
                    case GameEnum.ItemPathWay.CheckIn:
                        LwgDialogue.showTips('签到页面获取！');
                        break;
                    case GameEnum.ItemPathWay.Free:
                        LwgDialogue.showTips('已经获得！');
                        break;
                    case GameEnum.ItemPathWay.Diamond:
                        if (LwgCurrency.Diamond.num >= +this.dataPitch.condition) {
                            this.compelet();
                            LwgDialogue.showTips('购买成功！');
                        }
                        else {
                            const data = {
                                type: GameEnum.ResType.Diamond,
                            };
                            LwgScene.openOverlayScene(GameSceneName.ADGetReward, data);
                        }
                        break;
                    case GameEnum.ItemPathWay.LotteryChest:
                        LwgDialogue.showTips('宝箱页面获取！');
                        break;
                    case GameEnum.ItemPathWay.LuckyWheel:
                        LwgDialogue.showTips('抽奖页面获取！');
                        break;
                    default:
                        break;
                }
            });
        }
    }

    class SkinTry extends LwgScene.SceneBase {
        lwgOnAwake() {
            if (LwgPlatform.type === LwgPlatform.EmType.OPPO) {
                this.owner.btnADNative.visible = true;
                this.owner.btnADGet.centerX = 140;
            }
            SkinShowScene.ins.show(this.owner, this.openData.id);
        }
        lwgButton() {
            this.btnOnUpAD(this.owner.btnADGet, () => {
                const name = GameData.Skin.getNameByID(this.openData.id);
                Role.ins.changeSkin(null, null, name);
                this.rule();
            });
            this.btnOnUp(this.owner.btnDirect, () => {
                this.rule();
            });
        }
        rule() {
            if (GameData.Level.mode === GameEnum.LevelMode.common) {
                LwgCurrency.Stamina.addNumDisPlayNode(-5);
            }
            this.openScene(GameSceneName.Levels);
        }
    }

    class DialogHint extends LwgScene.SceneBase {
        lwgOnAwake() {
            this.owner.boxTitle.visible = false;
            this.owner.btnCloseDouble.visible = false;
        }
        lwgButton() {
            this.btnOnUp(this.owner.btnCloseDouble, () => {
                this.closeScene();
            });
            this.btnOnUpAD(this.owner.btnConfirmDouble, () => {
                this.openData.onBtnConfirm && this.openData.onBtnConfirm();
                this.closeScene();
            });
            this.btnOnUp(this.owner.btnCancelDouble, () => {
                this.closeScene();
            });
        }
    }

    class EndLessSettle extends LwgScene.SceneBase {
        lwgOnAwake() {
            if (LwgPlatform.type === LwgPlatform.EmType.OPPO) {
                this.owner.btnADNative.visible = true;
                this.owner.btnADGet.centerX = 140;
            }
            GameData.Sound.playSoundByID(9);
            GameEff2D.interfacePointJet();
            this.openData.diamondNum += Math.round(this.openData.diamondNum * GameData.Skill.getSkillAdditionByType(GameEnum.SkillType.reward));
            this.owner.lbRewardNum.text = this.openData.diamondNum.toString();
            this.owner.lbMileage.text = this.openData.mileage + 'm';
        }
        lwgButton() {
            this.btnOnceUpAD(this.owner.btnADGet, () => {
                this.getReward(2);
            });
            this.btnOnceUp(this.owner.btnDirect, () => {
                this.getReward(1);
            });
        }
        getReward(multiple = 1) {
            GameAni2D.getRewardAni(GameEnum.ResType.Diamond, null, null, () => {
                LwgCurrency.Diamond.addNumDisPlayNode(this.openData.diamondNum * multiple);
                const openData = {
                    whereFrom: this.owner.name,
                };
                this.openScene(GameSceneName.Start, openData);
            });
        }
    }

    class SpecialAwards extends LwgScene.SceneBase {
        lwgOnAwake() {
            LwgControl.Game.level++;
            GameData.Sound.playSoundByID(7);
            GameEff2D.interfacePointJet();
            this.owner.imgReward.skin = this.openData.itme.picBigSkin;
            this.owner.btnNextTime.skin = 'Game/UI/img_icon_text_xiacizaishuo.png';
            switch (this.openData.itme.type) {
                case GameEnum.ItemType.Currency:
                    this.openData.itme.number += Math.round(this.openData.itme.number * GameData.Skill.getSkillAdditionByType(GameEnum.SkillType.reward));
                    this.owner.boxCurrency.visible = true;
                    this.owner.btnNextTime.visible = true;
                    this.owner.btnNextTime.skin = 'Game/UI/img_icon_text_zhijielingqu.png';
                    this.owner.imgReward.visible = true;
                    this.owner.lbCurrencyNum.text = this.openData.itme.number.toString();
                    break;
                case GameEnum.ItemType.Skin:
                    this.owner.boxSkin.visible = true;
                    SkinShowScene.ins.show(this.owner, this.openData.itme.ID);
                    break;
                case GameEnum.ItemType.LuckyWheelAgain:
                    this.owner.boxLuckyWheelAgain.visible = true;
                    this.owner.imgReward.visible = true;
                    break;
                case GameEnum.ItemType.EndlessMode:
                    this.owner.boxEndlessInto.visible = true;
                    this.owner.imgReward.visible = true;
                    this.owner.btnNextTime.visible = true;
                    break;
                case GameEnum.ItemType.SkinTry:
                    this.owner.boxSkinTry.visible = true;
                    this.owner.imgReward.visible = true;
                    this.owner.btnNextTime.visible = true;
                    SkinShowScene.ins.show(this.owner, this.openData.itme.ID);
                    break;
                default:
                    break;
            }
        }
        lwgButton() {
            this.btnOnceUp(this.owner.btnNextTime, () => {
                if (this.owner.boxCurrency.visible) {
                    this.getRewardAni(1);
                }
                else {
                    this.openScene(GameSceneName.Start);
                }
            });
            this.btnOnUp(this.owner.btnEndlessInto, () => {
                GameData.Level.endlessFreeNum++;
                GameData.Level.mode = GameEnum.LevelMode.endless;
                this.openScene(GameSceneName.Start);
            });
            this.btnOnUp(this.owner.btnSkinTry, () => {
                this.openScene(GameSceneName.Start);
            });
            this.btnOnUpAD(this.owner.btnCurrency3M, () => {
                this.getRewardAni(2);
            });
            this.btnOnUp(this.owner.btnSkin, () => {
            });
        }
        getRewardAni(multiple = 1) {
            GameAni2D.getRewardAni(this.openData.itme.ID, this.openData.itme.number * multiple, () => {
                this.owner.lbCurrencyNum.text = LwgTools.Format.strAddNum(this.owner.lbCurrencyNum.text, 20);
            }, () => {
                this.owner.lbCurrencyNum.text = '0';
                this.openScene(GameSceneName.Start);
            });
        }
    }

    class Resurgence extends LwgScene.SceneBase {
        constructor() {
            super(...arguments);
            this.countDown = 9;
        }
        lwgOnAwake() {
            if (LwgPlatform.type === LwgPlatform.EmType.OPPO) {
                this.owner.btnADNative.visible = true;
                this.owner.btnADGet.centerX = 140;
            }
        }
        lwgOpenAniAfter() {
            LwgTimer.numLoop(1000, 10, this, () => {
                this.countDown -= 1;
                if (this.countDown === -1) {
                    this.countDown = 0;
                    this.evNotify(GameEvent.defeated);
                    this.closeScene();
                }
                this.owner.ftcCountDown.value = this.countDown.toString();
            });
        }
        lwgButton() {
            this.btnOnUpAD(this.owner.btnADGet, () => {
                Role.ins.setState(GameEnum.RoleState.Resurgence, [this.openData.type]);
                this.closeScene();
            });
            this.btnOnUp(this.owner.btnAbandon, () => {
                this.evNotify(GameEvent.defeated);
                this.closeScene();
            });
        }
    }

    class PropTry extends LwgScene.SceneBase {
        lwgOnAwake() {
            if (LwgPlatform.type === LwgPlatform.EmType.OPPO) {
                this.owner.btnADNative.visible = true;
                this.owner.btnADGet.centerX = 140;
            }
            if (GameData.Level.mode === GameEnum.LevelMode.endless) {
                this.owner.lbDescribe.text = '使用后可无敌冲刺5秒';
            }
            else {
                this.owner.lbDescribe.text = '使用后可无敌冲刺5秒';
            }
        }
        lwgButton() {
            this.btnOnUpAD(this.owner.btnADGet, () => {
                this.rule(GameEnum.MoveForwardArgs.sprint);
            });
            this.btnOnUp(this.owner.btnDirect, () => {
                this.rule(GameEnum.MoveForwardArgs.none);
            });
        }
        rule(prop) {
            const openData = {
                sprint: prop,
            };
            if (GameData.Level.mode === GameEnum.LevelMode.common) {
                LwgCurrency.Stamina.addNumDisPlayNode(-5);
            }
            this.openScene(GameSceneName.Levels, openData);
        }
    }

    class Init extends LwgPreLoad.PreLoadBase {
        lwgOnAwake() {
            new LwgInit.InitBase(new LwgPlatform.Init(LwgPlatform.EmType.ExploitNoAD), new LwgControl.Init(30, [6, -1], true, false), new LwgPreLoad.Init(false), new LwgScene.Init({
                sceneScript: {
                    PreLoad: PreLoad,
                    PreLoadCutIn: PreLoadCutIn,
                    Guide: Guide,
                    GameManager: GameManager,
                    DialogHint: DialogHint,
                    Start: Start,
                    Levels: Levels,
                    Defeated: Defeated,
                    Victory: Victory,
                    LuckyWheel: LuckyWheel,
                    BeRewarded: BeRewarded,
                    CheckIn: CheckIn,
                    Lottery: Lottery,
                    ADGetReward: ADGetReward,
                    Skin: Skin,
                    SkinTry: SkinTry,
                    EndLessSettle: EndLessSettle,
                    SpecialAwards: SpecialAwards,
                    Resurgence: Resurgence,
                    PropTry: PropTry,
                },
                sceneOpenAniType: null,
                overlaySceneCloseAnitype: null,
                overlaySceneOpenAnitype: null,
            }), new LwgCurrency.Init({
                Gold: {
                    appearScene: [],
                    initialNum: 0,
                },
                Diamond: {
                    appearScene: [
                        GameSceneName.Start,
                        GameSceneName.Victory,
                        GameSceneName.Lottery,
                        GameSceneName.LuckyWheel,
                        GameSceneName.Defeated,
                        GameSceneName.GameManager,
                        GameSceneName.Skin,
                        GameSceneName.CheckIn,
                        GameSceneName.ADGetReward,
                        GameSceneName.BeRewarded,
                        GameSceneName.SpecialAwards,
                        GameSceneName.EndLessSettle,
                    ],
                    initialNum: 0,
                },
                Stamina: {
                    appearScene: [
                        GameSceneName.Start,
                        GameSceneName.LuckyWheel,
                        GameSceneName.ADGetReward,
                        GameSceneName.BeRewarded,
                        GameSceneName.GameManager,
                    ],
                    initialNum: 50,
                    maxNum: 50,
                    addOnceByTime: 1000 * 60 * 5,
                    addNumByTime: 5,
                    btnAddClick: () => {
                        const data = {
                            type: GameEnum.ResType.Stamina,
                        };
                        LwgScene.openOverlayScene(GameSceneName.ADGetReward, data);
                    }
                }
            }), new LwgCommon.Init({
                ReturnBtn: {
                    appearScene: [],
                },
                BtnGameManager: {
                    appearScene: [
                        GameSceneName.Start,
                        GameSceneName.Levels,
                    ],
                }
            }), new LwgClick.Init(LwgClick.EmEffectType.Largen), new LwgAdaptive.Init(576, 1024));
            this.lodeStart(GameResInit);
        }
        lodeAllComplete() {
            return 2500;
        }
    }

    class RedDotObj extends ui.Views.Base.RedDotObjUI {
        constructor() {
            super();
        }
        onAwake() {
            LwgEvent.offAllCaller(this);
            LwgEvent.register(GameEvent.redDotHint, this, (args) => {
                this.updateHint(args);
            });
        }
        updateHint(args) {
            let bool = false;
            switch (this.parent && this.parent.name) {
                case 'btnSkin':
                    bool = GameData.Skin.getNoCompeletExCheckAndLottery;
                    break;
                case 'btnCheckIn':
                    bool = !GameData.CheckIn.today;
                    break;
                case 'btnLuckyWheel':
                    bool = GameData.LuckyWheel.todayFree;
                    break;
                case 'skill':
                    const view = this.parent;
                    const data = view.dataSource;
                    const consume = GameData.Skill.getCurConsumeByType(data.type);
                    const maxLv = GameData.Skill.getMaxLevelByType(data.type);
                    if (data.level < maxLv) {
                        if (LwgCurrency.Diamond.num >= consume) {
                            bool = true;
                        }
                    }
                    break;
                default:
                    break;
            }
            if (bool) {
                this.aniHint.play(0, true);
                this.visible = true;
            }
            else {
                this.aniHint.stop();
                this.visible = false;
            }
        }
    }

    class SkillUpgradeObj extends ui.Views.SkillUpgradeObjUI {
        constructor() {
            super();
        }
        onAwake() {
            const arr = [];
            for (let index = 0; index < GameData.Skill.getTypeNum; index++) {
                const data = {
                    ID: null,
                    name: null,
                    level: null,
                    type: index,
                    consume: null,
                    addition: null,
                };
                arr.push(data);
            }
            this.list.array = arr;
            this.list.renderHandler = new Laya.Handler(this, this.onlistRender);
        }
        onlistRender(view, index) {
            const data = view.dataSource;
            view.name = 'skill';
            switch (data.type) {
                case GameEnum.SkillType.speed:
                    view.imgName.skin = 'Game/UI/img_text_skill_01.png';
                    view.imgSkillIcon.skin = 'Game/UI/icon_mainui_shengjiicon01.png';
                    break;
                case GameEnum.SkillType.energy:
                    view.imgName.skin = 'Game/UI/img_text_skill_02.png';
                    view.imgSkillIcon.skin = 'Game/UI/icon_mainui_shengjiicon02.png';
                    break;
                case GameEnum.SkillType.reward:
                    view.imgName.skin = 'Game/UI/img_text_skill_03.png';
                    view.imgSkillIcon.skin = 'Game/UI/icon_mainui_shengjiicon03.png';
                    break;
                default:
                    break;
            }
            const lv = GameData.Skill.getCurLevelByType(data.type);
            view.lbLevel.text = '等级' + lv.toString();
            data.level = lv;
            const maxLv = GameData.Skill.getMaxLevelByType(data.type);
            if (data.level >= maxLv) {
                view.ImgMaxLv.visible = true;
                view.imgResIcon.visible = false;
                view.lbConsume.visible = false;
                view.ImgResBoard.visible = false;
            }
            else {
                view.ImgMaxLv.visible = false;
                view.imgResIcon.visible = true;
                view.lbConsume.visible = true;
                view.ImgResBoard.visible = true;
            }
            const consume = GameData.Skill.getCurConsumeByType(data.type);
            view.lbConsume.text = consume.toString();
            data.consume = consume;
            LwgClick.off(view.imgBoard);
            LwgClick.on(LwgClick.EmEffectType.Largen, view.imgBoard, this, null, null, (e, args) => {
                this.onBtnUpgrade(args);
            }, null, [{}, {}, { view: view, data: data }, {}]);
        }
        onBtnUpgrade(args) {
            const maxLv = GameData.Skill.getMaxLevelByType(args.data.type);
            if (args.data.level >= maxLv) {
                LwgDialogue.showTips('等级已满');
            }
            else {
                if (LwgCurrency.Diamond.num >= args.data.consume) {
                    LwgDialogue.showTips('升级成功');
                    GameData.Sound.playSoundByID(8);
                    this.list.refresh();
                    args.data.level++;
                    GameData.Skill.addLevelByType(args.data.type);
                    LwgCurrency.Diamond.subNumDisPlayNode(args.data.consume);
                    args.data.consume = GameData.Skill.getCurConsumeByType(args.data.type);
                }
                else {
                    const data = {
                        type: GameEnum.ResType.Diamond,
                    };
                    LwgScene.openOverlayScene(GameSceneName.ADGetReward, data);
                }
            }
        }
    }

    class GameConfig {
        constructor() {
        }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("script/Game/Views/Base/AnimationObj.ts", AnimationObj);
            reg("script/Game/Views/Base/CloseBtnObj.ts", CloseBtnObj);
            reg("script/Game/Views/Base/Init.ts", Init);
            reg("script/Game/Views/Base/RedDotObj.ts", RedDotObj);
            reg("script/Game/Views/SkillUpgradeObj.ts", SkillUpgradeObj);
        }
    }
    GameConfig.width = 576;
    GameConfig.height = 1024;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "vertical";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "Views/Base/Init.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height, null, Laya.Handler.create(this, this.initMain));
            else {
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
                this.initMain();
            }
        }
        initMain() {
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
