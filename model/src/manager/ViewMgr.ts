import { Enum_viewName } from "../enum/Enum_viewName";

export default class ViewMgr {
    static readonly Instance: ViewMgr = new ViewMgr();
    static view_detailView: Laya.Sprite = null;                       //玩法介绍界面
    static view_menu: Laya.Sprite = null;                             //菜单界面
    static view_box: Laya.Sprite = null;                              //宝箱（复活）界面
    static view_win: Laya.Sprite = null;                              //胜利界面
    static view_fail: Laya.Sprite = null;                             //失败界面
    static view_revival: Laya.Sprite = null;                          //复活界面
    static view_rank: Laya.Sprite = null;                             //排行榜界面
    static view_skin_menu: Laya.Sprite = null;                        //皮肤界面
    static view_regist: Laya.Sprite = null;                           //签到界面
    static view_money: Laya.Sprite = null;                            //货币界面
    static view_turn: Laya.Sprite = null;                             //转盘界面
    static view_freeSkin: Laya.Sprite = null;                         //试用皮肤和获得皮肤界面
    static view_task: Laya.Sprite = null;                             //任务界面
    static view_celebrate: Laya.Sprite = null;                        //恭喜获得界面
    static view_main: Laya.Sprite = null;                             //主界面
    static view_store: Laya.Sprite = null;                            //商店界面
    static view_incomeAdd: Laya.Sprite = null;                        //双倍收益界面
    static view_offline: Laya.Sprite = null;                          //离线奖励界面
    static view_newSkin: Laya.Sprite = null;                          //新皮肤界面
    static view_newSkinReward: Laya.Sprite = null;                    //新皮肤额外奖励界面
    static view_turnView: Laya.Sprite = null;                         //转盘界面
    static view_powerView: Laya.Sprite = null;                        //锤子奖励界面
    static view_giftBoxView: Laya.Sprite = null;                      //抽宝箱界面
    static view_bookView: Laya.Sprite = null;                         //图鉴界面
    // static firstEnterMenuView: boolean = true;                 //是否是第一次进入菜单界面

    /**
     * 加载并打开场景
     * @param viewUrl 场景地址:Enum_viewName 中的枚举类型
     * @param closeOther 是否关闭其他场景，默认为true（可选），【注意】被关闭的场景，如果没有设置autoDestroyAtRemoved=true，则资源可能不能被回收，需要自己手动回收
     * @param param 打开页面的参数，会传递给onOpened方法（可选）
     * @param complete 打开完成回调，返回场景实例（可选）
     */
    static openView(viewUrl: Enum_viewName, closeOther?: boolean, param?: any, complete?: Laya.Handler): void {
        Laya.Scene.open(viewUrl + '.json', closeOther, param, complete);
    }
    
}