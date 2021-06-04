import { Enum_url } from "../enum/Enum_url";
import { Enum_viewName } from "../enum/Enum_viewName";

export default class sceneMgr {
    static readonly Instance: sceneMgr = new sceneMgr();
    
    static common_file = "/Conventional/";

    /**
     * 加载并打开3D场景
     * @param sceneName 场景名字:string 例如：Scene001
     * @param complete 打开完成回调，返回场景实例（可选）
     */
    static openScene(sceneName: string, complete?: Laya.Handler): void {
        Laya.Scene3D.load(Enum_url.url_scene + sceneName + this.common_file + sceneName + ".ls", complete);
    }
    
}